<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Alert extends Model
{
    use SoftDeletes;

    protected $table = 'alerta';
    protected $primaryKey = 'alerta_id';
    public $timestamps = false;

    protected $fillable = [
        'usuario_id',
        'titulo',
        'mensaje',
        'tipo_alerta',
        'leida',
        'leida_en',
        'entidad_tipo',
        'entidad_id',
        'accion_url',
        'accion_texto',
        'icono',
        'expira_en',
        'fecha_creacion',
        'creado_por'
    ];

     protected $casts = [
        'leida_en' => 'datetime',
        'expira_en' => 'datetime',
        'fecha_creacion' => 'datetime'
    ];

    // ✅ Accessor para leida
    public function getLeidaAttribute($value)
    {
        if (is_resource($value)) {
            $value = stream_get_contents($value);
        }
        return filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    // ✅ Mutator para leida
    public function setLeidaAttribute($value)
    {
        $this->attributes['leida'] = $value ? DB::raw('TRUE') : DB::raw('FALSE');
    }

    protected $attributes = [
        'tipo_alerta' => 'info',
    ];

    // Relaciones
    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'usuario_id');
    }

    public function creador(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'creado_por', 'usuario_id');
    }

    // Scopes
    public function scopeNoLeidas($query)
    {
        return $query->where('leida', DB::raw('FALSE'));
    }

    public function scopePorUsuario($query, int $usuarioId)
    {
        return $query->where('usuario_id', $usuarioId);
    }

    public function scopeNoExpiradas($query)
    {
        return $query->where(function($q) {
            $q->whereNull('expira_en')
              ->orWhere('expira_en', '>', now());
        });
    }

    public function scopePorTipo($query, string $tipo)
    {
        return $query->where('tipo_alerta', $tipo);
    }

    public function scopePorEntidad($query, string $tipo, int $id)
    {
        return $query->where('entidad_tipo', $tipo)
                     ->where('entidad_id', $id);
    }

    public function marcarComoLeida(): void
    {
        $this->update([
            'leida' => DB::raw('TRUE'),
            'leida_en' => now()
        ]);
    }

    public function isExpirada(): bool
    {
        return $this->expira_en && $this->expira_en->isPast();
    }
}
