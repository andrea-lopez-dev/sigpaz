<?php

namespace App\Interfaces\Repositories;

use App\Models\Cargo;
use Illuminate\Database\Eloquent\Collection;

interface CargoRepositoryInterface
{
    public function findById(int $id): ?Cargo;
    public function all(): Collection;
    public function create(array $data): Cargo;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
    public function getActivos(): Collection;
    public function findByName(string $name): ?Cargo;
}
