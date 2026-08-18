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
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Password;
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

    $preguntasCount = $usuario->preguntasSeguridad()->count();

    if ($preguntasCount === 0) {
        // Usuario SIN preguntas configuradas
        $tokenTemp = $usuario->createToken('setup-token', ['configure-security'], now()->addMinutes(30))
            ->plainTextToken;

        return response()->json([
            'message' => 'Por favor configure sus preguntas de seguridad para poder acceder al sistema. Atentamente SIGPAZ',
            'requiere_configurar_preguntas' => true,
            'token_temp' => $tokenTemp,
            'usuario_id' => $usuario->usuario_id,
            'usuario' => $this->formatUsuarioData($usuario) // ✅ AÑADIR ESTO
        ], 200);
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

    $tienePreguntas = $usuario->preguntasSeguridad()->exists();

    if ($tienePreguntas) {
        // ✅ Generar token temporal con Sanctum
        $tokenTemp = $usuario->createToken(
            'temp-auth',
            ['validate-questions'],
            now()->addMinutes(10)
        )->plainTextToken;

        // Obtener una pregunta aleatoria
        $pregunta = $usuario->preguntasSeguridad()->inRandomOrder()->first();

         return response()->json([
            'message' => 'Por favor responda la pregunta de seguridad',
            'requiere_preguntas' => true, // ✅ Cambiar a requiere_preguntas
            'pregunta_id' => $pregunta->pregunta_id,
            'pregunta' => $pregunta->texto,
            'token_temp' => $tokenTemp,
            'usuario_id' => $usuario->usuario_id,
            'usuario' => $this->formatUsuarioData($usuario),
            'preguntas' => [[ // ✅ Enviar como array
                'pregunta_id' => $pregunta->pregunta_id,
                'texto' => $pregunta->texto
            ]]
        ], 200);
    }

    // Generar token de acceso (caso sin preguntas, login directo)
    $token = $usuario->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Inicio de sesión exitoso',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'usuario' => $this->formatUsuarioData($usuario) // ✅ AÑADIR ESTO
    ], 200);
}

/**
 * Formatear datos del usuario para respuesta
 */
private function formatUsuarioData(Usuario $usuario): array

{

  $usuario->load(['rol', 'preguntasSeguridad']);
    return [
        'usuario_id' => $usuario->usuario_id,
        'nombre_usuario' => $usuario->nombre_usuario,
        'email' => $usuario->email,
        'rol_id' => $usuario->rol_id,
        'rol_nombre' => $usuario->rol->nombre ?? null,
        'personal_id' => $usuario->personal_id,
        'activo' => (bool) $usuario->activo,
        'fecha_creacion' => $usuario->fecha_creacion,
        'ultimo_acceso' => $usuario->ultimo_acceso,
        'requiere_cambio_contrasena' => (bool) $usuario->requiere_cambio_contrasena,
        'requiere_configurar_preguntas' => false, // Ya tiene preguntas o no necesita
        'fecha_bloqueo' => $usuario->fecha_bloqueo,
        'intentos_fallidos' => $usuario->intentos_fallidos,
        'preguntas_seguridad' => $usuario->preguntasSeguridad->map(function($pregunta) {
            return [
                'pregunta_id' => $pregunta->pregunta_id,
                'texto' => $pregunta->texto
            ];
        })->toArray()
    ];
}

public function validarPreguntasSeguridad(PreguntaSeguridadDTO $dto): JsonResponse
{
    $usuario = Auth::user();

    if (!$usuario || $usuario->usuario_id != $dto->usuario_id) {
        return response()->json([
            'message' => 'Token inválido o expirado'
        ], 401);
    }

    \Log::info('🔐 Validando preguntas de seguridad:', [
        'usuario_id' => $usuario->usuario_id,
        'total_respuestas' => count($dto->respuestas)
    ]);

    $respuestasCorrectas = 0;
    $totalRespuestas = count($dto->respuestas);

    foreach ($dto->respuestas as $respuesta) {
        $preguntaUsuario = DB::table('usuariopregunta')
            ->where('usuario_id', $usuario->usuario_id)
            ->where('pregunta_id', $respuesta['pregunta_id'])
            ->first();

        if (!$preguntaUsuario) {
            \Log::warning('Pregunta no encontrada para usuario:', [
                'usuario_id' => $usuario->usuario_id,
                'pregunta_id' => $respuesta['pregunta_id']
            ]);
            continue;
        }

        try {
            $byteaRespuesta = $preguntaUsuario->respuesta_cifrada;
            $respuestaEncriptada = $this->byteaToString($byteaRespuesta);

            if (empty($respuestaEncriptada)) {
                \Log::error('Respuesta encriptada vacía o inválida');
                continue;
            }

            $respuestaCorrecta = Crypt::decrypt($respuestaEncriptada);

            if (strtolower(trim($respuesta['respuesta'])) === strtolower(trim($respuestaCorrecta))) {
                $respuestasCorrectas++;
            }

        } catch (\Exception $e) {
            \Log::error('Error validando respuesta:', [
                'pregunta_id' => $respuesta['pregunta_id'],
                'error' => $e->getMessage()
            ]);
            continue;
        }
    }

    $porcentajeCorrecto = ($totalRespuestas > 0) ? ($respuestasCorrectas / $totalRespuestas) * 100 : 0;

    if ($porcentajeCorrecto >= 80) {
        // ✅ Respuestas correctas
        $usuario->currentAccessToken()->delete();

        $tokenDefinitivo = $usuario->createToken('auth-token')->plainTextToken;

        \Log::info('✅ Validación exitosa, generando token definitivo:', [
            'usuario_id' => $usuario->usuario_id
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Autenticación completada exitosamente',
            'access_token' => $tokenDefinitivo,
            'token_type' => 'Bearer',
            'usuario' => $this->formatUsuarioData($usuario) // ✅ AÑADIR ESTO
        ], 200);
    } else {
        // Respuestas incorrectas
        $this->usuarioRepository->incrementarIntentosFallidos($usuario->usuario_id);

        $intentosActuales = $usuario->intentos_fallidos + 1;

        \Log::warning('❌ Validación fallida:', [
            'usuario_id' => $usuario->usuario_id,
            'correctas' => $respuestasCorrectas,
            'total' => $totalRespuestas,
            'porcentaje' => $porcentajeCorrecto
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Respuestas incorrectas. Intente nuevamente.',
            'intentos_fallidos' => $intentosActuales,
            'correctas' => $respuestasCorrectas,
            'total' => $totalRespuestas
        ], 400);
    }
}
/**
 * Convertir bytea de PostgreSQL a string
 * PostgreSQL almacena bytea como: \xHEXVALUE
 */
