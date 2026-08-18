<?php
namespace App\Http\Requests\Remision;

use Illuminate\Foundation\Http\FormRequest;

class StoreRemisionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'denuncia_id' => 'required|integer|exists:denuncia,denuncia_id',
            'institucion_id' => 'required|integer|exists:institucion,institucion_id',
            'motivo' => 'required|string|max:500',
            'observaciones' => 'nullable|string|max:1000',
            'fecha_remision' => 'nullable|date'
        ];
    }

    public function messages(): array
    {
        return [
            'denuncia_id.required' => 'La denuncia es requerida',
            'institucion_id.required' => 'La institución es requerida',
            'motivo.required' => 'El motivo de la remisión es requerido'
        ];
    }
}
