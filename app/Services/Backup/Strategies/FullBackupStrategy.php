<?php

namespace App\Services\Backup\Strategies;

use App\Services\Backup\Interfaces\BackupStrategyInterface;
use App\Services\Backup\CompressionService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class FullBackupStrategy implements BackupStrategyInterface
{
    private string $tempPath;
    private CompressionService $compressionService;

    public function __construct(CompressionService $compressionService)
    {
        $this->compressionService = $compressionService;
        $this->tempPath = storage_path('backups/temp');
    }

    public function execute(array $config): array
    {
        $timestamp = now()->format('Ymd_His');
        $backupPath = $this->tempPath . "/full_backup_{$timestamp}";

        // Crear directorio temporal
        if (!File::exists($backupPath)) {
            File::makeDirectory($backupPath, 0755, true);
        }

        // Backup de base de datos
        $this->backupDatabase($backupPath);

        // Backup de archivos del sistema
        $this->backupFiles($backupPath);

        // Backup de configuración
        $this->backupConfig($backupPath);

        // Comprimir si es necesario
        if ($config['comprimir'] ?? true) {
            $finalPath = $this->compressionService->compress(
                $backupPath,
                $config['nivel_compresion'] ?? 5
            );
        } else {
            $finalPath = $backupPath;
        }

        // Encriptar si es necesario
        if ($config['encriptar'] ?? false) {
            $finalPath = $this->encryptBackup($finalPath, $config['password_encriptacion']);
        }

        return [
            'path' => $finalPath,
            'size' => File::size($finalPath) / 1024 / 1024,
            'type' => 'full'
        ];
    }

    private function backupDatabase(string $path): void
    {
        $database = config('database.connections.pgsql.database');
        $username = config('database.connections.pgsql.username');
        $password = config('database.connections.pgsql.password');
        $host = config('database.connections.pgsql.host');
        $port = config('database.connections.pgsql.port', 5432);

        $dumpFile = $path . '/database.sql';

        // Para PostgreSQL
        $command = sprintf(
            'PGPASSWORD=%s pg_dump --host=%s --port=%s --username=%s --no-password --format=plain --file=%s %s',
            escapeshellarg($password),
            escapeshellarg($host),
            escapeshellarg($port),
            escapeshellarg($username),
            escapeshellarg($dumpFile),
            escapeshellarg($database)
        );

        exec($command, $output, $returnCode);

        if ($returnCode !== 0) {
            \Log::error('Database backup failed', ['command' => $command, 'output' => $output]);
        }
    }

    private function backupFiles(string $path): void
    {
        $sourceDirs = [
            storage_path('app'),
            storage_path('logs'),
            public_path('uploads')
        ];

        $filesPath = $path . '/files';
        if (!File::exists($filesPath)) {
            File::makeDirectory($filesPath, 0755, true);
        }

        foreach ($sourceDirs as $dir) {
            if (File::exists($dir)) {
                $destDir = $filesPath . '/' . basename($dir);
                File::copyDirectory($dir, $destDir);
            }
        }
    }

    private function backupConfig(string $path): void
    {
        $configPath = $path . '/config';
        if (!File::exists($configPath)) {
            File::makeDirectory($configPath, 0755, true);
        }

        // Backup de archivos .env
        if (File::exists(base_path('.env'))) {
            File::copy(base_path('.env'), $configPath . '/.env');
        }

        // Backup de configuración
        if (File::exists(config_path())) {
            File::copyDirectory(config_path(), $configPath . '/config_files');
        }
    }

    private function encryptBackup(string $path, string $password): string
    {
        $encryptedPath = $path . '.encrypted';

        $command = sprintf(
            'openssl enc -aes-256-cbc -salt -in %s -out %s -pass pass:%s',
            escapeshellarg($path),
            escapeshellarg($encryptedPath),
            escapeshellarg($password)
        );

        exec($command);

        if (File::exists($encryptedPath)) {
            File::delete($path);
            return $encryptedPath;
        }

        return $path;
    }

    public function estimateSize(array $config): float
    {
        $dbSize = $this->getDatabaseSize();
        $filesSize = $this->getFilesSize();
        $configSize = 10;

        $totalSize = $dbSize + $filesSize + $configSize;

        if ($config['comprimir'] ?? true) {
            $compressionLevel = $config['nivel_compresion'] ?? 5;
            $totalSize *= (1 - ($compressionLevel * 0.05));
        }

        return round(max($totalSize, 0.1), 2);
    }

    private function getDatabaseSize(): float
    {
        try {
            $database = config('database.connections.pgsql.database');
            $result = DB::select("SELECT pg_database_size('{$database}') as size");
            $size = $result[0]->size ?? 0;
            return $size / 1024 / 1024;
        } catch (\Exception $e) {
            return 50; // Estimación por defecto
        }
    }

    private function getFilesSize(): float
    {
        $directories = [
            storage_path('app'),
            storage_path('logs'),
            public_path('uploads')
        ];

        $totalSize = 0;

        foreach ($directories as $dir) {
            if (File::exists($dir)) {
                $totalSize += $this->getDirectorySize($dir);
            }
        }

        return $totalSize / 1024 / 1024;
    }

    private function getDirectorySize(string $directory): int
    {
        $size = 0;
        foreach (File::allFiles($directory) as $file) {
            $size += $file->getSize();
        }
        return $size;
    }

    public function getType(): string
    {
        return 'completo';
    }
}
