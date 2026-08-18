<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class ChatbotCalificacione extends Model
{
    protected $table = 'chatbot_calificaciones';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'mensaje_id', 'usuario_id', 'puntuacion', 'fue_util', 'comentario', 'creado_en'
    ];

    protected $casts = [
        'fue_util' => 'boolean',
        'creado_en' => 'datetime'
    ];

     public function setFueUtilAttribute($value)
    {
        $this->attributes['fue_util'] = $value ? DB::raw('true') : DB::raw('false');
    }

    public function mensaje(): BelongsTo
    {
        return $this->belongsTo(ChatbotMensaje::class, 'mensaje_id');
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
}
