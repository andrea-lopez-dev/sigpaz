<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Institucion;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class InstitucionController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Institucion::query();

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
                'message' => 'Error al obtener instituciones',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            // IMPORTANTE: Verifica el nombre EXACTO de tu tabla
            $validated = $request->validate([
                'nombre' => 'required|string|max:150|unique:institucion,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $institucion = Institucion::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Institución creada exitosamente',
                'data' => $institucion
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
                'message' => 'Error al crear la institución',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $institucion = Institucion::obtenerPorId($id);

            if (!$institucion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Institución no encontrada'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $institucion
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener la institución',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $institucion = Institucion::obtenerPorId($id);

            if (!$institucion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Institución no encontrada'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:150|unique:institucion,nombre,' . $id . ',id_institucion',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $institucion->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Institución actualizada exitosamente',
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
                'message' => 'Error al actualizar la institución',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $institucion = Institucion::obtenerPorId($id);

            if (!$institucion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Institución no encontrada'
                ], 404);
            }

            $result = $institucion->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Institución eliminada exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar la institución'
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
            $instituciones = Institucion::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $instituciones,
                'total' => $instituciones->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener instituciones activas',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado (que usa tu componente Angular)
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $institucion = Institucion::obtenerPorId($id);

            if (!$institucion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Institución no encontrada'
                ], 404);
            }

            $institucion->estado = !$institucion->estado;
            $institucion->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $institucion->id_institucion,
                    'nombre' => $institucion->nombre,
                    'estado' => $institucion->estado
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
                    'table' => (new Institucion)->getTable(),
                    'primary_key' => (new Institucion)->getKeyName(),
                    'fillable' => (new Institucion)->getFillable(),
                    'exists' => Institucion::exists(),
                    'count' => Institucion::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('institucion'),
                    'columns' => \Schema::hasTable('institucion') ? \Schema::getColumnListing('institucion') : [],
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
