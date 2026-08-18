<?php

namespace App\DTOs\Denuncia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CrearDenunciaDTO
{
    public function __construct(
        public readonly int $personaId,
        public readonly string $fechaIngreso,
        public readonly int $tipoConflictoId,
        public readonly string $descripcion,
        public readonly int $estadoDenunciaId,
        public readonly ?array $evidencia,
        public readonly ?string $observaciones,
        public readonly ?string $numeroExpediente,
        public readonly ?string $codigoExterno,
        public readonly int $usuarioCreacionId,
        public readonly ?string $codigoQrCifrado,
        public readonly ?array $involucrados = []
    ) {}

    public static function fromRequest(Request $request): self
    {
          $evidencia = $request->input('evidencia');
      if (is_string($evidencia)) {
            $evidencia = json_decode($evidencia, true);
        }

        if (!is_array($evidencia)) {
            $evidencia = [
                'documentos' => 0,
                'fotos' => 0,
                'videos' => 0,
                'audios' => 0
            ];
        }
          // ✅ Procesar involucrados
        $involucrados = $request->input('involucrados');
        if (is_string($involucrados)) {
            $involucrados = json_decode($involucrados, true);
        }

        return new self(
            personaId: $request->input('persona_id'),
            fechaIngreso: $request->input('fecha_ingreso'),
            tipoConflictoId: $request->input('tipo_conflicto_id'),
            descripcion: $request->input('descripcion'),
            estadoDenunciaId: $request->input('estado_denuncia_id', 1),
            evidencia: $request->input('evidencia'),
            observaciones: $request->input('observaciones'),
            numeroExpediente: $request->input('numero_expediente'),
            codigoExterno: $request->input('codigo_externo'),
            codigoQrCifrado: $request->input('codigo_qr_cifrado'),
            usuarioCreacionId: Auth::id() ?? 1,
            involucrados: $involucrados
        );
    }

    public function toArray(): array
    {
        $data = array_filter([
        'persona_id' => $this->personaId,
        'fecha_ingreso' => $this->fechaIngreso,
        'tipo_conflicto_id' => $this->tipoConflictoId,
        'descripcion' => $this->descripcion,
        'estado_denuncia_id' => $this->estadoDenunciaId,
        'evidencia' => $this->evidencia, // ✅ Asegurar que se incluya
        'observaciones' => $this->observaciones,
        'numero_expediente' => $this->numeroExpediente,
        'codigo_externo' => $this->codigoExterno,
        'codigo_qr_cifrado' => $this->codigoQrCifrado,
    ], fn($value) => !is_null($value));

     // Agregar campos opcionales si no son null
        if (!is_null($this->observaciones)) {
            $data['observaciones'] = $this->observaciones;
        }
        if (!is_null($this->numeroExpediente)) {
            $data['numero_expediente'] = $this->numeroExpediente;
        }
        if (!is_null($this->codigoExterno)) {
            $data['codigo_externo'] = $this->codigoExterno;
        }
        if (!is_null($this->codigoQrCifrado)) {
            $data['codigo_qr_cifrado'] = $this->codigoQrCifrado;
        }


      if ($this->evidencia !== null && !isset($data['evidencia'])) {
        $data['evidencia'] = $this->evidencia;
    }

    return $data;
}
 }
