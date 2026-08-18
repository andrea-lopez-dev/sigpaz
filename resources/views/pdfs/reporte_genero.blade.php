<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte por Género</title>
    <style>
        @page { margin: 1.5cm; }
        body { font-family: 'DejaVu Sans', sans-serif; font-size: 12px; }
        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #2c5282;
            padding-bottom: 10px;
        }
        .header h1 { color: #2c5282; margin: 0; }
        .header p { color: #718096; margin: 5px 0 0; }
        .section-title {
            background: #2c5282;
            color: white;
            padding: 8px;
            margin: 15px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th { background: #f0f0f0; font-weight: bold; }
        .footer {
            position: fixed;
            bottom: 20px;
            text-align: center;
            font-size: 10px;
            color: #999;
            width: 100%;
        }
        .chart-bar {
            background: #2c5282;
            height: 20px;
            border-radius: 10px;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>SIGPAZ</h1>
        <p>Reporte de Distribución por Género</p>
        <p>Fecha: {{ $fecha_exportacion }}</p>
    </div>

    <div class="section-title">📊 Distribución por Género</div>

    <table>
        <thead>
            <tr>
                <th>Género</th>
                <th>Cantidad</th>
                <th>Porcentaje</th>
                <th>Gráfico</th>
            </tr>
        </thead>
        <tbody>
            @php $total = $reporte->sum('total'); @endphp
            @foreach($reporte as $item)
            <tr>
                <td>{{ $item['genero'] }}</td>
                <td>{{ $item['total'] }}</td>
                <td>{{ $total > 0 ? round(($item['total'] / $total) * 100, 2) : 0 }}%</td>
                <td style="width: 150px;">
                    <div class="chart-bar" style="width: {{ $total > 0 ? ($item['total'] / $total) * 100 : 0 }}%;"></div>
                </td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr style="background: #f0f0f0; font-weight: bold;">
                <td>TOTAL</td>
                <td>{{ $total }}</td>
                <td>100%</td>
                <td></td>
            </tr>
        </tfoot>
    </table>

    <div class="footer">
        <p>Documento generado por SIGPAZ - Sistema de Gestión de Justicia de Paz</p>
    </div>
</body>
</html>
