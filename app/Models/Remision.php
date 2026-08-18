<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Remision extends Model
{
    use HasFactory;

    protected $table = 'remision';
    protected $primaryKey = 'remision_id';
    public $timestamps = false; // Importante: No tiene updated_at

    protected $fillable = [
        'denuncia_id',
        'institucion_id',
        'motivo',
        'fecha_remision',
        'observaciones'
    ];

    protected $casts = [
        'fecha_remision' => 'datetime',
        'fecha_creacion' => 'datetime'
    ];

    // ========== RELACIONES ==========
    public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class, 'institucion_id', 'institucion_id');
    }

       public function conciliacion(): BelongsTo
    {
        return $this->belongsTo(Conciliacion::class, 'denuncia_id', 'denuncia_id');
    }

     public function getSentenciaAttribute()
    {
        $conciliacion = Conciliacion::where('denuncia_id', $this->denuncia_id)->first();
        return $conciliacion ? $conciliacion->sentencia : null;
    }

    // ========== SCOPES ÚTILES ==========
    public function scopePorDenuncia($query, $denunciaId)
    {
        return $query->where('denuncia_id', $denunciaId);
    }

    public function scopePorInstitucion($query, $institucionId)
    {
        return $query->where('institucion_id', $institucionId);
    }

    public function scopeEntreFechas($query, $inicio, $fin)
    {
        return $query->whereBetween('fecha_remision', [$inicio, $fin]);
    }

    public function scopeUltimas($query, $limite = 10)
    {
        return $query->orderBy('fecha_remision', 'desc')->limit($limite);
    }

    // ========== ACCESORES ==========
    public function getFechaRemisionFormateadaAttribute(): string
    {
        return $this->fecha_remision ? $this->fecha_remision->format('d/m/Y H:i') : '';
    }

    public function getMotivoResumidoAttribute(): string
    {
        return strlen($this->motivo) > 50
            ? substr($this->motivo, 0, 50) . '...'
            : $this->motivo;
    }
}
