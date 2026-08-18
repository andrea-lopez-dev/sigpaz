<?php

namespace App\DTOs;

class PersonaDTO
{
    public function __construct(
        public int $id_tipo_doc,
        public string $numero_documento,
        public string $nombres,
        public string $apellidos,
        public string $fecha_nacimiento,
        public int $id_sexo,
        public string $telefono_movil,

        // Campos opcionales
        public ?string $nacionalidad = null,
        public ?string $lugar_nacimiento = null,
        public ?int $id_estado_civil = null,
        public ?string $profesion_oficio = null,
        public ?string $ocupacion_actual = null,
        public ?string $direccion = null,
        public ?string $municipio = null,
        public ?string $departamento = null,
        public ?string $codigo_postal = null,
        public ?string $telefono_fijo = null,
        public ?string $correo_electronico = null,
        public ?string $correo_alternativo = null,
        public ?string $nombre_contacto_emergencia = null,
        public ?string $telefono_contacto_emergencia = null,
        public ?string $parentesco_contacto_emergencia = null,
        public ?int $id_tipo_vinculo = null,
        public ?string $discapacidad = null,
        public ?string $observaciones = null,
        public ?string $foto = null,
        public ?string $hash_firma = null,
    ) {}

    /**
     * Crear DTO desde array
     */
    public static function fromArray(array $data): self
    {
        return new self(
            id_tipo_doc: $data['id_tipo_doc'],
            numero_documento: $data['numero_documento'],
            nombres: $data['nombres'],
            apellidos: $data['apellidos'],
            fecha_nacimiento: $data['fecha_nacimiento'],
            id_sexo: $data['id_sexo'],
            telefono_movil: $data['telefono_movil'],

            nacionalidad: $data['nacionalidad'] ?? null,
            lugar_nacimiento: $data['lugar_nacimiento'] ?? null,
            id_estado_civil: $data['id_estado_civil'] ?? null,
            profesion_oficio: $data['profesion_oficio'] ?? null,
            ocupacion_actual: $data['ocupacion_actual'] ?? null,
            direccion: $data['direccion'] ?? null,
            municipio: $data['municipio'] ?? null,
            departamento: $data['departamento'] ?? null,
            codigo_postal: $data['codigo_postal'] ?? null,
            telefono_fijo: $data['telefono_fijo'] ?? null,
            correo_electronico: $data['correo_electronico'] ?? null,
            correo_alternativo: $data['correo_alternativo'] ?? null,
            nombre_contacto_emergencia: $data['nombre_contacto_emergencia'] ?? null,
            telefono_contacto_emergencia: $data['telefono_contacto_emergencia'] ?? null,
            parentesco_contacto_emergencia: $data['parentesco_contacto_emergencia'] ?? null,
            id_tipo_vinculo: $data['id_tipo_vinculo'] ?? null,
            discapacidad: $data['discapacidad'] ?? null,
            observaciones: $data['observaciones'] ?? null,
            foto: $data['foto'] ?? null,
            hash_firma: $data['hash_firma'] ?? null,
        );
    }

    /**
     * Convertir a array para la base de datos
     */
    public function toDatabaseArray(): array
    {
        return [
            'id_tipo_doc' => $this->id_tipo_doc,
            'numero_documento' => $this->numero_documento,
            'nombres' => $this->nombres,
            'apellidos' => $this->apellidos,
            'fecha_nacimiento' => $this->fecha_nacimiento,
            'id_sexo' => $this->id_sexo,
            'nacionalidad' => $this->nacionalidad,
            'lugar_nacimiento' => $this->lugar_nacimiento,
            'id_estado_civil' => $this->id_estado_civil,
            'profesion_oficio' => $this->profesion_oficio,
            'ocupacion_actual' => $this->ocupacion_actual,
            'direccion' => $this->direccion,
            'municipio' => $this->municipio,
            'departamento' => $this->departamento,
            'codigo_postal' => $this->codigo_postal,
            'telefono_fijo' => $this->telefono_fijo,
            'telefono_movil' => $this->telefono_movil,
            'correo_electronico' => $this->correo_electronico,
            'correo_alternativo' => $this->correo_alternativo,
            'nombre_contacto_emergencia' => $this->nombre_contacto_emergencia,
            'telefono_contacto_emergencia' => $this->telefono_contacto_emergencia,
            'parentesco_contacto_emergencia' => $this->parentesco_contacto_emergencia,
            'id_tipo_vinculo' => $this->id_tipo_vinculo,
            'discapacidad' => $this->discapacidad,
            'observaciones' => $this->observaciones,
            'foto' => $this->foto,
            'hash_firma' => $this->hash_firma,
        ];
    }
}
