<?php

namespace App\Http\Controllers;

use App\DTOs\Auth\LoginDTO;
use App\DTOs\Auth\CambioContrasenaDTO;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\CambioContrasenaRequest;
use App\Interfaces\Services\AuthServiceInterface;
use Illuminate\Http\Request;
use App\DTOs\Auth\PreguntaSeguridadDTO;
use App\Models\PreguntaSeguridad;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Helpers\EncryptionHelper;
use App\Models\Usuario;
use App\Services\ValidacionPreguntasService;
use App\Services\CifradoService;
use App\Http\Requests\ConfigurarPreguntasRequest;
use App\Http\Requests\ValidarPreguntasRequest;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;


class AuthController extends Controller
{
    public function __construct(
        private AuthServiceInterface $authService,
          private ValidacionPreguntasService $validacionService,
        private CifradoService $cifradoService,
        private UsuarioRepositoryInterface $usuarioRepository

    ) {}

    public function login(LoginRequest $request)
    {
        $dto = LoginDTO::fromArray($request->validated());
        return $this->authService->login($dto);
    }

    public function logout()
    {
        return $this->authService->logout();
    }

    public function cambiarContrasena(CambioContrasenaRequest $request)
    {
        $dto = CambioContrasenaDTO::fromArray($request->validated());
        return $this->authService->cambiarContrasena($dto);
    }

   public function validarPreguntasSeguridad(Request $request)
{
    try {
        $request->validate([
            'usuario_id' => ['required', 'integer'],
            'respuestas' => ['required', 'array', 'min:1'],
            'respuestas.*.pregunta_id' => ['required', 'integer'],
            'respuestas.*.respuesta' => ['required', 'string']
        ]);

        $usuario = $request->user();

        if (!$usuario || $usuario->usuario_id != $request->usuario_id) {
            return response()->json([
                'success' => false,
                'message' => 'Token inválido o expirado'
            ], 401);
        }

        \Log::info('🔐 Validando preguntas de seguridad:', [
            'usuario_id' => $usuario->usuario_id,
            'total_respuestas' => count($request->respuestas)
        ]);

        $respuestasCorrectas = 0;
        $totalRespuestas = count($request->respuestas);

        foreach ($request->respuestas as $respuesta) {
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
                // Convertir bytea a string
                $byteaRespuesta = $preguntaUsuario->respuesta_cifrada;
                $respuestaEncriptada = $this->byteaToString($byteaRespuesta);

                if (empty($respuestaEncriptada)) {
                    \Log::error('Respuesta encriptada vacía o inválida');
                    continue;
                }

               $respuestaCorrecta = Crypt::decryptString($respuestaEncriptada);

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
            $usuario->tokens()->where('name', 'like', 'temp-auth-%')->delete();

            $tokenDefinitivo = $usuario->createToken('auth-token')->plainTextToken;

            \Log::info('✅ Validación exitosa:', [
                'usuario_id' => $usuario->usuario_id,
                'porcentaje' => $porcentajeCorrecto
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Autenticación completada exitosamente',
                'access_token' => $tokenDefinitivo,
                'token_type' => 'Bearer',
                'usuario' => $this->formatUsuarioData($usuario)
            ], 200);
        } else {
            // ❌ Respuestas incorrectas
            $usuario->intentos_fallidos = ($usuario->intentos_fallidos ?? 0) + 1;

            // Bloquear si supera los intentos
            if ($usuario->intentos_fallidos >= 3) {
                $usuario->fecha_bloqueo = now()->addHours(1);
                $usuario->save();

                return response()->json([
                    'success' => false,
                    'message' => 'Demasiados intentos fallidos. Cuenta bloqueada por 1 hora.',
                    'bloqueado_hasta' => $usuario->fecha_bloqueo,
                    'intentos_fallidos' => $usuario->intentos_fallidos
                ], 423);
            }

            $usuario->save();

            \Log::warning('❌ Validación fallida:', [
                'usuario_id' => $usuario->usuario_id,
                'correctas' => $respuestasCorrectas,
                'total' => $totalRespuestas,
                'porcentaje' => $porcentajeCorrecto,
                'intentos_fallidos' => $usuario->intentos_fallidos
            ]);

            // Obtener una nueva pregunta para el siguiente intento
            $nuevaPregunta = $usuario->preguntasSeguridad()
                ->inRandomOrder()
                ->first();

            return response()->json([
                'success' => false,
                'message' => 'Respuesta incorrecta. Intente nuevamente.',
                'requiere_nuevas_preguntas' => true,
                'nuevas_preguntas' => $nuevaPregunta ? [[
                    'pregunta_id' => $nuevaPregunta->pregunta_id,
                    'texto' => $nuevaPregunta->texto
                ]] : [],
                'intentos_fallidos' => $usuario->intentos_fallidos,
                'correctas' => $respuestasCorrectas,
                'total' => $totalRespuestas
            ], 400);
        }

    } catch (\Exception $e) {
        \Log::error('Error en validarPreguntasSeguridad:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error en la validación: ' . $e->getMessage()
        ], 500);
    }
}

