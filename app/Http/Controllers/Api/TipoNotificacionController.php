<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoNotificacion;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TipoNotificacionController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = TipoNotificacion::query();

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
                'message' => 'Error al obtener tipos de notificación',
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
                'nombre' => 'required|string|max:100|unique:tiponotificacion,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $tipoNotificacion = TipoNotificacion::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de notificación creado exitosamente',
                'data' => $tipoNotificacion
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
                'message' => 'Error al crear el tipo de notificación',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $tipoNotificacion = TipoNotificacion::obtenerPorId($id);

            if (!$tipoNotificacion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de notificación no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $tipoNotificacion
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el tipo de notificación',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoNotificacion = TipoNotificacion::obtenerPorId($id);

            if (!$tipoNotificacion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de notificación no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tiponotificacion,nombre,' . $id . ',id_tipo_notificacion',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $tipoNotificacion->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de notificación actualizado exitosamente',
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
                'message' => 'Error al actualizar el tipo de notificación',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoNotificacion = TipoNotificacion::obtenerPorId($id);

            if (!$tipoNotificacion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de notificación no encontrado'
                ], 404);
            }

            $result = $tipoNotificacion->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Tipo de notificación eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el tipo de notificación'
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
            $tiposNotificacion = TipoNotificacion::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $tiposNotificacion,
                'total' => $tiposNotificacion->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de notificación activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoNotificacion = TipoNotificacion::obtenerPorId($id);

            if (!$tipoNotificacion) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de notificación no encontrado'
                ], 404);
            }

            $tipoNotificacion->estado = !$tipoNotificacion->estado;
            $tipoNotificacion->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $tipoNotificacion->id_tipo_notificacion,
                    'nombre' => $tipoNotificacion->nombre,
                    'estado' => $tipoNotificacion->estado
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
                    'table' => (new TipoNotificacion)->getTable(),
                    'primary_key' => (new TipoNotificacion)->getKeyName(),
                    'fillable' => (new TipoNotificacion)->getFillable(),
                    'exists' => TipoNotificacion::exists(),
                    'count' => TipoNotificacion::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('tipo_notificacion'),
                    'columns' => \Schema::hasTable('tipo_notificacion') ? \Schema::getColumnListing('tipo_notificacion') : [],
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
