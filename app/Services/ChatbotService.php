<?php

namespace App\Services;

use App\Models\ChatbotConversacion;
use App\Models\ChatbotMensaje;
use App\Models\ChatbotBaseConocimiento;
use App\Models\ChatbotCacheSemantico;
use App\Models\ChatbotCalificacione;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotService
{
    protected $apiKey;
    protected $apiUrl;

    public function __construct()
    {
        $this->apiKey = config('services.gemini.api_key');
        $this->apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
    }

    /**
     * Procesar mensaje del usuario
     */
    public function procesarMensaje(string $mensaje, ?int $usuarioId, string $sesionId): array
    {
        $inicio = microtime(true);

        // 1. Buscar en caché semántico
        $cache = $this->buscarEnCache($mensaje);
        if ($cache) {
            $this->guardarMensaje($sesionId, $usuarioId, 'usuario', $mensaje);
            $respuesta = $this->guardarMensaje($sesionId, $usuarioId, 'asistente', $cache, 0);

            return [
                'respuesta' => $cache,
                'fuente' => 'cache',
                'mensaje_id' => $respuesta->id
            ];
        }

        // 2. Buscar en base de conocimiento
        $conocimiento = $this->buscarEnConocimiento($mensaje);
        if ($conocimiento && $conocimiento['puntaje'] > 0.7) {
            $this->guardarMensaje($sesionId, $usuarioId, 'usuario', $mensaje);
            $respuesta = $this->guardarMensaje($sesionId, $usuarioId, 'asistente', $conocimiento['respuesta']);

            ChatbotBaseConocimiento::where('id', $conocimiento['id'])->increment('veces_usada');

            return [
                'respuesta' => $conocimiento['respuesta'],
                'fuente' => 'conocimiento',
                'puntaje' => $conocimiento['puntaje'],
                'mensaje_id' => $respuesta->id
            ];
        }

        // 3. Usar IA de Google Gemini
        $respuestaIA = $this->consultarIA($mensaje, $usuarioId);

        $this->guardarMensaje($sesionId, $usuarioId, 'usuario', $mensaje);
        $respuesta = $this->guardarMensaje($sesionId, $usuarioId, 'asistente', $respuestaIA);

        $this->guardarEnCache($mensaje, $respuestaIA);

        $tiempoRespuesta = (microtime(true) - $inicio) * 1000;

        return [
            'respuesta' => $respuestaIA,
            'fuente' => 'ia',
            'mensaje_id' => $respuesta->id,
            'tiempo_ms' => round($tiempoRespuesta)
        ];
    }

    /**
     * Buscar en caché semántico
     */
    protected function buscarEnCache(string $mensaje): ?string
    {
        $textoNormalizado = strtolower(trim($mensaje));
        $hash = md5($textoNormalizado);

        $cache = ChatbotCacheSemantico::where('hash_consulta', $hash)
            ->where(function($q) {
                $q->whereNull('expira_en')->orWhere('expira_en', '>', now());
            })
            ->first();

        if ($cache) {
            $cache->increment('veces_usado');
            return $cache->texto_respuesta;
        }

        $posibles = ChatbotCacheSemantico::whereNull('expira_en')
            ->orWhere('expira_en', '>', now())
            ->get();

        foreach ($posibles as $posible) {
            similar_text($textoNormalizado, strtolower($posible->texto_consulta), $porcentaje);
            if ($porcentaje > 80) {
                $posible->increment('veces_usado');
                return $posible->texto_respuesta;
            }
        }

        return null;
    }

    /**
     * Buscar en base de conocimiento
     */
    protected function buscarEnConocimiento(string $mensaje): ?array
    {
        $texto = strtolower($mensaje);
        $conocimientos = ChatbotBaseConocimiento::where('activo', DB::raw('true'))->get();

        $mejorCoincidencia = null;
        $mejorPuntaje = 0;

        foreach ($conocimientos as $conocimiento) {
            similar_text($texto, strtolower($conocimiento->pregunta), $puntaje);

            $palabrasPregunta = explode(' ', strtolower($conocimiento->pregunta));
            $palabrasMensaje = explode(' ', $texto);
            $coincidencias = count(array_intersect($palabrasPregunta, $palabrasMensaje));
            $puntajePalabras = ($coincidencias / max(count($palabrasPregunta), 1)) * 100;

            $puntajeFinal = max($puntaje, $puntajePalabras);

            if ($puntajeFinal > $mejorPuntaje && $puntajeFinal > 50) {
                $mejorPuntaje = $puntajeFinal;
                $mejorCoincidencia = [
                    'id' => $conocimiento->id,
                    'respuesta' => $conocimiento->respuesta,
                    'puntaje' => $puntajeFinal / 100
                ];
            }
        }

        return $mejorCoincidencia;
    }

    /**
     * Consultar a Gemini IA
     */
    protected function consultarIA(string $mensaje, ?int $usuarioId): string
    {
        $contexto = $this->obtenerContextoSistema();

        if (empty($this->apiKey)) {
            Log::warning('GEMINI_API_KEY no configurada, usando respuestas por defecto');
            return $this->respuestaPorDefecto($mensaje);
        }

        try {
            $response = Http::timeout(30)->post($this->apiUrl . '?key=' . $this->apiKey, [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $contexto . "\n\nUsuario: " . $mensaje . "\n\nAsistente SIGPAZ:"]
                        ]
                    ]
                ],
                'generationConfig' => [
                    'temperature' => 0.7,
                    'maxOutputTokens' => 800,
                    'topP' => 0.95
                ]
            ]);

            if ($response->successful()) {
                $respuesta = $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? null;
                if ($respuesta) {
                    Log::info('Gemini respondió exitosamente', ['mensaje' => substr($mensaje, 0, 50)]);
                    return $respuesta;
                }
            }

            Log::error('Error con API de Gemini', [
                'status' => $response->status(),
                'error' => $response->body()
            ]);
            return $this->respuestaPorDefecto($mensaje);

        } catch (\Exception $e) {
            Log::error('Excepción en chatbot', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return $this->respuestaPorDefecto($mensaje);
        }
    }

    /**
     * Obtener contexto completo del sistema SIGPAZ (formato profesional)
     */
    protected function obtenerContextoSistema(): string
    {
        return "Eres SIGPAZ, un asistente virtual del Sistema Integral de Gestión de Paz (SIGPAZ), un sistema de gestión judicial de paz.

A continuación, se describe el conocimiento completo del sistema SIGPAZ:

1. INICIO DE SESIÓN Y AUTENTICACIÓN (MFA)

El sistema cuenta con una página de inicio informativa que presenta un botón para iniciar sesión. La autenticación se realiza en dos pasos:

- Primer paso: El usuario ingresa su nombre de usuario y contraseña.
- Segundo paso: El sistema presenta una pregunta de seguridad rotativa, seleccionada aleatoriamente de un conjunto predefinido.

El usuario tiene un máximo de 3 intentos para responder correctamente la pregunta de seguridad. Si falla los 3 intentos, el usuario queda bloqueado y el evento se registra en la auditoría del sistema.

La sesión expira automáticamente cada 5 minutos, requiriendo que el usuario se autentique nuevamente de forma completa.

2. CÓDIGO MAESTRO OTP

Solo el Juez de Paz puede solicitar un código maestro OTP. Este código sirve para otorgar acceso temporal a otros roles en procesos específicos. Su vigencia es de 5 minutos y tiene un máximo de 10 usos.

3. REGISTRO DE PERSONAS

El sistema permite registrar personas (denunciante, denunciado, involucrados, testigos) antes de asociarlas a una denuncia. Los datos requeridos son nombre, cédula, dirección, teléfono y correo electrónico.

El sistema valida automáticamente la cédula y la dirección. Todos los datos sensibles son encriptados con AES-256. Además, se genera una firma digital y un código QR para identificación rápida. Si la cédula está duplicada o los datos están incompletos, el sistema muestra un error.

4. DENUNCIAS

Las denuncias se registran anexando personas previamente registradas (denunciante, denunciado e involucrados). El sistema valida automáticamente la duplicidad de la denuncia y genera un número de expediente único.

Se pueden adjuntar documentos digitalizados al expediente. El sistema genera una constancia de entrega digital con firma electrónica y código QR. Los datos sensibles son encriptados con AES-256 y se envía una notificación automática al denunciante.

Los estados de una denuncia son: Recibida, En proceso, Concluida y Resuelta.

5. CONCILIACIONES Y FALLOS EN EQUIDAD

El Juez de Paz registra el resultado de la audiencia, que puede ser acuerdo, no acuerdo o equidad. En caso de equidad, se registran los votos con un máximo de 6.

El sistema genera automáticamente el acta en PDF con firma digital. Si el caso excede la competencia del sistema, se escala automáticamente al Sistema Judicial. Los datos sensibles del acta son encriptados con AES-256.

6. MEDIDAS CAUTELARES

El Juez de Paz selecciona el tipo de medida cautelar y establece su duración. El sistema genera el documento con firma digital y lo notifica a las partes.

El Juez evalúa la gravedad del caso. Si existe riesgo de delitos peores, como agresión física, lesiones graves o homicidio, el sistema remite el caso a la institución pertinente, como el Ministerio Público o el Sistema Judicial. El sistema realiza un seguimiento automático del vencimiento de las medidas.

7. NOTIFICACIONES Y CITACIONES

El Alguacil emite documentos oficiales de notificación en formato PDF. El sistema genera un código QR asociado a la persona o a la denuncia, aplica la firma digital correspondiente y envía el documento electrónicamente con constancia de entrega digital. Los datos personales son encriptados con AES-256.

8. ASISTENCIA DIARIA DEL PERSONAL

Cada funcionario, anexado a una persona previamente registrada, marca su entrada y salida en el sistema. El sistema calcula automáticamente las horas trabajadas, los retrasos y las salidas tempranas.

El Alguacil autoriza permisos y justificaciones. Al final del mes, el sistema genera automáticamente un reporte en PDF. Los datos personales son encriptados con AES-256.

9. PRÉSTAMO DE EXPEDIENTES

El Secretario registra el préstamo de un expediente, indicando el solicitante, el motivo y la fecha de retorno. El sistema genera una constancia digital.

Si la devolución excede las 72 horas, el sistema genera una alerta automática. Al registrar la devolución, el estado del expediente se actualiza a DEVUELTO. Los datos personales son encriptados con AES-256.

10. CHATBOT CON BÚSQUEDA SEMÁNTICA

El chatbot procesa las consultas de los usuarios mediante búsqueda semántica. Puede generar códigos OTP maestro, pero solo el Juez de Paz puede solicitarlos. Las conversaciones son encriptadas con AES-256. El usuario puede calificar las respuestas para mejorar la base de conocimiento.

11. GESTIÓN DE USUARIOS (CRUD)

El Juez de Paz administra los usuarios del sistema. Puede crear, editar, eliminar y asignar roles a los usuarios. Los roles disponibles son Juez de Paz, Secretario y Alguacil. Los datos personales son encriptados con AES-256. Cada acción queda registrada en la auditoría del sistema.

12. GESTIÓN DE ROLES Y PERMISOS (RBAC)

El sistema permite administrar los roles y los permisos asociados a cada rol. Se pueden asignar y remover permisos por rol, garantizando un control de acceso basado en roles.

13. GESTIÓN DE PREGUNTAS DE SEGURIDAD

El sistema permite crear, editar y eliminar preguntas de seguridad. Estas preguntas se seleccionan aleatoriamente durante la autenticación MFA y para la recuperación de contraseña. Cada cambio queda registrado en la auditoría.

14. BACKUP Y RESTAURACIÓN

El Juez de Paz puede ejecutar un backup completo del sistema. El proceso incluye compresión de datos y encriptación AES-256. El archivo de respaldo se almacena en la nube institucional.

Para la restauración, el sistema verifica la integridad del backup mediante checksum SHA-256 antes de restaurar los datos. Los backups automáticos están programados de forma diaria, semanal y mensual.

15. AUDITORÍA

El sistema permite consultar los logs de auditoría completos. Se puede filtrar por usuario, fecha y tipo de acción. Los logs pueden ser exportados a formato Excel para análisis externo.

16. REPORTES

El Secretario puede generar reportes estadísticos del sistema en formatos PDF y Excel. Los reportes pueden incluir datos de denuncias, conciliaciones, asistencia, entre otros. Se pueden aplicar filtros avanzados como rango de fechas y tipo de reporte. El sistema genera gráficos automáticamente y puede enviar el reporte por correo institucional.

17. DASHBOARD

Cada usuario tiene un panel de control personalizado según su rol. El dashboard muestra indicadores clave en tiempo real, como denuncias activas, conciliaciones pendientes, medidas cautelares vigentes y tasa de resolución. También incluye una gráfica estadística actualizada.

18. MANUAL TÉCNICO Y AUDIOVISUAL

El sistema pone a disposición un manual técnico, accesible solo para el Juez de Paz, y un manual de usuario para todos los roles. Se puede buscar contenido específico dentro de los manuales. Además, hay un video tutorial disponible en el módulo audiovisual.

19. PERSONALIZACIÓN DE TEMA

El usuario puede cambiar la apariencia visual del sistema seleccionando entre los temas Claro, Oscuro o Neón. El cambio se aplica en tiempo real en todas las pantallas del sistema, incluyendo la página de inicio, el inicio de sesión, la autenticación MFA y el dashboard.

POLÍTICAS DE SEGURIDAD

- Todos los datos sensibles son encriptados con AES-256.
- Todas las acciones críticas son registradas en la auditoría del sistema.
- La sesión expira automáticamente cada 5 minutos.

INSTRUCCIONES DE RESPUESTA

- Responde siempre en español, de manera cordial y profesional.
- Si te preguntan por el código maestro, indica que el Juez de Paz puede solicitarlo haciendo clic en el botón correspondiente.
- Si no sabes algo, admítelo y ofrece contactar a soporte@sigpaz.com.
- Las respuestas deben ser concisas pero completas.

Utiliza párrafos y listas ordenadas para presentar la información de manera clara y profesional.";
    }

    /**
     * Respuesta por defecto cuando no hay IA (formato profesional)
     */
    protected function respuestaPorDefecto(string $mensaje): string
    {
        $mensajeLower = strtolower($mensaje);

        // BURBUJA 1: Autenticación y sesión
        if (strpos($mensajeLower, 'iniciar sesión') !== false || strpos($mensajeLower, 'login') !== false) {
            return "Inicio de sesión en SIGPAZ

Para iniciar sesión en el sistema, sigue estos pasos:

1. Ingresa tu nombre de usuario y contraseña.
2. Responde una pregunta de seguridad rotativa. Tendrás un máximo de 3 intentos.
3. Si fallas los 3 intentos, tu usuario será bloqueado.

La sesión expira cada 5 minutos, por lo que deberás autenticarte nuevamente después de ese tiempo.

¿Necesitas ayuda con algún paso en particular?";
        }

        // BURBUJA 2: Código maestro OTP
        if (strpos($mensajeLower, 'código maestro') !== false || strpos($mensajeLower, 'codigo maestro') !== false || strpos($mensajeLower, 'otp') !== false) {
            return "Código Maestro OTP

El código maestro OTP es un mecanismo de acceso temporal que solo puede ser solicitado por el Juez de Paz.

Sus características son las siguientes:
- Vigencia: 5 minutos.
- Máximo de usos: 10.
- Sirve para otorgar acceso temporal a otros roles en procesos específicos.

Para obtenerlo, haz clic en el botón Código Maestro que se encuentra en el panel izquierdo o en el pie del chat.

¿Necesitas más información sobre este tema?";
        }

        // BURBUJA 3: Personas
        if (strpos($mensajeLower, 'persona') !== false || strpos($mensajeLower, 'registrar persona') !== false) {
            return "Registro de personas en SIGPAZ

El Secretario es el encargado de registrar a las personas en el sistema, como denunciantes, denunciados, involucrados o testigos.

Los datos requeridos son:
- Nombre completo.
- Cédula de identidad.
- Dirección.
- Teléfono.
- Correo electrónico.

El sistema valida automáticamente la cédula y la dirección. Todos los datos sensibles son encriptados con AES-256. Además, se genera una firma digital y un código QR para identificación rápida.

¿Quieres registrar a una persona ahora?";
        }

        // BURBUJA 4: Denuncias
        if (strpos($mensajeLower, 'denuncia') !== false) {
            return "Gestión de denuncias en SIGPAZ

Para registrar una denuncia, primero debes haber registrado a las personas involucradas (denunciante, denunciado e involucrados).

El proceso es el siguiente:
1. Accede al módulo de denuncias.
2. Anexa a las personas previamente registradas.
3. El sistema valida automáticamente la duplicidad de la denuncia.
4. El sistema genera un número de expediente único.
5. Puedes adjuntar documentos digitalizados al expediente.
6. El sistema genera una constancia de entrega digital con firma electrónica y código QR.
7. Se envía una notificación automática al denunciante.

Los estados de una denuncia son: Recibida, En proceso, Concluida y Resuelta.

¿Necesitas ayuda con algún paso específico?";
        }

        // BURBUJA 5: Conciliaciones
        if (strpos($mensajeLower, 'conciliación') !== false || strpos($mensajeLower, 'conciliacion') !== false || strpos($mensajeLower, 'fallo') !== false || strpos($mensajeLower, 'equidad') !== false) {
            return "Conciliaciones y fallos en equidad

El Juez de Paz registra el resultado de cada audiencia. Los posibles resultados son:
- Acuerdo.
- No acuerdo.
- Equidad.

En caso de equidad, se registran los votos, con un máximo de 6 votos por caso.

El sistema genera automáticamente el acta en PDF con firma digital. Si el caso excede la competencia del sistema, se escala automáticamente al Sistema Judicial.

¿Quieres registrar una conciliación?";
        }

        // BURBUJA 6: Medidas cautelares
        if (strpos($mensajeLower, 'medida cautelar') !== false || strpos($mensajeLower, 'medida') !== false) {
            return "Medidas cautelares en SIGPAZ

El Juez de Paz puede registrar medidas cautelares siguiendo estos pasos:

1. Selecciona el tipo de medida cautelar.
2. Establece la duración de la medida.
3. El sistema genera el documento con firma digital y lo notifica a las partes.

El Juez evalúa la gravedad del caso. Si existe riesgo de delitos peores, como agresión física, lesiones graves o homicidio, el sistema remite el caso a la institución pertinente, como el Ministerio Público o el Sistema Judicial.

El sistema realiza un seguimiento automático del vencimiento de las medidas.

¿Necesitas registrar una medida cautelar?";
        }

        // BURBUJA 7: Notificaciones y citaciones
        if (strpos($mensajeLower, 'notificación') !== false || strpos($mensajeLower, 'citación') !== false || strpos($mensajeLower, 'notificacion') !== false) {
            return "Notificaciones y citaciones en SIGPAZ

El Alguacil puede emitir documentos oficiales de notificación o citación mediante el siguiente proceso:

1. Selecciona el tipo de notificación.
2. El sistema genera automáticamente el documento en formato PDF.
3. El sistema genera un código QR asociado a la persona o a la denuncia.
4. El sistema aplica la firma digital correspondiente.
5. El documento se envía electrónicamente con constancia de entrega digital.

Los datos personales contenidos en la notificación son encriptados con AES-256.

¿Necesitas emitir una notificación?";
        }

        // BURBUJA 8: Asistencia
        if (strpos($mensajeLower, 'asistencia') !== false || strpos($mensajeLower, 'marcación') !== false || strpos($mensajeLower, 'marcacion') !== false) {
            return "Registro de asistencia diaria

Cada funcionario, anexado a una persona previamente registrada, marca su entrada y salida en el sistema.

El sistema realiza las siguientes funciones:
- Calcula automáticamente las horas trabajadas.
- Detecta retrasos y salidas tempranas.
- El Alguacil autoriza permisos y justificaciones.
- Al final del mes, el sistema genera un reporte en PDF.

Los datos personales de los funcionarios son encriptados con AES-256.

¿Quieres consultar la asistencia del día de hoy?";
        }

        // BURBUJA 9: Préstamo de expedientes
        if (strpos($mensajeLower, 'préstamo') !== false || strpos($mensajeLower, 'prestamo') !== false || strpos($mensajeLower, 'expediente') !== false) {
            return "Préstamo de expedientes

El Secretario puede registrar el préstamo de un expediente de la siguiente manera:

1. Registra al solicitante, el motivo del préstamo y la fecha de retorno.
2. El sistema genera una constancia digital.
3. Si la devolución excede las 72 horas, el sistema genera una alerta automática.
4. Al registrar la devolución, el estado del expediente se actualiza a DEVUELTO.

Los datos personales del solicitante son encriptados con AES-256.

¿Quieres registrar un préstamo?";
        }

        // BURBUJA 10: Chatbot
        if (strpos($mensajeLower, 'chatbot') !== false || strpos($mensajeLower, 'asistente') !== false || strpos($mensajeLower, 'búsqueda semántica') !== false) {
            return "Chatbot SIGPAZ

El chatbot de SIGPAZ ofrece las siguientes funcionalidades:
- Procesa las consultas de los usuarios mediante búsqueda semántica.
- Puede generar códigos OTP maestro, pero solo el Juez de Paz puede solicitarlos.
- Las conversaciones son encriptadas con AES-256.
- Los usuarios pueden calificar las respuestas para mejorar la base de conocimiento.

¿En qué puedo ayudarte hoy?";
        }

        // BURBUJA 11: Usuarios y roles
        if (strpos($mensajeLower, 'usuario') !== false || strpos($mensajeLower, 'rol') !== false || strpos($mensajeLower, 'permiso') !== false) {
            return "Gestión de usuarios y roles

El Juez de Paz es el encargado de administrar los usuarios del sistema.

Las funciones disponibles son:
- Crear nuevos usuarios.
- Editar datos de usuarios existentes.
- Eliminar usuarios inactivos.
- Asignar roles a los usuarios.

Los roles disponibles son:
- Juez de Paz.
- Secretario.
- Alguacil.

El sistema utiliza control de acceso basado en roles (RBAC). Los datos personales de los usuarios son encriptados con AES-256.

¿Necesitas gestionar usuarios o roles?";
        }

        // BURBUJA 12: Backup y restauración
        if (strpos($mensajeLower, 'backup') !== false || strpos($mensajeLower, 'copia de seguridad') !== false || strpos($mensajeLower, 'restaurar') !== false) {
            return "Backup y restauración

El Juez de Paz puede ejecutar un backup completo del sistema. El proceso incluye:
- Compresión de los datos.
- Encriptación AES-256 del archivo de respaldo.
- Almacenamiento en la nube institucional.

Para restaurar un backup:
1. Selecciona el backup deseado.
2. El sistema verifica la integridad del archivo mediante checksum SHA-256.
3. El sistema restaura la base de datos y los archivos.

Los backups automáticos están programados de forma diaria, semanal y mensual.

¿Necesitas ejecutar un backup o restaurar una copia de seguridad?";
        }

        // BURBUJA 13: Auditoría
        if (strpos($mensajeLower, 'auditoría') !== false || strpos($mensajeLower, 'auditoria') !== false || strpos($mensajeLower, 'logs') !== false) {
            return "Auditoría del sistema

El sistema permite consultar todos los logs de auditoría. Las opciones disponibles son:
- Consultar el listado completo de logs.
- Filtrar por usuario específico.
- Filtrar por rango de fechas.
- Filtrar por tipo de acción.
- Exportar los logs filtrados a formato Excel para análisis externo.

¿Quieres consultar la auditoría?";
        }

        // BURBUJA 14: Reportes
        if (strpos($mensajeLower, 'reporte') !== false || strpos($mensajeLower, 'exportar') !== false || strpos($mensajeLower, 'pdf') !== false || strpos($mensajeLower, 'excel') !== false) {
            return "Generación de reportes

El Secretario puede generar reportes estadísticos del sistema. Los reportes disponibles incluyen:
- Reporte de denuncias.
- Reporte de conciliaciones.
- Reporte de asistencia.

El proceso de generación es el siguiente:
1. Selecciona el tipo de reporte.
2. Aplica filtros avanzados, como rango de fechas.
3. El sistema genera el reporte en PDF y Excel con gráficos automáticos.
4. Puedes enviar el reporte por correo institucional.

¿Quieres generar un reporte?";
        }

        // BURBUJA 15: Dashboard
        if (strpos($mensajeLower, 'dashboard') !== false || strpos($mensajeLower, 'panel de control') !== false) {
            return "Dashboard de SIGPAZ

El dashboard es un panel de control personalizado según el rol del usuario. Los indicadores que se muestran en tiempo real son:
- Denuncias activas.
- Conciliaciones pendientes.
- Medidas cautelares vigentes.
- Tasa de resolución.

El dashboard también incluye una gráfica estadística actualizada automáticamente.

¿Qué indicador deseas consultar?";
        }

        // BURBUJA 16: Manuales
        if (strpos($mensajeLower, 'manual') !== false || strpos($mensajeLower, 'técnico') !== false || strpos($mensajeLower, 'tutorial') !== false) {
            return "Manuales disponibles en SIGPAZ

El sistema pone a disposición los siguientes manuales:
- Manual técnico: Accesible solo para el Juez de Paz.
- Manual de usuario: Accesible para todos los roles.

Puedes buscar contenido específico dentro de los manuales. Además, hay un video tutorial disponible en el módulo audiovisual.

¿Quieres consultar algún manual?";
        }

        // BURBUJA 17: Temas visuales
        if (strpos($mensajeLower, 'tema') !== false || strpos($mensajeLower, 'claro') !== false || strpos($mensajeLower, 'oscuro') !== false || strpos($mensajeLower, 'neón') !== false || strpos($mensajeLower, 'neon') !== false) {
            return "Personalización de temas

El sistema ofrece tres temas visuales predefinidos:
- Claro.
- Oscuro.
- Neón.

El cambio de tema se aplica en tiempo real en todas las pantallas del sistema, incluyendo la página de inicio, el inicio de sesión, la autenticación MFA, el dashboard y todos los módulos.

¿Cuál tema deseas activar?";
        }

        // BURBUJA 18: Sesión expiración
        if (strpos($mensajeLower, 'sesión') !== false || strpos($mensajeLower, 'expira') !== false || strpos($mensajeLower, '5 minutos') !== false) {
            return "Sesión en SIGPAZ

La sesión en SIGPAZ expira automáticamente cada 5 minutos por razones de seguridad.

Cuando la sesión expire, deberás autenticarte nuevamente mediante el proceso completo de MFA (usuario, contraseña y pregunta de seguridad).

Si estás en medio de una tarea importante, asegúrate de guardar tu trabajo antes de que la sesión expire.

¿Tienes alguna duda sobre la sesión?";
        }

        // Respuesta por defecto (general)
        return "Gracias por tu mensaje. Soy SIGPAZ, tu asistente virtual.

Puedo ayudarte con las siguientes áreas del sistema:

1. Inicio de sesión MFA y código maestro OTP.
2. Registro de personas.
3. Denuncias y expedientes.
4. Conciliaciones y fallos en equidad.
5. Medidas cautelares.
6. Notificaciones y citaciones.
7. Asistencia diaria.
8. Préstamo de expedientes.
9. Chatbot y búsqueda semántica.
10. Gestión de usuarios y roles.
11. Backup y restauración.
12. Auditoría.
13. Reportes.
14. Dashboard.
15. Manuales y video tutorial.
16. Personalización de temas.

¿En qué área necesitas asistencia?";
    }

    /**
     * Guardar mensaje en BD
     */
    protected function guardarMensaje(string $sesionId, ?int $usuarioId, string $remitente, string $contenido, ?int $tiempoMs = null): ChatbotMensaje
    {
        $conversacion = ChatbotConversacion::firstOrCreate(
            ['sesion_id' => $sesionId, 'estado' => 'activa'],
            ['usuario_id' => $usuarioId]
        );

        if ($usuarioId && !$conversacion->usuario_id) {
            $conversacion->update(['usuario_id' => $usuarioId]);
        }

        return ChatbotMensaje::create([
            'conversacion_id' => $conversacion->id,
            'remitente' => $remitente,
            'contenido' => $contenido,
            'tiempo_respuesta_ms' => $tiempoMs,
            'creado_en' => now()
        ]);
    }

    /**
     * Guardar en caché
     */
    protected function guardarEnCache(string $pregunta, string $respuesta): void
    {
        $hash = md5(strtolower(trim($pregunta)));

        ChatbotCacheSemantico::updateOrCreate(
            ['hash_consulta' => $hash],
            [
                'texto_consulta' => $pregunta,
                'texto_respuesta' => $respuesta,
                'expira_en' => now()->addDays(7)
            ]
        );
    }

    /**
     * Obtener historial de conversación
     */
    public function obtenerHistorial(string $sesionId, ?int $limite = 50): array
    {
        $conversacion = ChatbotConversacion::where('sesion_id', $sesionId)
            ->with(['mensajes' => function($q) use ($limite) {
                $q->latest('creado_en')->limit($limite)->orderBy('creado_en', 'asc');
            }])
            ->first();

        if (!$conversacion) {
            return [];
        }

        return $conversacion->mensajes->map(function($msg) {
            return [
                'id' => $msg->id,
                'remitente' => $msg->remitente,
                'contenido' => $msg->contenido,
                'fecha' => $msg->creado_en->format('H:i'),
                'fecha_completa' => $msg->creado_en->toISOString()
            ];
        })->toArray();
    }

    /**
     * Calificar respuesta
     */
    public function calificarRespuesta(int $mensajeId, int $usuarioId, int $puntuacion, ?bool $fueUtil, ?string $comentario): void
    {
        ChatbotCalificacione::create([
            'mensaje_id' => $mensajeId,
            'usuario_id' => $usuarioId,
            'puntuacion' => $puntuacion,
            'fue_util' => $fueUtil ? DB::raw('true') : DB::raw('false'),
            'comentario' => $comentario,
            'creado_en' => now()
        ]);
    }

    /**
     * Limpiar historial
     */
    public function limpiarHistorial(string $sesionId): void
    {
        ChatbotConversacion::where('sesion_id', $sesionId)
            ->update(['estado' => 'archivada']);
    }

    /**
     * Probar la conexión con la API de Gemini
     */
    public function probarApiGemini(): array
    {
        $resultado = [
            'exito' => false,
            'mensaje' => '',
            'detalles' => [],
            'configuracion' => [
                'api_key_configurada' => !empty($this->apiKey),
                'api_key_preview' => !empty($this->apiKey) ? substr($this->apiKey, 0, 10) . '...' : 'No configurada',
                'api_url' => $this->apiUrl,
                'environment' => app()->environment()
            ]
        ];

        if (empty($this->apiKey)) {
            $resultado['mensaje'] = '❌ GEMINI_API_KEY no está configurada';
            $resultado['detalles'][] = 'Verifica tu archivo .env y asegúrate de tener: GEMINI_API_KEY=tu_api_key';
            $resultado['detalles'][] = 'Puedes obtener una API key en: https://aistudio.google.com/app/apikey';
            return $resultado;
        }

        $mensajePrueba = "Responde solo con 'OK' si funcionas correctamente";

        try {
            $inicio = microtime(true);

            $response = Http::timeout(15)->post($this->apiUrl . '?key=' . $this->apiKey, [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $mensajePrueba]
                        ]
                    ]
                ],
                'generationConfig' => [
                    'temperature' => 0.1,
                    'maxOutputTokens' => 10,
                ]
            ]);

            $tiempoRespuesta = (microtime(true) - $inicio) * 1000;
            $resultado['detalles'][] = "Tiempo de respuesta: " . round($tiempoRespuesta) . "ms";
            $resultado['detalles'][] = "Status HTTP: " . $response->status();

            if ($response->successful()) {
                $data = $response->json();
                $respuestaTexto = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';

                $resultado['exito'] = true;
                $resultado['mensaje'] = '✅ API de Gemini funcionando correctamente';
                $resultado['detalles'][] = "Respuesta de prueba: '{$respuestaTexto}'";
                $resultado['detalles'][] = "Modelo usado: gemini-2.5-flash";
            } else {
                $resultado['mensaje'] = '❌ Error en la respuesta de Gemini';
                $errorData = $response->json();

                if (isset($errorData['error'])) {
                    $codigo = $errorData['error']['code'] ?? 'desconocido';
                    $mensajeError = $errorData['error']['message'] ?? 'Error sin descripción';
                    $resultado['detalles'][] = "Código de error: {$codigo}";
                    $resultado['detalles'][] = "Mensaje: {$mensajeError}";
                }
            }

        } catch (\Exception $e) {
            $resultado['mensaje'] = '❌ Excepción inesperada';
            $resultado['detalles'][] = "Error: " . $e->getMessage();
        }

        return $resultado;
    }

    /**
     * Probar el servicio completo del chatbot
     */
    public function probarServicioCompleto(): array
    {
        $resultado = [
            'exito' => false,
            'pruebas' => [],
            'resumen' => []
        ];

        $resultado['pruebas']['api_key'] = [
            'nombre' => 'Configuración API Key',
            'exito' => !empty($this->apiKey),
            'detalle' => empty($this->apiKey) ? 'No configurada' : 'Configurada correctamente'
        ];

        $apiTest = $this->probarApiGemini();
        $resultado['pruebas']['gemini'] = [
            'nombre' => 'Conexión a Gemini API',
            'exito' => $apiTest['exito'],
            'detalle' => $apiTest['mensaje'],
            'detalles_extra' => $apiTest['detalles'] ?? []
        ];

        try {
            $tables = ['chatbot_conversaciones', 'chatbot_mensajes', 'chatbot_base_conocimientos', 'chatbot_cache_semantico'];
            $missingTables = [];

            foreach ($tables as $table) {
                if (!\Schema::hasTable($table)) {
                    $missingTables[] = $table;
                }
            }

            $resultado['pruebas']['database'] = [
                'nombre' => 'Base de Datos',
                'exito' => empty($missingTables),
                'detalle' => empty($missingTables) ? 'Tablas del chatbot encontradas' : 'Faltan tablas: ' . implode(', ', $missingTables)
            ];
        } catch (\Exception $e) {
            $resultado['pruebas']['database'] = [
                'nombre' => 'Base de Datos',
                'exito' => false,
                'detalle' => 'Error: ' . $e->getMessage()
            ];
        }

        try {
            $mensajePrueba = "¿Cómo registro una denuncia en SIGPAZ?";
            $respuesta = $this->procesarMensaje($mensajePrueba, null, 'test_' . uniqid());
            $resultado['pruebas']['procesamiento'] = [
                'nombre' => 'Procesamiento de mensaje',
                'exito' => true,
                'detalle' => 'Fuente: ' . ($respuesta['fuente'] ?? 'desconocida'),
                'respuesta_preview' => substr($respuesta['respuesta'] ?? '', 0, 100)
            ];
        } catch (\Exception $e) {
            $resultado['pruebas']['procesamiento'] = [
                'nombre' => 'Procesamiento de mensaje',
                'exito' => false,
                'detalle' => 'Error: ' . $e->getMessage()
            ];
        }

        $exitos = collect($resultado['pruebas'])->where('exito', true)->count();
        $total = count($resultado['pruebas']);
        $resultado['exito'] = $exitos === $total;
        $resultado['resumen'] = [
            'exitosas' => $exitos,
            'fallidas' => $total - $exitos,
            'total' => $total,
            'porcentaje' => round(($exitos / $total) * 100, 2)
        ];

        return $resultado;
    }

    /**
     * Prueba rápida de solo la API (para consola)
     */
    public function testRapidoApi(): string
    {
        $resultado = $this->probarApiGemini();

        $output = "=== PRUEBA API GEMINI ===\n";
        $output .= $resultado['mensaje'] . "\n\n";

        foreach ($resultado['detalles'] as $detalle) {
            $output .= "• " . $detalle . "\n";
        }

        return $output;
    }
}
