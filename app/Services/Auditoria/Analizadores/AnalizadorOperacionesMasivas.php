<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorOperacionesMasivas
{
    public function analizar(Collection $datos): ?array
    {
        $operacionesMasivas = $datos->filter(function($registro) {
            return $registro->accion === 'DELETE' ||
                   $registro->accion === 'UPDATE' ||
                   str_contains($registro->descripcion, 'mass');
        });

        if ($operacionesMasivas->count() > 5) {
            return [
                'nombre' => 'Operaciones Masivas',
                'descripcion' => 'Se detectaron múltiples operaciones de eliminación/actualización masiva',
                'icon' => '🗑️',
                'confianza' => 80,
                'frecuencia' => $operacionesMasivas->count(),
                'detalles' => [
                    'total' => $operacionesMasivas->count(),
                    'tablas_afectadas' => $operacionesMasivas->pluck('tabla_afectada')->unique()->toArray()
                ]
            ];
        }

        return null;
    }
}
