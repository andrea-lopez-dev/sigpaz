<?php

namespace App\Http\Controllers;

use App\Interfaces\Repositories\PersonalRepositoryInterface;
use App\Interfaces\Repositories\PersonaRepositoryInterface;
use App\Interfaces\Repositories\CargoRepositoryInterface;
use App\Http\Requests\Personal\StorePersonalRequest;
use App\Http\Requests\Personal\UpdatePersonalRequest;
use App\Http\Resources\PersonalResource;
use App\Services\PersonalService;
use App\Models\Personal;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Facades\DB;

class PersonalController extends Controller
{
    public function __construct(
        private PersonalRepositoryInterface $personalRepository,
        private PersonaRepositoryInterface $personaRepository,
        private CargoRepositoryInterface $cargoRepository,
        private PersonalService $personalService
    ) {}

    /**
     * Listar personal con filtros
     */

public function index(Request $request): JsonResponse
{
    try {
        $perPage = $request->get('per_page', 15);
        $filters = $request->only(['activo', 'cargo_id', 'search', 'fecha_desde', 'fecha_hasta']);

        // ✅ CONVERTIR 'activo' a booleano si existe
        if (isset($filters['activo'])) {
            // Convertir string '1', 'true', 'on' a boolean true
            // Convertir string '0', 'false', 'off' a boolean false
            $filters['activo'] = filter_var($filters['activo'], FILTER_VALIDATE_BOOLEAN);

            // Log para depuración
            \Log::info('Filtro activo convertido:', [
                'original' => $request->get('activo'),
                'convertido' => $filters['activo']
            ]);
        }

        $personal = $this->personalRepository->paginate($perPage, $filters);

          \Log::info('Personal index - resultados:', [
            'total' => $personal->total(),
            'items_count' => $personal->count(),
            'items' => $personal->getCollection()->map(function($item) {
    return [
        'personal_id' => $item->personal_id,
        'activo' => $item->activo,
        'persona_nombres' => $item->persona->nombres ?? null
    ];
})
        ]);

        return response()->json([
            'success' => true,
            'data' => PersonalResource::collection($personal->items()),
            'meta' => [
                'current_page' => $personal->currentPage(),
                'last_page' => $personal->lastPage(),
                'per_page' => $personal->perPage(),
                'total' => $personal->total()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('Error listando personal:', ['error' => $e->getMessage()]);

        return response()->json([
            'success' => false,
            'message' => 'Error al listar personal'
        ], 500);
    }
}
    /**
     * Mostrar un registro de personal
     */
    public function show(int $id): JsonResponse
    {
        try {
            $personal = $this->personalRepository->findById($id);

            if (!$personal) {
                return response()->json([
                    'success' => false,
                    'message' => 'Personal no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => new PersonalResource($personal)
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener personal'
            ], 500);
        }
    }

    /**
     * Crear nuevo personal
     */
    public function store(StorePersonalRequest $request): JsonResponse
    {
        try {
             $existe = Personal::where('persona_id', $request->persona_id)->exists();

        if ($existe) {
            return response()->json([
                'success' => false,
                'message' => 'Esta persona ya tiene un registro de personal asociado',
                'errors' => [
                    'persona_id' => ['Ya existe un registro para esta persona']
                ]
            ], 422);
        }
            $personal = $this->personalService->crearPersonal($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Personal creado exitosamente',
                'data' => new PersonalResource($personal)
            ], 201);

        } catch (\Exception $e) {
            Log::error('Error creando personal:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Persona no encontrada' ? 404 : 422);
        }
    }

    /**
     * Actualizar personal
     */
    public function update(UpdatePersonalRequest $request, int $id): JsonResponse
    {
        try {
            $personal = $this->personalService->actualizarPersonal($id, $request->validated());

            return response()->json([
                'success' => true,
                'message' => 'Personal actualizado exitosamente',
                'data' => new PersonalResource($personal)
            ]);

        } catch (\Exception $e) {
            Log::error('Error actualizando personal:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getMessage() === 'Personal no encontrado' ? 404 : 422);
        }
    }

    /**
     * Eliminar personal
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            // Verificar si tiene usuario asociado
            $personal = $this->personalRepository->findById($id);

            if ($personal && $personal->usuario) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede eliminar personal que tiene un usuario asociado'
                ], 409);
            }

            $success = $this->personalRepository->delete($id);

            if (!$success) {
                return response()->json([
                    'success' => false,
                    'message' => 'Personal no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Personal eliminado exitosamente'
            ]);

        } catch (\Exception $e) {
            Log::error('Error eliminando personal:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar personal'
            ], 500);
        }
    }

    /**
 * Activar personal
 */
public function activar(int $id): JsonResponse
{
    try {
        \Log::info('🔧 Activando personal ID: ' . $id);

        // ✅ CORRECCIÓN: Usar DB::raw para PostgreSQL
        $updated = \DB::table('personal')
            ->where('personal_id', $id)
            ->update([
                'activo' => \DB::raw('true'),  // ✅ Usar DB::raw
                'fecha_actualizacion' => now(),
                'usuario_actualizacion_id' => auth()->id()
            ]);

        if (!$updated) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo activar el personal'
            ], 500);
        }

        $personal = $this->personalRepository->findById($id);

        \Log::info('✅ Personal activado:', [
            'id' => $id,
            'activo' => $personal->activo
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Personal activado exitosamente',
            'data' => new PersonalResource($personal)
        ]);

    } catch (\Exception $e) {
        \Log::error('❌ Error activando personal:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al activar personal: ' . $e->getMessage()
        ], 500);
    }
}
   /**
 * Desactivar personal
 */
public function desactivar(int $id): JsonResponse
{
    try {
        \Log::info('🔧 Desactivando personal ID: ' . $id);

        // ✅ CORRECCIÓN: Usar 'false' como string o usar DB::raw
        $updated = \DB::table('personal')
            ->where('personal_id', $id)
            ->update([
                'activo' => \DB::raw('false'),  // ✅ Usar DB::raw para PostgreSQL
                'fecha_actualizacion' => now(),
                'usuario_actualizacion_id' => auth()->id()
            ]);

        if (!$updated) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo desactivar el personal'
            ], 500);
        }

        // Obtener el personal actualizado
        $personal = $this->personalRepository->findById($id);

        \Log::info('✅ Personal desactivado:', [
            'id' => $id,
            'activo' => $personal->activo
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Personal desactivado exitosamente',
            'data' => new PersonalResource($personal)
        ]);

    } catch (\Exception $e) {
        \Log::error('❌ Error desactivando personal:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al desactivar personal: ' . $e->getMessage()
        ], 500);
    }
}
    // ========== MÉTODOS ESPECÍFICOS PARA SELECCIÓN DE PERSONAS ==========

    /**
     * Buscar personas disponibles para crear personal
     * GET /api/v1/personal/personas-disponibles
     */
    public function personasDisponibles(Request $request): JsonResponse
    {
        try {
            $searchTerm = $request->get('q', '');

            Log::info('🔍 Buscando personas disponibles para personal:', [
                'termino' => $searchTerm
            ]);

            $personas = $this->personalRepository->findPersonasDisponiblesParaPersonal($searchTerm);

            $resultados = $personas->map(function($persona) {
                return [
                    'persona_id' => $persona->persona_id,
                    'nombre_completo' => $persona->nombre_completo,
                    'nombres' => $persona->nombres,
                    'apellidos' => $persona->apellidos,
                    'numero_documento' => $persona->numero_documento,
                    'tipo_documento' => $persona->tipoDocumento?->nombre,
                    'foto_cifrada' => $persona->foto_cifrada
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $resultados,
                'total' => $resultados->count(),
                'message' => $resultados->count() > 0
                    ? 'Personas disponibles encontradas'
                    : 'No hay personas disponibles para personal'
            ]);

        } catch (\Exception $e) {
            Log::error('Error en personasDisponibles:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al buscar personas disponibles',
                'data' => []
            ], 500);
        }
    }

    /**
     * Verificar disponibilidad de una persona específica
     * GET /api/v1/personal/verificar-disponibilidad/{personaId}
     */
    public function verificarDisponibilidad(int $personaId): JsonResponse
    {
        try {
            $resultado = $this->personalService->verificarDisponibilidadPersona($personaId);

            return response()->json([
                'success' => true,
                'data' => $resultado
            ]);

        } catch (\Exception $e) {
            Log::error('Error verificando disponibilidad:', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Error al verificar disponibilidad'
            ], 500);
        }
    }

    /**
     * Búsqueda avanzada
     * GET /api/v1/personal/buscar
     */
