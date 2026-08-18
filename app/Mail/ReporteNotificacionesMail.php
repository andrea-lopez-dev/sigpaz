<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Queue\SerializesModels;
use App\Domain\ValueObjects\Email;

class ReporteNotificacionesMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        private Email $email,
        private array $filters,
        private string $reportePath,
        private string $reporteNombre
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            to: $this->email->getValue(),
            subject: 'Reporte de Notificaciones - SIGPAZ',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.reporte-notificaciones',
            with: [
                'filters' => $this->filters,
                'nombreArchivo' => $this->reporteNombre,
                'fechaGeneracion' => now()->format('d/m/Y H:i:s'),
                'usuario' => auth()->user()?->nombre_usuario ?? 'Sistema'
            ]
        );
    }

    public function attachments(): array
    {
        if (!file_exists($this->reportePath)) {
            return [];
        }

        return [
            Attachment::fromPath($this->reportePath)
                ->as($this->reporteNombre)
                ->withMime('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
        ];
    }
}
