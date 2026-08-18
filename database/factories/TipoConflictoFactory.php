<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TipoConflictoFactory extends Factory
{
    protected $model = \App\Models\TipoConflicto::class;

    public function definition(): array
    {
        return [
            'nombre' => $this->faker->randomElement([
                'Conflicto Familiar',
                'Conflicto Vecinal',
                'Conflicto Laboral',
                'Conflicto Comercial',
                'Conflicto de Linderos'
            ]),
            'descripcion' => $this->faker->paragraph(),
            'estado' => true
        ];
    }
}
