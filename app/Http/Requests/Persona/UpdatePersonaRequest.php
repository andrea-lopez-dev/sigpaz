<?php

namespace App\Http\Requests\Persona;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdatePersonaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        $personaId = $this->route('id');

        return [
            'tipo_documento_id' => ['required', 'integer', 'exists:tipodocumento,tipo_documento_id'],
            'numero_documento' => [
                'required',
                'string',
                'max:20',
                function ($attribute, $value, $fail) use ($personaId) {
                    $exists = \App\Models\Persona::where('tipo_documento_id', request()->tipo_documento_id)
                        ->where('numero_documento', $value)
                        ->where('persona_id', '!=', $personaId)
                        ->exists();

                    if ($exists) {
                        $fail('Ya existe otra persona con este tipo y número de documento.');
                    }
                }
            ],
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
            'firma_digital' => ['nullable', 'string']
        ];
    }

    public function messages(): array
    {
        return [
            'tipo_documento_id.required' => 'El tipo de documento es requerido',
            'numero_documento.required' => 'El número de documento es requerido',
            'nombres.required' => 'Los nombres son requeridos',
            'apellidos.required' => 'Los apellidos son requeridos',
            'fecha_nacimiento.date' => 'La fecha de nacimiento no es válida',
            'fecha_nacimiento.before' => 'La fecha de nacimiento debe ser anterior a la fecha actual',
            'correo_electronico_cifrado.email' => 'El correo electrónico no es válido',
            'correo_alternativo_cifrado.email' => 'El correo alternativo no es válido'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ], 422)
        );
    }
}