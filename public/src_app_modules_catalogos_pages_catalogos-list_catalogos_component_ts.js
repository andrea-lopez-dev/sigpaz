"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_catalogos_pages_catalogos-list_catalogos_component_ts"],{

/***/ 10783:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/format-model-name.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatModelNamePipe: () => (/* binding */ FormatModelNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class FormatModelNamePipe {
  transform(value) {
    if (!value) return '';
    // Reemplazar guiones bajos por espacios
    let formatted = value.replace(/_/g, ' ');
    // Capitalizar cada palabra
    formatted = formatted.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return formatted;
  }
  static ɵfac = function FormatModelNamePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormatModelNamePipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "formatModelName",
    type: FormatModelNamePipe,
    pure: true
  });
}

/***/ }),

/***/ 16454:
/*!**********************************************************************!*\
  !*** ./src/app/modules/catalogos/services/catalogos-crud.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosCrudService: () => (/* binding */ CatalogosCrudService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);



class CatalogosCrudService {
  catalogoService;
  constructor(catalogoService) {
    this.catalogoService = catalogoService;
  }
  crear(entityType, data) {
    const methods = {
      'tipo_medida': () => this.catalogoService.crearTipoMedida(data),
      'institucion': () => this.catalogoService.crearInstitucion(data),
      'estado_denuncia': () => this.catalogoService.crearEstadoDenuncia(data),
      'tipo_conflicto': () => this.catalogoService.crearTipoConflicto(data),
      'tipo_notificacion': () => this.catalogoService.crearTipoNotificacion(data),
      'estado_asistencia': () => this.catalogoService.crearEstadoAsistencia(data),
      'cargo': () => this.catalogoService.crearCargo(data),
      'tipo_documento': () => this.catalogoService.crearTipoDocumento(data),
      'estado_civil': () => this.catalogoService.crearEstadoCivil(data),
      'sexo': () => this.catalogoService.crearSexo(data),
      'tipo_vinculo': () => this.catalogoService.crearTipoVinculo(data)
    };
    return methods[entityType]?.() || new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
  }
  actualizar(entityType, id, data) {
    const methods = {
      'tipo_medida': (id, data) => this.catalogoService.actualizarTipoMedida(id, data),
      'institucion': (id, data) => this.catalogoService.actualizarInstitucion(id, data),
      'estado_denuncia': (id, data) => this.catalogoService.actualizarEstadoDenuncia(id, data),
      'tipo_conflicto': (id, data) => this.catalogoService.actualizarTipoConflicto(id, data),
      'tipo_notificacion': (id, data) => this.catalogoService.actualizarTipoNotificacion(id, data),
      'estado_asistencia': (id, data) => this.catalogoService.actualizarEstadoAsistencia(id, data),
      'cargo': (id, data) => this.catalogoService.actualizarCargo(id, data),
      'tipo_documento': (id, data) => this.catalogoService.actualizarTipoDocumento(id, data),
      'estado_civil': (id, data) => this.catalogoService.actualizarEstadoCivil(id, data),
      'sexo': (id, data) => this.catalogoService.actualizarSexo(id, data),
      'tipo_vinculo': (id, data) => this.catalogoService.actualizarTipoVinculo(id, data)
    };
    return methods[entityType]?.(id, data) || new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
  }
  eliminar(entityType, id) {
    const methods = {
      'tipo_medida': id => this.catalogoService.eliminarTipoMedida(id),
      'institucion': id => this.catalogoService.eliminarInstitucion(id),
      'estado_denuncia': id => this.catalogoService.eliminarEstadoDenuncia(id),
      'tipo_conflicto': id => this.catalogoService.eliminarTipoConflicto(id),
      'tipo_notificacion': id => this.catalogoService.eliminarTipoNotificacion(id),
      'estado_asistencia': id => this.catalogoService.eliminarEstadoAsistencia(id),
      'cargo': id => this.catalogoService.eliminarCargo(id),
      'tipo_documento': id => this.catalogoService.eliminarTipoDocumento(id),
      'estado_civil': id => this.catalogoService.eliminarEstadoCivil(id),
      'sexo': id => this.catalogoService.eliminarSexo(id),
      'tipo_vinculo': id => this.catalogoService.eliminarTipoVinculo(id)
    };
    return methods[entityType]?.(id) || new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
  }
  eliminarFisico(entityType, id, confirmacion) {
    const methods = {
      'tipo_medida': (id, confirmacion) => this.catalogoService.eliminarTipoMedidaFisico(id, confirmacion),
      'institucion': (id, confirmacion) => this.catalogoService.eliminarInstitucionFisica(id, confirmacion),
      'estado_denuncia': (id, confirmacion) => this.catalogoService.eliminarEstadoDenunciaFisico(id, confirmacion),
      'tipo_conflicto': (id, confirmacion) => this.catalogoService.eliminarTipoConflictoFisico(id, confirmacion),
      'tipo_notificacion': (id, confirmacion) => this.catalogoService.eliminarTipoNotificacionFisico(id, confirmacion),
      'estado_asistencia': (id, confirmacion) => this.catalogoService.eliminarEstadoAsistenciaFisico(id, confirmacion),
      'cargo': (id, confirmacion) => this.catalogoService.eliminarCargoFisico(id, confirmacion),
      'tipo_documento': (id, confirmacion) => this.catalogoService.eliminarTipoDocumentoFisico(id, confirmacion),
      'estado_civil': (id, confirmacion) => this.catalogoService.eliminarEstadoCivilFisico(id, confirmacion),
      'sexo': (id, confirmacion) => this.catalogoService.eliminarSexoFisico(id, confirmacion),
      'tipo_vinculo': (id, confirmacion) => this.catalogoService.eliminarTipoVinculoFisico(id, confirmacion)
    };
    return methods[entityType]?.(id, confirmacion) || new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
  }
  toggleEstado(entityType, id, nuevoEstado) {
    // Crear un objeto con el campo estado y enviarlo como Partial<CatalogoFormData>
    const data = {
      estado: nuevoEstado
    };
    // Usar el método actualizar con Partial
    return this.actualizar(entityType, id, data);
  }
  static ɵfac = function CatalogosCrudService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogosCrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__.CatalogoService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CatalogosCrudService,
    factory: CatalogosCrudService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 46821:
/*!****************************************************************************!*\
  !*** ./src/app/modules/catalogos/services/catalogos-validation.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosValidationService: () => (/* binding */ CatalogosValidationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class CatalogosValidationService {
  validarFormulario(entityType, data) {
    const errors = [];
    // ✅ Obtener el nombre de forma más flexible
    const nombre = data.nombre || data.nombre_cargo || '';
    if (!nombre || nombre.trim().length < 2) {
      errors.push(`El nombre debe tener al menos 2 caracteres`);
    }
    // ✅ La descripción es OPCIONAL, no obligatoria
    // Solo validar si se proporciona y es menor a 2 caracteres
    if (data.descripcion && data.descripcion.trim().length > 0 && data.descripcion.trim().length < 2) {
      errors.push('La descripción debe tener al menos 2 caracteres si se proporciona');
    }
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  validarEliminacionFisica(confirmacionTexto) {
    if (confirmacionTexto !== 'ELIMINAR') {
      return {
        isValid: false,
        error: 'Debe escribir exactamente "ELIMINAR" para confirmar'
      };
    }
    return {
      isValid: true
    };
  }
  static ɵfac = function CatalogosValidationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogosValidationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CatalogosValidationService,
    factory: CatalogosValidationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56982:
/*!****************************************************************************!*\
  !*** ./src/app/modules/catalogos/services/catalogos-pagination.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosPaginationService: () => (/* binding */ CatalogosPaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class CatalogosPaginationService {
  itemsPorPagina = 10;
  setItemsPorPagina(items) {
    this.itemsPorPagina = items;
  }
  getItemsPorPagina() {
    return this.itemsPorPagina;
  }
  paginar(items, pagina, itemsPorPagina) {
    const limit = itemsPorPagina || this.itemsPorPagina;
    const start = (pagina - 1) * limit;
    return items.slice(start, start + limit);
  }
  getTotalPaginas(totalItems, itemsPorPagina) {
    const limit = itemsPorPagina || this.itemsPorPagina;
    return Math.ceil(totalItems / limit);
  }
  getPaginationArray(paginaActual, totalPaginas, delta = 2) {
    const range = [];
    const rangeWithDots = [];
    for (let i = 1; i <= totalPaginas; i++) {
      if (i === 1 || i === totalPaginas || i >= paginaActual - delta && i <= paginaActual + delta) {
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
  static ɵfac = function CatalogosPaginationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogosPaginationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CatalogosPaginationService,
    factory: CatalogosPaginationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 58142:
/*!************************************************************!*\
  !*** ./src/app/shared/services/notificationold.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ 68709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);






class NotificationService {
  snackBar;
  config;
  dialog;
  notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  notifications$ = this.notificationsSubject.asObservable();
  constructor(snackBar, config, dialog) {
    this.snackBar = snackBar;
    this.config = config;
    this.dialog = dialog;
    // Notificaciones de ejemplo (remover en producción)
    this.initializeSampleNotifications();
  }
  // ========== MÉTODOS PÚBLICOS ==========
  // Método para agregar notificaciones desde cualquier submódulo
  addNotification(notification) {
    const id = Date.now();
    const timestamp = new Date().toISOString(); // Siempre usar timestamp real
    const newNotification = {
      ...notification,
      id,
      read: false,
      time: timestamp // Siempre timestamp ISO
    };
    setTimeout(() => {
      const current = this.notificationsSubject.value;
      const updated = [newNotification, ...current].slice(0, 50);
      this.notificationsSubject.next(updated);
    }, 0);
    return id;
  }
  showConfirm(title, message, onConfirm, onCancel) {
    const dialogRef = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
      width: '400px',
      data: {
        title,
        message
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        onConfirm();
      } else if (onCancel) {
        onCancel();
      }
    });
  }
  // Método específico para módulo de personas
  addPersonaNotification(action, details, type = 'info', personaName) {
    const fullAction = personaName ? `${action}: ${personaName}` : details ? `${action}: ${details}` : action;
    return this.addNotification({
      user: 'SIGPAZ',
      action: fullAction,
      avatar: '👤',
      module: 'personas',
      type: type
    });
  }
  // Método genérico para cualquier módulo
  addModuleNotification(module, action, details, type = 'info') {
    const moduleNames = {
      'personas': 'Módulo Personas',
      'denuncias': 'Módulo Denuncias',
      'reportes': 'Módulo Reportes',
      'usuarios': 'Módulo Usuarios',
      'sistema': 'Sistema',
      'backup': 'Backup',
      'configuracion': 'Configuración'
    };
    const moduleTitle = moduleNames[module] || `Módulo ${module}`;
    const fullAction = details ? `${moduleTitle}: ${action} - ${details}` : `${moduleTitle}: ${action}`;
    return this.addNotification({
      user: 'SIGPAZ',
      action: fullAction,
      avatar: this.getModuleIcon(module),
      module,
      type
    });
  }
  // Método específico para denuncias (ya lo tenías)
  addDenunciaNotification(module, action, details) {
    const messages = {
      'registro': `Denuncia registrada: ${details || 'Nueva entrada'}`,
      'seguimiento': `Actualización en seguimiento: ${details || 'Proceso actualizado'}`,
      'investigacion': `Investigación en progreso: ${details || 'Nueva evidencia'}`,
      'reportes': `Reporte generado: ${details || 'Documento listo'}`,
      'backup': `${action}: ${details || 'Operación completada'}`
    };
    return this.addNotification({
      user: 'SIGPAZ',
      action: messages[module] || action,
      avatar: this.getModuleIcon(module),
      module,
      type: 'info'
    });
  }
  // Métodos de gestión de notificaciones
  markAsRead(id) {
    const current = this.notificationsSubject.value;
    const updated = current.map(notification => notification.id === id ? {
      ...notification,
      read: true
    } : notification);
    this.notificationsSubject.next(updated);
  }
  markAllAsRead() {
    const current = this.notificationsSubject.value;
    const updated = current.map(notification => ({
      ...notification,
      read: true
    }));
    this.notificationsSubject.next(updated);
  }
  clearAll() {
    this.notificationsSubject.next([]);
  }
  getUnreadCount() {
    return this.notifications$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(notifications => notifications.filter(n => !n.read).length));
  }
  // ========== MÉTODOS DE TOAST/SnackBar ==========
  showSuccess(message, duration = 3000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['success-snackbar']
    });
    console.log('✅ ' + message);
  }
  showError(message, duration = 5000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['error-snackbar']
    });
    console.error('❌ ' + message);
  }
  showInfo(message, duration = 3000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['info-snackbar']
    });
    console.info('ℹ️ ' + message);
  }
  showWarning(message, duration = 4000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['warning-snackbar']
    });
    console.warn('⚠️ ' + message);
  }
  // ========== MÉTODOS PRIVADOS ==========
  initializeSampleNotifications() {
    const sampleNotifications = [
      // Puedes agregar notificaciones de ejemplo aquí si quieres
      // {
      //   id: 1,
      //   user: 'Sistema',
      //   action: 'Bienvenido al sistema SIGPAZ',
      //   time: 'Ahora',
      //   avatar: '👋',
      //   read: false,
      //   module: 'sistema',
      //   type: 'info'
      // }
    ];
    this.notificationsSubject.next(sampleNotifications);
  }
  getModuleIcon(module) {
    const icons = {
      'personas': '👤',
      'denuncias': '📋',
      'registro': '📝',
      'seguimiento': '🔍',
      'investigacion': '⚖️',
      'reportes': '📊',
      'backup': '💾',
      'usuarios': '👥',
      'sistema': '⚙️',
      'configuracion': '⚙️'
    };
    return icons[module] || '💡';
  }
  success(message, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      ...this.config,
      panelClass: ['success-snackbar']
    });
  }
  error(message, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      ...this.config,
      panelClass: ['error-snackbar'],
      duration: 7000
    });
  }
  warning(message, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      ...this.config,
      panelClass: ['warning-snackbar'],
      duration: 6000
    });
  }
  info(message, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      ...this.config,
      panelClass: ['info-snackbar']
    });
  }
  static ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62815:
/*!***********************************************************************!*\
  !*** ./src/app/modules/catalogos/services/catalogos-state.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosStateService: () => (/* binding */ CatalogosStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class CatalogosStateService {
  entityTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  filtersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
    estado: 'todos'
  });
  currentPageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
  entityType$ = this.entityTypeSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  filters$ = this.filtersSubject.asObservable();
  currentPage$ = this.currentPageSubject.asObservable();
  setEntityType(type) {
    this.entityTypeSubject.next(type);
  }
  setLoading(loading) {
    this.loadingSubject.next(loading);
  }
  setFilters(filters) {
    this.filtersSubject.next({
      ...this.filtersSubject.value,
      ...filters
    });
    this.resetPage();
  }
  setPage(page) {
    this.currentPageSubject.next(page);
  }
  resetPage() {
    this.currentPageSubject.next(1);
  }
  getCurrentState() {
    return {
      entityType: this.entityTypeSubject.value,
      filters: this.filtersSubject.value,
      page: this.currentPageSubject.value
    };
  }
  static ɵfac = function CatalogosStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogosStateService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CatalogosStateService,
    factory: CatalogosStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68368:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/catalogos/decorators/require-permissions.decorator.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequierePermisos: () => (/* binding */ RequierePermisos)
/* harmony export */ });
function RequierePermisos(permisosRequeridos) {
  return function (target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
      // Verificar si el componente tiene catalogoService y permisos
      if (this.catalogoService && !this.catalogoService.puedeModificarCatalogos()) {
        const notificationService = this.notificationService;
        if (notificationService && notificationService.error) {
          notificationService.error('Permisos insuficientes', 'No tiene los permisos necesarios para realizar esta acción');
        } else if (notificationService && notificationService.showError) {
          notificationService.showError('No tiene permisos suficientes');
        }
        return;
      }
      // Si tiene permisos, ejecutar el método original
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

/***/ }),

/***/ 74962:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/catalogos/pages/catalogos-list/catalogos.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogosComponent: () => (/* binding */ CatalogosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _constants_catalogos_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/catalogos.constants */ 98170);
/* harmony import */ var _decorators_require_permissions_decorator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../decorators/require-permissions.decorator */ 68368);
/* harmony import */ var _shared_pipes_format_model_name_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/pipes/format-model-name.pipe */ 10783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../services/catalogo.service */ 65466);
/* harmony import */ var _shared_services_notificationold_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/notificationold.service */ 58142);
/* harmony import */ var _services_catalogos_state_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/catalogos-state.service */ 62815);
/* harmony import */ var _services_catalogos_crud_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/catalogos-crud.service */ 16454);
/* harmony import */ var _services_catalogos_pagination_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/catalogos-pagination.service */ 56982);
/* harmony import */ var _services_catalogos_validation_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/catalogos-validation.service */ 46821);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../core/services/loading.service */ 98660);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../core/services/auth.service */ 68010);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);






