<?php

return [
    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
        'login',
        'logout',
        'api/v1/evidencia/*',
        'api/v1/auditoria/*',
        'evidencia/*'
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'http://localhost:8000',
        'http://127.0.0.1:8000'
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [
        'X-Session-Warning',
        'X-Session-Time-Left',
        'X-Requires-Token-Refresh'
    ],

    'max_age' => 0,

    'supports_credentials' => true,
];
