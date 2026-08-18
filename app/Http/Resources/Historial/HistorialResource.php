<?php

namespace App\Http\Resources\Historial;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistorialResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $estadoAnterior = $this->estado_anterior ? json_decode($this->estado_anterior, true) : null;
        $estadoActual = $this->estado_actual ? json_decode($this->estado_actual, true) : null;

        return [
            'historial_id' => $this->historial_id, // ✅ Consistente con la BD
            'denuncia_id' => $this->denuncia_id,
            'tipo_cambio' => $this->tipo_cambio,
            'tipo_cambio_display' => $this->getTipoCambioDisplay(),
            'campo_modificado' => $this->campo_modificado,
            'valor_anterior' => $this->valor_anterior,
            'valor_nuevo' => $this->valor_nuevo,
            'estado_anterior' => $estadoAnterior,
            'estado_actual' => $estadoActual,
            'observaciones' => $this->observaciones,
            'version' => $this->version,
            'fecha_cambio' => $this->fecha_cambio?->format('Y-m-d H:i:s'),
            'fecha_cambio_humana' => $this->fecha_cambio?->diffForHumans(),
            'usuario' => $this->whenLoaded('usuarioCambio', function() {
                return [ // ✅ Usar usuario_id y nombre_usuario
                    'usuario_id' => $this->usuarioCambio->usuario_id,
                    'nombre_usuario' => $this->usuarioCambio->nombre_usuario,
                    'email' => $this->usuarioCambio->email
                ];
            }),
            'usuario_nombre' => $this->usuarioCambio?->nombre_usuario ?? 'Sistema', // ✅ Cambiado a nombre_usuario
            'cambios' => $this->getCambiosFormateados(),
            'icono' => $this->getIcono(),
            'color' => $this->getColor()
        ];
    }

    private function getTipoCambioDisplay(): string
    {
        $tipos = [
            'creacion' => 'Creación',
            'actualizacion' => 'Actualización',
            'estado' => 'Cambio de Estado',
            'eliminacion' => 'Eliminación',
            'involucrado' => 'Cambio en Involucrados',
            'evidencia' => 'Cambio en Evidencia',
            'conciliacion' => 'Cambio en Conciliación',
            'notificacion' => 'Notificación',
            'remision' => 'Remisión'
        ];

        return $tipos[$this->tipo_cambio] ?? ucfirst($this->tipo_cambio ?? 'Desconocido');
    }

    private function getCambiosFormateados(): ?array
    {
        if ($this->tipo_cambio === 'estado' && $this->estado_anterior && $this->estado_actual) {
            $anterior = json_decode($this->estado_anterior, true);
            $actual = json_decode($this->estado_actual, true);

             return [
                'anterior' => [
                    'estado_denuncia_id' => $anterior['id_estado'] ?? null,
                    'nombre' => $this->getNombreEstado($anterior['id_estado'] ?? null)
                ],
                'nuevo' => [
                    'estado_denuncia_id' => $actual['id_estado'] ?? null,
                    'nombre' => $this->getNombreEstado($actual['id_estado'] ?? null)
                ]
            ];
        }

        if ($this->campo_modificado) {
            return [
                'campo' => $this->campo_modificado,
                'campo_display' => $this->getNombreCampo($this->campo_modificado),
                'de' => $this->valor_anterior,
                'a' => $this->valor_nuevo
            ];
        }

        return null;
    }

    private function getNombreEstado(?int $estadoId): ?string
    {
        if (!$estadoId) return null;

        $estados = [
            1 => 'Ingresada',
            2 => 'En Revisión',
            3 => 'En Audiencia',
            4 => 'Resuelta',
            5 => 'Archivada',
            6 => 'Cerrada',
            7 => 'Derivada'
        ];

        return $estados[$estadoId] ?? "Estado {$estadoId}";
    }

    private function getNombreCampo(string $campo): string
    {
        $nombres = [
            'descripcion' => 'Descripción',
            'observaciones' => 'Observaciones',
            'evidencia' => 'Evidencia',
            'numero_expediente' => 'Número de Expediente',
            'codigo_externo' => 'Código Externo',
            'fecha_ingreso' => 'Fecha de Ingreso',
            'persona_id' => 'Persona', // ✅ Cambiado de Denunciante a Persona
            'tipo_conflicto_id' => 'Tipo de Conflicto',
            'estado_denuncia_id' => 'Estado'
        ];

        return $nombres[$campo] ?? str_replace('_', ' ', ucfirst($campo));
    }

    private function getIcono(): string
    {
        return match($this->tipo_cambio) {
            'creacion' => '➕',
            'actualizacion' => '✏️',
            'estado' => '🔄',
            'eliminacion' => '🗑️',
            'involucrado' => '👥',
            'evidencia' => '📎',
            'conciliacion' => '🤝',
            'notificacion' => '📧',
            'remision' => '📤',
            default => '📝'
        };
    }

    private function getColor(): string
    {
        return match($this->tipo_cambio) {
            'creacion' => 'green',
            'actualizacion' => 'blue',
            'estado' => 'orange',
            'eliminacion' => 'red',
            'involucrado' => 'purple',
            'evidencia' => 'yellow',
            'conciliacion' => 'teal',
            'notificacion' => 'indigo',
            'remision' => 'pink',
            default => 'gray'
        };
    }

    public function with(Request $request): array
    {
        return [
            'meta' => [
                'version' => '1.0',
                'timestamp' => now()->toIso8601String()
            ]
        ];
    }
}