public function buscar(Request $request): JsonResponse
{
    try {
        $params = $request->all();

        // ✅ CONVERTIR 'activo' a booleano si existe
        if (isset($params['activo'])) {
            $params['activo'] = filter_var($params['activo'], FILTER_VALIDATE_BOOLEAN);
        }

        $personal = $this->personalRepository->search($params);

        return response()->json([
            'success' => true,
            'data' => PersonalResource::collection($personal->items()),
            'meta' => [
                'current_page' => $personal->currentPage(),
                'last_page' => $personal->lastPage(),
                'per_page' => $personal->perPage(),
                'total' => $personal->total()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('Error en búsqueda avanzada:', ['error' => $e->getMessage()]);

        return response()->json([
            'success' => false,
            'message' => 'Error en la búsqueda'
        ], 500);
    }
}
/**
 * Obtener lista de personal activo
 * GET /api/v1/personal/activos
 */
public function getActivos(): JsonResponse
{
    try {
        Log::info('📋 PersonalController@getActivos - Iniciando');

        $personal = $this->personalRepository->getActivos();

        Log::info('✅ Personal activo encontrado:', [
            'total' => $personal->count()
        ]);

        return response()->json([
            'success' => true,
            'data' => PersonalResource::collection($personal),
            'meta' => [
                'total' => $personal->count()
            ]
        ]);

    } catch (\Exception $e) {
        Log::error('❌ Error obteniendo personal activo:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener personal activo: ' . $e->getMessage(),
            'data' => []
        ], 500);
    }
}

public function getPersonalDisponible()
{
    // Personal que NO tiene usuario asociado
    $personalDisponible = Personal::whereDoesntHave('usuario')
        ->with('persona')
        ->get();

    return response()->json([
        'success' => true,
        'data' => $personalDisponible
    ]);
}

/**
 * Reporte de estadísticas generales
 */
public function reporteEstadisticas(): JsonResponse
{
    try {
        $estadisticas = $this->personalService->getEstadisticas();

        return response()->json([
            'success' => true,
            'data' => $estadisticas
        ]);
    } catch (\Exception $e) {
        Log::error('Error en reporte estadísticas:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte'
        ], 500);
    }
}

/**
 * Reporte de personal activo/inactivo
 */
public function reporteActivos(): JsonResponse
{
    try {
        $activos = $this->personalRepository->getActivos()->count();
        $inactivos = $this->personalRepository->all()->count() - $activos;

        return response()->json([
            'success' => true,
            'data' => [
                ['tipo' => 'Activos', 'total' => $activos],
                ['tipo' => 'Inactivos', 'total' => $inactivos]
            ]
        ]);
    } catch (\Exception $e) {
        Log::error('Error en reporte activos:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte'
        ], 500);
    }
}

