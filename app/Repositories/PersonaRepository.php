<?php

namespace App\Repositories;

use App\Models\Persona;
use App\Interfaces\Repositories\PersonaRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;

class PersonaRepository implements PersonaRepositoryInterface
{
    public function findById(int $id): ?Persona
    {
        // TEMPORALMENTE: quita todas las relaciones que puedan causar problemas
        return Persona::find($id);

        // Si necesitas algunas relaciones, puedes cargar solo 'personal' que es seguro
        // return Persona::with(['personal'])->find($id);
    }

    public function findByDocumento(int $tipoDocumentoId, string $numeroDocumento): ?Persona
    {
        return Persona::where('tipo_documento_id', $tipoDocumentoId)
                    ->where('numero_documento', $numeroDocumento)
                    ->first();
    }

    public function all(): Collection
    {
        // Temporalmente, quita las relaciones
        return Persona::orderBy('fecha_creacion', 'desc')
                    ->get();

        // Si necesitas tipoDocumento, puedes intentar cargarlo después de crear la persona
        // $personas = Persona::orderBy('fecha_creacion', 'desc')->get();
        // return $personas;
    }

public function paginate($perPage = 15, array $filtros = []): LengthAwarePaginator
{
    $query = Persona::query();

    // Aplicar filtros con LIKE
    if (!empty($filtros['numero_documento'])) {
        $query->where('numero_documento', 'ILIKE', '%' . $filtros['numero_documento'] . '%');
    }

    if (!empty($filtros['nombres'])) {
        $query->where('nombres', 'ILIKE', '%' . $filtros['nombres'] . '%');
    }

    if (!empty($filtros['apellidos'])) {
        $query->where('apellidos', 'ILIKE', '%' . $filtros['apellidos'] . '%');
    }

    if (!empty($filtros['departamento'])) {
        $query->where('departamento', 'ILIKE', '%' . $filtros['departamento'] . '%');
    }

    if (!empty($filtros['discapacidad'])) {
        if ($filtros['discapacidad'] === 'SI') {
            $query->whereNotNull('discapacidad')->where('discapacidad', '!=', '');
        } elseif ($filtros['discapacidad'] === 'NO') {
            $query->whereNull('discapacidad')->orWhere('discapacidad', '');
        }
    }

    return $query->paginate($perPage);
}
    // El resto de métodos igual...
    public function create(array $data): Persona
    {
        return DB::transaction(function () use ($data) {
            // Cifrar datos sensibles
            $camposCifrables = [
                'direccion_cifrada',
                'telefono_fijo_cifrado',
                'telefono_movil_cifrado',
                'correo_electronico_cifrado',
                'correo_alternativo_cifrado',
                'telefono_emergencia_cifrado',
                'codigo_qr',
                'foto_cifrada'
            ];

            foreach ($camposCifrables as $campo) {
                if (!empty($data[$campo])) {
                    $data[$campo] = Crypt::encrypt($data[$campo]);
                }
            }

            return Persona::create($data);
        });
    }

    public function update(int $id, array $data): bool
    {
        $persona = $this->findById($id);

        if (!$persona) {
            return false;
        }

        $data['fecha_actualizacion'] = now();
        return $persona->update($data);
    }

   public function delete(int $id): bool
{
    $persona = $this->findById($id);

    if (!$persona) {
        return false;
    }

    return $persona->delete();
}

    public function verificarDuplicado(array $data): bool
    {
        return Persona::where('tipo_documento_id', $data['tipo_documento_id'])
                    ->where('numero_documento', $data['numero_documento'])
                    ->exists();
    }

    public function buscarPorNombres(string $nombres): Collection
    {
        return Persona::where('nombres', 'ilike', "%{$nombres}%")
                    ->orWhere('apellidos', 'ilike', "%{$nombres}%")
                    ->limit(10)
                    ->get();
    }

    public function guardarFirma(int $id, string $firma): bool
{
    $persona = $this->findById($id);

    if (!$persona) {
        return false;
    }

    $persona->firma_digital = $firma;
    return $persona->save();
}
public function findByNumeroDocumento(string $numero_documento)
{
    return Persona::where('numero_documento', $numero_documento)->first();
}
public function buscarPorTermino(string $termino, bool $activos = true)
{
    \Log::info('🔍 Repositorio - Buscando por término:', ['termino' => $termino]);

    $query = Persona::query();

    // Buscar en múltiples campos con LIKE (para PostgreSQL)
    $query->where(function($q) use ($termino) {
        $q->where('nombres', 'ILIKE', '%' . $termino . '%')
          ->orWhere('apellidos', 'ILIKE', '%' . $termino . '%')
          ->orWhere('numero_documento', 'ILIKE', '%' . $termino . '%')
          ->orWhere('correo_electronico_cifrado', 'ILIKE', '%' . $termino . '%');
    });

    // Si es MySQL, usa LIKE en lugar de ILIKE
    // $q->where('nombres', 'LIKE', '%' . $termino . '%')

    // NO filtrar por activo para pruebas
    // if ($activos) {
    //     $query->where('activo', true);
    // }

    $resultados = $query->limit(20)->get();

    \Log::info('✅ Repositorio - Resultados encontrados:', [
        'count' => $resultados->count(),
        'sql' => $query->toSql(),
        'bindings' => $query->getBindings()
    ]);

    return $resultados;
}
}
