<?php

namespace App\Repositories\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface PrestamoRepositoryInterface
{
    public function findAll(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function findById(int $id): ?object;
    public function create(array $data): object;
    public function update(int $id, array $data): object;
    public function delete(int $id): bool;
    public function registrarDevolucion(int $id, array $data): object;
    public function getEstadisticas(): array;
    public function getPrestamosActivos(): Collection;
    public function getPrestamosRetrasados(): Collection;
    public function getHistorial(): Collection;
    public function getDenunciasDisponibles(): Collection;
    public function getPersonalDisponible(): Collection;
    public function verificarDisponibilidad(int $denunciaId): bool;
}
