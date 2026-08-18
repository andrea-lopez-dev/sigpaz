<?php

namespace App\Repositories\Contracts;

use App\Models\Persona;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface PersonaRepositoryInterface
{
    public function crear(array $datos): Persona;
    public function actualizar(int $id, array $datos): Persona;
    public function eliminar(int $id): bool;
    public function obtenerPorId(int $id): ?Persona;
    public function listarActivos(array $filtros = []): LengthAwarePaginator;
    public function buscarPorDocumento(string $documento): Collection;
    public function estadisticasPorSexo(): array;
    public function estadisticasPorDepartamento(): array;
    public function estadisticasPorEdad(): array;
    public function estadisticasDiscapacidad(): array;
}
