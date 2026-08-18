<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorRafagasActividad
{
    public function analizar(Collection $datos): ?array
    {
        $rafagas = $datos->groupBy(function($registro) {
            return $registro->fecha->format('Y-m-d H:i:00');
        })->filter(function($registros) {
            return $registros->count() >= 10;
        });

        if ($rafagas->isNotEmpty()) {
            return [
                'nombre' => 'Ráfaga de Actividad',
                'descripcion' => 'Múltiples operaciones en corto período de tiempo',
                'icon' => '⚡',
                'confianza' => 75,
                'frecuencia' => $rafagas->sum(),
                'detalles' => [
                    'total_rafagas' => $rafagas->count(),
                    'promedio_por_rafaga' => round($rafagas->avg()->count(), 0)
                ]
            ];
        }

        return null;
    }
}
