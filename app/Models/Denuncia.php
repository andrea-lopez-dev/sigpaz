<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Denuncia extends Model
{
    protected $table = 'denuncia';
    protected $primaryKey = 'denuncia_id';
    public $timestamps = false;

    protected $fillable = [
        'codigo_externo',
        'numero_expediente',
        'persona_id',
        'fecha_ingreso',
        'tipo_conflicto_id',
        'descripcion',
        'estado_denuncia_id',
        'observaciones',
        'fecha_creacion',
        'usuario_creacion_id',
        'fecha_actualizacion',
        'usuario_actualizacion_id',
        'codigo_qr_cifrado'
    ];

    protected $casts = [
        'fecha_ingreso' => 'datetime',
        'fecha_creacion' => 'datetime',
        'fecha_actualizacion' => 'datetime',

    ];

    protected $appends = [
        'dias_transcurridos'
    ];

    // ========== RELACIONES CORREGIDAS ==========
    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id', 'persona_id');
    }

    public function tipoConflicto(): BelongsTo
    {
        return $this->belongsTo(TipoConflicto::class, 'tipo_conflicto_id', 'tipo_conflicto_id');
    }

    public function estadoDenuncia(): BelongsTo
    {
        return $this->belongsTo(EstadoDenuncia::class, 'estado_denuncia_id', 'estado_denuncia_id');
    }

    /**
     * Relación con el usuario que creó la denuncia
     * ✅ CORREGIDO: Usa Usuario::class y 'usuario_id' como clave local
     */
    public function usuarioCreacion(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_creacion_id', 'usuario_id');
    }

    /**
     * Relación con el usuario que actualizó la denuncia
     * ✅ CORREGIDO: Usa Usuario::class y 'usuario_id' como clave local
     */
    public function usuarioActualizacion(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_actualizacion_id', 'usuario_id');
    }

    public function involucrados(): HasMany
    {
        return $this->hasMany(Involucrado::class, 'denuncia_id', 'denuncia_id');
    }

    public function historial(): HasMany
    {
        return $this->hasMany(DenunciaHistorial::class, 'denuncia_id', 'denuncia_id');
    }

    public function conciliaciones(): HasMany
    {
        return $this->hasMany(Conciliacion::class, 'denuncia_id', 'denuncia_id');
    }

    public function notificaciones(): HasMany
    {
        return $this->hasMany(Notificacion::class, 'denuncia_id', 'denuncia_id');
    }

    public function remisiones(): HasMany
    {
        return $this->hasMany(Remision::class, 'denuncia_id', 'denuncia_id');
    }

    public function evidencias(): HasMany
    {
        return $this->hasMany(Evidencia::class, 'denuncia_id', 'denuncia_id');
    }

     public function prestamoexpediente(): HasMany
    {
        return $this->hasMany(PrestamoExpediente::class, 'denuncia_id', 'denuncia_id');
    }

    // ========== ACCESORES ==========
    public function getTotalEvidenciasAttribute(): int
    {
        return $this->evidencias()->count();
    }

    public function getResumenEvidenciasAttribute(): array
    {
        return [
            'total' => $this->evidencias()->count(),
            'documentos' => $this->evidencias()->where('tipo', 'documento')->count(),
            'fotos' => $this->evidencias()->where('tipo', 'foto')->count(),
            'videos' => $this->evidencias()->where('tipo', 'video')->count(),
            'audios' => $this->evidencias()->where('tipo', 'audio')->count()
        ];
    }



    // ========== ACCESSORS ==========
    protected function evidencia(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true) ?? [
                'documentos' => 0,
                'fotos' => 0,
                'videos' => 0,
                'audios' => 0
            ],
            set: fn ($value) => is_array($value) ? json_encode($value) : $value
        );
    }

    public function getDiasTranscurridosAttribute(): ?int
    {
        return $this->fecha_ingreso ? now()->diffInDays($this->fecha_ingreso) : null;
    }

    // ========== MÉTODOS DE CONSULTA ==========
    public function tieneEvidencia(): bool
    {
        $evidencia = $this->evidencia;
        return ($evidencia['documentos'] ?? 0) > 0 ||
               ($evidencia['fotos'] ?? 0) > 0 ||
               ($evidencia['videos'] ?? 0) > 0 ||
               ($evidencia['audios'] ?? 0) > 0;
    }

    // ========== SCOPES ==========
    public function scopePorEstado($query, $estado)
    {
        return $query->where('estado_denuncia_id', $estado);
    }

    public function scopePorTipoConflicto($query, $tipo)
    {
        return $query->where('tipo_conflicto_id', $tipo);
    }

    public function scopePorRangoFechas($query, $inicio, $fin)
    {
        return $query->whereBetween('fecha_ingreso', [$inicio, $fin]);
    }

    public function scopePorPersona($query, $personaId)
    {
        return $query->where('persona_id', $personaId);
    }

    /**
     * Obtener resumen de involucrados
     */
    public function getResumenInvolucradosAttribute(): array
    {
        $involucrados = $this->involucrados()->with('persona')->get();

        return [
            'total' => $involucrados->count(),
            'denunciante_principal' => $this->persona ? [
                'id' => $this->persona->persona_id,
                'nombre' => $this->persona->nombre_completo
            ] : null,
            'por_rol' => $involucrados->groupBy('rol')->map->count(),
            'lista' => $involucrados->map(function ($inv) {
                return [
                    'id' => $inv->involucrado_id,
                    'persona_id' => $inv->persona_id,
                    'nombre' => $inv->persona?->nombre_completo,
                    'rol' => $inv->rol,
                    'rol_display' => $inv->rol_display
                ];
            })
        ];
    }


