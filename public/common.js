(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["common"],{

/***/ 10825:
/*!*************************************************************!*\
  !*** ./src/app/services/conciliacion-disponible.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConciliacionDisponibleService: () => (/* binding */ ConciliacionDisponibleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 50698);





class ConciliacionDisponibleService {
  http;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Obtener conciliaciones disponibles para sentencia
   */
  getParaSentencia() {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/para-sentencia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Conciliaciones para sentencia:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  /**
   * Obtener conciliaciones disponibles para medida cautelar
   */
  getParaMedidaCautelar() {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/para-medida-cautelar`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Conciliaciones para medida:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  /**
   * Obtener todas las conciliaciones consolidadas
   */
  getConsolidadas() {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/consolidadas`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  /**
   * Verificar disponibilidad de una conciliación específica
   */
  verificar(conciliacionId) {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/${conciliacionId}/verificar`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  handleError(error) {
    console.error('Error en ConciliacionDisponibleService:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('Error al obtener conciliaciones disponibles'));
  }
  /**
  * Obtener conciliaciones disponibles para NUEVA conciliación
  * (Excluye las que están COMPLETAS o tienen sentencia/medida)
  */
  getParaNuevaConciliacion() {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/nueva-conciliacion`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Conciliaciones para nueva conciliación:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  /**
   * Obtener conciliaciones disponibles para REMISIÓN
   * (Con sentencia o medida cautelar fallida)
   */
  getParaRemision() {
    return this.http.get(`${this.apiUrl}/conciliaciones-disponibles/remision`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Conciliaciones para remisión:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.success ? response.data : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  static ɵfac = function ConciliacionDisponibleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConciliacionDisponibleService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ConciliacionDisponibleService,
    factory: ConciliacionDisponibleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 16225:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/manuales/pages/manual-usuario/services/pdf-viewer.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfViewerService: () => (/* binding */ PdfViewerService)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);




class PdfViewerService {
  platformId;
  pdfjsLib = null;
  isBrowser;
  constructor(platformId) {
    this.platformId = platformId;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId);
  }
  loadPdfLibrary() {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.isBrowser) {
        return null;
      }
      if (_this.pdfjsLib) {
        return _this.pdfjsLib;
      }
      // Lazy load PDF.js solo en el navegador
      const pdfModule = yield __webpack_require__.e(/*! import() */ "node_modules_pdfjs-dist_build_pdf_js").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfjs-dist */ 55472, 23));
      _this.pdfjsLib = pdfModule;
      // Configurar worker
      _this.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.102/legacy/build/pdf.worker.min.js';
      return _this.pdfjsLib;
    })();
  }
  getDocument(src) {
    var _this2 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isBrowser) {
        return null;
      }
      const pdf = yield _this2.loadPdfLibrary();
      if (!pdf) return null;
      return pdf.getDocument(src).promise;
    })();
  }
  static ɵfac = function PdfViewerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PdfViewerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: PdfViewerService,
    factory: PdfViewerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 34804:
/*!*****************************************************!*\
  !*** ./src/app/services/medida-cautelar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MedidaCautelarService: () => (/* binding */ MedidaCautelarService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 11817);






