<?php

namespace App\Services\Backup;

use App\Repositories\BackupRepository;
use App\Services\Backup\Interfaces\BackupStrategyInterface;
use App\Services\Backup\Interfaces\CloudStorageInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use App\Events\BackupCompleted;

class BackupService
{
     private BackupRepository $repository;
    private array $strategies = [];
    private array $cloudProviders = [];

    public function __construct(BackupRepository $repository)
    {
        $this->repository = $repository;
    }

    public function registerStrategy(string $type, BackupStrategyInterface $strategy): void
    {
        $this->strategies[$type] = $strategy;
    }

    public function registerCloudProvider(string $name, CloudStorageInterface $provider): void
    {
        $this->cloudProviders[$name] = $provider;
    }

   public function getAvailableCloudProviders(): array
{
    return array_keys($this->cloudProviders);
}

    public function createBackup(array $config): array
    {
        DB::beginTransaction();

        try {
            // Validar que el proveedor existe si no es local
            if ($config['origen_nube'] !== 'local' && !isset($this->cloudProviders[$config['origen_nube']])) {
                throw new \Exception("Proveedor de nube no disponible: {$config['origen_nube']}");
            }

            // 🔥 NUEVO: Determinar la ruta de almacenamiento según selección del usuario
            $storagePath = $this->determineStoragePath($config);

            // Crear directorio personalizado si no existe (solo para almacenamiento local)
            if ($config['origen_nube'] === 'local' && !empty($config['ruta_personalizada'])) {
                $directory = dirname($storagePath);
                if (!is_dir($directory)) {
                    mkdir($directory, 0755, true);
                    Log::info("Directorio personalizado creado: {$directory}");
                }
            }

            // Pasar la ruta personalizada a la estrategia
            $config['custom_path'] = $storagePath;
            $strategy = $this->getStrategy($config['tipo'] ?? 'completo');
            $result = $strategy->execute($config);

            $backupData = [
                'fecha' => now(),
                'usuario_id' => auth()->id(),
                'ruta_archivo' => $result['path'],
                'descripcion' => $config['descripcion'],
                'origen_nube' => $config['origen_nube'] ?? 'local',
                'tamano_mb' => $result['size'],
                 'encriptado' => filter_var($config['encriptar'] ?? false, FILTER_VALIDATE_BOOLEAN),
            'comprimido' => filter_var($config['comprimir'] ?? true, FILTER_VALIDATE_BOOLEAN),
            'integridad_verificada' => true,
                'estado' => 'completado',
                // 🔥 NUEVO: Guardar la ruta personalizada si el usuario la especificó
                'ruta_personalizada' => $config['ruta_personalizada'] ?? null,
                'solo_nube' => $config['solo_nube'] ?? false
            ];

            $backup = $this->repository->create($backupData);

            // Subir a la nube si es necesario
            if ($config['origen_nube'] !== 'local') {
                $uploadSuccess = $this->uploadToCloud($backup, $config['origen_nube']);

                if (!$uploadSuccess) {
                    Log::warning('Backup creado localmente pero falló subida a la nube', [
                        'backup_id' => $backup->backup_id,
                        'provider' => $config['origen_nube']
                    ]);
                }

                // 🔥 NUEVO: Si es solo nube, eliminar el archivo local después de subir
                if (($config['solo_nube'] ?? false) && $uploadSuccess) {
                    if (file_exists($result['path'])) {
                        unlink($result['path']);
                        Log::info("Archivo local eliminado (solo nube)", ['path' => $result['path']]);
                    }
                }
            }

            DB::commit();

            Event::dispatch(new BackupCompleted($backup));

            return [
                'success' => true,
                'backup' => $backup,
                'message' => $this->getSuccessMessage($config, $storagePath)
            ];

        } catch (\Exception $e) {
            DB::rollBack();

            Log::error('Error creando backup', [
                'error' => $e->getMessage(),
                'config' => $config
            ]);

            return [
                'success' => false,
                'message' => 'Error al crear backup: ' . $e->getMessage()
            ];
        }
    }

