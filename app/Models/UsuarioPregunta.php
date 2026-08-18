<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UsuarioPregunta extends Pivot
{
    use HasFactory;

    protected $table = 'usuariopregunta';
    public $timestamps = false;

    protected $fillable = [
        'usuario_id',
        'pregunta_id',
        'respuesta_cifrada',
        'fecha_creacion',
        'validada'

    ];

    protected $casts = [
        'fecha_creacion' => 'datetime',
        'validada' => 'boolean'
    ];
   protected $foreignKey = 'usuario_id';
    protected $relatedKey = 'pregunta_id';

    // Relaciones
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'usuario_id');
    }

    public function pregunta()
    {
        return $this->belongsTo(PreguntaSeguridad::class, 'pregunta_id', 'pregunta_id');
    }
}

