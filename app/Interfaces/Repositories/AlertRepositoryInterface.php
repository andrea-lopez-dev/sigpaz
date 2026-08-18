<?php

namespace App\Interfaces\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

interface AlertRepositoryInterface
{
    public function create(array $data): object;
    public function markAsRead(int $alertId, int $userId): bool;
    public function markAllAsRead(int $userId): int;
    public function deleteAll(int $userId): int;
    public function getUnreadCount(int $userId): int;
    public function getUserAlerts(int $userId, int $perPage = 20): LengthAwarePaginator;
    public function getRecentAlerts(int $userId, int $limit = 50): Collection;
    public function deleteExpired(): int;
    public function findById(int $alertId): ?object;
}
