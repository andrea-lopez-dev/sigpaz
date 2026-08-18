"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["default-src_app_services_remision-conciliacion_service_ts-src_app_services_sentencia_service_ts"],{

/***/ 52768:
/*!***********************************************************!*\
  !*** ./src/app/services/remision-conciliacion.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemisionConciliacionService: () => (/* binding */ RemisionConciliacionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 11817);






class RemisionConciliacionService {
  http;
  apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // ========== MÉTODOS PARA REMISIÓN ==========
  /**
   * Listar remisiones de una denuncia
   * GET /api/remisiones?denuncia_id={denunciaId}
   */
  listarRemisiones(denunciaId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (denunciaId) {
      params = params.set('denuncia_id', denunciaId.toString());
    }
    return this.http.get(`${this.apiUrl}/remisiones`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return response.data.map(remision => ({
          ...remision,
          estado: this.calcularEstadoRemision(remision),
          bloqueo_conciliacion: true // Por defecto una remisión bloquea conciliación
        }));
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener remisión por ID
   * GET /api/remisiones/{id}
   */
  obtenerRemision(id) {
    return this.http.get(`${this.apiUrl}/remisiones/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          ...response.data,
          estado: this.calcularEstadoRemision(response.data),
          bloqueo_conciliacion: true
        };
      }
      throw new Error('Remisión no encontrada');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Crear remisión
   * POST /api/remisiones
   */
  crearRemision(dto) {
    return this.http.post(`${this.apiUrl}/remisiones`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          ...response.data,
          estado: this.calcularEstadoRemision(response.data),
          bloqueo_conciliacion: true
        };
      }
      throw new Error(response.message || 'Error al crear remisión');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Actualizar remisión
   * PUT /api/remisiones/{id}
   */
  actualizarRemision(id, dto) {
    return this.http.put(`${this.apiUrl}/remisiones/${id}`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          ...response.data,
          estado: this.calcularEstadoRemision(response.data),
          bloqueo_conciliacion: true
        };
      }
      throw new Error(response.message || 'Error al actualizar remisión');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Eliminar remisión
   * DELETE /api/remisiones/{id}
   */
  eliminarRemision(id) {
    return this.http.delete(`${this.apiUrl}/remisiones/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener historial de remisiones de una denuncia
   * GET /api/remisiones/historial/{denunciaId}
   */
  obtenerHistorialRemisiones(denunciaId) {
    return this.http.get(`${this.apiUrl}/remisiones/historial/${denunciaId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.success ? response.data : null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS PARA CONCILIACIÓN ==========
  obtenerConciliacion(id) {
    console.log('📤 Solicitando conciliación:', id);
    return this.http.get(`${this.apiUrl}/conciliaciones/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      console.log('📥 Respuesta de conciliación:', response);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        const conciliacion = response.data;
        // 👈 CALCULAR ESTADÍSTICAS
        if (conciliacion.votos && Array.isArray(conciliacion.votos)) {
          conciliacion.votos_favor = conciliacion.votos.filter(v => v.voto === true).length;
          conciliacion.votos_contra = conciliacion.votos.filter(v => v.voto === false).length;
          conciliacion.total_votos = conciliacion.votos.length;
        } else {
          conciliacion.votos_favor = conciliacion.votos_favor || 0;
          conciliacion.votos_contra = conciliacion.votos_contra || 0;
          conciliacion.total_votos = conciliacion.total_votos || 0;
        }
        conciliacion.votos_restantes = 6 - conciliacion.total_votos;
        conciliacion.puede_votar = conciliacion.total_votos < 6;
        return {
          ...conciliacion,
          fecha_audiencia: conciliacion.fecha_inicio,
          participantes: conciliacion.votos?.map(v => v.personal?.persona?.nombre_completo || '') || [],
          bloqueo_remision: conciliacion.estado !== 'COMPLETA'
        };
      }
      throw new Error('Conciliación no encontrada');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Crear conciliación
   * POST /api/conciliaciones
   */
  crearConciliacion(dto) {
    return this.http.post(`${this.apiUrl}/conciliaciones`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          ...response.data,
          fecha_audiencia: response.data.fecha_inicio,
          // 👇 QUITAR lugar fijo
          // lugar: 'Sala de Conciliación Principal',
          participantes: [],
          bloqueo_remision: true
        };
      }
      throw new Error(response.message || 'Error al crear conciliación');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  registrarVoto(conciliacionId, dto) {
    console.log('📤 Enviando voto al backend:', {
      conciliacionId,
      dto
    });
    return this.http.post(`${this.apiUrl}/conciliaciones/${conciliacionId}/votos`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      console.log('📥 Respuesta del backend al votar:', response);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        console.log('✅ Datos de conciliación recibidos:', response.data);
        return response.data;
      }
      throw new Error(response.message || 'Error al registrar voto');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Iniciar conciliación (cambiar estado a EN_PROCESO)
   * POST /api/conciliaciones/{id}/iniciar
   */
  iniciarConciliacion(id) {
    console.log('📤 Iniciando conciliación:', id);
    return this.http.post(`${this.apiUrl}/conciliaciones/${id}/iniciar`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      console.log('📥 Respuesta al iniciar conciliación:', response);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          ...response.data,
          fecha_audiencia: response.data.fecha_inicio,
          participantes: response.data.votos?.map(v => v.personal?.persona?.nombre_completo || '') || [],
          bloqueo_remision: response.data.estado !== 'COMPLETA'
        };
      }
      throw new Error(response.message || 'Error al iniciar conciliación');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  listarConciliaciones(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.keys(filtros).forEach(key => {
        if (filtros[key] !== null && filtros[key] !== undefined && filtros[key] !== '') {
          params = params.set(key, filtros[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/conciliaciones`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return response.data.map(conciliacion => {
          // 👈 CALCULAR ESTADÍSTICAS PARA CADA CONCILIACIÓN
          let votos_favor = 0;
          let votos_contra = 0;
          let total_votos = 0;
          if (conciliacion.votos && Array.isArray(conciliacion.votos)) {
            votos_favor = conciliacion.votos.filter(v => v.voto === true).length;
            votos_contra = conciliacion.votos.filter(v => v.voto === false).length;
            total_votos = conciliacion.votos.length;
          }
          return {
            ...conciliacion,
            votos_favor,
            votos_contra,
            total_votos,
            votos_restantes: 6 - total_votos,
            fecha_audiencia: conciliacion.fecha_inicio,
            participantes: conciliacion.votos?.map(v => v.personal?.persona?.nombre_completo || '') || [],
            bloqueo_remision: conciliacion.estado !== 'COMPLETA'
          };
        });
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener personal disponible para votar
   * GET /api/conciliaciones/{conciliacionId}/personal-disponible
   */
  obtenerPersonalDisponible(conciliacionId) {
    return this.http.get(`${this.apiUrl}/conciliaciones/${conciliacionId}/personal-disponible`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        // Asegurarse de que los datos tengan la estructura esperada
        return {
          ...response.data,
          personal_disponible: response.data.personal_disponible.map(p => ({
            ...p,
            usado: false,
            // Inicializar usado como false
            // Asegurar que nombre_completo exista
            nombre_completo: p.nombre_completo || 'Sin nombre'
          }))
        };
      }
      throw new Error('Error al obtener personal disponible');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener resumen de conciliación
   * GET /api/conciliaciones/{conciliacionId}/resumen
   */
  obtenerResumenConciliacion(conciliacionId) {
    return this.http.get(`${this.apiUrl}/conciliaciones/${conciliacionId}/resumen`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error('Error al obtener resumen');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Verificar si una denuncia tiene conciliación
   * GET /api/conciliaciones/verificar-denuncia/{denunciaId}
   */
  verificarDenuncia(denunciaId) {
    return this.http.get(`${this.apiUrl}/conciliaciones/verificar-denuncia/${denunciaId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return {
          tiene_conciliacion: response.data.tiene_conciliacion,
          conciliacion: response.data.conciliacion
        };
      }
      return {
        tiene_conciliacion: false
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS DE APOYO ==========
  /**
   * Calcular estado de remisión basado en fecha
   */
  calcularEstadoRemision(remision) {
    const fechaRemision = new Date(remision.fecha_remision);
    const ahora = new Date();
    const diferenciaDias = Math.floor((ahora.getTime() - fechaRemision.getTime()) / (1000 * 60 * 60 * 24));
    if (diferenciaDias < 7) {
      return 'pendiente';
    } else if (diferenciaDias < 30) {
      return 'en_proceso';
    } else {
      return 'completada';
    }
  }
  /**
   * Mapear estado de backend a frontend
   */
  mapearEstado(estadoBackend) {
    const mapa = {
      'INCOMPLETA': 'pendiente',
      'EN_PROCESO': 'en_proceso',
      'COMPLETA': 'finalizada'
    };
    return mapa[estadoBackend] || estadoBackend;
  }
  /**
   * Mapear resultado de backend a frontend
   */
  mapearResultado(resultadoBackend) {
    const mapa = {
      'APROBADA': 'acuerdo',
      'RECHAZADA': 'desacuerdo',
      'EMPATE': 'empate'
    };
    return resultadoBackend ? mapa[resultadoBackend] || resultadoBackend : 'pendiente';
  }
  handleError(error) {
    console.error('Error en RemisionConciliacionService:', error);
    let errorMessage = 'Error en la operación';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 404) {
      errorMessage = 'Recurso no encontrado';
    } else if (error.status === 422) {
      errorMessage = error.error?.message || 'Error de validación';
    } else if (error.status === 403) {
      errorMessage = 'No tiene permisos para esta acción';
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  static ɵfac = function RemisionConciliacionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RemisionConciliacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: RemisionConciliacionService,
    factory: RemisionConciliacionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74950:
/*!***********************************************!*\
  !*** ./src/app/services/sentencia.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SentenciaService: () => (/* binding */ SentenciaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 11817);






class SentenciaService {
  http;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Listar sentencias con filtros
   */
  listarSentencias(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params = params.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/sentencias`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Sentencias recibidas:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        // Procesar cada sentencia para agregar datos de UI
        const data = response.data.map(sentencia => this.procesarSentencia(sentencia));
        return {
          data,
          meta: response.meta || {
            current_page: 1,
            last_page: 1,
            per_page: filtros?.per_page || 15,
            total: data.length
          }
        };
      }
      return {
        data: [],
        meta: {
          total: 0
        }
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener una sentencia por ID
   */
  obtenerSentencia(id) {
    return this.http.get(`${this.apiUrl}/sentencias/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log(`📥 Sentencia ${id} recibida:`, response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarSentencia(response.data);
      }
      throw new Error('Sentencia no encontrada');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Crear nueva sentencia
   */
  crearSentencia(dto) {
    console.log('📤 Creando sentencia:', dto);
    return this.http.post(`${this.apiUrl}/sentencias`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Respuesta creación sentencia:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarSentencia(response.data);
      }
      throw new Error(response.message || 'Error al crear sentencia');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Actualizar sentencia
   */
  actualizarSentencia(id, dto) {
    console.log('📤 Actualizando sentencia:', {
      id,
      dto
    });
    return this.http.put(`${this.apiUrl}/sentencias/${id}`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Respuesta actualización sentencia:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarSentencia(response.data);
      }
      throw new Error(response.message || 'Error al actualizar sentencia');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Eliminar sentencia
   */
  eliminarSentencia(id) {
    return this.http.delete(`${this.apiUrl}/sentencias/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Cambiar estado de ejecución
   */
  cambiarEstadoEjecucion(id, estado, observaciones) {
    return this.http.patch(`${this.apiUrl}/sentencias/${id}/cambiar-estado`, {
      estado_ejecucion: estado,
      observaciones
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarSentencia(response.data);
      }
      throw new Error(response.message || 'Error al cambiar estado');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener estadísticas
   */
  obtenerEstadisticas() {
    return this.http.get(`${this.apiUrl}/sentencias/estadisticas`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      return {
        por_estado: {},
        por_mes: [],
        total: 0,
        pendientes: 0,
        ejecutadas: 0
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Procesar sentencia para UI
   */
  procesarSentencia(sentencia) {
    // Extraer información de denuncia
    let denunciaCodigo = '';
    let denunciaDescripcion = '';
    let conciliacionInfo = '';
    if (sentencia.conciliacion) {
      conciliacionInfo = `CONC-${sentencia.conciliacion.conciliacion_id}`;
      if (sentencia.conciliacion.denuncia) {
        denunciaCodigo = sentencia.conciliacion.denuncia.numero_expediente || sentencia.conciliacion.denuncia.codigo_externo || `DEN-${sentencia.conciliacion.denuncia.denuncia_id}`;
        denunciaDescripcion = sentencia.conciliacion.denuncia.descripcion || '';
      }
    }
    return {
      ...sentencia,
      tiene_contenido: !!sentencia.contenido,
      estado_ejecucion_texto: this.getEstadoEjecucionTexto(sentencia.estado_ejecucion),
      denuncia_codigo: denunciaCodigo,
      denuncia_descripcion: denunciaDescripcion,
      conciliacion_info: conciliacionInfo
    };
  }
  /**
   * Obtener texto legible para estado de ejecución
   */
  getEstadoEjecucionTexto(estado) {
    const estados = {
      'PENDIENTE': 'Pendiente de Ejecución',
      'EN_EJECUCION': 'En Ejecución',
      'EJECUTADA': 'Ejecutada',
      'PARCIALMENTE_EJECUTADA': 'Parcialmente Ejecutada',
      'SUSPENDIDA': 'Suspendida',
      'ARCHIVADA': 'Archivada'
    };
    return estados[estado] || estado;
  }
  handleError(error) {
    console.error('Error en SentenciaService:', error);
    let errorMessage = 'Error en la operación';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 404) {
      errorMessage = 'Recurso no encontrado';
    } else if (error.status === 422) {
      errorMessage = error.error?.message || 'Error de validación';
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  static ɵfac = function SentenciaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SentenciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: SentenciaService,
    factory: SentenciaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_remision-conciliacion_service_ts-src_app_services_sentencia_service_ts.js.map