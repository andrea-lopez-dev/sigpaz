<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EstadoCivilFactory extends Factory
{
    protected $model = \App\Models\EstadoCivil::class;

    public function definition(): array
    {
        return [
            'nombre' => $this->faker->randomElement(['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión Libre']),
            'estado' => true
        ];
    }
}
