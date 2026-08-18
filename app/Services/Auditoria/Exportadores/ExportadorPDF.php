<?php

namespace App\Services\Auditoria\Exportadores;

use Illuminate\Support\Collection;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Log;

class ExportadorPDF extends ExportadorBase
{
    public function exportar(Collection $datos, array $opciones = []): string
    {
        try {
            $datos = $this->prepararDatos($datos, $opciones);

            $options = new Options();
            $options->set('defaultFont', 'Helvetica');
            $options->set('isHtml5ParserEnabled', true);
            $options->set('isRemoteEnabled', true); // Necesario para Chart.js CDN
            $options->set('isFontSubsettingEnabled', true);
            $options->set('chroot', realpath(base_path()));

            $dompdf = new Dompdf($options);

            // Preparar datos completos para gráficos
            $estadisticas = $this->prepararEstadisticasCompletas($datos);

            $html = $this->generarHTML($datos, $opciones, $estadisticas);
            $dompdf->loadHtml($html, 'UTF-8');
            $dompdf->setPaper('A4', $opciones['orientacion'] ?? 'landscape');
            $dompdf->render();

            return $dompdf->output();

        } catch (\Exception $e) {
            Log::error('Error en exportación PDF: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString()
            ]);
            throw $e;
        }
    }

    private function prepararEstadisticasCompletas(Collection $datos): array
    {
        if ($datos->isEmpty()) {
            return [
                'total' => 0,
                'acciones' => [],
                'niveles' => [],
                'actividad_por_hora' => [],
                'top_usuarios' => [],
                'fecha_inicio' => null,
                'fecha_fin' => null
            ];
        }

        // Estadísticas por acción
        $acciones = [];
        foreach ($datos->groupBy('accion') as $accion => $items) {
            $count = $items->count();
            $acciones[$accion] = [
                'count' => $count,
                'percentage' => ($count / $datos->count()) * 100
            ];
        }
        uasort($acciones, function($a, $b) {
            return $b['count'] <=> $a['count'];
        });
        $acciones = array_slice($acciones, 0, 10);

        // Estadísticas por nivel
        $niveles = [];
        $colores = ['#dc3545', '#ffc107', '#28a745', '#17a2b8', '#6c757d'];
        $colorIndex = 0;
        foreach ($datos->groupBy('nivel') as $nivel => $items) {
            $count = $items->count();
            $niveles[$nivel] = [
                'count' => $count,
                'percentage' => ($count / $datos->count()) * 100,
                'color' => $colores[$colorIndex % count($colores)]
            ];
            $colorIndex++;
        }

        // Actividad por hora (0-23)
        $actividadPorHora = array_fill(0, 24, 0);
        foreach ($datos as $item) {
            $fecha = null;
            if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                $fecha = $item->fecha;
            } elseif (is_array($item)) {
                $fecha = $item['fecha'] ?? null;
            }

            if ($fecha instanceof \DateTime) {
                $hora = (int)$fecha->format('H');
                $actividadPorHora[$hora]++;
            }
        }

        // Top usuarios más activos
        $topUsuarios = [];
        foreach ($datos as $item) {
            $usuario = 'Sistema';
            if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                $usuario = $item->usuario?->nombre_usuario ?? $item->usuario_nombre ?? 'Sistema';
            } elseif (is_array($item)) {
                $usuario = $item['usuario_nombre'] ?? $item['usuario_id'] ?? 'Sistema';
            }
            $topUsuarios[$usuario] = ($topUsuarios[$usuario] ?? 0) + 1;
        }
        arsort($topUsuarios);
        $topUsuarios = array_slice($topUsuarios, 0, 5);

        // Fechas
        $fechas = [];
        foreach ($datos as $item) {
            $fecha = null;
            if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                $fecha = $item->fecha;
            } elseif (is_array($item)) {
                $fecha = $item['fecha'] ?? null;
            }
            if ($fecha instanceof \DateTime) {
                $fechas[] = $fecha;
            }
        }

        return [
            'total' => $datos->count(),
            'acciones' => $acciones,
            'niveles' => $niveles,
            'actividad_por_hora' => $actividadPorHora,
            'top_usuarios' => $topUsuarios,
            'fecha_inicio' => !empty($fechas) ? min($fechas)->format('Y-m-d') : null,
            'fecha_fin' => !empty($fechas) ? max($fechas)->format('Y-m-d') : null
        ];
    }

    private function generarHTML(Collection $datos, array $opciones = [], array $estadisticas = []): string
    {
        $headers = [];
        $rows = [];

        if ($datos->isNotEmpty()) {
            $headers = [
                'ID', 'Fecha/Hora', 'Usuario', 'Acción',
                'Tabla Afectada', 'Descripción', 'IP Origen', 'Nivel'
            ];

            $displayLimit = 50;
            $displayCount = 0;

            foreach ($datos as $item) {
                if ($displayCount >= $displayLimit) break;

                if ($item instanceof \Illuminate\Database\Eloquent\Model) {
                    $item = $item->toArray();
                }

                $row = [
                    $item['log_id'] ?? '',
                    $this->formatearFecha($item['fecha'] ?? null),
                    $this->obtenerUsuario($item),
                    $item['accion'] ?? '',
                    $item['tabla_afectada'] ?? '',
                    $this->truncarTexto($item['descripcion'] ?? '', 100),
                    $item['ip_origen'] ?? '',
                    $this->formatearNivelHTML($item['nivel'] ?? 'INFO')
                ];
                $rows[] = $row;
                $displayCount++;
            }
        }

        return View::make('exports.auditoria-pdf', [
            'headers' => $headers,
            'rows' => $rows,
            'titulo' => $opciones['titulo'] ?? 'Reporte de Auditoría SIGPAZ',
            'fecha' => now(),
            'total' => $datos->count(),
            'total_mostrados' => min($datos->count(), 50),
            'estadisticas' => $estadisticas,
            'tiene_mas_registros' => $datos->count() > 50
        ])->render();
    }

    private function formatearFecha($fecha): string
    {
        if (!$fecha) return '';
        if ($fecha instanceof \DateTime) {
            return $fecha->format('Y-m-d H:i:s');
        }
        return (string) $fecha;
    }

    private function obtenerUsuario(array $item): string
    {
        if (isset($item['usuario_nombre'])) {
            return $item['usuario_nombre'];
        }
        if (isset($item['usuario_id'])) {
            return 'Usuario ID: ' . $item['usuario_id'];
        }
        return 'Sistema';
    }

    private function truncarTexto(?string $texto, int $longitud): string
    {
        if (!$texto) return '';
        if (mb_strlen($texto) <= $longitud) return $texto;
        return mb_substr($texto, 0, $longitud) . '...';
    }

    private function formatearNivelHTML(string $nivel): string
    {
        $badges = [
            'ERROR' => '<span class="badge badge-error">🔴 ERROR</span>',
            'CRITICAL' => '<span class="badge badge-error">⚠️ CRITICAL</span>',
            'WARNING' => '<span class="badge badge-warning">🟡 WARNING</span>',
            'INFO' => '<span class="badge badge-info">🔵 INFO</span>',
            'DEBUG' => '<span class="badge badge-success">🟢 DEBUG</span>'
        ];
        return $badges[$nivel] ?? $nivel;
    }

    public function getContentType(): string
    {
        return 'application/pdf';
    }

    public function getExtension(): string
    {
        return 'pdf';
    }
}
