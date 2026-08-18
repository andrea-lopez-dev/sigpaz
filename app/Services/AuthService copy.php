<?php

namespace App\Services;

use App\DTOs\Auth\LoginDTO;
use App\DTOs\Auth\RegistroUsuarioDTO;
use App\DTOs\Auth\CambioContrasenaDTO;
use App\DTOs\Auth\PreguntaSeguridadDTO;
use App\Interfaces\Services\AuthServiceInterface;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;
use App\Models\Usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class AuthService implements AuthServiceInterface
{
    public function __construct(
        private UsuarioRepositoryInterface $usuarioRepository
    ) {}

    public function login(LoginDTO $dto): JsonResponse
    {
        $usuario = $this->usuarioRepository->findByEmail($dto->email);

        if (!$usuario) {
            return response()->json([
                'message' => 'Credenciales inválidas'
            ], 401);
        }

        // Verificar si el usuario está bloqueado
        if ($usuario->estaBloqueado()) {
            return response()->json([
                'message' => 'Usuario bloqueado temporalmente. Intente nuevamente más tarde.'
            ], 423);
        }

        // Verificar contraseña
        if (!Hash::check($dto->password, $usuario->contrasena_hash)) {
            $this->usuarioRepository->incrementarIntentosFallidos($usuario->usuario_id);

            $intentosRestantes = 3 - $usuario->intentos_fallidos;

            return response()->json([
                'message' => 'Credenciales inválidas',
                'intentos_restantes' => $intentosRestantes
            ], 401);
        }

        // Resetear intentos fallidos
        $this->usuarioRepository->resetearIntentosFallidos($usuario->usuario_id);

        // Actualizar último acceso
        $this->usuarioRepository->actualizarUltimoAcceso($usuario->usuario_id);

        // Verificar si requiere preguntas de seguridad
        if ($usuario->preguntasSeguridad->count() > 0) {
            $pregunta = $usuario->preguntasSeguridad->random();

            return response()->json([
                'message' => 'Por favor responda la pregunta de seguridad',
                'requiere_pregunta' => true,
                'pregunta_id' => $pregunta->pregunta_id,
                'pregunta' => $pregunta->texto,
                'token_preliminar' => $this->generarTokenPreliminar($usuario)
            ], 200);
        }

        // Generar token de acceso
        $token = $usuario->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'usuario' => [
                'id' => $usuario->usuario_id,
                'nombre' => $usuario->nombre_usuario,
                'email' => $usuario->email,
                'rol' => $usuario->rol->nombre
            ]
        ], 200);
    }

    public function validarPreguntasSeguridad(PreguntaSeguridadDTO $dto): bool
    {
        $usuario = Usuario::find($dto->usuario_id);

        if (!$usuario) {
            return false;
        }

        foreach ($dto->respuestas as $respuesta) {
            $preguntaUsuario = $usuario->preguntasSeguridad()
                ->wherePivot('pregunta_id', $respuesta['pregunta_id'])
                ->first();

            if (!$preguntaUsuario) {
                return false;
            }

            $respuestaCorrecta = Crypt::decrypt($preguntaUsuario->pivot->respuesta_cifrada);

            if ($respuestaCorrecta !== $respuesta['respuesta']) {
                $this->usuarioRepository->incrementarIntentosFallidos($usuario->usuario_id);
                return false;
            }
        }

        $this->usuarioRepository->resetearIntentosFallidos($usuario->usuario_id);
        return true;
    }

    public function cambiarContrasena(CambioContrasenaDTO $dto): JsonResponse
    {
        $usuario = Auth::user();

        // Validar contraseña actual o pregunta de seguridad
        if ($dto->pregunta_id && $dto->respuesta) {
            $preguntaUsuario = $usuario->preguntasSeguridad()
                ->wherePivot('pregunta_id', $dto->pregunta_id)
                ->first();

            if (!$preguntaUsuario) {
                return response()->json([
                    'message' => 'Pregunta de seguridad no válida'
                ], 400);
            }

            $respuestaCorrecta = Crypt::decrypt($preguntaUsuario->pivot->respuesta_cifrada);

            if ($respuestaCorrecta !== $dto->respuesta) {
                return response()->json([
                    'message' => 'Respuesta incorrecta'
                ], 400);
            }
        } else {
            if (!Hash::check($dto->current_password, $usuario->contrasena_hash)) {
                return response()->json([
                    'message' => 'Contraseña actual incorrecta'
                ], 400);
            }
        }

        // Validar nueva contraseña
        if (!$this->validarFortalezaContrasena($dto->new_password)) {
            return response()->json([
                'message' => 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial'
            ], 400);
        }

        // Actualizar contraseña
        $usuario->contrasena_hash = Hash::make($dto->new_password);
        $usuario->requiere_cambio_contrasena = false;
        $usuario->save();

        // Revocar todos los tokens
        $usuario->tokens()->delete();

        return response()->json([
            'message' => 'Contraseña actualizada exitosamente'
        ], 200);
    }

    public function logout(): JsonResponse
    {
        Auth::user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sesión cerrada exitosamente'
        ], 200);
    }

    public function generarTokenResetPassword(string $email): ?string
    {
        $usuario = $this->usuarioRepository->findByEmail($email);

        if (!$usuario) {
            return null;
        }

        $token = Str::random(60);
        $usuario->token_reset_password = $token;
        $usuario->fecha_expiracion_token = now()->addHour();
        $usuario->save();

        return $token;
    }

    public function resetPassword(string $token, string $newPassword): bool
    {
        $usuario = Usuario::where('token_reset_password', $token)
                        ->where('fecha_expiracion_token', '>', now())
                        ->first();

        if (!$usuario) {
            return false;
        }

        if (!$this->validarFortalezaContrasena($newPassword)) {
            return false;
        }

        $usuario->contrasena_hash = Hash::make($newPassword);
        $usuario->token_reset_password = null;
        $usuario->fecha_expiracion_token = null;
        $usuario->intentos_fallidos = 0;
        $usuario->fecha_bloqueo = null;
        $usuario->save();

        return true;
    }

    public function verificarSesionActiva(): JsonResponse
    {
        $usuario = Auth::user();

        if (!$usuario) {
            return response()->json(['active' => false], 401);
        }

        // Verificar inactividad
        $ultimoAcceso = $usuario->ultimo_acceso;
        $minutosInactivo = $ultimoAcceso ? $ultimoAcceso->diffInMinutes(now()) : 0;

        if ($minutosInactivo > 15) {
            return response()->json([
                'active' => false,
                'message' => 'Sesión inactiva'
            ], 401);
        }

        // Actualizar último acceso
        $usuario->ultimo_acceso = now();
        $usuario->save();

        return response()->json([
            'active' => true,
            'usuario' => [
                'nombre' => $usuario->nombre_usuario,
                'rol' => $usuario->rol->nombre
            ]
        ], 200);
    }

    public function refrescarToken(): JsonResponse
    {
        $usuario = Auth::user();

        if (!$usuario) {
            return response()->json(['message' => 'No autorizado'], 401);
        }

        // Revocar token actual
        $usuario->currentAccessToken()->delete();

        // Generar nuevo token
        $token = $usuario->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ], 200);
    }

    public function registro(RegistroUsuarioDTO $dto): JsonResponse
    {
        // Implementación de registro
        return response()->json(['message' => 'Registro no implementado'], 501);
    }

    private function validarFortalezaContrasena(string $password): bool
    {
        $regex = '/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';
        return preg_match($regex, $password) === 1;
    }

    private function generarTokenPreliminar(Usuario $usuario): string
    {
        return Crypt::encrypt([
            'usuario_id' => $usuario->usuario_id,
            'expires_at' => now()->addMinutes(5)->timestamp
        ]);
    }
}
