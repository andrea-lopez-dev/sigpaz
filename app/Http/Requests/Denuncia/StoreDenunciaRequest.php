<?php

namespace App\Http\Requests\Denuncia;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;
class StoreDenunciaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Ajustar según permisos
    }

    public function rules(): array
    {
          Log::info('📝 Validando reglas en StoreDenunciaRequest');
        return [
            'persona_id' => ['required', 'integer', 'exists:persona,persona_id'],
            'fecha_ingreso' => ['required', 'date'],
            'tipo_conflicto_id' => ['required', 'integer', 'exists:tipoconflicto,tipo_conflicto_id'],
            'descripcion' => ['required', 'string', 'min:10', 'max:5000'],
            'estado_denuncia_id' => ['sometimes', 'integer', 'exists:estadodenuncia,estado_denuncia_id'],
            'evidencia' => ['nullable', 'array'],
            'evidencia.documentos' => ['nullable', 'integer', 'min:0'],
            'evidencia.fotos' => ['nullable', 'integer', 'min:0'],
            'evidencia.videos' => ['nullable', 'integer', 'min:0'],
            'evidencia.audios' => ['nullable', 'integer', 'min:0'],
            'observaciones' => ['nullable', 'string', 'max:2000'],
            'numero_expediente' => ['nullable', 'string', 'max:50', 'unique:denuncia,numero_expediente'],
            'codigo_externo' => ['nullable', 'string', 'max:50', 'unique:denuncia,codigo_externo'],
            'codigo_qr_cifrado' => ['nullable', 'string'],

             'documentos' => ['nullable', 'array'],
            'documentos.*' => ['nullable', 'file', 'mimes:pdf,doc,docx,txt,xls,xlsx', 'max:10240'],
            'fotos' => ['nullable', 'array'],
            'fotos.*' => ['nullable', 'file', 'mimes:jpeg,jpg,png,gif', 'max:5120'],
            'videos' => ['nullable', 'array'],
            'videos.*' => ['nullable', 'file', 'mimes:mp4,avi,mov', 'max:51200'],
            'audios' => ['nullable', 'array'],
            'audios.*' => ['nullable', 'file', 'mimes:mp3,wav,ogg', 'max:20480'],
        ];


    }

    public function messages(): array
    {
        return [
            'persona_id.required' => 'El denunciante es requerido',
            'persona_id.exists' => 'El denunciante no existe',
            'tipo_conflicto_id.required' => 'El tipo de conflicto es requerido',
            'descripcion.required' => 'La descripción es requerida',
            'descripcion.min' => 'La descripción debe tener al menos 10 caracteres',
            'numero_expediente.unique' => 'El número de expediente ya existe',
            'codigo_externo.unique' => 'El código externo ya existe'
        ];
    }

    protected function failedValidation(Validator $validator)
{
    Log::error('❌ Validación falló en StoreDenunciaRequest:', [
        'errors' => $validator->errors()->toArray(),
        'data' => $this->all()
    ]);

    // 👈 VERIFICAR SI ES ERROR DE UNIQUE
    $errors = $validator->errors()->toArray();

    // Personalizar mensajes para campos únicos
    if (isset($errors['numero_expediente'])) {
        foreach ($errors['numero_expediente'] as $key => $error) {
            if (str_contains($error, 'already exists') || str_contains($error, 'ya existe')) {
                $errors['numero_expediente'][$key] = 'El número de expediente ya existe en el sistema';
            }
        }
    }

    if (isset($errors['codigo_externo'])) {
        foreach ($errors['codigo_externo'] as $key => $error) {
            if (str_contains($error, 'already exists') || str_contains($error, 'ya existe')) {
                $errors['codigo_externo'][$key] = 'El código externo ya existe en el sistema';
            }
        }
    }

    throw new HttpResponseException(
        response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $errors
        ], 422)
    );
}

    protected function prepareForValidation()
    {

    $data = $this->all();
           $evidencia = [
            'documentos' => $this->hasFile('documentos') ? count($this->file('documentos', [])) : 0,
            'fotos' => $this->hasFile('fotos') ? count($this->file('fotos', [])) : 0,
            'videos' => $this->hasFile('videos') ? count($this->file('videos', [])) : 0,
            'audios' => $this->hasFile('audios') ? count($this->file('audios', [])) : 0,
        ];

  // Si ya viene evidencia en el request, combinar
        if (isset($data['evidencia']) && is_array($data['evidencia'])) {
            $evidencia = array_merge($data['evidencia'], $evidencia);
        }

        $this->merge(['evidencia' => $evidencia]);

        Log::info('📦 Datos preparados para validar:', [
            'evidencia' => $evidencia,
            'total_documentos' => $evidencia['documentos'],
            'total_fotos' => $evidencia['fotos'],
            'total_videos' => $evidencia['videos'],
            'total_audios' => $evidencia['audios'],
        ]);
    }
    }

