<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RolPermiso extends Pivot
{
    protected $table = 'rolpermiso';

    // Especificar que NO usa timestamps automáticos
    public $timestamps = false;

    // Especificar los campos del pivot
    protected $fillable = [
        'rol_id',
        'permiso_id',
        'fecha_asignacion'
    ];

    protected $casts = [
        'fecha_asignacion' => 'datetime',
    ];
}
