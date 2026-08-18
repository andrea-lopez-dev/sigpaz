<?php

namespace App\Services;

use App\Models\Conciliacion;
use App\Models\VotoConciliacion;
use App\Repositories\ConciliacionRepository;
use App\Repositories\DenunciaRepository;
use Illuminate\Support\Facades\DB;
use App\Models\Personal;
use Illuminate\Support\Facades\Log;

class ConciliacionService
{
    public function __construct(
        private ConciliacionRepository $conciliacionRepository,
        private DenunciaRepository $denunciaRepository
    ) {}

    /**
     * Crear una nueva conciliación para una denuncia
     */
    public function crearConciliacion(array $data): Conciliacion
    {
        return DB::transaction(function () use ($data) {
            // Verificar que la denuncia existe
            $denuncia = $this->denunciaRepository->findById($data['denuncia_id']);

            if (!$denuncia) {
                throw new \Exception('Denuncia no encontrada');
            }

            // Verificar que no tenga conciliación
            if ($this->conciliacionRepository->findByDenunciaId($data['denuncia_id'])) {
                throw new \Exception('Esta denuncia ya tiene una conciliación');
            }

            $data['estado'] = Conciliacion::ESTADO_INCOMPLETA;
            $data['usuario_creacion_id'] = auth()->id();

            $conciliacion = $this->conciliacionRepository->create($data);

            Log::info('Conciliación creada:', [
                'conciliacion_id' => $conciliacion->conciliacion_id,
                'denuncia_id' => $conciliacion->denuncia_id,
                'usuario_id' => auth()->id()
            ]);

            return $conciliacion;
        });
    }

    /**
     * Registrar un voto en una conciliación
     */

public function registrarVoto(int $conciliacionId, array $data): Conciliacion
{
    return DB::transaction(function () use ($conciliacionId, $data) {
        $conciliacion = $this->conciliacionRepository->findById($conciliacionId);

        if (!$conciliacion) {
            throw new \Exception('Conciliación no encontrada');
        }

        // ✅ CORREGIDO: Usar el mismo casting que funciona
        $personal = Personal::where('personal_id', $data['personal_id'])
            ->whereRaw('activo::int = 1')  // 👈 Este es el casting que funciona
            ->first();

        if (!$personal) {
            throw new \Exception('El personal seleccionado no está activo');
        }

        // Verificar que se pueda votar
        if (!$conciliacion->puedeAgregarVoto()) {
            throw new \Exception('No se pueden agregar más votos. La conciliación está ' .
                ($conciliacion->estado === Conciliacion::ESTADO_COMPLETA ? 'completa' : 'en su máximo de votos'));
        }

        // Verificar que el personal no haya votado ya
        if (VotoConciliacion::personalYaVoto($conciliacionId, $data['personal_id'])) {
            throw new \Exception('Este personal ya ha votado en esta conciliación');
        }

        // Insertar el voto
       DB::table('votoconciliacion')->insert([
    'conciliacion_id' => $conciliacionId,
    'personal_id' => $data['personal_id'],
    'voto' => $data['voto'] ? DB::raw('true') : DB::raw('false'), // 👈 Forzar boolean SQL
    'comentario' => $data['comentario'] ?? null,
    'fecha_voto' => now()
]);

        Log::info('Voto registrado:', [
            'conciliacion_id' => $conciliacionId,
            'personal_id' => $data['personal_id'],
            'voto' => $data['voto'] ? 'A FAVOR' : 'EN CONTRA'
        ]);

        // Actualizar estado de la conciliación según reglas
        $this->actualizarEstadoConciliacion($conciliacion);

        return $conciliacion->fresh(['votos.personal.persona']);
    });
}

