<?php

namespace Database\Seeders;

use App\Models\EstadoCivil;
use Illuminate\Database\Seeder;

class EstadoCivilSeeder extends Seeder
{
    public function run(): void
    {
        $estados = [
            ['nombre' => 'Soltero/a'],
            ['nombre' => 'Casado/a'],
            ['nombre' => 'Divorciado/a'],
            ['nombre' => 'Viudo/a'],
            ['nombre' => 'Unión de Hecho'],
            ['nombre' => 'Separado/a'],
            ['nombre' => 'Otro'],
        ];

        foreach ($estados as $estado) {
            EstadoCivil::create($estado);
        }
    }
}
