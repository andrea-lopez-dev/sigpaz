<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Psr\Log\LoggerInterface;

class SetDatabaseSessionUser
{
    public function handle(Request $request, Closure $next)
    {
        try {
            $user = Auth::user();

            if ($user && isset($user->id)) {
                // Usar set_config con binding (valor como texto) para evitar errores de sintaxis
                DB::select('SELECT set_config(?, ?, false)', ['app.usuario_id', (string) $user->id]);

                // Si necesitas guardar rol/permissions similar:
                DB::select('SELECT set_config(?, ?, false)', ['app.usuario_rol', (string) $user->rol_id]);
            } else {
                // Evitar ejecutar "SET app.usuario_id = NULL" — en su lugar RESET para limpiar la variable
                DB::statement('RESET app.usuario_id');
            }
        } catch (\Throwable $e) {
            // No debemos romper la petición por este middleware; loguear y continuar
            logger()->error('SetDatabaseSessionUser middleware error: ' . $e->getMessage());
              DB::statement('RESET app.usuario_id'); // asegurar limpieza si es necesario
        }

        return $next($request);
    }
}
