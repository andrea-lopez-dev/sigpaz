<?php

namespace App\Http\Requests\Personal;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePersonalRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'persona_id' => [
                'required',
                'integer',
                'exists:persona,persona_id',
                // Validar que la persona NO tenga ya personal
                Rule::unique('personal', 'persona_id')

            ],
            'cargo_id' => ['required', 'integer', 'exists:cargo,cargo_id'],
            'fecha_ingreso' => ['nullable', 'date'],
            'fecha_egreso' => ['nullable', 'date', 'after_or_equal:fecha_ingreso'],
            'observaciones' => ['nullable', 'string', 'max:500'],
            'activo' => ['boolean'],
            'fuente_registro' => ['string', 'in:SISTEMA,MANUAL,IMPORTACION']
        ];
    }

    public function messages(): array
    {
        return [
            'persona_id.unique' => 'Esta persona ya tiene un registro de personal asociado',
            'fecha_egreso.after_or_equal' => 'La fecha de egreso debe ser posterior o igual a la fecha de ingreso'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'fecha_ingreso' => $this->fecha_ingreso ?? now()->toDateString(),
            'activo' => filter_var($this->activo ?? true, FILTER_VALIDATE_BOOLEAN)
        ]);
    }
}
