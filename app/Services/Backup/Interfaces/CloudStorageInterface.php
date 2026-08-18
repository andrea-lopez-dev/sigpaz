<?php

namespace App\Services\Backup\Interfaces;

interface CloudStorageInterface
{
    public function upload(string $sourcePath, string $destinationPath): bool;
    public function download(string $remotePath, string $localPath): bool;
    public function delete(string $path): bool;
    public function list(string $path = ''): array;
    public function getSpaceUsage(): float;
    public function testConnection(): bool;
    public function isConfigured(): bool;
}
