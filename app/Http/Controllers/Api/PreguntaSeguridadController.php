<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PreguntaSeguridad;
use App\Http\Requests\PreguntaSeguridadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreguntaSeguridadController extends Controller
{
    /**
     * Listar preguntas de seguridad
     */
    public function index(Request $request)
    {
        $query = PreguntaSeguridad::query();

        if ($request->has('activo')) {
            $query->where('activo', $request->boolean('activo'));
        }

        if ($request->has('search')) {
            $query->where('texto', 'ilike', '%' . $request->search . '%');
        }

        $preguntas = $query->orderBy('pregunta_id', 'desc')
            ->paginate($request->get('per_page', 15));

        return response()->json([
            'success' => true,
            'data' => $preguntas->items(),
            'meta' => [
                'total' => $preguntas->total(),
                'per_page' => $preguntas->perPage(),
                'current_page' => $preguntas->currentPage(),
                'last_page' => $preguntas->lastPage(),
            ]
        ]);
    }

    /**
     * Obtener pregunta específica
     */
    public function show($id)
    {
        $pregunta = PreguntaSeguridad::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $pregunta
        ]);
    }

    /**
     * Crear nueva pregunta
     */
    public function store(PreguntaSeguridadRequest $request)
    {
        $pregunta = PreguntaSeguridad::create([
            'texto' => $request->texto,
            'activo' => $request->activo ?? true,
            'fecha_creacion' => now()
        ]);

        // Registrar en bitácora
        \Log::info('Nueva pregunta de seguridad creada', [
            'pregunta_id' => $pregunta->pregunta_id,
            'usuario_id' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pregunta creada exitosamente',
            'data' => $pregunta
        ], 201);
    }

    /**
     * Actualizar pregunta
     */
    public function update(PreguntaSeguridadRequest $request, $id)
    {
        $pregunta = PreguntaSeguridad::findOrFail($id);

        $pregunta->update([
            'texto' => $request->texto,
            'activo' => $request->activo,
        ]);

        \Log::info('Pregunta de seguridad actualizada', [
            'pregunta_id' => $pregunta->pregunta_id,
            'usuario_id' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pregunta actualizada exitosamente',
            'data' => $pregunta
        ]);
    }

    /**
     * Eliminar pregunta (soft delete)
     */
    public function destroy($id)
    {
        $pregunta = PreguntaSeguridad::findOrFail($id);

        // Verificar si tiene asociaciones
        if ($pregunta->usuarios()->count() > 0) {
            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar la pregunta porque tiene usuarios asociados'
            ], 422);
        }

        $pregunta->delete();

        \Log::info('Pregunta de seguridad eliminada', [
            'pregunta_id' => $pregunta->pregunta_id,
            'usuario_id' => auth()->id()
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Pregunta eliminada exitosamente'
        ]);
    }
}
