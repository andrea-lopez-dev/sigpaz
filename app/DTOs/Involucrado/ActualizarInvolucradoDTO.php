<?php

namespace App\DTOs\Involucrado;

use Illuminate\Http\Request;

class ActualizarInvolucradoDTO
{
    public function __construct(
        public readonly ?string $rol,
        public readonly ?string $observaciones
    ) {}

    public static function fromRequest(Request $request): self
    {
        return new self(
            rol: $request->input('rol'),
            observaciones: $request->input('observaciones')
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'rol' => $this->rol,
            'observaciones' => $this->observaciones
        ], fn($value) => !is_null($value));
    }

    public function hasChanges(): bool
    {
        return !empty($this->toArray());
    }
}
