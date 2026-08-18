<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AsociarPreguntaRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'usuario_id' => 'required|exists:usuario,usuario_id',
            'pregunta_id' => 'required|exists:preguntaseguridad,pregunta_id',
            'respuesta' => 'required|string|min:2|max:255',
        ];
    }

    public function messages()
    {
        return [
            'usuario_id.required' => 'Debe seleccionar un usuario',
            'usuario_id.exists' => 'El usuario seleccionado no existe',
            'pregunta_id.required' => 'Debe seleccionar una pregunta',
            'pregunta_id.exists' => 'La pregunta seleccionada no existe',
            'respuesta.required' => 'Debe ingresar una respuesta',
            'respuesta.min' => 'La respuesta debe tener al menos 2 caracteres',
        ];
    }
}
