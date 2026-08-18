<?php

namespace App\Services;

use App\Interfaces\Repositories\DenunciaRepositoryInterface;
use App\Services\Contracts\DenunciaServiceInterface;
use App\Services\Contracts\HistorialServiceInterface;
use App\Strategies\CodigoDenunciaStrategyInterface;
use App\DTOs\Denuncia\CrearDenunciaDTO;
use App\DTOs\Denuncia\ActualizarDenunciaDTO;
use App\DTOs\Denuncia\DenunciaResponseDTO;
use App\Exceptions\DenunciaNoEncontradaException;
use App\Exceptions\EstadoInvalidoException;
use App\Models\Denuncia;
use App\Models\Involucrado;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DenunciaService implements DenunciaServiceInterface
{
    public function __construct(
        private readonly DenunciaRepositoryInterface $denunciaRepository,
        private readonly HistorialServiceInterface $historialService,
        private readonly CodigoDenunciaStrategyInterface $codigoStrategy
    ) {}

   /**
 * Crear una nueva denuncia con sus involucrados
 */
public function crear(CrearDenunciaDTO $dto): DenunciaResponseDTO
{
    try {
        DB::beginTransaction();

        $data = $dto->toArray();

        // ✅ 1. PRIMERO: Generar código si no viene
        if (empty($data['codigo_externo'])) {
            $data['codigo_externo'] = $this->codigoStrategy->generar();
        }

        // ✅ 2. VALIDAR que el código sea único ANTES de crear
        if ($this->denunciaRepository->findByCodigoExterno($data['codigo_externo'])) {
            throw new \Exception('El código externo ya existe');
        }

        $usuarioId = auth()->id() ?? 1;
        $data['usuario_creacion_id'] = $usuarioId;

        // ✅ 3. AHORA SÍ, crear la denuncia
        $denuncia = $this->denunciaRepository->create($data);

        // ✅ 4. Registrar historial
        $this->historialService->registrarCreacion(
            $denuncia,
            $usuarioId,
            'Denuncia creada'
        );

        // ✅ 5. Procesar involucrados
        if (isset($dto->involucrados) && is_array($dto->involucrados) && count($dto->involucrados) > 0) {
            Log::info('👥 Procesando ' . count($dto->involucrados) . ' involucrados');

            foreach ($dto->involucrados as $invData) {
                if (!isset($invData['persona_id']) || !isset($invData['rol'])) {
                    Log::warning('⚠️ Datos de involucrado incompletos:', $invData);
                    continue;
                }

                $involucrado = Involucrado::create([
                    'denuncia_id' => $denuncia->denuncia_id,
                    'persona_id' => $invData['persona_id'],
                    'rol' => $invData['rol'],
                    'observaciones' => $invData['observaciones'] ?? null,
                    'fecha_creacion' => now()
                ]);

                Log::info('✅ Involucrado agregado durante creación', [
                    'involucrado_id' => $involucrado->involucrado_id,
                    'denuncia_id' => $denuncia->denuncia_id,
                    'persona_id' => $invData['persona_id'],
                    'rol' => $invData['rol']
                ]);
            }
        }

        DB::commit();

        return DenunciaResponseDTO::fromModel(
            $denuncia->load(['persona', 'tipoConflicto', 'estadoDenuncia', 'involucrados.persona'])
        );

    } catch (\Exception $e) {
        DB::rollBack();
        Log::error('Error al crear denuncia: ' . $e->getMessage());
        throw $e;
    }
}
    public function actualizar(int $id, ActualizarDenunciaDTO $dto): DenunciaResponseDTO
    {
        try {
            DB::beginTransaction();

            $denuncia = $this->denunciaRepository->findById($id);

            if (!$denuncia) {
                throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
            }

            // Validar que se pueda editar
            if (!$this->puedeEditar($id)) {
                throw new \Exception('Esta denuncia no puede ser editada en su estado actual');
            }

            if (!$dto->hasChanges()) {
                return DenunciaResponseDTO::fromModel($denuncia);
            }

            $cambios = [];
            foreach ($dto->toArray() as $campo => $valor) {
                if ($denuncia->{$campo} != $valor) {
                    $cambios[$campo] = [
                        'anterior' => $denuncia->{$campo},
                        'nuevo' => $valor
                    ];
                }
            }

            $denunciaActualizada = $this->denunciaRepository->update($id, $dto->toArray());

            if (!empty($cambios)) {
                // $this->historialService->registrarActualizacion(
                //     $denunciaActualizada,
                //     $dto->usuarioActualizacionId,
                //     $cambios
                // );
            }

            DB::commit();

            return DenunciaResponseDTO::fromModel(
                $denunciaActualizada->load(['persona', 'tipoConflicto', 'estadoDenuncia'])
            );

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al actualizar denuncia: ' . $e->getMessage());
            throw $e;
        }
    }

    public function eliminar(int $id): bool
    {
        try {
            DB::beginTransaction();

            $denuncia = $this->denunciaRepository->findById($id);

            if (!$denuncia) {
                throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
            }

            // Validar que se pueda eliminar
            if ($denuncia->estado_denuncia_id !== 1) { // Solo estado "Ingresada"
                throw new \Exception('Esta denuncia no puede ser eliminada en su estado actual');
            }

            // Registrar en historial antes de eliminar
           // $this->historialService->registrarEliminacion(
                //$denuncia,
                //auth()->id() ?? 1,
                //'Denuncia eliminada del sistema'
            //);
            $result = $this->denunciaRepository->delete($id);

            DB::commit();

            return $result;

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al eliminar denuncia: ' . $e->getMessage());
            throw $e;
        }
    }

    public function obtenerPorId(int $id): DenunciaResponseDTO
    {
        $denuncia = $this->denunciaRepository->findById($id);

        if (!$denuncia) {
            throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
        }

        return DenunciaResponseDTO::fromModel($denuncia);
    }

public function listar(array $filtros, int $perPage = 15): LengthAwarePaginator
{
    try {
        \Log::info('📥 Listando denuncias con filtros:', $filtros);

        $paginator = $this->denunciaRepository->paginate($perPage, $filtros);

        \Log::info('✅ Denuncias encontradas:', ['total' => $paginator->total()]);

        return $paginator;

    } catch (\Exception $e) {
        \Log::error('❌ Error en listar denuncias:', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
        throw $e;
    }
}

    public function cambiarEstado(int $id, int $nuevoEstadoId, ?string $observaciones = null): DenunciaResponseDTO
    {
        try {
            DB::beginTransaction();

            $denuncia = $this->denunciaRepository->findById($id);

            if (!$denuncia) {
                throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
            }

            $estadoAnterior = $denuncia->estado_denuncia_id;

            if ($estadoAnterior === $nuevoEstadoId) {
                return DenunciaResponseDTO::fromModel($denuncia);
            }

            // Validar transición de estado (puedes implementar una máquina de estados)
            $this->validarTransicionEstado($estadoAnterior, $nuevoEstadoId);

            $denunciaActualizada = $this->denunciaRepository->update($id, [
                'estado_denuncia_id' => $nuevoEstadoId,
                'usuario_actualizacion_id' => auth()->id() ?? 1
            ]);

            //$this->historialService->registrarCambioEstado(
              //  $denunciaActualizada,
              //  auth()->id() ?? 1,
              //  $estadoAnterior,
               // $nuevoEstadoId,
               // $observaciones
          //  );

            DB::commit();

            return DenunciaResponseDTO::fromModel(
                $denunciaActualizada->load(['persona', 'tipoConflicto', 'estadoDenuncia'])
            );

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al cambiar estado: ' . $e->getMessage());
            throw $e;
        }
    }

  /**
 * Agregar involucrado
 * Una persona puede estar involucrada en múltiples denuncias
 */
public function agregarInvolucrado(int $denunciaId, int $personaId, string $rol, ?string $observaciones = null): DenunciaResponseDTO
{
    try {
        DB::beginTransaction();

        $denuncia = $this->denunciaRepository->findById($denunciaId);

        if (!$denuncia) {
            throw new DenunciaNoEncontradaException("Denuncia con ID {$denunciaId} no encontrada");
        }

        // ✅ NO validar si ya existe - una persona puede tener múltiples involucraciones
        // Solo validar que la persona exista (opcional, el FK lo hará automáticamente)

        Log::info('📝 Agregando involucrado', [
            'denuncia_id' => $denunciaId,
            'persona_id' => $personaId,
            'rol' => $rol
        ]);

        $involucrado = Involucrado::create([
            'denuncia_id' => $denunciaId,
            'persona_id' => $personaId,
            'rol' => $rol,
            'observaciones' => $observaciones,
            'fecha_creacion' => now()
        ]);

        Log::info('✅ Involucrado agregado', ['involucrado_id' => $involucrado->involucrado_id]);

        DB::commit();

        // Recargar la denuncia con todas las relaciones
        $denunciaActualizada = $this->denunciaRepository->findById($denunciaId);

        return DenunciaResponseDTO::fromModel(
            $denunciaActualizada->load([
                'persona',
                'tipoConflicto',
                'estadoDenuncia',
                'involucrados.persona'
            ])
        );

    } catch (\Exception $e) {
        DB::rollBack();
        Log::error('❌ Error al agregar involucrado: ' . $e->getMessage(), [
            'denuncia_id' => $denunciaId,
            'persona_id' => $personaId,
            'trace' => $e->getTraceAsString()
        ]);
        throw $e;
    }
}

    public function validarDenunciaActiva(int $id): bool
    {
        $denuncia = $this->denunciaRepository->findById($id);

        if (!$denuncia) {
            throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
        }

        $estadosInactivos = [5, 6, 7]; // Archivada, Cerrada, Resuelta
        return !in_array($denuncia->estado_denuncia_id, $estadosInactivos);
    }

    public function puedeEditar(int $id): bool
    {
        $denuncia = $this->denunciaRepository->findById($id);

        if (!$denuncia) {
            throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
        }

        $estadosEditables = [1, 2]; // Ingresada, En Revisión
        return in_array($denuncia->estado_denuncia_id, $estadosEditables);
    }

    public function generarCodigoUnico(): string
    {
        return $this->codigoStrategy->generar();
    }

    private function validarTransicionEstado(int $estadoAnterior, int $estadoNuevo): void
    {
        // Definir transiciones válidas
        $transicionesValidas = [
            1 => [2, 3, 5], // Ingresada -> En Revisión, En Audiencia, Archivada
            2 => [3, 4, 5], // En Revisión -> En Audiencia, Resuelta, Archivada
            3 => [2, 4, 5, 6], // En Audiencia -> En Revisión, Resuelta, Archivada, Cerrada
            4 => [6, 7], // Resuelta -> Cerrada, Archivada
        ];

        if (!isset($transicionesValidas[$estadoAnterior])) {
            throw new EstadoInvalidoException("El estado actual {$estadoAnterior} no permite transiciones");
        }

        if (!in_array($estadoNuevo, $transicionesValidas[$estadoAnterior])) {
            throw new EstadoInvalidoException(
                "No se puede cambiar del estado {$estadoAnterior} al estado {$estadoNuevo}"
            );
        }
    }

/**
 * Obtener modelo de denuncia por ID (NO el DTO)
 * Útil para cargar relaciones y vistas
 */
public function obtenerModeloPorId(int $id): ?Denuncia
{
    try {
        $denuncia = $this->denunciaRepository->findById($id);

        if (!$denuncia) {
            throw new DenunciaNoEncontradaException("Denuncia con ID {$id} no encontrada");
        }

        return $denuncia;

    } catch (\Exception $e) {
        Log::error('Error al obtener modelo de denuncia: ' . $e->getMessage());
        throw $e;
    }
}
}
