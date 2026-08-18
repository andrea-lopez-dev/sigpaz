<?php
namespace App\Interfaces;

interface CatalogoInterface
{
    public static function crear(array $datos): self;
    public function actualizarDatos(array $datos): self;
    public function eliminarLogico(): bool;
    public static function obtenerPorId(int $id): ?self;
    public static function listarActivos();
}
