<?php

namespace App\Exports;

use App\Models\Notificacion;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class NotificacionIndividualExport implements FromArray, WithHeadings, WithMapping, ShouldAutoSize, WithStyles
{
    protected $notificacion;

    public function __construct(Notificacion $notificacion)
    {
        $this->notificacion = $notificacion;
    }

    public function array(): array
    {
        // Retornar un array con una sola fila (la notificación)
        return [
            [
                'notificacion_id' => $this->notificacion->notificacion_id,
                'denuncia' => $this->notificacion->denuncia?->numero_expediente ?? $this->notificacion->denuncia_id,
                'tipo' => $this->notificacion->tipoNotificacion?->nombre ?? 'N/A',
                'fecha_emision' => $this->notificacion->fecha_emision?->format('d/m/Y H:i'),
                'destinatario' => $this->notificacion->destinatario,
                'medio' => $this->notificacion->medio,
                'estado' => $this->notificacion->estado,
                'contenido' => $this->notificacion->contenido,
                'observaciones' => $this->notificacion->observaciones,
                'denunciante' => $this->notificacion->denuncia?->persona?->nombre_completo ?? 'N/A',
                'fecha_creacion' => $this->notificacion->fecha_creacion?->format('d/m/Y H:i')
            ]
        ];
    }

    public function headings(): array
    {
        return [
            'ID NOTIFICACIÓN',
            'DENUNCIA',
            'TIPO NOTIFICACIÓN',
            'FECHA EMISIÓN',
            'DESTINATARIO',
            'MEDIO',
            'ESTADO',
            'CONTENIDO',
            'OBSERVACIONES',
            'DENUNCIANTE',
            'FECHA CREACIÓN'
        ];
    }

    public function map($row): array
    {
        return [
            $row['notificacion_id'],
            $row['denuncia'],
            $row['tipo'],
            $row['fecha_emision'],
            $row['destinatario'],
            $row['medio'],
            $row['estado'],
            $row['contenido'] ?? '',
            $row['observaciones'] ?? '',
            $row['denunciante'],
            $row['fecha_creacion']
        ];
    }

    public function styles(Worksheet $sheet)
    {
        // Estilo para el encabezado
        $sheet->getStyle('A1:K1')->applyFromArray([
            'font' => [
                'bold' => true,
                'size' => 12,
                'color' => ['rgb' => 'FFFFFF']
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'startColor' => ['rgb' => '4F46E5']
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER
            ]
        ]);

        // Estilo para los datos
        $sheet->getStyle('A2:K2')->applyFromArray([
            'font' => [
                'size' => 11
            ],
            'alignment' => [
                'vertical' => Alignment::VERTICAL_CENTER
            ]
        ]);

        // Autoajustar altura de filas
        $sheet->getRowDimension(1)->setRowHeight(25);
        $sheet->getRowDimension(2)->setRowHeight(20);

        // Bordes
        $sheet->getStyle('A1:K2')->applyFromArray([
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['rgb' => 'CCCCCC']
                ]
            ]
        ]);

        return [];
    }
}
