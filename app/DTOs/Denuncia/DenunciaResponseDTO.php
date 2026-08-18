<?php

namespace App\DTOs\Denuncia;

use App\Models\Denuncia;
use Carbon\Carbon;

class DenunciaResponseDTO
{
    public function __construct(
        public readonly int $id,
        public readonly string $codigoExterno,
        public readonly ?string $numeroExpediente,
        public readonly array $persona,
        public readonly array $tipoConflicto,
        public readonly array $estado,
        public readonly string $descripcion,
        public readonly ?string $observaciones,
        public readonly array $evidencia,
        public readonly Carbon $fechaIngreso,
        public readonly Carbon $fechaCreacion,
        public readonly ?Carbon $fechaActualizacion,
        public readonly array $usuarioCreacion,
        public readonly ?array $usuarioActualizacion,
        public readonly int $diasTranscurridos,
        public readonly int $totalInvolucrados,
        public readonly int $totalAudiencias,
        public readonly bool $tieneEvidencia,
        public readonly bool $activa,
        public readonly bool $puedeEditar,
        public readonly array $involucrados = [],
        public readonly ?string $codigoQrCifrado,
        public readonly array $historial = []
    ) {}

    public static function fromModel(Denuncia $denuncia, array $relations = []): self
    {
        return new self(
            id: $denuncia->denuncia_id,
            codigoExterno: $denuncia->codigo_externo,
            numeroExpediente: $denuncia->numero_expediente,
            persona: $denuncia->persona ? [
                'persona_id' => $denuncia->persona->persona_id,
                'nombre_completo' => $denuncia->persona->nombre_completo,
                'numero_documento' => $denuncia->persona->numero_documento
            ] : [],
            tipoConflicto: $denuncia->tipoConflicto ? [
                'tipo_conflicto_id' => $denuncia->tipoConflicto->tipo_conflicto_id,
                'nombre' => $denuncia->tipoConflicto->nombre
            ] : [],
            estado: $denuncia->estadoDenuncia ? [
                'estado_denuncia_id' => $denuncia->estadoDenuncia->estado_denuncia_id,
                'nombre' => $denuncia->estadoDenuncia->nombre
            ] : [],
            descripcion: $denuncia->descripcion,
            observaciones: $denuncia->observaciones,
            evidencia: $denuncia->evidencia ?? [],
            fechaIngreso: $denuncia->fecha_ingreso,
            fechaCreacion: $denuncia->fecha_creacion,
            fechaActualizacion: $denuncia->fecha_actualizacion,
            usuarioCreacion: $denuncia->usuarioCreacion ? [
                'usuario_id' => $denuncia->usuarioCreacion->usuario_id,
                'nombre_usuario' => $denuncia->usuarioCreacion->nombre_usuario,
                'email' => $denuncia->usuarioCreacion->email
            ] : [],
            usuarioActualizacion: $denuncia->usuarioActualizacion ? [
                'usuario_id' => $denuncia->usuarioActualizacion->usuario_id,
                'nombre_usuario' => $denuncia->usuarioActualizacion->nombre_usuario,
                'email' => $denuncia->usuarioActualizacion->email
            ] : null,
            diasTranscurridos: $denuncia->dias_transcurridos,
            totalInvolucrados: $denuncia->involucrados()->count(),
            totalAudiencias: $denuncia->conciliaciones()->count(),
            tieneEvidencia: $denuncia->tieneEvidencia(),
            activa: $denuncia->estaActiva(),
            puedeEditar: $denuncia->puedeEditar(),
            codigoQrCifrado: $denuncia->codigo_qr_cifrado,
            involucrados: $relations['involucrados'] ?? [],
            historial: $relations['historial'] ?? []
        );
    }

    public function toArray(): array
    {
        return [
            'denuncia_id' => $this->id,
            'codigo_externo' => $this->codigoExterno,
            'numero_expediente' => $this->numeroExpediente,
            'persona' => $this->persona,
            'persona_id' => $this->persona['persona_id'] ?? null,
            'tipo_conflicto' => $this->tipoConflicto,
            'tipo_conflicto_id' => $this->tipoConflicto['tipo_conflicto_id'] ?? null,
            'estado' => $this->estado,
            'estado_denuncia_id' => $this->estado['estado_denuncia_id'] ?? null,
            'descripcion' => $this->descripcion,
            'observaciones' => $this->observaciones,
            'evidencia' => $this->evidencia,
            'fecha_ingreso' => $this->fechaIngreso->format('Y-m-d H:i:s'),
            'fecha_creacion' => $this->fechaCreacion->format('Y-m-d H:i:s'),
            'fecha_actualizacion' => $this->fechaActualizacion?->format('Y-m-d H:i:s'),
            'usuario_creacion' => $this->usuarioCreacion,
            'usuario_actualizacion' => $this->usuarioActualizacion,
            'dias_transcurridos' => $this->diasTranscurridos,
            'total_involucrados' => $this->totalInvolucrados,
            'total_audiencias' => $this->totalAudiencias,
            'tiene_evidencia' => $this->tieneEvidencia,
            'activa' => $this->activa,
            'puede_editar' => $this->puedeEditar,
            'involucrados' => $this->involucrados,
            'codigo_qr_cifrado' => $this->codigoQrCifrado,
            'historial' => $this->historial
        ];
    }
}
