<?php
namespace App\Repositories;

use App\Models\Institucion;

class InstitucionRepository extends CatalogoRepository
{
    public function __construct(Institucion $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $institucion = $this->model->withCount(['remisiones', 'sentencias'])->find($id);
        return $institucion &&
               $institucion->remisiones_count === 0 &&
               $institucion->sentencias_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene remisiones o sentencias asociadas');
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
        $institucion = $this->model->withCount(['remisiones', 'sentencias'])
            ->with(['remisiones' => function($query) {
                $query->select('id_institucion')
                    ->selectRaw('COUNT(CASE WHEN fecha_remision >= CURRENT_DATE - INTERVAL \'30 days\' THEN 1 END) as remisiones_ultimo_mes');
            }, 'sentencias' => function($query) {
                $query->select('id_institucion')
                    ->selectRaw('COUNT(CASE WHEN fecha_sentencia >= CURRENT_DATE - INTERVAL \'30 days\' THEN 1 END) as sentencias_ultimo_mes');
            }])
            ->find($id);

        if (!$institucion) {
            throw new \Exception('Institución no encontrada');
        }

        return [
            'id' => $institucion->id_institucion,
            'nombre' => $institucion->nombre,
            'descripcion' => $institucion->descripcion,
            'total_remisiones' => $institucion->remisiones_count,
            'total_sentencias' => $institucion->sentencias_count,
            'remisiones_ultimo_mes' => $institucion->remisiones->first()->remisiones_ultimo_mes ?? 0,
            'sentencias_ultimo_mes' => $institucion->sentencias->first()->sentencias_ultimo_mes ?? 0,
            'estado' => $institucion->estado ? 'Activo' : 'Inactivo'
        ];
    }

    public function obtenerParaSelect(string $tipo = null): array
    {
        $query = $this->model->activos();

        if ($tipo) {
            // Puedes agregar filtros específicos si hay diferentes tipos de instituciones
            $query->where('nombre', 'like', "%{$tipo}%");
        }

        return $query->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'value' => $item->id_institucion,
                    'label' => $item->nombre
                ];
            })
            ->toArray();
    }
}
