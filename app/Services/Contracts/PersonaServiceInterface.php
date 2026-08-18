<?php

namespace App\Services\Contracts;

use App\Models\Persona;
use Illuminate\Http\UploadedFile;
use Illuminate\Pagination\LengthAwarePaginator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

interface PersonaServiceInterface
{
    public function crearPersona(array $datos, ?UploadedFile $foto = null): Persona;
    public function actualizarPersona(int $id, array $datos, ?UploadedFile $foto = null): Persona;
    public function eliminarPersona(int $id): bool;
    public function obtenerPersona(int $id): Persona;
    public function listarPersonas(array $filtros = []): LengthAwarePaginator;
    public function generarFichaCompleta(int $id): string;
    public function exportarPDF(int $id): BinaryFileResponse;
    public function exportarExcel(): StreamedResponse;
    public function validarIdentidad(string $documento): bool;
    public function reportePorSexo(): array;
    public function reporteDiscapacidad(): array;
    public function puedeEliminar(int $id): bool;
    public function buscarPersonas(string $termino);
    public function reportePorTipoDocumento(): array;
    public function reportePorEstadoCivil(): array;
    public function reporteCompleto(): array;
    public function reportePorGenero(): array;
    public function reportePorEdad(): array;
    public function reportePorDepartamento(): array;
    public function obtenerPersonaConRelaciones(int $id);
}
