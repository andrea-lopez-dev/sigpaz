<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\PersonalController;
use App\Http\Controllers\Api\CatalogoController;
use App\Http\Controllers\Api\DenunciaController;
use App\Http\Controllers\Api\InvolucradoController;
use App\Exceptions\DenunciaNoEncontradaException;
use App\Exceptions\InvolucradoNoEncontradoException;
use App\Exceptions\InvolucradoDuplicadoException;
use App\Exceptions\DenuncianteNoModificableException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Denuncia;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\CalendarioController;
use App\Http\Controllers\Api\RemisionController;
use App\Http\Controllers\Api\ConciliacionController;
use App\Http\Controllers\Api\ConciliacionDisponibleController;
use App\Http\Controllers\Api\SentenciaController;
use App\Http\Controllers\Api\MedidaCautelarController;
use App\Http\Controllers\Api\RolController;
use App\Http\Controllers\Api\PermisoController;
use App\Http\Middleware\UpdateLastAccess;
use App\Http\Middleware\VerificarCodigoMaestro;
use App\Http\Controllers\Api\PreguntaSeguridadController;
use App\Http\Controllers\Api\UsuarioPreguntaController;
use App\Http\Controllers\Api\BackupController;
use App\Http\Controllers\Api\RestoreController;
use App\Http\Controllers\Api\CloudStorageController;
use App\Http\Controllers\Api\AuditoriaController;
use App\Http\Controllers\Api\NotificacionController;
use App\Http\Controllers\Api\PrestamoController;
use App\Http\Controllers\Api\ExportController;
use App\Http\Controllers\Api\ChatbotController;
use App\Http\Controllers\Api\ChatbotAdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::prefix('v1')->group(function () {

    // ============================================
    // RUTAS PÚBLICAS (No requieren autenticación)
    // ============================================
    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('reset-password', [AuthController::class, 'solicitarResetPassword']);
        Route::post('reset-password/{token}', [AuthController::class, 'resetPassword']);
        Route::post('check-block-status', [AuthController::class, 'checkBlockStatus']);
        Route::post('obtener-preguntas-usuario', [AuthController::class, 'obtenerPreguntasUsuario']);
    });

      Route::get('/evidencia/{id}', [DenunciaController::class, 'verEvidencia'])
        ->name('api.evidencia.ver');

    Route::get('/evidencia/{id}/{token}', [DenunciaController::class, 'verEvidenciaConToken'])
        ->name('api.evidencia.ver.token');

    // ============================================
    // RUTAS PROTEGIDAS (Solo autenticación, SIN código maestro)
    // ============================================
    Route::middleware(['auth:sanctum', 'update.last.access', 'auditar', 'verificar.inactividad'])->group(function () {

     Route::post('/exportar/expediente-pdf', [ExportController::class, 'exportarExpedientePDF']);

       Route::prefix('notifications')->group(function () {
            Route::get('/', [NotificationController::class, 'index']);
            Route::post('/', [NotificationController::class, 'store']);
            Route::put('{id}/read', [NotificationController::class, 'markAsRead']);
            Route::put('read-all', [NotificationController::class, 'markAllAsRead']);
            Route::delete('/', [NotificationController::class, 'destroyAll']);
            Route::get('unread-count', [NotificationController::class, 'unreadCount']);
        });

        // Autenticación
        Route::prefix('auth')->group(function () {
            Route::get('me', [AuthController::class, 'me']);
            Route::post('logout', [AuthController::class, 'logout']);
            Route::post('cambiar-contrasena', [AuthController::class, 'cambiarContrasena']);
            Route::get('verificar-sesion', [AuthController::class, 'verificarSesionActiva']);
            Route::post('refrescar-token', [AuthController::class, 'refrescarToken']);
            Route::get('preguntas-disponibles', [AuthController::class, 'getPreguntasDisponibles']);
            Route::post('configurar-preguntas', [AuthController::class, 'configurarPreguntas']);
            Route::post('validar-preguntas', [AuthController::class, 'validarPreguntasSeguridad']);
            Route::get('check-session', [AuthController::class, 'checkSession']);
            Route::post('refresh-activity', [AuthController::class, 'refreshActivity']);
        });

        // Usuarios - Rutas de lectura
        Route::get('usuarios', [UsuarioController::class, 'index']);
        Route::get('usuarios/{usuario}', [UsuarioController::class, 'show']);

        // Personal - Rutas de lectura
        Route::prefix('personal')->group(function () {
            Route::get('estadisticas', [PersonalController::class, 'estadisticas']);
            Route::get('reportes/estadisticas', [PersonalController::class, 'reporteEstadisticas']);
            Route::get('reportes/activos', [PersonalController::class, 'reporteActivos']);
            Route::get('reportes/antiguedad', [PersonalController::class, 'reporteAntiguedad']);
            Route::get('reportes/rotacion', [PersonalController::class, 'reporteRotacion']);
            Route::get('reportes/estadisticas/pdf', [PersonalController::class, 'exportarReporteEstadisticasPDF']);
            Route::get('reportes/activos/pdf', [PersonalController::class, 'exportarReporteActivosPDF']);
            Route::get('reportes/antiguedad/pdf', [PersonalController::class, 'exportarReporteAntiguedadPDF']);
            Route::get('reportes/rotacion/pdf', [PersonalController::class, 'exportarReporteRotacionPDF']);
            Route::get('reportes/estadisticas/excel', [PersonalController::class, 'exportarReporteEstadisticasExcel']);
            Route::get('reportes/activos/excel', [PersonalController::class, 'exportarReporteActivosExcel']);
            Route::get('reportes/antiguedad/excel', [PersonalController::class, 'exportarReporteAntiguedadExcel']);
            Route::get('reportes/rotacion/excel', [PersonalController::class, 'exportarReporteRotacionExcel']);
            Route::get('reportes/completo/pdf', [PersonalController::class, 'exportarReporteCompletoPDF']);
            Route::get('{id}/contrato-pdf', [PersonalController::class, 'generarContratoPDF']);
            Route::get('activos', [PersonalController::class, 'getActivos']);
            Route::get('personas-disponibles', [PersonalController::class, 'personasDisponibles']);
            Route::get('verificar-disponibilidad/{personaId}', [PersonalController::class, 'verificarDisponibilidad']);
            Route::get('buscar', [PersonalController::class, 'buscar']);
            Route::get('disponible', [PersonalController::class, 'getPersonalDisponible']);
            Route::get('{personal}', [PersonalController::class, 'show']);
        });
        Route::get('personal', [PersonalController::class, 'index']);


        // Personas - Rutas de lectura
        Route::prefix('personas')->group(function () {
            Route::get('exportar-excel', [PersonaController::class, 'exportarExcel']);
            Route::get('reportes/edad', [PersonaController::class, 'reporteEdad']);
            Route::get('reportes/genero', [PersonaController::class, 'reporteGenero']);
            Route::get('reportes/departamento', [PersonaController::class, 'reporteDepartamento']);
            Route::get('reportes/discapacidad', [PersonaController::class, 'reporteDiscapacidad']);
            Route::get('reportes/edad/pdf', [PersonaController::class, 'exportarReporteEdadPDF']);
            Route::get('reportes/genero/pdf', [PersonaController::class, 'exportarReporteGeneroPDF']);
            Route::get('reportes/departamento/pdf', [PersonaController::class, 'exportarReporteDepartamentoPDF']);
            Route::get('reportes/discapacidad/pdf', [PersonaController::class, 'exportarReporteDiscapacidadPDF']);
            Route::get('reportes/edad/excel', [PersonaController::class, 'exportarReporteEdadExcel']);
            Route::get('reportes/genero/excel', [PersonaController::class, 'exportarReporteGeneroExcel']);
            Route::get('reportes/departamento/excel', [PersonaController::class, 'exportarReporteDepartamentoExcel']);
            Route::get('reportes/discapacidad/excel', [PersonaController::class, 'exportarReporteDiscapacidadExcel']);
            Route::get('{id}/ficha', [PersonaController::class, 'generarFichaCompleta']);
            Route::get('{id}/exportar-pdf', [PersonaController::class, 'exportarPDF']);

            Route::get('/', [PersonaController::class, 'index']);
            Route::get('buscar/{termino}', [PersonaController::class, 'buscarPorNombres'])->where('termino', '[a-zA-Z0-9\s]+');
            Route::post('validar-identidad', [PersonaController::class, 'validarIdentidad']);
            Route::get('{persona}', [PersonaController::class, 'show']);
        });
        Route::get('personas', [PersonaController::class, 'index']);


        // Roles y Permisos - Rutas de lectura
        Route::get('roles', [RolController::class, 'index']);
        Route::get('roles/{id}', [RolController::class, 'show']);
        Route::get('roles/{id}/permisos', [RolController::class, 'getPermisos']);
        Route::get('permisos', [PermisoController::class, 'index']);
        Route::get('permisos/{id}', [PermisoController::class, 'show']);

        // Catálogos
        Route::get('catalogos-permitidos', [CatalogoController::class, 'catalogosPermitidos']);
        Route::prefix('catalogos')->group(function () {
            Route::get('tipos-documento', [CatalogoController::class, 'tiposDocumento']);
            Route::get('tipos-documento/activos', [CatalogoController::class, 'tiposDocumentoActivos']);
            Route::get('sexos', [CatalogoController::class, 'sexos']);
            Route::get('sexos/activos', [CatalogoController::class, 'sexosActivos']);
            Route::get('estados-civiles', [CatalogoController::class, 'estadosCiviles']);
            Route::get('estados-civiles/activos', [CatalogoController::class, 'estadosCivilesActivos']);
            Route::get('tipos-vinculo', [CatalogoController::class, 'tiposVinculo']);
            Route::get('tipos-vinculo/activos', [CatalogoController::class, 'tiposVinculoActivos']);
            Route::get('cargos', [CatalogoController::class, 'cargos']);
            Route::get('cargos/activos', [CatalogoController::class, 'cargosActivos']);
            Route::get('tipos-conflicto', [CatalogoController::class, 'tiposConflicto']);
            Route::get('tipos-conflicto/activos', [CatalogoController::class, 'tiposConflictoActivos']);
            Route::get('estados-denuncia', [CatalogoController::class, 'estadosDenuncia']);
            Route::get('estados-denuncia/activos', [CatalogoController::class, 'estadosDenunciaActivos']);
            Route::get('instituciones', [CatalogoController::class, 'instituciones']);
            Route::get('instituciones/activas', [CatalogoController::class, 'institucionesActivas']);
            Route::get('tipos-medida', [CatalogoController::class, 'tiposMedida']);
            Route::get('tipos-medida/activos', [CatalogoController::class, 'tiposMedidaActivos']);
            Route::get('estados-asistencia', [CatalogoController::class, 'estadosAsistencia']);
            Route::get('estados-asistencia/activos', [CatalogoController::class, 'estadosAsistenciaActivos']);
            Route::get('tipos-notificacion', [CatalogoController::class, 'tiposNotificacion']);
            Route::get('tipos-notificacion/activos', [CatalogoController::class, 'tiposNotificacionActivos']);
        });

        // Denuncias - Rutas de lectura
        Route::prefix('denuncias')->group(function () {
              Route::get('exportar-estadisticas-excel', [DenunciaController::class, 'exportarEstadisticasExcel']);
    Route::get('exportar-estadisticas-pdf', [DenunciaController::class, 'exportarEstadisticasPDF']);
            Route::get('/', [DenunciaController::class, 'index']);
            Route::get('generar-codigo', [DenunciaController::class, 'generarCodigo']);
            Route::get('estadisticas', [DenunciaController::class, 'estadisticas']);
            Route::get('diagnosticar', [DenunciaController::class, 'diagnosticar']);
            Route::get('buscar', [DenunciaController::class, 'buscar']);
            Route::get('{id}', [DenunciaController::class, 'show']);
            Route::get('{id}/resumen', [DenunciaController::class, 'resumen']);
            Route::get('{id}/reporte-completo', [DenunciaController::class, 'generarReporteCompleto']);
            Route::get('{id}/historial', [DenunciaController::class, 'historial']);
            Route::get('{id}/historial-paginado', [DenunciaController::class, 'historialPaginado']);
            Route::get('{id}/historial-formateado', [DenunciaController::class, 'historialFormateado']);
            Route::get('estadisticas', [DenunciaController::class, 'getEstadisticas']);
            Route::get('{id}/involucrados', [InvolucradoController::class, 'index']);


        });

        // Involucrados - Rutas de lectura
        Route::prefix('involucrados')->group(function () {
            Route::get('por-persona/{personaId}', [InvolucradoController::class, 'porPersona']);
            Route::post('validar-persona', [InvolucradoController::class, 'validarPersona']);
            Route::get('{id}', [InvolucradoController::class, 'show']);
        });

        // Remisiones - Rutas de lectura
        Route::prefix('remisiones')->group(function () {
            Route::get('/', [RemisionController::class, 'index']);
            Route::get('/historial/{denunciaId}', [RemisionController::class, 'historial']);
            Route::get('/{id}', [RemisionController::class, 'show']);
        });

        // Conciliaciones - Rutas de lectura
        Route::prefix('conciliaciones')->group(function () {
            Route::get('/', [ConciliacionController::class, 'index']);
            Route::get('/verificar-denuncia/{denunciaId}', [ConciliacionController::class, 'verificarDenuncia']);
            Route::get('/{id}/personal-disponible', [ConciliacionController::class, 'personalDisponible']);
            Route::get('/{id}/resumen', [ConciliacionController::class, 'resumen']);
            Route::get('/{id}', [ConciliacionController::class, 'show']);
            Route::get('/estadisticas/generales', [ConciliacionController::class, 'estadisticas']);
        });

        // Conciliaciones Disponibles - Rutas de lectura
        Route::prefix('conciliaciones-disponibles')->group(function () {
            Route::get('/para-sentencia', [ConciliacionDisponibleController::class, 'paraSentencia']);
            Route::get('/para-medida-cautelar', [ConciliacionDisponibleController::class, 'paraMedidaCautelar']);
            Route::get('/consolidadas', [ConciliacionDisponibleController::class, 'consolidadas']);
            Route::get('/nueva-conciliacion', [ConciliacionDisponibleController::class, 'paraNuevaConciliacion']);
            Route::get('/remision', [ConciliacionDisponibleController::class, 'paraRemision']);
            Route::get('/{conciliacionId}/verificar', [ConciliacionDisponibleController::class, 'verificar']);
            Route::get('/remision', [ConciliacionDisponibleController::class, 'paraRemision']);
            Route::get('remision', [ConciliacionDisponibleController::class, 'paraRemision']);
        });

        // Sentencias - Rutas de lectura
        Route::prefix('sentencias')->group(function () {
            Route::get('/', [SentenciaController::class, 'index']);
            Route::get('/estadisticas', [SentenciaController::class, 'estadisticas']);
            Route::get('/{id}', [SentenciaController::class, 'show']);
        });

        // Medidas Cautelares - Rutas de lectura
        Route::prefix('medidas-cautelares')->group(function () {
            Route::get('/', [MedidaCautelarController::class, 'index']);
            Route::get('/estadisticas', [MedidaCautelarController::class, 'estadisticas']);
            Route::get('/{id}', [MedidaCautelarController::class, 'show']);

        });

        // Reportes de Denuncias - Rutas de lectura
        Route::prefix('reportes/denuncias')->group(function () {
            Route::get('por-estado', [DenunciaController::class, 'reportePorEstado']);
            Route::get('por-conflicto', [DenunciaController::class, 'reportePorConflicto']);
            Route::get('por-fechas', [DenunciaController::class, 'reportePorFechas']);
            Route::get('tiempos-resolucion', [DenunciaController::class, 'reporteTiemposResolucion']);
        });

        // Horarios - Rutas de lectura
        Route::prefix('horarios')->group(function () {
            Route::get('/', [CalendarioController::class, 'getHorarios']);
        });

        // Asistencia - Rutas de lectura
       Route::prefix('asistencias')->group(function () {
        Route::get('/', [CalendarioController::class, 'getAsistencias']);
        Route::get('/resumen', [CalendarioController::class, 'getResumenAsistencia']);
        Route::get('/estadisticas', [CalendarioController::class, 'getEstadisticas']);
        Route::get('/exportar-excel', [CalendarioController::class, 'exportarExcel']);
        Route::get('/exportar-pdf', [CalendarioController::class, 'exportarPDF']);
    });



        // Código OTP
        Route::prefix('codigo-otp')->group(function () {
            Route::get('/', [App\Http\Controllers\Api\CodigoOTPController::class, 'getCodigo']);
            Route::post('/regenerar', [App\Http\Controllers\Api\CodigoOTPController::class, 'regenerar']);
            Route::post('/verificar', [App\Http\Controllers\Api\CodigoOTPController::class, 'verificar']);
            Route::post('/usar', [App\Http\Controllers\Api\CodigoOTPController::class, 'usar']);
        });

         Route::get('preguntas-seguridad', [PreguntaSeguridadController::class, 'index']);
    Route::get('preguntas-seguridad/{id}', [PreguntaSeguridadController::class, 'show']);
    Route::get('usuarios/{usuarioId}/preguntas/{preguntaId}/respuesta', [UsuarioPreguntaController::class, 'showAnswer']);
    Route::get('usuarios/{usuarioId}/preguntas-asociadas', [UsuarioPreguntaController::class, 'getByUser']);

    // Asociaciones - Lectura
    Route::get('usuarios-preguntas', [UsuarioPreguntaController::class, 'index']);
    Route::get('usuarios/{usuarioId}/preguntas', [UsuarioPreguntaController::class, 'listByUser']);


        // Horarios - Acciones de escritura
        Route::post('horarios', [CalendarioController::class, 'crearHorario']);
        Route::put('horarios/{id}', [CalendarioController::class, 'actualizarHorario']);
        Route::delete('horarios/{id}', [CalendarioController::class, 'eliminarHorario']);

        // Asistencia - Acciones de escritura
        Route::post('asistencias/registrar', [CalendarioController::class, 'registrarAsistencia']);
        Route::post('asistencias/entrada-masiva', [CalendarioController::class, 'registrarEntradaMasiva']);
            Route::post('asistencias/salida-masiva', [CalendarioController::class, 'registrarSalidaMasiva']);
            Route::post('asistencias/cambiar-estado', [CalendarioController::class, 'cambiarEstadoAsistencia']);
            Route::get('asistencias/resumen', [CalendarioController::class, 'getResumenAsistencia']);
            Route::get('asistencias/estadisticas', [CalendarioController::class, 'getEstadisticas']);
            Route::get('asistencias/exportar-excel', [CalendarioController::class, 'exportarExcel']);
            Route::get('asistencias/exportar-pdf', [CalendarioController::class, 'exportarPDF']);

    // ============================================
    // NOTIFICACIONES - Rutas de lectura
    // ============================================
    Route::prefix('notificaciones')->group(function () {
  Route::get('/', [NotificacionController::class, 'index']);
    Route::get('/estadisticas', [NotificacionController::class, 'estadisticas']);
    Route::get('/tipos', [NotificacionController::class, 'tipos']);
    Route::get('/denuncias-disponibles', [NotificacionController::class, 'denunciasDisponibles']);
    Route::get('/reporte-detallado', [NotificacionController::class, 'reporteDetallado']);
    Route::get('/exportar-excel', [NotificacionController::class, 'exportarExcel']);
    Route::get('/reporte-completo-pdf', [NotificacionController::class, 'exportarReporteCompletoPDF']);
    Route::get('/reporte-completo-excel', [NotificacionController::class, 'exportarReporteCompletoExcel']);
    Route::get('/{id}', [NotificacionController::class, 'show']);
    Route::get('/{id}/constancia', [NotificacionController::class, 'generarConstancia']);
    Route::get('/{id}/exportar-excel', [NotificacionController::class, 'exportarExcelIndividual']);
    });


  Route::prefix('prestamos')->group(function () {
        Route::get('/', [PrestamoController::class, 'index']);
        Route::get('/estadisticas', [PrestamoController::class, 'estadisticas']);
        Route::get('/activos', [PrestamoController::class, 'prestamosActivos']);
        Route::get('/retrasados', [PrestamoController::class, 'prestamosRetrasados']);
        Route::get('/historial', [PrestamoController::class, 'historial']);
        Route::get('/denuncias-disponibles', [PrestamoController::class, 'denunciasDisponibles']);
        Route::get('/personal-disponible', [PrestamoController::class, 'personalDisponible']);
        Route::get('/exportar-excel', [PrestamoController::class, 'exportarExcel']);
        Route::get('/verificar-disponibilidad', [PrestamoController::class, 'verificarDisponibilidad']);
        Route::get('/{id}', [PrestamoController::class, 'show']);
});

    });

