<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorAccesosDenegados
{
    public function analizar(Collection $datos): ?array
    {
        $accesosDenegados = $datos->filter(function($registro) {
            return $registro->nivel === 'ERROR' ||
                   $registro->nivel === 'WARNING' ||
                   str_contains($registro->descripcion, 'denied');
        });

        if ($accesosDenegados->count() > 10) {
            return [
                'nombre' => 'Accesos Denegados',
                'descripcion' => 'Múltiples intentos de acceso denegados detectados',
                'icon' => '🚫',
                'confianza' => 90,
                'frecuencia' => $accesosDenegados->count(),
                'detalles' => [
                    'total' => $accesosDenegados->count(),
                    'usuarios' => $accesosDenegados->pluck('usuario_id')->unique()->toArray()
                ]
            ];
        }

        return null;
    }
}
