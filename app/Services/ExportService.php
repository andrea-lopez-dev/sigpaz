<?php
namespace App\Services;

use App\Interfaces\ExportableInterface;

class ExportService
{
    public function exportarPDF(ExportableInterface $model): string
    {
        return $model->exportarPDF();
    }

    public function exportarExcel(ExportableInterface $model): string
    {
        return $model->exportarExcel();
    }
}
