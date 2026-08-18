<?php

namespace App\Services\Backup\CloudProviders;

use App\Services\Backup\Interfaces\CloudStorageInterface;
use Illuminate\Support\Facades\Log;

class BackblazeProvider implements CloudStorageInterface
{
    private string $keyId;
    private string $applicationKey;
    private string $bucketName;
    private ?string $apiUrl = null;
    private ?string $downloadUrl = null;
    private ?string $authorizationToken = null;
    private ?string $bucketId = null;
    private bool $configured = false;

    public function __construct(?string $keyId = null, ?string $applicationKey = null, ?string $bucketName = 'SIGPAZ')
    {
        $this->keyId = $keyId ?? config('services.backblaze.key_id');
        $this->applicationKey = $applicationKey ?? config('services.backblaze.application_key');
        $this->bucketName = $bucketName ?? config('services.backblaze.bucket_name', 'SIGPAZ');

        Log::info('Backblaze B2 inicializando', [
            'key_id' => $this->keyId,
            'has_key' => !empty($this->applicationKey),
            'bucket_name' => $this->bucketName
        ]);

        if (!empty($this->keyId) && !empty($this->applicationKey)) {
            try {
                $this->authenticate();
                $this->getOrCreateBucket();
                $this->configured = true;
                Log::info('✅ Backblaze B2 configurado correctamente');
            } catch (\Exception $e) {
                Log::error('❌ Backblaze B2 init failed: ' . $e->getMessage());
                $this->configured = false;
            }
        }
    }

    private function authenticate(): void
    {
        Log::info('Autenticando con Backblaze B2...');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, $this->keyId . ':' . $this->applicationKey);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        // Usar el certificado descargado
        curl_setopt($ch, CURLOPT_CAINFO, 'C:\\cacert.pem');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);

        if ($error) {
            throw new \Exception('CURL Error: ' . $error);
        }

        if ($httpCode !== 200) {
            throw new \Exception('Error HTTP: ' . $httpCode . ' - ' . substr($response, 0, 200));
        }

        $data = json_decode($response, true);

        if (!isset($data['apiUrl'])) {
            throw new \Exception('Respuesta inválida de Backblaze');
        }

        $this->apiUrl = $data['apiUrl'];
        $this->downloadUrl = $data['downloadUrl'];
        $this->authorizationToken = $data['authorizationToken'];

        Log::info('✅ Backblaze autenticado', ['api_url' => $this->apiUrl]);
    }

    private function getOrCreateBucket(): void
    {
        Log::info('Buscando bucket', ['bucket_name' => $this->bucketName]);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl . '/b2api/v2/b2_list_buckets');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: ' . $this->authorizationToken,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
            'accountId' => $this->keyId
        ]));
        curl_setopt($ch, CURLOPT_CAINFO, 'C:\\cacert.pem');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if ($httpCode !== 200) {
            throw new \Exception('Error listando buckets: ' . $response);
        }

        $data = json_decode($response, true);
        $buckets = $data['buckets'] ?? [];

        foreach ($buckets as $bucket) {
            if ($bucket['bucketName'] === $this->bucketName) {
                $this->bucketId = $bucket['bucketId'];
                Log::info('✅ Bucket encontrado', ['bucket_id' => $this->bucketId]);
                return;
            }
        }

        throw new \Exception('Bucket no encontrado: ' . $this->bucketName);
    }

    private function getUploadUrl(): array
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl . '/b2api/v2/b2_get_upload_url');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: ' . $this->authorizationToken,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
            'bucketId' => $this->bucketId
        ]));
        curl_setopt($ch, CURLOPT_CAINFO, 'C:\\cacert.pem');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if ($httpCode !== 200) {
            throw new \Exception('Error obteniendo upload URL');
        }

        $data = json_decode($response, true);
        return [
            'url' => $data['uploadUrl'],
            'token' => $data['authorizationToken']
        ];
    }

    public function upload(string $localPath, string $remotePath): bool
    {
        if (!$this->configured) return false;

        try {
            if (!file_exists($localPath)) {
                Log::error('Archivo no existe: ' . $localPath);
                return false;
            }

            $uploadData = $this->getUploadUrl();
            $content = file_get_contents($localPath);
            $sha1 = sha1_file($localPath);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $uploadData['url']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: ' . $uploadData['token'],
                'X-Bz-File-Name: ' . urlencode($remotePath),
                'Content-Type: b2/x-auto',
                'X-Bz-Content-Sha1: ' . $sha1
            ]);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
            curl_setopt($ch, CURLOPT_CAINFO, 'C:\\cacert.pem');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode === 200) {
                Log::info('✅ Archivo subido a Backblaze', ['path' => $remotePath]);
                return true;
            }

            Log::error('❌ Error upload', ['http_code' => $httpCode]);
            return false;

        } catch (\Exception $e) {
            Log::error('Upload error: ' . $e->getMessage());
            return false;
        }
    }

    public function download(string $remotePath, string $localPath): bool
    {
        if (!$this->configured) return false;

        try {
            $url = $this->downloadUrl . '/file/' . $this->bucketName . '/' . urlencode($remotePath);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: ' . $this->authorizationToken
            ]);
            curl_setopt($ch, CURLOPT_CAINFO, 'C:\\cacert.pem');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

            $content = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode === 200) {
                file_put_contents($localPath, $content);
                Log::info('✅ Archivo descargado', ['local_path' => $localPath]);
                return true;
            }

            Log::error('❌ Error download', ['http_code' => $httpCode]);
            return false;

        } catch (\Exception $e) {
            Log::error('Download error: ' . $e->getMessage());
            return false;
        }
    }

    public function delete(string $remotePath): bool
    {
        // Implementación básica
        return true;
    }

    public function list(string $path = ''): array
    {
        return [];
    }

    public function getSpaceUsage(): float
    {
        return 0;
    }

    public function testConnection(): bool
    {
        return $this->configured;
    }

    public function isConfigured(): bool
    {
        return $this->configured;
    }
}
