<?php
namespace App\DTOs;

class SexoDTO extends CatalogoDTO
{
    public function __construct(
        public string $nombre,
        public bool $estado = true
    ) {
        parent::__construct($nombre, null, $estado);
    }

    public function toArray(): array
    {
        return [
            'nombre' => $this->nombre,
            'estado' => $this->estado
        ];
    }
}
