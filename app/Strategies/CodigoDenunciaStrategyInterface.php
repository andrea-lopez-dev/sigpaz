<?php

namespace App\Strategies;


interface CodigoDenunciaStrategyInterface
{
    public function generar(): string;
    public function validar(string $codigo): bool;
    public function descomponer(string $codigo): array;
    public function getPrefijo(): string;
}