<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonalResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'personal_id' => $this->personal_id,
            'persona_id' => $this->persona_id,
            'cargo_id' => $this->cargo_id,
            'fecha_ingreso' => $this->fecha_ingreso?->format('Y-m-d'),
            'fecha_egreso' => $this->fecha_egreso?->format('Y-m-d'),
            'observaciones' => $this->observaciones,
            'activo' => $this->activo,
            'fuente_registro' => $this->fuente_registro,

            // Datos de persona
            'persona' => $this->whenLoaded('persona', function() {
                return [
                    'persona_id' => $this->persona->persona_id,
                    'nombre_completo' => $this->persona->nombre_completo,
                    'nombres' => $this->persona->nombres,
                    'apellidos' => $this->persona->apellidos,
                    'numero_documento' => $this->persona->numero_documento,
                    'tipo_documento' => $this->persona->tipoDocumento?->nombre,
                    'foto_cifrada' => $this->persona->foto_cifrada,
                    'correo' => $this->persona->correo_electronico_cifrado,
                    'telefono' => $this->persona->telefono_movil_cifrado
                ];
            }),

            // Datos de cargo
            'cargo' => $this->whenLoaded('cargo', function() {
                return [
                    'cargo_id' => $this->cargo->cargo_id,
                    'nombre' => $this->cargo->nombre,
                    'descripcion' => $this->cargo->descripcion
                ];
            }),

            // Datos de usuario asociado
            'usuario' => $this->whenLoaded('usuario', function() {
                return [
                    'usuario_id' => $this->usuario->usuario_id,
                    'nombre_usuario' => $this->usuario->nombre_usuario,
                    'email' => $this->usuario->email,
                    'activo' => $this->usuario->activo
                ];
            }),

            // Campos calculados
            'nombre_completo' => $this->nombre_completo,
            'documento' => $this->documento,
            'estado' => $this->estado,
            'tiempo_en_servicio' => $this->tiempo_en_servicio,

            // Fechas
            'fecha_creacion' => $this->fecha_creacion?->format('Y-m-d H:i:s'),
            'fecha_actualizacion' => $this->fecha_actualizacion?->format('Y-m-d H:i:s'),
            'creado_por' => $this->usuarioCreacion?->nombre_usuario,
            'actualizado_por' => $this->usuarioActualizacion?->nombre_usuario
        ];
    }
}
