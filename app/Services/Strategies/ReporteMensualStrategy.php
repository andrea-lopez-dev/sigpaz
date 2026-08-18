<?php


namespace App\Services\Strategies;

use App\Services\Contracts\ReporteStrategyInterface;
use App\Models\Asistencia;
use App\Models\Personal;
use Carbon\Carbon;
use App\Services\AsistenciaService;


class ReporteMensualStrategy implements ReporteStrategyInterface
{
    public function generar(array $params): array
    {
        $fechaInicio = $params['fecha_inicio'] ?? Carbon::now()->startOfMonth()->toDateString();
        $fechaFin = $params['fecha_fin'] ?? Carbon::now()->endOfMonth()->toDateString();

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

        $diasLaborables = $this->calcularDiasLaborables($fechaInicio, $fechaFin);

        $detalle = $asistencias->groupBy('personal_id')->map(function($asistenciasPersonal) use ($diasLaborables) {
            $personal = $asistenciasPersonal->first()->personal;
            $diasTrabajados = $asistenciasPersonal->count();
            $porcentajeAsistencia = $diasLaborables > 0 ? round(($diasTrabajados / $diasLaborables) * 100, 1) : 0;

            return [
                'personal_id' => $personal->personal_id,
                'persona' => $personal->persona->nombres . ' ' . $personal->persona->apellidos,
                'cargo' => $personal->cargo->nombre ?? 'N/A',
                'dias_trabajados' => $diasTrabajados,
                'dias_laborables' => $diasLaborables,
                'porcentaje_asistencia' => $porcentajeAsistencia,
                'horas_totales' => round($asistenciasPersonal->sum('horas_trabajadas'), 1),
                'horas_extras' => round($asistenciasPersonal->sum(function($a) {
                    return $a->calcularHorasExtras();
                }), 1),
                'tardanzas' => $asistenciasPersonal->where('entrada_tarde', true)->count()
            ];
        })->values();

        return [
            'titulo' => "Reporte Mensual - " . Carbon::parse($fechaInicio)->format('F Y'),
            'fecha_inicio' => $fechaInicio,
            'fecha_fin' => $fechaFin,
            'estadisticas' => [
                ['label' => 'Total Personal', 'value' => $personalTotal],
                ['label' => 'Registros de Asistencia', 'value' => $totalRegistros],
                ['label' => 'Presentes', 'value' => $presentes],
                ['label' => 'Llegadas Tarde', 'value' => $tardes],
                ['label' => 'Horas Totales', 'value' => round($horasTotales, 1) . 'h'],
                ['label' => 'Horas Extras', 'value' => round($horasExtras, 1) . 'h'],
                ['label' => 'Días Laborables', 'value' => $diasLaborables]
            ],
            'detalle' => $detalle
        ];
    }

    private function calcularDiasLaborables($fechaInicio, $fechaFin): int
    {
        $inicio = Carbon::parse($fechaInicio);
        $fin = Carbon::parse($fechaFin);
        $diasLaborables = 0;

        while ($inicio <= $fin) {
            if ($inicio->isWeekday() && !$inicio->isWeekend()) {
                $diasLaborables++;
            }
            $inicio->addDay();
        }

        return $diasLaborables;
    }

    public function getTipo(): string
    {
        return 'MENSUAL';
    }
}
