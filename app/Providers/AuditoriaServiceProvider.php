<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\AuditoriaServiceInterface;
use App\Contracts\LogRepositoryInterface;
use App\Contracts\AnalizadorPatronesInterface;
use App\Services\Auditoria\AuditoriaService;
use App\Services\Auditoria\Analizadores\AnalizadorPatrones;
use App\Repositories\LogAuditoriaRepository;
use App\Services\Auditoria\Exportadores\ExportadorFactory;

class AuditoriaServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(LogRepositoryInterface::class, LogAuditoriaRepository::class);
        $this->app->bind(AnalizadorPatronesInterface::class, AnalizadorPatrones::class);
        $this->app->bind(AuditoriaServiceInterface::class, AuditoriaService::class);

        $this->app->singleton(ExportadorFactory::class, function ($app) {
            return new ExportadorFactory();
        });
    }

    public function boot(): void
    {
        $this->app['router']->aliasMiddleware('auditar', \App\Http\Middleware\AuditarOperaciones::class);
    }
}
