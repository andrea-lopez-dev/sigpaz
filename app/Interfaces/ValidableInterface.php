<?php
namespace App\Interfaces;

interface ValidableInterface
{
    public function validar(): bool;
    public function getErrores(): array;
}
