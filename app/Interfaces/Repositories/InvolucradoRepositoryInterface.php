<?php

namespace App\Interfaces\Repositories;

use App\Models\Involucrado;
use Illuminate\Support\Collection;

interface InvolucradoRepositoryInterface
{
    public function findById(int $id): ?Involucrado;
    public function create(array $data): Involucrado;
    public function update(int $id, array $data): ?Involucrado;
    public function delete(int $id): bool;
    public function getByDenuncia(int $denunciaId): Collection;
    public function getByPersona(int $personaId): Collection;
    public function findByDenunciaAndPersona(int $denunciaId, int $personaId): ?Involucrado;
    public function countByDenuncia(int $denunciaId): int;
    public function getRolesByDenuncia(int $denunciaId): Collection;
}
