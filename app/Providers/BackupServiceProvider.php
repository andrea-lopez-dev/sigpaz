<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Backup\BackupService;
use App\Services\Backup\Strategies\FullBackupStrategy;
use App\Services\Backup\Strategies\DatabaseBackupStrategy;
use App\Services\Backup\CloudProviders\GoogleDriveProvider;
use App\Services\Backup\CloudProviders\DropboxProvider;
use App\Services\Backup\CompressionService;

class BackupServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(BackupService::class, function ($app) {
            $service = new BackupService($app->make(\App\Repositories\BackupRepository::class));

            // Registrar estrategias de backup
            $service->registerStrategy('completo', $app->make(FullBackupStrategy::class));
            $service->registerStrategy('base_datos', $app->make(DatabaseBackupStrategy::class));

            // Registrar proveedores cloud (si están configurados)
            if (config('services.google_drive.api_key')) {
                $service->registerCloudProvider(
                    'google_drive',
                    new GoogleDriveProvider(config('services.google_drive.api_key'))
                );
            }

            return $service;
        });

        $this->app->singleton(CompressionService::class);
    }
}
