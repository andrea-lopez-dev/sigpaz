<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // Importante: Configurar rutas de autenticación para canales privados
        Broadcast::routes(['middleware' => ['auth:sanctum']]);

        // Cargar definiciones de canales
        require base_path('routes/channels.php');
    }
}
