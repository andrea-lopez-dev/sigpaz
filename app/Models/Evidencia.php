<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Evidencia extends Model
{
    use HasFactory;

    protected $table = 'evidencias';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'denuncia_id',
        'nombre',
        'tipo',
        'ruta',
        'mime_type',
        'tamano'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // ========== RELACIONES ==========
    public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    // ========== ACCESORES ==========
    public function getUrlAttribute(): string
    {
        return asset("storage/{$this->ruta}");
    }

    public function getSizeFormattedAttribute(): string
    {
        $bytes = $this->tamano;
        if ($bytes === 0) return '0 Bytes';
        $k = 1024;
        $sizes = ['Bytes', 'KB', 'MB', 'GB'];
        $i = floor(log($bytes) / log($k));
        return round($bytes / pow($k, $i), 2) . ' ' . $sizes[$i];
    }

    public function getIconoAttribute(): string
    {
        $extension = strtolower(pathinfo($this->nombre, PATHINFO_EXTENSION));

        if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif', 'webp'])) return '🖼️';
        if (in_array($extension, ['pdf'])) return '📑';
        if (in_array($extension, ['doc', 'docx'])) return '📄';
        if (in_array($extension, ['xls', 'xlsx'])) return '📊';
        if (in_array($extension, ['mp4', 'avi', 'mov', 'mkv'])) return '🎬';
        if (in_array($extension, ['mp3', 'wav', 'ogg'])) return '🎵';
        return '📎';
    }
}
