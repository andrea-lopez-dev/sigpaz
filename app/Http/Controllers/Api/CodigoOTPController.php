<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CodigoOTP;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CodigoOTPController extends Controller
{
    private const TIEMPO_VIGENCIA_MINUTOS = 5;
    private const TIEMPO_COOLDOWN_MINUTOS = 5;

    public function getCodigo(Request $request)
    {
        $user = $request->user();

        if (!in_array($user->rol_id, [1, 4])) {
            return response()->json([
                'success' => false,
                'message' => 'No tiene permisos para generar códigos'
            ], 403);
        }

        // ✅ Usar DB::raw para comparar con true
        $codigoActivo = CodigoOTP::where('activo', DB::raw('true'))
            ->where('expira_en', '>', now())
            ->first();

        if ($codigoActivo) {
            $expiraEn = new \DateTime($codigoActivo->expira_en);
            $puedeRegenerarEn = $codigoActivo->puede_regenerar_en ? new \DateTime($codigoActivo->puede_regenerar_en) : null;

            $puedeRegenerar = !$puedeRegenerarEn || $puedeRegenerarEn <= now();
            $tiempoRestanteCooldown = $puedeRegenerarEn
                ? max(0, now()->diffInSeconds($puedeRegenerarEn, false))
                : 0;
            $tiempoRestanteVigencia = max(0, now()->diffInSeconds($expiraEn, false));

            return response()->json([
                'success' => true,
                'data' => [
                    'codigo' => $codigoActivo->codigo,
                    'expira_en' => $codigoActivo->expira_en,
                    'usos_restantes' => $codigoActivo->usos_restantes,
                    'puede_regenerar' => $puedeRegenerar,
                    'tiempo_restante_cooldown' => $tiempoRestanteCooldown,
                    'tiempo_restante_vigencia' => $tiempoRestanteVigencia
                ]
            ], 200);
        }

        return $this->generarNuevoCodigo($user);
    }

   public function regenerar(Request $request)
{
    $user = $request->user();

    if (!in_array($user->rol_id, [1, 4])) {
        return response()->json([
            'success' => false,
            'message' => 'No tiene permisos para generar códigos'
        ], 403);
    }

    $codigoExistente = CodigoOTP::where('activo', DB::raw('true'))->first();

    if ($codigoExistente) {
        // ✅ Si el código ya no tiene usos, permitir regenerar inmediatamente
        if ($codigoExistente->usos_restantes <= 0) {
            $codigoExistente->activo = DB::raw('false');
            $codigoExistente->save();
            return $this->generarNuevoCodigo($user);
        }

        // ✅ Si el código expiró por tiempo, permitir regenerar inmediatamente
        $expiraEn = new \DateTime($codigoExistente->expira_en);
        if ($expiraEn <= now()) {
            $codigoExistente->activo = DB::raw('false');
            $codigoExistente->save();
            return $this->generarNuevoCodigo($user);
        }

        // ✅ Solo aplicar cooldown si el código está activo, tiene usos y no expiró
        $puedeRegenerarEn = $codigoExistente->puede_regenerar_en ? new \DateTime($codigoExistente->puede_regenerar_en) : null;

        if ($puedeRegenerarEn && $puedeRegenerarEn > now()) {
            $tiempoRestante = now()->diffInSeconds($puedeRegenerarEn);
            return response()->json([
                'success' => false,
                'message' => "Debe esperar " . ceil($tiempoRestante / 60) . " minutos para generar un nuevo código",
                'tiempo_restante' => $tiempoRestante
            ], 429);
        }
    }

    // Desactivar código anterior
    CodigoOTP::where('activo', DB::raw('true'))->update(['activo' => DB::raw('false')]);

    return $this->generarNuevoCodigo($user);
}

    private function generarNuevoCodigo($user)
    {
        $codigo = strtoupper(substr(bin2hex(random_bytes(5)), 0, 8));

        $ahora = now();
        $expiraEn = $ahora->copy()->addMinutes(self::TIEMPO_VIGENCIA_MINUTOS);
        $puedeRegenerarEn = $ahora->copy()->addMinutes(self::TIEMPO_VIGENCIA_MINUTOS + self::TIEMPO_COOLDOWN_MINUTOS);

        // ✅ Usar DB::raw para insertar valor booleano literal
        $nuevoCodigo = CodigoOTP::create([
            'codigo' => $codigo,
            'descripcion' => 'Código maestro generado',
            'activo' => DB::raw('true'),
            'generado_en' => $ahora,
            'expira_en' => $expiraEn,
            'puede_regenerar_en' => $puedeRegenerarEn,
            'usos_restantes' => 10,
            'generado_por' => $user->usuario_id
        ]);

        Log::info('Nuevo código OTP generado', [
            'generado_por' => $user->usuario_id,
            'codigo' => $codigo,
            'expira_en' => $expiraEn
        ]);

        // Recargar el modelo para obtener el ID
        $nuevoCodigo->refresh();

        return response()->json([
            'success' => true,
            'data' => [
                'codigo' => $nuevoCodigo->codigo,
                'expira_en' => $nuevoCodigo->expira_en,
                'usos_restantes' => $nuevoCodigo->usos_restantes,
                'puede_regenerar' => false,
                'tiempo_restante_cooldown' => self::TIEMPO_VIGENCIA_MINUTOS * 60 + self::TIEMPO_COOLDOWN_MINUTOS * 60,
                'tiempo_restante_vigencia' => self::TIEMPO_VIGENCIA_MINUTOS * 60
            ]
        ], 201);
    }

    public function verificar(Request $request)
    {
        $request->validate([
            'codigo' => 'required|string|size:8'
        ]);

        // ✅ Usar DB::raw para comparar con true
        $codigo = CodigoOTP::where('codigo', $request->codigo)
            ->where('activo', DB::raw('true'))
            ->where('expira_en', '>', now())
            ->first();

        if (!$codigo) {
        return response()->json([
            'success' => false,
            'message' => 'Código inválido o expirado'
        ], 422);
    }

    // ✅ NO consumir, solo verificar que existe
    return response()->json([
        'success' => true,
        'message' => 'Código válido',
        'data' => [
            'usos_restantes' => $codigo->usos_restantes
        ]
    ]);
    }
    public function usar(Request $request)
{
    $request->validate([
        'codigo' => 'required|string|size:8'
    ]);

     $codigo = CodigoOTP::where('codigo', $request->codigo)
            ->where('activo', DB::raw('true'))
            ->where('expira_en', '>', now())
            ->first();

    if (!$codigo) {
        return response()->json([
            'success' => false,
            'message' => 'Código inválido o expirado'
        ], 422);
    }


     $codigo->usos_restantes--;

    // ✅ Usar boolean, no integer
    if ($codigo->usos_restantes <= 0) {
        $codigo->activo = DB::raw('false');
    }

    $codigo->save();


    return response()->json([
        'success' => true,
        'data' => [
            'usos_restantes' => $codigo->usos_restantes,
            'puede_regenerar' => $codigo->puedeRegenerar()
        ]
    ]);
}
}
