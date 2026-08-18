<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ChatbotMensaje extends Model
{
    protected $table = 'chatbot_mensajes';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'conversacion_id', 'remitente', 'contenido', 'embedding_contenido',
        'tokens_usados', 'tiempo_respuesta_ms', 'metadatos', 'creado_en'
    ];

    protected $casts = [
        'metadatos' => 'array',
        'creado_en' => 'datetime'
    ];

    public function conversacion(): BelongsTo
    {
        return $this->belongsTo(ChatbotConversacion::class, 'conversacion_id');
    }

    public function calificaciones(): HasMany
    {
        return $this->hasMany(ChatbotCalificacione::class, 'mensaje_id');
    }
}
