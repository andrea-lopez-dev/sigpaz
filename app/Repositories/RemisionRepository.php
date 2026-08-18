<?php
namespace App\Repositories;

use App\Models\Remision;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class RemisionRepository
{
    protected $model;

    public function __construct(Remision $model)
    {
        $this->model = $model;
    }

    public function findById(int $id): ?Remision
    {
        return $this->model->with(['denuncia', 'institucion'])->find($id);
    }

    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->with(['denuncia', 'institucion']);

        if (!empty($filters['denuncia_id'])) {
            $query->where('denuncia_id', $filters['denuncia_id']);
        }

        if (!empty($filters['institucion_id'])) {
            $query->where('institucion_id', $filters['institucion_id']);
        }

        if (!empty($filters['estado'])) {
            $query->where('estado', $filters['estado']);
        }

        if (!empty($filters['fecha_desde'])) {
            $query->whereDate('fecha_remision', '>=', $filters['fecha_desde']);
        }

        if (!empty($filters['fecha_hasta'])) {
            $query->whereDate('fecha_remision', '<=', $filters['fecha_hasta']);
        }

        return $query->orderBy('fecha_remision', 'desc')->paginate($perPage);
    }

    public function create(array $data): Remision
    {
        $data['fecha_creacion'] = now();
        return $this->model->create($data);
    }

    public function update(int $id, array $data): bool
    {
        $remision = $this->findById($id);
        return $remision ? $remision->update($data) : false;
    }

    public function delete(int $id): bool
    {
        $remision = $this->findById($id);
        return $remision ? $remision->delete() : false;
    }

    public function getEstadisticasPorInstitucion(int $institucionId): array
    {
        return [
            'total' => $this->model->where('institucion_id', $institucionId)->count(),
            'pendientes' => $this->model->where('institucion_id', $institucionId)
                ->where('estado', 'PENDIENTE')->count(),
            'respondidas' => $this->model->where('institucion_id', $institucionId)
                ->whereIn('estado', ['ACEPTADA', 'RECHAZADA'])->count()
        ];
    }
}
