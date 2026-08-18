<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

// ========== BACKUP SERVICES ==========
use App\Services\Backup\BackupService;
use App\Services\Backup\CompressionService;
use App\Services\Backup\Strategies\FullBackupStrategy;
use App\Services\Backup\Strategies\DatabaseBackupStrategy;
use App\Services\Backup\Strategies\ConfigBackupStrategy;
use App\Services\Backup\Strategies\FilesBackupStrategy;
use App\Services\Backup\CloudProviders\BackblazeProvider;
use App\Services\Backup\CloudProviders\MEGAProvider;
use App\Services\Backup\CloudProviders\OneDriveProvider;
use App\Services\Backup\CloudProviders\DropboxProvider;
use App\Services\Backup\CloudProviders\LocalProvider;

// ========== BACKUP REPOSITORIES ==========
use App\Repositories\BackupRepository;
use App\Repositories\RestoreRepository;

// ========== BACKUP EVENTS ==========
use App\Events\BackupCompleted;
use App\Listeners\LogBackupCompleted;

// ========== CONTRACTS ==========
use App\Services\Contracts\PersonaServiceInterface;
use App\Services\Contracts\InvolucradoServiceInterface;
use App\Services\Contracts\HistorialServiceInterface;
use App\Services\Contracts\CifradoServiceInterface;

// ========== INTERFACES ==========
use App\Interfaces\Services\AuthServiceInterface;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;
use App\Interfaces\Repositories\PersonalRepositoryInterface;
use App\Interfaces\Repositories\PersonaRepositoryInterface as PersonaRepoInterface;
use App\Interfaces\Repositories\CargoRepositoryInterface;

// ========== REPOSITORIOS ==========
use App\Repositories\PersonaRepository;
use App\Repositories\PersonalRepository;
use App\Repositories\UsuarioRepository;
use App\Repositories\CargoRepository;
use App\Repositories\TipoVinculoRepository;
use App\Repositories\TipoMedidaRepository;
use App\Repositories\EloquentUserRepository;

