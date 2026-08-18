<?php

namespace App\Services\Backup\Strategies;

use App\Services\Backup\Interfaces\BackupStrategyInterface;
use Illuminate\Support\Facades\File;

class FilesBackupStrategy implements BackupStrategyInterface
{
    public function execute(array $config): array
    {
        $timestamp = now()->format('Ymd_His');
        $backupPath = storage_path("backups/files_backup_{$timestamp}");

        File::makeDirectory($backupPath, 0755, true);

        $directories = [
            storage_path('app'),
            storage_path('logs'),
            public_path('uploads')
        ];

        foreach ($directories as $dir) {
            if (File::exists($dir)) {
                File::copyDirectory($dir, $backupPath . '/' . basename($dir));
            }
        }

        return [
            'path' => $backupPath,
            'size' => $this->getDirectorySize($backupPath) / 1024 / 1024,
            'type' => 'archivos'
        ];
    }

    private function getDirectorySize(string $directory): float
    {
        $size = 0;
        foreach (File::allFiles($directory) as $file) {
            $size += $file->getSize();
        }
        return $size;
    }

    public function estimateSize(array $config): float
    {
        $directories = [
            storage_path('app'),
            storage_path('logs'),
            public_path('uploads')
        ];

        $totalSize = 0;
        foreach ($directories as $dir) {
            if (File::exists($dir)) {
                foreach (File::allFiles($dir) as $file) {
                    $totalSize += $file->getSize();
                }
            }
        }

        return $totalSize / 1024 / 1024;
    }

    public function getType(): string
    {
        return 'archivos';
    }
}