class MedidaCautelarService {
  http;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Listar medidas cautelares con filtros
   */
  listarMedidas(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params = params.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/medidas-cautelares`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Medidas cautelares recibidas:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        // Procesar cada medida para agregar datos de UI
        const data = response.data.map(medida => this.procesarMedida(medida));
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
   * Obtener una medida cautelar por ID
   */
  obtenerMedida(id) {
    return this.http.get(`${this.apiUrl}/medidas-cautelares/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log(`📥 Medida ${id} recibida:`, response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarMedida(response.data);
      }
      throw new Error('Medida cautelar no encontrada');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Crear nueva medida cautelar
   */
  crearMedida(dto) {
    console.log('📤 Creando medida cautelar:', dto);
    return this.http.post(`${this.apiUrl}/medidas-cautelares`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Respuesta creación medida:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarMedida(response.data);
      }
      throw new Error(response.message || 'Error al crear medida cautelar');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Actualizar medida cautelar
   */
  actualizarMedida(id, dto) {
    console.log('📤 Actualizando medida cautelar:', {
      id,
      dto
    });
    return this.http.put(`${this.apiUrl}/medidas-cautelares/${id}`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => console.log('📥 Respuesta actualización medida:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarMedida(response.data);
      }
      throw new Error(response.message || 'Error al actualizar medida cautelar');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Eliminar medida cautelar
   */
  eliminarMedida(id) {
    return this.http.delete(`${this.apiUrl}/medidas-cautelares/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.success), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Cambiar estado de medida cautelar
   */
  cambiarEstado(id, estado, observaciones) {
    return this.http.patch(`${this.apiUrl}/medidas-cautelares/${id}/cambiar-estado`, {
      estado,
      observaciones
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarMedida(response.data);
      }
      throw new Error(response.message || 'Error al cambiar estado');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Prorrogar medida cautelar
   */
  prorrogarMedida(id, dto) {
    return this.http.post(`${this.apiUrl}/medidas-cautelares/${id}/prorrogar`, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return this.procesarMedida(response.data);
      }
      throw new Error(response.message || 'Error al prorrogar medida');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener estadísticas
   */
  obtenerEstadisticas() {
    return this.http.get(`${this.apiUrl}/medidas-cautelares/estadisticas`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      if (response.success && response.data) {
        return response.data;
      }
      return {
        por_estado: {},
        por_tipo: {},
        vigentes: 0,
        total: 0,
        proximas_a_vencer: 0
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Procesar medida para UI
   */
  procesarMedida(medida) {
    // Extraer información de denuncia
    let denunciaCodigo = '';
    let denunciaDescripcion = '';
    if (medida.conciliacion) {
      if (medida.conciliacion.denuncia) {
        denunciaCodigo = medida.conciliacion.denuncia.numero_expediente || medida.conciliacion.denuncia.codigo_externo || `DEN-${medida.conciliacion.denuncia.denuncia_id}`;
        denunciaDescripcion = medida.conciliacion.denuncia.descripcion || '';
      }
    }
    // Calcular fecha de vencimiento y días restantes
    let fechaVencimiento = null;
    let diasRestantes = null;
    let estaVigente = false;
    if (medida.fecha_inicio && medida.duracion_dias && medida.estado === 'ACTIVA') {
      const fechaInicio = new Date(medida.fecha_inicio);
      fechaVencimiento = new Date(fechaInicio);
      fechaVencimiento.setDate(fechaVencimiento.getDate() + medida.duracion_dias);
      const hoy = new Date();
      const diffTime = fechaVencimiento.getTime() - hoy.getTime();
      diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      estaVigente = diasRestantes > 0;
    }
    return {
      ...medida,
      estado_texto: this.getEstadoTexto(medida.estado),
      fecha_vencimiento: fechaVencimiento?.toISOString().split('T')[0],
      dias_restantes: diasRestantes,
      esta_vigente: estaVigente,
      denuncia_codigo: denunciaCodigo,
      denuncia_descripcion: denunciaDescripcion,
      tipo_medida_nombre: medida.tipo_medida?.nombre || 'Desconocido'
    };
  }
  /**
   * Obtener texto legible para estado
   */
  getEstadoTexto(estado) {
    const estados = {
      'ACTIVA': 'Activa',
      'CUMPLIDA': 'Cumplida',
      'VENCIDA': 'Vencida',
      'REVOCADA': 'Revocada',
      'SUSPENDIDA': 'Suspendida',
      'PRORROGADA': 'Prorrogada'
    };
    return estados[estado] || estado;
  }
  handleError(error) {
    console.error('Error en MedidaCautelarService:', error);
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
  static ɵfac = function MedidaCautelarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MedidaCautelarService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: MedidaCautelarService,
    factory: MedidaCautelarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45657:
/*!**********************************************!*\
  !*** ./src/app/services/denuncia.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DenunciaService: () => (/* binding */ DenunciaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _catalogo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogo.service */ 65466);
/* harmony import */ var _persona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persona.service */ 5378);






class DenunciaService {
  http;
  catalogoService;
  personaService;
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}`;
  constructor(http, catalogoService, personaService) {
    this.http = http;
    this.catalogoService = catalogoService;
    this.personaService = personaService;
  }
  // ========== MÉTODOS DE CATÁLOGOS (ADAPTADOS) ==========
  getTiposConflicto() {
    return this.catalogoService.getTiposConflicto();
  }
  getEstadosDenuncia() {
    return this.catalogoService.getEstadosDenuncia();
  }
  // ========== MÉTODOS DE PERSONAS ==========
  getUsuarioActual() {
    return this.http.get(`${this.baseUrl}/auth/me`);
  }
  // ========== MÉTODOS PRINCIPALES DE DENUNCIAS ==========
  getDenuncias(filters = {}) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value.toString());
      }
    });
    return this.http.get(`${this.baseUrl}/denuncias`, {
      params
    });
  }
  getDenuncia(id) {
    return this.http.get(`${this.baseUrl}/denuncias/${id}`);
  }
  crearDenuncia(dto) {
    return this.http.post(`${this.baseUrl}/denuncias`, dto);
  }
  crearDenunciaConArchivos(formData) {
    return this.http.post(`${this.baseUrl}/denuncias`, formData);
  }
  actualizarDenuncia(id, dto) {
    return this.http.put(`${this.baseUrl}/denuncias/${id}`, dto);
  }
  eliminarDenuncia(id) {
    return this.http.delete(`${this.baseUrl}/denuncias/${id}`);
  }
  generarCodigoUnico() {
    return this.http.get(`${this.baseUrl}/denuncias/generar-codigo`);
  }
  buscarDenuncias(searchTerm) {
    return this.getDenuncias({
      search: searchTerm,
      per_page: 20
    });
  }
  // ========== MÉTODOS DE ACCIONES ==========
  cambiarEstado(id, dto) {
    return this.http.post(`${this.baseUrl}/denuncias/${id}/cambiar-estado`, dto);
  }
  getResumenDenuncia(id) {
    return this.http.get(`${this.baseUrl}/denuncias/${id}/resumen`);
  }
  generarReporteCompleto(id) {
    return this.http.get(`${this.baseUrl}/denuncias/${id}/reporte-completo`);
  }
  validarEvidencia(id) {
    return this.http.post(`${this.baseUrl}/denuncias/${id}/validar-evidencia`, {});
  }
  // ========== MÉTODOS DE HISTORIAL ==========
  getHistorial(id) {
    return this.http.get(`${this.baseUrl}/denuncias/${id}/historial`);
  }
  // ========== MÉTODOS DE INVOLUCRADOS ==========
  getInvolucradosPorDenuncia(denunciaId) {
    return this.http.get(`${this.baseUrl}/denuncias/${denunciaId}/involucrados`);
  }
  agregarInvolucrado(dto) {
    return this.http.post(`${this.baseUrl}/denuncias/${dto.denuncia_id}/involucrados`, dto);
  }
  eliminarInvolucrado(id) {
    return this.http.delete(`${this.baseUrl}/involucrados/${id}`);
  }
  // ========== MÉTODOS DE REPORTES ==========
  reportePorEstado() {
    return this.http.get(`${this.baseUrl}/reportes/denuncias/por-estado`);
  }
  reportePorConflicto() {
    return this.http.get(`${this.baseUrl}/reportes/denuncias/por-conflicto`);
  }
  reportePorFechas(fechaInicio, fechaFin) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('fecha_inicio', fechaInicio).set('fecha_fin', fechaFin);
    return this.http.get(`${this.baseUrl}/reportes/denuncias/por-fechas`, {
      params
    });
  }
  reporteTiemposResolucion() {
    return this.http.get(`${this.baseUrl}/reportes/denuncias/tiempos-resolucion`);
  }
  getEstadisticas() {
    return this.http.get(`${this.baseUrl}/denuncias/estadisticas`);
  }
  exportarEstadisticasExcel() {
    return this.http.get(`${this.baseUrl}/denuncias/exportar-estadisticas-excel`, {
      responseType: 'blob',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    });
  }
  exportarEstadisticasPDF() {
    return this.http.get(`${this.baseUrl}/denuncias/exportar-estadisticas-pdf`, {
      responseType: 'blob',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Accept', 'application/pdf')
    });
  }
  static ɵfac = function DenunciaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DenunciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_catalogo_service__WEBPACK_IMPORTED_MODULE_3__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_persona_service__WEBPACK_IMPORTED_MODULE_4__.PersonaService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DenunciaService,
    factory: DenunciaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48570:
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioService: () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 50698);



