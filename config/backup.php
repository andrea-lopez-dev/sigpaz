<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Configuración de Backups
    |--------------------------------------------------------------------------
    */

    // Ruta por defecto para backups locales (el usuario puede sobrescribir)
    'default_local_path' => env('BACKUP_DEFAULT_PATH', storage_path('backups')),

    // Permitir rutas personalizadas
    'allow_custom_paths' => true,

    // Restringir rutas a ciertos directorios por seguridad
    'allowed_directories' => [
        storage_path('backups'),
        storage_path('app/backups'),
        // El usuario puede agregar más
    ],

    // Tamaño máximo del backup en MB
    'max_size_mb' => env('BACKUP_MAX_SIZE_MB', 2048),

    // Retención de backups (días)
    'retention' => [
        'local_days' => 30,
        'cloud_days' => 90,
    ],
];
