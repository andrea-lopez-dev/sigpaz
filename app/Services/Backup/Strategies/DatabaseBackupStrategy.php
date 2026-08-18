<?php
// app/Services/Backup/Strategies/DatabaseBackupStrategy.php
namespace App\Services\Backup\Strategies;

use App\Services\Backup\Interfaces\BackupStrategyInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class DatabaseBackupStrategy implements BackupStrategyInterface
{
    public function execute(array $config): array
    {
        $timestamp = now()->format('Ymd_His');
        $backupPath = storage_path("backups/database_backup_{$timestamp}.sql");

        $database = config('database.connections.pgsql.database');
        $username = config('database.connections.pgsql.username');
        $password = config('database.connections.pgsql.password');
        $host = config('database.connections.pgsql.host');
        $port = config('database.connections.pgsql.port', 5432);

        $command = sprintf(
            'PGPASSWORD=%s pg_dump --host=%s --port=%s --username=%s --no-password --format=plain --file=%s %s',
            escapeshellarg($password),
            escapeshellarg($host),
            escapeshellarg($port),
            escapeshellarg($username),
            escapeshellarg($backupPath),
            escapeshellarg($database)
        );

        exec($command, $output, $returnCode);

        if ($returnCode !== 0) {
            throw new \Exception('Database backup failed: ' . implode("\n", $output));
        }

        return [
            'path' => $backupPath,
            'size' => File::exists($backupPath) ? File::size($backupPath) / 1024 / 1024 : 0,
            'type' => 'database'
        ];
    }

    public function estimateSize(array $config): float
    {
        try {
            $database = config('database.connections.pgsql.database');
            $result = DB::select("SELECT pg_database_size('{$database}') as size");
            $size = $result[0]->size ?? 0;
            return $size / 1024 / 1024;
        } catch (\Exception $e) {
            return 50;
        }
    }

    public function getType(): string
    {
        return 'base_datos';
    }
}
