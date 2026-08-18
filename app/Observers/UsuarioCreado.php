<?php
namespace App\Observers;

use App\Models\Usuario;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UsuarioCreado
{
    use Dispatchable, SerializesModels;

    public function __construct(public Usuario $usuario) {}
}
