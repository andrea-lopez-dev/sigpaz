<?php
namespace App\DTOs;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class HorarioDTO
{
    public function __construct(
        public ?int $horario_id,
        public int $personal_id,
        public string $fecha,
        public string $hora_inicio,
        public string $hora_fin,
        public string $tipo,
        public ?string $observaciones,
        public bool $repetir_semanal,
        public ?int $usuario_creacion_id,
        public ?int $usuario_actualizacion_id
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            horario_id: $data['horario_id'] ?? null,
            personal_id: $data['personal_id'],
            fecha: $data['fecha'],
            hora_inicio: $data['hora_inicio'],
            hora_fin: $data['hora_fin'],
            tipo: $data['tipo'] ?? 'NORMAL',
            observaciones: $data['observaciones'] ?? null,
            repetir_semanal: $data['repetir_semanal'] ?? false,
            usuario_creacion_id: $data['usuario_creacion_id'] ?? null,
            usuario_actualizacion_id: $data['usuario_actualizacion_id'] ?? null
        );
    }

   public function toArray(): array
    {
        // ✅ Usar DB::raw para enviar directamente como booleano a PostgreSQL
        $repetirValue = $this->repetir_semanal ? DB::raw('true') : DB::raw('false');

        return [
            'personal_id' => $this->personal_id,
            'fecha' => $this->fecha,
            'hora_inicio' => $this->hora_inicio,
            'hora_fin' => $this->hora_fin,
            'tipo' => $this->tipo,
            'observaciones' => $this->observaciones,
            'repetir_semanal' => $repetirValue,  // ✅ DB::raw('true') o DB::raw('false')
            'usuario_creacion_id' => $this->usuario_creacion_id,
            'usuario_actualizacion_id' => $this->usuario_actualizacion_id
        ];
    }
}
