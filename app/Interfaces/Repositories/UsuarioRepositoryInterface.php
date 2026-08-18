<?php

namespace App\Interfaces\Repositories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface UsuarioRepositoryInterface
{
    public function findById(int $id): ?Usuario;
    public function findByEmail(string $email): ?Usuario;
    public function findByUsername(string $username): ?Usuario;
    public function findByPersonalId(int $personalId): ?Usuario;
    public function all(): Collection;
    public function paginate(int $perPage = 15): LengthAwarePaginator;
    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator;
    public function create(array $data): Usuario;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
    public function incrementarIntentosFallidos(int $id): bool;
    public function resetearIntentosFallidos(int $id): bool;
    public function bloquearUsuario(int $id): bool;
    public function desbloquearUsuario(int $id): bool;
    public function actualizarUltimoAcceso(int $id): bool;
    public function verificarUsuarioDuplicado(array $data): bool;
}
