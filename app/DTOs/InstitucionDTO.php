<?php
namespace App\DTOs;

class InstitucionDTO
{
    public function __construct(
        public string $nombre,
        public ?string $descripcion = null,
        public bool $estado = true
    ) {}

    public function toArray(): array
    {
        return [
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
            'estado' => $this->estado
        ];
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['nombre'],
            $data['descripcion'] ?? null,
            $data['estado'] ?? true
        );
    }

    public static function fromRequest(array $requestData): self
    {
        return new self(
            $requestData['nombre'],
            $requestData['descripcion'] ?? null,
            $requestData['estado'] ?? true
        );
    }

    public function validar(): array
    {
        $errores = [];

        if (empty($this->nombre)) {
            $errores[] = 'El nombre es requerido';
        }

        if (strlen($this->nombre) > 200) {
            $errores[] = 'El nombre no puede exceder 200 caracteres';
        }

        if ($this->descripcion && strlen($this->descripcion) > 500) {
            $errores[] = 'La descripción no puede exceder 500 caracteres';
        }

        return $errores;
    }
}
