<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoConflicto;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TipoConflictoController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        try {
            $query = TipoConflicto::query();

            if ($request->get('activos', true)) {
                $query->where('estado', true);
            }

            $query->orderBy('nombre', 'asc');
            $data = $query->get();

            return response()->json([
                'success' => true,
                'data' => $data
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
        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tipo_conflicto',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $tipoConflicto = TipoConflicto::crear($validated);

            return response()->json([
                'success' => true,
                'message' => 'Tipo de conflicto creado exitosamente',
                'data' => $tipoConflicto
            ], 201);

        } catch (\Exception $e) {
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
        try {
            $validated = $request->validate([
                'nombre' => 'required|string|max:100|unique:tipo_conflicto,nombre,' . $id . ',id_tipo_conflicto',
                'descripcion' => 'nullable|string',
                'estado' => 'boolean'
            ]);

            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            $updated = $tipoConflicto->actualizarDatos($validated);

            return response()->json([
                'success' => true,
                'message' => 'Tipo de conflicto actualizado exitosamente',
                'data' => $updated
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar el tipo de conflicto',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $tipoConflicto = TipoConflicto::obtenerPorId($id);

            if (!$tipoConflicto) {
                return response()->json([
                    'success' => false,
                    'message' => 'Tipo de conflicto no encontrado'
                ], 404);
            }

            $result = $tipoConflicto->eliminarLogico();

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
                'data' => $tiposConflicto
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos de conflicto activos',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }
}
