<?php

namespace App\Services\Backup\CloudProviders;

use App\Services\Backup\Interfaces\CloudStorageInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DropboxProvider implements CloudStorageInterface
{
    private string $accessToken;
    private string $basePath;
    private bool $configured = false;

    public function __construct(string $accessToken, string $basePath = '/SIGPAZ/Backups')
    {
        $this->accessToken = $accessToken;
        $this->basePath = $basePath;

        // Verificar configuración
        $this->configured = !empty($accessToken) && $this->testConnection();
    }

    public function upload(string $localPath, string $remotePath): bool
    {
        if (!$this->configured) {
            return false;
        }

        try {
            $content = file_get_contents($localPath);

            $response = Http::withToken($this->accessToken)
                ->withHeaders(['Content-Type' => 'application/octet-stream'])
                ->send('POST', 'https://content.dropboxapi.com/2/files/upload', [
                    'body' => $content,
                    'headers' => [
                        'Dropbox-API-Arg' => json_encode([
                            'path' => $this->basePath . '/' . $remotePath,
                            'mode' => 'overwrite'
                        ])
                    ]
                ]);

            $success = $response->successful();
            if ($success) {
                Log::info('Archivo subido a Dropbox', ['path' => $remotePath]);
            }
            return $success;
        } catch (\Exception $e) {
            Log::error('Dropbox upload failed: ' . $e->getMessage());
            return false;
        }
    }

    public function download(string $remotePath, string $localPath): bool
    {
        if (!$this->configured) {
            return false;
        }

        try {
            $response = Http::withToken($this->accessToken)
                ->withHeaders([
                    'Dropbox-API-Arg' => json_encode([
                        'path' => $this->basePath . '/' . $remotePath
                    ])
                ])
                ->post('https://content.dropboxapi.com/2/files/download');

            if ($response->successful()) {
                file_put_contents($localPath, $response->body());
                return true;
            }

            return false;
        } catch (\Exception $e) {
            Log::error('Dropbox download failed: ' . $e->getMessage());
            return false;
        }
    }

    public function delete(string $remotePath): bool
    {
        if (!$this->configured) {
            return false;
        }

        try {
            $response = Http::withToken($this->accessToken)
                ->post('https://api.dropboxapi.com/2/files/delete_v2', [
                    'path' => $this->basePath . '/' . $remotePath
                ]);

            return $response->successful();
        } catch (\Exception $e) {
            Log::error('Dropbox delete failed: ' . $e->getMessage());
            return false;
        }
    }

    /**
     * Listar archivos en Dropbox
     */
    public function list(string $path = ''): array
    {
        if (!$this->configured) {
            return [];
        }

        try {
            $listPath = $path ? $this->basePath . '/' . $path : $this->basePath;

            $response = Http::withToken($this->accessToken)
                ->post('https://api.dropboxapi.com/2/files/list_folder', [
                    'path' => $listPath
                ]);

            if ($response->successful()) {
                $entries = $response->json('entries', []);
                $files = [];

                foreach ($entries as $entry) {
                    if ($entry['.tag'] === 'file') {
                        $files[] = [
                            'name' => $entry['name'],
                            'size' => round($entry['size'] / 1024 / 1024, 2),
                            'modified' => strtotime($entry['client_modified']),
                            'path' => $entry['path_display']
                        ];
                    }
                }

                return $files;
            }

            return [];
        } catch (\Exception $e) {
            Log::error('Dropbox list failed: ' . $e->getMessage());
            return [];
        }
    }

    public function testConnection(): bool
    {
        try {
            $response = Http::withToken($this->accessToken)
                ->post('https://api.dropboxapi.com/2/users/get_current_account');

            return $response->successful();
        } catch (\Exception $e) {
            return false;
        }
    }

    public function getSpaceUsage(): float
    {
        if (!$this->configured) {
            return 0;
        }

        try {
            $response = Http::withToken($this->accessToken)
                ->post('https://api.dropboxapi.com/2/users/get_space_usage');

            if ($response->successful()) {
                $data = $response->json();
                $used = $data['used'] ?? 0;
                return round($used / 1024 / 1024, 2);
            }

            return 0;
        } catch (\Exception $e) {
            Log::error('Dropbox getSpaceUsage failed: ' . $e->getMessage());
            return 0;
        }
    }

    public function isConfigured(): bool
    {
        return $this->configured;
    }
}
