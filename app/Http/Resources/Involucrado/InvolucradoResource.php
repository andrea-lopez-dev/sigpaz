<?php

namespace App\Http\Resources\Involucrado;

use App\Http\Resources\Denuncia\DenunciaResource;
use App\Http\Resources\Persona\PersonaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvolucradoResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->involucrado_id,
            'denuncia' => new DenunciaResource($this->whenLoaded('denuncia')),
            'persona' => new PersonaResource($this->whenLoaded('persona')),
            'rol' => $this->rol,
            'rol_display' => $this->rol_display,
            'observaciones' => $this->observaciones,
            'fecha_creacion' => $this->fecha_creacion?->format('Y-m-d H:i:s'),
            'es_denunciante_principal' => $this->esDenunciantePrincipal()
        ];
    }
}
