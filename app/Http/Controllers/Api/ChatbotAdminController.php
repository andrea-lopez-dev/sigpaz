<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ChatbotBaseConocimiento;
use App\Models\ChatbotConversacion;
use App\Models\ChatbotMensaje;
use App\Models\ChatbotCalificacione;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ChatbotAdminController extends Controller
{
    /**
     * Obtener todas las entradas de la base de conocimiento
     */
    public function index(Request $request)
    {
        $query = ChatbotBaseConocimiento::query();

        // Filtros
        if ($request->has('categoria')) {
            $query->where('categoria', $request->categoria);
        }

        if ($request->has('intencion')) {
            $query->where('intencion', 'like', '%' . $request->intencion . '%');
        }

        if ($request->has('activo')) {

        if ($request->boolean('activo')) {
            $query->where('activo', DB::raw('true'));
        } else {
            $query->where('activo', DB::raw('false'));
        }
    }

        if ($request->has('buscar')) {
            $buscar = $request->buscar;
            $query->where(function($q) use ($buscar) {
                $q->where('pregunta', 'like', '%' . $buscar . '%')
                  ->orWhere('respuesta', 'like', '%' . $buscar . '%')
                  ->orWhere('categoria', 'like', '%' . $buscar . '%');
            });
        }

        $conocimientos = $query->orderBy('veces_usada', 'desc')
            ->paginate($request->get('per_page', 20));

        return response()->json([
            'success' => true,
            'data' => $conocimientos
        ]);
    }

    /**
     * Agregar nueva entrada a la base de conocimiento
     */
    public function store(Request $request)
    {
        $request->validate([
            'pregunta' => 'required|string|max:500',
            'respuesta' => 'required|string',
            'categoria' => 'nullable|string|max:100',
            'intencion' => 'nullable|string|max:100',
            'contexto' => 'nullable|array',
            'puntaje_confianza' => 'nullable|numeric|min:0|max:1'
        ]);

        // Verificar si ya existe
        $existente = ChatbotBaseConocimiento::where('pregunta', $request->pregunta)->first();
        if ($existente) {
            return response()->json([
                'success' => false,
                'message' => 'Ya existe una entrada con esta pregunta'
            ], 422);
        }

        $conocimiento = ChatbotBaseConocimiento::create([
            'pregunta' => $request->pregunta,
            'respuesta' => $request->respuesta,
            'categoria' => $request->categoria,
            'intencion' => $request->intencion,
            'contexto' => $request->contexto,
            'puntaje_confianza' => $request->puntaje_confianza ?? 0.8,
            'activo' => DB::raw('true'),
            'creado_por' => auth()->id(),
            'creado_en' => now(),
            'actualizado_en' => now()
        ]);

        Log::info('Nueva entrada agregada a base de conocimiento', [
            'usuario_id' => auth()->id(),
            'pregunta' => $request->pregunta,
            'conocimiento_id' => $conocimiento->id
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Entrada agregada correctamente',
            'data' => $conocimiento
        ], 201);
    }

    /**
     * Mostrar una entrada específica
     */
    public function show($id)
    {
        $conocimiento = ChatbotBaseConocimiento::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $conocimiento
        ]);
    }

    /**
     * Actualizar una entrada
     */
    public function update(Request $request, $id)
    {
        $conocimiento = ChatbotBaseConocimiento::findOrFail($id);

        $request->validate([
            'pregunta' => 'sometimes|string|max:500',
            'respuesta' => 'sometimes|string',
            'categoria' => 'nullable|string|max:100',
            'intencion' => 'nullable|string|max:100',
            'contexto' => 'nullable|array',
            'activo' => 'nullable|boolean'
        ]);

        $conocimiento->update($request->only([
            'pregunta', 'respuesta', 'categoria', 'intencion', 'contexto', 'activo'
        ]));
        $conocimiento->actualizado_en = now();
        $conocimiento->save();

        Log::info('Entrada de base de conocimiento actualizada', [
            'usuario_id' => auth()->id(),
            'conocimiento_id' => $id
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Entrada actualizada correctamente',
            'data' => $conocimiento
        ]);
    }

    /**
     * Eliminar una entrada (soft delete en realidad)
     */
    public function destroy($id)
    {
        $conocimiento = ChatbotBaseConocimiento::findOrFail($id);
        $conocimiento->activo = DB::raw('false');
        $conocimiento->save();

        Log::warning('Entrada de base de conocimiento desactivada', [
            'usuario_id' => auth()->id(),
            'conocimiento_id' => $id,
            'pregunta' => $conocimiento->pregunta
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Entrada desactivada correctamente'
        ]);
    }

    /**
     * Activar una entrada
     */
    public function activar($id)
    {
        $conocimiento = ChatbotBaseConocimiento::findOrFail($id);
        $conocimiento->activo = DB::raw('true');
        $conocimiento->save();

        return response()->json([
            'success' => true,
            'message' => 'Entrada activada correctamente'
        ]);
    }

    /**
     * Obtener estadísticas del chatbot
     */
    public function estadisticas(Request $request)
    {
        $fechaInicio = $request->get('fecha_inicio', now()->subDays(30));
        $fechaFin = $request->get('fecha_fin', now());

        // Estadísticas generales
        $totalConversaciones = ChatbotConversacion::count();
        $totalMensajes = ChatbotMensaje::count();
        $mensajesUsuario = ChatbotMensaje::where('remitente', 'usuario')->count();
        $mensajesBot = ChatbotMensaje::where('remitente', 'asistente')->count();

        // Calificaciones
        $calificaciones = ChatbotCalificacione::select(
            DB::raw('COUNT(*) as total'),
            DB::raw('AVG(puntuacion) as promedio'),
            DB::raw('SUM(CASE WHEN fue_util = true THEN 1 ELSE 0 END) as utiles'),
            DB::raw('SUM(CASE WHEN fue_util = false THEN 1 ELSE 0 END) as no_utiles')
        )->first();

        // Tiempo promedio de respuesta
        $tiempoPromedio = ChatbotMensaje::where('remitente', 'asistente')
            ->whereNotNull('tiempo_respuesta_ms')
            ->avg('tiempo_respuesta_ms');

        // Mensajes por día (últimos 30 días)
        $mensajesPorDia = ChatbotMensaje::select(
            DB::raw('DATE(creado_en) as fecha'),
            DB::raw('COUNT(*) as total'),
            DB::raw("SUM(CASE WHEN remitente = 'usuario' THEN 1 ELSE 0 END) as usuarios"),
            DB::raw("SUM(CASE WHEN remitente = 'asistente' THEN 1 ELSE 0 END) as bot")
        )
            ->where('creado_en', '>=', $fechaInicio)
            ->where('creado_en', '<=', $fechaFin)
            ->groupBy(DB::raw('DATE(creado_en)'))
            ->orderBy('fecha', 'desc')
            ->get();

        // Categorías más usadas
        $categoriasMasUsadas = ChatbotBaseConocimiento::select('categoria', DB::raw('SUM(veces_usada) as total_usos'))
            ->where('activo', true)
            ->whereNotNull('categoria')
            ->groupBy('categoria')
            ->orderBy('total_usos', 'desc')
            ->limit(10)
            ->get();

        // Intenciones más usadas
        $intencionesMasUsadas = ChatbotBaseConocimiento::select('intencion', DB::raw('SUM(veces_usada) as total_usos'))
            ->where('activo', true)
            ->whereNotNull('intencion')
            ->groupBy('intencion')
            ->orderBy('total_usos', 'desc')
            ->limit(10)
            ->get();

        // Conversaciones activas
        $conversacionesActivas = ChatbotConversacion::where('estado', 'activa')->count();

        // Usuarios que más usan el chatbot
        $topUsuarios = ChatbotConversacion::select('usuario_id', DB::raw('COUNT(*) as conversaciones'))
            ->whereNotNull('usuario_id')
            ->groupBy('usuario_id')
            ->orderBy('conversaciones', 'desc')
            ->limit(10)
            ->with('usuario')
            ->get();

        // Porcentaje de respuestas útiles
        $porcentajeUtilidad = 0;
        if ($calificaciones && $calificaciones->total > 0) {
            $porcentajeUtilidad = ($calificaciones->utiles / $calificaciones->total) * 100;
        }

        return response()->json([
            'success' => true,
            'data' => [
                'resumen' => [
                    'total_conversaciones' => $totalConversaciones,
                    'total_mensajes' => $totalMensajes,
                    'mensajes_usuario' => $mensajesUsuario,
                    'mensajes_bot' => $mensajesBot,
                    'conversaciones_activas' => $conversacionesActivas,
                    'promedio_mensajes_por_conversacion' => $totalConversaciones > 0 ? round($totalMensajes / $totalConversaciones, 2) : 0
                ],
                'calificaciones' => [
                    'total' => $calificaciones->total ?? 0,
                    'promedio' => round($calificaciones->promedio ?? 0, 2),
                    'utiles' => $calificaciones->utiles ?? 0,
                    'no_utiles' => $calificaciones->no_utiles ?? 0,
                    'porcentaje_utilidad' => round($porcentajeUtilidad, 2)
                ],
                'rendimiento' => [
                    'tiempo_respuesta_promedio_ms' => round($tiempoPromedio ?? 0, 2),
                    'tiempo_respuesta_promedio_segundos' => round(($tiempoPromedio ?? 0) / 1000, 2)
                ],
                'tendencias' => [
                    'mensajes_por_dia' => $mensajesPorDia,
                    'categorias_populares' => $categoriasMasUsadas,
                    'intenciones_populares' => $intencionesMasUsadas
                ],
                'top_usuarios' => $topUsuarios->map(function($item) {
                    return [
                        'usuario_id' => $item->usuario_id,
                        'nombre' => $item->usuario->nombre_usuario ?? 'N/A',
                        'conversaciones' => $item->conversaciones
                    ];
                })
            ]
        ]);
    }

    /**
     * Exportar estadísticas a Excel
     */
    public function exportarEstadisticas(Request $request)
    {
        // Esta función requeriría una librería como Maatwebsite\Excel
        // Por ahora retorna un JSON
        $estadisticas = $this->estadisticas($request);

        return response()->json([
            'success' => true,
            'message' => 'Exportación pendiente de implementar con Laravel Excel',
            'data' => $estadisticas->getData()
        ]);
    }

    /**
     * Probar respuestas del chatbot (para debugging)
     */
    public function probar(Request $request)
    {
        $request->validate([
            'pregunta' => 'required|string'
        ]);

        $pregunta = $request->pregunta;

        // Buscar en conocimiento
        $conocimiento = ChatbotBaseConocimiento::where('pregunta', 'ilike', "%{$pregunta}%")
            ->orWhere('pregunta', 'ilike', "%{$pregunta}%")
            ->where('activo', true)
            ->first();

        if ($conocimiento) {
            return response()->json([
                'success' => true,
                'fuente' => 'knowledge_base',
                'coincidencia' => [
                    'pregunta' => $conocimiento->pregunta,
                    'respuesta' => $conocimiento->respuesta,
                    'categoria' => $conocimiento->categoria,
                    'confianza' => $conocimiento->puntaje_confianza
                ]
            ]);
        }

        return response()->json([
            'success' => true,
            'fuente' => 'no_encontrado',
            'mensaje' => 'No se encontró una respuesta predefinida para esta pregunta'
        ]);
    }

    /**
     * Importar conocimiento desde CSV
     */
    public function importar(Request $request)
    {
        $request->validate([
            'archivo' => 'required|file|mimes:csv,txt|max:5120'
        ]);

        $archivo = $request->file('archivo');
        $handle = fopen($archivo->getPathname(), 'r');

        // Leer cabeceras
        $headers = fgetcsv($handle);

        $importados = 0;
        $errores = 0;

        while (($row = fgetcsv($handle)) !== false) {
            $data = array_combine($headers, $row);

            try {
                ChatbotBaseConocimiento::updateOrCreate(
                    ['pregunta' => $data['pregunta']],
                    [
                        'respuesta' => $data['respuesta'],
                        'categoria' => $data['categoria'] ?? null,
                        'intencion' => $data['intencion'] ?? null,
                        'activo' => true,
                        'creado_por' => auth()->id(),
                        'creado_en' => now(),
                        'actualizado_en' => now()
                    ]
                );
                $importados++;
            } catch (\Exception $e) {
                $errores++;
                Log::error('Error importando conocimiento', ['error' => $e->getMessage(), 'data' => $data]);
            }
        }

        fclose($handle);

        return response()->json([
            'success' => true,
            'message' => "Importación completada. Importados: {$importados}, Errores: {$errores}"
        ]);
    }
}
