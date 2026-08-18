<?php

namespace App\DTOs\Auth;

class CambioContrasenaDTO
{
    public function __construct(
        public readonly string $current_password,
        public readonly string $new_password,
        public readonly string $new_password_confirmation,
        public readonly ?string $pregunta_id = null,
        public readonly ?string $respuesta = null
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            current_password: $data['current_password'] ?? '',
            new_password: $data['new_password'],
            new_password_confirmation: $data['new_password_confirmation'],
            pregunta_id: $data['pregunta_id'] ?? null,
            respuesta: $data['respuesta'] ?? null
        );
    }
}
