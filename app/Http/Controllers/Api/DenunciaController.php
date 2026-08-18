<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Contracts\DenunciaServiceInterface;
use App\DTOs\Denuncia\CrearDenunciaDTO;
use App\DTOs\Denuncia\ActualizarDenunciaDTO;
use App\Http\Requests\Denuncia\StoreDenunciaRequest;
use App\Http\Requests\Denuncia\UpdateDenunciaRequest;
use App\Http\Requests\Denuncia\CambiarEstadoRequest;
use App\Http\Resources\Denuncia\DenunciaResource;
use App\Exceptions\DenunciaNoEncontradaException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\Contracts\HistorialServiceInterface;
use App\Services\HistorialService;
use App\Http\Resources\Historial\HistorialResource;
use Illuminate\Support\Facades\Log;
use Exception;
use App\Models\Involucrado;
use App\Models\Denuncia;
use Illuminate\Support\Facades\DB;
use App\Models\Evidencia;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;

class DenunciaController extends Controller
{
    public function __construct(
        private readonly DenunciaServiceInterface $denunciaService,
         private readonly HistorialServiceInterface $historialService
    ) {}

    /**
     * Listar denuncias con filtros
     */
public function index(Request $request): JsonResponse
{
    try {
        $filtros = $request->validate([
            'codigo_externo' => 'nullable|string|max:50',
            'numero_expediente' => 'nullable|string|max:50',
            'estado_denuncia_id' => 'nullable|integer',
            'tipo_conflicto_id' => 'nullable|integer',
            'persona_id' => 'nullable|integer',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            'search' => 'nullable|string|min:2',
            'sort_by' => 'nullable|in:fecha_ingreso,codigo_externo,estado_denuncia_id',
            'sort_order' => 'nullable|in:asc,desc'
        ]);

        $perPage = $request->get('per_page', 15);
        $result = $this->denunciaService->listar($filtros, $perPage);

        // ✅ Agregar evidencia_urls a cada denuncia
        $items = $result->items();
        $itemsConUrls = [];

        foreach ($items as $denuncia) {
            $denunciaArray = $denuncia->toArray();
            $denunciaId = $denunciaArray['denuncia_id'] ?? $denunciaArray['id'] ?? null;

            if ($denunciaId) {
                $denunciaArray['evidencia_urls'] = $this->getEvidenciaUrlsPorId($denunciaId);
            } else {
                $denunciaArray['evidencia_urls'] = [
                    'documentos' => [],
                    'fotos' => [],
                    'videos' => [],
                    'audios' => []
                ];
            }

            $itemsConUrls[] = $denunciaArray;
        }

        return response()->json([
            'success' => true,
            'data' => $itemsConUrls,
            'pagination' => [
                'current_page' => $result->currentPage(),
                'last_page' => $result->lastPage(),
                'per_page' => $result->perPage(),
                'total' => $result->total(),
                'from' => $result->firstItem(),
                'to' => $result->lastItem()
            ]
        ]);

    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Error de validación',
            'errors' => $e->errors()
        ], 422);
    } catch (\Exception $e) {
        \Log::error('❌ Error al listar denuncias:', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al obtener denuncias: ' . $e->getMessage()
        ], 500);
    }
}


/**
 * Ver evidencia - Ruta PÚBLICA
 */
public function verEvidencia(int $id)
{
    try {
        \Log::info('🔍 Intentando acceder a evidencia pública:', ['id' => $id]);

        $evidencia = Evidencia::find($id);

        if (!$evidencia) {
            \Log::warning('❌ Evidencia no encontrada:', ['id' => $id]);
            return response()->json([
                'success' => false,
                'message' => 'Evidencia no encontrada'
            ], 404);
        }

        $path = storage_path("app/public/{$evidencia->ruta}");

        \Log::info('📁 Ruta del archivo:', [
            'path' => $path,
            'exists' => file_exists($path),
            'size' => file_exists($path) ? filesize($path) : 0
        ]);

        if (!file_exists($path)) {
            return response()->json([
                'success' => false,
                'message' => 'Archivo no encontrado en el servidor'
            ], 404);
        }

        // Detectar tipo de archivo
        $mimeType = $evidencia->mime_type;
        $isImage = strpos($mimeType, 'image/') === 0;
        $isPdf = $mimeType === 'application/pdf';

        // Configurar headers CORS para permitir acceso desde el frontend
        $headers = [
            'Content-Type' => $mimeType,
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'GET, OPTIONS',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization'
        ];

        if ($isImage || $isPdf) {
            // Mostrar inline
            $headers['Content-Disposition'] = 'inline; filename="' . urlencode($evidencia->nombre) . '"';
            $headers['Cache-Control'] = 'public, max-age=86400'; // Cache por 24 horas
        } else {
            // Forzar descarga
            $headers['Content-Disposition'] = 'attachment; filename="' . urlencode($evidencia->nombre) . '"';
        }

        return response()->file($path, $headers);

    } catch (\Exception $e) {
        \Log::error('❌ Error al cargar evidencia pública:', [
            'id' => $id,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'success' => false,
            'message' => 'Error al cargar el archivo: ' . $e->getMessage()
        ], 500);
    }
}

