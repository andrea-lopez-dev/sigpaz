<?php

namespace App\DTO;

use App\Models\PrestamoExpediente;
use Carbon\Carbon;

class PrestamoDTO
{
    public function __construct(
        public readonly ?int $prestamo_id,
        public readonly int $denuncia_id,
        public readonly int $personal_id,
        public readonly string $identificador,
        public readonly Carbon $fecha_prestamo,
        public readonly Carbon $fecha_retorno_prevista,
        public readonly ?Carbon $fecha_devolucion,
        public readonly ?int $usuario_recibido_id,
        public readonly string $estado,
        public readonly string $motivo,
        public readonly ?string $observaciones_devolucion
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            prestamo_id: $data['prestamo_id'] ?? null,
            denuncia_id: $data['denuncia_id'],
            personal_id: $data['personal_id'],
            identificador: $data['identificador'] ?? 'PENDIENTE',
            fecha_prestamo: Carbon::parse($data['fecha_prestamo']),
            fecha_retorno_prevista: Carbon::parse($data['fecha_retorno_prevista']),
            fecha_devolucion: isset($data['fecha_devolucion']) ? Carbon::parse($data['fecha_devolucion']) : null,
            usuario_recibido_id: $data['usuario_recibido_id'] ?? null,
            estado: $data['estado'] ?? PrestamoExpediente::ESTADO_ACTIVO,
            motivo: $data['motivo'],
            observaciones_devolucion: $data['observaciones_devolucion'] ?? null
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'denuncia_id' => $this->denuncia_id,
            'personal_id' => $this->personal_id,
            'identificador' => $this->identificador,
            'fecha_prestamo' => $this->fecha_prestamo,
            'fecha_retorno_prevista' => $this->fecha_retorno_prevista,
            'fecha_devolucion' => $this->fecha_devolucion,
            'usuario_recibido_id' => $this->usuario_recibido_id,
            'estado' => $this->estado,
            'motivo' => $this->motivo,
            'observaciones_devolucion' => $this->observaciones_devolucion
        ]);
    }
}
