<?php
namespace App\DTOs;

class EstadoDenunciaDTO
{
    public function __construct(
        public string $nombre,
        public bool $estado = true
    ) {}

    public function toArray(): array
    {
        return [
            'nombre' => $this->nombre,
            'estado' => $this->estado
        ];
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['nombre'],
            $data['estado'] ?? true
        );
    }

    public static function fromRequest(array $requestData): self
    {
        return new self(
            $requestData['nombre'],
            $requestData['estado'] ?? true
        );
    }

    public function validar(): array
    {
        $errores = [];

        if (empty($this->nombre)) {
            $errores[] = 'El nombre es requerido';
        }

        if (strlen($this->nombre) > 50) {
            $errores[] = 'El nombre no puede exceder 50 caracteres';
        }

        return $errores;
    }
}
