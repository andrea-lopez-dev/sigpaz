<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Auditoria\AuditoriaService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class AuditoriaController extends Controller
{
    protected AuditoriaService $auditoriaService;

    public function __construct(AuditoriaService $auditoriaService)
    {
        $this->auditoriaService = $auditoriaService;
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $filtros = $request->only([
                'fecha_inicio', 'fecha_fin', 'usuario_id',
                'acciones', 'tabla_afectada', 'keyword', 'nivel',
                'pagina', 'por_pagina'
            ]);

            $resultados = $this->auditoriaService->listar($filtros);

            return response()->json([
                'success' => true,
                'data' => $resultados->items(),
                'pagination' => [
                    'current_page' => $resultados->currentPage(),
                    'per_page' => $resultados->perPage(),
                    'total' => $resultados->total(),
                    'last_page' => $resultados->lastPage()
                ]
            ]);
        } catch (\Exception $e) {
            Log::error('AuditoriaController@index - Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $log = $this->auditoriaService->obtenerPorId((int) $id);

            if (!$log) {
                return response()->json(['success' => false, 'message' => 'Registro no encontrado'], 404);
            }

            return response()->json(['success' => true, 'data' => $log]);
        } catch (\Exception $e) {
            Log::error('AuditoriaController@show - Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
        }
    }

    public function estadisticas(Request $request): JsonResponse
    {
        $filtros = $request->only(['fecha_inicio', 'fecha_fin', 'usuario_id', 'acciones']);
        $estadisticas = $this->auditoriaService->obtenerEstadisticas($filtros);
        return response()->json(['success' => true, 'data' => $estadisticas]);
    }

 public function exportar(Request $request)
    {
        try {
            $formato = $request->query('formato', 'csv');

            // Validar formato
            $formatosPermitidos = ['csv', 'excel', 'pdf'];
            if (!in_array($formato, $formatosPermitidos)) {
                return response()->json([
                    'success' => false,
                    'message' => "Formato no soportado. Permitidos: " . implode(', ', $formatosPermitidos)
                ], 400);
            }

            $filtros = $request->only([
                'fecha_inicio',
                'fecha_fin',
                'usuario_id',
                'acciones',
                'tabla_afectada',
                'keyword'
            ]);

            $opciones = [
                'titulo' => $request->query('titulo', 'Reporte de Auditoría SIGPAZ'),
                'orientacion' => $request->query('orientacion', 'landscape')
            ];

            Log::info('Iniciando exportación', [
                'formato' => $formato,
                'filtros' => $filtros
            ]);

            $contenido = $this->auditoriaService->exportar($filtros, $formato, $opciones);

            $nombreArchivo = 'auditoria_' . date('Y-m-d_His') . '.' . $this->getExtension($formato);

            return response($contenido)
                ->header('Content-Type', $this->getContentType($formato))
                ->header('Content-Disposition', 'attachment; filename="' . $nombreArchivo . '"')
                ->header('Content-Length', strlen($contenido))
                ->header('Cache-Control', 'private, max-age=0, must-revalidate');

        } catch (\Exception $e) {
            Log::error('Error en exportación: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Error al exportar: ' . $e->getMessage()
            ], 500);
        }
    }

    public function patrones(Request $request): JsonResponse
    {
        try {
            $filtros = $request->only(['fecha_inicio', 'fecha_fin', 'usuario_id']);
            $patrones = $this->auditoriaService->analizarPatrones($filtros);
            return response()->json(['success' => true, 'data' => $patrones]);
        } catch (\Exception $e) {
            Log::error('Error en patrones: ' . $e->getMessage());
            return response()->json(['success' => false, 'data' => [], 'message' => $e->getMessage()], 500);
        }
    }

    public function alertas(Request $request): JsonResponse
    {
        $filtros = $request->only(['fecha_inicio', 'fecha_fin', 'usuario_id']);
        $alertas = $this->auditoriaService->obtenerAlertas($filtros);
        return response()->json(['success' => true, 'data' => $alertas]);
    }

    public function buscar(Request $request): JsonResponse
    {
        try {
            $request->validate(['q' => 'required|string|min:2|max:100']);
            $filtros = $request->only(['fecha_inicio', 'fecha_fin', 'usuario_id']);
            $filtros['keyword'] = $request->q;

            $resultados = $this->auditoriaService->listar($filtros);

            return response()->json([
                'success' => true,
                'data' => $resultados->items(),
                'total' => $resultados->total()
            ]);
        } catch (\Exception $e) {
            Log::error('Error en búsqueda: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
        }
    }

    private function getContentType(string $formato): string
    {
        return match($formato) {
            'csv' => 'text/csv; charset=UTF-8',
            'json' => 'application/json',
            'pdf' => 'application/pdf',
            'excel' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            default => 'application/octet-stream'
        };
    }

    private function getExtension(string $formato): string
    {
        return match($formato) {
            'csv' => 'csv',
            'json' => 'json',
            'pdf' => 'pdf',
            'excel' => 'xlsx',
            default => 'bin'
        };
    }
}
