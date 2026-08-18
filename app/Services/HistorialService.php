<?php

namespace App\Services;

use App\Services\Contracts\HistorialServiceInterface;
use App\Models\Denuncia;
use App\Models\DenunciaHistorial;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\Historial\HistorialResource;

class HistorialService implements HistorialServiceInterface
{
    public function registrarCreacion(Denuncia $denuncia, int $usuarioId, ?string $observaciones = null): void
    {
        DenunciaHistorial::create([
            'denuncia_id' => $denuncia->denuncia_id,
            'estado_actual' => json_encode(['id_estado' => $denuncia->estado_denuncia_id]),
            'usuario_cambio_id' => $usuarioId, // ✅ Esto ya usa usuario_id
            'observaciones' => $observaciones ?? 'Denuncia creada',
            'tipo_cambio' => 'creacion',
            'version' => 1, // 👈 AÑADIR VALOR POR DEFECTO
                'datos_adicionales' => json_encode([
                    'fecha_ingreso' => $denuncia->fecha_ingreso,
                    'tipo_conflicto_id' => $denuncia->tipo_conflicto_id,
                    'descripcion' => $denuncia->descripcion
                ]),
            'fecha_cambio' => now()
        ]);
    }

    public function registrarActualizacion(Denuncia $denuncia, int $usuarioId, array $cambios): void
    {
        if (empty($cambios)) {
            return;
        }

        DB::transaction(function() use ($denuncia, $usuarioId, $cambios) {
            foreach ($cambios as $campo => $valores) {
                DenunciaHistorial::create([
                    'denuncia_id' => $denuncia->denuncia_id,
                    'campo_modificado' => $campo,
                    'valor_anterior' => $valores['anterior'] ?? null,
                    'valor_nuevo' => $valores['nuevo'] ?? null,
                    'usuario_cambio_id' => $usuarioId,
                    'observaciones' => "Actualización de campo: {$campo}",
                    'tipo_cambio' => 'actualizacion',
                    'fecha_cambio' => now()
                ]);
            }
        });
    }

    public function registrarCambioEstado(Denuncia $denuncia, int $usuarioId, int $estadoAnterior, int $estadoNuevo, ?string $observaciones = null): void
    {
        DenunciaHistorial::create([
            'denuncia_id' => $denuncia->denuncia_id,
            'estado_anterior' => json_encode(['id_estado' => $estadoAnterior]),
            'estado_actual' => json_encode(['id_estado' => $estadoNuevo]),
            'usuario_cambio_id' => $usuarioId,
            'observaciones' => $observaciones ?? 'Cambio de estado',
            'tipo_cambio' => 'estado',
            'version' => $this->getNextVersion($denuncia->denuncia_id),
            'fecha_cambio' => now()
        ]);
    }

