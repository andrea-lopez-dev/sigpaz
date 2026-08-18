<?php

namespace App\Providers;

use App\Interfaces\Repositories\AlertRepositoryInterface;
use App\Services\Contracts\NotificationServiceInterface;
use App\Repositories\AlertRepository;
use App\Services\AlertNotificationService;
use Illuminate\Support\ServiceProvider;

class NotificationServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(AlertRepositoryInterface::class, AlertRepository::class);
        $this->app->bind(NotificationServiceInterface::class, AlertNotificationService::class);
    }

    public function boot(): void
    {
        //
    }
}
