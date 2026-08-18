<?php

namespace App\Exports;

use App\Models\Notificacion;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithTitle;

class NotificacionesExport implements FromQuery, WithHeadings, WithMapping, ShouldAutoSize, WithStyles, WithTitle
{
    protected $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function query()
    {
        $query = Notificacion::with(['denuncia.persona', 'tipoNotificacion']);

        if (!empty($this->filters['fecha_inicio'])) {
            $query->whereDate('fecha_emision', '>=', $this->filters['fecha_inicio']);
        }
        if (!empty($this->filters['fecha_fin'])) {
            $query->whereDate('fecha_emision', '<=', $this->filters['fecha_fin']);
        }
        if (!empty($this->filters['tipo_notificacion'])) {
            $query->where('tipo_notificacion_id', $this->filters['tipo_notificacion']);
        }
        if (!empty($this->filters['estado'])) {
            $query->where('estado', $this->filters['estado']);
        }

        return $query->orderBy('fecha_emision', 'desc');
    }

    public function headings(): array
    {
        return [
            'ID',
            'Denuncia',
            'Tipo Notificación',
            'Fecha Emisión',
            'Destinatario',
            'Medio',
            'Estado',
            'Contenido',
            'Observaciones',
            'Denunciante',
            'Fecha Creación'
        ];
    }

    public function map($notificacion): array
    {
        return [
            $notificacion->notificacion_id,
            $notificacion->denuncia?->numero_expediente ?? $notificacion->denuncia_id,
            $notificacion->tipoNotificacion?->nombre ?? 'N/A',
            $notificacion->fecha_emision?->format('d/m/Y H:i'),
            $notificacion->destinatario,
            $notificacion->medio,
            $notificacion->estado,
            $notificacion->contenido ?? '',
            $notificacion->observaciones ?? '',
            $notificacion->denuncia?->persona?->nombre_completo ?? 'N/A',
            $notificacion->fecha_creacion?->format('d/m/Y H:i')
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true, 'size' => 12]],
            'A1:K1' => ['fill' => ['fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID, 'startColor' => ['rgb' => '4F46E5']]],
        ];
    }

    public function title(): string
    {
        return 'Reporte Notificaciones';
    }
}
