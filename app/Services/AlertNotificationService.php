<?php

namespace App\Services;

use App\Interfaces\Repositories\AlertRepositoryInterface;
use App\Models\Usuario;
use App\Services\Contracts\NotificationServiceInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use App\Events\AlertCreated;


class AlertNotificationService implements NotificationServiceInterface
{
    protected AlertRepositoryInterface $alertRepository;

    public function __construct(AlertRepositoryInterface $alertRepository)
    {
        $this->alertRepository = $alertRepository;
    }

    public function send(
        int $userId,
        string $title,
        string $message,
        string $type = 'info',
        ?string $entityType = null,
        ?int $entityId = null,
        ?string $actionUrl = null,
        ?string $actionText = null,
        ?string $icon = null,
        ?int $expiresInMinutes = null,
        ?int $createdBy = null,

    ): object {

        $expiresAt = $expiresInMinutes ? now()->addMinutes($expiresInMinutes) : null;

        $iconMap = [
            'success' => '✅',
            'error' => '❌',
            'warning' => '⚠️',
            'info' => 'ℹ️'
        ];

         $alert = $this->alertRepository->create([
            'usuario_id' => $userId,
            'titulo' => $title,
            'mensaje' => $message,
            'tipo_alerta' => $type,
            'entidad_tipo' => $entityType,
            'entidad_id' => $entityId,
            'accion_url' => $actionUrl,
            'accion_texto' => $actionText,
            'icono' => $icon ?? ($iconMap[$type] ?? '📢'),
            'expira_en' => $expiresAt,
            'creado_por' => $createdBy

        ]);
        event(new AlertCreated($alert));
         return $alert;
    }

    public function sendToMultipleUsers(
        array $userIds,
        string $title,
        string $message,
        string $type = 'info',
        ?string $entityType = null,
        ?int $entityId = null,
        ?string $actionUrl = null,
        ?string $actionText = null,
        ?int $createdBy = null
    ): Collection {

        $alerts = collect();

        foreach ($userIds as $userId) {
            $alert = $this->send(
                $userId,
                $title,
                $message,
                $type,
                $entityType,
                $entityId,
                $actionUrl,
                $actionText,
                null,
                null,
                $createdBy
            );
            $alerts->push($alert);
        }

        return $alerts;
    }

    public function sendToRole(
        string $roleName,
        string $title,
        string $message,
        string $type = 'info',
        ?string $entityType = null,
        ?int $entityId = null,
        ?string $actionUrl = null,
        ?int $createdBy = null
    ): Collection {

        $users = Usuario::whereHas('rol', function($query) use ($roleName) {
            $query->where('nombre', $roleName);
        })->get();

        $userIds = $users->pluck('usuario_id')->toArray();

        return $this->sendToMultipleUsers(
            $userIds,
            $title,
            $message,
            $type,
            $entityType,
            $entityId,
            $actionUrl,
            null,
            $createdBy
        );
    }

    public function markAsRead(int $alertId, int $userId): bool
    {
        return $this->alertRepository->markAsRead($alertId, $userId);
    }

    public function markAllAsRead(int $userId): bool
    {
        $count = $this->alertRepository->markAllAsRead($userId);
        return $count > 0;
    }

    public function deleteAll(int $userId): bool
    {
        $count = $this->alertRepository->deleteAll($userId);
        return $count > 0;
    }

    public function getUnreadCount(int $userId): int
    {
        return $this->alertRepository->getUnreadCount($userId);
    }

    public function getUserNotifications(int $userId, int $perPage = 20): array
    {
        $alerts = $this->alertRepository->getUserAlerts($userId, $perPage);
        $unreadCount = $this->getUnreadCount($userId);

        return [
            'data' => $alerts->items(),
            'unread_count' => $unreadCount,
            'total' => $alerts->total(),
            'per_page' => $alerts->perPage(),
            'current_page' => $alerts->currentPage(),
            'last_page' => $alerts->lastPage()
        ];
    }
}
