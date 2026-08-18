<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Estadísticas de Personal</title>
    <style>
        body { font-family: 'DejaVu Sans', sans-serif; font-size: 12px; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; }
        .titulo { font-size: 16px; font-weight: bold; margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #2C5282; color: white; }
        .footer { position: fixed; bottom: 0; text-align: center; font-size: 10px; width: 100%; }
    </style>
</head>
<body>
    <div class="header">
        <div class="titulo">Estadísticas de Personal</div>
        <div>Generado: {{ $fecha_exportacion ?? now()->format('d/m/Y H:i:s') }}</div>
    </div>

    <div class="titulo">Resumen General</div>
    <table>
        <thead>
            <tr><th>Métrica</th><th>Valor</th></tr>
        </thead>
        <tbody>
            <tr><td>Total Personal</td><td>{{ $estadisticas['total_personal'] ?? 0 }}</td></tr>
            <tr><td>Personal Activo</td><td>{{ $estadisticas['activos'] ?? 0 }}</td></tr>
            <tr><td>Personal Inactivo</td><td>{{ $estadisticas['inactivos'] ?? 0 }}</td></tr>
        </tbody>
    </table>

    @if(isset($estadisticas['por_cargo']) && count($estadisticas['por_cargo']) > 0)
    <div class="titulo">Distribución por Cargo</div>
    <table>
        <thead>
            <tr><th>Cargo</th><th>Cantidad</th></tr>
        </thead>
        <tbody>
            @foreach($estadisticas['por_cargo'] as $cargo)
            <tr><td>{{ $cargo['nombre'] ?? 'N/A' }}</td><td>{{ $cargo['total'] ?? 0 }}</td></tr>
            @endforeach
        </tbody>
    </table>
    @endif

    <div class="footer">
        Documento generado por SIGPAZ
    </div>
</body>
</html>
