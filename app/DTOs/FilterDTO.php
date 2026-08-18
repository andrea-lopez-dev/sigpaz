<?php

namespace App\DTOs;

use App\Enums\AuditAction;

class FilterDTO
{
    public function __construct(
        public readonly ?\DateTimeInterface $startDate = null,
        public readonly ?\DateTimeInterface $endDate = null,
        public readonly ?int $userId = null,
        public readonly ?string $tableAffected = null,
        public readonly ?string $keywords = null,
        public readonly array $actions = [],
        public readonly int $severity = 0,
        public readonly int $perPage = 10,
        public readonly int $page = 1
    ) {}

    public static function fromRequest(array $data): self
    {
        return new self(
            startDate: isset($data['start_date']) ? new \DateTimeImmutable($data['start_date']) : null,
            endDate: isset($data['end_date']) ? new \DateTimeImmutable($data['end_date']) : null,
            userId: $data['user_id'] ?? null,
            tableAffected: $data['table_affected'] ?? null,
            keywords: $data['keywords'] ?? null,
            actions: $data['actions'] ?? [],
            severity: $data['severity'] ?? 0,
            perPage: $data['per_page'] ?? 10,
            page: $data['page'] ?? 1
        );
    }
}
