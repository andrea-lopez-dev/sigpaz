<?php
namespace App\Services;

use App\Services\Contracts\ReporteStrategyInterface;
use Illuminate\Support\Collection;

class ReporteService
{
    private Collection $strategies;

    public function __construct()
    {
        $this->strategies = collect();
    }

    public function registrarEstrategia(ReporteStrategyInterface $strategy): void
    {
        $this->strategies->put($strategy->getTipo(), $strategy);
    }

    public function generarReporte(string $tipo, array $params): array
    {
        $strategy = $this->strategies->get($tipo);

        if (!$strategy) {
            throw new \InvalidArgumentException("Estrategia de reporte '{$tipo}' no registrada");
        }

        return $strategy->generar($params);
    }

    public function getTiposDisponibles(): array
    {
        return $this->strategies->keys()->toArray();
    }
}
