<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TipoVinculoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'tipo_vinculo_id' => $this->tipo_vinculo_id,
            'nombre' => $this->nombre,
            'activo' => $this->activo,
        ];
    }
}