<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VotoConciliacion extends Model
{
    protected $table = 'votoconciliacion';
    protected $primaryKey = 'voto_id';
    public $timestamps = false;

    const CREATED_AT = 'fecha_voto';

    protected $fillable = [
        'conciliacion_id',
        'personal_id',
        'voto',
        'comentario',
        'fecha_voto'
    ];

    protected $casts = [
        'voto' => 'boolean',
        'fecha_voto' => 'datetime'
    ];
    // ========== RELACIONES ==========

    public function conciliacion(): BelongsTo
    {
        return $this->belongsTo(Conciliacion::class, 'conciliacion_id', 'conciliacion_id');
    }

    public function personal(): BelongsTo
    {
        return $this->belongsTo(Personal::class, 'personal_id', 'personal_id');
    }

    // ========== ACCESORES ==========

    public function getVotoTextoAttribute(): string
    {
        return $this->voto ? 'A FAVOR' : 'EN CONTRA';
    }

    public function getVotanteAttribute(): string
    {
        return $this->personal?->nombre_completo ?? 'Votante desconocido';
    }

    // ========== SCOPES ==========

    public function scopeFavor($query)
    {
        return $query->where('voto', true);
    }

    public function scopeEnContra($query)
    {
        return $query->where('voto', false);
    }

    public function scopePorPersonal($query, int $personalId)
    {
        return $query->where('personal_id', $personalId);
    }

    // ========== VALIDACIONES ==========

    public static function personalYaVoto(int $conciliacionId, int $personalId): bool
    {
        return self::where('conciliacion_id', $conciliacionId)
            ->where('personal_id', $personalId)
            ->exists();
    }
}
