<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorAccesosRecurrentes
{
    public function analizar(Collection $datos): ?array
    {
        $accesosPorUsuario = $datos->groupBy('usuario_id')
            ->map(function($registros) {
                return $registros->groupBy(function($registro) {
                    return $registro->fecha->format('Y-m-d H:00:00');
                })->map->count();
            })
            ->filter(function($horarios) {
                return $horarios->max() >= 5;
            });

        if ($accesosPorUsuario->isNotEmpty()) {
            return [
                'nombre' => 'Acceso Recurrente',
                'descripcion' => 'Mismo usuario accede repetidamente en cortos períodos',
                'icon' => '🔄',
                'confianza' => 85,
                'frecuencia' => $accesosPorUsuario->sum(),
                'detalles' => [
                    'usuarios' => $accesosPorUsuario->keys()->toArray(),
                    'picos' => $accesosPorUsuario->map->max()->toArray()
                ]
            ];
        }

        return null;
    }
}
