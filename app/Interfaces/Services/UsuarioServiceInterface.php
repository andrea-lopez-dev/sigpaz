<?php
namespace App\Interfaces\Services;

use App\DTOs\Usuario\CrearUsuarioDTO;
use App\DTOs\Usuario\ActualizarUsuarioDTO;
use App\DTOs\Usuario\AsignarRolDTO;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;

interface UsuarioServiceInterface
{
    public function listarUsuarios(array $filtros = []): LengthAwarePaginator;
    public function obtenerUsuario(int $id): JsonResponse;  // ← Mantiene JsonResponse
    public function crearUsuario(CrearUsuarioDTO $dto): JsonResponse;  // ← Mantiene JsonResponse
    public function actualizarUsuario(int $id, ActualizarUsuarioDTO $dto): JsonResponse;  // ← Mantiene JsonResponse
    public function eliminarUsuario(int $id): JsonResponse;  // ← Mantiene JsonResponse
    public function asignarRol(AsignarRolDTO $dto): JsonResponse;
    public function cambiarPassword(int $id, array $data): JsonResponse;
    public function desbloquearUsuario(int $id): JsonResponse;
    public function cambiarEstado(int $id, bool $activo): JsonResponse;
    public function verificarDuplicidad(array $datos): bool;
}
