<?php

namespace App\Repositories;

use App\Models\Personal;
use App\Models\Persona;
use App\Helpers\BooleanHelper;
use App\Interfaces\Repositories\PersonalRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PersonalRepository implements PersonalRepositoryInterface
{
    protected $model;

    public function __construct(Personal $model)
    {
        $this->model = $model;
    }

    public function findById(int $id): ?Personal
    {
        return $this->model->with(['persona', 'cargo', 'usuario'])->find($id);
    }

    public function findByPersonaId(int $personaId): ?Personal
    {
        return $this->model->where('persona_id', $personaId)->first();
    }

    public function all(): Collection
    {
        return $this->model->with(['persona', 'cargo'])->orderBy('fecha_creacion', 'desc')->get();
    }

    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->with(['persona', 'cargo']);

    if (isset($filters['activo'])) {
            $isActive = filter_var($filters['activo'], FILTER_VALIDATE_BOOLEAN);

            $query->whereRaw('activo = ' . ($isActive ? 'true' : 'false'));
        }


        if (!empty($filters['cargo_id'])) {
            $query->where('cargo_id', $filters['cargo_id']);
        }

        if (!empty($filters['fecha_desde'])) {
            $query->whereDate('fecha_ingreso', '>=', $filters['fecha_desde']);
        }

        if (!empty($filters['fecha_hasta'])) {
            $query->whereDate('fecha_ingreso', '<=', $filters['fecha_hasta']);
        }

        // Búsqueda por nombre de persona (relación)
        if (!empty($filters['search'])) {
            $query->whereHas('persona', function($q) use ($filters) {
                $q->where('nombres', 'ILIKE', "%{$filters['search']}%")
                  ->orWhere('apellidos', 'ILIKE', "%{$filters['search']}%")
                  ->orWhere('numero_documento', 'ILIKE', "%{$filters['search']}%");
            });
        }

        return $query->orderBy('fecha_creacion', 'desc')->paginate($perPage);
    }

public function create(array $data): Personal
{
           return DB::transaction(function () use ($data) {
            $data['fecha_creacion'] = now();
            $data['usuario_creacion_id'] = auth()->id();

            // ✅ CORREGIDO: Solo convertir a boolean
            if (isset($data['activo'])) {
                $data['activo'] = filter_var($data['activo'], FILTER_VALIDATE_BOOLEAN);
            } else {
                $data['activo'] = true;
            }

            // ✅ NO agregar comillas - El modelo se encarga
            Log::info('🚀 Insertando personal:', [
                'activo' => $data['activo'],
                'fuente_registro' => $data['fuente_registro'] ?? 'SISTEMA',
                'observaciones' => $data['observaciones'] ?? null
            ]);

            return $this->model->create($data);
        });
    }

public function update(int $id, array $data): bool
{
    $personal = $this->findById($id);

    if (!$personal) {
        return false;
    }

    $data['fecha_actualizacion'] = now();
    $data['usuario_actualizacion_id'] = auth()->id();

    // ✅ CORRECCIÓN: Convertir activo a boolean
    if (isset($data['activo'])) {
        $data['activo'] = filter_var($data['activo'], FILTER_VALIDATE_BOOLEAN);
    }

    // ✅ Asegurar que fuente_registro sea string
    if (isset($data['fuente_registro'])) {
        $data['fuente_registro'] = (string) $data['fuente_registro'];
    }

    // ✅ Asegurar que observaciones sea string o null
    if (isset($data['observaciones'])) {
        $data['observaciones'] = (string) $data['observaciones'];
    }

    return $personal->update($data);
}

    public function delete(int $id): bool
    {
        $personal = $this->findById($id);
        return $personal ? $personal->delete() : false;
    }

   public function activar(int $id): bool
{
    $personal = $this->findById($id);

    if (!$personal) {
        return false;
    }

     return $personal->update([
        'activo' => BooleanHelper::toDBRaw(true),
            'fecha_actualizacion' => now(),
            'usuario_actualizacion_id' => auth()->id()
    ]);
}

