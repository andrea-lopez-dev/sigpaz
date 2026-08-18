<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\AuthService;

class AccesoCatalogosMiddleware
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function handle(Request $request, Closure $next, string $accion = 'ver')
    {
        $usuario = $request->user();

        if (!$usuario) {
            return response()->json([
                'success' => false,
                'message' => 'No autorizado'
            ], 401);
        }

        $tieneAcceso = $accion === 'ver'
            ? $this->authService->puedeVerCatalogos($usuario)
            : $this->authService->puedeModificarCatalogos($usuario);

        if (!$tieneAcceso) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para acceder a los catálogos'
            ], 403);
        }

        return $next($request);
    }
}
