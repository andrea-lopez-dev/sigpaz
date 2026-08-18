<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorHorariosInusuales
{
    public function analizar(Collection $datos): ?array
    {
        $accesosNocturnos = $datos->filter(function($registro) {
            $hora = $registro->fecha->hour;
            return $hora >= 22 || $hora <= 5;
        });

        if ($accesosNocturnos->count() > 10) {
            return [
                'nombre' => 'Actividad Nocturna',
                'descripcion' => 'Accesos detectados fuera del horario laboral',
                'icon' => '🌙',
                'confianza' => 70,
                'frecuencia' => $accesosNocturnos->count(),
                'detalles' => [
                    'total_accesos' => $accesosNocturnos->count(),
                    'usuarios_afectados' => $accesosNocturnos->pluck('usuario_id')->unique()->count()
                ]
            ];
        }

        return null;
    }
}
