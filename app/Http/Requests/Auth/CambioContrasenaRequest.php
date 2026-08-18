<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CambioContrasenaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'current_password' => ['required_without_all:pregunta_id,respuesta', 'string'],
            'new_password' => ['required', 'string', 'min:8', 'confirmed', 'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'],
            'new_password_confirmation' => ['required', 'string', 'min:8'],
            'pregunta_id' => ['required_without:current_password', 'integer', 'exists:pregunta_seguridad,pregunta_id'],
            'respuesta' => ['required_with:pregunta_id', 'string', 'min:2']
        ];
    }

    public function messages(): array
    {
        return [
            'current_password.required_without_all' => 'La contraseña actual es requerida o debe proporcionar pregunta y respuesta',
            'new_password.required' => 'La nueva contraseña es requerida',
            'new_password.min' => 'La nueva contraseña debe tener al menos 8 caracteres',
            'new_password.confirmed' => 'Las contraseñas no coinciden',
            'new_password.regex' => 'La contraseña debe contener al menos una mayúscula, un número y un carácter especial',
            'pregunta_id.required_without' => 'La pregunta de seguridad es requerida si no proporciona la contraseña actual',
            'pregunta_id.exists' => 'La pregunta de seguridad no existe',
            'respuesta.required_with' => 'La respuesta es requerida con la pregunta de seguridad',
            'respuesta.min' => 'La respuesta debe tener al menos 2 caracteres'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ], 422)
        );
    }
}
