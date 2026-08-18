<?php

namespace App\Http\Requests\Conciliacion;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Conciliacion;

class StoreConciliacionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'denuncia_id' => [
                'required',
                'integer',
                'exists:denuncia,denuncia_id',
                // Validar que la denuncia NO tenga conciliación
                'unique:conciliacion,denuncia_id'
            ],
            'observaciones' => ['nullable', 'string', 'max:500']
        ];
    }

    public function messages(): array
    {
        return [
            'denuncia_id.unique' => 'Esta denuncia ya tiene una conciliación asociada'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'fecha_inicio' => now()
        ]);
    }
}
