<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class PrestamosExport implements FromCollection, WithHeadings, WithMapping, WithStyles, ShouldAutoSize
{
    protected $prestamoService;
    protected $filters;

    public function __construct($prestamoService, $filters)
    {
        $this->prestamoService = $prestamoService;
        $this->filters = $filters;
    }

    public function collection()
    {
        $result = $this->prestamoService->listarPrestamos(10000, $this->filters);
        return collect($result->items());
    }

    public function headings(): array
    {
        return [
            'ID',
            'Código',
            'Expediente',
            'Denunciante',
            'Personal Solicitante',
            'Cargo',
            'Fecha Préstamo',
            'Fecha Retorno Prevista',
            'Fecha Devolución',
            'Estado',
            'Motivo',
            'Días de Préstamo'
        ];
    }

    public function map($prestamo): array
    {
        $diasPrestamo = now()->diffInDays($prestamo->fecha_prestamo);

        return [
            $prestamo->prestamo_id,
            $prestamo->identificador ?? 'N/A',
            $prestamo->denuncia->numero_expediente ?? 'N/A',
            $prestamo->denuncia->persona->nombres . ' ' . $prestamo->denuncia->persona->apellidos ?? 'N/A',
            $prestamo->personal->persona->nombres . ' ' . $prestamo->personal->persona->apellidos ?? 'N/A',
            $prestamo->personal->cargo->nombre ?? 'N/A',
            $prestamo->fecha_prestamo ? date('d/m/Y', strtotime($prestamo->fecha_prestamo)) : 'N/A',
            $prestamo->fecha_retorno_prevista ? date('d/m/Y', strtotime($prestamo->fecha_retorno_prevista)) : 'N/A',
            $prestamo->fecha_devolucion ? date('d/m/Y', strtotime($prestamo->fecha_devolucion)) : 'Pendiente',
            $this->getEstadoTexto($prestamo->estado),
            $prestamo->motivo ?? 'Sin motivo',
            $diasPrestamo
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 12],
                'fill' => [
                    'fillType' => Fill::FILL_SOLID,
                    'startColor' => ['rgb' => '4472C4']
                ],
                'font' => ['color' => ['rgb' => 'FFFFFF']]
            ],
        ];
    }

    private function getEstadoTexto($estado): string
    {
        $estados = [
            'ACTIVO' => 'Préstamo Activo',
            'PRESTADO' => 'Préstamo Activo',
            'DEVUELTO' => 'Devuelto',
            'RETRASADO' => 'Retrasado'
        ];
        return $estados[$estado] ?? $estado;
    }
}
