<?php

namespace App\Services;

use App\Models\Asistencia;
use App\Models\Personal;
use App\Models\Horario;
use App\Models\EstadoAsistencia;
use Illuminate\Support\Collection;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class AsistenciaService
{
    public function getAsistencias(array $filtros = []): Collection
{
    $query = Asistencia::with(['personal', 'personal.persona', 'personal.cargo', 'estadoAsistencia']);

    if (!empty($filtros['fecha'])) {
    $query->whereDate('fecha', $filtros['fecha']);
}

    if (!empty($filtros['fecha_inicio'])) {
        $query->whereDate('fecha', '>=', $filtros['fecha_inicio']);
    }

    if (!empty($filtros['fecha_fin'])) {
        $query->whereDate('fecha', '<=', $filtros['fecha_fin']);
    }

    if (!empty($filtros['personal_id'])) {
        $query->porPersonal($filtros['personal_id']);
    }

    // Si no hay filtros de fecha, traer el mes actual
    if (empty($filtros['fecha']) && empty($filtros['fecha_inicio']) && empty($filtros['fecha_fin'])) {
        $query->whereMonth('fecha', now()->month)
              ->whereYear('fecha', now()->year);
    }

    return $query->orderBy('fecha', 'desc')
                 ->orderBy('hora_entrada', 'desc')
                 ->get();
}

   public function getResumen(array $filtros = []): array
    {
        $fechaInicio = $filtros['fecha_inicio'] ?? Carbon::now()->startOfWeek()->toDateString();
        $fechaFin = $filtros['fecha_fin'] ?? Carbon::now()->endOfWeek()->toDateString();

        Log::info('📊 Generando resumen de asistencia', [
            'fecha_inicio' => $fechaInicio,
            'fecha_fin' => $fechaFin,
            'personal_id' => $filtros['personal_id'] ?? null
        ]);

        $personalQuery = Personal::with(['persona', 'cargo'])
            ->where('activo', DB::raw('true'));

        if (!empty($filtros['personal_id'])) {
            $personalQuery->where('personal_id', $filtros['personal_id']);
        }

        $personalList = $personalQuery->get();

        $asistenciasQuery = Asistencia::with(['personal', 'estadoAsistencia', 'horario'])
            ->whereBetween('fecha', [$fechaInicio, $fechaFin])
            ->orderBy('fecha', 'asc');

        if (!empty($filtros['personal_id'])) {
            $asistenciasQuery->where('personal_id', $filtros['personal_id']);
        }

        $asistencias = $asistenciasQuery->get();


        Log::info('📊 Asistencias encontradas', ['count' => $asistencias->count()]);

        $diasSemana = $this->getDiasSemana($fechaInicio, $fechaFin);
        $resumen = [];

        foreach ($personalList as $personal) {
            $asistenciasPersonal = $asistencias->where('personal_id', $personal->personal_id);

            $dias = [];
            $totalHoras = 0;
            $totalHorasExtras = 0;
            $tardanzas = 0;
            $totalMinutosRetraso = 0;

            foreach ($diasSemana as $key => $diaInfo) {
                $dias[$key] = [
                    'horas' => '-',
                    'estado' => 'AUSENTE',
                    'horas_extras' => 0,
                    'minutos_retraso' => 0,
                    'entrada_tarde' => false
                ];
            }

            foreach ($asistenciasPersonal as $asistencia) {
                $fechaCarbon = Carbon::parse($asistencia->fecha);
                $nombreDia = $this->getNombreDia($fechaCarbon->dayOfWeek);

                $horas = $asistencia->horas_trabajadas ?? 0;
                $estado = $asistencia->estadoAsistencia?->nombre ?? 'PRESENTE';

                // ✅ CORREGIDO: Usar el método del Service, no del modelo
                $horasExtras = $this->calcularHorasExtras($asistencia);

                $minutosRetraso = $asistencia->minutos_retraso ?? 0;
                $esTarde = (bool) ($asistencia->entrada_tarde ?? false) || $minutosRetraso > 0;

                if ($esTarde) {
                    $tardanzas++;
                    $totalMinutosRetraso += $minutosRetraso;
                }

                $totalHoras += $horas;
                $totalHorasExtras += $horasExtras;

                $horasDisplay = $horas > 0 ? number_format($horas, 1) . 'h' : '-';
                $horasExtrasDisplay = $horasExtras > 0 ? '+' . number_format($horasExtras, 1) . 'h' : '';

                $dias[$nombreDia] = [
                    'horas' => $horasDisplay,
                    'horas_extras' => $horasExtrasDisplay,
                    'estado' => $estado,
                    'minutos_retraso' => $minutosRetraso,
                    'entrada_tarde' => $esTarde
                ];
            }

            $resumen[] = [
                'id_personal' => $personal->personal_id,
                'persona_nombres' => $personal->persona->nombres ?? '',
                'persona_apellidos' => $personal->persona->apellidos ?? '',
                'cargo_nombre' => $personal->cargo->nombre ?? 'N/A',
                'dias' => $dias,
                'total_horas' => round($totalHoras, 1),
                'horas_extras' => round($totalHorasExtras, 1),
                'tardanzas' => $tardanzas,
                'minutos_retraso_total' => $totalMinutosRetraso
            ];
        }

        Log::info('✅ Resumen generado', ['total_personal' => count($resumen)]);

        return $resumen;
    }

    private function getDiasSemana(string $fechaInicio, string $fechaFin): array
    {
        $inicio = Carbon::parse($fechaInicio);
        $mapaDias = [1 => 'LUN', 2 => 'MAR', 3 => 'MIE', 4 => 'JUE', 5 => 'VIE', 6 => 'SAB', 7 => 'DOM'];

        $dias = [];
        $fecha = clone $inicio;

        for ($i = 0; $i < 7; $i++) {
            $nombreDia = $mapaDias[$fecha->dayOfWeek] ?? '???';
            $dias[$nombreDia] = [
                'fecha' => $fecha->toDateString(),
                'nombre_completo' => $fecha->locale('es')->isoFormat('dddd'),
                'numero' => $fecha->day
            ];
            $fecha->addDay();
        }

        return $dias;
    }

    private function getNombreDia(int $dayOfWeek): string
    {
        $dias = [1 => 'LUN', 2 => 'MAR', 3 => 'MIE', 4 => 'JUE', 5 => 'VIE', 6 => 'SAB', 7 => 'DOM'];
        return $dias[$dayOfWeek] ?? '???';
    }

   /**
 * Calcular horas extras - Acepta Asistencia o stdClass
 */
private function calcularHorasExtras($asistencia): float
{
    // ✅ Si es stdClass, intentar obtener el modelo real
    if (!$asistencia instanceof Asistencia) {
        // Si tiene ID, buscar el modelo
        if (isset($asistencia->asistencia_id)) {
            $asistencia = Asistencia::with('horario')->find($asistencia->asistencia_id);
        }
        // Si no se pudo obtener el modelo, retornar 0
        if (!$asistencia instanceof Asistencia) {
            Log::warning('calcularHorasExtras recibió un objeto no válido', [
                'tipo' => is_object($asistencia) ? get_class($asistencia) : gettype($asistencia)
            ]);
            return 0;
        }
    }

    if (!$asistencia->horario || !$asistencia->hora_salida || !$asistencia->hora_entrada) {
        return 0;
    }

    try {
        $horaFinHorario = Carbon::parse($asistencia->horario->hora_fin);
        $horaSalida = Carbon::parse($asistencia->hora_salida);

        if ($horaSalida > $horaFinHorario) {
            $minutosExtras = $horaSalida->diffInMinutes($horaFinHorario);
            return round($minutosExtras / 60, 2);
        }
    } catch (\Exception $e) {
        Log::error('Error calculando horas extras: ' . $e->getMessage());
    }

    return 0;
}

    public function registrarMarcacion(array $datos): Asistencia
    {
        $zonaHoraria = 'America/Caracas';
        $fecha = !empty($datos['fecha'])
            ? Carbon::parse($datos['fecha'])->toDateString()
            : Carbon::today($zonaHoraria)->toDateString();

        $ahoraLocal = Carbon::now($zonaHoraria);
        $timestampLocal = $ahoraLocal->toDateTimeString();
        $usuarioId = auth()->id();

        Log::info('📝 Registrando marcación', [
            'tipo' => $datos['tipo'],
            'personal_id' => $datos['personal_id'],
            'fecha_seleccionada' => $fecha,
            'hora_local' => $timestampLocal
        ]);

        $horario = Horario::where('personal_id', $datos['personal_id'])
            ->whereDate('fecha', $fecha)
            ->first();

        if (!$horario) {
            $personal = Personal::find($datos['personal_id']);
            $horaInicio = $personal->hora_entrada_default ?? '08:00:00';
            $horaFin = $personal->hora_salida_default ?? '17:00:00';

            $horario = Horario::create([
                'personal_id' => $datos['personal_id'],
                'fecha' => $fecha,
                'hora_inicio' => $horaInicio,
                'hora_fin' => $horaFin,
                'tipo' => 'NORMAL',
                'descripcion' => 'Horario generado automáticamente',
                'observaciones' => 'Creado automáticamente al registrar asistencia',
                'repetir_semanal' => DB::raw('false'),
                'usuario_creacion_id' => $usuarioId,
                'usuario_actualizacion_id' => $usuarioId,
                'fecha_creacion' => $ahoraLocal,
                'fecha_actualizacion' => $ahoraLocal
            ]);
        }

        $asistencia = Asistencia::where('personal_id', $datos['personal_id'])
            ->whereDate('fecha', $fecha)
            ->first();

        if ($datos['tipo'] === 'entrada') {
            if ($asistencia && $asistencia->hora_entrada) {
                throw new \InvalidArgumentException("Ya tiene una entrada registrada para el día {$fecha}");
            }

            $estadoId = $datos['estado_id'] ?? null;
            if (!$estadoId) {
                $horaInicioHorario = Carbon::parse($horario->hora_inicio);
                $horaEntradaSolo = $ahoraLocal->format('H:i:s');
                $horaInicioSolo = $horaInicioHorario->format('H:i:s');
                $esTarde = $horaEntradaSolo > $horaInicioSolo;

                if ($esTarde) {
                    $estadoTarde = EstadoAsistencia::where('nombre', 'TARDE')->first();
                    $estadoId = $estadoTarde?->estado_asistencia_id;
                }
                if (!$estadoId) {
                    $estadoPresente = EstadoAsistencia::where('nombre', 'PRESENTE')->first();
                    $estadoId = $estadoPresente?->estado_asistencia_id;
                }
            }

            if (!$asistencia) {
                $asistencia = Asistencia::create([
                    'personal_id' => $datos['personal_id'],
                    'horario_id' => $horario->horario_id,
                    'fecha' => $fecha,
                    'estado_asistencia_id' => $estadoId,
                    'observaciones' => $datos['observaciones'] ?? null,
                    'usuario_registro_id' => $usuarioId,
                    'fecha_creacion' => $ahoraLocal,
                    'fecha_actualizacion' => $ahoraLocal,
                    'entrada_tarde' => DB::raw('false'),
                    'salida_temprana' => DB::raw('false'),
                    'minutos_retraso' => 0,
                    'horas_trabajadas' => 0
                ]);
            } else {
                $asistencia->estado_asistencia_id = $estadoId;
                $asistencia->observaciones = $datos['observaciones'] ?? $asistencia->observaciones;
                $asistencia->fecha_actualizacion = $ahoraLocal;
            }

            $asistencia->hora_entrada = $timestampLocal;
            $asistencia->save();
            $this->calcularRetraso($asistencia, $horario, $ahoraLocal);
        }

        elseif ($datos['tipo'] === 'salida') {
            if (!$asistencia) {
                throw new \InvalidArgumentException("No tiene entrada registrada para el día {$fecha}");
            }
            if ($asistencia->hora_salida) {
                throw new \InvalidArgumentException("Ya tiene una salida registrada para el día {$fecha}");
            }

            $asistencia->hora_salida = $timestampLocal;
            $asistencia->fecha_actualizacion = $ahoraLocal;
            $asistencia->usuario_registro_id = $usuarioId;
            $asistencia->save();
            $this->calcularHorasTrabajadas($asistencia);
        }

        return $asistencia->load(['personal', 'personal.persona', 'personal.cargo', 'horario', 'estadoAsistencia']);
    }

    private function calcularRetraso(Asistencia $asistencia, Horario $horario, Carbon $horaEntrada): void
    {
        try {
            $horaInicioHorario = Carbon::parse($horario->hora_inicio);
            $horaEntradaSolo = $horaEntrada->format('H:i:s');
            $horaInicioSolo = $horaInicioHorario->format('H:i:s');
            $esTarde = $horaEntradaSolo > $horaInicioSolo;

            $asistencia->entrada_tarde = $esTarde;
            $asistencia->minutos_retraso = $esTarde ? Carbon::parse($horaEntradaSolo)->diffInMinutes(Carbon::parse($horaInicioSolo)) : 0;
            $asistencia->save();
        } catch (\Exception $e) {
            Log::error('❌ Error calculando retraso: ' . $e->getMessage());
            $asistencia->entrada_tarde = false;
            $asistencia->minutos_retraso = 0;
            $asistencia->save();
        }
    }

    private function calcularHorasTrabajadas(Asistencia $asistencia): void
    {
        if (!$asistencia->hora_entrada || !$asistencia->hora_salida) {
            return;
        }

        try {
            $entrada = Carbon::parse($asistencia->hora_entrada);
            $salida = Carbon::parse($asistencia->hora_salida);

            if ($salida > $entrada) {
                $minutosTrabajados = $salida->diffInMinutes($entrada);
                $asistencia->horas_trabajadas = round($minutosTrabajados / 60, 2);
                $asistencia->saveQuietly();
            }
        } catch (\Exception $e) {
            Log::error('❌ Error calculando horas trabajadas: ' . $e->getMessage());
        }
    }

    public function getEstadisticasRapidas(): array
    {
        $hoy = Carbon::today()->toDateString();
        $totalPersonal = Personal::where('activo', DB::raw('true'))->count();

        $asistenciasHoy = Asistencia::with(['estadoAsistencia', 'horario'])
            ->whereDate('fecha', $hoy)
            ->get();

        $presentes = $asistenciasHoy->filter(fn($a) => $a->estadoAsistencia?->nombre === 'PRESENTE')->count();
        $ausentes = $totalPersonal - $asistenciasHoy->count();
        $tardes = $asistenciasHoy->filter(fn($a) => (bool) $a->entrada_tarde === true || ($a->minutos_retraso ?? 0) > 0)->count();

        $asistenciasMes = Asistencia::with(['horario'])
            ->whereBetween('fecha', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])
            ->get();

        $horasExtras = 0;
        foreach ($asistenciasMes as $asistencia) {
            $horasExtras += $this->calcularHorasExtras($asistencia);
        }

        return [
            'total_presentes' => $presentes,
            'total_ausentes' => $ausentes,
            'total_tardes' => $tardes,
            'total_horas_extras' => round($horasExtras, 1),
            'porcentaje_asistencia' => $totalPersonal > 0 ? round(($presentes / $totalPersonal) * 100, 1) : 0
        ];
    }

    public function registrarEntradaMasiva(array $datos): array
    {
        $registrados = 0;
        $errores = [];
        $fecha = $datos['fecha'] ?? Carbon::today()->toDateString();

        foreach ($datos['personal_ids'] as $personalId) {
            try {
                $this->registrarMarcacion([
                    'personal_id' => $personalId,
                    'tipo' => 'entrada',
                    'observaciones' => $datos['observaciones'] ?? null,
                    'fecha' => $fecha
                ]);
                $registrados++;
            } catch (\Exception $e) {
                $errores[] = ['personal_id' => $personalId, 'error' => $e->getMessage()];
            }
        }

        return ['registrados' => $registrados, 'errores' => $errores, 'total' => count($datos['personal_ids'])];
    }

    public function exportarExcel(array $filtros)
    {
        return response()->json([
            'success' => true,
            'message' => 'Exportación a Excel no implementada aún',
            'data' => $this->getResumen($filtros)
        ]);
    }

    public function exportarPDF(array $filtros)
    {
        return response()->json([
            'success' => true,
            'message' => 'Exportación a PDF no implementada aún',
            'data' => [
                'resumen' => $this->getResumen($filtros),
                'estadisticas' => $this->getEstadisticasRapidas(),
                'filtros' => $filtros
            ]
        ]);
    }

}
