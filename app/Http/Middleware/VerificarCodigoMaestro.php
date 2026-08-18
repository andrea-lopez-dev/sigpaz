<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\CodigoOTP;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class VerificarCodigoMaestro
{
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        // ✅ Los administradores (rol_id = 1 o 4) NO necesitan código
        if ($user && in_array($user->rol_id, [1, 4])) {
            return $next($request);
        }

        // ✅ Para otros roles, verificar código
        $codigo = $request->header('X-Codigo-Maestro') ?? $request->input('codigo_maestro');

        if (!$codigo) {
            return response()->json([
                'success' => false,
                'message' => 'Se requiere código maestro para esta acción',
                'requires_code' => true
            ], 403);
        }

        // ✅ CORREGIDO: Usar DB::raw('true') para PostgreSQL
        $codigoValido = CodigoOTP::where('codigo', $codigo)
            ->where('activo', DB::raw('true'))
            ->where('expira_en', '>', now())
            ->first();

        if (!$codigoValido) {
            return response()->json([
                'success' => false,
                'message' => 'Código maestro inválido o expirado'
            ], 403);
        }

        // Consumir un uso
        $codigoValido->usar();

        return $next($request);
    }
}
