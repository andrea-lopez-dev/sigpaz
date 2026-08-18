<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Personal extends Model
{
    protected $table = 'personal';
    protected $primaryKey = 'personal_id';
    public $timestamps = false;
    const CREATED_AT = 'fecha_creacion';
    const UPDATED_AT = 'fecha_actualizacion';

    protected $fillable = [
        'persona_id',
        'cargo_id',
        'fecha_ingreso',
        'fecha_egreso',
        'observaciones',
        'activo',
        'usuario_creacion_id',
        'usuario_actualizacion_id',
        'fuente_registro'
    ];

    protected $casts = [
        'fecha_ingreso' => 'date',
        'fecha_egreso' => 'date',
        'fecha_creacion' => 'datetime',
        'fecha_actualizacion' => 'datetime',
        'activo' => 'boolean'
    ];

    protected $attributes = [
        'activo' => true,
        'fuente_registro' => 'SISTEMA'
    ];

    // ========== ACCESSORS Y MUTATORS PARA BOOLEANOS ==========

    /**
     * MUTADOR: Guardar correctamente como booleano para PostgreSQL
     */
   public function setActivoAttribute($value)
{
    // ✅ IMPORTANTE: Detectar si es DB::raw
    if ($value instanceof \Illuminate\Database\Query\Expression) {
        $this->attributes['activo'] = $value;
        return;
    }

    // Convertir a booleano real para valores normales
    $boolValue = filter_var($value, FILTER_VALIDATE_BOOLEAN);
    $this->attributes['activo'] = $boolValue;
}

    /**
     * ACCESOR: Leer correctamente el valor booleano
     */
    public function getActivoAttribute($value)
    {
        // Manejar diferentes formatos que puede devolver PostgreSQL
        if (is_bool($value)) {
            return $value;
        }
        if (is_string($value)) {
            // PostgreSQL puede devolver 't'/'f' para booleanos
            if ($value === 't' || $value === 'true' || $value === '1') {
                return true;
            }
            if ($value === 'f' || $value === 'false' || $value === '0') {
                return false;
            }
        }
        // Convertir cualquier otro valor a booleano
        return (bool) $value;
    }


    /**
     * Relaciones
     */
    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id', 'persona_id');
    }

    public function cargo(): BelongsTo
    {
        return $this->belongsTo(Cargo::class, 'cargo_id', 'cargo_id');
    }

    public function usuario(): HasOne
    {
        return $this->hasOne(Usuario::class, 'personal_id', 'personal_id');
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
     * Accessors
     */
    public function getNombreCompletoAttribute(): string
    {
        return $this->persona?->nombre_completo ?? 'Sin persona asociada';
    }

    public function getDocumentoAttribute(): ?string
    {
        return $this->persona?->numero_documento;
    }

    public function getEstadoAttribute(): string
    {
        return $this->activo ? 'Activo' : 'Inactivo';
    }

    public function getTiempoEnServicioAttribute(): ?string
    {
        if (!$this->fecha_ingreso) {
            return null;
        }

        $inicio = $this->fecha_ingreso;
        $fin = $this->fecha_egreso ?? now();

        $diferencia = $inicio->diff($fin);

        $partes = [];
        if ($diferencia->y > 0) {
            $partes[] = $diferencia->y . ' año(s)';
        }
        if ($diferencia->m > 0) {
            $partes[] = $diferencia->m . ' mes(es)';
        }
        if ($diferencia->d > 0 && $diferencia->y == 0) {
            $partes[] = $diferencia->d . ' día(s)';
        }

        return implode(', ', $partes) ?: 'Menos de 1 día';
    }

    /**
     * Scopes
     */
    public function scopePorCargo($query, int $cargoId)
    {
        return $query->where('cargo_id', $cargoId);
    }

    public function scopeSinUsuario($query)
    {
        return $query->whereDoesntHave('usuario');
    }

    /**
 * Scope para filtrar por estado activo con tipo booleano correcto
 */
public function scopeWhereActivo($query, bool $activo = true)
{
    return $query->whereRaw('activo = ?', [$activo]);
}

/**
 * Scope para filtrar solo activos
 */
public function scopeActivo($query)
{
    return $query->whereRaw('activo = ?', [true]);
}

public function update(array $attributes = [], array $options = [])
{
    \Log::info('🔄 Modelo Personal - Update:', [
        'id' => $this->personal_id,
        'attributes' => $attributes
    ]);

    $result = parent::update($attributes, $options);

    \Log::info('✅ Resultado update:', ['result' => $result]);

    return $result;
}

/**
 * Scope para filtrar solo inactivos
 */
public function scopeInactivo($query)
{
    return $query->whereRaw('activo = ?', [false]);
}
}
