<?php

namespace App\Services;

use App\Services\Contracts\PrestamoServiceInterface;
use App\Repositories\Contracts\PrestamoRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\PrestamoExpediente;
use Log;
use App\Models\Denuncia;

class PrestamoService implements PrestamoServiceInterface
{
    public function __construct(
        protected PrestamoRepositoryInterface $repository
    ) {}

    public function obtenerPrestamo(int $id): ?object
    {
        $prestamo = $this->repository->findById($id);
        if (!$prestamo) {
            throw new \Exception('Préstamo no encontrado', 404);
        }
        return $prestamo;
    }

    public function crearPrestamo(array $data): object
    {
        $this->validarDatosPrestamo($data);

        if (!$this->verificarDisponibilidad($data['denuncia_id'])) {
            throw ValidationException::withMessages([
                'denuncia_id' => ['El expediente no está disponible para préstamo']
            ]);
        }

        return $this->repository->create($data);
    }

    public function actualizarPrestamo(int $id, array $data): object
    {
        $this->validarDatosPrestamo($data, true);
        return $this->repository->update($id, $data);
    }

    public function eliminarPrestamo(int $id): bool
    {
        return $this->repository->delete($id);
    }

    public function registrarDevolucion(int $id, array $data): object
    {
        $validator = Validator::make($data, [
            'fecha_devolucion' => 'required|date',
            'usuario_recibido_id' => 'required|exists:usuario,usuario_id',
            'observaciones_devolucion' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $this->repository->registrarDevolucion($id, $data);
    }

    public function obtenerEstadisticas(): array
    {
        return $this->repository->getEstadisticas();
    }

    public function obtenerPrestamosActivos(): array
    {
        return $this->repository->getPrestamosActivos()->toArray();
    }

    public function obtenerPrestamosRetrasados(): array
    {
        return $this->repository->getPrestamosRetrasados()->toArray();
    }

    public function obtenerHistorial(): array
    {
        return $this->repository->getHistorial()->toArray();
    }

    public function obtenerDenunciasDisponibles(): array
{
    try {
        $denuncias = $this->repository->getDenunciasDisponibles();

        return $denuncias->map(function($denuncia) {
            return [
                'id_denuncia' => $denuncia->denuncia_id,
                'numero_expediente' => $denuncia->numero_expediente ?? 'N/A',
                'tipo_denuncia' => $denuncia->tipoConflicto?->nombre ?? 'No especificado',
                'estado' => $denuncia->estadoDenuncia?->nombre ?? 'Activo',
                'fecha_creacion' => $denuncia->fecha_ingreso?->toISOString(),
                'descripcion' => $denuncia->descripcion ?? '',
                'documentos' => $denuncia->evidencias?->count() ?? 0,
                'total_prestamos' => $denuncia->prestamoexpediente?->count() ?? 0,
                'denunciante' => $denuncia->persona?->nombres . ' ' . $denuncia->persona?->apellidos,
                'en_prestamo' => false,
                'firmas' => [],
                'auditorias' => []
            ];
        })->toArray();

    } catch (\Exception $e) {
        Log::error('Error en obtenerDenunciasDisponibles: ' . $e->getMessage());
        return [];
    }
}
public function obtenerPersonalDisponible(): array
{
    $personal = $this->repository->getPersonalDisponible();

    return $personal->map(function($personalItem) {
        return [
            'id_personal' => $personalItem->personal_id,
            'nombre_completo' => $personalItem->persona?->nombres . ' ' . $personalItem->persona?->apellidos,
            'cargo' => $personalItem->cargo?->nombre ?? 'Sin cargo',
            'fecha_ingreso' => $personalItem->fecha_ingreso?->toISOString()
        ];
    })->toArray();
}

    public function verificarDisponibilidad(int $denunciaId): bool
    {
        return $this->repository->verificarDisponibilidad($denunciaId);
    }

    public function exportarExcel(array $filters = []): string
    {
        // Implementar exportación a Excel
        return storage_path('app/exports/prestamos_' . date('Ymd_His') . '.xlsx');
    }

    protected function validarDatosPrestamo(array $data, bool $isUpdate = false): void
    {
        $rules = [
            'denuncia_id' => 'required|exists:denuncia,denuncia_id',
            'personal_id' => 'required|exists:personal,personal_id',
            'fecha_prestamo' => 'required|date',
            'fecha_retorno_prevista' => 'required|date|after:fecha_prestamo',
            'motivo' => 'required|string|min:5'
        ];

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
    }
    public function obtenerDenunciaCompleta(int $denunciaId): object
{
    return Denuncia::with(['persona', 'tipoConflicto', 'estadoDenuncia', 'evidencias', 'prestamoexpediente'])
        ->findOrFail($denunciaId);
}

public function listarPrestamos(int $perPage = 15, array $filters = []): LengthAwarePaginator
{
    // Primero, actualizar estados retrasados
    $this->actualizarEstadosRetrasados();

    return $this->repository->findAll($perPage, $filters);
}

public function actualizarEstadosRetrasados(): void
{
    $actualizados = PrestamoExpediente::where('estado', 'ACTIVO')
        ->where('fecha_retorno_prevista', '<', now())
        ->update(['estado' => 'RETRASADO']);

    if ($actualizados > 0) {
        Log::info("Se actualizaron {$actualizados} préstamos a estado RETRASADO");
    }
}

}
