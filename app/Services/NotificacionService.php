<?php

namespace App\Services;

use App\Services\Contracts\NotificacionServiceInterface;
use App\Repositories\Contracts\NotificacionRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\Notificacion;
use App\Exports\ReporteGeneralPDF;
use App\Mail\ReporteNotificacionesMail;
use App\Domain\ValueObjects\Email;
use Illuminate\Support\Facades\Mail;

class NotificacionService implements NotificacionServiceInterface
{
    public function __construct(
        protected NotificacionRepositoryInterface $repository
    ) {}

    public function listarNotificaciones(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        return $this->repository->findAll($perPage, $filters);
    }

    public function obtenerNotificacion(int $id): ?object
    {
        $notificacion = $this->repository->findById($id);
        if (!$notificacion) {
            throw new \Exception('Notificación no encontrada', 404);
        }
        return $notificacion;
    }

    public function crearNotificacion(array $data): object
    {
        $this->validarDatosNotificacion($data);
        return $this->repository->create($data);
    }

    public function actualizarNotificacion(int $id, array $data): object
    {
        $this->validarDatosNotificacion($data, true);
        return $this->repository->update($id, $data);
    }

    public function cancelarNotificacion(int $id, string $motivo): bool
    {
        if (empty(trim($motivo))) {
            throw ValidationException::withMessages([
                'motivo' => ['El motivo de cancelación es requerido']
            ]);
        }
        return $this->repository->cancel($id, $motivo);
    }

    public function obtenerEstadisticas(array $filters = []): array
    {
        return $this->repository->getEstadisticas($filters);
    }

    public function obtenerTiposNotificacion(): array
    {
        return $this->repository->getTiposNotificacion()->toArray();
    }

    public function obtenerDenunciasDisponibles(): array
    {
        return $this->repository->getDenunciasDisponibles()->map(function($denuncia) {
            return [
                'id_denuncia' => $denuncia->denuncia_id,
                'numero_denuncia' => $denuncia->numero_expediente ?? $denuncia->codigo_externo ?? $denuncia->denuncia_id,
                'denunciante_nombre' => $denuncia->persona?->nombre_completo ?? 'No especificado',
                'descripcion_corta' => substr($denuncia->descripcion ?? '', 0, 100),
                'estado' => $denuncia->estadoDenuncia?->nombre ?? 'Desconocido',
                'fecha_registro' => $denuncia->fecha_ingreso?->toISOString(),
                'descripcion_hechos' => $denuncia->descripcion,
                'departamento' => null, // Se puede obtener de la dirección
                'municipio' => null,
                'direccion' => null,
                'involucrados' => $denuncia->involucrados->map(function($inv) {
                    return [
                        'nombre' => $inv->persona?->nombre_completo ?? 'Desconocido',
                        'rol' => $inv->rol
                    ];
                })
            ];
        })->toArray();
    }

    public function exportarReporteExcel(array $filters = []): string
    {
        return $this->repository->exportarExcel($filters);
    }

   public function generarConstancia(int $id): array
{
    return $this->repository->generarConstancia($id);
}

    public function obtenerReporteDetallado(array $filters): array
    {
        $notificaciones = $this->repository->findAll(999999, $filters);
        $estadisticas = $this->repository->getEstadisticas($filters);

        return [
            'fecha_inicio' => $filters['fecha_inicio'] ?? null,
            'fecha_fin' => $filters['fecha_fin'] ?? null,
            'filtros' => $filters,
            'detalle' => $notificaciones->items(),
            'resumen' => $estadisticas
        ];
    }

    protected function validarDatosNotificacion(array $data, bool $isUpdate = false): void
    {
        $rules = [
            'denuncia_id' => 'required|exists:denuncia,denuncia_id',
            'tipo_notificacion_id' => 'required|exists:tiponotificacion,tipo_notificacion_id',
            'fecha_emision' => 'required|date',
            'destinatario' => 'required|string|max:150',
            'medio' => 'required|in:' . implode(',', array_keys(Notificacion::MEDIOS)),
            'contenido' => 'nullable|string',
            'observaciones' => 'nullable|string'
        ];

        if (!$isUpdate) {
            $rules['estado'] = 'in:' . implode(',', array_keys(Notificacion::ESTADOS));
        }

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }

    public function exportarExcelIndividual(int $id): string
{
    return $this->repository->exportarExcelIndividual($id);
}

public function exportarReporteCompletoPDF(array $filters): string
{
    $result = $this->repository->findAll(999999, $filters);

    // ✅ Convertir a Collection si es necesario
    $notificaciones = $result->items(); // Esto ya es un array
    $estadisticas = $this->repository->getEstadisticas($filters);

    // ✅ Pasar como Collection o modificar ReporteGeneralPDF
    return ReporteGeneralPDF::generate(collect($notificaciones), $estadisticas, $filters);
}

public function enviarReportePorCorreo(array $filters, string $email): void
{
    $emailVO = new Email($email);
    $filePath = $this->repository->exportarExcel($filters);
    $fullPath = storage_path('app/public/' . $filePath);

    if (!file_exists($fullPath)) {
        throw new \Exception('No se pudo generar el reporte');
    }

    $fileName = 'reporte_notificaciones_' . date('Ymd_His') . '.xlsx';

    Mail::to($emailVO->getValue())->send(new ReporteNotificacionesMail(
        email: $emailVO,
        filters: $filters,
        reportePath: $fullPath,
        reporteNombre: $fileName
    ));
}
}
