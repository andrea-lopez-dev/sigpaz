<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonaController;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Api\DenunciaController;
use App\Http\Controllers\ConciliacionController;
use App\Http\Controllers\RemisionController;
use App\Http\Controllers\MedidaCautelarController;
use App\Http\Controllers\TipoMedidaController;
use App\Http\Controllers\Api\ChatbotController;


// Ruta para ver QR de denuncia
Route::get('/qr/denuncia/{codigo}', [DenunciaController::class, 'mostrarQr'])
    ->name('qr.denuncia');

// Ruta dinámica para QR de persona o denuncia
Route::get('/qr/{tipo}/{codigo}', function($tipo, $codigo) {
    if ($tipo === 'persona') {
        return app(App\Http\Controllers\PersonaController::class)->mostrarQr($codigo);
    } else if ($tipo === 'denuncia') {
        return app(App\Http\Controllers\Api\DenunciaController::class)->mostrarQr($codigo);
    }
    abort(404);
});

// ============================================
// RUTA PRINCIPAL (SIRVE ANGULAR)
// ============================================

// Esta es la ruta más importante: sirve el index.html de Angular
Route::get('/', function () {
    // Buscar el index.html generado por Angular
    $indexPath = public_path('index.html');

    if (file_exists($indexPath)) {
        return response(file_get_contents($indexPath), 200)
            ->header('Content-Type', 'text/html');
    }

    return response('Frontend no disponible. Ejecuta "npm run build" en Angular', 404);
});

Route::get('/login', function() {
    return response()->json([
        'error' => 'Por favor use la API para login',
        'api_endpoint' => '/api/v1/auth/login'
    ]);
})->name('login');

Route::get('/qr/denuncia/{codigo}', [DenunciaController::class, 'mostrarQr'])
    ->name('qr.denuncia');

Route::get('/qr/{tipo}/{codigo}', function($tipo, $codigo) {
    if ($tipo === 'persona') {
        return app(App\Http\Controllers\PersonaController::class)->mostrarQr($codigo);
    } else if ($tipo === 'denuncia') {
        return app(App\Http\Controllers\Api\DenunciaController::class)->mostrarQr($codigo);
    }
    abort(404);
});
Route::get('/test-mail', function () {
    try {
        Mail::raw('Prueba de correo desde SIGPAZ', function($message) {
            $message->to('contac.teamdevelopment@gmail.com')
                    ->subject('Test Mailtrap SIGPAZ');
        });
        return 'Correo enviado exitosamente!';
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});
Route::get('/chatbot-probar', [ChatbotController::class, 'probarApi']);

// Esta ruta debe ir SIEMPRE AL FINAL
// Captura cualquier URL que no haya sido manejada antes y sirve Angular
Route::fallback(function () {
    $indexPath = public_path('index.html');

    if (!file_exists($indexPath)) {
        return response('Frontend no disponible - index.html no existe en: ' . public_path(), 404);
    }

    return response(file_get_contents($indexPath), 200)
        ->header('Content-Type', 'text/html');
});
