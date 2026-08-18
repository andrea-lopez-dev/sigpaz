<?php

namespace App\Http\Resources\Denuncia;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Involucrado\InvolucradoResource;
use App\Http\Resources\Historial\HistorialResource;

class DenunciaResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->denuncia_id,
            'codigo_externo' => $this->codigo_externo,
            'numero_expediente' => $this->numero_expediente,
            'persona' => $this->whenLoaded('persona', [
                'persona_id' => $this->persona->persona_id,
                'nombre_completo' => $this->persona->nombre_completo,
                'numero_documento' => $this->persona->numero_documento,
            ]),
            'tipo_conflicto' => $this->whenLoaded('tipoConflicto', [
                'id' => $this->tipoConflicto->tipo_conflicto_id,
                'nombre' => $this->tipoConflicto->nombre
            ]),
            'estado' => $this->whenLoaded('estadoDenuncia', [
                'id' => $this->estadoDenuncia->estado_denuncia_id,
                'nombre' => $this->estadoDenuncia->nombre
            ]),
            'descripcion' => $this->descripcion,
            'observaciones' => $this->observaciones,
            'evidencia' => $this->evidencia,
            'fecha_ingreso' => $this->fecha_ingreso?->format('Y-m-d H:i:s'),
            'fecha_creacion' => $this->fecha_creacion?->format('Y-m-d H:i:s'),
            'fecha_actualizacion' => $this->fecha_actualizacion?->format('Y-m-d H:i:s'),
            'dias_transcurridos' => $this->dias_transcurridos,
            'codigo_qr_cifrado' => $this->codigo_qr_cifrado,
            'total_involucrados' => $this->whenCounted('involucrados', $this->involucrados_count),
          //  'tiene_evidencia' => $this->tieneEvidencia(),
           // 'activa' => $this->estaActiva(),
           // 'puede_editar' => $this->puedeEditar(),
            'involucrados' => InvolucradoResource::collection($this->whenLoaded('involucrados')),
            'historial' => HistorialResource::collection($this->whenLoaded('historial'))
        ];
    }
}