/**
 * Reporte de antigüedad
 */
public function reporteAntiguedad(): JsonResponse
{
    try {
        $rangos = [
            '0-1 año' => 0,
            '1-3 años' => 0,
            '3-5 años' => 0,
            '5-10 años' => 0,
            '10+ años' => 0
        ];

        $personal = $this->personalRepository->getActivos();

        foreach ($personal as $item) {
            if ($item->fecha_ingreso) {
                $antiguedad = $this->calcularAntiguedad($item->fecha_ingreso);

                if ($antiguedad < 1) $rangos['0-1 año']++;
                elseif ($antiguedad < 3) $rangos['1-3 años']++;
                elseif ($antiguedad < 5) $rangos['3-5 años']++;
                elseif ($antiguedad < 10) $rangos['5-10 años']++;
                else $rangos['10+ años']++;
            }
        }

        $reporte = collect($rangos)->map(fn($total, $rango) => ['rango' => $rango, 'total' => $total])->values();

        return response()->json([
            'success' => true,
            'data' => $reporte
        ]);
    } catch (\Exception $e) {
        Log::error('Error en reporte antigüedad:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte'
        ], 500);
    }
}

/**
 * Reporte de rotación
 */
public function reporteRotacion(): JsonResponse
{
    try {
        $anioActual = now()->year;

        $ingresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_creacion && $p->fecha_creacion->year == $anioActual)
            ->count();

        $egresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_egreso && $p->fecha_egreso->year == $anioActual)
            ->count();

        $total = $this->personalRepository->all()->count();
        $tasaRotacion = $total > 0 ? round(($egresos / $total) * 100, 2) : 0;

        return response()->json([
            'success' => true,
            'data' => [
                ['metrico' => 'Ingresos este año', 'valor' => $ingresos],
                ['metrico' => 'Egresos este año', 'valor' => $egresos],
                ['metrico' => 'Tasa de rotación', 'valor' => "{$tasaRotacion}%"]
            ]
        ]);
    } catch (\Exception $e) {
        Log::error('Error en reporte rotación:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte'
        ], 500);
    }
}