private function formatUsuarioData($usuario)
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
        'requiere_configurar_preguntas' => false,
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

private function byteaToString($bytea): string
{
    if (empty($bytea)) {
        return '';
    }

    if (is_resource($bytea)) {
        $bytea = stream_get_contents($bytea);
    }

    if (!is_string($bytea)) {
        return '';
    }

    if (str_starts_with($bytea, '\\x')) {
        $hex = substr($bytea, 2);
        return hex2bin($hex);
    }

    return $bytea;
}

    public function verificarSesionActiva()
    {
        return $this->authService->verificarSesionActiva();
    }

    public function refrescarToken()
    {
        return $this->authService->refrescarToken();
    }


    public function me(Request $request)
{
    try {
        $usuario = $request->user();

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no autenticado'
            ], 401);
        }

        // Cargar relaciones necesarias
        $usuario->load([
            'rol',
            'personal.persona',
            'personal.cargo',
            'preguntasSeguridad'
        ]);

        // Formatear respuesta
        $userData = [
            'usuario_id' => $usuario->usuario_id,
            'nombre_usuario' => $usuario->nombre_usuario,
            'email' => $usuario->email,
            'rol_id' => $usuario->rol_id,
            'rol_nombre' => $usuario->rol->nombre ?? null,
            'personal_id' => $usuario->personal_id,
            'personal' => $usuario->personal ? [
                'personal_id' => $usuario->personal->personal_id,
                'cargo' => $usuario->personal->cargo ? [
                    'cargo_id' => $usuario->personal->cargo->cargo_id,
                    'nombre' => $usuario->personal->cargo->nombre
                ] : null,
                'persona' => $usuario->personal->persona ? [
                    'persona_id' => $usuario->personal->persona->persona_id,
                    'nombres' => $usuario->personal->persona->nombres,
                    'apellidos' => $usuario->personal->persona->apellidos
                ] : null
            ] : null,
            'activo' => (bool) $usuario->activo,
            'fecha_creacion' => $usuario->fecha_creacion,
            'ultimo_acceso' => $usuario->ultimo_acceso,
            'requiere_cambio_contrasena' => (bool) $usuario->requiere_cambio_contrasena,
            'fecha_bloqueo' => $usuario->fecha_bloqueo,
            'intentos_fallidos' => $usuario->intentos_fallidos,
            'preguntas_seguridad' => $usuario->preguntasSeguridad->map(function($pregunta) {
                return [
                    'pregunta_id' => $pregunta->pregunta_id,
                    'texto' => $pregunta->texto,
                    'tipo' => $pregunta->tipo ?? 'texto'
                ];
            })
        ];

        return response()->json([
            'success' => true,
            'data' => $userData,
            'message' => 'Información del usuario obtenida correctamente'
        ], 200);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al obtener información del usuario: ' . $e->getMessage()
        ], 500);
    }
}

