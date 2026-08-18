"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_calendario_pages_calendario_component_ts"],{

/***/ 4791:
/*!*************************************************************************!*\
  !*** ./src/app/modules/calendario/strategies/estado-filter.strategy.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EstadoFilterStrategy: () => (/* binding */ EstadoFilterStrategy)
/* harmony export */ });
class EstadoFilterStrategy {
  filter(data, criteria) {
    if (!criteria.estado) return data;
    // El filtro por estado requiere datos de asistencia, se implementa en el servicio
    return data;
  }
  getFilterKey() {
    return 'estado';
  }
}

/***/ }),

/***/ 10196:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/calendario/repositories/calendar-repository.interface.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALENDAR_REPOSITORY: () => (/* binding */ CALENDAR_REPOSITORY)
/* harmony export */ });
// Token de inyección para el repositorio
const CALENDAR_REPOSITORY = 'CALENDAR_REPOSITORY';

/***/ }),

/***/ 14621:
/*!***************************************************************!*\
  !*** ./src/app/modules/calendario/facades/calendar.facade.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarFacade: () => (/* binding */ CalendarFacade)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _repositories_calendar_repository_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repositories/calendar-repository.interface */ 10196);
/* harmony import */ var _strategies_filter_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../strategies/filter-context */ 69521);
/* harmony import */ var _strategies_personal_filter_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../strategies/personal-filter.strategy */ 88985);
/* harmony import */ var _strategies_estado_filter_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../strategies/estado-filter.strategy */ 4791);
/* harmony import */ var _builders_asistencia_report_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../builders/asistencia-report.builder */ 78734);
/* harmony import */ var _builders_report_director__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../builders/report-director */ 63453);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../states */ 47350);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);











class CalendarFacade {
  repository = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_repositories_calendar_repository_interface__WEBPACK_IMPORTED_MODULE_5__.CALENDAR_REPOSITORY);
  filterContext = new _strategies_filter_context__WEBPACK_IMPORTED_MODULE_6__.FilterContext();
  currentDateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(new Date());
  viewSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('week');
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_12__.NotificationService);
  states = {
    day: new _states__WEBPACK_IMPORTED_MODULE_11__.DayViewState(),
    week: new _states__WEBPACK_IMPORTED_MODULE_11__.WeekViewState(),
    month: new _states__WEBPACK_IMPORTED_MODULE_11__.MonthViewState()
  };
  // ✅ AGREGAR asistencias$
  personal$ = this.repository.getPersonal();
  horarios$ = this.repository.getHorarios();
  asistencias$ = this.repository.getAsistencias();
  resumen$ = this.repository.getResumenAsistencia();
  estadisticas$ = this.repository.getEstadisticas();
  viewState$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.currentDateSubject, this.viewSubject, this.resumen$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(([date, view, resumen]) => ({
    view,
    date,
    viewData: this.states[view].getViewData(date, {
      events: resumen
    }),
    title: this.states[view].getTitle(),
    dateRange: this.states[view].getDateRange(date)
  })));
  filtersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  filteredPersonal$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.personal$, this.filtersSubject]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(([personal, filters]) => this.filterContext.applyFilters(personal, filters)));
  constructor() {
    this.filterContext.registerStrategy(new _strategies_personal_filter_strategy__WEBPACK_IMPORTED_MODULE_7__.PersonalFilterStrategy());
    this.filterContext.registerStrategy(new _strategies_estado_filter_strategy__WEBPACK_IMPORTED_MODULE_8__.EstadoFilterStrategy());
  }
  // Navegación
  navigate(direction) {
    const currentDate = this.currentDateSubject.value;
    const currentView = this.viewSubject.value;
    const newDate = this.states[currentView].navigate(currentDate, direction);
    this.currentDateSubject.next(newDate);
    this.refreshData();
  }
  goToToday() {
    this.currentDateSubject.next(new Date());
    this.refreshData();
  }
  changeView(view) {
    this.viewSubject.next(view);
    this.refreshData();
  }
  // Filtros
  setFilter(key, value) {
    const currentFilters = this.filtersSubject.value;
    this.filtersSubject.next({
      ...currentFilters,
      [key]: value
    });
  }
  clearFilters() {
    this.filtersSubject.next({});
  }
  crearHorario(data) {
    return this.repository.crearHorario(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.refreshData()));
  }
  actualizarHorario(id, data) {
    return this.repository.actualizarHorario(id, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.refreshData()));
  }
  eliminarHorario(id) {
    return this.repository.eliminarHorario(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.refreshData()));
  }
  // Reportes
  generarReporte(tipo, params) {
    const builder = new _builders_asistencia_report_builder__WEBPACK_IMPORTED_MODULE_9__.AsistenciaReportBuilder();
    const director = new _builders_report_director__WEBPACK_IMPORTED_MODULE_10__.ReportDirector(builder);
    switch (tipo) {
      case 'diario':
        return director.buildDiarioReport(params.fecha, params.estadisticas || {}, params.detalle || []);
      case 'semanal':
        return director.buildSemanalReport(params.inicio, params.fin, params.estadisticas || {}, params.detalle || []);
      case 'mensual':
        return director.buildMensualReport(params.mes || params.fecha, params.estadisticas || {}, params.detalle || []);
      case 'personal':
        return director.buildPersonalReport(params.personal, params.periodo, params.estadisticas || {}, params.detalle || []);
      default:
        return builder.build();
    }
  }
  registrarSalida(personalId, fecha) {
    const payload = {
      personal_id: personalId,
      tipo: 'salida'
    };
    if (fecha) {
      payload.fecha = fecha; // ✅ Enviar fecha al backend
    }
    return this.repository.registrarAsistencia(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(asistencia => {
      this.refreshData();
    }));
  }
  registrarEntrada(personalId, estadoId, observaciones, fecha) {
    const payload = {
      personal_id: personalId,
      tipo: 'entrada',
      estado_id: estadoId,
      // ✅ Enviar el ID del estado
      observaciones
    };
    if (fecha) {
      payload.fecha = fecha;
    }
    return this.repository.registrarAsistencia(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(asistencia => {
      this.refreshData();
    }));
  }
  refreshData(filtros) {
    this.repository.recargarTodosLosDatos(filtros);
  }
  // Agregar método para actualizar resumen con fechas específicas
  actualizarResumenConFechas(fechaInicio, fechaFin) {
    const filtros = {
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin
    };
    console.log('📊 Actualizando resumen con fechas:', filtros);
    this.repository.getResumenAsistencia(filtros).subscribe({
      next: resumen => {
        // Actualizar el BehaviorSubject interno del repositorio
        this.repository['resumenSubject'].next(resumen);
        console.log('✅ Resumen actualizado:', resumen.length);
      },
      error: err => console.error('Error actualizando resumen:', err)
    });
  }
  static ɵfac = function CalendarFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarFacade)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CalendarFacade,
    factory: CalendarFacade.ɵfac
  });
}

/***/ }),

/***/ 29747:
/*!*************************************************************!*\
  !*** ./src/app/modules/calendario/states/day-view.state.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewState: () => (/* binding */ DayViewState)
/* harmony export */ });
class DayViewState {
  getTitle() {
    return 'Vista Día';
  }
  getDateRange(currentDate) {
    return currentDate.toLocaleDateString('es', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  }
  navigate(currentDate, direction) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    return newDate;
  }
  getViewData(date, data) {
    return {
      date,
      hours: Array.from({
        length: 24
      }, (_, i) => i),
      events: data.events?.filter(e => e.date === date.toISOString().split('T')[0]) || []
    };
  }
}

/***/ }),

/***/ 40611:
/*!*********************************************************!*\
  !*** ./src/app/services/personal-calendario.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalCalendarioService: () => (/* binding */ PersonalCalendarioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/auth.service */ 68010);
/* harmony import */ var _personal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal.service */ 45322);