// Componentes




// Constants

// Decorators

// Pipes














function CatalogosComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CatalogosComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 37)(4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function CatalogosComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, CatalogosComponent_div_4_div_11_div_1_Template, 8, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function CatalogosComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function CatalogosComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 23)(3, "div", 24)(4, "div", 25)(5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function CatalogosComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup.enter", function CatalogosComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, CatalogosComponent_div_4_button_8_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, CatalogosComponent_div_4_div_11_Template, 2, 1, "div", 30)(12, CatalogosComponent_div_4_div_12_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function CatalogosComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 49)(7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
}
function CatalogosComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function CatalogosComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CatalogosComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, CatalogosComponent_div_5_div_4_div_9_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function CatalogosComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, CatalogosComponent_div_5_div_2_Template, 17, 0, "div", 43)(3, CatalogosComponent_div_5_div_3_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CatalogosComponent_div_5_div_4_Template, 10, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function CatalogosComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("admin", ctx_r1.puedeModificarCatalogos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.puedeModificarCatalogos ? "\uD83D\uDC51" : "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r1.tipoUsuario || "Usuario", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("(", ctx_r1.puedeModificarCatalogos ? "Puede editar" : "Solo lectura", ")");
  }
}
function CatalogosComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 73)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 74)(12, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_20_Template_button_click_12_listener() {
      const entity_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.abrirModalCrear(entity_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\u2795 Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_20_Template_button_click_14_listener() {
      const entity_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.seleccionarEntidad(entity_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\uD83D\uDC41\uFE0F Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const entity_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](entity_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](entity_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.getEntityData(entity_r9.id).length, " registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Gesti\u00F3n de ", entity_r9.name.toLowerCase(), " del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos || !ctx_r1.puedeModificarCatalogos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos);
  }
}
function CatalogosComponent_div_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarFiltro("todos"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_14_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarFiltro("activos"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarFiltro("inactivos"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx_r1.currentFilters.estado === "todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Todos (", ctx_r1.currentEntityData.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx_r1.currentFilters.estado === "activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Activos (", ctx_r1.listarActivos.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", ctx_r1.currentFilters.estado === "inactivos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Inactivos (", ctx_r1.listarInactivos.length, ")");
  }
}
function CatalogosComponent_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Cargando datos de ", ctx_r1.currentEntityName, "...");
  }
}
function CatalogosComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 93)(7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "Activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 93)(12, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Inactivos");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 93)(17, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "formatModelName");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.currentEntityData.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.listarActivos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.listarInactivos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 5, ctx_r1.currentEntityType));
  }
}
function CatalogosComponent_div_21_div_17_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CatalogosComponent_div_21_div_17_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CatalogosComponent_div_21_div_17_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function CatalogosComponent_div_21_div_17_tr_22_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td")(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const registro_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](registro_r14.descripcion || "Sin descripci\u00F3n");
  }
}
function CatalogosComponent_div_21_div_17_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CatalogosComponent_div_21_div_17_tr_22_td_4_Template, 3, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "td")(6, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_tr_22_Template_button_click_8_listener() {
      const registro_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleEstado(ctx_r1.getRegistroId(registro_r14)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "td")(11, "div", 110)(12, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_tr_22_Template_button_click_12_listener() {
      const registro_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.abrirModalEditar(ctx_r1.currentEntityType, ctx_r1.getRegistroId(registro_r14)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_tr_22_Template_button_click_14_listener() {
      const registro_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.abrirModalEliminarFisico(ctx_r1.currentEntityType, ctx_r1.getRegistroId(registro_r14)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const registro_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.currentEntityType === "cargo" ? registro_r14.nombre || registro_r14.nombre_cargo : registro_r14.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.haveEntitiesWithDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"](ctx_r1.getEstadoClass(registro_r14.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.getEstadoText(registro_r14.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r1.puedeModificarCatalogos || ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](registro_r14.estado ? "\uD83D\uDD34 Desactivar" : "\uD83D\uDFE2 Activar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos || !ctx_r1.puedeModificarCatalogos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos || !ctx_r1.puedeModificarCatalogos);
  }
}
function CatalogosComponent_div_21_div_17_div_23_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_div_23_button_4_Template_button_click_0_listener() {
      const pagina_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("active", pagina_r17 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", pagina_r17 === "..." || ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](pagina_r17);
  }
}
function CatalogosComponent_div_21_div_17_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 114)(1, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_div_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u25C0\uFE0F Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CatalogosComponent_div_21_div_17_div_23_button_4_Template, 2, 4, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_div_23_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "Siguiente \u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1 || ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPaginas || ctx_r1.cargandoDatos);
  }
}
function CatalogosComponent_div_21_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "div", 98)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 100)(8, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_div_17_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.recargarEntidadActual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 102)(11, "table", 103)(12, "thead")(13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, CatalogosComponent_div_21_div_17_th_14_Template, 2, 0, "th", 104)(15, CatalogosComponent_div_21_div_17_th_15_Template, 2, 0, "th", 104)(16, CatalogosComponent_div_21_div_17_th_16_Template, 2, 0, "th", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, CatalogosComponent_div_21_div_17_tr_22_Template, 16, 9, "tr", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, CatalogosComponent_div_21_div_17_div_23_Template, 7, 3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\uD83D\uDCCB Lista de ", ctx_r1.currentEntityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.totalItems, " registros encontrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.currentEntityType === "cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.currentEntityType !== "cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.haveEntitiesWithDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.registrosPaginados);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1 && !ctx_r1.cargandoDatos);
  }
}
function CatalogosComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 81)(8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.abrirModalCrear(ctx_r1.currentEntityType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.exportarExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\uD83D\uDCE5 Exportar Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.exportarPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\uD83D\uDCC4 Exportar PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, CatalogosComponent_div_21_div_14_Template, 8, 9, "div", 83)(15, CatalogosComponent_div_21_div_15_Template, 4, 1, "div", 84)(16, CatalogosComponent_div_21_div_16_Template, 22, 7, "div", 85)(17, CatalogosComponent_div_21_div_17_Template, 24, 8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.currentEntityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Gesti\u00F3n de ", ctx_r1.currentEntityName.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos || !ctx_r1.puedeModificarCatalogos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u2795 Agregar ", ctx_r1.currentEntityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.cargandoDatos);
  }
}
function CatalogosComponent_div_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 125)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "textarea", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function CatalogosComponent_div_22_div_16_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.formData.descripcion, $event) || (ctx_r1.formData.descripcion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos);
  }
}
function CatalogosComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 119)(1, "div", 120)(2, "div", 121)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_22_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 123)(8, "form", 124, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function CatalogosComponent_div_22_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.isEditing ? ctx_r1.actualizarRegistro() : ctx_r1.crearRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 125)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function CatalogosComponent_div_22_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.formData.nombre, $event) || (ctx_r1.formData.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, CatalogosComponent_div_22_div_16_Template, 4, 2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 125)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "label", 129)(21, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function CatalogosComponent_div_22_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.formData.activo, $event) || (ctx_r1.formData.activo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 132)(24, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_22_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const entityForm_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Editar " + ctx_r1.currentEntityName : "Nuevo " + ctx_r1.currentEntityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r1.currentEntityType === "cargo" ? "Nombre del Cargo" : "Nombre", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.haveEntitiesWithDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !entityForm_r20.form.valid || ctx_r1.cargandoDatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", ctx_r1.isEditing ? "Actualizar" : "Crear", " ", ctx_r1.currentEntityName);
  }
}
function CatalogosComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 119)(1, "div", 136)(2, "div", 137)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\uD83D\uDDD1\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_23_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 138)(8, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u00BFEst\u00E1 seguro de eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "Esta acci\u00F3n desactivar\u00E1 el registro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 140)(18, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_23_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_23_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.eliminarRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\"", ctx_r1.nombreConfirmacion, "\"");
  }
}
function CatalogosComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 119)(1, "div", 136)(2, "div", 137)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\u270D\uFE0F Confirmaci\u00F3n Escrita");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_24_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarConfirmacionFisicaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 138)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Escriba ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "ELIMINAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, " para confirmar eliminaci\u00F3n permanente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function CatalogosComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r1.confirmacionTexto, $event) || (ctx_r1.confirmacionTexto = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 140)(15, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_24_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.cerrarConfirmacionFisicaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_div_24_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.ejecutarEliminacionFisica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.confirmacionTexto);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r1.confirmacionTexto !== "ELIMINAR");
  }
}
class CatalogosComponent {
  router;
  catalogoService;
  notificationService;
  stateService;
  crudService;
  paginationService;
  validationService;
  loadingService;
  authService;
  themeService;
  cdr;
  // Constantes públicas para el template
  ENTIDADES = _constants_catalogos_constants__WEBPACK_IMPORTED_MODULE_12__.ENTIDADES_CATALOGOS;
  CONFIRMACION_ELIMINAR = _constants_catalogos_constants__WEBPACK_IMPORTED_MODULE_12__.CONFIRMACION_ELIMINAR_FISICO;
  // Estado del sidebar y tema
  isSidebarCollapsed = false;
  currentTheme = 'light';
  showMinimizeNotification = false;
  // Estado del componente
  showHelpSupport = false;
  isMinimized = false;
  showModal = false;
  showDeleteModal = false;
  showConfirmacionFisicaModal = false;
  isEditing = false;
  currentEntityType = null;
  currentId = null;
  isSearchOpen = false;
  searchQuery = '';
  searchResults = [];
  cargandoDatos = false;
  puedeVerCatalogos = true;
  tipoUsuario = 'Usuario';
  modalTitle = '';
  // Formulario
  formData = {
    nombre: '',
    activo: true
  };
  // Confirmación eliminación física
  confirmacionTexto = '';
  nombreConfirmacion = '';
  // Datos de entidades
  tiposMedida = [];
  instituciones = [];
  estadosDenuncia = [];
  tiposConflicto = [];
  tiposNotificacion = [];
  estadosAsistencia = [];
  cargos = [];
  tiposDocumento = [];
  estadosCivil = [];
  sexos = [];
  tiposVinculo = [];
  // Permisos (por defecto false)
  puedeModificarCatalogos = false;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  constructor(router, catalogoService, notificationService, stateService, crudService, paginationService, validationService, loadingService, authService, themeService, cdr) {
    this.router = router;
    this.catalogoService = catalogoService;
    this.notificationService = notificationService;
    this.stateService = stateService;
    this.crudService = crudService;
    this.paginationService = paginationService;
    this.validationService = validationService;
    this.loadingService = loadingService;
    this.authService = authService;
    this.themeService = themeService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.setupSubscriptions();
    this.setupTheme();
    this.loadInitialData();
    this.cargarPermisos();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupSubscriptions() {
    this.stateService.loading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(loading => {
      if (loading) {
        this.loadingService.show();
      } else {
        this.loadingService.hide();
      }
    });
  }
  setupTheme() {
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  loadInitialData() {
    this.loadingService.show('Cargando catálogos...');
    Promise.all([this.cargarTiposMedida(), this.cargarInstituciones(), this.cargarEstadosDenuncia(), this.cargarTiposConflicto(), this.cargarTiposNotificacion(), this.cargarEstadosAsistencia(), this.cargarCargos(), this.cargarTiposDocumento(), this.cargarEstadosCivil(), this.cargarSexos(), this.cargarTiposVinculo()]).finally(() => {
      this.loadingService.hide();
    });
  }
  // Getters para el template
  get currentEntityName() {
    const entity = _constants_catalogos_constants__WEBPACK_IMPORTED_MODULE_12__.ENTIDADES_CATALOGOS.find(e => e.id === this.currentEntityType);
    return entity?.name || 'Registro';
  }
  get currentEntityData() {
    if (!this.currentEntityType) return [];
    const dataMap = {
      tipo_medida: this.tiposMedida,
      institucion: this.instituciones,
      estado_denuncia: this.estadosDenuncia,
      tipo_conflicto: this.tiposConflicto,
      tipo_notificacion: this.tiposNotificacion,
      estado_asistencia: this.estadosAsistencia,
      cargo: this.cargos,
      tipo_documento: this.tiposDocumento,
      estado_civil: this.estadosCivil,
      sexo: this.sexos,
      tipo_vinculo: this.tiposVinculo
    };
    return dataMap[this.currentEntityType] || [];
  }
  get currentFilters() {
    return this.stateService['filtersSubject'].value;
  }
  get currentPage() {
    return this.stateService['currentPageSubject'].value;
  }
  get itemsPorPagina() {
    return this.paginationService.getItemsPorPagina();
  }
  get totalItems() {
    return this.filtrarItems(this.currentEntityData).length;
  }
  get totalPaginas() {
    return this.paginationService.getTotalPaginas(this.totalItems);
  }
  get registrosPaginados() {
    let items = this.filtrarItems(this.currentEntityData);
    return this.paginationService.paginar(items, this.currentPage);
  }
  get listarActivos() {
    return this.currentEntityData.filter(item => item.estado === true);
  }
  get listarInactivos() {
    return this.currentEntityData.filter(item => item.estado === false);
  }
  get haveEntitiesWithDescription() {
    return ['tipo_medida', 'institucion', 'tipo_conflicto', 'tipo_notificacion', 'cargo', 'tipo_documento', 'tipo_vinculo'].includes(this.currentEntityType || '');
  }
  // Métodos públicos
  seleccionarEntidad(entityType) {
    this.currentEntityType = entityType;
    this.stateService.setEntityType(entityType);
    this.stateService.setFilters({
      estado: 'todos'
    });
    this.loadingService.hide();
  }
  crearRegistro() {
    if (!this.currentEntityType) return;
    const validation = this.validationService.validarFormulario(this.currentEntityType, this.formData);
    if (!validation.isValid) {
      this.notificationService.warning('Validación', validation.errors.join(', '));
      return;
    }
    this.loadingService.show(`Creando ${this.currentEntityName}...`);
    this.crudService.crear(this.currentEntityType, this.formData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingService.hide())).subscribe({
      next: () => {
        this.notificationService.success('Éxito', `${this.currentEntityName} creado correctamente`);
        this.cerrarModal();
        this.recargarEntidadActual();
      },
      error: error => {
        this.notificationService.error('Error', error.error?.message || 'Error al crear el registro');
      }
    });
  }
  cargarPermisos() {
    this.puedeModificarCatalogos = this.catalogoService.puedeModificarCatalogos();
    this.puedeVerCatalogos = this.catalogoService.puedeVerCatalogos();
    this.tipoUsuario = this.catalogoService.getTipoUsuario() || 'Usuario';
  }
  actualizarRegistro() {
    if (!this.currentEntityType || !this.currentId) return;
    const validation = this.validationService.validarFormulario(this.currentEntityType, this.formData);
    if (!validation.isValid) {
      this.notificationService.warning('Validación', validation.errors.join(', '));
      return;
    }
    this.loadingService.show(`Actualizando ${this.currentEntityName}...`);
    this.crudService.actualizar(this.currentEntityType, this.currentId, this.formData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingService.hide())).subscribe({
      next: () => {
        this.notificationService.success('Éxito', `${this.currentEntityName} actualizado correctamente`);
        this.cerrarModal();
        this.recargarEntidadActual();
      },
      error: error => {
        this.notificationService.error('Error', error.error?.message || 'Error al actualizar el registro');
      }
    });
  }
  eliminarRegistro() {
    if (!this.currentEntityType || !this.currentId) return;
    this.loadingService.show(`Desactivando ${this.currentEntityName}...`);
    this.crudService.eliminar(this.currentEntityType, this.currentId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingService.hide())).subscribe({
      next: () => {
        this.notificationService.success('Éxito', `${this.currentEntityName} desactivado correctamente`);
        this.cerrarDeleteModal();
        this.recargarEntidadActual();
      },
      error: error => {
        this.notificationService.error('Error', error.error?.message || 'Error al desactivar el registro');
      }
    });
  }
  abrirModalEliminarFisico(entityType, id) {
    if (!this.puedeModificarCatalogos) {
      this.notificationService.error('Permisos insuficientes', 'No tiene permisos para eliminar registros');
      return;
    }
    const registro = this.obtenerPorId(id);
    this.currentEntityType = entityType;
    this.currentId = id;
    this.nombreConfirmacion = registro?.nombre || '';
    this.showDeleteModal = true;
  }
  abrirModalConfirmacionFisica() {
    this.confirmacionTexto = '';
    this.showConfirmacionFisicaModal = true;
    this.showDeleteModal = false;
  }
  ejecutarEliminacionFisica() {
    const validation = this.validationService.validarEliminacionFisica(this.confirmacionTexto);
    if (!validation.isValid) {
      this.notificationService.warning('Cancelado', validation.error);
      return;
    }
    if (!this.currentEntityType || !this.currentId) return;
    this.loadingService.show('Eliminando registro...');
    this.showConfirmacionFisicaModal = false;
    this.crudService.eliminarFisico(this.currentEntityType, this.currentId, _constants_catalogos_constants__WEBPACK_IMPORTED_MODULE_12__.CONFIRMACION_ELIMINAR_FISICO).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingService.hide())).subscribe({
      next: () => {
        this.notificationService.success('Éxito', `${this.currentEntityName} eliminado permanentemente`);
        this.cerrarDeleteModal();
        this.recargarEntidadActual();
      },
      error: error => {
        this.notificationService.error('Error', error.error?.message || 'Error al eliminar el registro');
        this.cerrarDeleteModal();
      }
    });
  }
  toggleEstado(id) {
    if (!this.currentEntityType || !this.puedeModificarCatalogos) return;
    const registro = this.obtenerPorId(id);
    if (!registro) return;
    this.loadingService.show('Actualizando estado...');
    this.crudService.toggleEstado(this.currentEntityType, id, !registro.estado).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingService.hide())).subscribe({
      next: () => {
        this.actualizarRegistroLocal(id, !registro.estado);
        this.notificationService.success('Éxito', `Registro ${!registro.estado ? 'activado' : 'desactivado'} correctamente`);
      },
      error: error => {
        this.notificationService.error('Error', error.error?.message || 'Error al cambiar el estado');
      }
    });
  }
  cambiarFiltro(tipo) {
    this.stateService.setFilters({
      estado: tipo
    });
  }
  cambiarPagina(pagina) {
    this.stateService.setPage(pagina);
  }
  getPaginationArray() {
    return this.paginationService.getPaginationArray(this.currentPage, this.totalPaginas);
  }
  cerrarModal() {
    this.showModal = false;
    this.resetForm();
  }
  cerrarDeleteModal() {
    this.showDeleteModal = false;
    this.showConfirmacionFisicaModal = false;
    this.currentId = null;
    this.confirmacionTexto = '';
    this.nombreConfirmacion = '';
  }
  cerrarConfirmacionFisicaModal() {
    this.showConfirmacionFisicaModal = false;
    this.confirmacionTexto = '';
  }
  resetForm() {
    this.formData = {
      nombre: '',
      activo: true
    };
    this.currentId = null;
    this.isEditing = false;
  }
  recargarEntidadActual() {
    this.loadInitialData();
  }
  // Métodos para el header
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
  }
  minimizeToBubble() {
    this.isMinimized = true;
  }
  restoreFromBubble() {
    this.isMinimized = false;
  }
  closeBubble(event) {
    event.stopPropagation();
    this.showHelpSupport = false;
    this.isMinimized = false;
  }
  handleOverlayClick(event) {
    const target = event.target;
    if (target.classList.contains('modal-overlay-sigpaz') && this.showHelpSupport && !this.isMinimized) {
      this.minimizeToBubble();
    }
  }
  // Métodos privados de carga de datos (similares a los originales pero manteniendo la estructura)
  cargarTiposMedida() {
    return new Promise(resolve => {
      this.catalogoService.getTiposMedida().subscribe({
        next: data => {
          this.tiposMedida = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarInstituciones() {
    return new Promise(resolve => {
      this.catalogoService.getInstituciones().subscribe({
        next: data => {
          this.instituciones = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarEstadosDenuncia() {
    return new Promise(resolve => {
      this.catalogoService.getEstadosDenuncia().subscribe({
        next: data => {
          this.estadosDenuncia = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarTiposConflicto() {
    return new Promise(resolve => {
      this.catalogoService.getTiposConflicto().subscribe({
        next: data => {
          this.tiposConflicto = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarTiposNotificacion() {
    return new Promise(resolve => {
      this.catalogoService.getTiposNotificacion().subscribe({
        next: data => {
          this.tiposNotificacion = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarEstadosAsistencia() {
    return new Promise(resolve => {
      this.catalogoService.getEstadosAsistencia().subscribe({
        next: data => {
          this.estadosAsistencia = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarCargos() {
    return new Promise(resolve => {
      this.catalogoService.getCargos().subscribe({
        next: data => {
          this.cargos = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarTiposDocumento() {
    return new Promise(resolve => {
      this.catalogoService.getTiposDocumento().subscribe({
        next: data => {
          this.tiposDocumento = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarEstadosCivil() {
    return new Promise(resolve => {
      this.catalogoService.getEstadosCiviles().subscribe({
        next: data => {
          this.estadosCivil = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarSexos() {
    return new Promise(resolve => {
      this.catalogoService.getSexos().subscribe({
        next: data => {
          this.sexos = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  cargarTiposVinculo() {
    return new Promise(resolve => {
      this.catalogoService.getTiposVinculo().subscribe({
        next: data => {
          this.tiposVinculo = data;
          resolve();
        },
        error: () => resolve()
      });
    });
  }
  filtrarItems(items) {
    const filters = this.currentFilters;
    if (filters.estado === 'activos') {
      return items.filter(item => item.estado === true);
    }
    if (filters.estado === 'inactivos') {
      return items.filter(item => item.estado === false);
    }
    return items;
  }
  actualizarRegistroLocal(id, nuevoEstado) {
    const updateItem = items => {
      const index = items.findIndex(item => this.getRegistroId(item) === id);
      if (index !== -1) {
        items[index] = {
          ...items[index],
          estado: nuevoEstado
        };
      }
      return [...items];
    };
    if (this.currentEntityType) {
      const dataMap = {
        tipo_medida: this.tiposMedida,
        institucion: this.instituciones,
        estado_denuncia: this.estadosDenuncia,
        tipo_conflicto: this.tiposConflicto,
        tipo_notificacion: this.tiposNotificacion,
        estado_asistencia: this.estadosAsistencia,
        cargo: this.cargos,
        tipo_documento: this.tiposDocumento,
        estado_civil: this.estadosCivil,
        sexo: this.sexos,
        tipo_vinculo: this.tiposVinculo
      };
      const items = dataMap[this.currentEntityType];
      if (items) {
        const updated = updateItem([...items]);
        dataMap[this.currentEntityType] = updated;
      }
    }
  }
  obtenerPorId(id) {
    return this.currentEntityData.find(item => this.getRegistroId(item) === id);
  }
  getEntityData(entityId) {
    const dataMap = {
      tipo_medida: this.tiposMedida,
      institucion: this.instituciones,
      estado_denuncia: this.estadosDenuncia,
      tipo_conflicto: this.tiposConflicto,
      tipo_notificacion: this.tiposNotificacion,
      estado_asistencia: this.estadosAsistencia,
      cargo: this.cargos,
      tipo_documento: this.tiposDocumento,
      estado_civil: this.estadosCivil,
      sexo: this.sexos,
      tipo_vinculo: this.tiposVinculo
    };
    return dataMap[entityId] || [];
  }
  // Agrega estos métodos
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
      this.searchResults = [{
        title: 'Configuraciones del Sistema',
        description: 'Gestionar configuraciones',
        icon: '⚙️'
      }];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  descargarReporte() {
    const reporte = JSON.stringify(this.currentEntityData, null, 2);
    const blob = new Blob([reporte], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte_${this.currentEntityType}_${new Date().toISOString()}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
    this.notificationService.success('Reporte generado', 'Reporte descargado exitosamente');
  }
  exportarExcel() {
    this.notificationService.info('Exportar Excel', 'Exportando a Excel...');
  }
  exportarPDF() {
    this.notificationService.info('Exportar PDF', 'Exportando a PDF...');
  }
  getEstadoClass(estado) {
    return estado ? 'estado-activo' : 'estado-inactivo';
  }
  getEstadoText(estado) {
    return estado ? 'Activo' : 'Inactivo';
  }
  getRegistroId(registro) {
    if (!registro) return 0;
    const idFields = [`${this.currentEntityType}_id`, `id_${this.currentEntityType}`, `${this.currentEntityType?.replace('_', '')}_id`, 'cargo_id', 'genero_id', 'id'];
    for (const field of idFields) {
      if (registro[field] !== undefined && registro[field] !== null) {
        return Number(registro[field]);
      }
    }
    for (const key in registro) {
      if (key.toLowerCase().includes('id') && registro[key] !== undefined && registro[key] !== null) {
        return Number(registro[key]);
      }
    }
    return 0;
  }
  cambiarPaginaNumero(pagina) {
    if (typeof pagina === 'number') {
      this.cambiarPagina(pagina);
    }
  }
  getNombreValue() {
    return this.currentEntityType === 'cargo' ? this.formData.nombre_cargo || '' : this.formData.nombre || '';
  }
  setNombreValue(value) {
    if (this.currentEntityType === 'cargo') {
      this.formData.nombre_cargo = value;
    } else {
      this.formData.nombre = value;
    }
  }
  getNombreField() {
    return this.currentEntityType === 'cargo' ? 'nombre_cargo' : 'nombre';
  }
  abrirModalCrear(entityType) {
    if (!this.puedeModificarCatalogos) {
      this.notificationService.error('Permisos insuficientes', 'No tiene permisos para crear registros');
      return;
    }
    this.currentEntityType = entityType;
    this.isEditing = false;
    this.modalTitle = `Nuevo ${this.currentEntityName}`;
    this.resetForm();
    this.showModal = true;
  }
  abrirModalEditar(entityType, id) {
    if (!this.puedeModificarCatalogos) {
      this.notificationService.error('Permisos insuficientes', 'No tiene permisos para editar registros');
      return;
    }
    const registro = this.obtenerPorId(id);
    if (!registro) return;
    this.currentEntityType = entityType;
    this.currentId = id;
    this.isEditing = true;
    this.modalTitle = `Editar ${this.currentEntityName}`;
    this.formData = {
      nombre: registro.nombre || '',
      nombre_cargo: registro.nombre_cargo || '',
      descripcion: registro.descripcion || '',
      activo: registro.estado ?? registro.activo ?? true
    };
    this.showModal = true;
  }
  static ɵfac = function CatalogosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_19__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_notificationold_service__WEBPACK_IMPORTED_MODULE_20__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_catalogos_state_service__WEBPACK_IMPORTED_MODULE_21__.CatalogosStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_catalogos_crud_service__WEBPACK_IMPORTED_MODULE_22__.CatalogosCrudService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_catalogos_pagination_service__WEBPACK_IMPORTED_MODULE_23__.CatalogosPaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_catalogos_validation_service__WEBPACK_IMPORTED_MODULE_24__.CatalogosValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_25__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_26__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_27__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: CatalogosComponent,
    selectors: [["app-catalogos"]],
    decls: 26,
    vars: 20,
    consts: [["entityForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], ["class", "permissions-banner", 3, "admin", 4, "ngIf"], [1, "catalogos-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn-icon"], [1, "entities-grid"], ["class", "entity-card", 4, "ngFor", "ngForOf"], ["class", "entity-content", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed", "isDarkTheme"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el sistema...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "permissions-banner"], [1, "permissions-info"], [1, "user-type"], [1, "user-type-icon"], [1, "user-type-text"], [1, "permissions-status"], [1, "entity-card"], [1, "entity-card-header"], [1, "entity-icon"], [1, "entity-count"], [1, "entity-card-body"], [1, "entity-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-secondary", "btn-sm", 3, "click", "disabled"], [1, "entity-content"], [1, "entity-header"], [1, "entity-title"], [1, "entity-subtitle"], [1, "entity-actions-buttons"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["class", "filter-container", 4, "ngIf"], ["class", "loading-section", 4, "ngIf"], ["class", "stats-container", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "filter-container"], [1, "filter-options"], [1, "filter-btn", 3, "click"], [1, "loading-section"], [1, "loading-spinner", "small"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "btn", "btn-refresh", 3, "click"], [1, "table-responsive"], [1, "data-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "nombre-cell"], [1, "estado-badge"], [1, "toggle-estado-btn", 3, "click", "disabled"], [1, "actions-buttons"], [1, "btn-action", "edit", 3, "click", "disabled"], [1, "btn-action", "delete", 3, "click", "disabled"], [1, "descripcion-cell"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-group"], [1, "required"], ["type", "text", "name", "nombre", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-group", 4, "ngIf"], [1, "switch"], ["type", "checkbox", "name", "activo", 3, "ngModelChange", "ngModel"], [1, "slider"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["name", "descripcion", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel", "disabled"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["type", "text", "placeholder", "ELIMINAR", "autofocus", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-danger", 3, "click", "disabled"]],
    template: function CatalogosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("toggleSidebar", function CatalogosComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function CatalogosComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("openSearchModal", function CatalogosComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, CatalogosComponent_div_4_Template, 13, 6, "div", 5)(5, CatalogosComponent_div_5_Template, 5, 7, "div", 6)(6, CatalogosComponent_div_6_Template, 9, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u2699\uFE0F Configuraciones del Sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "Gestione las tablas maestras y configuraciones de SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function CatalogosComponent_Template_button_click_15_listener() {
          return ctx.descargarReporte();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, CatalogosComponent_div_20_Template, 16, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, CatalogosComponent_div_21_Template, 18, 11, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, CatalogosComponent_div_22_Template, 28, 11, "div", 19)(23, CatalogosComponent_div_23_Template, 22, 3, "div", 19)(24, CatalogosComponent_div_24_Template, 19, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](25, "app-footer", 20);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.puedeVerCatalogos);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.cargandoDatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.cargandoDatos ? "Cargando..." : "Generar Reporte", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.ENTIDADES);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.currentEntityType);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showConfirmacionFisicaModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed)("isDarkTheme", ctx.currentTheme === "dark");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent, _shared_pipes_format_model_name_pipe__WEBPACK_IMPORTED_MODULE_14__.FormatModelNamePipe],
    styles: [".dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 280px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) transparent;\n  width: calc(100% - 280px);\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n  width: calc(100% - 90px);\n}\n.search-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  box-shadow: var(--shadow-xl);\n  z-index: 2001;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 0 16px;\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]:focus-within {\n  background: var(--primary-light);\n  box-shadow: 0 0 0 2px var(--primary-light);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.7;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 16px 0;\n  font-size: 16px;\n  color: inherit;\n  outline: none;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-modal-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 18px;\n  padding: 4px;\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: all 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-modal-header[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-bottom: 1px solid var(--border-light);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  padding-left: 32px;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover   .result-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 0.3s;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.search-modal[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.search-modal[_ngcontent-%COMP%]   .search-empty[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.chatbot-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  pointer-events: auto !important;\n  z-index: 10001 !important;\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode) {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode)   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-container[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-header[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-content[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%] {\n  display: none !important;\n  visibility: hidden !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n}\n.chatbot-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  z-index: 10002;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 800px;\n  width: auto;\n}\n.chatbot-container[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.chatbot-container.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2);\n  border-color: rgba(255, 50, 50, 0.3);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3);\n  border-color: rgba(255, 50, 50, 0.5);\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, var(--primary-hover), var(--security));\n}\n.chatbot-footer[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chatbot-minimized[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  z-index: 10002;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  pointer-events: auto !important;\n  z-index: 10003 !important;\n}\n.chatbot-minimized[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-lg);\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.permissions-banner[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  color: white;\n}\n.permissions-banner.admin[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n.permissions-banner[_ngcontent-%COMP%]   .permissions-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.permissions-banner[_ngcontent-%COMP%]   .permissions-info[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.permissions-banner[_ngcontent-%COMP%]   .permissions-info[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%]   .user-type-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.permissions-banner[_ngcontent-%COMP%]   .permissions-info[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%]   .user-type-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.permissions-banner[_ngcontent-%COMP%]   .permissions-info[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%]   .user-type-text[_ngcontent-%COMP%]   .permissions-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.8;\n  margin-left: 6px;\n}\n.catalogos-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.entities-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n@media (max-width: 768px) {\n  .entities-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]:hover   .entity-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-header[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: var(--primary-light);\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n  color: var(--primary);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n  color: var(--text-primary);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-header[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  background: var(--primary-light);\n  color: var(--primary);\n  padding: 4px 8px;\n  border-radius: 12px;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0 0 16px 0;\n  font-size: 14px;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.3s;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.entities-grid[_ngcontent-%COMP%]   .entity-card[_ngcontent-%COMP%]   .entity-card-body[_ngcontent-%COMP%]   .entity-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.entity-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--card-border);\n  overflow: hidden;\n  margin-top: 24px;\n}\n.entity-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.entity-header[_ngcontent-%COMP%]   .entity-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: var(--text-primary);\n}\n.entity-header[_ngcontent-%COMP%]   .entity-title[_ngcontent-%COMP%]   .entity-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.entity-header[_ngcontent-%COMP%]   .entity-actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.filter-container[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.filter-container[_ngcontent-%COMP%]   .filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-container[_ngcontent-%COMP%]   .filter-options[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.filter-container[_ngcontent-%COMP%]   .filter-options[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  transform: translateY(-1px);\n}\n.filter-container[_ngcontent-%COMP%]   .filter-options[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  border: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n  border-color: var(--primary);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  background: var(--bg-tertiary);\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  transform: rotate(180deg);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 600px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nombre-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .descripcion-cell[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.table-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.table-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.estado-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge.estado-activo[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.estado-inactivo[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.toggle-estado-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: 8px;\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.toggle-estado-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  transform: scale(1.05);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: var(--shadow-sm);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: var(--shadow-sm);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  font-weight: 600;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n}\n.loading-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.loading-section[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n.loading-section[_ngcontent-%COMP%]   .loading-spinner.small[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-width: 2px;\n}\n.loading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 220px;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 20px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 15px;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover {\n  border-color: var(--input-border-hover);\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.5;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--border-color);\n  transition: 0.3s;\n  border-radius: 34px;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background: white;\n  transition: 0.3s;\n  border-radius: 50%;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 450px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p.confirm-warning[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 500;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-name[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n  margin: 10px 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-warning-bold[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-instruction[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  color: var(--text-secondary);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%]   .confirm-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  background: var(--input-bg);\n  border: 2px solid var(--border-color);\n  color: var(--text-primary);\n  border-radius: 8px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%]   .confirm-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--danger);\n  box-shadow: var(--input-error-shadow);\n  outline: none;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.btn-sm[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .catalogos-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .entity-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .entity-header[_ngcontent-%COMP%]   .entity-actions-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .entities-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    max-width: 95%;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .entity-actions-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .entity-actions-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .actions-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .confirm-modal[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 16px;\n  position: relative;\n  overflow: hidden;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  transform: translate(-50%, -50%);\n  transition: width 0.4s, height 0.4s;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:active::after {\n  width: 100px;\n  height: 100px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n  border: 1px solid transparent;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:disabled:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: none;\n  box-shadow: none;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n  border: 1px solid transparent;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: var(--shadow-md);\n  border-color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:disabled:hover {\n  background: var(--danger-light);\n  color: var(--danger);\n  transform: none;\n  box-shadow: none;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n  border: 1px solid transparent;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: var(--info);\n  color: white;\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n@media (max-width: 768px) {\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover, \n   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover, \n   .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px) scale(1.02);\n  }\n}\n@media (max-width: 480px) {\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n    gap: 6px;\n    flex-wrap: wrap;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 12px;\n    border-radius: 6px;\n  }\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jYXRhbG9nb3MvcGFnZXMvY2F0YWxvZ29zLWxpc3QvY2F0YWxvZ29zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUFURjtBQVdFO0VBRUksaUJBQUE7QUFWTjtBQWtCQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQWhCRjtBQWtCRTtFQUNFLFVBQUE7QUFoQko7QUFtQkU7RUFDRSx1QkFBQTtBQWpCSjtBQW9CRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUFsQko7QUFvQkk7RUFDRSxnQ0FBQTtBQWxCTjtBQXNCRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFwQko7QUEyQkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBZUE7RUFhSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUF6Qko7QUFNQTtFQXVCSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBMUJKO0FBTEE7RUFtQ0ksYUFBQTtFQUNBLDRDQUFBO0FBM0JKO0FBVEE7RUF1Q00sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUEzQk47QUE2Qk07RUFD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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENBVMODwoFMT0dPUyAtIEVTVElMT1MgQ09OIFZBUklBQkJMRVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE5vdGE6IFRvZGFzIGxhcyB2YXJpYWJsZXMgQ1NTIHZpZW5lbiBkZWZpbmlkYXMgZW4gdGhlbWVzLmxlc3Ncbi8vIFNlIGFjY2VkZW4gbWVkaWFudGUgdmFyKC0tbm9tYnJlLXZhcmlhYmxlKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gREFTSEJPQVJEIENPTlRBSU5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1BSU4gQ09OVEVOVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNjZweDtcbiAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAuZGFzaGJvYXJkLWNvbnRhaW5lci5zaWRlYmFyLWNvbGxhcHNlZCAmIHtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFQVJDSCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWFyY2gtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG5cbiAgLnNlYXJjaC1tb2RhbC1iYWNrZHJvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgIHotaW5kZXg6IDIwMDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLnNlYXJjaC1tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtbW9kYWwtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLW1vZGFsLWlucHV0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjRweDtcbiAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuXG4gICAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtZGV0YWlscyB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLnJlc3VsdC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaC1lbXB0eSB7XG4gICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENIQVRCT1QgU0lHUEFaXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNoYXRib3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0Ym90LWNvbnRhaW5lcixcbiAgICAuY2hhdGJvdC1oZWFkZXIsXG4gICAgLmNoYXRib3QtY29udGVudCxcbiAgICAuY2hhdGJvdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICY6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1oZWFkZXIge1xuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMyk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMyk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRlbnQge1xuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWhvdmVyKSwgdmFyKC0tc2VjdXJpdHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcblxuICAuZm9vdGVyLXN0YXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjVweDtcblxuICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LW1pbmltaXplZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5tb2RhbC1vdmVybGF5LXNpZ3Bhei5taW5pbWl6ZWQtbW9kZSAmIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDAwMyAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIH1cblxuICAuYnViYmxlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICAuYnViYmxlLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuYnViYmxlLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuXG4gICAgLmJ1YmJsZS1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnViYmxlQXBwZWFyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc3BpblNsb3cge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQRVJNSVNTSU9OUyBCQU5ORVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGVybWlzc2lvbnMtYmFubmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICYuYWRtaW4ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIgMCUsICNmNTU3NmMgMTAwJSk7XG4gIH1cblxuICAucGVybWlzc2lvbnMtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcblxuICAgIC51c2VyLXR5cGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLnVzZXItdHlwZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci10eXBlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgLnBlcm1pc3Npb25zLXN0YXR1cyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERSBDQVTDg8KBTE9HT1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY2F0YWxvZ29zLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFIENBVMODwoFMT0dPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLnBhZ2Utc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHUklEIERFIEVOVElEQURFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lbnRpdGllcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZW50aXR5LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KSBzY2FsZSgxLjAyKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgIC5lbnRpdHktaWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMTBkZWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lbnRpdHktY2FyZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAuZW50aXR5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5lbnRpdHktY291bnQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVudGl0eS1jYXJkLWJvZHkge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5lbnRpdHktYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgIC5idG4ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGdhcDogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTklETyBERSBFTlRJREFEIFNFTEVDQ0lPTkFEQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lbnRpdHktY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5lbnRpdHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAuZW50aXR5LXRpdGxlIHtcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAuZW50aXR5LXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gIH1cblxuICAuZW50aXR5LWFjdGlvbnMtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJTFRST1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlsdGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcblxuICAuZmlsdGVyLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5maWx0ZXItYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRMODwo1TVElDQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLnN0YXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQUJMQSBERSBSRUdJU1RST1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGFibGUtY29udGFpbmVyIHtcbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC50YWJsZS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLmJ0bi1yZWZyZXNoIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgLm5vbWJyZS1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVzY3JpcGNpb24tY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZW1wdHktc3RhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDI0cHg7XG5cbiAgICAuZW1wdHktaWNvbiB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRE9TIFkgQkFER0VTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVzdGFkby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuZXN0YWRvLWFjdGl2byB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5lc3RhZG8taW5hY3Rpdm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cbn1cblxuLnRvZ2dsZS1lc3RhZG8tYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQUNDSU9ORVMgREUgVEFCTEFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYWN0aW9ucy1jZWxsIHtcbiAgLmFjdGlvbnMtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5idG4tYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgJi5lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kZWxldGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFHSU5BQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2luYXRpb24tcGFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIFNFQ1RJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9hZGluZy1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG5cbiAgLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuXG4gICAgJi5zbWFsbCB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyMjBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAzMnB4O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMjBweCAzMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPUk1VTEFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWlucHV0LFxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWJvcmRlci1ob3Zlcik7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi8vIFN3aXRjaFxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuXG4gIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcblxuICAgICY6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgbGVmdDogM3B4O1xuICAgICAgYm90dG9tOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBDT05GSVJNQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29uZmlybS1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmNvbmZpcm0taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtaGVhZGVyLWJnKTtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29uZmlybS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgJi5jb25maXJtLXdhcm5pbmcge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uZmlybS1uYW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuXG4gICAgLmNvbmZpcm0td2FybmluZy1ib2xkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC5jb25maXJtLWluc3RydWN0aW9uIHtcbiAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAuY29uZmlybS1pbnB1dC1ncm91cCB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgLmNvbmZpcm0taW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZXJyb3Itc2hhZG93KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgfVxufVxuXG4uYnRuLXNtIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jYXRhbG9nb3MtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmVudGl0eS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5lbnRpdHktYWN0aW9ucy1idXR0b25zIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5lbnRpdGllcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmVudGl0eS1hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jb25maXJtLW1vZGFsIHtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgREUgQUNDScODwpNOIEVOIFRBQkxBIERFIENBVMODwoFMT0dPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQ29udGVuZWRvciBkZSBhY2Npb25lc1xuLmFjdGlvbnMtY2VsbCB7XG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvLyBCb3TDg8KzbiBkZSBhY2Npw4PCs24gYmFzZVxuICAgIC5idG4tYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgLy8gRWZlY3RvIHJpcHBsZSBhbCBoYWNlciBjbGlja1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMsIGhlaWdodCAwLjRzO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdMODwrNuIEVkaXRhclxuICAgICAgJi5lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjA1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdMODwrNuIEVsaW1pbmFyXG4gICAgICAmLmRlbGV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgc2NhbGUoMS4wNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3TDg8KzbiBWZXIgKG9wY2lvbmFsKVxuICAgICAgJi52aWV3IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjA1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFSSUFOVEUgQ09OIFRFWFRPIChwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFjdGlvbnMtY2VsbCB7XG4gICAgLmFjdGlvbnMtYnV0dG9ucyB7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLmJ0bi1hY3Rpb24ge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgJi5lZGl0LCAmLmRlbGV0ZSwgJi52aWV3IHtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBUklBTlRFIFBBUkEgTcODwpNWSUxFUyAoY29uIHRleHRvKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWN0aW9ucy1jZWxsIHtcbiAgICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU0lHUEFaIC0gRVNUSUxPUyDDg8KaTklDT1MgKENPTVBMRVRPKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFyaWFibGVzIGludGVybmFzIChubyBpbnRlcmZpZXJlbiBjb24gZ2xvYmFsZXMpXG5Ac2lncGF6LXByaW1hcnk6ICM0ZjQ2ZTU7XG5Ac2lncGF6LXNlY29uZGFyeTogIzYzNjZmMTtcbkBzaWdwYXotYWNjZW50OiAjMDBmZjg4O1xuQHNpZ3Bhei1kYW5nZXI6ICNlZjQ0NDQ7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPVkVSTEFZIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAvLyBTb2xvIG1vc3RyYXIgZm9uZG8gY3VhbmRvIGVsIG1vZGFsIGVzdMODwqEgYWJpZXJ0b1xuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VhbmRvIGVzdMODwqEgbWluaW1pemFkbzogc2luIGZvbmRvIG5pIGJsb3F1ZW9cbiAgJi5taW5pbWl6ZWQtbW9kZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBTb2xvIGxhIGJ1cmJ1amEgZXMgaW50ZXJhY3RpdmFcbiAgICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBhbmltYXRpb246IG1vZGFsU2xpZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLm1vZGFsLWJ0biB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICB9XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXRvb2x0aXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6IDEwMDAyO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICB9XG5cbiAgICAgICYubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XG4gICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC41KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDVUVSUE8gREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZGFcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotc2Vjb25kYXJ5LCBAc2lncGF6LXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFzZWd1cmFyIHF1ZSBlbCBjb21wb25lbnRlIGludGVybm8gb2N1cGUgdG9kbyBlbCBhbmNob1xuICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVUkJVSkEgRkxPVEFOVEUgKE1JTklNSVpBRE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmJ1YmJsZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuYnViYmxlLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLmNsb3NlLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gIH1cblxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGNvbG9yOiBAc2lncGF6LXByaW1hcnk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsU2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])])]
    }
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators_require_permissions_decorator__WEBPACK_IMPORTED_MODULE_13__.RequierePermisos)([1, 2])], CatalogosComponent.prototype, "crearRegistro", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_decorators_require_permissions_decorator__WEBPACK_IMPORTED_MODULE_13__.RequierePermisos)([1, 2])], CatalogosComponent.prototype, "actualizarRegistro", null);

/***/ }),

/***/ 98170:
/*!********************************************************************!*\
  !*** ./src/app/modules/catalogos/constants/catalogos.constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIRMACION_ELIMINAR_FISICO: () => (/* binding */ CONFIRMACION_ELIMINAR_FISICO),
/* harmony export */   ENTIDADES_CATALOGOS: () => (/* binding */ ENTIDADES_CATALOGOS),
/* harmony export */   ITEMS_POR_PAGINA: () => (/* binding */ ITEMS_POR_PAGINA),
/* harmony export */   ITEMS_POR_PAGINA_DEFAULT: () => (/* binding */ ITEMS_POR_PAGINA_DEFAULT),
/* harmony export */   PAGINA_DEFAULT: () => (/* binding */ PAGINA_DEFAULT)
/* harmony export */ });
const ENTIDADES_CATALOGOS = [{
  id: 'tipo_medida',
  name: 'Tipos de Medida',
  icon: '📏',
  tieneDescripcion: true
}, {
  id: 'institucion',
  name: 'Instituciones',
  icon: '🏛️',
  tieneDescripcion: true
}, {
  id: 'estado_denuncia',
  name: 'Estados Denuncia',
  icon: '📋',
  tieneDescripcion: false
}, {
  id: 'tipo_conflicto',
  name: 'Tipos de Conflicto',
  icon: '⚖️',
  tieneDescripcion: true
}, {
  id: 'tipo_notificacion',
  name: 'Tipos Notificación',
  icon: '📧',
  tieneDescripcion: true
}, {
  id: 'estado_asistencia',
  name: 'Estados Asistencia',
  icon: '✅',
  tieneDescripcion: false
}, {
  id: 'cargo',
  name: 'Cargos',
  icon: '👔',
  tieneDescripcion: true
}, {
  id: 'tipo_documento',
  name: 'Tipos Documento',
  icon: '📄',
  tieneDescripcion: true
}, {
  id: 'estado_civil',
  name: 'Estados Civiles',
  icon: '💍',
  tieneDescripcion: false
}, {
  id: 'sexo',
  name: 'Sexos',
  icon: '⚧️',
  tieneDescripcion: false
}, {
  id: 'tipo_vinculo',
  name: 'Tipos Vínculo',
  icon: '🔗',
  tieneDescripcion: true
}];
const ITEMS_POR_PAGINA = [5, 10, 25, 50, 100];
const PAGINA_DEFAULT = 1;
const ITEMS_POR_PAGINA_DEFAULT = 10;
const CONFIRMACION_ELIMINAR_FISICO = 'ELIMINAR';

/***/ })

}]);
//# sourceMappingURL=src_app_modules_catalogos_pages_catalogos-list_catalogos_component_ts.js.map