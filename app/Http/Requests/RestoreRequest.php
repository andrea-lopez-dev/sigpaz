<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RestoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'id_backup' => 'required|exists:backup,backup_id',
            'origen' => 'required|string',
            'observaciones' => 'nullable|string|max:500',
            'modo' => 'required|in:completa,parcial',
            'modo_prueba' => 'boolean',
            'componentes' => 'required_if:modo,parcial|array',
            'componentes.base_datos' => 'boolean',
            'componentes.usuarios' => 'boolean',
            'componentes.configuracion' => 'boolean',
            'componentes.archivos' => 'boolean'
        ];
    }
}
