<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Carbon\Carbon;

class Horario extends Model
{
    protected $table = 'horario';
    protected $primaryKey = 'horario_id';

    public $timestamps = true;
    const CREATED_AT = 'fecha_creacion';
    const UPDATED_AT = 'fecha_actualizacion';

    protected $fillable = [
        'personal_id',      // ✅ AGREGAR
        'fecha',
        'hora_inicio',
        'hora_fin',
        'tipo',             // ✅ AGREGAR
        'descripcion',
        'observaciones',    // ✅ AGREGAR
        'repetir_semanal',  // ✅ AGREGAR
        'usuario_creacion_id',
        'usuario_actualizacion_id'
    ];

    protected $casts = [
        'fecha' => 'date',
        'fecha_creacion' => 'datetime',
        'repetir_semanal' => 'boolean'
    ];

    protected $appends = ['duracion_horas'];


      // ✅ Accesor para hora_inicio
    public function getHoraInicioAttribute($value)
    {
        if (!$value) return null;

        if (is_string($value)) {
            // Si es "08:00:00" (time without time zone)
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

    // ✅ Accesor para hora_fin
    public function getHoraFinAttribute($value)
    {
        return $this->getHoraInicioAttribute($value);
    }

    // Relaciones
    public function personal(): BelongsTo
    {
        return $this->belongsTo(Personal::class, 'personal_id', 'personal_id');
    }

    public function asistencias(): HasMany
    {
        return $this->hasMany(Asistencia::class, 'horario_id', 'horario_id');
    }

    // Accesores
    public function getDuracionHorasAttribute(): float
    {
        $inicio = Carbon::parse($this->hora_inicio);
        $fin = Carbon::parse($this->hora_fin);
        return round($fin->diffInMinutes($inicio) / 60, 2);
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

    // Validaciones
    public static function validarHorario(array $data): array
    {
        $errors = [];

        if (empty($data['personal_id'])) {
            $errors['personal_id'] = 'El personal es requerido';
        }

        if (empty($data['fecha'])) {
            $errors['fecha'] = 'La fecha es requerida';
        }

        if (empty($data['hora_inicio'])) {
            $errors['hora_inicio'] = 'La hora de inicio es requerida';
        }

        if (empty($data['hora_fin'])) {
            $errors['hora_fin'] = 'La hora de fin es requerida';
        }

        if (!empty($data['hora_inicio']) && !empty($data['hora_fin'])) {
            $inicio = Carbon::parse($data['hora_inicio']);
            $fin = Carbon::parse($data['hora_fin']);

            if ($fin <= $inicio) {
                $errors['horario'] = 'La hora de fin debe ser posterior a la hora de inicio';
            }
        }

        // Validar solapamiento
        if (!empty($data['personal_id']) && !empty($data['fecha'])) {
            $exists = self::where('personal_id', $data['personal_id'])
                ->whereDate('fecha', $data['fecha'])
                ->when(!empty($data['horario_id']), function($q) use ($data) {
                    return $q->where('horario_id', '!=', $data['horario_id']);
                })
                ->exists();

            if ($exists) {
                $errors['solapamiento'] = 'Ya existe un horario para este personal en esta fecha';
            }
        }

        return $errors;
    }




    protected static function booted()
{
    static::creating(function ($horario) {
        if (empty($horario->fecha_creacion)) {
            $horario->fecha_creacion = Carbon::now();
        }
        if (empty($horario->fecha_actualizacion)) {
            $horario->fecha_actualizacion = Carbon::now();
        }

        // ✅ Asegurar que repetir_semanal sea boolean
        if (is_int($horario->repetir_semanal)) {
            $horario->repetir_semanal = (bool) $horario->repetir_semanal;
        }
    });

    static::updating(function ($horario) {
        $horario->fecha_actualizacion = Carbon::now();

        // ✅ Asegurar que repetir_semanal sea boolean en actualización
        if (is_int($horario->repetir_semanal)) {
            $horario->repetir_semanal = (bool) $horario->repetir_semanal;
        }
    });
}
}
