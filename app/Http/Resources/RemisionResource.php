<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RemisionResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'remision_id' => $this->remision_id,
            'denuncia_id' => $this->denuncia_id,
            'institucion' => [
                'id' => $this->institucion?->institucion_id,
                'nombre' => $this->institucion?->nombre
            ],
            'motivo' => $this->motivo,
            'motivo_resumido' => $this->motivo_resumido,
            'fecha_remision' => $this->fecha_remision,
            'fecha_remision_formateada' => $this->fecha_remision_formateada,
            'observaciones' => $this->observaciones,
            'fecha_creacion' => $this->fecha_creacion
        ];
    }
}
