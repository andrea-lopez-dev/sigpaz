<?php

namespace App\Domain\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{
    protected $table = 'permiso';
    protected $primaryKey = 'id_permiso';
  public $timestamps = false;
    protected $fillable = [
        'nombre_permiso',
        'descripcion'
    ];

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(
            Role::class,
            'rol_permiso',
            'id_permiso',
            'id_rol'
        );
    }
}
