<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Denuncia;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ExportController extends Controller
{
    public function exportarExpedientePDF(Request $request)
    {
        try {
            $denunciaId = $request->input('denuncia_id');

            if (!$denunciaId) {
                return response()->json([
                    'success' => false,
                    'message' => 'ID de denuncia requerido'
                ], 400);
            }

            $denuncia = Denuncia::with(['persona', 'tipoConflicto', 'estadoDenuncia'])
                ->find($denunciaId);

            if (!$denuncia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Denuncia no encontrada'
                ], 404);
            }

            $data = [
                'denuncia' => $denuncia,
                'fecha_generacion' => now()->format('d/m/Y H:i:s'),
                'generado_por' => auth()->user()->nombre_usuario ?? 'Sistema'
            ];

            // Verificar que la vista existe
            if (!view()->exists('exports.expediente-pdf')) {
                Log::error('Vista no encontrada: exports.expediente-pdf');
                return response()->json([
                    'success' => false,
                    'message' => 'Vista PDF no encontrada'
                ], 500);
            }

            $pdf = Pdf::loadView('exports.expediente-pdf', $data);
            $pdf->setPaper('A4', 'portrait');

            return $pdf->download('expediente_' . ($denuncia->numero_expediente ?? $denunciaId) . '.pdf');

        } catch (\Exception $e) {
            Log::error('Error exportando PDF: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());

            return response()->json([
                'success' => false,
                'message' => 'Error al generar el PDF: ' . $e->getMessage()
            ], 500);
        }
    }
}
