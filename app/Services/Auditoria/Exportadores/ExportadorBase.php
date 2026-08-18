<?php

namespace App\Services\Auditoria\Exportadores;

use App\Contracts\ExportadorInterface;
use Illuminate\Support\Collection;

abstract class ExportadorBase implements ExportadorInterface
{
    protected array $camposExcluidos = ['created_at', 'updated_at', 'deleted_at'];

    abstract public function exportar(Collection $datos, array $opciones = []): string;

    public function getContentType(): string
    {
        return 'application/octet-stream';
    }

    public function getExtension(): string
    {
        return 'bin';
    }

    public function getNombreArchivo(): string
    {
        return 'auditoria_' . date('Y-m-d_His') . '.' . $this->getExtension();
    }

    protected function prepararDatos(Collection $datos, array $opciones = []): Collection
    {
        // Si ya es una colección, trabajamos con ella
        if (!$datos instanceof Collection) {
            $datos = collect($datos);
        }

        // Convertir modelos a arrays
        $datos = $datos->map(function ($item) {
            if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                return $item->toArray();
            }
            return (array) $item;
        });

        // Excluir campos si se especifica
        if (!empty($opciones['excluir'])) {
            $excluir = array_merge($this->camposExcluidos, $opciones['excluir']);
            $datos = $datos->map(function ($item) use ($excluir) {
                return array_diff_key($item, array_flip($excluir));
            });
        }

        // Filtrar items vacíos
        $datos = $datos->filter(function ($item) {
            return !empty($item);
        });

        return $datos;
    }

    protected function formatearHeader(string $header): string
    {
        $headers = [
            'log_id' => 'ID Log',
            'usuario_id' => 'ID Usuario',
            'usuario_nombre' => 'Usuario',
            'accion' => 'Acción',
            'tabla_afectada' => 'Tabla Afectada',
            'registro_id' => 'ID Registro',
            'fecha' => 'Fecha/Hora',
            'descripcion' => 'Descripción',
            'ip_origen' => 'IP Origen',
            'user_agent' => 'User Agent',
            'transaccion_id' => 'ID Transacción',
            'nivel' => 'Nivel'
        ];

        return $headers[$header] ?? ucfirst(str_replace('_', ' ', $header));
    }
}