private function byteaToString($bytea): string
{
    if (empty($bytea)) {
        return '';
    }

    // PostgreSQL bytea puede venir como:
    // 1. Resource stream
    // 2. String con prefijo \x
    // 3. Binary string

    if (is_resource($bytea)) {
        $bytea = stream_get_contents($bytea);
    }

    if (!is_string($bytea)) {
        \Log::error('Bytea no es string:', ['tipo' => gettype($bytea)]);
        return '';
    }

    // Si comienza con \x (formato PostgreSQL hex)
    if (str_starts_with($bytea, '\\x')) {
        // Extraer parte hexadecimal y convertir a string binario
        $hex = substr($bytea, 2);
        return hex2bin($hex);
    }

    // Si ya es binario, devolver tal cual
    return $bytea;
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

public function generarTokenDefinitivo(int $usuarioId): JsonResponse
{
    $usuario = Usuario::find($usuarioId);

    if (!$usuario) {
        return response()->json([
            'success' => false,
            'message' => 'Usuario no encontrado'
        ], 404);
    }

    // ✅ Revocar token temporal
    $usuario->tokens()->where('name', 'like', 'temp-auth-%')->delete();

    // ✅ Generar token definitivo
    $token = $usuario->createToken('auth-token')->plainTextToken;

    \Log::info('✅ Token definitivo generado:', [
        'usuario_id' => $usuario->usuario_id,
        'email' => $usuario->email
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Autenticación completada exitosamente',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'usuario' => $this->formatUsuarioData($usuario) // ✅ AÑADIR ESTO
    ], 200);
}


// En App\Services\AuthService (agregar estos métodos)

/**
 * Verifica si el usuario tiene permiso para acceder a catálogos
 */
public function puedeVerCatalogos(Usuario $usuario): bool
{
    return $this->tieneCualquierPermiso($usuario, [1, 2, 3]);
}

/**
 * Verifica si el usuario puede modificar catálogos
 */
public function puedeModificarCatalogos(Usuario $usuario): bool
{
    return $this->tieneCualquierPermiso($usuario, [1, 2]);
}

/**
 * Verifica si el usuario tiene cualquiera de los permisos especificados
 */
private function tieneCualquierPermiso(Usuario $usuario, array $permisosIds): bool
{
    if (!$usuario->activo || !$usuario->rol) {
        return false;
    }

    $permisosUsuario = $usuario->rol->permisos->pluck('permiso_id')->toArray();

    foreach ($permisosIds as $permisoId) {
        if (in_array($permisoId, $permisosUsuario)) {
            return true;
        }
    }

    return false;
}

/**
 * Obtiene los catálogos permitidos para el usuario
 */
public function obtenerCatalogosPermitidos(Usuario $usuario): array
{
    $todosCatalogos = [
        'EstadoDenuncia',
        'TipoVinculo',
        'EstadoAsistencia',
        'TipoDocumento',
        'EstadoCivil',
        'Genero',
        'Institucion',
        'Cargo',
        'TipoConflicto',
        'TipoNotificacion',
        'TipoMedida'
    ];

    // Si tiene permisos 1 o 2 (ADMINISTRADOR DEL SISTEMA o ADMINISTRADOR TECNICO)
    if ($this->tieneCualquierPermiso($usuario, [1, 2])) {
        return [
            'todos' => $todosCatalogos,
            'puede_modificar' => true
        ];
    }

    // Si solo tiene permiso 3 (USUARIO AVANZADO o USUARIO ESTANDAR)
    if ($this->tieneCualquierPermiso($usuario, [3])) {
        return [
            'todos' => [
                'TipoDocumento',
                'EstadoCivil',
                'Genero',
                'Cargo'
            ],
            'puede_modificar' => false
        ];
    }

    return ['todos' => [], 'puede_modificar' => false];
}
}
