<?php

namespace App\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface AuditoriaServiceInterface
{
    public function registrar(array $datos): object;
    public function listar(array $filtros = []): LengthAwarePaginator;
    public function obtenerPorId(int $id): ?object;
    public function obtenerEstadisticas(array $filtros = []): array;
    public function exportar(array $filtros, string $formato): string;
    public function analizarPatrones(array $filtros = []): array;
    public function obtenerAlertas(array $filtros = []): Collection;
}
