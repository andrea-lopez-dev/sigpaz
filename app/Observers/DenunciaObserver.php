<?php

namespace App\Observers;

use App\Models\Denuncia;
use App\Services\HistorialService;
use Illuminate\Support\Facades\Auth;

class DenunciaObserver
{
    public function __construct(
        private readonly HistorialService $historialService
    ) {}

    public function creating(Denuncia $denuncia): void
    {
        if (empty($denuncia->fecha_creacion)) {
            $denuncia->fecha_creacion = now();
        }
    }

    public function created(Denuncia $denuncia): void
    {
        // El historial ya se registra en el servicio, pero podemos tener un respaldo
    }

    public function updating(Denuncia $denuncia): void
    {
        $denuncia->fecha_actualizacion = now();
    }

    public function updated(Denuncia $denuncia): void
    {
        // El historial se maneja en el servicio
    }

    public function deleted(Denuncia $denuncia): void
    {
        // El historial se maneja en el servicio
    }

    public function restoring(Denuncia $denuncia): void
    {
        // Para soft deletes si los implementamos después
    }

    public function restored(Denuncia $denuncia): void
    {
        // Para soft deletes si los implementamos después
    }
}
