<?php
namespace App\Repositories;

use App\Models\EstadoDenuncia;

class EstadoDenunciaRepository extends CatalogoRepository
{
    public function __construct(EstadoDenuncia $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $estadoDenuncia = $this->model->withCount('denuncias')->find($id);
        return $estadoDenuncia && $estadoDenuncia->denuncias_count === 0;
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
            ->orderBy('nombre')
            ->limit($limit)
            ->get();
    }

    public function obtenerEstadisticas(int $id): array
    {
        $estadoDenuncia = $this->model->withCount('denuncias')
            ->with(['denuncias' => function($query) {
                $query->select('id_estado_denuncia')
                    ->selectRaw('COUNT(CASE WHEN fecha_ingreso >= CURRENT_DATE - INTERVAL \'30 days\' THEN 1 END) as denuncias_ultimo_mes')
                    ->selectRaw('AVG(EXTRACT(DAY FROM AGE(CURRENT_DATE, fecha_ingreso))) as dias_promedio')
                    ->join('tipo_conflicto', 'denuncia.id_tipo_conflicto', '=', 'tipo_conflicto.id_tipo_conflicto')
                    ->selectRaw('tipo_conflicto.nombre as tipo_conflicto_nombre, COUNT(*) as total')
                    ->groupBy('tipo_conflicto.nombre')
                    ->orderByDesc('total')
                    ->limit(3);
            }])
            ->find($id);

        if (!$estadoDenuncia) {
            throw new \Exception('Estado de denuncia no encontrado');
        }

        $tiposConflictoComunes = $estadoDenuncia->denuncias->map(function($item) {
            return [
                'tipo_conflicto' => $item->tipo_conflicto_nombre,
                'total' => $item->total
            ];
        });

        return [
            'id' => $estadoDenuncia->id_estado_denuncia,
            'nombre' => $estadoDenuncia->nombre,
            'total_denuncias' => $estadoDenuncia->denuncias_count,
            'denuncias_ultimo_mes' => $estadoDenuncia->denuncias->first()->denuncias_ultimo_mes ?? 0,
            'dias_promedio' => round($estadoDenuncia->denuncias->first()->dias_promedio ?? 0, 1),
            'tipos_conflicto_comunes' => $tiposConflictoComunes,
            'estado' => $estadoDenuncia->estado ? 'Activo' : 'Inactivo'
        ];
    }

    public function obtenerParaFlujoDenuncias()
    {
        return $this->model->withCount('denuncias')
            ->activos()
            ->orderByRaw("
                CASE
                    WHEN nombre LIKE '%inicial%' THEN 1
                    WHEN nombre LIKE '%investigación%' THEN 2
                    WHEN nombre LIKE '%resolución%' THEN 3
                    WHEN nombre LIKE '%cerrado%' THEN 4
                    ELSE 5
                END
            ")
            ->get();
    }
}
