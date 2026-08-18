<?php

namespace App\Constants;

class SystemConstants
{
    // Roles del sistema
    public const ROLE_ADMIN_SISTEMA = 1;
    public const ROLE_USUARIO_AVANZADO = 2;
    public const ROLE_USUARIO_ESTANDAR = 3;
    public const ROLE_ADMIN_TECNICO = 4;

    // Permisos
    public const PERMISO_ACCESO_TOTAL = 1;
    public const PERMISO_GESTION_PROCESOS = 2;
    public const PERMISO_GESTION_PERSONAL = 3;

    // Cargos
    public const CARGO_JUEZ_PAZ = 1;
    public const CARGO_SECRETARIO = 2;
    public const CARGO_COORDINADOR = 3;
    public const CARGO_GESTOR = 4;

    // Configuraciones de seguridad
    public const MAX_INTENTOS_FALLIDOS = 3;
    public const TIEMPO_BLOQUEO_HORAS = 24;
    public const TIEMPO_INACTIVIDAD_MINUTOS = 15;
    public const TIEMPO_GRACIA_SEGUNDOS = 60;
    public const MIN_LONGITUD_CONTRASENA = 8;

    // Expiración de tokens
    public const TOKEN_EXPIRACION_HORAS = 1;

    // Fuentes de registro
    public const FUENTE_SISTEMA = 'SISTEMA';
    public const FUENTE_MANUAL = 'MANUAL';
}
