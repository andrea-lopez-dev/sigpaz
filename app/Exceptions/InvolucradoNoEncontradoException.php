<?php

namespace App\Exceptions;

use Exception;

class InvolucradoNoEncontradoException extends Exception
{
    protected $message = 'Involucrado no encontrado';
}
