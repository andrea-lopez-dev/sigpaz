<?php

namespace App\DTOs\Auth;

class RegistroUsuarioDTO
{
    public function __construct(
        public readonly string $nombre_usuario,
        public readonly string $email,
        public readonly string $password,
        public readonly int $personal_id,
        public readonly int $rol_id,
        public readonly ?array $preguntas_seguridad = null
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            nombre_usuario: $data['nombre_usuario'],
            email: $data['email'],
            password: $data['password'],
            personal_id: $data['personal_id'],
            rol_id: $data['rol_id'],
            preguntas_seguridad: $data['preguntas_seguridad'] ?? null
        );
    }
}
