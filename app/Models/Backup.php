<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Backup extends Model
{
    use SoftDeletes;

    protected $table = 'backup';
    protected $primaryKey = 'backup_id';
    public $timestamps = false;
    
    protected $fillable = [
        'fecha',
        'usuario_id',
        'ruta_archivo',
        'origen',
        'tamanio_mb',
        'descripcion',
        'estado',
        'fecha_creacion',
        'origen_nube',
        'api_referencia',
        'encriptado',
        'comprimido',
        'integridad_verificada',
        'ruta_personalizada',
        'solo_nube',
        'updated_at',
        'deleted_at',
        'created_at'
    ];

    protected $casts = [
        'fecha' => 'datetime',
        'fecha_creacion' => 'datetime',
        'updated_at' => 'datetime',
        'created_at' => 'datetime',
        'deleted_at' => 'datetime',
        'encriptado' => 'boolean',
        'comprimido' => 'boolean',
        'integridad_verificada' => 'boolean',
        'solo_nube' => 'boolean',
        'tamanio_mb' => 'float'
    ];

    protected $dates = [
        'deleted_at'
    ];

    // Mutators para convertir booleanos
    public function setEncriptadoAttribute($value)
    {
        $this->attributes['encriptado'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    public function setComprimidoAttribute($value)
    {
        $this->attributes['comprimido'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    public function setIntegridadVerificadaAttribute($value)
    {
        $this->attributes['integridad_verificada'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    public function setSoloNubeAttribute($value)
    {
        $this->attributes['solo_nube'] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function restauraciones()
    {
        return $this->hasMany(Restore::class, 'backup_id');
    }
}