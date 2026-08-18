<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ReporteDepartamentoExport implements FromCollection, WithHeadings, WithMapping
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
        return ['Departamento', 'Total'];
    }

    public function map($item): array
    {
        return [
            $item['departamento'],
            $item['total']
        ];
    }
}
