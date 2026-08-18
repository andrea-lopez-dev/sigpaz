<?php

namespace App\DTOs\Involucrado;

use App\Models\Involucrado;
use Carbon\Carbon;

class InvolucradoResponseDTO
{
    public function __construct(
        public readonly int $id,
        public readonly int $denunciaId,
        public readonly array $persona,
        public readonly string $rol,
        public readonly ?string $observaciones,
        public readonly Carbon $fechaCreacion,
        public readonly array $denuncia = []
    ) {}

    public static function fromModel(Involucrado $involucrado, bool $loadRelations = true): self
    {
        $relations = $loadRelations ? [
            'denuncia' => $involucrado->relationLoaded('denuncia') ? $involucrado->denuncia : null,
            'persona' => $involucrado->relationLoaded('persona') ? $involucrado->persona : null
        ] : [];

        return new self(
            id: $involucrado->involucrado_id,
            denunciaId: $involucrado->denuncia_id,
            persona: $involucrado->persona ? [
                'id' => $involucrado->persona->persona_id,
                'nombre_completo' => $involucrado->persona->nombre_completo,
                'numero_documento' => $involucrado->persona->numero_documento,
                'tipo_documento' => $involucrado->persona->tipoDocumento?->nombre
            ] : [],
            rol: $involucrado->rol,
            observaciones: $involucrado->observaciones,
            fechaCreacion: $involucrado->fecha_creacion,
            denuncia: $involucrado->denuncia ? [
                'id' => $involucrado->denuncia->denuncia_id,
                'codigo_externo' => $involucrado->denuncia->codigo_externo
            ] : []
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'denuncia_id' => $this->denunciaId,
            'persona' => $this->persona,
            'rol' => $this->rol,
            'observaciones' => $this->observaciones,
            'fecha_creacion' => $this->fechaCreacion->format('Y-m-d H:i:s'),
            'denuncia' => $this->denuncia
        ];
    }
}
