<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorIPSospechosas
{
    public function analizar(Collection $datos): ?array
    {
        $ipsExternas = $datos->filter(function($registro) {
            return $registro->ip_origen &&
                   !in_array($registro->ip_origen, ['127.0.0.1', '::1', 'localhost']);
        });

        $ipsPorUsuario = $ipsExternas->groupBy('usuario_id')
            ->map(function($registros) {
                return $registros->pluck('ip_origen')->unique()->count();
            })
            ->filter(function($count) {
                return $count >= 3;
            });

        if ($ipsPorUsuario->isNotEmpty()) {
            return [
                'nombre' => 'Múltiples IPs',
                'descripcion' => 'Usuario accede desde diferentes ubicaciones geográficas',
                'icon' => '🌐',
                'confianza' => 65,
                'frecuencia' => $ipsPorUsuario->sum(),
                'detalles' => [
                    'usuarios_afectados' => $ipsPorUsuario->keys()->toArray(),
                    'ips_distintas' => $ipsPorUsuario->toArray()
                ]
            ];
        }

        return null;
    }
}