// ========== SERVICIOS ==========
use App\Services\PersonaService;
use App\Services\AuthService;
use App\Services\InvolucradoService;
use App\Services\HistorialService;
use App\Services\CifradoService;
use App\Services\ReportService;
use App\Services\ExportService;
use App\Services\HorarioService;
use App\Services\AsistenciaService;
use App\Services\ReporteService;
use App\Services\Strategies\ReporteDiarioStrategy;
use App\Services\Strategies\ReporteSemanalStrategy;
use App\Services\Strategies\ReporteMensualStrategy;
use App\Services\Strategies\ReportePersonalStrategy;
use App\Interfaces\Repositories\AlertRepositoryInterface;
use App\Repositories\AlertRepository;
use App\Services\Contracts\NotificationServiceInterface;
use App\Services\AlertNotificationService;
// ========== CONTRATOS ADICIONALES ==========
use App\Contracts\UserRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ========== 1. BACKBLAZE PROVIDER (mover ANTES de BackupService) ==========
        $this->app->singleton(BackblazeProvider::class, function ($app) {
            return new BackblazeProvider(
                config('services.backblaze.key_id'),
                config('services.backblaze.application_key'),
                config('services.backblaze.bucket_name', 'SIGPAZ')
            );
        });

        // ========== 2. MEGA PROVIDER ==========
        $this->app->singleton(MEGAProvider::class, function ($app) {
            return new MEGAProvider(
                config('services.mega.email'),
                config('services.mega.password')
            );
        });

        // ========== 3. ONEDRIVE PROVIDER ==========
        $this->app->singleton(OneDriveProvider::class, function ($app) {
            return new OneDriveProvider(
                config('services.onedrive.client_id'),
                config('services.onedrive.client_secret'),
                config('services.onedrive.tenant_id', 'common')
            );
        });

        // ========== 4. DROPBOX PROVIDER ==========
        $this->app->singleton(DropboxProvider::class, function ($app) {
            return new DropboxProvider(config('services.dropbox.access_token'));
        });

        // ========== 5. REPOSITORIOS PRINCIPALES ==========

        // UsuarioRepository
        $this->app->bind(
            UsuarioRepositoryInterface::class,
            UsuarioRepository::class
        );

        // PersonalRepository
        $this->app->bind(
            PersonalRepositoryInterface::class,
            PersonalRepository::class
        );

        // PersonaRepository
        $this->app->bind(
            PersonaRepoInterface::class,
            PersonaRepository::class
        );

        // CargoRepository
        $this->app->bind(
            CargoRepositoryInterface::class,
            CargoRepository::class
        );

        // PersonaRepository (Contracts namespace)
        $this->app->bind(
            \App\Repositories\Contracts\PersonaRepositoryInterface::class,
            PersonaRepository::class
        );

        // ========== 6. BACKUP REPOSITORIES ==========

        $this->app->bind(BackupRepository::class, function ($app) {
            return new BackupRepository($app->make(\App\Models\Backup::class));
        });

        $this->app->bind(RestoreRepository::class, function ($app) {
            return new RestoreRepository($app->make(\App\Models\Restore::class));
        });

        // ========== 7. REPOSITORIOS CON DEPENDENCIAS ==========

        $this->app->bind(TipoVinculoRepository::class, function ($app) {
            return new TipoVinculoRepository($app->make(\App\Models\TipoVinculo::class));
        });

        $this->app->bind(TipoMedidaRepository::class, function ($app) {
            return new TipoMedidaRepository($app->make(\App\Models\TipoMedida::class));
        });

        $this->app->bind(EloquentUserRepository::class);

        // ========== 8. SERVICIOS ==========

        $this->app->bind(
            AuthServiceInterface::class,
            AuthService::class
        );

        $this->app->bind(
            PersonaServiceInterface::class,
            PersonaService::class
        );

        $this->app->bind(
            InvolucradoServiceInterface::class,
            InvolucradoService::class
        );

        $this->app->bind(
            HistorialServiceInterface::class,
            HistorialService::class
        );

        $this->app->bind(
            CifradoServiceInterface::class,
            CifradoService::class
        );

        $this->app->bind(
            AlertRepositoryInterface::class,
            AlertRepository::class
        );

        $this->app->bind(
            NotificationServiceInterface::class,
            AlertNotificationService::class
        );


        // ========== 9. BACKUP SERVICES (Singleton) ==========

        // CompressionService
        $this->app->singleton(CompressionService::class);

        // Backup Strategies
        $this->app->singleton(FullBackupStrategy::class);
        $this->app->singleton(DatabaseBackupStrategy::class);
        $this->app->singleton(ConfigBackupStrategy::class);
        $this->app->singleton(FilesBackupStrategy::class);

        // BackupService principal
        $this->app->singleton(BackupService::class, function ($app) {
            $service = new BackupService(
                $app->make(BackupRepository::class)
            );

            // Registrar estrategias de backup
            $service->registerStrategy('completo', $app->make(FullBackupStrategy::class));
            $service->registerStrategy('base_datos', $app->make(DatabaseBackupStrategy::class));
            $service->registerStrategy('configuracion', $app->make(ConfigBackupStrategy::class));
            $service->registerStrategy('archivos', $app->make(FilesBackupStrategy::class));

            // ========== REGISTRAR PROVEEDORES CLOUD ==========

            // Proveedor local siempre disponible
            $service->registerCloudProvider('local', new LocalProvider());

            // Backblaze B2 (10GB gratis)
            if (config('services.backblaze.key_id') && config('services.backblaze.application_key')) {
                $service->registerCloudProvider('backblaze', $app->make(BackblazeProvider::class));
                Log::info('Backblaze B2 registrado como proveedor cloud');
            }

            // MEGA (20GB gratis)
            if (config('services.mega.email') && config('services.mega.password')) {
                $service->registerCloudProvider('mega', $app->make(MEGAProvider::class));
                Log::info('MEGA registrado como proveedor cloud');
            }

            // OneDrive (5GB gratis)
            if (config('services.onedrive.client_id') && config('services.onedrive.client_secret')) {
                $service->registerCloudProvider('onedrive', $app->make(OneDriveProvider::class));
                Log::info('OneDrive registrado como proveedor cloud');
            }

            // Dropbox (2GB gratis)
            if (config('services.dropbox.access_token')) {
                $service->registerCloudProvider('dropbox', $app->make(DropboxProvider::class));
                Log::info('Dropbox registrado como proveedor cloud');
            }

            return $service;
        });

        // ========== 10. SERVICIOS SINGLETON ==========

        $this->app->singleton(ReportService::class, function ($app) {
            return new ReportService();
        });

        $this->app->singleton(ExportService::class, function ($app) {
            return new ExportService();
        });

        $this->app->singleton(HorarioService::class);
        $this->app->singleton(AsistenciaService::class);

        $this->app->singleton(ReporteService::class, function ($app) {
            $service = new ReporteService();
            $service->registrarEstrategia(new ReporteDiarioStrategy());
            $service->registrarEstrategia(new ReporteSemanalStrategy());
            $service->registrarEstrategia(new ReporteMensualStrategy());
            $service->registrarEstrategia(new ReportePersonalStrategy());
            return $service;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Registrar listeners de eventos
        $this->app['events']->listen(
            BackupCompleted::class,
            LogBackupCompleted::class
        );

        // Establecer variables de sesión para PostgreSQL
        if (!$this->app->runningInConsole()) {
            try {
                if (auth()->check()) {
                    $usuarioId = auth()->id();
                    $ip = request()->ip() ?? '0.0.0.0';

                    DB::statement("SET app.usuario_id = ?", [$usuarioId]);
                    DB::statement("SET app.ip_origen = ?", [$ip]);

                    Log::info('✅ Variables de sesión establecidas', [
                        'usuario_id' => $usuarioId,
                        'ip' => $ip
                    ]);
                } else {
                    DB::statement("SET app.usuario_id = 1");
                    DB::statement("SET app.ip_origen = ?", [request()->ip() ?? '127.0.0.1']);

                    Log::info('⚠️ Usuario no autenticado, usando valores por defecto');
                }
            } catch (\Exception $e) {
                Log::error('❌ Error estableciendo variables de sesión', [
                    'error' => $e->getMessage()
                ]);
            }
        }
    }
}
