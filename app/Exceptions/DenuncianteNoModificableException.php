<?php

namespace App\Exceptions;

use Exception;

class DenuncianteNoModificableException extends Exception
{
    protected $message = 'No se puede modificar o eliminar al denunciante principal';
}
