<?php
namespace App\Listeners;

use App\Observers\UsuarioCreado;
use App\Mail\UsuarioNuevoMail;
use Illuminate\Support\Facades\Mail;

class EnviarNotificacionUsuarioNuevo
{
    public function handle(UsuarioCreado $event): void
    {
        Mail::to($event->usuario->email)
            ->send(new UsuarioNuevoMail($event->usuario));
    }
}
