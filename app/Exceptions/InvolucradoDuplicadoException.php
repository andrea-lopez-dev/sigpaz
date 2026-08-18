<?php

namespace App\Exceptions;

use Exception;

class InvolucradoDuplicadoException extends Exception
{
    protected $message = 'La persona ya está involucrada en esta denuncia';
}
