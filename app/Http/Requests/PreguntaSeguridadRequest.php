<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PreguntaSeguridadRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'texto' => 'required|string|min:5|max:255',
            'activo' => 'sometimes|boolean',
        ];
    }

    public function messages()
    {
        return [
            'texto.required' => 'El texto de la pregunta es obligatorio',
            'texto.min' => 'La pregunta debe tener al menos 5 caracteres',
            'texto.max' => 'La pregunta no puede exceder los 255 caracteres',
        ];
    }
}
