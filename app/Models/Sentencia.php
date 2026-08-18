<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sentencia extends Model
{
    use HasFactory;

    protected $table = 'sentencia';
    protected $primaryKey = 'sentencia_id';
    public $timestamps = false;

    const CREATED_AT = 'fecha_creacion';

    protected $fillable = [
        'conciliacion_id',
        'fecha_sentencia',
        'tipo_resolucion',
        'contenido',
        'estado_ejecucion',
        'institucion_remitida_id',
        'observaciones'
    ];

    protected $casts = [
        'fecha_sentencia' => 'datetime',
        'fecha_creacion' => 'datetime'
    ];

    // ========== RELACIONES ==========

    public function conciliacion(): BelongsTo
    {
        return $this->belongsTo(Conciliacion::class, 'conciliacion_id', 'conciliacion_id');
    }

    public function institucionRemitida(): BelongsTo
    {
        return $this->belongsTo(Institucion::class, 'institucion_remitida_id', 'institucion_id');
    }

    // ========== ACCESORES ==========

    public function getTieneContenidoAttribute(): bool
    {
        return !empty($this->contenido);
    }

    public function getEstadoEjecucionTextoAttribute(): string
    {
        $estados = [
            'PENDIENTE' => 'Pendiente de Ejecución',
            'EN_EJECUCION' => 'En Ejecución',
            'EJECUTADA' => 'Ejecutada',
            'PARCIALMENTE_EJECUTADA' => 'Parcialmente Ejecutada',
            'SUSPENDIDA' => 'Suspendida',
            'ARCHIVADA' => 'Archivada'
        ];

        return $estados[$this->estado_ejecucion] ?? $this->estado_ejecucion;
    }

    // ========== SCOPES ==========

    public function scopePorConciliacion($query, int $conciliacionId)
    {
        return $query->where('conciliacion_id', $conciliacionId);
    }

    public function scopePorInstitucion($query, int $institucionId)
    {
        return $query->where('institucion_remitida_id', $institucionId);
    }

    public function scopePorEstadoEjecucion($query, string $estado)
    {
        return $query->where('estado_ejecucion', $estado);
    }

    public function scopePendientes($query)
    {
        return $query->whereIn('estado_ejecucion', ['PENDIENTE', 'EN_EJECUCION']);
    }

    public function scopeEjecutadas($query)
    {
        return $query->where('estado_ejecucion', 'EJECUTADA');
    }

    public function scopeConFecha($query, $fechaDesde = null, $fechaHasta = null)
    {
        if ($fechaDesde) {
            $query->whereDate('fecha_sentencia', '>=', $fechaDesde);
        }
        if ($fechaHasta) {
            $query->whereDate('fecha_sentencia', '<=', $fechaHasta);
        }
        return $query;
    }
}
