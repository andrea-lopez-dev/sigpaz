<?php

namespace App\DTOs\Usuario;

class AsignarRolDTO
{
    public function __construct(
        public readonly int $usuario_id,
        public readonly int $rol_id,
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            usuario_id: $data['usuario_id'],
            rol_id: $data['rol_id'],
        );
    }
}
