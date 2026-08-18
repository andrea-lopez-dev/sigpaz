<?php
namespace App\Repositories;

use App\Models\TipoMedida;

class TipoMedidaRepository extends CatalogoRepository
{
    public function __construct(TipoMedida $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $tipoMedida = $this->model->withCount('medidasCautelares')->find($id);
        return $tipoMedida && $tipoMedida->medidas_cautelares_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene medidas cautelares asociadas');
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
}
