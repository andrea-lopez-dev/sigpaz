<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Estadísticas de Denuncias - SGPAZ</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #4f46e5; text-align: center; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin: 30px 0; }
        .stat-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center; }
        .stat-value { font-size: 28px; font-weight: bold; color: #4f46e5; }
        .stat-label { color: #6b7280; font-size: 12px; margin-top: 5px; }
        .section-title { font-size: 18px; font-weight: bold; color: #4f46e5; margin: 20px 0 10px; border-left: 4px solid #4f46e5; padding-left: 15px; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        th { background: #4f46e5; color: white; padding: 10px; text-align: left; }
        td { padding: 8px 10px; border-bottom: 1px solid #e5e7eb; }
        .text-right { text-align: right; }
        .footer { text-align: center; margin-top: 40px; padding-top: 15px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 10px; }
        .badge-success { background: #d1fae5; color: #065f46; padding: 3px 8px; border-radius: 12px; font-size: 11px; display: inline-block; }
        .badge-warning { background: #fed7aa; color: #92400e; padding: 3px 8px; border-radius: 12px; font-size: 11px; display: inline-block; }
        .badge-info { background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 12px; font-size: 11px; display: inline-block; }
        .badge-success { background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; }
        .badge-warning { background: #fed7aa; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; }
        .badge-info { background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; }
        .badge-danger { background: #fee2e2; color: #991b1b; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; display: inline-block; }
    </style>
</head>
<body>
    <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #4f46e5; padding-bottom: 15px;">
        <h1>📊 SGPAZ - Estadísticas de Denuncias</h1>
        <p>Generado el: {{ $generado_en }}</p>
    </div>

    <div class="stats-grid">
        <div class="stat-card"><div class="stat-value">{{ number_format($total_denuncias) }}</div><div class="stat-label">Total Denuncias</div></div>
        <div class="stat-card"><div class="stat-value">{{ number_format($denuncias_activas) }}</div><div class="stat-label">Denuncias Activas</div></div>
        <div class="stat-card"><div class="stat-value">{{ number_format($denuncias_resueltas) }}</div><div class="stat-label">Denuncias Resueltas</div></div>
        <div class="stat-card"><div class="stat-value">{{ number_format($conciliaciones_exitosas) }}</div><div class="stat-label">Conciliaciones Exitosas</div></div>
        <div class="stat-card"><div class="stat-value">{{ $tasa_resolucion }}%</div><div class="stat-label">Tasa de Resolución</div></div>
    </div>

    <div class="section-title">📅 Denuncias por Mes</div>
    <table>
        <thead><tr><th>Mes</th><th class="text-right">Cantidad</th></tr></thead>
        <tbody>
            @php $totalGeneral = 0; @endphp
            @foreach($denuncias_por_mes as $item)
                @php $totalGeneral += $item['total']; @endphp
                <tr><td><strong>{{ $item['mes'] }}</strong></td><td class="text-right">{{ number_format($item['total']) }}</td></tr>
            @endforeach
        </tbody>
        <tfoot><tr style="background: #f9fafb; font-weight: bold;"><td><strong>TOTAL</strong></td><td class="text-right"><strong>{{ number_format($totalGeneral) }}</strong></td></tr></tfoot>
    </table>

 @if(count($ultimas_denuncias) > 0)
<div class="section-title">🕒 Últimas Denuncias</div>
<table>
    <thead>
        <tr>
            <th>Código</th>
            <th>Denunciante</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Fecha</th>
        </tr>
    </thead>
    <tbody>
        @foreach($ultimas_denuncias as $item)
        <tr>
            <td><code>{{ $item['codigo'] }}</code></td>
            <td>{{ $item['denunciante'] }}</td>
            <td>{{ $item['tipo_conflicto'] }}</td>
            <td>
                @php
                    $estado = $item['estado'];
                    $badgeClass = 'badge-info';

                    if (str_contains($estado, 'EJECUTADA') || $estado == 'RESUELTA') {
                        $badgeClass = 'badge-success';
                    } elseif (str_contains($estado, 'CONCILIACIÓN') || $estado == 'EN CONCILIACIÓN') {
                        $badgeClass = 'badge-warning';
                    } elseif (str_contains($estado, 'REMISIÓN')) {
                        $badgeClass = 'badge-info';
                    } elseif ($estado == 'ARCHIVADA' || $estado == 'CERRADA') {
                        $badgeClass = 'badge-info';
                    }
                @endphp
                <span class="{{ $badgeClass }}">{{ $estado }}</span>
            </td>
            <td>{{ $item['fecha'] }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endif

    <div class="footer">
        <p>Documento generado automáticamente por el Sistema SGPAZ</p>
        <p>© {{ date('Y') }} - Sistema de Gestión de Procesos de Paz</p>
    </div>
</body>
</html>
