<?php
namespace App\DTOs;

class TipoMedidaDTO
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
}
