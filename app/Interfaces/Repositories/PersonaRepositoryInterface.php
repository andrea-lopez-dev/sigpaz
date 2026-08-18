<?php

namespace App\Interfaces\Repositories;

use App\Models\Persona;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface PersonaRepositoryInterface
{
    public function findById(int $id): ?Persona;
    public function findByDocumento(int $tipoDocumentoId, string $numeroDocumento): ?Persona;
    public function all(): Collection;
    public function create(array $data): Persona;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;
    public function verificarDuplicado(array $data): bool;
    public function buscarPorNombres(string $nombres): Collection;
    public function buscarPorTermino(string $termino, bool $soloActivos = true);
    public function paginate(int $perPage = 15, array $filtros = []): LengthAwarePaginator;
    public function guardarFirma(int $id, string $firma): bool;
    public function findByNumeroDocumento(string $numero_documento);
}

