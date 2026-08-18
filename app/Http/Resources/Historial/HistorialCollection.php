<?php

namespace App\Http\Resources\Historial;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class HistorialCollection extends ResourceCollection
{
    /**
     * Tranformar el resource collection en un array.
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'meta' => [
                'total' => $this->collection->count(),
                'tipos_cambio' => $this->getTiposCambio(),
                'ultima_actualizacion' => $this->collection->max('fecha_cambio')?->format('Y-m-d H:i:s')
            ]
        ];
    }

    /**
     * Obtener estadísticas por tipo de cambio
     */
    private function getTiposCambio(): array
    {
        return $this->collection
            ->groupBy('tipo_cambio')
            ->map(function ($items, $tipo) {
                return [
                    'tipo' => $tipo,
                    'total' => $items->count(),
                    'ultimo' => $items->first()->fecha_cambio?->format('Y-m-d H:i:s')
                ];
            })
            ->values()
            ->toArray();
    }
}