public function configurarPreguntas(Request $request)
{
    try {
        $usuario = $request->user();

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no autenticado'
            ], 401);
        }

        // Validar request
        $request->validate([
            'respuestas' => 'required|array|min:3|max:5',
            'respuestas.*.pregunta_id' => 'required|integer|exists:preguntaseguridad,pregunta_id',
            'respuestas.*.respuesta' => 'required|string|min:2|max:100'
        ]);

        // Verificar que las preguntas sean diferentes
        $preguntaIds = collect($request->respuestas)->pluck('pregunta_id');
        if ($preguntaIds->duplicates()->isNotEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Debe seleccionar preguntas diferentes'
            ], 422);
        }

        // Usar transacción para asegurar consistencia
        DB::beginTransaction();

        try {
            // Eliminar preguntas anteriores del usuario
            DB::table('usuariopregunta')
                ->where('usuario_id', $usuario->usuario_id)
                ->delete();

            // Insertar nuevas respuestas
            foreach ($request->respuestas as $respuesta) {
                $respuestaCifrada = Crypt::encryptString($respuesta['respuesta']);

                DB::table('usuariopregunta')->insert([
                    'usuario_id' => $usuario->usuario_id,
                    'pregunta_id' => $respuesta['pregunta_id'],
                    'respuesta_cifrada' => DB::raw("E'\\\\x" . bin2hex($respuestaCifrada) . "'"),
                    'fecha_creacion' => now()
                ]);
            }

            // ✅✅✅ ELIMINA ESTAS 2 LÍNEAS (NO EXISTE LA COLUMNA):
            // $usuario->requiere_configurar_preguntas = false;
            // $usuario->save();

            // Crear nuevo token de acceso
            $token = $usuario->createToken('auth_token')->plainTextToken;

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Preguntas de seguridad configuradas correctamente',
                'access_token' => $token,
                'token_type' => 'Bearer'
            ], 200);

        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);

    } catch (\Exception $e) {
        \Log::error('Error configurando preguntas: ' . $e->getMessage());

        return response()->json([
            'success' => false,
            'message' => 'Error al configurar preguntas: ' . $e->getMessage()
        ], 500);
    }
}

public function checkBlockStatus(Request $request)
{
    $email = $request->input('email');  // Recibir del body

    if (!$email) {
        return response()->json(['is_blocked' => false], 200);
    }

    $usuario = Usuario::where('email', $email)->first();

    if (!$usuario) {
        return response()->json(['is_blocked' => false], 200);
    }

    $isBlocked = $usuario->estaBloqueado();

    return response()->json([
        'is_blocked' => $isBlocked,
        'blocked_until' => $isBlocked ? $usuario->fecha_bloqueo : null,
        'intentos_fallidos' => $usuario->intentos_fallidos
    ], 200);
}



/**
 * Obtiene los catálogos a los que el usuario tiene acceso
 */
public function getCatalogosPermitidos(Request $request)
{
    try {
        $usuario = $request->user();

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no autenticado'
            ], 401);
        }

        $catalogosPermitidos = $this->authService->obtenerCatalogosPermitidos($usuario);

        return response()->json([
            'success' => true,
            'data' => $catalogosPermitidos,
            'message' => 'Catálogos permitidos obtenidos correctamente'
        ], 200);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al obtener catálogos: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Obtener preguntas disponibles para configuración
 */

