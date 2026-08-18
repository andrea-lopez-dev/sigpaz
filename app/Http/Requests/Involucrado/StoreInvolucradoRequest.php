<?php

namespace App\Http\Requests\Involucrado;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvolucradoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'denuncia_id' => ['required', 'integer', 'exists:denuncia,denuncia_id'],
            'persona_id' => ['required', 'integer', 'exists:persona,persona_id'],
            'rol' => ['required', 'string', 'max:50', 'in:denunciante,victima,testigo,acusado,representante,asesor,otro'],
            'observaciones' => ['nullable', 'string', 'max:500']
        ];
    }

    public function messages(): array
    {
        return [
            'denuncia_id.required' => 'La denuncia es requerida',
            'denuncia_id.exists' => 'La denuncia no existe',
            'persona_id.required' => 'La persona es requerida',
            'persona_id.exists' => 'La persona no existe',
            'rol.required' => 'El rol es requerido',
            'rol.in' => 'El rol debe ser: denunciante, victima, testigo, acusado, representante, asesor u otro'
        ];
    }
}
