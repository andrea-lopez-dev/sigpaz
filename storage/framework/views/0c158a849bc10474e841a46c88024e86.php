
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ficha de Persona - <?php echo e($persona->numero_documento); ?></title>
    <style>
        @page {
            margin: 1.5cm;
            size: A4;
        }

        body {
            font-family: 'DejaVu Sans', 'Helvetica', Arial, sans-serif;
            font-size: 11px;
            line-height: 1.4;
            color: #1a202c;
        }

        .header {
            text-align: center;
            margin-bottom: 25px;
            padding-bottom: 12px;
            border-bottom: 2px solid #2c5282;
        }

        .header h1 {
            color: #2c5282;
            font-size: 20px;
            margin-bottom: 5px;
        }

        .header p {
            color: #718096;
            font-size: 10px;
        }

        .section-title {
            background: #2c5282;
            color: white;
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
            margin: 15px 0 10px 0;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-bottom: 10px;
        }

        .info-item {
            padding: 6px 10px;
            background: #f7fafc;
            border-radius: 5px;
            border-left: 3px solid #2c5282;
        }

        .info-label {
            font-size: 8px;
            color: #4a5568;
            text-transform: uppercase;
            display: block;
        }

        .info-value {
            font-size: 11px;
            color: #1a202c;
            font-weight: 500;
            word-break: break-word;
        }

        .media-row {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
        }

        .media-card {
            text-align: center;
            width: 120px;
        }

        .foto-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #2c5282;
        }

        .qr-img {
            width: 100px;
            height: 100px;
        }

        .placeholder {
            width: 100px;
            height: 100px;
            background: #e2e8f0;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
        }

        .media-label {
            margin-top: 8px;
            font-size: 9px;
            color: #718096;
        }

        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
        }

        .info-table td {
            padding: 6px 10px;
            border: 1px solid #e2e8f0;
        }

        .info-table td:first-child {
            background: #f7fafc;
            font-weight: bold;
            width: 35%;
        }

        .badge-active {
            background: #c6f6d5;
            color: #22543d;
            padding: 2px 8px;
            border-radius: 12px;
            display: inline-block;
        }

        .badge-inactive {
            background: #fed7d7;
            color: #742a2a;
            padding: 2px 8px;
            border-radius: 12px;
            display: inline-block;
        }

        .footer {
            position: fixed;
            bottom: 20px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 8px;
            color: #a0aec0;
            padding-top: 8px;
            border-top: 1px solid #e2e8f0;
        }

        .text-muted {
            color: #718096;
        }
    </style>
</head>
<body>

    <div class="header">
        <h1>SIGPAZ</h1>
        <p>Sistema Integral de Gestión para la Justicia de Paz</p>
        <p><strong>FICHA DE REGISTRO DE PERSONA</strong></p>
        <p>Fecha de emisión: <?php echo e($fecha_exportacion); ?></p>
    </div>

    <!-- Foto y QR -->
    <div class="media-row">
        <div class="media-card">
            <?php if($persona->foto_cifrada): ?>
                <img src="<?php echo e($persona->foto_cifrada); ?>" class="foto-img" alt="Foto">
            <?php else: ?>
                <div class="placeholder">
                    <span style="font-size: 36px;">👤</span>
                </div>
            <?php endif; ?>
            <div class="media-label">Foto de identificación</div>
        </div>

       <div class="media-card">
    <?php
        $qrValido = !empty($qr_data) && strlen($qr_data) > 100;
    ?>

    <?php if($qrValido): ?>
        <img src="<?php echo e($qr_data); ?>" class="qr-img" alt="Código QR">
        <div class="media-label">Código QR de identificación</div>
    <?php else: ?>
        <div class="placeholder">
            <span style="font-size: 36px;">📱</span>
        </div>
        <div class="media-label text-muted">QR no disponible</div>
    <?php endif; ?>
