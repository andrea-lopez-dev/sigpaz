<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class VerificarInactividad
{
    private $tiempoMaximoInactividad = 300; // 5 minutos en segundos
    private $tiempoAdvertencia = 60; // 60 segundos antes de expirar

    public function handle(Request $request, Closure $next): Response
    {
        $usuario = Auth::user();

        if ($usuario) {
            $ultimoAcceso = $usuario->ultimo_acceso;

            if ($ultimoAcceso) {
                $segundosInactivo = $ultimoAcceso->diffInSeconds(now());
                $tiempoRestante = $this->tiempoMaximoInactividad - $segundosInactivo;

                // Solo log si estamos cerca de la advertencia o expiración
                if ($tiempoRestante <= 60 || $segundosInactivo >= 60) {
                    \Log::info('⏱️ [VerificarInactividad]', [
                        'usuario' => $usuario->usuario_id,
                        'ultimo_acceso' => $ultimoAcceso->format('H:i:s'),
                        'ahora' => now()->format('H:i:s'),
                        'inactivo_segundos' => round($segundosInactivo, 1),
                        'restante_segundos' => round($tiempoRestante, 1)
                    ]);
                }

                // ❌ Sesión expirada
                if ($segundosInactivo >= $this->tiempoMaximoInactividad) {
                    \Log::warning('🔴 Sesión expirada por inactividad', ['usuario' => $usuario->usuario_id]);
                    $usuario->currentAccessToken()->delete();

                    return response()->json([
                        'message' => 'Sesión expirada por inactividad',
                        'code' => 'SESSION_EXPIRED'
                    ], 401);
                }

                // ⚠️ Periodo de advertencia
                if ($tiempoRestante <= $this->tiempoAdvertencia && $tiempoRestante > 0) {
                    \Log::warning('⚠️ PERIODO DE ADVERTENCIA', [
                        'usuario' => $usuario->usuario_id,
                        'segundos_restantes' => $tiempoRestante
                    ]);

                    $response = $next($request);

                    $response->headers->set('X-Session-Warning', $tiempoRestante);
                    $response->headers->set('X-Session-Time-Left', $tiempoRestante);
                    $response->headers->set('X-Requires-Token-Refresh', 'true');

                     // ✅ Log para verificar que se agregaron los headers
    \Log::info('📨 Headers agregados a la respuesta', [
        'X-Session-Warning' => $response->headers->get('X-Session-Warning'),
        'X-Session-Time-Left' => $response->headers->get('X-Session-Time-Left')
    ]);

                    return $response;
                }
            } else {
                // Primera vez
                $usuario->ultimo_acceso = now();
                $usuario->save();
            }
        }

        return $next($request);
    }
}
