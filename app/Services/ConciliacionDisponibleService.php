<?php
namespace App\Services;

use App\Models\Conciliacion;
use App\Models\Sentencia;
use App\Models\MedidaCautelar;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ConciliacionDisponibleService
{
    /**
     * Obtener conciliaciones consolidadas (con 4-6 votos y estado COMPLETA)
     */
    public function getConsolidadas(): Collection
    {
        return Conciliacion::with(['denuncia.persona', 'votos'])
            ->where('estado', 'COMPLETA')
            ->whereHas('votos', function($q) {
                $q->havingRaw('COUNT(*) >= 4');
            }, '>=', 4)
            ->orderBy('fecha_actualizacion', 'desc')
            ->get();
    }

    /**
     * Obtener conciliaciones disponibles para sentencia
     * Incluye las que ya tienen medida cautelar, excluye las que ya tienen sentencia
     */
    public function getDisponiblesParaSentencia(): Collection
    {
        return Conciliacion::with([
                'denuncia.persona',
                'votos',
                'medidaCautelar.tipoMedida'
            ])
            ->where('estado', 'COMPLETA')
            ->whereHas('votos', function($q) {
                $q->havingRaw('COUNT(*) >= 4');
            }, '>=', 4)
            ->whereDoesntHave('sentencia') // No tener sentencia
            ->orderBy('fecha_actualizacion', 'desc')
            ->get()
            ->map(function($conciliacion) {
                $totalVotos = $conciliacion->votos->count();
                $votosFavor = $conciliacion->votos->where('voto', true)->count();
                $votosContra = $conciliacion->votos->where('voto', false)->count();

                return [
                    'conciliacion_id' => $conciliacion->conciliacion_id,
                    'denuncia_id' => $conciliacion->denuncia_id,
                    'numero_expediente' => $conciliacion->denuncia?->numero_expediente,
                    'denunciante' => $conciliacion->denuncia?->persona ?
                        trim($conciliacion->denuncia->persona->nombres . ' ' . $conciliacion->denuncia->persona->apellidos) : null,
                    'fecha_audiencia' => $conciliacion->fecha_audiencia?->format('Y-m-d H:i:s'),
                    'fecha_consolidacion' => $conciliacion->fecha_actualizacion?->format('Y-m-d H:i:s'),
                    'total_votos' => $totalVotos,
                    'votos_favor' => $votosFavor,
                    'votos_contra' => $votosContra,
                    'resultado_final' => $conciliacion->resultado_final,
                    'tiene_medida_cautelar' => $conciliacion->medidaCautelar ? true : false,
                    'medida_cautelar' => $conciliacion->medidaCautelar ? [
                        'medida_id' => $conciliacion->medidaCautelar->medida_id,
                        'tipo_medida' => $conciliacion->medidaCautelar->tipoMedida?->nombre,
                        'fecha_inicio' => $conciliacion->medidaCautelar->fecha_inicio?->format('Y-m-d'),
                        'estado' => $conciliacion->medidaCautelar->estado,
                        'vigente' => $conciliacion->medidaCautelar->esta_vigente
                    ] : null,
                    'estado' => $conciliacion->estado,
                    'puede_seleccionarse' => true,
                    'tipo_disponibilidad' => $conciliacion->medidaCautelar ?
                        'CON_MEDIDA_PREVIA' : 'SIN_MEDIDA_PREVIA'
                ];
            });
    }

    /**
     * Obtener conciliaciones disponibles para medida cautelar
     * Solo las que NO tienen sentencia NI medida cautelar
     */
    public function getDisponiblesParaMedidaCautelar(): Collection
    {
        return Conciliacion::with([
                'denuncia.persona',
                'votos'
            ])
            ->where('estado', 'COMPLETA')
            ->whereHas('votos', function($q) {
                $q->havingRaw('COUNT(*) >= 4');
            }, '>=', 4)
            ->whereDoesntHave('sentencia')
            ->whereDoesntHave('medidaCautelar')
            ->orderBy('fecha_actualizacion', 'desc')
            ->get()
            ->map(function($conciliacion) {
                $totalVotos = $conciliacion->votos->count();
                $votosFavor = $conciliacion->votos->where('voto', true)->count();
                $votosContra = $conciliacion->votos->where('voto', false)->count();

                return [
                    'conciliacion_id' => $conciliacion->conciliacion_id,
                    'denuncia_id' => $conciliacion->denuncia_id,
                    'numero_expediente' => $conciliacion->denuncia?->numero_expediente,
                    'denunciante' => $conciliacion->denuncia?->persona ?
                        trim($conciliacion->denuncia->persona->nombres . ' ' . $conciliacion->denuncia->persona->apellidos) : null,
                    'fecha_audiencia' => $conciliacion->fecha_audiencia?->format('Y-m-d H:i:s'),
                    'fecha_consolidacion' => $conciliacion->fecha_actualizacion?->format('Y-m-d H:i:s'),
                    'total_votos' => $totalVotos,
                    'votos_favor' => $votosFavor,
                    'votos_contra' => $votosContra,
                    'resultado_final' => $conciliacion->resultado_final,
                    'estado' => $conciliacion->estado,
                    'puede_seleccionarse' => true
                ];
            });
    }

    /**
     * Verificar si una conciliación puede tener sentencia
     */
    public function puedeTenerSentencia(int $conciliacionId): array
    {
        $conciliacion = Conciliacion::with(['sentencia', 'medidaCautelar', 'votos'])->find($conciliacionId);

        if (!$conciliacion) {
            return [
                'puede' => false,
                'motivo' => 'Conciliación no encontrada'
            ];
        }

        $totalVotos = $conciliacion->votos->count();
        $errores = [];

        // Verificar estado
        if ($conciliacion->estado !== 'COMPLETA') {
            $errores[] = 'La conciliación no está en estado COMPLETA';
        }

        // Verificar votos suficientes (4-6)
        if ($totalVotos < 4) {
            $errores[] = "La conciliación tiene $totalVotos votos, necesita al menos 4 para consolidarse";
        }

        // Verificar que no tenga sentencia
        if ($conciliacion->sentencia) {
            $errores[] = 'Esta conciliación ya tiene una sentencia registrada';
        }

        return [
            'puede' => empty($errores),
            'motivos' => $errores,
            'datos' => [
                'conciliacion_id' => $conciliacionId,
                'estado' => $conciliacion->estado,
                'total_votos' => $totalVotos,
                'tiene_medida_cautelar' => $conciliacion->medidaCautelar ? true : false,
                'tiene_sentencia' => $conciliacion->sentencia ? true : false
            ]
        ];
    }

    /**
     * Verificar si una conciliación puede tener medida cautelar
     */
    public function puedeTenerMedidaCautelar(int $conciliacionId): array
    {
        $conciliacion = Conciliacion::with(['sentencia', 'medidaCautelar', 'votos'])->find($conciliacionId);

        if (!$conciliacion) {
            return [
                'puede' => false,
                'motivo' => 'Conciliación no encontrada'
            ];
        }

        $totalVotos = $conciliacion->votos->count();
        $errores = [];

        // Verificar estado
        if ($conciliacion->estado !== 'COMPLETA') {
            $errores[] = 'La conciliación no está en estado COMPLETA';
        }

        // Verificar votos suficientes (4-6)
        if ($totalVotos < 4) {
            $errores[] = "La conciliación tiene $totalVotos votos, necesita al menos 4 para consolidarse";
        }

        // Verificar que no tenga sentencia
        if ($conciliacion->sentencia) {
            $errores[] = 'Esta conciliación ya tiene una sentencia, no puede tener medida cautelar';
        }

        // Verificar que no tenga medida cautelar
        if ($conciliacion->medidaCautelar) {
            $errores[] = 'Esta conciliación ya tiene una medida cautelar registrada';
        }

        return [
            'puede' => empty($errores),
            'motivos' => $errores,
            'datos' => [
                'conciliacion_id' => $conciliacionId,
                'estado' => $conciliacion->estado,
                'total_votos' => $totalVotos,
                'tiene_medida_cautelar' => $conciliacion->medidaCautelar ? true : false,
                'tiene_sentencia' => $conciliacion->sentencia ? true : false
            ]
        ];
    }

    /**
 * Obtener conciliaciones disponibles para nueva conciliación (NO completadas)
 */
public function getDisponiblesParaNuevaConciliacion(): Collection
{
    return Conciliacion::with(['denuncia.persona', 'votos'])
        ->where('estado', '!=', 'COMPLETA') // 👈 Excluir completadas
        ->whereDoesntHave('sentencia')
        ->whereDoesntHave('medidaCautelar')
        ->orderBy('fecha_actualizacion', 'desc')
        ->get();
}


/**
 * Obtener conciliaciones disponibles para remisión
 * Solo las que tienen sentencia y NO tienen remisión activa
 */
public function getDisponiblesParaRemision(): Collection
{
    return Conciliacion::with([
            'denuncia.persona',
            'sentencia'
        ])
        ->where('estado', 'COMPLETA')
        ->whereHas('sentencia')  // Debe tener sentencia
        ->whereDoesntHave('remisiones')  // No debe tener remisiones activas
        ->orderBy('fecha_actualizacion', 'desc')
        ->get()
        ->map(function($conciliacion) {
            return [
                'conciliacion_id' => $conciliacion->conciliacion_id,
                'denuncia_id' => $conciliacion->denuncia_id,
                'numero_expediente' => $conciliacion->denuncia?->numero_expediente,
                'denunciante' => $conciliacion->denuncia?->persona ?
                    trim($conciliacion->denuncia->persona->nombres . ' ' . $conciliacion->denuncia->persona->apellidos) : null,
                'fecha_audiencia' => $conciliacion->fecha_audiencia?->format('Y-m-d H:i:s'),
                'resultado_final' => $conciliacion->resultado_final,
                'motivo_remision' => 'Sentencia emitida que excede competencias',
                'tiene_sentencia' => true,
                'tiene_remision' => false
            ];
        });
}
}
