<?php
namespace App\Services;

use App\Interfaces\ReportableInterface;

class ReportService
{
    public function generarReporte(ReportableInterface $model): string
    {
        return $model->generarReporte();
    }

    public function generarReporteDetallado($model): string
    {
        return "=== REPORTE DETALLADO ===\n" .
               "ID: {$model->id_tipo_vinculo}\n" .
               "Nombre: {$model->nombre}\n" .
               "Descripción: {$model->descripcion}\n" .
               "Estado: " . ($model->estado ? 'ACTIVO' : 'INACTIVO');
    }
}
