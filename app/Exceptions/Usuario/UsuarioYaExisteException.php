<?php
namespace App\Exceptions\Usuario;

use Exception;

class UsuarioYaExisteException extends Exception
{
    protected $message = 'Ya existe un usuario con estos datos';
    protected $code = 409;
}
