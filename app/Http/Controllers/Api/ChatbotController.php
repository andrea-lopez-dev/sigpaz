<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ChatbotService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    protected $chatbotService;

    public function __construct(ChatbotService $chatbotService)
    {
        $this->chatbotService = $chatbotService;
    }

    /**
     * Enviar mensaje al chatbot
     */
    public function enviarMensaje(Request $request)
    {

     \Log::info('📨 Mensaje recibido en backend:', [
        'mensaje' => $request->input('mensaje'),
        'sesion_id' => $request->input('sesion_id'),
        'usuario_id' => auth()->id(),
        'all_input' => $request->all()
    ]);

        $request->validate([
            'mensaje' => 'required|string|max:2000',
            'sesion_id' => 'nullable|string'
        ]);

        $mensaje = $request->input('mensaje');
        $usuarioId = auth()->id();
        $sesionId = $request->input('sesion_id', session()->getId());

        // Verificar si el mensaje es una solicitud de código maestro
        if ($this->esSolicitudCodigoMaestro($mensaje)) {
            return response()->json([
                'success' => true,
                'data' => [
                    'respuesta' => "🔐 **Código Maestro**\n\nPuedes obtener tu código haciendo clic en el botón **'Código Maestro'** que está en el panel izquierdo o en el pie del chat. También puedes usar el botón de Código Maestro en el footer.\n\nEste código es necesario para acciones críticas y tiene una vigencia de 5 minutos.\n\n¿Necesitas que te explique cómo usarlo?",
                    'fuente' => 'sistema',
                    'accion' => 'mostrar_boton_codigo'
                ]
            ]);
        }

        // Procesar mensaje
        $resultado = $this->chatbotService->procesarMensaje($mensaje, $usuarioId, $sesionId);

        return response()->json([
            'success' => true,
            'data' => [
                'respuesta' => $resultado['respuesta'],
                'fuente' => $resultado['fuente'],
                'mensaje_id' => $resultado['mensaje_id']
            ]
        ]);
    }

    /**
     * Verificar si es solicitud de código maestro
     */
    protected function esSolicitudCodigoMaestro(string $mensaje): bool
    {
        $mensaje = strtolower($mensaje);
        $palabrasClave = ['código maestro', 'codigo maestro', 'generar código', 'generar codigo', 'otp', 'código de acceso'];

        foreach ($palabrasClave as $palabra) {
            if (strpos($mensaje, $palabra) !== false) {
                return true;
            }
        }
        return false;
    }

    /**
     * Obtener historial del chat
     */
    public function obtenerHistorial(Request $request)
    {
        $request->validate([
            'sesion_id' => 'nullable|string'
        ]);

        $sesionId = $request->input('sesion_id', session()->getId());
        $historial = $this->chatbotService->obtenerHistorial($sesionId);

        return response()->json([
            'success' => true,
            'data' => $historial
        ]);
    }

    /**
     * Calificar respuesta
     */
    public function calificar(Request $request)
    {
        $request->validate([
            'mensaje_id' => 'required|integer',
            'puntuacion' => 'required|integer|min:1|max:5',
            'fue_util' => 'nullable|boolean',
            'comentario' => 'nullable|string|max:500'
        ]);

        $this->chatbotService->calificarRespuesta(
            $request->input('mensaje_id'),
            auth()->id(),
            $request->input('puntuacion'),
             filter_var($request->input('fue_util'), FILTER_VALIDATE_BOOLEAN),
            $request->input('comentario')
        );

        return response()->json([
            'success' => true,
            'message' => 'Gracias por tu calificación'
        ]);
    }

    /**
     * Limpiar historial
     */
    public function limpiarHistorial(Request $request)
    {
        $sesionId = $request->input('sesion_id', session()->getId());
        $this->chatbotService->limpiarHistorial($sesionId);

        return response()->json([
            'success' => true,
            'message' => 'Historial limpiado correctamente'
        ]);
    }

    /**
     * Obtener código maestro (usa tu controlador existente)
     */
    public function obtenerCodigoMaestro(Request $request)
    {
        // Redirigir a tu controlador existente
        return app(CodigoOTPController::class)->getCodigo($request);
    }



    /**
     * Probar el estado de la API del chatbot
     */
    public function probarApi(Request $request)
    {
        // Solo permitir en entorno local o para admins
        if (!app()->environment('local') && !auth()->user()?->hasRole('admin')) {
            return response()->json([
                'success' => false,
                'message' => 'No autorizado'
            ], 403);
        }

        $tipoPrueba = $request->input('tipo', 'completa');

        if ($tipoPrueba === 'simple') {
            $resultado = $this->chatbotService->probarApiGemini();
        } else {
            $resultado = $this->chatbotService->probarServicioCompleto();
        }

        return response()->json($resultado);
    }
}
