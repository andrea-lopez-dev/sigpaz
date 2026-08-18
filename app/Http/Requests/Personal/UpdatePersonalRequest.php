<?php

namespace App\Http\Requests\Personal;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePersonalRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'cargo_id' => ['sometimes', 'integer', 'exists:cargo,cargo_id'],
            'fecha_ingreso' => ['nullable', 'date'],
            'fecha_egreso' => ['nullable', 'date', 'after_or_equal:fecha_ingreso'],
            'observaciones' => ['nullable', 'string', 'max:500'],
            'activo' => ['boolean']
        ];
    }
}
