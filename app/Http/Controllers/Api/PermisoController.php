<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Permiso;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PermisoController extends Controller
{
    /**
     * Listar todos los permisos
     */
    public function index()
    {
        $permisos = Permiso::all();
        return response()->json([
            'success' => true,
            'data' => $permisos
        ]);
    }

    /**
     * Crear un nuevo permiso
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:100|unique:permiso,nombre',
            'descripcion' => 'nullable|string'
        ]);

        $permiso = Permiso::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_creacion' => now()
        ]);

        return response()->json([
            'success' => true,
            'data' => $permiso,
            'message' => 'Permiso creado exitosamente'
        ], 201);
    }

    /**
     * Mostrar un permiso específico
     */
    public function show($id)
    {
        $permiso = Permiso::find($id);

        if (!$permiso) {
            return response()->json([
                'success' => false,
                'message' => 'Permiso no encontrado'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $permiso
        ]);
    }

    /**
     * Actualizar un permiso
     */
    public function update(Request $request, $id)
    {
        $permiso = Permiso::find($id);

        if (!$permiso) {
            return response()->json([
                'success' => false,
                'message' => 'Permiso no encontrado'
            ], 404);
        }

        $request->validate([
            'nombre' => [
                'required',
                'string',
                'max:100',
                Rule::unique('permiso', 'nombre')->ignore($id, 'permiso_id')
            ],
            'descripcion' => 'nullable|string'
        ]);

        $permiso->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion
        ]);

        return response()->json([
            'success' => true,
            'data' => $permiso,
            'message' => 'Permiso actualizado exitosamente'
        ]);
    }

    /**
     * Eliminar un permiso
     */
    public function destroy($id)
    {
        $permiso = Permiso::find($id);

        if (!$permiso) {
            return response()->json([
                'success' => false,
                'message' => 'Permiso no encontrado'
            ], 404);
        }

        // Verificar si hay roles con este permiso
        if ($permiso->roles()->count() > 0) {
            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar el permiso porque está asignado a roles'
            ], 409);
        }

        $permiso->delete();

        return response()->json([
            'success' => true,
            'message' => 'Permiso eliminado exitosamente'
        ]);
    }
}