    /**
     * Actualizar el estado de la conciliación según los votos
     */
    private function actualizarEstadoConciliacion(Conciliacion $conciliacion): void
    {
        $totalVotos = $conciliacion->votos()->count();

        // Reglas de negocio
        if ($totalVotos >= 6) {
            // COMPLETA: 6 votos o más
            $nuevoEstado = Conciliacion::ESTADO_COMPLETA;
        } elseif ($totalVotos == 3) {
            // EN PROCESO: exactamente 3 votos
            $nuevoEstado = Conciliacion::ESTADO_EN_PROCESO;
        } elseif ($totalVotos < 3) {
            // INCOMPLETA: menos de 3 votos
            $nuevoEstado = Conciliacion::ESTADO_INCOMPLETA;
        } else {
            // Para 4 o 5 votos, también es COMPLETA (mayoría)
            $nuevoEstado = Conciliacion::ESTADO_COMPLETA;
        }

        // Si cambió el estado
        if ($conciliacion->estado !== $nuevoEstado) {
            $conciliacion->estado = $nuevoEstado;

            if ($nuevoEstado === Conciliacion::ESTADO_COMPLETA) {


                // Calcular resultado final basado en votos
                $votosFavor = $conciliacion->votos_favor;
                $votosContra = $conciliacion->votos_en_contra;

                if ($votosFavor > $votosContra) {
                    $conciliacion->resultado_final = 'APROBADA';
                } elseif ($votosContra > $votosFavor) {
                    $conciliacion->resultado_final = 'RECHAZADA';
                } else {
                    $conciliacion->resultado_final = 'EMPATE';
                }
            }

            $conciliacion->usuario_actualizacion_id = auth()->id();
            $conciliacion->save();

            Log::info('Estado de conciliación actualizado:', [
                'conciliacion_id' => $conciliacion->conciliacion_id,
                'estado_anterior' => $conciliacion->getOriginal('estado'),
                'estado_nuevo' => $nuevoEstado,
                'total_votos' => $totalVotos
            ]);
        }
    }

    /**
     * Obtener personal disponible para votar
     */
    public function getPersonalDisponible(int $conciliacionId): array
    {
        $conciliacion = $this->conciliacionRepository->findById($conciliacionId);

        if (!$conciliacion) {
            throw new \Exception('Conciliación no encontrada');
        }

        $personal = $conciliacion->getPersonalDisponibleParaVotar();

        return [
            'conciliacion_id' => $conciliacionId,
            'total_votos_actuales' => $conciliacion->total_votos,
            'votos_restantes' => $conciliacion->votos_restantes,
            'estado' => $conciliacion->estado,
            'personal_disponible' => $personal->map(function($p) {
                return [
                    'personal_id' => $p->personal_id,
                    'nombre_completo' => $p->nombre_completo,
                    'cargo' => $p->cargo?->nombre ?? 'Sin cargo',
                     'activo' => $p->activo,
                    'foto' => $p->persona?->foto_cifrada
                ];
            })
        ];
    }

    /**
     * Obtener resumen de una conciliación
     */
    public function getResumenConciliacion(int $conciliacionId): array
    {
        $conciliacion = $this->conciliacionRepository->findById($conciliacionId);

        if (!$conciliacion) {
            throw new \Exception('Conciliación no encontrada');
        }

        $votos = $conciliacion->votos()->with('personal.persona')->get()->map(function($voto) {
            return [
                'voto_id' => $voto->voto_id,
                'personal_id' => $voto->personal_id,
                'votante' => $voto->votante,
                'cargo' => $voto->personal?->cargo?->nombre,
                'voto' => $voto->voto,
                'voto_texto' => $voto->voto_texto,
                'comentario' => $voto->comentario,
                'fecha_voto' => $voto->fecha_voto
            ];
        });

        return [
            'conciliacion' => [
                'conciliacion_id' => $conciliacion->conciliacion_id,
                'denuncia_id' => $conciliacion->denuncia_id,
                'estado' => $conciliacion->estado,
                'fecha_inicio' => $conciliacion->fecha_audiencia,
                'resultado_final' => $conciliacion->resultado_final
            ],
            'estadisticas' => [
                'total_votos' => $conciliacion->total_votos,
                'votos_favor' => $conciliacion->votos_favor,
                'votos_contra' => $conciliacion->votos_en_contra,
                'votos_restantes' => $conciliacion->votos_restantes,
                'puede_votar' => $conciliacion->puede_votar
            ],
            'votos' => $votos
        ];
    }
}
