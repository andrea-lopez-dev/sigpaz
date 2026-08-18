<?php

namespace App\Http\Requests\Denuncia;

use Illuminate\Foundation\Http\FormRequest;

class CambiarEstadoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'estado_denuncia_id' => ['required', 'integer', 'exists:estadodenuncia,estado_denuncia_id'],
            'observaciones' => ['nullable', 'string', 'max:1000']
        ];
    }

    public function messages(): array
    {
        return [
            'estado_denuncia_id.required' => 'El nuevo estado es requerido',
            'estado_denuncia_id.exists' => 'El estado seleccionado no existe'
        ];
    }
}
