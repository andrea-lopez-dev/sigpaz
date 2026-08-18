<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DenunciaHistorial extends Model
{

    protected $table = 'denunciahistorial';
    protected $primaryKey = 'historial_id';

    public $timestamps = false;
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'denuncia_id',
        'estado_anterior',
        'estado_actual',
        'version',
        'campo_modificado',
        'valor_anterior',
        'valor_nuevo',
        'tipo_cambio',
        'fecha_cambio',
        'usuario_cambio_id',
        'observaciones'
    ];

    protected $casts = [
        'estado_anterior' => 'array',
        'estado_actual' => 'array',
        'fecha_cambio' => 'datetime'
    ];

    public function denuncia()
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function usuarioCambio()
    {
        return $this->belongsTo(Usuario::class, 'usuario_cambio_id', 'usuario_id');
    }
}
