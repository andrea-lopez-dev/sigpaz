<?php

namespace App\Services\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;

interface NotificacionServiceInterface
{
    public function listarNotificaciones(int $perPage = 15, array $filters = []): LengthAwarePaginator;
    public function obtenerNotificacion(int $id): ?object;
    public function crearNotificacion(array $data): object;
    public function actualizarNotificacion(int $id, array $data): object;
    public function cancelarNotificacion(int $id, string $motivo): bool;
    public function obtenerEstadisticas(array $filters = []): array;
    public function obtenerTiposNotificacion(): array;
    public function obtenerDenunciasDisponibles(): array;
    public function exportarReporteExcel(array $filters = []): string;
    public function generarConstancia(int $id): array;
    public function obtenerReporteDetallado(array $filters): array;
    public function exportarExcelIndividual(int $id): string;
    public function exportarReporteCompletoPDF(array $filters): string;
    public function enviarReportePorCorreo(array $filters, string $email): void;
}

