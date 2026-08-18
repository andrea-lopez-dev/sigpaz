<?php

namespace Database\Seeders;

use App\Models\Cargo;
use Illuminate\Database\Seeder;

class CargoSeeder extends Seeder
{
    public function run(): void
    {
        $cargos = [
            ['nombre' => 'JUEZ DE PAZ', 'descripcion' => 'Juez de Paz'],
            ['nombre' => 'COORDINADOR', 'descripcion' => 'Secretario/a'],
            ['nombre' => 'SECRETARIO/A', 'descripcion' => 'Coordinador'],
            ['nombre' => 'TECNICO', 'descripcion' => 'Tecnico'],
        ];

        foreach ($cargos as $cargo) {
            Cargo::create($cargo);
        }
    }
}
