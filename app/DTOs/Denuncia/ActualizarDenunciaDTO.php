<?php

namespace App\DTOs\Denuncia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class ActualizarDenunciaDTO
{
    public function __construct(
        public readonly ?string $descripcion,
        public readonly ?int $estadoDenunciaId,
        public readonly ?array $evidencia,
        public readonly ?string $observaciones,
        public readonly ?string $numeroExpediente,
        public readonly int $usuarioActualizacionId
    ) {}

    public static function fromRequest(Request $request): self
    {
         $evidencia = $request->input('evidencia');

    Log::info('📦 evidencia en DTO:', [
        'evidencia' => $evidencia,
        'tipo' => gettype($evidencia)
    ]);
        return new self(
            descripcion: $request->input('descripcion'),
            estadoDenunciaId: $request->input('estado_denuncia_id'),
            evidencia: $request->input('evidencia'),
            observaciones: $request->input('observaciones'),
            numeroExpediente: $request->input('numero_expediente'),
            usuarioActualizacionId: Auth::id() ?? 1
        );
    }

    public function toArray(): array
    {
        return array_filter([
            'descripcion' => $this->descripcion,
            'estado_denuncia_id' => $this->estadoDenunciaId,
            'evidencia' => $this->evidencia,
            'observaciones' => $this->observaciones,
            'numero_expediente' => $this->numeroExpediente,
            'usuario_actualizacion_id' => $this->usuarioActualizacionId
        ], fn($value) => !is_null($value));
    }

    public function hasChanges(): bool
    {
        return !empty($this->toArray());
    }
}
