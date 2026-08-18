<?php

namespace App\Services\Auditoria\Exportadores;

use App\Contracts\ExportadorInterface;
use Illuminate\Support\Collection;

class ExportadorStrategy
{
    protected ExportadorFactory $factory;

    public function __construct(ExportadorFactory $factory)
    {
        $this->factory = $factory;
    }

    public function exportar(Collection $datos, string $formato): string
    {
        $exportador = $this->factory->make($formato);
        return $exportador->exportar($datos);
    }

    public function getContentType(string $formato): string
    {
        $exportador = $this->factory->make($formato);
        return $exportador->getContentType();
    }

    public function getExtension(string $formato): string
    {
        $exportador = $this->factory->make($formato);
        return $exportador->getExtension();
    }
}
