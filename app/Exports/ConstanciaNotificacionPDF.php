<?php

namespace App\Exports;

use App\Models\Notificacion;
use Barryvdh\DomPDF\Facade\Pdf;

class ConstanciaNotificacionPDF
{
    public static function generate(int $id)
    {
        $notificacion = Notificacion::with(['denuncia.persona', 'tipoNotificacion'])->find($id);

        if (!$notificacion) {
            throw new \Exception('Notificación no encontrada');
        }

        $pdf = Pdf::loadView('pdfs.constancia-notificacion', [
            'notificacion' => $notificacion,
            'fecha_generacion' => now()
        ]);

        return $pdf->output();
    }
}
