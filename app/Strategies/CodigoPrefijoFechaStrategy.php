<?php

namespace App\Services\Strategies;

use App\Strategies\CodigoDenunciaStrategyInterface;
use App\Models\Denuncia;

class CodigoPrefijoFechaStrategy implements CodigoDenunciaStrategyInterface
{
    public function __construct(
        private readonly string $prefijo = 'EXP'
    ) {}

    public function generar(): string
    {
        $fecha = now();
        $fechaStr = $fecha->format('Ymd');

        $ultimo = Denuncia::whereDate('fecha_creacion', $fecha->toDateString())
            ->orderBy('denuncia_id', 'desc')
            ->first();

        $numero = $ultimo ? intval(substr($ultimo->codigo_externo, -4)) + 1 : 1;

        return $this->prefijo . '-' . $fechaStr . '-' . str_pad($numero, 4, '0', STR_PAD_LEFT);
    }

    public function getPrefijo(): string
    {
        return $this->prefijo;
    }
}