</div>
    </div>

    <!-- DATOS PERSONALES -->
    <div class="section-title">📋 DATOS PERSONALES</div>
    <div class="info-grid">
        <div class="info-item">
            <span class="info-label">N° Documento</span>
            <span class="info-value"><?php echo e($persona->numero_documento); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Tipo Documento</span>
            <span class="info-value"><?php echo e($persona->tipoDocumento->nombre ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Nombres</span>
            <span class="info-value"><?php echo e($persona->nombres); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Apellidos</span>
            <span class="info-value"><?php echo e($persona->apellidos); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Fecha Nacimiento</span>
            <span class="info-value"><?php echo e($persona->fecha_nacimiento ? $persona->fecha_nacimiento->format('d/m/Y') : 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Edad</span>
            <span class="info-value"><?php echo e($persona->edad ?? 'N/A'); ?> años</span>
        </div>
        <div class="info-item">
            <span class="info-label">Género</span>
            <span class="info-value"><?php echo e($persona->genero->nombre ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Estado Civil</span>
            <span class="info-value"><?php echo e($persona->estadoCivil->nombre ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Nacionalidad</span>
            <span class="info-value"><?php echo e($persona->nacionalidad ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Lugar Nacimiento</span>
            <span class="info-value"><?php echo e($persona->lugar_nacimiento ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Profesión/Oficio</span>
            <span class="info-value"><?php echo e($persona->profesion_oficio ?? 'N/A'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Ocupación</span>
            <span class="info-value"><?php echo e($persona->ocupacion_actual ?? 'N/A'); ?></span>
        </div>
    </div>

    <!-- DATOS DE CONTACTO (DESCIFRADOS) -->
    <div class="section-title">📞 DATOS DE CONTACTO</div>
    <div class="info-grid">
        <div class="info-item">
            <span class="info-label">Teléfono Móvil</span>
            <span class="info-value"><?php echo e($persona->telefono_movil_cifrado ?: 'No registrado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Teléfono Fijo</span>
            <span class="info-value"><?php echo e($persona->telefono_fijo_cifrado ?: 'No registrado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Correo Electrónico</span>
            <span class="info-value"><?php echo e($persona->correo_electronico_cifrado ?: 'No registrado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Correo Alternativo</span>
            <span class="info-value"><?php echo e($persona->correo_alternativo_cifrado ?: 'No registrado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Dirección</span>
            <span class="info-value"><?php echo e($persona->direccion_cifrada ?: 'No registrada'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Departamento</span>
            <span class="info-value"><?php echo e($persona->departamento ?: 'No especificado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Municipio</span>
            <span class="info-value"><?php echo e($persona->municipio ?: 'No especificado'); ?></span>
        </div>
        <div class="info-item">
            <span class="info-label">Código Postal</span>
            <span class="info-value"><?php echo e($persona->codigo_postal ?: 'No especificado'); ?></span>
        </div>
    </div>

    <!-- CONTACTO DE EMERGENCIA -->
    <div class="section-title">🚨 CONTACTO DE EMERGENCIA</div>
    <table class="info-table">
        <tr>
            <td>Nombre</td>
            <td><?php echo e($persona->nombre_contacto_emergencia ?: 'No registrado'); ?></td>
        </tr>
        <tr>
            <td>Parentesco</td>
            <td><?php echo e($persona->parentesco_emergencia ?: 'No especificado'); ?></td>
        </tr>
        <tr>
            <td>Teléfono</td>
            <td><?php echo e($persona->telefono_emergencia_cifrado ?: 'No registrado'); ?></td>
        </tr>
    </table>

    <!-- INFORMACIÓN ADICIONAL -->
    <div class="section-title">ℹ️ INFORMACIÓN ADICIONAL</div>
    <table class="info-table">
        <tr>
            <td>Tipo de Vínculo</td>
            <td><?php echo e($persona->tipoVinculo->nombre ?? 'N/A'); ?></td>
        </tr>
        <tr>
            <td>Discapacidad</td>
            <td><?php echo e($persona->discapacidad ?: 'No registra discapacidad'); ?></td>
        </tr>
        <tr>
            <td>Observaciones</td>
            <td><?php echo e($persona->observaciones ?: 'Ninguna'); ?></td>
        </tr>
        <tr>
            <td>Estado</td>
            <td>
                <span class="<?php echo e($persona->activo ? 'badge-active' : 'badge-inactive'); ?>">
                    <?php echo e($persona->activo ? 'VALIDADO' : 'PENDIENTE'); ?>

                </span>
            </td>
        </tr>
        <tr>
            <td>Fecha Validación</td>
            <td><?php echo e($persona->fecha_activacion ? $persona->fecha_activacion->format('d/m/Y H:i') : 'Pendiente'); ?></td>
        </tr>
    </table>

    <?php if($persona->firma_digital): ?>
    <div class="section-title">✍️ FIRMA DIGITAL</div>
    <div style="text-align: center;">
        <img src="<?php echo e($persona->firma_digital); ?>" style="max-width: 180px; max-height: 80px;" alt="Firma">
        <div class="media-label">Firma digital registrada</div>
    </div>
    <?php endif; ?>

    <div class="footer">
        <p>Documento generado por SIGPAZ - Sistema Integral de Gestión para la Justicia de Paz</p>
        <p>Verifique la autenticidad escaneando el código QR</p>
    </div>

</body>
</html>
<?php /**PATH C:\original SIGPAZ\justicia-paz-backend\sigpaz-backend\resources\views/pdfs/persona.blade.php ENDPATH**/ ?>