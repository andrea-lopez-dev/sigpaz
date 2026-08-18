<?php

namespace App\Services\Auditoria\Exportadores;

use App\Contracts\ExportadorInterface;

class ExportadorFactory
{
    protected array $exportadores = [
        'csv' => ExportadorCSV::class,
        'json' => ExportadorJSON::class,
        'pdf' => ExportadorPDF::class,
        'excel' => ExportadorExcel::class,
    ];

    public function make(string $formato): ExportadorInterface
    {
        if (!isset($this->exportadores[$formato])) {
            throw new \InvalidArgumentException("Formato {$formato} no soportado");
        }

        $clase = $this->exportadores[$formato];
        return new $clase();
    }

    public function register(string $formato, string $clase): void
    {
        $this->exportadores[$formato] = $clase;
    }
}
