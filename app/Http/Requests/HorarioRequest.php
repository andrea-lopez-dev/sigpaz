<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HorarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'personal_id' => 'required|integer|exists:personal,personal_id',
            'fecha' => 'required|date',
            'hora_inicio' => 'required|date_format:H:i',
            'hora_fin' => 'required|date_format:H:i|after:hora_inicio',
            'tipo' => 'nullable|in:NORMAL,EXTRA,TURNO,FINESEMANA',
            'observaciones' => 'nullable|string|max:500',
            'repetir_semanal' => 'boolean'
        ];
    }

    public function messages(): array
    {
        return [
            'personal_id.required' => 'El personal es requerido',
            'fecha.required' => 'La fecha es requerida',
            'hora_inicio.required' => 'La hora de inicio es requerida',
            'hora_fin.required' => 'La hora de fin es requerida',
            'hora_fin.after' => 'La hora de fin debe ser posterior a la hora de inicio'
        ];
    }
}
