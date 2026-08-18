<?php

namespace App\Repositories;

use App\Models\Cargo;
use App\Interfaces\Repositories\CargoRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class CargoRepository implements CargoRepositoryInterface
{
    protected $model;

    public function __construct(Cargo $model)
    {
        $this->model = $model;
    }

    public function findById(int $id): ?Cargo
    {
        return $this->model->find($id);
    }

    public function all(): Collection
    {
        return $this->model->orderBy('nombre')->get();
    }

    public function create(array $data): Cargo
    {
        return DB::transaction(function () use ($data) {
            return $this->model->create($data);
        });
    }

    public function update(int $id, array $data): bool
    {
        $cargo = $this->findById($id);
        return $cargo ? $cargo->update($data) : false;
    }

    public function delete(int $id): bool
    {
        $cargo = $this->findById($id);

        if (!$cargo || $cargo->personal()->exists()) {
            return false;
        }

        return $cargo->delete();
    }

    public function getActivos(): Collection
    {
        return $this->model->where('activo', true)
            ->orderBy('nombre')
            ->get();
    }

    public function findByName(string $name): ?Cargo
    {
        return $this->model->where('nombre', $name)->first();
    }
}