class PersonalCalendarioService {
  http;
  authService;
  personalService;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/personal`;
  constructor(http, authService, personalService // ✅ Inyectado pero no usado
  ) {
    this.http = http;
    this.authService = authService;
    this.personalService = personalService;
  }
  getHeaders() {
    const token = this.authService.getToken();
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }
  /**
   * Obtener personal activo - Usando el endpoint correcto
   */
  obtenerPersonalActivo() {
    // ✅ Usar el endpoint específico de activos
    return this.http.get(`${this.apiUrl}/activos`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response && response.success && response.data && response.data.length > 0) {
        return response.data.map(personal => ({
          personal_id: personal.personal_id,
          persona_id: personal.persona_id,
          persona_nombres: personal.persona?.nombres || '',
          persona_apellidos: personal.persona?.apellidos || '',
          persona_documento: personal.persona?.numero_documento || '',
          cargo_id: personal.cargo_id,
          cargo_nombre: personal.cargo?.nombre || 'Sin cargo',
          cargo_descripcion: personal.cargo?.descripcion,
          fecha_ingreso: personal.fecha_ingreso,
          fecha_egreso: personal.fecha_egreso,
          activo: personal.activo,
          foto_cifrada: personal.persona?.foto_cifrada
        }));
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('❌ Error obteniendo personal activo:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([]);
    }));
  }
  /**
   * Método para buscar personal
   */
  buscarPersonal(termino) {
    return this.personalService.listarPersonal({
      search: termino,
      activo: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response && response.success && response.data) {
        return response.data.map(personal => ({
          personal_id: personal.personal_id,
          persona_id: personal.persona_id,
          persona_nombres: personal.persona?.nombres || '',
          persona_apellidos: personal.persona?.apellidos || '',
          persona_documento: personal.persona?.numero_documento || '',
          cargo_id: personal.cargo_id,
          cargo_nombre: personal.cargo?.nombre || 'Sin cargo',
          cargo_descripcion: personal.cargo?.descripcion,
          fecha_ingreso: personal.fecha_ingreso,
          fecha_egreso: personal.fecha_egreso,
          activo: personal.activo,
          foto_cifrada: personal.persona?.foto_cifrada
        }));
      }
      return [];
    }));
  }
  static ɵfac = function PersonalCalendarioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonalCalendarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_personal_service__WEBPACK_IMPORTED_MODULE_8__.PersonalService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PersonalCalendarioService,
    factory: PersonalCalendarioService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 47350:
/*!****************************************************!*\
  !*** ./src/app/modules/calendario/states/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayViewState: () => (/* reexport safe */ _day_view_state__WEBPACK_IMPORTED_MODULE_0__.DayViewState),
/* harmony export */   MonthViewState: () => (/* reexport safe */ _month_view_state__WEBPACK_IMPORTED_MODULE_2__.MonthViewState),
/* harmony export */   WeekViewState: () => (/* reexport safe */ _week_view_state__WEBPACK_IMPORTED_MODULE_1__.WeekViewState)
/* harmony export */ });
/* harmony import */ var _day_view_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-view.state */ 29747);
/* harmony import */ var _week_view_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-view.state */ 58955);
/* harmony import */ var _month_view_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./month-view.state */ 80467);




/***/ }),

/***/ 50681:
/*!*************************************************************!*\
  !*** ./src/app/modules/calendario/pipes/hora-local.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoraLocalPipe: () => (/* binding */ HoraLocalPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class HoraLocalPipe {
  transform(value) {
    if (!value) return '--:--';
    // Si es string como "2026-04-24 17:34:24-04"
    if (typeof value === 'string') {
      // Buscar patrón HH:MM:SS
      const match = value.match(/(\d{2}):(\d{2}):(\d{2})/);
      if (match) {
        return `${match[1]}:${match[2]}`;
      }
      // Si tiene formato ISO
      if (value.includes('T')) {
        const fecha = new Date(value);
        return `${String(fecha.getUTCHours()).padStart(2, '0')}:${String(fecha.getUTCMinutes()).padStart(2, '0')}`;
      }
    }
    // Si es Date object
    if (value instanceof Date) {
      return `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`;
    }
    return '--:--';
  }
  static ɵfac = function HoraLocalPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HoraLocalPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "horaLocal",
    type: HoraLocalPipe,
    pure: true
  });
}

/***/ }),

/***/ 58955:
/*!**************************************************************!*\
  !*** ./src/app/modules/calendario/states/week-view.state.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewState: () => (/* binding */ WeekViewState)
/* harmony export */ });
class WeekViewState {
  getTitle() {
    return 'Vista Semana';
  }
  getDateRange(currentDate) {
    const start = this.getStartOfWeek(currentDate);
    const end = this.getEndOfWeek(currentDate);
    return `${start.toLocaleDateString('es', {
      day: 'numeric',
      month: 'short'
    })} - ${end.toLocaleDateString('es', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })}`;
  }
  navigate(currentDate, direction) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    return newDate;
  }
  getViewData(date, data) {
    const days = this.getDaysOfWeek(date);
    return {
      date,
      days,
      hours: Array.from({
        length: 12
      }, (_, i) => i + 6)
    };
  }
  getStartOfWeek(date) {
    const start = new Date(date);
    const day = start.getDay();
    start.setDate(start.getDate() - (day === 0 ? 6 : day - 1));
    return start;
  }
  getEndOfWeek(date) {
    const end = this.getStartOfWeek(date);
    end.setDate(end.getDate() + 6);
    return end;
  }
  getDaysOfWeek(date) {
    const start = this.getStartOfWeek(date);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);
      days.push({
        name: current.toLocaleDateString('es', {
          weekday: 'long'
        }),
        shortName: current.toLocaleDateString('es', {
          weekday: 'short'
        }),
        date: current.toISOString().split('T')[0],
        dayNumber: current.getDate()
      });
    }
    return days;
  }
}

/***/ }),

/***/ 62788:
/*!************************************************!*\
  !*** ./src/app/services/calendario.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarioService: () => (/* binding */ CalendarioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/app/core/services/auth.service */ 68010);
/* harmony import */ var _src_app_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/app/core/services/notification/notification.service */ 97407);








class CalendarioService {
  http;
  authService;
  notificationService;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}`;
  constructor(http, authService, notificationService) {
    this.http = http;
    this.authService = authService;
    this.notificationService = notificationService;
  }
  getHeaders() {
    const token = this.authService.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
  handleError(error) {
    console.error('❌ Error en CalendarioService:', error);
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 401:
          errorMessage = 'No autorizado. Por favor inicie sesión nuevamente.';
          this.authService.clearAuthData();
          break;
        case 403:
          errorMessage = 'No tiene permisos para realizar esta acción.';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado.';
          break;
        case 422:
          if (error.error?.errors) {
            const errors = Object.values(error.error.errors).flat();
            errorMessage = errors.join(', ');
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          break;
        case 500:
          errorMessage = 'Error interno del servidor. Por favor intente más tarde.';
          break;
        default:
          errorMessage = error.error?.message || `Error ${error.status}: ${error.message}`;
      }
    }
    this.notificationService.showError(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  // ========== MÉTODOS DE HORARIOS ==========
  getHorarios(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/horarios`, {
      headers: this.getHeaders(),
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  crearHorario(datos) {
    return this.http.post(`${this.apiUrl}/horarios`, datos, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Horario creado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  actualizarHorario(id, datos) {
    return this.http.put(`${this.apiUrl}/horarios/${id}`, datos, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Horario actualizado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  eliminarHorario(id) {
    return this.http.delete(`${this.apiUrl}/horarios/${id}`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Horario eliminado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS DE ASISTENCIA ==========
  registrarAsistencia(datos) {
    return this.http.post(`${this.apiUrl}/asistencias/registrar`, datos, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      const mensaje = datos.tipo === 'entrada' ? 'Entrada registrada exitosamente' : 'Salida registrada exitosamente';
      this.notificationService.showSuccess(mensaje);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  registrarEntradaMasiva(datos) {
    return this.http.post(`${this.apiUrl}/asistencias/entrada-masiva`, datos, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Entrada masiva registrada');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getEstadisticas() {
    return this.http.get(`${this.apiUrl}/asistencias/estadisticas`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  exportarExcel(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/asistencias/exportar-excel`, {
      headers: this.getHeaders(),
      params,
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Exportando archivo Excel...');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  exportarPDF(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/asistencias/exportar-pdf`, {
      headers: this.getHeaders(),
      params,
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Exportando archivo PDF...');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getAsistencias(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/asistencias`, {
      headers: this.getHeaders(),
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      return response.data || []; // ✅ Esto ya está bien
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // Método existente para resumen
  getResumenAsistencia(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.append(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/asistencias/resumen`, {
      headers: this.getHeaders(),
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS DE REPORTES ==========
  generarReporte(params) {
    return this.http.post(`${this.apiUrl}/reportes/asistencia`, params, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.showSuccess('Reporte generado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  static ɵfac = function CalendarioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_src_app_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: CalendarioService,
    factory: CalendarioService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 63453:
/*!****************************************************************!*\
  !*** ./src/app/modules/calendario/builders/report-director.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportDirector: () => (/* binding */ ReportDirector)
/* harmony export */ });
class ReportDirector {
  builder;
  constructor(builder) {
    this.builder = builder;
  }
  buildDiarioReport(fecha, estadisticas, detalle) {
    return this.builder.setTitle(`Reporte Diario - ${fecha}`).setPeriod(fecha, fecha).addStatistic('Total Personal', estadisticas.totalPersonal || 0).addStatistic('Presentes', estadisticas.presentes || 0).addStatistic('Ausentes', estadisticas.ausentes || 0).addStatistic('Tardanzas', estadisticas.tardes || 0).build();
  }
  buildSemanalReport(inicio, fin, estadisticas, detalle) {
    return this.builder.setTitle(`Reporte Semanal - ${inicio} al ${fin}`).setPeriod(inicio, fin).addStatistic('Total Personal', estadisticas.totalPersonal || 0).addStatistic('Horas Totales', estadisticas.horasTotales || 0).addStatistic('Horas Extras', estadisticas.horasExtras || 0).build();
  }
  buildPersonalReport(personal, periodo, estadisticas, detalle) {
    return this.builder.setTitle(`Reporte de Asistencia - ${personal.nombre_completo}`).setPeriod(periodo.inicio, periodo.fin).setPersonalData(personal).addStatistic('Días Trabajados', estadisticas.diasTrabajados || 0).addStatistic('Horas Totales', estadisticas.horasTotales || 0).addStatistic('Horas Extras', estadisticas.horasExtras || 0).addStatistic('Tardanzas', estadisticas.tardanzas || 0).build();
  }
  buildMensualReport(mes, estadisticas, detalle) {
    return this.builder.setTitle(`Reporte Mensual - ${mes}`).setPeriod('', '').addStatistic('Total Personal', estadisticas.totalPersonal || 0).addStatistic('Horas Totales', estadisticas.horasTotales || 0).addStatistic('Horas Extras', estadisticas.horasExtras || 0).addStatistic('Tardanzas', estadisticas.tardanzas || 0).build();
  }
}

/***/ }),

/***/ 69521:
/*!*****************************************************************!*\
  !*** ./src/app/modules/calendario/strategies/filter-context.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterContext: () => (/* binding */ FilterContext)
/* harmony export */ });
class FilterContext {
  strategies = new Map();
  registerStrategy(strategy) {
    this.strategies.set(strategy.getFilterKey(), strategy);
  }
  applyFilters(data, filters) {
    let result = [...data];
    for (const [key, value] of Object.entries(filters)) {
      const strategy = this.strategies.get(key);
      if (strategy && value !== null && value !== undefined && value !== '') {
        result = strategy.filter(result, {
          [key]: value
        });
      }
    }
    return result;
  }
}

/***/ }),

/***/ 78734:
/*!**************************************************************************!*\
  !*** ./src/app/modules/calendario/builders/asistencia-report.builder.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsistenciaReportBuilder: () => (/* binding */ AsistenciaReportBuilder)
/* harmony export */ });
class AsistenciaReportBuilder {
  report = {
    titulo: '',
    fecha_generacion: new Date().toISOString(),
    estadisticas: [],
    detalle: [],
    personal: null
  };
  setTitle(title) {
    this.report.titulo = title;
    return this;
  }
  setPeriod(start, end) {
    this.report.periodo = {
      inicio: start,
      fin: end
    };
    return this;
  }
  addStatistic(label, value) {
    this.report.estadisticas.push({
      label,
      value
    });
    return this;
  }
  addDetail(item) {
    this.report.detalle.push(item);
    return this;
  }
  setPersonalData(personal) {
    this.report.personal = personal;
    return this;
  }
  build() {
    return {
      ...this.report
    };
  }
  reset() {
    this.report = {
      titulo: '',
      fecha_generacion: new Date().toISOString(),
      estadisticas: [],
      detalle: [],
      personal: null
    };
  }
}

/***/ }),

/***/ 80467:
/*!***************************************************************!*\
  !*** ./src/app/modules/calendario/states/month-view.state.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthViewState: () => (/* binding */ MonthViewState)
/* harmony export */ });
class MonthViewState {
  getTitle() {
    return 'Vista Mes';
  }
  getDateRange(currentDate) {
    return currentDate.toLocaleDateString('es', {
      month: 'long',
      year: 'numeric'
    });
  }
  navigate(currentDate, direction) {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    return newDate;
  }
  getViewData(date, data) {
    const days = this.getDaysOfMonth(date);
    const weeks = this.groupDaysIntoWeeks(days);
    return {
      date,
      weeks,
      weekDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    };
  }
  getDaysOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    const firstDayOfWeek = firstDay.getDay();
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    // Días del mes anterior
    for (let i = offset; i > 0; i--) {
      const prevDate = new Date(year, month, 1 - i);
      days.push({
        number: prevDate.getDate(),
        date: prevDate.toISOString().split('T')[0],
        isCurrentMonth: false,
        events: []
      });
    }
    // Días del mes actual
    const today = new Date().toISOString().split('T')[0];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      const dateStr = currentDate.toISOString().split('T')[0];
      days.push({
        number: i,
        date: dateStr,
        isCurrentMonth: true,
        isToday: dateStr === today,
        events: []
      });
    }
    // Días del mes siguiente
    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({
        number: nextDate.getDate(),
        date: nextDate.toISOString().split('T')[0],
        isCurrentMonth: false,
        events: []
      });
    }
    return days;
  }
  groupDaysIntoWeeks(days) {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }
}

/***/ }),

/***/ 82253:
/*!******************************************************************!*\
  !*** ./src/app/modules/calendario/pages/calendario.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarioComponent: () => (/* binding */ CalendarioComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _facades_calendar_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../facades/calendar.facade */ 14621);
/* harmony import */ var _repositories_calendar_repository_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../repositories/calendar-repository.interface */ 10196);
/* harmony import */ var _repositories_calendar_repository_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../repositories/calendar-repository.impl */ 83813);
/* harmony import */ var _services_calendario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/calendario.service */ 62788);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);
/* harmony import */ var _pipes_hora_local_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/hora-local.pipe */ 50681);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../core/services/loading.service */ 98660);






// Facade



// Servicios





// Componentes UI









const _c0 = () => ["Lun", "Mar", "Mi\u00E9", "Jue", "Vie", "S\u00E1b", "Dom"];
const _c1 = () => ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
function CalendarioComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 86)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 88)(4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function CalendarioComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, CalendarioComponent_div_4_div_11_div_1_Template, 8, 3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function CalendarioComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function CalendarioComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 74)(3, "div", 75)(4, "div", 76)(5, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("keyup.enter", function CalendarioComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, CalendarioComponent_div_4_button_8_Template, 2, 0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, CalendarioComponent_div_4_div_11_Template, 2, 1, "div", 81)(12, CalendarioComponent_div_4_div_12_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function CalendarioComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 97)(1, "div", 98)(2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 100)(7, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
}
function CalendarioComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 107)(2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, CalendarioComponent_div_5_div_4_div_9_Template, 2, 0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function CalendarioComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, CalendarioComponent_div_5_div_2_Template, 17, 0, "div", 94)(3, CalendarioComponent_div_5_div_3_Template, 3, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_5_div_4_Template, 10, 3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function CalendarioComponent_option_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", persona_r8.personal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", persona_r8.persona_nombres, " ", persona_r8.persona_apellidos, " ");
  }
}
function CalendarioComponent_option_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const depto_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", depto_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", depto_r9.nombre, " ");
  }
}
function CalendarioComponent_div_136_div_13_div_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asistencia_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \uD83D\uDD34 Salida: ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 1, asistencia_r10.hora_salida), " ");
  }
}
function CalendarioComponent_div_136_div_13_div_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \u23F3 Solo entrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_136_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 129)(1, "div", 130)(2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 132)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 133)(8, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, CalendarioComponent_div_136_div_13_div_5_span_11_Template, 3, 3, "span", 135)(12, CalendarioComponent_div_136_div_13_div_5_span_12_Template, 2, 0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const asistencia_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerInicialesPorPersonalId(asistencia_r10.personal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerNombrePersonal(asistencia_r10.personal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("tarde", asistencia_r10.entrada_tarde);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \uD83D\uDFE2 Entrada: ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 7, asistencia_r10.hora_entrada), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", asistencia_r10.hora_salida);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", asistencia_r10.hora_entrada && !asistencia_r10.hora_salida);
  }
}
function CalendarioComponent_div_136_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 139)(1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u26AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Sin registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_136_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 125)(4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, CalendarioComponent_div_136_div_13_div_5_Template, 13, 9, "div", 127)(6, CalendarioComponent_div_136_div_13_div_6_Template, 5, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const hora_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", hora_r11, ":00");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("has-registro", ctx_r1.obtenerAsistenciasPorFechaYHora(ctx_r1.fechaActual, hora_r11).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.obtenerAsistenciasPorFechaYHora(ctx_r1.fechaActual, hora_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.obtenerAsistenciasPorFechaYHora(ctx_r1.fechaActual, hora_r11).length === 0);
  }
}
function CalendarioComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 114)(1, "div", 115)(2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 117)(5, "div", 118)(6, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, CalendarioComponent_div_136_div_13_Template, 7, 5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](8, 3, ctx_r1.fechaActual, "EEEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](11, 6, ctx_r1.fechaActual, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.horasDia);
  }
}
function CalendarioComponent_div_137_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 149)(1, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dia_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \uD83D\uDCDD ", ctx_r1.obtenerAsistenciasPorFecha(dia_r12.fecha).length, " ");
  }
}
function CalendarioComponent_div_137_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 117)(1, "div", 118)(2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, CalendarioComponent_div_137_div_4_div_6_Template, 3, 1, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dia_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dia_r12.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", dia_r12.numero, "/", dia_r12.mes);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.obtenerAsistenciasPorFecha(dia_r12.fecha).length > 0);
  }
}
function CalendarioComponent_div_137_div_6_div_3_div_3_small_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" | Salida: ", item_r16.horaSalida);
  }
}
function CalendarioComponent_div_137_div_6_div_3_div_3_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, CalendarioComponent_div_137_div_6_div_3_div_3_small_11_span_2_Template, 2, 1, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \u2705 Entrada: ", item_r16.horaEntrada, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.horaSalida);
  }
}
function CalendarioComponent_div_137_div_6_div_3_div_3_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u23F3 En espera de entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_137_div_6_div_3_div_3_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u274C Ausente");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_137_div_6_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 157)(1, "div", 158)(2, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 160)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, CalendarioComponent_div_137_div_6_div_3_div_3_small_11_Template, 3, 2, "small", 161)(12, CalendarioComponent_div_137_div_6_div_3_div_3_small_12_Template, 2, 0, "small", 162)(13, CalendarioComponent_div_137_div_6_div_3_div_3_small_13_Template, 2, 0, "small", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("entrada-completa", item_r16.estado === "completo")("entrada-solo", item_r16.estado === "entrada-solo")("punto-espera", item_r16.estado === "espera")("punto-ausente", item_r16.estado === "ausente");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.obtenerIniciales(item_r16.personal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", item_r16.personal.persona_nombres, " ", item_r16.personal.persona_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Horario: ", item_r16.horario);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.tieneAsistencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !item_r16.tieneAsistencia && item_r16.estado === "espera");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !item_r16.tieneAsistencia && item_r16.estado === "ausente");
  }
}
function CalendarioComponent_div_137_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 125)(1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_137_div_6_div_3_Template_div_click_1_listener() {
      const dia_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13).$implicit;
      const hora_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalAsistenciaConFecha(dia_r14.fechaStr, hora_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, CalendarioComponent_div_137_div_6_div_3_div_3_Template, 14, 15, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dia_r14 = ctx.$implicit;
    const hora_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.obtenerPersonalConEstado(dia_r14.fecha, hora_r15));
  }
}
function CalendarioComponent_div_137_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 151)(1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, CalendarioComponent_div_137_div_6_div_3_Template, 4, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hora_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", hora_r15, ":00");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.diasSemana);
  }
}
function CalendarioComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_137_div_4_Template, 7, 4, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, CalendarioComponent_div_137_div_6_Template, 4, 2, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.diasSemana);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.horasLaborales);
  }
}
function CalendarioComponent_div_138_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dia_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", dia_r17, " ");
  }
}
function CalendarioComponent_div_138_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const personal_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("title", personal_r20.persona_nombres + " " + personal_r20.persona_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.obtenerIniciales(personal_r20), " ");
  }
}
function CalendarioComponent_div_138_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_138_div_3_Template_div_click_0_listener() {
      const dia_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      ctx_r1.cambiarVista("day");
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.fechaActual = dia_r19.fecha);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_138_div_3_div_4_Template, 2, 2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dia_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("current-month", dia_r19.esMesActual)("today", dia_r19.esHoy);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](dia_r19.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.obtenerPersonalPorFecha(dia_r19.fechaStr));
  }
}
function CalendarioComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 166)(1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, CalendarioComponent_div_138_div_2_Template, 2, 1, "div", 168)(3, CalendarioComponent_div_138_div_3_Template, 5, 6, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.obtenerDiasMes());
  }
}
function CalendarioComponent_div_139_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 191)(1, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Salida:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const marcacion_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 1, marcacion_r22.hora_salida));
  }
}
function CalendarioComponent_div_139_div_8_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_139_div_8_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const marcacion_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarSalida(marcacion_r22.personal_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Registrar Salida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_139_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 129)(1, "div", 130)(2, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 132)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 183)(10, "div", 184)(11, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Entrada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, CalendarioComponent_div_139_div_8_div_16_Template, 6, 3, "div", 187)(17, CalendarioComponent_div_139_div_8_button_17_Template, 2, 0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 189)(19, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const marcacion_r22 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerInicialesPorPersonalId(marcacion_r22.personal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerNombrePersonal(marcacion_r22.personal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerCargoPersonal(marcacion_r22.personal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("tarde", marcacion_r22.entrada_tarde);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 11, marcacion_r22.hora_entrada));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", marcacion_r22.hora_salida);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !marcacion_r22.hora_salida);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](ctx_r1.getEstadoClass(marcacion_r22.estado_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", marcacion_r22.estado_nombre, " ");
  }
}
function CalendarioComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 176)(1, "div", 177)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\u23F0 Marcaciones de Hoy");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 179)(7, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, CalendarioComponent_div_139_div_8_Template, 21, 13, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 181)(10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_139_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarEntradaMasiva());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, " Entrada Masiva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_139_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReporteDiario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, " Reporte Diario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@slideInRight", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.marcacionesHoy.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.marcacionesHoy);
  }
}
function CalendarioComponent_tr_187_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td")(1, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dia_r25 = ctx.$implicit;
    const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](ctx_r1.getDiaClass(resumen_r26.dias[dia_r25]));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", (resumen_r26.dias[dia_r25] == null ? null : resumen_r26.dias[dia_r25].horas) || "-", " ");
  }
}
function CalendarioComponent_tr_187_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" +", resumen_r26.horas_extras, "h ");
  }
}
function CalendarioComponent_tr_187_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_tr_187_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", resumen_r26.tardanzas, " ");
  }
}
function CalendarioComponent_tr_187_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_tr_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 193)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, CalendarioComponent_tr_187_td_7_Template, 3, 3, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "td")(9, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, CalendarioComponent_tr_187_span_12_Template, 2, 1, "span", 195)(13, CalendarioComponent_tr_187_span_13_Template, 2, 0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, CalendarioComponent_tr_187_span_15_Template, 2, 1, "span", 196)(16, CalendarioComponent_tr_187_span_16_Template, 2, 0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "td", 197)(18, "div", 198)(19, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_tr_187_Template_button_click_19_listener() {
      const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.verDetallesAsistencia(resumen_r26.id_personal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_tr_187_Template_button_click_22_listener() {
      const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.editarHorario(resumen_r26.id_personal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_tr_187_Template_button_click_25_listener() {
      const resumen_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReportePersonalPDF(resumen_r26.id_personal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const resumen_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", resumen_r26.persona_nombres, " ", resumen_r26.persona_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](resumen_r26.cargo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", resumen_r26.total_horas, "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", resumen_r26.horas_extras > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", resumen_r26.horas_extras === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", resumen_r26.tardanzas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", resumen_r26.tardanzas === 0);
  }
}
function CalendarioComponent_div_189_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_189_button_4_Template_button_click_0_listener() {
      const pagina_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r29 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", pagina_r29 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", pagina_r29 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", pagina_r29, " ");
  }
}
function CalendarioComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 205)(1, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_189_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_189_button_4_Template, 2, 4, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_189_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function CalendarioComponent_div_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 210)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "No hay registros de asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "No se encontraron registros para los filtros seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_190_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.limpiarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " Mostrar todos los registros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_192_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const personal_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", personal_r32.personal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", personal_r32.persona_nombres, " ", personal_r32.persona_apellidos, " - ", personal_r32.cargo_nombre, " ");
  }
}
function CalendarioComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 211)(1, "div", 212)(2, "div", 213)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_192_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarHorarioModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 215)(9, "form", 216, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("ngSubmit", function CalendarioComponent_div_192_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardarHorario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 217)(12, "div", 218)(13, "label", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, " Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "select", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.personalId, $event) || (ctx_r1.horarioForm.personalId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Seleccione personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](20, CalendarioComponent_div_192_option_20_Template, 2, 4, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 218)(23, "label", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, " Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.fecha, $event) || (ctx_r1.horarioForm.fecha = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 218)(29, "label", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, " Hora Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.horaInicio, $event) || (ctx_r1.horarioForm.horaInicio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 218)(35, "label", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, " Hora Fin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.horaFin, $event) || (ctx_r1.horarioForm.horaFin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 228)(41, "label", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42, " Tipo de Horario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "select", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_select_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.tipo, $event) || (ctx_r1.horarioForm.tipo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "option", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](45, "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "option", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](47, "Horas Extras");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "option", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49, "Turno Nocturno");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "option", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "Fin de Semana");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "div", 228)(53, "label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](54, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "textarea", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_textarea_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.observaciones, $event) || (ctx_r1.horarioForm.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "div", 218)(57, "div", 237)(58, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_192_Template_input_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.horarioForm.repetirSemanal, $event) || (ctx_r1.horarioForm.repetirSemanal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](60, " Repetir semanalmente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "div", 240)(62, "div", 241)(63, "button", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_192_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarHorarioModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](64, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const formHorario_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.isEditingHorario ? "\u270F\uFE0F Editar Horario" : "\u2795 Nuevo Horario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.personalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](21, 14, ctx_r1.personal$));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.horaInicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.horaFin);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.horarioForm.repetirSemanal);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !formHorario_r33.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditingHorario ? "Actualizar" : "Guardar", " Horario ");
  }
}
function CalendarioComponent_div_193_div_12_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const personal_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", personal_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate3"](" ", personal_r36.persona_nombres, " ", personal_r36.persona_apellidos, " - ", personal_r36.cargo_nombre, " ");
  }
}
function CalendarioComponent_div_193_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 253)(1, "label", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " \uD83D\uDC64 Seleccionar Personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "select", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_193_div_12_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.personaRegistro, $event) || (ctx_r1.personaRegistro = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function CalendarioComponent_div_193_div_12_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onPersonalSeleccionado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "option", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "-- Seleccione un personal --");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, CalendarioComponent_div_193_div_12_option_8_Template, 2, 4, "option", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.listaPersonal);
  }
}
function CalendarioComponent_div_193_div_13_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_div_13_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \uD83D\uDD04 Cambiar personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_193_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 258)(1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 132)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, CalendarioComponent_div_193_div_13_button_10_Template, 2, 0, "button", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerIniciales(ctx_r1.personaRegistro));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.personaRegistro.persona_nombres, " ", ctx_r1.personaRegistro.persona_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.personaRegistro.cargo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("CI: ", ctx_r1.personaRegistro.persona_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.modoAsistencia === "seleccion");
  }
}
function CalendarioComponent_div_193_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 262)(1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Seleccione un personal para registrar asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_193_div_15_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_div_15_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarEntrada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Registrar Entrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_193_div_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_div_15_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarSalida());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\uD83D\uDEAA");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Registrar Salida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_193_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 274)(1, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Asistencia registrada completamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_193_div_15_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 279)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Salida:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 1, ctx_r1.ultimaAsistencia == null ? null : ctx_r1.ultimaAsistencia.hora_salida));
  }
}
function CalendarioComponent_div_193_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 277)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "\u00DAltima Marcaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 278)(4, "div", 279)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, "Entrada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, CalendarioComponent_div_193_div_15_div_16_div_10_Template, 6, 3, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 279)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Duraci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 3, ctx_r1.ultimaAsistencia == null ? null : ctx_r1.ultimaAsistencia.hora_entrada));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.ultimaAsistencia == null ? null : ctx_r1.ultimaAsistencia.hora_salida);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.calcularDuracion(ctx_r1.ultimaAsistencia));
  }
}
function CalendarioComponent_div_193_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 263)(1, "div", 264)(2, "div", 265)(3, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Horario Programado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 265)(8, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Hora Actual:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, CalendarioComponent_div_193_div_15_button_13_Template, 4, 0, "button", 268)(14, CalendarioComponent_div_193_div_15_button_14_Template, 4, 0, "button", 269)(15, CalendarioComponent_div_193_div_15_div_15_Template, 5, 0, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, CalendarioComponent_div_193_div_15_div_16_Template, 16, 5, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.horarioProgramado);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.horaActualLocal);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.tieneEntradaHoy && ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.tieneEntradaHoy && !ctx_r1.tieneSalidaHoy && ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.tieneEntradaHoy && ctx_r1.tieneSalidaHoy && ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.ultimaAsistencia);
  }
}
function CalendarioComponent_div_193_div_16_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_div_16_button_4_Template_button_click_0_listener() {
      const estado_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.estadoSeleccionado = estado_r41.nombre);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r41 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", ctx_r1.estadoSeleccionado === estado_r41.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.getEstadoIcon(estado_r41.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", estado_r41.nombre, " ");
  }
}
function CalendarioComponent_div_193_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 218)(1, "label", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Justificaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "textarea", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_193_div_16_div_5_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.justificacion, $event) || (ctx_r1.justificacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.justificacion);
  }
}
function CalendarioComponent_div_193_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 281)(1, "label", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Estado Asistencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_193_div_16_button_4_Template, 4, 4, "button", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, CalendarioComponent_div_193_div_16_div_5_Template, 4, 1, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.estadosAsistencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.estadoSeleccionado === "JUSTIFICADO");
  }
}
function CalendarioComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 211)(1, "div", 212)(2, "div", 213)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\u23F0 Registrar Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarAsistencias());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6, " \uD83D\uDD04 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarAsistenciaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 215)(11, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, CalendarioComponent_div_193_div_12_Template, 9, 3, "div", 246)(13, CalendarioComponent_div_193_div_13_Template, 11, 6, "div", 247)(14, CalendarioComponent_div_193_div_14_Template, 5, 0, "div", 248)(15, CalendarioComponent_div_193_div_15_Template, 17, 6, "div", 249)(16, CalendarioComponent_div_193_div_16_Template, 6, 2, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 240)(18, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarAsistenciaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "button", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_193_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardarAsistencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Guardar Registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.modoAsistencia === "seleccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.modoAsistencia === "seleccion" && !ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.personaRegistro);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", !ctx_r1.personaRegistro || !ctx_r1.tieneEntradaHoy && !ctx_r1.tieneSalidaHoy);
  }
}
function CalendarioComponent_div_194_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const personal_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", personal_r44.personal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", personal_r44.persona_nombres, " ", personal_r44.persona_apellidos, " ");
  }
}
function CalendarioComponent_div_194_div_58_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 309)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](stat_r46.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](stat_r46.value);
  }
}
function CalendarioComponent_div_194_div_58_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.dias_trabajados || item_r47.dias_laborables || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.horas_totales || item_r47.horas_totales || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.horas_extras || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.tardanzas || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r47.ausencias || "-");
  }
}
function CalendarioComponent_div_194_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 301)(1, "div", 302)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 304)(8, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, CalendarioComponent_div_194_div_58_div_9_Template, 5, 2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 307)(11, "table", 66)(12, "thead")(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "D\u00EDas Trab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Horas Tot.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Horas Ext.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Tardanzas");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Ausencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, CalendarioComponent_div_194_div_58_tr_27_Template, 13, 6, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 308)(29, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_div_58_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarReportePDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, " Exportar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_div_58_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarReporteExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, " Exportar Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_div_58_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.enviarReporte());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, "\uD83D\uDCE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, " Enviar por Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.reporteGenerado.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](6, 4, ctx_r1.reporteGenerado.fecha_generacion, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.reporteGenerado.estadisticas);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.reporteGenerado.detalle);
  }
}
function CalendarioComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 211)(1, "div", 290)(2, "div", 213)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\uD83D\uDCCA Reportes de Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarReportesModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 215)(9, "div", 291)(10, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReportePorPersonal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Por Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Asistencia individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReporteDiarioCompleto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Reporte Diario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Asistencia del d\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_Template_div_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReporteMensual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26, "\uD83D\uDCC8");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "Reporte Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "Resumen del mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_194_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarReporteHorasExtras());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33, "\u23F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "Horas Extras");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, "Acumulado de horas extras");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 296)(39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, "Par\u00E1metros del Reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 297)(42, "div", 39)(43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44, "Fecha Inicio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_194_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.filtroReporte.fecha_inicio, $event) || (ctx_r1.filtroReporte.fecha_inicio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "div", 39)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](48, "Fecha Fin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_194_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.filtroReporte.fecha_fin, $event) || (ctx_r1.filtroReporte.fecha_fin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "div", 39)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](52, "Personal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "select", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_div_194_Template_select_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx_r1.filtroReporte.id_personal, $event) || (ctx_r1.filtroReporte.id_personal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](55, "Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](56, CalendarioComponent_div_194_option_56_Template, 2, 3, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](57, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](58, CalendarioComponent_div_194_div_58_Template, 41, 7, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroReporte.fecha_inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroReporte.fecha_fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroReporte.id_personal);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](57, 8, ctx_r1.personal$));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.reporteGenerado);
  }
}
function CalendarioComponent_div_195_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 319)(1, "div", 320)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "D\u00EDas registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 320)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "D\u00EDas completos");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 320)(12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Horas totales");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 320)(18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "Promedio diario");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.historialAsistencias.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.calcularEstadisticasPeriodo().diasCompletos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](14, 4, ctx_r1.calcularEstadisticasPeriodo().horasTotales, "1.0-0"), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](20, 7, ctx_r1.calcularEstadisticasPeriodo().promedioHoras, "1.1-1"), "h");
  }
}
function CalendarioComponent_div_195_div_8_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_195_div_8_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarHistorialExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \uD83D\uDCE5 Exportar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_195_div_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Cargando historial...");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_195_div_8_div_27_tr_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u23F0 Tarde");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_195_div_8_div_27_tr_19_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const asistencia_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, ctx_r1.calcularHorasExtras(asistencia_r50), "1.1-1"), "h ");
  }
}
function CalendarioComponent_div_195_div_8_div_27_tr_19_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_195_div_8_div_27_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, CalendarioComponent_div_195_div_8_div_27_tr_19_span_8_Template, 2, 0, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "horaLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "td")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](17, CalendarioComponent_div_195_div_8_div_27_tr_19_span_17_Template, 3, 4, "span", 324)(18, CalendarioComponent_div_195_div_8_div_27_tr_19_span_18_Template, 2, 0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "td")(20, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "td", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const asistencia_r50 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 13, asistencia_r50.fecha, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("text-danger", asistencia_r50.entrada_tarde);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", asistencia_r50.hora_entrada ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 16, asistencia_r50.hora_entrada) : "--:--", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", asistencia_r50.entrada_tarde);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", asistencia_r50.hora_salida ? _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](11, 18, asistencia_r50.hora_salida) : "--:--", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](15, 20, asistencia_r50.horas_trabajadas, "1.1-1"), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.calcularHorasExtras(asistencia_r50) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.calcularHorasExtras(asistencia_r50) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassMap"](ctx_r1.getEstadoClass(asistencia_r50.estado_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", asistencia_r50.estado_nombre || "PENDIENTE", "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", asistencia_r50.observaciones || "-", " ");
  }
}
function CalendarioComponent_div_195_div_8_div_27_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, " No hay registros de asistencia en este per\u00EDodo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function CalendarioComponent_div_195_div_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 65)(1, "table", 66)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Horas Trab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Horas Extras");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, CalendarioComponent_div_195_div_8_div_27_tr_19_Template, 24, 23, "tr", 67)(20, CalendarioComponent_div_195_div_8_div_27_tr_20_Template, 3, 0, "tr", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r1.historialAsistencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.historialAsistencias.length === 0);
  }
}
function CalendarioComponent_div_195_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 215)(1, "div", 312)(2, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 313)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "p")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Cargo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "p")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](13, "Documento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "p")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "Per\u00EDodo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](19, CalendarioComponent_div_195_div_8_div_19_Template, 23, 10, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 315)(21, "div", 61)(22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Registro detallado");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, CalendarioComponent_div_195_div_8_button_25_Template, 2, 0, "button", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](26, CalendarioComponent_div_195_div_8_div_26_Template, 4, 0, "div", 317)(27, CalendarioComponent_div_195_div_8_div_27_Template, 21, 2, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx_r1.obtenerIniciales(ctx_r1.historialPersonalSeleccionado));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"]("", ctx_r1.historialPersonalSeleccionado.persona_nombres, " ", ctx_r1.historialPersonalSeleccionado.persona_apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.historialPersonalSeleccionado.cargo_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.historialPersonalSeleccionado.persona_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r1.periodoActualTexto);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingHistorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.historialAsistencias.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingHistorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingHistorial);
  }
}
function CalendarioComponent_div_195_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_195_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarHistorialPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " \uD83D\uDCC4 Exportar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CalendarioComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 211)(1, "div", 290)(2, "div", 213)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "\uD83D\uDCCB Historial de Asistencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_195_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarHistorialModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, CalendarioComponent_div_195_div_8_Template, 28, 10, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 240)(10, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_div_195_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarHistorialModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, CalendarioComponent_div_195_button_12_Template, 2, 0, "button", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.historialPersonalSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.historialAsistencias.length);
  }
}
class CalendarioComponent {
  moduleLoader;
  loadingService;
  moduleName = 'Gestión de Calendario y Asistencia';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_facades_calendar_facade__WEBPACK_IMPORTED_MODULE_9__.CalendarFacade);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
  calendarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_calendario_service__WEBPACK_IMPORTED_MODULE_12__.CalendarioService);
  catalogoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_catalogo_service__WEBPACK_IMPORTED_MODULE_14__.CatalogoService);
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__.NotificationService);
  asistenciasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
  refreshTriggerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_16__.ThemeService);
  asistencias$ = this.asistenciasSubject.asObservable();
  currentTheme = 'light';
  // Estado del componente (UI)
  showHistorialModal = false;
  historialAsistencias = [];
  historialPersonalSeleccionado = null;
  isLoadingHistorial = false;
  periodoActualTexto = '';
  estadosAsistencia = [];
  isLoadingEstados = false;
  isSidebarCollapsed = false;
  showHelpSupport = false;
  showHorarioModal = false;
  showAsistenciaModal = false;
  showReportesModal = false;
  isEditingHorario = false;
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  horaActualLocal = '';
  isMinimized = false;
  showMinimizeNotification = false;
  currentFilters = {
    fecha_inicio: '',
    fecha_fin: ''
  };
  // Búsqueda
  searchQuery = '';
  searchResults = [];
  // Datos observables del facade
  personal$ = this.facade.personal$;
  horarios$ = this.facade.horarios$;
  resumen$ = this.facade.resumen$;
  estadisticas$ = this.facade.estadisticas$;
  filteredPersonal$ = this.facade.filteredPersonal$;
  viewState$ = this.facade.viewState$;
  modoAsistencia = 'seleccion';
  fechaActual = new Date();
  fechaSeleccionada = '';
  // Variables de filtro
  filtroPersonal = null;
  filtroEstado = null;
  filtroFecha = '';
  filtroDepartamento = null;
  // Variables de tiempo
  horaActual = new Date();
  // Datos para selectores
  departamentos = [{
    id: 1,
    nombre: 'Administración'
  }, {
    id: 2,
    nombre: 'Legal'
  }, {
    id: 3,
    nombre: 'Finanzas'
  }, {
    id: 4,
    nombre: 'TI'
  }, {
    id: 5,
    nombre: 'RRHH'
  }];
  // Formulario de horario - CORREGIDO: Todas las propiedades que el HTML espera
  horarioForm = {
    personalId: null,
    fecha: '',
    horaInicio: '',
    horaFin: '',
    tipo: 'NORMAL',
    observaciones: '',
    repetirSemanal: false
  };
  // Variables para asistencia - CORREGIDO: Todas las propiedades que el HTML espera
  personaRegistro = null;
  horarioProgramado = '08:00 - 17:00';
  tieneEntradaHoy = false;
  tieneSalidaHoy = false;
  ultimaAsistencia = null;
  estadoSeleccionado = 'PRESENTE';
  justificacion = '';
  // Variables para reportes - CORREGIDO: Todas las propiedades que el HTML espera
  filtroReporte = {
    fecha_inicio: '',
    fecha_fin: '',
    id_personal: null
  };
  reporteGenerado = null;
  // Paginación
  paginaActual = 1;
  itemsPorPagina = 10;
  totalItems = 0;
  // Datos locales para el template
  listaPersonal = [];
  resumenAsistencia = [];
  asistencias = [];
  estadisticas = {};
  horarios = [];
  vistaActual = 'week';
  constructor(moduleLoader, loadingService) {
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
  }
  relojInterval;
  ngOnInit() {
    this.setupThemeSubscription();
    this.setupReloj();
    this.setupSubscriptions();
    this.inicializarFechasReporte();
    // ✅ Cargar estados de asistencia DIRECTAMENTE
    this.cargarEstadosAsistencia();
    // ✅ Cargar datos iniciales según la vista actual
    setTimeout(() => {
      this.actualizarDatosPorVista();
    }, 500);
    this.refreshTriggerSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cargarAsistencias();
    });
    this.moduleLoader.registerComponentInstance(this.moduleName, this);
    this.loadModuleData();
  }
  ngAfterViewChecked() {
    // Después de cada verificación de vista, si ya está marcado, no hacer nada
    if (this.isMarkedReady) return;
    this.viewCheckedCount++;
    // Esperar a que Angular termine de renderizar completamente
    if (this.dataLoaded && this.viewCheckedCount >= 2) {
      console.log(`✅ Vista completamente estable (afterViewChecked x${this.viewCheckedCount})`);
      this.checkAndMarkReady();
    }
  }
  loadModuleData() {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log(`📡 Cargando datos para: ${_this.moduleName}`);
        // Simular carga de datos
        yield Promise.all([_this.fetchData('/api/personal'), _this.fetchData('/api/tipos-documento'), _this.fetchData('/api/generos')]);
        _this.dataLoaded = true;
        console.log(`✅ Datos cargados para: ${_this.moduleName}`);
        // Forzar detección de cambios
        setTimeout(() => {
          _this.checkAndMarkReady();
        }, 100);
      } catch (error) {
        console.error(`❌ Error cargando datos:`, error);
        _this.markModuleAsReady(); // Ocultar loading aunque haya error
      }
    })();
  }
  checkAndMarkReady() {
    if (this.isMarkedReady) return;
    const hasContent = document.querySelector('.calendar-container, .main-content, app-calendario');
    const hasData = document.querySelector('.calendar-view, .stats-container, .filtros-container, .table-container');
    console.log(`🔍 [Calendario] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
    if (this.dataLoaded && hasContent && hasData) {
      this.markModuleAsReady();
    } else if (this.dataLoaded) {
      setTimeout(() => this.checkAndMarkReady(), 200);
    }
  }
  markModuleAsReady() {
    if (this.isMarkedReady) return;
    this.isMarkedReady = true;
    console.log(`🏁 Marcando módulo como listo: ${this.moduleName}`);
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  fetchData(url) {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  setupThemeSubscription() {
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    if (this.relojInterval) {
      clearInterval(this.relojInterval);
    }
    this.destroy$.next();
    this.destroy$.complete();
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  setupReloj() {
    this.relojInterval = setInterval(() => {
      this.horaActual = new Date();
      // ✅ Actualizar hora local formateada
      const ahora = new Date();
      this.horaActualLocal = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}:${String(ahora.getSeconds()).padStart(2, '0')}`;
      this.cdr.detectChanges(); // Forzar actualización
    }, 1000);
  }
  inicializarFechasReporte() {
    const hoy = new Date();
    const haceUnaSemana = new Date(hoy);
    haceUnaSemana.setDate(hoy.getDate() - 7);
    this.filtroReporte.fecha_inicio = haceUnaSemana.toISOString().split('T')[0];
    this.filtroReporte.fecha_fin = hoy.toISOString().split('T')[0];
  }
  // ========== MÉTODOS DEL MENÚ ==========
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
  }
  // ========== MÉTODOS DEL HEADER ==========
  onToggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      const term = this.searchQuery.toLowerCase();
      this.searchResults = this.listaPersonal.filter(p => p.persona_nombres.toLowerCase().includes(term) || p.persona_apellidos.toLowerCase().includes(term) || p.persona_documento.includes(term)).map(p => ({
        title: `${p.persona_nombres} ${p.persona_apellidos}`,
        description: `${p.cargo_nombre} - ${p.persona_documento}`,
        icon: '👤'
      }));
    } else {
      this.searchResults = [];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ========== MÉTODOS DEL MODAL DE AYUDA ==========
  minimizeToBubble() {
    this.isMinimized = true;
    document.body.classList.add('minimized-mode');
    setTimeout(() => {
      this.showMinimizeNotification = true;
      setTimeout(() => {
        this.showMinimizeNotification = false;
      }, 3000);
    }, 300);
  }
  restoreFromBubble() {
    this.isMinimized = false;
    document.body.classList.remove('minimized-mode');
  }
  closeBubble(event) {
    event.stopPropagation();
    this.showHelpSupport = false;
    this.isMinimized = false;
  }
  handleOverlayClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
      if (this.showHelpSupport && !this.isMinimized) {
        this.minimizeToBubble();
      }
    }
  }
  // ========== MÉTODOS DEL CALENDARIO ==========
  // Calcular horas extras desde el componente (método auxiliar)
  calcularHorasExtras(asistencia) {
    if (!asistencia.hora_salida || !asistencia.hora_entrada || !asistencia.horario) {
      return 0;
    }
    try {
      const horaFinHorario = asistencia.horario.hora_fin;
      const horaSalida = asistencia.hora_salida;
      // Comparar horas como strings
      if (horaSalida > horaFinHorario) {
        const [salidaH, salidaM] = horaSalida.split(':').map(Number);
        const [finH, finM] = horaFinHorario.split(':').map(Number);
        let minutosExtras = salidaH * 60 + salidaM - (finH * 60 + finM);
        if (minutosExtras < 0) minutosExtras = 0;
        return parseFloat((minutosExtras / 60).toFixed(2));
      }
    } catch (error) {
      console.error('Error calculando horas extras:', error);
    }
    return 0;
  }
  // Obtener estado formateado
  getEstadoAsistencia(asistencia) {
    return asistencia.estado_nombre || asistencia.estado_nombre || 'PENDIENTE';
  }
  getEstadoClass(estado) {
    if (!estado) return 'estado-desconocido';
    const clases = {
      'PRESENTE': 'estado-presente',
      'AUSENTE': 'estado-ausente',
      'TARDE': 'estado-tarde',
      'JUSTIFICADO': 'estado-justificado',
      'VACACIONES': 'estado-vacaciones',
      'LICENCIA': 'estado-licencia'
    };
    return clases[estado] || 'estado-desconocido';
  }
  obtenerAsistenciasPorFecha(fecha) {
    if (!fecha) return [];
    const fechaStr = fecha.toISOString().split('T')[0];
    return this.asistencias.filter(a => {
      let fechaAsistencia = a.fecha;
      if (fechaAsistencia.includes('T')) {
        fechaAsistencia = fechaAsistencia.split('T')[0];
      } else {
        fechaAsistencia = new Date(a.fecha).toISOString().split('T')[0];
      }
      return fechaAsistencia === fechaStr;
    });
  }
  obtenerRangoFechasActualDesdeFecha(fecha) {
    if (this.vistaActual === 'day') {
      const inicio = new Date(fecha);
      const fin = new Date(fecha);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: inicio.toISOString().split('T')[0],
        finStr: fin.toISOString().split('T')[0]
      };
    } else if (this.vistaActual === 'week') {
      const inicio = new Date(fecha);
      const diaSemana = fecha.getDay();
      const diff = diaSemana === 0 ? 6 : diaSemana - 1;
      inicio.setDate(fecha.getDate() - diff);
      inicio.setHours(0, 0, 0, 0);
      const fin = new Date(inicio);
      fin.setDate(inicio.getDate() + 6);
      fin.setHours(23, 59, 59, 999);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: inicio.toISOString().split('T')[0],
        finStr: fin.toISOString().split('T')[0]
      };
    } else {
      const inicio = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
      const fin = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
      fin.setHours(23, 59, 59, 999);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: inicio.toISOString().split('T')[0],
        finStr: fin.toISOString().split('T')[0]
      };
    }
  }
  calcularDuracion(asistencia) {
    if (!asistencia?.hora_entrada) return '0h 0m';
    try {
      // ✅ Obtener horas y minutos como strings
      const horaEntradaStr = asistencia.hora_entrada;
      const horaSalidaStr = asistencia.hora_salida;
      if (!horaSalidaStr) return '0h 0m';
      // Extraer horas y minutos de strings como "08:37:00" o "08:37"
      const extraerHoraMinuto = horaStr => {
        const partes = horaStr.split(':');
        return {
          horas: parseInt(partes[0], 10),
          minutos: parseInt(partes[1], 10)
        };
      };
      const entrada = extraerHoraMinuto(horaEntradaStr);
      const salida = extraerHoraMinuto(horaSalidaStr);
      // Calcular minutos totales
      let minutosEntrada = entrada.horas * 60 + entrada.minutos;
      let minutosSalida = salida.horas * 60 + salida.minutos;
      // Si la salida es menor que la entrada (pasó de medianoche)
      if (minutosSalida < minutosEntrada) {
        minutosSalida += 24 * 60;
      }
      const diffMinutos = minutosSalida - minutosEntrada;
      if (diffMinutos <= 0) return '0h 0m';
      const horas = Math.floor(diffMinutos / 60);
      const minutos = diffMinutos % 60;
      return `${horas}h ${minutos}m`;
    } catch (error) {
      console.error('Error calculando duración:', error);
      return '0h 0m';
    }
  }
  cargarResumenPorPeriodo() {
    const {
      inicioStr,
      finStr
    } = this.obtenerRangoFechasActual();
    console.log('📅 Cargando resumen para período:', inicioStr, 'a', finStr);
    this.calendarioService.getResumenAsistencia({
      fecha_inicio: inicioStr,
      fecha_fin: finStr
    }).subscribe({
      next: resumen => {
        this.resumenAsistencia = resumen;
        // ✅ Actualizar el BehaviorSubject si es necesario
        // this.resumenSubject.next(resumen);
        console.log('✅ Resumen cargado:', resumen);
        console.log('📊 Primer registro:', resumen[0]);
      },
      error: err => console.error('❌ Error cargando resumen:', err)
    });
  }
  obtenerPersonalConEstado(fecha, hora) {
    if (!fecha) return [];
    const fechaStr = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
    const resultados = [];
    const personalYaProcesado = [];
    // Función para extraer hora del string
    const extraerHoraDelString = fechaHora => {
      if (!fechaHora) return 0;
      if (typeof fechaHora === 'string') {
        const match = fechaHora.match(/(\d{2}):(\d{2}):(\d{2})/);
        if (match) {
          return parseInt(match[1]);
        }
      }
      return 0;
    };
    // Función para formatear hora
    const formatearHora = fechaHora => {
      if (!fechaHora) return '00:00';
      if (typeof fechaHora === 'string') {
        const match = fechaHora.match(/(\d{2}):(\d{2}):(\d{2})/);
        if (match) {
          return `${match[1]}:${match[2]}`;
        }
      }
      return '00:00';
    };
    // ========== PROCESAR ASISTENCIAS - Mostrar en la hora REAL de entrada ==========
    for (const asistencia of this.asistencias) {
      let fechaAsistencia = asistencia.fecha.includes('T') ? asistencia.fecha.split('T')[0] : asistencia.fecha.split(' ')[0];
      if (fechaAsistencia === fechaStr && asistencia.hora_entrada) {
        const horaEntrada = extraerHoraDelString(asistencia.hora_entrada);
        // ✅ MOSTRAR EN LA HORA REAL DE ENTRADA, no en la hora del horario
        if (hora === horaEntrada) {
          const personal = this.listaPersonal.find(p => p.personal_id === asistencia.personal_id);
          if (personal && !personalYaProcesado.includes(personal.personal_id)) {
            personalYaProcesado.push(personal.personal_id);
            const estado = asistencia.hora_salida ? 'completo' : 'entrada-solo';
            resultados.push({
              personal: personal,
              estado: estado,
              horario: this.obtenerHorarioDelPersonal(personal.personal_id, fechaStr),
              tieneAsistencia: true,
              horaEntrada: formatearHora(asistencia.hora_entrada),
              horaSalida: asistencia.hora_salida ? formatearHora(asistencia.hora_salida) : undefined
            });
          }
        }
      }
    }
    // ========== PROCESAR HORARIOS (solo para personal sin asistencia) ==========
    for (const horario of this.horarios) {
      let fechaHorario = horario.fecha.includes('T') ? horario.fecha.split('T')[0] : horario.fecha.split(' ')[0];
      if (fechaHorario === fechaStr) {
        const horaInicio = extraerHoraDelString(horario.hora_inicio);
        // ✅ Mostrar horarios en la hora de inicio del horario
        if (hora === horaInicio) {
          const personal = this.listaPersonal.find(p => p.personal_id === horario.personal_id);
          if (personal && !personalYaProcesado.includes(personal.personal_id)) {
            personalYaProcesado.push(personal.personal_id);
            const ahora = new Date();
            const horaActual = ahora.getHours();
            const fechaHoy = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
            let estado = 'espera';
            if (fechaStr === fechaHoy && horaActual > horaInicio) {
              estado = 'ausente';
            }
            const horarioStr = `${formatearHora(horario.hora_inicio)} - ${formatearHora(horario.hora_fin)}`;
            resultados.push({
              personal: personal,
              estado: estado,
              horario: horarioStr,
              tieneAsistencia: false
            });
          }
        }
      }
    }
    return resultados;
  }
  // Obtener iniciales de un personal
  obtenerIniciales(personal) {
    if (!personal) return '??';
    const iniciales = [personal.persona_nombres?.charAt(0) || '', personal.persona_apellidos?.charAt(0) || ''];
    return iniciales.join('').toUpperCase();
  }
  extraerHora(fechaHora) {
    if (!fechaHora) return 0;
    if (typeof fechaHora === 'string') {
      // Limpiar el string
      let horaStr = fechaHora;
      // Si tiene T (ISO format)
      if (horaStr.includes('T')) {
        horaStr = horaStr.split('T')[1];
      }
      // Si tiene espacio
      else if (horaStr.includes(' ')) {
        horaStr = horaStr.split(' ')[1];
      }
      // Limpiar zona horaria y milisegundos
      horaStr = horaStr.split('.')[0].split('Z')[0].split('-')[0];
      // Extraer hora
      return parseInt(horaStr.split(':')[0]);
    }
    if (fechaHora instanceof Date) {
      return fechaHora.getHours();
    }
    return 0;
  }
  // Obtener iniciales por ID
  obtenerInicialesPorPersonalId(personalId) {
    const personal = this.listaPersonal.find(p => p.personal_id === personalId);
    return this.obtenerIniciales(personal);
  }
  // Obtener nombre completo por ID
  obtenerNombrePersonal(personalId) {
    const personal = this.listaPersonal.find(p => p.personal_id === personalId);
    return personal ? `${personal.persona_nombres} ${personal.persona_apellidos}` : 'Desconocido';
  }
  get personalFiltrado() {
    let personal = this.listaPersonal;
    if (this.filtroPersonal) {
      personal = personal.filter(p => p.personal_id === this.filtroPersonal);
    }
    return personal;
  }
  // Obtener días del mes actual
  obtenerDiasMes() {
    const año = this.fechaActual.getFullYear();
    const mes = this.fechaActual.getMonth();
    const primerDia = new Date(año, mes, 1);
    const ultimoDia = new Date(año, mes + 1, 0);
    const dias = [];
    const primerDiaSemana = primerDia.getDay();
    const offset = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;
    // Días del mes anterior
    for (let i = offset; i > 0; i--) {
      const fecha = new Date(año, mes, 1 - i);
      dias.push({
        numero: fecha.getDate(),
        fecha: fecha,
        fechaStr: fecha.toISOString().split('T')[0],
        esMesActual: false,
        esHoy: false
      });
    }
    // Días del mes actual
    const hoy = new Date().toISOString().split('T')[0];
    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      const fecha = new Date(año, mes, i);
      const fechaStr = fecha.toISOString().split('T')[0];
      dias.push({
        numero: i,
        fecha: fecha,
        fechaStr: fechaStr,
        esMesActual: true,
        esHoy: fechaStr === hoy
      });
    }
    return dias;
  }
  // Obtener personal que registró asistencia en una fecha específica (para vista mes)
  obtenerPersonalPorFecha(fechaStr) {
    const asistenciasFecha = this.asistencias.filter(a => {
      const fechaAsistencia = new Date(a.fecha).toISOString().split('T')[0];
      return fechaAsistencia === fechaStr;
    });
    const personalUnico = [];
    for (const asistencia of asistenciasFecha) {
      const personal = this.listaPersonal.find(p => p.personal_id === asistencia.personal_id);
      if (personal && !personalUnico.find(p => p.personal_id === personal.personal_id)) {
        personalUnico.push(personal);
      }
    }
    return personalUnico;
  }
  get diasMes() {
    const hoy = new Date(this.fechaActual);
    const primerDia = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const dias = [];
    const primerDiaSemana = primerDia.getDay();
    for (let i = 0; i < primerDiaSemana; i++) {
      const fecha = new Date(primerDia);
      fecha.setDate(fecha.getDate() - (primerDiaSemana - i));
      dias.push({
        numero: fecha.getDate(),
        fecha: fecha.toISOString().split('T')[0],
        esMesActual: false,
        esHoy: false,
        tieneEventos: false,
        eventos: []
      });
    }
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);
    const hoyDate = new Date().toISOString().split('T')[0];
    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      const fecha = new Date(hoy.getFullYear(), hoy.getMonth(), i);
      const fechaStr = fecha.toISOString().split('T')[0];
      dias.push({
        numero: i,
        fecha: fechaStr,
        esMesActual: true,
        esHoy: fechaStr === hoyDate,
        tieneEventos: false,
        eventos: []
      });
    }
    return dias;
  }
  obtenerCargoPersonal(personalId) {
    const personal = this.listaPersonal.find(p => p.personal_id === personalId);
    return personal?.cargo_nombre || 'Sin cargo';
  }
  actualizarDatosPorVista() {
    const {
      inicioStr,
      finStr
    } = this.obtenerRangoFechasActual();
    // ✅ Pasar filtros de fecha al facade
    this.facade.refreshData({
      fecha_inicio: inicioStr,
      fecha_fin: finStr
    });
  }
  tieneRegistroDia(fecha, personalId) {
    const asistencia = this.asistencias.find(a => a.personal_id === personalId && a.fecha === fecha);
    return !!asistencia?.hora_entrada;
  }
  obtenerEstadoDia(fecha, personalId) {
    const asistencia = this.asistencias.find(a => a.personal_id === personalId && a.fecha === fecha);
    if (!asistencia) return 'sin-registro';
    if (asistencia.hora_entrada && asistencia.hora_salida) return 'completo';
    if (asistencia.hora_entrada && !asistencia.hora_salida) return 'entrada-solo';
    return 'sin-registro';
  }
  agregarHorario(personal, hora) {
    this.horarioForm.personalId = personal.personal_id;
    this.horarioForm.fecha = this.fechaActual.toISOString().split('T')[0];
    this.horarioForm.horaInicio = `${hora.toString().padStart(2, '0')}:00`;
    this.horarioForm.horaFin = `${(hora + 8).toString().padStart(2, '0')}:00`;
    this.isEditingHorario = false;
    this.showHorarioModal = true;
  }
  get diasSemana() {
    const {
      inicio
    } = this.obtenerRangoFechasActual();
    const dias = [];
    if (!inicio) {
      return dias;
    }
    for (let i = 0; i < 7; i++) {
      const fecha = new Date(inicio);
      fecha.setDate(inicio.getDate() + i);
      // ✅ Formatear fecha LOCAL sin toISOString
      const fechaStr = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
      dias.push({
        nombre: fecha.toLocaleDateString('es', {
          weekday: 'long'
        }),
        nombreCorto: fecha.toLocaleDateString('es', {
          weekday: 'short'
        }),
        fecha: fecha,
        fechaStr: fechaStr,
        numero: fecha.getDate(),
        mes: fecha.getMonth() + 1,
        año: fecha.getFullYear()
      });
    }
    return dias;
  }
  // ========== MÉTODOS DE MODAL DE HORARIO ==========
  abrirModalAsistenciaConFecha(fecha, hora) {
    this.modoAsistencia = 'seleccion';
    this.personaRegistro = null;
    this.fechaSeleccionada = fecha; // ✅ Guardar la fecha seleccionada
    console.log('📅 Abriendo modal para fecha:', this.fechaSeleccionada);
    this.showAsistenciaModal = true;
  }
  abrirModalNuevoHorario() {
    this.isEditingHorario = false;
    this.resetHorarioForm();
    this.showHorarioModal = true;
  }
  cerrarHorarioModal() {
    this.showHorarioModal = false;
    this.resetHorarioForm();
  }
  resetHorarioForm() {
    this.horarioForm = {
      personalId: null,
      fecha: new Date().toISOString().split('T')[0],
      horaInicio: '08:00',
      horaFin: '17:00',
      tipo: 'NORMAL',
      observaciones: '',
      repetirSemanal: false
    };
  }
  editarHorario(id) {
    this.isEditingHorario = true;
    this.showHorarioModal = true;
  }
  // ========== MÉTODOS DE ASISTENCIA ==========
  cerrarAsistenciaModal() {
    this.showAsistenciaModal = false;
  }
  registrarEntradaMasiva() {
    console.log('Entrada masiva - implementar');
  }
  registrarMarcacionManual() {
    this.abrirModalAsistencia();
  }
  guardarAsistencia() {
    if (!this.personaRegistro) {
      this.notificationService.showError('Debe seleccionar un personal');
      return;
    }
    if (!this.tieneEntradaHoy) {
      this.registrarEntrada();
    } else if (this.tieneEntradaHoy && !this.tieneSalidaHoy) {
      this.registrarSalida();
    } else {
      this.cerrarAsistenciaModal();
    }
  }
  // ========== MÉTODOS DE REPORTES ==========
  abrirModalReportes() {
    this.showReportesModal = true;
  }
  cerrarReportesModal() {
    this.showReportesModal = false;
    this.reporteGenerado = null;
  }
  generarReportePorPersonal() {
    this.reporteGenerado = {
      titulo: 'Reporte por Personal',
      estadisticas: [],
      detalle: []
    };
  }
  generarReporteDiarioCompleto() {
    this.reporteGenerado = {
      titulo: 'Reporte Diario',
      estadisticas: [],
      detalle: []
    };
  }
  generarReporteDiario() {
    this.reporteGenerado = {
      titulo: 'Reporte Diario',
      estadisticas: [],
      detalle: []
    };
  }
  generarReporteMensual() {
    this.reporteGenerado = {
      titulo: 'Reporte Mensual',
      estadisticas: [],
      detalle: []
    };
  }
  generarReporteHorasExtras() {
    this.reporteGenerado = {
      titulo: 'Reporte Horas Extras',
      estadisticas: [],
      detalle: []
    };
  }
  exportarReportePDF() {
    console.log('Exportando PDF');
  }
  exportarReporteExcel() {
    console.log('Exportando Excel');
  }
  enviarReporte() {
    console.log('Enviando reporte por email');
  }
  exportarExcelAsistencia() {
    this.exportarReporteExcel();
  }
  exportarPDFAsistencia() {
    this.exportarReportePDF();
  }
  generarReportePersonalPDF(id) {
    console.log('Generando PDF para personal:', id);
  }
  // ========== MÉTODOS DE FILTRO ==========
  aplicarFiltros() {
    this.facade.setFilter('personal', this.filtroPersonal);
    this.facade.setFilter('estado', this.filtroEstado);
  }
  aplicarFiltroPersonal(personalId) {
    this.facade.setFilter('personal', personalId);
  }
  limpiarFiltros() {
    this.filtroPersonal = null;
    this.filtroEstado = null;
    this.filtroFecha = '';
    this.filtroDepartamento = null;
    this.facade.clearFilters();
  }
  filtrarPorEstado(estado) {
    this.filtroEstado = estado.toUpperCase();
    this.aplicarFiltros();
  }
  mostrarHorasExtras() {
    this.filtroEstado = 'EXTRA';
    this.aplicarFiltros();
  }
  verDetallesDia(fecha) {
    console.log('Ver detalles día:', fecha);
  }
  // ========== MÉTODOS DE PAGINACIÓN ==========
  get totalPaginas() {
    return Math.ceil(this.personalFiltrado.length / this.itemsPorPagina);
  }
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
  }
  cambiarPaginaNumero(pagina) {
    if (typeof pagina === 'number') {
      this.paginaActual = pagina;
    }
  }
  getPaginationArray() {
    const total = this.totalPaginas;
    const current = this.paginaActual;
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || i >= current - delta && i <= current + delta) {
        range.push(i);
      }
    }
    let prev = 0;
    for (const i of range) {
      if (prev !== 0) {
        if (i - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (i - prev !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      prev = i;
    }
    return rangeWithDots;
  }
  get periodoActual() {
    const hoy = new Date();
    const inicioSemana = new Date(hoy);
    inicioSemana.setDate(hoy.getDate() - hoy.getDay() + 1);
    const finSemana = new Date(inicioSemana);
    finSemana.setDate(inicioSemana.getDate() + 6);
    return `${inicioSemana.toLocaleDateString('es', {
      day: 'numeric',
      month: 'short'
    })} - ${finSemana.toLocaleDateString('es', {
      day: 'numeric',
      month: 'short'
    })}`;
  }
  get totalPresentes() {
    return this.estadisticas.total_presentes || 0;
  }
  get totalAusentes() {
    return this.estadisticas.total_ausentes || 0;
  }
  get totalTardes() {
    return this.estadisticas.total_tardes || 0;
  }
  get totalHorasExtras() {
    return this.estadisticas.total_horas_extras || 0;
  }
  getDiaClass(dia) {
    if (!dia) return '';
    const clases = {
      'PRESENTE': 'presente',
      'AUSENTE': 'ausente',
      'TARDE': 'tarde',
      'VACACIONES': 'vacaciones',
      'LICENCIA': 'licencia',
      'DESCANSO': 'descanso',
      'EXTRA': 'extra'
    };
    return clases[dia.estado] || '';
  }
  getCurrentEntityName() {
    return 'Calendario';
  }
  // ========== MÉTODOS PARA EL CALENDARIO (usando Horario) ==========
  tieneHorario(personal, hora) {
    if (!personal || !this.horarios.length) return false;
    const fechaStr = this.fechaActual.toISOString().split('T')[0];
    const horarioPersonal = this.horarios.find(h => h.personal_id === personal.personal_id && h.fecha === fechaStr);
    if (!horarioPersonal) return false;
    const horaInicio = parseInt(horarioPersonal.hora_inicio.split(':')[0]);
    const horaFin = parseInt(horarioPersonal.hora_fin.split(':')[0]);
    return hora >= horaInicio && hora < horaFin;
  }
  estaTrabajando(personal, hora) {
    return this.tieneHorario(personal, hora);
  }
  obtenerHorario(personal, hora) {
    if (!this.tieneHorario(personal, hora)) return '';
    const fechaStr = this.fechaActual.toISOString().split('T')[0];
    const horario = this.horarios.find(h => h.personal_id === personal.personal_id && h.fecha === fechaStr);
    if (!horario) return '';
    return `${horario.hora_inicio} - ${horario.hora_fin}`;
  }
  // ========== MÉTODO PARA VER DETALLES ==========
  // Navegar entre fechas - USAR EL FACADE
  navegarFecha(direccion) {
    this.facade.navigate(direccion); // ✅ El facade actualiza viewState$ internamente
  }
  // Ir al día actual
  irAHoy() {
    this.facade.goToToday(); // ✅ El facade actualiza viewState$ internamente
  }
  // Cambiar vista
  cambiarVista(vista) {
    this.facade.changeView(vista); // ✅ El facade actualiza viewState$ internamente
  }
  // ========== GETTERS PARA EL TEMPLATE ==========
  get marcacionesHoy() {
    // Obtener fecha actual en formato local YYYY-MM-DD
    const ahora = new Date();
    const hoy = `${ahora.getFullYear()}-${String(ahora.getMonth() + 1).padStart(2, '0')}-${String(ahora.getDate()).padStart(2, '0')}`;
    return this.asistencias.filter(a => {
      // Extraer solo la fecha de la asistencia
      let fechaAsistencia = a.fecha;
      // Si es timestamp ISO (2026-04-26T00:00:00.000000Z)
      if (fechaAsistencia.includes('T')) {
        fechaAsistencia = fechaAsistencia.split('T')[0];
      }
      // Si tiene espacio (2026-04-26 00:00:00)
      else if (fechaAsistencia.includes(' ')) {
        fechaAsistencia = fechaAsistencia.split(' ')[0];
      }
      return fechaAsistencia === hoy;
    });
  }
  // ✅ Método para cambiar de personal (solo en modo selección)
  cambiarPersona() {
    this.personaRegistro = null;
    this.tieneEntradaHoy = false;
    this.tieneSalidaHoy = false;
    this.ultimaAsistencia = null;
    this.estadoSeleccionado = 'PRESENTE';
    this.justificacion = '';
    this.horarioProgramado = '08:00 - 17:00';
  }
  // ✅ Abrir modal desde el botón "Registrar Marcación" (con selector)
  abrirModalAsistenciaDesdeBoton() {
    this.modoAsistencia = 'seleccion';
    this.personaRegistro = null;
    this.tieneEntradaHoy = false;
    this.tieneSalidaHoy = false;
    this.ultimaAsistencia = null;
    this.estadoSeleccionado = 'PRESENTE';
    this.justificacion = '';
    this.horarioProgramado = '08:00 - 17:00';
    this.showAsistenciaModal = true;
  }
  // ✅ Abrir modal desde "Ver Detalles" (sin selector, personal directo)
  abrirModalAsistenciaConPersonal(personal) {
    this.modoAsistencia = 'directo';
    this.personaRegistro = personal;
    this.onPersonalSeleccionado();
    this.showAsistenciaModal = true;
  }
  // ✅ Método principal que decide cómo abrir (para compatibilidad)
  abrirModalAsistencia(personal) {
    if (personal) {
      this.abrirModalAsistenciaConPersonal(personal);
    } else {
      this.abrirModalAsistenciaDesdeBoton();
    }
  }
  actualizarVistaCalendario() {
    // Forzar detección de cambios
    this.fechaActual = new Date(this.fechaActual);
    // Recargar asistencias para la fecha actual
    const fechaStr = this.fechaActual.toISOString().split('T')[0];
    const asistenciasHoy = this.asistencias.filter(a => a.fecha === fechaStr);
    console.log(`📅 Actualizando vista para ${fechaStr}, asistencias:`, asistenciasHoy.length);
    // Actualizar el panel de marcaciones
    if (this.marcacionesHoy.length > 0) {
      console.log('✅ Marcaciones hoy:', this.marcacionesHoy);
    }
  }
  actualizarEstadosAsistencia() {
    if (!this.personaRegistro) return;
    const hoy = new Date().toISOString().split('T')[0];
    const asistenciaHoy = this.asistencias.find(a => a.personal_id === this.personaRegistro?.personal_id && a.fecha === hoy);
    this.tieneEntradaHoy = !!asistenciaHoy?.hora_entrada;
    this.tieneSalidaHoy = !!asistenciaHoy?.hora_salida;
    this.ultimaAsistencia = asistenciaHoy || null;
    console.log('Estados actualizados:', {
      tieneEntradaHoy: this.tieneEntradaHoy,
      tieneSalidaHoy: this.tieneSalidaHoy
    });
  }
  refreshData() {
    console.log('🔄 Refrescando datos...');
    // ✅ Recargar asistencias directamente del servicio
    this.facade.asistencias$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(asistencias => {
      console.log('✅ Asistencias recargadas:', asistencias);
      this.asistencias = asistencias;
      // ✅ Forzar actualización de la vista
      this.fechaActual = new Date(this.fechaActual);
    });
    // Recargar horarios
    this.facade.horarios$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(horarios => {
      this.horarios = horarios;
    });
  }
  setupSubscriptions() {
    this.personal$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(personal => {
      this.listaPersonal = personal;
      this.totalItems = personal.length;
    });
    // ✅ Sincronizar vistaActual y fechaActual con el facade
    this.viewState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(viewState => {
      if (viewState) {
        this.vistaActual = viewState.view;
        this.fechaActual = viewState.date;
        this.actualizarDatosPorVista();
      }
    });
    this.horarios$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(horarios => {
      this.horarios = horarios;
      if (horarios.length > 0) {
        this.cdr.detectChanges();
      }
    });
    // ✅ MEJORAR: Suscribirse a asistencias y actualizar el modal
    this.facade.asistencias$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(asistencias => {
      this.asistencias = asistencias;
      this.asistenciasSubject.next(asistencias);
      // Si el modal está abierto y hay personal seleccionado, actualizar su estado
      if (this.showAsistenciaModal && this.personaRegistro) {
        this.actualizarEstadoAsistenciaPersonal();
      }
    });
    this.resumen$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(resumen => {
      if (resumen && resumen.length > 0) {}
    });
  }
  cargarHistorialAsistencias(personalId, fechaInicio, fechaFin) {
    this.isLoadingHistorial = true;
    this.calendarioService.getAsistencias({
      personal_id: personalId,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin
    }).subscribe({
      next: asistencias => {
        // ✅ Ordenar por fecha ascendente para mostrar cronológicamente
        this.historialAsistencias = asistencias.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        this.isLoadingHistorial = false;
      },
      error: err => {
        console.error('Error cargando historial:', err);
        this.notificationService.showError('Error al cargar el historial');
        this.isLoadingHistorial = false;
        this.historialAsistencias = [];
      }
    });
  }
  registrarEntrada() {
    if (!this.personaRegistro) {
      this.notificationService.showError('Debe seleccionar un personal');
      return;
    }
    const fecha = this.fechaSeleccionada || new Date().toISOString().split('T')[0];
    const fechaFormateada = new Date(fecha).toISOString().split('T')[0];
    const estadoSeleccionadoObj = this.estadosAsistencia.find(e => e.nombre === this.estadoSeleccionado);
    const estadoId = estadoSeleccionadoObj?.estado_asistencia_id;
    if (!estadoId) {
      this.notificationService.showError('Estado de asistencia no válido');
      return;
    }
    this.facade.registrarEntrada(this.personaRegistro.personal_id, estadoId, this.justificacion, fechaFormateada).subscribe({
      next: asistencia => {
        console.log('✅ Entrada registrada:', asistencia);
        // ✅ FORZAR RECARGA COMPLETA
        setTimeout(() => {
          // 1. Recargar asistencias del período actual
          this.actualizarDatosPorVista();
          // 2. Forzar detección de cambios en el modal
          if (this.personaRegistro) {
            // Recargar el estado del personal
            const fechaLocal = fechaFormateada;
            const asistenciaEnFecha = this.asistencias.find(a => a.personal_id === this.personaRegistro?.personal_id && new Date(a.fecha).toISOString().split('T')[0] === fechaLocal);
            this.tieneEntradaHoy = !!asistenciaEnFecha?.hora_entrada;
            this.tieneSalidaHoy = !!asistenciaEnFecha?.hora_salida;
            this.ultimaAsistencia = asistenciaEnFecha || null;
            console.log('✅ Estado actualizado en modal:', {
              tieneEntradaHoy: this.tieneEntradaHoy,
              tieneSalidaHoy: this.tieneSalidaHoy,
              ultimaAsistencia: this.ultimaAsistencia
            });
            // Forzar detección de cambios
            this.cdr.detectChanges();
          }
          // 3. Forzar actualización de la vista del calendario
          this.refreshCalendarView();
        }, 500);
        this.notificationService.showSuccess(`Entrada registrada exitosamente para el día ${fechaFormateada}`);
        // NO cerrar el modal para permitir registrar salida inmediatamente (si es hoy)
        // this.cerrarAsistenciaModal();
      },
      error: err => {
        console.error('Error registrando entrada:', err);
        this.notificationService.showError(err.error?.message || err.message || 'Error al registrar entrada');
      }
    });
  }
  actualizarEstadoAsistenciaPersonal() {
    if (!this.personaRegistro) return;
    const fecha = this.fechaSeleccionada || new Date().toISOString().split('T')[0];
    const fechaNormalizada = fecha.split('T')[0];
    console.log('🔍 Actualizando estado para fecha:', fechaNormalizada);
    console.log('Asistencias disponibles:', this.asistencias.map(a => ({
      id: a.asistencia_id,
      personal_id: a.personal_id,
      fecha: a.fecha.split('T')[0],
      hora_entrada_raw: a.hora_entrada,
      hora_entrada_formateada: this.formatearHoraLocal(a.hora_entrada)
    })));
    const asistencia = this.asistencias.find(a => a.personal_id === this.personaRegistro?.personal_id && a.fecha.split('T')[0] === fechaNormalizada);
    this.tieneEntradaHoy = !!asistencia?.hora_entrada;
    this.tieneSalidaHoy = !!asistencia?.hora_salida;
    this.ultimaAsistencia = asistencia || null;
    console.log('✅ Estado actualizado:', {
      tieneEntradaHoy: this.tieneEntradaHoy,
      tieneSalidaHoy: this.tieneSalidaHoy,
      hora_entrada: asistencia?.hora_entrada,
      hora_entrada_formateada: this.formatearHoraLocal(asistencia?.hora_entrada)
    });
    this.cdr.detectChanges();
  }
  // Método auxiliar para formatear hora local
  formatearHoraLocal(fechaHora) {
    if (!fechaHora) return '--:--';
    if (typeof fechaHora === 'string') {
      const match = fechaHora.match(/(\d{2}):(\d{2}):(\d{2})/);
      if (match) {
        return `${match[1]}:${match[2]}`;
      }
    }
    return '--:--';
  }
  registrarSalida(personalId) {
    const id = personalId || this.personaRegistro?.personal_id;
    const fecha = this.fechaSeleccionada || new Date().toISOString().split('T')[0];
    if (!id) {
      this.notificationService.showError('No se pudo identificar al personal');
      return;
    }
    this.facade.registrarSalida(id, fecha).subscribe({
      next: asistencia => {
        console.log('✅ Salida registrada:', asistencia);
        setTimeout(() => {
          // 1. Recargar asistencias del período actual
          this.actualizarDatosPorVista();
          // 2. Actualizar estado del modal
          if (this.personaRegistro) {
            const fechaFormateada = new Date(fecha).toISOString().split('T')[0];
            const asistenciaActualizada = this.asistencias.find(a => a.personal_id === this.personaRegistro?.personal_id && new Date(a.fecha).toISOString().split('T')[0] === fechaFormateada);
            this.tieneEntradaHoy = !!asistenciaActualizada?.hora_entrada;
            this.tieneSalidaHoy = !!asistenciaActualizada?.hora_salida;
            this.ultimaAsistencia = asistenciaActualizada || null;
            this.cdr.detectChanges();
          }
          // 3. Forzar actualización de la vista
          this.refreshCalendarView();
          // 4. Cerrar modal SOLO si la salida es para hoy (ya se completó el día)
          const hoy = new Date().toISOString().split('T')[0];
          if (fecha === hoy && asistencia?.hora_salida) {
            this.cerrarAsistenciaModal();
          }
        }, 500);
        this.notificationService.showSuccess(`Salida registrada exitosamente para el día ${fecha}`);
      },
      error: err => {
        console.error('Error registrando salida:', err);
        this.notificationService.showError(err.message || 'Error al registrar salida');
      }
    });
  }
  // ✅ NUEVO: Forzar actualización de la vista del calendario
  refreshCalendarView() {
    // Forzar que las vistas se actualicen
    setTimeout(() => {
      // Disparar actualización de los observables
      this.facade.refreshData();
      // Recargar datos según la vista actual
      this.actualizarDatosPorVista();
      // Forzar detección de cambios
      this.cdr.detectChanges();
      console.log('🔄 Vista del calendario actualizada');
    }, 100);
  }
  cargarAsistencias() {
    console.log('🔄 Cargando asistencias desde el servidor...');
    this.calendarioService.getAsistencias().subscribe({
      next: response => {
        // ✅ Extraer data correctamente
        const asistencias = response.data || response;
        console.log('✅ Asistencias cargadas:', asistencias);
        this.asistencias = asistencias;
        this.asistenciasSubject.next(asistencias);
      },
      error: err => {
        console.error('❌ Error cargando asistencias:', err);
      }
    });
  }
  // ========== MÉTODOS DEL CALENDARIO ==========
  // Obtener fecha actual como string
  get fechaActualString() {
    return this.fechaActual.toISOString().split('T')[0];
  }
  onPersonalSeleccionado() {
    if (this.personaRegistro) {
      const fecha = this.fechaSeleccionada || new Date().toISOString().split('T')[0];
      const fechaNormalizada = fecha.split('T')[0];
      // ✅ Obtener el horario REAL del personal para esta fecha
      const horarioReal = this.obtenerHorarioDelPersonal(this.personaRegistro.personal_id, fechaNormalizada);
      this.horarioProgramado = horarioReal !== 'Sin horario' ? horarioReal : '08:00 - 17:00';
      // Buscar asistencia
      const asistenciaEnFecha = this.asistencias.find(a => {
        const fechaAsistencia = a.fecha.split('T')[0];
        return a.personal_id === this.personaRegistro?.personal_id && fechaAsistencia === fechaNormalizada;
      });
      this.tieneEntradaHoy = !!asistenciaEnFecha?.hora_entrada;
      this.tieneSalidaHoy = !!asistenciaEnFecha?.hora_salida;
      this.ultimaAsistencia = asistenciaEnFecha || null;
    }
  }
  guardarHorario() {
    if (!this.horarioForm.personalId) {
      this.notificationService.showError('Debe seleccionar un personal');
      return;
    }
    if (!this.horarioForm.fecha) {
      this.notificationService.showError('Debe seleccionar una fecha');
      return;
    }
    // ✅ ENVIAR SOLO HH:MM, no HH:MM:SS
    const payload = {
      personal_id: this.horarioForm.personalId,
      fecha: this.horarioForm.fecha,
      hora_inicio: this.horarioForm.horaInicio.substring(0, 5),
      // Solo "08:00"
      hora_fin: this.horarioForm.horaFin.substring(0, 5),
      // Solo "17:00"
      tipo: this.horarioForm.tipo,
      observaciones: this.horarioForm.observaciones,
      repetir_semanal: this.horarioForm.repetirSemanal ? 'true' : 'false'
    };
    console.log('📤 Creando/Reemplazando horario:', payload);
    this.facade.crearHorario(payload).subscribe({
      next: horario => {
        console.log('✅ Horario guardado:', horario);
        this.cerrarHorarioModal();
        this.notificationService.showSuccess('Horario guardado exitosamente');
        setTimeout(() => {
          this.facade.refreshData();
          this.actualizarDatosPorVista();
        }, 500);
      },
      error: err => {
        console.error('Error guardando horario:', err);
        this.notificationService.showError(err.message || 'Error al guardar horario');
      }
    });
  }
  obtenerAsistenciasPorFechaYHora(fecha, hora) {
    if (!fecha) return [];
    const fechaStr = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
    const asistenciasEnHora = [];
    for (const asistencia of this.asistencias) {
      const fechaAsistencia = asistencia.fecha.split('T')[0];
      if (fechaAsistencia === fechaStr && asistencia.hora_entrada) {
        // ✅ Extraer hora LOCAL del string (no convertir a Date)
        let horaEntrada = 0;
        if (typeof asistencia.hora_entrada === 'string') {
          // Buscar HH:MM:SS en el string original
          const match = asistencia.hora_entrada.match(/(\d{2}):(\d{2}):(\d{2})/);
          if (match) {
            horaEntrada = parseInt(match[1]);
          }
        }
        // También verificar si está en el rango de horas (para entradas que no sean exactas)
        // Por ejemplo, si marcó a las 17:34, debería aparecer en la hora 17
        if (hora === horaEntrada) {
          asistenciasEnHora.push(asistencia);
        }
      }
    }
    return asistenciasEnHora;
  }
  obtenerRangoFechasActual() {
    const fecha = this.fechaActual instanceof Date ? this.fechaActual : new Date();
    // ✅ Formatear fecha LOCAL sin toISOString
    const formatearLocal = date => {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };
    if (this.vistaActual === 'day') {
      const inicio = new Date(fecha);
      const fin = new Date(fecha);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: formatearLocal(inicio),
        finStr: formatearLocal(fin)
      };
    } else if (this.vistaActual === 'week') {
      const inicio = new Date(fecha);
      const diaSemana = fecha.getDay();
      const diff = diaSemana === 0 ? 6 : diaSemana - 1;
      inicio.setDate(fecha.getDate() - diff);
      inicio.setHours(0, 0, 0, 0);
      const fin = new Date(inicio);
      fin.setDate(inicio.getDate() + 6);
      fin.setHours(23, 59, 59, 999);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: formatearLocal(inicio),
        finStr: formatearLocal(fin)
      };
    } else {
      const inicio = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
      const fin = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
      fin.setHours(23, 59, 59, 999);
      return {
        inicio: inicio,
        fin: fin,
        inicioStr: formatearLocal(inicio),
        finStr: formatearLocal(fin)
      };
    }
  }
  extraerHoraLocal(fechaHora) {
    if (!fechaHora) return '--:--';
    if (typeof fechaHora === 'string') {
      const match = fechaHora.match(/(\d{2}):(\d{2}):(\d{2})/);
      if (match) {
        return `${match[1]}:${match[2]}`;
      }
    }
    return new Date(fechaHora).toLocaleTimeString('es', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  obtenerPersonalPorFechaYHora(fecha, hora) {
    console.log('=== DEBUG HORARIOS ===');
    console.log('Estructura del primer horario:', this.horarios[0]);
    console.log('hora_inicio raw:', this.horarios[0]?.hora_inicio);
    console.log('hora_inicio tipo:', typeof this.horarios[0]?.hora_inicio);
    console.log('hora_inicio valor completo:', JSON.stringify(this.horarios[0]?.hora_inicio));
    if (!fecha) return [];
    const fechaStr = fecha.toISOString().split('T')[0];
    const personalUnico = [];
    for (const asistencia of this.asistencias) {
      // ✅ Normalizar fecha
      let fechaAsistencia = asistencia.fecha;
      if (fechaAsistencia.includes('T')) {
        fechaAsistencia = fechaAsistencia.split('T')[0];
      } else {
        fechaAsistencia = new Date(asistencia.fecha).toISOString().split('T')[0];
      }
      if (fechaAsistencia === fechaStr && asistencia.hora_entrada) {
        // ✅ Extraer hora correctamente
        let horaEntrada = 0;
        if (typeof asistencia.hora_entrada === 'string') {
          if (asistencia.hora_entrada.includes(' ')) {
            horaEntrada = parseInt(asistencia.hora_entrada.substring(11, 13));
          } else {
            horaEntrada = parseInt(asistencia.hora_entrada.split(':')[0]);
          }
        } else {
          horaEntrada = new Date(asistencia.hora_entrada).getHours();
        }
        if (horaEntrada === hora) {
          const personal = this.listaPersonal.find(p => p.personal_id === asistencia.personal_id);
          if (personal && !personalUnico.find(p => p.personal_id === personal.personal_id)) {
            personalUnico.push(personal);
          }
        }
      }
    }
    return personalUnico;
  }
  // ✅ NUEVO - Para vista día (recibe string)
  obtenerAsistenciasPorFechaYHoraStr(fechaStr, hora) {
    const asistenciasFecha = this.obtenerAsistenciasPorFechaStr(fechaStr);
    return asistenciasFecha.filter(asistencia => {
      if (asistencia.hora_entrada) {
        const horaEntrada = new Date(asistencia.hora_entrada).getHours();
        return horaEntrada === hora;
      }
      return false;
    });
  }
  //  Para vista día (recibe string)
  obtenerPersonalPorFechaYHoraStr(fechaStr, hora) {
    const asistenciasEnHora = this.obtenerAsistenciasPorFechaYHoraStr(fechaStr, hora);
    const personalUnico = [];
    for (const asistencia of asistenciasEnHora) {
      const personal = this.listaPersonal.find(p => p.personal_id === asistencia.personal_id);
      if (personal && !personalUnico.find(p => p.personal_id === personal.personal_id)) {
        personalUnico.push(personal);
      }
    }
    return personalUnico;
  }
  obtenerHorarioPersonal(personal, fecha) {
    const asistencia = this.asistencias.find(a => a.personal_id === personal.personal_id && a.fecha === fecha);
    if (!asistencia) return 'No registrado';
    let texto = '';
    if (asistencia.hora_entrada) {
      // ✅ Extraer hora local sin conversión
      const horaEntrada = asistencia.hora_entrada.substring(11, 16);
      texto += `Entrada: ${horaEntrada}`;
    }
    if (asistencia.hora_salida) {
      const horaSalida = asistencia.hora_salida.substring(11, 16);
      texto += ` | Salida: ${horaSalida}`;
    }
    if (!asistencia.hora_entrada && !asistencia.hora_salida) {
      texto = 'Sin marcar';
    }
    return texto;
  }
  obtenerDetalleAsistencia(personal, fecha) {
    if (!fecha) {
      return 'Fecha no disponible';
    }
    try {
      const fechaStr = fecha.toISOString().split('T')[0];
      const asistencia = this.asistencias.find(a => a.personal_id === personal.personal_id && a.fecha.split('T')[0] === fechaStr);
      if (!asistencia) return 'Sin registro';
      if (!asistencia.hora_entrada) return 'Sin entrada';
      // ✅ EXTRAER HORAS LOCALES SIN CONVERTIR
      const horaEntradaStr = asistencia.hora_entrada.substring(11, 16); // "08:37"
      const horaSalidaStr = asistencia.hora_salida ? asistencia.hora_salida.substring(11, 16) : null;
      if (!horaSalidaStr) {
        return `Entrada: ${horaEntradaStr}`;
      }
      return `Entrada: ${horaEntradaStr} | Salida: ${horaSalidaStr}`;
    } catch (error) {
      console.error('Error en obtenerDetalleAsistencia:', error);
      return 'Error al obtener detalles';
    }
  }
  tieneRegistroCompleto(fecha, personalId) {
    if (!fecha) return false;
    const fechaStr = fecha.toISOString().split('T')[0];
    const asistencia = this.asistencias.find(a => a.personal_id === personalId && new Date(a.fecha).toISOString().split('T')[0] === fechaStr);
    return !!(asistencia?.hora_entrada && asistencia?.hora_salida);
  }
  tieneSoloEntrada(fecha, personalId) {
    if (!fecha) return false;
    const fechaStr = fecha.toISOString().split('T')[0];
    const asistencia = this.asistencias.find(a => a.personal_id === personalId && new Date(a.fecha).toISOString().split('T')[0] === fechaStr);
    return !!(asistencia?.hora_entrada && !asistencia?.hora_salida);
  }
  obtenerAsistenciasPorFechaStr(fechaStr) {
    return this.asistencias.filter(a => {
      const fechaAsistencia = new Date(a.fecha).toISOString().split('T')[0];
      return fechaAsistencia === fechaStr;
    });
  }
  cargarEstadosAsistencia() {
    this.isLoadingEstados = true;
    this.catalogoService.getEstadosAsistenciaActivos().subscribe({
      next: estados => {
        this.estadosAsistencia = estados;
        this.isLoadingEstados = false;
        console.log('✅ Estados de asistencia cargados:', this.estadosAsistencia);
      },
      error: err => {
        console.error('❌ Error cargando estados de asistencia:', err);
        this.isLoadingEstados = false;
        // Estados por defecto si falla la carga
        this.estadosAsistencia = [{
          estado_asistencia_id: 1,
          nombre: 'PRESENTE',
          estado: true
        }, {
          estado_asistencia_id: 2,
          nombre: 'AUSENTE',
          estado: true
        }, {
          estado_asistencia_id: 3,
          nombre: 'TARDE',
          estado: true
        }, {
          estado_asistencia_id: 4,
          nombre: 'JUSTIFICADO',
          estado: true
        }, {
          estado_asistencia_id: 5,
          nombre: 'VACACIONES',
          estado: true
        }, {
          estado_asistencia_id: 6,
          nombre: 'LICENCIA',
          estado: true
        }];
      }
    });
  }
  getEstadoIcon(estado) {
    const iconos = {
      'PRESENTE': '✅',
      'AUSENTE': '❌',
      'TARDE': '⏰',
      'JUSTIFICADO': '📝',
      'VACACIONES': '🏖️',
      'LICENCIA': '🏥'
    };
    return iconos[estado] || '📌';
  }
  verDetallesAsistencia(id) {
    const personal = this.listaPersonal.find(p => p.personal_id === id);
    if (personal) {
      this.abrirModalHistorial(personal);
    } else {
      this.notificationService.showError('Personal no encontrado');
    }
  }
  // Nuevo método para abrir modal de historial
  abrirModalHistorial(personal) {
    this.historialPersonalSeleccionado = personal;
    this.showHistorialModal = true;
    this.isLoadingHistorial = true;
    // Obtener el período actual del calendario
    const {
      inicioStr,
      finStr
    } = this.obtenerRangoFechasActual();
    this.periodoActualTexto = `${this.formatearFecha(inicioStr)} - ${this.formatearFecha(finStr)}`;
    // Cargar asistencias del personal en el período actual
    this.cargarHistorialAsistencias(personal.personal_id, inicioStr, finStr);
  }
  exportarHistorialExcel() {
    if (!this.historialAsistencias.length || !this.historialPersonalSeleccionado) return;
    const data = this.historialAsistencias.map(a => ({
      'Fecha': new Date(a.fecha).toLocaleDateString('es'),
      'Entrada': a.hora_entrada ? new Date(a.hora_entrada).toLocaleTimeString('es') : '--:--',
      'Salida': a.hora_salida ? new Date(a.hora_salida).toLocaleTimeString('es') : '--:--',
      'Horas Trabajadas': a.horas_trabajadas || 0,
      'Estado': a.estado_nombre || 'PENDIENTE',
      'Observaciones': a.observaciones || ''
    }));
    // Implementar exportación a Excel
    console.log('Exportando a Excel:', data);
    this.notificationService.showInfo('Funcionalidad de exportación en desarrollo');
  }
  exportarHistorialPDF() {
    console.log('Exportando a PDF');
    this.notificationService.showInfo('Funcionalidad de exportación en desarrollo');
  }
  // Formatear fecha para mostrar
  formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  // Calcular estadísticas del período
  calcularEstadisticasPeriodo() {
    if (!this.historialAsistencias.length) {
      return {
        totalDias: 0,
        diasCompletos: 0,
        horasTotales: 0,
        promedioHoras: 0
      };
    }
    const diasCompletos = this.historialAsistencias.filter(a => a.hora_entrada && a.hora_salida).length;
    const horasTotales = this.historialAsistencias.reduce((sum, a) => sum + (a.horas_trabajadas || 0), 0);
    return {
      totalDias: this.historialAsistencias.length,
      diasCompletos: diasCompletos,
      horasTotales: horasTotales,
      promedioHoras: diasCompletos > 0 ? horasTotales / diasCompletos : 0
    };
  }
  // Cerrar modal de historial
  cerrarHistorialModal() {
    this.showHistorialModal = false;
    this.historialPersonalSeleccionado = null;
    this.historialAsistencias = [];
  }
  // Obtener personal que tiene horario programado en una fecha y hora específica
  obtenerPersonalConHorarioEnFechaYHora(fechaStr, hora) {
    if (!this.horarios || this.horarios.length === 0) return [];
    const personalConHorario = [];
    const fechaNormalizada = fechaStr.split('T')[0];
    for (const horario of this.horarios) {
      const fechaHorario = horario.fecha.split('T')[0];
      if (fechaHorario === fechaNormalizada) {
        const horaInicio = parseInt(horario.hora_inicio.split(':')[0]);
        const horaFin = parseInt(horario.hora_fin.split(':')[0]);
        if (hora >= horaInicio && hora < horaFin) {
          const personal = this.listaPersonal.find(p => p.personal_id === horario.personal_id);
          if (personal && !personalConHorario.find(p => p.personal_id === personal.personal_id)) {
            personalConHorario.push(personal);
          }
        }
      }
    }
    return personalConHorario;
  }
  // Agrega esta función auxiliar en tu componente
  normalizarFechaHora(fechaHora) {
    if (!fechaHora) return {
      fecha: '',
      hora: 0,
      horaCompleta: ''
    };
    let fechaStr = '';
    let horaNum = 0;
    let horaCompleta = '';
    if (typeof fechaHora === 'string') {
      if (fechaHora.includes(' ')) {
        const partes = fechaHora.split(' ');
        fechaStr = partes[0];
        horaCompleta = partes[1];
        horaNum = parseInt(partes[1].split(':')[0]);
      } else if (fechaHora.includes('T')) {
        fechaStr = fechaHora.split('T')[0];
        horaCompleta = fechaHora.split('T')[1].substring(0, 8);
        horaNum = parseInt(horaCompleta.split(':')[0]);
      } else if (fechaHora.includes(':')) {
        horaCompleta = fechaHora;
        horaNum = parseInt(fechaHora.split(':')[0]);
      } else {
        fechaStr = fechaHora;
      }
    } else if (fechaHora instanceof Date) {
      fechaStr = `${fechaHora.getFullYear()}-${String(fechaHora.getMonth() + 1).padStart(2, '0')}-${String(fechaHora.getDate()).padStart(2, '0')}`;
      horaNum = fechaHora.getHours();
      horaCompleta = `${String(horaNum).padStart(2, '0')}:${String(fechaHora.getMinutes()).padStart(2, '0')}:${String(fechaHora.getSeconds()).padStart(2, '0')}`;
    }
    return {
      fecha: fechaStr,
      hora: horaNum,
      horaCompleta
    };
  }
  // Obtener horas del día (0-23) para mostrar TODAS las horas
  get horasDia() {
    return Array.from({
      length: 24
    }, (_, i) => i);
  }
  // Obtener horas laborales (6-20) para la vista semana
  get horasLaborales() {
    return Array.from({
      length: 24
    }, (_, i) => i); // ✅ TODAS las horas
  }
  obtenerPersonalConHorarioYAsistencia(fecha, hora) {
    if (!fecha || !this.horarios.length) return [];
    const fechaStr = fecha.toISOString().split('T')[0];
    const resultados = [];
    for (const horario of this.horarios) {
      const fechaHorario = horario.fecha.split('T')[0];
      if (fechaHorario === fechaStr) {
        const horaInicio = parseInt(horario.hora_inicio.split(':')[0]);
        const horaFin = parseInt(horario.hora_fin.split(':')[0]);
        // Si la hora está dentro del horario laboral
        if (hora >= horaInicio && hora < horaFin) {
          const personal = this.listaPersonal.find(p => p.personal_id === horario.personal_id);
          if (personal) {
            // Buscar asistencia para este personal en esta fecha
            const asistencia = this.asistencias.find(a => a.personal_id === personal.personal_id && a.fecha.split('T')[0] === fechaStr);
            resultados.push({
              personal: personal,
              tieneAsistencia: !!asistencia?.hora_entrada,
              horario: `${horario.hora_inicio.substring(0, 5)} - ${horario.hora_fin.substring(0, 5)}`,
              estado: asistencia?.estado_nombre || 'AUSENTE',
              horaEntrada: asistencia?.hora_entrada ? asistencia.hora_entrada.substring(11, 16) : undefined,
              horaSalida: asistencia?.hora_salida ? asistencia.hora_salida.substring(11, 16) : undefined
            });
          }
        }
      }
    }
    return resultados;
  }
  obtenerHorarioDelPersonal(personalId, fechaStr) {
    const fechaNormalizada = fechaStr.split('T')[0];
    const horario = this.horarios.find(h => {
      let fechaHorario = h.fecha;
      if (fechaHorario.includes('T')) {
        fechaHorario = fechaHorario.split('T')[0];
      } else if (fechaHorario.includes(' ')) {
        fechaHorario = fechaHorario.split(' ')[0];
      }
      return h.personal_id === personalId && fechaHorario === fechaNormalizada;
    });
    if (!horario) return 'Sin horario';
    // 🔧 Extraer horas correctamente
    const getHoraString = fechaHora => {
      if (typeof fechaHora === 'string') {
        let horaStr = fechaHora;
        if (horaStr.includes('T')) {
          horaStr = horaStr.split('T')[1];
        } else if (horaStr.includes(' ')) {
          horaStr = horaStr.split(' ')[1];
        }
        horaStr = horaStr.split('.')[0].split('Z')[0];
        return horaStr.substring(0, 5); // HH:MM
      }
      if (fechaHora instanceof Date) {
        return `${String(fechaHora.getHours()).padStart(2, '0')}:${String(fechaHora.getMinutes()).padStart(2, '0')}`;
      }
      return '00:00';
    };
    return `${getHoraString(horario.hora_inicio)} - ${getHoraString(horario.hora_fin)}`;
  }
  // Obtener estado del punto para un personal en una fecha y hora específica
  obtenerEstadoPunto(fecha, hora, personal) {
    if (!fecha || !personal) return 'ausente';
    const fechaStr = fecha.toISOString().split('T')[0];
    // Buscar si tiene horario programado para esta fecha y hora
    const horarioPersonal = this.horarios.find(h => h.personal_id === personal.personal_id && h.fecha.split('T')[0] === fechaStr);
    if (!horarioPersonal) return 'ausente';
    const horaInicio = parseInt(horarioPersonal.hora_inicio.split(':')[0]);
    const horaFin = parseInt(horarioPersonal.hora_fin.split(':')[0]);
    // Si la hora actual está fuera de su horario, no mostrar
    if (hora < horaInicio || hora >= horaFin) return 'ausente';
    // Buscar si ya tiene asistencia registrada
    const asistencia = this.asistencias.find(a => a.personal_id === personal.personal_id && a.fecha.split('T')[0] === fechaStr);
    // Si ya tiene entrada registrada
    if (asistencia?.hora_entrada) {
      return 'presente';
    }
    // Verificar si ya pasó la hora de inicio
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();
    const fechaHoy = ahora.toISOString().split('T')[0];
    // Solo para el día de hoy y hora actual
    if (fechaStr === fechaHoy) {
      if (horaActual > horaInicio || horaActual === horaInicio && minutosActuales > 0) {
        return 'ausente'; // Pasó la hora y no marcó
      }
    }
    // Dentro del horario y sin marcar aún
    return 'espera';
  }
  // Obtener personal que tiene horario (sin depender de asistencia)
  obtenerPersonalConHorario(fecha, hora) {
    if (!fecha || !this.horarios.length) return [];
    const fechaStr = fecha.toISOString().split('T')[0];
    const personalEnHora = [];
    for (const horario of this.horarios) {
      const fechaHorario = horario.fecha.split('T')[0];
      if (fechaHorario === fechaStr) {
        const horaInicio = parseInt(horario.hora_inicio.split(':')[0]);
        const horaFin = parseInt(horario.hora_fin.split(':')[0]);
        if (hora >= horaInicio && hora < horaFin) {
          const personal = this.listaPersonal.find(p => p.personal_id === horario.personal_id);
          if (personal && !personalEnHora.find(p => p.personal_id === personal.personal_id)) {
            personalEnHora.push(personal);
          }
        }
      }
    }
    return personalEnHora;
  }
  static ɵfac = function CalendarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__.LoadingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: CalendarioComponent,
    selectors: [["app-calendario"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵProvidersFeature"]([_facades_calendar_facade__WEBPACK_IMPORTED_MODULE_9__.CalendarFacade, _repositories_calendar_repository_impl__WEBPACK_IMPORTED_MODULE_11__.CalendarRepositoryImpl, {
      provide: _repositories_calendar_repository_interface__WEBPACK_IMPORTED_MODULE_10__.CALENDAR_REPOSITORY,
      useExisting: _repositories_calendar_repository_impl__WEBPACK_IMPORTED_MODULE_11__.CalendarRepositoryImpl
    }])],
    decls: 197,
    vars: 87,
    consts: [["formHorario", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "calendar-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "calendar-nav"], [1, "nav-left"], [1, "btn-nav", 3, "click"], [1, "nav-icon"], [1, "current-date"], [1, "date-range"], [1, "btn", "btn-today", 3, "click"], [1, "view-switcher"], [1, "btn", "btn-view", 3, "click"], [1, "nav-right"], [1, "time-display"], [1, "time-icon"], [1, "stats-container"], [1, "stat-card", 3, "click"], [1, "stat-value"], [1, "stat-label"], [1, "stat-trend", "positive"], [1, "stat-trend", "negative"], [1, "stat-trend", "warning"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-persona"], ["id", "filtro-persona", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtro-estado"], ["id", "filtro-estado", 3, "ngModelChange", "change", "ngModel"], ["value", "PRESENTE"], ["value", "AUSENTE"], ["value", "TARDE"], ["value", "VACACIONES"], ["value", "LICENCIA"], ["for", "filtro-fecha"], ["type", "date", "id", "filtro-fecha", 3, "ngModelChange", "change", "ngModel"], ["for", "filtro-departamento"], ["id", "filtro-departamento", 3, "ngModelChange", "change", "ngModel"], [1, "calendar-main"], ["class", "calendar-view day-view", 4, "ngIf"], ["class", "calendar-view week-view", 4, "ngIf"], ["class", "calendar-view month-view", 4, "ngIf"], ["class", "marcaciones-panel", 4, "ngIf"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar personal o horarios...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "calendar-view", "day-view"], [1, "day-header"], [1, "hour-column"], [1, "day-column"], [1, "day-header-cell"], [1, "day-name"], [1, "day-date"], [1, "day-body"], ["class", "hour-row", 4, "ngFor", "ngForOf"], [1, "hour-row"], [1, "hour-cell"], [1, "day-cell"], [1, "time-slot-detailed"], ["class", "marcacion-item", 4, "ngFor", "ngForOf"], ["class", "empty-slot-detailed", 4, "ngIf"], [1, "marcacion-item"], [1, "marcacion-persona"], [1, "avatar-iniciales"], [1, "persona-info"], [1, "horarios-detalle"], [1, "entrada"], ["class", "salida", 4, "ngIf"], ["class", "solo-entrada", 4, "ngIf"], [1, "salida"], [1, "solo-entrada"], [1, "empty-slot-detailed"], [1, "empty-icon"], [1, "empty-text"], [1, "calendar-view", "week-view"], [1, "week-header"], [1, "time-column"], ["class", "day-column", 4, "ngFor", "ngForOf"], [1, "week-body"], ["class", "time-row", 4, "ngFor", "ngForOf"], ["class", "day-registros", 4, "ngIf"], [1, "day-registros"], [1, "registros-count"], [1, "time-row"], [1, "time-cell"], ["class", "day-cell", 4, "ngFor", "ngForOf"], [1, "schedule-cell", 3, "click"], [1, "schedule-content"], ["class", "schedule-person", 4, "ngFor", "ngForOf"], [1, "schedule-person"], [1, "person-tooltip"], [1, "person-badge"], [1, "tooltip-content"], [4, "ngIf"], ["class", "text-warning", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-warning"], [1, "text-danger"], [1, "calendar-view", "month-view"], [1, "month-grid"], ["class", "month-day-header", 4, "ngFor", "ngForOf"], ["class", "month-day", 3, "current-month", "today", "click", 4, "ngFor", "ngForOf"], [1, "month-day-header"], [1, "month-day", 3, "click"], [1, "day-number"], [1, "day-personas"], ["class", "persona-inicial", 3, "title", 4, "ngFor", "ngForOf"], [1, "persona-inicial", 3, "title"], [1, "marcaciones-panel"], [1, "panel-header"], [1, "panel-badge"], [1, "panel-content"], [1, "marcaciones-list"], [1, "panel-actions"], [1, "avatar"], [1, "marcacion-horarios"], [1, "horario", "entrada"], [1, "horario-label"], [1, "horario-hora"], ["class", "horario salida", 4, "ngIf"], ["class", "btn-small", 3, "click", 4, "ngIf"], [1, "marcacion-estado"], [1, "estado-badge"], [1, "horario", "salida"], [1, "btn-small", 3, "click"], [1, "persona-cell"], [1, "horas-badge"], ["class", "horas-extras-badge", 4, "ngIf"], ["class", "tardanzas-badge", 4, "ngIf"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Ver Detalles", 1, "btn-action", "view", 3, "click"], ["title", "Editar Horario", 1, "btn-action", "edit", 3, "click"], ["title", "Reporte PDF", 1, "btn-action", "pdf", 3, "click"], [1, "dia-cell"], [1, "horas-extras-badge"], [1, "tardanzas-badge"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "empty-state"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group"], ["for", "horario-personal", 1, "form-label"], [1, "required"], ["id", "horario-personal", "name", "personalId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "horario-fecha", 1, "form-label"], ["type", "date", "id", "horario-fecha", "name", "fecha", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "hora-inicio", 1, "form-label"], ["type", "time", "id", "hora-inicio", "name", "horaInicio", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "hora-fin", 1, "form-label"], ["type", "time", "id", "hora-fin", "name", "horaFin", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["for", "horario-tipo", 1, "form-label"], ["id", "horario-tipo", "name", "tipo", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "NORMAL"], ["value", "EXTRA"], ["value", "TURNO"], ["value", "FINESEMANA"], ["for", "horario-observaciones", 1, "form-label"], ["id", "horario-observaciones", "name", "observaciones", "rows", "3", "placeholder", "Observaciones sobre el horario...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-check"], ["type", "checkbox", "id", "repetir-semanal", "name", "repetirSemanal", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "repetir-semanal", 1, "form-check-label"], [1, "modal-footer"], [1, "footer-right"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["title", "Refrescar datos", 1, "btn-refresh", 3, "click"], [1, "registro-asistencia"], ["class", "form-group selector-personal", 4, "ngIf"], ["class", "persona-seleccionada", 4, "ngIf"], ["class", "sin-personal", 4, "ngIf"], ["class", "registro-horarios", 4, "ngIf"], ["class", "estado-opciones", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "form-group", "selector-personal"], ["for", "select-personal", 1, "form-label"], ["id", "select-personal", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "persona-seleccionada"], [1, "avatar-large"], ["type", "button", "class", "btn-cambiar-persona", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-cambiar-persona", 3, "click"], [1, "sin-personal"], [1, "registro-horarios"], [1, "horario-actual"], [1, "horario-item"], [1, "horario-valor"], [1, "registro-actions"], ["class", "btn btn-large btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-large btn-warning", 3, "click", 4, "ngIf"], ["class", "registro-completado", 4, "ngIf"], ["class", "registro-detalle", 4, "ngIf"], [1, "btn", "btn-large", "btn-success", 3, "click"], [1, "btn", "btn-large", "btn-warning", 3, "click"], [1, "registro-completado"], [1, "completado-icon"], [1, "completado-text"], [1, "registro-detalle"], [1, "detalle-horarios"], [1, "detalle-item"], ["class", "detalle-item", 4, "ngIf"], [1, "estado-opciones"], [1, "form-label"], [1, "estado-buttons-grid"], ["class", "btn-estado", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [1, "btn-estado", 3, "click"], [1, "estado-icon"], ["for", "justificacion", 1, "form-label"], ["id", "justificacion", "placeholder", "Motivo de la justificaci\u00F3n...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "modal-container", "modal-large"], [1, "reportes-grid"], [1, "reporte-card", 3, "click"], [1, "reporte-icon"], [1, "reporte-title"], [1, "reporte-desc"], [1, "reporte-filtros"], [1, "filtros-row"], ["type", "date", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["class", "reporte-preview", 4, "ngIf"], [1, "reporte-preview"], [1, "preview-header"], [1, "preview-date"], [1, "preview-content"], [1, "preview-stats"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "preview-table"], [1, "preview-actions"], [1, "stat-item"], ["class", "modal-content", 4, "ngIf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "historial-header"], [1, "persona-info-detalle"], ["class", "stats-periodo", 4, "ngIf"], [1, "historial-tabla"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "stats-periodo"], [1, "stat-card-mini"], [1, "loading-spinner"], [1, "spinner"], ["class", "badge-warning", 4, "ngIf"], ["class", "extras-badge", 4, "ngIf"], [1, "observaciones-cell"], [1, "badge-warning"], [1, "extras-badge"], ["colspan", "7", 1, "text-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function CalendarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toggleSidebar", function CalendarioComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function CalendarioComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toggleNotifications", function CalendarioComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function CalendarioComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("openSearchModal", function CalendarioComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, CalendarioComponent_div_4_Template, 13, 6, "div", 5)(5, CalendarioComponent_div_5_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "\uD83D\uDCC5 Calendario y Horarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Gesti\u00F3n de asistencia, horarios y marcaciones del personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_14_listener() {
          return ctx.abrirModalNuevoHorario();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, " Nuevo Horario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_18_listener() {
          return ctx.abrirModalAsistenciaDesdeBoton();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "\u23F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, " Registrar Marcaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_22_listener() {
          return ctx.abrirModalReportes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, " Generar Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 16)(27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_28_listener() {
          return ctx.navegarFecha("prev");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "\u25C0\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 20)(32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](35, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_39_listener() {
          return ctx.navegarFecha("next");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](41, "\u25B6\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_42_listener() {
          return ctx.irAHoy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](43, " Hoy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "div", 23)(45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_45_listener() {
          return ctx.cambiarVista("day");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](47, " D\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_48_listener() {
          return ctx.cambiarVista("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](50, " Semana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_51_listener() {
          return ctx.cambiarVista("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](53, " Mes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "div", 25)(55, "div", 26)(56, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](57, "\uD83D\uDD52");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](59, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](60, "div", 28)(61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_div_click_61_listener() {
          return ctx.filtrarPorEstado("presente");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](66, "Presentes Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](67, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](68, "+5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_div_click_69_listener() {
          return ctx.filtrarPorEstado("ausente");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](72, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](74, "Ausentes Hoy");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](76, "-2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_div_click_77_listener() {
          return ctx.filtrarPorEstado("tarde");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](78, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](80, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](82, "Llegadas Tarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](83, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](84, "+1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_div_click_85_listener() {
          return ctx.mostrarHorasExtras();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](88, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](90, "Horas Extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](91, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](92, "+15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](93, "div", 35)(94, "div", 36)(95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](96, "\uD83D\uDD0D Filtros de Visualizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](97, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_97_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](98, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](99, "div", 38)(100, "div", 39)(101, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](102, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](103, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_Template_select_ngModelChange_103_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtroPersonal, $event) || (ctx.filtroPersonal = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function CalendarioComponent_Template_select_change_103_listener() {
          return ctx.aplicarFiltroPersonal(ctx.filtroPersonal);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](104, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](105, "Todo el personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](106, CalendarioComponent_option_106_Template, 2, 3, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](107, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](108, "div", 39)(109, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](110, "Estado Asistencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](111, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_Template_select_ngModelChange_111_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function CalendarioComponent_Template_select_change_111_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](112, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](113, "Todos los estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](114, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](115, "Presente");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](116, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](117, "Ausente");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](118, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](119, "Llegada Tarde");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](120, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](121, "Vacaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](122, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](123, "Licencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](124, "div", 39)(125, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](126, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](127, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_Template_input_ngModelChange_127_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtroFecha, $event) || (ctx.filtroFecha = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function CalendarioComponent_Template_input_change_127_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](128, "div", 39)(129, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](130, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](131, "select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CalendarioComponent_Template_select_ngModelChange_131_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.filtroDepartamento, $event) || (ctx.filtroDepartamento = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function CalendarioComponent_Template_select_change_131_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](132, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](133, "Todos los departamentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](134, CalendarioComponent_option_134_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](135, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](136, CalendarioComponent_div_136_Template, 14, 9, "div", 56)(137, CalendarioComponent_div_137_Template, 7, 2, "div", 57)(138, CalendarioComponent_div_138_Template, 4, 3, "div", 58)(139, CalendarioComponent_div_139_Template, 18, 3, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](140, "div", 60)(141, "div", 61)(142, "div", 62)(143, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](144, "\uD83D\uDCCB Resumen de Asistencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](145, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](147, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](148, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](149, "div", 64)(150, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_150_listener() {
          return ctx.exportarExcelAsistencia();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](151, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](152, "\uD83D\uDCE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](153, " Exportar Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](154, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CalendarioComponent_Template_button_click_154_listener() {
          return ctx.exportarPDFAsistencia();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](155, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](156, "\uD83D\uDCC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](157, " Exportar PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](158, "div", 65)(159, "table", 66)(160, "thead")(161, "tr")(162, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](163, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](165, "Lunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](167, "Martes");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](169, "Mi\u00E9rcoles");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](171, "Jueves");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](172, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](173, "Viernes");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](175, "S\u00E1bado");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](176, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](177, "Domingo");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](178, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](179, "Horas Trab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](180, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](181, "Horas Ext.");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](182, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](183, "Tardanzas");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](185, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](186, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](187, CalendarioComponent_tr_187_Template, 28, 10, "tr", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](188, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](189, CalendarioComponent_div_189_Template, 7, 3, "div", 68)(190, CalendarioComponent_div_190_Template, 11, 0, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](191, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](192, CalendarioComponent_div_192_Template, 67, 16, "div", 70)(193, CalendarioComponent_div_193_Template, 22, 8, "div", 70)(194, CalendarioComponent_div_194_Template, 59, 10, "div", 70)(195, CalendarioComponent_div_195_Template, 13, 4, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](196, "app-footer", 71);
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_36_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind4"](35, 51, (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](34, 49, ctx.viewState$)) == null ? null : tmp_6_0.date, "dd MMMM yyyy", "", ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](38, 56, ctx.viewState$)) == null ? null : tmp_7_0.dateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](46, 58, ctx.viewState$)) == null ? null : tmp_8_0.view) === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](49, 60, ctx.viewState$)) == null ? null : tmp_9_0.view) === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("active", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](52, 62, ctx.viewState$)) == null ? null : tmp_10_0.view) === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](59, 64, ctx.horaActual, "HH:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](64, 67, ctx.estadisticas$)) == null ? null : tmp_13_0.total_presentes) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](72, 69, ctx.estadisticas$)) == null ? null : tmp_14_0.total_ausentes) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](80, 71, ctx.estadisticas$)) == null ? null : tmp_15_0.total_tardes) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](88, 73, ctx.estadisticas$)) == null ? null : tmp_16_0.total_horas_extras) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroPersonal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](107, 75, ctx.personal$));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroEstado);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroFecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroDepartamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.departamentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.vistaActual === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.vistaActual === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.vistaActual === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.marcacionesHoy.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" Per\u00EDodo: ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](147, 77, ctx.obtenerRangoFechasActual().inicio, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](148, 80, ctx.obtenerRangoFechasActual().fin, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](188, 83, ctx.resumen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.totalPaginas > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ((tmp_36_0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](191, 85, ctx.filteredPersonal$)) == null ? null : tmp_36_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showHorarioModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showAsistenciaModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showReportesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showHistorialModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _pipes_hora_local_pipe__WEBPACK_IMPORTED_MODULE_15__.HoraLocalPipe],
    styles: ["[_ngcontent-%COMP%]:root {\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --text-primary: #1f2937;\n  --text-secondary: #6b7280;\n  --text-tertiary: #9ca3af;\n  --border-color: #e5e7eb;\n  --sidebar-width: 280px;\n}\n.dark-theme[_ngcontent-%COMP%] {\n  --bg-primary: #1f2937;\n  --bg-secondary: #111827;\n  --bg-tertiary: #374151;\n  --text-primary: #f9fafb;\n  --text-secondary: #d1d5db;\n  --text-tertiary: #6b7280;\n  --border-color: #374151;\n}\n.search-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n  animation: _ngcontent-%COMP%_searchModalFadeIn 0.3s ease;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_searchContentSlide 0.3s ease;\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-modal-content[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #1f2937);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-primary, #ffffff);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  font-size: 20px;\n  color: var(--text-secondary, #6b7280);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 52px 16px 48px;\n  border: 2px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n  font-size: 16px;\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary, #1f2937);\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-input[_ngcontent-%COMP%] {\n  background: var(--bg-secondary, #111827);\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  background: none;\n  border: none;\n  color: var(--text-secondary, #6b7280);\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px;\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  transform: scale(1.2);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n  border: none;\n  color: var(--text-secondary, #6b7280);\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #e5e7eb);\n  color: var(--text-primary, #1f2937);\n  transform: rotate(90deg);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #374151);\n  color: var(--text-secondary, #d1d5db);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #111827);\n  color: var(--text-primary, #f9fafb);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n  padding: 16px;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary, #f9fafb);\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary, #f3f4f6);\n  transform: translateX(5px);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary, #111827);\n  border-color: var(--border-color, #374151);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #374151);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin-bottom: 4px;\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  color: var(--text-primary, #f9fafb);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #d1d5db);\n}\n.search-modal[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n  text-align: center;\n  color: var(--text-secondary, #6b7280);\n  font-size: 16px;\n}\n.dark-theme[_ngcontent-%COMP%]   .search-modal[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #d1d5db);\n}\n@keyframes _ngcontent-%COMP%_searchModalFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_searchContentSlide {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n  width: calc(100% - 280px);\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.light-theme[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #f7fafc;\n}\n.dark-theme[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  background: #1a202c;\n}\n.dashboard-container.sidebar.collapsed[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n.calendar-container[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 120px);\n  width: 100%;\n  transition: all 0.3s;\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .sidebar-collapsed[_ngcontent-%COMP%]   .calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n    padding: 20px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n  }\n  .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  padding: 20px 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.3s;\n}\n.calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 8px;\n  padding: 4px;\n}\n@media (max-width: 768px) {\n  .calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: var(--text-secondary);\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary);\n}\n.calendar-nav[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%]   .btn-view.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 768px) {\n  .calendar-nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n@media (max-width: 480px) {\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 12px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n  transform: translateY(-2px);\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%]   .date-range[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-today[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 8px;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s;\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-today[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n@media (max-width: 480px) {\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .btn-today[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 14px;\n  }\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%]   .time-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 14px;\n  }\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: linear-gradient(90deg, #4f46e5, #6366f1);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #4f46e5;\n  margin-bottom: 8px;\n  line-height: 1;\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.positive[_ngcontent-%COMP%]::before {\n  content: '\u25B2 ';\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.negative[_ngcontent-%COMP%]::before {\n  content: '\u25BC ';\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-trend.warning[_ngcontent-%COMP%]::before {\n  content: '\u25B6 ';\n}\n.filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n@media (max-width: 768px) {\n  .filtros-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #06b6d4;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: underline;\n  transition: color 0.3s;\n  padding: 4px 0;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: #0891b2;\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 6px;\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 16px;\n  padding-right: 36px;\n}\n.dark-theme[_ngcontent-%COMP%]   .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.calendar-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1024px) {\n  .calendar-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-main[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n.calendar-view[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n  \n\n  \n\n  scrollbar-width: thin;\n  scrollbar-color: #5f5e5e transparent;\n}\n.calendar-view[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.calendar-view[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.calendar-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #818181;\n  border-radius: 5px;\n}\n.calendar-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #5f5e5e;\n}\n@media (max-width: 1024px) {\n  .calendar-view[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-bottom: 1px solid var(--border-color), #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  overflow-x: auto;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .hour-column[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  background: var(--bg-tertiary, #f3f4f6);\n  border-right: 1px solid var(--border-color, #e5e7eb);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .hour-column[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color, #e5e7eb);\n    text-align: center;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 16px;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%] {\n    min-width: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color, #e5e7eb);\n  }\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 480px) {\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%]   .person-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #06b6d4;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%]   .person-avatar[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 13px;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%]   .person-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%]   .person-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .person-header[_ngcontent-%COMP%]   .person-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%] {\n    max-height: 400px;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .hour-cell[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: var(--text-secondary);\n  background: var(--bg-tertiary, #f3f4f6);\n  border-right: 1px solid var(--border-color, #e5e7eb);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .hour-cell[_ngcontent-%COMP%] {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color, #e5e7eb);\n    text-align: center;\n    padding: 10px;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 0;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 8px;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%] {\n    height: 50px;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color, #e5e7eb);\n  }\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]:hover::after {\n  content: '+';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  color: #06b6d4;\n  opacity: 0.7;\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot.has-schedule[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  border-left: 4px solid #06b6d4;\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot.has-schedule[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 182, 212, 0.2);\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot.working[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border-left: 4px solid #10b981;\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot.working[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.day-view[_ngcontent-%COMP%]   .day-body[_ngcontent-%COMP%]   .hour-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-primary);\n  font-weight: 500;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-y: auto;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .time-column[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  background: var(--bg-tertiary, #f3f4f6);\n  border-right: 1px solid var(--border-color, #e5e7eb);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .time-column[_ngcontent-%COMP%] {\n    width: 60px;\n    padding: 12px;\n    font-size: 14px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 16px;\n  text-align: center;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%] {\n    min-width: 100px;\n    padding: 12px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-header-cell[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-header-cell[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-header-cell[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%] {\n    max-height: 400px;\n    overflow-x: auto;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .time-cell[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n  background: var(--bg-tertiary, #f3f4f6);\n  border-right: 1px solid var(--border-color, #e5e7eb);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .time-cell[_ngcontent-%COMP%] {\n    width: 60px;\n    padding: 10px;\n    font-size: 13px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 0;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%] {\n    height: 50px;\n    padding: 6px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]:hover::after {\n  content: '\uD83D\uDC41\uFE0F';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  opacity: 0.7;\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell.scheduled[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  border-left: 4px solid #06b6d4;\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell.scheduled[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 182, 212, 0.2);\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  font-size: 12px;\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%]   .person-badge[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%]   .person-badge[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    font-size: 9px;\n  }\n}\n.week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 768px) {\n  .week-view[_ngcontent-%COMP%]   .week-body[_ngcontent-%COMP%]   .time-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .schedule-cell[_ngcontent-%COMP%]   .schedule-content[_ngcontent-%COMP%]   .schedule-person[_ngcontent-%COMP%]   .schedule-hours[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.month-view[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%]   .month-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%]   .month-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%]   .month-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 6px;\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.month-view[_ngcontent-%COMP%]   .month-header[_ngcontent-%COMP%]   .month-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: var(--border-color, #e5e7eb);\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  background: var(--bg-tertiary, #f3f4f6);\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 768px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%] {\n    padding: 10px 6px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    font-size: 11px;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n  min-height: 120px;\n  padding: 12px 8px;\n  background: var(--bg-primary, #ffffff);\n  border: 1px solid var(--border-color, #e5e7eb);\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n    min-height: 100px;\n    padding: 10px 6px;\n  }\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n    min-height: 80px;\n    padding: 8px 4px;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n  transform: scale(1.02);\n  z-index: 1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.other-month[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n  opacity: 0.5;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.other-month[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.current-month[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.today[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  border: 2px solid #06b6d4;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #06b6d4;\n  font-weight: 700;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.has-events[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #06b6d4;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.weekend[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.05);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day.weekend[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 6px;\n  }\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-bottom: 4px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 2px 4px;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.PRESENTE[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.AUSENTE[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.TARDE[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.VACACIONES[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  color: #8b5cf6;\n  border: 1px solid rgba(139, 92, 246, 0.3);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.LICENCIA[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: #3b82f6;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .event-count[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .event-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.8;\n}\n.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-more[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  font-size: 10px;\n  color: #06b6d4;\n  font-weight: 600;\n  background: rgba(6, 182, 212, 0.1);\n  padding: 1px 4px;\n  border-radius: 3px;\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-more[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 1px 3px;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding: 12px 8px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 8px;\n}\n@media (max-width: 480px) {\n  .month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-secondary, #6b7280);\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.presente[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid #10b981;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.ausente[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  border: 1px solid #ef4444;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.tarde[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  border: 1px solid #f59e0b;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.vacaciones[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  border: 1px solid #8b5cf6;\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .month-stats[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary, #6b7280);\n}\n.month-view[_ngcontent-%COMP%]   .month-footer[_ngcontent-%COMP%]   .month-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.marcaciones-panel[_ngcontent-%COMP%] {\n  width: 350px;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease;\n}\n@media (max-width: 1024px) {\n  .marcaciones-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 2;\n  }\n}\n@media (max-width: 768px) {\n  .marcaciones-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n  min-width: 24px;\n  text-align: center;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.dark-theme[_ngcontent-%COMP%]   .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #1f2937);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 8px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 13px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-persona[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px 12px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 6px;\n  min-width: 100px;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%] {\n    min-width: auto;\n    padding: 6px 10px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario.entrada.tarde[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  border: 1px solid #f59e0b;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario.entrada.tarde[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario.salida.temprano[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  border: 1px solid #ef4444;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario.salida.temprano[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%]   .horario-hora[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .horario[_ngcontent-%COMP%]   .horario-hora[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n  border-radius: 6px;\n  border: 1px solid #06b6d4;\n  background: none;\n  color: #06b6d4;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover {\n  background: #06b6d4;\n  color: white;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-horarios[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge.estado-presente[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge.estado-ausente[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge.estado-tarde[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge.estado-justificado[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  color: #8b5cf6;\n  border: 1px solid rgba(139, 92, 246, 0.3);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .marcaciones-list[_ngcontent-%COMP%]   .marcacion-item[_ngcontent-%COMP%]   .marcacion-estado[_ngcontent-%COMP%]   .estado-badge.estado-vacaciones[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: #3b82f6;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .panel-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n  display: flex;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .panel-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .panel-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 480px) {\n  .marcaciones-panel[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .panel-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.table-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n    padding: 16px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n@media (max-width: 480px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 480px) {\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 13px;\n  }\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary, #f3f4f6);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--text-secondary, #6b7280);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-primary, #545a64);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1200px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n  border-bottom: 2px solid var(--border-color, #e5e7eb);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 12px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-primary);\n  font-size: 14px;\n  vertical-align: middle;\n  white-space: nowrap;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 13px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .persona-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 200px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .persona-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .persona-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  padding: 8px;\n  border-radius: 6px;\n  min-width: 80px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.presente[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.ausente[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.tarde[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.vacaciones[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  color: #8b5cf6;\n  border: 1px solid rgba(139, 92, 246, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.licencia[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.2);\n  color: #06b6d4;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.festivo[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  border: 1px dashed #ef4444;\n  font-style: italic;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .dia-cell.pendiente[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border: 1px dashed #f59e0b;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .horas-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background: rgba(6, 182, 212, 0.2);\n  color: #06b6d4;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .horas-extras-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .tardanzas-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background: rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .ausencias-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background: rgba(139, 92, 246, 0.2);\n  color: #8b5cf6;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 12px;\n  border: 1px solid rgba(139, 92, 246, 0.3);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: #bfdbfe;\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(30, 64, 175, 0.2);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(3, 105, 161, 0.2);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.pdf[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.pdf[_ngcontent-%COMP%]:hover {\n  background: #fde68a;\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(146, 64, 14, 0.2);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.2);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: none;\n}\n.table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 768px) {\n  .table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n    padding: 12px 16px;\n  }\n}\n.table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .table-summary[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .table-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .table-export[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .table-container[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%]   .table-export[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 768px) {\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary, #f9fafb);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: none;\n  background: var(--bg-primary, #ffffff);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn.btn-prev[_ngcontent-%COMP%]::before {\n  content: '\u25C0';\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn.btn-next[_ngcontent-%COMP%]::after {\n  content: '\u25B6';\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 13px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: var(--bg-secondary, #f9fafb);\n  transform: translateY(-2px);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background: #06b6d4;\n  color: white;\n  border-color: #06b6d4;\n  font-weight: 600;\n  transform: scale(1.1);\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-tertiary);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  background: none;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.ellipsis[_ngcontent-%COMP%] {\n  cursor: default;\n  background: none;\n  border: none;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.ellipsis[_ngcontent-%COMP%]:hover {\n  transform: none;\n  background: none;\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 13px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60px;\n  padding: 6px 8px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 4px;\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  font-size: 14px;\n  text-align: center;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.1);\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #06b6d4;\n  background: #06b6d4;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0891b2;\n  border-color: #0891b2;\n  transform: translateY(-1px);\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-jump[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 13px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 4px;\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  font-size: 14px;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n}\n@media (max-width: 480px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-size[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    padding: 5px 7px;\n    font-size: 13px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 24px;\n  background: var(--bg-secondary, #f9fafb);\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n    padding: 20px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #06b6d4, #0891b2);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    font-size: 22px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-tertiary);\n  display: block;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .persona-seleccionada[_ngcontent-%COMP%]   .persona-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD52';\n  font-size: 14px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item[_ngcontent-%COMP%]   .horario-valor[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item[_ngcontent-%COMP%]   .horario-valor[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item.programado[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCC5';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .horario-actual[_ngcontent-%COMP%]   .horario-item.actual[_ngcontent-%COMP%]   .horario-label[_ngcontent-%COMP%]::before {\n  content: '\u23F0';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  font-size: 18px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 16px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #0c8a60);\n  color: white;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #0c8a60, #085b40);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #c57f08);\n  color: white;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #c57f08, #945f06);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #eb1515);\n  color: white;\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #eb1515, #bd1010);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #06b6d4, #0891b2);\n  color: white;\n  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #0891b2, #0e7490);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .registro-completado[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 2px solid #10b981;\n  border-radius: 12px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .registro-completado[_ngcontent-%COMP%]   .completado-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #10b981;\n  margin-bottom: 8px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .registro-completado[_ngcontent-%COMP%]   .completado-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #10b981;\n  text-align: center;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: var(--bg-secondary, #f9fafb);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCCB';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  font-size: 14px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span.entrada[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDFE2';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span.salida[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD34';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span.duracion[_ngcontent-%COMP%]::before {\n  content: '\u23F1\uFE0F';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span.retraso[_ngcontent-%COMP%]::before {\n  content: '\u23F0';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span.extras[_ngcontent-%COMP%]::before {\n  content: '\u2795';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item.positivo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item.negativo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-detalle[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%]   .detalle-item.neutro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCCA';\n  font-size: 16px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n@media (max-width: 480px) {\n  .registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%] {\n    min-width: calc(50% - 4px);\n  }\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n  transform: translateY(-2px);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.active[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  color: #06b6d4;\n  border-color: #06b6d4;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.2);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.presente[_ngcontent-%COMP%]::before {\n  content: '\u2705';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.presente.active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n  border-color: #10b981;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.tarde[_ngcontent-%COMP%]::before {\n  content: '\u23F0';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.tarde.active[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  border-color: #f59e0b;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.justificado[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCDD';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.justificado.active[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n  border-color: #8b5cf6;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.ausente[_ngcontent-%COMP%]::before {\n  content: '\u274C';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.ausente.active[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.vacaciones[_ngcontent-%COMP%]::before {\n  content: '\uD83C\uDFD6\uFE0F';\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%]   .btn-estado.vacaciones.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 6px;\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary);\n  font-size: 14px;\n  resize: vertical;\n  min-height: 80px;\n  transition: all 0.3s;\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n  display: block;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n\n\n\n\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n\n\n.modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n\n\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n\n\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n  \n\n}\n\n\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n\n\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(106, 17, 203, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(106, 17, 203, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(106, 17, 203, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(106, 17, 203, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n.bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #6a11cb;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);\n}\n\n\n@media (max-width: 1024px) {\n  .modal-content[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.reporte-filtros[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  padding: 20px;\n  background: var(--bg-secondary, #f9fafb);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .reporte-filtros[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.reporte-filtros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.reporte-filtros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD0D';\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1024px) {\n  .reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label.required[_ngcontent-%COMP%]::after {\n  content: '*';\n  color: #ef4444;\n  margin-left: 2px;\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 6px;\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled, \n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 16px;\n  padding-right: 36px;\n}\n.dark-theme[_ngcontent-%COMP%]   .reporte-filtros[_ngcontent-%COMP%]   .filtros-row[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 480px) {\n  .reporte-filtros[_ngcontent-%COMP%]   .filtros-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.reporte-filtros[_ngcontent-%COMP%]   .filtros-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n@media (max-width: 480px) {\n  .reporte-filtros[_ngcontent-%COMP%]   .filtros-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.reportes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .reportes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .reportes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border-color: #06b6d4;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]:hover   .reporte-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card.disabled[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n  border-color: var(--border-color, #e5e7eb);\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  transition: all 0.3s;\n}\n@media (max-width: 768px) {\n  .reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n@media (max-width: 768px) {\n  .reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n  line-height: 1.4;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #06b6d4;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.reporte-preview[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  overflow: hidden;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    text-align: center;\n    padding: 16px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCCA';\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .preview-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   .preview-date[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background: var(--bg-secondary, #f9fafb);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-color: #06b6d4;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 12px;\n  opacity: 0.8;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  text-align: center;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #06b6d4;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-change[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-change.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-change.positive[_ngcontent-%COMP%]::before {\n  content: '\u25B2 ';\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-change.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-change.negative[_ngcontent-%COMP%]::before {\n  content: '\u25BC ';\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  white-space: nowrap;\n  border-bottom: 2px solid var(--border-color, #e5e7eb);\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 12px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary, #f9fafb);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-primary);\n  font-size: 14px;\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 13px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.highlight[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #06b6d4;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.positive[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 600;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-weight: 600;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-top: 2px solid var(--border-color, #e5e7eb);\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 20px;\n  background: var(--bg-secondary, #f9fafb);\n  border-radius: 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.color-1[_ngcontent-%COMP%] {\n  background: #06b6d4;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.color-2[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.color-3[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%]   .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-color.color-4[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary);\n  border-radius: 8px;\n  border: 1px dashed var(--border-color, #e5e7eb);\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .preview-chart[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCC8 Gr\u00E1fico de estad\u00EDsticas';\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 16px;\n  }\n}\n.reporte-preview[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n@media (max-width: 768px) {\n  .reporte-preview[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  padding: 20px;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  left: 70px;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  width: 90%;\n  margin-left: 100px;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideInDown 0.3s ease;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-large[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-small[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-full[_ngcontent-%COMP%] {\n  max-width: 95vw;\n  max-height: 95vh;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary, #f3f4f6);\n  color: var(--text-primary);\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 20px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: calc(90vh - 80px);\n  overflow-y: auto;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 6px;\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:disabled, \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:disabled, \n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 16px;\n  padding-right: 36px;\n}\n.dark-theme[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n  display: block;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ef4444;\n  margin-top: 4px;\n  display: block;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: none;\n}\n.btn[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled)::after {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s;\n}\n.btn[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n@media (max-width: 768px) {\n  .btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 13px;\n  }\n  .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  transform: translateY(-2px);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary, #f9fafb);\n  border-color: var(--text-secondary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #0c8a60);\n  color: white;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #0c8a60, #085b40);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #eb1515);\n  color: white;\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #eb1515, #bd1010);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #c57f08);\n  color: white;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #c57f08, #945f06);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3b82f6, #0b63f3);\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn-info[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #0b63f3, #094fc2);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-secondary, #f9fafb);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-tertiary, #f3f4f6);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #06b6d4;\n  padding: 4px 8px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #0891b2;\n  text-decoration: none;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn-sm[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 16px;\n}\n.btn-lg[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid;\n}\n.btn-outline.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #06b6d4;\n  color: #06b6d4;\n}\n.btn-outline.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #06b6d4;\n  color: white;\n}\n.btn-outline.btn-outline-success[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  color: #10b981;\n}\n.btn-outline.btn-outline-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #10b981;\n  color: white;\n}\n.btn-outline.btn-outline-danger[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.btn-outline.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: white;\n}\n.btn-outline.btn-outline-warning[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  color: #f59e0b;\n}\n.btn-outline.btn-outline-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f59e0b;\n  color: white;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  position: relative;\n  color: transparent !important;\n}\n.btn-loading[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 50%;\n  margin-top: -8px;\n  margin-left: -8px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.btn-loading.btn-secondary[_ngcontent-%COMP%]::after, \n.btn-loading.btn-cancel[_ngcontent-%COMP%]::after, \n.btn-loading.btn-outline[_ngcontent-%COMP%]::after {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  border-top-color: var(--text-primary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 1.5;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .empty-state[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  position: relative;\n}\n.loading[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dark-theme[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.8);\n}\n.loading[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -20px;\n  border: 3px solid rgba(0, 0, 0, 0.1);\n  border-top-color: #06b6d4;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  z-index: 11;\n}\n.dark-theme[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]::before {\n  border: 3px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #06b6d4;\n}\n.skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--bg-tertiary, #f3f4f6) 25%, var(--bg-secondary, #f9fafb) 50%, var(--bg-tertiary, #f3f4f6) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_loading 1.5s infinite;\n  border-radius: 4px;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(6, 182, 212, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_ripple {\n  from {\n    transform: scale(0);\n    opacity: 1;\n  }\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n.pulse-calendar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.ripple[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ripple[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 5px;\n  height: 5px;\n  background: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  border-radius: 100%;\n  transform: scale(1, 1) translate(-50%);\n  transform-origin: 50% 50%;\n}\n.ripple[_ngcontent-%COMP%]:focus:not(:active)::after {\n  animation: _ngcontent-%COMP%_ripple 1s ease-out;\n}\n[data-tooltip][_ngcontent-%COMP%] {\n  position: relative;\n}\n[data-tooltip][_ngcontent-%COMP%]::before {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 6px 10px;\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary);\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid var(--border-color, #e5e7eb);\n  z-index: 1000;\n  pointer-events: none;\n}\n[data-tooltip][_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: var(--bg-primary, #ffffff);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n  z-index: 1000;\n  pointer-events: none;\n}\n[data-tooltip][_ngcontent-%COMP%]:hover::before, \n[data-tooltip][_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(-8px);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--text-secondary);\n  border-radius: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-primary);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: var(--bg-tertiary, #f3f4f6);\n}\n@media (max-width: 1400px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .calendar-nav[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n}\n@media (max-width: 1200px) {\n  .dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    width: calc(100% - 70px);\n  }\n}\n@media (max-width: 1024px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .calendar-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .marcaciones-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 2;\n  }\n  .calendar-view[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .header-actions[_ngcontent-%COMP%]   .view-switcher[_ngcontent-%COMP%] {\n    order: -1;\n    width: 100%;\n    margin-bottom: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .dashboard-container.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .dashboard-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n    padding: 16px;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .calendar-nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    padding: 12px;\n  }\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .filtros-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: flex-start;\n  }\n  .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n    min-width: 1000px;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 95vh;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .detalle-horarios[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .registro-asistencia[_ngcontent-%COMP%]   .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .reportes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calendar-nav[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .registro-asistencia[_ngcontent-%COMP%]   .registro-horarios[_ngcontent-%COMP%]   .registro-actions[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 14px;\n  }\n  .estado-opciones[_ngcontent-%COMP%]   .estado-buttons[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reportes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reporte-preview[_ngcontent-%COMP%]   .preview-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 360px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .calendar-nav[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .calendar-nav[_ngcontent-%COMP%]   .current-date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media print {\n  .dashboard-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  app-menu[_ngcontent-%COMP%], \n   app-header[_ngcontent-%COMP%], \n   app-footer[_ngcontent-%COMP%], \n   .header-actions[_ngcontent-%COMP%], \n   .calendar-nav[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%], \n   .filtros-container[_ngcontent-%COMP%], \n   .marcaciones-panel[_ngcontent-%COMP%], \n   .panel-actions[_ngcontent-%COMP%], \n   .table-actions[_ngcontent-%COMP%], \n   .actions-cell[_ngcontent-%COMP%], \n   .pagination[_ngcontent-%COMP%], \n   .btn[_ngcontent-%COMP%]:not(.btn-print) {\n    display: none !important;\n  }\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 0;\n    min-height: auto;\n    background: white !important;\n  }\n  .header[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: none;\n    padding: 0 0 16px 0;\n    margin-bottom: 16px;\n    border-bottom: 2px solid #000;\n  }\n  .calendar-view[_ngcontent-%COMP%], \n   .table-container[_ngcontent-%COMP%] {\n    box-shadow: none;\n    border: 1px solid #000;\n    page-break-inside: avoid;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow: visible;\n    max-height: none;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    background: #f0f0f0 !important;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    color: #000 !important;\n    border: 1px solid #000 !important;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #000;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    color: #000 !important;\n    border: 1px solid #000 !important;\n  }\n  .dark-theme[_ngcontent-%COMP%] {\n    --bg-primary: white;\n    --bg-secondary: #f9fafb;\n    --text-primary: #000;\n    --text-secondary: #666;\n    --border-color: #000;\n  }\n  a[href][_ngcontent-%COMP%]::after {\n    content: \" (\" attr(href) \")\";\n  }\n  @page {\n    margin: 1cm;\n  }\n  h1[_ngcontent-%COMP%], \n   h2[_ngcontent-%COMP%], \n   h3[_ngcontent-%COMP%], \n   h4[_ngcontent-%COMP%], \n   h5[_ngcontent-%COMP%], \n   h6[_ngcontent-%COMP%] {\n    page-break-after: avoid;\n  }\n  table[_ngcontent-%COMP%], \n   figure[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .calendar-container[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .calendar-view.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n@media (max-width: 1024px) {\n  .sidebar-collapsed[_ngcontent-%COMP%]   .calendar-view.month-view[_ngcontent-%COMP%]   .month-grid[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%] {\n    min-height: 80px;\n  }\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  min-width: 1100px;\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #06b6d4;\n  outline-offset: 2px;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.dark-theme[_ngcontent-%COMP%]   .calendar-view.day-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.week-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.month-view[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.day-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.week-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.month-view[_ngcontent-%COMP%]   .week-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.day-view[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.week-view[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%], \n.dark-theme[_ngcontent-%COMP%]   .calendar-view.month-view[_ngcontent-%COMP%]   .month-day-header[_ngcontent-%COMP%] {\n  background: #283547;\n}\n.dark-theme[_ngcontent-%COMP%]   .marcaciones-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background: #283547;\n}\n.dark-theme[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background: #283547;\n}\n.dark-theme[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #283547;\n}\n.dark-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, \n.dark-theme[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #314158;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  animation: _ngcontent-%COMP%_slideInDown 0.3s ease;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #10b981;\n}\n.alert.alert-success[_ngcontent-%COMP%]::before {\n  content: '\u2705';\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #ef4444;\n}\n.alert.alert-error[_ngcontent-%COMP%]::before {\n  content: '\u274C';\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  color: #f59e0b;\n}\n.alert.alert-warning[_ngcontent-%COMP%]::before {\n  content: '\u26A0\uFE0F';\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  border: 1px solid rgba(6, 182, 212, 0.3);\n  color: #06b6d4;\n}\n.alert.alert-info[_ngcontent-%COMP%]::before {\n  content: '\u2139\uFE0F';\n}\n.alert[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.alert[_ngcontent-%COMP%]   .alert-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge.badge-primary[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.2);\n  color: #06b6d4;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: #3b82f6;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.badge.badge-purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  color: #8b5cf6;\n  border: 1px solid rgba(139, 92, 246, 0.3);\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.text-calendar[_ngcontent-%COMP%] {\n  color: #06b6d4;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background: var(--bg-primary, #ffffff);\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-secondary, #f9fafb);\n}\n.bg-tertiary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary, #f3f4f6);\n}\n.bg-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n}\n.bg-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n}\n.bg-calendar[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n}\n.mt-0[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.ml-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.ml-1[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.ml-3[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.ml-4[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.ml-5[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.ml-6[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.mr-4[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.mr-5[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.mr-6[_ngcontent-%COMP%] {\n  margin-right: 24px;\n}\n.p-0[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.p-1[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.p-2[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.p-4[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.p-6[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex-row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.flex-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.flex-auto[_ngcontent-%COMP%] {\n  flex: auto;\n}\n.flex-none[_ngcontent-%COMP%] {\n  flex: none;\n}\n.justify-start[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.justify-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.justify-around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.items-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline;\n}\n.items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.gap-0[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.gap-1[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.gap-5[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n.gap-6[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.w-auto[_ngcontent-%COMP%] {\n  width: auto;\n}\n.h-full[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.h-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.rounded-sm[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.rounded-md[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);\n}\n.shadow-md[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.border[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-color, #e5e7eb);\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--border-color, #e5e7eb);\n}\n.border-r[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--border-color, #e5e7eb);\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.opacity-25[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.opacity-50[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.opacity-75[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.pointer-events-auto[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cursor-default[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.cursor-not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.select-none[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.select-text[_ngcontent-%COMP%] {\n  -webkit-user-select: text;\n          user-select: text;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.overflow-auto[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.overflow-y-auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.whitespace-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.whitespace-normal[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.whitespace-pre[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n.whitespace-pre-line[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.whitespace-pre-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.text-ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.font-light[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.font-normal[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.font-extrabold[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.leading-none[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.leading-tight[_ngcontent-%COMP%] {\n  line-height: 1.25;\n}\n.leading-normal[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.leading-loose[_ngcontent-%COMP%] {\n  line-height: 2;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.z-0[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n.z-10[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.z-20[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n.z-30[_ngcontent-%COMP%] {\n  z-index: 30;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.z-auto[_ngcontent-%COMP%] {\n  z-index: auto;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.right-0[_ngcontent-%COMP%] {\n  right: 0;\n}\n.bottom-0[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-auto[_ngcontent-%COMP%] {\n  top: auto;\n}\n.right-auto[_ngcontent-%COMP%] {\n  right: auto;\n}\n.bottom-auto[_ngcontent-%COMP%] {\n  bottom: auto;\n}\n.left-auto[_ngcontent-%COMP%] {\n  left: auto;\n}\n.sin-personal[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #999;\n}\n.sin-personal[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.sin-personal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.selector-personal[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 14px;\n  background-color: var(--bg-primary);\n  cursor: pointer;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4a90e2;\n  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);\n}\n.btn-cambiar-persona[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 4px 12px;\n  font-size: 12px;\n  background: #f5f5f5;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cambiar-persona[_ngcontent-%COMP%]:hover {\n  background: #e8e8e8;\n  border-color: #bbb;\n}\n.schedule-cell.has-registro[_ngcontent-%COMP%] {\n  background-color: rgba(76, 175, 80, 0.1);\n  border-left: 3px solid #4caf50;\n}\n.person-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  border-radius: 50%;\n  background: #e0e0e0;\n  font-size: 12px;\n  font-weight: bold;\n}\n.person-badge.entrada-completa[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.person-badge.entrada-solo[_ngcontent-%COMP%] {\n  background: #ff9800;\n  color: white;\n}\n.schedule-hours[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-left: 4px;\n}\n.no-registros[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ccc;\n  font-size: 12px;\n}\n.person-tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.person-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.person-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #333 transparent transparent transparent;\n}\n.person-tooltip[_ngcontent-%COMP%]:hover   .tooltip-content[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.person-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 2px;\n  cursor: pointer;\n}\n.person-badge.entrada-completa[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n.person-badge.entrada-solo[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: white;\n}\n.time-slot-detailed[_ngcontent-%COMP%] {\n  min-height: 80px;\n  padding: 8px;\n}\n.time-slot-detailed.has-registro[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-radius: 8px;\n}\n.marcacion-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-bottom: 8px;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.avatar-iniciales[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #2196f3;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  margin-right: 12px;\n}\n.entrada.tarde[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.day-personas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.persona-inicial[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #4caf50;\n  color: white;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.persona-inicial[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.historial-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%);\n  border-radius: 16px;\n  margin-bottom: 25px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.historial-header[_ngcontent-%COMP%]   .avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  font-weight: bold;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.historial-header[_ngcontent-%COMP%]   .persona-info-detalle[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.historial-header[_ngcontent-%COMP%]   .persona-info-detalle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.historial-header[_ngcontent-%COMP%]   .persona-info-detalle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.historial-header[_ngcontent-%COMP%]   .persona-info-detalle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.stats-periodo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin-bottom: 25px;\n}\n.stats-periodo[_ngcontent-%COMP%]   .stat-card-mini[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 12px;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.stats-periodo[_ngcontent-%COMP%]   .stat-card-mini[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);\n}\n.stats-periodo[_ngcontent-%COMP%]   .stat-card-mini[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  color: #667eea;\n  line-height: 1.2;\n}\n.stats-periodo[_ngcontent-%COMP%]   .stat-card-mini[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 8px;\n  font-weight: 500;\n}\n.historial-tabla[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.historial-tabla[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border-color);\n}\n.historial-tabla[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.historial-tabla[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n  background: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.historial-tabla[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover {\n  background: #3958e4;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: var(--text-secondary);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  background: var(--bg-secondary);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--border-color);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-bottom: 1px solid var(--border-color);\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f39c12;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  margin-left: 8px;\n}\n.estado-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.estado-badge.estado-presente[_ngcontent-%COMP%] {\n  background: #27ae60;\n  color: white;\n}\n.estado-badge.estado-ausente[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: white;\n}\n.estado-badge.estado-tarde[_ngcontent-%COMP%] {\n  background: #f39c12;\n  color: white;\n}\n.estado-badge.estado-justificado[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n.estado-badge.estado-vacaciones[_ngcontent-%COMP%] {\n  background: #9b59b6;\n  color: white;\n}\n.estado-badge.estado-licencia[_ngcontent-%COMP%] {\n  background: #1abc9c;\n  color: white;\n}\n.estado-badge.estado-desconocido[_ngcontent-%COMP%] {\n  background: #95a5a6;\n  color: white;\n}\n.estado-buttons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 12px;\n  margin: 15px 0;\n}\n.estado-buttons-grid[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  border: 2px solid var(--border-color);\n  background: var(--bg-secondary);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  font-size: 14px;\n  display: flex;\n  color: var(--text-primary);\n  font-size: 10px;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.estado-buttons-grid[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%]   .estado-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.estado-buttons-grid[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: var(--bg-hover);\n  border-color: #667eea;\n}\n.estado-buttons-grid[_ngcontent-%COMP%]   .btn-estado.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-color: transparent;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.modal-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 90%;\n  max-height: 85vh;\n  overflow-y: auto;\n}\n.modal-container.modal-large[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 8px;\n  transition: background 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n  border-radius: 4px;\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 4px;\n}\n.modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #5a67d8;\n}\n@media (max-width: 768px) {\n  .stats-periodo[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .historial-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .estado-buttons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n}\n.dark-theme[_ngcontent-%COMP%]   .historial-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .stat-card-mini[_ngcontent-%COMP%] {\n  background: #2d3748;\n}\n.dark-theme[_ngcontent-%COMP%]   .historial-tabla[_ngcontent-%COMP%] {\n  background: #2d3748;\n}\n.dark-theme[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%] {\n  background: #2d3748;\n  border-color: #4a5568;\n  color: #e2e8f0;\n}\n.dark-theme[_ngcontent-%COMP%]   .btn-estado[_ngcontent-%COMP%]:hover {\n  background: #4a5568;\n}\n.person-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n}\n.person-badge.punto-espera[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n  color: white;\n  box-shadow: 0 0 0 2px #fef3c7;\n}\n.person-badge.punto-espera[_ngcontent-%COMP%]::after {\n  content: \"\u23F3\";\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  font-size: 12px;\n  background: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.person-badge.punto-presente[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n  box-shadow: 0 0 0 2px #d1fae5;\n}\n.person-badge.punto-presente[_ngcontent-%COMP%]::after {\n  content: \"\u2705\";\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  font-size: 10px;\n  background: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.person-badge.punto-ausente[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n  opacity: 0.7;\n  box-shadow: 0 0 0 2px #fee2e2;\n}\n.person-badge.punto-ausente[_ngcontent-%COMP%]::after {\n  content: \"\u274C\";\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  font-size: 10px;\n  background: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.person-badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.person-tooltip[_ngcontent-%COMP%] {\n  position: relative;\n}\n.person-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #1f2937;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n.person-tooltip[_ngcontent-%COMP%]   .tooltip-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #1f2937 transparent transparent transparent;\n}\n.person-tooltip[_ngcontent-%COMP%]:hover   .tooltip-content[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jYWxlbmRhcmlvL3BhZ2VzL2NhbGVuZGFyaW8uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NFO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQWpDSjtBQW9DRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBbENKO0FBcUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBbkVGO0FBd0RBO0VBY0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBbkVKO0FBK0NBO0VBd0JJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQXBFSjtBQXNFSTtFQUNFLHNDQUFBO0FBcEVOO0FBZ0NBO0VBeUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSxzQ0FBQTtBQXRFSjtBQXdFSTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUF0RU47QUFvQkE7RUFzRE0sT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkVOO0FBY0E7RUE0RFEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBdkVSO0FBUUE7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b3dCQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFsd0JGO0VBcXdCQTtJQUNFLGVBQUE7RUFud0JGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFSSUFCTEVTIEdMT0JBTEVTIFBBUkEgQ0FMRU5EQVJJT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBwcmltYXJ5LWNvbG9yOiAjNGY0NmU1O1xuQHByaW1hcnktaG92ZXI6ICM2MzY2ZjE7XG5Ac3VjY2Vzcy1jb2xvcjogIzEwYjk4MTtcbkBkYW5nZXItY29sb3I6ICNlZjQ0NDQ7XG5Ad2FybmluZy1jb2xvcjogI2Y1OWUwYjtcbkBpbmZvLWNvbG9yOiAjM2I4MmY2O1xuQGxpZ2h0LWJnOiAjZmZmZmZmO1xuQGxpZ2h0LXRleHQ6ICMxZjI5Mzc7XG5AbGlnaHQtYm9yZGVyOiAjZTVlN2ViO1xuQGRhcmstYmc6ICMxZjI5Mzc7XG5AZGFyay10ZXh0OiAjZjlmYWZiO1xuQGRhcmstYm9yZGVyOiAjMzc0MTUxO1xuQHRyYW5zaXRpb24tc3BlZWQ6IDAuM3M7XG5AYm9yZGVyLXJhZGl1czogMTJweDtcbkBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5AYm94LXNoYWRvdy1ob3ZlcjogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbkBzaWRlYmFyLXdpZHRoOiAyODBweDtcbkBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDogNzBweDtcblxuXG4vLyBDb2xvcmVzIGVzcGVjw4PCrWZpY29zIHBhcmEgQ2FsZW5kYXJpb1xuQGNhbGVuZGFyLXByaW1hcnk6ICMwNmI2ZDQ7XG5AY2FsZW5kYXItc2Vjb25kYXJ5OiAjMDg5MWIyO1xuQGNhbGVuZGFyLWFjY2VudDogIzBlNzQ5MDtcblxuQHNjcm9sbGJhci10cmFjazogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbkBzY3JvbGxiYXItdGh1bWI6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbkBzY3JvbGxiYXItdGh1bWItaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuXG4mIHtcbiAgOnJvb3Qge1xuICAgIC0tYmctcHJpbWFyeTogQGxpZ2h0LWJnO1xuICAgIC0tYmctc2Vjb25kYXJ5OiAjZjlmYWZiO1xuICAgIC0tYmctdGVydGlhcnk6ICNmM2Y0ZjY7XG4gICAgLS10ZXh0LXByaW1hcnk6IEBsaWdodC10ZXh0O1xuICAgIC0tdGV4dC1zZWNvbmRhcnk6ICM2YjcyODA7XG4gICAgLS10ZXh0LXRlcnRpYXJ5OiAjOWNhM2FmO1xuICAgIC0tYm9yZGVyLWNvbG9yOiBAbGlnaHQtYm9yZGVyO1xuICAgIC0tc2lkZWJhci13aWR0aDogQHNpZGViYXItd2lkdGg7XG4gIH1cblxuICAuZGFyay10aGVtZSB7XG4gICAgLS1iZy1wcmltYXJ5OiBAZGFyay1iZztcbiAgICAtLWJnLXNlY29uZGFyeTogIzExMTgyNztcbiAgICAtLWJnLXRlcnRpYXJ5OiAjMzc0MTUxO1xuICAgIC0tdGV4dC1wcmltYXJ5OiBAZGFyay10ZXh0O1xuICAgIC0tdGV4dC1zZWNvbmRhcnk6ICNkMWQ1ZGI7XG4gICAgLS10ZXh0LXRlcnRpYXJ5OiAjNmI3MjgwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiBAZGFyay1ib3JkZXI7XG4gIH1cbn1cblxuXG5cbkBiYWNrdXAtcHJpbWFyeTogIzRmNDZlNTtcbkBiYWNrdXAtc2Vjb25kYXJ5OiAjNjM2NmYxO1xuQGJhY2t1cC1zdWNjZXNzOiAjMTBiOTgxO1xuQGJhY2t1cC1kYW5nZXI6ICNlZjQ0NDQ7XG5AYmFja3VwLXdhcm5pbmc6ICNmNTllMGI7XG5AYmFja3VwLWluZm86ICMzYjgyZjY7XG5AYmFja3VwLWNsb3VkOiAjOGI1Y2Y2O1xuQGJhY2t1cC1lbmNyeXB0aW9uOiAjZWM0ODk5O1xuXG5cbkBsaWdodC1iZzogI2ZmZmZmZjtcbkBsaWdodC10ZXh0OiAjMWYyOTM3O1xuQGxpZ2h0LWJvcmRlcjogI2U1ZTdlYjtcbkBkYXJrLWJnOiAjMWYyOTM3O1xuQGRhcmstdGV4dDogI2Y5ZmFmYjtcbkBkYXJrLWJvcmRlcjogIzM3NDE1MTtcblxuQHRyYW5zaXRpb24tc3BlZWQ6IDAuM3M7XG5AYm9yZGVyLXJhZGl1czogMTJweDtcbkBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5AYm94LXNoYWRvdy1ob3ZlcjogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbkBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDogNzBweDtcbkBzaWRlYmFyLXdpZHRoOiAyODBweDtcblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBCw4PCmlNRVUVEQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWFyY2gtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGFuaW1hdGlvbjogc2VhcmNoTW9kYWxGYWRlSW4gMC4zcyBlYXNlO1xuXG4gIC5zZWFyY2gtbW9kYWwtYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB9XG5cbiAgLnNlYXJjaC1tb2RhbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjZmZmZmZmKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiBzZWFyY2hDb250ZW50U2xpZGUgMC4zcyBlYXNlO1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5zZWFyY2gtbW9kYWwtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLW1vZGFsLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggNTJweCAxNnB4IDQ4cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjZjlmYWZiKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogQGJhY2t1cC1wcmltYXJ5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjMTExODI3KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiBAYmFja3VwLWRhbmdlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjZjNmNGY2KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNlNWU3ZWIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuXG4gICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksICMzNzQxNTEpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICNkMWQ1ZGIpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgIzExMTgyNyk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnNlYXJjaC1yZXN1bHQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOWZhZmIpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjZjNmNGY2KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgICB9XG5cbiAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICMxMTE4MjcpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjZjNmNGY2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwgIzM3NDE1MSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgIC5yZXN1bHQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcblxuICAgICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjZDFkNWRiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWVtcHR5IHtcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICNkMWQ1ZGIpO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNlYXJjaE1vZGFsRmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2VhcmNoQ29udGVudFNsaWRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBDT04gTUVOw4PCmiBDT0xBUFNBRE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAvLyBDdWFuZG8gZWwgc2lkZWJhciBlc3TDg8KhIGNvbGFwc2Fkb1xuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAvLyBBc2VndXJhcm5vcyBxdWUgZWwgY29udGVuaWRvIG9jdXBlIHRvZG8gZWwgZXNwYWNpb1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5JRE8gUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbi10b3A6IDY2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiBAc2Nyb2xsYmFyLXRodW1iIHRyYW5zcGFyZW50O1xuICAgd2lkdGg6IGNhbGMoMTAwJSAtIEBzaWRlYmFyLXdpZHRoKTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBAc2Nyb2xsYmFyLXRodW1iO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogQHNjcm9sbGJhci10aHVtYi1ob3ZlcjtcbiAgICB9XG4gIH1cblxuICAubGlnaHQtdGhlbWUgJiB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZmFmYztcbiAgfVxuXG4gIC5kYXJrLXRoZW1lICYge1xuICAgIGJhY2tncm91bmQ6ICMxYTIwMmM7XG4gIH1cblxuICAuZGFzaGJvYXJkLWNvbnRhaW5lci5zaWRlYmFyLmNvbGxhcHNlZCB+ICYge1xuICAgIG1hcmdpbi1sZWZ0OiBAc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gQHNpZGViYXItY29sbGFwc2VkLXdpZHRoKTtcbiAgfVxufVxuXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFIENBTEVOREFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY2FsZW5kYXItY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTsgLy8gQWp1c3RlIHBhcmEgZm9vdGVyXG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gIGZsZXg6IDE7XG5cbiAgLnNpZGViYXItY29sbGFwc2VkICYge1xuXG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5zaWRlYmFyLWNvbGxhcHNlZCAmIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVIgREUgQ0FMRU5EQVJJT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gIC5zaWRlYmFyLWNvbGxhcHNlZCAmIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJBUlJBIERFIE5BVkVHQUNJw4PCk04gREVMIENBTEVOREFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY2FsZW5kYXItbmF2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgLnZpZXctc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOiA0cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5idG4tdmlldyB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICAjNGY0NmU1LFxuICAgICAgIzYzNjZmMSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLm5hdi1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuLW5hdiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgfVxuXG4gICAgICAubmF2LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmN1cnJlbnQtZGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0ZS1yYW5nZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXRvZGF5IHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXYtcmlnaHQge1xuICAgIC50aW1lLWRpc3BsYXkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgIC50aW1lLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUQUTDg8KNU1RJQ0FTIFLDg8KBUElEQVMgREUgQ0FMRU5EQVJJT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5zdGF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksI2ZmZmZmZik7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWhvdmVyO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICAjNGY0NmU1LFxuICAgICAgIzYzNjZmMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjNGY0NmU1O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXQtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnN0YXQtdHJlbmQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgJi5wb3NpdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfDosKWwrIgJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLm5lZ2F0aXZlIHtcbiAgICAgICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnw6LClsK8ICc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi53YXJuaW5nIHtcbiAgICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ8OiwpbCtiAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSUxUUk9TIEVTUEVDw4PCjUZJQ09TIERFIENBTEVOREFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlsdHJvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuZmlsdHJvcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1saW5rIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IEBjYWxlbmRhci1zZWNvbmRhcnk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmZpbHRyby1pdGVtIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZiNzI4MCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMnB4IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuXG4gICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkMWQ1ZGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREVMIENBTEVOREFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY2FsZW5kYXItbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVklTVEFTIERFTCBDQUxFTkRBUklPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNhbGVuZGFyLXZpZXcge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAvKiBTY3JvbGwgcGVyc29uYWxpemFkbyAqL1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM4MTgxODE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1ZjVlNWU7XG4gIH1cblxuICAvKiBQYXJhIEZpcmVmb3ggKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICM1ZjVlNWUgdHJhbnNwYXJlbnQ7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG9yZGVyOiAxO1xuICB9XG59XG5cbi8vIFZpc3RhIHBvciBEw4PCrWFcbi5kYXktdmlldyB7XG4gIC5kYXktaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpLCNlNWU3ZWI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaG91ci1jb2x1bW4ge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF5LWNvbHVtbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGVyc29uLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wZXJzb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wZXJzb24taW5mbyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRheS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgfVxuXG4gICAgLmhvdXItcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLmhvdXItY2VsbCB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRheS1jZWxsIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLXNsb3Qge1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcrJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmhhcy1zY2hlZHVsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBAY2FsZW5kYXItcHJpbWFyeTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDIwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi53b3JraW5nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIEBzdWNjZXNzLWNvbG9yO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAc3VjY2Vzcy1jb2xvciwgMjAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVmlzdGEgcG9yIFNlbWFuYVxuLndlZWstdmlldyB7XG4gIC53ZWVrLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLnRpbWUtY29sdW1uIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXktY29sdW1uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpOztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXktaGVhZGVyLWNlbGwge1xuICAgICAgICAuZGF5LW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXktZGF0ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAud2Vlay1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLnRpbWUtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpOztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aW1lLWNlbGwge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXktY2VsbCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NoZWR1bGUtY2VsbCB7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuXG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfDsMKfwpHCgcOvwrjCjyc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc2NoZWR1bGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDEwJSk7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIEBjYWxlbmRhci1wcmltYXJ5O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMjAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAuc2NoZWR1bGUtcGVyc29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wZXJzb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICAjNGY0NmU1LFxuICAgICAgIzYzNjZmMSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFZpc3RhIHBvciBNZXNcbi5tb250aC12aWV3IHtcbiAgcGFkZGluZzogMTZweDtcblxuICAubW9udGgtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1vbnRoLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAubW9udGgtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb250aC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gICAgZ2FwOiAxcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5tb250aC1kYXktaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9udGgtZGF5IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDRweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gICAgICB9XG5cbiAgICAgICYub3RoZXItbW9udGgge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAgIC5kYXktbnVtYmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY3VycmVudC1tb250aCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksI2ZmZmZmZik7XG4gICAgICB9XG5cbiAgICAgICYudG9kYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBAY2FsZW5kYXItcHJpbWFyeTtcblxuICAgICAgICAuZGF5LW51bWJlciB7XG4gICAgICAgICAgY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5oYXMtZXZlbnRzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLndlZWtlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBpbmZvLWNvbG9yLCA1JSk7XG5cbiAgICAgICAgLmRheS1udW1iZXIge1xuICAgICAgICAgIGNvbG9yOiBAaW5mby1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF5LW51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXktZXZlbnRzIHtcbiAgICAgICAgLmV2ZW50LWluZGljYXRvciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5QUkVTRU5URSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBzdWNjZXNzLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAc3VjY2Vzcy1jb2xvciwgMzAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLkFVU0VOVEUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAZGFuZ2VyLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEBkYW5nZXItY29sb3IsIDMwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5UQVJERSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEB3YXJuaW5nLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAd2FybmluZy1jb2xvciwgMzAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLlZBQ0FDSU9ORVMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSgjOGI1Y2Y2LCAyMCUpO1xuICAgICAgICAgICAgY29sb3I6ICM4YjVjZjY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKCM4YjVjZjYsIDMwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5MSUNFTkNJQSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBpbmZvLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgY29sb3I6IEBpbmZvLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAaW5mby1jb2xvciwgMzAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXZlbnQtY291bnQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXZlbnQtbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ldmVudC10aW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF5LW1vcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYmFja2dyb3VuZDogZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMTAlKTtcbiAgICAgICAgcGFkZGluZzogMXB4IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDFweCAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9udGgtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxlZ2VuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAubGVnZW5kLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuXG4gICAgICAgIC5sZWdlbmQtY29sb3Ige1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgICAmLnByZXNlbnRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDIwJSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAc3VjY2Vzcy1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmF1c2VudGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAZGFuZ2VyLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnRhcmRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDIwJSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAd2FybmluZy1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnZhY2FjaW9uZXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSgjOGI1Y2Y2LCAyMCUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhiNWNmNjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9udGgtc3RhdHMge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQU5FTCBERSBNQVJDQUNJT05FUyBERUwgRMODwo1BXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1hcmNhY2lvbmVzLXBhbmVsIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMC4zcyBlYXNlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcmRlcjogMjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYW5lbC1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICAjNGY0NmU1LFxuICAgICAgIzYzNjZmMSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBhbmVsLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAubWFyY2FjaW9uZXMtbGlzdCB7XG4gICAgICAubWFyY2FjaW9uLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFyY2FjaW9uLXBlcnNvbmEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICAjNGY0NmU1LFxuICAgICAgIzYzNjZmMSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wZXJzb25hLWluZm8ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJjYWNpb24taG9yYXJpb3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3JhcmlvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZW50cmFkYS50YXJkZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDIwJSk7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEB3YXJuaW5nLWNvbG9yO1xuXG4gICAgICAgICAgICAgIC5ob3JhcmlvLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zYWxpZGEudGVtcHJhbm8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBkYW5nZXItY29sb3IsIDIwJSk7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBkYW5nZXItY29sb3I7XG5cbiAgICAgICAgICAgICAgLmhvcmFyaW8tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ob3JhcmlvLWxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ob3JhcmlvLWhvcmEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tc21hbGwge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmNhY2lvbi1lc3RhZG8ge1xuICAgICAgICAgIC5lc3RhZG8tYmFkZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgICAgICAgJi5lc3RhZG8tcHJlc2VudGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBzdWNjZXNzLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDMwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLWF1c2VudGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBkYW5nZXItY29sb3IsIDIwJSk7XG4gICAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEBkYW5nZXItY29sb3IsIDMwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLXRhcmRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAd2FybmluZy1jb2xvciwgMjAlKTtcbiAgICAgICAgICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEB3YXJuaW5nLWNvbG9yLCAzMCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVzdGFkby1qdXN0aWZpY2FkbyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoIzhiNWNmNiwgMjAlKTtcbiAgICAgICAgICAgICAgY29sb3I6ICM4YjVjZjY7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoIzhiNWNmNiwgMzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5lc3RhZG8tdmFjYWNpb25lcyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGluZm8tY29sb3IsIDIwJSk7XG4gICAgICAgICAgICAgIGNvbG9yOiBAaW5mby1jb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAaW5mby1jb2xvciwgMzAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFuZWwtYWN0aW9ucyB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQUJMQSBERSBSRVNVTUVOIERFIEFTSVNURU5DSUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAudGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtcHJpbWFyeSwgIzU0NWE2NCk7XG4gICAgfVxuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBlcnNvbmEtY2VsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcblxuICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRpYS1jZWxsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG5cbiAgICAgICAgICAgICYucHJlc2VudGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBzdWNjZXNzLWNvbG9yLCAyMCUpO1xuICAgICAgICAgICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDMwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYXVzZW50ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGRhbmdlci1jb2xvciwgMjAlKTtcbiAgICAgICAgICAgICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQGRhbmdlci1jb2xvciwgMzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50YXJkZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDIwJSk7XG4gICAgICAgICAgICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAd2FybmluZy1jb2xvciwgMzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi52YWNhY2lvbmVzIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSgjOGI1Y2Y2LCAyMCUpO1xuICAgICAgICAgICAgICBjb2xvcjogIzhiNWNmNjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZmFkZSgjOGI1Y2Y2LCAzMCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmxpY2VuY2lhIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMjAlKTtcbiAgICAgICAgICAgICAgY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAzMCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZlc3Rpdm8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBkYW5nZXItY29sb3IsIDEwJSk7XG4gICAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnBlbmRpZW50ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDEwJSk7XG4gICAgICAgICAgICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIEB3YXJuaW5nLWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3Jhcy1iYWRnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDIwJSk7XG4gICAgICAgICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDMwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvcmFzLWV4dHJhcy1iYWRnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDIwJSk7XG4gICAgICAgICAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQHdhcm5pbmctY29sb3IsIDMwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhcmRhbnphcy1iYWRnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGRhbmdlci1jb2xvciwgMjAlKTtcbiAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEBkYW5nZXItY29sb3IsIDMwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF1c2VuY2lhcy1iYWRnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoIzhiNWNmNiwgMjAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjOGI1Y2Y2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKCM4YjVjZjYsIDMwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMtY2VsbCB7XG4gICAgICAgICAgLmFjdGlvbnMtYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG4gICAgICAgICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnZpZXcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmVhZmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZTQwYWY7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZmRiZmU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzMCwgNjQsIDE3NSwgMC4yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmVkaXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGY5ZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMzY5YTE7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhZTZmZDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDMsIDEwNSwgMTYxLCAwLjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYucGRmIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTI0MDBlO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRlNjhhO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTQ2LCA2NCwgMTQsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5kZWxldGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNkYzI2MjY7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWNhY2E7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyMjAsIDM4LCAzOCwgMC4yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cblxuICAgIC50YWJsZS1zdW1tYXJ5IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS1leHBvcnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBR0lOQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLnBhZ2luYXRpb24taW5mbyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksI2ZmZmZmZik7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksI2ZmZmZmZik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4tcHJldiB7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ8OiwpfCgCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4tbmV4dCB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnw6LClsK2JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgIC5wYWdpbmF0aW9uLXBhZ2Uge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCk6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAzMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmVsbGlwc2lzIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdpbmF0aW9uLWp1bXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgYmFja2dyb3VuZDogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IEBjYWxlbmRhci1zZWNvbmRhcnk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBAY2FsZW5kYXItc2Vjb25kYXJ5O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLXNpemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICBzZWxlY3Qge1xuICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksI2ZmZmZmZik7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBSRUdJU1RSTyBERSBBU0lTVEVOQ0lBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnJlZ2lzdHJvLWFzaXN0ZW5jaWEge1xuICAucGVyc29uYS1zZWxlY2Npb25hZGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1sYXJnZSB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBjYWxlbmRhci1wcmltYXJ5LCBAY2FsZW5kYXItc2Vjb25kYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGVyc29uYS1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVnaXN0cm8taG9yYXJpb3Mge1xuICAgIC5ob3JhcmlvLWFjdHVhbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmhvcmFyaW8taXRlbSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcblxuICAgICAgICAuaG9yYXJpby1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ8Owwp/ClcKSJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaG9yYXJpby12YWxvciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnByb2dyYW1hZG8gLmhvcmFyaW8tbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ8Owwp/Ck8KFJztcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0dWFsIC5ob3JhcmlvLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfDosKPwrAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlZ2lzdHJvLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWxhcmdlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLXN1Y2Nlc3Mge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzdWNjZXNzLWNvbG9yLCBkYXJrZW4oQHN1Y2Nlc3MtY29sb3IsIDEwJSkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDMwJSk7XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGRhcmtlbihAc3VjY2Vzcy1jb2xvciwgMTAlKSwgZGFya2VuKEBzdWNjZXNzLWNvbG9yLCAyMCUpKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggZmFkZShAc3VjY2Vzcy1jb2xvciwgNDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi13YXJuaW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAd2FybmluZy1jb2xvciwgZGFya2VuKEB3YXJuaW5nLWNvbG9yLCAxMCUpKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCBmYWRlKEB3YXJuaW5nLWNvbG9yLCAzMCUpO1xuXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBkYXJrZW4oQHdhcm5pbmctY29sb3IsIDEwJSksIGRhcmtlbihAd2FybmluZy1jb2xvciwgMjAlKSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IGZhZGUoQHdhcm5pbmctY29sb3IsIDQwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tZGFuZ2VyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAZGFuZ2VyLWNvbG9yLCBkYXJrZW4oQGRhbmdlci1jb2xvciwgMTAlKSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggZmFkZShAZGFuZ2VyLWNvbG9yLCAzMCUpO1xuXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBkYXJrZW4oQGRhbmdlci1jb2xvciwgMTAlKSwgZGFya2VuKEBkYW5nZXItY29sb3IsIDIwJSkpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCBmYWRlKEBkYW5nZXItY29sb3IsIDQwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQGNhbGVuZGFyLXByaW1hcnksIEBjYWxlbmRhci1zZWNvbmRhcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDMwJSk7XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBjYWxlbmRhci1zZWNvbmRhcnksIEBjYWxlbmRhci1hY2NlbnQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjBweCBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCA0MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDMwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZWdpc3Ryby1jb21wbGV0YWRvIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIEBzdWNjZXNzLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcblxuICAgICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgICAwJSwgMTAwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDIwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGxldGFkby1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wbGV0YWRvLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVnaXN0cm8tZGV0YWxsZSB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfDsMKfwpPCiyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRldGFsbGUtaG9yYXJpb3Mge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWxsZS1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVudHJhZGE6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfDsMKfwp/Coic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2FsaWRhOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnw7DCn8KUwrQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmR1cmFjaW9uOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnw6LCj8Kxw6/CuMKPJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5yZXRyYXNvOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnw6LCj8KwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5leHRyYXM6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKewpUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wb3NpdGl2byBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYubmVnYXRpdm8gc3Ryb25nIHtcbiAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYubmV1dHJvIHN0cm9uZyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lc3RhZG8tb3BjaW9uZXMge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnw7DCn8KTwoonO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVzdGFkby1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5idG4tZXN0YWRvIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgICAgICAgIGNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDIwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnByZXNlbnRlIHtcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ8OiwpzChSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAc3VjY2Vzcy1jb2xvciwgMTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi50YXJkZSB7XG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKPwrAnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDEwJSk7XG4gICAgICAgICAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuanVzdGlmaWNhZG8ge1xuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnw7DCn8KTwp0nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoIzhiNWNmNiwgMTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjOGI1Y2Y2O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOGI1Y2Y2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYXVzZW50ZSB7XG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKdwownO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUoQGRhbmdlci1jb2xvciwgMTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYudmFjYWNpb25lcyB7XG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfDsMKfwo/ClsOvwrjCjyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZShAaW5mby1jb2xvciwgMTAlKTtcbiAgICAgICAgICAgIGNvbG9yOiBAaW5mby1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogQGluZm8tY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWhpbnQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIC8vIFNvbG8gbW9zdHJhciBmb25kbyB5IHBlcm1pdGlyIGludGVyYWNjacODwrNuIGN1YW5kbyBlbCBtb2RhbCBlc3TDg8KhIGFiaWVydG9cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgLy8gRm9uZG8gc2VtaS10cmFuc3BhcmVudGVcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgLy8gUGVybWl0ZSBjbGlja3MgZW4gZWwgZm9uZG9cbiAgICAgIHotaW5kZXg6IC0xOyAvLyBGb25kbyBkZXRyw4PCoXMgZGVsIG1vZGFsXG4gICAgfVxuXG4gICAgLy8gUGVybWl0ZSBjbGlja3MgZW4gZWwgZm9uZG8gcGFyYSBtaW5pbWl6YXJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAvLyBDdWFuZG8gZXN0w4PCoSBtaW5pbWl6YWRvOiBTSU4gZm9uZG8sIFNJTiBibG9xdWVvXG4gICYubWluaW1pemVkLW1vZGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvLyBQZXJtaXRlIGludGVyYWN0dWFyIGNvbiBsYSBww4PCoWdpbmFcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyAvLyBFbGltaW5hIGNvbXBsZXRhbWVudGUgZWwgZm9uZG8gZGlmdW1pbmFkb1xuICAgIH1cblxuICAgIC8vIFNvbG8gbGEgYnVyYnVqYSBlcyBpbnRlcmFjdGl2YVxuICAgIC5mbG9hdGluZy1idWJibGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICB9XG59XG4vKiBNb2RhbCBwcmluY2lwYWwgLSBtw4PCoXMgYW5jaG8gcGFyYSBtb3N0cmFyIHRvZG8gZWwgY29udGVuaWRvICovXG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG59XG5cbi8qIEFqdXN0YXIgYW5jaG8gcGFyYSBtb3N0cmFyIHRvZG8gZWwgY29udGVuaWRvICovXG5cblxuLyogSGVhZGVyIGRlbCBtb2RhbCBtZWpvcmFkbyAqL1xuLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZhMTFjYiAwJSwgIzI1NzVmYyAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubW9kYWwtdGl0bGUgLmljb24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuLyogQ29udHJvbGVzIGRlbCBtb2RhbCAtIG3Dg8KhcyBpbnRlcmFjdGl2b3MgKi9cbi5tb2RhbC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1vZGFsLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG59XG5cbi5tb2RhbC1idG4gLmJ0bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm1vZGFsLWJ0bjpob3ZlciAuYnRuLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5tb2RhbC1idG4gLmJ0bi10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtYnRuOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5taW5pbWl6ZS1idG4uYW5pbWF0aW5nIHtcbiAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi5jbG9zZS1tb2RhbC1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuNSkgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuLyogV3JhcHBlciBkZWwgY3VlcnBvIC0gbcODwqFzIGFuY2hvICovXG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBDdWVycG8gZGVsIG1vZGFsIC0gc2Nyb2xsIG1lam9yYWRvICovXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDsgLyogRWxpbWluYXIgcGFkZGluZyBwYXJhIHF1ZSBlbCBjb250ZW5pZG8gb2N1cGUgdG9kbyAqL1xufVxuXG4vKiBBc2VndXJhciBxdWUgZWwgY29tcG9uZW50ZSBpbnRlcm5vIG9jdXBlIHRvZG8gZWwgYW5jaG8gKi9cbi5tb2RhbC1ib2R5IGFwcC1oZWxwLXN1cHBvcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLyogQlVSQlVKQSBGTE9UQU5URSBNRUpPUkFEQSAqL1xuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZhMTFjYiAwJSwgIzI1NzVmYyAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoMTA2LCAxNywgMjAzLCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmxvYXRpbmctYnViYmxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDEwNiwgMTcsIDIwMywgMC43KTtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZS5wdWxzaW5nIHtcbiAgYW5pbWF0aW9uOiBidWJibGVQdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSgxMDYsIDE3LCAyMDMsIDAuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDEwNiwgMTcsIDIwMywgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5cbi5idWJibGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cblxuLmJ1YmJsZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uYnViYmxlLXRleHQge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJ1YmJsZS1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ1YmJsZS1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xufVxuXG4uYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6ICM2YTExY2I7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIFNjcm9sbGJhciBtZWpvcmFkbyBwYXJhIHJlc3BvbnNpdmUgKi9cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YTExY2IgMCUsICMyNTc1ZmMgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNTc1ZmMgMCUsICM2YTExY2IgMTAwJSk7XG59XG5cbi8qIFJFU1BPTlNJVkUgLSBDUsODwo1USUNPIFBBUkEgRUwgU0NST0xMICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tb2RhbC1jb250ZW50Om5vdCgubWluaW1pemVkKTpub3QoLm1heGltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQ6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVBPUlRFUyBERSBDQUxFTkRBUklPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnJlcG9ydGUtZmlsdHJvcyB7XG4gIG1hcmdpbjogMjRweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfDsMKfwpTCjSc7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRyb3Mtcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5maWx0cm8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgJi5yZXF1aXJlZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgICAgICBjb2xvcjogQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZiNzI4MCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMnB4IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuXG4gICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkMWQ1ZGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucmVwb3J0ZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnJlcG9ydGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3ctaG92ZXI7XG4gICAgICBib3JkZXItY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuXG4gICAgICAucmVwb3J0ZS1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXBvcnRlLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwb3J0ZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMnB4O1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuICB9XG59XG5cbi5yZXBvcnRlLXByZXZpZXcge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5wcmV2aWV3LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ8Owwp/Ck8KKJztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJldmlldy1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDI0cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByZXZpZXctc3RhdHMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgLnN0YXQtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgICAgICAgICBib3JkZXItY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXQtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wb3NpdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5uZWdhdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0LWNoYW5nZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgICAgJi5wb3NpdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfDosKWwrIgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm5lZ2F0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnw6LClsK8ICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpZXctdGFibGUge1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcblxuICAgICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG5cbiAgICAgICAgICB0aCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpO1xuXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnBvc2l0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYubmVnYXRpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGZvb3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xuXG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wcmV2aWV3LWNoYXJ0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgICAgIC5jaGFydC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFydC1sZWdlbmQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgICAgLmxlZ2VuZC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICAgICAubGVnZW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgICAgICAgICYuY29sb3ItMSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmNvbG9yLTIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBzdWNjZXNzLWNvbG9yO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5jb2xvci0zIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAd2FybmluZy1jb2xvcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuY29sb3ItNCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2hhcnQtcGxhY2Vob2xkZXIge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ8Owwp/Ck8KIIEdyw4PCoWZpY28gZGUgZXN0YWTDg8Ktc3RpY2FzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgbWluLXdpZHRoOiAxNDBweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUxFUyBHRU5FUkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OjA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgLnNpZGViYXItY29sbGFwc2VkICYge1xuICAgIGxlZnQ6IEBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogc2xpZGVJbkRvd24gMC4zcyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWhvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYubW9kYWwtbGFyZ2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgfVxuXG4gICAgJi5tb2RhbC1zbWFsbCB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgICYubW9kYWwtZnVsbCB7XG4gICAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gODBweCk7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgZmxleDogMTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgJi5mdWxsLXdpZHRoIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgICAucmVxdWlyZWQge1xuICAgICAgICAgICAgICBjb2xvcjogQGRhbmdlci1jb2xvcjtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1pbnB1dCxcbiAgICAgICAgICAuZm9ybS1zZWxlY3QsXG4gICAgICAgICAgLmZvcm0tdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLXNlbGVjdCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZiNzI4MCcgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEycHggY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzZweDtcblxuICAgICAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkMWQ1ZGInIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jaGVjayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgICAgICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0taGludCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tZXJyb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3Rlci1yaWdodCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgWSBDT01QT05FTlRFUyBDT01QQVJUSURPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCB0cmFuc3BhcmVudCk7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gQHRyYW5zaXRpb24tc3BlZWQ7XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIC5idG4taWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgIC5idG4taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgICM0ZjQ2ZTUsXG4gICAgICAjNjM2NmYxKTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzVkZWcsXG4gICAgICAjNjM2NmYxLFxuICAgICAgIzhiNWNmNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG5cbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblxuICB9XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgfVxufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc3VjY2Vzcy1jb2xvciwgZGFya2VuKEBzdWNjZXNzLWNvbG9yLCAxMCUpKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDMwJSk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZGFya2VuKEBzdWNjZXNzLWNvbG9yLCAxMCUpLCBkYXJrZW4oQHN1Y2Nlc3MtY29sb3IsIDIwJSkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDQwJSk7XG4gIH1cbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAZGFuZ2VyLWNvbG9yLCBkYXJrZW4oQGRhbmdlci1jb2xvciwgMTAlKSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCBmYWRlKEBkYW5nZXItY29sb3IsIDMwJSk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZGFya2VuKEBkYW5nZXItY29sb3IsIDEwJSksIGRhcmtlbihAZGFuZ2VyLWNvbG9yLCAyMCUpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTZweCBmYWRlKEBkYW5nZXItY29sb3IsIDQwJSk7XG4gIH1cbn1cblxuLmJ0bi13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHdhcm5pbmctY29sb3IsIGRhcmtlbihAd2FybmluZy1jb2xvciwgMTAlKSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCBmYWRlKEB3YXJuaW5nLWNvbG9yLCAzMCUpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGRhcmtlbihAd2FybmluZy1jb2xvciwgMTAlKSwgZGFya2VuKEB3YXJuaW5nLWNvbG9yLCAyMCUpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTZweCBmYWRlKEB3YXJuaW5nLWNvbG9yLCA0MCUpO1xuICB9XG59XG5cbi5idG4taW5mbyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBpbmZvLWNvbG9yLCBkYXJrZW4oQGluZm8tY29sb3IsIDEwJSkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggZmFkZShAaW5mby1jb2xvciwgMzAlKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBkYXJrZW4oQGluZm8tY29sb3IsIDEwJSksIGRhcmtlbihAaW5mby1jb2xvciwgMjAlKSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggZmFkZShAaW5mby1jb2xvciwgNDAlKTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwjZjlmYWZiKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwjZTVlN2ViKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gIH1cbn1cblxuLmJ0bi1saW5rIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGNvbG9yOiBAY2FsZW5kYXItc2Vjb25kYXJ5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uYnRuLXNtIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uYnRuLWxnIHtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuXG4gICYuYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IEBjYWxlbmRhci1wcmltYXJ5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gICAgYm9yZGVyLWNvbG9yOiBAc3VjY2Vzcy1jb2xvcjtcbiAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IEBzdWNjZXNzLWNvbG9yO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLW91dGxpbmUtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IEBkYW5nZXItY29sb3I7XG4gICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IEBkYW5nZXItY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgJi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xuICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogQHdhcm5pbmctY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5idG4tbG9hZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgJi5idG4tc2Vjb25kYXJ5OjphZnRlcixcbiAgJi5idG4tY2FuY2VsOjphZnRlcixcbiAgJi5idG4tb3V0bGluZTo6YWZ0ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRE8gVkFDw4PCjU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ4cHggMjRweDtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLmVtcHR5LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPQURJTkcgU1RBVEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAxMTtcblxuICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgfVxuICB9XG59XG5cbi5za2VsZXRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYmctdGVydGlhcnksI2YzZjRmNikgMjUlLCB2YXIoLS1iZy1zZWNvbmRhcnksI2Y5ZmFmYikgNTAlLCB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KSA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuNXMgaW5maW5pdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gIHRvIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDQwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5wdWxzZS1jYWxlbmRhciB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbi5yaXBwbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cblxuICAmOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUT09MVElQU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbltkYXRhLXRvb2x0aXBdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBib3gtc2hhZG93OiBAYm94LXNoYWRvdztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSwjZmZmZmZmKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXI6OmJlZm9yZSxcbiAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0NST0xMQkFSIFBFUlNPTkFMSVpBRE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCNmM2Y0ZjYpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRSBQQVJBIENBTEVOREFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5jYWxlbmRhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmNhbGVuZGFyLW5hdiB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRhc2hib2FyZC1jb250YWluZXIge1xuICAgICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSBAc2lkZWJhci1jb2xsYXBzZWQtd2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jYWxlbmRhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuY2FsZW5kYXItbWFpbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5tYXJjYWNpb25lcy1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICAuY2FsZW5kYXItdmlldyB7XG4gICAgb3JkZXI6IDE7XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIC52aWV3LXN3aXRjaGVyIHtcbiAgICAgIG9yZGVyOiAtMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmNhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcblxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FsZW5kYXItbmF2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgLm5hdi1sZWZ0IHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYXYtcmlnaHQge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC50aW1lLWRpc3BsYXkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuZmlsdHJvcy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuZmlsdHJvcy1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5maWx0cm9zLWdyaWQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgfVxuXG4gICAgLmRhdGEtdGFibGUge1xuICAgICAgbWluLXdpZHRoOiAxMDAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLnBhZ2luYXRpb24tY29udHJvbHMge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAubW9kYWwtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuXG4gICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWdpc3Ryby1hc2lzdGVuY2lhIHtcbiAgICAucmVnaXN0cm8taG9yYXJpb3Mge1xuICAgICAgLnJlZ2lzdHJvLWFjdGlvbnMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuZGV0YWxsZS1ob3JhcmlvcyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lc3RhZG8tb3BjaW9uZXMge1xuICAgICAgLmVzdGFkby1idXR0b25zIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVwb3J0ZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuY2FsZW5kYXItbmF2IC5uYXYtbGVmdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZWdpc3Ryby1hc2lzdGVuY2lhIC5yZWdpc3Ryby1ob3JhcmlvcyAucmVnaXN0cm8tYWN0aW9ucyAuYnRuLWxhcmdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTRweDtcbiAgfVxuXG4gIC5lc3RhZG8tb3BjaW9uZXMgLmVzdGFkby1idXR0b25zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZXBvcnRlcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZXBvcnRlLXByZXZpZXcgLnByZXZpZXctYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uIHtcbiAgICAucGFnaW5hdGlvbi1jb250cm9scyB7XG4gICAgICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmNhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcblxuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICAuY2FsZW5kYXItbmF2IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLmN1cnJlbnQtZGF0ZSBoMiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgLmJ0bi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElNUFJFU0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSBwcmludCB7XG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYXBwLW1lbnUsXG4gIGFwcC1oZWFkZXIsXG4gIGFwcC1mb290ZXIsXG4gIC5oZWFkZXItYWN0aW9ucyxcbiAgLmNhbGVuZGFyLW5hdiAubmF2LXJpZ2h0LFxuICAuZmlsdHJvcy1jb250YWluZXIsXG4gIC5tYXJjYWNpb25lcy1wYW5lbCxcbiAgLnBhbmVsLWFjdGlvbnMsXG4gIC50YWJsZS1hY3Rpb25zLFxuICAuYWN0aW9ucy1jZWxsLFxuICAucGFnaW5hdGlvbixcbiAgLmJ0bjpub3QoLmJ0bi1wcmludCkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYWxlbmRhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMCAwIDE2cHggMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICB9XG5cbiAgLmNhbGVuZGFyLXZpZXcsXG4gIC50YWJsZS1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgfVxuXG4gIC5kYXRhLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhcmstdGhlbWUge1xuICAgIC0tYmctcHJpbWFyeTogd2hpdGU7XG4gICAgLS1iZy1zZWNvbmRhcnk6ICNmOWZhZmI7XG4gICAgLS10ZXh0LXByaW1hcnk6ICMwMDA7XG4gICAgLS10ZXh0LXNlY29uZGFyeTogIzY2NjtcbiAgICAtLWJvcmRlci1jb2xvcjogIzAwMDtcbiAgfVxuXG4gIGFbaHJlZl06OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgfVxuXG4gIEBwYWdlIHtcbiAgICBtYXJnaW46IDFjbTtcbiAgfVxuXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xuICB9XG5cbiAgdGFibGUsIGZpZ3VyZSB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG5cbiAgLm5vLXByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpbnQtb25seSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUSUxPUyBFU1BFQ8ODwo1GSUNPUyBQQVJBIE1FTsODwpogQ09MQVBTQURPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNpZGViYXItY29sbGFwc2VkIHtcbiAgLmNhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICB9XG5cbiAgLmNhbGVuZGFyLXZpZXcge1xuICAgICYubW9udGgtdmlldyB7XG4gICAgICAubW9udGgtZ3JpZCB7XG4gICAgICAgIC5tb250aC1kYXkge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICAuZGF0YS10YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDExMDBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgUEFSQSBBQ0NFU0lCSUxJREFEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgQGNhbGVuZGFyLXByaW1hcnk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDA7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RJTE9TIFBBUkEgREFSSyBUSEVNRSBFU1BFQ8ODwo1GSUNPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kYXJrLXRoZW1lIHtcbiAgLmNhbGVuZGFyLXZpZXcge1xuICAgICYuZGF5LXZpZXcsXG4gICAgJi53ZWVrLXZpZXcsXG4gICAgJi5tb250aC12aWV3IHtcbiAgICAgIC5kYXktaGVhZGVyLFxuICAgICAgLndlZWstaGVhZGVyLFxuICAgICAgLm1vbnRoLWRheS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBkYXJrLWJnLCA1JSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hcmNhY2lvbmVzLXBhbmVsIHtcbiAgICAucGFuZWwtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGRhcmstYmcsIDUlKTtcbiAgICB9XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGRhcmstYmcsIDUlKTtcbiAgICB9XG5cbiAgICAuZGF0YS10YWJsZSB7XG4gICAgICB0aGVhZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGRhcmstYmcsIDUlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLXNlY29uZGFyeSxcbiAgLmJ0bi1jYW5jZWwge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAZGFyay1iZywgMTAlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgUEFSQSBFU1RBRE9TIERFIEVSUk9SIFkgw4PCiVhJVE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYWxlcnQge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuM3MgZWFzZTtcblxuICAmLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQHN1Y2Nlc3MtY29sb3IsIDEwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAc3VjY2Vzcy1jb2xvciwgMzAlKTtcbiAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ8OiwpzChSc7XG4gICAgfVxuICB9XG5cbiAgJi5hbGVydC1lcnJvciB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAZGFuZ2VyLWNvbG9yLCAxMCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQGRhbmdlci1jb2xvciwgMzAlKTtcbiAgICBjb2xvcjogQGRhbmdlci1jb2xvcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnw6LCncKMJztcbiAgICB9XG4gIH1cblxuICAmLmFsZXJ0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDEwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAd2FybmluZy1jb2xvciwgMzAlKTtcbiAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ8OiwprCoMOvwrjCjyc7XG4gICAgfVxuICB9XG5cbiAgJi5hbGVydC1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjYWxlbmRhci1wcmltYXJ5LCAxMCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUoQGNhbGVuZGFyLXByaW1hcnksIDMwJSk7XG4gICAgY29sb3I6IEBjYWxlbmRhci1wcmltYXJ5O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfDosKEwrnDr8K4wo8nO1xuICAgIH1cbiAgfVxuXG4gIC5hbGVydC1jbG9zZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgUEFSQSBCQURHRVMgWSBFVElRVUVUQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuYmFkZ2UtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMjAlKTtcbiAgICBjb2xvcjogQGNhbGVuZGFyLXByaW1hcnk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMzAlKTtcbiAgfVxuXG4gICYuYmFkZ2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAc3VjY2Vzcy1jb2xvciwgMjAlKTtcbiAgICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAc3VjY2Vzcy1jb2xvciwgMzAlKTtcbiAgfVxuXG4gICYuYmFkZ2UtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBkYW5nZXItY29sb3IsIDIwJSk7XG4gICAgY29sb3I6IEBkYW5nZXItY29sb3I7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZShAZGFuZ2VyLWNvbG9yLCAzMCUpO1xuICB9XG5cbiAgJi5iYWRnZS13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEB3YXJuaW5nLWNvbG9yLCAyMCUpO1xuICAgIGNvbG9yOiBAd2FybmluZy1jb2xvcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEB3YXJuaW5nLWNvbG9yLCAzMCUpO1xuICB9XG5cbiAgJi5iYWRnZS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBpbmZvLWNvbG9yLCAyMCUpO1xuICAgIGNvbG9yOiBAaW5mby1jb2xvcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKEBpbmZvLWNvbG9yLCAzMCUpO1xuICB9XG5cbiAgJi5iYWRnZS1wdXJwbGUge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoIzhiNWNmNiwgMjAlKTtcbiAgICBjb2xvcjogIzhiNWNmNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlKCM4YjVjZjYsIDMwJSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJREFERVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG5cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogQHN1Y2Nlc3MtY29sb3I7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiBAZGFuZ2VyLWNvbG9yO1xufVxuXG4udGV4dC13YXJuaW5nIHtcbiAgY29sb3I6IEB3YXJuaW5nLWNvbG9yO1xufVxuXG4udGV4dC1pbmZvIHtcbiAgY29sb3I6IEBpbmZvLWNvbG9yO1xufVxuXG4udGV4dC1jYWxlbmRhciB7XG4gIGNvbG9yOiBAY2FsZW5kYXItcHJpbWFyeTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCNmZmZmZmYpO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCNmOWZhZmIpO1xufVxuXG4uYmctdGVydGlhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwjZjNmNGY2KTtcbn1cblxuLmJnLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBmYWRlKEBzdWNjZXNzLWNvbG9yLCAxMCUpO1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogZmFkZShAZGFuZ2VyLWNvbG9yLCAxMCUpO1xufVxuXG4uYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQ6IGZhZGUoQHdhcm5pbmctY29sb3IsIDEwJSk7XG59XG5cbi5iZy1pbmZvIHtcbiAgYmFja2dyb3VuZDogZmFkZShAaW5mby1jb2xvciwgMTAlKTtcbn1cblxuLmJnLWNhbGVuZGFyIHtcbiAgYmFja2dyb3VuZDogZmFkZShAY2FsZW5kYXItcHJpbWFyeSwgMTAlKTtcbn1cblxuLm10LTAgeyBtYXJnaW4tdG9wOiAwOyB9XG4ubXQtMSB7IG1hcmdpbi10b3A6IDRweDsgfVxuLm10LTIgeyBtYXJnaW4tdG9wOiA4cHg7IH1cbi5tdC0zIHsgbWFyZ2luLXRvcDogMTJweDsgfVxuLm10LTQgeyBtYXJnaW4tdG9wOiAxNnB4OyB9XG4ubXQtNSB7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5tdC02IHsgbWFyZ2luLXRvcDogMjRweDsgfVxuXG4ubWItMCB7IG1hcmdpbi1ib3R0b206IDA7IH1cbi5tYi0xIHsgbWFyZ2luLWJvdHRvbTogNHB4OyB9XG4ubWItMiB7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuLm1iLTMgeyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4ubWItNCB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbi5tYi01IHsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuLm1iLTYgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG5cbi5tbC0wIHsgbWFyZ2luLWxlZnQ6IDA7IH1cbi5tbC0xIHsgbWFyZ2luLWxlZnQ6IDRweDsgfVxuLm1sLTIgeyBtYXJnaW4tbGVmdDogOHB4OyB9XG4ubWwtMyB7IG1hcmdpbi1sZWZ0OiAxMnB4OyB9XG4ubWwtNCB7IG1hcmdpbi1sZWZ0OiAxNnB4OyB9XG4ubWwtNSB7IG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4ubWwtNiB7IG1hcmdpbi1sZWZ0OiAyNHB4OyB9XG5cbi5tci0wIHsgbWFyZ2luLXJpZ2h0OiAwOyB9XG4ubXItMSB7IG1hcmdpbi1yaWdodDogNHB4OyB9XG4ubXItMiB7IG1hcmdpbi1yaWdodDogOHB4OyB9XG4ubXItMyB7IG1hcmdpbi1yaWdodDogMTJweDsgfVxuLm1yLTQgeyBtYXJnaW4tcmlnaHQ6IDE2cHg7IH1cbi5tci01IHsgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4ubXItNiB7IG1hcmdpbi1yaWdodDogMjRweDsgfVxuXG4ucC0wIHsgcGFkZGluZzogMDsgfVxuLnAtMSB7IHBhZGRpbmc6IDRweDsgfVxuLnAtMiB7IHBhZGRpbmc6IDhweDsgfVxuLnAtMyB7IHBhZGRpbmc6IDEycHg7IH1cbi5wLTQgeyBwYWRkaW5nOiAxNnB4OyB9XG4ucC01IHsgcGFkZGluZzogMjBweDsgfVxuLnAtNiB7IHBhZGRpbmc6IDI0cHg7IH1cblxuLmQtbm9uZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuLmQtYmxvY2sgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4uZC1pbmxpbmUgeyBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuLmQtaW5saW5lLWJsb2NrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbi5kLWZsZXggeyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cbi5kLWlubGluZS1mbGV4IHsgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfVxuXG4uZmxleC1jb2x1bW4geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uZmxleC1yb3cgeyBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4uZmxleC13cmFwIHsgZmxleC13cmFwOiB3cmFwOyB9XG4uZmxleC1ub3dyYXAgeyBmbGV4LXdyYXA6IG5vd3JhcDsgfVxuLmZsZXgtMSB7IGZsZXg6IDE7IH1cbi5mbGV4LWF1dG8geyBmbGV4OiBhdXRvOyB9XG4uZmxleC1ub25lIHsgZmxleDogbm9uZTsgfVxuXG4uanVzdGlmeS1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuLmp1c3RpZnktZW5kIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuLmp1c3RpZnktY2VudGVyIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbi5qdXN0aWZ5LWJldHdlZW4geyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbi5qdXN0aWZ5LWFyb3VuZCB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XG5cbi5pdGVtcy1zdGFydCB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4uaXRlbXMtZW5kIHsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4uaXRlbXMtY2VudGVyIHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuLml0ZW1zLWJhc2VsaW5lIHsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyB9XG4uaXRlbXMtc3RyZXRjaCB7IGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG5cbi5nYXAtMCB7IGdhcDogMDsgfVxuLmdhcC0xIHsgZ2FwOiA0cHg7IH1cbi5nYXAtMiB7IGdhcDogOHB4OyB9XG4uZ2FwLTMgeyBnYXA6IDEycHg7IH1cbi5nYXAtNCB7IGdhcDogMTZweDsgfVxuLmdhcC01IHsgZ2FwOiAyMHB4OyB9XG4uZ2FwLTYgeyBnYXA6IDI0cHg7IH1cblxuLnctZnVsbCB7IHdpZHRoOiAxMDAlOyB9XG4udy1hdXRvIHsgd2lkdGg6IGF1dG87IH1cbi5oLWZ1bGwgeyBoZWlnaHQ6IDEwMCU7IH1cbi5oLWF1dG8geyBoZWlnaHQ6IGF1dG87IH1cblxuLnJvdW5kZWQgeyBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1czsgfVxuLnJvdW5kZWQtc20geyBib3JkZXItcmFkaXVzOiA0cHg7IH1cbi5yb3VuZGVkLW1kIHsgYm9yZGVyLXJhZGl1czogOHB4OyB9XG4ucm91bmRlZC1sZyB7IGJvcmRlci1yYWRpdXM6IDE2cHg7IH1cbi5yb3VuZGVkLWZ1bGwgeyBib3JkZXItcmFkaXVzOiA5OTk5cHg7IH1cblxuLnNoYWRvdyB7IGJveC1zaGFkb3c6IEBib3gtc2hhZG93OyB9XG4uc2hhZG93LXNtIHsgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbi5zaGFkb3ctbWQgeyBib3gtc2hhZG93OiBAYm94LXNoYWRvdzsgfVxuLnNoYWRvdy1sZyB7IGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWhvdmVyOyB9XG4uc2hhZG93LW5vbmUgeyBib3gtc2hhZG93OiBub25lOyB9XG5cbi5ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7IH1cbi5ib3JkZXItdCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7IH1cbi5ib3JkZXItYiB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7IH1cbi5ib3JkZXItbCB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCNlNWU3ZWIpOyB9XG4uYm9yZGVyLXIgeyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsI2U1ZTdlYik7IH1cblxuLm9wYWNpdHktMCB7IG9wYWNpdHk6IDA7IH1cbi5vcGFjaXR5LTI1IHsgb3BhY2l0eTogMC4yNTsgfVxuLm9wYWNpdHktNTAgeyBvcGFjaXR5OiAwLjU7IH1cbi5vcGFjaXR5LTc1IHsgb3BhY2l0eTogMC43NTsgfVxuLm9wYWNpdHktMTAwIHsgb3BhY2l0eTogMTsgfVxuXG4ucG9pbnRlci1ldmVudHMtbm9uZSB7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4ucG9pbnRlci1ldmVudHMtYXV0byB7IHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG5cbi5jdXJzb3ItcG9pbnRlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxuLmN1cnNvci1kZWZhdWx0IHsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uY3Vyc29yLW5vdC1hbGxvd2VkIHsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4uc2VsZWN0LW5vbmUgeyB1c2VyLXNlbGVjdDogbm9uZTsgfVxuLnNlbGVjdC10ZXh0IHsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cblxuLm92ZXJmbG93LWhpZGRlbiB7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5vdmVyZmxvdy1hdXRvIHsgb3ZlcmZsb3c6IGF1dG87IH1cbi5vdmVyZmxvdy14LWF1dG8geyBvdmVyZmxvdy14OiBhdXRvOyB9XG4ub3ZlcmZsb3cteS1hdXRvIHsgb3ZlcmZsb3cteTogYXV0bzsgfVxuXG4ud2hpdGVzcGFjZS1ub3dyYXAgeyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4ud2hpdGVzcGFjZS1ub3JtYWwgeyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG4ud2hpdGVzcGFjZS1wcmUgeyB3aGl0ZS1zcGFjZTogcHJlOyB9XG4ud2hpdGVzcGFjZS1wcmUtbGluZSB7IHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgfVxuLndoaXRlc3BhY2UtcHJlLXdyYXAgeyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IH1cblxuLnRleHQtZWxsaXBzaXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQteHMgeyBmb250LXNpemU6IDEycHg7IH1cbi50ZXh0LXNtIHsgZm9udC1zaXplOiAxNHB4OyB9XG4udGV4dC1iYXNlIHsgZm9udC1zaXplOiAxNnB4OyB9XG4udGV4dC1sZyB7IGZvbnQtc2l6ZTogMThweDsgfVxuLnRleHQteGwgeyBmb250LXNpemU6IDIwcHg7IH1cbi50ZXh0LTJ4bCB7IGZvbnQtc2l6ZTogMjRweDsgfVxuLnRleHQtM3hsIHsgZm9udC1zaXplOiAzMHB4OyB9XG5cbi5mb250LWxpZ2h0IHsgZm9udC13ZWlnaHQ6IDMwMDsgfVxuLmZvbnQtbm9ybWFsIHsgZm9udC13ZWlnaHQ6IDQwMDsgfVxuLmZvbnQtbWVkaXVtIHsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuLmZvbnQtc2VtaWJvbGQgeyBmb250LXdlaWdodDogNjAwOyB9XG4uZm9udC1ib2xkIHsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLmZvbnQtZXh0cmFib2xkIHsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuXG4ubGVhZGluZy1ub25lIHsgbGluZS1oZWlnaHQ6IDE7IH1cbi5sZWFkaW5nLXRpZ2h0IHsgbGluZS1oZWlnaHQ6IDEuMjU7IH1cbi5sZWFkaW5nLW5vcm1hbCB7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cbi5sZWFkaW5nLXJlbGF4ZWQgeyBsaW5lLWhlaWdodDogMS42MjU7IH1cbi5sZWFkaW5nLWxvb3NlIHsgbGluZS1oZWlnaHQ6IDI7IH1cblxuLnRydW5jYXRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi52aXNpYmxlIHsgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuLmludmlzaWJsZSB7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uei0wIHsgei1pbmRleDogMDsgfVxuLnotMTAgeyB6LWluZGV4OiAxMDsgfVxuLnotMjAgeyB6LWluZGV4OiAyMDsgfVxuLnotMzAgeyB6LWluZGV4OiAzMDsgfVxuLnotNDAgeyB6LWluZGV4OiA0MDsgfVxuLnotNTAgeyB6LWluZGV4OiA1MDsgfVxuLnotYXV0byB7IHotaW5kZXg6IGF1dG87IH1cblxuLnJlbGF0aXZlIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uYWJzb2x1dGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbi5maXhlZCB7IHBvc2l0aW9uOiBmaXhlZDsgfVxuLnN0aWNreSB7IHBvc2l0aW9uOiBzdGlja3k7IH1cblxuLnRvcC0wIHsgdG9wOiAwOyB9XG4ucmlnaHQtMCB7IHJpZ2h0OiAwOyB9XG4uYm90dG9tLTAgeyBib3R0b206IDA7IH1cbi5sZWZ0LTAgeyBsZWZ0OiAwOyB9XG5cbi50b3AtYXV0byB7IHRvcDogYXV0bzsgfVxuLnJpZ2h0LWF1dG8geyByaWdodDogYXV0bzsgfVxuLmJvdHRvbS1hdXRvIHsgYm90dG9tOiBhdXRvOyB9XG4ubGVmdC1hdXRvIHsgbGVmdDogYXV0bzsgfVxuXG5cblxuLnNpbi1wZXJzb25hbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBjb2xvcjogIzk5OTtcblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLnNlbGVjdG9yLXBlcnNvbmFsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uZm9ybS1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzRhOTBlMjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg3NCwgMTQ0LCAyMjYsIDAuMik7XG4gIH1cbn1cblxuLmJ0bi1jYW1iaWFyLXBlcnNvbmEge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgIGJvcmRlci1jb2xvcjogI2JiYjtcbiAgfVxufVxuLnNjaGVkdWxlLWNlbGwge1xuICAmLmhhcy1yZWdpc3RybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0Y2FmNTA7XG4gIH1cbn1cblxuLnBlcnNvbi1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICYuZW50cmFkYS1jb21wbGV0YSB7XG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmVudHJhZGEtc29sbyB7XG4gICAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnNjaGVkdWxlLWhvdXJzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubm8tcmVnaXN0cm9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vLyBFc3RpbG9zIHBhcmEgdG9vbHRpcHNcbi5wZXJzb24tdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC50b29sdGlwLWNvbnRlbnQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMjUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6ICMzMzMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciAudG9vbHRpcC1jb250ZW50IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gRXN0aWxvcyBwYXJhIGJhZGdlc1xuLnBlcnNvbi1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuZW50cmFkYS1jb21wbGV0YSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmVudHJhZGEtc29sbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLy8gRXN0aWxvcyBwYXJhIHZpc3RhIGTDg8KtYVxuLnRpbWUtc2xvdC1kZXRhaWxlZCB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmLmhhcy1yZWdpc3RybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cblxuLm1hcmNhY2lvbi1pdGVtIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5hdmF0YXItaW5pY2lhbGVzIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uZW50cmFkYS50YXJkZSB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4vLyBFc3RpbG9zIHBhcmEgdmlzdGEgbWVzXG4uZGF5LXBlcnNvbmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ucGVyc29uYS1pbmljaWFsIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUSUxPUyBQQVJBIEVMIE1PREFMIERFIEhJU1RPUklBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLmhpc3RvcmlhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJnLXNlY29uZGFyeSkgMCUsIHZhcigtLWJnLWNhcmQpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAuYXZhdGFyLWxhcmdlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG5cbiAgLnBlcnNvbmEtaW5mby1kZXRhbGxlIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdGF0cy1wZXJpb2RvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gIC5zdGF0LWNhcmQtbWluaSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIH1cblxuICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4uaGlzdG9yaWFsLXRhYmxhIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgLmJ0bi1zbWFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oIzY2N2VlYSwgMTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG5cbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM2NjdlZWE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uZGF0YS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gIHRoZWFkIHtcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIHRkIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgdHI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuXG4uYmFkZ2Utd2FybmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5lc3RhZG8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJi5lc3RhZG8tcHJlc2VudGUge1xuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJi5lc3RhZG8tYXVzZW50ZSB7XG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmVzdGFkby10YXJkZSB7XG4gICAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmVzdGFkby1qdXN0aWZpY2FkbyB7XG4gICAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmVzdGFkby12YWNhY2lvbmVzIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWI1OWI2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICYuZXN0YWRvLWxpY2VuY2lhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICYuZXN0YWRvLWRlc2Nvbm9jaWRvIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUSUxPUyBQQVJBIEJPVE9ORVMgREUgRVNUQURPIERFIEFTSVNURU5DSUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5lc3RhZG8tYnV0dG9ucy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgLmJ0bi1lc3RhZG8ge1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuZXN0YWRvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RJTE9TIEFESUNJT05BTEVTIFBBUkEgTUVKT1JBUiBVSVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgJi5tb2RhbC1sYXJnZSB7XG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIH1cbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG5cbiAgLmJ0bi1yZWZyZXNoIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi8vIFNjcm9sbGJhciBwZXJzb25hbGl6YWRhXG4ubW9kYWwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5tb2RhbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM2NjdlZWE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2N2Q4O1xufVxuXG4vLyBSZXNwb25zaXZlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLXBlcmlvZG8ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cblxuICAuaGlzdG9yaWFsLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5lc3RhZG8tYnV0dG9ucy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgIHRoZWFkIHRoLFxuICAgIHRib2R5IHRkIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBUZW1hIG9zY3Vyb1xuLmRhcmstdGhlbWUge1xuICAuaGlzdG9yaWFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJkMzc0OCAwJSwgIzFhMjAyYyAxMDAlKTtcbiAgfVxuXG4gIC5zdGF0LWNhcmQtbWluaSB7XG4gICAgYmFja2dyb3VuZDogIzJkMzc0ODtcbiAgfVxuXG4gIC5oaXN0b3JpYWwtdGFibGEge1xuICAgIGJhY2tncm91bmQ6ICMyZDM3NDg7XG4gIH1cblxuICAuYnRuLWVzdGFkbyB7XG4gICAgYmFja2dyb3VuZDogIzJkMzc0ODtcbiAgICBib3JkZXItY29sb3I6ICM0YTU1Njg7XG4gICAgY29sb3I6ICNlMmU4ZjA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICM0YTU1Njg7XG4gICAgfVxuICB9XG59XG5cbi5wZXJzb24tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vIFB1bnRvIGRlIGVzcGVyYSAoYW1hcmlsbG8pXG4gICYucHVudG8tZXNwZXJhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ZTBiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZlZjNjNztcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiw6LCj8KzXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICByaWdodDogLThweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1bnRvIHByZXNlbnRlICh2ZXJkZSlcbiAgJi5wdW50by1wcmVzZW50ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwYjk4MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNkMWZhZTU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIsOiwpzChVwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtOHB4O1xuICAgICAgcmlnaHQ6IC04cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBQdW50byBhdXNlbnRlIChyb2pvKVxuICAmLnB1bnRvLWF1c2VudGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZlZTJlMjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiw6LCncKMXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICByaWdodDogLThweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxufVxuXG4udGV4dC13YXJuaW5nIHtcbiAgY29sb3I6ICNmNTllMGI7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzEwYjk4MTtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNlZjQ0NDQ7XG59XG5cbi8vIFRvb2x0aXAgbWVqb3JhZG9cbi5wZXJzb24tdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudG9vbHRpcC1jb250ZW50IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTIwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMWYyOTM3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIgLnRvb2x0aXAtY29udGVudCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklOIERFTCBBUkNISVZPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIFNJR1BBWiAtIEVTVElMT1Mgw4PCmk5JQ09TIChDT01QTEVUTylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIFZhcmlhYmxlcyBpbnRlcm5hcyAobm8gaW50ZXJmaWVyZW4gY29uIGdsb2JhbGVzKVxuQHNpZ3Bhei1wcmltYXJ5OiAjNGY0NmU1O1xuQHNpZ3Bhei1zZWNvbmRhcnk6ICM2MzY2ZjE7XG5Ac2lncGF6LWFjY2VudDogIzAwZmY4ODtcbkBzaWdwYXotZGFuZ2VyOiAjZWY0NDQ0O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT1ZFUkxBWSBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG5cbiAgLy8gU29sbyBtb3N0cmFyIGZvbmRvIGN1YW5kbyBlbCBtb2RhbCBlc3TDg8KhIGFiaWVydG9cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1YW5kbyBlc3TDg8KhIG1pbmltaXphZG86IHNpbiBmb25kbyBuaSBibG9xdWVvXG4gICYubWluaW1pemVkLW1vZGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLy8gU29sbyBsYSBidXJidWphIGVzIGludGVyYWN0aXZhXG4gICAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1jb250ZW50LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDEwMDAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIG1heC13aWR0aDogOTh2dztcbiAgbWF4LWhlaWdodDogOTh2aDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG5cbiAgJi5taW5pbWl6ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmOm5vdCgubWluaW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gIC5tb2RhbC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gICAgLmljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBhbmltYXRpb246IGljb25Cb3VuY2UgMnMgaW5maW5pdGU7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIC5tb2RhbC1idG4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTUpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5idG4taWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0zNXB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICB6LWluZGV4OiAxMDAwMjtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciAuYnRuLXRvb2x0aXAge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBib3R0b206IC0zMHB4O1xuICAgICAgfVxuXG4gICAgICAmLm1pbmltaXplLWJ0bi5hbmltYXRpbmcge1xuICAgICAgICBhbmltYXRpb246IG1pbmltaXplQW5pbWF0aW9uIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJi5jbG9zZS1tb2RhbC1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuNSkgIWltcG9ydGFudDtcbiAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ1VFUlBPIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJveC1zaGFkb3c6IDAgMjVweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuXG4gIC8vIFNjcm9sbGJhciBwZXJzb25hbGl6YWRhXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXNlY29uZGFyeSwgQHNpZ3Bhei1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAvLyBBc2VndXJhciBxdWUgZWwgY29tcG9uZW50ZSBpbnRlcm5vIG9jdXBlIHRvZG8gZWwgYW5jaG9cbiAgYXBwLWhlbHAtc3VwcG9ydCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCVVJCVUpBIEZMT1RBTlRFIChNSU5JTUlaQURPKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mbG9hdGluZy1idWJibGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFuaW1hdGlvbjogYnViYmxlQXBwZWFyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC43KTtcbiAgfVxuXG4gICYucHVsc2luZyB7XG4gICAgYW5pbWF0aW9uOiBidWJibGVQdWxzZSAycyBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5idWJibGUtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYW5pbWF0aW9uOiBzcGluU2xvdyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICAuYnViYmxlLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG5cbiAgLmJ1YmJsZS1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xuICAgIH1cblxuICAgIC5jbG9zZS1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuICB9XG5cbiAgLmJ1YmJsZS1ub3RpZmljYXRpb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBjb2xvcjogQHNpZ3Bhei1wcmltYXJ5O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25TbGlkZSAwLjVzIGVhc2U7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBtb2RhbFNsaWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00OCUpIHNjYWxlKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaWNvbkJvdW5jZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1pbmltaXplQW5pbWF0aW9uIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC44KSByb3RhdGUoLTEwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlQXBwZWFyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCkgc2NhbGUoMC4zKSByb3RhdGUoLTE4MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZVB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjgpLCAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluU2xvdyB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBub3RpZmljYXRpb25TbGlkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cblxuICAubW9kYWwtYnRuIHtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogNzV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIC5mbG9hdGluZy1idWJibGUge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5mbG9hdGluZy1idWJibGUge1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIH1cblxuICAuYnViYmxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(-20px)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(0)',
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateY(-20px)',
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateX(100%)',
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateX(0)',
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        transform: 'translateX(100%)',
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 83813:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/calendario/repositories/calendar-repository.impl.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarRepositoryImpl: () => (/* binding */ CalendarRepositoryImpl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_calendario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/calendario.service */ 62788);
/* harmony import */ var _services_personal_calendario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/personal-calendario.service */ 40611);




class CalendarRepositoryImpl {
  calendarioService;
  personalCalendarioService;
  personalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  horariosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  asistenciasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  resumenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  estadisticasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
    total_presentes: 0,
    total_ausentes: 0,
    total_tardes: 0,
    total_horas_extras: 0,
    porcentaje_asistencia: 0
  });
  constructor(calendarioService, personalCalendarioService) {
    this.calendarioService = calendarioService;
    this.personalCalendarioService = personalCalendarioService;
    this.cargarDatosIniciales();
  }
  // Cargar datos iniciales
  cargarDatosIniciales() {
    this.recargarTodosLosDatos();
  }
  recargarTodosLosDatos(filtros) {
    this.personalCalendarioService.obtenerPersonalActivo().subscribe(data => {
      this.personalSubject.next(data);
    });
    this.calendarioService.getHorarios().subscribe(data => {
      this.horariosSubject.next(data);
    });
    // ✅ Cargar asistencias CON filtros de fecha
    this.calendarioService.getAsistencias(filtros).subscribe(data => {
      this.asistenciasSubject.next(data);
    });
    // ✅ Cargar resumen CON filtros de fecha
    this.calendarioService.getResumenAsistencia(filtros).subscribe(data => {
      this.resumenSubject.next(data);
    });
    this.calendarioService.getEstadisticas().subscribe(data => {
      this.estadisticasSubject.next(data);
    });
  }
  registrarAsistencia(data) {
    return this.calendarioService.registrarAsistencia(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(asistencia => {
      // ✅ Recargar todos los datos después de registrar
      this.recargarTodosLosDatos();
    }));
  }
  crearHorario(data) {
    return this.calendarioService.crearHorario(data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(horario => {
      this.recargarTodosLosDatos();
    }));
  }
  // ✅ Los métodos get devuelven los Subjects como Observables
  getHorarios(filters) {
    if (filters) {
      return this.calendarioService.getHorarios(filters);
    }
    return this.horariosSubject.asObservable();
  }
  getAsistencias(filters) {
    if (filters) {
      return this.calendarioService.getAsistencias(filters);
    }
    return this.asistenciasSubject.asObservable();
  }
  getPersonal() {
    return this.personalSubject.asObservable();
  }
  getResumenAsistencia(filters) {
    if (filters) {
      return this.calendarioService.getResumenAsistencia(filters);
    }
    return this.resumenSubject.asObservable();
  }
  getEstadisticas() {
    return this.estadisticasSubject.asObservable();
  }
  actualizarHorario(id, data) {
    return this.calendarioService.actualizarHorario(id, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(horario => {
      this.calendarioService.getHorarios().subscribe(horarios => {
        this.horariosSubject.next(horarios);
      });
    }));
  }
  eliminarHorario(id) {
    return this.calendarioService.eliminarHorario(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      this.calendarioService.getHorarios().subscribe(horarios => {
        this.horariosSubject.next(horarios);
      });
    }));
  }
  static ɵfac = function CalendarRepositoryImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarRepositoryImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_calendario_service__WEBPACK_IMPORTED_MODULE_3__.CalendarioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_personal_calendario_service__WEBPACK_IMPORTED_MODULE_4__.PersonalCalendarioService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CalendarRepositoryImpl,
    factory: CalendarRepositoryImpl.ɵfac
  });
}

/***/ }),

/***/ 88985:
/*!***************************************************************************!*\
  !*** ./src/app/modules/calendario/strategies/personal-filter.strategy.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalFilterStrategy: () => (/* binding */ PersonalFilterStrategy)
/* harmony export */ });
class PersonalFilterStrategy {
  filter(data, criteria) {
    if (!criteria.personalId) return data;
    return data.filter(item => item.personal_id === criteria.personalId);
  }
  getFilterKey() {
    return 'personal';
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_calendario_pages_calendario_component_ts.js.map