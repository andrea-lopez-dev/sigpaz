<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RolResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'rol_id' => $this->rol_id,
            'nombre' => $this->nombre,
            'descripcion' => $this->descripcion,
        ];
    }
}
