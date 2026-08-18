<?php

use Illuminate\Support\Facades\Broadcast;
use App\Models\Usuario;

// Canal privado para notificaciones por usuario
Broadcast::channel('user.{userId}', function ($user, $userId) {
    return (int) $user->usuario_id === (int) $userId;
});

// Canal privado para notificaciones del sistema
Broadcast::channel('notifications', function ($user) {
    return $user !== null;
});

// Canal privado para módulo de denuncias
Broadcast::channel('denuncias.{denunciaId}', function ($user, $denunciaId) {
    // Aquí puedes agregar lógica adicional
    return true;
});
