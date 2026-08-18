<?php

namespace App\Services\Factory;

use App\Services\Contracts\NotificationServiceInterface;
use App\Services\AlertNotificationService;

class NotificationFactory
{
    public static function make(): NotificationServiceInterface
    {
        return app(AlertNotificationService::class);
    }

    // Métodos estáticos para facilitar el uso
    public static function success(
        int $userId,
        string $title,
        string $message,
        ?string $entityType = null,
        ?int $entityId = null
    ): object {
        return self::make()->send($userId, $title, $message, 'success', $entityType, $entityId);
    }

    public static function error(
        int $userId,
        string $title,
        string $message,
        ?string $entityType = null,
        ?int $entityId = null
    ): object {
        return self::make()->send($userId, $title, $message, 'error', $entityType, $entityId);
    }

    public static function warning(
        int $userId,
        string $title,
        string $message,
        ?string $entityType = null,
        ?int $entityId = null
    ): object {
        return self::make()->send($userId, $title, $message, 'warning', $entityType, $entityId);
    }

    public static function info(
        int $userId,
        string $title,
        string $message,
        ?string $entityType = null,
        ?int $entityId = null
    ): object {
        return self::make()->send($userId, $title, $message, 'info', $entityType, $entityId);
    }

    // Notificaciones específicas por módulo
    public static function personaNotification(
        int $userId,
        string $action,
        ?string $personaName = null,
        string $type = 'info',
        ?int $personaId = null
    ): object {
        $title = 'Módulo Personas';
        $message = $personaName
            ? "{$action}: {$personaName}"
            : $action;

        return self::make()->send(
            $userId,
            $title,
            $message,
            $type,
            'personas',
            $personaId,
            "/personas/{$personaId}"
        );
    }

    public static function denunciaNotification(
        int $userId,
        string $action,
        ?string $details = null,
        ?int $denunciaId = null
    ): object {
        $title = 'Módulo Denuncias';

        $messages = [
            'registro' => "Denuncia registrada: {$details}",
            'seguimiento' => "Actualización en seguimiento: {$details}",
            'investigacion' => "Investigación en progreso: {$details}",
            'reportes' => "Reporte generado: {$details}"
        ];

        $message = $messages[$action] ?? "{$action}: {$details}";

        return self::make()->send(
            $userId,
            $title,
            $message,
            'info',
            'denuncias',
            $denunciaId,
            "/denuncias/{$denunciaId}"
        );
    }
}
