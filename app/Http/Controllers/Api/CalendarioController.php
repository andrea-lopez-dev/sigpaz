<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\HorarioService;
use App\Services\AsistenciaService;
use App\Services\ReporteService;
use App\DTOs\HorarioDTO;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use App\Models\Asistencia;
use Illuminate\Support\Facades\DB;

class CalendarioController extends Controller
{
     public function __construct(
        private HorarioService $horarioService,
        private AsistenciaService $asistenciaService,
        private ReporteService $reporteService
    ) {}


    /**
     * Obtener horarios con filtros
     * GET /api/v1/horarios
     */
    public function getHorarios(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'personal_id' => 'nullable|integer|exists:personal,personal_id',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            'tipo' => 'nullable|in:NORMAL,EXTRA,TURNO,FINESEMANA'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $horarios = $this->horarioService->listar($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $horarios,
            'meta' => [
                'total' => $horarios->count(),
                'filtros_aplicados' => $validator->validated()
            ]
        ]);
    }

    /**
     * Crear horario
     * POST /api/v1/horarios
     */
 public function crearHorario(Request $request): JsonResponse
{
    $validator = Validator::make($request->all(), [
        'personal_id' => 'required|integer|exists:personal,personal_id',
        'fecha' => 'required|date',
        'hora_inicio' => 'required|date_format:H:i',
        'hora_fin' => 'required|date_format:H:i|after:hora_inicio',
        'tipo' => 'nullable|in:NORMAL,EXTRA,TURNO,FINESEMANA',
        'observaciones' => 'nullable|string|max:500',
        'repetir_semanal' => 'nullable|in:true,false,1,0'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    // ✅ NO convertir aquí, el DTO lo hará con DB::raw
    $dto = HorarioDTO::fromRequest(array_merge(
        $validator->validated(),
        ['usuario_creacion_id' => auth()->id()]
    ));

    $horario = $this->horarioService->crear($dto->toArray());

    return response()->json([
        'success' => true,
        'message' => 'Horario creado exitosamente',
        'data' => $horario
    ], 201);
}
    /**
     * Actualizar horario
     * PUT /api/v1/horarios/{id}
     */
   public function actualizarHorario(Request $request, int $id): JsonResponse
{
    $validator = Validator::make($request->all(), [
        'hora_inicio' => 'sometimes|date_format:H:i',
        'hora_fin' => 'sometimes|date_format:H:i|after:hora_inicio',
        'tipo' => 'sometimes|in:NORMAL,EXTRA,TURNO,FINESEMANA',
        'observaciones' => 'nullable|string|max:500',
        'repetir_semanal' => 'nullable|in:true,false,1,0'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $datos = $validator->validated();
    $datos['usuario_actualizacion_id'] = auth()->id();

    // ✅ Convertir repetir_semanal a DB::raw para PostgreSQL
    if (isset($datos['repetir_semanal'])) {
        $boolValue = filter_var($datos['repetir_semanal'], FILTER_VALIDATE_BOOLEAN);
        $datos['repetir_semanal'] = DB::raw($boolValue ? 'true' : 'false');
    }

    $horario = $this->horarioService->actualizar($id, $datos);

    return response()->json([
        'success' => true,
        'message' => 'Horario actualizado exitosamente',
        'data' => $horario
    ]);
}


    /**
     * Eliminar horario
     * DELETE /api/v1/horarios/{id}
     */
    public function eliminarHorario(int $id): JsonResponse
    {
        $this->horarioService->eliminar($id);

        return response()->json([
            'success' => true,
            'message' => 'Horario eliminado exitosamente'
        ]);
    }

    /**
     * Registrar asistencia (entrada/salida)
     * POST /api/v1/asistencias/registrar
     */
public function registrarAsistencia(Request $request): JsonResponse
{
    \Log::info('=== REGISTRAR ASISTENCIA - REQUEST ===');
    \Log::info($request->all());

    $validator = Validator::make($request->all(), [
        'personal_id' => 'required|integer|exists:personal,personal_id',
        'tipo' => 'required|in:entrada,salida',
        'fecha' => 'nullable|date',  // ✅ Campo fecha ya está aquí
        'observaciones' => 'nullable|string|max:500',
        'estado' => 'nullable|in:PRESENTE,TARDE,JUSTIFICADO'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $datos = $validator->validated();
    $datos['usuario_registro_id'] = auth()->id();

    // ✅ Pasar los datos completos (incluyendo 'fecha')
    $asistencia = $this->asistenciaService->registrarMarcacion($datos);

    return response()->json([
        'success' => true,
        'message' => $datos['tipo'] === 'entrada'
            ? 'Entrada registrada exitosamente'
            : 'Salida registrada exitosamente',
        'data' => $asistencia
    ]);
}

    /**
     * Registrar entrada masiva
     * POST /api/v1/asistencias/entrada-masiva
     */
    public function registrarEntradaMasiva(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'personal_ids' => 'required|array',
            'personal_ids.*' => 'integer|exists:personal,personal_id',
            'fecha' => 'nullable|date',
            'observaciones' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $datos = $validator->validated();
        $datos['usuario_registro_id'] = auth()->id();

        $resultados = $this->asistenciaService->registrarEntradaMasiva($datos);

        return response()->json([
            'success' => true,
            'message' => "Se registraron {$resultados['registrados']} entradas",
            'data' => $resultados
        ]);
    }

    /**
     * Obtener resumen de asistencia
     * GET /api/v1/asistencias/resumen
     */
    public function getResumenAsistencia(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            'personal_id' => 'nullable|integer|exists:personal,personal_id',
            'departamento_id' => 'nullable|integer'
        ]);

        $resumen = $this->asistenciaService->getResumen($validator->validated());

        return response()->json([
            'success' => true,
            'data' => $resumen,
            'periodo' => [
                'inicio' => $validator->validated()['fecha_inicio'] ?? null,
                'fin' => $validator->validated()['fecha_fin'] ?? null
            ]
        ]);
    }

    /**
     * Generar reporte de asistencia
     * POST /api/v1/reportes/asistencia
     */
    public function generarReporte(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'tipo' => 'required|in:DIARIO,SEMANAL,MENSUAL,PERSONAL',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date|after_or_equal:fecha_inicio',
            'personal_id' => 'nullable|integer|exists:personal,personal_id',
            'formato' => 'nullable|in:json,pdf,excel'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $params = $validator->validated();
        $params['usuario_id'] = auth()->id();

        $reporte = $this->reporteService->generarReporte($params['tipo'], $params);

        return response()->json([
            'success' => true,
            'message' => 'Reporte generado exitosamente',
            'data' => $reporte
        ]);
    }

    /**
     * Exportar asistencia a Excel
     * GET /api/v1/asistencias/exportar-excel
     */
    public function exportarExcel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            'personal_id' => 'nullable|integer|exists:personal,personal_id'
        ]);

        $filtros = $validator->validated();

        return $this->asistenciaService->exportarExcel($filtros);
    }

    /**
     * Exportar asistencia a PDF
     * GET /api/v1/asistencias/exportar-pdf
     */
    public function exportarPDF(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            'personal_id' => 'nullable|integer|exists:personal,personal_id'
        ]);

        $filtros = $validator->validated();

        return $this->asistenciaService->exportarPDF($filtros);
    }

    /**
     * Obtener estadísticas rápidas para dashboard
     * GET /api/v1/asistencias/estadisticas
     */
    public function getEstadisticas(): JsonResponse
    {
        $estadisticas = $this->asistenciaService->getEstadisticasRapidas();

        return response()->json([
            'success' => true,
            'data' => $estadisticas
        ]);
    }

    /**
 * Obtener asistencias individuales
 * GET /api/v1/asistencias
 */
public function getAsistencias(Request $request): JsonResponse
{
    $validator = Validator::make($request->all(), [
        'fecha' => 'nullable|date',
        'fecha_inicio' => 'nullable|date',
        'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
        'personal_id' => 'nullable|integer|exists:personal,personal_id'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    // ✅ Asegurar que se cargan todas las relaciones necesarias
    $query = Asistencia::with([
        'personal',
        'personal.persona',
        'personal.cargo',
        'estadoAsistencia',
        'horario'
    ]);

    $filtros = $validator->validated();

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
        $query->where('personal_id', $filtros['personal_id']);
    }

    $asistencias = $query->orderBy('fecha', 'desc')
                         ->orderBy('hora_entrada', 'desc')
                         ->get();

    return response()->json([
        'success' => true,
        'data' => $asistencias,
        'meta' => [
            'total' => $asistencias->count(),
            'filtros_aplicados' => $filtros
        ]
    ]);
}
}
