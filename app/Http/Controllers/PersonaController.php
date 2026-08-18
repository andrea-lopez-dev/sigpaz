<?php


namespace App\Http\Controllers;

use App\DTOs\Persona\CrearPersonaDTO;
use App\Interfaces\Repositories\PersonaRepositoryInterface;
use App\Http\Requests\Persona\StorePersonaRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\Persona\PersonaResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PersonasExport;
use App\Exports\ReporteEdadExport;
use App\Exports\ReporteGeneroExport;
use App\Exports\ReporteDepartamentoExport;
use App\Exports\ReporteDiscapacidadExport;

class PersonaController extends Controller
{
    public function __construct(
        private PersonaRepositoryInterface $personaRepository
    ) {}


public function index(Request $request): JsonResponse
{
    $perPage = $request->get('per_page', 15);

    // ✅ OBTENER TODOS LOS FILTROS DEL REQUEST
    $filtros = [
        'numero_documento' => $request->get('numero_documento'),
        'nombres' => $request->get('nombres'),
        'apellidos' => $request->get('apellidos'),
        'departamento' => $request->get('departamento'),
        'discapacidad' => $request->get('discapacidad')
    ];

    // ✅ FILTRAR VALORES VACÍOS
    $filtros = array_filter($filtros, function($value) {
        return $value !== null && $value !== '';
    });

    \Log::info('🔍 FILTROS RECIBIDOS EN CONTROLADOR:', $filtros);

    // Aquí necesitas modificar el repositorio para usar LIKE
    $personas = $this->personaRepository->paginate($perPage, $filtros);

    return response()->json([
        'data' => PersonaResource::collection($personas->items()),
        'meta' => [
            'total' => $personas->total(),
            'per_page' => $personas->perPage(),
            'current_page' => $personas->currentPage(),
            'last_page' => $personas->lastPage()
        ]
    ], 200);
}
    public function show(int $id): JsonResponse
    {
        $persona = $this->personaRepository->findById($id);

        if (!$persona) {
            return response()->json([
                'message' => 'Persona no encontrada'
            ], 404);
        }

        return response()->json([
            'data' => new PersonaResource($persona)  // ✅ Usar Resource
        ], 200);
    }

    public function store(StorePersonaRequest $request): JsonResponse
    {
        try {
            // Verificar si ya existe la persona
            if ($this->personaRepository->verificarDuplicado($request->validated())) {
                return response()->json([
                    'message' => 'Ya existe una persona con estos datos',
                    'errors' => [
                        'numero_documento' => ['Ya existe una persona con este documento']
                    ]
                ], 422);
            }

            // Crear DTO desde el request validado
            $dto = CrearPersonaDTO::fromRequest($request);

            // Crear la persona usando el DTO
            $persona = $this->personaRepository->create($dto->toArray());

            return response()->json([
                'message' => 'Persona creada exitosamente',
                'data' => new PersonaResource($persona)  // ✅ Usar Resource
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al crear persona: ' . $e->getMessage()
            ], 500);
        }
    }

 public function update(Request $request, int $id): JsonResponse
{
    $request->validate([
        'nombres' => ['sometimes', 'string', 'max:100'],
        'apellidos' => ['sometimes', 'string', 'max:100'],
        'fecha_nacimiento' => ['sometimes', 'date', 'before:today'],
        'genero_id' => ['sometimes', 'integer', 'exists:genero,genero_id'],
        'nacionalidad' => ['sometimes', 'string', 'max:50'],
        'lugar_nacimiento' => ['sometimes', 'string', 'max:100'],
        'estado_civil_id' => ['sometimes', 'integer', 'exists:estadocivil,estado_civil_id'],
        'profesion_oficio' => ['sometimes', 'string', 'max:100'],
        'ocupacion_actual' => ['sometimes', 'string', 'max:100'],
        'tipo_documento_id'  => ['sometimes', 'integer', 'exists:tipodocumento,tipo_documento_id'],
        'municipio' => ['sometimes', 'string', 'max:100'],
        'departamento' => ['sometimes', 'string', 'max:100'],
        'codigo_postal' => ['sometimes', 'string', 'max:10'],
        'nombre_contacto_emergencia' => ['sometimes', 'string', 'max:200'],
        'parentesco_emergencia' => ['sometimes', 'string', 'max:50'],
        'tipo_vinculo_id' => ['sometimes', 'integer', 'exists:tipovinculo,tipo_vinculo_id'],
        'discapacidad' => ['sometimes', 'string'],
        'codigo_qr' => ['sometimes', 'string'],
        'observaciones' => ['sometimes', 'string']
    ]);

    try {
        $result = $this->personaRepository->update($id, $request->all());

        if ($result === false || $result === null) {
            return response()->json([
                'success' => false,
                'message' => 'Persona no encontrada'
            ], 404);
        }

        // ✅ OBTENER LA PERSONA ACTUALIZADA
        $personaActualizada = $this->personaRepository->findById($id);

        // ✅ DEVOLVER LOS DATOS CON EL RESOURCE
        return response()->json([
            'success' => true,
            'message' => 'Persona actualizada exitosamente',
            'data' => new PersonaResource($personaActualizada)  // 👈 IMPORTANTE
        ], 200);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al actualizar persona: ' . $e->getMessage()
        ], 500);
    }
}
 /**
 * Eliminar (físicamente) una persona con doble confirmación
 */
