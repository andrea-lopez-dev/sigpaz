<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorExcesoPermisos
{
    public function analizar(Collection $datos): ?array
    {
        $accionesElevadas = $datos->filter(function($registro) {
            return in_array($registro->accion, ['UPDATE', 'DELETE', 'INSERT']);
        });

        $excesoPorUsuario = $accionesElevadas->groupBy('usuario_id')
            ->map(function($registros) {
                return $registros->count();
            })
            ->filter(function($count) {
                return $count > 20;
            });

        if ($excesoPorUsuario->isNotEmpty()) {
            return [
                'nombre' => 'Exceso de Permisos',
                'descripcion' => 'Usuario realiza múltiples operaciones de escritura',
                'icon' => '🔓',
                'confianza' => 60,
                'frecuencia' => $excesoPorUsuario->sum(),
                'detalles' => [
                    'usuarios' => $excesoPorUsuario->keys()->toArray(),
                    'total_operaciones' => $excesoPorUsuario->toArray()
                ]
            ];
        }

        return null;
    }
}
