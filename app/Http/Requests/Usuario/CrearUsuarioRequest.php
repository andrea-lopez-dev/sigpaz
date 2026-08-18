<?php

namespace App\Http\Requests\Usuario;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CrearUsuarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->rol_id === 1; // Solo administradores del sistema
    }

   public function rules(): array
{
    return [
        'nombre_usuario' => ['required', 'string', 'max:50', 'unique:usuario,nombre_usuario'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:usuario,email'],
        'password' => [
            'required',
            'string',
            'min:8',
            'confirmed',
            'regex:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\/\-_.])[A-Za-z\d@$!%*?&\/\-_.]{8,}$/'
        ],
        'password_confirmation' => ['required', 'string', 'min:8'],
        'personal_id' => ['required', 'integer', 'exists:personal,personal_id', 'unique:usuario,personal_id'],
        'rol_id' => ['required', 'integer', 'exists:rol,rol_id'],
        'activo' => ['boolean'],
        'requiere_cambio_contrasena' => ['boolean'],
        'preguntas_seguridad' => ['sometimes', 'array', 'min:1'],
        'preguntas_seguridad.*.pregunta_id' => ['required_with:preguntas_seguridad', 'integer', 'exists:pregunta_seguridad,pregunta_id'],
        'preguntas_seguridad.*.respuesta' => ['required_with:preguntas_seguridad', 'string', 'min:2']
    ];
}

    public function messages(): array
    {
        return [
            'nombre_usuario.required' => 'El nombre de usuario es requerido',
            'nombre_usuario.unique' => 'El nombre de usuario ya existe',
            'email.required' => 'El correo electrónico es requerido',
            'email.unique' => 'El correo electrónico ya existe',
            'password.required' => 'La contraseña es requerida',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'password.regex' => 'La contraseña debe contener al menos una mayúscula, un número y un carácter especial',
            'personal_id.required' => 'El personal es requerido',
            'personal_id.exists' => 'El personal no existe',
            'personal_id.unique' => 'El personal ya tiene un usuario asociado',
            'rol_id.required' => 'El rol es requerido',
            'rol_id.exists' => 'El rol no existe',
            'preguntas_seguridad.min' => 'Debe asignar al menos una pregunta de seguridad',
            'preguntas_seguridad.*.pregunta_id.exists' => 'La pregunta de seguridad no existe',
            'preguntas_seguridad.*.respuesta.required' => 'La respuesta es requerida'
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