public function destroy(Request $request, $id): JsonResponse
{
    try {
        DB::beginTransaction();

        $persona = $this->personaRepository->findById($id);
        if (!$persona) {
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'Persona no encontrada'], 404);
        }

        $confirmacion = $request->query('confirmacion');
        if ($confirmacion !== 'ELIMINAR') {
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'Confirmación requerida'], 400);
        }

        // Ejecutar DELETE - el trigger insertará en historial automáticamente
        $this->personaRepository->delete($id);

        DB::commit();

        return response()->json([
            'success' => true,
            'message' => 'Persona eliminada físicamente'
        ]);

    } catch (\Exception $e) {
        DB::rollBack();
        Log::error('Error:', ['message' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'message' => $e->getMessage()
        ], 500);
    }
}


public function validarIdentidad(Request $request): JsonResponse
{
    try {
        $request->validate([
            'numero_documento' => 'required|string'
        ]);

        // Buscar persona
        $persona = \App\Models\Persona::where('numero_documento', $request->numero_documento)->first();

        if (!$persona) {
            return response()->json([
                'success' => false,
                'message' => 'Persona no encontrada'
            ], 404);
        }

        // Verificar si ya está activa
        if ($persona->activo) {
            return response()->json([
                'success' => false,
                'message' => 'Esta persona ya está validada'
            ], 422);
        }

        // 👈 SOLUCIÓN: Usar DB::raw para forzar el valor booleano
        $persona->activo = DB::raw('true');
        $persona->fecha_activacion = now();
        $persona->activado_por = auth()->id();
        $persona->save();

        return response()->json([
            'success' => true,
            'message' => 'Persona validada exitosamente',
            'data' => new PersonaResource($persona->fresh())
        ], 200);

    } catch (\Exception $e) {
        \Log::error('Error validando identidad:', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al validar identidad: ' . $e->getMessage()
        ], 500);
    }
}
public function guardarFirma(Request $request, int $id): JsonResponse
{
    // Validar que llegue algún campo con la firma
    $request->validate([
        'firma' => ['sometimes', 'string'],
        'firma_digital' => ['sometimes', 'string'],
        'firmaBase64' => ['sometimes', 'string'],
    ]);

    try {
        // Obtener la firma de cualquier campo que llegue
        $firma = $request->firma ?? $request->firma_digital ?? $request->firmaBase64;

        if (!$firma) {
            return response()->json([
                'success' => false,
                'message' => 'No se recibió la firma'
            ], 422);
        }

        $success = $this->personaRepository->guardarFirma($id, $firma);

        if (!$success) {
            return response()->json([
                'success' => false,
                'message' => 'Persona no encontrada'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Firma guardada exitosamente'
        ], 200);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error al guardar firma: ' . $e->getMessage()
        ], 500);
    }
}

public function mostrarQr(string $codigo)
{
    try {
        // El código QR contiene un JSON con los datos
        $datos = json_decode(base64_decode($codigo), true);

        if (!$datos || !isset($datos['id'])) {
            return response()->json(['error' => 'QR inválido'], 400);
        }

        $persona = $this->personaRepository->findById($datos['id']);

        if (!$persona) {
            return response()->json(['error' => 'Persona no encontrada'], 404);
        }

        // ✅ Cargar relaciones necesarias para la vista
        $persona->load(['tipoDocumento', 'genero', 'estadoCivil']);

        // ✅ SIEMPRE devolver la vista HTML para el QR
        return view('qr.persona', [
            'persona' => $persona,
            'datos' => $datos
        ]);

    } catch (\Exception $e) {
        \Log::error('Error al procesar QR: ' . $e->getMessage());
        return response()->json(['error' => 'Error al procesar QR: ' . $e->getMessage()], 500);
    }
}

