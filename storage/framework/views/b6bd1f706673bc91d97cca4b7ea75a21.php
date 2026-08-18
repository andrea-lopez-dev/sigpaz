<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contrato de Trabajo</title>
    <style>
        body {
            font-family: 'DejaVu Sans', sans-serif;
            font-size: 12px;
            line-height: 1.4;
            margin: 40px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #2C5282;
        }
        .titulo-contrato {
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            margin: 30px 0;
            text-decoration: underline;
        }
        .info-empresa {
            margin-bottom: 30px;
            padding: 10px;
            background: #f5f5f5;
        }
        .info-empleado {
            margin: 20px 0;
            border: 1px solid #ddd;
            padding: 15px;
        }
        .clausula {
            margin: 20px 0;
        }
        .clausula-titulo {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .firmas {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
        }
        .firma {
            text-align: center;
            width: 45%;
        }
        .firma-linea {
            border-top: 1px solid #000;
            margin-top: 30px;
            padding-top: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        td, th {
            padding: 8px;
            border: 1px solid #ddd;
        }
        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 10px;
            color: #666;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo"><?php echo e($empresa_nombre ?? 'SIGPAZ'); ?></div>
        <div>RUC: <?php echo e($empresa_ruc ?? 'J-12345678-9'); ?></div>
        <div><?php echo e($empresa_direccion ?? 'Dirección de la empresa'); ?></div>
    </div>

    <div class="titulo-contrato">
        CONTRATO INDIVIDUAL DE TRABAJO
    </div>

    <div class="info-empresa">
        <strong>DATOS DEL EMPLEADOR:</strong><br>
        Razón Social: <?php echo e($empresa_nombre ?? 'SIGPAZ'); ?><br>
        RUC: <?php echo e($empresa_ruc ?? 'J-12345678-9'); ?><br>
        Dirección: <?php echo e($empresa_direccion ?? 'Dirección de la empresa'); ?>

    </div>

    <div class="info-empleado">
        <strong>DATOS DEL TRABAJADOR:</strong><br>
        <table>
            <tr>
                <td width="30%"><strong>Nombres:</strong></td>
                <td><?php echo e($persona->nombres ?? ''); ?> <?php echo e($persona->apellidos ?? ''); ?></td>
            </tr>
            <tr>
                <td><strong>Documento:</strong></td>
                <td><?php echo e($persona->tipoDocumento->nombre ?? 'C.I.'); ?>: <?php echo e($persona->numero_documento ?? ''); ?></td>
            </tr>
            <tr>
                <td><strong>Cargo:</strong></td>
                <td><?php echo e($cargo->nombre ?? $cargo->nombre_cargo ?? 'No especificado'); ?></td>
            </tr>
            <tr>
                <td><strong>Fecha de Ingreso:</strong></td>
                <td><?php echo e(isset($fecha_contrato) ? \Carbon\Carbon::parse($fecha_contrato)->format('d/m/Y') : ''); ?></td>
            </tr>
            <tr>
                <td><strong>Número de Contrato:</strong></td>
                <td><?php echo e($numero_contrato ?? 'N/A'); ?></td>
            </tr>
        </table>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA PRIMERA: NATURALEZA DEL CONTRATO</div>
        <p>El presente contrato es de naturaleza laboral a tiempo indeterminado, regulado por la legislación laboral vigente.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA SEGUNDA: DE LAS FUNCIONES</div>
        <p>El trabajador se obliga a prestar sus servicios personales en el cargo de <strong><?php echo e($cargo->nombre ?? $cargo->nombre_cargo ?? 'el asignado'); ?></strong>, bajo la dirección y supervisión del empleador.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA TERCERA: DEL LUGAR DE TRABAJO</div>
        <p>El trabajador prestará sus servicios en las instalaciones del empleador, pudiendo ser trasladado a otras sedes según las necesidades de la empresa.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA CUARTA: DE LA REMUNERACIÓN</div>
        <p>El empleador pagará al trabajador una remuneración mensual de acuerdo al cargo desempeñado, conforme a la escala salarial vigente.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA QUINTA: DE LA JORNADA LABORAL</div>
        <p>La jornada laboral será de 8 horas diarias, de lunes a viernes, cumpliendo con los horarios establecidos por el empleador.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA SEXTA: DE LAS OBLIGACIONES DEL TRABAJADOR</div>
        <p>El trabajador se obliga a:</p>
        <ul>
            <li>Cumplir con las funciones asignadas con diligencia y eficiencia.</li>
            <li>Respetar el reglamento interno de trabajo.</li>
            <li>Guardar confidencialidad sobre información de la empresa.</li>
            <li>Utilizar correctamente los bienes y equipos de la empresa.</li>
        </ul>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA SÉPTIMA: DE LA DURACIÓN Y TERMINACIÓN</div>
        <p>El presente contrato tiene duración indefinida y podrá terminar por las causales establecidas en la ley.</p>
    </div>

    <div class="clausula">
        <div class="clausula-titulo">CLÁUSULA OCTAVA: DE LA VIGENCIA</div>
        <p>El presente contrato entrará en vigencia a partir del <?php echo e(isset($fecha_contrato) ? \Carbon\Carbon::parse($fecha_contrato)->format('d/m/Y') : ''); ?>.</p>
    </div>

    <div class="firmas">
        <div class="firma">
            <div class="firma-linea"></div>
            _________________________<br>
            <?php echo e($empresa_nombre ?? 'SIGPAZ'); ?><br>
            EMPLEADOR
        </div>
        <div class="firma">
            <div class="firma-linea"></div>
            _________________________<br>
            <?php echo e($persona->nombres ?? ''); ?> <?php echo e($persona->apellidos ?? ''); ?><br>
            TRABAJADOR
        </div>
    </div>

    <div class="footer">
        Documento generado por SIGPAZ - <?php echo e($fecha_emision ?? now()->format('d/m/Y H:i:s')); ?>

    </div>
</body>
</html>
<?php /**PATH C:\original SIGPAZ\justicia-paz-backend\sigpaz-backend\resources\views/pdfs/contrato_personal.blade.php ENDPATH**/ ?>