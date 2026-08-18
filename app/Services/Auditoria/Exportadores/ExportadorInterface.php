<?php

namespace App\Services\Auditoria\Exportadores;

use Illuminate\Support\Collection;

interface ExportadorInterface
{
    public function exportar(Collection $datos, array $opciones = []): string;
    public function getContentType(): string;
    public function getExtension(): string;
    public function getNombreArchivo(): string;
}
