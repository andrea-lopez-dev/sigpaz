<?php
// app/Http/Resources/Persona/PersonaResource.php

namespace App\Http\Resources\Persona;

use App\Http\Resources\TipoDocumentoResource;
use App\Http\Resources\GeneroResource;
use App\Http\Resources\EstadoCivilResource;
use App\Http\Resources\TipoVinculoResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PersonaResource extends JsonResource
{
    public function toArray($request)
    {
        // ✅ DEJA QUE LARAVEL USE LOS ACCESSORS AUTOMÁTICAMENTE
        return [
            'persona_id' => $this->persona_id,
            'tipo_documento_id' => $this->tipo_documento_id,
            'numero_documento' => $this->numero_documento,
            'nombres' => $this->nombres,
            'apellidos' => $this->apellidos,
            'fecha_nacimiento' => $this->fecha_nacimiento?->format('Y-m-d'),
            'genero_id' => $this->genero_id,
            'nacionalidad' => $this->nacionalidad,
            'lugar_nacimiento' => $this->lugar_nacimiento,
            'estado_civil_id' => $this->estado_civil_id,
            'profesion_oficio' => $this->profesion_oficio,
            'ocupacion_actual' => $this->ocupacion_actual,

            // ✅ SIMPLEMENTE ACCEDE A LA PROPIEDAD - EL ACCESSOR SE EJECUTA AUTOMÁTICAMENTE
            'direccion_cifrada' => $this->direccion_cifrada,
            'municipio' => $this->municipio,
            'departamento' => $this->departamento,
            'codigo_postal' => $this->codigo_postal,
            'telefono_fijo_cifrado' => $this->telefono_fijo_cifrado,
            'telefono_movil_cifrado' => $this->telefono_movil_cifrado,
            'correo_electronico_cifrado' => $this->correo_electronico_cifrado,
            'correo_alternativo_cifrado' => $this->correo_alternativo_cifrado,

            'nombre_contacto_emergencia' => $this->nombre_contacto_emergencia,
            'telefono_emergencia_cifrado' => $this->telefono_emergencia_cifrado,
            'parentesco_emergencia' => $this->parentesco_emergencia,

            'tipo_vinculo_id' => $this->tipo_vinculo_id,
            'discapacidad' => $this->discapacidad,
            'observaciones' => $this->observaciones,

            // ✅ IGUAL PARA FOTO, QR Y FIRMA
            'foto_cifrada' => $this->foto_cifrada,
            'codigo_qr' => $this->codigo_qr,
            'firma_digital' => $this->firma_digital,

            'nombre_completo' => $this->nombre_completo,
            'edad' => $this->edad,
            'tiene_discapacidad' => $this->tiene_discapacidad,

            'fecha_creacion' => $this->fecha_creacion?->format('Y-m-d H:i:s'),
            'fecha_actualizacion' => $this->fecha_actualizacion?->format('Y-m-d H:i:s'),
            'activo' => $this->activo ?? false,
            'fecha_activacion' => $this->fecha_activacion?->format('Y-m-d H:i:s'),
            'activado_por' => $this->activador?->nombre_usuario,

            // Relaciones
            'tipo_documento' => new TipoDocumentoResource($this->whenLoaded('tipoDocumento')),
            'genero' => new GeneroResource($this->whenLoaded('genero')),
            'estado_civil' => new EstadoCivilResource($this->whenLoaded('estadoCivil')),
            'tipo_vinculo' => new TipoVinculoResource($this->whenLoaded('tipoVinculo')),
        ];
    }
}
