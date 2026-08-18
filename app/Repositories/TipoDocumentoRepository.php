<?php
namespace App\Repositories;

use App\Models\TipoDocumento;

class TipoDocumentoRepository extends CatalogoRepository
{
    public function __construct(TipoDocumento $model)
    {
        parent::__construct($model);
    }

    public function puedeEliminar(int $id): bool
    {
        $tipoDocumento = $this->model->withCount('personas')->find($id);
        return $tipoDocumento && $tipoDocumento->personas_count === 0;
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
            ->orWhere('descripcion', 'like', "%{$termino}%")
            ->orderBy('nombre')
            ->limit($limit)
            ->get();
    }

    public function obtenerParaSelect(): array
    {
        return $this->model->activos()
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'value' => $item->id_tipo_doc,
                    'label' => $item->nombre
                ];
            })
            ->toArray();
    }

    public function obtenerConEstadisticas()
    {
        return $this->model->withCount('personas')
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'id' => $item->id_tipo_doc,
                    'nombre' => $item->nombre,
                    'descripcion' => $item->descripcion,
                    'total_personas' => $item->personas_count,
                    'estado' => $item->estado
                ];
            });
    }

    public function validarNombreUnico(string $nombre, ?int $excluirId = null): bool
    {
        $query = $this->model->where('nombre', $nombre);

        if ($excluirId) {
            $query->where('id_tipo_doc', '!=', $excluirId);
        }

        return !$query->exists();
    }
}
