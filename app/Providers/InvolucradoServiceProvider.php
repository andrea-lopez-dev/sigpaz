<?php

namespace App\Providers;

use App\Interfaces\Repositories\InvolucradoRepositoryInterface;
use App\Services\Contracts\InvolucradoServiceInterface;
use App\Repositories\InvolucradoRepository;
use App\Services\InvolucradoService;
use Illuminate\Support\ServiceProvider;

class InvolucradoServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Repositorio
        $this->app->bind(InvolucradoRepositoryInterface::class, InvolucradoRepository::class);

        // Servicio
        $this->app->bind(InvolucradoServiceInterface::class, function ($app) {
            return new InvolucradoService(
                $app->make(InvolucradoRepositoryInterface::class),
                $app->make(\App\Services\Contracts\DenunciaServiceInterface::class)
            );
        });
    }

    public function boot(): void
    {
        //
    }
}
