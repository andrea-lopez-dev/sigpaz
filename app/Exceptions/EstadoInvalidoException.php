<?php

namespace App\Exceptions;

use Exception;

class EstadoInvalidoException extends Exception
{
    protected $message = 'Transición de estado no válida';
}
