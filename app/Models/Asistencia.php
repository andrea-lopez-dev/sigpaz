<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Carbon\Carbon;

class Asistencia extends Model
{
    protected $table = 'asistencia';
    protected $primaryKey = 'asistencia_id';
    public $timestamps = true;
    const CREATED_AT = 'fecha_creacion';
    const UPDATED_AT = 'fecha_actualizacion';

    protected $fillable = [
        'personal_id', 'horario_id', 'fecha', 'hora_entrada', 'hora_salida',
        'estado_asistencia_id', 'observaciones', 'entrada_tarde',
        'salida_temprana', 'minutos_retraso', 'horas_trabajadas'
    ];

    protected $casts = [
        'fecha' => 'date',
        'hora_entrada' => 'datetime',
        'hora_salida' => 'datetime',
        'entrada_tarde' => 'boolean',
        'salida_temprana' => 'boolean',
        'minutos_retraso' => 'integer',
        'horas_trabajadas' => 'float'
    ];

    // ✅ SOLO los appends que SÍ existen
    protected $appends = ['estado_nombre', 'es_tarde', 'minutos_retraso_calc'];


    public function getEstadoNombreAttribute(): ?string
{
    return $this->estadoAsistencia?->nombre;
}

    public function getHoraEntradaAttribute($value)
    {
        if (!$value) return null;
        if (is_string($value)) {
            if (preg_match('/(\d{2}:\d{2}:\d{2})/', $value, $matches)) {
                return $matches[1];
            }
            return $value;
        }
        if ($value instanceof Carbon) {
            return $value->format('H:i:s');
        }
        return $value;
    }

    public function getHoraSalidaAttribute($value)
    {
        if (!$value) return null;
        if (is_string($value)) {
            if (preg_match('/(\d{2}:\d{2}:\d{2})/', $value, $matches)) {
                return $matches[1];
            }
            return $value;
        }
        if ($value instanceof Carbon) {
            return $value->format('H:i:s');
        }
        return $value;
    }

    public function getHorasTrabajadasAttribute($value)
    {
        if ($value !== null && $value > 0) {
            return (float) $value;
        }
        return $this->calcularHorasTrabajadasReal();
    }

    public function getEsTardeAttribute(): bool
    {
        if (!$this->horario || !$this->hora_entrada) {
            return false;
        }
        $horaInicioHorario = Carbon::parse($this->horario->hora_inicio);
        $horaEntrada = Carbon::parse($this->hora_entrada);
        return $horaEntrada > $horaInicioHorario;
    }

    public function getMinutosRetrasoCalcAttribute(): int
    {
        if (!$this->getEsTardeAttribute()) {
            return 0;
        }
        $horaInicioHorario = Carbon::parse($this->horario->hora_inicio);
        $horaEntrada = Carbon::parse($this->hora_entrada);
        return $horaEntrada->diffInMinutes($horaInicioHorario);
    }

    // Relaciones
    public function personal(): BelongsTo
    {
        return $this->belongsTo(Personal::class, 'personal_id', 'personal_id');
    }

    public function horario(): BelongsTo
    {
        return $this->belongsTo(Horario::class, 'horario_id', 'horario_id');
    }

    public function estadoAsistencia(): BelongsTo
    {
        return $this->belongsTo(EstadoAsistencia::class, 'estado_asistencia_id', 'estado_asistencia_id');
    }

    // Scopes
    public function scopePorFecha($query, $fecha)
    {
        return $query->whereDate('fecha', $fecha);
    }

    public function scopePorRangoFechas($query, $inicio, $fin)
    {
        return $query->whereBetween('fecha', [$inicio, $fin]);
    }

    public function scopePorPersonal($query, $personalId)
    {
        return $query->where('personal_id', $personalId);
    }

    private function calcularHorasTrabajadasReal(): float
    {
        if (!$this->hora_entrada || !$this->hora_salida) {
            return 0;
        }

        try {
            $entrada = Carbon::parse($this->hora_entrada);
            $salida = Carbon::parse($this->hora_salida);

            if ($salida > $entrada) {
                $minutosTrabajados = $salida->diffInMinutes($entrada);
                return round($minutosTrabajados / 60, 2);
            }
        } catch (\Exception $e) {
            \Log::error('Error calculando horas trabajadas real: ' . $e->getMessage());
        }

        return 0;
    }

    protected static function booted()
    {
        static::creating(function ($asistencia) {
            if (empty($asistencia->fecha)) {
                $asistencia->fecha = Carbon::today();
            }
            if (empty($asistencia->horario_id) && !empty($asistencia->personal_id)) {
                $horario = Horario::where('personal_id', $asistencia->personal_id)
                    ->whereDate('fecha', $asistencia->fecha)
                    ->first();
                if ($horario) {
                    $asistencia->horario_id = $horario->horario_id;
                }
            }
        });

        static::saving(function ($asistencia) {
            if (is_int($asistencia->entrada_tarde)) {
                $asistencia->entrada_tarde = (bool) $asistencia->entrada_tarde;
            }
            if (is_int($asistencia->salida_temprana)) {
                $asistencia->salida_temprana = (bool) $asistencia->salida_temprana;
            }
        });
    }
}
