<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UpdateLastAccess
{
    // Rutas que NO deben actualizar el último acceso
    private $excludedRoutes = [
        'auth/check-session',
        'auth/refresh-activity',
        'auth/me',
        'notifications'
    ];

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Verificar si la ruta actual debe ser excluida
        $path = $request->path();
        $shouldExclude = false;

        foreach ($this->excludedRoutes as $excluded) {
            if (str_contains($path, $excluded)) {
                $shouldExclude = true;
                break;
            }
        }

        // Solo actualizar si NO es una ruta excluida
        if (Auth::check() && !$shouldExclude) {
            $user = Auth::user();
            $user->ultimo_acceso = now();
            $user->save();

            Log::debug('🔄 [UpdateLastAccess] Actualizado', [
                'usuario' => $user->usuario_id,
                'ruta' => $path
            ]);
        } else if (Auth::check() && $shouldExclude) {
            Log::debug('⏭️ [UpdateLastAccess] Ruta excluida, no se actualiza', [
                'usuario' => Auth::user()->usuario_id,
                'ruta' => $path
            ]);
        }

        return $response;
    }
}
