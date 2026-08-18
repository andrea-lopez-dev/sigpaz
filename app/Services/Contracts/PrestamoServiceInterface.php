<?php

namespace App\Services\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;

interface PrestamoServiceInterface
{
    public function listarPrestamos(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function obtenerPrestamo(int $id): ?object;
    public function crearPrestamo(array $data): object;
    public function actualizarPrestamo(int $id, array $data): object;
    public function eliminarPrestamo(int $id): bool;
    public function registrarDevolucion(int $id, array $data): object;
    public function obtenerEstadisticas(): array;
    public function obtenerPrestamosActivos(): array;
    public function obtenerPrestamosRetrasados(): array;
    public function obtenerHistorial(): array;
    public function obtenerDenunciasDisponibles(): array;
    public function obtenerPersonalDisponible(): array;
    public function verificarDisponibilidad(int $denunciaId): bool;
    public function exportarExcel(array $filters = []): string;
    public function obtenerDenunciaCompleta(int $denunciaId): object;
}
