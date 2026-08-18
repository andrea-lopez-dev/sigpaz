<?php

namespace App\Services\Backup\Interfaces;

interface BackupStrategyInterface
{
    public function execute(array $config): array;
    public function estimateSize(array $config): float;
    public function getType(): string;
}
