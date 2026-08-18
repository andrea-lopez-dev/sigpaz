<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use App\Console\Commands\LimpiarLogsAuditoria;

Artisan::command('send-mail', function () {
    try {
        // Configuración temporal para pruebas
        config([
            'mail.mailers.smtp' => [
                'transport' => 'smtp',
                'host' => 'bulk.smtp.mailtrap.io',
                'port' => 587,
                'username' => 'APIsmtp@mailtrap.io',
                'password' => 'e76267176eee7004b8510a88fa0f1f99',
                'encryption' => 'tls',
            ]
        ]);

        Mail::raw('Congrats for sending test email with Mailtrap!', function ($message) {
            $message->to('contac.teamdevelopment@gmail.com')
                    ->subject('You are awesome!');
        });

        $this->info('✅ Correo enviado exitosamente!');

    } catch (\Exception $e) {
        $this->error('❌ Error: ' . $e->getMessage());
    }
})->purpose('Send Mail');

Schedule::command(LimpiarLogsAuditoria::class, ['--dias' => 90])
    ->daily()
    ->at('02:00')
    ->withoutOverlapping();
