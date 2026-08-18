<?php

namespace App\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface LogRepositoryInterface
{
    public function save(array $data): object;
    public function find(int $id): ?object;
    public function paginate(array $filters = [], int $perPage = 15): LengthAwarePaginator;
    public function findAll(array $filters = []): Collection;
    public function count(array $filters = []): int;
    public function getEstadisticasPorAccion(array $filters = []): Collection;
    public function getEstadisticasPorTabla(array $filters = []): Collection;
    public function getActividadPorHora(array $filters = []): Collection;
    public function getUsuariosActivos(array $filters = []): Collection;
    public function getEventosCriticos(array $filters = []): Collection;
    public function buscar(string $termino, array $filters = []): Collection;
}
