<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VotoConciliacionResource extends JsonResource
{
    public function toArray($request)
    {
        $data = [
            'voto_id' => $this->voto_id,
            'conciliacion_id' => $this->conciliacion_id,
            'personal_id' => $this->personal_id,
            'voto' => $this->voto,
            'voto_texto' => $this->voto_texto,
            'comentario' => $this->comentario,
            'fecha_voto' => $this->fecha_voto
        ];

        if ($this->relationLoaded('personal')) {
            $data['votante'] = [
                'personal_id' => $this->personal->personal_id,
                'nombre_completo' => $this->personal->nombre_completo,
                'cargo' => $this->personal->cargo?->nombre ?? 'Sin cargo',
                'activo' => $this->personal->activo
            ];

            if ($this->personal->relationLoaded('persona')) {
                $data['votante']['foto'] = $this->personal->persona?->foto_cifrada;
                $data['votante']['documento'] = $this->personal->persona?->numero_documento;
            }
        }

        return $data;
    }
}
