<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AlertResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->alerta_id,
            'user_id' => $this->usuario_id,
            'title' => $this->titulo,
            'message' => $this->mensaje,
            'type' => $this->tipo_alerta,
            'module' => $this->entidad_tipo,
            'read' => (bool) $this->leida,
            'created_at' => $this->fecha_creacion->toIso8601String(),
            'action_url' => $this->accion_url,
            'metadata' => $this->metadata,
            'avatar' => $this->getAvatarByType(),
        ];
    }

    private function getAvatarByType(): string
    {
        return match($this->tipo_alerta) {
            'success' => '✅',
            'error' => '❌',
            'warning' => '⚠️',
            default => 'ℹ️'
        };
    }
}