    public function registrarEliminacion(Denuncia $denuncia, int $usuarioId, ?string $motivo = null): void
    {
        DenunciaHistorial::create([
            'denuncia_id' => $denuncia->denuncia_id,
            'usuario_cambio_id' => $usuarioId,
            'observaciones' => $motivo ?? 'Denuncia eliminada',
            'tipo_cambio' => 'eliminacion',
            'fecha_cambio' => now()
        ]);
    }

/**
 * Obtener historial por denuncia
 */
public function obtenerHistorialPorDenuncia(int $denunciaId): Collection
{
    try {
        $historial = DenunciaHistorial::where('denuncia_id', $denunciaId)
            ->with('usuarioCambio')
            ->orderBy('fecha_cambio', 'desc')
            ->get();

            foreach ($historial as $item) {
            Log::info('🔍 ITEM HISTORIAL:', [
                'id' => $item->historial_id,
                'tipo' => $item->tipo_cambio,
                'observaciones' => $item->observaciones,
                'usuario_id' => $item->usuario_cambio_id
            ]);
        }

        if ($historial->isEmpty()) {
            return collect([]);
        }

        return $historial->map(function($item) {
            // ✅ Verificar y decodificar estado_anterior
            $estadoAnterior = null;
            if ($item->estado_anterior) {
                if (is_string($item->estado_anterior)) {
                    $estadoAnterior = json_decode($item->estado_anterior, true);
                } elseif (is_array($item->estado_anterior)) {
                    $estadoAnterior = $item->estado_anterior;
                } elseif (is_object($item->estado_anterior)) {
                    $estadoAnterior = (array) $item->estado_anterior;
                }
            }

            // ✅ Verificar y decodificar estado_actual
            $estadoActual = null;
            if ($item->estado_actual) {
                if (is_string($item->estado_actual)) {
                    $estadoActual = json_decode($item->estado_actual, true);
                } elseif (is_array($item->estado_actual)) {
                    $estadoActual = $item->estado_actual;
                } elseif (is_object($item->estado_actual)) {
                    $estadoActual = (array) $item->estado_actual;
                }
            }

            return [
                'historial_id' => $item->historial_id,
                'denuncia_id' => $item->denuncia_id,
                'tipo_cambio' => $item->tipo_cambio,
                'tipo_cambio_display' => $this->getTipoCambioDisplay($item->tipo_cambio),
                'campo_modificado' => $item->campo_modificado,
                'valor_anterior' => $item->valor_anterior,
                'valor_nuevo' => $item->valor_nuevo,
                'estado_anterior' => $estadoAnterior, // ✅ AHORA ES ARRAY O NULL
                'estado_actual' => $estadoActual,     // ✅ AHORA ES ARRAY O NULL
                'observaciones' => $item->observaciones,
                'version' => $item->version,
                'fecha_cambio' => $item->fecha_cambio?->format('Y-m-d H:i:s'),
                'fecha_cambio_humana' => $item->fecha_cambio?->diffForHumans(),
                'usuario' => $item->usuarioCambio ? [
                    'usuario_id' => $item->usuarioCambio->usuario_id,
                    'nombre_usuario' => $item->usuarioCambio->nombre_usuario,
                    'email' => $item->usuarioCambio->email
                ] : null,
                'usuario_nombre' => $item->usuarioCambio?->nombre_usuario ?? 'Sistema',
                'icono' => $this->getIcono($item->tipo_cambio),
                'color' => $this->getColor($item->tipo_cambio)
            ];
        });

    } catch (\Exception $e) {
        Log::error('Error al obtener historial: ' . $e->getMessage(), [
            'denuncia_id' => $denunciaId,
            'trace' => $e->getTraceAsString()
        ]);

        // Devolver colección vacía en caso de error
        return collect([]);
    }
}

private function getTipoCambioDisplay(string $tipo): string
{
    $tipos = [
        'creacion' => 'Creación',
        'actualizacion' => 'Actualización',
        'estado' => 'Cambio de Estado',
        'eliminacion' => 'Eliminación',
        'involucrado' => 'Cambio en Involucrados',
        'evidencia' => 'Cambio en Evidencia',
        'conciliacion' => 'Cambio en Conciliación',
        'notificacion' => 'Notificación',
        'remision' => 'Remisión'
    ];

    return $tipos[$tipo] ?? ucfirst($tipo);
}

private function getIcono(string $tipo): string
{
    return match($tipo) {
        'creacion' => '➕',
        'actualizacion' => '✏️',
        'estado' => '🔄',
        'eliminacion' => '🗑️',
        'involucrado' => '👥',
        'evidencia' => '📎',
        'conciliacion' => '🤝',
        'notificacion' => '📧',
        'remision' => '📤',
        default => '📝'
    };
}

private function getColor(string $tipo): string
{
    return match($tipo) {
        'creacion' => '#10b981', // verde
        'actualizacion' => '#3b82f6', // azul
        'estado' => '#f59e0b', // naranja
        'eliminacion' => '#ef4444', // rojo
        'involucrado' => '#8b5cf6', // morado
        'evidencia' => '#fbbf24', // amarillo
        'conciliacion' => '#14b8a6', // teal
        'notificacion' => '#6366f1', // indigo
        'remision' => '#ec4899', // rosa
        default => '#6b7280' // gris
    };
}
    public function obtenerUltimoCambioEstado(int $denunciaId): ?object
    {
        return DenunciaHistorial::where('denuncia_id', $denunciaId)
            ->where('tipo_cambio', 'estado')
            ->orderBy('fecha_cambio', 'desc')
            ->first();
    }

    public function obtenerHistorialFormateado(int $denunciaId): array
    {
        $historial = DenunciaHistorial::where('denuncia_id', $denunciaId)
            ->with('usuarioCambio')
            ->orderBy('fecha_cambio', 'desc')
            ->get();

        return [
            'data' => HistorialResource::collection($historial),
            'meta' => [
                'total' => $historial->count(),
                'denuncia_id' => $denunciaId
            ]
        ];
    }

    public function obtenerHistorialPaginado(int $denunciaId, int $perPage = 15): array
    {
        $historial = DenunciaHistorial::where('denuncia_id', $denunciaId)
            ->with('usuarioCambio')
            ->orderBy('fecha_cambio', 'desc')
            ->paginate($perPage);

        return [
            'data' => HistorialResource::collection($historial),
            'pagination' => [
                'current_page' => $historial->currentPage(),
                'last_page' => $historial->lastPage(),
                'per_page' => $historial->perPage(),
                'total' => $historial->total(),
                'from' => $historial->firstItem(),
                'to' => $historial->lastItem()
            ]
        ];
    }


     /**
     * Registrar modificación
     */
    public function registrarModificacion(
        Denuncia $denuncia,
        int $usuarioId,
        array $datosModificados,
        string $observaciones = null
    ) {
        try {
            $historial = DenunciaHistorial::create([
                'denuncia_id' => $denuncia->denuncia_id,
                'estado_actual' => json_encode(['id_estado' => $denuncia->estado_denuncia_id]),
                'usuario_cambio_id' => $usuarioId,
                'fecha_cambio' => now(),
                'tipo_cambio' => 'modificacion',
                'observaciones' => $observaciones ?? 'Denuncia modificada',
                'datos_adicionales' => json_encode($datosModificados),
                'version' => $this->getNextVersion($denuncia->denuncia_id), // 👈 VERSIÓN INCREMENTAL
            ]);

            Log::info('✅ Modificación registrada:', ['historial_id' => $historial->historial_id]);
            return $historial;

        } catch (\Exception $e) {
            Log::error('❌ Error al registrar modificación:', [
                'error' => $e->getMessage(),
                'denuncia_id' => $denuncia->denuncia_id
            ]);
            throw $e;
        }
    }

    /**
     * Obtener la siguiente versión para una denuncia
     */
    private function getNextVersion(int $denunciaId): int
    {
        $ultimoHistorial = DenunciaHistorial::where('denuncia_id', $denunciaId)
            ->orderBy('version', 'desc')
            ->first();

        return $ultimoHistorial ? $ultimoHistorial->version + 1 : 1;
    }
}