private function getEvidenciaUrlsPorId(int $denunciaId): array
{
    $urls = [
        'documentos' => [],
        'fotos' => [],
        'videos' => [],
        'audios' => []
    ];

    $evidencias = Evidencia::where('denuncia_id', $denunciaId)->get();

    foreach ($evidencias as $evidencia) {
        // ✅ FORZAR USO DE API
        $url = url("api/v1/evidencia/{$evidencia->id}");

        // LOG PARA VERIFICAR
        \Log::info('🔍 URL generada para evidencia:', [
            'id' => $evidencia->id,
            'url' => $url,
            'nombre' => $evidencia->nombre
        ]);

        $item = [
            'id' => $evidencia->id,
            'name' => $evidencia->nombre,
            'url' => $url,
            'size' => $evidencia->tamano,
            'size_formatted' => $this->formatBytes($evidencia->tamano),
            'type' => $evidencia->mime_type,
            'icono' => $this->getIconoPorExtension($evidencia->nombre)
        ];

        $key = $evidencia->tipo . 's';
        if (isset($urls[$key])) {
            $urls[$key][] = $item;
        }
    }

    return $urls;
}
private function formatBytes(int $bytes): string
{
    if ($bytes === 0) return '0 Bytes';
    $k = 1024;
    $sizes = ['Bytes', 'KB', 'MB', 'GB'];
    $i = floor(log($bytes) / log($k));
    return round($bytes / pow($k, $i), 2) . ' ' . $sizes[$i];
}

private function getIconoPorExtension(string $nombre): string
{
    $extension = strtolower(pathinfo($nombre, PATHINFO_EXTENSION));

    if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif', 'webp'])) return '🖼️';
    if (in_array($extension, ['pdf'])) return '📑';
    if (in_array($extension, ['doc', 'docx'])) return '📄';
    if (in_array($extension, ['xls', 'xlsx'])) return '📊';
    if (in_array($extension, ['mp4', 'avi', 'mov', 'mkv'])) return '🎬';
    if (in_array($extension, ['mp3', 'wav', 'ogg'])) return '🎵';
    return '📎';
}

public function store(StoreDenunciaRequest $request): JsonResponse
{
    $usuarioId = auth()->id();
    if ($usuarioId) {
        DB::statement("SET app.usuario_id = ?", [$usuarioId]);
    }

    try {
        // Validar código externo único
        if ($request->has('codigo_externo') && !empty($request->codigo_externo)) {
            $existe = Denuncia::where('codigo_externo', $request->codigo_externo)->exists();
            if ($existe) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error de validación',
                    'errors' => ['codigo_externo' => ['El código externo ya existe en el sistema']]
                ], 422);
            }
        }

        $dto = CrearDenunciaDTO::fromRequest($request);
        $denuncia = $this->denunciaService->crear($dto);

        // Obtener el ID de la denuncia creada
        $denunciaId = $denuncia->denuncia_id ?? $denuncia->id;

        // Procesar archivos de evidencia
        $this->procesarArchivosDenuncia($request, $denunciaId);

        // Obtener el modelo Eloquent para cargar evidencias
        $denunciaModel = Denuncia::with('evidencias')->find($denunciaId);

        $denunciaArray = $denunciaModel ? $denunciaModel->toArray() : $denuncia->toArray();
        $denunciaArray['evidencia_urls'] = $this->getEvidenciaUrls($denunciaModel ?? $denuncia);

        return response()->json([
            'success' => true,
            'message' => 'Denuncia creada exitosamente',
            'data' => $denunciaArray
        ], 201);

    } catch (\Exception $e) {
        Log::error('Error al crear denuncia: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al crear la denuncia: ' . $e->getMessage()
        ], 500);
    }
}

