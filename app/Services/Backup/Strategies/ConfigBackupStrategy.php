<?php
// app/Services/Backup/Strategies/ConfigBackupStrategy.php
namespace App\Services\Backup\Strategies;

use App\Services\Backup\Interfaces\BackupStrategyInterface;
use Illuminate\Support\Facades\File;

class ConfigBackupStrategy implements BackupStrategyInterface
{
    public function execute(array $config): array
    {
        $timestamp = now()->format('Ymd_His');
        $backupPath = storage_path("backups/config_backup_{$timestamp}");

        File::makeDirectory($backupPath, 0755, true);

        // Copiar archivos de configuración
        if (File::exists(base_path('.env'))) {
            File::copy(base_path('.env'), $backupPath . '/.env');
        }

        File::copyDirectory(config_path(), $backupPath . '/config');

        return [
            'path' => $backupPath,
            'size' => $this->getDirectorySize($backupPath) / 1024 / 1024,
            'type' => 'configuracion'
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
        return 10; // Aproximadamente 10 MB para configuración
    }

    public function getType(): string
    {
        return 'configuracion';
    }
}
