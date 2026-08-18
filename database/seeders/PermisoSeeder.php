<?php

namespace Database\Seeders;

use App\Models\Permiso;
use Illuminate\Database\Seeder;
use App\Constants\SystemConstants;

class PermisoSeeder extends Seeder
{
    public function run(): void
    {
        $permisos = [
            ['nombre' => 'Acceso total', 'descripcion' => 'Permiso de acceso total al sistema'],
            ['nombre' => 'Gestión procesos y registros', 'descripcion' => 'Permiso para gestionar procesos y registros'],
            ['nombre' => 'Gestión personal y expedientes', 'descripcion' => 'Permiso para gestionar personal y expedientes'],
        ];

        foreach ($permisos as $permiso) {
            Permiso::create($permiso);
        }

        // Asignar permisos a roles
        $rolAdministradorSistema = \App\Models\Rol::find(SystemConstants::ROLE_ADMIN_SISTEMA);
        $rolAdministradorSistema->permisos()->attach([1, 2, 3]);

        $rolUsuarioAvanzado = \App\Models\Rol::find(SystemConstants::ROLE_USUARIO_AVANZADO);
        $rolUsuarioAvanzado->permisos()->attach([2, 3]);

        $rolUsuarioEstandar = \App\Models\Rol::find(SystemConstants::ROLE_USUARIO_ESTANDAR);
        $rolUsuarioEstandar->permisos()->attach([3]);

        $rolAdminTecnico = \App\Models\Rol::find(SystemConstants::ROLE_ADMIN_TECNICO);
        $rolAdminTecnico->permisos()->attach([1, 2, 3]);
    }
}
