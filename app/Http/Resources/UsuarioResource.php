<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsuarioResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'usuario_id' => $this->usuario_id,
            'nombre_usuario' => $this->nombre_usuario,
            'email' => $this->email,
            'activo' => $this->activo,
            'fecha_creacion' => $this->fecha_creacion?->toISOString(),
            'ultimo_acceso' => $this->ultimo_acceso?->toISOString(),
            'intentos_fallidos' => $this->intentos_fallidos,
            'fecha_bloqueo' => $this->fecha_bloqueo?->toISOString(),
            'requiere_cambio_contrasena' => $this->requiere_cambio_contrasena,
            'personal' => new PersonalResource($this->whenLoaded('personal')),
            'rol' => new RolResource($this->whenLoaded('rol')),
            'preguntas_seguridad' => PreguntaSeguridadResource::collection($this->whenLoaded('preguntasSeguridad')),
        ];
    }
}