// ========== EXPORTAR A PDF ==========

/**
 * Exportar reporte de activos a PDF
 */
public function exportarReporteActivosPDF()
{
    try {
        $activos = $this->personalRepository->getActivos()->count();
        $inactivos = $this->personalRepository->all()->count() - $activos;

        $data = [
            'titulo' => 'Reporte de Personal Activo/Inactivo',
            'activos' => $activos,
            'inactivos' => $inactivos,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.personal_activos', $data);
        return $pdf->download('reporte_personal_activos.pdf');

    } catch (\Exception $e) {
        Log::error('Error exportando PDF activos:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

// ========== EXPORTAR A EXCEL ==========

/**
 * Exportar reporte de activos a Excel
 */
public function exportarReporteActivosExcel()
{
    try {
        $activos = $this->personalRepository->getActivos()->count();
        $inactivos = $this->personalRepository->all()->count() - $activos;

        $data = collect([
            ['Estado', 'Cantidad'],
            ['Activos', $activos],
            ['Inactivos', $inactivos]
        ]);

        return Excel::download(new class($data) implements FromCollection {
            private $data;
            public function __construct($data) { $this->data = $data; }
            public function collection() { return $this->data; }
        }, 'reporte_personal_activos.xlsx');

    } catch (\Exception $e) {
        Log::error('Error exportando Excel activos:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

// Método auxiliar
private function calcularAntiguedad($fechaIngreso)
{
    if (!$fechaIngreso) return 0;
    return $fechaIngreso->diffInYears(now());
}

/**
 * Generar contrato PDF para un empleado
 * GET /api/v1/personal/{id}/contrato-pdf
 */
public function generarContratoPDF(int $id)
{
    try {
        $personal = $this->personalRepository->findById($id);

        if (!$personal) {
            return response()->json([
                'success' => false,
                'message' => 'Personal no encontrado'
            ], 404);
        }

        // Cargar relaciones
        $personal->load(['persona.tipoDocumento', 'cargo']);

        $data = [
            'personal' => $personal,
            'persona' => $personal->persona,
            'cargo' => $personal->cargo,
            'fecha_contrato' => $personal->fecha_ingreso,
            'fecha_emision' => now()->format('d/m/Y H:i:s'),
            'numero_contrato' => 'CONT-' . str_pad($personal->personal_id, 6, '0', STR_PAD_LEFT),
            'empresa_nombre' => config('app.name', 'SIGPAZ'),
            'empresa_ruc' => 'J-12345678-9',
            'empresa_direccion' => 'Av. Principal #123, Ciudad',
        ];

        $pdf = Pdf::loadView('pdfs.contrato_personal', $data);
        $pdf->setPaper('A4', 'portrait');

        $nombreArchivo = "contrato_{$personal->persona->numero_documento}_{$data['numero_contrato']}.pdf";

        return $pdf->download($nombreArchivo);

    } catch (\Exception $e) {
        Log::error('Error generando contrato PDF:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'personal_id' => $id
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al generar contrato PDF: ' . $e->getMessage()
        ], 500);
    }
}
/**
 * Obtener estadísticas de personal
 * GET /api/v1/personal/estadisticas
 */
public function estadisticas(): JsonResponse
{
    try {
        // Asegurar que el método existe en PersonalService
        $estadisticas = $this->personalService->getEstadisticas();

        return response()->json([
            'success' => true,
            'data' => $estadisticas
        ]);
    } catch (\Exception $e) {
        Log::error('Error en estadisticas:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener estadísticas: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar estadísticas a Excel
 */
public function exportarReporteEstadisticasExcel()
{
    try {
        // ✅ NO usar consultas directas a Cargo aquí
        $estadisticas = $this->personalService->getEstadisticas();

        // Crear array simple, no usar consultas a la base de datos
        $data = [
            ['Métrica', 'Valor'],
            ['Total Personal', $estadisticas['total_personal'] ?? 0],
            ['Activos', $estadisticas['activos'] ?? 0],
            ['Inactivos', $estadisticas['inactivos'] ?? 0]
        ];

        // Agregar personal por cargo
        if (isset($estadisticas['por_cargo']) && !empty($estadisticas['por_cargo'])) {
            $data[] = ['', ''];
            $data[] = ['DETALLE POR CARGO', ''];
            foreach ($estadisticas['por_cargo'] as $cargo) {
                $data[] = [$cargo['nombre'] ?? 'Cargo', $cargo['total'] ?? 0];
            }
        }

        $collection = collect($data);

        return Excel::download(new class($collection) implements \Maatwebsite\Excel\Concerns\FromCollection {
            private $collection;
            public function __construct($collection) { $this->collection = $collection; }
            public function collection() { return $this->collection; }
        }, 'reporte_personal_estadisticas.xlsx');

    } catch (\Exception $e) {
        Log::error('Error exportando Excel estadísticas:', ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al exportar: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar estadísticas a PDF
 */
public function exportarReporteEstadisticasPDF()
{
    try {
        $estadisticas = $this->personalService->getEstadisticas();

        $data = [
            'estadisticas' => $estadisticas,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.personal_estadisticas', $data);
        return $pdf->download('reporte_personal_estadisticas.pdf');

    } catch (\Exception $e) {
        Log::error('Error exportando PDF estadísticas:', ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al exportar: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar reporte completo a PDF
 */
public function exportarReporteCompletoPDF()
{
    try {
        $estadisticas = $this->personalService->getEstadisticas();
        $activos = $this->personalRepository->getActivos()->count();
        $inactivos = $this->personalRepository->all()->count() - $activos;

        // ✅ CORREGIDO: Usar DB::raw('true') para PostgreSQL
        $cargos = \App\Models\Cargo::where('activo', DB::raw('true'))->get();
        $porCargo = [];
        foreach ($cargos as $cargo) {
            $porCargo[] = [
                'cargo' => $cargo->nombre,
                'total' => $this->personalRepository->getByCargo($cargo->cargo_id)->count()
            ];
        }

        $data = [
            'estadisticas' => $estadisticas,
            'activos' => $activos,
            'inactivos' => $inactivos,
            'por_cargo' => $porCargo,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        // ✅ Verificar que la vista existe
        if (!view()->exists('pdfs.personal_completo')) {
            // Crear vista simple si no existe
            $html = '<!DOCTYPE html><html><head><title>Reporte Completo</title></head><body>';
            $html .= '<h1>Reporte Completo de Personal</h1>';
            $html .= '<p>Total Personal: ' . ($estadisticas['total_personal'] ?? 0) . '</p>';
            $html .= '<p>Activos: ' . $activos . '</p>';
            $html .= '<p>Inactivos: ' . $inactivos . '</p>';
            $html .= '</body></html>';
            $pdf = Pdf::loadHTML($html);
        } else {
            $pdf = Pdf::loadView('pdfs.personal_completo', $data);
        }

        return $pdf->download('reporte_completo_personal.pdf');

    } catch (\Exception $e) {
        Log::error('Error exportando reporte completo PDF:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al exportar reporte completo: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar reporte de antigüedad a PDF
 */
public function exportarReporteAntiguedadPDF()
{
    try {
        $rangos = [
            '0-1 año' => 0,
            '1-3 años' => 0,
            '3-5 años' => 0,
            '5-10 años' => 0,
            '10+ años' => 0
        ];

        $personal = $this->personalRepository->getActivos();

        foreach ($personal as $item) {
            if ($item->fecha_ingreso) {
                $antiguedad = $this->calcularAntiguedad($item->fecha_ingreso);
                if ($antiguedad < 1) $rangos['0-1 año']++;
                elseif ($antiguedad < 3) $rangos['1-3 años']++;
                elseif ($antiguedad < 5) $rangos['3-5 años']++;
                elseif ($antiguedad < 10) $rangos['5-10 años']++;
                else $rangos['10+ años']++;
            }
        }

        $reporte = collect($rangos)->map(fn($total, $rango) => ['rango' => $rango, 'total' => $total])->values();

        $data = [
            'reporte' => $reporte,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.personal_antiguedad', $data);
        return $pdf->download('reporte_antiguedad.pdf');

    } catch (\Exception $e) {
        Log::error('Error exportando PDF antigüedad:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte de antigüedad a Excel
 */
public function exportarReporteAntiguedadExcel()
{
    try {
        $rangos = [
            '0-1 año' => 0,
            '1-3 años' => 0,
            '3-5 años' => 0,
            '5-10 años' => 0,
            '10+ años' => 0
        ];

        $personal = $this->personalRepository->getActivos();

        foreach ($personal as $item) {
            if ($item->fecha_ingreso) {
                $antiguedad = $this->calcularAntiguedad($item->fecha_ingreso);
                if ($antiguedad < 1) $rangos['0-1 año']++;
                elseif ($antiguedad < 3) $rangos['1-3 años']++;
                elseif ($antiguedad < 5) $rangos['3-5 años']++;
                elseif ($antiguedad < 10) $rangos['5-10 años']++;
                else $rangos['10+ años']++;
            }
        }

        $data = collect([
            ['Rango de Antigüedad', 'Cantidad']
        ]);

        foreach ($rangos as $rango => $total) {
            $data->push([$rango, $total]);
        }

        return Excel::download(new class($data) implements FromCollection {
            private $data;
            public function __construct($data) { $this->data = $data; }
            public function collection() { return $this->data; }
        }, 'reporte_antiguedad.xlsx');

    } catch (\Exception $e) {
        Log::error('Error exportando Excel antigüedad:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte de rotación a PDF
 */
public function exportarReporteRotacionPDF()
{
    try {
        $anioActual = now()->year;

        $ingresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_creacion && $p->fecha_creacion->year == $anioActual)
            ->count();

        $egresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_egreso && $p->fecha_egreso->year == $anioActual)
            ->count();

        $total = $this->personalRepository->all()->count();
        $tasaRotacion = $total > 0 ? round(($egresos / $total) * 100, 2) : 0;

        $data = [
            'ingresos' => $ingresos,
            'egresos' => $egresos,
            'tasaRotacion' => $tasaRotacion,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.personal_rotacion', $data);
        return $pdf->download('reporte_rotacion.pdf');

    } catch (\Exception $e) {
        Log::error('Error exportando PDF rotación:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar listado completo de personal a Excel
 * GET /api/v1/personal/exportar-excel
 */
public function exportarExcel()
{
    try {
        $personal = $this->personalRepository->all();

        $data = collect([
            ['ID', 'Persona', 'Cargo', 'Fecha Ingreso', 'Fecha Egreso', 'Estado']
        ]);

        foreach ($personal as $item) {
            $data->push([
                $item->personal_id,
                $item->persona->nombre_completo ?? 'N/A',
                $item->cargo->nombre ?? 'N/A',
                $item->fecha_ingreso,
                $item->fecha_egreso ?? 'Actual',
                $item->activo ? 'Activo' : 'Inactivo'
            ]);
        }

        return Excel::download(new class($data) implements \Maatwebsite\Excel\Concerns\FromCollection {
            private $data;
            public function __construct($data) { $this->data = $data; }
            public function collection() { return $this->data; }
        }, 'personal_' . date('Y-m-d') . '.xlsx');

    } catch (\Exception $e) {
        Log::error('Error exportando Excel personal:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => 'Error al exportar: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar reporte de rotación a Excel
 */
public function exportarReporteRotacionExcel()
{
    try {
        $anioActual = now()->year;

        $ingresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_creacion && $p->fecha_creacion->year == $anioActual)
            ->count();

        $egresos = $this->personalRepository->all()
            ->filter(fn($p) => $p->fecha_egreso && $p->fecha_egreso->year == $anioActual)
            ->count();

        $total = $this->personalRepository->all()->count();
        $tasaRotacion = $total > 0 ? round(($egresos / $total) * 100, 2) : 0;

        $data = collect([
            ['Métrica', 'Valor'],
            ['Ingresos este año', $ingresos],
            ['Egresos este año', $egresos],
            ['Tasa de rotación', "{$tasaRotacion}%"]
        ]);

        return Excel::download(new class($data) implements FromCollection {
            private $data;
            public function __construct($data) { $this->data = $data; }
            public function collection() { return $this->data; }
        }, 'reporte_rotacion.xlsx');

    } catch (\Exception $e) {
        Log::error('Error exportando Excel rotación:', ['error' => $e->getMessage()]);
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}
}
