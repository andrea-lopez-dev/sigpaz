<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuditFilterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'user_id' => 'nullable|integer|exists:usuario,usuario_id',
            'table_affected' => 'nullable|string|max:100',
            'keywords' => 'nullable|string|max:255',
            'actions' => 'nullable|array',
            'actions.*' => 'string|in:INSERT,UPDATE,DELETE,SELECT,LOGIN,LOGOUT,ERROR,BACKUP',
            'severity' => 'nullable|integer|min:0|max:3',
            'per_page' => 'nullable|integer|min:1|max:100',
            'page' => 'nullable|integer|min:1'
        ];
    }

    public function messages(): array
    {
        return [
            'start_date.date' => 'La fecha de inicio debe ser válida',
            'end_date.after_or_equal' => 'La fecha de fin debe ser posterior a la fecha de inicio',
            'user_id.exists' => 'El usuario seleccionado no existe',
            'actions.*.in' => 'La acción seleccionada no es válida',
            'per_page.max' => 'El máximo de registros por página es 100'
        ];
    }
}
