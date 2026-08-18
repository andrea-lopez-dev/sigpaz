<?php

namespace App\Providers;

use App\Interfaces\Repositories\DenunciaRepositoryInterface;
use App\Services\Contracts\DenunciaServiceInterface;
use App\Services\Contracts\HistorialServiceInterface;
use App\Strategies\CodigoDenunciaStrategyInterface;
use App\Observers\DenunciaObserver;
use App\Models\Denuncia;
use App\Repositories\DenunciaRepository;
use App\Services\DenunciaService;
use App\Services\HistorialService;
use App\Services\Strategies\CodigoAnioNumericoStrategy;
use Illuminate\Support\ServiceProvider;

class DenunciaServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Repositorios
        $this->app->bind(DenunciaRepositoryInterface::class, DenunciaRepository::class);

        // Servicios
        $this->app->bind(HistorialServiceInterface::class, HistorialService::class);

        $this->app->bind(DenunciaServiceInterface::class, function ($app) {
            return new DenunciaService(
                $app->make(DenunciaRepositoryInterface::class),
                 $app->make(HistorialServiceInterface::class),
                $app->make(CodigoDenunciaStrategyInterface::class)

            );
        });

        // Estrategias de generación de código de denuncia
        $this->app->bind(CodigoDenunciaStrategyInterface::class, CodigoAnioNumericoStrategy::class);
    }

    public function boot(): void
    {
        // Registrar observer
        Denuncia::observe(DenunciaObserver::class);
    }
}
