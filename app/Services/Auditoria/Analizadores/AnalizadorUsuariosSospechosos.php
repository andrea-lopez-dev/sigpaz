<?php

namespace App\Services\Auditoria\Analizadores;

use Illuminate\Support\Collection;

class AnalizadorUsuariosSospechosos
{
    public function analizar(Collection $datos): ?array
    {
        $usuariosConErrores = $datos->filter(function($registro) {
            return $registro->nivel === 'ERROR' || $registro->nivel === 'CRITICAL';
        })->groupBy('usuario_id')
          ->map(function($registros) {
              return $registros->count();
          })
          ->filter(function($count) {
              return $count > 5;
          });

        if ($usuariosConErrores->isNotEmpty()) {
            return [
                'nombre' => 'Usuarios Sospechosos',
                'descripcion' => 'Usuarios con alta tasa de errores o accesos críticos',
                'icon' => '👤',
                'confianza' => 85,
                'frecuencia' => $usuariosConErrores->sum(),
                'detalles' => [
                    'usuarios_afectados' => $usuariosConErrores->keys()->toArray(),
                    'total_errores' => $usuariosConErrores->toArray()
                ]
            ];
        }

        return null;
    }
}
