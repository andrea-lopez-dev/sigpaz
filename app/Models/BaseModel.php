<?php
// app/Models/BaseModel.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model
{
    // Deshabilitar timestamps en TODOS los modelos que extiendan esta clase
    public $timestamps = false;

    // O si quieres solo updated_at:
    // const CREATED_AT = null;
    // public $timestamps = true;
}
