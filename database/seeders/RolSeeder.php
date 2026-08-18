<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            ['nombre' => 'ADMINISTRADOR DEL SISTEMA', 'descripcion' => 'Administrador con acceso total al sistema'],
            ['nombre' => 'USUARIO AVANZADO', 'descripcion' => 'Usuario con permisos avanzados'],
            ['nombre' => 'USUARIO ESTÁNDAR', 'descripcion' => 'Usuario con permisos estándar'],
            ['nombre' => 'ADMINISTRADOR TÉCNICO', 'descripcion' => 'Administrador técnico del sistema'],
        ];

        foreach ($roles as $rol) {
            Rol::create($rol);
        }
    }
}