// ============================================
// RUTAS DE ACCIONES DE CHATBOT (Requieren autenticación, pero NO código maestro)
// ============================================


Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.inactividad', 'auditar'])->prefix('chatbot')->group(function () {

    // Rutas principales
    Route::post('/mensaje', [ChatbotController::class, 'enviarMensaje']);
    Route::get('/historial', [ChatbotController::class, 'obtenerHistorial']);
    Route::post('/calificar', [ChatbotController::class, 'calificar']);
    Route::delete('/historial', [ChatbotController::class, 'limpiarHistorial']);

    // Ruta para código maestro (redirige al controlador existente)
    Route::get('/codigo-maestro', [ChatbotController::class, 'obtenerCodigoMaestro']);
});

// ============================================
// RUTAS DE AUDITORÍA
// ============================================

Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.inactividad', 'auditar'])->prefix('auditoria')->group(function () {

       Route::get('/estadisticas', [AuditoriaController::class, 'estadisticas']);
    Route::get('/exportar', [AuditoriaController::class, 'exportar']);
    Route::get('/patrones', [AuditoriaController::class, 'patrones']);
    Route::get('/alertas', [AuditoriaController::class, 'alertas']);
    Route::get('/buscar', [AuditoriaController::class, 'buscar']);


    Route::get('/', [AuditoriaController::class, 'index']);
    Route::get('/{id}', [AuditoriaController::class, 'show']);

});


    // ============================================
    // RUTAS PROTEGIDAS CON CÓDIGO MAESTRO (Acciones de escritura)
    // ============================================
    Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])->group(function () {

        // Usuarios - Acciones de escritura
        Route::post('usuarios', [UsuarioController::class, 'store']);
        Route::put('usuarios/{usuario}', [UsuarioController::class, 'update']);
        Route::delete('usuarios/{usuario}', [UsuarioController::class, 'destroy']);
        Route::post('usuarios/{usuario}/desbloquear', [UsuarioController::class, 'desbloquear']);
        Route::post('usuarios/{usuario}/cambiar-estado', [UsuarioController::class, 'cambiarEstado']);
        Route::post('usuarios/{usuario}/cambiar-password', [UsuarioController::class, 'cambiarPassword']);
        Route::post('usuarios/asignar-rol', [UsuarioController::class, 'asignarRol']);

        // Roles - Acciones de escritura
        Route::post('roles', [RolController::class, 'store']);
        Route::put('roles/{rol}', [RolController::class, 'update']);
        Route::delete('roles/{rol}', [RolController::class, 'destroy']);
        Route::put('roles/{id}/permisos', [RolController::class, 'asignarPermisos']);

        // Permisos - Acciones de escritura
        Route::post('permisos', [PermisoController::class, 'store']);
        Route::put('permisos/{permiso}', [PermisoController::class, 'update']);
        Route::delete('permisos/{permiso}', [PermisoController::class, 'destroy']);

        // Personal - Acciones de escritura
        Route::post('personal', [PersonalController::class, 'store']);
        Route::put('personal/{personal}', [PersonalController::class, 'update']);
        Route::delete('personal/{personal}', [PersonalController::class, 'destroy']);
        Route::post('personal/{personal}/activar', [PersonalController::class, 'activar']);
        Route::post('personal/{personal}/desactivar', [PersonalController::class, 'desactivar']);

        // Personas - Acciones de escritura
        Route::post('personas', [PersonaController::class, 'store']);
        Route::put('personas/{persona}', [PersonaController::class, 'update']);
        Route::delete('personas/{persona}', [PersonaController::class, 'destroy']);
        Route::post('personas/{id}/firma', [PersonaController::class, 'guardarFirma'])->where('id', '[0-9]+');
        Route::post('personas/{id}/foto', [PersonaController::class, 'subirFoto'])->where('id', '[0-9]+');
        Route::post('{id}/regenerar-qr', [PersonaController::class, 'regenerarQR']);

        // Administración de Catálogos
        Route::prefix('admin')->group(function () {
            Route::post('tipos-documento', [CatalogoController::class, 'crearTipoDocumento']);
            Route::put('tipos-documento/{id}', [CatalogoController::class, 'actualizarTipoDocumento']);
            Route::delete('tipos-documento/{id}', [CatalogoController::class, 'eliminarTipoDocumento']);
            Route::post('sexos', [CatalogoController::class, 'crearSexo']);
            Route::put('sexos/{id}', [CatalogoController::class, 'actualizarSexo']);
            Route::delete('sexos/{id}', [CatalogoController::class, 'eliminarSexo']);
            Route::post('estados-civiles', [CatalogoController::class, 'crearEstadoCivil']);
            Route::put('estados-civiles/{id}', [CatalogoController::class, 'actualizarEstadoCivil']);
            Route::delete('estados-civiles/{id}', [CatalogoController::class, 'eliminarEstadoCivil']);
            Route::post('tipos-vinculo', [CatalogoController::class, 'crearTipoVinculo']);
            Route::put('tipos-vinculo/{id}', [CatalogoController::class, 'actualizarTipoVinculo']);
            Route::delete('tipos-vinculo/{id}', [CatalogoController::class, 'eliminarTipoVinculo']);
            Route::post('cargos', [CatalogoController::class, 'crearCargo']);
            Route::put('cargos/{id}', [CatalogoController::class, 'actualizarCargo']);
            Route::delete('cargos/{id}', [CatalogoController::class, 'eliminarCargo']);
            Route::post('tipos-conflicto', [CatalogoController::class, 'crearTipoConflicto']);
            Route::put('tipos-conflicto/{id}', [CatalogoController::class, 'actualizarTipoConflicto']);
            Route::delete('tipos-conflicto/{id}', [CatalogoController::class, 'eliminarTipoConflicto']);
            Route::post('estados-denuncia', [CatalogoController::class, 'crearEstadoDenuncia']);
            Route::put('estados-denuncia/{id}', [CatalogoController::class, 'actualizarEstadoDenuncia']);
            Route::delete('estados-denuncia/{id}', [CatalogoController::class, 'eliminarEstadoDenuncia']);
            Route::post('instituciones', [CatalogoController::class, 'crearInstitucion']);
            Route::put('instituciones/{id}', [CatalogoController::class, 'actualizarInstitucion']);
            Route::delete('instituciones/{id}', [CatalogoController::class, 'eliminarInstitucion']);
            Route::post('tipos-medida', [CatalogoController::class, 'crearTipoMedida']);
            Route::put('tipos-medida/{id}', [CatalogoController::class, 'actualizarTipoMedida']);
            Route::delete('tipos-medida/{id}', [CatalogoController::class, 'eliminarTipoMedida']);
            Route::post('estados-asistencia', [CatalogoController::class, 'crearEstadoAsistencia']);
            Route::put('estados-asistencia/{id}', [CatalogoController::class, 'actualizarEstadoAsistencia']);
            Route::delete('estados-asistencia/{id}', [CatalogoController::class, 'eliminarEstadoAsistencia']);
            Route::post('tipos-notificacion', [CatalogoController::class, 'crearTipoNotificacion']);
            Route::put('tipos-notificacion/{id}', [CatalogoController::class, 'actualizarTipoNotificacion']);
            Route::delete('tipos-notificacion/{id}', [CatalogoController::class, 'eliminarTipoNotificacion']);
        });

        // Denuncias - Acciones de escritura
        Route::post('denuncias', [DenunciaController::class, 'store']);
        Route::put('denuncias/{id}', [DenunciaController::class, 'update']);
        Route::delete('denuncias/{id}', [DenunciaController::class, 'destroy']);
        Route::post('denuncias/{id}/cambiar-estado', [DenunciaController::class, 'cambiarEstado']);
        Route::post('denuncias/{id}/validar-evidencia', [DenunciaController::class, 'validarEvidencia']);
        Route::post('denuncias/{id}/involucrados', [InvolucradoController::class, 'store']);

        // Involucrados - Acciones de escritura
        Route::put('involucrados/{id}', [InvolucradoController::class, 'update']);
        Route::delete('involucrados/{id}', [InvolucradoController::class, 'destroy']);

        // Remisiones - Acciones de escritura
        Route::post('remisiones', [RemisionController::class, 'store']);
        Route::put('remisiones/{id}', [RemisionController::class, 'update']);
        Route::delete('remisiones/{id}', [RemisionController::class, 'destroy']);

        // Conciliaciones - Acciones de escritura
        Route::post('conciliaciones', [ConciliacionController::class, 'store']);
        Route::put('conciliaciones/{id}', [ConciliacionController::class, 'update']);
        Route::delete('conciliaciones/{id}', [ConciliacionController::class, 'destroy']);
        Route::post('conciliaciones/{id}/cambiar-estado', [ConciliacionController::class, 'cambiarEstado']);
        Route::post('conciliaciones/{id}/iniciar', [ConciliacionController::class, 'iniciar']);
        Route::post('conciliaciones/{conciliacionId}/votos', [ConciliacionController::class, 'registrarVoto']);

        // Sentencias - Acciones de escritura
        Route::post('sentencias', [SentenciaController::class, 'store']);
        Route::put('sentencias/{id}', [SentenciaController::class, 'update']);
        Route::delete('sentencias/{id}', [SentenciaController::class, 'destroy']);
        Route::patch('sentencias/{id}/cambiar-estado', [SentenciaController::class, 'cambiarEstadoEjecucion']);

        // Medidas Cautelares - Acciones de escritura
        Route::post('medidas-cautelares', [MedidaCautelarController::class, 'store']);
        Route::put('medidas-cautelares/{id}', [MedidaCautelarController::class, 'update']);
        Route::delete('medidas-cautelares/{id}', [MedidaCautelarController::class, 'destroy']);
        Route::patch('medidas-cautelares/{id}/cambiar-estado', [MedidaCautelarController::class, 'cambiarEstado']);
        Route::post('medidas-cautelares/{id}/prorrogar', [MedidaCautelarController::class, 'prorrogar']);

              // Preguntas de Seguridad - Escritura
    Route::post('preguntas-seguridad', [PreguntaSeguridadController::class, 'store']);
    Route::put('preguntas-seguridad/{id}', [PreguntaSeguridadController::class, 'update']);
    Route::delete('preguntas-seguridad/{id}', [PreguntaSeguridadController::class, 'destroy']);
    Route::post('usuarios-preguntas/validar', [UsuarioPreguntaController::class, 'validateAnswer']);
    Route::post('usuarios-preguntas/validar-masiva', [UsuarioPreguntaController::class, 'validateMassive']);
    Route::put('usuarios/{usuarioId}/preguntas/{preguntaId}/respuesta', [UsuarioPreguntaController::class, 'updateAnswer']);
    // Asociaciones - Escritura
    Route::post('usuarios-preguntas', [UsuarioPreguntaController::class, 'store']);
    Route::delete('usuarios/{usuarioId}/preguntas/{preguntaId}', [UsuarioPreguntaController::class, 'destroy']);

        // Reportes
        Route::post('reportes/asistencia', [CalendarioController::class, 'generarReporte']);


        Route::prefix('notificaciones')->group(function () {
        Route::post('/', [NotificacionController::class, 'store']);
        Route::put('/{id}', [NotificacionController::class, 'update']);
        Route::delete('/{id}', [NotificacionController::class, 'destroy']);
         Route::post('/enviar-reporte', [NotificacionController::class, 'enviarReportePorCorreo']);
        Route::post('/{id}/cancelar', [NotificacionController::class, 'cancel']);
    });

    Route::prefix('prestamos')->group(function () {
        Route::post('/', [PrestamoController::class, 'store']);
        Route::post('/{id}/devolucion', [PrestamoController::class, 'registrarDevolucion']);
        Route::put('/{id}', [PrestamoController::class, 'update']);
        Route::delete('/{id}', [PrestamoController::class, 'destroy']);
    });

    });

 // ============================================
