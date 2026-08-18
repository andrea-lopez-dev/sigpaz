<?php

namespace App\Http\Requests\Denuncia;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDenunciaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'descripcion' => ['sometimes', 'string', 'min:10', 'max:5000'],
            'evidencia' => ['sometimes', 'array'],
            'evidencia.documentos' => ['sometimes', 'integer', 'min:0'],
            'evidencia.fotos' => ['sometimes', 'integer', 'min:0'],
            'evidencia.videos' => ['sometimes', 'integer', 'min:0'],
            'evidencia.audios' => ['sometimes', 'integer', 'min:0'],
            'observaciones' => ['nullable', 'string', 'max:2000'],
            'numero_expediente' => ['nullable', 'string', 'max:50', 'unique:denuncia,numero_expediente,' . $this->route('id') . ',denuncia_id']
        ];
    }
}
