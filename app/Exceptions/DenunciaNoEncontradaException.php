<?php

namespace App\Exceptions;

use Exception;

class DenunciaNoEncontradaException extends Exception
{
    protected $message = 'Denuncia no encontrada';
}
