<?php

namespace App\Services\Contracts;

interface CifradoServiceInterface
{
    public function cifrar(string $dato): string;
    public function descifrar(string $datoCifrado): string;
    public function cifrarArray(array $datos): array;
    public function descifrarArray(array $datosCifrados): array;
}
