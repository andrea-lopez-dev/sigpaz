<?php

namespace Database\Seeders;

use App\Models\Persona;
use Illuminate\Database\Seeder;

class PersonaEjemploSeeder extends Seeder
{
    public function run(): void
    {
        // Crear una persona de ejemplo para el administrador
        if (!Persona::where('numero_documento', '29646901')->exists()) {
            Persona::create([
                'tipo_documento_id' => 1, // DNI
                'numero_documento' => '29646901',
                'nombres' => 'ContactSupport',
                'apellidos' => 'Development',
                'fecha_nacimiento' => '1990-01-01',
                'genero_id' => 1, // Masculino
                'nacionalidad' => 'Venezolano',
                'lugar_nacimiento' => 'Maracaibo',
                'estado_civil_id' => 1, // Soltero
                'profesion_oficio' => 'Desarrollador de Software',
                'ocupacion_actual' => 'Desarrollador de Software',
                'direccion_cifrada' => null,
                'municipio' => 'Maracaibo',
                'departamento' => 'Zulia',
                'codigo_postal' => '4005',
                'telefono_fijo_cifrado' => null,
                'telefono_movil_cifrado' => null,
                'correo_electronico_cifrado' => null,
                'correo_alternativo_cifrado' => null,
                'nombre_contacto_emergencia' => null,
                'telefono_emergencia_cifrado' => null,
                'parentesco_emergencia' => null,
                'tipo_vinculo_id' => null,
                'discapacidad' => null,
                'observaciones' => 'Team de desarrollo de SIGPAZ',
                'foto_cifrada' => null,
                'codigo_qr' => null,
                'firma_digital' => null
            ]);
        }
    }
}
