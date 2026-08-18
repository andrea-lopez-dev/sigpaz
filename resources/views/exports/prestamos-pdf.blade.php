<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Préstamos</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
        }
        .header h1 {
            color: #2c3e50;
            margin: 0;
        }
        .header p {
            color: #7f8c8d;
            margin: 5px 0;
        }
        .estadisticas {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            gap: 15px;
        }
        .stat-card {
            flex: 1;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #3498db;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
        }
        .stat-label {
            font-size: 12px;
            color: #7f8c8d;
            margin-top: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th {
            background: #34495e;
            color: white;
            padding: 10px;
            text-align: left;
            font-size: 11px;
        }
        td {
            border: 1px solid #ddd;
            padding: 8px;
            font-size: 10px;
        }
        tr:nth-child(even) {
            background: #f9f9f9;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #7f8c8d;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
        .estado-activo { color: #27ae60; font-weight: bold; }
        .estado-retrasado { color: #e74c3c; font-weight: bold; }
        .estado-devuelto { color: #3498db; }
    </style>
</head>
<body>
    <div class="header">
        <h1>{{ $titulo }}</h1>
        <p>Generado el: {{ $fecha_generacion }}</p>
        @if($filtros)
            <p>Filtros aplicados: {{ json_encode($filtros) }}</p>
        @endif
    </div>

    <div class="estadisticas">
        <div class="stat-card">
            <div class="stat-number">{{ $estadisticas['prestamos_activos'] ?? 0 }}</div>
            <div class="stat-label">Préstamos Activos</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{{ $estadisticas['retrasados'] ?? 0 }}</div>
            <div class="stat-label">Retrasados</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{{ $estadisticas['devueltos_hoy'] ?? 0 }}</div>
            <div class="stat-label">Devueltos Hoy</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">{{ $total_prestamos }}</div>
            <div class="stat-label">Total Préstamos</div>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Código</th>
                <th>Expediente</th>
                <th>Solicitante</th>
                <th>Fecha Préstamo</th>
                <th>Fecha Retorno</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            @foreach($prestamos as $prestamo)
            <tr>
                <td>{{ $prestamo->prestamo_id }}</td>
                <td>{{ $prestamo->identificador ?? 'N/A' }}</td>
                <td>{{ $prestamo->denuncia->numero_expediente ?? 'N/A' }}</td>
                <td>{{ $prestamo->personal->persona->nombres ?? 'N/A' }} {{ $prestamo->personal->persona->apellidos ?? '' }}</td>
                <td>{{ date('d/m/Y', strtotime($prestamo->fecha_prestamo)) }}</td>
                <td>{{ date('d/m/Y', strtotime($prestamo->fecha_retorno_prevista)) }}</td>
                <td class="estado-{{ strtolower($prestamo->estado) }}">{{ $prestamo->estado }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        <p>Documento generado automáticamente por el Sistema de Gestión Judicial</p>
        <p>Total de registros: {{ $total_prestamos }}</p>
    </div>
</body>
</html>