// RUTAS DE ADMINISTRACIÓN DE CHATBOT (Requieren autenticación y código maestro)
// ============================================

Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])
    ->prefix('chatbot/admin')
    ->group(function () {
        // Base de conocimiento
        Route::get('conocimiento', [ChatbotAdminController::class, 'index']);
        Route::post('conocimiento', [ChatbotAdminController::class, 'store']);
        Route::get('conocimiento/{id}', [ChatbotAdminController::class, 'show']);
        Route::put('conocimiento/{id}', [ChatbotAdminController::class, 'update']);
        Route::delete('conocimiento/{id}', [ChatbotAdminController::class, 'destroy']);
        Route::post('conocimiento/{id}/activar', [ChatbotAdminController::class, 'activar']);

        // Estadísticas
        Route::get('estadisticas', [ChatbotAdminController::class, 'estadisticas']);
        Route::get('exportar', [ChatbotAdminController::class, 'exportarEstadisticas']);

        // Utilidades
        Route::post('probar', [ChatbotAdminController::class, 'probar']);
        Route::get('chatbot-probar', [ChatbotController::class, 'probarApi']);
        Route::post('importar', [ChatbotAdminController::class, 'importar']);
    });



    Route::middleware(['auth:sanctum', 'update.last.access', 'auditar', 'verificar.inactividad'])->prefix('backups')->group(function () {

    // Listar backups (con paginación y filtros)
    Route::get('/', [BackupController::class, 'index']);

    // Obtener un backup específico
    Route::get('{id}', [BackupController::class, 'show']);

    // Descargar archivo de backup
    Route::get('{id}/download', [BackupController::class, 'download']);

    // Validar integridad de backup
    Route::post('{id}/validate', [BackupController::class, 'validateIntegrity']);

    // Obtener estadísticas de backups
    Route::get('stats/overview', [BackupController::class, 'getStats']);

    // Buscar backups
    Route::get('search/find', [BackupController::class, 'search']);

    // Filtrar backups
    Route::post('filter', [BackupController::class, 'filter']);


});

