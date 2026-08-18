<?php

namespace App\Services\Contracts;

use App\Models\Denuncia;
use Illuminate\Support\Collection;

interface HistorialServiceInterface
{
    public function registrarCreacion(Denuncia $denuncia, int $usuarioId, ?string $observaciones = null): void;
    public function registrarActualizacion(Denuncia $denuncia, int $usuarioId, array $cambios): void;
    public function registrarCambioEstado(Denuncia $denuncia, int $usuarioId, int $estadoAnterior, int $estadoNuevo, ?string $observaciones = null): void;
    public function registrarEliminacion(Denuncia $denuncia, int $usuarioId, ?string $motivo = null): void;
    public function obtenerHistorialPorDenuncia(int $denunciaId): Collection;
    public function obtenerUltimoCambioEstado(int $denunciaId): ?object;

    public function obtenerHistorialFormateado(int $denunciaId): array;
    public function obtenerHistorialPaginado(int $denunciaId, int $perPage = 15): array;
}
