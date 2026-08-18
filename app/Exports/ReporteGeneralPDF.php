<?php

namespace App\Exports;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Collection;

class ReporteGeneralPDF
{
    public static function generate(Collection $notificaciones, array $estadisticas, array $filters)
    {
        $pdf = Pdf::loadView('pdfs.reporte-notificaciones', [
            'notificaciones' => $notificaciones,
            'estadisticas' => $estadisticas,
            'filters' => $filters,
            'fecha_generacion' => now()
        ]);

        return $pdf->output();
    }
}
