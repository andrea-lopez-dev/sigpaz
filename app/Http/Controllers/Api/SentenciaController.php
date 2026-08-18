<?php
// App\Http\Controllers\Api\SentenciaController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sentencia;
use App\Services\ConciliacionDisponibleService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class SentenciaController extends Controller
{
    public function __construct(
        private ConciliacionDisponibleService $disponibleService
    ) {}

    /**
     * Listar sentencias con filtros
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Sentencia::with(['conciliacion.denuncia.persona', 'institucionRemitida']);

            // Filtros
            if ($request->has('conciliacion_id')) {
                $query->where('conciliacion_id', $request->conciliacion_id);
            }

            if ($request->has('estado_ejecucion')) {
                $query->where('estado_ejecucion', $request->estado_ejecucion);
            }

            if ($request->has('fecha_desde') && $request->has('fecha_hasta')) {
                $query->whereBetween('fecha_sentencia', [$request->fecha_desde, $request->fecha_hasta]);
            }

            if ($request->has('institucion_id')) {
                $query->where('institucion_remitida_id', $request->institucion_id);
            }

            $sentencias = $query->orderBy('fecha_sentencia', 'desc')->paginate($request->get('per_page', 15));

            // Transformar los items para agregar información adicional
            $items = $sentencias->getCollection()->map(function($sentencia) {
                $data = $sentencia->toArray();

                // Agregar información adicional de la conciliación
                $data['informacion_conciliacion'] = [
                    'denuncia_id' => $sentencia->conciliacion?->denuncia_id,
                    'numero_expediente' => $sentencia->conciliacion?->denuncia?->numero_expediente,
                    'fecha_audiencia' => $sentencia->conciliacion?->fecha_audiencia?->format('Y-m-d'),
                    'resultado_final' => $sentencia->conciliacion?->resultado_final
                ];

                return $data;
            });

            return response()->json([
                'success' => true,
                'data' => $items,
                'meta' => [
                    'current_page' => $sentencias->currentPage(),
                    'last_page' => $sentencias->lastPage(),
                    'per_page' => $sentencias->perPage(),
                    'total' => $sentencias->total()
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error listando sentencias:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al listar sentencias'
            ], 500);
        }
    }

    /**
     * Mostrar una sentencia específica
     */
    public function show(int $id): JsonResponse
    {
        try {
            $sentencia = Sentencia::with([
                'conciliacion.denuncia.persona',
                'conciliacion.votos.personal.persona',
                'institucionRemitida'
            ])->find($id);

            if (!$sentencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sentencia no encontrada'
                ], 404);
            }

            // Crear array con información adicional sin modificar el modelo
            $data = $sentencia->toArray();

            $data['informacion_adicional'] = [
                'denuncia' => $sentencia->conciliacion?->denuncia ? [
                    'denuncia_id' => $sentencia->conciliacion->denuncia->denuncia_id,
                    'numero_expediente' => $sentencia->conciliacion->denuncia->numero_expediente,
                    'fecha_ingreso' => $sentencia->conciliacion->denuncia->fecha_ingreso?->format('Y-m-d')
                ] : null,
                'votos_conciliacion' => $sentencia->conciliacion ? [
                    'total' => $sentencia->conciliacion->votos->count(),
                    'favor' => $sentencia->conciliacion->votos->where('voto', true)->count(),
                    'contra' => $sentencia->conciliacion->votos->where('voto', false)->count()
                ] : null
            ];

            return response()->json([
                'success' => true,
                'data' => $data
            ]);

        } catch (\Exception $e) {
            Log::error('Error mostrando sentencia:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener sentencia'
            ], 500);
        }
    }

    /**
     * Crear nueva sentencia
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'conciliacion_id' => 'required|integer|exists:conciliacion,conciliacion_id',
                'fecha_sentencia' => 'required|date',
                'tipo_resolucion' => 'required|string|max:100',
                'contenido' => 'required|string',
                'estado_ejecucion' => 'required|in:PENDIENTE,EN_EJECUCION,EJECUTADA,PARCIALMENTE_EJECUTADA,SUSPENDIDA,ARCHIVADA',
                'institucion_remitida_id' => 'nullable|integer|exists:institucion,institucion_id',
                'observaciones' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            // Verificar disponibilidad
            $disponibilidad = $this->disponibleService->puedeTenerSentencia($request->conciliacion_id);

            if (!$disponibilidad['puede']) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede crear la sentencia',
                    'motivos' => $disponibilidad['motivos']
                ], 422);
            }

            $sentencia = Sentencia::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Sentencia creada exitosamente',
                'data' => $sentencia->load(['conciliacion', 'institucionRemitida'])
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creando sentencia:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al crear sentencia'
            ], 500);
        }
    }

    /**
     * Actualizar sentencia
     */
    public function update(Request $request, int $id): JsonResponse
    {
        try {
            $sentencia = Sentencia::find($id);

            if (!$sentencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sentencia no encontrada'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'fecha_sentencia' => 'sometimes|date',
                'tipo_resolucion' => 'sometimes|string|max:100',
                'contenido' => 'sometimes|string',
                'estado_ejecucion' => 'sometimes|in:PENDIENTE,EN_EJECUCION,EJECUTADA,PARCIALMENTE_EJECUTADA,SUSPENDIDA,ARCHIVADA',
                'institucion_remitida_id' => 'nullable|integer|exists:institucion,institucion_id',
                'observaciones' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            $sentencia->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Sentencia actualizada exitosamente',
                'data' => $sentencia->fresh(['conciliacion', 'institucionRemitida'])
            ]);

        } catch (\Exception $e) {
            Log::error('Error actualizando sentencia:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar sentencia'
            ], 500);
        }
    }

    /**
     * Eliminar sentencia
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $sentencia = Sentencia::find($id);

            if (!$sentencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sentencia no encontrada'
                ], 404);
            }

            $sentencia->delete();

            return response()->json([
                'success' => true,
                'message' => 'Sentencia eliminada exitosamente'
            ]);

        } catch (\Exception $e) {
            Log::error('Error eliminando sentencia:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar sentencia'
            ], 500);
        }
    }

    /**
     * Cambiar estado de ejecución
     */
    public function cambiarEstadoEjecucion(Request $request, int $id): JsonResponse
    {
        try {
            $sentencia = Sentencia::find($id);

            if (!$sentencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sentencia no encontrada'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'estado_ejecucion' => 'required|in:PENDIENTE,EN_EJECUCION,EJECUTADA,PARCIALMENTE_EJECUTADA,SUSPENDIDA,ARCHIVADA',
                'observaciones' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            $sentencia->update([
                'estado_ejecucion' => $request->estado_ejecucion,
                'observaciones' => $request->observaciones ?: $sentencia->observaciones
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Estado de ejecución actualizado',
                'data' => $sentencia->fresh()
            ]);

        } catch (\Exception $e) {
            Log::error('Error cambiando estado de sentencia:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al cambiar estado de ejecución'
            ], 500);
        }
    }

    /**
     * Obtener estadísticas de sentencias
     */
    public function estadisticas(): JsonResponse
    {
        try {
            $porEstado = Sentencia::selectRaw('estado_ejecucion, COUNT(*) as total')
                ->groupBy('estado_ejecucion')
                ->get()
                ->pluck('total', 'estado_ejecucion')
                ->toArray();

            $porMes = Sentencia::selectRaw("TO_CHAR(fecha_sentencia, 'YYYY-MM') as mes, COUNT(*) as total")
                ->whereNotNull('fecha_sentencia')
                ->groupBy('mes')
                ->orderBy('mes', 'desc')
                ->limit(12)
                ->get()
                ->toArray();

            $stats = [
                'por_estado' => $porEstado,
                'por_mes' => $porMes,
                'total' => Sentencia::count(),
                'pendientes' => Sentencia::pendientes()->count(),
                'ejecutadas' => Sentencia::ejecutadas()->count()
            ];

            return response()->json([
                'success' => true,
                'data' => $stats
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo estadísticas:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estadísticas'
            ], 500);
        }
    }
}
