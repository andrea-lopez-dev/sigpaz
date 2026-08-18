<?php
namespace App\Exceptions\Usuario;

use Exception;

class UsuarioBloqueadoException extends Exception
{
    protected $message = 'El usuario está bloqueado';
    protected $code = 423;
}
