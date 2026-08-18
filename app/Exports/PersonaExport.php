<?php

namespace App\Exports;

use App\Models\Persona;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class PersonaExport implements FromCollection, WithHeadings, WithMapping, WithStyles
{
    public function collection()
    {
        return Persona::with(['tipoDocumento', 'sexo', 'estadoCivil'])->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Documento',
            'Nombres',
            'Apellidos',
            'Fecha Nacimiento',
            'Edad',
            'Sexo',
            'Estado Civil',
            'Teléfono Móvil',
            'Correo Electrónico',
            'Departamento',
            'Municipio',
            'Discapacidad',
            'Profesión/Oficio',
            'Ocupación Actual',
            'Fecha Registro'
        ];
    }

    public function map($persona): array
    {
        return [
            $persona->id_persona,
            $persona->numero_documento,
            $persona->nombres,
            $persona->apellidos,
            $persona->fecha_nacimiento?->format('d/m/Y'),
            $persona->edad,
            $persona->sexo->nombre ?? '',
            $persona->estadoCivil->nombre ?? '',
            $persona->telefono_movil,
            $persona->correo_electronico,
            $persona->departamento,
            $persona->municipio,
            $persona->tiene_discapacidad ? 'Sí' : 'No',
            $persona->profesion_oficio,
            $persona->ocupacion_actual,
            $persona->created_at?->format('d/m/Y H:i:s')
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]],
        ];
    }
}
