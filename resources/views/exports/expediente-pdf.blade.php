<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Expediente {{ $denuncia->numero_expediente }}</title>
    <style>
        body {
            font-family: 'Times New Roman', serif;
            margin: 30px;
            line-height: 1.6;
        }
        .caratula {
            text-align: center;
            margin-bottom: 50px;
            page-break-after: always;
        }
        .titulo-principal {
            font-size: 28px;
            margin-top: 100px;
        }
        .subtitulo {
            font-size: 18px;
            margin-top: 50px;
        }
        .seccion {
            margin-bottom: 30px;
            page-break-inside: avoid;
        }
        .seccion-titulo {
            font-size: 18px;
            font-weight: bold;
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 20px;
        }
        .campo {
            margin: 10px 0;
        }
        .campo-label {
            font-weight: bold;
            display: inline-block;
            width: 200px;
        }
        .firma {
            margin-top: 50px;
            text-align: center;
        }
        .linea-firma {
            width: 300px;
            margin: 20px auto 0;
            border-top: 1px solid #000;
        }
        @page {
            margin: 2cm;
        }
    </style>
</head>
<body>
    <div class="caratula">
        <div class="titulo-principal">
            <h1>EXPEDIENTE JUDICIAL</h1>
            <h2>N° {{ $denuncia->numero_expediente ?? 'S/N' }}</h2>
        </div>
        <div class="subtitulo">
            <p>Sistema de Gestión Judicial</p>
            <p>Fecha de generación: {{ $fecha_generacion }}</p>
            <p>Generado por: {{ $generado_por }}</p>
        </div>
    </div>

    <div class="seccion">
        <div class="seccion-titulo">1. INFORMACIÓN GENERAL</div>
        <div class="campo">
            <span class="campo-label">Número de Expediente:</span>
            <span>{{ $denuncia->numero_expediente ?? 'No asignado' }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Fecha de Ingreso:</span>
            <span>{{ date('d/m/Y H:i', strtotime($denuncia->fecha_creacion)) }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Tipo de Conflicto:</span>
            <span>{{ $denuncia->tipoConflicto->nombre ?? 'No especificado' }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Estado Actual:</span>
            <span>{{ $denuncia->estadoDenuncia->nombre ?? 'No especificado' }}</span>
        </div>
    </div>

    <div class="seccion">
        <div class="seccion-titulo">2. DATOS DEL DENUNCIANTE</div>
        <div class="campo">
            <span class="campo-label">Nombre Completo:</span>
            <span>{{ $denuncia->persona->nombres ?? '' }} {{ $denuncia->persona->apellidos ?? '' }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Número de Documento:</span>
            <span>{{ $denuncia->persona->numero_documento ?? 'No registrado' }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Fecha de Nacimiento:</span>
            <span>{{ $denuncia->persona->fecha_nacimiento ? date('d/m/Y', strtotime($denuncia->persona->fecha_nacimiento)) : 'No registrada' }}</span>
        </div>
        <div class="campo">
            <span class="campo-label">Dirección:</span>
            <span>{{ $denuncia->persona->municipio ?? '' }}, {{ $denuncia->persona->departamento ?? '' }}</span>
        </div>
    </div>

    <div class="seccion">
        <div class="seccion-titulo">3. DESCRIPCIÓN DE LA DENUNCIA</div>
        <div class="campo">
            <p>{{ $denuncia->descripcion ?? 'Sin descripción registrada' }}</p>
        </div>
        @if($denuncia->observaciones)
        <div class="campo">
            <span class="campo-label">Observaciones:</span>
            <p>{{ $denuncia->observaciones }}</p>
        </div>
        @endif
    </div>

    @if($denuncia->evidencias && count($denuncia->evidencias) > 0)
    <div class="seccion">
        <div class="seccion-titulo">4. EVIDENCIAS ADJUNTAS</div>
        <ul>
            @foreach($denuncia->evidencias as $evidencia)
                <li>{{ $evidencia->nombre }} ({{ $evidencia->tipo }}) - {{ round($evidencia->tamano / 1024, 2) }} KB</li>
            @endforeach
        </ul>
    </div>
    @endif

    <div class="firma">
        <p>Firma del Responsable</p>
        <div class="linea-firma"></div>
        <p>{{ $generado_por }}</p>
    </div>
</body>
</html>
