<?php

namespace App\Contracts;

use Illuminate\Support\Collection;

interface AnalizadorPatronesInterface
{
    public function analizar(Collection $datos): array;
}
