<?php

namespace App\Mail;

use Mailtrap\MailtrapClient;
use Mailtrap\Mime\MailtrapEmail;
use Symfony\Component\Mime\Address;
use Illuminate\Support\Facades\Log;

class MailtrapReporteMail
{
    private MailtrapClient $client;

    public function __construct()
    {
        $this->client = MailtrapClient::initSendingEmails(
            apiKey: env('MAILTRAP_API_KEY'),
            isBulk: true
        );
    }

    public function send(string $toEmail, string $attachmentPath, string $attachmentName): bool
    {
        try {
            $email = (new MailtrapEmail())
                ->from(new Address(env('MAIL_FROM_ADDRESS', 'noreply@sigpaz.com'), env('MAIL_FROM_NAME', 'SIGPAZ')))
                ->to(new Address($toEmail))
                ->subject('Reporte de Notificaciones - SIGPAZ')
                ->category('Reportes')
                ->html($this->generateHtmlContent($attachmentName))
                ->attachment(file_get_contents($attachmentPath), $attachmentName);

            $response = $this->client->send($email);

            Log::info('Correo enviado con Mailtrap', ['to' => $toEmail]);
            return true;

        } catch (\Exception $e) {
            Log::error('Error enviando correo con Mailtrap: ' . $e->getMessage());
            return false;
        }
    }

    private function generateHtmlContent(string $fileName): string
    {
        return "
        <!DOCTYPE html>
        <html>
        <head><meta charset='utf-8'></head>
        <body style='font-family: Arial, sans-serif;'>
            <h1 style='color: #4f46e5;'>📊 SIGPAZ - Reporte de Notificaciones</h1>
            <p>Estimado usuario,</p>
            <p>Adjunto encontrará el reporte de notificaciones solicitado.</p>
            <p><strong>Archivo:</strong> {$fileName}</p>
            <p><strong>Fecha generación:</strong> " . now()->format('d/m/Y H:i:s') . "</p>
            <hr>
            <p style='font-size: 12px; color: #666;'>Este es un mensaje automático del sistema SIGPAZ.</p>
        </body>
        </html>
        ";
    }
}
