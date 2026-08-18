<?php

namespace App\Http\Requests\Usuario;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ActualizarUsuarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        $usuarioId = $this->route('usuario');

        return [
            'nombre_usuario' => [
                'sometimes',
                'string',
                'max:50',
                'unique:usuario,nombre_usuario,' . $usuarioId . ',usuario_id'
            ],
            'email' => [
                'sometimes',
                'string',
                'email',
                'max:255',
                'unique:usuario,email,' . $usuarioId . ',usuario_id'
            ],
            'password' => [
                'sometimes',
                'string',
                'min:8',
                'confirmed',
                'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'
            ],
            'password_confirmation' => ['required_with:password', 'string', 'min:8'],
            'rol_id' => ['sometimes', 'integer', 'exists:rol,rol_id'],
            'activo' => ['sometimes', 'boolean'],
            'requiere_cambio_contrasena' => ['sometimes', 'boolean']
        ];
    }

    public function messages(): array
    {
        return [
            'nombre_usuario.unique' => 'El nombre de usuario ya existe',
            'email.unique' => 'El correo electrónico ya existe',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
            'password.regex' => 'La contraseña debe contener al menos una mayúscula, un número y un carácter especial',
            'rol_id.exists' => 'El rol no existe'
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
