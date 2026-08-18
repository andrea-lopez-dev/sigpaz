<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class ChatbotBaseConocimiento extends Model
{
    protected $table = 'chatbot_base_conocimiento';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'categoria', 'intencion', 'pregunta', 'embedding_pregunta',
        'respuesta', 'contexto', 'puntaje_confianza', 'veces_usada',
        'veces_util', 'veces_no_util', 'activo', 'creado_por'
    ];

    protected $casts = [
        'contexto' => 'array',
        'activo' => 'boolean',
        'puntaje_confianza' => 'float',
        'creado_en' => 'datetime',
        'actualizado_en' => 'datetime'
    ];

    public function creador(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'creado_por');
    }


    // ✅ Mutador para activo
    public function setActivoAttribute($value)
    {
        $this->attributes['activo'] = $value ? DB::raw('true') : DB::raw('false');
    }

    // ✅ Scope para activos
    public function scopeActivos($query)
    {
        return $query->where('activo', DB::raw('true'));
    }
}
