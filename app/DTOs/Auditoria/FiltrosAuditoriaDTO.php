<?php

namespace App\DTOs\Auditoria;

use Carbon\Carbon;

class FiltrosAuditoriaDTO
{
    public ?string $fecha_inicio;
    public ?string $fecha_fin;
    public ?int $usuario_id;
    public ?array $acciones;
    public ?string $tabla_afectada;
    public ?string $keyword;
    public ?string $nivel;
    public ?int $pagina;
    public ?int $por_pagina;

    public function __construct(array $data = [])
    {
        $this->fecha_inicio = $data['fecha_inicio'] ?? null;
        $this->fecha_fin = $data['fecha_fin'] ?? null;
        $this->usuario_id = $data['usuario_id'] ?? null;
        $this->acciones = $data['acciones'] ?? null;
        $this->tabla_afectada = $data['tabla_afectada'] ?? null;
        $this->keyword = $data['keyword'] ?? null;
        $this->nivel = $data['nivel'] ?? null;
        $this->pagina = $data['pagina'] ?? 1;
        $this->por_pagina = $data['por_pagina'] ?? 15;
    }

    public static function fromRequest(array $request): self
    {
        // Procesar acciones si viene como string
        if (isset($request['acciones']) && is_string($request['acciones'])) {
            $request['acciones'] = explode(',', $request['acciones']);
        }

        return new self($request);
    }

    public function toArray(): array
    {
        return array_filter([
            'fecha_inicio' => $this->fecha_inicio,
            'fecha_fin' => $this->fecha_fin,
            'usuario_id' => $this->usuario_id,
            'acciones' => $this->acciones,
            'tabla_afectada' => $this->tabla_afectada,
            'keyword' => $this->keyword,
            'nivel' => $this->nivel,
        ], fn($value) => $value !== null && $value !== '');
    }

    public function getPorPagina(): int
    {
        return min($this->por_pagina ?? 15, 100);
    }
}