private function getEvidenciaUrls($denuncia): array
{
    $urls = [
        'documentos' => [],
        'fotos' => [],
        'videos' => [],
        'audios' => []
    ];

    if ($denuncia instanceof Denuncia) {
        $evidencias = $denuncia->evidencias;
    } else {
        $denunciaId = $denuncia->denuncia_id ?? $denuncia['denuncia_id'] ?? null;
        if ($denunciaId) {
            $evidencias = Evidencia::where('denuncia_id', $denunciaId)->get();
        } else {
            $evidencias = collect();
        }
    }

    foreach ($evidencias as $evidencia) {
        // ✅ CORREGIDO: Usar la ruta API en lugar de asset()
        $url = route('api.evidencia.ver', ['id' => $evidencia->id]);
        // O si prefieres la URL directa:
        // $url = url("/api/v1/evidencia/{$evidencia->id}");

        // Log para depuración
        \Log::info('📎 URL de evidencia (API):', [
            'id' => $evidencia->id,
            'url' => $url,
            'nombre' => $evidencia->nombre
        ]);

        $item = [
            'id' => $evidencia->id,
            'name' => $evidencia->nombre,
            'url' => $url,  // ✅ Ahora usa API endpoint
            'size' => $evidencia->tamano,
            'size_formatted' => $this->formatBytes($evidencia->tamano),
            'type' => $evidencia->mime_type,
            'icono' => $this->getIconoPorExtension($evidencia->nombre)
        ];

        $key = $evidencia->tipo . 's';
        if (isset($urls[$key])) {
            $urls[$key][] = $item;
        }
    }

    return $urls;
}


/**
 * Mostrar vista QR de denuncia
 */
public function mostrarQr(string $codigo)
{
    try {
        // Decodificar el código QR
        $datos = json_decode(base64_decode($codigo), true);

        if (!$datos || !isset($datos['id'])) {
            return response()->json(['error' => 'QR inválido'], 400);
        }

        // Obtener la denuncia con todas las relaciones
        $denuncia = Denuncia::with([
            'persona',
            'tipoConflicto',
            'estadoDenuncia',
            'involucrados.persona'
        ])->find($datos['id']);

        if (!$denuncia) {
            return response()->json(['error' => 'Denuncia no encontrada'], 404);
        }

        // Calcular días transcurridos
        $denuncia->dias_transcurridos = $denuncia->fecha_ingreso->diffInDays(now());

        // Asegurar que evidencia sea un array
        if (is_string($denuncia->evidencia)) {
            $denuncia->evidencia = json_decode($denuncia->evidencia, true) ?: [];
        }

        // Retornar la vista mejorada
        return view('qr.denuncia', compact('denuncia', 'datos'));

    } catch (\Exception $e) {
        \Log::error('Error al procesar QR de denuncia: ' . $e->getMessage());
        return response()->json(['error' => 'Error al procesar QR: ' . $e->getMessage()], 500);
    }
}
/**
 * Procesar archivos de evidencia
 */
private function procesarArchivosDenuncia(Request $request, int $denunciaId): void
{
    $tipos = ['documentos' => 'documento', 'fotos' => 'foto', 'videos' => 'video', 'audios' => 'audio'];
    $basePath = "evidencias/denuncia_{$denunciaId}";

    foreach ($tipos as $inputName => $tipo) {
        if ($request->hasFile($inputName)) {
            foreach ($request->file($inputName) as $archivo) {
                $path = $archivo->store($basePath, 'public');

                Evidencia::create([
                    'denuncia_id' => $denunciaId,
                    'nombre' => $archivo->getClientOriginalName(),
                    'tipo' => $tipo,
                    'ruta' => $path,
                    'mime_type' => $archivo->getMimeType(),
                    'tamano' => $archivo->getSize()
                ]);

                Log::info("✅ Archivo {$tipo} guardado:", ['path' => $path]);
            }
        }
    }
}
    /**
     * Mostrar una denuncia específica
     */
