<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EstadoCivilResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'estado_civil_id' => $this->estado_civil_id,
            'nombre' => $this->nombre,
            'activo' => $this->activo,
        ];
    }
}