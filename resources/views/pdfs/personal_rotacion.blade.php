<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Rotación</title>
    <style>
        body { font-family: 'DejaVu Sans', sans-serif; font-size: 12px; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .titulo { font-size: 16px; font-weight: bold; margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #2C5282; color: white; }
    </style>
</head>
<body>
    <div class="header">
        <div class="titulo">Reporte de Rotación de Personal</div>
        <div>Fecha: {{ $fecha_exportacion ?? date('d/m/Y H:i:s') }}</div>
    </div>

    <table>
        <thead><tr><th>Métrica</th><th>Valor</th></tr></thead>
        <tbody>
            <tr><td>Ingresos este año</td><td>{{ $ingresos ?? 0 }}</td></tr>
            <tr><td>Egresos este año</td><td>{{ $egresos ?? 0 }}</td></tr>
            <tr><td>Tasa de rotación</td><td>{{ $tasaRotacion ?? '0' }}%</td></tr>
        </tbody>
    </table>
</body>
</html>