// También puedes crear un scope para consultas
public function scopeActiva($query)
{
    return $query->whereNotIn('estado_denuncia_id', [5, 6, 7]);
}

public function estaActiva(): bool
{
    \Log::info('🔍 Verificando si denuncia está activa', ['id' => $this->denuncia_id]);
    $estadosInactivos = [5, 6, 7];
    return !in_array($this->estado_denuncia_id, $estadosInactivos);
}

public function puedeEditar(): bool
{
    \Log::info('🔍 Verificando si denuncia puede editarse', ['id' => $this->denuncia_id]);
    $estadosEditables = [1, 2];
    return in_array($this->estado_denuncia_id, $estadosEditables);
}

public function scopeEditable($query)
{
    return $query->whereIn('estado_denuncia_id', [1, 2]);
}
/**
 * Accesor para codigo_qr_cifrado - Convierte el valor de la BD a un formato usable
 */
public function getCodigoQrCifradoAttribute($value)
{
    // Si es null o vacío, retornar null
    if (empty($value)) {
        return null;
    }

    try {
        // Caso 1: Ya es un string data URL (lo que Angular espera)
        if (is_string($value) && str_starts_with($value, 'data:image')) {
            return $value;
        }

        // Caso 2: Es un string base64 normal
        if (is_string($value)) {
            // Verificar si es base64 válido
            $decoded = base64_decode($value, true);
            if ($decoded !== false) {
                return 'data:image/png;base64,' . $value;
            }
            // Si no es base64, asumir que es el QR directamente
            return $value;
        }

        // Caso 3: Es un recurso (el problema actual)
        if (is_resource($value)) {
            $content = stream_get_contents($value);
            if ($content !== false) {
                // Convertir a base64
                $base64 = base64_encode($content);
                return 'data:image/png;base64,' . $base64;
            }
        }

        // Caso 4: Es un objeto (posiblemente de PostgreSQL)
        if (is_object($value) && method_exists($value, 'read')) {
            $content = $value->read(1024000); // Leer hasta 1MB
            if ($content) {
                $base64 = base64_encode($content);
                return 'data:image/png;base64,' . $base64;
            }
        }

    } catch (\Exception $e) {
        \Log::error('Error procesando QR:', [
            'error' => $e->getMessage(),
            'type' => gettype($value)
        ]);
    }

    // Si todo falla, retornar null
    return null;
}

/**
 * Mutador para codigo_qr_cifrado - Asegura que se guarde correctamente
 */
public function setCodigoQrCifradoAttribute($value)
{
    // Si es null, guardar null
    if (is_null($value)) {
        $this->attributes['codigo_qr_cifrado'] = null;
        return;
    }

    try {
        // Si ya es un data URL, extraer solo la parte base64
        if (is_string($value) && str_starts_with($value, 'data:image')) {
            $parts = explode(',', $value);
            if (count($parts) > 1) {
                // Decodificar para asegurar que es válido
                $decoded = base64_decode($parts[1], true);
                if ($decoded !== false) {
                    // Para PostgreSQL bytea, necesitamos el string binario
                    $this->attributes['codigo_qr_cifrado'] = $decoded;
                    return;
                }
            }
        }

        // Si es un string base64 normal
        if (is_string($value)) {
            $decoded = base64_decode($value, true);
            if ($decoded !== false) {
                $this->attributes['codigo_qr_cifrado'] = $decoded;
                return;
            }
        }

        // Si es binario directamente
        if (is_string($value) || is_resource($value)) {
            $this->attributes['codigo_qr_cifrado'] = $value;
            return;
        }

    } catch (\Exception $e) {
        \Log::error('Error guardando QR:', [
            'error' => $e->getMessage(),
            'type' => gettype($value)
        ]);
    }

    // Por defecto, guardar como llegó
    $this->attributes['codigo_qr_cifrado'] = $value;
}
}
