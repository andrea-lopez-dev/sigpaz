<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoDocumento;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TipoDocumentoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = TipoDocumento::query();

            // Filtrar por estado si se solicita
            if ($request->has('activos')) {
                $activos = filter_var($request->get('activos'), FILTER_VALIDATE_BOOLEAN);
                $query->where('estado', $activos);
            }

            // Búsqueda por nombre
            if ($request->has('search')) {
                $search = $request->get('search');
                $query->where('nombre', 'like', "%{$search}%");
            }

            $query->orderBy('nombre', 'asc');
            $data = $query->get();

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de documento',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            // IMPORTANTE: Usar 'tipodocumento' (sin guión) que es el nombre de tu tabla
            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:tipodocumento,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $tipoDocumento = TipoDocumento::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de documento creado exitosamente',
                'data' => $tipoDocumento
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
                'message' => 'Error al crear el tipo de documento: ' . $e->getMessage(),
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $tipoDocumento = TipoDocumento::obtenerPorId($id);

            if (!$tipoDocumento) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de documento no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $tipoDocumento
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el tipo de documento',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoDocumento = TipoDocumento::obtenerPorId($id);

            if (!$tipoDocumento) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de documento no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:tipodocumento,nombre,' . $id . ',id_tipo_doc',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $tipoDocumento->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de documento actualizado exitosamente',
                'data' => $updated
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
                'message' => 'Error al actualizar el tipo de documento: ' . $e->getMessage(),
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoDocumento = TipoDocumento::obtenerPorId($id);

            if (!$tipoDocumento) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de documento no encontrado'
                ], 404);
            }

            $result = $tipoDocumento->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Tipo de documento eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el tipo de documento'
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

    public function listarActivos(): JsonResponse
    {
        try {
            $tiposDocumento = TipoDocumento::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $tiposDocumento,
                'total' => $tiposDocumento->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de documento activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoDocumento = TipoDocumento::obtenerPorId($id);

            if (!$tipoDocumento) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de documento no encontrado'
                ], 404);
            }

            // Si está activo y quiere desactivar, verificar si tiene personas
            if ($tipoDocumento->estado && $tipoDocumento->personas()->exists()) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede desactivar porque tiene personas asociadas'
                ], 400);
            }

            $tipoDocumento->estado = !$tipoDocumento->estado;
            $tipoDocumento->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $tipoDocumento->id_tipo_doc,
                    'nombre' => $tipoDocumento->nombre,
                    'estado' => $tipoDocumento->estado
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

    // Para diagnóstico
    public function diagnosticar(): JsonResponse
    {
        try {
            $diagnostico = [
                'model' => [
                    'table' => (new TipoDocumento)->getTable(),
                    'primary_key' => (new TipoDocumento)->getKeyName(),
                    'fillable' => (new TipoDocumento)->getFillable(),
                    'exists' => TipoDocumento::exists(),
                    'count' => TipoDocumento::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('tipodocumento'),
                    'columns' => \Schema::hasTable('tipodocumento') ? \Schema::getColumnListing('tipodocumento') : [],
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

    // Método para obtener estadísticas
    public function estadisticas(): JsonResponse
    {
        try {
            $tipos = TipoDocumento::withCount('personas')->get();

            $totalPersonas = $tipos->sum('personas_count');

            $estadisticas = $tipos->map(function($tipo) use ($totalPersonas) {
                return [
                    'id' => $tipo->id_tipo_doc,
                    'nombre' => $tipo->nombre,
                    'descripcion' => $tipo->descripcion,
                    'estado' => $tipo->estado,
                    'total_personas' => $tipo->personas_count,
                    'porcentaje' => $totalPersonas > 0
                        ? round(($tipo->personas_count / $totalPersonas) * 100, 2)
                        : 0
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $estadisticas,
                'total_personas' => $totalPersonas
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estadísticas',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }
}
