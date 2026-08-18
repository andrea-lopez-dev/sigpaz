<?php

namespace Database\Seeders;

use App\Models\TipoVinculo;
use Illuminate\Database\Seeder;

class TipoVinculoSeeder extends Seeder
{
    public function run(): void
    {
        $tipos = [
            ['nombre' => 'Familiar', 'descripcion' => 'Vínculo familiar'],
            ['nombre' => 'Laboral', 'descripcion' => 'Vínculo laboral'],
            ['nombre' => 'Académico', 'descripcion' => 'Vínculo académico'],
            ['nombre' => 'Comunitario', 'descripcion' => 'Vínculo comunitario'],
            ['nombre' => 'Otro', 'descripcion' => 'Otro tipo de vínculo'],
        ];

        foreach ($tipos as $tipo) {
            TipoVinculo::create($tipo);
        }
    }
}
