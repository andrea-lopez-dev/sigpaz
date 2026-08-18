<?php

namespace App\Services;

use App\Models\Horario;
use Illuminate\Support\Collection;
use Carbon\Carbon;

class HorarioService
{
    public function listar(array $filtros = []): Collection
    {
        $query = Horario::query();

        if (!empty($filtros['fecha_inicio']) && !empty($filtros['fecha_fin'])) {
            $query->whereBetween('fecha', [$filtros['fecha_inicio'], $filtros['fecha_fin']]);
        } elseif (!empty($filtros['fecha_inicio'])) {
            $query->where('fecha', '>=', $filtros['fecha_inicio']);
        } elseif (!empty($filtros['fecha_fin'])) {
            $query->where('fecha', '<=', $filtros['fecha_fin']);
        }

        return $query->orderBy('fecha')
                     ->orderBy('hora_inicio')
                     ->get();
    }
public function crear(array $datos): Horario
{
    // ✅ No convertir si ya es DB::raw
    // if (isset($datos['repetir_semanal']) && !($datos['repetir_semanal'] instanceof \Illuminate\Database\Query\Expression)) {
    //     $datos['repetir_semanal'] = filter_var($datos['repetir_semanal'], FILTER_VALIDATE_BOOLEAN);
    // }

    $errors = Horario::validarHorario($datos);

    if (!empty($errors)) {
        throw new \InvalidArgumentException(implode(', ', $errors));
    }

    return Horario::create($datos);
}
    public function actualizar(int $id, array $datos): Horario
    {
        $horario = Horario::findOrFail($id);

        $errors = Horario::validarHorario(array_merge($horario->toArray(), $datos));

        if (!empty($errors)) {
            throw new \InvalidArgumentException(implode(', ', $errors));
        }

        $horario->update($datos);

        return $horario->fresh();
    }

    public function eliminar(int $id): void
    {
        $horario = Horario::findOrFail($id);
        $horario->delete();
    }
}
