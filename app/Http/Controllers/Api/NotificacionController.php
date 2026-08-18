<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Contracts\NotificacionServiceInterface;
use App\Http\Requests\NotificacionRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use App\Domain\ValueObjects\Email;


class NotificacionController extends Controller
{
    public function __construct(
        protected NotificacionServiceInterface $notificacionService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado', 'destinatario']);
        $perPage = $request->get('per_page', 15);

        $result = $this->notificacionService->listarNotificaciones($perPage, $filters);

        return response()->json([
            'success' => true,
            'data' => $result->items(),
            'pagination' => [
                'current_page' => $result->currentPage(),
                'per_page' => $result->perPage(),
                'total' => $result->total(),
                'last_page' => $result->lastPage()
            ],
            'estadisticas' => $this->notificacionService->obtenerEstadisticas($filters)
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $notificacion = $this->notificacionService->obtenerNotificacion($id);

        return response()->json([
            'success' => true,
            'data' => $notificacion
        ]);
    }

    public function store(NotificacionRequest $request): JsonResponse
    {
        $notificacion = $this->notificacionService->crearNotificacion($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Notificación emitida exitosamente',
            'data' => $notificacion
        ], 201);
    }

    public function update(NotificacionRequest $request, int $id): JsonResponse
    {
        $notificacion = $this->notificacionService->actualizarNotificacion($id, $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Notificación actualizada exitosamente',
            'data' => $notificacion
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->notificacionService->obtenerNotificacion($id);
        // Soft delete
        // $this->notificacionService->eliminarNotificacion($id);

        return response()->json([
            'success' => true,
            'message' => 'Notificación eliminada exitosamente'
        ]);
    }

    public function cancel(Request $request, int $id): JsonResponse
    {
        $request->validate([
            'motivo' => 'required|string|min:5'
        ]);

        $this->notificacionService->cancelarNotificacion($id, $request->motivo);

        return response()->json([
            'success' => true,
            'message' => 'Notificación cancelada exitosamente'
        ]);
    }

    public function estadisticas(Request $request): JsonResponse
    {
        $filters = $request->only(['fecha_inicio', 'fecha_fin']);
        $estadisticas = $this->notificacionService->obtenerEstadisticas($filters);

        return response()->json([
            'success' => true,
            'data' => $estadisticas
        ]);
    }

    public function tipos(): JsonResponse
    {
        $tipos = $this->notificacionService->obtenerTiposNotificacion();

        return response()->json([
            'success' => true,
            'data' => $tipos
        ]);
    }

    public function denunciasDisponibles(): JsonResponse
    {
        $denuncias = $this->notificacionService->obtenerDenunciasDisponibles();

        return response()->json([
            'success' => true,
            'data' => $denuncias
        ]);
    }



public function generarConstancia(int $id)
{
    try {
        $result = $this->notificacionService->generarConstancia($id);

        // ✅ Devolver el PDF directamente (NO en base64)
        return response($result['pdf'], 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="' . $result['filename'] . '"'
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage()
        ], 500);
    }
}

    public function reporteDetallado(Request $request): JsonResponse
    {
        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado', 'destinatario']);
        $reporte = $this->notificacionService->obtenerReporteDetallado($filters);

        return response()->json([
            'success' => true,
            'data' => $reporte
        ]);
    }

public function exportarExcel(Request $request)
{
    try {
        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado']);
        $filePath = $this->notificacionService->exportarReporteExcel($filters);

        $fullPath = storage_path('app/public/' . $filePath);

        if (!file_exists($fullPath)) {
            return response()->json(['success' => false, 'message' => 'Archivo no encontrado'], 404);
        }

        return response()->download($fullPath, 'reporte_notificaciones.xlsx', [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

public function exportarExcelIndividual(int $id)
{
    try {
        $filePath = $this->notificacionService->exportarExcelIndividual($id);
        $fullPath = storage_path('app/public/' . $filePath);

        if (!file_exists($fullPath)) {
            return response()->json(['success' => false, 'message' => 'Archivo no encontrado'], 404);
        }

        return response()->download($fullPath, "notificacion_{$id}.xlsx", [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}
public function exportarReporteCompletoPDF(Request $request)
{
    try {
        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado']);
        $pdfContent = $this->notificacionService->exportarReporteCompletoPDF($filters);

        return response($pdfContent, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="reporte_completo_' . date('Ymd_His') . '.pdf"'
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

public function exportarReporteCompletoExcel(Request $request)
{
    try {
        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado']);
        $filePath = $this->notificacionService->exportarReporteExcel($filters);
        $fullPath = storage_path('app/public/' . $filePath);

        if (!file_exists($fullPath)) {
            return response()->json(['success' => false, 'message' => 'Archivo no encontrado'], 404);
        }

        return response()->download($fullPath, 'reporte_completo_' . date('Ymd_His') . '.xlsx', [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

public function enviarReportePorCorreo(Request $request)
{
    try {
        $request->validate([
            'email' => 'required|email'
        ]);

        $filters = $request->only(['fecha_inicio', 'fecha_fin', 'tipo_notificacion', 'estado']);
        $this->notificacionService->enviarReportePorCorreo($filters, $request->email);

        return response()->json([
            'success' => true,
            'message' => 'Reporte enviado exitosamente a ' . $request->email
        ]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}
}
