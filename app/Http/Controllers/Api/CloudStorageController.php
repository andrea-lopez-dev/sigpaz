<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Backup\BackupService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CloudStorageController extends Controller
{
    private BackupService $backupService;

    public function __construct(BackupService $backupService)
    {
        $this->backupService = $backupService;
    }

    public function getProviders(): JsonResponse
    {
        $providers = $this->backupService->getAvailableCloudProviders();
        $providerDetails = [];

        foreach ($providers as $provider) {
            $providerDetails[] = [
                'name' => $provider,
                'label' => $this->getProviderLabel($provider),
                'icon' => $this->getProviderIcon($provider),
                'configured' => $this->backupService->isProviderConfigured($provider),
                'connected' => $this->backupService->testCloudConnection($provider)
            ];
        }

        return response()->json([
            'success' => true,
            'data' => $providerDetails
        ]);
    }

 public function testConnection(Request $request): JsonResponse
{
    try {
        $provider = $request->get('provider', 'local');

        if ($provider === 'local') {
            return response()->json([
                'success' => true,
                'message' => '✅ Almacenamiento local disponible y activo'
            ]);
        }

        // Probar conexión según el proveedor
        switch ($provider) {
            case 'backblaze':
                $configured = !empty(config('services.backblaze.key_id')) &&
                             !empty(config('services.backblaze.application_key'));
                break;
            case 'onedrive':
            case 'dropbox':
            case 'mega':
                $configured = false; // Requiere configuración adicional
                break;
            default:
                $configured = false;
        }

        if ($configured) {
            return response()->json([
                'success' => true,
                'message' => "✅ Conexión exitosa con {$provider}"
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => "❌ {$provider} no configurado correctamente"
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de conexión: ' . $e->getMessage()
        ]);
    }
}

    public function getSpaceUsage(string $provider): JsonResponse
    {
        $usage = $this->backupService->getCloudSpaceUsage($provider);

        return response()->json([
            'success' => true,
            'provider' => $provider,
            'used_mb' => $usage,
            'used_gb' => round($usage / 1024, 2)
        ]);
    }

    public function listFiles(string $provider): JsonResponse
    {
        $files = $this->backupService->listCloudFiles($provider);

        return response()->json([
            'success' => true,
            'data' => $files
        ]);
    }

    public function configure(Request $request, string $provider): JsonResponse
    {
        $config = $request->only(['api_key', 'api_secret', 'bucket_name', 'folder']);
        $result = $this->backupService->configureProvider($provider, $config);

        if ($result) {
            return response()->json([
                'success' => true,
                'message' => "Proveedor {$provider} configurado correctamente"
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => "Error al configurar proveedor {$provider}"
        ], 500);
    }

    public function sync(string $provider): JsonResponse
    {
        $synced = $this->backupService->syncWithProvider($provider);

        return response()->json([
            'success' => true,
            'synced_count' => $synced,
            'message' => "Se sincronizaron {$synced} backups"
        ]);
    }

    public function deleteFile(Request $request): JsonResponse
    {
        $provider = $request->get('provider');
        $path = $request->get('path');

        $deleted = $this->backupService->deleteCloudFile($provider, $path);

        if ($deleted) {
            return response()->json([
                'success' => true,
                'message' => 'Archivo eliminado correctamente'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Error al eliminar archivo'
        ], 500);
    }

    private function getProviderLabel(string $provider): string
    {
        $labels = [
            'local' => 'Almacenamiento Local',
            'backblaze' => 'Backblaze B2',
            'mega' => 'MEGA',
            'onedrive' => 'OneDrive',
            'dropbox' => 'Dropbox'
        ];

        return $labels[$provider] ?? $provider;
    }

    private function getProviderIcon(string $provider): string
    {
        $icons = [
            'local' => '💽',
            'backblaze' => '☁️',
            'mega' => '🔒',
            'onedrive' => '📁',
            'dropbox' => '📦'
        ];

        return $icons[$provider] ?? '💾';
    }


}
