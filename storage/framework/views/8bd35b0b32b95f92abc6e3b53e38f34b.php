<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?php echo e($titulo); ?></title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            margin: 20px;
            font-size: 11px;
            line-height: 1.4;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #34495e;
        }

        .header h1 {
            color: #2c3e50;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .header .subtitle {
            color: #7f8c8d;
            font-size: 12px;
        }

        /* Cards de estadísticas */
        .stats-container {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .stat-card {
            flex: 1;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            border-left: 4px solid #3498db;
        }

        .stat-card .stat-value {
            font-size: 28px;
            font-weight: bold;
            color: #2c3e50;
        }

        .stat-card .stat-label {
            font-size: 11px;
            color: #7f8c8d;
            margin-top: 5px;
        }

        /* Gráficas en tabla */
        .chart-container {
            margin-bottom: 30px;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 15px;
        }

        .chart-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #2c3e50;
            border-left: 3px solid #3498db;
            padding-left: 10px;
        }

        .chart-bar {
            margin-bottom: 10px;
        }

        .chart-bar-label {
            font-size: 10px;
            margin-bottom: 3px;
            color: #555;
        }

        .chart-bar-bg {
            background: #aaaaaa;
            height: 25px;
            border-radius: 4px;
            overflow: hidden;
        }

        .chart-bar-fill {
            background: linear-gradient(90deg, #3498db, #2980b9);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 8px;
            color: white;
            font-size: 10px;
            font-weight: bold;
            border-radius: 4px;
        }

        .badge {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: bold;
        }

        .badge-error { background: #fee; color: #c00; }
        .badge-warning { background: #fef3c7; color: #d97706; }
        .badge-info { background: #e3f2fd; color: #1976d2; }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 9px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            vertical-align: top;
        }

        th {
            background-color: #34495e;
            color: white;
            font-weight: bold;
            font-size: 10px;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 9px;
            color: #95a5a6;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }

        .page-break {
            page-break-before: always;
        }

        .text-center { text-align: center; }
        .mt-20 { margin-top: 20px; }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <h1><?php echo e($titulo); ?></h1>
        <div class="subtitle">
            <p>Fecha de generación: <?php echo e($fecha->format('Y-m-d H:i:s')); ?></p>
            <p>Generado por: <?php echo e(auth()->user()?->nombre_usuario ?? 'Sistema'); ?></p>
        </div>
    </div>

    <!-- Cards de estadísticas -->
    <div class="stats-container">
        <div class="stat-card">
            <div class="stat-value"><?php echo e(number_format($total)); ?></div>
            <div class="stat-label">Total Registros</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo e(number_format(count($estadisticas['top_usuarios'] ?? []))); ?></div>
            <div class="stat-label">Usuarios Activos</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo e(number_format($estadisticas['niveles']['ERROR']['count'] ?? 0)); ?></div>
            <div class="stat-label">Eventos Críticos</div>
        </div>
    </div>

    <!-- Gráfica de Acciones -->
    <?php if(!empty($estadisticas['acciones'])): ?>
    <div class="chart-container">
        <div class="chart-title">📊 Top Acciones Realizadas</div>
        <?php $__currentLoopData = $estadisticas['acciones']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $accion => $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="chart-bar">
                <div class="chart-bar-label"><?php echo e($accion); ?> (<?php echo e($data['count']); ?> - <?php echo e(number_format($data['percentage'], 1)); ?>%)</div>
                <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: <?php echo e(min($data['percentage'], 100)); ?>%">
                        <?php if($data['percentage'] > 15): ?>
                            <?php echo e(number_format($data['percentage'], 1)); ?>%
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
    <?php endif; ?>

    <!-- Gráfica de Niveles -->
    <?php if(!empty($estadisticas['niveles'])): ?>
    <div class="chart-container">
        <div class="chart-title">⚠️ Distribución por Nivel de Severidad</div>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <?php $__currentLoopData = $estadisticas['niveles']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $nivel => $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div style="flex: 1; text-align: center; min-width: 80px;">
                    <div style="font-size: 24px; font-weight: bold; color:
                        <?php if($nivel == 'ERROR'): ?> #dc3545
                        <?php elseif($nivel == 'WARNING'): ?> #ffc107
                        <?php else: ?> #28a745
                        <?php endif; ?>">
                        <?php echo e($data['count']); ?>

                    </div>
                    <div style="font-size: 11px; margin-top: 5px;"><?php echo e($nivel); ?></div>
                    <div style="font-size: 10px; color: #666;"><?php echo e(number_format($data['percentage'], 1)); ?>%</div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
    <?php endif; ?>

    <!-- Top Usuarios -->
    <?php if(!empty($estadisticas['top_usuarios'])): ?>
    <div class="chart-container">
        <div class="chart-title">👥 Top <?php echo e(count($estadisticas['top_usuarios'])); ?> Usuarios Más Activos</div>
        <table style="width: 100%; margin-top: 10px;">
            <?php $__currentLoopData = $estadisticas['top_usuarios']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $usuario => $count): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td style="width: 80%; padding: 5px;"><?php echo e($usuario); ?></td>
                <td style="width: 20%; text-align: right; padding: 5px;">
                    <strong><?php echo e($count); ?></strong> acciones
                </td>
            </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
    </div>
    <?php endif; ?>

    <!-- Tabla de Datos -->
    <div class="chart-container">
        <div class="chart-title">📋 Detalle de Eventos</div>
        <?php if($total_mostrados < $total): ?>
            <div class="badge badge-warning" style="margin-bottom: 10px; display: inline-block;">
                Mostrando <?php echo e(number_format($total_mostrados)); ?> de <?php echo e(number_format($total)); ?> registros
            </div>
        <?php endif; ?>

        <?php if(!empty($headers) && !empty($rows)): ?>
        <table>
            <thead>
                <tr>
                    <?php $__currentLoopData = $headers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $header): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <th><?php echo e($header); ?></th>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $rows; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <?php $__currentLoopData = $row; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cell): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <td><?php echo $cell; ?></td>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>

        <?php if($tiene_mas_registros ?? false): ?>
            <div class="text-center mt-20" style="color: #666; font-style: italic;">
                ... y <?php echo e(number_format($total - $total_mostrados)); ?> registros adicionales
            </div>
        <?php endif; ?>
        <?php else: ?>
            <p class="text-center">No hay datos para mostrar</p>
        <?php endif; ?>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>SIGPAZ - Sistema Integral de Gestión de Procesos y Auditoría de Zaruma</p>
        <p>Reporte generado automáticamente - <?php echo e($fecha->format('d/m/Y H:i:s')); ?></p>
        <p>Confidencial - Uso exclusivo para auditoría</p>
    </div>
</body>
</html>
<?php /**PATH C:\original SIGPAZ\justicia-paz-backend\sigpaz-backend\resources\views/exports/auditoria-pdf.blade.php ENDPATH**/ ?>