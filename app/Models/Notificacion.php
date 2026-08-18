<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Notificacion extends Model
{

    protected $table = 'notificacion';
    protected $primaryKey = 'notificacion_id';

    public $timestamps = false;

    protected $fillable = [
        'denuncia_id',
        'tipo_notificacion_id',
        'fecha_emision',
        'destinatario',
        'medio',
        'contenido',
        'estado',
        'observaciones'
    ];

    protected $casts = [
        'fecha_emision' => 'datetime',
        'fecha_creacion' => 'datetime'
    ];

    const ESTADOS = [
        'EMITIDA' => 'EMITIDA',
        'PENDIENTE' => 'PENDIENTE',
        'CANCELADA' => 'CANCELADA',
        'ENTREGADA' => 'ENTREGADA'
    ];

    const MEDIOS = [
        'CORREO_ELECTRÓNICO' => 'CORREO_ELECTRÓNICO',
        'NOTIFICACIÓN_PERSONAL' => 'NOTIFICACIÓN_PERSONAL',
        'CARTA_CERTIFICADA' => 'CARTA_CERTIFICADA',
        'MENSAJE_TEXTO' => 'MENSAJE_TEXTO',
        'OFICIO' => 'OFICIO'
    ];

    // Relaciones
    public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function tipoNotificacion(): BelongsTo
    {
        return $this->belongsTo(TipoNotificacion::class, 'tipo_notificacion_id', 'tipo_notificacion_id');
    }

    // Scopes
    public function scopeEstado($query, $estado)
    {
        if ($estado) {
            return $query->where('estado', $estado);
        }
        return $query;
    }

    public function scopeFechas($query, $fechaInicio, $fechaFin)
    {
        if ($fechaInicio) {
            $query->whereDate('fecha_emision', '>=', $fechaInicio);
        }
        if ($fechaFin) {
            $query->whereDate('fecha_emision', '<=', $fechaFin);
        }
        return $query;
    }
}
