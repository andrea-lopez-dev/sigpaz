<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuarioAdminSeeder extends Seeder
{
 public function run(): void
{
    if (!Usuario::where('email', 'contactsupport@gmail.com')->exists()) {
        Usuario::create([
            'nombre_usuario' => 'contactsupport',
            'email' => 'contactsupport@gmail.com',
            'contrasena_hash' => Hash::make('192401jaj'),
            'personal_id' => 2,
            'rol_id' => 1,
            'activo' => 'true',
            'requiere_cambio_contrasena' => 'false'
        ]);
    }
}
}