public function desactivar(int $id): bool
{

    try {
        \Log::info('🔧 Desactivando personal ID: ' . $id);

    $personal = $this->findById($id);

      \Log::info('✅ Personal desactivado:', [
            'id' => $personal->personal_id,
            'activo' => $personal->activo
        ]);

    if (!$personal) {
        return false;
    }

      } catch (\Exception $e) {
        \Log::error('❌ Error desactivando personal:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

    return $personal->update([
         'activo' => BooleanHelper::toDBRaw(false),
            'fecha_actualizacion' => now(),
            'usuario_actualizacion_id' => auth()->id()
    ]);
}
}

  public function getActivos(): Collection
{
    Log::info('📋 PersonalRepository@getActivos - Buscando personal activo');
       $result = $this->model->whereRaw('activo = true')  // ← Simple
        ->with(['persona', 'cargo'])
        ->orderBy('fecha_ingreso', 'desc')
        ->get();

 Log::info('✅ Resultados getActivos:', ['count' => $result->count()]);
  return $result;
}

public function getByCargo(int $cargoId): Collection
{
     return $this->model->where('cargo_id', $cargoId)
        ->whereRaw('activo = true')  // ← Simple
        ->with('persona')
        ->get();
}

    /**
     * ✅ Buscar personas disponibles para crear personal
     */
   public function findPersonasDisponiblesParaPersonal(string $searchTerm = '', int $limit = 50): Collection
{
    Log::info('🔍 [PersonalRepository] Buscando personas disponibles:', [
        'searchTerm' => $searchTerm
    ]);

           $query = Persona::query()
        ->whereRaw('activo = true')  // ← Así funciona en PostgreSQL
        ->whereDoesntHave('personal')
        ->with(['tipoDocumento']);


    if (!empty($searchTerm) && strlen($searchTerm) >= 2) {
        $query->where(function($q) use ($searchTerm) {
            $q->where('nombres', 'ILIKE', "%{$searchTerm}%")
              ->orWhere('apellidos', 'ILIKE', "%{$searchTerm}%")
              ->orWhere('numero_documento', 'ILIKE', "%{$searchTerm}%");
        });
    }

    return $query->orderBy('nombres')
                ->orderBy('apellidos')
                ->limit($limit)
                ->get(['persona_id', 'nombres', 'apellidos', 'numero_documento', 'foto_cifrada']);
}

    /**
     * ✅ Búsqueda avanzada
     */
    public function search(array $params): LengthAwarePaginator
    {
        $query = $this->model->with(['persona', 'cargo']);

        if (!empty($params['search'])) {
            $query->whereHas('persona', function($q) use ($params) {
                $q->where('nombres', 'ILIKE', "%{$params['search']}%")
                  ->orWhere('apellidos', 'ILIKE', "%{$params['search']}%")
                  ->orWhere('numero_documento', 'ILIKE', "%{$params['search']}%");
            });
        }

        if (!empty($params['cargo_id'])) {
            $query->where('cargo_id', $params['cargo_id']);
        }
  if (isset($params['activo'])) {
        $activo = filter_var($params['activo'], FILTER_VALIDATE_BOOLEAN);

        $query->whereRaw('activo = ?', [$activo]);
    }

        if (!empty($params['fecha_desde'])) {
            $query->whereDate('fecha_ingreso', '>=', $params['fecha_desde']);
        }

        if (!empty($params['fecha_hasta'])) {
            $query->whereDate('fecha_ingreso', '<=', $params['fecha_hasta']);
        }

        $perPage = $params['per_page'] ?? 15;

        return $query->orderBy('fecha_creacion', 'desc')->paginate($perPage);
    }

    /**
     * ✅ Verificar si una persona ya tiene personal
     */
    public function personaTienePersonal(int $personaId): bool
    {
        return $this->model->where('persona_id', $personaId)->exists();
    }

    public function getUltimosIngresos(int $limit = 5): Collection
{
    return $this->model->with(['persona', 'cargo'])
        ->orderBy('fecha_creacion', 'desc')
        ->limit($limit)
        ->get();
}
}
