<?php
namespace App\Repositories;

use App\Models\TipoConflicto;

class TipoConflictoRepository extends CatalogoRepository
{
    public function __construct(TipoConflicto $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $tipoConflicto = $this->model->withCount('denuncia')->find($id);
        return $tipoConflicto && $tipoConflicto->denuncias_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene denuncias asociadas');
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
        $tipoConflicto = $this->model->withCount(['denuncia as total_denuncias'])
            ->with(['denuncia' => function($query) {
                $query->select('id_tipo_conflicto')
                    ->selectRaw('COUNT(CASE WHEN fecha_ingreso >= NOW() - INTERVAL \'30 days\' THEN 1 END) as denuncias_ultimo_mes');
            }])
            ->find($id);

        if (!$tipoConflicto) {
            throw new \Exception('Tipo de conflicto no encontrado');
        }

        return [
            'id' => $tipoConflicto->id_tipo_conflicto,
            'nombre' => $tipoConflicto->nombre,
            'descripcion' => $tipoConflicto->descripcion,
            'total_denuncias' => $tipoConflicto->total_denuncias,
            'denuncias_ultimo_mes' => $tipoConflicto->denuncias->first()->denuncias_ultimo_mes ?? 0,
            'estado' => $tipoConflicto->estado ? 'Activo' : 'Inactivo'
        ];
    }

    public function obtenerConEstadisticas()
    {
        return $this->model->withCount('denuncia')
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'id' => $item->id_tipo_conflicto,
                    'nombre' => $item->nombre,
                    'descripcion' => $item->descripcion,
                    'total_denuncias' => $item->denuncias_count,
                    'estado' => $item->estado
                ];
            });
    }
}
