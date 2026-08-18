<?php

namespace App\Http\Controllers\Api;

use App\Services\Contracts\NotificationServiceInterface;
use App\Http\Controllers\Controller;
use App\Http\Resources\AlertResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Alert;

class NotificationController extends Controller
{
    protected NotificationServiceInterface $notificationService;

    public function __construct(NotificationServiceInterface $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function index(Request $request): JsonResponse
    {
        $perPage = $request->get('per_page', 20);
        $userId = Auth::user()->usuario_id;

        $notifications = $this->notificationService->getUserNotifications($userId, $perPage);

        return response()->json([
            'success' => true,
            'data' => AlertResource::collection(collect($notifications['data'])),
            'meta' => [
                'unread_count' => $notifications['unread_count'],
                'total' => $notifications['total'],
                'per_page' => $notifications['per_page'],
                'current_page' => $notifications['current_page'],
                'last_page' => $notifications['last_page']
            ]
        ]);
    }
public function store(Request $request): JsonResponse
{
    $user = Auth::user();

    // ✅ LOG para ver qué llega
    \Log::info('📝 Notificación recibida en backend:', $request->all());

    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'message' => 'required|string',
        'type' => 'sometimes|string|in:success,error,warning,info',
        'module' => 'sometimes|string|max:100',
        'actionUrl' => 'nullable|string',
        'metadata' => 'nullable|array'
    ]);

    // ✅ LOG para ver los datos validados
    \Log::info('✅ Datos validados:', $validated);

    $alert = Alert::create([
        'usuario_id' => $user->usuario_id,
        'titulo' => $validated['title'],
        'mensaje' => $validated['message'],
        'tipo_alerta' => $validated['type'] ?? 'info',
        'entidad_tipo' => $validated['module'] ?? 'sistema',
        'accion_url' => $validated['actionUrl'] ?? null,
        'leida' => false,
        'fecha_creacion' => now()
    ]);

    // ✅ LOG para ver lo que se guardó
    \Log::info('💾 Notificación guardada:', [
        'id' => $alert->alerta_id,
        'titulo' => $alert->titulo,
        'mensaje' => $alert->mensaje
    ]);

    event(new \App\Events\AlertCreated($alert));

    return response()->json([
        'success' => true,
        'data' => [
            'id' => $alert->alerta_id,
            'title' => $alert->titulo,
            'message' => $alert->mensaje,
            'type' => $alert->tipo_alerta,
            'read' => (bool) $alert->leida,
            'createdAt' => $alert->fecha_creacion->toISOString()
        ]
    ], 201);
}
    public function markAsRead(int $id): JsonResponse
    {
        $userId = Auth::user()->usuario_id;

        $result = $this->notificationService->markAsRead($id, $userId);

        return response()->json([
            'success' => $result,
            'message' => $result ? 'Notificación marcada como leída' : 'No se pudo marcar la notificación'
        ]);
    }

    public function markAllAsRead(): JsonResponse
    {
        $userId = Auth::user()->usuario_id;

        $result = $this->notificationService->markAllAsRead($userId);

        return response()->json([
            'success' => $result,
            'message' => $result ? 'Todas las notificaciones marcadas como leídas' : 'No hay notificaciones para marcar'
        ]);
    }

    public function destroyAll(): JsonResponse
    {
        $userId = Auth::user()->usuario_id;

        $result = $this->notificationService->deleteAll($userId);

        return response()->json([
            'success' => $result,
            'message' => $result ? 'Todas las notificaciones eliminadas' : 'No hay notificaciones para eliminar'
        ]);
    }

    public function unreadCount(): JsonResponse
    {
        $userId = Auth::user()->usuario_id;

        $count = $this->notificationService->getUnreadCount($userId);

        return response()->json([
            'success' => true,
            'unread_count' => $count
        ]);
    }
}
