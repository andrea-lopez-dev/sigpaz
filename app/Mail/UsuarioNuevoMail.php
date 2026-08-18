<?php
namespace App\Mail;

use App\Models\Usuario;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UsuarioNuevoMail extends Mailable
{
    use Queueable, SerializesModels;

    public Usuario $usuario;  // ← Declarar como propiedad pública

    public function __construct(Usuario $usuario)
    {
        $this->usuario = $usuario;  // ← Asignar correctamente
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Bienvenido al Sistema SIGPAZ',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.usuario-nuevo',
            with: [
                'nombre' => $this->usuario->nombre_usuario,
                'email' => $this->usuario->email,
                'loginUrl' => config('app.frontend_url') . '/login'
            ]
        );
    }
}
