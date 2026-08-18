<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ConciliacionService;
use App\Repositories\ConciliacionRepository;
use App\Http\Requests\Conciliacion\StoreConciliacionRequest;
use App\Http\Requests\Conciliacion\StoreVotoRequest;
use App\Http\Resources\ConciliacionResource;
use App\Models\Conciliacion;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ConciliacionController extends Controller
{
    public function __construct(
        private ConciliacionService $conciliacionService,
        private ConciliacionRepository $conciliacionRepository
    ) {}

    /**
     * Listar conciliaciones con filtros
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $perPage = $request->get('per_page', 15);
            $filters = $request->only(['estado', 'denuncia_id', 'fecha_desde', 'fecha_hasta']);

            $conciliaciones = $this->conciliacionRepository->paginate($perPage, $filters);

            return response()->json([
                'success' => true,
                'data' => ConciliacionResource::collection($conciliaciones->items()),
                'meta' => [
                    'current_page' => $conciliaciones->currentPage(),
                    'last_page' => $conciliaciones->lastPage(),
                    'per_page' => $conciliaciones->perPage(),
                    'total' => $conciliaciones->total()
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error listando conciliaciones:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al listar conciliaciones'
            ], 500);
        }
    }

  /**
 * Mostrar una conciliación con sus votos
 */
public function show(int $id): JsonResponse
{
    try {
        $conciliacion = $this->conciliacionRepository->findByIdWithVotos($id);

        if (!$conciliacion) {
            return response()->json([
                'success' => false,
                'message' => 'Conciliación no encontrada'
            ], 404);
        }

        // Calcular votos a favor y en contra
        $votosFavor = 0;
        $votosContra = 0;

        if ($conciliacion->votos && $conciliacion->votos->count() > 0) {
            $votosFavor = $conciliacion->votos->where('voto', true)->count();
            $votosContra = $conciliacion->votos->where('voto', false)->count();
        }

        // Agregar propiedades calculadas al objeto
        $conciliacion->votos_favor = $votosFavor;
        $conciliacion->votos_contra = $votosContra;
        $conciliacion->total_votos = $conciliacion->votos ? $conciliacion->votos->count() : 0;
        $conciliacion->votos_restantes = 6 - ($conciliacion->votos ? $conciliacion->votos->count() : 0);
        $conciliacion->puede_votar = $conciliacion->estado !== 'COMPLETA' &&
                                     ($conciliacion->votos ? $conciliacion->votos->count() : 0) < 6;

        return response()->json([
            'success' => true,
            'data' => new ConciliacionResource($conciliacion)
        ]);

    } catch (\Exception $e) {
        Log::error('Error en show de conciliación:', [
            'id' => $id,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener conciliación: ' . $e->getMessage()
        ], 500);
    }
}

    /**
     * Crear nueva conciliación
     */
    public function store(StoreConciliacionRequest $request): JsonResponse
    {
        try {
            $conciliacion = $this->conciliacionService->crearConciliacion($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Conciliación creada exitosamente',
                'data' => new ConciliacionResource($conciliacion)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creando conciliación:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Denuncia no encontrada' ? 404 : 422);
        }
    }

    /**
     * Registrar un voto en una conciliación
     */
    public function registrarVoto(StoreVotoRequest $request, int $conciliacionId): JsonResponse
    {
        try {
            $conciliacion = $this->conciliacionService->registrarVoto(
                $conciliacionId,
                $request->validated()
            );

            return response()->json([
                'success' => true,
                'message' => 'Voto registrado exitosamente',
                'data' => [
                    'conciliacion' => new ConciliacionResource($conciliacion),
                    'resumen' => $conciliacion->getResumenVotos()
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error registrando voto:', [
                'conciliacion_id' => $conciliacionId,
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Conciliación no encontrada' ? 404 : 422);
        }
    }

    /**
     * Obtener personal disponible para votar en una conciliación
     */
    public function personalDisponible(int $conciliacionId): JsonResponse
    {
        try {
            $disponible = $this->conciliacionService->getPersonalDisponible($conciliacionId);

            return response()->json([
                'success' => true,
                'data' => $disponible
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Conciliación no encontrada' ? 404 : 500);
        }
    }

    /**
     * Obtener resumen detallado de una conciliación
     */
    public function resumen(int $conciliacionId): JsonResponse
    {
        try {
            $resumen = $this->conciliacionService->getResumenConciliacion($conciliacionId);

            return response()->json([
                'success' => true,
                'data' => $resumen
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Conciliación no encontrada' ? 404 : 500);
        }
    }

    /**
     * Verificar si una denuncia tiene conciliación
     */
    public function verificarDenuncia(int $denunciaId): JsonResponse
    {
        try {
            $conciliacion = $this->conciliacionRepository->findByDenunciaId($denunciaId);

            return response()->json([
                'success' => true,
                'data' => [
                    'denuncia_id' => $denunciaId,
                    'tiene_conciliacion' => $conciliacion !== null,
                    'conciliacion' => $conciliacion ? new ConciliacionResource($conciliacion) : null
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al verificar denuncia'
            ], 500);
        }
    }

    /**
     * Estadísticas generales de conciliaciones
     */
    public function estadisticas(): JsonResponse
    {
        try {
            $stats = [
                'totales' => [
                    'completas' => Conciliacion::completas()->count(),
                    'en_proceso' => Conciliacion::enProceso()->count(),
                    'incompletas' => Conciliacion::incompletas()->count(),
                    'activas' => Conciliacion::activas()->count()
                ],
                'votaciones' => [
                    'promedio_votos' => Conciliacion::avg(DB::raw('(SELECT COUNT(*) FROM votoconciliacion WHERE votoconciliacion.conciliacion_id = conciliacion.conciliacion_id)')),
                    'total_votos_emitidos' => \App\Models\VotoConciliacion::count()
                ]
            ];

            return response()->json([
                'success' => true,
                'data' => $stats
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estadísticas'
            ], 500);
        }
    }
    public function iniciar(int $id): JsonResponse
{
    try {
        $conciliacion = $this->conciliacionRepository->findById($id);

        if (!$conciliacion) {
            return response()->json([
                'success' => false,
                'message' => 'Conciliación no encontrada'
            ], 404);
        }

        // Cambiar estado a EN_PROCESO
        $conciliacion->estado = 'EN_PROCESO';
        $conciliacion->save();

        return response()->json([
            'success' => true,
            'message' => 'Conciliación iniciada exitosamente',
            'data' => new ConciliacionResource($conciliacion)
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al iniciar conciliación'
        ], 500);
    }
}
}
