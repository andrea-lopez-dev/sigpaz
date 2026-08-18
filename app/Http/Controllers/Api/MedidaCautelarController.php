<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MedidaCautelar;
use App\Services\ConciliacionDisponibleService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MedidaCautelarController extends Controller
{
    public function __construct(
        private ConciliacionDisponibleService $disponibleService
    ) {}

    /**
     * Listar medidas cautelares con filtros
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = MedidaCautelar::with(['conciliacion.denuncia.persona', 'tipoMedida']);

            // Filtros
            if ($request->has('conciliacion_id')) {
                $query->where('conciliacion_id', $request->conciliacion_id);
            }

            if ($request->has('tipo_medida_id')) {
                $query->where('tipo_medida_id', $request->tipo_medida_id);
            }

            if ($request->has('estado')) {
                $query->where('estado', $request->estado);
            }

            if ($request->has('vigentes') && $request->vigentes) {
                $query->vigentes();
            }

            if ($request->has('fecha_desde') && $request->has('fecha_hasta')) {
                $query->whereBetween('fecha_inicio', [$request->fecha_desde, $request->fecha_hasta]);
            }

            $medidas = $query->orderBy('fecha_inicio', 'desc')->paginate($request->get('per_page', 15));

            // Transformar los items sin reasignar la variable original
            $items = $medidas->getCollection()->map(function($medida) {
                $medidaArray = $medida->toArray();
                $medidaArray['fecha_vencimiento'] = $medida->fecha_vencimiento?->format('Y-m-d');
                $medidaArray['dias_restantes'] = $medida->dias_restantes;
                $medidaArray['esta_vigente'] = $medida->esta_vigente;
                return $medidaArray;
            });

            return response()->json([
                'success' => true,
                'data' => $items,
                'meta' => [
                    'current_page' => $medidas->currentPage(),
                    'last_page' => $medidas->lastPage(),
                    'per_page' => $medidas->perPage(),
                    'total' => $medidas->total()
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error listando medidas cautelares:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al listar medidas cautelares'
            ], 500);
        }
    }

    /**
     * Mostrar una medida cautelar específica
     */
    public function show(int $id): JsonResponse
    {
        try {
            $medida = MedidaCautelar::with([
                'conciliacion.denuncia.persona',
                'conciliacion.votos.personal.persona',
                'tipoMedida'
            ])->find($id);

            if (!$medida) {
                return response()->json([
                    'success' => false,
                    'message' => 'Medida cautelar no encontrada'
                ], 404);
            }

            // Crear un array con la información adicional sin modificar el modelo original
            $data = $medida->toArray();

            // Agregar información calculada
            $data['fecha_vencimiento'] = $medida->fecha_vencimiento?->format('Y-m-d');
            $data['dias_restantes'] = $medida->dias_restantes;
            $data['esta_vigente'] = $medida->esta_vigente;

            // Información adicional de la conciliación
            $data['informacion_conciliacion'] = [
                'denuncia' => $medida->conciliacion?->denuncia ? [
                    'denuncia_id' => $medida->conciliacion->denuncia->denuncia_id,
                    'numero_expediente' => $medida->conciliacion->denuncia->numero_expediente,
                    'fecha_ingreso' => $medida->conciliacion->denuncia->fecha_ingreso?->format('Y-m-d')
                ] : null,
                'votos' => $medida->conciliacion ? [
                    'total' => $medida->conciliacion->votos->count(),
                    'favor' => $medida->conciliacion->votos->where('voto', true)->count(),
                    'contra' => $medida->conciliacion->votos->where('voto', false)->count()
                ] : null,
                'resultado_final' => $medida->conciliacion?->resultado_final
            ];

            return response()->json([
                'success' => true,
                'data' => $data
            ]);

        } catch (\Exception $e) {
            Log::error('Error mostrando medida cautelar:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener medida cautelar'
            ], 500);
        }
    }

    /**
     * Crear nueva medida cautelar
     */
   public function store(Request $request): JsonResponse
{
    try {
        Log::info('📥 Datos recibidos para medida cautelar:', $request->all());

        $validator = Validator::make($request->all(), [
            'conciliacion_id' => 'required|integer|exists:conciliacion,conciliacion_id',
            'tipo_medida_id' => 'required|integer|exists:tipomedida,tipo_medida_id',
            'fecha_inicio' => 'required|date',
            'duracion_dias' => 'nullable|integer|min:1',
            'descripcion' => 'required|string',
            'estado' => 'sometimes|in:ACTIVA,CUMPLIDA,VENCIDA,REVOCADA,SUSPENDIDA,PRORROGADA', // 👈 Cambiado a sometimes
            'observaciones' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Preparar datos con estado por defecto
        $data = $request->all();
        if (!isset($data['estado'])) {
            $data['estado'] = 'ACTIVA'; // 👈 Estado por defecto
        }

        // Verificar disponibilidad
        $disponibilidad = $this->disponibleService->puedeTenerMedidaCautelar($request->conciliacion_id);

        if (!$disponibilidad['puede']) {
            return response()->json([
                'success' => false,
                'message' => 'No se puede crear la medida cautelar',
                'motivos' => $disponibilidad['motivos']
            ], 422);
        }

        $medida = MedidaCautelar::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Medida cautelar creada exitosamente',
            'data' => $medida->load(['conciliacion', 'tipoMedida'])
        ], 201);

    } catch (\Exception $e) {
        Log::error('Error creando medida cautelar:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al crear medida cautelar: ' . $e->getMessage()
        ], 500);
    }
}
    /**
     * Actualizar medida cautelar
     */
    public function update(Request $request, int $id): JsonResponse
    {
        try {
            $medida = MedidaCautelar::find($id);

            if (!$medida) {
                return response()->json([
                    'success' => false,
                    'message' => 'Medida cautelar no encontrada'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'tipo_medida_id' => 'sometimes|integer|exists:tipomedida,tipo_medida_id',
                'fecha_inicio' => 'sometimes|date',
                'duracion_dias' => 'nullable|integer|min:1',
                'descripcion' => 'sometimes|string',
                'estado' => 'sometimes|in:ACTIVA,CUMPLIDA,VENCIDA,REVOCADA,SUSPENDIDA,PRORROGADA',
                'observaciones' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            $medida->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Medida cautelar actualizada exitosamente',
                'data' => $medida->fresh(['conciliacion', 'tipoMedida'])
            ]);

        } catch (\Exception $e) {
            Log::error('Error actualizando medida cautelar:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar medida cautelar'
            ], 500);
        }
    }

    /**
     * Eliminar medida cautelar
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $medida = MedidaCautelar::find($id);

            if (!$medida) {
                return response()->json([
                    'success' => false,
                    'message' => 'Medida cautelar no encontrada'
                ], 404);
            }

            $medida->delete();

            return response()->json([
                'success' => true,
                'message' => 'Medida cautelar eliminada exitosamente'
            ]);

        } catch (\Exception $e) {
            Log::error('Error eliminando medida cautelar:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar medida cautelar'
            ], 500);
        }
    }

    /**
     * Cambiar estado de la medida cautelar
     */
    public function cambiarEstado(Request $request, int $id): JsonResponse
    {
        try {
            $medida = MedidaCautelar::find($id);

            if (!$medida) {
                return response()->json([
                    'success' => false,
                    'message' => 'Medida cautelar no encontrada'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'estado' => 'required|in:ACTIVA,CUMPLIDA,VENCIDA,REVOCADA,SUSPENDIDA,PRORROGADA',
                'observaciones' => 'nullable|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            $medida->update([
                'estado' => $request->estado,
                'observaciones' => $request->observaciones ?: $medida->observaciones
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Estado de medida cautelar actualizado',
                'data' => $medida->fresh()
            ]);

        } catch (\Exception $e) {
            Log::error('Error cambiando estado de medida:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al cambiar estado'
            ], 500);
        }
    }

    /**
     * Prorrogar medida cautelar
     */
    public function prorrogar(Request $request, int $id): JsonResponse
    {
        try {
            $medida = MedidaCautelar::find($id);

            if (!$medida) {
                return response()->json([
                    'success' => false,
                    'message' => 'Medida cautelar no encontrada'
                ], 404);
            }

            $validator = Validator::make($request->all(), [
                'dias_prorroga' => 'required|integer|min:1',
                'motivo' => 'required|string'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'errors' => $validator->errors()
                ], 422);
            }

            // Actualizar duración y estado
            $medida->duracion_dias = ($medida->duracion_dias ?? 0) + $request->dias_prorroga;
            $medida->estado = 'PRORROGADA';
            $medida->observaciones = ($medida->observaciones ? $medida->observaciones . "\n" : '') .
                "Prórroga de {$request->dias_prorroga} días: {$request->motivo}";
            $medida->save();

            return response()->json([
                'success' => true,
                'message' => 'Medida cautelar prorrogada exitosamente',
                'data' => $medida->fresh()
            ]);

        } catch (\Exception $e) {
            Log::error('Error prorrogando medida:', ['id' => $id, 'error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al prorrogar medida'
            ], 500);
        }
    }

    /**
     * Obtener estadísticas de medidas cautelares
     */
    public function estadisticas(): JsonResponse
    {
        try {
            $porEstado = MedidaCautelar::selectRaw('estado, COUNT(*) as total')
                ->groupBy('estado')
                ->get()
                ->pluck('total', 'estado')
                ->toArray();

            $porTipo = MedidaCautelar::with('tipoMedida')
                ->selectRaw('tipo_medida_id, COUNT(*) as total')
                ->groupBy('tipo_medida_id')
                ->get()
                ->mapWithKeys(function($item) {
                    $nombre = $item->tipoMedida?->nombre ?? 'Desconocido';
                    return [$nombre => $item->total];
                })
                ->toArray();

            $vigentes = MedidaCautelar::vigentes()->count();

            $proximasAVencer = MedidaCautelar::vigentes()
                ->whereNotNull('duracion_dias')
                ->get()
                ->filter(function($medida) {
                    return $medida->dias_restantes && $medida->dias_restantes <= 7;
                })
                ->count();

            $stats = [
                'por_estado' => $porEstado,
                'por_tipo' => $porTipo,
                'vigentes' => $vigentes,
                'total' => MedidaCautelar::count(),
                'proximas_a_vencer' => $proximasAVencer
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
