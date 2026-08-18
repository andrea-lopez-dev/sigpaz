<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Conciliacion extends Model
{
    use HasFactory;

    protected $table = 'conciliacion';
    protected $primaryKey = 'conciliacion_id';
    public $timestamps = false;

    const CREATED_AT = 'fecha_creacion';
    const UPDATED_AT = 'fecha_actualizacion';

    // Estados posibles de la conciliación
    const ESTADO_INCOMPLETA = 'INCOMPLETA';
    const ESTADO_EN_PROCESO = 'EN_PROCESO';
    const ESTADO_COMPLETA = 'COMPLETA';

    protected $fillable = [
        'denuncia_id',
        'fecha_audiencia',
        'estado',
        'resultado_final',
        'observaciones',
        'usuario_creacion_id',
        'usuario_actualizacion_id'
    ];

    protected $casts = [
        'fecha_audiencia' => 'datetime',
        'fecha_creacion' => 'datetime',
        'fecha_actualizacion' => 'datetime'
    ];


    // ========== RELACIONES ==========

     /**
     * Relación con remisiones (a través de denuncia_id)
     */
    public function remisiones(): HasMany
    {
        return $this->hasMany(Remision::class, 'denuncia_id', 'denuncia_id');
    }

    public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function votos(): HasMany
    {
        return $this->hasMany(VotoConciliacion::class, 'conciliacion_id', 'conciliacion_id');
    }

    public function usuarioCreacion(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_creacion_id', 'usuario_id');
    }

    public function usuarioActualizacion(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_actualizacion_id', 'usuario_id');
    }

    /**
 * Relación con medida cautelar (una conciliación puede tener una medida cautelar)
 */
public function medidaCautelar(): HasOne
{
    return $this->hasOne(MedidaCautelar::class, 'conciliacion_id', 'conciliacion_id');
}

/**
 * Relación con sentencia (una conciliación puede tener una sentencia)
 */
public function sentencia(): HasOne
{
    return $this->hasOne(Sentencia::class, 'conciliacion_id', 'conciliacion_id');
}
    // ========== ACCESORES ==========


public function getVotosFavorAttribute(): int
{
    // Si no hay votos, retornar 0 sin hacer la consulta
    if (!$this->relationLoaded('votos') || $this->votos->isEmpty()) {
        return 0;
    }

    // Contar solo si hay votos
    return $this->votos->where('voto', true)->count();
}

public function getVotosEnContraAttribute(): int
{
    // Si no hay votos, retornar 0 sin hacer la consulta
    if (!$this->relationLoaded('votos') || $this->votos->isEmpty()) {
        return 0;
    }

    // Contar solo si hay votos
    return $this->votos->where('voto', false)->count();
}


public function getTotalVotosAttribute(): int
{
    if (!$this->relationLoaded('votos')) {
        return $this->votos()->count();
    }
    return $this->votos->count();
}

    public function getEstadoCalculadoAttribute(): string
    {
        $totalVotos = $this->total_votos;

        if ($totalVotos >= 6) {
            return self::ESTADO_COMPLETA;
        } elseif ($totalVotos == 3) {
            return self::ESTADO_EN_PROCESO;
        } elseif ($totalVotos < 3) {
            return self::ESTADO_INCOMPLETA;
        }

        return $this->estado;
    }

    public function getPuedeVotarAttribute(): bool
    {
        return $this->estado !== self::ESTADO_COMPLETA && $this->total_votos < 6;
    }

    public function getVotosRestantesAttribute(): int
    {
        return max(0, 6 - $this->total_votos);
    }


    public function verificarYFinalizar(): bool
{
    $totalVotos = $this->votos()->count();
    $votosFavor = $this->votos()->where('voto', true)->count();
    $votosContra = $totalVotos - $votosFavor;

    $mayoriaAlcanzada = $votosFavor >= 4 || $votosContra >= 4;
    $maximoAlcanzado = $totalVotos >= 6;

    if ($mayoriaAlcanzada || $maximoAlcanzado) {
        $this->estado = 'COMPLETA';
        $this->resultado_final = $votosFavor > $votosContra ? 'APROBADA' : 'RECHAZADA';
        $this->fecha_conclusion = now();
        $this->save();

        return true;
    }

    return false;
}

    // ========== SCOPES ==========

    public function scopePorDenuncia($query, int $denunciaId)
    {
        return $query->where('denuncia_id', $denunciaId);
    }

    public function scopePorEstado($query, string $estado)
    {
        return $query->where('estado', $estado);
    }

    public function scopeCompletas($query)
    {
        return $query->where('estado', self::ESTADO_COMPLETA);
    }

    public function scopeEnProceso($query)
    {
        return $query->where('estado', self::ESTADO_EN_PROCESO);
    }

    public function scopeIncompletas($query)
    {
        return $query->where('estado', self::ESTADO_INCOMPLETA);
    }

    public function scopeActivas($query)
    {
        return $query->whereIn('estado', [self::ESTADO_EN_PROCESO, self::ESTADO_INCOMPLETA]);
    }

    // ========== MÉTODOS ==========

    public function actualizarEstado(): bool
    {
        $nuevoEstado = $this->estado_calculado;

        if ($nuevoEstado !== $this->estado) {
            $this->estado = $nuevoEstado;

            if ($nuevoEstado === self::ESTADO_COMPLETA && !$this->fecha_audiencia) {
                $this->fecha_audiencia = now();
            }

            return $this->save();
        }

        return false;
    }

    public function puedeAgregarVoto(): bool
    {
        return $this->estado !== self::ESTADO_COMPLETA && $this->total_votos < 6;
    }

public function getPersonalDisponibleParaVotar()
{
    $votaron = $this->votos()->pluck('personal_id');

    // Casting explícito para PostgreSQL
    return Personal::with('persona')
        ->whereRaw('activo::int = 1')  // Convierte boolean a integer
        ->whereNotIn('personal_id', $votaron)
        ->orderBy('personal_id')
        ->get();
}

    public function getResumenVotos(): array
    {
        return [
            'total_votos' => $this->total_votos,
            'votos_favor' => $this->votos_favor,
            'votos_en_contra' => $this->votos_en_contra,
            'votos_restantes' => $this->votos_restantes,
            'estado_actual' => $this->estado,
            'estado_calculado' => $this->estado_calculado,
            'puede_votar' => $this->puede_votar
        ];
    }

    /**
 * Scope para conciliaciones consolidadas (con votos suficientes)
 * Según la función fn_actualizar_estado_conciliacion, una conciliación
 * se consolida cuando tiene entre 4 y 6 votos
 */
public function scopeConsolidadas($query)
{
    return $query->whereIn('estado', ['COMPLETA'])
                 ->whereHas('votos', function($q) {
                     $q->havingRaw('COUNT(*) >= 4');
                 }, '>=', 4);
}

/**
 * Scope para conciliaciones disponibles para sentencia
 * Una denuncia consolidada en sentencia no puede aparecer en medida,
 * pero una consolidada en medida sí puede ir a sentencia
 */
public function scopeDisponiblesParaSentencia($query)
{
    return $query->consolidadas()
                 ->whereDoesntHave('sentencia') // No tiene sentencia asociada
                 ->with('medidaCautelar'); // Cargamos medidas para la lógica
}

/**
 * Scope para conciliaciones disponibles para medida cautelar
 * Solo conciliaciones consolidadas que NO tengan sentencia
 */
public function scopeDisponiblesParaMedidaCautelar($query)
{
    return $query->consolidadas()
                 ->whereDoesntHave('sentencia') // No tienen sentencia
                 ->whereDoesntHave('medidaCautelar'); // Tampoco tienen medida cautelar
}
}
