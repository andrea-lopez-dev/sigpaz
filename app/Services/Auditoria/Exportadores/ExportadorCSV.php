<?php

namespace App\Services\Auditoria\Exportadores;

use Illuminate\Support\Collection;

class ExportadorCSV extends ExportadorBase
{
    public function exportar(Collection $datos, array $opciones = []): string
    {
        $datos = $this->prepararDatos($datos, $opciones);

        // Crear un archivo temporal en memoria
        $output = fopen('php://temp', 'r+');

        // Añadir BOM para UTF-8 (para caracteres especiales en Excel)
        fwrite($output, "\xEF\xBB\xBF");

        // Agregar información del reporte
        $this->escribirMetadata($output, $opciones);

        if ($datos->isNotEmpty()) {
            // Escribir cabeceras con formato profesional
            $headers = $this->getHeadersProfesionales();
            fputcsv($output, $headers);

            // Escribir datos con formato mejorado
            foreach ($datos as $index => $fila) {
                $row = $this->formatearFilaParaCSV($fila, $index + 1);
                fputcsv($output, $row);
            }

            // Agregar pie de página con estadísticas
            $this->escribirFooter($output, $datos);
        }

        // Obtener el contenido
        rewind($output);
        $csv = stream_get_contents($output);
        fclose($output);

        return $csv;
    }

    private function escribirMetadata($output, array $opciones): void
    {
        fputcsv($output, ['']);
        fputcsv($output, ['REPORTE DE AUDITORÍA SIGPAZ']);
        fputcsv($output, ['Título:', $opciones['titulo'] ?? 'Reporte de Auditoría']);
        fputcsv($output, ['Fecha generación:', now()->format('Y-m-d H:i:s')]);
        fputcsv($output, ['Generado por:', auth()->user()?->nombre_usuario ?? 'Sistema']);
        fputcsv($output, ['']);
        fputcsv($output, ['']);
    }

    private function getHeadersProfesionales(): array
    {
        return [
            '#',
            'ID Log',
            'Fecha/Hora',
            'Usuario',
            'Acción',
            'Tabla Afectada',
            'ID Registro',
            'Descripción',
            'IP Origen',
            'Nivel',
            'User Agent',
            'Transacción ID'
        ];
    }

    private function formatearFilaParaCSV($fila, int $numero): array
    {
        // Si es modelo Eloquent, convertir a array
        if ($fila instanceof \Illuminate\Database\Eloquent\Model) {
            $fila = $fila->toArray();
        }

        return [
            $numero,
            $fila['log_id'] ?? '',
            $this->formatearFecha($fila['fecha'] ?? null),
            $this->obtenerUsuario($fila),
            $fila['accion'] ?? '',
            $fila['tabla_afectada'] ?? '',
            $fila['registro_id'] ?? '',
            $this->limpiarTexto($fila['descripcion'] ?? ''),
            $fila['ip_origen'] ?? '',
            $this->formatearNivel($fila['nivel'] ?? 'INFO'),
            $this->limpiarTexto($fila['user_agent'] ?? ''),
            $fila['transaccion_id'] ?? ''
        ];
    }

    private function escribirFooter($output, Collection $datos): void
    {
        fputcsv($output, ['']);
        fputcsv($output, ['']);
        fputcsv($output, ['RESUMEN DEL REPORTE']);
        fputcsv($output, ['Total de registros:', $datos->count()]);

        // Estadísticas por acción
        $acciones = $datos->groupBy('accion')->map->count();
        fputcsv($output, ['']);
        fputcsv($output, ['DISTRIBUCIÓN POR ACCIÓN']);
        foreach ($acciones as $accion => $cantidad) {
            fputcsv($output, [$accion, $cantidad, number_format(($cantidad / $datos->count()) * 100, 2) . '%']);
        }

        // Estadísticas por nivel
        $niveles = $datos->groupBy('nivel')->map->count();
        fputcsv($output, ['']);
        fputcsv($output, ['DISTRIBUCIÓN POR NIVEL']);
        foreach ($niveles as $nivel => $cantidad) {
            fputcsv($output, [$nivel, $cantidad, number_format(($cantidad / $datos->count()) * 100, 2) . '%']);
        }

        fputcsv($output, ['']);
        fputcsv($output, ['Fin del reporte - SIGPAZ']);
        fputcsv($output, ['']);
    }

    private function formatearFecha($fecha): string
    {
        if (!$fecha) return '';
        if ($fecha instanceof \DateTime) {
            return $fecha->format('Y-m-d H:i:s');
        }
        return $fecha;
    }

    private function obtenerUsuario(array $fila): string
    {
        if (isset($fila['usuario']?->nombre_usuario)) {
            return $fila['usuario']->nombre_usuario;
        }
        return $fila['usuario_nombre'] ?? $fila['usuario_id'] ?? 'Sistema';
    }

    private function limpiarTexto(?string $texto): string
    {
        if (!$texto) return '';
        // Eliminar saltos de línea y caracteres especiales
        $texto = str_replace(["\r", "\n", "\t"], ' ', $texto);
        return trim($texto);
    }

    private function formatearNivel(string $nivel): string
    {
        $colores = [
            'ERROR' => '🔴 ERROR',
            'CRITICAL' => '⚠️ CRITICAL',
            'WARNING' => '🟡 WARNING',
            'INFO' => '🔵 INFO',
            'DEBUG' => '🟢 DEBUG'
        ];
        return $colores[$nivel] ?? $nivel;
    }

    public function getContentType(): string
    {
        return 'text/csv; charset=UTF-8';
    }

    public function getExtension(): string
    {
        return 'csv';
    }
}
