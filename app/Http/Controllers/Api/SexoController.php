<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sexo;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class SexoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Sexo::query();

            // Filtrar por estado si se solicita (COMO TIPOMEDIDA)
            if ($request->has('activos')) {
                $activos = filter_var($request->get('activos'), FILTER_VALIDATE_BOOLEAN);
                $query->where('estado', $activos);
            }

            // Búsqueda por nombre (COMO TIPOMEDIDA)
            if ($request->has('search')) {
                $search = $request->get('search');
                $query->where('nombre', 'like', "%{$search}%");
            }

            $query->orderBy('nombre', 'asc');
            $data = $query->get();

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()  // AÑADIR TOTAL COMO TIPOMEDIDA
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener sexos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();  // AÑADIR TRANSACCIÓN COMO TIPOMEDIDA

        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:sexo',  // AUMENTAR A 50 COMO TIPOMEDIDA
                'estado' => 'boolean'
            ]);

            $sexo = Sexo::crear($validated);

            DB::commit();  // AÑADIR COMMIT

            return response()->json([
                'success' => true,
                'message' => 'Sexo creado exitosamente',
                'data' => $sexo
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();  // AÑADIR ROLLBACK
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();  // AÑADIR ROLLBACK
            return response()->json([
                'success' => false,
                'message' => 'Error al crear el sexo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $sexo = Sexo::obtenerPorId($id);

            if (!$sexo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sexo no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $sexo
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el sexo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();  // AÑADIR TRANSACCIÓN COMO TIPOMEDIDA

        try {
            $sexo = Sexo::obtenerPorId($id);

            if (!$sexo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sexo no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:sexo,nombre,' . $id . ',id_sexo',
                'estado' => 'boolean'
            ]);

            $sexo->actualizarDatos($validated);

            DB::commit();  // AÑADIR COMMIT

            return response()->json([
                'success' => true,
                'message' => 'Sexo actualizado exitosamente',
                'data' => $sexo->fresh()  // AÑADIR FRESH COMO TIPOMEDIDA
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            DB::rollBack();  // AÑADIR ROLLBACK
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();  // AÑADIR ROLLBACK
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar el sexo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();  // AÑADIR TRANSACCIÓN COMO TIPOMEDIDA

        try {
            $sexo = Sexo::obtenerPorId($id);

            if (!$sexo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sexo no encontrado'
                ], 404);
            }

            // Verificar si está siendo usado antes de eliminar (COMO TIPOMEDIDA)
            $usoCount = $sexo->personas()->count();

            if ($usoCount > 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede eliminar el sexo porque está siendo usado por ' . $usoCount . ' persona(s)'
                ], 400);
            }

            $sexo->eliminarLogico();

            DB::commit();  // AÑADIR COMMIT

            return response()->json([
                'success' => true,
                'message' => 'Sexo eliminado exitosamente'
            ]);

        } catch (\Exception $e) {
            DB::rollBack();  // AÑADIR ROLLBACK
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 400);
        }
    }

    public function listarActivos(): JsonResponse
    {
        try {
            $sexos = Sexo::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $sexos,
                'total' => $sexos->count()  // AÑADIR TOTAL COMO TIPOMEDIDA
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener sexos activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // ========== MÉTODOS ADICIONALES IGUALES A TIPOMEDIDA ==========

    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $sexo = Sexo::obtenerPorId($id);

            if (!$sexo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sexo no encontrado'
                ], 404);
            }

            // Cambiar estado
            $sexo->estado = !$sexo->estado;
            $sexo->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $sexo->id_sexo,
                    'nombre' => $sexo->nombre,
                    'estado' => $sexo->estado
                ]
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error al cambiar el estado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function buscar(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'termino' => 'required|string|min:2'
            ]);

            $termino = $request->get('termino');

            $resultados = Sexo::where('nombre', 'like', "%{$termino}%")
                ->orderBy('nombre', 'asc')
                ->limit(20)
                ->get();

            return response()->json([
                'success' => true,
                'data' => $resultados,
                'total' => $resultados->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error en la búsqueda',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para diagnóstico (COMO TIPOMEDIDA)
    public function diagnosticar(): JsonResponse
    {
        try {
            $diagnostico = [
                'model' => [
                    'table' => (new Sexo)->getTable(),
                    'primary_key' => (new Sexo)->getKeyName(),
                    'fillable' => (new Sexo)->getFillable(),
                    'exists' => Sexo::exists(),
                    'count' => Sexo::count(),
                ],
                'database' => [
                    'connected' => DB::connection()->getPdo() ? true : false,
                    'table_exists' => \Schema::hasTable('sexo'),
                    'columns' => \Schema::hasTable('sexo') ? \Schema::getColumnListing('sexo') : [],
                ],
                'test_record' => null
            ];

            // Intentar crear un registro de prueba
            try {
                $test = Sexo::create([
                    'nombre' => 'TEST_DIAGNOSTICO_' . time(),
                    'estado' => true
                ]);
                $diagnostico['test_record'] = $test->toArray();
                $test->delete(); // Limpiar
            } catch (\Exception $e) {
                $diagnostico['test_error'] = $e->getMessage();
            }

            return response()->json([
                'success' => true,
                'diagnostico' => $diagnostico
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error en diagnóstico',
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ], 500);
        }
    }

    // ========== MÉTODOS EXTRAS SI QUIERES SER EXACTAMENTE IGUAL ==========

    public function estadisticas(): JsonResponse
    {
        try {
            $estadisticas = [
                'total' => Sexo::count(),
                'activos' => Sexo::where('estado', true)->count(),
                'inactivos' => Sexo::where('estado', false)->count(),
                'por_sexo' => DB::table('personas')
                    ->join('sexo', 'personas.id_sexo', '=', 'sexo.id_sexo')
                    ->select('sexo.nombre', DB::raw('COUNT(*) as total'))
                    ->groupBy('sexo.id_sexo', 'sexo.nombre')
                    ->get()
            ];

            return response()->json([
                'success' => true,
                'data' => $estadisticas
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estadísticas',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function generarReporte($id): JsonResponse
    {
        try {
            $sexo = Sexo::obtenerPorId($id);

            if (!$sexo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sexo no encontrado'
                ], 404);
            }

            $reporte = $sexo->generarReporte();

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $sexo->id_sexo,
                    'nombre' => $sexo->nombre,
                    'reporte' => $reporte
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }
}
