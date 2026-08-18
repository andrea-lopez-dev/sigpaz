<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ReporteEdadExport implements FromCollection, WithHeadings, WithMapping
{
    protected $reporte;

    public function __construct($reporte)
    {
        $this->reporte = $reporte;
    }

    public function collection()
    {
        return $this->reporte;
    }

    public function headings(): array
    {
        return ['Rango de Edad', 'Total'];
    }

    public function map($item): array
    {
        return [
            $item['rango'],
            $item['total']
        ];
    }
}
