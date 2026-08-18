<?php

namespace App\Interfaces\Services;

use App\DTOs\Auth\LoginDTO;
use App\DTOs\Auth\RegistroUsuarioDTO;
use App\DTOs\Auth\CambioContrasenaDTO;
use App\DTOs\Auth\PreguntaSeguridadDTO;
use Illuminate\Http\JsonResponse;

interface AuthServiceInterface
{
    public function login(LoginDTO $dto): JsonResponse;
    public function registro(RegistroUsuarioDTO $dto): JsonResponse;
    public function logout(): JsonResponse;
    public function cambiarContrasena(CambioContrasenaDTO $dto): JsonResponse;
     public function validarPreguntasSeguridad(PreguntaSeguridadDTO $dto): JsonResponse;
    public function generarTokenResetPassword(string $email): ?string;
    public function resetPassword(string $token, string $newPassword): bool;
    public function generarTokenDefinitivo(int $usuarioId): JsonResponse;
    public function verificarSesionActiva(): JsonResponse;
    public function refrescarToken(): JsonResponse;
}
