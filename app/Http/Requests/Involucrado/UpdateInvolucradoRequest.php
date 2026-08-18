<?php

namespace App\Http\Requests\Involucrado;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInvolucradoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'rol' => ['sometimes', 'string', 'max:50', 'in:denunciante,victima,testigo,acusado,representante,asesor,otro'],
            'observaciones' => ['nullable', 'string', 'max:500']
        ];
    }
}
