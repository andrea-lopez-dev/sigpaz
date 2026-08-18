<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Remision;
use App\Http\Requests\Remision\StoreRemisionRequest;
use App\Http\Resources\RemisionResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Sentencia;
use App\Models\Conciliacion;

class RemisionController extends Controller
{
    /**
     * Listar remisiones de una denuncia
     */
public function index(Request $request): JsonResponse
{
    try {
        $remisiones = Remision::with(['denuncia', 'institucion'])
            ->when($request->has('denuncia_id'), function($query) use ($request) {
                return $query->where('denuncia_id', $request->denuncia_id);
            })
            ->orderBy('fecha_remision', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $remisiones
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al obtener remisiones'
        ], 500);
    }
}

    /**
 * Crear una nueva remisión (con sentencia asociada)
 */
public function store(StoreRemisionRequest $request): JsonResponse
{
    DB::beginTransaction();

    try {
        $denunciaId = $request->denuncia_id;

        // Verificar que la denuncia tiene conciliación y sentencia
        $conciliacion = Conciliacion::where('denuncia_id', $denunciaId)->first();

        if (!$conciliacion) {
            return response()->json([
                'success' => false,
                'message' => 'No se encontró una conciliación para esta denuncia'
            ], 404);
        }

        $sentencia = $conciliacion->sentencia;

        if (!$sentencia) {
            return response()->json([
                'success' => false,
                'message' => 'La denuncia debe tener una sentencia antes de ser remitida'
            ], 422);
        }

        $remision = Remision::create([
            'denuncia_id' => $request->denuncia_id,
            'institucion_id' => $request->institucion_id,
            'fecha_remision' => now(),
            'motivo' => $request->motivo,
            'observaciones' => $request->observaciones ?? null
            // ❌ NO incluir 'activo' porque no existe en la tabla
        ]);

        DB::commit();

        return response()->json([
            'success' => true,
            'message' => 'Remisión creada exitosamente',
            'data' => $remision->load('institucion') // 👈 Solo cargar 'institucion'
        ], 201);

    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json([
            'success' => false,
            'message' => 'Error al crear remisión: ' . $e->getMessage()
        ], 500);
    }
}

    /**
     * Mostrar una remisión específica
     */
    public function show($id): JsonResponse
    {
        try {
            $remision = Remision::with('institucion', 'denuncia')->find($id);

            if (!$remision) {
                return response()->json([
                    'success' => false,
                    'message' => 'Remisión no encontrada'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => new RemisionResource($remision)
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener remisión'
            ], 500);
        }
    }

    /**
     * Eliminar una remisión
     */
    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $remision = Remision::find($id);

            if (!$remision) {
                return response()->json([
                    'success' => false,
                    'message' => 'Remisión no encontrada'
                ], 404);
            }

            $remision->delete();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Remisión eliminada exitosamente'
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar remisión'
            ], 500);
        }
    }
}
