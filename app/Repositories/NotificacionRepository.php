<?php

namespace App\Repositories;

use App\Models\Notificacion;
use App\Models\TipoNotificacion;
use App\Models\Denuncia;
use App\ValueObjects\NotificacionData;
use App\Repositories\Contracts\NotificacionRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Exports\NotificacionesExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;
use App\Exports\ConstanciaNotificacionPDF;
use App\Exports\NotificacionIndividualExport;

class NotificacionRepository implements NotificacionRepositoryInterface
{
    public function __construct(
        protected Notificacion $model
    ) {}

    public function findAll(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->with(['denuncia.persona', 'tipoNotificacion']);

        if (!empty($filters['fecha_inicio'])) {
            $query->where('fecha_emision', '>=', $filters['fecha_inicio']);
        }

        if (!empty($filters['fecha_fin'])) {
            $query->where('fecha_emision', '<=', $filters['fecha_fin'] . ' 23:59:59');
        }

        if (!empty($filters['tipo_notificacion'])) {
            $query->where('tipo_notificacion_id', $filters['tipo_notificacion']);
        }

        if (!empty($filters['estado'])) {
            $query->where('estado', $filters['estado']);
        }

        if (!empty($filters['destinatario'])) {
            $query->where('destinatario', 'like', '%' . $filters['destinatario'] . '%');
        }

        return $query->orderBy('fecha_emision', 'desc')->paginate($perPage);
    }

    public function findById(int $id): ?object
    {
        return $this->model->with(['denuncia.persona', 'denuncia.involucrados', 'tipoNotificacion'])
            ->find($id);
    }

    public function create(array $data): object
    {
        return DB::transaction(function () use ($data) {
            // ✅ Usar ValueObject en lugar de DTO
            $notificacionData = NotificacionData::fromArray($data);
            $notificacion = $this->model->create($notificacionData->toArray());

            Log::info('Notificación creada', [
                'notificacion_id' => $notificacion->notificacion_id,
                'usuario_id' => auth()->id()
            ]);

            return $notificacion->load(['denuncia.persona', 'tipoNotificacion']);
        });
    }

    public function update(int $id, array $data): object
    {
        return DB::transaction(function () use ($id, $data) {
            $notificacion = $this->findById($id);
            if (!$notificacion) {
                throw new \Exception('Notificación no encontrada');
            }

            $notificacion->update($data);

            Log::info('Notificación actualizada', [
                'notificacion_id' => $id,
                'usuario_id' => auth()->id()
            ]);

            return $notificacion->fresh()->load(['denuncia.persona', 'tipoNotificacion']);
        });
    }

    public function delete(int $id): bool
    {
        $notificacion = $this->findById($id);
        if (!$notificacion) {
            return false;
        }

        return (bool) $notificacion->delete();
    }

    public function cancel(int $id, string $motivo): bool
    {
        return DB::transaction(function () use ($id, $motivo) {
            $notificacion = $this->findById($id);
            if (!$notificacion) {
                throw new \Exception('Notificación no encontrada');
            }

            if (!in_array($notificacion->estado, ['EMITIDA', 'PENDIENTE'])) {
                throw new \Exception('Solo se pueden cancelar notificaciones en estado EMITIDA o PENDIENTE');
            }

            $notificacion->update([
                'estado' => Notificacion::ESTADOS['CANCELADA'],
                'observaciones' => $motivo . ' - ' . ($notificacion->observaciones ?? '')
            ]);

            Log::warning('Notificación cancelada', [
                'notificacion_id' => $id,
                'motivo' => $motivo,
                'usuario_id' => auth()->id()
            ]);

            return true;
        });
    }

    public function getEstadisticas(array $filters = []): array
    {
        $query = $this->model->query();

        if (!empty($filters['fecha_inicio'])) {
            $query->where('fecha_emision', '>=', $filters['fecha_inicio']);
        }

        if (!empty($filters['fecha_fin'])) {
            $query->where('fecha_emision', '<=', $filters['fecha_fin'] . ' 23:59:59');
        }

        return [
            'total' => $query->count(),
            'emitidas' => (clone $query)->where('estado', 'EMITIDA')->count(),
            'pendientes' => (clone $query)->where('estado', 'PENDIENTE')->count(),
            'canceladas' => (clone $query)->where('estado', 'CANCELADA')->count(),
            'entregadas' => (clone $query)->where('estado', 'ENTREGADA')->count()
        ];
    }

    public function getTiposNotificacion(): Collection
    {
        return TipoNotificacion::where('activo', true)->get();
    }

  public function getDenunciasDisponibles(): Collection
{
    // Obtener denuncias activas usando la vista vw_denuncias_activas
    // o filtrando manualmente
    return Denuncia::with(['persona', 'estadoDenuncia'])
        ->whereHas('estadoDenuncia', function($query) {
            // Excluir estados archivados, cerrados y resueltos
            $query->whereNotIn('nombre', ['ARCHIVADA', 'CERRADA', 'RESUELTA']);
        })
        ->orWhereDoesntHave('estadoDenuncia') // Denuncias sin estado
        ->orderBy('fecha_ingreso', 'desc')
        ->limit(100)
        ->get();
}

public function generarConstancia(int $id): array
{
    $notificacion = $this->findById($id);
    if (!$notificacion) {
        throw new \Exception('Notificación no encontrada');
    }

    // Generar PDF usando Dompdf
    $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdfs.constancia-notificacion', [
        'notificacion' => $notificacion,
        'fecha_generacion' => now()
    ]);

    // ✅ Retornar el PDF directamente (NO base64)
    return [
        'pdf' => $pdf->output(),
        'filename' => "constancia_notificacion_{$id}.pdf"
    ];
}

public function exportarExcelIndividual(int $id): string
{
    $notificacion = $this->findById($id);
    if (!$notificacion) {
        throw new \Exception('Notificación no encontrada');
    }

    $fileName = 'notificacion_' . $id . '_' . date('Ymd_His') . '.xlsx';
    $filePath = 'exports/' . $fileName;

    Excel::store(new NotificacionIndividualExport($notificacion), $filePath, 'public');

    return $filePath;
}

public function exportarExcel(array $filters = []): string
{
    $fileName = 'notificaciones_' . date('Ymd_His') . '.xlsx';
    $filePath = 'exports/' . $fileName;

    Excel::store(new NotificacionesExport($filters), $filePath, 'public');

    return $filePath;
}
}
