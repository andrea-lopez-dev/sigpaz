<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TipoDocumentoFactory extends Factory
{
    protected $model = \App\Models\TipoDocumento::class;

    public function definition(): array
    {
        return [
            'nombre' => $this->faker->randomElement(['Cédula', 'Pasaporte', 'DNI', 'RUC']),
            'descripcion' => $this->faker->sentence(),
            'estado' => true
        ];
    }
}
