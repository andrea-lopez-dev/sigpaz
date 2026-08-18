<?php
namespace App\DTOs;

class EstadoCivilDTO
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

    public static function fromRequest(array $requestData): self
    {
        return new self(
            $requestData['nombre'],
            $requestData['estado'] ?? true
        );
    }
}
