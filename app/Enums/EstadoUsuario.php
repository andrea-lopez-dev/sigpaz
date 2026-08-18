<?php

namespace App\Enums;

enum EstadoUsuario: int
{
    case ACTIVO = 1;
    case INACTIVO = 0;
    case BLOQUEADO = 2;
    case PENDIENTE_CAMBIO_CONTRASENA = 3;
}
