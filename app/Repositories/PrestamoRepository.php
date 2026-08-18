<?php

namespace App\Repositories;

use App\Models\PrestamoExpediente;
use App\Models\Denuncia;
use App\Models\Personal;
use App\Repositories\Contracts\PrestamoRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PrestamoRepository implements PrestamoRepositoryInterface
{
    public function __construct(
        protected PrestamoExpediente $model
    ) {}

    public function findAll(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->with(['denuncia', 'personal', 'usuarioRecibido']);

        if (!empty($filters['estado']) && $filters['estado'] !== 'todos') {
            // 👇 Convertir a MAYÚSCULAS para que coincida con BD
            $estadoMap = [
                'activo' => 'ACTIVO',
                'prestado' => 'ACTIVO',
                'retrasado' => 'RETRASADO',
                'devuelto' => 'DEVUELTO'
            ];
            $estadoBD = $estadoMap[$filters['estado']] ?? strtoupper($filters['estado']);
            $query->where('estado', $estadoBD);
        }

        if (!empty($filters['fecha_desde'])) {
            $query->whereDate('fecha_prestamo', '>=', $filters['fecha_desde']);
        }

        if (!empty($filters['fecha_hasta'])) {
            $query->whereDate('fecha_prestamo', '<=', $filters['fecha_hasta']);
        }

        if (!empty($filters['personal_id'])) {
            $query->where('personal_id', $filters['personal_id']);
        }

        $sortField = $filters['sort_field'] ?? 'fecha_prestamo';
        $sortDirection = $filters['sort_direction'] ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        return $query->paginate($perPage);
    }

    public function findById(int $id): ?object
    {
        return $this->model->with(['denuncia', 'personal', 'usuarioRecibido'])->find($id);
    }

   public function create(array $data): object
{
    return DB::transaction(function () use ($data) {

        $prestamo = $this->model->create([
            'denuncia_id' => $data['denuncia_id'],
            'personal_id' => $data['personal_id'],
            'fecha_prestamo' => $data['fecha_prestamo'],
            'fecha_retorno_prevista' => $data['fecha_retorno_prevista'],
            'motivo' => $data['motivo'],
            'estado' => 'ACTIVO'  // El trigger lo pondrá en ACTIVO
        ]);

        Log::info('Préstamo creado', [
            'prestamo_id' => $prestamo->prestamo_id,
            'identificador' => $prestamo->identificador, // Ya tiene el UUID generado
            'usuario_id' => auth()->id()
        ]);

        return $prestamo->load(['denuncia', 'personal', 'usuarioRecibido']);
    });
}
    public function registrarDevolucion(int $id, array $data): object
    {
        return DB::transaction(function () use ($id, $data) {
            $prestamo = $this->findById($id);
            if (!$prestamo) {
                throw new \Exception('Préstamo no encontrado');
            }

            $prestamo->update([
                'fecha_devolucion' => $data['fecha_devolucion'],
                'usuario_recibido_id' => $data['usuario_recibido_id'],
                'observaciones' => $data['observaciones_devolucion'] ?? null,
                // 👇 El trigger fn_validar_prestamo actualizará el estado automáticamente
                // No necesitamos setearlo manualmente porque el trigger lo hace
            ]);

            Log::info('Devolución registrada', [
                'prestamo_id' => $id,
                'usuario_id' => auth()->id()
            ]);

            return $prestamo->fresh()->load(['denuncia', 'personal', 'usuarioRecibido']);
        });
    }

  public function getEstadisticas(): array
{
    $hoy = now()->startOfDay();
    $hoyDate = $hoy->toDateString();

    return [
        'prestamos_activos' => $this->model->where('estado', 'ACTIVO')->count(),
        'devueltos_hoy' => $this->model->where('estado', 'DEVUELTO')
            ->whereDate('fecha_devolucion', $hoyDate)
            ->count(),
        'retrasados' => $this->model->where('estado', 'RETRASADO')->count(),
        'por_vencer' => $this->model->where('estado', 'ACTIVO')
            ->whereDate('fecha_retorno_prevista', $hoyDate)
            ->count(),
        'total_prestamos' => $this->model->count(),
    ];
}

    public function getPrestamosActivos(): Collection
    {
        return $this->model->with(['denuncia', 'personal'])
            ->where('estado', 'ACTIVO')  // 👈 MAYÚSCULA
            ->orderBy('fecha_retorno_prevista')
            ->get();
    }

    public function getPrestamosRetrasados(): Collection
    {
        return $this->model->with(['denuncia', 'personal'])
            ->where('estado', 'RETRASADO')  // 👈 MAYÚSCULA
            ->orderBy('fecha_retorno_prevista')
            ->get();
    }

public function getDenunciasDisponibles(): Collection
{
    // Incluir tanto ACTIVO como RETRASADO como préstamos activos
    $prestamosActivos = $this->model->whereIn('estado', ['ACTIVO', 'RETRASADO'])
        ->pluck('denuncia_id')
        ->toArray();

    return Denuncia::with([
        'persona',
        'estadoDenuncia',
        'tipoConflicto',
        'evidencias',
        'prestamoexpediente'
    ])
    ->whereNotIn('denuncia_id', $prestamosActivos)  // Excluir las que tienen préstamo ACTIVO o RETRASADO
    ->whereHas('estadoDenuncia', function($query) {
        $query->whereNotIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA']);
    })
    ->orderBy('fecha_ingreso', 'desc')
    ->limit(100)
    ->get();
}

 public function getPersonalDisponible(): Collection
{
    // ✅ Para PostgreSQL usar DB::raw('true')
    return Personal::with(['persona', 'cargo'])
        ->where('activo', DB::raw('true'))  // ← CAMBIO CLAVE
        ->whereNull('fecha_egreso')
        ->orderBy('fecha_ingreso')
        ->get();
}

    public function verificarDisponibilidad(int $denunciaId): bool
    {
        // 👇 Cambiar 'prestado' por 'ACTIVO'
        return !$this->model->where('denuncia_id', $denunciaId)
            ->where('estado', 'ACTIVO')
            ->exists();
    }

    // Métodos auxiliares que faltan
    public function update(int $id, array $data): object
    {
        $prestamo = $this->findById($id);
        if (!$prestamo) {
            throw new \Exception('Préstamo no encontrado');
        }

        $prestamo->update($data);
        return $prestamo->fresh()->load(['denuncia', 'personal', 'usuarioRecibido']);
    }

    public function delete(int $id): bool
    {
        $prestamo = $this->findById($id);
        if (!$prestamo) {
            return false;
        }
        return (bool) $prestamo->delete();
    }

    public function getHistorial(): Collection
    {
        return $this->model->with(['denuncia', 'personal', 'usuarioRecibido'])
            ->orderBy('fecha_prestamo', 'desc')
            ->get();
    }
}
