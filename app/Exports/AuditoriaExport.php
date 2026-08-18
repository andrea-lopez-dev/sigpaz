<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithProperties;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class AuditoriaExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithTitle, WithProperties
{
    protected $logs;

    public function __construct($logs)
    {
        $this->logs = $logs;
    }

    public function collection()
    {
        return $this->logs;
    }

    public function headings(): array
    {
        return [
            '#',
            'ID Log',
            'Fecha/Hora',
            'Usuario',
            'Acción',
            'Tabla Afectada',
            'ID Registro',
            'Descripción',
            'IP Origen',
            'Nivel',
            'User Agent',
            'Transacción ID'
        ];
    }

    public function map($log): array
    {
        static $counter = 0;
        $counter++;

        return [
            $counter,
            $log->log_id ?? '',
            $log->fecha ? $log->fecha->format('Y-m-d H:i:s') : '',
            $log->usuario?->nombre_usuario ?? $log->usuario_nombre ?? 'Sistema',
            $log->accion ?? '',
            $log->tabla_afectada ?? '',
            $log->registro_id ?? '',
            $log->descripcion ?? '',
            $log->ip_origen ?? '',
            $this->formatearNivel($log->nivel ?? 'INFO'),
            $log->user_agent ?? '',
            $log->transaccion_id ?? ''
        ];
    }

    public function styles(Worksheet $sheet)
    {
        // Estilo para cabeceras
        $sheet->getStyle('A1:L1')->applyFromArray([
            'font' => [
                'bold' => true,
                'size' => 12,
                'color' => ['rgb' => 'FFFFFF']
            ],
            'fill' => [
                'fillType' => Fill::FILL_SOLID,
                'startColor' => ['rgb' => '34495E']
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER
            ]
        ]);

        // Auto filtrar
        $sheet->setAutoFilter('A1:L1');

        // Congelar primera fila
        $sheet->freezePane('A2');

        // Estilos condicionales para niveles
        $highestRow = $sheet->getHighestRow();
        for ($row = 2; $row <= $highestRow; $row++) {
            $nivel = $sheet->getCell('J' . $row)->getValue();
            $color = $this->getColorForNivel($nivel);
            if ($color) {
                $sheet->getStyle('J' . $row)->getFont()->getColor()->setRGB($color);
            }
        }

        return [
            // Ajustar altura de filas
            1 => ['height' => 25],
        ];
    }

    private function formatearNivel(string $nivel): string
    {
        $niveles = [
            'ERROR' => '🔴 ERROR',
            'CRITICAL' => '⚠️ CRITICAL',
            'WARNING' => '🟡 WARNING',
            'INFO' => '🔵 INFO',
            'DEBUG' => '🟢 DEBUG'
        ];
        return $niveles[$nivel] ?? $nivel;
    }

    private function getColorForNivel(string $nivel): ?string
    {
        $colores = [
            '🔴 ERROR' => 'DC3545',
            '⚠️ CRITICAL' => 'DC3545',
            '🟡 WARNING' => 'FFC107',
            '🔵 INFO' => '28A745',
            '🟢 DEBUG' => '17A2B8'
        ];
        return $colores[$nivel] ?? null;
    }

    public function title(): string
    {
        return 'Reporte Auditoría SIGPAZ';
    }

    public function properties(): array
    {
        return [
            'creator' => 'SIGPAZ System',
            'lastModifiedBy' => 'SIGPAZ System',
            'title' => 'Reporte de Auditoría',
            'description' => 'Reporte automatizado de auditoría SIGPAZ',
            'subject' => 'Auditoría',
            'keywords' => 'auditoría,seguridad,logs,sigpaz',
            'category' => 'Reportes',
            'manager' => 'SIGPAZ Admin',
            'company' => 'SIGPAZ'
        ];
    }
}
