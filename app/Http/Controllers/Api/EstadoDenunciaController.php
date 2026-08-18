<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EstadoDenuncia;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class EstadoDenunciaController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = EstadoDenuncia::query();

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
                'message' => 'Error al obtener estados de denuncia',
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
                'nombre' => 'required|string|max:50|unique:estadodenuncia,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $estadoDenuncia = EstadoDenuncia::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado de denuncia creado exitosamente',
                'data' => $estadoDenuncia
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
                'message' => 'Error al crear el estado de denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $estadoDenuncia = EstadoDenuncia::obtenerPorId($id);

            if (!$estadoDenuncia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de denuncia no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $estadoDenuncia
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el estado de denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoDenuncia = EstadoDenuncia::obtenerPorId($id);

            if (!$estadoDenuncia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de denuncia no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:50|unique:estadodenuncia,nombre,' . $id . ',id_estado_denuncia',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $estadoDenuncia->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado de denuncia actualizado exitosamente',
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
                'message' => 'Error al actualizar el estado de denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoDenuncia = EstadoDenuncia::obtenerPorId($id);

            if (!$estadoDenuncia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de denuncia no encontrado'
                ], 404);
            }

            $result = $estadoDenuncia->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Estado de denuncia eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el estado de denuncia'
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
            $estadosDenuncia = EstadoDenuncia::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $estadosDenuncia,
                'total' => $estadosDenuncia->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estados de denuncia activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $estadoDenuncia = EstadoDenuncia::obtenerPorId($id);

            if (!$estadoDenuncia) {
                return response()->json([
                    'success' => false,
                    'message' => 'Estado de denuncia no encontrado'
                ], 404);
            }

            $estadoDenuncia->estado = !$estadoDenuncia->estado;
            $estadoDenuncia->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $estadoDenuncia->id_estado_denuncia,
                    'nombre' => $estadoDenuncia->nombre,
                    'estado' => $estadoDenuncia->estado
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
                    'table' => (new EstadoDenuncia)->getTable(),
                    'primary_key' => (new EstadoDenuncia)->getKeyName(),
                    'fillable' => (new EstadoDenuncia)->getFillable(),
                    'exists' => EstadoDenuncia::exists(),
                    'count' => EstadoDenuncia::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('estadodenuncia'),
                    'columns' => \Schema::hasTable('estadodenuncia') ? \Schema::getColumnListing('estadodenuncia') : [],
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
