<?php
namespace App\Services\Contracts;

interface ReporteStrategyInterface
{
    public function generar(array $params): array;
    public function getTipo(): string;
}
