<?php

namespace App\Exports;

use App\Models\Persona;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;

class PersonasExport implements FromCollection, WithHeadings, WithMapping, WithStyles
{
    public function collection()
    {
        // Obtener todas las personas con relaciones necesarias
        return Persona::with(['tipoDocumento', 'genero', 'estadoCivil'])->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'N° Documento',
            'Tipo Documento',
            'Nombres',
            'Apellidos',
            'Fecha Nacimiento',
            'Edad',
            'Género',
            'Estado Civil',
            'Teléfono Móvil',
            'Teléfono Fijo',
            'Correo Electrónico',
            'Correo Alternativo',
            'Dirección',
            'Departamento',
            'Municipio',
            'Contacto Emergencia',
            'Parentesco Emergencia',
            'Teléfono Emergencia',
            'Tipo Vínculo',
            'Discapacidad',
            'Observaciones',
            'Estado Validación',
            'Fecha Validación'
        ];
    }

    public function map($persona): array
    {
        // Calcular edad
        $edad = '';
        if ($persona->fecha_nacimiento) {
            $edad = $persona->fecha_nacimiento->age . ' años';
        }

        return [
            $persona->persona_id,
            $persona->numero_documento,
            $persona->tipoDocumento?->nombre ?? 'N/A',
            $persona->nombres,
            $persona->apellidos,
            $persona->fecha_nacimiento ? $persona->fecha_nacimiento->format('d/m/Y') : 'N/A',
            $edad,
            $persona->genero?->nombre ?? 'N/A',
            $persona->estadoCivil?->nombre ?? 'N/A',
            $persona->telefono_movil_cifrado ?? 'N/A',  // Ya descifrado por el accessor
            $persona->telefono_fijo_cifrado ?? 'N/A',
            $persona->correo_electronico_cifrado ?? 'N/A',
            $persona->correo_alternativo_cifrado ?? 'N/A',
            $persona->direccion_cifrada ?? 'N/A',
            $persona->departamento ?? 'N/A',
            $persona->municipio ?? 'N/A',
            $persona->nombre_contacto_emergencia ?? 'N/A',
            $persona->parentesco_emergencia ?? 'N/A',
            $persona->telefono_emergencia_cifrado ?? 'N/A',
            $persona->tipoVinculo?->nombre ?? 'N/A',
            $persona->discapacidad ?: 'Ninguna',
            $persona->observaciones ?: 'Ninguna',
            $persona->activo ? 'Validado' : 'Pendiente',
            $persona->fecha_activacion ? $persona->fecha_activacion->format('d/m/Y H:i') : 'N/A'
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Estilo para el encabezado
            1 => [
                'font' => [
                    'bold' => true,
                    'size' => 11,
                    'color' => ['rgb' => 'FFFFFF']
                ],
                'fill' => [
                    'fillType' => Fill::FILL_SOLID,
                    'startColor' => ['rgb' => '2C5282']
                ],
                'alignment' => [
                    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER
                ]
            ],
            // Autoajustar columnas
            'A' => ['width' => 10],
            'B' => ['width' => 15],
            'C' => ['width' => 15],
            'D' => ['width' => 25],
            'E' => ['width' => 25],
            'F' => ['width' => 15],
            'G' => ['width' => 10],
            'H' => ['width' => 12],
            'I' => ['width' => 15],
            'J' => ['width' => 15],
            'K' => ['width' => 15],
            'L' => ['width' => 25],
            'M' => ['width' => 25],
            'N' => ['width' => 30],
            'O' => ['width' => 20],
            'P' => ['width' => 20],
            'Q' => ['width' => 25],
            'R' => ['width' => 15],
            'S' => ['width' => 15],
            'T' => ['width' => 15],
            'U' => ['width' => 20],
            'V' => ['width' => 30],
            'W' => ['width' => 15],
            'X' => ['width' => 20],
        ];
    }
}
