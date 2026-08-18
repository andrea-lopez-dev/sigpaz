<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ConciliacionDisponibleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class ConciliacionDisponibleController extends Controller
{
    public function __construct(
        private ConciliacionDisponibleService $disponibleService
    ) {}

    /**
     * Listar conciliaciones disponibles para sentencia
     */
    public function paraSentencia(): JsonResponse
    {
        try {
            $disponibles = $this->disponibleService->getDisponiblesParaSentencia();

            return response()->json([
                'success' => true,
                'data' => $disponibles,
                'total' => $disponibles->count()
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo conciliaciones para sentencia:', [
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener conciliaciones disponibles para sentencia'
            ], 500);
        }
    }

    /**
     * Listar conciliaciones disponibles para medida cautelar
     */
    public function paraMedidaCautelar(): JsonResponse
    {
        try {
            $disponibles = $this->disponibleService->getDisponiblesParaMedidaCautelar();

            return response()->json([
                'success' => true,
                'data' => $disponibles,
                'total' => $disponibles->count()
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo conciliaciones para medida cautelar:', [
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener conciliaciones disponibles para medida cautelar'
            ], 500);
        }
    }

    /**
     * Listar todas las conciliaciones consolidadas
     */
    public function consolidadas(): JsonResponse
    {
        try {
            $consolidadas = $this->disponibleService->getConsolidadas();

            return response()->json([
                'success' => true,
                'data' => $consolidadas,
                'total' => $consolidadas->count()
            ]);

        } catch (\Exception $e) {
            Log::error('Error obteniendo conciliaciones consolidadas:', [
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al obtener conciliaciones consolidadas'
            ], 500);
        }
    }

    /**
     * Verificar disponibilidad de una conciliación específica
     */
    public function verificar(int $conciliacionId): JsonResponse
    {
        try {
            $paraSentencia = $this->disponibleService->puedeTenerSentencia($conciliacionId);
            $paraMedida = $this->disponibleService->puedeTenerMedidaCautelar($conciliacionId);

            return response()->json([
                'success' => true,
                'data' => [
                    'conciliacion_id' => $conciliacionId,
                    'para_sentencia' => $paraSentencia,
                    'para_medida_cautelar' => $paraMedida
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Error verificando disponibilidad:', [
                'conciliacion_id' => $conciliacionId,
                'error' => $e->getMessage()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al verificar disponibilidad'
            ], 500);
        }
    }

    public function paraNuevaConciliacion(): JsonResponse
{
    try {
        $disponibles = $this->disponibleService->getDisponiblesParaNuevaConciliacion();

        return response()->json([
            'success' => true,
            'data' => $disponibles,
            'total' => $disponibles->count()
        ]);
    } catch (\Exception $e) {
        Log::error('Error obteniendo conciliaciones para nueva conciliación:', [
            'error' => $e->getMessage()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener conciliaciones disponibles'
        ], 500);
    }
}

/**
 * Listar conciliaciones disponibles para remisión
 */
public function paraRemision(): JsonResponse
{
    try {
        $disponibles = $this->disponibleService->getDisponiblesParaRemision();

        return response()->json([
            'success' => true,
            'data' => $disponibles,
            'total' => $disponibles->count()
        ]);

    } catch (\Exception $e) {
        Log::error('Error obteniendo conciliaciones para remisión:', [
            'error' => $e->getMessage()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener conciliaciones disponibles para remisión'
        ], 500);
    }
}

}
