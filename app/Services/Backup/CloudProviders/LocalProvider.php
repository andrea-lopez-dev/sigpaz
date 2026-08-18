<?php

namespace App\Services\Backup\CloudProviders;

use App\Services\Backup\Interfaces\CloudStorageInterface;
use Illuminate\Support\Facades\Storage;

class LocalProvider implements CloudStorageInterface
{
    private array $config;

    public function __construct(array $config = [])
    {

        $this->config = $config;
    }

    public function list(string $path = ''): array
{
    $files = Storage::disk('local')->files($path);
    $result = [];

    foreach ($files as $file) {
        $result[] = [
            'name' => basename($file),
            'path' => $file,
            'size' => round(Storage::disk('local')->size($file) / 1024 / 1024, 2),
            'modified' => Storage::disk('local')->lastModified($file)
        ];
    }

    return $result;
}
    public function upload(string $sourcePath, string $destinationPath): bool
    {
        try {
            return Storage::disk('local')->put($destinationPath, file_get_contents($sourcePath));
        } catch (\Exception $e) {
            return false;
        }
    }

    public function download(string $remotePath, string $localPath): bool
    {
        try {
            $contents = Storage::disk('local')->get($remotePath);
            return file_put_contents($localPath, $contents) !== false;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function delete(string $path): bool
    {
        return Storage::disk('local')->delete($path);
    }

    public function getSpaceUsage(): float
    {
        // Implementar cálculo de espacio usado
        $totalSize = 0;
        $files = Storage::disk('local')->allFiles();

        foreach ($files as $file) {
            $totalSize += Storage::disk('local')->size($file);
        }

        return round($totalSize / 1024 / 1024, 2); // Retorna en MB
    }

    public function testConnection(): bool
    {
        return Storage::disk('local')->exists('/');
    }

    public function isConfigured(): bool
    {
        return true; // Local siempre está configurado
    }
}
