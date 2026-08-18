<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AuditarOperaciones
{
    protected $transaccionId;

    public function __construct()
    {
        $this->transaccionId = Str::uuid()->toString();
    }

    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if (in_array($request->method(), ['POST', 'PUT', 'PATCH', 'DELETE'])) {
            $this->registrarOperacion($request, $response);
        }

        return $response;
    }

    protected function registrarOperacion(Request $request, $response)
    {
        try {
            $usuario = Auth::user();
            $accion = $this->determinarAccion($request->method());

            $accionesValidas = ['INSERT', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'SELECT', 'EXECUTE', 'LOGIN_FAILED'];
            if (!in_array($accion, $accionesValidas)) {
                return;
            }

            $logData = [
                'usuario_id' => $usuario?->usuario_id,
                'accion' => $accion,
                'tabla_afectada' => $this->extraerTabla($request->path()),
                'registro_id' => $request->route('id') ?? $request->input('id'),
                'fecha' => now(),
                'descripcion' => $this->generarDescripcion($request, $accion),
                'ip_origen' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'transaccion_id' => $this->transaccionId,
                'datos_nuevos' => $request->method() !== 'DELETE' ? json_encode($request->except(['password', 'contrasena_hash'])) : null,
                'nivel' => $response->getStatusCode() >= 400 ? 'ERROR' : 'INFO',
                'esquema' => 'public'
            ];

            DB::table('logauditoria')->insert($logData);

        } catch (\Exception $e) {
            Log::error('Error al registrar auditoría: ' . $e->getMessage());
        }
    }

    protected function determinarAccion(string $method): string
    {
        return match($method) {
            'POST' => 'INSERT',
            'PUT', 'PATCH' => 'UPDATE',
            'DELETE' => 'DELETE',
            default => $method
        };
    }

    protected function extraerTabla(string $path): string
    {
        $segmentos = explode('/', trim($path, '/'));
        if (isset($segmentos[0]) && $segmentos[0] === 'api') {
            array_shift($segmentos);
        }
        if (isset($segmentos[0]) && $segmentos[0] === 'v1') {
            array_shift($segmentos);
        }
        return $segmentos[0] ?? 'desconocido';
    }

    protected function generarDescripcion(Request $request, string $accion): string
    {
        $usuario = Auth::user();
        $tabla = $this->extraerTabla($request->path());
        $id = $request->route('id') ?? $request->input('id');
        $nombreUsuario = $usuario?->nombre_usuario ?? 'Sistema';

        $descripciones = [
            'INSERT' => "Usuario {$nombreUsuario} creó un nuevo registro en {$tabla}" . ($id ? " (ID: {$id})" : ''),
            'UPDATE' => "Usuario {$nombreUsuario} actualizó registro en {$tabla}" . ($id ? " (ID: {$id})" : ''),
            'DELETE' => "Usuario {$nombreUsuario} eliminó registro en {$tabla}" . ($id ? " (ID: {$id})" : ''),
        ];

        return $descripciones[$accion] ?? "Usuario {$nombreUsuario} realizó {$accion} en {$tabla}";
    }
}
