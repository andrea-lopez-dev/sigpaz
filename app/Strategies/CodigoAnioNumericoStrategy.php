<?php

namespace App\Services\Strategies;

use App\Strategies\CodigoDenunciaStrategyInterface;
use App\Models\Denuncia;

class CodigoAnioNumericoStrategy implements CodigoDenunciaStrategyInterface
{
    public function __construct(
        private readonly string $prefijo = 'DEN'
    ) {}

    public function generar(): string
    {
        $ano = date('Y');
        $ultimo = Denuncia::whereYear('fecha_creacion', $ano)
            ->orderBy('denuncia_id', 'desc')
            ->first();

        $numero = $ultimo ? intval(substr($ultimo->codigo_externo, -6)) + 1 : 1;

        return $this->prefijo . '-' . $ano . '-' . str_pad($numero, 6, '0', STR_PAD_LEFT);
    }

    public function getPrefijo(): string
    {
        return $this->prefijo;
    }
}
