<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;

class EstadisticasDenunciasExport implements FromArray, WithHeadings, WithStyles, ShouldAutoSize
{
    protected $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function array(): array
    {
        $rows = [];

        // Cabecera del reporte
        $rows[] = ['REPORTE DE ESTADÍSTICAS DE DENUNCIAS'];
        $rows[] = ['Generado el: ' . $this->data['generado_en']];
        $rows[] = [''];

        // Resumen general
        $rows[] = ['RESUMEN GENERAL'];
        $rows[] = ['Total Denuncias', $this->data['total_denuncias']];
        $rows[] = ['Denuncias Activas', $this->data['denuncias_activas']];
        $rows[] = ['Denuncias Resueltas', $this->data['denuncias_resueltas']];
        $rows[] = ['Conciliaciones Exitosas', $this->data['conciliaciones_exitosas']];
        $rows[] = ['Tasa de Resolución', $this->data['tasa_resolucion'] . '%'];
        $rows[] = [''];

        // Denuncias por mes
        $rows[] = ['DENUNCIAS POR MES'];
        $rows[] = ['Mes', 'Cantidad'];
        foreach ($this->data['denuncias_por_mes'] as $item) {
            $rows[] = [$item['mes'], $item['total']];
        }

        // Si tiene últimas denuncias
        if (isset($this->data['ultimas_denuncias']) && count($this->data['ultimas_denuncias']) > 0) {
            $rows[] = [''];
            $rows[] = ['ÚLTIMAS 5 DENUNCIAS'];
            $rows[] = ['Código', 'Denunciante', 'Tipo Conflicto', 'Estado', 'Fecha'];
            foreach ($this->data['ultimas_denuncias'] as $item) {
                $rows[] = [
                    $item['codigo'],
                    $item['denunciante'],
                    $item['tipo_conflicto'],
                    $item['estado'],
                    $item['fecha']
                ];
            }
        }

        return $rows;
    }

    public function headings(): array
    {
        return [];
    }

    public function styles(Worksheet $sheet)
    {
        // Estilo para títulos principales
        $sheet->getStyle('A1:A1')->applyFromArray([
            'font' => ['bold' => true, 'size' => 16],
            'alignment' => ['horizontal' => Alignment::HORIZONTAL_CENTER]
        ]);

        $sheet->mergeCells('A1:B1');

        // Estilo para subtítulos
        $sheet->getStyle('A4:A4')->applyFromArray([
            'font' => ['bold' => true, 'size' => 12],
            'fill' => ['fillType' => Fill::FILL_SOLID, 'startColor' => ['rgb' => '4F46E5']],
            'font' => ['color' => ['rgb' => 'FFFFFF']]
        ]);

        $sheet->getStyle('A9:A9')->applyFromArray([
            'font' => ['bold' => true, 'size' => 12],
            'fill' => ['fillType' => Fill::FILL_SOLID, 'startColor' => ['rgb' => '4F46E5']],
            'font' => ['color' => ['rgb' => 'FFFFFF']]
        ]);

        return [];
    }
}
