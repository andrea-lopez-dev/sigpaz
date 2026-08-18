<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Notificaciones</title>
    <style>
        body { font-family: 'DejaVu Sans', sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #4f46e5; }
        .stats { display: flex; justify-content: space-between; margin: 20px 0; flex-wrap: wrap; }
        .stat-card { background: #f3f4f6; padding: 15px; border-radius: 8px; text-align: center; width: 18%; margin: 5px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #4f46e5; color: white; }
        .footer { margin-top: 30px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>SIGPAZ - Reporte de Notificaciones</h1>
        <p>Generado: {{ $fecha_generacion->format('d/m/Y H:i:s') }}</p>
    </div>

    <div class="stats">
        <div class="stat-card"><strong>Total:</strong> {{ $estadisticas['total'] }}</div>
        <div class="stat-card"><strong>Emitidas:</strong> {{ $estadisticas['emitidas'] }}</div>
        <div class="stat-card"><strong>Entregadas:</strong> {{ $estadisticas['entregadas'] }}</div>
        <div class="stat-card"><strong>Pendientes:</strong> {{ $estadisticas['pendientes'] }}</div>
        <div class="stat-card"><strong>Canceladas:</strong> {{ $estadisticas['canceladas'] }}</div>
    </div>

    <table>
        <thead>
            <tr><th>ID</th><th>Denuncia</th><th>Tipo</th><th>Fecha</th><th>Destinatario</th><th>Estado</th></tr>
        </thead>
        <tbody>
            @foreach($notificaciones as $n)
            <tr>
                <td>{{ $n->notificacion_id }}</td>
                <td>{{ $n->denuncia?->numero_expediente ?? $n->denuncia_id }}</td>
                <td>{{ $n->tipoNotificacion?->nombre ?? 'N/A' }}</td>
                <td>{{ $n->fecha_emision?->format('d/m/Y') ?? 'N/A' }}</td>
                <td>{{ $n->destinatario }}</td>
                <td>{{ $n->estado }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        <p>Documento generado por SIGPAZ - Sistema de Gestión de Justicia de Paz</p>
    </div>
</body>
</html>
