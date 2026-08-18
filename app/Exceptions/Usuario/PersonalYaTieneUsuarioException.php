<?php
namespace App\Exceptions\Usuario;

use Exception;

class PersonalYaTieneUsuarioException extends Exception
{
    protected $message = 'El personal ya tiene un usuario asociado';
    protected $code = 409;
}