public function getPreguntasDisponibles(Request $request)
{
    try {
        \Log::info('🔍 [getPreguntasDisponibles] Iniciando', [
            'user_id' => $request->user()?->usuario_id,
            'has_user' => $request->user() ? 'si' : 'no'
        ]);

        $usuario = $request->user();

        if (!$usuario) {
            \Log::warning('⚠️ [getPreguntasDisponibles] Usuario no autenticado');
            return response()->json([
                'success' => false,
                'message' => 'Usuario no autenticado'
            ], 401);
        }

        \Log::info('📊 [getPreguntasDisponibles] Consultando preguntas', [
            'usuario_id' => $usuario->usuario_id
        ]);

        // ✅ Usar whereRaw para PostgreSQL
        $query = PreguntaSeguridad::whereRaw('activo = true')
            ->whereNotIn('pregunta_id', function($subquery) use ($usuario) {
                $subquery->select('pregunta_id')
                    ->from('usuariopregunta')
                    ->where('usuario_id', $usuario->usuario_id);
            });

        \Log::info('🔍 [getPreguntasDisponibles] SQL generado: ' . $query->toSql());

        $preguntas = $query->get();

        \Log::info('✅ [getPreguntasDisponibles] Preguntas encontradas', [
            'count' => $preguntas->count(),
            'preguntas_ids' => $preguntas->pluck('pregunta_id')->toArray()
        ]);

        return response()->json([
            'success' => true,
            'data' => $preguntas->map(function($pregunta) {
                return [
                    'pregunta_id' => $pregunta->pregunta_id,
                    'texto' => $pregunta->texto
                ];
            })
        ]);

    } catch (\Exception $e) {
        \Log::error('❌ [getPreguntasDisponibles] Error:', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al cargar preguntas: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Refrescar actividad del usuario (resetear contador de inactividad)
 */
public function refreshActivity(Request $request)
{
    $user = $request->user();

    if (!$user) {
        return response()->json([
            'success' => false,
            'message' => 'No autenticado'
        ], 401);
    }

    // Actualizar último acceso (reinicia el contador de inactividad)
    $user->ultimo_acceso = now();
    $user->save();

    return response()->json([
        'success' => true,
        'message' => 'Actividad registrada',
        'last_access' => $user->ultimo_acceso
    ]);
}

/**
 * Verificar estado de la sesión actual (para heartbeat del frontend)
 */
public function checkSession(Request $request)
{
    $user = $request->user();

    if (!$user) {
        return response()->json([
            'message' => 'No autenticado',
            'code' => 'NOT_AUTHENTICATED'
        ], 401);
    }

    $ultimoAcceso = $user->ultimo_acceso;
    $tiempoMaximo = 300; // 5 minutos
    $tiempoAdvertencia = 60;

    if ($ultimoAcceso) {
        $segundosInactivo = $ultimoAcceso->diffInSeconds(now());
        $tiempoRestante = $tiempoMaximo - $segundosInactivo;

        // ✅ Si la sesión expiró, revocar token y responder 401
        if ($segundosInactivo >= $tiempoMaximo) {
            // Revocar el token actual
            $user->currentAccessToken()->delete();

            return response()->json([
                'message' => 'Sesión expirada por inactividad',
                'code' => 'SESSION_EXPIRED'
            ], 401);
        }

        if ($tiempoRestante <= $tiempoAdvertencia && $tiempoRestante > 0) {
            return response()->json([
                'active' => true,
                'warning' => true,
                'time_left' => $tiempoRestante
            ])->header('X-Session-Warning', $tiempoRestante)
              ->header('X-Session-Time-Left', $tiempoRestante);
        }
    }

    return response()->json([
        'active' => true,
        'warning' => false
    ]);
}

public function solicitarResetPassword(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $usuario = Usuario::where('email', $request->email)->first();

    if (!$usuario) {
        return response()->json([
            'message' => 'Error de verificación'
        ], 404);
    }

    // Verificar que tenga preguntas de seguridad configuradas
    $preguntasCount = $usuario->preguntasSeguridad()->count();

    if ($preguntasCount === 0) {
        return response()->json([
            'message' => 'Esta cuenta no tiene preguntas de seguridad configuradas. Contacte al administrador.'
        ], 400);
    }

    // ✅ Generar UUID válido en lugar de string aleatorio
    $token = (string) Str::uuid(); // Ej: "550e8400-e29b-41d4-a716-446655440000"

    DB::table('usuario')
        ->where('usuario_id', $usuario->usuario_id)
        ->update([
            'token_reset_password' => $token,
            'fecha_expiracion_token' => now()->addMinutes(15)
        ]);

    return response()->json([
        'message' => 'Verificación exitosa',
        'token' => $token,
        'email' => $usuario->email
    ], 200);
}

public function generarTokenResetPassword(string $email): ?string
{
    $usuario = $this->usuarioRepository->findByEmail($email);

    if (!$usuario) {
        return null;
    }

    $token = Str::random(60);

    // ✅ ACTUALIZAR SOLO LAS COLUMNAS QUE EXISTEN
    // NO actualizar fecha_creacion porque $timestamps = false
    $usuario->token_reset_password = $token;
    $usuario->fecha_expiracion_token = now()->addMinutes(15);

    // ✅ Usar save() correctamente
    $usuario->save();

    return $token;
}

// ✅ También corregir resetPassword
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

    // ✅ Actualizar SOLO las columnas necesarias
    $usuario->contrasena_hash = Hash::make($newPassword);
    $usuario->token_reset_password = null;
    $usuario->fecha_expiracion_token = null;
    $usuario->intentos_fallidos = 0;
    $usuario->fecha_bloqueo = null;

    // ✅ NO tocar fecha_creacion
    $usuario->save();

    return true;
}


private function validarFortalezaContrasena(string $password): bool
{
    $regex = '/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/';
    return preg_match($regex, $password) === 1;
}

public function obtenerPreguntasUsuario(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $usuario = Usuario::where('email', $request->email)->first();

    if (!$usuario) {
        return response()->json([
            'success' => false,
            'message' => 'Usuario no encontrado'
        ], 404);
    }

    $preguntas = $usuario->preguntasSeguridad()->get();

    return response()->json([
        'success' => true,
        'data' => $preguntas->map(function($p) {
            return [
                'pregunta_id' => $p->pregunta_id,
                'texto' => $p->texto
            ];
        })
    ], 200);
}
}
