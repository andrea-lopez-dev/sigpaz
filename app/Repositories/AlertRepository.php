<?php

namespace App\Repositories;

use App\Interfaces\Repositories\AlertRepositoryInterface;
use App\Models\Alert;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class AlertRepository implements AlertRepositoryInterface
{
    protected Alert $model;

    public function __construct(Alert $model)
    {
        $this->model = $model;
    }

    public function create(array $data): object
    {
        $data['fecha_creacion'] = now();

        if (!isset($data['tipo_alerta'])) {
            $data['tipo_alerta'] = 'info';
        }

        // ✅ Usar DB::raw para boolean en PostgreSQL
        if (isset($data['leida'])) {
            $data['leida'] = DB::raw($data['leida'] ? 'TRUE' : 'FALSE');
        } else {
            $data['leida'] = DB::raw('FALSE');
        }

        return DB::transaction(function () use ($data) {
            return $this->model->create($data);
        });
    }

    public function markAsRead(int $alertId, int $userId): bool
    {
        return $this->model
            ->where('alerta_id', $alertId)
            ->where('usuario_id', $userId)
            ->where('leida', DB::raw('FALSE'))  // ✅ Usar DB::raw
            ->update([
                'leida' => DB::raw('TRUE'),  // ✅ Usar DB::raw
                'leida_en' => now()
            ]) > 0;
    }

    public function markAllAsRead(int $userId): int
    {
        return $this->model
            ->where('usuario_id', $userId)
            ->where('leida', DB::raw('FALSE'))  // ✅ Usar DB::raw
            ->update([
                'leida' => DB::raw('TRUE'),  // ✅ Usar DB::raw
                'leida_en' => now()
            ]);
    }

    public function deleteAll(int $userId): int
    {
        return $this->model
            ->where('usuario_id', $userId)
            ->delete();
    }

    public function getUnreadCount(int $userId): int
    {
        return $this->model
            ->where('usuario_id', $userId)
            ->where('leida', DB::raw('FALSE'))  // ✅ Usar DB::raw
            ->where(function($q) {
                $q->whereNull('expira_en')
                  ->orWhere('expira_en', '>', now());
            })
            ->count();
    }

    public function getUserAlerts(int $userId, int $perPage = 20): LengthAwarePaginator
    {
        return $this->model
            ->where('usuario_id', $userId)
            ->where(function($q) {
                $q->whereNull('expira_en')
                  ->orWhere('expira_en', '>', now());
            })
            ->orderBy('fecha_creacion', 'desc')
            ->paginate($perPage);
    }

    public function getRecentAlerts(int $userId, int $limit = 50): Collection
    {
        return $this->model
            ->where('usuario_id', $userId)
            ->where(function($q) {
                $q->whereNull('expira_en')
                  ->orWhere('expira_en', '>', now());
            })
            ->orderBy('fecha_creacion', 'desc')
            ->limit($limit)
            ->get();
    }

    public function deleteExpired(): int
    {
        return $this->model
            ->where('expira_en', '<', now())
            ->delete();
    }

    public function findById(int $alertId): ?object
    {
        return $this->model->find($alertId);
    }
}