    /**
     * 🔥 NUEVO: Determinar la ruta de almacenamiento según preferencias del usuario
     */
    private function determineStoragePath(array $config): string
    {
        $filename = $this->generateBackupFilename($config);

        // 1. Si el usuario especificó una ruta personalizada completa
        if (!empty($config['ruta_personalizada'])) {
            $path = $this->sanitizePath($config['ruta_personalizada']);
            // Si la ruta es un directorio, añadir el nombre del archivo
            if (is_dir($path) || str_ends_with($path, '/') || str_ends_with($path, '\\')) {
                $path = rtrim($path, '/\\') . '/' . $filename;
            }
            return $path;
        }

        // 2. Si el usuario especificó solo un directorio
        if (!empty($config['directorio_destino'])) {
            $directory = rtrim($config['directorio_destino'], '/\\');
            if (!is_dir($directory)) {
                mkdir($directory, 0755, true);
            }
            return $directory . '/' . $filename;
        }

        // 3. Si es backup en nube, crear temporal local
        if ($config['origen_nube'] !== 'local') {
            $tempDir = storage_path('app/temp_backups');
            if (!is_dir($tempDir)) {
                mkdir($tempDir, 0755, true);
            }
            return $tempDir . '/' . $filename;
        }

        // 4. Backup local con ruta por defecto configurable
        $defaultPath = config('backup.default_local_path', storage_path('backups'));

        if (!is_dir($defaultPath)) {
            mkdir($defaultPath, 0755, true);
        }

        return $defaultPath . '/' . $filename;
    }

    /**
     * 🔥 NUEVO: Generar nombre de archivo para el backup
     */
    private function generateBackupFilename(array $config): string
    {
        $prefix = $config['nombre_personalizado'] ?? 'backup';
        $type = $config['tipo'] ?? 'completo';
        $date = now()->format('Ymd_His');
        $extension = ($config['comprimir'] ?? true) ? 'zip' : 'sql';

        return "{$prefix}_{$type}_{$date}.{$extension}";
    }

    /**
     * 🔥 NUEVO: Sanitizar ruta por seguridad
     */
    private function sanitizePath(string $path): string
    {
        // Eliminar intentos de directory traversal
        $path = str_replace(['..', './', '\\'], ['', '/', '/'], $path);

        // Eliminar caracteres no permitidos
        $path = preg_replace('/[<>:"|?*]/', '', $path);

        // Normalizar slashes
        $path = str_replace('//', '/', $path);

        return $path;
    }

    /**
     * 🔥 NUEVO: Mensaje de éxito personalizado
     */
    private function getSuccessMessage(array $config, string $storagePath): string
    {
        $location = ($config['origen_nube'] === 'local')
            ? "en ubicación local: {$storagePath}"
            : "en la nube ({$config['origen_nube']}) y localmente en: {$storagePath}";

        if (($config['solo_nube'] ?? false) && $config['origen_nube'] !== 'local') {
            $location = "solo en la nube ({$config['origen_nube']})";
        }

        return "Backup creado exitosamente {$location}";
    }
     /**
     * 🔥 NUEVO: Obtener todas las ubicaciones disponibles para backups
     */
    public function getAvailableLocations(): array
    {
        $locations = [
            [
                'id' => 'default',
                'name' => 'Ubicación por defecto',
                'path' => config('backup.default_local_path', storage_path('backups')),
                'type' => 'local',
                'free_space_mb' => $this->getFreeSpace(config('backup.default_local_path', storage_path('backups')))
            ],
            [
                'id' => 'custom',
                'name' => 'Ubicación personalizada',
                'path' => null,
                'type' => 'local',
                'free_space_mb' => null
            ]
        ];

        // Agregar ubicaciones comunes en diferentes sistemas operativos
        if (PHP_OS_FAMILY === 'Windows') {
            $locations[] = [
                'id' => 'windows_documents',
                'name' => 'Mis Documentos',
                'path' => 'C:/Users/' . getenv('USERNAME') . '/Documents/SIGPAZ_Backups',
                'type' => 'local',
                'free_space_mb' => null
            ];
            $locations[] = [
                'id' => 'windows_desktop',
                'name' => 'Escritorio',
                'path' => 'C:/Users/' . getenv('USERNAME') . '/Desktop/SIGPAZ_Backups',
                'type' => 'local',
                'free_space_mb' => null
            ];
        } else {
            $locations[] = [
                'id' => 'linux_home',
                'name' => 'Directorio Home',
                'path' => getenv('HOME') . '/sigpaz_backups',
                'type' => 'local',
                'free_space_mb' => null
            ];
        }

        return $locations;
    }

    /**
     * 🔥 NUEVO: Validar si una ruta es escribible y tiene espacio suficiente
     */
    public function validateLocation(string $path, float $requiredSizeMB): array
    {
        // Verificar si el directorio existe o se puede crear
        if (!is_dir($path)) {
            try {
                mkdir($path, 0755, true);
            } catch (\Exception $e) {
                return [
                    'valid' => false,
                    'message' => 'No se puede crear el directorio: ' . $e->getMessage()
                ];
            }
        }

        // Verificar permisos de escritura
        if (!is_writable($path)) {
            return [
                'valid' => false,
                'message' => 'El directorio no tiene permisos de escritura'
            ];
        }

        // Verificar espacio disponible
        $freeSpace = $this->getFreeSpace($path);
        if ($freeSpace !== null && $freeSpace < $requiredSizeMB) {
            return [
                'valid' => false,
                'message' => "Espacio insuficiente. Requerido: {$requiredSizeMB}MB, Disponible: {$freeSpace}MB"
            ];
        }

        return [
            'valid' => true,
            'message' => 'Ubicación válida',
            'free_space_mb' => $freeSpace
        ];
    }

