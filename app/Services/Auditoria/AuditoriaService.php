<?php

namespace App\Services\Auditoria;

use App\Contracts\AuditoriaServiceInterface;
use App\Contracts\LogRepositoryInterface;
use App\Contracts\AnalizadorPatronesInterface;
use App\DTOs\Auditoria\LogAuditoriaDTO;
use App\DTOs\Auditoria\FiltrosAuditoriaDTO;
use App\Services\Auditoria\Exportadores\ExportadorFactory;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class AuditoriaService implements AuditoriaServiceInterface
{
    protected LogRepositoryInterface $repository;
    protected ExportadorFactory $exportadorFactory;
    protected AnalizadorPatronesInterface $analizadorPatrones;

    public function __construct(
        LogRepositoryInterface $repository,
        ExportadorFactory $exportadorFactory,
        AnalizadorPatronesInterface $analizadorPatrones
    ) {
        $this->repository = $repository;
        $this->exportadorFactory = $exportadorFactory;
        $this->analizadorPatrones = $analizadorPatrones;
    }

    public function registrar(array $datos): object
    {
        $dto = LogAuditoriaDTO::fromArray($datos);
        return $this->repository->save($dto->toArray());
    }

    public function listar(array $filtros = []): LengthAwarePaginator
    {
        $filtrosDTO = FiltrosAuditoriaDTO::fromRequest($filtros);
        return $this->repository->paginate(
            $filtrosDTO->toArray(),
            $filtrosDTO->getPorPagina()
        );
    }

    public function obtenerPorId(int $id): ?object
    {
        return $this->repository->find($id);
    }

    public function obtenerEstadisticas(array $filtros = []): array
    {
        $filtrosDTO = FiltrosAuditoriaDTO::fromRequest($filtros);
        $filtrosArray = $filtrosDTO->toArray();

        return [
            'total_registros' => $this->repository->count($filtrosArray),
            'por_accion' => $this->repository->getEstadisticasPorAccion($filtrosArray),
            'por_tabla' => $this->repository->getEstadisticasPorTabla($filtrosArray),
            'actividad_por_hora' => $this->repository->getActividadPorHora($filtrosArray),
            'usuarios_activos' => $this->repository->getUsuariosActivos($filtrosArray),
            'eventos_criticos' => $this->repository->getEventosCriticos($filtrosArray)->count()
        ];
    }

      public function exportar(array $filtros, string $formato, array $opciones = []): string
    {
        try {
            $filtrosDTO = FiltrosAuditoriaDTO::fromRequest($filtros);
            $datos = $this->repository->findAll($filtrosDTO->toArray());

            if ($datos->isEmpty()) {
                throw new \Exception('No hay datos para exportar con los filtros seleccionados');
            }

            Log::info('Exportando auditoría', [
                'formato' => $formato,
                'total_registros' => $datos->count(),
                'filtros' => $filtros
            ]);

            $exportador = $this->exportadorFactory->make($formato);
            return $exportador->exportar($datos, $opciones);

        } catch (\Exception $e) {
            Log::error('Error en exportación: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'filtros' => $filtros,
                'formato' => $formato
            ]);
            throw $e;
        }
    }

    public function analizarPatrones(array $filtros = []): array
    {
        $filtrosDTO = FiltrosAuditoriaDTO::fromRequest($filtros);
        $datos = $this->repository->findAll($filtrosDTO->toArray());
        return $this->analizadorPatrones->analizar($datos);
    }

    public function obtenerAlertas(array $filtros = []): Collection
    {
        $filtrosDTO = FiltrosAuditoriaDTO::fromRequest($filtros);
        $filtrosArray = $filtrosDTO->toArray();
        $filtrosArray['niveles'] = ['ERROR', 'CRITICAL', 'WARNING'];

        $eventos = $this->repository->findAll($filtrosArray);

        return $eventos->map(function($evento) {
            return [
                'id' => $evento->log_id,
                'titulo' => $this->generarTituloAlerta($evento),
                'descripcion' => $evento->descripcion,
                'usuario' => $evento->usuario?->nombre_usuario ?? 'Sistema',
                'timestamp' => $evento->fecha->toISOString(),
                'ip' => $evento->ip_origen,
                'nivel' => strtolower($evento->nivel),
                'accion' => $evento->accion,
                'tabla' => $evento->tabla_afectada
            ];
        });
    }

    protected function generarTituloAlerta($evento): string
    {
        $titulos = [
            'ERROR' => 'Error crítico en el sistema',
            'CRITICAL' => 'Evento de seguridad crítica',
            'WARNING' => 'Comportamiento sospechoso detectado',
            'DELETE' => 'Eliminación masiva de datos',
            'LOGIN_FAILED' => 'Intentos de acceso fallidos'
        ];

        return $titulos[$evento->nivel] ?? $titulos[$evento->accion] ?? 'Evento de auditoría detectado';
    }
}
