<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rol;
use App\Models\Permiso;
use App\Models\RolPermiso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class RolController extends Controller
{
    /**
     * Listar todos los roles
     */
    public function index()
    {
        $roles = Rol::all();
        return response()->json([
            'success' => true,
            'data' => $roles
        ]);
    }

    /**
     * Crear un nuevo rol
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:100|unique:rol,nombre',
            'descripcion' => 'nullable|string'
        ]);

        $rol = Rol::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_creacion' => now()
        ]);

        return response()->json([
            'success' => true,
            'data' => $rol,
            'message' => 'Rol creado exitosamente'
        ], 201);
    }

    /**
     * Mostrar un rol específico
     */
    public function show($id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json([
                'success' => false,
                'message' => 'Rol no encontrado'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $rol
        ]);
    }

    /**
     * Actualizar un rol
     */
    public function update(Request $request, $id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json([
                'success' => false,
                'message' => 'Rol no encontrado'
            ], 404);
        }

        $request->validate([
            'nombre' => [
                'required',
                'string',
                'max:100',
                Rule::unique('rol', 'nombre')->ignore($id, 'rol_id')
            ],
            'descripcion' => 'nullable|string'
        ]);

        $rol->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion
        ]);

        return response()->json([
            'success' => true,
            'data' => $rol,
            'message' => 'Rol actualizado exitosamente'
        ]);
    }

    /**
     * Eliminar un rol
     */
    public function destroy($id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json([
                'success' => false,
                'message' => 'Rol no encontrado'
            ], 404);
        }

        // Verificar si hay usuarios con este rol
        if ($rol->usuarios()->count() > 0) {
            return response()->json([
                'success' => false,
                'message' => 'No se puede eliminar el rol porque tiene usuarios asignados'
            ], 409);
        }

        // Eliminar asignaciones de permisos
        $rol->permisos()->detach();

        // Eliminar rol
        $rol->delete();

        return response()->json([
            'success' => true,
            'message' => 'Rol eliminado exitosamente'
        ]);
    }

    /**
     * Obtener permisos de un rol
     */
    public function getPermisos($id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json([
                'success' => false,
                'message' => 'Rol no encontrado'
            ], 404);
        }

        $permisos = $rol->permisos()->get();

        return response()->json([
            'success' => true,
            'data' => $permisos
        ]);
    }

    /**
     * Asignar permisos a un rol
     */
    public function asignarPermisos(Request $request, $id)
    {
        $rol = Rol::find($id);

        if (!$rol) {
            return response()->json([
                'success' => false,
                'message' => 'Rol no encontrado'
            ], 404);
        }

        $request->validate([
            'permisos_ids' => 'required|array',
            'permisos_ids.*' => 'exists:permiso,permiso_id'
        ]);

        // Sincronizar permisos
        $rol->permisos()->sync($request->permisos_ids);

        return response()->json([
            'success' => true,
            'message' => 'Permisos asignados exitosamente'
        ]);
    }
}
