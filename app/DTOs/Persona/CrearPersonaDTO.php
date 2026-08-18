<?php
// app/DTOs/Persona/CrearPersonaDTO.php

namespace App\DTOs\Persona;

use App\Http\Requests\Persona\StorePersonaRequest;

class CrearPersonaDTO
{
    public function __construct(
        public readonly int $tipo_documento_id,
        public readonly string $numero_documento,
        public readonly string $nombres,
        public readonly string $apellidos,
        public readonly ?string $fecha_nacimiento,
        public readonly ?int $genero_id,
        public readonly ?string $nacionalidad,
        public readonly ?string $lugar_nacimiento,
        public readonly ?int $estado_civil_id,
        public readonly ?string $profesion_oficio,
        public readonly ?string $ocupacion_actual,
        public readonly ?string $direccion_cifrada,
        public readonly ?string $municipio,
        public readonly ?string $departamento,
        public readonly ?string $codigo_postal,
        public readonly ?string $telefono_fijo_cifrado,
        public readonly ?string $telefono_movil_cifrado,
        public readonly ?string $correo_electronico_cifrado,
        public readonly ?string $correo_alternativo_cifrado,
        public readonly ?string $nombre_contacto_emergencia,
        public readonly ?string $telefono_emergencia_cifrado,
        public readonly ?string $parentesco_emergencia,
        public readonly ?int $tipo_vinculo_id,
        public readonly ?string $discapacidad,
        public readonly ?string $observaciones,
        public readonly ?string $foto_cifrada,
        public readonly ?string $codigo_qr,
        public readonly ?string $firma_digital
    ) {}

    public static function fromRequest(StorePersonaRequest $request): self
    {
        $data = $request->validated();
        
        return new self(
            tipo_documento_id: (int) $data['tipo_documento_id'],
            numero_documento: $data['numero_documento'],
            nombres: $data['nombres'],
            apellidos: $data['apellidos'],
            fecha_nacimiento: $data['fecha_nacimiento'] ?? null,
            genero_id: isset($data['genero_id']) ? (int) $data['genero_id'] : null,
            nacionalidad: $data['nacionalidad'] ?? null,
            lugar_nacimiento: $data['lugar_nacimiento'] ?? null,
            estado_civil_id: isset($data['estado_civil_id']) ? (int) $data['estado_civil_id'] : null,
            profesion_oficio: $data['profesion_oficio'] ?? null,
            ocupacion_actual: $data['ocupacion_actual'] ?? null,
            direccion_cifrada: $data['direccion_cifrada'] ?? null,
            municipio: $data['municipio'] ?? null,
            departamento: $data['departamento'] ?? null,
            codigo_postal: $data['codigo_postal'] ?? null,
            telefono_fijo_cifrado: $data['telefono_fijo_cifrado'] ?? null,
            telefono_movil_cifrado: $data['telefono_movil_cifrado'] ?? null,
            correo_electronico_cifrado: $data['correo_electronico_cifrado'] ?? null,
            correo_alternativo_cifrado: $data['correo_alternativo_cifrado'] ?? null,
            nombre_contacto_emergencia: $data['nombre_contacto_emergencia'] ?? null,
            telefono_emergencia_cifrado: $data['telefono_emergencia_cifrado'] ?? null,
            parentesco_emergencia: $data['parentesco_emergencia'] ?? null,
            tipo_vinculo_id: isset($data['tipo_vinculo_id']) ? (int) $data['tipo_vinculo_id'] : null,
            discapacidad: $data['discapacidad'] ?? null,
            observaciones: $data['observaciones'] ?? null,
            foto_cifrada: $data['foto_cifrada'] ?? null,
            codigo_qr: $data['codigo_qr'] ?? null,
            firma_digital: $data['firma_digital'] ?? null
        );
    }

    public function toArray(): array
    {
        return [
            'tipo_documento_id' => $this->tipo_documento_id,
            'numero_documento' => $this->numero_documento,
            'nombres' => $this->nombres,
            'apellidos' => $this->apellidos,
            'fecha_nacimiento' => $this->fecha_nacimiento,
            'genero_id' => $this->genero_id,
            'nacionalidad' => $this->nacionalidad,
            'lugar_nacimiento' => $this->lugar_nacimiento,
            'estado_civil_id' => $this->estado_civil_id,
            'profesion_oficio' => $this->profesion_oficio,
            'ocupacion_actual' => $this->ocupacion_actual,
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
            'foto_cifrada' => $this->foto_cifrada,
            'codigo_qr' => $this->codigo_qr,
            'firma_digital' => $this->firma_digital
        ];
    }
}