<?php


namespace App\Http\Requests\Persona;

use Illuminate\Foundation\Http\FormRequest;

class StorePersonaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'tipo_documento_id' => ['required', 'integer', 'exists:tipodocumento,tipo_documento_id'],
            'numero_documento' => ['required', 'string', 'max:20'],
            'nombres' => ['required', 'string', 'max:100'],
            'apellidos' => ['required', 'string', 'max:100'],
            'fecha_nacimiento' => ['nullable', 'date', 'before:today'],
            'genero_id' => ['nullable', 'integer', 'exists:genero,genero_id'],
            'nacionalidad' => ['nullable', 'string', 'max:50'],
            'lugar_nacimiento' => ['nullable', 'string', 'max:100'],
            'estado_civil_id' => ['nullable', 'integer', 'exists:estadocivil,estado_civil_id'],
            'profesion_oficio' => ['nullable', 'string', 'max:100'],
            'ocupacion_actual' => ['nullable', 'string', 'max:100'],
            'direccion_cifrada' => ['nullable', 'string'],
            'municipio' => ['nullable', 'string', 'max:100'],
            'departamento' => ['nullable', 'string', 'max:100'],
            'codigo_postal' => ['nullable', 'string', 'max:10'],
            'telefono_fijo_cifrado' => ['nullable', 'string'],
            'telefono_movil_cifrado' => ['nullable', 'string'],
            'correo_electronico_cifrado' => ['nullable', 'string', 'email'],
            'correo_alternativo_cifrado' => ['nullable', 'string', 'email'],
            'nombre_contacto_emergencia' => ['nullable', 'string', 'max:200'],
            'telefono_emergencia_cifrado' => ['nullable', 'string'],
            'parentesco_emergencia' => ['nullable', 'string', 'max:50'],
            'tipo_vinculo_id' => ['nullable', 'integer', 'exists:tipovinculo,tipo_vinculo_id'],
            'discapacidad' => ['nullable', 'string'],
            'observaciones' => ['nullable', 'string'],
            'foto_cifrada' => ['nullable', 'string'],
            'codigo_qr' => ['nullable', 'string'],
            'firma_digital' => ['nullable', 'string']
        ];
    }

    /**
     * Preparar los datos para validación
     */
    protected function prepareForValidation()
    {
        // Si el QR viene como dataURL, asegurarse de que sea string
        if ($this->has('codigo_qr') && is_string($this->codigo_qr)) {
            // No modificar, dejar como está
        }
    }
}
