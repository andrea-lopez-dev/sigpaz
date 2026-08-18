<?php

namespace App\Traits;

trait CatalogoBaseTrait
{
    public function scopeActivos($query)
    {
        return $query->where('activo', true);
    }

    public function puedeEliminar(): bool
    {
        // Obtener el nombre de la clase sin namespace
        $className = class_basename($this);

        $relations = [
            'tipodocumento' => 'personas',
            'estadocivil' => 'personas',
            'sexo' => 'personas',
            'tipovinculo' => 'personas',
            'tipoconflicto' => 'denuncias',
            'estadodenuncia' => 'denuncias',
            'cargo' => 'personal',
            'institucion' => ['remisiones', 'sentencias'],
            'tipomedida' => 'medidasCautelares',
            'tiponotificacion' => 'notificaciones',
            'estadoasistencia' => 'asistencias'
        ];

        if (!isset($relations[$className])) {
            return true;
        }

        $relationNames = (array) $relations[$className];

        foreach ($relationNames as $relation) {
            if (method_exists($this, $relation) && $this->$relation()->exists()) {
                return false;
            }
        }

        return true;
    }
}
