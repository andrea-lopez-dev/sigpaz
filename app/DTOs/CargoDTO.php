<?php
namespace App\DTOs;

class CargoDTO
{
    public function __construct(
        public string $nombre_cargo,
        public ?string $descripcion = null,
        public bool $estado = true
    ) {}

    public function toArray(): array
    {
        return [
            'nombre_cargo' => $this->nombre_cargo,
            'descripcion' => $this->descripcion,
            'estado' => $this->estado
        ];
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['nombre_cargo'],
            $data['descripcion'] ?? null,
            $data['estado'] ?? true
        );
    }

    public static function fromRequest(array $requestData): self
    {
        return new self(
            $requestData['nombre_cargo'],
            $requestData['descripcion'] ?? null,
            $requestData['estado'] ?? true
        );
    }

    public function validar(): array
    {
        $errores = [];

        if (empty($this->nombre_cargo)) {
            $errores[] = 'El nombre del cargo es requerido';
        }

        if (strlen($this->nombre_cargo) > 100) {
            $errores[] = 'El nombre del cargo no puede exceder 100 caracteres';
        }

        return $errores;
    }
}
