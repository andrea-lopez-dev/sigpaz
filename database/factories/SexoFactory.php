<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SexoFactory extends Factory
{
    protected $model = \App\Models\Sexo::class;

    public function definition(): array
    {
        return [
            'nombre' => $this->faker->randomElement(['Masculino', 'Femenino', 'Otro']),
            'estado' => true
        ];
    }
}
