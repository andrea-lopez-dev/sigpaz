<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ChatbotConversacion extends Model
{
    protected $table = 'chatbot_conversaciones';
    protected $primaryKey = 'id';

    protected $fillable = [
        'sesion_id', 'usuario_id', 'titulo', 'contexto', 'estado'
    ];

    protected $casts = [
        'contexto' => 'array',
        'creado_en' => 'datetime',
        'actualizado_en' => 'datetime'
    ];

    public $timestamps = false;

    public function mensajes(): HasMany
    {
        return $this->hasMany(ChatbotMensaje::class, 'conversacion_id');
    }

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function scopeActivas($query)
    {
        return $query->where('estado', 'activa');
    }
}
