<?php
namespace App\Exceptions\Usuario;

use Exception;

class UsuarioNotFoundException extends Exception
{
    protected $message = 'Usuario no encontrado';
    protected $code = 404;
}
