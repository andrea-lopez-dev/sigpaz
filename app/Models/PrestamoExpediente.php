<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PrestamoExpediente extends Model
{
    protected $table = 'prestamoexpediente';
    protected $primaryKey = 'prestamo_id';

      public $timestamps = false;

    const ESTADO_ACTIVO = 'ACTIVO';
    const ESTADO_RETRASADO = 'RETRASADO';
    const ESTADO_DEVUELTO = 'DEVUELTO';

    protected $fillable = [
        'denuncia_id',
        'personal_id',
        'fecha_prestamo',
        'fecha_retorno_prevista',
        'fecha_devolucion',
        'usuario_recibido_id',
        'estado',
        'motivo',
        'observaciones_devolucion'
    ];

    protected $casts = [
        'fecha_prestamo' => 'datetime',
        'fecha_retorno_prevista' => 'datetime',
        'fecha_devolucion' => 'datetime',
    ];

     public function denuncia(): BelongsTo
    {
        return $this->belongsTo(Denuncia::class, 'denuncia_id', 'denuncia_id');
    }

    public function personal(): BelongsTo
    {
        return $this->belongsTo(Personal::class, 'personal_id', 'personal_id');
    }

    public function usuarioRecibido(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'usuario_recibido_id', 'usuario_id');
    }

    public function updateEstado(): void
    {
        if ($this->fecha_devolucion) {
            $this->estado = self::ESTADO_DEVUELTO;
        } elseif ($this->fecha_retorno_prevista < now()) {
            $this->estado = self::ESTADO_RETRASADO;
        } else {
            $this->estado = self::ESTADO_ACTIVO;
        }
        $this->saveQuietly();
    }
}