public function show(int $id): JsonResponse
{
    try {
        // Obtener el modelo Eloquent directamente
        $denuncia = Denuncia::with('evidencias')->find($id);

        if (!$denuncia) {
            return response()->json([
                'success' => false,
                'message' => 'Denuncia no encontrada'
            ], 404);
        }

        $denunciaArray = $denuncia->toArray();
        $denunciaArray['evidencia_urls'] = $this->getEvidenciaUrls($denuncia);

        return response()->json([
            'success' => true,
            'data' => $denunciaArray
        ]);

    } catch (\Exception $e) {
        Log::error('Error al obtener denuncia: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al obtener la denuncia'
        ], 500);
    }
}

    /**
     * Actualizar una denuncia
     */
    public function update(UpdateDenunciaRequest $request, int $id): JsonResponse
    {
        try {
            $dto = ActualizarDenunciaDTO::fromRequest($request);
            $denuncia = $this->denunciaService->actualizar($id, $dto);

            return response()->json([
                'success' => true,
                'message' => 'Denuncia actualizada exitosamente',
                'data' => $denuncia->toArray()
            ]);

        } catch (DenunciaNoEncontradaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al actualizar denuncia: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar la denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Eliminar una denuncia
     */
    public function destroy(int $id): JsonResponse
    {
        try {
            $this->denunciaService->eliminar($id);

            return response()->json([
                'success' => true,
                'message' => 'Denuncia eliminada exitosamente'
            ]);

        } catch (DenunciaNoEncontradaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al eliminar denuncia: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al eliminar la denuncia',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Cambiar estado de una denuncia
     */
    public function cambiarEstado(CambiarEstadoRequest $request, int $id): JsonResponse
    {
        try {
            $denuncia = $this->denunciaService->cambiarEstado(
                $id,
                $request->input('estado_denuncia_id'),
                $request->input('observaciones')
            );

            return response()->json([
                'success' => true,
                'message' => 'Estado actualizado exitosamente',
                'data' => $denuncia->toArray()
            ]);

        } catch (DenunciaNoEncontradaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al cambiar estado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al cambiar el estado',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

 /**
 * Agregar involucrado a una denuncia
 */
public function agregarInvolucrado(Request $request, int $id): JsonResponse
{
    try {
        $request->validate([
            'persona_id' => 'required|integer|exists:persona,persona_id',
            'rol' => 'required|string|max:100',
            'observaciones' => 'nullable|string|max:500'
        ]);

        $denuncia = $this->denunciaService->agregarInvolucrado(
            $id,
            $request->input('persona_id'),
            $request->input('rol'),
            $request->input('observaciones')
        );

        return response()->json([
            'success' => true,
            'message' => 'Involucrado agregado exitosamente',
            'data' => $denuncia->toArray()
        ]);

    } catch (DenunciaNoEncontradaException $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage()
        ], 404);
    } catch (\Exception $e) {
        Log::error('Error al agregar involucrado: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al agregar involucrado',
            'error' => env('APP_DEBUG') ? $e->getMessage() : null
        ], 500);
    }
}

/**
 * Obtener involucrados de una denuncia
 */
public function getInvolucrados(int $id): JsonResponse
{
    try {
        $denuncia = $this->denunciaService->obtenerModeloPorId($id);

        if (!$denuncia) {
            return response()->json([
                'success' => false,
                'message' => 'Denuncia no encontrada'
            ], 404);
        }

        $involucrados = Involucrado::where('denuncia_id', $id)
            ->with('persona')
            ->where('activo', true)
            ->orderBy('fecha_registro', 'desc')
            ->get()
            ->map(function($inv) {
                return [
                    'involucrado_id' => $inv->involucrado_id,
                    'denuncia_id' => $inv->denuncia_id,
                    'persona_id' => $inv->persona_id,
                    'persona_nombre' => $inv->persona?->nombre_completo,
                    'persona_documento' => $inv->persona?->numero_documento,
                    'rol' => $inv->rol,
                    'rol_display' => $this->getRolDisplay($inv->rol),
                    'observaciones' => $inv->observaciones,
                    'fecha_registro' => $inv->fecha_registro?->format('Y-m-d H:i:s')
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $involucrados
        ]);

    } catch (\Exception $e) {
        Log::error('Error al obtener involucrados: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al obtener involucrados'
        ], 500);
    }
}

private function getRolDisplay(string $rol): string
{
    $roles = [
        'denunciante' => 'Denunciante',
        'victima' => 'Víctima',
        'testigo' => 'Testigo',
        'acusado' => 'Acusado',
        'representante' => 'Representante Legal',
        'asesor' => 'Asesor',
        'otro' => 'Otro'
    ];

    return $roles[$rol] ?? ucfirst($rol);
}
    /**
     * Generar código único para una denuncia
     */
    public function generarCodigo(): JsonResponse
    {
        try {
            $codigo = $this->denunciaService->generarCodigoUnico();

            return response()->json([
                'success' => true,
                'data' => ['codigo' => $codigo]
            ]);

        } catch (\Exception $e) {
            Log::error('Error al generar código: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al generar código',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

   /**
     * Obtener historial de una denuncia
     */
public function historial(int $id): JsonResponse
{
    try {
        // Verificar que la denuncia existe
        $denuncia = $this->denunciaService->obtenerModeloPorId($id);

        if (!$denuncia) {
            return response()->json([
                'success' => false,
                'message' => 'Denuncia no encontrada'
            ], 404);
        }

        $historial = $this->historialService->obtenerHistorialPorDenuncia($id);

        return response()->json([
            'success' => true,
            'data' => $historial
        ]);

    } catch (\Exception $e) {
        Log::error('Error al obtener historial: ' . $e->getMessage());

        // ✅ Devolver array vacío en lugar de error 500
        return response()->json([
            'success' => true,
            'data' => [],
            'message' => 'No hay historial disponible'
        ]);
    }
}
    /**
     * Obtener historial paginado de una denuncia
     */
    public function historialPaginado(Request $request, int $id): JsonResponse
    {
        try {
            $denuncia = $this->denunciaService->obtenerPorId($id);

            $perPage = $request->get('per_page', 15);

            // ✅ Usar el método correcto de la interfaz
            $result = $this->historialService->obtenerHistorialPaginado($id, $perPage);

            return response()->json([
                'success' => true,
                'data' => $result['data'],
                'pagination' => $result['pagination']
            ]);

        } catch (DenunciaNoEncontradaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al obtener historial paginado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener historial',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
     * Obtener historial formateado
     */
    public function historialFormateado(int $id): JsonResponse
    {
        try {
            $denuncia = $this->denunciaService->obtenerPorId($id);

            $result = $this->historialService->obtenerHistorialFormateado($id);

            return response()->json([
                'success' => true,
                'data' => $result['data'],
                'meta' => $result['meta']
            ]);

        } catch (DenunciaNoEncontradaException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Error al obtener historial formateado: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener historial',
                'error' => env('APP_DEBUG') ? $e->getMessage() : null
            ], 500);
        }
    }

    /**
 * Obtener estadísticas para el dashboard
 */
// app/Http/Controllers/Api/DenunciaController.php

public function getEstadisticas(): JsonResponse
{
    try {
        // Total de denuncias
        $totalDenuncias = Denuncia::count();

        // Denuncias activas (excluyendo archivadas, cerradas y resueltas)
        $denunciasActivas = Denuncia::whereHas('estadoDenuncia', function($q) {
            $q->whereNotIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA']);
        })->count();

        // 👈 NUEVO: Denuncias resueltas por sentencia ejecutada
        $denunciasResueltas = Denuncia::whereHas('conciliaciones.sentencia', function($q) {
            $q->where('estado_ejecucion', 'EJECUTADA');
        })->count();

        // 👈 Si no hay sentencias ejecutadas, usar las que tienen estado RESUELTA
        if ($denunciasResueltas === 0) {
            $denunciasResueltas = Denuncia::whereHas('estadoDenuncia', function($q) {
                $q->where('nombre', 'RESUELTA');
            })->count();
        }

        // Conciliaciones exitosas (APROBADAS)
        $conciliacionesExitosas = DB::table('conciliacion')
            ->where('resultado_final', 'APROBADA')
            ->count();

        // 👈 NUEVO: Tasa de resolución
        $tasaResolucion = $totalDenuncias > 0
            ? round(($denunciasResueltas / $totalDenuncias) * 100, 1)
            : 0;

        // Denuncias por mes (últimos 6 meses)
        $denunciasPorMes = Denuncia::select(
                DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM') as mes"),
                DB::raw('COUNT(*) as total')
            )
            ->where('fecha_ingreso', '>=', now()->subMonths(6))
            ->groupBy(DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM')"))
            ->orderBy('mes', 'asc')
            ->get()
            ->map(function($item) {
                $fecha = \Carbon\Carbon::createFromFormat('Y-m', $item->mes);
                return [
                    'mes' => $fecha->translatedFormat('M Y'),
                    'total' => $item->total
                ];
            });

        // Últimas 5 denuncias
        $ultimasDenuncias = Denuncia::with(['persona', 'tipoConflicto', 'estadoDenuncia'])
            ->latest('fecha_ingreso')
            ->limit(5)
            ->get()
            ->map(function($denuncia) {
                // 👈 Verificar si tiene sentencia ejecutada
                $tieneSentenciaEjecutada = $denuncia->conciliaciones()
                    ->whereHas('sentencia', function($q) {
                        $q->where('estado_ejecucion', 'EJECUTADA');
                    })->exists();

                // 👈 Si tiene sentencia ejecutada, mostrar estado como RESUELTA
                $estadoNombre = $denuncia->estadoDenuncia?->nombre;
                if ($tieneSentenciaEjecutada) {
                    $estadoNombre = 'RESUELTA';
                }

                return [
                    'denuncia_id' => $denuncia->denuncia_id,
                    'numero_expediente' => $denuncia->numero_expediente,
                    'nombre_completo_denunciante' => $denuncia->persona
                        ? "{$denuncia->persona->nombres} {$denuncia->persona->apellidos}"
                        : null,
                    'tipo_conflicto_nombre' => $denuncia->tipoConflicto?->nombre,
                    'estado_denuncia_nombre' => $estadoNombre,
                    'fecha_ingreso' => $denuncia->fecha_ingreso?->format('Y-m-d H:i:s'),
                    'resuelta_por_sentencia' => $tieneSentenciaEjecutada
                ];
            });

        return response()->json([
            'success' => true,
            'data' => [
                'total_denuncias' => $totalDenuncias,
                'denuncias_activas' => $denunciasActivas,
                'denuncias_resueltas' => $denunciasResueltas,
                'conciliaciones_exitosas' => $conciliacionesExitosas,
                'tasa_resolucion' => $tasaResolucion,  // 👈 NUEVO
                'denuncias_por_mes' => $denunciasPorMes,
                'ultimas_denuncias' => $ultimasDenuncias
            ]
        ]);

    } catch (\Exception $e) {
        \Log::error('Error en getEstadisticas: ' . $e->getMessage(), [
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
 * GET /api/v1/denuncias/exportar-estadisticas-excel
 */
public function exportarEstadisticasExcel()
{
    try {
        // Obtener los mismos datos que en getEstadisticas()
        $totalDenuncias = Denuncia::count();

        $denunciasActivas = Denuncia::whereHas('estadoDenuncia', function($q) {
            $q->whereNotIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA']);
        })->count();

        $denunciasResueltas = Denuncia::whereHas('conciliaciones.sentencia', function($q) {
            $q->where('estado_ejecucion', 'EJECUTADA');
        })->count();

        if ($denunciasResueltas === 0) {
            $denunciasResueltas = Denuncia::whereHas('estadoDenuncia', function($q) {
                $q->where('nombre', 'RESUELTA');
            })->count();
        }

        $conciliacionesExitosas = DB::table('conciliacion')
            ->where('resultado_final', 'APROBADA')
            ->count();

        $tasaResolucion = $totalDenuncias > 0
            ? round(($denunciasResueltas / $totalDenuncias) * 100, 1)
            : 0;

        // Denuncias por mes (últimos 6 meses)
        $denunciasPorMes = Denuncia::select(
                DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM') as mes"),
                DB::raw('COUNT(*) as total')
            )
            ->where('fecha_ingreso', '>=', now()->subMonths(6))
            ->groupBy(DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM')"))
            ->orderBy('mes', 'asc')
            ->get()
            ->map(function($item) {
                $fecha = \Carbon\Carbon::createFromFormat('Y-m', $item->mes);
                return [
                    'mes' => $fecha->translatedFormat('M Y'),
                    'total' => $item->total
                ];
            });

        // Cargar datos para el reporte
        $data = [
            'generado_en' => now()->format('d/m/Y H:i:s'),
            'total_denuncias' => $totalDenuncias,
            'denuncias_activas' => $denunciasActivas,
            'denuncias_resueltas' => $denunciasResueltas,
            'conciliaciones_exitosas' => $conciliacionesExitosas,
            'tasa_resolucion' => $tasaResolucion,
            'denuncias_por_mes' => $denunciasPorMes
        ];

        // Usar Maatwebsite\Excel para exportar
        $export = new \App\Exports\EstadisticasDenunciasExport($data);

        return \Maatwebsite\Excel\Facades\Excel::download(
            $export,
            'estadisticas_denuncias_' . now()->format('Y-m-d_Hi') . '.xlsx'
        );

    } catch (\Exception $e) {
        \Log::error('Error exportando estadísticas a Excel: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Error al exportar: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Exportar estadísticas a PDF
 * GET /api/v1/denuncias/exportar-estadisticas-pdf
 */

public function exportarEstadisticasPDF()
{
    try {
        Log::info('=== Exportando estadísticas a PDF ===');

        // 1. Total de denuncias
        $totalDenuncias = DB::table('denuncia')->count();

        // 2. Denuncias activas (excluyendo ARCHIVADA, CERRADA, RESUELTA)
        $estadosExcluidos = DB::table('estadodenuncia')
            ->whereIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA'])
            ->pluck('estado_denuncia_id')
            ->toArray();

        $denunciasActivas = DB::table('denuncia')
            ->whereNotIn('estado_denuncia_id', $estadosExcluidos)
            ->count();

        // 3. Denuncias resueltas por sentencia ejecutada
        $conciliacionesConSentencia = DB::table('sentencia')
            ->where('estado_ejecucion', 'EJECUTADA')
            ->pluck('conciliacion_id')
            ->toArray();

        $denunciasResueltas = 0;
        if (!empty($conciliacionesConSentencia)) {
            $denunciasResueltas = DB::table('conciliacion')
                ->whereIn('conciliacion_id', $conciliacionesConSentencia)
                ->distinct('denuncia_id')
                ->count('denuncia_id');
        }

        // Si no hay sentencias ejecutadas, buscar por estado RESUELTA
        if ($denunciasResueltas === 0) {
            $estadoResuelta = DB::table('estadodenuncia')
                ->where('nombre', 'RESUELTA')
                ->value('estado_denuncia_id');

            if ($estadoResuelta) {
                $denunciasResueltas = DB::table('denuncia')
                    ->where('estado_denuncia_id', $estadoResuelta)
                    ->count();
            }
        }

        // 4. Conciliaciones exitosas
        $conciliacionesExitosas = DB::table('conciliacion')
            ->where('resultado_final', 'APROBADA')
            ->count();

        // 5. Tasa de resolución
        $tasaResolucion = $totalDenuncias > 0
            ? round(($denunciasResueltas / $totalDenuncias) * 100, 1)
            : 0;

        // 6. Denuncias por mes (últimos 6 meses)
        $denunciasPorMes = DB::table('denuncia')
            ->select(DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM') as mes"), DB::raw('COUNT(*) as total'))
            ->where('fecha_ingreso', '>=', now()->subMonths(6))
            ->groupBy(DB::raw("TO_CHAR(fecha_ingreso, 'YYYY-MM')"))
            ->orderBy('mes', 'asc')
            ->get()
            ->map(function($item) {
                $fecha = \Carbon\Carbon::createFromFormat('Y-m', $item->mes);
                return [
                    'mes' => $fecha->translatedFormat('M Y'),
                    'total' => (int) $item->total
                ];
            });

        // 7. Últimas 5 denuncias con estado mejorado
        $ultimasDenuncias = DB::table('denuncia')
            ->leftJoin('persona', 'denuncia.persona_id', '=', 'persona.persona_id')
            ->leftJoin('tipoconflicto', 'denuncia.tipo_conflicto_id', '=', 'tipoconflicto.tipo_conflicto_id')
            ->leftJoin('estadodenuncia', 'denuncia.estado_denuncia_id', '=', 'estadodenuncia.estado_denuncia_id')
            ->leftJoin('conciliacion', 'denuncia.denuncia_id', '=', 'conciliacion.denuncia_id')
            ->leftJoin('sentencia', 'conciliacion.conciliacion_id', '=', 'sentencia.conciliacion_id')
            ->leftJoin('remision', 'denuncia.denuncia_id', '=', 'remision.denuncia_id')
            ->select(
                'denuncia.codigo_externo as codigo',
                'denuncia.denuncia_id',
                DB::raw("COALESCE(persona.nombres || ' ' || persona.apellidos, 'Anónimo') as denunciante"),
                DB::raw("COALESCE(tipoconflicto.nombre, 'No especificado') as tipo_conflicto"),
                'estadodenuncia.nombre as estado_base',
                'conciliacion.estado as estado_conciliacion',
                'conciliacion.resultado_final',
                'sentencia.estado_ejecucion',
                'remision.remision_id',
                DB::raw("TO_CHAR(denuncia.fecha_ingreso, 'DD/MM/YYYY') as fecha")
            )
            ->orderBy('denuncia.fecha_ingreso', 'desc')
            ->limit(5)
            ->get()
            ->map(function($item) {
                // Determinar el estado real de la denuncia
                $estadoReal = $this->determinarEstadoDenuncia($item);

                return [
                    'codigo' => $item->codigo ?? 'N/A',
                    'denunciante' => trim($item->denunciante) ?: 'Anónimo',
                    'tipo_conflicto' => $item->tipo_conflicto,
                    'estado' => $estadoReal,
                    'fecha' => $item->fecha ?? 'N/A',
                    'estado_base' => $item->estado_base
                ];
            });

        $data = [
            'generado_en' => now()->format('d/m/Y H:i:s'),
            'total_denuncias' => $totalDenuncias,
            'denuncias_activas' => $denunciasActivas,
            'denuncias_resueltas' => $denunciasResueltas,
            'conciliaciones_exitosas' => $conciliacionesExitosas,
            'tasa_resolucion' => $tasaResolucion,
            'denuncias_por_mes' => $denunciasPorMes,
            'ultimas_denuncias' => $ultimasDenuncias
        ];

        // Generar PDF usando la vista Blade
        $pdf = Pdf::loadView('pdfs.estadisticas_denuncias', $data);
        $pdf->setPaper('a4', 'portrait');

        $filename = 'estadisticas_denuncias_' . now()->format('Y-m-d_Hi') . '.pdf';

        Log::info('PDF generado exitosamente');

        return $pdf->download($filename);

    } catch (\Exception $e) {
        Log::error('Error exportando PDF: ' . $e->getMessage());
        Log::error('Trace: ' . $e->getTraceAsString());

        return response()->json([
            'success' => false,
            'message' => 'Error al exportar PDF: ' . $e->getMessage()
        ], 500);
    }
}

/**
 * Determinar el estado real de una denuncia
 */

private function determinarEstadoDenuncia($denuncia)
{
    // 1. PRIORIDAD 1: Sentencia ejecutada (es el estado final)
    if ($denuncia->estado_ejecucion === 'EJECUTADA') {
        return 'SENTENCIA EJECUTADA';
    }

    // 2. PRIORIDAD 2: Verificar si está en REMISIÓN (antes que conciliación)
    if ($denuncia->remision_id) {
        return 'EN REMISIÓN';
    }

    // 3. PRIORIDAD 3: Conciliación
    if ($denuncia->resultado_final === 'APROBADA') {
        return 'CONCILIACIÓN APROBADA';
    }

    if ($denuncia->resultado_final === 'RECHAZADA') {
        return 'CONCILIACIÓN RECHAZADA';
    }

    if ($denuncia->estado_conciliacion === 'COMPLETA') {
        return 'CONCILIACIÓN COMPLETA';
    }

    if ($denuncia->estado_conciliacion === 'EN_PROCESO') {
        return 'EN CONCILIACIÓN';
    }

    if ($denuncia->estado_conciliacion === 'INCOMPLETA') {
        return 'CONCILIACIÓN INCOMPLETA';
    }

    // 4. PRIORIDAD 4: Estado base de la denuncia
    $estadoBase = $denuncia->estado_base ?? 'PENDIENTE';

    $estadosMap = [
        'REGISTRADA' => 'REGISTRADA',
        'PENDIENTE' => 'PENDIENTE',
        'EN_REVISION' => 'EN REVISIÓN',
        'EN_TRAMITE' => 'EN TRÁMITE',
        'DERIVADA' => 'DERIVADA',
        'ARCHIVADA' => 'ARCHIVADA',
        'CERRADA' => 'CERRADA',
        'RESUELTA' => 'RESUELTA',
        'ACTIVA' => 'ACTIVA'
    ];

    return $estadosMap[$estadoBase] ?? $estadoBase;
}
}
