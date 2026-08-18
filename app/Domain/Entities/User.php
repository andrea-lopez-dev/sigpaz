<?php

namespace App\Domain\Entities;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements JWTSubject
{
    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';
    public $timestamps = false;

    protected $fillable = [
        'nombre_usuario',
        'email_login',
        'contrasena_hash',
        'id_persona',
        'id_rol',
        'estado',
        'ultimo_acceso'
    ];

    protected $hidden = [
        'contrasena_hash',
    ];

    protected $casts = [
        'fecha_creacion' => 'timestamp',
        'ultimo_acceso' => 'timestamp',
    ];

    // ========== MÉTODOS JWT ==========

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    // ========== MÉTODOS AUTH ==========

    public function getAuthPassword()
    {
        return $this->contrasena_hash;
    }

    // Si usas 'nombre_usuario' como campo de login en lugar de 'email'
    public function getAuthIdentifierName()
    {
        return 'nombre_usuario';
    }

    // ========== MUTATORS ==========

    public function setContrasenaHashAttribute($value): void
    {
        if (preg_match('/^\$2[ayb]\$[0-9]{2}\$/', $value)) {
            $this->attributes['contrasena_hash'] = $value;
        } else {
            $this->attributes['contrasena_hash'] = Hash::make($value);
        }
    }

    // ========== RELACIONES ==========

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class, 'id_rol');
    }

    // ========== MÉTODOS DE NEGOCIO ==========

    public function isActive(): bool
    {
        return $this->estado === 'activo' || $this->estado === true;
    }

    public function recordLastAccess(): void
    {
         $this->ultimo_acceso = now()->toDateTimeString();
    $this->save();
    }
}
