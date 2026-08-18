<?php

namespace App\Services\Strategies;

use App\Services\Contracts\ReporteStrategyInterface;
use App\Models\Asistencia;
use App\Models\Personal;
use Carbon\Carbon;
use App\Services\AsistenciaService;

class ReporteSemanalStrategy implements ReporteStrategyInterface
{
    public function generar(array $params): array
    {
        $fechaInicio = $params['fecha_inicio'] ?? Carbon::now()->startOfWeek()->toDateString();
        $fechaFin = $params['fecha_fin'] ?? Carbon::now()->endOfWeek()->toDateString();

        $asistencias = Asistencia::with(['personal', 'personal.persona', 'personal.cargo', 'horario'])
            ->porRangoFechas($fechaInicio, $fechaFin)
            ->get();

        $personalTotal = Personal::count();
        $totalRegistros = $asistencias->count();
        $presentes = $asistencias->where('estado', 'PRESENTE')->count();
        $tardes = $asistencias->where('entrada_tarde', true)->count();

        $horasTotales = $asistencias->sum('horas_trabajadas');
        $horasExtras = $asistencias->sum(function($asistencia) {
            return $asistencia->calcularHorasExtras();
        });

        $detalle = $asistencias->groupBy('personal_id')->map(function($asistenciasPersonal) {
            $personal = $asistenciasPersonal->first()->personal;
            return [
                'personal_id' => $personal->personal_id,
                'persona' => $personal->persona->nombres . ' ' . $personal->persona->apellidos,
                'cargo' => $personal->cargo->nombre ?? 'N/A',
                'dias_trabajados' => $asistenciasPersonal->count(),
                'horas_totales' => round($asistenciasPersonal->sum('horas_trabajadas'), 1),
                'horas_extras' => round($asistenciasPersonal->sum(function($a) {
                    return $a->calcularHorasExtras();
                }), 1),
                'tardanzas' => $asistenciasPersonal->where('entrada_tarde', true)->count()
            ];
        })->values();

        return [
            'titulo' => "Reporte Semanal - " . Carbon::parse($fechaInicio)->format('d/m/Y') . " al " . Carbon::parse($fechaFin)->format('d/m/Y'),
            'fecha_inicio' => $fechaInicio,
            'fecha_fin' => $fechaFin,
            'estadisticas' => [
                ['label' => 'Total Personal', 'value' => $personalTotal],
                ['label' => 'Registros de Asistencia', 'value' => $totalRegistros],
                ['label' => 'Presentes', 'value' => $presentes],
                ['label' => 'Llegadas Tarde', 'value' => $tardes],
                ['label' => 'Horas Totales', 'value' => round($horasTotales, 1) . 'h'],
                ['label' => 'Horas Extras', 'value' => round($horasExtras, 1) . 'h']
            ],
            'detalle' => $detalle
        ];
    }

    public function getTipo(): string
    {
        return 'SEMANAL';
    }
}
