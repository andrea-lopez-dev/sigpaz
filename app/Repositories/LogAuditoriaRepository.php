<?php

namespace App\Repositories;

use App\Contracts\LogRepositoryInterface;
use App\Models\LogAuditoria;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class LogAuditoriaRepository implements LogRepositoryInterface
{
    protected $model;

    public function __construct(LogAuditoria $model)
    {
        $this->model = $model;
    }

    public function save(array $data): object
    {
        return $this->model->create($data);
    }

    public function find(int $id): ?object
    {
        return $this->model->with('usuario')->find($id);
    }

    public function paginate(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        $page = $filters['pagina'] ?? 1;
        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    public function findAll(array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->get();
    }

    public function count(array $filters = []): int
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->count();
    }

    public function getEstadisticasPorAccion(array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->select('accion', DB::raw('count(*) as total'))
            ->groupBy('accion')
            ->orderBy('total', 'desc')
            ->get();
    }

    public function getEstadisticasPorTabla(array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->select('tabla_afectada', DB::raw('count(*) as total'))
            ->groupBy('tabla_afectada')
            ->orderBy('total', 'desc')
            ->limit(10)
            ->get();
    }

    public function getActividadPorHora(array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->select(
                DB::raw("EXTRACT(HOUR FROM fecha) as hora"),
                DB::raw('count(*) as total')
            )
            ->groupBy(DB::raw("EXTRACT(HOUR FROM fecha)"))
            ->orderBy('hora')
            ->get();
    }

    public function getUsuariosActivos(array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->select('usuario_id', DB::raw('count(*) as total'))
            ->whereNotNull('usuario_id')
            ->groupBy('usuario_id')
            ->orderBy('total', 'desc')
            ->limit(10)
            ->get();
    }

    public function getEventosCriticos(array $filters = []): Collection
    {
        $filters['niveles'] = ['ERROR', 'CRITICAL'];
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->orderBy('fecha', 'desc')
            ->limit(50)
            ->get();
    }

    public function buscar(string $termino, array $filters = []): Collection
    {
        $query = $this->applyFilters($this->model->query(), $filters);
        return $query->where('descripcion', 'ILIKE', "%{$termino}%")
            ->orWhere('tabla_afectada', 'ILIKE', "%{$termino}%")
            ->orWhere('accion', 'ILIKE', "%{$termino}%")
            ->orderBy('fecha', 'desc')
            ->limit(50)
            ->get();
    }

    protected function applyFilters($query, array $filters)
    {
        if (!empty($filters['usuario_id'])) {
            $query->where('usuario_id', $filters['usuario_id']);
        }

        if (!empty($filters['acciones']) && is_array($filters['acciones'])) {
            $query->whereIn('accion', $filters['acciones']);
        }

        if (!empty($filters['tabla_afectada'])) {
            $query->where('tabla_afectada', $filters['tabla_afectada']);
        }

        if (!empty($filters['fecha_inicio'])) {
            $query->where('fecha', '>=', $filters['fecha_inicio']);
        }

        if (!empty($filters['fecha_fin'])) {
            $query->where('fecha', '<=', $filters['fecha_fin']);
        }

        if (!empty($filters['niveles']) && is_array($filters['niveles'])) {
            $query->whereIn('nivel', $filters['niveles']);
        }

        if (!empty($filters['nivel'])) {
            $query->where('nivel', $filters['nivel']);
        }

        if (!empty($filters['keyword'])) {
            $query->where('descripcion', 'LIKE', "%{$filters['keyword']}%");
        }

        return $query;
    }
}
