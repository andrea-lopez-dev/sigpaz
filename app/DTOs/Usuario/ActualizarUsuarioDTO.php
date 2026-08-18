<?php

namespace App\DTOs\Usuario;

class ActualizarUsuarioDTO
{
    public function __construct(
        public readonly ?string $nombre_usuario = null,
        public readonly ?string $email = null,
        public readonly ?string $password = null,
        public readonly ?int $rol_id = null,
        public readonly ?bool $activo = null,
        public readonly ?bool $requiere_cambio_contrasena = null,
    ) {}

    public static function fromArray(array $data): self
    {

        $activo = null;
        if (isset($data['activo'])) {
            if (is_bool($data['activo'])) {
                $activo = $data['activo'];
            } elseif (is_numeric($data['activo'])) {
                $activo = (int) $data['activo'] === 1;
            } elseif (is_string($data['activo'])) {
                $activo = $data['activo'] === 'true' || $data['activo'] === '1';
            }
        }

        $requiereCambio = null;
        if (isset($data['requiere_cambio_contrasena'])) {
            if (is_bool($data['requiere_cambio_contrasena'])) {
                $requiereCambio = $data['requiere_cambio_contrasena'];
            } elseif (is_numeric($data['requiere_cambio_contrasena'])) {
                $requiereCambio = (int) $data['requiere_cambio_contrasena'] === 1;
            } elseif (is_string($data['requiere_cambio_contrasena'])) {
                $requiereCambio = $data['requiere_cambio_contrasena'] === 'true' || $data['requiere_cambio_contrasena'] === '1';
            }
        }

        return new self(
            nombre_usuario: $data['nombre_usuario'] ?? null,
            email: $data['email'] ?? null,
            password: $data['password'] ?? null,
            rol_id: isset($data['rol_id']) ? (int) $data['rol_id'] : null,
            activo: $activo,
            requiere_cambio_contrasena: $requiereCambio,
        );
    }
}
