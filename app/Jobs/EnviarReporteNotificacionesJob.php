<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\ReporteNotificacionesMail;
use App\Domain\ValueObjects\Email;
use Illuminate\Support\Facades\Mail;

class EnviarReporteNotificacionesJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        private Email $email,
        private array $filters,
        private string $reportePath,
        private string $reporteNombre
    ) {}

    public function handle(): void
    {
        Mail::send(new ReporteNotificacionesMail(
            email: $this->email,
            filters: $this->filters,
            reportePath: $this->reportePath,
            reporteNombre: $this->reporteNombre
        ));
    }
}
