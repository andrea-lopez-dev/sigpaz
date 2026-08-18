<?php

namespace App\Http\Requests\Conciliacion;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;

class StoreVotoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'personal_id' => [
                'required',
                'integer',
                'exists:personal,personal_id',
                Rule::unique('votoconciliacion', 'personal_id')
                    ->where('conciliacion_id', $this->route('conciliacionId'))
            ],
            'voto' => ['required', 'boolean'], // ✅ Cambiado a boolean
            'comentario' => ['nullable', 'string', 'max:255']
        ];
    }

    public function messages(): array
    {
        return [
            'personal_id.exists' => 'El personal seleccionado no existe o no está activo',
            'personal_id.unique' => 'Este personal ya ha votado en esta conciliación',
            'voto.required' => 'Debe seleccionar un voto (a favor o en contra)',
            'voto.boolean' => 'El valor del voto debe ser verdadero o falso'
        ];
    }

    /**
     * Convertir el voto a booleano antes de la validación
     */
    protected function prepareForValidation()
    {
        if ($this->has('voto')) {
            $valor = $this->voto;

            // Log para depuración
            Log::info('Voto recibido en prepareForValidation:', [
                'original' => $valor,
                'tipo' => gettype($valor)
            ]);

            // Convertir cualquier representación a boolean
            $boolean = filter_var($valor, FILTER_VALIDATE_BOOLEAN);

            $this->merge([
                'voto' => $boolean
            ]);

            Log::info('Voto después de conversión:', [
                'convertido' => $boolean,
                'tipo' => gettype($boolean)
            ]);
        }
    }
}

