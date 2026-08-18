<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Constancia de Notificación</title>
    <style>
        body {
            font-family: 'DejaVu Sans', sans-serif;
            margin: 40px;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #4f46e5;
            padding-bottom: 20px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #4f46e5;
        }
        .title {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin: 30px 0;
            text-transform: uppercase;
        }
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .info-table td {
            padding: 10px;
            border: 1px solid #ddd;
        }
        .info-table td:first-child {
            width: 30%;
            font-weight: bold;
            background: #f3f4f6;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            border-top: 1px solid #ddd;
            padding-top: 20px;
            font-size: 12px;
        }
        .signature {
            margin-top: 50px;
            text-align: center;
        }
        .status-emitida { color: #3b82f6; font-weight: bold; }
        .status-entregada { color: #10b981; font-weight: bold; }
        .status-cancelada { color: #ef4444; font-weight: bold; }
        .status-pendiente { color: #f59e0b; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">SIGPAZ</div>
        <div>Sistema de Gestión de Justicia de Paz</div>
    </div>

    <div class="title">
        CONSTANCIA DE NOTIFICACIÓN
    </div>

    <table class="info-table">
        <tr>
            <td>Número de Notificación:</td>
            <td><?php echo e($notificacion->notificacion_id); ?></td>
        </tr>
        <tr>
            <td>Fecha de Emisión:</td>
            <td><?php echo e($notificacion->fecha_emision?->format('d/m/Y H:i')); ?></td>
        </tr>
        <tr>
            <td>Denuncia Asociada:</td>
            <td>#<?php echo e($notificacion->denuncia?->numero_expediente ?? $notificacion->denuncia_id); ?></td>
        </tr>
        <tr>
            <td>Denunciante:</td>
            <td><?php echo e($notificacion->denuncia?->persona?->nombre_completo ?? 'N/A'); ?></td>
        </tr>
        <tr>
            <td>Tipo de Notificación:</td>
            <td><?php echo e($notificacion->tipoNotificacion?->nombre ?? 'N/A'); ?></td>
        </tr>
        <tr>
            <td>Destinatario:</td>
            <td><?php echo e($notificacion->destinatario); ?></td>
        </tr>
        <tr>
            <td>Medio de Notificación:</td>
            <td><?php echo e(str_replace('_', ' ', $notificacion->medio)); ?></td>
        </tr>
        <tr>
            <td>Estado:</td>
            <td class="status-<?php echo e(strtolower($notificacion->estado)); ?>"><?php echo e($notificacion->estado); ?></td>
        </tr>
        <?php if($notificacion->contenido): ?>
        <tr>
            <td>Contenido:</td>
            <td><?php echo e($notificacion->contenido); ?></td>
        </tr>
        <?php endif; ?>
        <?php if($notificacion->observaciones): ?>
        <tr>
            <td>Observaciones:</td>
            <td><?php echo e($notificacion->observaciones); ?></td>
        </tr>
        <?php endif; ?>
    </table>

    <div class="signature">
        <p>_________________________</p>
        <p>Firma y Sello</p>
        <p><?php echo e($notificacion->usuarioCreacion?->nombre_usuario ?? 'Sistema SIGPAZ'); ?></p>
    </div>

    <div class="footer">
        <p>Documento generado por SIGPAZ - Sistema de Gestión de Justicia de Paz</p>
        <p>Fecha de generación: <?php echo e($fecha_generacion->format('d/m/Y H:i:s')); ?></p>
        <p>Este documento es una constancia oficial del sistema</p>
    </div>
</body>
</html>
<?php /**PATH C:\original SIGPAZ\justicia-paz-backend\sigpaz-backend\resources\views/pdfs/constancia-notificacion.blade.php ENDPATH**/ ?>