class UsuarioService {
  http;
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}`;
  constructor(http) {
    this.http = http;
  }
  listar(filters = {}) {
    const params = this.buildParams(filters);
    return this.http.get(`${this.baseUrl}/usuarios`, {
      params
    });
  }
  obtener(id) {
    return this.http.get(`${this.baseUrl}/usuarios/${id}`);
  }
  crear(usuario) {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario);
  }
  actualizar(id, usuario) {
    return this.http.put(`${this.baseUrl}/usuarios/${id}`, usuario);
  }
  eliminar(id) {
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }
  cambiarPassword(id, data) {
    return this.http.post(`${this.baseUrl}/usuarios/${id}/cambiar-password`, data);
  }
  desbloquear(id) {
    return this.http.post(`${this.baseUrl}/usuarios/${id}/desbloquear`, {});
  }
  buildParams(filters) {
    const params = {};
    if (filters.search) params['search'] = filters.search;
    if (filters.rol_id) params['rol_id'] = filters.rol_id;
    if (filters.activo !== null && filters.activo !== undefined) params['activo'] = filters.activo;
    if (filters.page) params['page'] = filters.page;
    if (filters.per_page) params['per_page'] = filters.per_page;
    return params;
  }
  static ɵfac = function UsuarioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UsuarioService,
    factory: UsuarioService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85841:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ })

}]);
//# sourceMappingURL=common.js.map