<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GeneroResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'genero_id' => $this->genero_id,
            'nombre' => $this->nombre,
            'activo' => $this->activo,
        ];
    }
}