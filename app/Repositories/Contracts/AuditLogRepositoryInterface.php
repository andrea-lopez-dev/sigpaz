<?php

namespace App\Contracts\Repositories;

use App\DTOs\AuditLogDTO;
use App\DTOs\FilterDTO;
use Illuminate\Pagination\LengthAwarePaginator;

interface AuditLogRepositoryInterface
{
    public function create(AuditLogDTO $dto): AuditLogDTO;
    public function findById(int $id): ?AuditLogDTO;
    public function findAll(FilterDTO $filter): LengthAwarePaginator;
    public function countByFilters(FilterDTO $filter): int;
    public function getStatistics(array $filters): array;
    public function getActivityByHour(FilterDTO $filter): array;
    public function getActivityByTable(FilterDTO $filter): array;
    public function getRelatedLogs(int $logId, int $minutes = 5): array;
}
