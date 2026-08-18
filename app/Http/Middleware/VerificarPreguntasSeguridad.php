<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class VerificarPreguntasSeguridad
{
    public function handle(Request $request, Closure $next): Response
    {
        $usuario = Auth::user();

        if ($usuario && $usuario->preguntasSeguridad->count() > 0) {
            $ultimaValidacion = session('preguntas_validadas');

            if (!$ultimaValidacion || $ultimaValidacion < now()->subHours(12)) {
                return response()->json([
                    'message' => 'Se requiere validación de preguntas de seguridad',
                    'requiere_validacion' => true
                ], 403);
            }
        }

        return $next($request);
    }
}
