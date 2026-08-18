<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información de Persona - SIGPAZ</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
            overflow: hidden;
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

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .header .badge {
            background: rgba(255,255,255,0.2);
            padding: 5px 15px;
            border-radius: 50px;
            font-size: 14px;
            display: inline-block;
        }

        .content {
            padding: 30px;
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .info-item {
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 10px;
        }

        .info-item.full-width {
            grid-column: 1 / -1;
        }

        .info-label {
            font-size: 12px;
            color: #999;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }

        .info-value {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }

        .qr-footer {
            background: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eee;
        }

        .qr-footer small {
            color: #999;
            font-size: 12px;
        }

        .verified-badge {
            display: inline-flex;
            align-items: center;
            background: #10b981;
            color: white;
            padding: 5px 15px;
            border-radius: 50px;
            font-size: 14px;
            margin-top: 10px;
        }

        .verified-badge::before {
            content: "✓";
            margin-right: 5px;
            font-weight: bold;
        }

        @media (max-width: 480px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1>👤 {{ $persona->nombre_completo }}</h1>
            <span class="badge">Código QR Verificado</span>
        </div>

        <div class="content">
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Documento</div>
                    <div class="info-value">{{ $persona->tipoDocumento->nombre }}: {{ $persona->numero_documento }}</div>
                </div>

                <div class="info-item">
                    <div class="info-label">Fecha Nacimiento</div>
                    <div class="info-value">{{ $persona->fecha_nacimiento->format('d/m/Y') }} ({{ $persona->edad }} años)</div>
                </div>

                <div class="info-item">
                    <div class="info-label">Género</div>
                    <div class="info-value">{{ $persona->genero->nombre ?? 'No especificado' }}</div>
                </div>

                <div class="info-item">
                    <div class="info-label">Estado Civil</div>
                    <div class="info-value">{{ $persona->estadoCivil->nombre ?? 'No especificado' }}</div>
                </div>

                <div class="info-item">
                    <div class="info-label">Nacionalidad</div>
                    <div class="info-value">{{ $persona->nacionalidad ?? 'Venezolana' }}</div>
                </div>

                <div class="info-item">
                    <div class="info-label">Profesión</div>
                    <div class="info-value">{{ $persona->profesion_oficio ?? 'No especificada' }}</div>
                </div>

                <div class="info-item full-width">
                    <div class="info-label">Contacto</div>
                    <div class="info-value">
                        📧 {{ $persona->correo_electronico_cifrado ?? 'No registrado' }}<br>
                        📱 {{ $persona->telefono_movil_cifrado ?? 'No registrado' }}
                    </div>
                </div>

                @if($persona->direccion_cifrada)
                <div class="info-item full-width">
                    <div class="info-label">Dirección</div>
                    <div class="info-value">{{ $persona->direccion_cifrada }}</div>
                </div>
                @endif

                @if($persona->discapacidad)
                <div class="info-item full-width">
                    <div class="info-label">Discapacidad</div>
                    <div class="info-value">{{ $persona->discapacidad }}</div>
                </div>
                @endif
            </div>

            <div class="verified-badge">
                Información verificada digitalmente
            </div>
        </div>

        <div class="qr-footer">
            <small>Este código fue generado el {{ now()->format('d/m/Y H:i') }} por SIGPAZ</small>
        </div>
    </div>
</body>
</html>
