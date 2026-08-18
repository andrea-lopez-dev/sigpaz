<?php

namespace App\Repositories;

use App\Interfaces\Repositories\InvolucradoRepositoryInterface;
use App\Models\Involucrado;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class InvolucradoRepository implements InvolucradoRepositoryInterface
{
    public function findById(int $id): ?Involucrado
    {
        return Involucrado::with(['persona', 'denuncia'])
            ->find($id);
    }

    public function create(array $data): Involucrado
    {
        return Involucrado::create($data);
    }

    public function update(int $id, array $data): ?Involucrado
    {
        $involucrado = $this->findById($id);

        if (!$involucrado) {
            return null;
        }

        $involucrado->update($data);
        return $involucrado->fresh();
    }

    public function delete(int $id): bool
    {
        $involucrado = $this->findById($id);

        if (!$involucrado) {
            return false;
        }

        return $involucrado->delete();
    }

    public function getByDenuncia(int $denunciaId): Collection
    {
        return Involucrado::with(['persona', 'persona.tipoDocumento'])
            ->where('denuncia_id', $denunciaId)
            ->orderBy('fecha_creacion')
            ->get();
    }

    public function getByPersona(int $personaId): Collection
    {
        return Involucrado::with(['denuncia'])
            ->where('persona_id', $personaId)
            ->orderBy('fecha_creacion', 'desc')
            ->get();
    }

    public function findByDenunciaAndPersona(int $denunciaId, int $personaId): ?Involucrado
    {
        return Involucrado::where('denuncia_id', $denunciaId)
            ->where('persona_id', $personaId)
            ->first();
    }

    public function countByDenuncia(int $denunciaId): int
    {
        return Involucrado::where('denuncia_id', $denunciaId)->count();
    }

    public function getRolesByDenuncia(int $denunciaId): Collection
    {
        return Involucrado::where('denuncia_id', $denunciaId)
            ->select('rol', DB::raw('count(*) as total'))
            ->groupBy('rol')
            ->get();
    }
}
