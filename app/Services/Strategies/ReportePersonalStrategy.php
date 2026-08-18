<?php


namespace App\Services\Strategies;

use App\Services\Contracts\ReporteStrategyInterface;
use App\Models\Asistencia;
use App\Models\Personal;
use Carbon\Carbon;
use App\Services\AsistenciaService;


class ReportePersonalStrategy implements ReporteStrategyInterface
{
    public function generar(array $params): array
    {
        if (empty($params['personal_id'])) {
            throw new \InvalidArgumentException('Se requiere personal_id para reporte personal');
        }

        $personalId = $params['personal_id'];
        $fechaInicio = $params['fecha_inicio'] ?? Carbon::now()->startOfMonth()->toDateString();
        $fechaFin = $params['fecha_fin'] ?? Carbon::now()->endOfMonth()->toDateString();

        $personal = Personal::with(['persona', 'cargo'])->findOrFail($personalId);
        $asistencias = Asistencia::with(['horario'])
            ->porPersonal($personalId)
            ->porRangoFechas($fechaInicio, $fechaFin)
            ->get();

        $totalDias = Carbon::parse($fechaInicio)->diffInDays(Carbon::parse($fechaFin)) + 1;
        $diasLaborables = $this->calcularDiasLaborables($fechaInicio, $fechaFin);
        $diasTrabajados = $asistencias->count();
        $diasAusente = $diasLaborables - $diasTrabajados;

        $horasTotales = $asistencias->sum('horas_trabajadas');
        $horasExtras = $asistencias->sum(function($asistencia) {
            return $asistencia->calcularHorasExtras();
        });
        $tardanzas = $asistencias->where('entrada_tarde', true)->count();

        $detalleDiario = $asistencias->map(function($asistencia) {
            return [
                'fecha' => $asistencia->fecha->format('d/m/Y'),
                'hora_entrada' => $asistencia->hora_entrada?->format('H:i'),
                'hora_salida' => $asistencia->hora_salida?->format('H:i'),
                'horas_trabajadas' => $asistencia->horas_trabajadas,
                'horas_extras' => $asistencia->calcularHorasExtras(),
                'estado' => $asistencia->estado,
                'minutos_retraso' => $asistencia->minutos_retraso
            ];
        });

        return [
            'titulo' => "Reporte de Asistencia - Personal",
            'personal' => [
                'id' => $personal->personal_id,
                'nombre_completo' => $personal->persona->nombres . ' ' . $personal->persona->apellidos,
                'cargo' => $personal->cargo->nombre ?? 'N/A',
                'documento' => $personal->persona->numero_documento ?? 'N/A'
            ],
            'periodo' => [
                'inicio' => $fechaInicio,
                'fin' => $fechaFin,
                'dias_laborables' => $diasLaborables,
                'total_dias' => $totalDias
            ],
            'estadisticas' => [
                ['label' => 'Días Trabajados', 'value' => $diasTrabajados],
                ['label' => 'Días Ausente', 'value' => $diasAusente],
                ['label' => 'Horas Totales', 'value' => round($horasTotales, 1) . 'h'],
                ['label' => 'Horas Extras', 'value' => round($horasExtras, 1) . 'h'],
                ['label' => 'Tardanzas', 'value' => $tardanzas],
                ['label' => 'Promedio Horas/Día', 'value' => $diasTrabajados > 0 ? round($horasTotales / $diasTrabajados, 1) . 'h' : '0h']
            ],
            'detalle_diario' => $detalleDiario
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
        return 'PERSONAL';
    }
}
