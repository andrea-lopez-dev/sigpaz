<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckPermission
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, string $permission)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'No autenticado'
            ], 401);
        }

        // Verificar si el usuario tiene el permiso
        if (!$this->userHasPermission($user, $permission)) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para acceder a este recurso'
            ], 403);
        }

        return $next($request);
    }

    /**
     * Verificar si el usuario tiene un permiso específico
     */
    private function userHasPermission($user, string $permission): bool
    {
        // Administrador (rol_id = 1) tiene todos los permisos
        if ($user->rol_id === 1) {
            return true;
        }

        // Cargar permisos del rol desde la base de datos
        $permisos = $user->rol?->permisos()->pluck('permiso.nombre')->toArray() ?? [];

        return in_array($permission, $permisos);
    }
}