    /**
     * 🔥 NUEVO: Obtener espacio libre en disco
     */
    private function getFreeSpace(string $path): ?float
    {
        try {
            $freeBytes = disk_free_space($path);
            if ($freeBytes !== false) {
                return round($freeBytes / 1024 / 1024, 2);
            }
            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    private function getStrategy(string $type): BackupStrategyInterface
    {
        if (!isset($this->strategies[$type])) {
            throw new \InvalidArgumentException("Estrategia no encontrada: {$type}");
        }

        return $this->strategies[$type];
    }

    private function uploadToCloud($backup, string $provider): bool
    {
        try {
            $cloudProvider = $this->cloudProviders[$provider];
            $remotePath = "backup_{$backup->backup_id}_{$backup->fecha->format('Ymd_His')}.zip";

            if ($cloudProvider->upload($backup->ruta_archivo, $remotePath)) {
                $this->repository->update($backup->backup_id, [
                    'api_referencia' => $remotePath,
                    'origen_nube' => $provider
                ]);

                Log::info('Backup subido a la nube', [
                    'backup_id' => $backup->backup_id,
                    'provider' => $provider,
                    'remote_path' => $remotePath
                ]);

                return true;
            }

            return false;
        } catch (\Exception $e) {
            Log::error('Error subiendo backup a la nube', [
                'backup_id' => $backup->backup_id,
                'provider' => $provider,
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }

    public function downloadFromCloud(int $backupId, string $localPath): bool
    {
        $backup = $this->repository->findById($backupId);

        if (!$backup || !$backup->api_referencia) {
            return false;
        }

        $provider = $backup->origen_nube;

        if (!isset($this->cloudProviders[$provider])) {
            Log::error('Proveedor no disponible para descarga', ['provider' => $provider]);
            return false;
        }

        return $this->cloudProviders[$provider]->download($backup->api_referencia, $localPath);
    }

    public function estimateSize(array $config): float
    {
        $strategy = $this->getStrategy($config['tipo'] ?? 'completo');
        $estimatedSize = $strategy->estimateSize($config);

        // Añadir overhead por encriptación si aplica
        if ($config['encriptar'] ?? false) {
            $estimatedSize *= 1.05; // 5% overhead por encriptación
        }

        return round($estimatedSize, 2);
    }

    public function validateIntegrity(int $backupId): array
    {
        $backup = $this->repository->findById($backupId);

        if (!$backup) {
            return ['valid' => false, 'message' => 'Backup no encontrado'];
        }

        $valid = false;
        $message = '';
        $filePath = $backup->ruta_archivo;

        try {
            // Si el archivo local no existe, intentar descargar de la nube
            if (!file_exists($filePath) && $backup->api_referencia) {
                $tempPath = storage_path("backups/temp/backup_{$backupId}.tmp");
                $downloaded = $this->downloadFromCloud($backupId, $tempPath);

                if ($downloaded) {
                    $filePath = $tempPath;
                }
            }

            if (!file_exists($filePath)) {
                $message = 'Archivo de backup no encontrado (ni local ni en la nube)';
            } else {
                // Verificar integridad del archivo
                $valid = $this->checkFileIntegrity($filePath);
                $message = $valid ? 'Integridad verificada' : 'Archivo corrupto';

                // Limpiar archivo temporal si se descargó
                if (isset($tempPath) && file_exists($tempPath)) {
                    unlink($tempPath);
                }
            }
        } catch (\Exception $e) {
            $message = 'Error al verificar integridad: ' . $e->getMessage();
        }

        $this->repository->updateIntegrity($backupId, $valid);

        return ['valid' => $valid, 'message' => $message];
    }

    private function checkFileIntegrity(string $filePath): bool
    {
        // Verificar que el archivo existe y no está vacío
        if (!file_exists($filePath) || filesize($filePath) === 0) {
            return false;
        }

        // Para archivos ZIP, verificar que es un ZIP válido
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $filePath);
        finfo_close($finfo);

        // Verificar que es un archivo ZIP válido (para backups comprimidos)
        if ($mimeType === 'application/zip') {
            $zip = new \ZipArchive();
            if ($zip->open($filePath) === true) {
                $zip->close();
                return true;
            }
            return false;
        }

        // Para otros tipos, solo verificar que el archivo existe
        return true;
    }

    public function deleteBackup(int $backupId): array
    {
        $backup = $this->repository->findById($backupId);

        if (!$backup) {
            return ['success' => false, 'message' => 'Backup no encontrado'];
        }

        DB::beginTransaction();

        try {
            // Eliminar archivo local
            if (file_exists($backup->ruta_archivo)) {
                unlink($backup->ruta_archivo);
            }

            // Eliminar de la nube si existe
            if ($backup->api_referencia && isset($this->cloudProviders[$backup->origen_nube])) {
                $this->cloudProviders[$backup->origen_nube]->delete($backup->api_referencia);
            }

            // Eliminar registro
            $this->repository->delete($backupId);

            DB::commit();

            return ['success' => true, 'message' => 'Backup eliminado exitosamente'];
        } catch (\Exception $e) {
            DB::rollBack();

            return ['success' => false, 'message' => 'Error eliminando backup: ' . $e->getMessage()];
        }
    }

    public function testCloudConnection(string $provider): bool
    {
        if (!isset($this->cloudProviders[$provider])) {
            return false;
        }

        return $this->cloudProviders[$provider]->testConnection();
    }

   public function getCloudSpaceUsage(string $provider): float
{
    if (!isset($this->cloudProviders[$provider])) {
        return 0;
    }

    return $this->cloudProviders[$provider]->getSpaceUsage();
}

public function isProviderConfigured(string $provider): bool
{
    return isset($this->cloudProviders[$provider]);
}

public function listCloudFiles(string $provider): array
{
    if (!isset($this->cloudProviders[$provider])) {
        return [];
    }

    // Implementar según el proveedor
    return [];
}

public function configureProvider(string $provider, array $config): bool
{
    // Implementar configuración
    return true;
}

public function syncWithProvider(string $provider): int
{
    // Implementar sincronización
    return 0;
}

public function deleteCloudFile(string $provider, string $path): bool
{
    if (!isset($this->cloudProviders[$provider])) {
        return false;
    }

    return $this->cloudProviders[$provider]->delete($path);
}

public function applyRetentionPolicy(): int
{
    $deleted = 0;
    $retentionDays = config('backup.retention.local_days', 30);
    $expiredBackups = $this->repository->getExpiredBackups($retentionDays);

    foreach ($expiredBackups as $backup) {
        $result = $this->deleteBackup($backup->backup_id);
        if ($result['success']) {
            $deleted++;
        }
    }

    return $deleted;
}

public function getScheduledBackups(): array
{
    // Implementar obtención de backups programados
    return [];
}

public function scheduleBackup(array $data): array
{
    // Implementar programación
    return [];
}

public function cancelSchedule(int $id): void
{
    // Implementar cancelación
}

public function syncWithCloud(): int
{
    $synced = 0;
    foreach ($this->cloudProviders as $name => $provider) {
        if ($name !== 'local') {
            $synced += $this->syncWithProvider($name);
        }
    }
    return $synced;
}

public function getLogs(int $limit = 100): array
{
    // Implementar obtención de logs
    return [];
}

public function exportLogs(string $format = 'csv'): string
{
    // Implementar exportación
    return '';
}

public function generateGeneralReport(): array
{
    $backups = $this->repository->getAll();

    return [
        'total_backups' => $backups->count(),
        'total_size_mb' => $backups->sum('tamano_mb'),
        'by_provider' => $backups->groupBy('origen_nube')->map->count(),
        'by_status' => $backups->groupBy('estado')->map->count()
    ];
}

public function generateByUserReport(): array
{
    $backups = $this->repository->getAll();

    return [
        'by_user' => $backups->groupBy('usuario_id')->map(function ($group) {
            return [
                'count' => $group->count(),
                'total_size' => $group->sum('tamano_mb')
            ];
        })
    ];
}

public function generateByProviderReport(): array
{
    $backups = $this->repository->getAll();

    return [
        'by_provider' => $backups->groupBy('origen_nube')->map(function ($group) {
            return [
                'count' => $group->count(),
                'total_size_mb' => $group->sum('tamano_mb')
            ];
        })
    ];
}

public function generateFailureReport(): array
{
    $failedBackups = $this->repository->findByFilters(['estado' => 'fallido']);

    return [
        'failed_count' => $failedBackups->count(),
        'failed_backups' => $failedBackups->toArray()
    ];
}

public function generateAuditReport(): array
{
    // Implementar reporte de auditoría
    return [];
}

public function exportPDF(string $reportType, array $params = []): string
{
    // Implementar exportación PDF
    $path = storage_path("reports/report_{$reportType}.pdf");
    return $path;
}

public function exportExcel(string $reportType, array $params = []): string
{
    // Implementar exportación Excel
    $path = storage_path("reports/report_{$reportType}.xlsx");
    return $path;
}
}
