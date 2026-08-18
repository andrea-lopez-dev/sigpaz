<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Notificacion;

class NotificacionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Implementar autorización según roles
    }

    public function rules(): array
    {
        $rules = [
            'denuncia_id' => 'required|exists:denuncia,denuncia_id',
            'tipo_notificacion_id' => 'required|exists:tiponotificacion,tipo_notificacion_id',
            'fecha_emision' => 'required|date',
            'destinatario' => 'required|string|max:150',
            'medio' => 'required|string|in:' . implode(',', array_keys(Notificacion::MEDIOS)),
            'contenido' => 'nullable|string|max:1000',
            'observaciones' => 'nullable|string|max:500'
        ];

        if ($this->isMethod('POST')) {
            $rules['estado'] = 'in:' . implode(',', array_keys(Notificacion::ESTADOS));
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'denuncia_id.required' => 'Debe seleccionar una denuncia',
            'denuncia_id.exists' => 'La denuncia seleccionada no existe',
            'tipo_notificacion_id.required' => 'Debe seleccionar un tipo de notificación',
            'destinatario.required' => 'El destinatario es requerido',
            'medio.required' => 'El medio de notificación es requerido',
            'medio.in' => 'El medio de notificación no es válido'
        ];
    }
}
