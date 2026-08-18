<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PreguntaSeguridad;

class PreguntasSeguridadSeeder extends Seeder
{
    public function run()
    {
        $preguntas = [
            ['texto' => '¿Cuál es el nombre de su primera mascota?'],
            ['texto' => '¿Cuál es el nombre de su escuela primaria?'],
            ['texto' => '¿Cuál es su ciudad de nacimiento?'],
            ['texto' => '¿Cuál es el segundo nombre de su madre?'],
            ['texto' => '¿Cuál es su color favorito?'],
            ['texto' => '¿Cuál es el nombre de su mejor amigo de la infancia?'],
            ['texto' => '¿Cuál es su comida favorita?'],
            ['texto' => '¿Cuál es el modelo de su primer auto?'],
            ['texto' => '¿En qué ciudad se conocieron sus padres?'],
            ['texto' => '¿Cuál es el nombre de su profesor favorito?']
        ];

        foreach ($preguntas as $pregunta) {
            PreguntaSeguridad::create($pregunta);
        }
    }
}
