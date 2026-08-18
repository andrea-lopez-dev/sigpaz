<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Contracts\PrestamoServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class PrestamoController extends Controller
{
    public function __construct(
        protected PrestamoServiceInterface $prestamoService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['estado', 'fecha_desde', 'fecha_hasta', 'personal_id', 'sort_field', 'sort_direction']);
        $perPage = $request->get('per_page', 15);

        $result = $this->prestamoService->listarPrestamos($perPage, $filters);

        return response()->json([
            'success' => true,
            'data' => $result->items(),
            'pagination' => [
                'current_page' => $result->currentPage(),
                'per_page' => $result->perPage(),
                'total' => $result->total(),
                'last_page' => $result->lastPage()
            ],
            'estadisticas' => $this->prestamoService->obtenerEstadisticas()
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $prestamo = $this->prestamoService->obtenerPrestamo($id);

        return response()->json([
            'success' => true,
            'data' => $prestamo
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'denuncia_id' => 'required|exists:denuncia,denuncia_id',
            'personal_id' => 'required|exists:personal,personal_id',
            'fecha_prestamo' => 'required|date',
            'fecha_retorno_prevista' => 'required|date|after:fecha_prestamo',
            'motivo' => 'required|string|min:5'
        ]);

        $prestamo = $this->prestamoService->crearPrestamo($validated);

        return response()->json([
            'success' => true,
            'message' => 'Préstamo solicitado exitosamente',
            'data' => $prestamo
        ], 201);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'fecha_retorno_prevista' => 'date|after:fecha_prestamo',
            'motivo' => 'string|min:5'
        ]);

        $prestamo = $this->prestamoService->actualizarPrestamo($id, $validated);

        return response()->json([
            'success' => true,
            'message' => 'Préstamo actualizado exitosamente',
            'data' => $prestamo
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->prestamoService->eliminarPrestamo($id);

        return response()->json([
            'success' => true,
            'message' => 'Préstamo eliminado exitosamente'
        ]);
    }

    public function registrarDevolucion(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'fecha_devolucion' => 'required|date',
            'usuario_recibido_id' => 'required|exists:usuario,usuario_id',
            'observaciones_devolucion' => 'nullable|string'
        ]);

        $prestamo = $this->prestamoService->registrarDevolucion($id, $validated);

        return response()->json([
            'success' => true,
            'message' => 'Devolución registrada exitosamente',
            'data' => $prestamo
        ]);
    }

    public function estadisticas(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerEstadisticas()
        ]);
    }

    public function prestamosActivos(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerPrestamosActivos()
        ]);
    }

    public function prestamosRetrasados(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerPrestamosRetrasados()
        ]);
    }

    public function historial(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerHistorial()
        ]);
    }

    public function denunciasDisponibles(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerDenunciasDisponibles()
        ]);
    }

    public function personalDisponible(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $this->prestamoService->obtenerPersonalDisponible()
        ]);
    }

    public function verificarDisponibilidad(Request $request): JsonResponse
    {
        $request->validate([
            'denuncia_id' => 'required|exists:denuncia,denuncia_id'
        ]);

        $disponible = $this->prestamoService->verificarDisponibilidad($request->denuncia_id);

        return response()->json([
            'success' => true,
            'data' => ['disponible' => $disponible]
        ]);
    }

    public function exportarExcel(Request $request): JsonResponse
    {
        $filters = $request->only(['estado', 'fecha_desde', 'fecha_hasta', 'personal_id']);
        $ruta = $this->prestamoService->exportarExcel($filters);

        return response()->json([
            'success' => true,
            'message' => 'Reporte generado exitosamente',
            'ruta_descarga' => $ruta
        ]);
    }
}
