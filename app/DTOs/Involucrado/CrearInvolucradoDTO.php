<?php

namespace App\DTOs\Involucrado;

use Illuminate\Http\Request;

class CrearInvolucradoDTO
{
    public function __construct(
        public readonly int $denunciaId,
        public readonly int $personaId,
        public readonly string $rol,
        public readonly ?string $observaciones
    ) {}

    public static function fromRequest(Request $request): self
    {
        return new self(
            denunciaId: $request->input('denuncia_id'),
            personaId: $request->input('persona_id'),
            rol: $request->input('rol'),
            observaciones: $request->input('observaciones')
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'denuncia_id' => $this->denunciaId,
            'persona_id' => $this->personaId,
            'rol' => $this->rol,
            'observaciones' => $this->observaciones
        ], fn($value) => !is_null($value));
    }
}
