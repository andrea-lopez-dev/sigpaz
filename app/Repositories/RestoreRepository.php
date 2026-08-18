<?php

namespace App\Repositories;

use App\Models\Restore;
use Illuminate\Database\Eloquent\Collection;

class RestoreRepository
{
    protected Restore $model;

    public function __construct(Restore $model)
    {
        $this->model = $model;
    }

    public function create(array $data): Restore
    {
        return $this->model->create($data);
    }

    public function findById(int $id): ?Restore
    {
        return $this->model->find($id);
    }

    public function update(int $id, array $data): bool
    {
        $restore = $this->findById($id);
        if (!$restore) {
            return false;
        }
        return $restore->update($data);
    }

    public function findByBackupId(int $backupId): Collection
    {
        return $this->model->where('backup_id', $backupId)
            ->orderBy('fecha', 'desc')
            ->get();
    }

    public function getAll(): Collection
    {
        return $this->model->with('usuario', 'backup')
            ->orderBy('fecha', 'desc')
            ->get();
    }

    public function paginate(int $perPage = 15)
    {
        return $this->model->with('usuario', 'backup')
            ->orderBy('fecha', 'desc')
            ->paginate($perPage);
    }

    public function count(): int
    {
        return $this->model->count();
    }

    public function countSuccessful(): int
    {
        return $this->model->where('resultado', 'EXITOSO')->count();
    }

    public function countFailed(): int
    {
        return $this->model->where('resultado', 'FALLIDO')->count();
    }
}
