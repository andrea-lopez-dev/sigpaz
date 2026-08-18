<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Involucrado extends Model
{
    use HasFactory;

    protected $table = 'involucrado';
    protected $primaryKey = 'involucrado_id';
    public $timestamps = false;

    protected $fillable = [
        'denuncia_id',
        'persona_id',
        'rol',
        'observaciones',
        'fecha_creacion'
    ];

    protected $casts = [
        'fecha_creacion' => 'datetime'
    ];

    // ========== RELACIONES ==========
    public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id', 'persona_id');
    }

    // ========== BOOT ==========
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->fecha_creacion)) {
                $model->fecha_creacion = now();
            }
        });

        static::created(function ($model) {
            // Disparar evento o notificación si es necesario
        });

        static::updated(function ($model) {
            // Registrar cambios si es necesario
        });

        static::deleted(function ($model) {
            // Limpiar relaciones o notificar
        });
    }

    // ========== ACCESSORS ==========
    public function getRolDisplayAttribute(): string
    {
        $roles = [
            'denunciante' => 'Denunciante',
            'victima' => 'Víctima',
            'testigo' => 'Testigo',
            'acusado' => 'Acusado',
            'representante' => 'Representante Legal',
            'asesor' => 'Asesor',
            'otro' => 'Otro'
        ];

        return $roles[$this->rol] ?? ucfirst($this->rol);
    }

    // ========== SCOPES ==========
    public function scopePorDenuncia($query, int $denunciaId)
    {
        return $query->where('denuncia_id', $denunciaId);
    }

    public function scopePorPersona($query, int $personaId)
    {
        return $query->where('persona_id', $personaId);
    }

    public function scopePorRol($query, string $rol)
    {
        return $query->where('rol', $rol);
    }

    public function scopeDenunciantes($query)
    {
        return $query->where('rol', 'denunciante');
    }

    public function scopeVictimas($query)
    {
        return $query->where('rol', 'victima');
    }

    public function scopeTestigos($query)
    {
        return $query->where('rol', 'testigo');
    }

    // ========== MÉTODOS DE CONSULTA ==========
    public function esDenunciantePrincipal(): bool
    {
        return $this->denuncia && $this->persona_id === $this->denuncia->persona_id;
    }

    public function puedeSerEliminado(): bool
    {
        // No se puede eliminar al denunciante principal
        return !$this->esDenunciantePrincipal();
    }
}
