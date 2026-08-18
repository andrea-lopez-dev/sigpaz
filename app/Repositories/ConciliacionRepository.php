<?php

namespace App\Repositories;

use App\Models\Conciliacion;
use App\Interfaces\Repositories\ConciliacionRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ConciliacionRepository implements ConciliacionRepositoryInterface
{
    protected $model;

    public function __construct(Conciliacion $model)
    {
        $this->model = $model;
    }

    /**
     * Buscar conciliación por ID
     */
    public function findById(int $id): ?Conciliacion
    {
        return $this->model->with(['denuncia', 'votos.personal.persona', 'usuarioCreacion'])->find($id);
    }

    /**
     * Buscar conciliación por ID con votos (versión simplificada)
     */
    public function findByIdWithVotos(int $id): ?Conciliacion
    {
        return $this->model->with(['denuncia', 'votos.personal.persona', 'votos.personal.cargo'])->find($id);
    }

    /**
     * Buscar conciliación por ID de denuncia
     */
    public function findByDenunciaId(int $denunciaId): ?Conciliacion
    {
        return $this->model->where('denuncia_id', $denunciaId)->first();
    }

    /**
     * Obtener todas las conciliaciones
     */
    public function all(): Collection
    {
        return $this->model->with(['denuncia'])->orderBy('fecha_inicio', 'desc')->get();
    }

    /**
     * Paginar conciliaciones con filtros
     */
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->with(['denuncia', 'votos']);

        // Aplicar filtros
        if (!empty($filters['estado'])) {
            $query->where('estado', $filters['estado']);
        }

        if (!empty($filters['denuncia_id'])) {
            $query->where('denuncia_id', $filters['denuncia_id']);
        }

        if (!empty($filters['fecha_desde'])) {
            $query->whereDate('fecha_audiencia', '>=', $filters['fecha_desde']);
        }

        if (!empty($filters['fecha_hasta'])) {
            $query->whereDate('fecha_audiencia', '<=', $filters['fecha_hasta']);
        }

        // Búsqueda por código de denuncia
        if (!empty($filters['search'])) {
            $query->whereHas('denuncia', function($q) use ($filters) {
                $q->where('codigo_externo', 'ILIKE', "%{$filters['search']}%")
                  ->orWhere('numero_expediente', 'ILIKE', "%{$filters['search']}%");
            });
        }

        return $query->orderBy('fecha_audiencia', 'desc')->paginate($perPage);

    }

    /**
     * Crear una nueva conciliación
     */
    public function create(array $data): Conciliacion
    {
        $data['fecha_creacion'] = now();
        $data['usuario_creacion_id'] = auth()->id();

        return $this->model->create($data);
    }

    /**
     * Actualizar una conciliación
     */
    public function update(int $id, array $data): bool
    {
        $conciliacion = $this->findById($id);

        if (!$conciliacion) {
            return false;
        }

        $data['fecha_actualizacion'] = now();
        $data['usuario_actualizacion_id'] = auth()->id();

        return $conciliacion->update($data);
    }

    /**
     * Eliminar una conciliación
     */
    public function delete(int $id): bool
    {
        $conciliacion = $this->findById($id);
        return $conciliacion ? $conciliacion->delete() : false;
    }

    /**
     * Obtener conciliaciones por estado
     */
    public function getByEstado(string $estado): Collection
    {
        return $this->model->where('estado', $estado)
            ->with(['denuncia'])
            ->orderBy('fecha_inicio', 'desc')
            ->get();
    }

    /**
     * Obtener conciliaciones activas (incompletas o en proceso)
     */
    public function getActivas(): Collection
    {
        return $this->model->whereIn('estado', [Conciliacion::ESTADO_INCOMPLETA, Conciliacion::ESTADO_EN_PROCESO])
            ->with(['denuncia'])
            ->orderBy('fecha_inicio', 'desc')
            ->get();
    }

    /**
     * Obtener conciliaciones completadas
     */
    public function getCompletadas(): Collection
    {
        return $this->model->where('estado', Conciliacion::ESTADO_COMPLETA)
    ->with(['denuncia'])
    ->orderBy('fecha_audiencia', 'desc') // ✅
    ->get();
    }

    /**
     * Obtener estadísticas de conciliaciones
     */
    public function getEstadisticas(): array
    {
        $totales = [
            'completas' => $this->model->where('estado', Conciliacion::ESTADO_COMPLETA)->count(),
            'en_proceso' => $this->model->where('estado', Conciliacion::ESTADO_EN_PROCESO)->count(),
            'incompletas' => $this->model->where('estado', Conciliacion::ESTADO_INCOMPLETA)->count(),
            'total' => $this->model->count()
        ];

        // Votos promedio
        $promedioVotos = DB::table('conciliacion')
            ->leftJoin('votoconciliacion', 'conciliacion.conciliacion_id', '=', 'votoconciliacion.conciliacion_id')
            ->select(DB::raw('COALESCE(AVG(voto_count), 0) as promedio'))
            ->from(DB::raw('(SELECT conciliacion_id, COUNT(*) as voto_count FROM votoconciliacion GROUP BY conciliacion_id) as votos'))
            ->value('promedio');

        return [
            'totales' => $totales,
            'promedio_votos' => round($promedioVotos, 2),
            'total_votos_emitidos' => DB::table('votoconciliacion')->count()
        ];
    }

    /**
     * Verificar si una denuncia ya tiene conciliación
     */
    public function denunciaTieneConciliacion(int $denunciaId): bool
    {
        return $this->model->where('denuncia_id', $denunciaId)->exists();
    }

    /**
     * Búsqueda avanzada
     */
    public function search(array $params): LengthAwarePaginator
    {
        $query = $this->model->with(['denuncia', 'votos']);

        if (!empty($params['estado'])) {
            $query->where('estado', $params['estado']);
        }

        if (!empty($params['denuncia_id'])) {
            $query->where('denuncia_id', $params['denuncia_id']);
        }

        if (!empty($params['fecha_desde'])) {
            $query->whereDate('fecha_inicio', '>=', $params['fecha_desde']);
        }

        if (!empty($params['fecha_hasta'])) {
            $query->whereDate('fecha_inicio', '<=', $params['fecha_hasta']);
        }

        if (!empty($params['tiene_resultado'])) {
            $tieneResultado = filter_var($params['tiene_resultado'], FILTER_VALIDATE_BOOLEAN);
            if ($tieneResultado) {
                $query->whereNotNull('resultado_final');
            } else {
                $query->whereNull('resultado_final');
            }
        }

        $perPage = $params['per_page'] ?? 15;

        return $query->orderBy('fecha_inicio', 'desc')->paginate($perPage);
    }



}
