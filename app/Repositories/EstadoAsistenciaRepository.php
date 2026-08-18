<?php
namespace App\Repositories;

use App\Models\EstadoAsistencia;

class EstadoAsistenciaRepository extends CatalogoRepository
{
    public function __construct(EstadoAsistencia $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $estadoAsistencia = $this->model->withCount('asistencia')->find($id);
        return $estadoAsistencia && $estadoAsistencia->asistencias_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene asistencias asociadas');
        }

        return parent::eliminarLogico($id);
    }

    public function buscarPorTermino(string $termino, int $limit = 20)
    {
        return $this->model->where('nombre', 'like', "%{$termino}%")
            ->orderBy('nombre')
            ->limit($limit)
            ->get();
    }

    public function obtenerEstadisticas(int $id): array
    {
        $estadoAsistencia = $this->model->withCount('asistencia')
            ->with(['asistencia' => function($query) {
                $query->select('id_estado_asistencia')
                    ->selectRaw('COUNT(CASE WHEN fecha >= CURRENT_DATE - INTERVAL \'30 days\' THEN 1 END) as asistencias_ultimo_mes')
                    ->selectRaw('COUNT(CASE WHEN EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM CURRENT_DATE) THEN 1 END) as asistencias_mes_actual');
            }])
            ->find($id);

        if (!$estadoAsistencia) {
            throw new \Exception('Estado de asistencia no encontrado');
        }

        return [
            'id' => $estadoAsistencia->id_estado_asistencia,
            'nombre' => $estadoAsistencia->nombre,
            'total_asistencias' => $estadoAsistencia->asistencias_count,
            'asistencias_ultimo_mes' => $estadoAsistencia->asistencias->first()->asistencias_ultimo_mes ?? 0,
            'asistencias_mes_actual' => $estadoAsistencia->asistencias->first()->asistencias_mes_actual ?? 0,
            'estado' => $estadoAsistencia->estado ? 'Activo' : 'Inactivo'
        ];
    }

    public function obtenerParaDashboard()
    {
        return $this->model->withCount('asistencia')
            ->activos()
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'id' => $item->id_estado_asistencia,
                    'nombre' => $item->nombre,
                    'total_asistencias' => $item->asistencias_count,
                    'estado' => $item->estado
                ];
            });
    }
}
