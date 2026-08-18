<?php

namespace App\Services\Auditoria\Exportadores;

use Illuminate\Support\Collection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use Illuminate\Support\Facades\Log;

class ExportadorExcel extends ExportadorBase
{
    public function exportar(Collection $datos, array $opciones = []): string
    {
        try {
            $datos = $this->prepararDatos($datos, $opciones);

            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();

            // Título
            $sheet->setTitle('Auditoría SIGPAZ');

            // Headers
            $headers = ['ID', 'Fecha/Hora', 'Usuario', 'Acción', 'Tabla Afectada', 'Descripción', 'IP Origen', 'Nivel'];
            $col = 'A';
            foreach ($headers as $header) {
                $sheet->setCellValue($col . '1', $header);
                $sheet->getStyle($col . '1')->getFont()->setBold(true);
                $sheet->getStyle($col . '1')->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setRGB('34495E');
                $sheet->getStyle($col . '1')->getFont()->getColor()->setRGB('FFFFFF');
                $col++;
            }

            // Datos
            $row = 2;
            foreach ($datos as $item) {
                if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                    $item = $item->toArray();
                }

                $sheet->setCellValue('A' . $row, $item['log_id'] ?? '');
                $sheet->setCellValue('B' . $row, isset($item['fecha']) ? date('Y-m-d H:i:s', strtotime($item['fecha'])) : '');
                $sheet->setCellValue('C' . $row, $item['usuario_nombre'] ?? $item['usuario_id'] ?? 'Sistema');
                $sheet->setCellValue('D' . $row, $item['accion'] ?? '');
                $sheet->setCellValue('E' . $row, $item['tabla_afectada'] ?? '');
                $sheet->setCellValue('F' . $row, $item['descripcion'] ?? '');
                $sheet->setCellValue('G' . $row, $item['ip_origen'] ?? '');
                $sheet->setCellValue('H' . $row, $item['nivel'] ?? 'INFO');
                $row++;
            }

            // Auto tamaño columnas
            foreach (range('A', 'H') as $col) {
                $sheet->getColumnDimension($col)->setAutoSize(true);
            }

            // Guardar
            $writer = new Xlsx($spreadsheet);
            ob_start();
            $writer->save('php://output');
            $content = ob_get_clean();

            return $content;

        } catch (\Exception $e) {
            Log::error('Error en exportación Excel: ' . $e->getMessage());
            throw $e;
        }
    }

    public function getContentType(): string
    {
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    }

    public function getExtension(): string
    {
        return 'xlsx';
    }
}