public function buscarPorNombres(string $termino): JsonResponse
{
    try {
        \Log::info('🔍 Búsqueda de personas por término:', ['termino' => $termino]);

        // Buscar en múltiples campos
         $personas = $this->personaRepository->buscarPorTermino($termino, true);

        \Log::info('✅ Resultados encontrados:', ['count' => $personas->count()]);

        return response()->json([
            'success' => true,
            'data' => $personas,
            'message' => 'Búsqueda completada'
        ], 200);

    } catch (\Exception $e) {
        \Log::error('❌ Error en búsqueda:', ['error' => $e->getMessage()]);
        return response()->json([
            'success' => false,
            'data' => [],
            'message' => 'Error en búsqueda'
        ], 500);
    }
}

 /**
     * Reporte por edad
     */
public function reporteEdad(): JsonResponse
{
    try {
        // Para PostgreSQL, calcular edad correctamente usando EXTRACT
        $personas = \App\Models\Persona::whereNotNull('fecha_nacimiento')->get();

        // Contar por rangos de edad
        $rangos = [
            '0-17' => 0,
            '18-30' => 0,
            '31-50' => 0,
            '51-65' => 0,
            '65+' => 0
        ];

        foreach ($personas as $persona) {
            $edad = $persona->fecha_nacimiento->age;

            if ($edad < 18) {
                $rangos['0-17']++;
            } elseif ($edad <= 30) {
                $rangos['18-30']++;
            } elseif ($edad <= 50) {
                $rangos['31-50']++;
            } elseif ($edad <= 65) {
                $rangos['51-65']++;
            } else {
                $rangos['65+']++;
            }
        }

        // Formatear respuesta
        $reporte = collect($rangos)->map(function($total, $rango) {
            return [
                'rango' => $rango,
                'total' => $total
            ];
        })->values();

        return response()->json([
            'success' => true,
            'data' => $reporte
        ]);

    } catch (\Exception $e) {
        \Log::error('Error en reporte edad: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte: ' . $e->getMessage()
        ], 500);
    }
}
    /**
     * Reporte por género
     */
    public function reporteGenero(): JsonResponse
    {
        try {
            $reporte = \App\Models\Persona::select('genero_id', DB::raw('COUNT(*) as total'))
                ->with('genero')
                ->groupBy('genero_id')
                ->get()
                ->map(function($item) {
                    return [
                        'genero' => $item->genero?->nombre ?? 'No especificado',
                        'total' => $item->total
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $reporte
            ]);

        } catch (\Exception $e) {
            \Log::error('Error en reporte género: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Reporte por departamento
     */
    public function reporteDepartamento(): JsonResponse
    {
        try {
            $reporte = \App\Models\Persona::select('departamento', DB::raw('COUNT(*) as total'))
                ->whereNotNull('departamento')
                ->where('departamento', '!=', '')
                ->groupBy('departamento')
                ->orderBy('total', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $reporte
            ]);

        } catch (\Exception $e) {
            \Log::error('Error en reporte departamento: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Reporte por discapacidad
     */
    public function reporteDiscapacidad(): JsonResponse
    {
        try {
            $conDiscapacidad = \App\Models\Persona::whereNotNull('discapacidad')
                ->where('discapacidad', '!=', '')
                ->where('discapacidad', '!=', 'NO')
                ->count();

            $sinDiscapacidad = \App\Models\Persona::count() - $conDiscapacidad;

            $reporte = [
                ['tipo' => 'Con discapacidad', 'total' => $conDiscapacidad],
                ['tipo' => 'Sin discapacidad', 'total' => $sinDiscapacidad]
            ];

            return response()->json([
                'success' => true,
                'data' => $reporte
            ]);

        } catch (\Exception $e) {
            \Log::error('Error en reporte discapacidad: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Exportar listado de personas a Excel
     */
    public function exportarExcel()
    {
        try {
            return Excel::download(new PersonasExport, 'personas_' . date('Y-m-d') . '.xlsx');
        } catch (\Exception $e) {
            \Log::error('Error exportando Excel: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al exportar Excel: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
 * Exportar reporte por edad a Excel
 */
public function exportarReporteEdadExcel()
{
    try {
        $personas = \App\Models\Persona::whereNotNull('fecha_nacimiento')->get();

        $rangos = [
            '0-17' => 0, '18-30' => 0, '31-50' => 0, '51-65' => 0, '65+' => 0
        ];

        foreach ($personas as $persona) {
            $edad = $persona->edad;
            if ($edad < 18) $rangos['0-17']++;
            elseif ($edad <= 30) $rangos['18-30']++;
            elseif ($edad <= 50) $rangos['31-50']++;
            elseif ($edad <= 65) $rangos['51-65']++;
            else $rangos['65+']++;
        }

        $reporte = collect($rangos)->map(fn($total, $rango) => ['rango' => $rango, 'total' => $total])->values();

        return Excel::download(new ReporteEdadExport($reporte), 'reporte_edad.xlsx');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por género a Excel
 */
public function exportarReporteGeneroExcel()
{
    try {
        $reporte = \App\Models\Persona::select('genero_id', \DB::raw('COUNT(*) as total'))
            ->with('genero')
            ->groupBy('genero_id')
            ->get()
            ->map(fn($item) => ['genero' => $item->genero?->nombre ?? 'No especificado', 'total' => $item->total]);

        return Excel::download(new ReporteGeneroExport($reporte), 'reporte_genero.xlsx');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por departamento a Excel
 */
public function exportarReporteDepartamentoExcel()
{
    try {
        $reporte = \App\Models\Persona::select('departamento', \DB::raw('COUNT(*) as total'))
            ->whereNotNull('departamento')
            ->where('departamento', '!=', '')
            ->groupBy('departamento')
            ->orderBy('total', 'desc')
            ->get()
            ->map(fn($item) => ['departamento' => $item->departamento, 'total' => $item->total]);

        return Excel::download(new ReporteDepartamentoExport($reporte), 'reporte_departamento.xlsx');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por discapacidad a Excel
 */
public function exportarReporteDiscapacidadExcel()
{
    try {
        $conDiscapacidad = \App\Models\Persona::whereNotNull('discapacidad')
            ->where('discapacidad', '!=', '')
            ->where('discapacidad', '!=', 'NO')
            ->count();

        $sinDiscapacidad = \App\Models\Persona::count() - $conDiscapacidad;

        $reporte = collect([
            ['tipo' => 'Con discapacidad', 'total' => $conDiscapacidad],
            ['tipo' => 'Sin discapacidad', 'total' => $sinDiscapacidad]
        ]);

        return Excel::download(new ReporteDiscapacidadExport($reporte), 'reporte_discapacidad.xlsx');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

    /**
     * Exportar persona a PDF
     */

    /**
 * Exportar reporte por edad a PDF
 */
public function exportarReporteEdadPDF()
{
    try {
        $personas = \App\Models\Persona::whereNotNull('fecha_nacimiento')->get();

        $rangos = [
            '0-17' => 0, '18-30' => 0, '31-50' => 0, '51-65' => 0, '65+' => 0
        ];

        foreach ($personas as $persona) {
            $edad = $persona->edad;
            if ($edad < 18) $rangos['0-17']++;
            elseif ($edad <= 30) $rangos['18-30']++;
            elseif ($edad <= 50) $rangos['31-50']++;
            elseif ($edad <= 65) $rangos['51-65']++;
            else $rangos['65+']++;
        }

        $reporte = collect($rangos)->map(fn($total, $rango) => ['rango' => $rango, 'total' => $total])->values();

        $data = [
            'reporte' => $reporte,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.reporte_edad', $data);
        return $pdf->download('reporte_edad.pdf');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por género a PDF
 */
public function exportarReporteGeneroPDF()
{
    try {
        $reporte = \App\Models\Persona::select('genero_id', \DB::raw('COUNT(*) as total'))
            ->with('genero')
            ->groupBy('genero_id')
            ->get()
            ->map(fn($item) => ['genero' => $item->genero?->nombre ?? 'No especificado', 'total' => $item->total]);

        $data = [
            'reporte' => $reporte,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.reporte_genero', $data);
        return $pdf->download('reporte_genero.pdf');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por departamento a PDF
 */
public function exportarReporteDepartamentoPDF()
{
    try {
        $reporte = \App\Models\Persona::select('departamento', \DB::raw('COUNT(*) as total'))
            ->whereNotNull('departamento')
            ->where('departamento', '!=', '')
            ->groupBy('departamento')
            ->orderBy('total', 'desc')
            ->get()
            ->map(fn($item) => ['departamento' => $item->departamento, 'total' => $item->total]);

        $data = [
            'reporte' => $reporte,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.reporte_departamento', $data);
        return $pdf->download('reporte_departamento.pdf');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

/**
 * Exportar reporte por discapacidad a PDF
 */
public function exportarReporteDiscapacidadPDF()
{
    try {
        $conDiscapacidad = \App\Models\Persona::whereNotNull('discapacidad')
            ->where('discapacidad', '!=', '')
            ->where('discapacidad', '!=', 'NO')
            ->count();

        $sinDiscapacidad = \App\Models\Persona::count() - $conDiscapacidad;

        $reporte = collect([
            ['tipo' => 'Con discapacidad', 'total' => $conDiscapacidad],
            ['tipo' => 'Sin discapacidad', 'total' => $sinDiscapacidad]
        ]);

        $data = [
            'reporte' => $reporte,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.reporte_discapacidad', $data);
        return $pdf->download('reporte_discapacidad.pdf');

    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
}

public function regenerarQR(int $id)
{
    try {
        $persona = $this->personaRepository->findById($id);

        if (!$persona) {
            return response()->json(['error' => 'Persona no encontrada'], 404);
        }

        // Datos para el QR
        $datos = [
            'id' => $persona->persona_id,
            'documento' => $persona->numero_documento,
            'nombres' => $persona->nombres,
            'apellidos' => $persona->apellidos,
            'timestamp' => now()->toISOString()
        ];

        // Codificar datos
        $datosCodificados = base64_encode(json_encode($datos));
        $url = url("/qr/persona/{$datosCodificados}");

        // Generar QR usando API externa
        $qrImageData = file_get_contents("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" . urlencode($url));

        if ($qrImageData) {
            $persona->codigo_qr = $qrImageData;
            $persona->save();

            return response()->json([
                'success' => true,
                'message' => 'QR regenerado exitosamente'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Error al regenerar QR'
        ], 500);

    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage()
        ], 500);
    }
}

public function exportarPDF(int $id)
{
    try {
        $persona = $this->personaRepository->findById($id);

          \Log::info('🔍 QR DEBUG:', [
            'qr_raw_type' => gettype($persona->getRawOriginal('codigo_qr')),
            'qr_raw' => is_resource($persona->getRawOriginal('codigo_qr')) ? 'resource' : substr($persona->getRawOriginal('codigo_qr') ?? '', 0, 200),
            'qr_accessor' => $persona->codigo_qr ? substr($persona->codigo_qr, 0, 100) : 'null',
            'qr_length' => strlen($persona->codigo_qr ?? '')
        ]);

        $persona->load(['tipoDocumento', 'genero', 'estadoCivil', 'tipoVinculo']);

        $data = [
            'persona' => $persona,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ];

        $pdf = Pdf::loadView('pdfs.persona', $data);
        $pdf->setPaper('A4', 'portrait');

        return $pdf->download("persona_{$persona->numero_documento}.pdf");

    } catch (\Exception $e) {
        \Log::error('Error exportando PDF: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al generar PDF: ' . $e->getMessage()
        ], 500);
    }
}

    /**
     * Generar ficha completa de persona
     */
    public function generarFichaCompleta(int $id)
    {
        try {
            $persona = $this->personaRepository->findById($id);

            if (!$persona) {
                return response()->json([
                    'success' => false,
                    'message' => 'Persona no encontrada'
                ], 404);
            }

            $pdf = Pdf::loadView('pdfs.ficha_persona', [
                'persona' => $persona,
                'fecha_exportacion' => now()->format('d/m/Y H:i:s')
            ]);

            return $pdf->download("ficha_persona_{$persona->numero_documento}.pdf");

        } catch (\Exception $e) {
            \Log::error('Error generando ficha: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar ficha: ' . $e->getMessage()
            ], 500);
        }
    }
}
