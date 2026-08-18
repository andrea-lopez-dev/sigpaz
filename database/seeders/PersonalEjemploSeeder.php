<?php

namespace Database\Seeders;

use App\Models\Personal;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonalEjemploSeeder extends Seeder
{
    public function run(): void
    {
        // Crear personal de ejemplo para el administrador
        if (!Personal::where('persona_id', 3)->exists()) {
            Personal::create([
                'persona_id' => 3,
                'cargo_id' => 1,
                'fecha_ingreso' => now()->toDateString(),
                'fecha_egreso' => null,
                'observaciones' => 'Team de desarrollo de SIGPAZ',
                'usuario_creacion_id' => null,
                'usuario_actualizacion_id' => null,
                'activo' => DB::raw('true'),
                'fuente_registro' => 'SISTEMA'
            ]);
        }
    }
}
