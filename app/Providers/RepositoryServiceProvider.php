<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\Repositories\UsuarioRepositoryInterface;
use App\Interfaces\Repositories\PersonaRepositoryInterface;
use App\Interfaces\Repositories\PersonalRepositoryInterface;
use App\Interfaces\Services\AuthServiceInterface;
use App\Interfaces\Services\UsuarioServiceInterface;
use App\Repositories\UsuarioRepository;
use App\Repositories\PersonaRepository;
use App\Repositories\PersonalRepository;
use App\Services\AuthService;
use App\Interfaces\Repositories\InvolucradoRepositoryInterface;
use App\Repositories\InvolucradoRepository;
use App\Services\Contracts\InvolucradoServiceInterface;
use App\Services\InvolucradoService;
use App\Services\UsuarioService;
use App\Services\Contracts\NotificacionServiceInterface;
use App\Services\NotificacionService;
use App\Repositories\Contracts\NotificacionRepositoryInterface;
use App\Repositories\NotificacionRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Repositories
        $this->app->bind(UsuarioRepositoryInterface::class, UsuarioRepository::class);
        $this->app->bind(PersonaRepositoryInterface::class, PersonaRepository::class);
        $this->app->bind(PersonalRepositoryInterface::class, PersonalRepository::class);
         $this->app->bind(NotificacionRepositoryInterface::class, NotificacionRepository::class);
        $this->app->bind(NotificacionServiceInterface::class, NotificacionService::class);
        // Registrar repositorios
        $this->app->bind(
            InvolucradoRepositoryInterface::class,
            InvolucradoRepository::class
        );

        // Registrar servicios
        $this->app->bind(
            InvolucradoServiceInterface::class,
            InvolucradoService::class
        );
        // Services
        $this->app->bind(AuthServiceInterface::class, AuthService::class);
        $this->app->bind(UsuarioServiceInterface::class, UsuarioService::class);
    }

    public function boot(): void
    {
        //
    }
}