// Rutas protegidas con código maestro (escritura y operaciones críticas)
Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])->prefix('backups')->group(function () {

    // Crear nuevo backup
    Route::post('/', [BackupController::class, 'store']);

    // Actualizar información de backup
    Route::put('{id}', [BackupController::class, 'update']);

    // Eliminar backup
    Route::delete('{id}', [BackupController::class, 'destroy']);

    // Eliminar múltiples backups
    Route::post('bulk-delete', [BackupController::class, 'bulkDestroy']);

    // Estimar tamaño de backup antes de crear
    Route::post('estimate-size', [BackupController::class, 'estimateSize']);

    // Programar backup automático
    Route::post('schedule', [BackupController::class, 'scheduleBackup']);

    // Cancelar backup programado
    Route::delete('schedule/{id}', [BackupController::class, 'cancelSchedule']);

    Route::post('{id}/restore', [BackupController::class, 'restore']);

    // Sincronizar backups con la nube
    Route::post('sync-cloud', [BackupController::class, 'syncWithCloud']);

    Route::post('test-connection', [BackupController::class, 'testConnection']);
});

// ============================================
// RUTAS DE RESTAURACIÓN
// ============================================

// Rutas protegidas con autenticación
Route::middleware(['auth:sanctum', 'update.last.access', 'auditar', 'verificar.inactividad'])->prefix('restores')->group(function () {

    // Listar restauraciones
    Route::get('/', [RestoreController::class, 'index']);

    // Obtener una restauración específica
    Route::get('{id}', [RestoreController::class, 'show']);

    // Obtener restauraciones por backup
    Route::get('backup/{backupId}', [RestoreController::class, 'getByBackup']);

    // Obtener estadísticas de restauraciones
    Route::get('stats/overview', [RestoreController::class, 'getStats']);
});

