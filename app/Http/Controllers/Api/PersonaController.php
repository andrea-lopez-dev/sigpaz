<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Persona\StorePersonaRequest;
use App\Http\Requests\Persona\UpdatePersonaRequest;
use App\Http\Requests\Persona\FiltroPersonaRequest;
use App\Http\Resources\Persona\PersonaResource;
use App\Http\Resources\Persona\PersonaCollection;
use App\Services\PersonaService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use App\Services\Contracts\PersonaServiceInterface;
use App\Models\Persona;
use Barryvdh\DomPDF\Facade\Pdf;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PersonasExport;

class PersonaController extends Controller
{
    public function __construct(
        private PersonaServiceInterface $personaService
    ) {}

    /**
     * Listar personas con filtros y paginación
     */
  public function index(FiltroPersonaRequest $request): PersonaCollection
{
    try {
        $personas = $this->personaService->listarPersonas($request->validated());
        return new PersonaCollection($personas);
    } catch (\Exception $e) {
        \Log::error('Error en PersonaController@index: ' . $e->getMessage());
        // Retornar una colección vacía en lugar de JsonResponse
        return new PersonaCollection(collect([]));
    }
}

    /**
     * Crear nueva persona
     */
    public function store(StorePersonaRequest $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            \Log::info('📥 Creando persona - Datos recibidos:', $request->validated());

            $persona = $this->personaService->crearPersona(
                $request->validated()
            );

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Persona creada exitosamente',
                'data' => new PersonaResource($persona->load(['tipoDocumento', 'genero', 'estadoCivil', 'tipoVinculo']))
            ], 201);

        } catch (ValidationException $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('❌ Error al crear persona: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Error al crear la persona',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Obtener una persona por ID
     */
    public function show(int $id): JsonResponse
    {
        try {
            $persona = $this->personaService->obtenerPersona($id);

            if (!$persona) {
                return response()->json([
                    'success' => false,
                    'message' => 'Persona no encontrada'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => new PersonaResource($persona->load(['tipoDocumento', 'genero', 'estadoCivil', 'tipoVinculo']))
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al obtener persona: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener la persona',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Actualizar una persona
     */
    public function update(UpdatePersonaRequest $request, int $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            \Log::info('📥 Actualizando persona - ID: ' . $id, $request->validated());

            $persona = $this->personaService->obtenerPersona($id);

            if (!$persona) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Persona no encontrada'
                ], 404);
            }

            $personaActualizada = $this->personaService->actualizarPersona(
                $id,
                $request->validated()
            );

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Persona actualizada exitosamente',
                'data' => new PersonaResource($personaActualizada->load(['tipoDocumento', 'genero', 'estadoCivil', 'tipoVinculo']))
            ]);

        } catch (ValidationException $e) {
            DB::rollBack();
            \Log::error('❌ Error de validación:', $e->errors());
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('❌ Error al actualizar persona: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar la persona',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Eliminar una persona (soft delete)
     */
    public function destroy(int $id): JsonResponse
    {
        DB::beginTransaction();

        try {
            $persona = $this->personaService->obtenerPersona($id);

            if (!$persona) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'Persona no encontrada'
                ], 404);
            }

            // Verificar si puede eliminarse
            if (!$this->personaService->puedeEliminar($id)) {
                DB::rollBack();
                return response()->json([
                    'success' => false,
                    'message' => 'No se puede eliminar la persona porque tiene registros asociados'
                ], 400);
            }

            $resultado = $this->personaService->eliminarPersona($id);

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Persona eliminada exitosamente'
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('❌ Error al eliminar persona: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 400);
        }
    }

    /**
     * Validar identidad de una persona
     */
    public function validarIdentidad(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'numero_documento' => 'required|string|max:20'
            ]);

            $valido = $this->personaService->validarIdentidad($request->numero_documento);

            return response()->json([
                'success' => true,
                'valido' => $valido,
                'message' => $valido
                    ? 'Identidad válida'
                    : 'Identidad no válida'
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            \Log::error('❌ Error al validar identidad: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al validar identidad',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Buscar personas por término
     */
    public function buscar(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'termino' => 'required|string|min:2'
            ]);

            $personas = $this->personaService->buscarPersonas($request->termino);

            return response()->json([
                'success' => true,
                'data' => PersonaResource::collection($personas),
                'total' => $personas->count()
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            \Log::error('❌ Error en búsqueda: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error en la búsqueda',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * REPORTE: Distribución por departamento
     */
    public function reporteDepartamento(): JsonResponse
    {
        try {
            $reporte = $this->personaService->reportePorDepartamento();

            return response()->json([
                'success' => true,
                'data' => $reporte,
                'message' => 'Reporte por departamento generado exitosamente'
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al generar reporte por departamento: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte por departamento',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * REPORTE: Personas con discapacidad
     */
    public function reporteDiscapacidad(): JsonResponse
    {
        try {
            $reporte = $this->personaService->reporteDiscapacidad();

            return response()->json([
                'success' => true,
                'data' => $reporte,
                'message' => 'Reporte por discapacidad generado exitosamente'
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al generar reporte por discapacidad: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte por discapacidad',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * REPORTE: Distribución por tipo de documento
     */
    public function reporteTipoDocumento(): JsonResponse
    {
        try {
            $reporte = $this->personaService->reportePorTipoDocumento();

            return response()->json([
                'success' => true,
                'data' => $reporte,
                'message' => 'Reporte por tipo de documento generado exitosamente'
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al generar reporte por tipo de documento: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte por tipo de documento',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * REPORTE: Distribución por estado civil
     */
    public function reporteEstadoCivil(): JsonResponse
    {
        try {
            $reporte = $this->personaService->reportePorEstadoCivil();

            return response()->json([
                'success' => true,
                'data' => $reporte,
                'message' => 'Reporte por estado civil generado exitosamente'
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al generar reporte por estado civil: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte por estado civil',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * REPORTE COMPLETO: Todas las estadísticas
     */
    public function reporteCompleto(): JsonResponse
    {
        try {
            $reporte = $this->personaService->reporteCompleto();

            return response()->json([
                'success' => true,
                'data' => $reporte,
                'message' => 'Reporte completo generado exitosamente'
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al generar reporte completo: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar reporte completo',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Estadísticas generales
     */
    public function estadisticas(): JsonResponse
    {
        try {
            $estadisticas = [
                'total_personas' => Persona::count(),
                'personas_por_genero' => $this->personaService->reportePorGenero(),
                'personas_por_edad' => $this->personaService->reportePorEdad(),
                'personas_con_discapacidad' => Persona::whereNotNull('discapacidad')
                    ->where('discapacidad', '!=', '')
                    ->count(),
                'personas_por_departamento' => $this->personaService->reportePorDepartamento(),
            ];

            return response()->json([
                'success' => true,
                'data' => $estadisticas
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al obtener estadísticas: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener estadísticas',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Guardar firma digital
     */
    public function guardarFirma(Request $request, $id = null)
    {
        try {
            $request->validate([
                'firma_digital' => 'required|string',
                'persona_id' => $id ? 'nullable' : 'required|exists:persona,persona_id'
            ]);

            $personaId = $id ?: $request->persona_id;
            $persona = Persona::findOrFail($personaId);

            // Actualizar firma
            $persona->firma_digital = base64_decode(
                preg_replace('#^data:image/\w+;base64,#i', '', $request->firma_digital)
            );
            $persona->save();

            return response()->json([
                'success' => true,
                'message' => 'Firma guardada exitosamente',
                'data' => [
                    'persona_id' => $persona->persona_id,
                    'firma_guardada' => true
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al guardar firma: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al guardar la firma',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Obtener firma digital
     */
    public function obtenerFirma(int $id): JsonResponse
    {
        try {
            $persona = Persona::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => [
                    'persona_id' => $persona->persona_id,
                    'firma_digital' => $persona->firma_digital ? base64_encode($persona->firma_digital) : null
                ]
            ]);

        } catch (\Exception $e) {
            \Log::error('❌ Error al obtener firma: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener la firma',
                'error' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
 * Exportar persona a PDF
 */
public function exportarPDF(int $id)
{
    try {
        $persona = $this->personaService->obtenerPersonaConRelaciones($id);

        if (!$persona) {
            return response()->json([
                'success' => false,
                'message' => 'Persona no encontrada'
            ], 404);
        }

        $pdf = Pdf::loadView('pdfs.persona', [
            'persona' => $persona,
            'fecha_exportacion' => now()->format('d/m/Y H:i:s')
        ]);

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
 * Generar ficha completa de persona (vista bonita)
 */
public function generarFichaCompleta(int $id)
{
    try {
        $persona = $this->personaService->obtenerPersonaConRelaciones($id);

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
 * Reporte por edad
 */
public function reporteEdad(): JsonResponse
{
    try {
        $reporte = Persona::select(
            DB::raw("CASE
                WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) < 18 THEN '0-17'
                WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 18 AND 30 THEN '18-30'
                WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 31 AND 50 THEN '31-50'
                WHEN EXTRACT(YEAR FROM age(fecha_nacimiento)) BETWEEN 51 AND 65 THEN '51-65'
                ELSE '65+'
            END as rango_edad"),
            DB::raw('COUNT(*) as total')
        )
        ->whereNotNull('fecha_nacimiento')
        ->groupBy('rango_edad')
        ->orderBy(DB::raw("
            CASE
                WHEN rango_edad = '0-17' THEN 1
                WHEN rango_edad = '18-30' THEN 2
                WHEN rango_edad = '31-50' THEN 3
                WHEN rango_edad = '51-65' THEN 4
                ELSE 5
            END
        "))
        ->get();

        return response()->json([
            'success' => true,
            'data' => $reporte
        ]);

    } catch (\Exception $e) {
        \Log::error('Error en reporte edad: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al generar reporte'
        ], 500);
    }
}

/**
 * Reporte por género
 */
public function reporteGenero(): JsonResponse
{
    try {
        $reporte = Persona::select('genero_id', DB::raw('COUNT(*) as total'))
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
            'message' => 'Error al generar reporte'
        ], 500);
    }
}
}
