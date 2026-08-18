<?php

namespace App\Interfaces\Repositories;

use App\Models\Denuncia;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface DenunciaRepositoryInterface
{
    public function findById(int $id): ?Denuncia;
    public function create(array $data): Denuncia;
    public function update(int $id, array $data): ?Denuncia;
    public function delete(int $id): bool;
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function findByCodigoExterno(string $codigo): ?Denuncia;
    public function findByExpediente(string $expediente): ?Denuncia;
    public function getActivas(): Collection;
    public function getByEstado(int $estadoId): Collection;
    public function getByPersona(int $personaId): Collection;
    public function countByEstado(): Collection;
    public function countByTipoConflicto(): Collection;
}
