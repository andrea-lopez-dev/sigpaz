<?php
namespace App\Repositories;

use App\Models\Sexo;

class SexoRepository extends CatalogoRepository
{
    public function __construct(Sexo $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $sexo = $this->model->withCount('personas')->find($id);
        return $sexo && $sexo->personas_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene personas asociadas');
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
}
