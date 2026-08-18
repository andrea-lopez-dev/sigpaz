<?php

namespace App\DTOs\Auth;

class PreguntaSeguridadDTO
{
    public function __construct(
        public readonly int $usuario_id,
        public readonly array $respuestas
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            usuario_id: $data['usuario_id'],
            respuestas: $data['respuestas']
        );
    }
}
