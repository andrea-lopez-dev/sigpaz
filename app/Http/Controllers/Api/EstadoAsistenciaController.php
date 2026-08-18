<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EstadoAsistencia;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class EstadoAsistenciaController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = EstadoAsistencia::query();

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
                'message' => 'Error al obtener estados de asistencia',
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
                'nombre' => 'required|string|max:50|unique:estadoasistencia,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $estadoAsistencia = EstadoAsistencia::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado de asistencia creado exitosamente',
                'data' => $estadoAsistencia
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
                'message' => 'Error al crear el estado de asistencia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $estadoAsistencia = EstadoAsistencia::obtenerPorId($id);

            if (!$estadoAsistencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de asistencia no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $estadoAsistencia
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el estado de asistencia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoAsistencia = EstadoAsistencia::obtenerPorId($id);

            if (!$estadoAsistencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de asistencia no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:estadoasistencia,nombre,' . $id . ',id_estado_asistencia',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $estadoAsistencia->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado de asistencia actualizado exitosamente',
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
                'message' => 'Error al actualizar el estado de asistencia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoAsistencia = EstadoAsistencia::obtenerPorId($id);

            if (!$estadoAsistencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de asistencia no encontrado'
                ], 404);
            }

            $result = $estadoAsistencia->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Estado de asistencia eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el estado de asistencia'
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
            $estadosAsistencia = EstadoAsistencia::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $estadosAsistencia,
                'total' => $estadosAsistencia->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados de asistencia activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoAsistencia = EstadoAsistencia::obtenerPorId($id);

            if (!$estadoAsistencia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de asistencia no encontrado'
                ], 404);
            }

            $estadoAsistencia->estado = !$estadoAsistencia->estado;
            $estadoAsistencia->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $estadoAsistencia->id_estado_asistencia,
                    'nombre' => $estadoAsistencia->nombre,
                    'estado' => $estadoAsistencia->estado
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
                    'table' => (new EstadoAsistencia)->getTable(),
                    'primary_key' => (new EstadoAsistencia)->getKeyName(),
                    'fillable' => (new EstadoAsistencia)->getFillable(),
                    'exists' => EstadoAsistencia::exists(),
                    'count' => EstadoAsistencia::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('estadoasistencia'),
                    'columns' => \Schema::hasTable('estadoasistencia') ? \Schema::getColumnListing('estadoasistencia') : [],
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
