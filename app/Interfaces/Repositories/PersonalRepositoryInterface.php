<?php

namespace App\Interfaces\Repositories;

use App\Models\Personal;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface PersonalRepositoryInterface
{
    /**
     * Buscar por ID
     */
    public function findById(int $id): ?Personal;

    /**
     * Buscar por persona_id
     */
    public function findByPersonaId(int $personaId): ?Personal;

    /**
     * Obtener todo el personal
     */
    public function all(): Collection;

    /**
     * Paginar personal con filtros
     */
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator;

    /**
     * Crear nuevo personal
     */
    public function create(array $data): Personal;

    /**
     * Actualizar personal existente
     */
    public function update(int $id, array $data): bool;

    /**
     * Eliminar personal
     */
    public function delete(int $id): bool;

    /**
     * Activar personal
     */
    public function activar(int $id): bool;

    /**
     * Desactivar personal
     */
    public function desactivar(int $id): bool;

    /**
     * Obtener personal activo
     */
    public function getActivos(): Collection;

    /**
     * Obtener personal por cargo
     */
    public function getByCargo(int $cargoId): Collection;

    /**
     * ✅ Buscar personas disponibles para crear personal
     */
    public function findPersonasDisponiblesParaPersonal(string $searchTerm = '', int $limit = 50): Collection;

    /**
     * ✅ Buscar personal con filtros avanzados
     */
    public function search(array $params): LengthAwarePaginator;

    /**
     * ✅ Verificar si una persona ya tiene personal
     */
    public function personaTienePersonal(int $personaId): bool;
}
