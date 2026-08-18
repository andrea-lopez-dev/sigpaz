<?php
namespace App\Services\Strategies;

use App\Services\Contracts\ReporteStrategyInterface;
use App\Models\Asistencia;
use App\Models\Personal;
use Carbon\Carbon;

class ReporteDiarioStrategy implements ReporteStrategyInterface
{
    public function generar(array $params): array
    {
        $fecha = $params['fecha'] ?? Carbon::today()->toDateString();

        $asistencias = Asistencia::with(['personal', 'personal.cargo', 'horario'])
            ->porFecha($fecha)
            ->get();

        $personalTotal = Personal::count();
        $presentes = $asistencias->where('estado', 'PRESENTE')->count();
        $ausentes = $personalTotal - $asistencias->count();
        $tardes = $asistencias->where('entrada_tarde', true)->count();

        $detalle = $asistencias->map(function($asistencia) {
            return [
                'personal_id' => $asistencia->personal_id,
                'persona' => $asistencia->personal->persona->nombres . ' ' .
                           $asistencia->personal->persona->apellidos,
                'cargo' => $asistencia->personal->cargo->nombre ?? 'N/A',
                'hora_entrada' => $asistencia->hora_entrada?->format('H:i'),
                'hora_salida' => $asistencia->hora_salida?->format('H:i'),
                'estado' => $asistencia->estado,
                'minutos_retraso' => $asistencia->minutos_retraso,
                'horas_trabajadas' => $asistencia->horas_trabajadas
            ];
        });

        return [
            'titulo' => "Reporte Diario - " . Carbon::parse($fecha)->format('d/m/Y'),
            'fecha' => $fecha,
            'estadisticas' => [
                ['label' => 'Total Personal', 'value' => $personalTotal],
                ['label' => 'Presentes', 'value' => $presentes],
                ['label' => 'Ausentes', 'value' => $ausentes],
                ['label' => 'Llegadas Tarde', 'value' => $tardes],
                ['label' => 'Porcentaje Asistencia', 'value' => round(($presentes / $personalTotal) * 100, 1) . '%']
            ],
            'detalle' => $detalle
        ];
    }

    public function getTipo(): string
    {
        return 'DIARIO';
    }
}