// Rutas protegidas con código maestro
Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])->prefix('restores')->group(function () {

    // Iniciar restauración
    Route::post('/', [RestoreController::class, 'store']);

    // Obtener progreso de restauración
    Route::get('{id}/progress', [RestoreController::class, 'getProgress']);

    // Cancelar restauración en curso
    Route::post('{id}/cancel', [RestoreController::class, 'cancel']);

    // Verificar compatibilidad de backup
    Route::post('verify-compatibility', [RestoreController::class, 'verifyCompatibility']);
});

// ============================================
// RUTAS DE SERVICIOS EN LA NUBE
// ============================================

Route::middleware(['auth:sanctum', 'update.last.access', 'auditar', 'verificar.inactividad'])->prefix('cloud-storage')->group(function () {

    // Listar proveedores disponibles
    Route::get('providers', [CloudStorageController::class, 'getProviders']);

    // Probar conexión con proveedor
    Route::post('test-connection', [CloudStorageController::class, 'testConnection']);

    // Obtener espacio usado en la nube
    Route::get('space-usage/{provider}', [CloudStorageController::class, 'getSpaceUsage']);

    // Listar archivos en la nube
    Route::get('files/{provider}', [CloudStorageController::class, 'listFiles']);
});

// Rutas protegidas con código maestro para configuración de nube
Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])->prefix('cloud-storage')->group(function () {

    // Configurar proveedor
    Route::post('configure/{provider}', [CloudStorageController::class, 'configure']);

    // Sincronizar con proveedor
    Route::post('sync/{provider}', [CloudStorageController::class, 'sync']);

    // Eliminar archivo de la nube
    Route::delete('file/{provider}', [CloudStorageController::class, 'deleteFile']);
});

