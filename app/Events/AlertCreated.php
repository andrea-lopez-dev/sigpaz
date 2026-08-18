<?php

namespace App\Events;

use App\Models\Alert;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AlertCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Alert $alert;

    public function __construct(Alert $alert)
    {
        $this->alert = $alert;
    }

    /**
     * El canal por donde se transmitirá el evento
     */
    public function broadcastOn(): array
    {
        // Canal privado para el usuario específico
        return [
            new PrivateChannel("user.{$this->alert->usuario_id}")
        ];
    }

    /**
     * Nombre del evento para el frontend
     */
    public function broadcastAs(): string
    {
        return 'alert.created';
    }

    /**
     * Datos a transmitir
     */
    public function broadcastWith(): array
    {
        return [
            'id' => $this->alert->alerta_id,
            'titulo' => $this->alert->titulo,
            'mensaje' => $this->alert->mensaje,
            'tipo_alerta' => $this->alert->tipo_alerta,
            'entidad_tipo' => $this->alert->entidad_tipo,
            'entidad_id' => $this->alert->entidad_id,
            'accion_url' => $this->alert->accion_url,
            'fecha_creacion' => $this->alert->fecha_creacion->toISOString()
        ];
    }
}
