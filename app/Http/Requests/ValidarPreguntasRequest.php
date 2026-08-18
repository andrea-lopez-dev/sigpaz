<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidarPreguntasRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'usuario_id' => 'sometimes|exists:usuario,usuario_id',
            'respuestas' => 'required|array|min:1|max:3',
            'respuestas.*.pregunta_id' => 'required|exists:preguntaseguridad,pregunta_id',
            'respuestas.*.respuesta' => 'required|string|min:1',
            'preguntas_usadas' => 'sometimes|array',
            'preguntas_usadas.*' => 'integer|exists:preguntaseguridad,pregunta_id',
            'session_id' => 'sometimes|string'
        ];
    }

    public function messages()
    {
        return [
            'respuestas.required' => 'Debe proporcionar al menos una respuesta',
            'respuestas.*.pregunta_id.required' => 'Debe especificar la pregunta',
            'respuestas.*.pregunta_id.exists' => 'La pregunta no existe',
            'respuestas.*.respuesta.required' => 'Debe proporcionar una respuesta',
        ];
    }
}
