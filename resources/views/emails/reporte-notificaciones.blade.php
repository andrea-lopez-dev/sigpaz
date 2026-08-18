<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Notificaciones - SIGPAZ</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #4f46e5, #6366f1);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
            border: 1px solid #e5e7eb;
        }
        h2 {
            color: #4f46e5;
            margin-top: 0;
        }
        .info-box {
            background: #e0e7ff;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .filtros {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            border: 1px solid #e5e7eb;
        }
        .filtro-item {
            margin: 8px 0;
        }
        .filtro-label {
            font-weight: bold;
            color: #4f46e5;
        }
        .btn {
            background: #4f46e5;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            display: inline-block;
            margin: 15px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">📊 SIGPAZ</div>
        <div>Sistema de Gestión de Justicia de Paz</div>
    </div>

    <div class="content">
        <h2>📋 Reporte de Notificaciones</h2>

        <p>Estimado(a) usuario,</p>

        <p>Adjunto encontrará el reporte de notificaciones solicitado, generado el <strong>{{ $fechaGeneracion }}</strong>.</p>

        <div class="info-box">
            <strong>📄 Información del reporte:</strong><br>
            • Archivo: <strong>{{ $nombreArchivo }}</strong><br>
            • Generado por: <strong>{{ $usuario }}</strong>
        </div>

        @if(!empty($filters))
        <div class="filtros">
            <strong>🔍 Filtros aplicados:</strong>
            <div class="filtro-item">
                <span class="filtro-label">📅 Período:</span>
                {{ $filters['fecha_inicio'] ?? 'Sin inicio' }} - {{ $filters['fecha_fin'] ?? 'Sin fin' }}
            </div>
            @if(!empty($filters['tipo_notificacion']))
            <div class="filtro-item">
                <span class="filtro-label">📌 Tipo de notificación:</span>
                {{ $filters['tipo_notificacion'] }}
            </div>
            @endif
            @if(!empty($filters['estado']))
            <div class="filtro-item">
                <span class="filtro-label">⚡ Estado:</span>
                {{ $filters['estado'] }}
            </div>
            @endif
        </div>
        @endif

        <p>El reporte se encuentra adjunto en formato Excel con todos los detalles de las notificaciones registradas en el sistema.</p>

        <hr>

        <p style="font-size: 14px; color: #666;">
            Este es un mensaje automático generado por el sistema SIGPAZ. Por favor no responder a este correo.
        </p>
    </div>

    <div class="footer">
        <p>© {{ date('Y') }} SIGPAZ - Sistema de Gestión de Justicia de Paz</p>
        <p>Este correo fue enviado automáticamente por el sistema</p>
    </div>
</body>
</html>
