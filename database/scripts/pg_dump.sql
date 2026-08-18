--
-- PostgreSQL database dump
--

\restrict uauvCz0HLNbSBNGjb3zSbOpIcwGCWXqK5mVXIow4iMdps0XIJnXLhwBO4f1LFWp

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-12 04:58:48

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 17401)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 6070 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- TOC entry 3 (class 3079 OID 106836)
-- Name: vector; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;


--
-- TOC entry 6071 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION vector; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION vector IS 'vector data type and ivfflat and hnsw access methods';


--
-- TOC entry 364 (class 1255 OID 107299)
-- Name: buscar_semanticamente(text, integer, numeric); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.buscar_semanticamente(texto_busqueda text, limite integer DEFAULT 5, umbral numeric DEFAULT 0.7) RETURNS TABLE(id bigint, pregunta text, respuesta text, similitud numeric, categoria character varying)
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_embedding VECTOR(1536);
BEGIN
    -- Esto se llena con el embedding real desde el servicio de IA
    -- Por ahora retorna búsqueda por texto
    RETURN QUERY
    SELECT 
        kb.id,
        kb.pregunta,
        kb.respuesta,
        1.0 as similitud,
        kb.categoria
    FROM chatbot_base_conocimiento kb
    WHERE kb.activo = true
      AND kb.pregunta ILIKE '%' || texto_busqueda || '%'
    LIMIT limite;
END;
$$;


ALTER FUNCTION public.buscar_semanticamente(texto_busqueda text, limite integer, umbral numeric) OWNER TO postgres;

