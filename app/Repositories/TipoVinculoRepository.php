<?php
namespace App\Repositories;

use App\Models\TipoVinculo;

class TipoVinculoRepository extends CatalogoRepository
{
    public function __construct(TipoVinculo $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $tipoVinculo = $this->model->withCount('personas')->find($id);
        return $tipoVinculo && $tipoVinculo->personas_count === 0;
    }

    public function eliminarLogico(int $id): bool
    {
        if (!$this->puedeEliminar($id)) {
            throw new \Exception('No se puede eliminar, tiene personas asociadas');
        }

        return parent::eliminarLogico($id);
    }

    // Método específico para TipoVinculo
    public function obtenerConPersonas(int $id): ?TipoVinculo
    {
        return $this->model->with('personas')->find($id);
    }
}
