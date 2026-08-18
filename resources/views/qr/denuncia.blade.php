<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Denuncia {{ $denuncia->codigo_externo ?? 'SIGPAZ' }} - Sistema de Gestión de Paz</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        .card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
            margin-bottom: 20px;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Header con diseño moderno */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            position: relative;
        }

        .header::before {
            content: "⚖️";
            position: absolute;
            font-size: 80px;
            opacity: 0.1;
            bottom: 10px;
            right: 20px;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .header .subtitle {
            font-size: 14px;
            opacity: 0.9;
            margin-bottom: 15px;
        }

        .codigo-container {
            background: rgba(255,255,255,0.2);
            padding: 12px 24px;
            border-radius: 50px;
            display: inline-block;
            backdrop-filter: blur(10px);
        }

        .codigo {
            font-family: 'Courier New', monospace;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        /* Contenido principal */
        .content {
            padding: 30px;
        }

        /* Grid de información */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }

        .info-card {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 15px;
            transition: transform 0.2s;
        }

        .info-card:hover {
            transform: translateY(-2px);
        }

        .info-label {
            font-size: 12px;
            color: #6c757d;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .info-value {
            font-size: 16px;
            color: #212529;
            font-weight: 500;
            word-break: break-word;
        }

        /* Badges de estado */
        .estado-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .estado-ingresada { background: #dbeafe; color: #1e40af; }
        .estado-revision { background: #fef3c7; color: #92400e; }
        .estado-investigacion { background: #fed7aa; color: #9b3412; }
        .estado-resuelta { background: #dcfce7; color: #166534; }
        .estado-archivada { background: #f3f4f6; color: #6b7280; }

        /* Sección de involucrados */
        .involucrados-section {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
        }

        .involucrados-section h3 {
            margin-bottom: 15px;
            color: #212529;
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .involucrados-grid {
            display: grid;
            gap: 10px;
        }

        .involucrado-card {
            background: white;
            border-radius: 10px;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #e9ecef;
            transition: all 0.2s;
        }

        .involucrado-card:hover {
            border-color: #667eea;
            box-shadow: 0 2px 8px rgba(102,126,234,0.1);
        }

        .involucrado-info {
            flex: 1;
        }

        .involucrado-nombre {
            font-weight: 600;
            color: #212529;
            margin-bottom: 4px;
        }

        .involucrado-documento {
            font-size: 12px;
            color: #6c757d;
        }

        .involucrado-rol {
            background: #e9ecef;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: capitalize;
            color: #495057;
        }

        /* Sección de evidencia */
        .evidencia-section {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin-top: 20px;
        }

        .evidencia-section h3 {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .evidencia-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 15px;
        }

        .evidencia-item {
            background: white;
            border-radius: 10px;
            padding: 12px;
            text-align: center;
            border: 1px solid #e9ecef;
        }

        .evidencia-icon {
            font-size: 32px;
            display: block;
            margin-bottom: 8px;
        }

        .evidencia-count {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
        }

        .evidencia-label {
            font-size: 12px;
            color: #6c757d;
            margin-top: 5px;
        }

        /* Timeline de seguimiento */
        .timeline-section {
            margin-top: 20px;
        }

        .timeline {
            position: relative;
            padding-left: 30px;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 10px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #e9ecef;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 10px;
        }

        .timeline-icon {
            position: absolute;
            left: -26px;
            top: 0;
            width: 32px;
            height: 32px;
            background: white;
            border: 2px solid #667eea;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .timeline-content {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 12px;
        }

        .timeline-date {
            font-size: 11px;
            color: #6c757d;
            margin-bottom: 5px;
        }

        .timeline-title {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .timeline-text {
            font-size: 13px;
            color: #495057;
        }

        /* Footer */
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }

        .verified-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #10b981;
            color: white;
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 13px;
            margin-bottom: 15px;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
        }

        .footer-links a {
            color: #667eea;
            text-decoration: none;
            font-size: 12px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* Botón de acción */
        .action-button {
            display: block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 12px;
            border-radius: 10px;
            text-decoration: none;
            margin-top: 20px;
            font-weight: 600;
            transition: transform 0.2s;
        }

        .action-button:hover {
            transform: translateY(-2px);
        }

        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }

            .content {
                padding: 20px;
            }

            .header h1 {
                font-size: 22px;
            }
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }
            .action-button {
                display: none;
            }
            .verified-badge {
                print-color-adjust: exact;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <!-- Header -->
            <div class="header">
                <h1>Sistema de Gestión de Paz</h1>
                <div class="subtitle">Documento de Denuncia Oficial</div>
                <div class="codigo-container">
                    <span class="codigo">{{ $denuncia->codigo_externo ?? 'Sin código' }}</span>
                </div>
            </div>

            <!-- Contenido -->
            <div class="content">
                <!-- Grid de información principal -->
                <div class="info-grid">
                    <div class="info-card">
                        <div class="info-label">
                            <span>📋</span> N° Expediente
                        </div>
                        <div class="info-value">{{ $denuncia->numero_expediente ?? 'Sin asignar' }}</div>
                    </div>

                    <div class="info-card">
                        <div class="info-label">
                            <span>📅</span> Fecha de Ingreso
                        </div>
                        <div class="info-value">{{ \Carbon\Carbon::parse($denuncia->fecha_ingreso)->format('d/m/Y H:i') }}</div>
                    </div>

                    <div class="info-card">
                        <div class="info-label">
                            <span>⚡</span> Tipo de Conflicto
                        </div>
                        <div class="info-value">{{ $denuncia->tipoConflicto->nombre ?? 'No especificado' }}</div>
                    </div>

                    <div class="info-card">
                        <div class="info-label">
                            <span>📊</span> Estado Actual
                        </div>
                        <div class="info-value">
                            <span class="estado-badge estado-{{ strtolower(str_replace(' ', '', $denuncia->estadoDenuncia->nombre ?? '')) }}">
                                {{ $denuncia->estadoDenuncia->nombre ?? 'No especificado' }}
                            </span>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="info-label">
                            <span>👤</span> Denunciante
                        </div>
                        <div class="info-value">
                            <strong>{{ $denuncia->persona->nombre_completo ?? 'No registrado' }}</strong><br>
                            <small>Documento: {{ $denuncia->persona->numero_documento ?? 'N/A' }}</small>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="info-label">
                            <span>⏱️</span> Tiempo Transcurrido
                        </div>
                        <div class="info-value">
                            {{ $denuncia->dias_transcurridos ?? \Carbon\Carbon::parse($denuncia->fecha_ingreso)->diffInDays(now()) }} días
                        </div>
                    </div>
                </div>

                <!-- Descripción -->
                <div class="info-card" style="margin-bottom: 20px;">
                    <div class="info-label">
                        <span>📝</span> Descripción del Hecho
                    </div>
                    <div class="info-value" style="line-height: 1.6;">
                        {{ $denuncia->descripcion }}
                    </div>
                </div>

                <!-- Observaciones si existen -->
                @if($denuncia->observaciones)
                <div class="info-card" style="margin-bottom: 20px;">
                    <div class="info-label">
                        <span>📌</span> Observaciones
                    </div>
                    <div class="info-value">
                        {{ $denuncia->observaciones }}
                    </div>
                </div>
                @endif

                <!-- Involucrados -->
                @if(isset($denuncia->involucrados) && count($denuncia->involucrados) > 0)
                <div class="involucrados-section">
                    <h3>
                        <span>👥</span> Personas Involucradas
                        <span style="font-size: 12px; background: #e9ecef; padding: 2px 8px; border-radius: 20px;">
                            {{ count($denuncia->involucrados) }}
                        </span>
                    </h3>
                    <div class="involucrados-grid">
                        @foreach($denuncia->involucrados as $involucrado)
                        <div class="involucrado-card">
                            <div class="involucrado-info">
                                <div class="involucrado-nombre">
                                    {{ $involucrado->persona->nombre_completo ?? 'Nombre no disponible' }}
                                </div>
                                @if($involucrado->persona->numero_documento ?? false)
                                <div class="involucrado-documento">
                                    Documento: {{ $involucrado->persona->numero_documento }}
                                </div>
                                @endif
                            </div>
                            <div class="involucrado-rol">
                                {{ $involucrado->rol_display ?? ucfirst($involucrado->rol) }}
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
                @endif

                <!-- Evidencia -->
                @php
                    $evidencia = is_array($denuncia->evidencia) ? $denuncia->evidencia : json_decode($denuncia->evidencia ?? '{}', true);
                    $tieneEvidencia = ($evidencia['documentos'] ?? 0) > 0 ||
                                     ($evidencia['fotos'] ?? 0) > 0 ||
                                     ($evidencia['videos'] ?? 0) > 0 ||
                                     ($evidencia['audios'] ?? 0) > 0;
                @endphp

                @if($tieneEvidencia)
                <div class="evidencia-section">
                    <h3>
                        <span>📎</span> Evidencia Registrada
                    </h3>
                    <div class="evidencia-grid">
                        @if(($evidencia['documentos'] ?? 0) > 0)
                        <div class="evidencia-item">
                            <span class="evidencia-icon">📄</span>
                            <div class="evidencia-count">{{ $evidencia['documentos'] }}</div>
                            <div class="evidencia-label">Documentos</div>
                        </div>
                        @endif

                        @if(($evidencia['fotos'] ?? 0) > 0)
                        <div class="evidencia-item">
                            <span class="evidencia-icon">📷</span>
                            <div class="evidencia-count">{{ $evidencia['fotos'] }}</div>
                            <div class="evidencia-label">Fotos</div>
                        </div>
                        @endif

                        @if(($evidencia['videos'] ?? 0) > 0)
                        <div class="evidencia-item">
                            <span class="evidencia-icon">🎥</span>
                            <div class="evidencia-count">{{ $evidencia['videos'] }}</div>
                            <div class="evidencia-label">Videos</div>
                        </div>
                        @endif

                        @if(($evidencia['audios'] ?? 0) > 0)
                        <div class="evidencia-item">
                            <span class="evidencia-icon">🎵</span>
                            <div class="evidencia-count">{{ $evidencia['audios'] }}</div>
                            <div class="evidencia-label">Audios</div>
                        </div>
                        @endif
                    </div>
                </div>
                @endif

                <!-- Botón de acción para ver más -->
                <a href="{{ url('/') }}" class="action-button">
                    🔍 Ver más detalles en SIGPAZ
                </a>
            </div>

            <!-- Footer -->
            <div class="footer">
                <div class="verified-badge">
                    ✓ Documento verificado digitalmente
                </div>
                <small>
                    Este código fue generado el {{ now()->format('d/m/Y H:i:s') }}<br>
                    Sistema de Gestión de Paz - SIGPAZ
                </small>
                <div class="footer-links">
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Política de privacidad</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
