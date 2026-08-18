<?php

namespace App\ValueObjects;

use App\Models\Notificacion;

final class NotificacionData
{
    public function __construct(
        public readonly int $denuncia_id,
        public readonly int $tipo_notificacion_id,
        public readonly string $fecha_emision,
        public readonly string $destinatario,
        public readonly string $medio,
        public readonly ?string $contenido = null,
        public readonly string $estado = Notificacion::ESTADOS['EMITIDA'],
        public readonly ?string $observaciones = null
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            denuncia_id: $data['denuncia_id'],
            tipo_notificacion_id: $data['tipo_notificacion_id'],
            fecha_emision: $data['fecha_emision'],
            destinatario: $data['destinatario'],
            medio: $data['medio'],
            contenido: $data['contenido'] ?? null,
            estado: $data['estado'] ?? Notificacion::ESTADOS['EMITIDA'],
            observaciones: $data['observaciones'] ?? null
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'denuncia_id' => $this->denuncia_id,
            'tipo_notificacion_id' => $this->tipo_notificacion_id,
            'fecha_emision' => $this->fecha_emision,
            'destinatario' => $this->destinatario,
            'medio' => $this->medio,
            'contenido' => $this->contenido,
            'estado' => $this->estado,
            'observaciones' => $this->observaciones
        ]);
    }
}
