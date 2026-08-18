<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatbotCacheSemantico extends Model
{
    protected $table = 'chatbot_cache_semantico';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'hash_consulta', 'texto_consulta', 'embedding_consulta',
        'texto_respuesta', 'umbral_similitud', 'veces_usado', 'expira_en', 'creado_en'
    ];

    protected $casts = [
        'umbral_similitud' => 'float',
        'expira_en' => 'datetime',
        'creado_en' => 'datetime'
    ];
}
