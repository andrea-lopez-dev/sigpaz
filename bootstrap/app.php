<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\HandleCors;
use App\Http\Middleware\UpdateLastAccess;
use App\Http\Middleware\VerificarCodigoMaestro;
use App\Http\Middleware\AuditarOperaciones;
use App\Http\Middleware\CheckPermission;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )


    ->withMiddleware(function (Middleware $middleware) {
         $middleware->alias([
            'verificar.codigo' => VerificarCodigoMaestro::class,
            'update.last.access' => UpdateLastAccess::class,
             'auditar' => AuditarOperaciones::class,
             'permission' => CheckPermission::class,
             'verificar.inactividad' => \App\Http\Middleware\VerificarInactividad::class,
        ]);

        $middleware->append(HandleCors::class);

        $middleware->api(prepend: [
            HandleCors::class,
        ]);

        $middleware->api(append: [
         \App\Http\Middleware\SetDatabaseSessionUser::class,
         \App\Http\Middleware\AuditarOperaciones::class,
        ]);
        $middleware->api(append: [
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);


        $middleware->web(append: [
            \Illuminate\Http\Middleware\HandleCors::class,
        ]);

        // Para CSRF - forma CORRECTA
        $middleware->validateCsrfTokens(except: [
            'http://localhost:4200/*',
            'http://127.0.0.1:4200/*',
            'api/*'
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Tu configuración de excepciones aquí
    })->create();
