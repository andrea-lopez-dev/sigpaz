<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoConflicto;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TipoConflictoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = TipoConflicto::query();

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
                'message' => 'Error al obtener tipos de conflicto',
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
                'nombre' => 'required|string|max:100|unique:tipoconflicto,nombre',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            // Usar el método del modelo
            $tipoConflicto = TipoConflicto::crear($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de conflicto creado exitosamente',
                'data' => $tipoConflicto
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
                'message' => 'Error al crear el tipo de conflicto',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        try {
            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $tipoConflicto
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener el tipo de conflicto',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function update(Request $request, $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tipoconflicto,nombre,' . $id . ',id_tipo_conflicto',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $updated = $tipoConflicto->actualizarDatos($validated);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Tipo de conflicto actualizado exitosamente',
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
                'message' => 'Error al actualizar el tipo de conflicto',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            $result = $tipoConflicto->eliminarLogico();

            DB::commit();

            if ($result) {
                return response()->json([
                    'success' => true,
                    'message' => 'Tipo de conflicto eliminado exitosamente'
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo eliminar el tipo de conflicto'
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
            $tiposConflicto = TipoConflicto::listarActivos();

            return response()->json([
                'success' => true,
                'data' => $tiposConflicto,
                'total' => $tiposConflicto->count()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de conflicto activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    // Método para cambiar estado
    public function cambiarEstado($id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            $tipoConflicto->estado = !$tipoConflicto->estado;
            $tipoConflicto->save();

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => [
                    'id' => $tipoConflicto->id_tipo_conflicto,
                    'nombre' => $tipoConflicto->nombre,
                    'estado' => $tipoConflicto->estado
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
                    'table' => (new TipoConflicto)->getTable(),
                    'primary_key' => (new TipoConflicto)->getKeyName(),
                    'fillable' => (new TipoConflicto)->getFillable(),
                    'exists' => TipoConflicto::exists(),
                    'count' => TipoConflicto::count(),
                ],
                'database' => [
                    'table_exists' => \Schema::hasTable('tipoconflicto'),
                    'columns' => \Schema::hasTable('tipoconflicto') ? \Schema::getColumnListing('tipoconflicto') : [],
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
