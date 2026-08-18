"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_personal_pages_personal_component_ts"],{

/***/ 63043:
/*!********************************************************************!*\
  !*** ./src/app/modules/personal/services/personal-sync.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalSyncService: () => (/* binding */ PersonalSyncService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);






class PersonalSyncService {
  http;
  notificationService;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/personal`;
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
  }
  /**
   * Buscar personas disponibles para crear personal
   * GET /api/v1/personal/personas-disponibles
   */
  buscarPersonasDisponibles(termino = '') {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (termino && termino.length >= 2) {
      params = params.set('q', termino);
    }
    return this.http.get(`${this.apiUrl}/personas-disponibles`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      console.log('📥 Personas disponibles:', response);
      if (response.success) {
        return response.data || [];
      }
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error buscando personas disponibles:', error);
      this.notificationService.showError('Error al buscar personas disponibles');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }));
  }
  /**
   * Verificar disponibilidad de una persona específica
   * GET /api/v1/personal/verificar-disponibilidad/{personaId}
   */
  verificarDisponibilidad(personaId) {
    return this.http.get(`${this.apiUrl}/verificar-disponibilidad/${personaId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data || {
      disponible: false
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error verificando disponibilidad:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
        disponible: false,
        razon: 'Error en la verificación'
      });
    }));
  }
  /**
   * Obtener estadísticas de personal
   * GET /api/v1/personal/estadisticas
   */
  getEstadisticas() {
    return this.http.get(`${this.apiUrl}/estadisticas`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.data || {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error obteniendo estadísticas:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({});
    }));
  }
  /**
   * Búsqueda avanzada
   * GET /api/v1/personal/buscar
   */
  buscarAvanzado(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${this.apiUrl}/buscar`, {
      params: httpParams
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error en búsqueda avanzada:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
        data: [],
        meta: {
          total: 0
        }
      });
    }));
  }
  /**
   * Validar datos antes de crear personal
   */
  validarDatosCreacion(data) {
    const errores = [];
    if (!data.persona_id) {
      errores.push('Debe seleccionar una persona');
    }
    if (!data.cargo_id) {
      errores.push('Debe seleccionar un cargo');
    }
    if (!data.fecha_ingreso) {
      errores.push('La fecha de ingreso es requerida');
    }
    // Validar que la fecha de egreso no sea anterior a la de ingreso
    if (data.fecha_ingreso && data.fecha_egreso) {
      const ingreso = new Date(data.fecha_ingreso);
      const egreso = new Date(data.fecha_egreso);
      if (egreso < ingreso) {
        errores.push('La fecha de egreso no puede ser anterior a la fecha de ingreso');
      }
    }
    return errores;
  }
  static ɵfac = function PersonalSyncService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonalSyncService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PersonalSyncService,
    factory: PersonalSyncService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 77029:
/*!**************************************************************!*\
  !*** ./src/app/modules/personal/pages/personal.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalListComponent: () => (/* binding */ PersonalListComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../services/personal.service */ 45322);
/* harmony import */ var _services_personal_sync_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/personal-sync.service */ 63043);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);























function PersonalListComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 53)(1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 55)(4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function PersonalListComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PersonalListComponent_div_4_div_11_div_1_Template, 8, 3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function PersonalListComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function PersonalListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 41)(3, "div", 42)(4, "div", 43)(5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keyup.enter", function PersonalListComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PersonalListComponent_div_4_button_8_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, PersonalListComponent_div_4_div_11_Template, 2, 1, "div", 48)(12, PersonalListComponent_div_4_div_12_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function PersonalListComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 67)(7, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
}
function PersonalListComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 71)(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function PersonalListComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 74)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PersonalListComponent_div_5_div_4_div_9_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function PersonalListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PersonalListComponent_div_5_div_2_Template, 17, 0, "div", 61)(3, PersonalListComponent_div_5_div_3_Template, 3, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, PersonalListComponent_div_5_div_4_Template, 10, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function PersonalListComponent_div_6_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_6_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      ctx_r1.personaSearchTerm = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.personasDisponibles = []);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 99)(1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Buscando personas disponibles...");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function PersonalListComponent_div_6_div_23_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("error", function PersonalListComponent_div_6_div_23_div_1_img_2_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onImageError(persona_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "data:image/jpeg;base64," + persona_r11.foto_cifrada, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function PersonalListComponent_div_6_div_23_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", persona_r11.nombres == null ? null : persona_r11.nombres.charAt(0), "", persona_r11.apellidos == null ? null : persona_r11.apellidos.charAt(0), " ");
  }
}
function PersonalListComponent_div_6_div_23_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" (", persona_r11.tipo_documento, ") ");
  }
}
function PersonalListComponent_div_6_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_6_div_23_div_1_Template_div_click_0_listener() {
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.seleccionarPersona(persona_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PersonalListComponent_div_6_div_23_div_1_img_2_Template, 1, 1, "img", 106)(3, PersonalListComponent_div_6_div_23_div_1_span_3_Template, 2, 2, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 108)(5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 109)(8, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, PersonalListComponent_div_6_div_23_div_1_span_11_Template, 2, 1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 112)(13, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\u2713 Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const persona_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", persona_r11.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !persona_r11.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](persona_r11.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", persona_r11.numero_documento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", persona_r11.tipo_documento);
  }
}
function PersonalListComponent_div_6_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PersonalListComponent_div_6_div_23_div_1_Template, 15, 5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.personasDisponibles);
  }
}
function PersonalListComponent_div_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 99)(1, "div", 117)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "\uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "No se encontraron personas disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, " No hay resultados para \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 121)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "\uD83D\uDCA1 Las personas deben:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "Estar activas en el sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, "No tener un registro de personal asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.personaSearchTerm);
  }
}
function PersonalListComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 99)(1, "div", 122)(2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Escriba para buscar personas disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "M\u00EDnimo 2 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function PersonalListComponent_div_6_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r1.personasDisponibles.length, " persona(s) disponible(s) ");
  }
}
function PersonalListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "h2", 65)(4, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, " Seleccionar Persona ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_6_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarBusquedaPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 86)(11, "div", 87)(12, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, " Buscar persona disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "(Solo personas activas sin personal asignado)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 90)(17, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_6_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personaSearchTerm, $event) || (ctx_r1.personaSearchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function PersonalListComponent_div_6_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onPersonaSearchChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, PersonalListComponent_div_6_button_20_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, PersonalListComponent_div_6_div_22_Template, 5, 0, "div", 94)(23, PersonalListComponent_div_6_div_23_Template, 2, 1, "div", 95)(24, PersonalListComponent_div_6_div_24_Template, 19, 1, "div", 94)(25, PersonalListComponent_div_6_div_25_Template, 8, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 96)(27, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_6_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarBusquedaPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, PersonalListComponent_div_6_span_29_Template, 2, 1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.searchingPersonas);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && ctx_r1.personasDisponibles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && ctx_r1.personasDisponibles.length === 0 && ctx_r1.personaSearchTerm.length >= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && !ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.personasDisponibles.length > 0);
  }
}
function PersonalListComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cargo_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", cargo_r13.cargo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", cargo_r13.nombre_cargo || cargo_r13.nombre, " ");
  }
}
function PersonalListComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "Cargando personal...");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function PersonalListComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 128)(1, "div", 129)(2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Total Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 129)(7, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "Activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 129)(12, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "Inactivos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 129)(17, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20, "A\u00F1os Promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.totalPersonal);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.personalActivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.personalInactivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.antiguedadPromedio);
  }
}
function PersonalListComponent_div_70_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 144)(3, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\uD83C\uDFF7\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td")(7, "div", 146)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td")(13, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "td")(22, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "td")(25, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "td", 150)(28, "div", 151)(29, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_tr_37_Template_button_click_29_listener() {
      const registro_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.verDetalles(registro_r16.personal_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_tr_37_Template_button_click_32_listener() {
      const registro_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.abrirModalEditar(registro_r16.personal_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](34, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_tr_37_Template_button_click_35_listener() {
      const registro_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.abrirModalEliminar(registro_r16.personal_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_tr_37_Template_button_click_38_listener() {
      const registro_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarContratoPDF(registro_r16.personal_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](40, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_tr_37_Template_button_click_41_listener() {
      const registro_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cambiarEstado(registro_r16.personal_id, !registro_r16.activo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const registro_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" PERS-", registro_r16.personal_id.toString().padStart(5, "0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"]((registro_r16.persona == null ? null : registro_r16.persona.nombre_completo) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("CI: ", (registro_r16.persona == null ? null : registro_r16.persona.numero_documento) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassMap"](ctx_r1.getCargoClass(registro_r16.cargo_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r1.getCargoNombre(registro_r16.cargo_id), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](17, 21, registro_r16.fecha_ingreso, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](registro_r16.fecha_egreso ? _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](20, 24, registro_r16.fecha_egreso, "dd/MM/yyyy") : "Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r1.calcularAntiguedad(registro_r16.fecha_ingreso), " a\u00F1os ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("badge-success", registro_r16.activo)("badge-danger", !registro_r16.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", registro_r16.activo ? "S\u00ED" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("btn-activar", !registro_r16.activo)("btn-desactivar", registro_r16.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinterpolate"](registro_r16.activo ? "Desactivar" : "Activar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](registro_r16.activo ? "\uD83D\uDD34" : "\uD83D\uDFE2");
  }
}
function PersonalListComponent_div_70_div_38_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_div_38_button_4_Template_button_click_0_listener() {
      const pagina_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("active", pagina_r19 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", pagina_r19 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", pagina_r19, " ");
  }
}
function PersonalListComponent_div_70_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 157)(1, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, PersonalListComponent_div_70_div_38_button_4_Template, 2, 4, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_div_38_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function PersonalListComponent_div_70_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 162)(1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "No hay personal registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "Comience registrando un nuevo miembro del personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_div_39_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.abrirModalCrear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, " Registrar primer personal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function PersonalListComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 132)(1, "div", 133)(2, "div", 134)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\uD83D\uDCCB Registro de Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 136)(8, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.validarContratos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, " Validar Contratos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_70_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReporteAntiguedad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\uD83D\uDCC8");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, " Reporte Antig\u00FCedad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 138)(17, "table", 139)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "Persona");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "F. Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "F. Egreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "Antig\u00FCedad");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "th", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](37, PersonalListComponent_div_70_tr_37_Template, 44, 27, "tr", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, PersonalListComponent_div_70_div_38_Template, 7, 3, "div", 142)(39, PersonalListComponent_div_70_div_39_Template, 11, 0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", ctx_r1.personal.length, " registros mostrados (", ctx_r1.totalPersonal, " total)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.personal);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.personal.length === 0);
  }
}
function PersonalListComponent_div_71_div_19_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "img", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("error", function PersonalListComponent_div_71_div_19_img_2_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onSelectedImageError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "data:image/jpeg;base64," + ctx_r1.personaSeleccionada.foto_cifrada, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function PersonalListComponent_div_71_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx_r1.personaSeleccionada.nombres == null ? null : ctx_r1.personaSeleccionada.nombres.charAt(0), "", ctx_r1.personaSeleccionada.apellidos == null ? null : ctx_r1.personaSeleccionada.apellidos.charAt(0), " ");
  }
}
function PersonalListComponent_div_71_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_71_div_19_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.limpiarPersonaSeleccionada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_71_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 202)(1, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PersonalListComponent_div_71_div_19_img_2_Template, 1, 1, "img", 204)(3, PersonalListComponent_div_71_div_19_span_3_Template, 2, 2, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 206)(5, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PersonalListComponent_div_71_div_19_button_9_Template, 2, 0, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.personaSeleccionada.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.personaSeleccionada.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.personaSeleccionada.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.personaSeleccionada.numero_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
  }
}
function PersonalListComponent_div_71_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_71_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.abrirBusquedaPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, " Buscar persona disponible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_71_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cargo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", cargo_r25.cargo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", cargo_r25.nombre_cargo || cargo_r25.nombre, " ");
  }
}
function PersonalListComponent_div_71_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 214)(1, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.errorFecha);
  }
}
function PersonalListComponent_div_71_span_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function PersonalListComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_71_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 86)(9, "form", 169, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function PersonalListComponent_div_71_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.isEditing ? ctx_r1.actualizarPersonal() : ctx_r1.crearPersonal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 170)(12, "div", 171)(13, "div", 87)(14, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, " Persona ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, PersonalListComponent_div_71_div_19_Template, 10, 5, "div", 174)(20, PersonalListComponent_div_71_button_20_Template, 4, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.persona_id, $event) || (ctx_r1.personalFormData.persona_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 87)(23, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " Cargo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "select", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_select_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.cargo_id, $event) || (ctx_r1.personalFormData.cargo_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "Seleccione cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](30, PersonalListComponent_div_71_option_30_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 87)(32, "label", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, " Fecha de Ingreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "input", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.fecha_ingreso, $event) || (ctx_r1.personalFormData.fecha_ingreso = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PersonalListComponent_div_71_Template_input_change_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.validarFechas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 87)(38, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, " Fecha de Egreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.fecha_egreso, $event) || (ctx_r1.personalFormData.fecha_egreso = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PersonalListComponent_div_71_Template_input_change_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.validarFechas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 171)(42, "div", 87)(43, "label", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, " Fuente de Registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "select", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_select_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.fuente_registro, $event) || (ctx_r1.personalFormData.fuente_registro = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "option", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49, "Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "option", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](51, "Importaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53, "Migraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 87)(55, "div", 189)(56, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.activo, $event) || (ctx_r1.personalFormData.activo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](58, " Activo en el sistema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 87)(60, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "textarea", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_div_71_Template_textarea_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.personalFormData.observaciones, $event) || (ctx_r1.personalFormData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](63, PersonalListComponent_div_71_div_63_Template, 5, 1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "div", 195)(65, "div", 196)(66, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_71_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.validarContratoIndividual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](68, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, " Validar Contrato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "div", 198)(71, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_71_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](72, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](74, PersonalListComponent_div_71_span_74_Template, 2, 0, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const personalForm_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "\u270F\uFE0F Editar Registro de Personal" : "\uD83D\uDC64 Nuevo Registro de Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.personaSeleccionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.personaSeleccionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.persona_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.cargo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.cargos);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.fecha_ingreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.fecha_egreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.fuente_registro);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalFormData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.errorFecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx_r1.personalFormData.persona_id || !ctx_r1.personalFormData.cargo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !personalForm_r26.form.valid || ctx_r1.errorFecha || ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditing ? "Actualizar" : "Guardar", " Registro ");
  }
}
function PersonalListComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 165)(1, "div", 217)(2, "div", 218)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\u26A0\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_72_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 219)(9, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "\u00BFEst\u00E1 seguro de eliminar este registro de personal?");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "p", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, " Esta acci\u00F3n marcar\u00E1 el registro como inactivo, pero mantendr\u00E1 el historial. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 222)(16, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_72_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_72_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.eliminarPersonal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function PersonalListComponent_div_73_div_38_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 237)(1, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", stat_r30.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](stat_r30.value);
  }
}
function PersonalListComponent_div_73_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PersonalListComponent_div_73_div_38_div_7_div_1_Template, 5, 2, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.reporteSeleccionado.estadisticas);
  }
}
function PersonalListComponent_div_73_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 231)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 232)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, PersonalListComponent_div_73_div_38_div_7_Template, 2, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 234)(9, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_div_38_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.exportarReportePDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, " Exportar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_div_38_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.exportarReporteExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, " Exportar Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_div_38_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReporteCompleto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20, " Generar Completo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.reporteSeleccionado.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Reporte generado: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](6, 3, ctx_r1.reporteSeleccionado.fecha, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.reporteSeleccionado.estadisticas);
  }
}
function PersonalListComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\uD83D\uDCCA Reportes de Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarReportesModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 86)(9, "div", 225)(10, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReportePorCargo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "\uD83D\uDC54");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "Por Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "Distribuci\u00F3n por puestos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReporteAntiguedad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "\uD83D\uDCC8");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Antig\u00FCedad");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "Tiempo de servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_Template_div_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReporteActivos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, "Personal Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30, "Estado actual del personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_73_Template_div_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.generarReporteRotacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "Rotaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37, "Ingresos y egresos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, PersonalListComponent_div_73_div_38_Template, 21, 6, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.reporteSeleccionado);
  }
}
function PersonalListComponent_div_74_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 254)(1, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_74_div_10_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r32);
      const resultado_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.corregirContrato(resultado_r33.id_personal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, " Corregir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function PersonalListComponent_div_74_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 248)(1, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 250)(4, "div", 251)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, PersonalListComponent_div_74_div_10_div_11_Template, 3, 0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const resultado_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("valid", resultado_r33.valido)("invalid", !resultado_r33.valido);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](resultado_r33.valido ? "\u2705" : "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](resultado_r33.persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](resultado_r33.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", resultado_r33.mensaje, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !resultado_r33.valido);
  }
}
function PersonalListComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 165)(1, "div", 166)(2, "div", 167)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\u2705 Validaci\u00F3n de Contratos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_74_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarValidacionModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 86)(9, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, PersonalListComponent_div_74_div_10_Template, 12, 9, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 242)(12, "div", 243)(13, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "Total validados:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 243)(18, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "V\u00E1lidos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "span", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 243)(23, "span", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, "Con errores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 195)(28, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_74_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.exportarReporteValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, " Exportar Reporte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_div_74_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.cerrarValidacionModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.resultadosValidacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.totalValidados);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.validos);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.conErrores);
  }
}
class PersonalListComponent {
  router;
  themeService;
  notificationService;
  authService;
  cdr;
  personalService;
  personalSyncService;
  moduleLoader;
  loadingService;
  catalogoService;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  searchPersonaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  moduleName = 'Gestión de Personal';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  // Variables compartidas
  isSidebarCollapsed = false;
  currentTheme = 'light';
  showMinimizeNotification = false;
  minimizing = false;
  // Variables para el modal de ayuda
  showHelpSupport = false;
  isMinimized = false;
  // Variables para dropdowns y modales
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  currentEntityType = 'personal';
  // Búsqueda
  searchQuery = '';
  searchResults = [];
  // 👇 ELIMINADO: notifications mock - Ahora viene del servicio de notificaciones real
  // Configuración de usuario
  user = {
    name: 'Admin SIGPAZ',
    email: 'admin@sigpaz.com',
    avatar: 'A'
  };
  // Variables específicas para personal
  showModal = false;
  showDeleteModal = false;
  showReportesModal = false;
  showValidacionModal = false;
  showPersonaSearchModal = false;
  modalTitle = 'Nuevo Registro de Personal';
  isEditing = false;
  currentPersonalId = null;
  errorFecha = '';
  loading = false;
  loadingCatalogs = false;
  searchingPersonas = false;
  // Datos principales - Usando interfaces de los servicios
  personal = [];
  cargos = [];
  personasDisponibles = [];
  personaSeleccionada = null;
  personaSearchTerm = '';
  // Datos del formulario - Usando CreatePersonalDTO del servicio
  personalFormData = {
    persona_id: 0,
    cargo_id: 0,
    fecha_ingreso: new Date().toISOString().split('T')[0],
    fecha_egreso: undefined,
    observaciones: '',
    activo: true,
    fuente_registro: 'MANUAL',
    usuario_creacion_id: 0,
    usuario_actualizacion_id: 0
  };
  // Filtros
  filtro = {
    search: '',
    cargo_id: null,
    activo: null,
    fecha_desde: '',
    fecha_hasta: '',
    page: 1,
    per_page: 10
  };
  // Paginación
  paginaActual = 1;
  itemsPorPagina = 10;
  totalItems = 0;
  totalPaginas = 0;
  // Reportes
  reporteSeleccionado = null;
  // Validación
  resultadosValidacion = [];
  constructor(router, themeService, notificationService, authService, cdr, personalService, personalSyncService, moduleLoader, loadingService, catalogoService) {
    this.router = router;
    this.themeService = themeService;
    this.notificationService = notificationService;
    this.authService = authService;
    this.cdr = cdr;
    this.personalService = personalService;
    this.personalSyncService = personalSyncService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.catalogoService = catalogoService;
  }
  ngOnInit() {
    this.cdr.detectChanges();
    this.setupThemeSubscription();
    this.setupKeyboardShortcuts();
    this.setupPersonaSearch();
    this.cargarCatalogos();
    this.cargarPersonal();
    // Registrar la instancia del componente
    this.moduleLoader.registerComponentInstance(this.moduleName, this);
    // Cargar datos del módulo
    this.loadModuleData();
    // Cargar usuario actual
    const user = this.authService.getCurrentUser();
    if (user) {
      this.user.name = user.nombre_usuario || 'Usuario';
      this.user.email = user.email || '';
    }
    this.cdr.detectChanges();
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
        yield Promise.all([_this.cargarCatalogos(),
        // Cargar catalogos
        _this.cargarPersonal() // Cargar personal
        ]);
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
    // Verificar que el contenido esté realmente en el DOM
    const hasContent = document.querySelector('.personal-container, .main-content, app-personal');
    const hasData = document.querySelector('.data-table, .personal-list, .card-container');
    console.log(`🔍 Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
    if (this.dataLoaded && hasContent && hasData) {
      this.markModuleAsReady();
    } else if (this.dataLoaded) {
      // Si los datos están cargados pero el DOM no, esperar un poco más
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
    this.themeService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    console.log(`🗑️ Destruyendo componente: ${this.moduleName}`);
    // Asegurar que el loading se oculte al salir
    this.moduleLoader.markModuleRendered(this.moduleName);
    this.markModuleAsReady();
  }
  // ========== CARGA DE DATOS ==========
  cargarCatalogos() {
    this.loadingCatalogs = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)({
      cargos: this.catalogoService.getCargosActivos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
    }).subscribe({
      next: result => {
        this.cargos = result.cargos;
        this.loadingCatalogs = false;
        console.log('📊 Catálogos cargados:', this.cargos);
      },
      error: error => {
        console.error('❌ Error cargando catálogos:', error);
        this.notificationService.showError('Error al cargar catálogos');
        this.loadingCatalogs = false;
      }
    });
  }
  cargarPersonal() {
    this.loading = true;
    const filtros = {
      ...this.filtro,
      page: this.paginaActual,
      per_page: this.itemsPorPagina
    };
    this.personalService.listarPersonal(filtros).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.personal = response.data;
          this.totalItems = response.meta?.total || 0;
          this.totalPaginas = response.meta?.last_page || 0;
        }
        this.loading = false;
      },
      error: error => {
        console.error('❌ Error cargando personal:', error);
        this.personal = [];
        this.loading = false;
      }
    });
  }
  // ========== BÚSQUEDA DE PERSONAS DISPONIBLES ==========
  setupPersonaSearch() {
    this.searchPersonaSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(term => {
      if (term.length >= 2) {
        this.searchingPersonas = true;
        return this.personalSyncService.buscarPersonasDisponibles(term).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
          this.searchingPersonas = false;
        }));
      }
      return [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: personas => {
        this.personasDisponibles = personas;
        console.log('👥 Personas disponibles:', personas);
      },
      error: error => {
        console.error('❌ Error en búsqueda:', error);
        this.personasDisponibles = [];
        this.searchingPersonas = false;
      }
    });
  }
  abrirBusquedaPersona() {
    this.showPersonaSearchModal = true;
    this.personaSearchTerm = '';
    this.personasDisponibles = [];
  }
  cerrarBusquedaPersona() {
    this.showPersonaSearchModal = false;
    this.personaSearchTerm = '';
    this.personasDisponibles = [];
  }
  onPersonaSearchChange(term) {
    this.personaSearchTerm = term;
    this.searchPersonaSubject.next(term);
  }
  seleccionarPersona(persona) {
    this.personaSeleccionada = persona;
    this.personalFormData.persona_id = persona.persona_id;
    this.cerrarBusquedaPersona();
    this.notificationService.showSuccess('Persona seleccionada correctamente');
  }
  limpiarPersonaSeleccionada() {
    this.personaSeleccionada = null;
    this.personalFormData.persona_id = 0;
  }
  // ========== FUNCIONES PARA MANEJO DE ERRORES DE IMAGEN ==========
  // 👇 CORREGIDAS para evitar error de TypeScript
  /**
   * Manejar error de carga de imagen
   */
  onImageError(persona) {
    if (persona) {
      // Crear una copia sin foto_cifrada en lugar de asignar null
      const index = this.personasDisponibles.findIndex(p => p.persona_id === persona.persona_id);
      if (index !== -1) {
        this.personasDisponibles[index] = {
          persona_id: persona.persona_id,
          nombre_completo: persona.nombre_completo,
          nombres: persona.nombres,
          apellidos: persona.apellidos,
          numero_documento: persona.numero_documento,
          tipo_documento: persona.tipo_documento
          // foto_cifrada omitida intencionalmente
        };
      }
    }
  }
  /**
   * Manejar error de imagen en persona seleccionada
   */
  onSelectedImageError() {
    if (this.personaSeleccionada) {
      // Crear nueva persona sin foto_cifrada
      this.personaSeleccionada = {
        persona_id: this.personaSeleccionada.persona_id,
        nombre_completo: this.personaSeleccionada.nombre_completo,
        nombres: this.personaSeleccionada.nombres,
        apellidos: this.personaSeleccionada.apellidos,
        numero_documento: this.personaSeleccionada.numero_documento,
        tipo_documento: this.personaSeleccionada.tipo_documento
        // foto_cifrada omitida intencionalmente
      };
    }
  }
  // ========== MÉTODOS CRUD ==========
  crearPersonal() {
    const errores = this.personalService.validarDatosCreacion(this.personalFormData);
    if (errores.length > 0) {
      errores.forEach(error => this.notificationService.showError(error));
      return;
    }
    this.personalService.crearPersonal(this.personalFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.cerrarModal();
          this.resetForm();
          this.cargarPersonal();
        }
      },
      error: error => {
        console.error('❌ Error creando personal:', error);
      }
    });
  }
  actualizarPersonal() {
    if (!this.currentPersonalId) return;
    const errores = this.personalService.validarDatosCreacion(this.personalFormData);
    if (errores.length > 0) {
      errores.forEach(error => this.notificationService.showError(error));
      return;
    }
    this.personalService.actualizarPersonal(this.currentPersonalId, this.personalFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.cerrarModal();
          this.resetForm();
          this.cargarPersonal();
        }
      },
      error: error => {
        console.error('❌ Error actualizando personal:', error);
      }
    });
  }
  eliminarPersonal() {
    if (!this.currentPersonalId) return;
    this.personalService.eliminarPersonal(this.currentPersonalId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.cerrarDeleteModal();
          this.cargarPersonal();
        }
      },
      error: error => {
        console.error('❌ Error eliminando personal:', error);
        this.cerrarDeleteModal();
      }
    });
  }
  cambiarEstado(id, activo) {
    this.personalService.cambiarEstadoPersonal(id, activo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.cargarPersonal();
        }
      },
      error: error => {
        console.error('❌ Error cambiando estado:', error);
      }
    });
  }
  // ========== MÉTODOS DE MODAL ==========
  abrirModalCrear() {
    this.isEditing = false;
    this.modalTitle = 'Nuevo Registro de Personal';
    this.resetForm();
    this.showModal = true;
  }
  abrirModalEditar(id) {
    this.loading = true;
    this.personalService.obtenerPersonal(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success && response.data) {
          const data = response.data;
          this.isEditing = true;
          this.modalTitle = 'Editar Registro de Personal';
          this.currentPersonalId = id;
          this.personalFormData = {
            persona_id: data.persona_id,
            cargo_id: data.cargo_id,
            fecha_ingreso: data.fecha_ingreso,
            fecha_egreso: data.fecha_egreso,
            observaciones: data.observaciones,
            activo: data.activo,
            usuario_creacion_id: data.usuario_creacion_id,
            usuario_actualizacion_id: data.usuario_actualizacion_id,
            fuente_registro: data.fuente_registro
          };
          // Usar datos de la relación si existen
          if (data.persona) {
            this.personaSeleccionada = {
              persona_id: data.persona.persona_id,
              nombre_completo: data.persona.nombre_completo,
              nombres: data.persona.nombres,
              apellidos: data.persona.apellidos,
              numero_documento: data.persona.numero_documento,
              tipo_documento: data.persona.tipo_documento,
              foto_cifrada: data.persona.foto_cifrada
            };
          }
          this.showModal = true;
        }
        this.loading = false;
      },
      error: error => {
        console.error('❌ Error cargando personal para edición:', error);
        this.notificationService.showError('Error al cargar datos del personal');
        this.loading = false;
      }
    });
  }
  abrirModalEliminar(id) {
    this.currentPersonalId = id;
    this.showDeleteModal = true;
  }
  cerrarModal() {
    this.showModal = false;
    this.resetForm();
    this.errorFecha = '';
  }
  cerrarDeleteModal() {
    this.showDeleteModal = false;
    this.currentPersonalId = null;
  }
  resetForm() {
    this.personalFormData = {
      persona_id: 0,
      usuario_creacion_id: 0,
      usuario_actualizacion_id: 0,
      cargo_id: 0,
      fecha_ingreso: new Date().toISOString().split('T')[0],
      fecha_egreso: undefined,
      observaciones: '',
      activo: true,
      fuente_registro: 'MANUAL'
    };
    this.currentPersonalId = null;
    this.personaSeleccionada = null;
    this.personasDisponibles = [];
  }
  // ========== MÉTODOS DE VALIDACIÓN ==========
  validarFechas() {
    this.errorFecha = '';
    if (!this.personalFormData.fecha_ingreso) return;
    const fechaIngreso = new Date(this.personalFormData.fecha_ingreso);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaIngreso > hoy) {
      this.errorFecha = 'La fecha de ingreso no puede ser futura';
      return;
    }
    if (this.personalFormData.fecha_egreso) {
      const fechaEgreso = new Date(this.personalFormData.fecha_egreso);
      if (fechaEgreso < fechaIngreso) {
        this.errorFecha = 'La fecha de egreso no puede ser anterior a la de ingreso';
        return;
      }
      if (fechaEgreso > hoy) {
        this.errorFecha = 'La fecha de egreso no puede ser futura';
        return;
      }
    }
  }
  // ========== MÉTODOS DE FILTRO ==========
  aplicarFiltros() {
    this.paginaActual = 1;
    this.cargarPersonal();
  }
  limpiarFiltros() {
    this.filtro = {
      search: '',
      cargo_id: null,
      activo: null,
      fecha_desde: '',
      fecha_hasta: '',
      page: 1,
      per_page: 10
    };
    this.paginaActual = 1;
    this.cargarPersonal();
  }
  // ========== MÉTODOS DE PAGINACIÓN ==========
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
    this.cargarPersonal();
  }
  cambiarPaginaNumero(pagina) {
    if (typeof pagina === 'number') {
      this.paginaActual = pagina;
      this.cargarPersonal();
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
  // ========== MÉTODOS DE REPORTES ==========
  generarReportes() {
    this.personalSyncService.getEstadisticas().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe({
      next: estadisticas => {
        this.reporteSeleccionado = {
          titulo: 'Estadísticas de Personal',
          fecha: new Date(),
          estadisticas: [{
            label: 'Total Personal',
            value: estadisticas.total_personal || 0
          }, {
            label: 'Activos',
            value: estadisticas.activos || 0
          }, {
            label: 'Inactivos',
            value: estadisticas.inactivos || 0
          }]
        };
        this.showReportesModal = true;
      },
      error: error => {
        console.error('❌ Error obteniendo estadísticas:', error);
        this.notificationService.showError('Error al generar reportes');
      }
    });
  }
  cerrarReportesModal() {
    this.showReportesModal = false;
    this.reporteSeleccionado = null;
  }
  generarReportePorCargo() {
    const cargosMap = new Map();
    this.personal.forEach(registro => {
      const cargoNombre = this.getCargoNombre(registro.cargo_id);
      cargosMap.set(cargoNombre, (cargosMap.get(cargoNombre) || 0) + 1);
    });
    this.reporteSeleccionado = {
      titulo: 'Reporte por Cargo',
      fecha: new Date(),
      estadisticas: Array.from(cargosMap.entries()).map(([label, value]) => ({
        label,
        value
      }))
    };
  }
  generarReporteAntiguedad() {
    const rangos = [{
      min: 0,
      max: 1,
      label: 'Menos de 1 año'
    }, {
      min: 1,
      max: 3,
      label: '1-3 años'
    }, {
      min: 3,
      max: 5,
      label: '3-5 años'
    }, {
      min: 5,
      max: 10,
      label: '5-10 años'
    }, {
      min: 10,
      max: Infinity,
      label: 'Más de 10 años'
    }];
    const conteo = rangos.map(rango => ({
      label: rango.label,
      value: 0
    }));
    this.personal.forEach(registro => {
      if (registro.fecha_ingreso && registro.activo) {
        const antiguedad = this.calcularAntiguedad(registro.fecha_ingreso);
        const rango = rangos.find(r => antiguedad >= r.min && antiguedad < r.max);
        if (rango) {
          const index = rangos.indexOf(rango);
          conteo[index].value++;
        }
      }
    });
    this.reporteSeleccionado = {
      titulo: 'Reporte de Antigüedad',
      fecha: new Date(),
      estadisticas: conteo
    };
  }
  generarReporteActivos() {
    const activos = this.personal.filter(p => p.activo).length;
    const inactivos = this.personal.length - activos;
    this.reporteSeleccionado = {
      titulo: 'Reporte de Personal Activo',
      fecha: new Date(),
      estadisticas: [{
        label: 'Personal Activo',
        value: activos
      }, {
        label: 'Personal Inactivo',
        value: inactivos
      }]
    };
  }
  generarReporteRotacion() {
    const anioActual = new Date().getFullYear();
    const ingresos = this.personal.filter(p => p.fecha_creacion && new Date(p.fecha_creacion).getFullYear() === anioActual).length;
    const egresos = this.personal.filter(p => p.fecha_egreso && new Date(p.fecha_egreso).getFullYear() === anioActual).length;
    const tasaRotacion = this.personal.length > 0 ? (egresos / this.personal.length * 100).toFixed(2) : '0';
    this.reporteSeleccionado = {
      titulo: 'Reporte de Rotación',
      fecha: new Date(),
      estadisticas: [{
        label: 'Ingresos este año',
        value: ingresos
      }, {
        label: 'Egresos este año',
        value: egresos
      }, {
        label: 'Tasa de rotación',
        value: `${tasaRotacion}%`
      }]
    };
  }
  generarReporteCompleto() {
    this.exportarReporteCompleto();
    this.cerrarReportesModal();
  }
  // ========== VALIDACIÓN DE CONTRATOS ==========
  validarContratos() {
    this.resultadosValidacion = this.personal.map(registro => {
      return this.validarContratoIndividual(registro);
    });
    this.showValidacionModal = true;
  }
  validarContratoIndividual(registro) {
    const reg = registro || {
      persona_id: this.personalFormData.persona_id,
      cargo_id: this.personalFormData.cargo_id,
      fecha_ingreso: this.personalFormData.fecha_ingreso,
      fecha_egreso: this.personalFormData.fecha_egreso,
      activo: this.personalFormData.activo
    };
    const errores = [];
    if (!reg.persona_id) errores.push('No tiene persona asignada');
    if (!reg.cargo_id) errores.push('No tiene cargo asignado');
    if (!reg.fecha_ingreso) {
      errores.push('No tiene fecha de ingreso');
    } else {
      const fechaIngreso = new Date(reg.fecha_ingreso);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaIngreso > hoy) {
        errores.push('Fecha de ingreso futura');
      }
    }
    if (reg.fecha_egreso) {
      const fechaEgreso = new Date(reg.fecha_egreso);
      const fechaIngreso = new Date(reg.fecha_ingreso);
      if (fechaEgreso < fechaIngreso) {
        errores.push('Fecha de egreso anterior a ingreso');
      }
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaEgreso > hoy) {
        errores.push('Fecha de egreso futura');
      }
    }
    if (reg.activo && reg.fecha_egreso) {
      errores.push('Activo pero con fecha de egreso');
    }
    const valido = errores.length === 0;
    const mensaje = valido ? 'Contrato válido' : errores.join(', ');
    if (!registro) {
      if (valido) {
        this.notificationService.showSuccess('Contrato válido');
      } else {
        this.notificationService.showError(mensaje);
      }
      return {
        valido,
        mensaje
      };
    }
    return {
      id_personal: registro.personal_id,
      persona: registro.persona?.nombre_completo || 'N/A',
      cargo: this.getCargoNombre(registro.cargo_id),
      valido,
      mensaje
    };
  }
  corregirContrato(id) {
    this.abrirModalEditar(id);
    this.showValidacionModal = false;
  }
  cerrarValidacionModal() {
    this.showValidacionModal = false;
    this.resultadosValidacion = [];
  }
  /**
   * Exportar reporte de validación
   */
  exportarReporteValidacion() {
    if (this.resultadosValidacion.length === 0) {
      this.notificationService.showWarning('No hay resultados de validación para exportar');
      return;
    }
    // Crear CSV
    const headers = ['ID', 'Persona', 'Cargo', 'Estado', 'Mensaje'];
    const rows = this.resultadosValidacion.map(r => [r.id_personal, r.persona, r.cargo, r.valido ? 'VÁLIDO' : 'ERROR', r.mensaje]);
    const csvContent = [headers.join(','), ...rows.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n');
    // Descargar archivo
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `validacion_contratos_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.notificationService.showSuccess('Reporte de validación exportado exitosamente');
  }
  // ========== MÉTODOS DE EXPORTACIÓN ==========
  /**
   * Exportar listado completo a Excel
   */
  exportarExcel() {
    this.loading = true;
    this.personalService.exportarExcel().subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `personal_${new Date().toISOString().split('T')[0]}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.loading = false;
        this.notificationService.showSuccess('Exportación completada');
      },
      error: error => {
        console.error('❌ Error exportando Excel:', error);
        this.loading = false;
        this.notificationService.showError('Error al exportar');
      }
    });
  }
  /**
   * Exportar reporte específico a PDF
   */
  exportarReportePDF(tipo = 'estadisticas') {
    this.loading = true;
    this.personalService.exportarReportePDF(tipo).subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `reporte_${tipo}_${new Date().toISOString().split('T')[0]}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.loading = false;
        this.notificationService.showSuccess(`Reporte ${tipo} descargado`);
      },
      error: error => {
        console.error(`❌ Error exportando PDF ${tipo}:`, error);
        this.loading = false;
        this.notificationService.showError('Error al exportar PDF');
      }
    });
  }
  /**
   * Exportar reporte específico a Excel
   */
  exportarReporteExcel(tipo = 'estadisticas') {
    this.loading = true;
    this.personalService.exportarReporteExcel(tipo).subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `reporte_${tipo}_${new Date().toISOString().split('T')[0]}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.loading = false;
        this.notificationService.showSuccess(`Reporte ${tipo} descargado`);
      },
      error: error => {
        console.error(`❌ Error exportando Excel ${tipo}:`, error);
        this.loading = false;
        this.notificationService.showError('Error al exportar Excel');
      }
    });
  }
  /**
   * Exportar reporte completo (todos los reportes en uno)
   */
  exportarReporteCompleto() {
    this.loading = true;
    this.personalService.exportarReporteCompleto().subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `reporte_completo_personal_${new Date().toISOString().split('T')[0]}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.loading = false;
        this.notificationService.showSuccess('Reporte completo descargado');
      },
      error: error => {
        console.error('❌ Error exportando reporte completo:', error);
        this.loading = false;
        this.notificationService.showError('Error al exportar reporte completo');
      }
    });
  }
  /**
   * Generar contrato PDF para un empleado
   */
  generarContratoPDF(id) {
    this.loading = true;
    this.personalService.generarContratoPDF(id).subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `contrato_personal_${id}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.loading = false;
        this.notificationService.showSuccess('Contrato PDF generado exitosamente');
      },
      error: error => {
        console.error('❌ Error generando contrato PDF:', error);
        this.loading = false;
        this.notificationService.showError('Error al generar el contrato PDF');
      }
    });
  }
  // ========== MÉTODOS AUXILIARES ==========
  getCargoNombre(idCargo) {
    if (!idCargo) return 'No asignado';
    const cargo = this.cargos.find(c => c.cargo_id === idCargo);
    return cargo?.nombre_cargo || cargo?.nombre || 'Cargo desconocido';
  }
  getCargoDepartamento(idCargo) {
    return ''; // Si no hay departamento en tu modelo
  }
  getCargoClass(idCargo) {
    return 'cargo-default';
  }
  getEstadoClass(estado) {
    return estado ? 'estado-activo' : 'estado-inactivo';
  }
  calcularAntiguedad(fechaIngreso) {
    if (!fechaIngreso) return 0;
    const ingreso = new Date(fechaIngreso);
    const hoy = new Date();
    const diferenciaMs = hoy.getTime() - ingreso.getTime();
    const años = diferenciaMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(años);
  }
  // ========== GETTERS PARA ESTADÍSTICAS ==========
  get totalPersonal() {
    return this.totalItems;
  }
  get personalActivo() {
    return this.personal.filter(p => p.activo).length;
  }
  get personalInactivo() {
    return this.personal.filter(p => !p.activo).length;
  }
  get antiguedadPromedio() {
    const activos = this.personal.filter(p => p.activo && p.fecha_ingreso);
    if (activos.length === 0) return 0;
    const totalAntiguedad = activos.reduce((sum, registro) => {
      return sum + this.calcularAntiguedad(registro.fecha_ingreso);
    }, 0);
    return Math.round(totalAntiguedad / activos.length * 10) / 10;
  }
  // ========== GETTERS PARA VALIDACIÓN ==========
  get totalValidados() {
    return this.resultadosValidacion.length;
  }
  get validos() {
    return this.resultadosValidacion.filter(r => r.valido).length;
  }
  get conErrores() {
    return this.totalValidados - this.validos;
  }
  // ========== GETTERS PARA NOTIFICACIONES ==========
  // 👇 Usando el servicio real de notificaciones
  get unreadNotificationsCount() {
    // Esto debería venir de un servicio de notificaciones real
    return 0;
  }
  // ========== MÉTODOS PARA EL MENÚ Y HEADER ==========
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
    if (!this.showHelpSupport) {
      document.body.classList.remove('minimized-mode');
    }
  }
  onToggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    if (this.isNotificationsOpen) this.isUserMenuOpen = false;
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) this.isNotificationsOpen = false;
  }
  onMarkAllAsRead() {
    // Implementar con servicio de notificaciones real
    this.notificationService.showInfo('Todas las notificaciones marcadas como leídas');
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
    this.isNotificationsOpen = false;
    this.isUserMenuOpen = false;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      this.filtro.search = this.searchQuery;
      this.aplicarFiltros();
      this.closeSearchModal();
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
      this.minimizing = false;
      this.showMinimizeNotification = true;
      setTimeout(() => this.showMinimizeNotification = false, 3000);
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
  // ========== MÉTODOS PRIVADOS ==========
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', event => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        this.onOpenSearchModal();
      }
      if (event.key === 'Escape') {
        if (this.isSearchOpen) this.closeSearchModal();
        if (this.isNotificationsOpen) this.isNotificationsOpen = false;
        if (this.isUserMenuOpen) this.isUserMenuOpen = false;
        if (this.showModal) this.cerrarModal();
        if (this.showDeleteModal) this.cerrarDeleteModal();
        if (this.showReportesModal) this.cerrarReportesModal();
        if (this.showValidacionModal) this.cerrarValidacionModal();
        if (this.showPersonaSearchModal) this.cerrarBusquedaPersona();
      }
    });
  }
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.notification-wrapper') && !target.closest('.notifications-dropdown')) {
      this.isNotificationsOpen = false;
    }
    if (!target.closest('.user-menu-wrapper') && !target.closest('.user-dropdown')) {
      this.isUserMenuOpen = false;
    }
    if (!target.closest('.search-modal-content') && !target.closest('.search-button') && !target.closest('.sidebar-search')) {
      this.isSearchOpen = false;
    }
    if (!target.closest('.persona-search-modal') && !target.closest('.btn-search-persona') && !target.closest('.selected-persona')) {
      // No cerramos automáticamente el modal de búsqueda de personas
    }
  }
  getCurrentEntity() {
    return {
      name: 'Personal'
    };
  }
  getCurrentEntityName() {
    return 'Personal';
  }
  verDetalles(id) {
    this.abrirModalEditar(id);
  }
  // ========== GETTERS PARA AUDITORÍA ==========
  get usuarioCreacion() {
    // ✅ Usar notación de corchetes para acceder a propiedades de index signature
    const usuarioCreacionId = this.personalFormData['usuario_creacion_id'];
    if (!usuarioCreacionId) return null;
    // Buscar en la relación si está cargada
    const personalActual = this.personal.find(p => p.personal_id === this.currentPersonalId);
    return personalActual?.usuario_creacion || {
      nombre: 'Sistema'
    };
  }
  get usuarioModificacion() {
    // ✅ Usar notación de corchetes para acceder a propiedades de index signature
    const usuarioActualizacionId = this.personalFormData['usuario_actualizacion_id'];
    if (!usuarioActualizacionId) return null;
    const personalActual = this.personal.find(p => p.personal_id === this.currentPersonalId);
    return personalActual?.usuario_actualizacion || {
      nombre: 'Sistema'
    };
  }
  static ɵfac = function PersonalListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonalListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_20__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_21__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_personal_service__WEBPACK_IMPORTED_MODULE_23__.PersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_personal_sync_service__WEBPACK_IMPORTED_MODULE_24__.PersonalSyncService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_25__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_26__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_27__.CatalogoService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: PersonalListComponent,
    selectors: [["app-personal-list"]],
    hostBindings: function PersonalListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresolveDocument"]);
      }
    },
    decls: 76,
    vars: 33,
    consts: [["personalForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], ["class", "modal-overlay persona-search-modal", "style", "z-index: 3000;", 4, "ngIf"], [1, "personal-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-search"], ["type", "text", "id", "filtro-search", "placeholder", "Nombre o documento", 3, "ngModelChange", "ngModel"], ["for", "filtro-cargo"], ["id", "filtro-cargo", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtro-activo"], ["id", "filtro-activo", 3, "ngModelChange", "ngModel"], ["for", "filtro-fecha-desde"], ["type", "date", "id", "filtro-fecha-desde", 3, "ngModelChange", "ngModel"], ["for", "filtro-fecha-hasta"], ["type", "date", "id", "filtro-fecha-hasta", 3, "ngModelChange", "ngModel"], ["class", "loading-container", 4, "ngIf"], ["class", "stats-container", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar personal...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "modal-overlay", "persona-search-modal", 2, "z-index", "3000"], [1, "modal-container", "modal-sm"], [1, "modal-header", 2, "background", "linear-gradient(135deg, #10b981, #059669)", "color", "white"], [2, "font-size", "24px"], [1, "modal-close", 2, "color", "white", 3, "click"], [1, "modal-content"], [1, "form-group"], [1, "form-label"], [1, "label-help"], [1, "search-input-wrapper"], [1, "search-icon"], ["type", "text", "placeholder", "Nombre, apellido o documento...", "autofocus", "", 1, "form-input", "search-input", 3, "ngModelChange", "ngModel"], [1, "search-results-container"], ["class", "search-state", 4, "ngIf"], ["class", "results-list", 4, "ngIf"], [1, "modal-footer", 2, "border-top", "1px solid var(--border-color)", "margin-top", "16px", "padding-top", "16px"], [1, "btn", "btn-cancel", 3, "click"], ["class", "help-text", 4, "ngIf"], [1, "search-state"], [1, "loading-spinner"], [1, "spinner"], [1, "results-list"], ["class", "result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "result-item", 3, "click"], [1, "result-avatar"], ["class", "avatar-img", "alt", "Foto", 3, "src", "error", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "result-info"], [1, "result-subtitle"], [1, "doc-icon"], ["class", "doc-type", 4, "ngIf"], [1, "result-badge"], [1, "badge-available"], ["alt", "Foto", 1, "avatar-img", 3, "error", "src"], [1, "avatar-placeholder"], [1, "doc-type"], [1, "no-results"], [1, "no-results-icon"], [1, "no-results-title"], [1, "no-results-text"], [1, "no-results-suggestion"], [1, "initial-message"], [1, "initial-icon"], [1, "initial-text"], [1, "initial-hint"], [1, "help-text"], [1, "loading-container"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "codigo-cell"], [1, "codigo-icon"], [1, "persona-cell"], [1, "cargo-badge"], [1, "antiguedad-badge"], [1, "activo-badge"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Ver Detalles", 1, "btn-action", "view", 3, "click"], ["title", "Editar", 1, "btn-action", "edit", 3, "click"], ["title", "Eliminar", 1, "btn-action", "delete", 3, "click"], ["title", "Contrato PDF", 1, "btn-action", "pdf", 3, "click"], [1, "btn-action", "toggle", 3, "click", "title"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "empty-state"], [1, "empty-icon"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-column"], [1, "required"], [1, "persona-selector"], ["class", "selected-persona", 4, "ngIf"], ["type", "button", "class", "btn-search-persona", 3, "click", 4, "ngIf"], ["type", "hidden", "name", "persona_id", "required", "", 3, "ngModelChange", "ngModel"], ["for", "cargo_id", 1, "form-label"], ["id", "cargo_id", "name", "cargo_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "fecha_ingreso", 1, "form-label"], ["type", "date", "id", "fecha_ingreso", "name", "fecha_ingreso", "required", "", 1, "form-input", 3, "ngModelChange", "change", "ngModel"], ["for", "fecha_egreso", 1, "form-label"], ["type", "date", "id", "fecha_egreso", "name", "fecha_egreso", 1, "form-input", 3, "ngModelChange", "change", "ngModel"], ["for", "fuente_registro", 1, "form-label"], ["id", "fuente_registro", "name", "fuente_registro", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "MANUAL"], ["value", "SISTEMA"], ["value", "IMPORTACION"], ["value", "MIGRACION"], [1, "form-check"], ["type", "checkbox", "id", "activo", "name", "activo", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "activo", 1, "form-check-label"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "6", "placeholder", "Observaciones sobre el registro...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "validation-message", 4, "ngIf"], [1, "modal-footer"], [1, "footer-left"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "footer-right"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "btn-icon", 4, "ngIf"], [1, "selected-persona"], [1, "persona-avatar"], ["class", "avatar-img-small", "alt", "Foto", 3, "src", "error", 4, "ngIf"], ["class", "avatar-placeholder-small", 4, "ngIf"], [1, "persona-info"], [1, "persona-nombre"], [1, "persona-documento"], ["type", "button", "class", "btn-clear-persona", 3, "click", 4, "ngIf"], ["alt", "Foto", 1, "avatar-img-small", 3, "error", "src"], [1, "avatar-placeholder-small"], ["type", "button", 1, "btn-clear-persona", 3, "click"], ["type", "button", 1, "btn-search-persona", 3, "click"], [1, "validation-message"], [1, "validation-icon"], [1, "validation-text"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "reportes-grid"], [1, "reporte-card", 3, "click"], [1, "reporte-icon"], [1, "reporte-title"], [1, "reporte-desc"], ["class", "reporte-preview", 4, "ngIf"], [1, "reporte-preview"], [1, "reporte-content"], ["class", "reporte-estadisticas", 4, "ngIf"], [1, "reporte-actions"], [1, "reporte-estadisticas"], ["class", "estadistica-item", 4, "ngFor", "ngForOf"], [1, "estadistica-item"], [1, "estadistica-label"], [1, "estadistica-value"], [1, "validacion-results"], ["class", "resultado-item", 3, "valid", "invalid", 4, "ngFor", "ngForOf"], [1, "validacion-summary"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-value", "valid"], [1, "summary-value", "invalid"], [1, "resultado-item"], [1, "resultado-icon"], [1, "resultado-info"], [1, "resultado-persona"], [1, "resultado-mensaje"], ["class", "resultado-acciones", 4, "ngIf"], [1, "resultado-acciones"], [1, "btn", "btn-small", 3, "click"]],
    template: function PersonalListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("toggleSidebar", function PersonalListComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function PersonalListComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("toggleNotifications", function PersonalListComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function PersonalListComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function PersonalListComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function PersonalListComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, PersonalListComponent_div_4_Template, 13, 6, "div", 5)(5, PersonalListComponent_div_5_Template, 5, 7, "div", 6)(6, PersonalListComponent_div_6_Template, 30, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "\uD83D\uDC65 Gesti\u00F3n de Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Administre el registro de personal del sistema SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_Template_button_click_15_listener() {
          return ctx.abrirModalCrear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, " Nuevo Registro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_Template_button_click_19_listener() {
          return ctx.exportarExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "\uD83D\uDCE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, " Exportar Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_Template_button_click_23_listener() {
          return ctx.generarReportes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_Template_button_click_31_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "div", 20)(34, "div", 21)(35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.filtro.search, $event) || (ctx.filtro.search = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 21)(39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](40, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_Template_select_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.filtro.cargo_id, $event) || (ctx.filtro.cargo_id = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43, "Todos los cargos");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, PersonalListComponent_option_44_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 21)(46, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_Template_select_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.filtro.activo, $event) || (ctx.filtro.activo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, "S\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "div", 21)(56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57, "Fecha Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.filtro.fecha_desde, $event) || (ctx.filtro.fecha_desde = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 21)(60, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, "Fecha Hasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function PersonalListComponent_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.filtro.fecha_hasta, $event) || (ctx.filtro.fecha_hasta = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "div", 21)(64, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PersonalListComponent_Template_button_click_64_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](66, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](68, PersonalListComponent_div_68_Template, 4, 0, "div", 34)(69, PersonalListComponent_div_69_Template, 21, 5, "div", 35)(70, PersonalListComponent_div_70_Template, 40, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](71, PersonalListComponent_div_71_Template, 76, 19, "div", 37)(72, PersonalListComponent_div_72_Template, 20, 2, "div", 37)(73, PersonalListComponent_div_73_Template, 39, 3, "div", 37)(74, PersonalListComponent_div_74_Template, 34, 6, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](75, "app-footer", 38);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showPersonaSearchModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.cargo_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.cargos);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.activo);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.fecha_desde);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.fecha_hasta);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.personal.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showReportesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showValidacionModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_12__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_15__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n  animation: searchModalFadeIn 0.3s ease;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  z-index: 1;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: searchContentSlide 0.3s ease;\n  border: 1px solid var(--border-color);\n}\n.search-modal .search-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n}\n.search-modal .search-modal-header .search-input-container {\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  position: absolute;\n  left: 16px;\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  width: 100%;\n  padding: 16px 52px 16px 48px;\n  border: 2px solid var(--border-color);\n  border-radius: 12px;\n  font-size: 16px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  position: absolute;\n  right: 16px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-clear:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.search-modal .search-modal-header .search-close {\n  background: var(--bg-tertiary);\n  border: none;\n  color: var(--text-muted);\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.search-modal .search-results {\n  max-height: 60vh;\n  overflow-y: auto;\n  padding: 16px;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--bg-hover);\n  transform: translateX(5px);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n  min-width: 0;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.search-modal .search-empty {\n  padding: 40px 24px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 16px;\n}\n@keyframes searchModalFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes searchContentSlide {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.personal-container {\n  min-height: 100vh;\n  width: 100%;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header .header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filtros-container {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.filtros-container .filtros-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container .filtros-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-container .filtros-header .btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  transition: color 0.3s;\n}\n.filtros-container .filtros-header .btn-link:hover {\n  color: var(--primary-hover);\n}\n.filtros-container .filtros-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .filtros-container .filtros-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .filtros-container .filtros-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.filtros-container .filtros-grid .filtro-item label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.filtros-container .filtros-grid .filtro-item input,\n.filtros-container .filtros-grid .filtro-item select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container .filtros-grid .filtro-item input:focus,\n.filtros-container .filtros-grid .filtro-item select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container .stat-card {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.stats-container .stat-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--gradient-primary);\n  opacity: 0.7;\n  transition: opacity 0.3s;\n  animation: shimmer 2s infinite linear;\n  background-size: 1000px 100%;\n}\n.stats-container .stat-card:hover {\n  transform: translateY(-8px) rotateX(5deg);\n  box-shadow: var(--card-hover-shadow);\n}\n.stats-container .stat-card .stat-value {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container .stat-card .stat-label {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.table-container .table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-container .table-header .table-title h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .table-header .table-title .table-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container .table-header .table-actions {\n  display: flex;\n  gap: 8px;\n}\n.table-container .table-responsive {\n  overflow-x: auto;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.table-container .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n.table-container .data-table thead {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.table-container .data-table thead th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-container .data-table tbody tr {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container .data-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.table-container .data-table tbody tr td {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container .data-table tbody tr td .codigo-cell {\n  font-weight: 600;\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .data-table tbody tr td .codigo-cell .codigo-icon {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.table-container .data-table tbody tr td .persona-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.table-container .data-table tbody tr td .persona-cell strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.table-container .data-table tbody tr td .persona-cell small {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.pdf {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.pdf:hover {\n  background: var(--warning);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.toggle.btn-activar {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.toggle.btn-activar:hover {\n  background: var(--success);\n  color: white;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.toggle.btn-desactivar {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.toggle.btn-desactivar:hover {\n  background: var(--danger);\n  color: white;\n}\n.cargo-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cargo-badge.cargo-directivo {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.cargo-badge.cargo-administrativo {\n  background: var(--info-light);\n  color: var(--info);\n}\n.cargo-badge.cargo-operativo {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.cargo-badge.cargo-tecnico {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge.estado-activo {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.estado-inactivo {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.estado-badge.estado-vacaciones {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge.estado-licencia {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-badge.estado-suspendido {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.antiguedad-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n  letter-spacing: 0.5px;\n}\n.activo-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.activo-badge.badge-success {\n  background: var(--success-light);\n  color: var(--success);\n}\n.activo-badge.badge-danger {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.search-select-container {\n  position: relative;\n}\n.search-select-container .selected-persona {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  margin-bottom: 8px;\n}\n.search-select-container .selected-persona .persona-selected-icon {\n  font-size: 20px;\n}\n.search-select-container .selected-persona .persona-selected-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.search-select-container .selected-persona .persona-selected-info strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.search-select-container .selected-persona .persona-selected-info small {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.search-select-container .selected-persona .btn-clear-persona {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.search-select-container .selected-persona .btn-clear-persona:hover {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.search-select-container .search-results-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  margin-top: 4px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: var(--shadow-lg);\n}\n.search-select-container .search-results-dropdown .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-bottom: 1px solid var(--border-light);\n}\n.search-select-container .search-results-dropdown .search-result-item:hover {\n  background: var(--bg-hover);\n}\n.search-select-container .search-results-dropdown .search-result-item:last-child {\n  border-bottom: none;\n}\n.search-select-container .search-results-dropdown .search-result-item .result-icon {\n  font-size: 18px;\n}\n.search-select-container .search-results-dropdown .search-result-item .result-details {\n  flex: 1;\n}\n.search-select-container .search-results-dropdown .search-result-item .result-details .result-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.search-select-container .search-results-dropdown .search-result-item .result-details .result-description {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.audit-info {\n  margin-top: 16px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border-left: 4px solid var(--primary);\n}\n.audit-info .audit-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n  font-size: 13px;\n}\n.audit-info .audit-item:last-child {\n  margin-bottom: 0;\n}\n.audit-info .audit-item .audit-label {\n  font-weight: 600;\n  color: var(--text-primary);\n  min-width: 120px;\n}\n.audit-info .audit-item .audit-value {\n  flex: 1;\n  color: var(--text-secondary);\n}\n.audit-info .audit-item .audit-date {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.validation-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--warning-light);\n  border-radius: 8px;\n  border-left: 4px solid var(--warning);\n}\n.validation-message .validation-icon {\n  font-size: 16px;\n}\n.validation-message .validation-text {\n  color: var(--warning);\n  font-size: 14px;\n  font-weight: 500;\n}\n.validacion-results {\n  max-height: 400px;\n  overflow-y: auto;\n  margin-bottom: 24px;\n}\n.validacion-results .resultado-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  border-left: 4px solid transparent;\n}\n.validacion-results .resultado-item.valid {\n  border-left-color: var(--success);\n  background: var(--success-light);\n}\n.validacion-results .resultado-item.invalid {\n  border-left-color: var(--danger);\n  background: var(--danger-light);\n}\n.validacion-results .resultado-item .resultado-icon {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.validacion-results .resultado-item .resultado-info {\n  flex: 1;\n}\n.validacion-results .resultado-item .resultado-info .resultado-persona {\n  margin-bottom: 4px;\n}\n.validacion-results .resultado-item .resultado-info .resultado-persona strong {\n  font-weight: 600;\n  color: var(--text-primary);\n  display: block;\n}\n.validacion-results .resultado-item .resultado-info .resultado-persona small {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.validacion-results .resultado-item .resultado-info .resultado-mensaje {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.validacion-results .resultado-item .resultado-acciones {\n  flex-shrink: 0;\n}\n.validacion-results .resultado-item .resultado-acciones .btn-small {\n  padding: 6px 12px;\n  font-size: 12px;\n  border-radius: 6px;\n  border: 1px solid var(--primary);\n  background: none;\n  color: var(--primary);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.validacion-results .resultado-item .resultado-acciones .btn-small:hover {\n  background: var(--primary);\n  color: white;\n}\n.validacion-summary {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n.validacion-summary .summary-item {\n  text-align: center;\n  flex: 1;\n}\n.validacion-summary .summary-item .summary-label {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.validacion-summary .summary-item .summary-value {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n}\n.validacion-summary .summary-item .summary-value.valid {\n  color: var(--success);\n}\n.validacion-summary .summary-item .summary-value.invalid {\n  color: var(--danger);\n}\n.reporte-estadisticas {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n  margin: 20px 0;\n}\n.reporte-estadisticas .estadistica-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.reporte-estadisticas .estadistica-item .estadistica-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  text-align: center;\n  margin-bottom: 8px;\n}\n.reporte-estadisticas .estadistica-item .estadistica-value {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--primary);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn .btn-icon {\n  font-size: 16px;\n}\n.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.btn-cancel {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-small {\n  padding: 6px 12px;\n  font-size: 12px;\n  border-radius: 6px;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n  animation: bounce 2s infinite;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-large {\n  width: 90%;\n  max-width: 1200px;\n  max-height: 90vh;\n}\n@media (max-width: 768px) {\n  .modal-large {\n    width: 95%;\n    max-height: 95vh;\n  }\n}\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  margin-left: 100px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n  flex-shrink: 0;\n  position: relative;\n}\n.modal-header h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group label .required {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group .form-input,\n.form-group .form-select,\n.form-group .form-textarea {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 15px;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n.form-group .form-input:focus,\n.form-group .form-select:focus,\n.form-group .form-textarea:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  background: var(--bg-primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group .form-input:hover,\n.form-group .form-select:hover,\n.form-group .form-textarea:hover {\n  border-color: var(--input-border-hover);\n}\n.form-group .form-textarea {\n  resize: vertical;\n  min-height: 120px;\n  line-height: 1.5;\n}\n.form-check {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-check .form-check-input {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.form-check .form-check-label {\n  font-size: 14px;\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.modal-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.modal-footer .footer-right {\n  display: flex;\n  gap: 16px;\n}\n.modal-footer .footer-left {\n  display: flex;\n  gap: 16px;\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal .confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-modal .confirm-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-modal .confirm-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.confirm-modal .confirm-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.confirm-modal .confirm-body {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.confirm-modal .confirm-body p {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  font-size: 16px;\n}\n.confirm-modal .confirm-body p.confirm-warning {\n  color: var(--danger);\n  font-weight: 500;\n  font-size: 14px;\n}\n.confirm-modal .confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.reportes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.reportes-grid .reporte-card {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s;\n  text-align: center;\n}\n.reportes-grid .reporte-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.reportes-grid .reporte-card .reporte-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.reportes-grid .reporte-card .reporte-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.reportes-grid .reporte-card .reporte-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.reporte-preview {\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n}\n.reporte-preview h4 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n}\n.reporte-preview .reporte-content {\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n}\n.reporte-preview .reporte-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination .pagination-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .pagination-pages {\n  display: flex;\n  gap: 8px;\n}\n.pagination .pagination-pages .pagination-page {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination .pagination-pages .pagination-page:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination .pagination-pages .pagination-page.active {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  font-weight: 600;\n}\n.pagination .pagination-pages .pagination-page:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n}\n@media (max-width: 1024px) {\n  .personal-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .filtros-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .table-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .validacion-summary {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .modal-footer {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .modal-footer .footer-left,\n  .modal-footer .footer-right {\n    width: 100%;\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .stats-container {\n    grid-template-columns: 1fr;\n  }\n  .filtros-grid {\n    grid-template-columns: 1fr;\n  }\n  .header-actions {\n    flex-direction: column;\n  }\n  .header-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .actions-buttons {\n    flex-wrap: wrap;\n  }\n}\n@keyframes pulse-glow {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);\n  }\n}\n.pulse-glow {\n  animation: pulse-glow 2s infinite;\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 90px;\n}\n.main-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) transparent;\n  width: calc(100% - 280px);\n}\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.dashboard-container.sidebar.collapsed ~ .main-content {\n  margin-left: 90px;\n  width: calc(100% - 90px);\n}\n.modal-content::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.table-responsive::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-responsive::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.persona-search-modal .search-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.persona-search-modal .search-input-wrapper .search-icon {\n  position: absolute;\n  left: 12px;\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.persona-search-modal .search-input-wrapper .search-input {\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n}\n.persona-search-modal .search-input-wrapper .search-clear {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 50%;\n}\n.persona-search-modal .search-input-wrapper .search-clear:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.persona-search-modal .search-results-container {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.persona-search-modal .search-state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.persona-search-modal .results-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.persona-search-modal .results-list .result-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.persona-search-modal .results-list .result-item:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  transform: translateX(4px);\n  box-shadow: var(--shadow-lg);\n}\n.persona-search-modal .results-list .result-item .result-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.persona-search-modal .results-list .result-item .result-avatar .avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.persona-search-modal .results-list .result-item .result-avatar .avatar-placeholder {\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n.persona-search-modal .results-list .result-item .result-info {\n  flex: 1;\n  min-width: 0;\n}\n.persona-search-modal .results-list .result-item .result-info .result-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.persona-search-modal .results-list .result-item .result-info .result-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.persona-search-modal .results-list .result-item .result-info .result-subtitle .doc-icon {\n  font-size: 12px;\n}\n.persona-search-modal .results-list .result-item .result-info .result-subtitle .doc-type {\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.persona-search-modal .results-list .result-item .result-badge .badge-available {\n  background: var(--success);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.persona-search-modal .no-results {\n  text-align: center;\n  padding: 32px 16px;\n}\n.persona-search-modal .no-results .no-results-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.persona-search-modal .no-results .no-results-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.persona-search-modal .no-results .no-results-text {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.persona-search-modal .no-results .no-results-text strong {\n  color: var(--success);\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.persona-search-modal .no-results .no-results-suggestion {\n  background: var(--bg-secondary);\n  padding: 16px;\n  border-radius: 8px;\n  text-align: left;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.persona-search-modal .no-results .no-results-suggestion span {\n  font-weight: 600;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 8px;\n}\n.persona-search-modal .no-results .no-results-suggestion ul {\n  margin: 0;\n  padding-left: 20px;\n}\n.persona-search-modal .no-results .no-results-suggestion ul li {\n  margin-bottom: 4px;\n}\n.persona-search-modal .initial-message {\n  text-align: center;\n  padding: 32px 16px;\n}\n.persona-search-modal .initial-message .initial-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.3;\n}\n.persona-search-modal .initial-message .initial-text {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.persona-search-modal .initial-message .initial-hint {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.persona-search-modal .help-text {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-left: auto;\n}\n.persona-selector .selected-persona {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  margin-bottom: 8px;\n}\n.persona-selector .selected-persona .persona-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.persona-selector .selected-persona .persona-avatar .avatar-img-small {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.persona-selector .selected-persona .persona-avatar .avatar-placeholder-small {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.persona-selector .selected-persona .persona-info {\n  flex: 1;\n}\n.persona-selector .selected-persona .persona-info .persona-nombre {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.persona-selector .selected-persona .persona-info .persona-documento {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.persona-selector .selected-persona .btn-clear-persona {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.persona-selector .selected-persona .btn-clear-persona:hover {\n  background: var(--bg-tertiary);\n  color: var(--danger);\n}\n.persona-selector .btn-search-persona {\n  width: 100%;\n  padding: 12px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.persona-selector .btn-search-persona:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.persona-selector .btn-search-persona .btn-icon {\n  font-size: 16px;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n.loading-container .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-container span {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-content-sigpaz:not(.minimized) {\n  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-close .close-icon {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wZXJzb25hbC9wYWdlcy9wZXJzb25hbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQVRGO0FBRkE7RUFjSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFUSjtBQVhBO0VBd0JJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0FBVko7QUF4QkE7RUFzQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0FBWEo7QUFoQ0E7RUE4Q00sT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWE47QUF0Q0E7RUFvRFEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBWFI7QUE1Q0E7RUEyRFEsV0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFaUjtBQWNRO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUFaVjtBQTNEQTtFQTRFUSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBZFI7QUFnQlE7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RUFoYUY7RUFrYUE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFoYUY7QUFDRjtBQXNhQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUFwYUY7RUF1YUE7SUFDRSxnQkFBQTtFQXJhRjtBQUNGO0FBd2FBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUF0YUY7RUF5YUE7SUFDRSxrQkFBQTtFQXZhRjtFQTBhQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBeGFGO0VBMmFBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBemFGO0VBNGFBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQTFhRjtBQUNGO0FBNmFBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBM2FGO0VBOGFBO0lBQ0UsZ0JBQUE7SUFDQSxPQUFBO0VBNWFGO0VBK2FBO0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtFQTdhRjtFQWdiQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUE5YUY7RUFpYkE7SUFDRSxlQUFBO0VBL2FGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEVSU09OQUwgLSBFU1RJTE9TIENPTiBWQVJJQUJMRVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE5vdGE6IFRvZGFzIGxhcyB2YXJpYWJsZXMgQ1NTIHZpZW5lbiBkZWZpbmlkYXMgZW4gdGhlbWVzLmxlc3Ncbi8vIFNlIGFjY2VkZW4gbWVkaWFudGUgdmFyKC0tbm9tYnJlLXZhcmlhYmxlKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgQsODwppTUVVFREFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc2VhcmNoLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBhbmltYXRpb246IHNlYXJjaE1vZGFsRmFkZUluIDAuM3MgZWFzZTtcblxuICAuc2VhcmNoLW1vZGFsLWJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgfVxuXG4gIC5zZWFyY2gtbW9kYWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiBzZWFyY2hDb250ZW50U2xpZGUgMC4zcyBlYXNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuXG4gICAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAuc2VhcmNoLW1vZGFsLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLW1vZGFsLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggNTJweCAxNnB4IDQ4cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgICAgfVxuXG4gICAgICAucmVzdWx0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtZGV0YWlscyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAucmVzdWx0LXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWVtcHR5IHtcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzZWFyY2hNb2RhbEZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNlYXJjaENvbnRlbnRTbGlkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFIFBFUlNPTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBlcnNvbmFsLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBERSBQRVJTT05BTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLnBhZ2Utc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSUxUUk9TIEVTUEVDw4PCjUZJQ09TIERFIFBFUlNPTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZpbHRyb3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgLmZpbHRyb3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmZpbHRyby1pdGVtIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRMODwo1TVElDQVMgREUgUEVSU09OQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICBhbmltYXRpb246IHNoaW1tZXIgMnMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHggMTAwJTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGVYKDVkZWcpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEFCTEEgREUgUEVSU09OQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAudGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICAuZGF0YS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgLmNvZGlnby1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICAgICAuY29kaWdvLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGVyc29uYS1jZWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zLWNlbGwge1xuICAgICAgICAgIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5idG4tYWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAgICYudmlldyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWluZm8pO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvKTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmVkaXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5kZWxldGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5wZGYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi50b2dnbGUge1xuICAgICAgICAgICAgICAgICYuYnRuLWFjdGl2YXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYnRuLWRlc2FjdGl2YXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFER0VTIEVTUEVDw4PCjUZJQ09TIERFIFBFUlNPTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNhcmdvLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgJi5jYXJnby1kaXJlY3Rpdm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cblxuICAmLmNhcmdvLWFkbWluaXN0cmF0aXZvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gIH1cblxuICAmLmNhcmdvLW9wZXJhdGl2byB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5jYXJnby10ZWNuaWNvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIH1cbn1cblxuLmVzdGFkby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuZXN0YWRvLWFjdGl2byB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5lc3RhZG8taW5hY3Rpdm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cblxuICAmLmVzdGFkby12YWNhY2lvbmVzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAmLmVzdGFkby1saWNlbmNpYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5lc3RhZG8tc3VzcGVuZGlkbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4uYW50aWd1ZWRhZC1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmFjdGl2by1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuYmFkZ2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5iYWRnZS1kYW5nZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVU0NBRE9SIERFIFBFUlNPTkFTIEVOIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1zZWxlY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zZWxlY3RlZC1wZXJzb25hIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAucGVyc29uYS1zZWxlY3RlZC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAucGVyc29uYS1zZWxlY3RlZC1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNsZWFyLXBlcnNvbmEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdHMtZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG5cbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAucmVzdWx0LXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElORk9STUFDScODwpNOIERFIEFVRElUT1LDg8KNQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hdWRpdC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG5cbiAgLmF1ZGl0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5hdWRpdC1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIC5hdWRpdC12YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAuYXVkaXQtZGF0ZSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFDScODwpNOIERFIEZFQ0hBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi52YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXdhcm5pbmcpO1xuXG4gIC52YWxpZGF0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC52YWxpZGF0aW9uLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgVkFMSURBQ0nDg8KTTiBERSBDT05UUkFUT1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udmFsaWRhY2lvbi1yZXN1bHRzIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLnJlc3VsdGFkby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJi52YWxpZCB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAmLmludmFsaWQge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgIH1cblxuICAgIC5yZXN1bHRhZG8taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAucmVzdWx0YWRvLWluZm8ge1xuICAgICAgZmxleDogMTtcblxuICAgICAgLnJlc3VsdGFkby1wZXJzb25hIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHRhZG8tbWVuc2FqZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzdWx0YWRvLWFjY2lvbmVzIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAuYnRuLXNtYWxsIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udmFsaWRhY2lvbi1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuc3VtbWFyeS1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleDogMTtcblxuICAgIC5zdW1tYXJ5LWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICAuc3VtbWFyeS12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgICYudmFsaWQge1xuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICB9XG5cbiAgICAgICYuaW52YWxpZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVQT1JURVMgRVNQRUPDg8KNRklDT1MgREUgUEVSU09OQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucmVwb3J0ZS1lc3RhZGlzdGljYXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW46IDIwcHggMDtcblxuICAuZXN0YWRpc3RpY2EtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLmVzdGFkaXN0aWNhLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuZXN0YWRpc3RpY2EtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgQ09NUExFVE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG5cbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICB9XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi5idG4tc21hbGwge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRE8gVkFDw4PCjU8gRVNQRUPDg8KNRklDT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDhweCAyNHB4O1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMRVMgR0VORVJBTEVTIChDT01QTEVUT1MpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLW92ZXJsYXkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMjAwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vLyBNb2RhbCBncmFuZGVcbi5tb2RhbC1sYXJnZSB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgfVxufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAzMnB4O1xuXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPUk1VTEFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDMycHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG59XG5cbi5mb3JtLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgLnJlcXVpcmVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1pbnB1dCxcbiAgLmZvcm0tc2VsZWN0LFxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDSEVDS0JPWFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3JtLWNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT09URVIgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAzMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcblxuICAuZm9vdGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5mb290ZXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIENPTkZJUk1BQ0nDg8KTTiBERSBFTElNSU5BQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb25maXJtLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29uZmlybS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmLmNvbmZpcm0td2FybmluZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgUkVQT1JURVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucmVwb3J0ZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLnJlcG9ydGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWhvdmVyLXNoYWRvdyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5yZXBvcnRlLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAucmVwb3J0ZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG59XG5cbi5yZXBvcnRlLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLnJlcG9ydGUtY29udGVudCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnJlcG9ydGUtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFHSU5BQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2luYXRpb24tcGFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFIFBBUkEgUEVSU09OQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5wZXJzb25hbC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3RhdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAudmFsaWRhY2lvbi1zdW1tYXJ5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLmZvb3Rlci1sZWZ0LFxuICAgIC5mb290ZXItcmlnaHQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTIEVTUEVDw4PCjUZJQ0FTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBwdWxzZS1nbG93IHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3OSwgNzAsIDIyOSwgMC40KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSg3OSwgNzAsIDIyOSwgMCk7XG4gIH1cbn1cblxuLnB1bHNlLWdsb3cge1xuICBhbmltYXRpb246IHB1bHNlLWdsb3cgMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMDBweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMDBweCAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVVVElMSVpBQ0nDg8KTTiBERSBFU1RJTE9TIENPTVBBUlRJRE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi10b3A6IDY2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXByaW1hcnkpIHRyYW5zcGFyZW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLmRhc2hib2FyZC1jb250YWluZXIuc2lkZWJhci5jb2xsYXBzZWQgfiAmIHtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gIH1cbn1cblxuLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZGFcbi5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB9XG59XG5cbi8vIFNjcm9sbGJhciBwZXJzb25hbGl6YWRvIHBhcmEgdGFibGFzXG4udGFibGUtcmVzcG9uc2l2ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEVSU09OQSBTRUFSQ0ggTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGVyc29uYS1zZWFyY2gtbW9kYWwge1xuICAuc2VhcmNoLWlucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsZWFyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5zZWFyY2gtc3RhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5yZXN1bHRzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcblxuICAgIC5yZXN1bHQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgLmF2YXRhci1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdmF0YXItcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaW5mbyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAucmVzdWx0LXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LXN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAgIC5kb2MtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRvYy10eXBlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1iYWRnZSB7XG4gICAgICAgIC5iYWRnZS1hdmFpbGFibGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uby1yZXN1bHRzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xuXG4gICAgLm5vLXJlc3VsdHMtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgIC5uby1yZXN1bHRzLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAubm8tcmVzdWx0cy10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vLXJlc3VsdHMtc3VnZ2VzdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmluaXRpYWwtbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMycHggMTZweDtcblxuICAgIC5pbml0aWFsLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG5cbiAgICAuaW5pdGlhbC10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuaW5pdGlhbC1oaW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cblxuICAuaGVscC10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUxFQ1RPUiBERSBQRVJTT05BIE1FSk9SQURPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBlcnNvbmEtc2VsZWN0b3Ige1xuICAuc2VsZWN0ZWQtcGVyc29uYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgLnBlcnNvbmEtYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAuYXZhdGFyLWltZy1zbWFsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAuYXZhdGFyLXBsYWNlaG9sZGVyLXNtYWxsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBlcnNvbmEtaW5mbyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAucGVyc29uYS1ub21icmUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuXG4gICAgICAucGVyc29uYS1kb2N1bWVudG8ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNsZWFyLXBlcnNvbmEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLXNlYXJjaC1wZXJzb25hIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuXG4gICAgLmJ0bi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPQURJTkcgU1BJTk5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTSUdQQVogLSBFU1RJTE9TIMODwppOSUNPUyAoQ09NUExFVE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYXJpYWJsZXMgaW50ZXJuYXMgKG5vIGludGVyZmllcmVuIGNvbiBnbG9iYWxlcylcbkBzaWdwYXotcHJpbWFyeTogIzRmNDZlNTtcbkBzaWdwYXotc2Vjb25kYXJ5OiAjNjM2NmYxO1xuQHNpZ3Bhei1hY2NlbnQ6ICMwMGZmODg7XG5Ac2lncGF6LWRhbmdlcjogI2VmNDQ0NDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9WRVJMQVkgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIC8vIFNvbG8gbW9zdHJhciBmb25kbyBjdWFuZG8gZWwgbW9kYWwgZXN0w4PCoSBhYmllcnRvXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cblxuICAvLyBDdWFuZG8gZXN0w4PCoSBtaW5pbWl6YWRvOiBzaW4gZm9uZG8gbmkgYmxvcXVlb1xuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8vIFNvbG8gbGEgYnVyYnVqYSBlcyBpbnRlcmFjdGl2YVxuICAgIC5mbG9hdGluZy1idWJibGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICYubWluaW1pemVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZCkge1xuICAgIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVIgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAubW9kYWwtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAubW9kYWwtYnRuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogNDJweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk1KTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciAuYnRuLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG5cbiAgICAgIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgei1pbmRleDogMTAwMDI7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIH1cblxuICAgICAgJi5taW5pbWl6ZS1idG4uYW5pbWF0aW5nIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICYuY2xvc2UtbW9kYWwtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENVRVJQTyBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcblxuICAvLyBTY3JvbGxiYXIgcGVyc29uYWxpemFkYVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1zZWNvbmRhcnksIEBzaWdwYXotcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXNlZ3VyYXIgcXVlIGVsIGNvbXBvbmVudGUgaW50ZXJubyBvY3VwZSB0b2RvIGVsIGFuY2hvXG4gIGFwcC1oZWxwLXN1cHBvcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQlVSQlVKQSBGTE9UQU5URSAoTUlOSU1JWkFETylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmxvYXRpbmctYnViYmxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBhbmltYXRpb246IGJ1YmJsZUFwcGVhciAwLjZzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNyk7XG4gIH1cblxuICAmLnB1bHNpbmcge1xuICAgIGFuaW1hdGlvbjogYnViYmxlUHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cblxuICAuYnViYmxlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cblxuICAuYnViYmxlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gIC5idWJibGUtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5idWJibGUtbm90aWZpY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY29sb3I6IEBzaWdwYXotcHJpbWFyeTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuQGtleWZyYW1lcyBtaW5pbWl6ZUFuaW1hdGlvbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpblNsb3cge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])])]
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_personal_pages_personal_component_ts.js.map