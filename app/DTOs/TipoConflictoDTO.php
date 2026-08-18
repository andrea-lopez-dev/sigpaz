<?php
namespace App\DTOs;

class TipoConflictoDTO
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
}