// ============================================
// RUTAS DE CONFIGURACIÓN DE BACKUP
// ============================================

Route::middleware(['auth:sanctum', 'update.last.access', 'verificar.codigo', 'auditar', 'verificar.inactividad'])->prefix('backup-config')->group(function () {

    // Obtener configuración actual
    Route::get('/', [BackupController::class, 'getConfig']);

    // Actualizar configuración
    Route::put('/', [BackupController::class, 'updateConfig']);

    // Obtener política de retención
    Route::get('retention-policy', [BackupController::class, 'getRetentionPolicy']);

    // Actualizar política de retención
    Route::put('retention-policy', [BackupController::class, 'updateRetentionPolicy']);

    // Aplicar política de retención (limpiar backups antiguos)
    Route::post('apply-retention', [BackupController::class, 'applyRetentionPolicy']);

    // Obtener programaciones activas
    Route::get('schedules', [BackupController::class, 'getSchedules']);

    // Obtener logs de actividad
    Route::get('logs', [BackupController::class, 'getLogs']);

    // Exportar logs
    Route::post('logs/export', [BackupController::class, 'exportLogs']);
});

// ============================================
// RUTAS DE REPORTES
// ============================================

Route::middleware(['auth:sanctum', 'update.last.access', 'auditar', ])->prefix('backup-reports')->group(function () {

    // Reporte general de backups
    Route::get('general', [BackupController::class, 'generateGeneralReport']);

    // Reporte de backups por usuario
    Route::get('by-user', [BackupController::class, 'generateByUserReport']);

    // Reporte de backups por proveedor
    Route::get('by-provider', [BackupController::class, 'generateByProviderReport']);

    // Reporte de restauraciones
    Route::get('restores', [RestoreController::class, 'generateReport']);

    // Reporte de fallos
    Route::get('failures', [BackupController::class, 'generateFailureReport']);

    // Reporte de auditoría
    Route::get('audit', [BackupController::class, 'generateAuditReport']);

    // Exportar reporte en PDF
    Route::post('export-pdf', [BackupController::class, 'exportPDF']);

    // Exportar reporte en Excel
    Route::post('export-excel', [BackupController::class, 'exportExcel']);
});


});
