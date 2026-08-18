<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConfigurarPreguntasRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'respuestas' => 'required|array|min:3|max:3',
            'respuestas.*.pregunta_id' => 'required|exists:preguntaseguridad,pregunta_id',
            'respuestas.*.respuesta' => 'required|string|min:2|max:255',
        ];
    }

    public function messages()
    {
        return [
            'respuestas.required' => 'Debe proporcionar 3 preguntas de seguridad',
            'respuestas.min' => 'Debe seleccionar 3 preguntas de seguridad',
            'respuestas.*.pregunta_id.required' => 'Cada respuesta debe estar asociada a una pregunta',
            'respuestas.*.pregunta_id.exists' => 'La pregunta seleccionada no existe',
            'respuestas.*.respuesta.required' => 'Debe proporcionar una respuesta para cada pregunta',
            'respuestas.*.respuesta.min' => 'La respuesta debe tener al menos 2 caracteres',
        ];
    }
}
