<?php

namespace App\Interfaces\Repositories;

use App\Models\Conciliacion;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface ConciliacionRepositoryInterface
{
    public function findById(int $id): ?Conciliacion;
    public function findByIdWithVotos(int $id): ?Conciliacion;
    public function findByDenunciaId(int $denunciaId): ?Conciliacion;
    public function all(): Collection;
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function create(array $data): Conciliacion;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
    public function getByEstado(string $estado): Collection;
    public function getActivas(): Collection;
    public function getCompletadas(): Collection;
    public function getEstadisticas(): array;
    public function denunciaTieneConciliacion(int $denunciaId): bool;
    public function search(array $params): LengthAwarePaginator;
}
