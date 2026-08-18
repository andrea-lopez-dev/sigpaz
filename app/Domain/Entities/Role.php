<?php

namespace App\Domain\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    protected $table = 'rol';
    protected $primaryKey = 'id_rol';
     public $timestamps = false;
    protected $fillable = [
        'nombre_rol',
        'descripcion'
    ];

    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(
            Permission::class,
            'rol_permiso',
            'id_rol',
            'id_permiso'
        );
    }

    public function users()
    {
        return $this->hasMany(User::class, 'id_rol');
    }
}
