<?php

namespace App\DTOs\Personal;

class PersonalDTO
{
    public function __construct(
        public readonly int $persona_id,
        public readonly int $cargo_id,
        public readonly ?string $fecha_ingreso,
        public readonly ?string $fecha_egreso,
        public readonly ?string $observaciones,
        public readonly bool $activo,
        public readonly string $fuente_registro
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            persona_id: (int) $data['persona_id'],
            cargo_id: (int) $data['cargo_id'],
            fecha_ingreso: $data['fecha_ingreso'] ?? now()->toDateString(),
            fecha_egreso: $data['fecha_egreso'] ?? null,
            observaciones: $data['observaciones'] ?? null,
            activo: filter_var($data['activo'] ?? true, FILTER_VALIDATE_BOOLEAN),
            fuente_registro: $data['fuente_registro'] ?? 'MANUAL'
        );
    }

    public function toArray(): array
    {
        return [
            'persona_id' => $this->persona_id,
            'cargo_id' => $this->cargo_id,
            'fecha_ingreso' => $this->fecha_ingreso,
            'fecha_egreso' => $this->fecha_egreso,
            'observaciones' => $this->observaciones,
            'activo' => $this->activo,
            'fuente_registro' => $this->fuente_registro
        ];
    }
}
