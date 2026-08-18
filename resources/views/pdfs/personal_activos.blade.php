<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Personal Activo/Inactivo</title>
    <style>
        body { font-family: 'DejaVu Sans', sans-serif; font-size: 12px; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .titulo { font-size: 16px; font-weight: bold; margin: 20px 0; text-align: center; }
        .stats { display: flex; justify-content: center; gap: 40px; margin: 30px 0; }
        .stat-card { text-align: center; border: 1px solid #ddd; padding: 20px; width: 200px; }
        .stat-value { font-size: 36px; font-weight: bold; color: #2C5282; }
        .footer { position: fixed; bottom: 0; text-align: center; font-size: 10px; width: 100%; }
    </style>
</head>
<body>
    <div class="header">
        <div class="titulo">Reporte de Personal Activo/Inactivo</div>
        <div>Fecha: {{ $fecha_exportacion ?? now()->format('d/m/Y H:i:s') }}</div>
    </div>

    <div class="stats">
        <div class="stat-card">
            <div class="stat-value">{{ $activos ?? 0 }}</div>
            <div>Personal Activo</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">{{ $inactivos ?? 0 }}</div>
            <div>Personal Inactivo</div>
        </div>
    </div>

    <div class="footer">
        Documento generado por SIGPAZ
    </div>
</body>
</html>
