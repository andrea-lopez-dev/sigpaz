<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ConciliacionResource extends JsonResource
{
    public function toArray($request)
    {
        $data = [
            'conciliacion_id' => $this->conciliacion_id,
            'denuncia_id' => $this->denuncia_id,
            'fecha_inicio' => $this->fecha_audiencia,
            'estado' => $this->estado,
            'estado_texto' => $this->getEstadoTexto(),
            'resultado_final' => $this->resultado_final,
            'resultado_texto' => $this->getResultadoTexto(),
            'observaciones' => $this->observaciones,
            'estadisticas' => [
                'votos_favor' => $this->votos_favor ?? 0,
        'votos_contra' => $this->votos_contra ?? 0,
        'total_votos' => ($this->votos_favor ?? 0) + ($this->votos_contra ?? 0),
        'votos' => VotoConciliacionResource::collection($this->whenLoaded('votos')),
                'puede_votar' => $this->puede_votar,
                'estado_calculado' => $this->estado_calculado
            ],
            'fechas' => [
                'creacion' => $this->fecha_creacion,
                'actualizacion' => $this->fecha_actualizacion
            ]
        ];

        // Incluir relaciones si están cargadas
        if ($this->relationLoaded('denuncia')) {
            $data['denuncia'] = [
                'denuncia_id' => $this->denuncia->denuncia_id,
                'codigo_externo' => $this->denuncia->codigo_externo,
                'numero_expediente' => $this->denuncia->numero_expediente,
                'fecha_ingreso' => $this->denuncia->fecha_ingreso
            ];
        }

        if ($this->relationLoaded('votos')) {
            $data['votos'] = VotoConciliacionResource::collection($this->votos);
        }

        if ($this->relationLoaded('usuarioCreacion')) {
            $data['creado_por'] = [
                'usuario_id' => $this->usuarioCreacion?->usuario_id,
                'nombre' => $this->usuarioCreacion?->nombre_usuario
            ];
        }

        return $data;
    }

    private function getEstadoTexto(): string
    {
        return match($this->estado) {
            'COMPLETA' => 'Completa',
            'EN_PROCESO' => 'En Proceso',
            'INCOMPLETA' => 'Incompleta',
            default => $this->estado
        };
    }

    private function getResultadoTexto(): ?string
    {
        return match($this->resultado_final) {
            'APROBADA' => 'Aprobada',
            'RECHAZADA' => 'Rechazada',
            'EMPATE' => 'Empate',
            default => $this->resultado_final
        };
    }
}
