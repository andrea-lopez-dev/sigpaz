<?php
namespace App\Interfaces;

interface ExportableInterface
{
    public function exportarPDF(): string;
    public function exportarExcel(): string;
}
