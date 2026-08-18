<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;
use App\Models\PreguntaSeguridad;
use App\Models\UsuarioPregunta;

class UsuarioPreguntaSeeder extends Seeder
{
    /**
     * Respuestas predefinidas para cada pregunta (en texto plano, luego se cifrarán)
     */
    protected $respuestasPorPregunta = [
        '¿Cuál es el nombre de su primera mascota?' => 'Firulais',
        '¿Cuál es el nombre de su escuela primaria?' => 'Escuela Bolivariana',
        '¿Cuál es su ciudad de nacimiento?' => 'Caracas',
        '¿Cuál es el segundo nombre de su madre?' => 'Maria',
        '¿Cuál es su color favorito?' => 'Azul',
        '¿Cuál es el nombre de su mejor amigo de la infancia?' => 'Pedro',
        '¿Cuál es su comida favorita?' => 'Pabellon',
        '¿Cuál es el modelo de su primer auto?' => 'Chevrolet Spark',
        '¿En qué ciudad se conocieron sus padres?' => 'Valencia',
        '¿Cuál es el nombre de su profesor favorito?' => 'Profesor Juan'
    ];

    public function run(): void
    {
        $usuarios = Usuario::all();
        $preguntas = PreguntaSeguridad::all();

        if ($usuarios->isEmpty() || $preguntas->isEmpty()) {
            $this->command->warn('⚠️ No hay usuarios o preguntas disponibles.');
            return;
        }

        $asignaciones = 0;

        foreach ($usuarios as $usuario) {
            // Asignar 3 preguntas aleatorias a cada usuario
            $preguntasSeleccionadas = $preguntas->random(min(6, $preguntas->count()));

            foreach ($preguntasSeleccionadas as $pregunta) {
                // Verificar si ya existe la combinación
                $existe = UsuarioPregunta::where('usuario_id', $usuario->usuario_id ?? $usuario->id)
                    ->where('pregunta_id', $pregunta->pregunta_id ?? $pregunta->id)
                    ->exists();

                if (!$existe) {
                    // Obtener la respuesta predefinida según el texto de la pregunta
                    $respuestaTexto = $this->respuestasPorPregunta[$pregunta->texto] ?? 'respuesta_ejemplo';

                    UsuarioPregunta::create([
                        'usuario_id'        => $usuario->usuario_id ?? $usuario->id,
                        'pregunta_id'       => $pregunta->pregunta_id ?? $pregunta->id,
                        'respuesta_cifrada' => Hash::make($respuestaTexto),
                        'fecha_creacion'    => now(),
                    ]);

                    $asignaciones++;
                }
            }
        }

        $this->command->info("✅ Se asignaron {$asignaciones} preguntas con respuestas personalizadas.");
    }
}
