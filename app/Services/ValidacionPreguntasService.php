<?php

namespace App\Services;

use App\Models\Usuario;
use App\Models\PreguntaSeguridad;
use Illuminate\Support\Collection;
use RuntimeException;

class ValidacionPreguntasService
{
    private const MAX_INTENTOS = 3;
    private const MINUTOS_BLOQUEO = 60;

    public function __construct(
        private CifradoService $cifradoService
    ) {}

    /**
     * Obtener preguntas disponibles para validación
     */
    public function obtenerPreguntasParaValidacion(Usuario $usuario): Collection
    {
        $preguntas = $usuario->preguntasSeguridad()
            ->activo()
            ->get();

        if ($preguntas->isEmpty()) {
            throw new RuntimeException('El usuario no tiene preguntas de seguridad configuradas');
        }

        return $preguntas;
    }

    /**
     * Rotar preguntas para el siguiente intento
     */
    public function rotarPreguntas(Usuario $usuario, array $preguntasUsadasIds = []): Collection
    {
        $preguntasDisponibles = $usuario->preguntasSeguridad()
            ->activo()
            ->whereNotIn('pregunta_id', $preguntasUsadasIds)
            ->get();

        if ($preguntasDisponibles->isEmpty()) {
            // Si ya usó todas, reiniciamos
            $preguntasDisponibles = $usuario->preguntasSeguridad()
                ->activo()
                ->get();
        }

        return $preguntasDisponibles;
    }

    /**
     * Validar una respuesta específica
     */
    public function validarRespuesta(Usuario $usuario, int $preguntaId, string $respuesta): array
    {
        $pregunta = $usuario->preguntasSeguridad()
            ->where('pregunta_id', $preguntaId)
            ->first();

        if (!$pregunta) {
            return [
                'valido' => false,
                'mensaje' => 'Pregunta no encontrada para este usuario'
            ];
        }

        $esValida = $this->cifradoService->validarRespuesta(
            $respuesta,
            $pregunta->pivot->respuesta_cifrada
        );

        return [
            'valido' => $esValida,
            'mensaje' => $esValida ? 'Respuesta correcta' : 'Respuesta incorrecta'
        ];
    }

    /**
     * Procesar validación de múltiples preguntas (flujo normal de login)
     */
    public function procesarValidacionMultiple(Usuario $usuario, array $respuestas): array
    {
        $todasValidas = true;
        $respuestasValidadas = [];

        foreach ($respuestas as $item) {
            $resultado = $this->validarRespuesta(
                $usuario,
                $item['pregunta_id'],
                $item['respuesta']
            );

            $respuestasValidadas[] = $resultado;

            if (!$resultado['valido']) {
                $todasValidas = false;
                // No rompemos el ciclo para validar todas
            }
        }

        if (!$todasValidas) {
            $this->registrarIntentoFallido($usuario);
            return [
                'success' => false,
                'message' => 'Una o más respuestas son incorrectas',
                'detalles' => $respuestasValidadas,
                'intentos_restantes' => $this->getIntentosRestantes($usuario),
                'usuario_bloqueado' => $usuario->estaBloqueado()
            ];
        }

        $this->resetearIntentos($usuario);
        return [
            'success' => true,
            'message' => 'Validación exitosa',
            'detalles' => $respuestasValidadas
        ];
    }

    /**
     * Procesar validación con rotación de preguntas (un intento por pregunta)
     */
    public function procesarValidacionConRotacion(Usuario $usuario, int $preguntaId, string $respuesta, array $preguntasYaUsadas = []): array
    {
        // Verificar bloqueo
        if ($usuario->estaBloqueado()) {
            return [
                'success' => false,
                'message' => 'Usuario bloqueado temporalmente',
                'bloqueado_hasta' => $usuario->fecha_bloqueo,
                'intentos_restantes' => 0,
                'requiere_nuevas_preguntas' => false
            ];
        }

        // Validar la respuesta
        $resultadoValidacion = $this->validarRespuesta($usuario, $preguntaId, $respuesta);

        if (!$resultadoValidacion['valido']) {
            // Incrementar intentos fallidos
            $this->registrarIntentoFallido($usuario);

            // Obtener nueva pregunta para el siguiente intento
            $preguntasUsadas = array_merge($preguntasYaUsadas, [$preguntaId]);
            $nuevasPreguntas = $this->rotarPreguntas($usuario, $preguntasUsadas);

            $intentosRealizados = $this->getIntentosRealizados($usuario);
            $intentosRestantes = self::MAX_INTENTOS - $intentosRealizados;

            return [
                'success' => false,
                'message' => 'Respuesta incorrecta',
                'intentos_realizados' => $intentosRealizados,
                'intentos_restantes' => $intentosRestantes,
                'requiere_nuevas_preguntas' => true,
                'nuevas_preguntas' => $nuevasPreguntas->map(function($pregunta) {
                    return [
                        'pregunta_id' => $pregunta->pregunta_id,
                        'texto' => $pregunta->texto
                    ];
                })->values()->toArray(),
                'preguntas_usadas' => $preguntasUsadas
            ];
        }

        // Respuesta válida - resetear intentos
        $this->resetearIntentos($usuario);

        return [
            'success' => true,
            'message' => 'Validación exitosa',
            'intentos_realizados' => 0
        ];
    }

    private function registrarIntentoFallido(Usuario $usuario): void
    {
        $usuario->incrementarIntentosFallidos();

        // Registrar en bitácora de auditoría (opcional)
        \Log::info('Intento fallido de validación de seguridad', [
            'usuario_id' => $usuario->usuario_id,
            'email' => $usuario->email,
            'intentos_actuales' => $usuario->intentos_fallidos
        ]);
    }

    private function resetearIntentos(Usuario $usuario): void
    {
        $usuario->resetearIntentosFallidos();

        \Log::info('Validación de seguridad exitosa', [
            'usuario_id' => $usuario->usuario_id,
            'email' => $usuario->email
        ]);
    }

    private function getIntentosRestantes(Usuario $usuario): int
    {
        return max(0, self::MAX_INTENTOS - $usuario->intentos_fallidos);
    }

    private function getIntentosRealizados(Usuario $usuario): int
    {
        return $usuario->intentos_fallidos;
    }
}
