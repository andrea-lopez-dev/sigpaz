<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{{ $titulo }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            margin: 20px;
            font-size: 11px;
            line-height: 1.4;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #34495e;
        }

        .header h1 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .header .subtitle {
            color: #7f8c8d;
            font-size: 12px;
        }

        /* Cards de estadísticas */
        .stats-container {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .stat-card {
            flex: 1;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            border-left: 4px solid #3498db;
        }

        .stat-card .stat-value {
            font-size: 28px;
            font-weight: bold;
            color: #2c3e50;
        }

        .stat-card .stat-label {
            font-size: 11px;
            color: #7f8c8d;
            margin-top: 5px;
        }

        /* Gráficas en tabla */
        .chart-container {
            margin-bottom: 30px;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
        }

        .chart-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #2c3e50;
            border-left: 3px solid #3498db;
            padding-left: 10px;
        }

        .chart-bar {
            margin-bottom: 10px;
        }

        .chart-bar-label {
            font-size: 10px;
            margin-bottom: 3px;
            color: #555;
        }

        .chart-bar-bg {
            background: #aaaaaa;
            height: 25px;
            border-radius: 4px;
            overflow: hidden;
        }

        .chart-bar-fill {
            background: linear-gradient(90deg, #3498db, #2980b9);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 8px;
            color: white;
            font-size: 10px;
            font-weight: bold;
            border-radius: 4px;
        }

        .badge {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: bold;
        }

        .badge-error { background: #fee; color: #c00; }
        .badge-warning { background: #fef3c7; color: #d97706; }
        .badge-info { background: #e3f2fd; color: #1976d2; }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 9px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            vertical-align: top;
        }

        th {
            background-color: #34495e;
            color: white;
            font-weight: bold;
            font-size: 10px;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 9px;
            color: #95a5a6;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }

        .page-break {
            page-break-before: always;
        }

        .text-center { text-align: center; }
        .mt-20 { margin-top: 20px; }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <h1>{{ $titulo }}</h1>
        <div class="subtitle">
            <p>Fecha de generación: {{ $fecha->format('Y-m-d H:i:s') }}</p>
            <p>Generado por: {{ auth()->user()?->nombre_usuario ?? 'Sistema' }}</p>
        </div>
    </div>

    <!-- Cards de estadísticas -->
    <div class="stats-container">
        <div class="stat-card">
            <div class="stat-value">{{ number_format($total) }}</div>
            <div class="stat-label">Total Registros</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">{{ number_format(count($estadisticas['top_usuarios'] ?? [])) }}</div>
            <div class="stat-label">Usuarios Activos</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">{{ number_format($estadisticas['niveles']['ERROR']['count'] ?? 0) }}</div>
            <div class="stat-label">Eventos Críticos</div>
        </div>
    </div>

    <!-- Gráfica de Acciones -->
    @if(!empty($estadisticas['acciones']))
    <div class="chart-container">
        <div class="chart-title">📊 Top Acciones Realizadas</div>
        @foreach($estadisticas['acciones'] as $accion => $data)
            <div class="chart-bar">
                <div class="chart-bar-label">{{ $accion }} ({{ $data['count'] }} - {{ number_format($data['percentage'], 1) }}%)</div>
                <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: {{ min($data['percentage'], 100) }}%">
                        @if($data['percentage'] > 15)
                            {{ number_format($data['percentage'], 1) }}%
                        @endif
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    @endif

    <!-- Gráfica de Niveles -->
    @if(!empty($estadisticas['niveles']))
    <div class="chart-container">
        <div class="chart-title">⚠️ Distribución por Nivel de Severidad</div>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            @foreach($estadisticas['niveles'] as $nivel => $data)
                <div style="flex: 1; text-align: center; min-width: 80px;">
                    <div style="font-size: 24px; font-weight: bold; color:
                        @if($nivel == 'ERROR') #dc3545
                        @elseif($nivel == 'WARNING') #ffc107
                        @else #28a745
                        @endif">
                        {{ $data['count'] }}
                    </div>
                    <div style="font-size: 11px; margin-top: 5px;">{{ $nivel }}</div>
                    <div style="font-size: 10px; color: #666;">{{ number_format($data['percentage'], 1) }}%</div>
                </div>
            @endforeach
        </div>
    </div>
    @endif

    <!-- Top Usuarios -->
    @if(!empty($estadisticas['top_usuarios']))
    <div class="chart-container">
        <div class="chart-title">👥 Top {{ count($estadisticas['top_usuarios']) }} Usuarios Más Activos</div>
        <table style="width: 100%; margin-top: 10px;">
            @foreach($estadisticas['top_usuarios'] as $usuario => $count)
            <tr>
                <td style="width: 80%; padding: 5px;">{{ $usuario }}</td>
                <td style="width: 20%; text-align: right; padding: 5px;">
                    <strong>{{ $count }}</strong> acciones
                </td>
            </tr>
            @endforeach
        </table>
    </div>
    @endif

    <!-- Tabla de Datos -->
    <div class="chart-container">
        <div class="chart-title">📋 Detalle de Eventos</div>
        @if($total_mostrados < $total)
            <div class="badge badge-warning" style="margin-bottom: 10px; display: inline-block;">
                Mostrando {{ number_format($total_mostrados) }} de {{ number_format($total) }} registros
            </div>
        @endif

        @if(!empty($headers) && !empty($rows))
        <table>
            <thead>
                <tr>
                    @foreach($headers as $header)
                        <th>{{ $header }}</th>
                    @endforeach
                </tr>
            </thead>
            <tbody>
                @foreach($rows as $row)
                <tr>
                    @foreach($row as $cell)
                        <td>{!! $cell !!}</td>
                    @endforeach
                </tr>
                @endforeach
            </tbody>
        </table>

        @if($tiene_mas_registros ?? false)
            <div class="text-center mt-20" style="color: #666; font-style: italic;">
                ... y {{ number_format($total - $total_mostrados) }} registros adicionales
            </div>
        @endif
        @else
            <p class="text-center">No hay datos para mostrar</p>
        @endif
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>SIGPAZ - Sistema Integral de Gestión de Procesos y Auditoría de Zaruma</p>
        <p>Reporte generado automáticamente - {{ $fecha->format('d/m/Y H:i:s') }}</p>
        <p>Confidencial - Uso exclusivo para auditoría</p>
    </div>
</body>
</html>
