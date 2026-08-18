<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restore extends Model
{
    protected $table = 'restauracion';
    protected $primaryKey = 'restauracion_id';
    public $timestamps = false;

    protected $fillable = [
        'backup_id', 'fecha', 'usuario_id', 'resultado', 'observaciones'
    ];

    protected $casts = [
        'fecha' => 'datetime'
    ];

    public function backup()
    {
        return $this->belongsTo(Backup::class, 'backup_id', 'backup_id');
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'usuario_id');
    }
}
