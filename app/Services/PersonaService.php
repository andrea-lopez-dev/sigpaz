<?php

namespace App\Services;

use App\Models\Persona;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;

class PersonaService
{
    public function listarPersonas(array $filtros)
    {
        $query = Persona::with(['tipoDocumento', 'sexo', 'estadoCivil', 'tipoVinculo']);

        // Aplicar filtros
        if (!empty($filtros['numero_documento'])) {
            $query->where('numero_documento', 'like', "%{$filtros['numero_documento']}%");
        }

        if (!empty($filtros['nombres'])) {
            $query->where('nombres', 'like', "%{$filtros['nombres']}%");
        }

        if (!empty($filtros['apellidos'])) {
            $query->where('apellidos', 'like', "%{$filtros['apellidos']}%");
        }

        if (!empty($filtros['departamento'])) {
            $query->where('departamento', 'like', "%{$filtros['departamento']}%");
        }

        if (!empty($filtros['discapacidad'])) {
            if ($filtros['discapacidad'] === 'SI') {
                $query->whereNotNull('discapacidad')->where('discapacidad', '!=', '');
            } elseif ($filtros['discapacidad'] === 'NO') {
                $query->where(function($q) {
                    $q->whereNull('discapacidad')->orWhere('discapacidad', '');
                });
            }
        }

        // Paginación
        $perPage = $filtros['per_page'] ?? 10;
        $page = $filtros['page'] ?? 1;

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    public function crearPersona(array $datos, ?UploadedFile $foto = null): Persona
    {
        DB::beginTransaction();

        try {
            // Manejar foto
            if ($foto && $foto->isValid()) {
                $nombreArchivo = 'foto_' . time() . '.' . $foto->getClientOriginalExtension();
                $ruta = $foto->storeAs('public/fotos', $nombreArchivo);
                $datos['foto'] = Storage::url($ruta);
            }

            // Crear persona
            $persona = Persona::create($datos);

            DB::commit();
            return $persona;

        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function obtenerPersona(int $id): ?Persona
    {
        return Persona::with(['tipoDocumento', 'sexo', 'estadoCivil', 'tipoVinculo'])->find($id);
    }

    public function actualizarPersona(int $id, array $datos, ?UploadedFile $foto = null): Persona
    {
        DB::beginTransaction();

        try {
            $persona = Persona::findOrFail($id);

            // Manejar foto
            if ($foto && $foto->isValid()) {
                // Eliminar foto anterior si existe
                if ($persona->foto) {
                    $this->eliminarArchivo($persona->foto);
                }

                $nombreArchivo = 'foto_' . $id . '_' . time() . '.' . $foto->getClientOriginalExtension();
                $ruta = $foto->storeAs('public/fotos', $nombreArchivo);
                $datos['foto'] = Storage::url($ruta);
            }

            $persona->update($datos);

            DB::commit();
            return $persona->fresh();

        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function eliminarPersona(int $id): bool
    {
        DB::beginTransaction();

        try {
            $persona = Persona::findOrFail($id);

            // Eliminar foto si existe
            if ($persona->foto) {
                $this->eliminarArchivo($persona->foto);
            }

            // Eliminar firma si existe
            if ($persona->hash_firma) {
                $this->eliminarFirma($persona->hash_firma);
            }

            $resultado = $persona->delete();

            DB::commit();
            return $resultado;

        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    private function eliminarArchivo(?string $url): void
    {
        if (!$url) return;

        // Convertir URL a ruta de almacenamiento
        $path = str_replace(Storage::url(''), '', $url);
        if (Storage::exists($path)) {
            Storage::delete($path);
        }
    }

    private function eliminarFirma(?string $url): void
    {
        $this->eliminarArchivo($url);
    }



    /**
     * Reporte por sexo/género
     */
    public function reportePorSexo(): array
    {
        return Persona::select('genero_id', DB::raw('COUNT(*) as total'))
            ->with('genero')
            ->groupBy('genero_id')
            ->get()
            ->map(function($item) {
                return [
                    'sexo' => $item->genero?->nombre ?? 'No especificado',
                    'total' => $item->total
                ];
            })
            ->toArray();
}

/**
 * Verificar si una persona puede ser eliminada
 */
public function puedeEliminar(int $id): bool
{
    $persona = $this->obtenerPersona($id);
    if (!$persona) return false;

    // Verificar si tiene relaciones
    $tieneDenuncias = $persona->denuncias()->exists();
    $tienePersonal = $persona->personal()->exists();
    $tieneInvolucrados = $persona->involucrados()->exists();

    return !($tieneDenuncias || $tienePersonal || $tieneInvolucrados);
}

/**
 * Buscar personas por término
 */
     public function buscarPersonas(string $termino): Collection
    {
        return Persona::where('nombres', 'ILIKE', "%{$termino}%")
            ->orWhere('apellidos', 'ILIKE', "%{$termino}%")
            ->orWhere('numero_documento', 'ILIKE', "%{$termino}%")
            ->limit(10)
            ->get();
    }

/**
 * Reporte por tipo de documento
 */
public function reportePorTipoDocumento(): array
{
    return Persona::select('tipo_documento_id', DB::raw('COUNT(*) as total'))
        ->with('tipoDocumento')
        ->groupBy('tipo_documento_id')
        ->get()
        ->map(fn($item) => [
            'tipo_documento' => $item->tipoDocumento?->nombre ?? 'N/A',
            'total' => $item->total
        ])
        ->toArray();
}

/**
 * Reporte por estado civil
 */
public function reportePorEstadoCivil(): array
{
    return Persona::select('estado_civil_id', DB::raw('COUNT(*) as total'))
        ->with('estadoCivil')
        ->groupBy('estado_civil_id')
        ->get()
        ->map(fn($item) => [
            'estado_civil' => $item->estadoCivil?->nombre ?? 'N/A',
            'total' => $item->total
        ])
        ->toArray();
}

/**
 * Reporte completo
 */
public function reporteCompleto(): array
{
    return [
        'por_edad' => $this->reportePorEdad(),
        'por_genero' => $this->reportePorGenero(),
        'por_departamento' => $this->reportePorDepartamento(),
        'por_discapacidad' => $this->reporteDiscapacidad(),
        'por_tipo_documento' => $this->reportePorTipoDocumento(),
        'por_estado_civil' => $this->reportePorEstadoCivil(),
        'total' => Persona::count()
    ];
}

/**
 * Reporte por género
 */
public function reportePorGenero(): array
{
    return Persona::select('genero_id', DB::raw('COUNT(*) as total'))
        ->with('genero')
        ->groupBy('genero_id')
        ->get()
        ->map(fn($item) => [
            'genero' => $item->genero?->nombre ?? 'No especificado',
            'total' => $item->total
        ])
        ->toArray();
}

/**
 * Reporte por edad
 */
public function reportePorEdad(): array
{
    return Persona::select(
        DB::raw("CASE
            WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) < 18 THEN '0-17'
            WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 18 AND 30 THEN '18-30'
            WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 31 AND 50 THEN '31-50'
            WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 51 AND 65 THEN '51-65'
            ELSE '65+'
        END as rango"),
        DB::raw('COUNT(*) as total')
    )
    ->whereNotNull('fecha_nacimiento')
    ->groupBy('rango')
    ->get()
    ->toArray();
}

/**
 * Reporte por departamento
 */
public function reportePorDepartamento(): array
{
    return Persona::select('departamento', DB::raw('COUNT(*) as total'))
        ->whereNotNull('departamento')
        ->where('departamento', '!=', '')
        ->groupBy('departamento')
        ->orderBy('total', 'desc')
        ->get()
        ->toArray();
}

/**
 * Reporte por discapacidad
 */
public function reporteDiscapacidad(): array
{
    $conDiscapacidad = Persona::whereNotNull('discapacidad')
        ->where('discapacidad', '!=', '')
        ->where('discapacidad', '!=', 'NO')
        ->count();

    return [
        ['tipo' => 'Con discapacidad', 'total' => $conDiscapacidad],
        ['tipo' => 'Sin discapacidad', 'total' => Persona::count() - $conDiscapacidad]
    ];
}

/**
 * Obtener persona con relaciones
 */
public function obtenerPersonaConRelaciones(int $id): ?Persona
{
    return Persona::with([
        'tipoDocumento',
        'genero',
        'estadoCivil',
        'tipoVinculo'
    ])->find($id);
}
    public function validarIdentidad(string $documento): bool
    {
        return !empty($documento);
    }

    private function procesarFoto(UploadedFile $foto): string
    {
        // Validar que sea una imagen
        if (!$foto->isValid() || !str_starts_with($foto->getMimeType(), 'image/')) {
            throw new \Exception('El archivo debe ser una imagen válida');
        }

        // Leer el contenido del archivo
        return file_get_contents($foto->getRealPath());
    }
}
