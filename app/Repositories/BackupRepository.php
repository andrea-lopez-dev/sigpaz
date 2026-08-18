<?php

namespace App\Repositories;

use App\Models\Backup;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class BackupRepository
{
    protected Backup $model;

    public function __construct(Backup $model)
    {
        $this->model = $model;
    }

    public function create(array $data): Backup
    {
        return $this->model->create($data);
    }

    public function findById(int $id): ?Backup
    {
        return $this->model->find($id);
    }

    public function update(int $id, array $data): bool
    {
        $backup = $this->findById($id);
        if (!$backup) {
            return false;
        }
        return $backup->update($data);
    }

    public function delete(int $id): bool
    {
        $backup = $this->findById($id);
        if (!$backup) {
            return false;
        }
        return $backup->delete();
    }

    public function getAll(): Collection
    {
        return $this->model->with('usuario')
            ->orderBy('fecha', 'desc')
            ->get();
    }

    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('usuario')
            ->orderBy('fecha', 'desc')
            ->paginate($perPage);
    }

    public function findByFilters(array $filters): Collection
    {
        $query = $this->model->query();

        if (isset($filters['origen_nube'])) {
            $query->where('origen_nube', $filters['origen_nube']);
        }

        if (isset($filters['usuario_id'])) {
            $query->where('usuario_id', $filters['usuario_id']);
        }

        if (isset($filters['fecha_desde'])) {
            $query->whereDate('fecha', '>=', $filters['fecha_desde']);
        }

        if (isset($filters['fecha_hasta'])) {
            $query->whereDate('fecha', '<=', $filters['fecha_hasta']);
        }

        if (isset($filters['estado'])) {
            $query->where('estado', $filters['estado']);
        }

        return $query->orderBy('fecha', 'desc')->get();
    }

    public function updateIntegrity(int $id, bool $verified): bool
    {
        return $this->model->where('backup_id', $id)
            ->update(['integridad_verificada' => $verified]);
    }

    public function getExpiredBackups(int $retentionDays): Collection
    {
        $cutoffDate = now()->subDays($retentionDays);

        return $this->model->where('fecha', '<', $cutoffDate)
            ->where('estado', 'completado')
            ->get();
    }

    public function count(): int
    {
        return $this->model->count();
    }

    public function sum(string $column): float
    {
        return (float) $this->model->sum($column);
    }

    public function groupBy(string $column): array
    {
        return $this->model->groupBy($column)
            ->select($column, \DB::raw('count(*) as total'))
            ->get()
            ->toArray();
    }

    public function getSuccessRate(): float
    {
        $total = $this->model->count();
        if ($total === 0) {
            return 100;
        }

        $successful = $this->model->where('estado', 'completado')->count();
        return round(($successful / $total) * 100, 2);
    }

    public function search(string $query): Collection
    {
        return $this->model->where('descripcion', 'LIKE', "%{$query}%")
            ->orWhere('id_backup', 'LIKE', "%{$query}%")
            ->orderBy('fecha', 'desc')
            ->get();
    }
}
