<?php

namespace App\Contracts;

interface ValidableInterface
{
    public function validar(): array;
    public function tieneEvidenciaValida(): bool;
}
