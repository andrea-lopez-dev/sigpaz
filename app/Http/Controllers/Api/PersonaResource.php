<?php

namespace App\Http\Resources\Persona;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonaResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'persona_id' => $this->persona_id,
            'tipo_documento_id' => $this->tipo_documento_id,
            'numero_documento' => $this->numero_documento,
            'nombres' => $this->nombres,
            'apellidos' => $this->apellidos,
            'nombre_completo' => $this->nombre_completo,
            'fecha_nacimiento' => $this->fecha_nacimiento?->format('Y-m-d'),
            'genero_id' => $this->genero_id,
            'nacionalidad' => $this->nacionalidad,
            'lugar_nacimiento' => $this->lugar_nacimiento,
            'estado_civil_id' => $this->estado_civil_id,
            'profesion_oficio' => $this->profesion_oficio,
            'ocupacion_actual' => $this->ocupacion_actual,
            'direccion_cifrada' => $this->direccion_cifrada ? base64_encode($this->direccion_cifrada) : null,
            'municipio' => $this->municipio,
            'departamento' => $this->departamento,
            'codigo_postal' => $this->codigo_postal,
            'telefono_fijo_cifrado' => $this->telefono_fijo_cifrado ? base64_encode($this->telefono_fijo_cifrado) : null,
            'telefono_movil_cifrado' => $this->telefono_movil_cifrado ? base64_encode($this->telefono_movil_cifrado) : null,
            'correo_electronico_cifrado' => $this->correo_electronico_cifrado ? base64_encode($this->correo_electronico_cifrado) : null,
            'correo_alternativo_cifrado' => $this->correo_alternativo_cifrado ? base64_encode($this->correo_alternativo_cifrado) : null,
            'nombre_contacto_emergencia' => $this->nombre_contacto_emergencia,
            'telefono_emergencia_cifrado' => $this->telefono_emergencia_cifrado ? base64_encode($this->telefono_emergencia_cifrado) : null,
            'parentesco_emergencia' => $this->parentesco_emergencia,
            'tipo_vinculo_id' => $this->tipo_vinculo_id,
            'discapacidad' => $this->discapacidad,
            'tiene_discapacidad' => !empty($this->discapacidad),
            'observaciones' => $this->observaciones,
            'foto_cifrada' => $this->foto_cifrada ? base64_encode($this->foto_cifrada) : null,
            'firma_digital' => $this->firma_digital ? base64_encode($this->firma_digital) : null,
            
            // Relaciones
            'tipo_documento' => $this->whenLoaded('tipoDocumento', function() {
                return [
                    'tipo_documento_id' => $this->tipoDocumento->tipo_documento_id,
                    'nombre' => $this->tipoDocumento->nombre,
                ];
            }),
            
            'genero' => $this->whenLoaded('genero', function() {
                return [
                    'genero_id' => $this->genero->genero_id,
                    'nombre' => $this->genero->nombre,
                ];
            }),
            
            'estado_civil' => $this->whenLoaded('estadoCivil', function() {
                return [
                    'estado_civil_id' => $this->estadoCivil->estado_civil_id,
                    'nombre' => $this->estadoCivil->nombre,
                ];
            }),
            
            'tipo_vinculo' => $this->whenLoaded('tipoVinculo', function() {
                return [
                    'tipo_vinculo_id' => $this->tipoVinculo->tipo_vinculo_id,
                    'nombre' => $this->tipoVinculo->nombre,
                ];
            }),
            
            'edad' => $this->edad,
            'fecha_creacion' => $this->fecha_creacion?->format('Y-m-d H:i:s'),
            'fecha_actualizacion' => $this->fecha_actualizacion?->format('Y-m-d H:i:s'),
        ];
    }
}