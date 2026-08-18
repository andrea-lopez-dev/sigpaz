<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cargo;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class CargoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Cargo::query();

            // Filtrar por estado si se solicita
            if ($request->has('activos')) {
                $activos = filter_var($request->get('activos'), FILTER_VALIDATE_BOOLEAN);
                $query->where('estado', $activos);
            }

            // Búsqueda por nombre
            if ($request->has('search')) {
                $search = $request->get('search');
                $query->where('nombre_cargo', 'like', "%{$search}%");
            }

            $query->orderBy('nombre_cargo', 'asc');
            $data = $query->get();

            return response()->json([
                'success' => true,
                'data' => $data,
                'total' => $data->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener cargos',
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
                'nombre_cargo' => 'required|string|max:100|unique:cargo,nombre_cargo',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $cargo = Cargo::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Cargo creado exitosamente',
                'data' => $cargo
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
                'message' => 'Error al crear el cargo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $cargo = Cargo::obtenerPorId($id);

            if (!$cargo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cargo no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $cargo
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el cargo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $cargo = Cargo::obtenerPorId($id);

            if (!$cargo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cargo no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre_cargo' => 'required|string|max:100|unique:cargo,nombre_cargo,' . $id . ',id_cargo',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $cargo->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Cargo actualizado exitosamente',
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
                'message' => 'Error al actualizar el cargo',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $cargo = Cargo::obtenerPorId($id);

            if (!$cargo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cargo no encontrado'
                ], 404);
            }

            $result = $cargo->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Cargo eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el cargo'
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
            $cargos = Cargo::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $cargos,
                'total' => $cargos->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener cargos activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $cargo = Cargo::obtenerPorId($id);

            if (!$cargo) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cargo no encontrado'
                ], 404);
            }

            $cargo->estado = !$cargo->estado;
            $cargo->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $cargo->id_cargo,
                    'nombre_cargo' => $cargo->nombre_cargo,
                    'estado' => $cargo->estado
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
                    'table' => (new Cargo)->getTable(),
                    'primary_key' => (new Cargo)->getKeyName(),
                    'fillable' => (new Cargo)->getFillable(),
                    'exists' => Cargo::exists(),
                    'count' => Cargo::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('cargo'),
                    'columns' => \Schema::hasTable('cargo') ? \Schema::getColumnListing('cargo') : [],
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
