<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Involucra;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class InvolucraController extends Controller
{
    // ========== MÉTODOS CRUD ==========

    public function index(Request $request): JsonResponse
    {
        try {
            $query = Involucra::with(['denuncia', 'persona']);

            if ($request->has('id_denuncia')) {
                $query->where('id_denuncia', $request->id_denuncia);
            }

            if ($request->has('id_persona')) {
                $query->where('id_persona', $request->id_persona);
            }

            if ($request->has('rol')) {
                $query->where('rol_en_denuncia', 'LIKE', '%' . $request->rol . '%');
            }

            // Búsqueda general
            if ($request->has('search')) {
                $search = $request->get('search');
                $query->where(function($q) use ($search) {
                    $q->where('rol_en_denuncia', 'like', "%{$search}%")
                      ->orWhereHas('persona', function($q2) use ($search) {
                          $q2->where('nombres', 'like', "%{$search}%")
                             ->orWhere('apellidos', 'like', "%{$search}%")
                             ->orWhere('numero_documento', 'like', "%{$search}%");
                      });
                });
            }

            $perPage = $request->get('per_page', 15);
            $data = $query->paginate($perPage);

            return response()->json([
                'success' => true,
                'data' => $data->items(),
                'pagination' => [
                    'total' => $data->total(),
                    'per_page' => $data->perPage(),
                    'current_page' => $data->currentPage(),
                    'last_page' => $data->lastPage(),
                    'from' => $data->firstItem(),
                    'to' => $data->lastItem()
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener los involucrados',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $validated = $request->validate([
                'id_denuncia' => 'required|integer|exists:denuncia,id_denuncia',
                'id_persona' => 'required|integer|exists:persona,id_persona',
                'rol_en_denuncia' => 'required|string|max:100',
                'descripcion_rol' => 'nullable|string|max:500'
            ]);

            $involucra = Involucra::agregar(
                $validated['id_denuncia'],
                $validated['id_persona'],
                $validated['rol_en_denuncia']
            );

            // Si viene descripción del rol, actualizar
            if (isset($validated['descripcion_rol'])) {
                $involucra->descripcion_rol = $validated['descripcion_rol'];
                $involucra->save();
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Persona agregada como involucrada exitosamente',
                'data' => $involucra->load(['denuncia', 'persona'])
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 400);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $involucra = Involucra::with(['denuncia', 'persona'])->obtenerPorId($id);

            if (!$involucra) {
                return response()->json([
                    'success' => false,
                    'message' => 'Involucrado no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $involucra
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $involucra = Involucra::obtenerPorId($id);

            if (!$involucra) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Involucrado no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'rol_en_denuncia' => 'required|string|max:100',
                'descripcion_rol' => 'nullable|string|max:500'
            ]);

            $involucra->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Involucrado actualizado exitosamente',
                'data' => $involucra->fresh()
            ]);

        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar el involucrado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $involucra = Involucra::obtenerPorId($id);

            if (!$involucra) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Involucrado no encontrado'
                ], 404);
            }

            $result = $involucra->remover();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Involucrado removido exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo remover el involucrado'
                ], 400);
            }

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 400);
        }
    }

    // ========== MÉTODOS ESPECÍFICOS ==========

    public function listarPorDenuncia($idDenuncia): JsonResponse
    {
        try {
            $involucrados = Involucra::listarPorDenuncia($idDenuncia);

            return response()->json([
                'success' => true,
                'data' => $involucrados,
                'total' => $involucrados->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener involucrados por denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function generarReportePorDenuncia($idDenuncia): JsonResponse
    {
        try {
            $involucra = new Involucra();
            $reporte = $involucra->generarReportePorDenuncia($idDenuncia);

            return response()->json([
                'success' => true,
                'data' => $reporte
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // ========== MÉTODOS ADICIONALES ==========

    public function buscar(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'search' => 'required|string|min:2'
            ]);

            $involucrados = Involucra::with(['denuncia', 'persona'])
                ->where('rol_en_denuncia', 'like', "%{$request->search}%")
                ->orWhereHas('persona', function($q) use ($request) {
                    $q->where('nombres', 'like', "%{$request->search}%")
                      ->orWhere('apellidos', 'like', "%{$request->search}%")
                      ->orWhere('numero_documento', 'like', "%{$request->search}%");
                })
                ->limit(10)
                ->get();

            return response()->json([
                'success' => true,
                'data' => $involucrados,
                'total' => $involucrados->count()
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error en la búsqueda',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function estadisticasPorDenuncia($idDenuncia): JsonResponse
    {
        try {
            $involucrados = Involucra::where('id_denuncia', $idDenuncia)->get();

            $estadisticas = [
                'total_involucrados' => $involucrados->count(),
                'roles_unicos' => $involucrados->unique('rol_en_denuncia')->count(),
                'roles_distribucion' => $involucrados->groupBy('rol_en_denuncia')
                    ->map(function ($grupo) {
                        return $grupo->count();
                    })
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

    // Para diagnóstico
    public function diagnosticar(): JsonResponse
    {
        try {
            $diagnostico = [
                'model' => [
                    'table' => (new Involucra)->getTable(),
                    'primary_key' => (new Involucra)->getKeyName(),
                    'fillable' => (new Involucra)->getFillable(),
                    'exists' => Involucra::exists(),
                    'count' => Involucra::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('involucra'),
                    'columns' => \Schema::hasTable('involucra') ? \Schema::getColumnListing('involucra') : [],
                ]
            ];

            return response()->json([
                'success' => true,
                'diagnostico' => $diagnostico
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error en diagnóstico',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
