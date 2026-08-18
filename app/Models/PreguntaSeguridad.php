<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;

class PreguntaSeguridad extends Model
{
    use HasFactory;

    protected $table = 'preguntaseguridad';
    protected $primaryKey = 'pregunta_id';
    public $timestamps = false;

    protected $fillable = [
        'texto',
        'activo'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'fecha_creacion' => 'datetime'
    ];

    // Relación con usuarios
    public function usuarios()
    {
        return $this->belongsToMany(
            Usuario::class,
            'usuariopregunta',
            'pregunta_id',
            'usuario_id'
        )->withPivot('respuesta_cifrada', 'fecha_creacion')
         ->using(UsuarioPregunta::class);
    }

    // Scope para preguntas activas
    public function scopeActivo($query)
{

    return $query->whereRaw('activo = true');
}

    // Scope para obtener preguntas no asociadas a un usuario específico
    public function scopeNoAsociadasAUsuario($query, $usuarioId)
    {
        return $query->whereNotIn('pregunta_id', function($subquery) use ($usuarioId) {
            $subquery->select('pregunta_id')
                     ->from('usuariopregunta')
                     ->where('usuario_id', $usuarioId);
        });
    }
}
