<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MedidaCautelar extends Model
{
    use HasFactory;

    protected $table = 'medidacautelar';
    protected $primaryKey = 'medida_id';
    public $timestamps = false;

    const CREATED_AT = 'fecha_creacion';

    protected $fillable = [
        'conciliacion_id',
        'tipo_medida_id',
        'fecha_inicio',
        'duracion_dias',
        'descripcion',
        'estado',
        'observaciones'
    ];

    protected $casts = [
        'fecha_inicio' => 'datetime',
        'fecha_creacion' => 'datetime'
    ];

    // ========== RELACIONES ==========

    public function conciliacion(): BelongsTo
    {
        return $this->belongsTo(Conciliacion::class, 'conciliacion_id', 'conciliacion_id');
    }

    public function tipoMedida(): BelongsTo
    {
        return $this->belongsTo(TipoMedida::class, 'tipo_medida_id', 'tipo_medida_id');
    }

    // ========== ACCESORES ==========

    public function getEstadoTextoAttribute(): string
    {
        $estados = [
            'ACTIVA' => 'Activa',
            'CUMPLIDA' => 'Cumplida',
            'VENCIDA' => 'Vencida',
            'REVOCADA' => 'Revocada',
            'SUSPENDIDA' => 'Suspendida',
            'PRORROGADA' => 'Prorrogada'
        ];

        return $estados[$this->estado] ?? $this->estado;
    }

    public function getFechaVencimientoAttribute()
    {
        if ($this->fecha_inicio && $this->duracion_dias) {
            return $this->fecha_inicio->copy()->addDays($this->duracion_dias);
        }
        return null;
    }

    public function getDiasRestantesAttribute(): ?int
    {
        if ($this->fecha_inicio && $this->duracion_dias && $this->estado === 'ACTIVA') {
            $fechaVencimiento = $this->fecha_vencimiento;
            if ($fechaVencimiento && $fechaVencimiento->isFuture()) {
                return now()->diffInDays($fechaVencimiento, false);
            }
            return 0;
        }
        return null;
    }

    public function getEstaVigenteAttribute(): bool
    {
        if ($this->estado !== 'ACTIVA') {
            return false;
        }

        if ($this->fecha_inicio && $this->duracion_dias) {
            return now()->lessThan($this->fecha_vencimiento);
        }

        return true; // Medidas sin duración definida se consideran vigentes
    }

    // ========== SCOPES ==========

    public function scopePorConciliacion($query, int $conciliacionId)
    {
        return $query->where('conciliacion_id', $conciliacionId);
    }

    public function scopePorTipoMedida($query, int $tipoMedidaId)
    {
        return $query->where('tipo_medida_id', $tipoMedidaId);
    }

    public function scopePorEstado($query, string $estado)
    {
        return $query->where('estado', $estado);
    }

    public function scopeActivas($query)
    {
        return $query->where('estado', 'ACTIVA');
    }

    public function scopeVigentes($query)
    {
        return $query->where('estado', 'ACTIVA')
            ->where(function($q) {
                $q->whereNull('duracion_dias')
                  ->orWhereRaw('fecha_inicio + (duracion_dias || \' days\')::interval > NOW()');
            });
    }

    public function scopePorFechaInicio($query, $fechaDesde = null, $fechaHasta = null)
    {
        if ($fechaDesde) {
            $query->whereDate('fecha_inicio', '>=', $fechaDesde);
        }
        if ($fechaHasta) {
            $query->whereDate('fecha_inicio', '<=', $fechaHasta);
        }
        return $query;
    }
}
