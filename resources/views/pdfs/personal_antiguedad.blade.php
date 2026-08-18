<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Antigüedad</title>
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
        <div class="titulo">Reporte de Antigüedad del Personal</div>
        <div>Fecha: {{ $fecha_exportacion ?? date('d/m/Y H:i:s') }}</div>
    </div>

    <table>
        <thead><tr><th>Rango de Antigüedad</th><th>Cantidad</th></tr></thead>
        <tbody>
            @foreach($reporte as $item)
            <tr><td>{{ $item['rango'] }}</td><td>{{ $item['total'] }}</td></tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
