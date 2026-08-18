<?php

namespace App\Repositories;

use App\Interfaces\Repositories\DenunciaRepositoryInterface;
use App\Models\Denuncia;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class DenunciaRepository implements DenunciaRepositoryInterface
{
    public function findById(int $id): ?Denuncia
    {
        return Denuncia::with([
            'persona',
            'tipoConflicto',
            'estadoDenuncia',
            'usuarioCreacion'
        ])->find($id);
    }


    public function create(array $data): Denuncia
    {
        return Denuncia::create($data);
    }

    public function update(int $id, array $data): ?Denuncia
    {
        $denuncia = $this->findById($id);

        if (!$denuncia) {
            return null;
        }

        $denuncia->update($data);
        return $denuncia->fresh();
    }

    public function delete(int $id): bool
    {
        $denuncia = $this->findById($id);

        if (!$denuncia) {
            return false;
        }

        return $denuncia->delete();
    }

   public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
{
    try {
        $query = Denuncia::query();

        // Cargar relaciones básicas
        $query->with([
            'persona:persona_id,nombres,apellidos,numero_documento',
            'estadoDenuncia:estado_denuncia_id,nombre',
            'tipoConflicto:tipo_conflicto_id,nombre'
        ]);

        // Aplicar filtros con verificación de existencia
        if (!empty($filters['codigo_externo'])) {
            $query->where('codigo_externo', 'like', '%' . $filters['codigo_externo'] . '%');
        }

        if (!empty($filters['numero_expediente'])) {
            $query->where('numero_expediente', 'like', '%' . $filters['numero_expediente'] . '%');
        }

        if (!empty($filters['estado_denuncia_id'])) {
            $query->where('estado_denuncia_id', $filters['estado_denuncia_id']);
        }

        if (!empty($filters['tipo_conflicto_id'])) {
            $query->where('tipo_conflicto_id', $filters['tipo_conflicto_id']);
        }

        if (!empty($filters['persona_id'])) {
            $query->where('persona_id', $filters['persona_id']);
        }

        if (!empty($filters['fecha_inicio']) && !empty($filters['fecha_fin'])) {
            $query->whereBetween('fecha_ingreso', [
                $filters['fecha_inicio'],
                $filters['fecha_fin']
            ]);
        }

        // Búsqueda general
        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function($q) use ($search) {
                $q->where('codigo_externo', 'like', "%{$search}%")
                  ->orWhere('numero_expediente', 'like', "%{$search}%")
                  ->orWhere('descripcion', 'like', "%{$search}%")
                  ->orWhereHas('persona', function($q2) use ($search) {
                      $q2->where('nombres', 'like', "%{$search}%")
                         ->orWhere('apellidos', 'like', "%{$search}%")
                         ->orWhere('numero_documento', 'like', "%{$search}%");
                  });
            });
        }

        // Ordenar por fecha descendente por defecto
        $query->orderBy('fecha_ingreso', 'desc');

        \Log::info('🔍 SQL:', ['query' => $query->toSql(), 'bindings' => $query->getBindings()]);

        return $query->paginate($perPage);

    } catch (\Exception $e) {
        \Log::error('❌ Error en paginate:', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
        throw $e;
    }
}

    public function findByCodigoExterno(string $codigo): ?Denuncia
{
    return Denuncia::where('codigo_externo', $codigo)->first();
}

    public function findByExpediente(string $expediente): ?Denuncia
    {
        return Denuncia::where('numero_expediente', $expediente)->first();
    }

    public function getActivas(): Collection
    {
        return Denuncia::whereHas('estadoDenuncia', function($q) {
            $q->whereNotIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA']);
        })->get();
    }

    public function getByEstado(int $estadoId): Collection
    {
        return Denuncia::where('estado_denuncia_id', $estadoId)->get();
    }

    public function getByPersona(int $personaId): Collection
    {
        return Denuncia::where('persona_id', $personaId)->get();
    }

    public function countByEstado(): Collection
    {
        return Denuncia::select('estado_denuncia_id', DB::raw('count(*) as total'))
            ->groupBy('estado_denuncia_id')
            ->with('estadoDenuncia:id,nombre')
            ->get();
    }

    public function countByTipoConflicto(): Collection
    {
        return Denuncia::select('tipo_conflicto_id', DB::raw('count(*) as total'))
            ->groupBy('tipo_conflicto_id')
            ->with('tipoConflicto:id,nombre')
            ->get();
    }


}