--
-- TOC entry 497 (class 1255 OID 17439)
-- Name: fn_actualizar_estado_conciliacion(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_actualizar_estado_conciliacion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_total_votos INTEGER;
    v_nuevo_estado VARCHAR(20);
    v_resultado_final VARCHAR(20);
    v_votos_favor INTEGER;
    v_votos_contra INTEGER;
BEGIN
    -- Obtener total de votos después de la inserción
    SELECT COUNT(*) INTO v_total_votos
    FROM votoconciliacion
    WHERE conciliacion_id = NEW.conciliacion_id;
    
    -- Obtener votos a favor y en contra
    SELECT 
        COUNT(*) FILTER (WHERE voto = true),
        COUNT(*) FILTER (WHERE voto = false)
    INTO v_votos_favor, v_votos_contra
    FROM votoconciliacion
    WHERE conciliacion_id = NEW.conciliacion_id;
    
    -- Determinar nuevo estado según reglas de negocio:
    -- 1-2: INCOMPLETA
    -- 3: EN_PROCESO
    -- 4-6: COMPLETA
    
    IF v_total_votos BETWEEN 4 AND 6 THEN
        v_nuevo_estado := 'COMPLETA';
        -- Determinar resultado
        IF v_votos_favor > v_votos_contra THEN
            v_resultado_final := 'APROBADA';
        ELSIF v_votos_contra > v_votos_favor THEN
            v_resultado_final := 'RECHAZADA';
        ELSE
            v_resultado_final := 'EMPATE';
        END IF;
    ELSIF v_total_votos = 3 THEN
        v_nuevo_estado := 'EN_PROCESO';
        v_resultado_final := NULL;
    ELSIF v_total_votos BETWEEN 1 AND 2 THEN
        v_nuevo_estado := 'INCOMPLETA';
        v_resultado_final := NULL;
    END IF;
    
    -- Actualizar la conciliación (SIN fecha_conclusion)
    UPDATE conciliacion 
    SET 
        estado = v_nuevo_estado,
        resultado_final = v_resultado_final,
        fecha_actualizacion = CURRENT_TIMESTAMP
    WHERE conciliacion_id = NEW.conciliacion_id;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_actualizar_estado_conciliacion() OWNER TO postgres;

--
-- TOC entry 328 (class 1255 OID 17440)
-- Name: fn_actualizar_timestamp(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_actualizar_timestamp() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.fecha_actualizacion := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_actualizar_timestamp() OWNER TO postgres;

--
-- TOC entry 475 (class 1255 OID 107286)
-- Name: fn_actualizar_timestamp_chatbot(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_actualizar_timestamp_chatbot() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.actualizado_en = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_actualizar_timestamp_chatbot() OWNER TO postgres;

--
-- TOC entry 373 (class 1255 OID 107293)
-- Name: fn_auditar_base_conocimiento(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_auditar_base_conocimiento() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_transaccion_id UUID;
    v_usuario_id INTEGER;
BEGIN
    v_transaccion_id := gen_random_uuid();
    
    -- Obtener usuario de sesión de forma segura
    BEGIN
        v_usuario_id := current_setting('app.usuario_id', TRUE)::INT;
    EXCEPTION WHEN OTHERS THEN
        v_usuario_id := 0;
    END;
    
    IF TG_OP = 'INSERT' THEN
        INSERT INTO logauditoria (
            usuario_id, accion, tabla_afectada, registro_id, fecha,
            descripcion, ip_origen, user_agent, datos_nuevos, nivel, transaccion_id, esquema
        ) VALUES (
            COALESCE(v_usuario_id, NEW.creado_por),
            'CHAT_KB_CREAR',
            'chatbot_base_conocimiento',
            NEW.id,
            CURRENT_TIMESTAMP,
            'Nueva entrada en base de conocimiento del chatbot',
            inet_client_addr(),
            current_setting('app.user_agent', TRUE),
            jsonb_build_object('pregunta', NEW.pregunta, 'intencion', NEW.intencion, 'categoria', NEW.categoria),
            'INFO',
            v_transaccion_id,
            'chatbot'
        );
        
    ELSIF TG_OP = 'UPDATE' AND 
          (NEW.pregunta != OLD.pregunta OR NEW.respuesta != OLD.respuesta) THEN
        INSERT INTO logauditoria (
            usuario_id, accion, tabla_afectada, registro_id, fecha,
            descripcion, ip_origen, user_agent, datos_anteriores, datos_nuevos, nivel, transaccion_id, esquema
        ) VALUES (
            COALESCE(v_usuario_id, OLD.created_by),
            'CHAT_KB_ACTUALIZAR',
            'chatbot_base_conocimiento',
            NEW.id,
            CURRENT_TIMESTAMP,
            'Actualización de base de conocimiento',
            inet_client_addr(),
            current_setting('app.user_agent', TRUE),
            jsonb_build_object('pregunta_anterior', OLD.pregunta),
            jsonb_build_object('pregunta_nueva', NEW.pregunta),
            'INFO',
            v_transaccion_id,
            'chatbot'
        );
        
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO logauditoria (
            usuario_id, accion, tabla_afectada, registro_id, fecha,
            descripcion, ip_origen, user_agent, datos_anteriores, nivel, transaccion_id, esquema
        ) VALUES (
            COALESCE(v_usuario_id, 1),
            'CHAT_KB_ELIMINAR',
            'chatbot_base_conocimiento',
            OLD.id,
            CURRENT_TIMESTAMP,
            'Eliminación de base de conocimiento',
            inet_client_addr(),
            current_setting('app.user_agent', TRUE),
            jsonb_build_object('pregunta', OLD.pregunta, 'intencion', OLD.intencion),
            'ADVERTENCIA',
            v_transaccion_id,
            'chatbot'
        );
    END IF;
    
    RETURN COALESCE(NEW, OLD);
END;
$$;


ALTER FUNCTION public.fn_auditar_base_conocimiento() OWNER TO postgres;

--
-- TOC entry 467 (class 1255 OID 107297)
-- Name: fn_auditar_calificacion_chat(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_auditar_calificacion_chat() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_transaccion_id UUID;
BEGIN
    v_transaccion_id := gen_random_uuid();
    
    INSERT INTO logauditoria (
        usuario_id, 
        accion, 
        tabla_afectada, 
        registro_id, 
        fecha,
        descripcion, 
        ip_origen, 
        user_agent, 
        datos_nuevos, 
        nivel, 
        transaccion_id, 
        esquema
    ) VALUES (
        NEW.usuario_id,
        'CHAT_FEEDBACK',
        'chatbot_calificaciones',
        NEW.id,
        CURRENT_TIMESTAMP,
        CASE WHEN NEW.fue_util THEN 'Usuario calificó respuesta como útil' ELSE 'Usuario calificó respuesta como no útil' END,
        inet_client_addr(),
        current_setting('app.user_agent', TRUE),
        jsonb_build_object('puntuacion', NEW.puntuacion, 'fue_util', NEW.fue_util),
        'INFO',
        v_transaccion_id,
        'chatbot'
    );
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_auditar_calificacion_chat() OWNER TO postgres;

--
-- TOC entry 347 (class 1255 OID 107291)
-- Name: fn_auditar_codigo_maestro_chat(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_auditar_codigo_maestro_chat() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_usuario_id INTEGER;
    v_transaccion_id UUID;
BEGIN
    v_transaccion_id := gen_random_uuid();
    
    IF NEW.remitente = 'usuario' AND 
       (NEW.contenido ILIKE '%código maestro%' OR 
        NEW.contenido ILIKE '%codigo maestro%' OR 
        NEW.contenido ILIKE '%generar código%' OR
        NEW.contenido ILIKE '%otp%') THEN
       
        BEGIN
            v_usuario_id := current_setting('app.usuario_id', TRUE)::INT;
        EXCEPTION WHEN OTHERS THEN
            v_usuario_id := NULL;
        END;
        
        IF v_usuario_id IS NULL THEN
            BEGIN
                SELECT COALESCE(usuario_id, 0) INTO v_usuario_id
                FROM chatbot_conversaciones WHERE id = NEW.conversacion_id;
            EXCEPTION WHEN OTHERS THEN
                v_usuario_id := 0;
            END;
        END IF;
        
        INSERT INTO logauditoria (
            usuario_id, accion, tabla_afectada, registro_id, fecha,
            descripcion, ip_origen, user_agent, datos_nuevos, nivel, transaccion_id, esquema
        ) VALUES (
            COALESCE(v_usuario_id, 0),
            'CHAT_CODE_REQUEST',
            'chatbot_mensajes',
            NEW.id,
            CURRENT_TIMESTAMP,
            'Usuario solicitó Código Maestro a través del chat',
            inet_client_addr(),
            current_setting('app.user_agent', TRUE),
            jsonb_build_object('contenido', NEW.contenido, 'conversacion_id', NEW.conversacion_id),
            'WARNING',
            v_transaccion_id,
            'chatbot'
        );
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_auditar_codigo_maestro_chat() OWNER TO postgres;

--
-- TOC entry 401 (class 1255 OID 107289)
-- Name: fn_auditar_mensaje_chatbot(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_auditar_mensaje_chatbot() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_usuario_id INTEGER;
    v_transaccion_id UUID;
BEGIN
    v_transaccion_id := gen_random_uuid();
    
    -- Obtener usuario de la sesión de forma segura
    BEGIN
        v_usuario_id := current_setting('app.usuario_id', TRUE)::INT;
    EXCEPTION WHEN OTHERS THEN
        v_usuario_id := NULL;
    END;
    
    IF v_usuario_id IS NULL THEN
        BEGIN
            SELECT COALESCE(usuario_id, 0) INTO v_usuario_id
            FROM chatbot_conversaciones 
            WHERE id = NEW.conversacion_id;
        EXCEPTION WHEN OTHERS THEN
            v_usuario_id := 0;
        END;
    END IF;
    
    v_usuario_id := COALESCE(v_usuario_id, 0);
    
    IF v_usuario_id > 0 THEN
        INSERT INTO logauditoria (
            usuario_id,
            accion,
            tabla_afectada,
            registro_id,
            fecha,
            descripcion,
            ip_origen,
            user_agent,
            datos_nuevos,
            nivel,
            transaccion_id,
            esquema
        ) VALUES (
            v_usuario_id,
            CASE NEW.remitente
                WHEN 'usuario' THEN 'CHAT_USER_MSG'
                WHEN 'asistente' THEN 'CHAT_BOT_MSG'
                ELSE 'CHAT_SYSTEM_MSG'
            END,
            'chatbot_mensajes',
            NEW.id,
            CURRENT_TIMESTAMP,
            CASE NEW.remitente
                WHEN 'usuario' THEN 'Usuario envió mensaje al chat'
                WHEN 'asistente' THEN 'Chatbot respondió al usuario'
                ELSE 'Mensaje del sistema'
            END,
            inet_client_addr(),
            current_setting('app.user_agent', TRUE),
            jsonb_build_object(
                'conversacion_id', NEW.conversacion_id,
                'remitente', NEW.remitente,
                'vista_previa', LEFT(NEW.contenido, 200),
                'longitud', LENGTH(NEW.contenido),
                'tokens', NEW.tokens_usados,
                'tiempo_respuesta_ms', NEW.tiempo_respuesta_ms
            ),
            CASE NEW.remitente WHEN 'usuario' THEN 'INFO' ELSE 'DEBUG' END,
            v_transaccion_id,
            'chatbot'
        );
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_auditar_mensaje_chatbot() OWNER TO postgres;

--
-- TOC entry 417 (class 1255 OID 17441)
-- Name: fn_cifrar_dato(text, character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_cifrar_dato(p_texto text, p_tipo character varying DEFAULT 'general'::character varying) RETURNS bytea
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_clave TEXT;
BEGIN
    IF p_texto IS NULL THEN
        RETURN NULL;
    END IF;
    
    BEGIN
        v_clave := current_setting('app.clave_cifrado_' || p_tipo, TRUE);
    EXCEPTION WHEN OTHERS THEN
        v_clave := NULL;
    END;
    
    IF v_clave IS NULL THEN
        BEGIN
            v_clave := current_setting('app.clave_cifrado', TRUE);
        EXCEPTION WHEN OTHERS THEN
            RAISE EXCEPTION 'Clave de cifrado no configurada';
        END;
    END IF;
    
    RETURN pgp_sym_encrypt(
        p_texto,
        v_clave,
        'compress-algo=1, cipher-algo=aes256'
    );
END;
$$;


ALTER FUNCTION public.fn_cifrar_dato(p_texto text, p_tipo character varying) OWNER TO postgres;

--
-- TOC entry 380 (class 1255 OID 17442)
-- Name: fn_descifrar_dato(bytea, character varying); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_descifrar_dato(p_cifrado bytea, p_tipo character varying DEFAULT 'general'::character varying) RETURNS text
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_clave TEXT;
BEGIN
    IF p_cifrado IS NULL THEN
        RETURN NULL;
    END IF;
    
    BEGIN
        v_clave := current_setting('app.clave_cifrado_' || p_tipo, TRUE);
    EXCEPTION WHEN OTHERS THEN
        v_clave := NULL;
    END;
    
    IF v_clave IS NULL THEN
        BEGIN
            v_clave := current_setting('app.clave_cifrado', TRUE);
        EXCEPTION WHEN OTHERS THEN
            RAISE EXCEPTION 'Clave de cifrado no configurada';
        END;
    END IF;
    
    RETURN pgp_sym_decrypt(
        p_cifrado,
        v_clave,
        'compress-algo=1, cipher-algo=aes256'
    );
END;
$$;


ALTER FUNCTION public.fn_descifrar_dato(p_cifrado bytea, p_tipo character varying) OWNER TO postgres;

--
-- TOC entry 406 (class 1255 OID 17443)
-- Name: fn_generar_codigo_qr(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_generar_codigo_qr() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_datos_qr TEXT;
BEGIN
    IF NEW.codigo_qr_cifrado IS NULL THEN
        v_datos_qr := format('JUSTICIA_PAZ|DENUNCIA:%s|EXP:%s|FECHA:%s|PERSONA:%s',
                            NEW.denuncia_id,
                            COALESCE(NEW.numero_expediente, 'SIN-EXP'),
                            NEW.fecha_creacion,
                            NEW.persona_id);
        
        NEW.codigo_qr_cifrado := pgp_sym_encrypt(
            v_datos_qr,
            'clave_temporal',
            'compress-algo=1, cipher-algo=aes256'
        );
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_generar_codigo_qr() OWNER TO postgres;

--
-- TOC entry 375 (class 1255 OID 17444)
-- Name: fn_historial_denuncia(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_historial_denuncia() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
DECLARE
    v_version INT;
BEGIN
    SELECT COALESCE(MAX(version), 0) + 1 INTO v_version
    FROM DenunciaHistorial
    WHERE denuncia_id = NEW.denuncia_id;
    
    INSERT INTO DenunciaHistorial (
        denuncia_id,
        estado_anterior,
        estado_actual,
        version,
        campo_modificado,
        valor_anterior,
        valor_nuevo,
        tipo_cambio,
        usuario_cambio_id,
        observaciones
    ) VALUES (
        NEW.denuncia_id,
        CASE WHEN TG_OP = 'UPDATE' THEN to_jsonb(OLD) ELSE NULL END,
        to_jsonb(NEW),
        v_version,
        CASE 
            WHEN TG_OP = 'UPDATE' AND NEW.estado_denuncia_id != OLD.estado_denuncia_id THEN 'estado_denuncia_id'
            WHEN TG_OP = 'UPDATE' AND NEW.descripcion != OLD.descripcion THEN 'descripcion'
            ELSE NULL
        END,
        CASE 
            WHEN TG_OP = 'UPDATE' AND NEW.estado_denuncia_id != OLD.estado_denuncia_id THEN OLD.estado_denuncia_id::TEXT
            WHEN TG_OP = 'UPDATE' AND NEW.descripcion != OLD.descripcion THEN OLD.descripcion
            ELSE NULL
        END,
        CASE 
            WHEN TG_OP = 'UPDATE' AND NEW.estado_denuncia_id != OLD.estado_denuncia_id THEN NEW.estado_denuncia_id::TEXT
            WHEN TG_OP = 'UPDATE' AND NEW.descripcion != OLD.descripcion THEN NEW.descripcion
            ELSE NULL
        END,
        CASE TG_OP
            WHEN 'INSERT' THEN 'CREACION'
            WHEN 'UPDATE' THEN 'MODIFICACION'
            ELSE 'ELIMINACION'
        END,
        current_setting('app.usuario_id')::INT,
        CASE TG_OP  -- 👈 AÑADIR ESTO
            WHEN 'INSERT' THEN 'Denuncia creada vía trigger'
            WHEN 'UPDATE' THEN 'Denuncia modificada vía trigger'
            ELSE 'Cambio en denuncia vía trigger'
        END
    );
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_historial_denuncia() OWNER TO postgres;

--
-- TOC entry 349 (class 1255 OID 17445)
-- Name: fn_historial_estado(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_historial_estado() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
    IF TG_OP = 'UPDATE' AND NEW.estado_denuncia_id != OLD.estado_denuncia_id THEN
        INSERT INTO EstadoHistorial (
            entidad_tipo,
            entidad_id,
            estado_anterior,
            estado_nuevo,
            motivo_cambio,
            usuario_transicion_id
        ) VALUES (
            'DENUNCIA',
            NEW.denuncia_id,
            (SELECT nombre FROM EstadoDenuncia WHERE estado_denuncia_id = OLD.estado_denuncia_id),
            (SELECT nombre FROM EstadoDenuncia WHERE estado_denuncia_id = NEW.estado_denuncia_id),
            'Cambio de estado por sistema',  -- 👈 CAMBIADO
            current_setting('app.usuario_id')::INT
        );
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_historial_estado() OWNER TO postgres;

--
-- TOC entry 382 (class 1255 OID 17446)
-- Name: fn_historial_persona_completo(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_historial_persona_completo() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    INSERT INTO personahistorial (
        persona_id,
        snapshot_cifrado,
        version,
        tipo_cambio,
        fecha_cambio,
        usuario_cambio_id,
        motivo_cambio,
        ip_origen,
        campos_modificados
    ) VALUES (
        OLD.persona_id,
        convert_to(row_to_json(OLD)::TEXT, 'UTF8'),
        COALESCE((SELECT MAX(version) + 1 FROM personahistorial WHERE persona_id = OLD.persona_id), 1),
        'ELIMINACION',
        NOW(),
        1,
        'Eliminación física',
        '127.0.0.1'::inet,
        '{}'::TEXT[]
    );
    RETURN OLD;
END;
$$;


ALTER FUNCTION public.fn_historial_persona_completo() OWNER TO postgres;

--
-- TOC entry 477 (class 1255 OID 17447)
-- Name: fn_validar_asistencia(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_validar_asistencia() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    IF NEW.hora_salida IS NOT NULL AND NEW.hora_entrada IS NOT NULL THEN
        IF NEW.hora_salida <= NEW.hora_entrada THEN
            RAISE EXCEPTION 'La hora de salida debe ser posterior a la hora de entrada';
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_validar_asistencia() OWNER TO postgres;

--
-- TOC entry 372 (class 1255 OID 65748)
-- Name: fn_validar_asistencia_actualizado(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_validar_asistencia_actualizado() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Validar que hora_salida sea posterior a hora_entrada
    IF NEW.hora_salida IS NOT NULL AND NEW.hora_entrada IS NOT NULL THEN
        IF NEW.hora_salida <= NEW.hora_entrada THEN
            RAISE EXCEPTION 'La hora de salida debe ser posterior a la hora de entrada';
        END IF;
    END IF;
    
    -- Calcular horas trabajadas si tiene entrada y salida
    IF NEW.hora_entrada IS NOT NULL AND NEW.hora_salida IS NOT NULL THEN
        NEW.horas_trabajadas = EXTRACT(EPOCH FROM (NEW.hora_salida - NEW.hora_entrada)) / 3600;
    END IF;
    
    -- Establecer fecha_actualizacion
    NEW.fecha_actualizacion = CURRENT_TIMESTAMP;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_validar_asistencia_actualizado() OWNER TO postgres;

--
-- TOC entry 468 (class 1255 OID 17448)
-- Name: fn_validar_max_votos(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_validar_max_votos() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_total_votos INTEGER;
BEGIN
    -- Contar votos actuales de esta conciliación
    SELECT COUNT(*) INTO v_total_votos
    FROM votoconciliacion
    WHERE conciliacion_id = NEW.conciliacion_id;
    
    -- Si ya hay 6 votos, NO permitir el séptimo
    IF v_total_votos >= 6 THEN
        RAISE EXCEPTION 'Límite de votos alcanzado: La conciliación con ID % ya tiene 6 votos (máximo permitido)', 
            NEW.conciliacion_id;
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_validar_max_votos() OWNER TO postgres;

--
-- TOC entry 326 (class 1255 OID 17449)
-- Name: fn_validar_personal_activo(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_validar_personal_activo() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_activo BOOLEAN;
BEGIN
    -- Verificar si el personal está activo
    SELECT activo INTO v_activo
    FROM personal
    WHERE personal_id = NEW.personal_id;
    
    IF NOT v_activo THEN
        RAISE EXCEPTION 'El personal con ID % no está activo y no puede votar', NEW.personal_id;
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_validar_personal_activo() OWNER TO postgres;

--
-- TOC entry 387 (class 1255 OID 17450)
-- Name: fn_validar_prestamo(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.fn_validar_prestamo() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Validar fechas
    IF NEW.fecha_retorno_prevista IS NOT NULL AND NEW.fecha_prestamo IS NOT NULL THEN
        IF NEW.fecha_retorno_prevista < NEW.fecha_prestamo THEN
            RAISE EXCEPTION 'La fecha de retorno prevista no puede ser anterior a la fecha de prÃ©stamo';
        END IF;
    END IF;
    
    IF NEW.fecha_devolucion IS NOT NULL AND NEW.fecha_prestamo IS NOT NULL THEN
        IF NEW.fecha_devolucion < NEW.fecha_prestamo THEN
            RAISE EXCEPTION 'La fecha de devoluciÃ³n no puede ser anterior a la fecha de prÃ©stamo';
        END IF;
    END IF;
    
    -- Actualizar estado automÃ¡ticamente
    IF NEW.fecha_devolucion IS NOT NULL THEN
        NEW.estado := 'DEVUELTO';
    ELSIF NEW.fecha_retorno_prevista IS NOT NULL AND NEW.fecha_retorno_prevista < CURRENT_TIMESTAMP THEN
        NEW.estado := 'RETRASADO';
    ELSIF NEW.estado IS NULL THEN
        NEW.estado := 'ACTIVO';
    END IF;
    
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.fn_validar_prestamo() OWNER TO postgres;

--
-- TOC entry 484 (class 1255 OID 32829)
-- Name: limpiar_codigos_otp_expirados(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.limpiar_codigos_otp_expirados() RETURNS integer
    LANGUAGE plpgsql
    AS $$
DECLARE
    filas_afectadas INTEGER;
BEGIN
    UPDATE codigos_otp 
    SET activo = FALSE 
    WHERE activo = TRUE 
      AND expira_en < NOW();
    
    GET DIAGNOSTICS filas_afectadas = ROW_COUNT;
    RETURN filas_afectadas;
END;
$$;


ALTER FUNCTION public.limpiar_codigos_otp_expirados() OWNER TO postgres;

--
-- TOC entry 496 (class 1255 OID 32827)
-- Name: update_codigos_otp_updated_at(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_codigos_otp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_codigos_otp_updated_at() OWNER TO postgres;

--
-- TOC entry 441 (class 1255 OID 57546)
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_updated_at_column() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 305 (class 1259 OID 57453)
-- Name: alerta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alerta (
    alerta_id bigint NOT NULL,
    usuario_id integer NOT NULL,
    titulo character varying(200) NOT NULL,
    mensaje text NOT NULL,
    tipo_alerta character varying(20) DEFAULT 'info'::character varying NOT NULL,
    leida boolean DEFAULT false NOT NULL,
    leida_en timestamp with time zone,
    entidad_tipo character varying(50),
    entidad_id integer,
    accion_url text,
    accion_texto character varying(100),
    icono character varying(50),
    expira_en timestamp with time zone,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    creado_por integer,
    deleted_at timestamp without time zone,
    CONSTRAINT chk_alerta_tipo CHECK (((tipo_alerta)::text = ANY (ARRAY[('info'::character varying)::text, ('success'::character varying)::text, ('warning'::character varying)::text, ('error'::character varying)::text])))
);


ALTER TABLE public.alerta OWNER TO postgres;

--
-- TOC entry 306 (class 1259 OID 57468)
-- Name: alerta_alerta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alerta_alerta_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alerta_alerta_id_seq OWNER TO postgres;

--
-- TOC entry 6072 (class 0 OID 0)
-- Dependencies: 306
-- Name: alerta_alerta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alerta_alerta_id_seq OWNED BY public.alerta.alerta_id;


--
-- TOC entry 221 (class 1259 OID 17451)
-- Name: asistencia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asistencia (
    asistencia_id integer NOT NULL,
    personal_id integer NOT NULL,
    horario_id integer NOT NULL,
    fecha date NOT NULL,
    hora_entrada timestamp with time zone,
    hora_salida timestamp with time zone,
    estado_asistencia_id integer NOT NULL,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    entrada_tarde boolean DEFAULT false,
    salida_temprana boolean DEFAULT false,
    minutos_retraso integer DEFAULT 0,
    horas_trabajadas numeric(5,2) DEFAULT 0,
    fecha_actualizacion timestamp with time zone,
    usuario_registro_id integer
);


ALTER TABLE public.asistencia OWNER TO postgres;

--
-- TOC entry 6073 (class 0 OID 0)
-- Dependencies: 221
-- Name: TABLE asistencia; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.asistencia IS 'Registro de asistencia del personal';


--
-- TOC entry 6074 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN asistencia.entrada_tarde; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.asistencia.entrada_tarde IS 'Indica si la entrada fue después de la hora programada';


--
-- TOC entry 6075 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN asistencia.salida_temprana; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.asistencia.salida_temprana IS 'Indica si la salida fue antes de la hora programada';


--
-- TOC entry 6076 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN asistencia.minutos_retraso; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.asistencia.minutos_retraso IS 'Minutos de retraso en la entrada';


--
-- TOC entry 6077 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN asistencia.horas_trabajadas; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.asistencia.horas_trabajadas IS 'Total de horas trabajadas en el día';


--
-- TOC entry 6078 (class 0 OID 0)
-- Dependencies: 221
-- Name: COLUMN asistencia.usuario_registro_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.asistencia.usuario_registro_id IS 'Usuario que registró la marcación';


--
-- TOC entry 222 (class 1259 OID 17462)
-- Name: asistencia_asistencia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.asistencia ALTER COLUMN asistencia_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.asistencia_asistencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 303 (class 1259 OID 57425)
-- Name: backup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.backup (
    backup_id integer NOT NULL,
    fecha timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_id integer NOT NULL,
    ruta_archivo text,
    origen character varying(50),
    tamanio_mb numeric(10,2),
    descripcion text,
    estado character varying(20) DEFAULT 'COMPLETADO'::character varying,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    origen_nube character varying(50) DEFAULT 'local'::character varying,
    api_referencia text,
    encriptado boolean DEFAULT false,
    comprimido boolean DEFAULT true,
    integridad_verificada boolean DEFAULT false,
    ruta_personalizada text,
    solo_nube boolean DEFAULT false,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone,
    created_at timestamp with time zone
);


ALTER TABLE public.backup OWNER TO postgres;

--
-- TOC entry 304 (class 1259 OID 57441)
-- Name: backup_backup_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.backup_backup_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.backup_backup_id_seq OWNER TO postgres;

--
-- TOC entry 6079 (class 0 OID 0)
-- Dependencies: 304
-- Name: backup_backup_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.backup_backup_id_seq OWNED BY public.backup.backup_id;


--
-- TOC entry 223 (class 1259 OID 17474)
-- Name: cargo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargo (
    cargo_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.cargo OWNER TO postgres;

--
-- TOC entry 6080 (class 0 OID 0)
-- Dependencies: 223
-- Name: TABLE cargo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.cargo IS 'Cargos del personal judicial';


--
-- TOC entry 224 (class 1259 OID 17484)
-- Name: cargo_cargo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.cargo ALTER COLUMN cargo_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cargo_cargo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 315 (class 1259 OID 107213)
-- Name: chatbot_base_conocimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_base_conocimiento (
    id bigint NOT NULL,
    categoria character varying(100),
    intencion character varying(100),
    pregunta text NOT NULL,
    embedding_pregunta public.vector(1536),
    respuesta text NOT NULL,
    contexto jsonb DEFAULT '{}'::jsonb,
    puntaje_confianza numeric(3,2) DEFAULT 0,
    veces_usada integer DEFAULT 0,
    veces_util integer DEFAULT 0,
    veces_no_util integer DEFAULT 0,
    activo boolean DEFAULT true,
    creado_por integer,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    actualizado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.chatbot_base_conocimiento OWNER TO postgres;

--
-- TOC entry 314 (class 1259 OID 107212)
-- Name: chatbot_base_conocimiento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_base_conocimiento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_base_conocimiento_id_seq OWNER TO postgres;

--
-- TOC entry 6081 (class 0 OID 0)
-- Dependencies: 314
-- Name: chatbot_base_conocimiento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_base_conocimiento_id_seq OWNED BY public.chatbot_base_conocimiento.id;


--
-- TOC entry 319 (class 1259 OID 107267)
-- Name: chatbot_cache_semantico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_cache_semantico (
    id bigint NOT NULL,
    hash_consulta character varying(64) NOT NULL,
    texto_consulta text NOT NULL,
    embedding_consulta public.vector(1536),
    texto_respuesta text NOT NULL,
    umbral_similitud numeric(3,2) DEFAULT 0.85,
    veces_usado integer DEFAULT 0,
    expira_en timestamp without time zone,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.chatbot_cache_semantico OWNER TO postgres;

--
-- TOC entry 318 (class 1259 OID 107266)
-- Name: chatbot_cache_semantico_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_cache_semantico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_cache_semantico_id_seq OWNER TO postgres;

--
-- TOC entry 6082 (class 0 OID 0)
-- Dependencies: 318
-- Name: chatbot_cache_semantico_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_cache_semantico_id_seq OWNED BY public.chatbot_cache_semantico.id;


--
-- TOC entry 317 (class 1259 OID 107243)
-- Name: chatbot_calificaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_calificaciones (
    id bigint NOT NULL,
    mensaje_id bigint,
    usuario_id integer,
    puntuacion smallint,
    fue_util boolean,
    comentario text,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chatbot_calificaciones_puntuacion_check CHECK (((puntuacion >= 1) AND (puntuacion <= 5)))
);


ALTER TABLE public.chatbot_calificaciones OWNER TO postgres;

--
-- TOC entry 316 (class 1259 OID 107242)
-- Name: chatbot_calificaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_calificaciones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_calificaciones_id_seq OWNER TO postgres;

--
-- TOC entry 6083 (class 0 OID 0)
-- Dependencies: 316
-- Name: chatbot_calificaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_calificaciones_id_seq OWNED BY public.chatbot_calificaciones.id;


--
-- TOC entry 311 (class 1259 OID 107165)
-- Name: chatbot_conversaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_conversaciones (
    id bigint NOT NULL,
    sesion_id character varying(100) NOT NULL,
    usuario_id integer,
    titulo character varying(200),
    contexto jsonb DEFAULT '{}'::jsonb,
    estado character varying(20) DEFAULT 'activa'::character varying,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    actualizado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    eliminado_en timestamp without time zone
);


ALTER TABLE public.chatbot_conversaciones OWNER TO postgres;

--
-- TOC entry 310 (class 1259 OID 107164)
-- Name: chatbot_conversaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_conversaciones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_conversaciones_id_seq OWNER TO postgres;

--
-- TOC entry 6084 (class 0 OID 0)
-- Dependencies: 310
-- Name: chatbot_conversaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_conversaciones_id_seq OWNED BY public.chatbot_conversaciones.id;


--
-- TOC entry 313 (class 1259 OID 107188)
-- Name: chatbot_mensajes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatbot_mensajes (
    id bigint NOT NULL,
    conversacion_id bigint NOT NULL,
    remitente character varying(20) NOT NULL,
    contenido text NOT NULL,
    embedding_contenido public.vector(1536),
    tokens_usados integer DEFAULT 0,
    tiempo_respuesta_ms integer,
    metadatos jsonb DEFAULT '{}'::jsonb,
    creado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chatbot_mensajes_remitente_check CHECK (((remitente)::text = ANY ((ARRAY['usuario'::character varying, 'asistente'::character varying, 'sistema'::character varying])::text[])))
);


ALTER TABLE public.chatbot_mensajes OWNER TO postgres;

--
-- TOC entry 312 (class 1259 OID 107187)
-- Name: chatbot_mensajes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chatbot_mensajes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chatbot_mensajes_id_seq OWNER TO postgres;

--
-- TOC entry 6085 (class 0 OID 0)
-- Dependencies: 312
-- Name: chatbot_mensajes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chatbot_mensajes_id_seq OWNED BY public.chatbot_mensajes.id;


--
-- TOC entry 302 (class 1259 OID 32800)
-- Name: codigos_otp; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.codigos_otp (
    id bigint NOT NULL,
    codigo character varying(10) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true,
    generado_en timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    expira_en timestamp without time zone NOT NULL,
    puede_regenerar_en timestamp without time zone,
    usos_restantes integer DEFAULT 5,
    generado_por bigint,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.codigos_otp OWNER TO postgres;

--
-- TOC entry 6086 (class 0 OID 0)
-- Dependencies: 302
-- Name: TABLE codigos_otp; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.codigos_otp IS 'Almacena códigos OTP de seguridad para acciones críticas';


--
-- TOC entry 6087 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.codigo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.codigo IS 'Código de seguridad de 8-10 caracteres alfanuméricos';


--
-- TOC entry 6088 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.activo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.activo IS 'Indica si el código sigue vigente';


--
-- TOC entry 6089 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.generado_en; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.generado_en IS 'Fecha y hora de generación del código';


--
-- TOC entry 6090 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.expira_en; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.expira_en IS 'Fecha y hora de expiración';


--
-- TOC entry 6091 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.puede_regenerar_en; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.puede_regenerar_en IS 'Fecha a partir de la cual se puede regenerar un nuevo código';


--
-- TOC entry 6092 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.usos_restantes; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.usos_restantes IS 'Número de usos disponibles';


--
-- TOC entry 6093 (class 0 OID 0)
-- Dependencies: 302
-- Name: COLUMN codigos_otp.generado_por; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.codigos_otp.generado_por IS 'ID del usuario que generó el código';


--
-- TOC entry 301 (class 1259 OID 32799)
-- Name: codigos_otp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.codigos_otp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.codigos_otp_id_seq OWNER TO postgres;

--
-- TOC entry 6094 (class 0 OID 0)
-- Dependencies: 301
-- Name: codigos_otp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.codigos_otp_id_seq OWNED BY public.codigos_otp.id;


--
-- TOC entry 225 (class 1259 OID 17485)
-- Name: conciliacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conciliacion (
    conciliacion_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    personal_conciliador_id integer,
    fecha_audiencia timestamp with time zone,
    resultado text,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone,
    estado character varying(20) DEFAULT 'INCOMPLETA'::character varying NOT NULL,
    usuario_creacion_id integer,
    usuario_actualizacion_id integer,
    resultado_final character varying(20)
);


ALTER TABLE public.conciliacion OWNER TO postgres;

--
-- TOC entry 6095 (class 0 OID 0)
-- Dependencies: 225
-- Name: TABLE conciliacion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.conciliacion IS 'Audiencias de conciliaciÃ³n';


--
-- TOC entry 226 (class 1259 OID 17495)
-- Name: conciliacion_conciliacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.conciliacion ALTER COLUMN conciliacion_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.conciliacion_conciliacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 17496)
-- Name: configuracionhistorial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configuracionhistorial (
    historial_id integer NOT NULL,
    clave character varying(100) NOT NULL,
    valor_anterior text,
    valor_nuevo text NOT NULL,
    modulo character varying(50),
    seccion character varying(50),
    fecha_cambio timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_cambio_id integer,
    motivo_cambio text,
    tipo_config character varying(50) DEFAULT 'SISTEMA'::character varying
);


ALTER TABLE public.configuracionhistorial OWNER TO postgres;

--
-- TOC entry 6096 (class 0 OID 0)
-- Dependencies: 227
-- Name: TABLE configuracionhistorial; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.configuracionhistorial IS 'Historial de cambios de configuraciÃ³n';


--
-- TOC entry 228 (class 1259 OID 17506)
-- Name: configuracionhistorial_historial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.configuracionhistorial ALTER COLUMN historial_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.configuracionhistorial_historial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 229 (class 1259 OID 17507)
-- Name: denuncia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.denuncia (
    denuncia_id integer NOT NULL,
    codigo_externo character varying(50),
    numero_expediente character varying(50),
    persona_id integer NOT NULL,
    fecha_ingreso timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    tipo_conflicto_id integer,
    descripcion text,
    estado_denuncia_id integer,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_creacion_id integer,
    fecha_actualizacion timestamp with time zone,
    usuario_actualizacion_id integer,
    codigo_qr_cifrado bytea
);


ALTER TABLE public.denuncia OWNER TO postgres;

--
-- TOC entry 6097 (class 0 OID 0)
-- Dependencies: 229
-- Name: TABLE denuncia; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.denuncia IS 'Registro principal de denuncias judiciales';


--
-- TOC entry 230 (class 1259 OID 17516)
-- Name: denuncia_denuncia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.denuncia ALTER COLUMN denuncia_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.denuncia_denuncia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 231 (class 1259 OID 17517)
-- Name: denunciahistorial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.denunciahistorial (
    historial_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    estado_anterior jsonb,
    estado_actual jsonb,
    version integer NOT NULL,
    campo_modificado character varying(100),
    valor_anterior text,
    valor_nuevo text,
    tipo_cambio character varying(50),
    fecha_cambio timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_cambio_id integer,
    observaciones text
);


ALTER TABLE public.denunciahistorial OWNER TO postgres;

--
-- TOC entry 6098 (class 0 OID 0)
-- Dependencies: 231
-- Name: TABLE denunciahistorial; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.denunciahistorial IS 'Historial de cambios en denuncias';


--
-- TOC entry 232 (class 1259 OID 17526)
-- Name: denunciahistorial_historial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.denunciahistorial ALTER COLUMN historial_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.denunciahistorial_historial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 233 (class 1259 OID 17527)
-- Name: estadoasistencia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estadoasistencia (
    estado_asistencia_id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.estadoasistencia OWNER TO postgres;

--
-- TOC entry 6099 (class 0 OID 0)
-- Dependencies: 233
-- Name: TABLE estadoasistencia; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.estadoasistencia IS 'Estados de asistencia del personal';


--
-- TOC entry 234 (class 1259 OID 17535)
-- Name: estadoasistencia_estado_asistencia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.estadoasistencia ALTER COLUMN estado_asistencia_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estadoasistencia_estado_asistencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 235 (class 1259 OID 17536)
-- Name: estadocivil; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estadocivil (
    estado_civil_id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.estadocivil OWNER TO postgres;

--
-- TOC entry 6100 (class 0 OID 0)
-- Dependencies: 235
-- Name: TABLE estadocivil; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.estadocivil IS 'CatÃ¡logo de estados civiles';


--
-- TOC entry 236 (class 1259 OID 17544)
-- Name: estadocivil_estado_civil_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.estadocivil ALTER COLUMN estado_civil_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estadocivil_estado_civil_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 237 (class 1259 OID 17545)
-- Name: estadodenuncia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estadodenuncia (
    estado_denuncia_id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.estadodenuncia OWNER TO postgres;

--
-- TOC entry 6101 (class 0 OID 0)
-- Dependencies: 237
-- Name: TABLE estadodenuncia; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.estadodenuncia IS 'Estados procesales de una denuncia';


--
-- TOC entry 238 (class 1259 OID 17553)
-- Name: estadodenuncia_estado_denuncia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.estadodenuncia ALTER COLUMN estado_denuncia_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estadodenuncia_estado_denuncia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 239 (class 1259 OID 17554)
-- Name: estadohistorial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estadohistorial (
    historial_id integer NOT NULL,
    entidad_tipo character varying(50) NOT NULL,
    entidad_id integer NOT NULL,
    estado_anterior character varying(100),
    estado_nuevo character varying(100) NOT NULL,
    motivo_cambio text,
    observaciones text,
    fecha_transicion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_transicion_id integer
);


ALTER TABLE public.estadohistorial OWNER TO postgres;

--
-- TOC entry 6102 (class 0 OID 0)
-- Dependencies: 239
-- Name: TABLE estadohistorial; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.estadohistorial IS 'Historial de transiciones de estado';


--
-- TOC entry 240 (class 1259 OID 17564)
-- Name: estadohistorial_historial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.estadohistorial ALTER COLUMN historial_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estadohistorial_historial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 308 (class 1259 OID 57521)
-- Name: evidencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evidencias (
    id bigint NOT NULL,
    denuncia_id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    tipo character varying(50) NOT NULL,
    ruta text NOT NULL,
    mime_type character varying(100) NOT NULL,
    tamano integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.evidencias OWNER TO postgres;

--
-- TOC entry 307 (class 1259 OID 57520)
-- Name: evidencias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evidencias_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.evidencias_id_seq OWNER TO postgres;

--
-- TOC entry 6103 (class 0 OID 0)
-- Dependencies: 307
-- Name: evidencias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evidencias_id_seq OWNED BY public.evidencias.id;


--
-- TOC entry 241 (class 1259 OID 17565)
-- Name: genero; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genero (
    genero_id integer NOT NULL,
    nombre character varying(20) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.genero OWNER TO postgres;

--
-- TOC entry 6104 (class 0 OID 0)
-- Dependencies: 241
-- Name: TABLE genero; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.genero IS 'CatÃ¡logo de gÃ©neros';


--
-- TOC entry 242 (class 1259 OID 17573)
-- Name: genero_genero_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.genero ALTER COLUMN genero_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.genero_genero_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 243 (class 1259 OID 17574)
-- Name: horario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.horario (
    horario_id integer NOT NULL,
    fecha date NOT NULL,
    hora_inicio time without time zone NOT NULL,
    hora_fin time without time zone NOT NULL,
    descripcion text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    personal_id integer,
    tipo character varying(20) DEFAULT 'NORMAL'::character varying,
    observaciones text,
    repetir_semanal boolean DEFAULT false,
    usuario_creacion_id integer,
    usuario_actualizacion_id integer,
    fecha_actualizacion timestamp with time zone,
    CONSTRAINT chk_horario_horas CHECK ((hora_fin > hora_inicio))
);


ALTER TABLE public.horario OWNER TO postgres;

--
-- TOC entry 6105 (class 0 OID 0)
-- Dependencies: 243
-- Name: TABLE horario; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.horario IS 'Horarios laborales';


--
-- TOC entry 6106 (class 0 OID 0)
-- Dependencies: 243
-- Name: COLUMN horario.personal_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.horario.personal_id IS 'Personal asociado al horario';


--
-- TOC entry 6107 (class 0 OID 0)
-- Dependencies: 243
-- Name: COLUMN horario.tipo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.horario.tipo IS 'Tipo de horario: NORMAL, EXTRA, TURNO, FINESEMANA';


--
-- TOC entry 6108 (class 0 OID 0)
-- Dependencies: 243
-- Name: COLUMN horario.repetir_semanal; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.horario.repetir_semanal IS 'Indica si el horario se repite semanalmente';


--
-- TOC entry 244 (class 1259 OID 17585)
-- Name: horario_horario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.horario ALTER COLUMN horario_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.horario_horario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 245 (class 1259 OID 17586)
-- Name: institucion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.institucion (
    institucion_id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.institucion OWNER TO postgres;

--
-- TOC entry 6109 (class 0 OID 0)
-- Dependencies: 245
-- Name: TABLE institucion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.institucion IS 'Instituciones externas relacionadas';


--
-- TOC entry 246 (class 1259 OID 17596)
-- Name: institucion_institucion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.institucion ALTER COLUMN institucion_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.institucion_institucion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 247 (class 1259 OID 17597)
-- Name: involucrado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.involucrado (
    involucrado_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    persona_id integer NOT NULL,
    rol character varying(50) NOT NULL,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.involucrado OWNER TO postgres;

--
-- TOC entry 6110 (class 0 OID 0)
-- Dependencies: 247
-- Name: TABLE involucrado; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.involucrado IS 'Personas involucradas en una denuncia';


--
-- TOC entry 248 (class 1259 OID 17607)
-- Name: involucrado_involucrado_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.involucrado ALTER COLUMN involucrado_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.involucrado_involucrado_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 249 (class 1259 OID 17608)
-- Name: logauditoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logauditoria (
    log_id integer NOT NULL,
    usuario_id integer,
    accion character varying(20) NOT NULL,
    tabla_afectada character varying(100) NOT NULL,
    registro_id integer,
    fecha timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    descripcion text,
    ip_origen inet,
    user_agent text,
    transaccion_id uuid DEFAULT gen_random_uuid(),
    datos_anteriores jsonb,
    datos_nuevos jsonb,
    esquema character varying(50) DEFAULT 'public'::character varying,
    query text,
    nivel character varying(20) DEFAULT 'INFO'::character varying,
    CONSTRAINT chk_logauditoria_accion CHECK (((accion)::text = ANY ((ARRAY['INSERT'::character varying, 'UPDATE'::character varying, 'DELETE'::character varying, 'LOGIN'::character varying, 'LOGOUT'::character varying, 'SELECT'::character varying, 'EXECUTE'::character varying, 'LOGIN_FAILED'::character varying, 'CHAT_USER_MSG'::character varying, 'CHAT_BOT_MSG'::character varying, 'CHAT_SYSTEM_MSG'::character varying, 'CHAT_CODE_REQUEST'::character varying, 'CHAT_FEEDBACK'::character varying, 'CHAT_KB_CREATE'::character varying, 'CHAT_KB_UPDATE'::character varying, 'CHAT_KB_DELETE'::character varying, 'CHAT_CALIFICACION'::character varying])::text[]))),
    CONSTRAINT chk_logauditoria_nivel CHECK (((nivel)::text = ANY (ARRAY[('DEBUG'::character varying)::text, ('INFO'::character varying)::text, ('WARNING'::character varying)::text, ('ERROR'::character varying)::text, ('CRITICAL'::character varying)::text])))
);


ALTER TABLE public.logauditoria OWNER TO postgres;

--
-- TOC entry 6111 (class 0 OID 0)
-- Dependencies: 249
-- Name: TABLE logauditoria; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.logauditoria IS 'AuditorÃ­a completa del sistema';


--
-- TOC entry 250 (class 1259 OID 17622)
-- Name: logauditoria_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.logauditoria ALTER COLUMN log_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.logauditoria_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 251 (class 1259 OID 17623)
-- Name: medidacautelar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medidacautelar (
    medida_id integer NOT NULL,
    conciliacion_id integer NOT NULL,
    tipo_medida_id integer NOT NULL,
    fecha_inicio timestamp with time zone,
    duracion_dias integer,
    descripcion text,
    estado character varying(50),
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    observaciones text
);


ALTER TABLE public.medidacautelar OWNER TO postgres;

--
-- TOC entry 6112 (class 0 OID 0)
-- Dependencies: 251
-- Name: TABLE medidacautelar; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.medidacautelar IS 'Medidas cautelares ordenadas';


--
-- TOC entry 252 (class 1259 OID 17632)
-- Name: medidacautelar_medida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.medidacautelar ALTER COLUMN medida_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.medidacautelar_medida_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 253 (class 1259 OID 17633)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 17639)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 6113 (class 0 OID 0)
-- Dependencies: 254
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 255 (class 1259 OID 17640)
-- Name: notificacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notificacion (
    notificacion_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    tipo_notificacion_id integer NOT NULL,
    fecha_emision timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    destinatario character varying(150),
    medio character varying(100),
    contenido text,
    estado character varying(50),
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.notificacion OWNER TO postgres;

--
-- TOC entry 6114 (class 0 OID 0)
-- Dependencies: 255
-- Name: TABLE notificacion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.notificacion IS 'Notificaciones oficiales';


--
-- TOC entry 256 (class 1259 OID 17650)
-- Name: notificacion_notificacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.notificacion ALTER COLUMN notificacion_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.notificacion_notificacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 257 (class 1259 OID 17651)
-- Name: permiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permiso (
    permiso_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.permiso OWNER TO postgres;

--
-- TOC entry 6115 (class 0 OID 0)
-- Dependencies: 257
-- Name: TABLE permiso; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.permiso IS 'Permisos individuales del sistema';


--
-- TOC entry 258 (class 1259 OID 17659)
-- Name: permiso_permiso_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.permiso ALTER COLUMN permiso_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.permiso_permiso_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 259 (class 1259 OID 17660)
-- Name: persona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.persona (
    persona_id integer NOT NULL,
    tipo_documento_id integer NOT NULL,
    numero_documento character varying(30) NOT NULL,
    nombres character varying(100) NOT NULL,
    apellidos character varying(100) NOT NULL,
    fecha_nacimiento date,
    genero_id integer,
    nacionalidad character varying(50),
    lugar_nacimiento character varying(100),
    estado_civil_id integer,
    profesion_oficio character varying(100),
    ocupacion_actual character varying(100),
    direccion_cifrada bytea,
    municipio character varying(100),
    departamento character varying(100),
    codigo_postal character varying(10),
    telefono_fijo_cifrado bytea,
    telefono_movil_cifrado bytea,
    correo_electronico_cifrado bytea,
    correo_alternativo_cifrado bytea,
    nombre_contacto_emergencia character varying(100),
    telefono_emergencia_cifrado bytea,
    parentesco_emergencia character varying(50),
    tipo_vinculo_id integer,
    discapacidad text,
    observaciones text,
    foto_cifrada bytea,
    codigo_qr bytea,
    firma_digital bytea,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone,
    activo boolean DEFAULT false,
    fecha_activacion timestamp without time zone,
    activado_por integer
);


ALTER TABLE public.persona OWNER TO postgres;

--
-- TOC entry 6116 (class 0 OID 0)
-- Dependencies: 259
-- Name: TABLE persona; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.persona IS 'Registro central de personas del sistema';


--
-- TOC entry 260 (class 1259 OID 17672)
-- Name: persona_persona_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.persona ALTER COLUMN persona_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.persona_persona_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 261 (class 1259 OID 17673)
-- Name: personahistorial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personahistorial (
    historial_id integer NOT NULL,
    persona_id integer NOT NULL,
    snapshot_cifrado bytea NOT NULL,
    version integer NOT NULL,
    tipo_cambio character varying(20) NOT NULL,
    fecha_cambio timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_cambio_id integer,
    motivo_cambio character varying(200),
    ip_origen inet,
    campos_modificados text[],
    CONSTRAINT chk_personahistorial_tipo CHECK (((tipo_cambio)::text = ANY (ARRAY[('CREACION'::character varying)::text, ('ACTUALIZACION'::character varying)::text, ('ELIMINACION'::character varying)::text, ('CORRECCION'::character varying)::text])))
);


ALTER TABLE public.personahistorial OWNER TO postgres;

--
-- TOC entry 6117 (class 0 OID 0)
-- Dependencies: 261
-- Name: TABLE personahistorial; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.personahistorial IS 'Historial versionado de personas';


--
-- TOC entry 262 (class 1259 OID 17685)
-- Name: personahistorial_historial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.personahistorial ALTER COLUMN historial_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.personahistorial_historial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 263 (class 1259 OID 17686)
-- Name: personal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal (
    personal_id integer NOT NULL,
    persona_id integer NOT NULL,
    cargo_id integer NOT NULL,
    fecha_ingreso date NOT NULL,
    fecha_egreso date,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_creacion_id integer,
    fecha_actualizacion timestamp with time zone,
    usuario_actualizacion_id integer,
    activo boolean DEFAULT true,
    fuente_registro character varying(50) DEFAULT 'SISTEMA'::character varying
);


ALTER TABLE public.personal OWNER TO postgres;

--
-- TOC entry 6118 (class 0 OID 0)
-- Dependencies: 263
-- Name: TABLE personal; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.personal IS 'Personal del sistema de justicia';


--
-- TOC entry 264 (class 1259 OID 17698)
-- Name: personal_access_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal_access_tokens (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name text NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    expires_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.personal_access_tokens OWNER TO postgres;

--
-- TOC entry 265 (class 1259 OID 17708)
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personal_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.personal_access_tokens_id_seq OWNER TO postgres;

--
-- TOC entry 6119 (class 0 OID 0)
-- Dependencies: 265
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personal_access_tokens_id_seq OWNED BY public.personal_access_tokens.id;


--
-- TOC entry 266 (class 1259 OID 17709)
-- Name: personal_personal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.personal ALTER COLUMN personal_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.personal_personal_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 267 (class 1259 OID 17710)
-- Name: politicaretencion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.politicaretencion (
    politica_id integer NOT NULL,
    tipo_entidad character varying(50) NOT NULL,
    dias_retencion integer NOT NULL,
    retencion_completa boolean DEFAULT false,
    comprimir_despues_dias integer,
    archivar_despues_dias integer,
    descripcion text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_creacion_id integer,
    activa boolean DEFAULT true,
    CONSTRAINT chk_politicaretencion_dias CHECK ((dias_retencion >= 0))
);


ALTER TABLE public.politicaretencion OWNER TO postgres;

--
-- TOC entry 6120 (class 0 OID 0)
-- Dependencies: 267
-- Name: TABLE politicaretencion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.politicaretencion IS 'PolÃ­ticas de retenciÃ³n de datos';


--
-- TOC entry 268 (class 1259 OID 17722)
-- Name: politicaretencion_politica_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.politicaretencion ALTER COLUMN politica_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.politicaretencion_politica_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 269 (class 1259 OID 17723)
-- Name: preguntaseguridad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.preguntaseguridad (
    pregunta_id integer NOT NULL,
    texto character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.preguntaseguridad OWNER TO postgres;

--
-- TOC entry 6121 (class 0 OID 0)
-- Dependencies: 269
-- Name: TABLE preguntaseguridad; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.preguntaseguridad IS 'Preguntas de seguridad para recuperaciÃ³n';


--
-- TOC entry 270 (class 1259 OID 17731)
-- Name: preguntaseguridad_pregunta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.preguntaseguridad ALTER COLUMN pregunta_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.preguntaseguridad_pregunta_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 271 (class 1259 OID 17732)
-- Name: prestamoexpediente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prestamoexpediente (
    prestamo_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    personal_id integer NOT NULL,
    identificador uuid DEFAULT gen_random_uuid(),
    fecha_prestamo timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    motivo text,
    fecha_retorno_prevista timestamp with time zone,
    fecha_devolucion timestamp with time zone,
    usuario_recibido_id integer,
    estado character varying(20) DEFAULT 'ACTIVO'::character varying,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.prestamoexpediente OWNER TO postgres;

--
-- TOC entry 6122 (class 0 OID 0)
-- Dependencies: 271
-- Name: TABLE prestamoexpediente; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.prestamoexpediente IS 'Control de prÃ©stamos de expedientes';


--
-- TOC entry 272 (class 1259 OID 17744)
-- Name: prestamoexpediente_prestamo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.prestamoexpediente ALTER COLUMN prestamo_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.prestamoexpediente_prestamo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 273 (class 1259 OID 17745)
-- Name: remision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.remision (
    remision_id integer NOT NULL,
    denuncia_id integer NOT NULL,
    institucion_id integer NOT NULL,
    motivo text,
    fecha_remision timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.remision OWNER TO postgres;

--
-- TOC entry 6123 (class 0 OID 0)
-- Dependencies: 273
-- Name: TABLE remision; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.remision IS 'Remisiones a otras instituciones';


--
-- TOC entry 274 (class 1259 OID 17755)
-- Name: remision_remision_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.remision ALTER COLUMN remision_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.remision_remision_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 275 (class 1259 OID 17756)
-- Name: restauracion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restauracion (
    restauracion_id integer NOT NULL,
    backup_id integer NOT NULL,
    fecha timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    usuario_id integer NOT NULL,
    resultado text,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.restauracion OWNER TO postgres;

--
-- TOC entry 6124 (class 0 OID 0)
-- Dependencies: 275
-- Name: TABLE restauracion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.restauracion IS 'Registro de restauraciones del sistema';


--
-- TOC entry 276 (class 1259 OID 17766)
-- Name: restauracion_restauracion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.restauracion ALTER COLUMN restauracion_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.restauracion_restauracion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 277 (class 1259 OID 17767)
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    rol_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- TOC entry 6125 (class 0 OID 0)
-- Dependencies: 277
-- Name: TABLE rol; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.rol IS 'Roles del sistema RBAC';


--
-- TOC entry 278 (class 1259 OID 17775)
-- Name: rol_rol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.rol ALTER COLUMN rol_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.rol_rol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 279 (class 1259 OID 17776)
-- Name: rolpermiso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rolpermiso (
    rol_id integer NOT NULL,
    permiso_id integer NOT NULL,
    fecha_asignacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rolpermiso OWNER TO postgres;

--
-- TOC entry 6126 (class 0 OID 0)
-- Dependencies: 279
-- Name: TABLE rolpermiso; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.rolpermiso IS 'AsignaciÃ³n de permisos a roles';


--
-- TOC entry 280 (class 1259 OID 17782)
-- Name: securestore; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.securestore (
    store_id integer NOT NULL,
    tipo_dato character varying(50) NOT NULL,
    tabla_referencia character varying(100) NOT NULL,
    referencia_id integer NOT NULL,
    clave character varying(100) NOT NULL,
    valor_cifrado bytea NOT NULL,
    metadata jsonb DEFAULT '{}'::jsonb,
    version integer DEFAULT 1,
    activo boolean DEFAULT true,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone,
    usuario_creacion_id integer,
    usuario_actualizacion_id integer,
    CONSTRAINT securestore_valor_cifrado_check CHECK ((octet_length(valor_cifrado) <= 10485760))
);


ALTER TABLE public.securestore OWNER TO postgres;

--
-- TOC entry 6127 (class 0 OID 0)
-- Dependencies: 280
-- Name: TABLE securestore; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.securestore IS 'Almacenamiento seguro versionado de datos';


--
-- TOC entry 281 (class 1259 OID 17798)
-- Name: securestore_store_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.securestore ALTER COLUMN store_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.securestore_store_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 282 (class 1259 OID 17799)
-- Name: sentencia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sentencia (
    sentencia_id integer NOT NULL,
    conciliacion_id integer NOT NULL,
    fecha_sentencia timestamp with time zone,
    tipo_resolucion character varying(100),
    contenido text,
    estado_ejecucion character varying(50),
    institucion_remitida_id integer,
    observaciones text,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.sentencia OWNER TO postgres;

--
-- TOC entry 6128 (class 0 OID 0)
-- Dependencies: 282
-- Name: TABLE sentencia; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.sentencia IS 'Sentencias y resoluciones';


--
-- TOC entry 283 (class 1259 OID 17807)
-- Name: sentencia_sentencia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.sentencia ALTER COLUMN sentencia_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sentencia_sentencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 284 (class 1259 OID 17808)
-- Name: tipoconflicto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipoconflicto (
    tipo_conflicto_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tipoconflicto OWNER TO postgres;

--
-- TOC entry 6129 (class 0 OID 0)
-- Dependencies: 284
-- Name: TABLE tipoconflicto; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tipoconflicto IS 'CatÃ¡logo de tipos de conflicto legal';


--
-- TOC entry 285 (class 1259 OID 17818)
-- Name: tipoconflicto_tipo_conflicto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipoconflicto ALTER COLUMN tipo_conflicto_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipoconflicto_tipo_conflicto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 286 (class 1259 OID 17819)
-- Name: tipodocumento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipodocumento (
    tipo_documento_id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tipodocumento OWNER TO postgres;

--
-- TOC entry 6130 (class 0 OID 0)
-- Dependencies: 286
-- Name: TABLE tipodocumento; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tipodocumento IS 'CatÃ¡logo de tipos de documento de identidad';


--
-- TOC entry 287 (class 1259 OID 17829)
-- Name: tipodocumento_tipo_documento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipodocumento ALTER COLUMN tipo_documento_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipodocumento_tipo_documento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 288 (class 1259 OID 17830)
-- Name: tipomedida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipomedida (
    tipo_medida_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tipomedida OWNER TO postgres;

--
-- TOC entry 6131 (class 0 OID 0)
-- Dependencies: 288
-- Name: TABLE tipomedida; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tipomedida IS 'CatÃ¡logo de tipos de medidas cautelares';


--
-- TOC entry 289 (class 1259 OID 17840)
-- Name: tipomedida_tipo_medida_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipomedida ALTER COLUMN tipo_medida_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipomedida_tipo_medida_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 290 (class 1259 OID 17841)
-- Name: tiponotificacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiponotificacion (
    tipo_notificacion_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tiponotificacion OWNER TO postgres;

--
-- TOC entry 6132 (class 0 OID 0)
-- Dependencies: 290
-- Name: TABLE tiponotificacion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tiponotificacion IS 'Tipos de notificaciÃ³n legal';


--
-- TOC entry 291 (class 1259 OID 17851)
-- Name: tiponotificacion_tipo_notificacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tiponotificacion ALTER COLUMN tipo_notificacion_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tiponotificacion_tipo_notificacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 292 (class 1259 OID 17852)
-- Name: tipovinculo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipovinculo (
    tipo_vinculo_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.tipovinculo OWNER TO postgres;

--
-- TOC entry 6133 (class 0 OID 0)
-- Dependencies: 292
-- Name: TABLE tipovinculo; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.tipovinculo IS 'CatÃ¡logo de tipos de vÃ­nculo entre personas';


--
-- TOC entry 293 (class 1259 OID 17862)
-- Name: tipovinculo_tipo_vinculo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tipovinculo ALTER COLUMN tipo_vinculo_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipovinculo_tipo_vinculo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 294 (class 1259 OID 17863)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    usuario_id integer NOT NULL,
    nombre_usuario character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    contrasena_hash text NOT NULL,
    personal_id integer,
    rol_id integer NOT NULL,
    activo boolean DEFAULT true,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    ultimo_acceso timestamp with time zone,
    intentos_fallidos integer DEFAULT 0,
    fecha_bloqueo timestamp with time zone,
    requiere_cambio_contrasena boolean DEFAULT false,
    token_reset_password uuid,
    fecha_expiracion_token timestamp with time zone,
    CONSTRAINT chk_usuario_email CHECK (((email)::text ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text))
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 6134 (class 0 OID 0)
-- Dependencies: 294
-- Name: TABLE usuario; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.usuario IS 'Usuarios del sistema de justicia';


--
-- TOC entry 295 (class 1259 OID 17878)
-- Name: usuario_usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.usuario ALTER COLUMN usuario_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usuario_usuario_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 296 (class 1259 OID 17879)
-- Name: usuariopregunta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuariopregunta (
    usuario_id integer NOT NULL,
    pregunta_id integer NOT NULL,
    respuesta_cifrada bytea NOT NULL,
    fecha_creacion timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    validada boolean DEFAULT false
);


ALTER TABLE public.usuariopregunta OWNER TO postgres;

--
-- TOC entry 6135 (class 0 OID 0)
-- Dependencies: 296
-- Name: TABLE usuariopregunta; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.usuariopregunta IS 'Respuestas de seguridad de usuarios';


--
-- TOC entry 321 (class 1259 OID 107305)
-- Name: vista_conocimiento_popular; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vista_conocimiento_popular AS
 SELECT categoria,
    intencion,
    pregunta,
    veces_usada,
    veces_util,
    veces_no_util,
    round((((veces_util)::numeric / (NULLIF(veces_usada, 0))::numeric) * (100)::numeric), 2) AS porcentaje_utilidad
   FROM public.chatbot_base_conocimiento
  WHERE ((activo = true) AND (veces_usada > 0))
  ORDER BY veces_usada DESC;


ALTER VIEW public.vista_conocimiento_popular OWNER TO postgres;

--
-- TOC entry 320 (class 1259 OID 107300)
-- Name: vista_estadisticas_chatbot; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vista_estadisticas_chatbot AS
 SELECT date(m.creado_en) AS fecha,
    count(
        CASE
            WHEN ((m.remitente)::text = 'usuario'::text) THEN 1
            ELSE NULL::integer
        END) AS mensajes_usuario,
    count(
        CASE
            WHEN ((m.remitente)::text = 'asistente'::text) THEN 1
            ELSE NULL::integer
        END) AS mensajes_bot,
    avg(
        CASE
            WHEN (m.tiempo_respuesta_ms > 0) THEN m.tiempo_respuesta_ms
            ELSE NULL::integer
        END) AS tiempo_promedio_ms,
    count(
        CASE
            WHEN (c.fue_util = true) THEN 1
            ELSE NULL::integer
        END) AS respuestas_utiles,
    count(
        CASE
            WHEN (c.fue_util = false) THEN 1
            ELSE NULL::integer
        END) AS respuestas_no_utiles
   FROM (public.chatbot_mensajes m
     LEFT JOIN public.chatbot_calificaciones c ON ((m.id = c.mensaje_id)))
  GROUP BY (date(m.creado_en))
  ORDER BY (date(m.creado_en)) DESC;


ALTER VIEW public.vista_estadisticas_chatbot OWNER TO postgres;

--
-- TOC entry 297 (class 1259 OID 17888)
-- Name: votoconciliacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.votoconciliacion (
    voto_id integer NOT NULL,
    conciliacion_id integer NOT NULL,
    personal_id integer NOT NULL,
    voto boolean NOT NULL,
    comentario text,
    fecha_voto timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.votoconciliacion OWNER TO postgres;

--
-- TOC entry 6136 (class 0 OID 0)
-- Dependencies: 297
-- Name: TABLE votoconciliacion; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.votoconciliacion IS 'Almacena los votos de personal en procesos de conciliación';


--
-- TOC entry 6137 (class 0 OID 0)
-- Dependencies: 297
-- Name: COLUMN votoconciliacion.voto; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.votoconciliacion.voto IS 'true = A FAVOR, false = EN CONTRA';


--
-- TOC entry 298 (class 1259 OID 17898)
-- Name: votoconciliacion_voto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.votoconciliacion_voto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.votoconciliacion_voto_id_seq OWNER TO postgres;

--
-- TOC entry 6138 (class 0 OID 0)
-- Dependencies: 298
-- Name: votoconciliacion_voto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.votoconciliacion_voto_id_seq OWNED BY public.votoconciliacion.voto_id;


--
-- TOC entry 299 (class 1259 OID 17899)
-- Name: vw_denuncias_activas; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_denuncias_activas AS
SELECT
    NULL::integer AS denuncia_id,
    NULL::character varying(50) AS numero_expediente,
    NULL::text AS denunciante,
    NULL::character varying(100) AS tipo_conflicto,
    NULL::character varying(50) AS estado,
    NULL::timestamp with time zone AS fecha_ingreso,
    NULL::bigint AS total_involucrados,
    NULL::character varying(50) AS creado_por;


ALTER VIEW public.vw_denuncias_activas OWNER TO postgres;

--
-- TOC entry 300 (class 1259 OID 17903)
-- Name: vw_personal_activo; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_personal_activo AS
 SELECT per.personal_id,
    concat(p.nombres, ' ', p.apellidos) AS nombre_completo,
    c.nombre AS cargo,
    per.fecha_ingreso,
    per.activo,
    u.nombre_usuario,
    r.nombre AS rol
   FROM ((((public.personal per
     JOIN public.persona p ON ((per.persona_id = p.persona_id)))
     JOIN public.cargo c ON ((per.cargo_id = c.cargo_id)))
     LEFT JOIN public.usuario u ON ((per.personal_id = u.personal_id)))
     LEFT JOIN public.rol r ON ((u.rol_id = r.rol_id)))
  WHERE (per.activo = true)
  ORDER BY c.nombre, p.apellidos;


ALTER VIEW public.vw_personal_activo OWNER TO postgres;

--
-- TOC entry 309 (class 1259 OID 57548)
-- Name: vw_resumen_evidencias; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.vw_resumen_evidencias AS
 SELECT d.denuncia_id,
    d.codigo_externo,
    COALESCE(e.total, (0)::bigint) AS total_archivos,
    COALESCE(e.documentos, (0)::bigint) AS documentos,
    COALESCE(e.fotos, (0)::bigint) AS fotos,
    COALESCE(e.videos, (0)::bigint) AS videos,
    COALESCE(e.audios, (0)::bigint) AS audios
   FROM (public.denuncia d
     LEFT JOIN ( SELECT evidencias.denuncia_id,
            count(*) AS total,
            count(
                CASE
                    WHEN ((evidencias.tipo)::text = 'documento'::text) THEN 1
                    ELSE NULL::integer
                END) AS documentos,
            count(
                CASE
                    WHEN ((evidencias.tipo)::text = 'foto'::text) THEN 1
                    ELSE NULL::integer
                END) AS fotos,
            count(
                CASE
                    WHEN ((evidencias.tipo)::text = 'video'::text) THEN 1
                    ELSE NULL::integer
                END) AS videos,
            count(
                CASE
                    WHEN ((evidencias.tipo)::text = 'audio'::text) THEN 1
                    ELSE NULL::integer
                END) AS audios
           FROM public.evidencias
          GROUP BY evidencias.denuncia_id) e ON ((d.denuncia_id = e.denuncia_id)));


ALTER VIEW public.vw_resumen_evidencias OWNER TO postgres;

--
-- TOC entry 5410 (class 2604 OID 57469)
-- Name: alerta alerta_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta ALTER COLUMN alerta_id SET DEFAULT nextval('public.alerta_alerta_id_seq'::regclass);


--
-- TOC entry 5400 (class 2604 OID 57442)
-- Name: backup backup_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.backup ALTER COLUMN backup_id SET DEFAULT nextval('public.backup_backup_id_seq'::regclass);


--
-- TOC entry 5426 (class 2604 OID 107216)
-- Name: chatbot_base_conocimiento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_base_conocimiento ALTER COLUMN id SET DEFAULT nextval('public.chatbot_base_conocimiento_id_seq'::regclass);


--
-- TOC entry 5437 (class 2604 OID 107270)
-- Name: chatbot_cache_semantico id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_cache_semantico ALTER COLUMN id SET DEFAULT nextval('public.chatbot_cache_semantico_id_seq'::regclass);


--
-- TOC entry 5435 (class 2604 OID 107246)
-- Name: chatbot_calificaciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_calificaciones ALTER COLUMN id SET DEFAULT nextval('public.chatbot_calificaciones_id_seq'::regclass);


--
-- TOC entry 5417 (class 2604 OID 107168)
-- Name: chatbot_conversaciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_conversaciones ALTER COLUMN id SET DEFAULT nextval('public.chatbot_conversaciones_id_seq'::regclass);


--
-- TOC entry 5422 (class 2604 OID 107191)
-- Name: chatbot_mensajes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_mensajes ALTER COLUMN id SET DEFAULT nextval('public.chatbot_mensajes_id_seq'::regclass);


--
-- TOC entry 5394 (class 2604 OID 32803)
-- Name: codigos_otp id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codigos_otp ALTER COLUMN id SET DEFAULT nextval('public.codigos_otp_id_seq'::regclass);


--
-- TOC entry 5414 (class 2604 OID 57524)
-- Name: evidencias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evidencias ALTER COLUMN id SET DEFAULT nextval('public.evidencias_id_seq'::regclass);


--
-- TOC entry 5345 (class 2604 OID 17908)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 5355 (class 2604 OID 17909)
-- Name: personal_access_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.personal_access_tokens_id_seq'::regclass);


--
-- TOC entry 5392 (class 2604 OID 17910)
-- Name: votoconciliacion voto_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votoconciliacion ALTER COLUMN voto_id SET DEFAULT nextval('public.votoconciliacion_voto_id_seq'::regclass);


--
-- TOC entry 5692 (class 2606 OID 57471)
-- Name: alerta alerta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta
    ADD CONSTRAINT alerta_pkey PRIMARY KEY (alerta_id);


--
-- TOC entry 5452 (class 2606 OID 17912)
-- Name: asistencia asistencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT asistencia_pkey PRIMARY KEY (asistencia_id);


--
-- TOC entry 5687 (class 2606 OID 57444)
-- Name: backup backup_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.backup
    ADD CONSTRAINT backup_pkey PRIMARY KEY (backup_id);


--
-- TOC entry 5463 (class 2606 OID 17916)
-- Name: cargo cargo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (cargo_id);


--
-- TOC entry 5713 (class 2606 OID 107231)
-- Name: chatbot_base_conocimiento chatbot_base_conocimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_base_conocimiento
    ADD CONSTRAINT chatbot_base_conocimiento_pkey PRIMARY KEY (id);


--
-- TOC entry 5724 (class 2606 OID 107283)
-- Name: chatbot_cache_semantico chatbot_cache_semantico_hash_consulta_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_cache_semantico
    ADD CONSTRAINT chatbot_cache_semantico_hash_consulta_key UNIQUE (hash_consulta);


--
-- TOC entry 5726 (class 2606 OID 107281)
-- Name: chatbot_cache_semantico chatbot_cache_semantico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_cache_semantico
    ADD CONSTRAINT chatbot_cache_semantico_pkey PRIMARY KEY (id);


--
-- TOC entry 5720 (class 2606 OID 107253)
-- Name: chatbot_calificaciones chatbot_calificaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_calificaciones
    ADD CONSTRAINT chatbot_calificaciones_pkey PRIMARY KEY (id);


--
-- TOC entry 5703 (class 2606 OID 107178)
-- Name: chatbot_conversaciones chatbot_conversaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_conversaciones
    ADD CONSTRAINT chatbot_conversaciones_pkey PRIMARY KEY (id);


--
-- TOC entry 5708 (class 2606 OID 107203)
-- Name: chatbot_mensajes chatbot_mensajes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_mensajes
    ADD CONSTRAINT chatbot_mensajes_pkey PRIMARY KEY (id);


--
-- TOC entry 5679 (class 2606 OID 32817)
-- Name: codigos_otp codigos_otp_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codigos_otp
    ADD CONSTRAINT codigos_otp_codigo_key UNIQUE (codigo);


--
-- TOC entry 5681 (class 2606 OID 32815)
-- Name: codigos_otp codigos_otp_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codigos_otp
    ADD CONSTRAINT codigos_otp_pkey PRIMARY KEY (id);


--
-- TOC entry 5467 (class 2606 OID 17918)
-- Name: conciliacion conciliacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conciliacion
    ADD CONSTRAINT conciliacion_pkey PRIMARY KEY (conciliacion_id);


--
-- TOC entry 5473 (class 2606 OID 17920)
-- Name: configuracionhistorial configuracionhistorial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuracionhistorial
    ADD CONSTRAINT configuracionhistorial_pkey PRIMARY KEY (historial_id);


--
-- TOC entry 5477 (class 2606 OID 17922)
-- Name: denuncia denuncia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT denuncia_pkey PRIMARY KEY (denuncia_id);


--
-- TOC entry 5492 (class 2606 OID 17924)
-- Name: denunciahistorial denunciahistorial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denunciahistorial
    ADD CONSTRAINT denunciahistorial_pkey PRIMARY KEY (historial_id);


--
-- TOC entry 5496 (class 2606 OID 17926)
-- Name: estadoasistencia estadoasistencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadoasistencia
    ADD CONSTRAINT estadoasistencia_pkey PRIMARY KEY (estado_asistencia_id);


--
-- TOC entry 5500 (class 2606 OID 17928)
-- Name: estadocivil estadocivil_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadocivil
    ADD CONSTRAINT estadocivil_pkey PRIMARY KEY (estado_civil_id);


--
-- TOC entry 5504 (class 2606 OID 17930)
-- Name: estadodenuncia estadodenuncia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadodenuncia
    ADD CONSTRAINT estadodenuncia_pkey PRIMARY KEY (estado_denuncia_id);


--
-- TOC entry 5508 (class 2606 OID 17932)
-- Name: estadohistorial estadohistorial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadohistorial
    ADD CONSTRAINT estadohistorial_pkey PRIMARY KEY (historial_id);


--
-- TOC entry 5698 (class 2606 OID 57537)
-- Name: evidencias evidencias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evidencias
    ADD CONSTRAINT evidencias_pkey PRIMARY KEY (id);


--
-- TOC entry 5514 (class 2606 OID 17934)
-- Name: genero genero_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (genero_id);


--
-- TOC entry 5518 (class 2606 OID 17936)
-- Name: horario horario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT horario_pkey PRIMARY KEY (horario_id);


--
-- TOC entry 5524 (class 2606 OID 17938)
-- Name: institucion institucion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.institucion
    ADD CONSTRAINT institucion_pkey PRIMARY KEY (institucion_id);


--
-- TOC entry 5530 (class 2606 OID 17940)
-- Name: involucrado involucrado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucrado
    ADD CONSTRAINT involucrado_pkey PRIMARY KEY (involucrado_id);


--
-- TOC entry 5537 (class 2606 OID 17942)
-- Name: logauditoria logauditoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logauditoria
    ADD CONSTRAINT logauditoria_pkey PRIMARY KEY (log_id);


--
-- TOC entry 5542 (class 2606 OID 17944)
-- Name: medidacautelar medidacautelar_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medidacautelar
    ADD CONSTRAINT medidacautelar_pkey PRIMARY KEY (medida_id);


--
-- TOC entry 5544 (class 2606 OID 17946)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 5549 (class 2606 OID 17948)
-- Name: notificacion notificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacion
    ADD CONSTRAINT notificacion_pkey PRIMARY KEY (notificacion_id);


--
-- TOC entry 5551 (class 2606 OID 17950)
-- Name: permiso permiso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso
    ADD CONSTRAINT permiso_pkey PRIMARY KEY (permiso_id);


--
-- TOC entry 5564 (class 2606 OID 17952)
-- Name: persona persona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY (persona_id);


--
-- TOC entry 5571 (class 2606 OID 17954)
-- Name: personahistorial personahistorial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personahistorial
    ADD CONSTRAINT personahistorial_pkey PRIMARY KEY (historial_id);


--
-- TOC entry 5587 (class 2606 OID 17956)
-- Name: personal_access_tokens personal_access_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY (id);


--
-- TOC entry 5589 (class 2606 OID 17958)
-- Name: personal_access_tokens personal_access_tokens_token_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);


--
-- TOC entry 5582 (class 2606 OID 17960)
-- Name: personal personal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT personal_pkey PRIMARY KEY (personal_id);


--
-- TOC entry 5618 (class 2606 OID 17962)
-- Name: rolpermiso pk_rolpermiso; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rolpermiso
    ADD CONSTRAINT pk_rolpermiso PRIMARY KEY (rol_id, permiso_id);


--
-- TOC entry 5669 (class 2606 OID 17964)
-- Name: usuariopregunta pk_usuariopregunta; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuariopregunta
    ADD CONSTRAINT pk_usuariopregunta PRIMARY KEY (usuario_id, pregunta_id);


--
-- TOC entry 5592 (class 2606 OID 17966)
-- Name: politicaretencion politicaretencion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.politicaretencion
    ADD CONSTRAINT politicaretencion_pkey PRIMARY KEY (politica_id);


--
-- TOC entry 5596 (class 2606 OID 17968)
-- Name: preguntaseguridad preguntaseguridad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntaseguridad
    ADD CONSTRAINT preguntaseguridad_pkey PRIMARY KEY (pregunta_id);


--
-- TOC entry 5605 (class 2606 OID 17970)
-- Name: prestamoexpediente prestamoexpediente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamoexpediente
    ADD CONSTRAINT prestamoexpediente_pkey PRIMARY KEY (prestamo_id);


--
-- TOC entry 5610 (class 2606 OID 17972)
-- Name: remision remision_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remision
    ADD CONSTRAINT remision_pkey PRIMARY KEY (remision_id);


--
-- TOC entry 5612 (class 2606 OID 17974)
-- Name: restauracion restauracion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restauracion
    ADD CONSTRAINT restauracion_pkey PRIMARY KEY (restauracion_id);


--
-- TOC entry 5614 (class 2606 OID 17976)
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (rol_id);


--
-- TOC entry 5625 (class 2606 OID 17978)
-- Name: securestore securestore_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.securestore
    ADD CONSTRAINT securestore_pkey PRIMARY KEY (store_id);


--
-- TOC entry 5632 (class 2606 OID 17980)
-- Name: sentencia sentencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentencia
    ADD CONSTRAINT sentencia_pkey PRIMARY KEY (sentencia_id);


--
-- TOC entry 5634 (class 2606 OID 17982)
-- Name: tipoconflicto tipoconflicto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipoconflicto
    ADD CONSTRAINT tipoconflicto_pkey PRIMARY KEY (tipo_conflicto_id);


--
-- TOC entry 5639 (class 2606 OID 17984)
-- Name: tipodocumento tipodocumento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipodocumento
    ADD CONSTRAINT tipodocumento_pkey PRIMARY KEY (tipo_documento_id);


--
-- TOC entry 5643 (class 2606 OID 17986)
-- Name: tipomedida tipomedida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipomedida
    ADD CONSTRAINT tipomedida_pkey PRIMARY KEY (tipo_medida_id);


--
-- TOC entry 5647 (class 2606 OID 17988)
-- Name: tiponotificacion tiponotificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiponotificacion
    ADD CONSTRAINT tiponotificacion_pkey PRIMARY KEY (tipo_notificacion_id);


--
-- TOC entry 5651 (class 2606 OID 17990)
-- Name: tipovinculo tipovinculo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipovinculo
    ADD CONSTRAINT tipovinculo_pkey PRIMARY KEY (tipo_vinculo_id);


--
-- TOC entry 5461 (class 2606 OID 17992)
-- Name: asistencia uq_asistencia_personalhorario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT uq_asistencia_personalhorario UNIQUE (personal_id, horario_id);


--
-- TOC entry 5465 (class 2606 OID 17994)
-- Name: cargo uq_cargo_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT uq_cargo_nombre UNIQUE (nombre);


--
-- TOC entry 5488 (class 2606 OID 17996)
-- Name: denuncia uq_denuncia_codigoexterno; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT uq_denuncia_codigoexterno UNIQUE (codigo_externo);


--
-- TOC entry 5490 (class 2606 OID 17998)
-- Name: denuncia uq_denuncia_expediente; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT uq_denuncia_expediente UNIQUE (numero_expediente);


--
-- TOC entry 5498 (class 2606 OID 18000)
-- Name: estadoasistencia uq_estadoasistencia_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadoasistencia
    ADD CONSTRAINT uq_estadoasistencia_nombre UNIQUE (nombre);


--
-- TOC entry 5502 (class 2606 OID 18002)
-- Name: estadocivil uq_estadocivil_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadocivil
    ADD CONSTRAINT uq_estadocivil_nombre UNIQUE (nombre);


--
-- TOC entry 5506 (class 2606 OID 18004)
-- Name: estadodenuncia uq_estadodenuncia_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadodenuncia
    ADD CONSTRAINT uq_estadodenuncia_nombre UNIQUE (nombre);


--
-- TOC entry 5512 (class 2606 OID 18006)
-- Name: estadohistorial uq_estadohistorial_entidad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadohistorial
    ADD CONSTRAINT uq_estadohistorial_entidad UNIQUE (entidad_tipo, entidad_id, fecha_transicion);


--
-- TOC entry 5516 (class 2606 OID 18008)
-- Name: genero uq_genero_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT uq_genero_nombre UNIQUE (nombre);


--
-- TOC entry 5526 (class 2606 OID 18010)
-- Name: institucion uq_institucion_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.institucion
    ADD CONSTRAINT uq_institucion_nombre UNIQUE (nombre);


--
-- TOC entry 5553 (class 2606 OID 18012)
-- Name: permiso uq_permiso_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permiso
    ADD CONSTRAINT uq_permiso_nombre UNIQUE (nombre);


--
-- TOC entry 5566 (class 2606 OID 18014)
-- Name: persona uq_persona_documento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT uq_persona_documento UNIQUE (tipo_documento_id, numero_documento);


--
-- TOC entry 5573 (class 2606 OID 18016)
-- Name: personahistorial uq_personahistorial_version; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personahistorial
    ADD CONSTRAINT uq_personahistorial_version UNIQUE (persona_id, version);


--
-- TOC entry 5584 (class 2606 OID 18018)
-- Name: personal uq_personal_persona; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT uq_personal_persona UNIQUE (persona_id);


--
-- TOC entry 5594 (class 2606 OID 18020)
-- Name: politicaretencion uq_politicaretencion_tipo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.politicaretencion
    ADD CONSTRAINT uq_politicaretencion_tipo UNIQUE (tipo_entidad);


--
-- TOC entry 5598 (class 2606 OID 18022)
-- Name: preguntaseguridad uq_preguntaseguridad_texto; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.preguntaseguridad
    ADD CONSTRAINT uq_preguntaseguridad_texto UNIQUE (texto);


--
-- TOC entry 5616 (class 2606 OID 18024)
-- Name: rol uq_rol_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT uq_rol_nombre UNIQUE (nombre);


--
-- TOC entry 5627 (class 2606 OID 18026)
-- Name: securestore uq_securestore_version; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.securestore
    ADD CONSTRAINT uq_securestore_version UNIQUE (tabla_referencia, referencia_id, clave, version);


--
-- TOC entry 5636 (class 2606 OID 18028)
-- Name: tipoconflicto uq_tipoconflicto_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipoconflicto
    ADD CONSTRAINT uq_tipoconflicto_nombre UNIQUE (nombre);


--
-- TOC entry 5641 (class 2606 OID 18030)
-- Name: tipodocumento uq_tipodocumento_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipodocumento
    ADD CONSTRAINT uq_tipodocumento_nombre UNIQUE (nombre);


--
-- TOC entry 5645 (class 2606 OID 18032)
-- Name: tipomedida uq_tipomedida_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipomedida
    ADD CONSTRAINT uq_tipomedida_nombre UNIQUE (nombre);


--
-- TOC entry 5649 (class 2606 OID 18034)
-- Name: tiponotificacion uq_tiponotificacion_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiponotificacion
    ADD CONSTRAINT uq_tiponotificacion_nombre UNIQUE (nombre);


--
-- TOC entry 5653 (class 2606 OID 18036)
-- Name: tipovinculo uq_tipovinculo_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipovinculo
    ADD CONSTRAINT uq_tipovinculo_nombre UNIQUE (nombre);


--
-- TOC entry 5663 (class 2606 OID 18038)
-- Name: usuario uq_usuario_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT uq_usuario_email UNIQUE (email);


--
-- TOC entry 5665 (class 2606 OID 18040)
-- Name: usuario uq_usuario_nombre; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT uq_usuario_nombre UNIQUE (nombre_usuario);


--
-- TOC entry 5667 (class 2606 OID 18042)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usuario_id);


--
-- TOC entry 5675 (class 2606 OID 18044)
-- Name: votoconciliacion votoconciliacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votoconciliacion
    ADD CONSTRAINT votoconciliacion_pkey PRIMARY KEY (voto_id);


--
-- TOC entry 5677 (class 2606 OID 18046)
-- Name: votoconciliacion votoconciliacion_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votoconciliacion
    ADD CONSTRAINT votoconciliacion_unique UNIQUE (conciliacion_id, personal_id);


--
-- TOC entry 5693 (class 1259 OID 57475)
-- Name: idx_alerta_entidad; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_alerta_entidad ON public.alerta USING btree (entidad_tipo, entidad_id);


--
-- TOC entry 5694 (class 1259 OID 57474)
-- Name: idx_alerta_expira_en; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_alerta_expira_en ON public.alerta USING btree (expira_en) WHERE (expira_en IS NOT NULL);


--
-- TOC entry 5695 (class 1259 OID 57473)
-- Name: idx_alerta_fecha_creacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_alerta_fecha_creacion ON public.alerta USING btree (fecha_creacion);


--
-- TOC entry 5696 (class 1259 OID 57472)
-- Name: idx_alerta_usuario_leida; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_alerta_usuario_leida ON public.alerta USING btree (usuario_id, leida);


--
-- TOC entry 5453 (class 1259 OID 65719)
-- Name: idx_asistencia_entrada_tarde; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_entrada_tarde ON public.asistencia USING btree (entrada_tarde);


--
-- TOC entry 5454 (class 1259 OID 18047)
-- Name: idx_asistencia_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_estado ON public.asistencia USING btree (estado_asistencia_id);


--
-- TOC entry 5455 (class 1259 OID 18048)
-- Name: idx_asistencia_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_fecha ON public.asistencia USING btree (fecha);


--
-- TOC entry 5456 (class 1259 OID 65720)
-- Name: idx_asistencia_fecha_actualizacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_fecha_actualizacion ON public.asistencia USING btree (fecha_actualizacion);


--
-- TOC entry 5457 (class 1259 OID 18049)
-- Name: idx_asistencia_horario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_horario ON public.asistencia USING btree (horario_id);


--
-- TOC entry 5458 (class 1259 OID 18050)
-- Name: idx_asistencia_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_personal ON public.asistencia USING btree (personal_id);


--
-- TOC entry 5459 (class 1259 OID 65721)
-- Name: idx_asistencia_usuario_registro; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_asistencia_usuario_registro ON public.asistencia USING btree (usuario_registro_id);


--
-- TOC entry 5688 (class 1259 OID 57445)
-- Name: idx_backup_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_backup_estado ON public.backup USING btree (estado);


--
-- TOC entry 5689 (class 1259 OID 57446)
-- Name: idx_backup_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_backup_fecha ON public.backup USING btree (fecha);


--
-- TOC entry 5690 (class 1259 OID 57447)
-- Name: idx_backup_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_backup_usuario ON public.backup USING btree (usuario_id);


--
-- TOC entry 5727 (class 1259 OID 107285)
-- Name: idx_cache_expira; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cache_expira ON public.chatbot_cache_semantico USING btree (expira_en);


--
-- TOC entry 5728 (class 1259 OID 107284)
-- Name: idx_cache_hash; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cache_hash ON public.chatbot_cache_semantico USING btree (hash_consulta);


--
-- TOC entry 5721 (class 1259 OID 107264)
-- Name: idx_calif_mensaje; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_calif_mensaje ON public.chatbot_calificaciones USING btree (mensaje_id);


--
-- TOC entry 5722 (class 1259 OID 107265)
-- Name: idx_calif_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_calif_usuario ON public.chatbot_calificaciones USING btree (usuario_id);


--
-- TOC entry 5704 (class 1259 OID 107186)
-- Name: idx_chat_conv_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_conv_estado ON public.chatbot_conversaciones USING btree (estado);


--
-- TOC entry 5705 (class 1259 OID 107184)
-- Name: idx_chat_conv_sesion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_conv_sesion ON public.chatbot_conversaciones USING btree (sesion_id);


--
-- TOC entry 5706 (class 1259 OID 107185)
-- Name: idx_chat_conv_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_conv_usuario ON public.chatbot_conversaciones USING btree (usuario_id);


--
-- TOC entry 5709 (class 1259 OID 107209)
-- Name: idx_chat_msg_conversacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_msg_conversacion ON public.chatbot_mensajes USING btree (conversacion_id);


--
-- TOC entry 5710 (class 1259 OID 107211)
-- Name: idx_chat_msg_embedding; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_msg_embedding ON public.chatbot_mensajes USING ivfflat (embedding_contenido public.vector_cosine_ops);


--
-- TOC entry 5711 (class 1259 OID 107210)
-- Name: idx_chat_msg_remitente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_chat_msg_remitente ON public.chatbot_mensajes USING btree (remitente);


--
-- TOC entry 5682 (class 1259 OID 32833)
-- Name: idx_codigos_otp_active_code; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_codigos_otp_active_code ON public.codigos_otp USING btree (codigo, activo);


--
-- TOC entry 5683 (class 1259 OID 32832)
-- Name: idx_codigos_otp_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_codigos_otp_activo ON public.codigos_otp USING btree (activo) WHERE (activo = true);


--
-- TOC entry 5684 (class 1259 OID 32825)
-- Name: idx_codigos_otp_codigo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_codigos_otp_codigo ON public.codigos_otp USING btree (codigo);


--
-- TOC entry 5685 (class 1259 OID 32824)
-- Name: idx_codigos_otp_expira_en; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_codigos_otp_expira_en ON public.codigos_otp USING btree (expira_en);


--
-- TOC entry 5468 (class 1259 OID 18054)
-- Name: idx_conciliacion_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_conciliacion_denuncia ON public.conciliacion USING btree (denuncia_id);


--
-- TOC entry 5469 (class 1259 OID 18055)
-- Name: idx_conciliacion_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_conciliacion_estado ON public.conciliacion USING btree (estado);


--
-- TOC entry 5470 (class 1259 OID 18056)
-- Name: idx_conciliacion_fechaaudiencia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_conciliacion_fechaaudiencia ON public.conciliacion USING btree (fecha_audiencia);


--
-- TOC entry 5471 (class 1259 OID 18057)
-- Name: idx_conciliacion_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_conciliacion_personal ON public.conciliacion USING btree (personal_conciliador_id);


--
-- TOC entry 5474 (class 1259 OID 18058)
-- Name: idx_confighistorial_clave; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_confighistorial_clave ON public.configuracionhistorial USING btree (clave);


--
-- TOC entry 5475 (class 1259 OID 18059)
-- Name: idx_confighistorial_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_confighistorial_fecha ON public.configuracionhistorial USING btree (fecha_cambio);


--
-- TOC entry 5478 (class 1259 OID 18060)
-- Name: idx_denuncia_codigoexterno; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_codigoexterno ON public.denuncia USING btree (codigo_externo);


--
-- TOC entry 5479 (class 1259 OID 18061)
-- Name: idx_denuncia_codigoqr; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_codigoqr ON public.denuncia USING hash (codigo_qr_cifrado) WHERE (codigo_qr_cifrado IS NOT NULL);


--
-- TOC entry 5480 (class 1259 OID 18062)
-- Name: idx_denuncia_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_estado ON public.denuncia USING btree (estado_denuncia_id);


--
-- TOC entry 5481 (class 1259 OID 18064)
-- Name: idx_denuncia_expediente; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_expediente ON public.denuncia USING btree (numero_expediente);


--
-- TOC entry 5482 (class 1259 OID 18065)
-- Name: idx_denuncia_fechacreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_fechacreacion ON public.denuncia USING btree (fecha_creacion);


--
-- TOC entry 5483 (class 1259 OID 18066)
-- Name: idx_denuncia_fechaingreso; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_fechaingreso ON public.denuncia USING btree (fecha_ingreso);


--
-- TOC entry 5484 (class 1259 OID 18067)
-- Name: idx_denuncia_persona; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_persona ON public.denuncia USING btree (persona_id);


--
-- TOC entry 5485 (class 1259 OID 18068)
-- Name: idx_denuncia_tipoconflicto; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_tipoconflicto ON public.denuncia USING btree (tipo_conflicto_id);


--
-- TOC entry 5486 (class 1259 OID 18069)
-- Name: idx_denuncia_usuariocreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denuncia_usuariocreacion ON public.denuncia USING btree (usuario_creacion_id);


--
-- TOC entry 5493 (class 1259 OID 18070)
-- Name: idx_denunciahistorial_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denunciahistorial_denuncia ON public.denunciahistorial USING btree (denuncia_id);


--
-- TOC entry 5494 (class 1259 OID 18071)
-- Name: idx_denunciahistorial_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_denunciahistorial_fecha ON public.denunciahistorial USING btree (fecha_cambio);


--
-- TOC entry 5509 (class 1259 OID 18072)
-- Name: idx_estadohistorial_entidad; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_estadohistorial_entidad ON public.estadohistorial USING btree (entidad_tipo, entidad_id);


--
-- TOC entry 5510 (class 1259 OID 18073)
-- Name: idx_estadohistorial_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_estadohistorial_fecha ON public.estadohistorial USING btree (fecha_transicion);


--
-- TOC entry 5699 (class 1259 OID 57545)
-- Name: idx_evidencias_created_at; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_evidencias_created_at ON public.evidencias USING btree (created_at);


--
-- TOC entry 5700 (class 1259 OID 57543)
-- Name: idx_evidencias_denuncia_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_evidencias_denuncia_id ON public.evidencias USING btree (denuncia_id);


--
-- TOC entry 5701 (class 1259 OID 57544)
-- Name: idx_evidencias_tipo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_evidencias_tipo ON public.evidencias USING btree (tipo);


--
-- TOC entry 5519 (class 1259 OID 65731)
-- Name: idx_horario_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_horario_fecha ON public.horario USING btree (fecha);


--
-- TOC entry 5520 (class 1259 OID 65732)
-- Name: idx_horario_fecha_actualizacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_horario_fecha_actualizacion ON public.horario USING btree (fecha_actualizacion);


--
-- TOC entry 5521 (class 1259 OID 65729)
-- Name: idx_horario_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_horario_personal ON public.horario USING btree (personal_id);


--
-- TOC entry 5522 (class 1259 OID 65730)
-- Name: idx_horario_tipo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_horario_tipo ON public.horario USING btree (tipo);


--
-- TOC entry 5527 (class 1259 OID 18074)
-- Name: idx_involucrado_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_involucrado_denuncia ON public.involucrado USING btree (denuncia_id);


--
-- TOC entry 5528 (class 1259 OID 18075)
-- Name: idx_involucrado_persona; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_involucrado_persona ON public.involucrado USING btree (persona_id);


--
-- TOC entry 5714 (class 1259 OID 107240)
-- Name: idx_kb_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_kb_activo ON public.chatbot_base_conocimiento USING btree (activo);


--
-- TOC entry 5715 (class 1259 OID 107239)
-- Name: idx_kb_categoria; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_kb_categoria ON public.chatbot_base_conocimiento USING btree (categoria);


--
-- TOC entry 5716 (class 1259 OID 107241)
-- Name: idx_kb_embedding; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_kb_embedding ON public.chatbot_base_conocimiento USING ivfflat (embedding_pregunta public.vector_cosine_ops);


--
-- TOC entry 5717 (class 1259 OID 107238)
-- Name: idx_kb_intencion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_kb_intencion ON public.chatbot_base_conocimiento USING btree (intencion);


--
-- TOC entry 5718 (class 1259 OID 107237)
-- Name: idx_kb_pregunta; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_kb_pregunta ON public.chatbot_base_conocimiento USING btree (pregunta);


--
-- TOC entry 5531 (class 1259 OID 18076)
-- Name: idx_logauditoria_accion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_logauditoria_accion ON public.logauditoria USING btree (accion);


--
-- TOC entry 5532 (class 1259 OID 18077)
-- Name: idx_logauditoria_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_logauditoria_fecha ON public.logauditoria USING btree (fecha);


--
-- TOC entry 5533 (class 1259 OID 18078)
-- Name: idx_logauditoria_tabla; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_logauditoria_tabla ON public.logauditoria USING btree (tabla_afectada);


--
-- TOC entry 5534 (class 1259 OID 18079)
-- Name: idx_logauditoria_transaccion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_logauditoria_transaccion ON public.logauditoria USING btree (transaccion_id);


--
-- TOC entry 5535 (class 1259 OID 18080)
-- Name: idx_logauditoria_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_logauditoria_usuario ON public.logauditoria USING btree (usuario_id);


--
-- TOC entry 5538 (class 1259 OID 18081)
-- Name: idx_medida_conciliacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_medida_conciliacion ON public.medidacautelar USING btree (conciliacion_id);


--
-- TOC entry 5539 (class 1259 OID 18082)
-- Name: idx_medida_fechainicio; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_medida_fechainicio ON public.medidacautelar USING btree (fecha_inicio);


--
-- TOC entry 5540 (class 1259 OID 18083)
-- Name: idx_medida_tipo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_medida_tipo ON public.medidacautelar USING btree (tipo_medida_id);


--
-- TOC entry 5545 (class 1259 OID 18084)
-- Name: idx_notificacion_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_notificacion_denuncia ON public.notificacion USING btree (denuncia_id);


--
-- TOC entry 5546 (class 1259 OID 18085)
-- Name: idx_notificacion_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_notificacion_fecha ON public.notificacion USING btree (fecha_emision);


--
-- TOC entry 5547 (class 1259 OID 18086)
-- Name: idx_notificacion_tipo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_notificacion_tipo ON public.notificacion USING btree (tipo_notificacion_id);


--
-- TOC entry 5554 (class 1259 OID 18087)
-- Name: idx_persona_documento; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_documento ON public.persona USING btree (numero_documento);


--
-- TOC entry 5555 (class 1259 OID 18088)
-- Name: idx_persona_estadocivil; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_estadocivil ON public.persona USING btree (estado_civil_id);


--
-- TOC entry 5556 (class 1259 OID 18089)
-- Name: idx_persona_fechacreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_fechacreacion ON public.persona USING btree (fecha_creacion);


--
-- TOC entry 5557 (class 1259 OID 18090)
-- Name: idx_persona_fechanacimiento; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_fechanacimiento ON public.persona USING btree (fecha_nacimiento);


--
-- TOC entry 5558 (class 1259 OID 18091)
-- Name: idx_persona_genero; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_genero ON public.persona USING btree (genero_id);


--
-- TOC entry 5559 (class 1259 OID 18092)
-- Name: idx_persona_municipio; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_municipio ON public.persona USING btree (municipio);


--
-- TOC entry 5560 (class 1259 OID 18093)
-- Name: idx_persona_nombrecompleto; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_nombrecompleto ON public.persona USING btree (nombres, apellidos);


--
-- TOC entry 5561 (class 1259 OID 18094)
-- Name: idx_persona_tipodocumento; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_tipodocumento ON public.persona USING btree (tipo_documento_id);


--
-- TOC entry 5562 (class 1259 OID 18095)
-- Name: idx_persona_tipovinculo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_persona_tipovinculo ON public.persona USING btree (tipo_vinculo_id);


--
-- TOC entry 5567 (class 1259 OID 18096)
-- Name: idx_personahistorial_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personahistorial_fecha ON public.personahistorial USING btree (fecha_cambio);


--
-- TOC entry 5568 (class 1259 OID 18097)
-- Name: idx_personahistorial_persona; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personahistorial_persona ON public.personahistorial USING btree (persona_id);


--
-- TOC entry 5569 (class 1259 OID 18098)
-- Name: idx_personahistorial_persona_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personahistorial_persona_id ON public.personahistorial USING btree (persona_id);


--
-- TOC entry 5574 (class 1259 OID 18099)
-- Name: idx_personal_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_activo ON public.personal USING btree (activo) WHERE (activo = true);


--
-- TOC entry 5575 (class 1259 OID 18100)
-- Name: idx_personal_cargo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_cargo ON public.personal USING btree (cargo_id);


--
-- TOC entry 5576 (class 1259 OID 18101)
-- Name: idx_personal_fechacreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_fechacreacion ON public.personal USING btree (fecha_creacion);


--
-- TOC entry 5577 (class 1259 OID 18102)
-- Name: idx_personal_fechaegreso; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_fechaegreso ON public.personal USING btree (fecha_egreso);


--
-- TOC entry 5578 (class 1259 OID 18103)
-- Name: idx_personal_fechaingreso; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_fechaingreso ON public.personal USING btree (fecha_ingreso);


--
-- TOC entry 5579 (class 1259 OID 18104)
-- Name: idx_personal_persona; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_persona ON public.personal USING btree (persona_id);


--
-- TOC entry 5580 (class 1259 OID 18105)
-- Name: idx_personal_usuariocreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_personal_usuariocreacion ON public.personal USING btree (usuario_creacion_id);


--
-- TOC entry 5599 (class 1259 OID 18106)
-- Name: idx_prestamo_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_prestamo_denuncia ON public.prestamoexpediente USING btree (denuncia_id);


--
-- TOC entry 5600 (class 1259 OID 18107)
-- Name: idx_prestamo_estado; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_prestamo_estado ON public.prestamoexpediente USING btree (estado);


--
-- TOC entry 5601 (class 1259 OID 18108)
-- Name: idx_prestamo_fechadevolucion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_prestamo_fechadevolucion ON public.prestamoexpediente USING btree (fecha_devolucion);


--
-- TOC entry 5602 (class 1259 OID 18109)
-- Name: idx_prestamo_fechaprestamo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_prestamo_fechaprestamo ON public.prestamoexpediente USING btree (fecha_prestamo);


--
-- TOC entry 5603 (class 1259 OID 18110)
-- Name: idx_prestamo_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_prestamo_personal ON public.prestamoexpediente USING btree (personal_id);


--
-- TOC entry 5606 (class 1259 OID 18111)
-- Name: idx_remision_denuncia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_remision_denuncia ON public.remision USING btree (denuncia_id);


--
-- TOC entry 5607 (class 1259 OID 18112)
-- Name: idx_remision_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_remision_fecha ON public.remision USING btree (fecha_remision);


--
-- TOC entry 5608 (class 1259 OID 18113)
-- Name: idx_remision_institucion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_remision_institucion ON public.remision USING btree (institucion_id);


--
-- TOC entry 5619 (class 1259 OID 18114)
-- Name: idx_securestore_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_securestore_activo ON public.securestore USING btree (activo) WHERE (activo = true);


--
-- TOC entry 5620 (class 1259 OID 18115)
-- Name: idx_securestore_clave; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_securestore_clave ON public.securestore USING btree (clave);


--
-- TOC entry 5621 (class 1259 OID 18116)
-- Name: idx_securestore_referencia; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_securestore_referencia ON public.securestore USING btree (tabla_referencia, referencia_id);


--
-- TOC entry 5622 (class 1259 OID 18117)
-- Name: idx_securestore_tipo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_securestore_tipo ON public.securestore USING btree (tipo_dato);


--
-- TOC entry 5623 (class 1259 OID 18118)
-- Name: idx_securestore_version; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_securestore_version ON public.securestore USING btree (version);


--
-- TOC entry 5628 (class 1259 OID 18119)
-- Name: idx_sentencia_conciliacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_sentencia_conciliacion ON public.sentencia USING btree (conciliacion_id);


--
-- TOC entry 5629 (class 1259 OID 18120)
-- Name: idx_sentencia_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_sentencia_fecha ON public.sentencia USING btree (fecha_sentencia);


--
-- TOC entry 5630 (class 1259 OID 18121)
-- Name: idx_sentencia_institucion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_sentencia_institucion ON public.sentencia USING btree (institucion_remitida_id);


--
-- TOC entry 5637 (class 1259 OID 18122)
-- Name: idx_tipodocumento_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_tipodocumento_activo ON public.tipodocumento USING btree (activo) WHERE (activo = true);


--
-- TOC entry 5654 (class 1259 OID 18123)
-- Name: idx_usuario_activo; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_activo ON public.usuario USING btree (activo) WHERE (activo = true);


--
-- TOC entry 5655 (class 1259 OID 18124)
-- Name: idx_usuario_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_email ON public.usuario USING btree (email);


--
-- TOC entry 5656 (class 1259 OID 18125)
-- Name: idx_usuario_fechacreacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_fechacreacion ON public.usuario USING btree (fecha_creacion);


--
-- TOC entry 5657 (class 1259 OID 18126)
-- Name: idx_usuario_intentosfallidos; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_intentosfallidos ON public.usuario USING btree (intentos_fallidos) WHERE (intentos_fallidos > 0);


--
-- TOC entry 5658 (class 1259 OID 18127)
-- Name: idx_usuario_nombre; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_nombre ON public.usuario USING btree (nombre_usuario);


--
-- TOC entry 5659 (class 1259 OID 18128)
-- Name: idx_usuario_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_personal ON public.usuario USING btree (personal_id);


--
-- TOC entry 5660 (class 1259 OID 18129)
-- Name: idx_usuario_rol; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_rol ON public.usuario USING btree (rol_id);


--
-- TOC entry 5661 (class 1259 OID 18130)
-- Name: idx_usuario_ultimoacceso; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_usuario_ultimoacceso ON public.usuario USING btree (ultimo_acceso);


--
-- TOC entry 5670 (class 1259 OID 18131)
-- Name: idx_votoconciliacion_conciliacion; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_votoconciliacion_conciliacion ON public.votoconciliacion USING btree (conciliacion_id);


--
-- TOC entry 5671 (class 1259 OID 18132)
-- Name: idx_votoconciliacion_fecha; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_votoconciliacion_fecha ON public.votoconciliacion USING btree (fecha_voto);


--
-- TOC entry 5672 (class 1259 OID 18133)
-- Name: idx_votoconciliacion_personal; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_votoconciliacion_personal ON public.votoconciliacion USING btree (personal_id);


--
-- TOC entry 5673 (class 1259 OID 18134)
-- Name: idx_votoconciliacion_voto; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_votoconciliacion_voto ON public.votoconciliacion USING btree (voto);


--
-- TOC entry 5585 (class 1259 OID 18135)
-- Name: personal_access_tokens_expires_at_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX personal_access_tokens_expires_at_index ON public.personal_access_tokens USING btree (expires_at);


--
-- TOC entry 5590 (class 1259 OID 18136)
-- Name: personal_access_tokens_tokenable_type_tokenable_id_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public.personal_access_tokens USING btree (tokenable_type, tokenable_id);


--
-- TOC entry 5964 (class 2618 OID 17902)
-- Name: vw_denuncias_activas _RETURN; Type: RULE; Schema: public; Owner: postgres
--

CREATE OR REPLACE VIEW public.vw_denuncias_activas AS
 SELECT d.denuncia_id,
    d.numero_expediente,
    concat(p.nombres, ' ', p.apellidos) AS denunciante,
    tc.nombre AS tipo_conflicto,
    ed.nombre AS estado,
    d.fecha_ingreso,
    count(i.involucrado_id) AS total_involucrados,
    u.nombre_usuario AS creado_por
   FROM (((((public.denuncia d
     JOIN public.persona p ON ((d.persona_id = p.persona_id)))
     JOIN public.tipoconflicto tc ON ((d.tipo_conflicto_id = tc.tipo_conflicto_id)))
     JOIN public.estadodenuncia ed ON ((d.estado_denuncia_id = ed.estado_denuncia_id)))
     LEFT JOIN public.involucrado i ON ((d.denuncia_id = i.denuncia_id)))
     LEFT JOIN public.usuario u ON ((d.usuario_creacion_id = u.usuario_id)))
  WHERE ((ed.nombre)::text <> ALL (ARRAY[('ARCHIVADA'::character varying)::text, ('CERRADA'::character varying)::text]))
  GROUP BY d.denuncia_id, p.nombres, p.apellidos, tc.nombre, ed.nombre, u.nombre_usuario
  ORDER BY d.fecha_ingreso DESC;


--
-- TOC entry 5812 (class 2620 OID 107288)
-- Name: chatbot_base_conocimiento tr_actualizar_base; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_base BEFORE UPDATE ON public.chatbot_base_conocimiento FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp_chatbot();


--
-- TOC entry 5794 (class 2620 OID 18138)
-- Name: conciliacion tr_actualizar_conciliacion; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_conciliacion BEFORE UPDATE ON public.conciliacion FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp();


--
-- TOC entry 5809 (class 2620 OID 107287)
-- Name: chatbot_conversaciones tr_actualizar_conv; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_conv BEFORE UPDATE ON public.chatbot_conversaciones FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp_chatbot();


--
-- TOC entry 5795 (class 2620 OID 18139)
-- Name: denuncia tr_actualizar_denuncia; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_denuncia BEFORE UPDATE ON public.denuncia FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp();


--
-- TOC entry 5799 (class 2620 OID 18140)
-- Name: persona tr_actualizar_persona; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_persona BEFORE UPDATE ON public.persona FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp();


--
-- TOC entry 5801 (class 2620 OID 18141)
-- Name: personal tr_actualizar_personal; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_personal BEFORE UPDATE ON public.personal FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp();


--
-- TOC entry 5803 (class 2620 OID 18142)
-- Name: securestore tr_actualizar_securestore; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_actualizar_securestore BEFORE UPDATE ON public.securestore FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_timestamp();


--
-- TOC entry 5816 (class 2620 OID 107298)
-- Name: chatbot_calificaciones tr_auditar_calificacion_chat; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_calificacion_chat AFTER INSERT ON public.chatbot_calificaciones FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_calificacion_chat();


--
-- TOC entry 5810 (class 2620 OID 107292)
-- Name: chatbot_mensajes tr_auditar_codigo_maestro_chat; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_codigo_maestro_chat AFTER INSERT ON public.chatbot_mensajes FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_codigo_maestro_chat();


--
-- TOC entry 5813 (class 2620 OID 107296)
-- Name: chatbot_base_conocimiento tr_auditar_kb_delete; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_kb_delete BEFORE DELETE ON public.chatbot_base_conocimiento FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_base_conocimiento();


--
-- TOC entry 5814 (class 2620 OID 107294)
-- Name: chatbot_base_conocimiento tr_auditar_kb_insert; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_kb_insert AFTER INSERT ON public.chatbot_base_conocimiento FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_base_conocimiento();


--
-- TOC entry 5815 (class 2620 OID 107295)
-- Name: chatbot_base_conocimiento tr_auditar_kb_update; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_kb_update AFTER UPDATE ON public.chatbot_base_conocimiento FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_base_conocimiento();


--
-- TOC entry 5811 (class 2620 OID 107290)
-- Name: chatbot_mensajes tr_auditar_mensaje_chatbot; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_auditar_mensaje_chatbot AFTER INSERT ON public.chatbot_mensajes FOR EACH ROW EXECUTE FUNCTION public.fn_auditar_mensaje_chatbot();


--
-- TOC entry 5796 (class 2620 OID 18143)
-- Name: denuncia tr_generar_codigo_qr; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_generar_codigo_qr BEFORE INSERT ON public.denuncia FOR EACH ROW EXECUTE FUNCTION public.fn_generar_codigo_qr();


--
-- TOC entry 5797 (class 2620 OID 18144)
-- Name: denuncia tr_historial_denuncia; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_historial_denuncia AFTER INSERT OR UPDATE ON public.denuncia FOR EACH ROW EXECUTE FUNCTION public.fn_historial_denuncia();


--
-- TOC entry 5798 (class 2620 OID 18145)
-- Name: denuncia tr_historial_estado; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_historial_estado AFTER UPDATE ON public.denuncia FOR EACH ROW EXECUTE FUNCTION public.fn_historial_estado();


--
-- TOC entry 5793 (class 2620 OID 65749)
-- Name: asistencia tr_validar_asistencia; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_validar_asistencia BEFORE INSERT OR UPDATE ON public.asistencia FOR EACH ROW EXECUTE FUNCTION public.fn_validar_asistencia_actualizado();


--
-- TOC entry 5802 (class 2620 OID 18147)
-- Name: prestamoexpediente tr_validar_prestamo; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER tr_validar_prestamo BEFORE INSERT OR UPDATE ON public.prestamoexpediente FOR EACH ROW EXECUTE FUNCTION public.fn_validar_prestamo();


--
-- TOC entry 5804 (class 2620 OID 18148)
-- Name: votoconciliacion trg_actualizar_estado_conciliacion; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trg_actualizar_estado_conciliacion AFTER INSERT ON public.votoconciliacion FOR EACH ROW EXECUTE FUNCTION public.fn_actualizar_estado_conciliacion();


--
-- TOC entry 5805 (class 2620 OID 18149)
-- Name: votoconciliacion trg_validar_max_votos; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trg_validar_max_votos BEFORE INSERT ON public.votoconciliacion FOR EACH ROW EXECUTE FUNCTION public.fn_validar_max_votos();


--
-- TOC entry 5806 (class 2620 OID 18150)
-- Name: votoconciliacion trg_validar_personal_activo; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trg_validar_personal_activo BEFORE INSERT ON public.votoconciliacion FOR EACH ROW EXECUTE FUNCTION public.fn_validar_personal_activo();


--
-- TOC entry 5800 (class 2620 OID 18151)
-- Name: persona trigger_historial_persona; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_historial_persona BEFORE DELETE ON public.persona FOR EACH ROW EXECUTE FUNCTION public.fn_historial_persona_completo();


--
-- TOC entry 5807 (class 2620 OID 32828)
-- Name: codigos_otp trigger_update_codigos_otp_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_update_codigos_otp_updated_at BEFORE UPDATE ON public.codigos_otp FOR EACH ROW EXECUTE FUNCTION public.update_codigos_otp_updated_at();


--
-- TOC entry 5808 (class 2620 OID 57547)
-- Name: evidencias update_evidencias_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_evidencias_updated_at BEFORE UPDATE ON public.evidencias FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- TOC entry 5790 (class 2606 OID 107232)
-- Name: chatbot_base_conocimiento chatbot_base_conocimiento_creado_por_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_base_conocimiento
    ADD CONSTRAINT chatbot_base_conocimiento_creado_por_fkey FOREIGN KEY (creado_por) REFERENCES public.usuario(usuario_id);


--
-- TOC entry 5791 (class 2606 OID 107254)
-- Name: chatbot_calificaciones chatbot_calificaciones_mensaje_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_calificaciones
    ADD CONSTRAINT chatbot_calificaciones_mensaje_id_fkey FOREIGN KEY (mensaje_id) REFERENCES public.chatbot_mensajes(id) ON DELETE CASCADE;


--
-- TOC entry 5792 (class 2606 OID 107259)
-- Name: chatbot_calificaciones chatbot_calificaciones_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_calificaciones
    ADD CONSTRAINT chatbot_calificaciones_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id);


--
-- TOC entry 5788 (class 2606 OID 107179)
-- Name: chatbot_conversaciones chatbot_conversaciones_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_conversaciones
    ADD CONSTRAINT chatbot_conversaciones_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5789 (class 2606 OID 107204)
-- Name: chatbot_mensajes chatbot_mensajes_conversacion_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatbot_mensajes
    ADD CONSTRAINT chatbot_mensajes_conversacion_id_fkey FOREIGN KEY (conversacion_id) REFERENCES public.chatbot_conversaciones(id) ON DELETE CASCADE;


--
-- TOC entry 5755 (class 2606 OID 18152)
-- Name: persona fk_activado_por; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT fk_activado_por FOREIGN KEY (activado_por) REFERENCES public.usuario(usuario_id);


--
-- TOC entry 5785 (class 2606 OID 57481)
-- Name: alerta fk_alerta_creado_por; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta
    ADD CONSTRAINT fk_alerta_creado_por FOREIGN KEY (creado_por) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5786 (class 2606 OID 57476)
-- Name: alerta fk_alerta_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta
    ADD CONSTRAINT fk_alerta_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON DELETE CASCADE;


--
-- TOC entry 5729 (class 2606 OID 18157)
-- Name: asistencia fk_asistencia_estado; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_asistencia_estado FOREIGN KEY (estado_asistencia_id) REFERENCES public.estadoasistencia(estado_asistencia_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5730 (class 2606 OID 18162)
-- Name: asistencia fk_asistencia_horario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_asistencia_horario FOREIGN KEY (horario_id) REFERENCES public.horario(horario_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5731 (class 2606 OID 18167)
-- Name: asistencia fk_asistencia_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_asistencia_personal FOREIGN KEY (personal_id) REFERENCES public.personal(personal_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5732 (class 2606 OID 65722)
-- Name: asistencia fk_asistencia_usuario_registro; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_asistencia_usuario_registro FOREIGN KEY (usuario_registro_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5784 (class 2606 OID 57448)
-- Name: backup fk_backup_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.backup
    ADD CONSTRAINT fk_backup_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5783 (class 2606 OID 32818)
-- Name: codigos_otp fk_codigos_otp_generado_por; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codigos_otp
    ADD CONSTRAINT fk_codigos_otp_generado_por FOREIGN KEY (generado_por) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5733 (class 2606 OID 18177)
-- Name: conciliacion fk_conciliacion_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conciliacion
    ADD CONSTRAINT fk_conciliacion_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5734 (class 2606 OID 18182)
-- Name: conciliacion fk_conciliacion_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conciliacion
    ADD CONSTRAINT fk_conciliacion_personal FOREIGN KEY (personal_conciliador_id) REFERENCES public.personal(personal_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5735 (class 2606 OID 18187)
-- Name: conciliacion fk_conciliacion_usuario_actualizacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conciliacion
    ADD CONSTRAINT fk_conciliacion_usuario_actualizacion FOREIGN KEY (usuario_actualizacion_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5736 (class 2606 OID 18192)
-- Name: conciliacion fk_conciliacion_usuario_creacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conciliacion
    ADD CONSTRAINT fk_conciliacion_usuario_creacion FOREIGN KEY (usuario_creacion_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5737 (class 2606 OID 18197)
-- Name: configuracionhistorial fk_configuracionhistorial_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configuracionhistorial
    ADD CONSTRAINT fk_configuracionhistorial_usuario FOREIGN KEY (usuario_cambio_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5738 (class 2606 OID 18202)
-- Name: denuncia fk_denuncia_estadodenuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT fk_denuncia_estadodenuncia FOREIGN KEY (estado_denuncia_id) REFERENCES public.estadodenuncia(estado_denuncia_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5739 (class 2606 OID 18207)
-- Name: denuncia fk_denuncia_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT fk_denuncia_persona FOREIGN KEY (persona_id) REFERENCES public.persona(persona_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5740 (class 2606 OID 18212)
-- Name: denuncia fk_denuncia_tipoconflicto; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT fk_denuncia_tipoconflicto FOREIGN KEY (tipo_conflicto_id) REFERENCES public.tipoconflicto(tipo_conflicto_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5741 (class 2606 OID 18217)
-- Name: denuncia fk_denuncia_usuarioactualizacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT fk_denuncia_usuarioactualizacion FOREIGN KEY (usuario_actualizacion_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5742 (class 2606 OID 18222)
-- Name: denuncia fk_denuncia_usuariocreacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denuncia
    ADD CONSTRAINT fk_denuncia_usuariocreacion FOREIGN KEY (usuario_creacion_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5743 (class 2606 OID 18227)
-- Name: denunciahistorial fk_denunciahistorial_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.denunciahistorial
    ADD CONSTRAINT fk_denunciahistorial_usuario FOREIGN KEY (usuario_cambio_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5744 (class 2606 OID 18232)
-- Name: estadohistorial fk_estadohistorial_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estadohistorial
    ADD CONSTRAINT fk_estadohistorial_usuario FOREIGN KEY (usuario_transicion_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5787 (class 2606 OID 57538)
-- Name: evidencias fk_evidencias_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evidencias
    ADD CONSTRAINT fk_evidencias_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON DELETE CASCADE;


--
-- TOC entry 5745 (class 2606 OID 65733)
-- Name: horario fk_horario_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT fk_horario_personal FOREIGN KEY (personal_id) REFERENCES public.personal(personal_id) ON DELETE CASCADE;


--
-- TOC entry 5746 (class 2606 OID 65743)
-- Name: horario fk_horario_usuario_actualizacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT fk_horario_usuario_actualizacion FOREIGN KEY (usuario_actualizacion_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5747 (class 2606 OID 65738)
-- Name: horario fk_horario_usuario_creacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT fk_horario_usuario_creacion FOREIGN KEY (usuario_creacion_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5748 (class 2606 OID 18237)
-- Name: involucrado fk_involucrado_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucrado
    ADD CONSTRAINT fk_involucrado_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5749 (class 2606 OID 18242)
-- Name: involucrado fk_involucrado_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucrado
    ADD CONSTRAINT fk_involucrado_persona FOREIGN KEY (persona_id) REFERENCES public.persona(persona_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5750 (class 2606 OID 18247)
-- Name: logauditoria fk_logauditoria_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logauditoria
    ADD CONSTRAINT fk_logauditoria_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5751 (class 2606 OID 18252)
-- Name: medidacautelar fk_medidacautelar_conciliacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medidacautelar
    ADD CONSTRAINT fk_medidacautelar_conciliacion FOREIGN KEY (conciliacion_id) REFERENCES public.conciliacion(conciliacion_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5752 (class 2606 OID 18257)
-- Name: medidacautelar fk_medidacautelar_tipomedida; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medidacautelar
    ADD CONSTRAINT fk_medidacautelar_tipomedida FOREIGN KEY (tipo_medida_id) REFERENCES public.tipomedida(tipo_medida_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5753 (class 2606 OID 18262)
-- Name: notificacion fk_notificacion_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacion
    ADD CONSTRAINT fk_notificacion_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5754 (class 2606 OID 18267)
-- Name: notificacion fk_notificacion_tiponotificacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificacion
    ADD CONSTRAINT fk_notificacion_tiponotificacion FOREIGN KEY (tipo_notificacion_id) REFERENCES public.tiponotificacion(tipo_notificacion_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5756 (class 2606 OID 18272)
-- Name: persona fk_persona_estadocivil; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT fk_persona_estadocivil FOREIGN KEY (estado_civil_id) REFERENCES public.estadocivil(estado_civil_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5757 (class 2606 OID 18277)
-- Name: persona fk_persona_genero; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT fk_persona_genero FOREIGN KEY (genero_id) REFERENCES public.genero(genero_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5758 (class 2606 OID 18282)
-- Name: persona fk_persona_tipodocumento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT fk_persona_tipodocumento FOREIGN KEY (tipo_documento_id) REFERENCES public.tipodocumento(tipo_documento_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5759 (class 2606 OID 18287)
-- Name: persona fk_persona_tipovinculo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT fk_persona_tipovinculo FOREIGN KEY (tipo_vinculo_id) REFERENCES public.tipovinculo(tipo_vinculo_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5760 (class 2606 OID 18292)
-- Name: personahistorial fk_personahistorial_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personahistorial
    ADD CONSTRAINT fk_personahistorial_usuario FOREIGN KEY (usuario_cambio_id) REFERENCES public.usuario(usuario_id) ON DELETE SET NULL;


--
-- TOC entry 5761 (class 2606 OID 18297)
-- Name: personal fk_personal_cargo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT fk_personal_cargo FOREIGN KEY (cargo_id) REFERENCES public.cargo(cargo_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5762 (class 2606 OID 18302)
-- Name: personal fk_personal_persona; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT fk_personal_persona FOREIGN KEY (persona_id) REFERENCES public.persona(persona_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5763 (class 2606 OID 18307)
-- Name: personal fk_personal_usuarioactualizacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT fk_personal_usuarioactualizacion FOREIGN KEY (usuario_actualizacion_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5764 (class 2606 OID 18312)
-- Name: personal fk_personal_usuariocreacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT fk_personal_usuariocreacion FOREIGN KEY (usuario_creacion_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5765 (class 2606 OID 18317)
-- Name: prestamoexpediente fk_prestamo_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamoexpediente
    ADD CONSTRAINT fk_prestamo_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5766 (class 2606 OID 18322)
-- Name: prestamoexpediente fk_prestamo_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamoexpediente
    ADD CONSTRAINT fk_prestamo_personal FOREIGN KEY (personal_id) REFERENCES public.personal(personal_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5767 (class 2606 OID 18327)
-- Name: prestamoexpediente fk_prestamo_usuariorecibido; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestamoexpediente
    ADD CONSTRAINT fk_prestamo_usuariorecibido FOREIGN KEY (usuario_recibido_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5768 (class 2606 OID 18332)
-- Name: remision fk_remision_denuncia; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remision
    ADD CONSTRAINT fk_remision_denuncia FOREIGN KEY (denuncia_id) REFERENCES public.denuncia(denuncia_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5769 (class 2606 OID 18337)
-- Name: remision fk_remision_institucion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.remision
    ADD CONSTRAINT fk_remision_institucion FOREIGN KEY (institucion_id) REFERENCES public.institucion(institucion_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5770 (class 2606 OID 18347)
-- Name: restauracion fk_restauracion_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restauracion
    ADD CONSTRAINT fk_restauracion_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5771 (class 2606 OID 18352)
-- Name: rolpermiso fk_rolpermiso_permiso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rolpermiso
    ADD CONSTRAINT fk_rolpermiso_permiso FOREIGN KEY (permiso_id) REFERENCES public.permiso(permiso_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5772 (class 2606 OID 18357)
-- Name: rolpermiso fk_rolpermiso_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rolpermiso
    ADD CONSTRAINT fk_rolpermiso_rol FOREIGN KEY (rol_id) REFERENCES public.rol(rol_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5773 (class 2606 OID 18362)
-- Name: securestore fk_securestore_usuarioactualizacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.securestore
    ADD CONSTRAINT fk_securestore_usuarioactualizacion FOREIGN KEY (usuario_actualizacion_id) REFERENCES public.usuario(usuario_id);


--
-- TOC entry 5774 (class 2606 OID 18367)
-- Name: securestore fk_securestore_usuariocreacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.securestore
    ADD CONSTRAINT fk_securestore_usuariocreacion FOREIGN KEY (usuario_creacion_id) REFERENCES public.usuario(usuario_id);


--
-- TOC entry 5775 (class 2606 OID 18372)
-- Name: sentencia fk_sentencia_conciliacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentencia
    ADD CONSTRAINT fk_sentencia_conciliacion FOREIGN KEY (conciliacion_id) REFERENCES public.conciliacion(conciliacion_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5776 (class 2606 OID 18377)
-- Name: sentencia fk_sentencia_institucion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentencia
    ADD CONSTRAINT fk_sentencia_institucion FOREIGN KEY (institucion_remitida_id) REFERENCES public.institucion(institucion_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5777 (class 2606 OID 18382)
-- Name: usuario fk_usuario_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fk_usuario_personal FOREIGN KEY (personal_id) REFERENCES public.personal(personal_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 5778 (class 2606 OID 18387)
-- Name: usuario fk_usuario_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fk_usuario_rol FOREIGN KEY (rol_id) REFERENCES public.rol(rol_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5779 (class 2606 OID 18392)
-- Name: usuariopregunta fk_usuariopregunta_pregunta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuariopregunta
    ADD CONSTRAINT fk_usuariopregunta_pregunta FOREIGN KEY (pregunta_id) REFERENCES public.preguntaseguridad(pregunta_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5780 (class 2606 OID 18397)
-- Name: usuariopregunta fk_usuariopregunta_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuariopregunta
    ADD CONSTRAINT fk_usuariopregunta_usuario FOREIGN KEY (usuario_id) REFERENCES public.usuario(usuario_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 5781 (class 2606 OID 18402)
-- Name: votoconciliacion fk_votoconciliacion_conciliacion; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votoconciliacion
    ADD CONSTRAINT fk_votoconciliacion_conciliacion FOREIGN KEY (conciliacion_id) REFERENCES public.conciliacion(conciliacion_id) ON DELETE CASCADE;


--
-- TOC entry 5782 (class 2606 OID 18407)
-- Name: votoconciliacion fk_votoconciliacion_personal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votoconciliacion
    ADD CONSTRAINT fk_votoconciliacion_personal FOREIGN KEY (personal_id) REFERENCES public.personal(personal_id) ON DELETE RESTRICT;


-- Completed on 2026-05-12 04:58:48

--
-- PostgreSQL database dump complete
--

\unrestrict uauvCz0HLNbSBNGjb3zSbOpIcwGCWXqK5mVXIow4iMdps0XIJnXLhwBO4f1LFWp

