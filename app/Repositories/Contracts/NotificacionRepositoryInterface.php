<?php

namespace App\Repositories\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface NotificacionRepositoryInterface
{
    public function findAll(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function findById(int $id): ?object;
    public function create(array $data): object;
    public function update(int $id, array $data): object;
    public function delete(int $id): bool;
    public function cancel(int $id, string $motivo): bool;
    public function getEstadisticas(array $filters = []): array;
    public function getTiposNotificacion(): Collection;
    public function getDenunciasDisponibles(): Collection;
    public function exportarExcel(array $filters = []): string;
    public function generarConstancia(int $id): array;
    public function exportarExcelIndividual(int $id): string;
}
