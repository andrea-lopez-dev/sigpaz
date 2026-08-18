<?php
namespace App\Repositories;

use App\Interfaces\CatalogoInterface;
use Illuminate\Database\Eloquent\Model;

abstract class CatalogoRepository
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    // Métodos concretos que implementan la interfaz indirectamente
    public function crear(array $datos): Model
    {
        return $this->model->create($datos);
    }

    public function actualizarDatos(int $id, array $datos): Model
    {
        $model = $this->model->findOrFail($id);
        $model->update($datos);
        return $model->fresh();
    }

    public function eliminarLogico(int $id): bool
    {
        $model = $this->model->findOrFail($id);
        return $model->update(['estado' => false]);
    }

    public function obtenerPorId(int $id): ?Model
    {
        return $this->model->find($id);
    }

    public function listarActivos()
    {
        return $this->model->where('estado', true)
            ->orderBy('nombre')
            ->get();
    }

    public function listarFiltrados(array $filtros = [])
    {
        $query = $this->model->query();

        if (isset($filtros['activos'])) {
            $query->where('estado', (bool)$filtros['activos']);
        }

        if (isset($filtros['search'])) {
            $query->where('nombre', 'like', "%{$filtros['search']}%");
        }

        return $query->orderBy('nombre')->get();
    }
}
