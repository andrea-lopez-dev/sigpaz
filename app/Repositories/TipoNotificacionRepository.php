<?php
namespace App\Repositories;

use App\Models\TipoNotificacion;

class TipoNotificacionRepository extends CatalogoRepository
{
    public function __construct(TipoNotificacion $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $tipoNotificacion = $this->model->withCount('notificacione')->find($id);
        return $tipoNotificacion && $tipoNotificacion->notificaciones_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene notificaciones asociadas');
        }

        return parent::eliminarLogico($id);
    }

    public function buscarPorTermino(string $termino, int $limit = 20)
    {
        return $this->model->where('nombre', 'like', "%{$termino}%")
            ->orWhere('descripcion', 'like', "%{$termino}%")
            ->orderBy('nombre')
            ->limit($limit)
            ->get();
    }

    public function obtenerEstadisticas(int $id): array
    {
        $tipoNotificacion = $this->model->withCount('notificacione')
            ->with(['notificaciones' => function($query) {
                $query->select('id_tipo_notificacion')
                    ->selectRaw('COUNT(CASE WHEN fecha_emision >= CURRENT_DATE - INTERVAL \'30 days\' THEN 1 END) as notificaciones_ultimo_mes')
                    ->selectRaw('COUNT(DISTINCT medio_notificacion) as medios_distintos')
                    ->selectRaw('medio_notificacion, COUNT(*) as total')
                    ->groupBy('medio_notificacion');
            }])
            ->find($id);

        if (!$tipoNotificacion) {
            throw new \Exception('Tipo de notificación no encontrado');
        }

        $distribucionMedios = $tipoNotificacion->notificaciones->map(function($item) {
            return [
                'medio' => $item->medio_notificacion,
                'total' => $item->total
            ];
        });

        return [
            'id' => $tipoNotificacion->id_tipo_notificacion,
            'nombre' => $tipoNotificacion->nombre,
            'descripcion' => $tipoNotificacion->descripcion,
            'total_notificaciones' => $tipoNotificacion->notificaciones_count,
            'notificaciones_ultimo_mes' => $tipoNotificacion->notificaciones->first()->notificaciones_ultimo_mes ?? 0,
            'medios_distintos' => $tipoNotificacion->notificaciones->first()->medios_distintos ?? 0,
            'distribucion_por_medio' => $distribucionMedios,
            'estado' => $tipoNotificacion->estado ? 'Activo' : 'Inactivo'
        ];
    }

    public function obtenerParaSelect(): array
    {
        return $this->model->activos()
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'value' => $item->id_tipo_notificacion,
                    'label' => $item->nombre,
                    'descripcion' => $item->descripcion
                ];
            })
            ->toArray();
    }

    public function obtenerTiposConPlantilla()
    {
        // Si tienes plantillas de notificación asociadas
        return $this->model->with(['plantillaNotificacion' => function($query) {
            $query->select('id_tipo_notificacion', 'asunto', 'cuerpo');
        }])
        ->activos()
        ->orderBy('nombre')
        ->get();
    }
}
