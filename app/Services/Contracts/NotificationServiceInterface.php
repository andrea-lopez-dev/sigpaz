<?php

namespace App\Services\Contracts;

use Illuminate\Support\Collection;

interface NotificationServiceInterface
{
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
        ?int $createdBy = null
    ): object;

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
    ): Collection;

    public function sendToRole(
        string $roleName,
        string $title,
        string $message,
        string $type = 'info',
        ?string $entityType = null,
        ?int $entityId = null,
        ?string $actionUrl = null,
        ?int $createdBy = null
    ): Collection;

    public function markAsRead(int $alertId, int $userId): bool;
    public function markAllAsRead(int $userId): bool;
    public function deleteAll(int $userId): bool;
    public function getUnreadCount(int $userId): int;
    public function getUserNotifications(int $userId, int $perPage = 20): array;
}
