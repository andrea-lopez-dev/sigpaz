<?php

namespace App\Services\Auditoria\Exportadores;

use Illuminate\Support\Collection;

class ExportadorJSON extends ExportadorBase
{
    public function exportar(Collection $datos, array $opciones = []): string
    {
        $datos = $this->prepararDatos($datos, $opciones);

        $data = [
            'success' => true,
            'total' => $datos->count(),
            'data' => $datos->toArray(),
            'generado_en' => now()->toISOString()
        ];

        $flags = JSON_PRETTY_PRINT;
        if (!empty($opciones['unescaped'])) {
            $flags |= JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;
        }

        return json_encode($data, $flags);
    }

    public function getContentType(): string
    {
        return 'application/json';
    }

    public function getExtension(): string
    {
        return 'json';
    }
}
