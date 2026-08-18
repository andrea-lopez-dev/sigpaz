<?php
namespace App\Repositories;

use App\Models\EstadoCivil;

class EstadoCivilRepository extends CatalogoRepository
{
    public function __construct(EstadoCivil $model)
    {
        parent::__construct($model);
    }

    // No necesitas sobrescribir métodos a menos que necesites lógica específica
    public function obtenerParaSelect(): array
    {
        return $this->model->activos()
            ->orderBy('nombre')
            ->get()
            ->map(function($item) {
                return [
                    'value' => $item->id_estado,
                    'label' => $item->nombre
                ];
            })
            ->toArray();
    }
}
