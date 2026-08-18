<?php

namespace App\Services\Contracts;

use App\DTOs\Involucrado\CrearInvolucradoDTO;
use App\DTOs\Involucrado\ActualizarInvolucradoDTO;
use App\DTOs\Involucrado\InvolucradoResponseDTO;
use Illuminate\Support\Collection;

interface InvolucradoServiceInterface
{
    public function crear(CrearInvolucradoDTO $dto): InvolucradoResponseDTO;
    public function actualizar(int $id, ActualizarInvolucradoDTO $dto): InvolucradoResponseDTO;
    public function eliminar(int $id): bool;
    public function obtenerPorId(int $id): InvolucradoResponseDTO;
    public function listarPorDenuncia(int $denunciaId): Collection;
    public function listarPorPersona(int $personaId): Collection;
    public function validarPersonaNoDuplicada(int $denunciaId, int $personaId): bool;
    public function puedeModificarRol(int $id): bool;
    public function esDenunciantePrincipal(int $id): bool;
}
