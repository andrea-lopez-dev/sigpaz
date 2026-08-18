<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\PrestamoRepositoryInterface;
use App\Repositories\PrestamoRepository;
use App\Services\Contracts\PrestamoServiceInterface;
use App\Services\PrestamoService;

class PrestamoServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(PrestamoRepositoryInterface::class, PrestamoRepository::class);
        $this->app->bind(PrestamoServiceInterface::class, PrestamoService::class);
    }

    public function boot(): void
    {
        //
    }
}
