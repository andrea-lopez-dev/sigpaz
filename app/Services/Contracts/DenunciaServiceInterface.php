<?php

namespace App\Services\Contracts;

use App\DTOs\Denuncia\CrearDenunciaDTO;
use App\DTOs\Denuncia\ActualizarDenunciaDTO;
use App\DTOs\Denuncia\DenunciaResponseDTO;
use App\Models\Denuncia;
use Illuminate\Pagination\LengthAwarePaginator;

interface DenunciaServiceInterface
{
    public function crear(CrearDenunciaDTO $dto): DenunciaResponseDTO;
    public function actualizar(int $id, ActualizarDenunciaDTO $dto): DenunciaResponseDTO;
    public function eliminar(int $id): bool;
    public function obtenerModeloPorId(int $id): ?Denuncia;
    public function obtenerPorId(int $id): DenunciaResponseDTO;
    public function listar(array $filtros, int $perPage = 15): LengthAwarePaginator;
    public function cambiarEstado(int $id, int $nuevoEstadoId, ?string $observaciones = null): DenunciaResponseDTO;
    public function agregarInvolucrado(int $denunciaId, int $personaId, string $rol, ?string $observaciones = null): DenunciaResponseDTO;
    public function validarDenunciaActiva(int $id): bool;
    public function puedeEditar(int $id): bool;
    public function generarCodigoUnico(): string;
}
