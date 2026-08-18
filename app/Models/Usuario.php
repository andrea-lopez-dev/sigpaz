<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuario';
    protected $primaryKey = 'usuario_id';
 public $timestamps = false;
    protected $fillable = [
        'nombre_usuario',
        'email',
        'contrasena_hash',
        'personal_id',
        'rol_id',
        'activo',
        'ultimo_acceso',
        'intentos_fallidos',
        'fecha_bloqueo',
        'requiere_cambio_contrasena',
        'token_reset_password',
        'fecha_expiracion_token'
    ];

    protected $hidden = [
        'contrasena_hash',
        'token_reset_password',
        'remember_token'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'requiere_cambio_contrasena' => 'boolean',
        'fecha_creacion' => 'datetime',
        'ultimo_acceso' => 'datetime',
        'fecha_bloqueo' => 'datetime',
        'fecha_expiracion_token' => 'datetime',
        'intentos_fallidos' => 'integer'
    ];

   public function setActivoAttribute($value)
{
    // Convertir cualquier valor a booleano puro
    $this->attributes['activo'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
}

public function setRequiereCambioContrasenaAttribute($value)
{
    $this->attributes['requiere_cambio_contrasena'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
}

    // Relaciones
    public function personal(): BelongsTo
    {
        return $this->belongsTo(Personal::class, 'personal_id', 'personal_id');
    }

    public function rol(): BelongsTo
    {
        return $this->belongsTo(Rol::class, 'rol_id', 'rol_id');
    }

    public function preguntasSeguridad(): BelongsToMany
    {
        return $this->belongsToMany(
            PreguntaSeguridad::class,
            'usuariopregunta',
            'usuario_id',
            'pregunta_id'
        ) ->using(UsuarioPregunta::class)
        ->withPivot('respuesta_cifrada', 'fecha_creacion');
    }

    public function historialCambios()
    {
        return $this->hasMany(DenunciaHistorial::class, 'usuario_cambio_id', 'usuario_id');
    }

    // Scopes
    public function scopeActivo($query)
    {
        return $query->where('activo', true);
    }

    public function scopeBloqueado($query)
    {
        return $query->whereNotNull('fecha_bloqueo')
                    ->where('fecha_bloqueo', '>', now());
    }


public function estaBloqueado(): bool
{
    // Si no hay fecha de bloqueo, no está bloqueado
    if (!$this->fecha_bloqueo) {
        return false;
    }

    // Si la fecha de bloqueo ya pasó, limpiarla y retornar false
    if ($this->fecha_bloqueo <= now()) {
        $this->fecha_bloqueo = null;
        $this->intentos_fallidos = 0; // También resetear intentos
        $this->save();
        return false;
    }

    // Si la fecha de bloqueo está en el futuro, está bloqueado
    return true;
}

    public function incrementarIntentosFallidos(): void
    {
        $this->intentos_fallidos++;

        if ($this->intentos_fallidos >= config('auth.max_attempts', 3)) {
            $this->fecha_bloqueo = now()->addHours(24);
        }

        $this->save();
    }

    public function resetearIntentosFallidos(): void
    {
        $this->intentos_fallidos = 0;
        $this->fecha_bloqueo = null;
        $this->save();
    }

    public function getAuthPassword()
    {
        return $this->contrasena_hash;
    }


       public function tokens()
    {
        return $this->morphMany(\Laravel\Sanctum\PersonalAccessToken::class, 'tokenable');
    }

    public function getAuthIdentifierName()
    {
        return 'usuario_id';
    }

    // Método para verificar si requiere configurar preguntas
    public function requiereConfigurarPreguntas(): bool
    {
        return $this->preguntasSeguridad()->count() < 3;
    }
    public function getPreguntasSeguridadConRespuesta(): array
    {
        $preguntas = [];
        foreach ($this->preguntasSeguridad as $pregunta) {
            $preguntas[] = [
                'pregunta_id' => $pregunta->pregunta_id,
                'texto' => $pregunta->texto,
                'respuesta_cifrada' => $pregunta->pivot->respuesta_cifrada
            ];
        }
        return $preguntas;
    }


}
