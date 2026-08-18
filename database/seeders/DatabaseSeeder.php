<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\TipoDocumentoSeeder;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            // Seeders para tablas maestras
            TipoDocumentoSeeder::class,
            GeneroSeeder::class,
            EstadoCivilSeeder::class,
            TipoVinculoSeeder::class,

            // Seeders para estructura organizacional
            CargoSeeder::class,
            RolSeeder::class,
            PermisoSeeder::class,

            // Seeders para seguridad
            PreguntasSeguridadSeeder::class,

            UsuarioPreguntaSeeder::class, // Seeder para asignar preguntas a usuarios
            // Seeder para datos de ejemplo
            PersonaEjemploSeeder::class, // Nuevo seeder para persona de ejemplo
            PersonalEjemploSeeder::class, // Nuevo seeder para personal de ejemplo
            UsuarioAdminSeeder::class, // Debe ir después de PersonalEjemploSeeder
        ]);
    }
}
