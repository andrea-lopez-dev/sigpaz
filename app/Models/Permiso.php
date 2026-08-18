<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Permiso extends Model
{
    use HasFactory;

    protected $table = 'permiso';
    protected $primaryKey = 'permiso_id';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion',
        'fecha_creacion'
    ];

    protected $casts = [
        'fecha_creacion' => 'datetime'
    ];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(
            Rol::class,
            'rolpermiso',
            'permiso_id',
            'rol_id'
        )->withPivot('fecha_asignacion');
    }
}
