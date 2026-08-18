<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BackupRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'descripcion' => 'required|string|min:10|max:500',
            'origen_nube' => 'required|in:local,google_drive,dropbox,onedrive,aws_s3',
            'tipo' => 'required|in:completo,base_datos,archivos,configuracion',
            'ruta_archivo_local' => 'required_if:origen_nube,local|nullable|string',
            'api_referencia' => 'required_if:origen_nube,google_drive,dropbox,onedrive,aws_s3|nullable|string|min:10',
            'encriptar' => 'boolean',
            'comprimir' => 'boolean',
            'nivel_compresion' => 'required_if:comprimir,true|integer|min:1|max:9',
            'password_encriptacion' => 'required_if:encriptar,true|string|min:8'
        ];
    }

    public function messages(): array
    {
        return [
            'descripcion.required' => 'La descripción es requerida',
            'descripcion.min' => 'La descripción debe tener al menos 10 caracteres',
            'origen_nube.required' => 'Debe seleccionar un destino',
            'ruta_archivo_local.required_if' => 'La ruta local es requerida para backups locales',
            'api_referencia.required_if' => 'La referencia API es requerida para backups en la nube',
            'password_encriptacion.required_if' => 'La contraseña de encriptación es requerida'
        ];
    }
}
