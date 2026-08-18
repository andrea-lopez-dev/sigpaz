<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use App\Models\PreguntaSeguridad;
use App\Models\UsuarioPregunta;
use App\Services\CifradoService;
use App\Http\Requests\AsociarPreguntaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;

class UsuarioPreguntaController extends Controller
{
    public function __construct(
        private CifradoService $cifradoService
    ) {}

    /**
     * Listar asociaciones usuario-pregunta
     */
    public function index(Request $request)
    {
        $query = UsuarioPregunta::with(['usuario', 'pregunta']);

        if ($request->has('usuario_id')) {
            $query->where('usuario_id', $request->usuario_id);
        }

        if ($request->has('pregunta_id')) {
            $query->where('pregunta_id', $request->pregunta_id);
        }

        $asociaciones = $query->orderBy('fecha_creacion', 'desc')
            ->paginate($request->get('per_page', 15));

        $asociaciones->getCollection()->transform(function($item) {
            return [
                'id_usuario' => $item->usuario_id,
                'usuario_nombre' => $item->usuario->nombre_completo ?? $item->usuario->nombre_usuario,
                'usuario_email' => $item->usuario->email,
                'id_pregunta' => $item->pregunta_id,
                'pregunta_texto' => $item->pregunta->texto,
                'respuesta' => '🔒 Encriptada',
                 'validada' => (bool) $item->validada,
                'fecha_asociacion' => $item->fecha_creacion->toISOString()
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $asociaciones->items(),
            'meta' => [
                'total' => $asociaciones->total(),
                'per_page' => $asociaciones->perPage(),
                'current_page' => $asociaciones->currentPage(),
                'last_page' => $asociaciones->lastPage(),
            ]
        ]);
    }

    /**
     * Asociar pregunta a usuario
     */
    public function store(AsociarPreguntaRequest $request)
    {
        $usuario = Usuario::findOrFail($request->usuario_id);
        $pregunta = PreguntaSeguridad::findOrFail($request->pregunta_id);

        // Verificar que no exista ya la asociación
        $existe = UsuarioPregunta::where('usuario_id', $usuario->usuario_id)
            ->where('pregunta_id', $pregunta->pregunta_id)
            ->exists();

        if ($existe) {
            return response()->json([
                'success' => false,
                'message' => 'Esta pregunta ya está asociada al usuario'
            ], 422);
        }

        // Encriptar la respuesta
        $respuestaCifrada = $this->cifradoService->encriptarRespuesta($request->respuesta);


        // Crear asociación
        $asociacion = UsuarioPregunta::create([
            'usuario_id' => $usuario->usuario_id,
            'pregunta_id' => $pregunta->pregunta_id,
            'respuesta_cifrada' => $respuestaCifrada,
            'fecha_creacion' => now()
        ]);

        \Log::info('Nueva asociación usuario-pregunta', [
            'usuario_id' => $usuario->usuario_id,
            'pregunta_id' => $pregunta->pregunta_id,
            'usuario_creador' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pregunta asociada exitosamente',
            'data' => [
                'usuario_id' => $asociacion->usuario_id,
                'pregunta_id' => $asociacion->pregunta_id,
                'fecha_asociacion' => $asociacion->fecha_creacion->toISOString()
            ]
        ], 201);
    }

    /**
     * Eliminar asociación usuario-pregunta
     */
    public function destroy($usuarioId, $preguntaId)
    {
        $asociacion = UsuarioPregunta::where('usuario_id', $usuarioId)
            ->where('pregunta_id', $preguntaId)
            ->first();

        if (!$asociacion) {
            return response()->json([
                'success' => false,
                'message' => 'Asociación no encontrada'
            ], 404);
        }

        $asociacion->delete();

        \Log::info('Asociación usuario-pregunta eliminada', [
            'usuario_id' => $usuarioId,
            'pregunta_id' => $preguntaId,
            'usuario_eliminador' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Asociación eliminada exitosamente'
        ]);
    }

    /**
     * Validar respuesta de seguridad
     */

public function validateAnswer(Request $request)
{
    $request->validate([
        'usuario_id' => 'required|exists:usuario,usuario_id',
        'pregunta_id' => 'required|exists:preguntaseguridad,pregunta_id',
        'respuesta' => 'required|string'
    ]);

    $asociacion = DB::table('usuariopregunta')
        ->where('usuario_id', $request->usuario_id)
        ->where('pregunta_id', $request->pregunta_id)
        ->first();

    if (!$asociacion) {
        return response()->json([
            'success' => false,
            'message' => 'Asociación no encontrada'
        ], 404);
    }

    try {
        $respuestaCifrada = $asociacion->respuesta_cifrada;

        if (is_resource($respuestaCifrada)) {
            $respuestaCifrada = stream_get_contents($respuestaCifrada);
        }

        $respuestaGuardada = Crypt::decryptString($respuestaCifrada);
    $esValida = strtolower(trim($request->respuesta)) === strtolower(trim($respuestaGuardada));

        // ✅ CORREGIDO: Usar DB::raw('TRUE') para PostgreSQL
        if ($esValida) {
            DB::table('usuariopregunta')
                ->where('usuario_id', $request->usuario_id)
                ->where('pregunta_id', $request->pregunta_id)
                ->update(['validada' => DB::raw('TRUE')]);
        }

        return response()->json([
            'success' => true,
            'valido' => $esValida,
            'message' => $esValida ? 'Respuesta correcta' : 'Respuesta incorrecta'
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al validar: ' . $e->getMessage()
        ], 500);
    }
}
/**
 * Validación masiva de respuestas (sin verificar respuesta)
 * Marca todas las asociaciones como validadas
 */
public function validateMassive(Request $request)
{
    $request->validate([
        'asociaciones' => 'required|array',
        'asociaciones.*.usuario_id' => 'required|exists:usuario,usuario_id',
        'asociaciones.*.pregunta_id' => 'required|exists:preguntaseguridad,pregunta_id',
    ]);

    foreach ($request->asociaciones as $item) {
        DB::table('usuariopregunta')
            ->where('usuario_id', $item['usuario_id'])
            ->where('pregunta_id', $item['pregunta_id'])
            ->update(['validada' => DB::raw('TRUE')]);
    }

    return response()->json([
        'success' => true,
        'message' => 'Validación masiva completada'
    ]);
}
public function showAnswer($usuarioId, $preguntaId)
{
    $asociacion = DB::table('usuariopregunta')
        ->where('usuario_id', $usuarioId)
        ->where('pregunta_id', $preguntaId)
        ->first();

    if (!$asociacion) {
        return response()->json(['success' => false, 'message' => 'No encontrada'], 404);
    }

    try {
        $respuestaCifrada = $asociacion->respuesta_cifrada;

        if (is_resource($respuestaCifrada)) {
            $respuestaCifrada = stream_get_contents($respuestaCifrada);
        }

        // Desencriptar
        $respuesta = Crypt::decryptString($respuestaCifrada);

        // ✅ Si la respuesta parece serializada, deserializarla
        if (preg_match('/^s:\d+:"/', $respuesta)) {
            $respuesta = unserialize($respuesta);
        }

        return response()->json([
            'success' => true,
            'respuesta' => $respuesta
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al desencriptar: ' . $e->getMessage()
        ], 500);
    }
}


/**
 * Actualizar respuesta de seguridad
 */
public function updateAnswer(Request $request, $usuarioId, $preguntaId)
{
    $request->validate([
        'respuesta' => 'required|string|min:2|max:255'
    ]);

    // Verificar que existe la asociación
    $asociacion = DB::table('usuariopregunta')
        ->where('usuario_id', $usuarioId)
        ->where('pregunta_id', $preguntaId)
        ->first();

    if (!$asociacion) {
        return response()->json([
            'success' => false,
            'message' => 'Asociación no encontrada'
        ], 404);
    }

    try {
        // Encriptar la nueva respuesta
        $nuevaRespuestaCifrada = $this->cifradoService->encriptarRespuesta($request->respuesta);

        // ✅ ACTUALIZAR SOLO respuesta_cifrada, NO validada
        DB::table('usuariopregunta')
            ->where('usuario_id', $usuarioId)
            ->where('pregunta_id', $preguntaId)
            ->update([
                'respuesta_cifrada' => $nuevaRespuestaCifrada
                // No incluir 'validada'
            ]);

        return response()->json([
            'success' => true,
            'message' => 'Respuesta actualizada exitosamente',
            'data' => [
                'usuario_id' => $usuarioId,
                'pregunta_id' => $preguntaId
            ]
        ]);
    } catch (\Exception $e) {
        \Log::error('Error actualizando respuesta: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al guardar la respuesta: ' . $e->getMessage()
        ], 500);
    }
}
public function getByUser($usuarioId)
{
    $asociaciones = DB::table('usuariopregunta as up')
        ->join('preguntaseguridad as p', 'up.pregunta_id', '=', 'p.pregunta_id')
        ->where('up.usuario_id', $usuarioId)
        ->select(
            'up.usuario_id',
            'up.pregunta_id as id_pregunta',
            'p.texto as pregunta_texto',
            DB::raw('COALESCE(up.validada, false) as validada')  // ✅ Asegurar boolean
        )
        ->get();

    return response()->json([
        'success' => true,
        'data' => $asociaciones
    ]);
}
 }
