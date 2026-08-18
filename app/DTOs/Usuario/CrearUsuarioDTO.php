<?php
namespace App\DTOs\Usuario;

class CrearUsuarioDTO
{
    public function __construct(
        public readonly string $nombre_usuario,
        public readonly string $email,
        public readonly string $password,
        public readonly int $personal_id,
        public readonly int $rol_id,
        public readonly bool $activo = true,
        public readonly bool $requiere_cambio_contrasena = true,
        public readonly ?array $preguntas_seguridad = null,
    ) {}

    public static function fromArray(array $data): self
    {
         \Log::info('DTO fromArray - activo recibido', [
        'activo' => $data['activo'] ?? 'no existe',
        'activo_tipo' => gettype($data['activo'] ?? 'null')
    ]);

        $activo = false;
        if (isset($data['activo'])) {
            if (is_bool($data['activo'])) {
                $activo = $data['activo'];
            } elseif (is_numeric($data['activo'])) {
                $activo = (int) $data['activo'] === 1;
            } elseif (is_string($data['activo'])) {
                $activo = $data['activo'] === 'true' || $data['activo'] === '1';
            } else {
                $activo = true;
            }
        } else {
            $activo = true;
        }

        $requiereCambio = true;
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
            nombre_usuario: $data['nombre_usuario'],
            email: $data['email'],
            password: $data['password'],
            personal_id: (int) $data['personal_id'],
            rol_id: (int) $data['rol_id'],
            activo: $activo,
            requiere_cambio_contrasena: $requiereCambio,
            preguntas_seguridad: $data['preguntas_seguridad'] ?? null,
        );
    }

    public function toArray(): array
    {
        return [
            'nombre_usuario' => $this->nombre_usuario,
            'email' => $this->email,
            'password' => $this->password,
            'personal_id' => $this->personal_id,
            'rol_id' => $this->rol_id,
            'activo' => $this->activo,
            'requiere_cambio_contrasena' => $this->requiere_cambio_contrasena,
            'preguntas_seguridad' => $this->preguntas_seguridad,
        ];
    }
}
