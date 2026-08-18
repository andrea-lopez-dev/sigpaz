<?php

namespace App\Services;

use App\Interfaces\Repositories\InvolucradoRepositoryInterface;
use App\Services\Contracts\InvolucradoServiceInterface;
use App\Services\Contracts\DenunciaServiceInterface;
use App\DTOs\Involucrado\CrearInvolucradoDTO;
use App\DTOs\Involucrado\ActualizarInvolucradoDTO;
use App\DTOs\Involucrado\InvolucradoResponseDTO;
use App\Exceptions\InvolucradoNoEncontradoException;
use App\Exceptions\InvolucradoDuplicadoException;
use App\Exceptions\DenuncianteNoModificableException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class InvolucradoService implements InvolucradoServiceInterface
{
    public function __construct(
        private readonly InvolucradoRepositoryInterface $involucradoRepository,
        private readonly DenunciaServiceInterface $denunciaService
    ) {}

    public function crear(CrearInvolucradoDTO $dto): InvolucradoResponseDTO
    {
        try {
            DB::beginTransaction();

            // Validar que la persona no esté ya involucrada
            if (!$this->validarPersonaNoDuplicada($dto->denunciaId, $dto->personaId)) {
                throw new InvolucradoDuplicadoException(
                    "La persona ya está involucrada en esta denuncia"
                );
            }

            // Validar que la denuncia existe y está activa
            $denuncia = $this->denunciaService->obtenerPorId($dto->denunciaId);

            if (!$denuncia->activa) {
                throw new \Exception("No se pueden agregar involucrados a una denuncia inactiva");
            }

            $involucrado = $this->involucradoRepository->create($dto->toArray());

            DB::commit();

            return InvolucradoResponseDTO::fromModel(
                $involucrado->load(['persona', 'denuncia'])
            );

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al crear involucrado: ' . $e->getMessage());
            throw $e;
        }
    }

    public function actualizar(int $id, ActualizarInvolucradoDTO $dto): InvolucradoResponseDTO
    {
        try {
            DB::beginTransaction();

            $involucrado = $this->involucradoRepository->findById($id);

            if (!$involucrado) {
                throw new InvolucradoNoEncontradoException("Involucrado con ID {$id} no encontrado");
            }

            // Validar que se pueda modificar el rol
            if (!$this->puedeModificarRol($id)) {
                throw new DenuncianteNoModificableException("No se puede modificar el rol del denunciante principal");
            }

            if (!$dto->hasChanges()) {
                return InvolucradoResponseDTO::fromModel($involucrado);
            }

            $involucradoActualizado = $this->involucradoRepository->update($id, $dto->toArray());

            DB::commit();

            return InvolucradoResponseDTO::fromModel(
                $involucradoActualizado->load(['persona', 'denuncia'])
            );

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al actualizar involucrado: ' . $e->getMessage());
            throw $e;
        }
    }

    public function eliminar(int $id): bool
    {
        try {
            DB::beginTransaction();

            $involucrado = $this->involucradoRepository->findById($id);

            if (!$involucrado) {
                throw new InvolucradoNoEncontradoException("Involucrado con ID {$id} no encontrado");
            }

            // Validar que se pueda eliminar
            if (!$involucrado->puedeSerEliminado()) {
                throw new \Exception("No se puede eliminar al denunciante principal");
            }

            $result = $this->involucradoRepository->delete($id);

            DB::commit();

            return $result;

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error al eliminar involucrado: ' . $e->getMessage());
            throw $e;
        }
    }

    public function obtenerPorId(int $id): InvolucradoResponseDTO
    {
        $involucrado = $this->involucradoRepository->findById($id);

        if (!$involucrado) {
            throw new InvolucradoNoEncontradoException("Involucrado con ID {$id} no encontrado");
        }

        return InvolucradoResponseDTO::fromModel($involucrado);
    }

    public function listarPorDenuncia(int $denunciaId): Collection
    {
        $involucrados = $this->involucradoRepository->getByDenuncia($denunciaId);

        return $involucrados->map(function ($involucrado) {
            return InvolucradoResponseDTO::fromModel($involucrado)->toArray();
        });
    }

    public function listarPorPersona(int $personaId): Collection
    {
        $involucrados = $this->involucradoRepository->getByPersona($personaId);

        return $involucrados->map(function ($involucrado) {
            return InvolucradoResponseDTO::fromModel($involucrado)->toArray();
        });
    }

    public function validarPersonaNoDuplicada(int $denunciaId, int $personaId): bool
    {
        return !$this->involucradoRepository->findByDenunciaAndPersona($denunciaId, $personaId);
    }

    public function puedeModificarRol(int $id): bool
    {
        $involucrado = $this->involucradoRepository->findById($id);

        if (!$involucrado) {
            return false;
        }

        // El denunciante principal no puede cambiar su rol
        return !$involucrado->esDenunciantePrincipal();
    }

    public function esDenunciantePrincipal(int $id): bool
    {
        $involucrado = $this->involucradoRepository->findById($id);

        if (!$involucrado) {
            return false;
        }

        return $involucrado->esDenunciantePrincipal();
    }
}
