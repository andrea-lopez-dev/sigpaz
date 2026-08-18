<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AuditLogResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id_log' => $this->resource->id,
            'id_usuario' => $this->resource->userId,
            'usuario_nombre' => $this->resource->userName,
            'fecha' => $this->resource->createdAt?->format('Y-m-d H:i:s'),
            'accion' => $this->resource->action->value,
            'accion_icono' => $this->resource->action->getIcon(),
            'tabla_afectada' => $this->resource->tableAffected,
            'id_registro_afectado' => $this->resource->recordId,
            'descripcion' => $this->resource->description,
            'ip_origen' => $this->resource->ipAddress,
            'user_agent' => $this->resource->userAgent,
            'transaccion_id' => $this->resource->transactionId,
            'severidad' => $this->resource->severity->value,
            'severidad_label' => $this->resource->severity->getLabel(),
            'severidad_color' => $this->resource->severity->getColor(),
            'datos_anteriores' => $this->resource->oldData,
            'datos_nuevos' => $this->resource->newData
        ];
    }
}
