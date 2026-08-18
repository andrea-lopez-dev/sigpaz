"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_intermediaciones_pages_intermediacion_component_ts"],{

/***/ 38747:
/*!**********************************************************************!*\
  !*** ./src/app/modules/intermediaciones/components/truncate.pipe.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class TruncatePipe {
  transform(value, limit = 50, completeWords = false, ellipsis = '...') {
    if (!value) return '';
    if (value.length <= limit) return value;
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.substr(0, limit) + ellipsis;
  }
  static ɵfac = function TruncatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TruncatePipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "truncate",
    type: TruncatePipe,
    pure: true
  });
}

/***/ }),

/***/ 72859:
/*!****************************************************************************!*\
  !*** ./src/app/modules/intermediaciones/pages/intermediacion.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemisionConciliacionComponent: () => (/* binding */ RemisionConciliacionComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var _components_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/truncate.pipe */ 38747);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _services_denuncia_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../services/denuncia.service */ 45657);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _services_sentencia_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../services/sentencia.service */ 74950);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../services/personal.service */ 45322);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../services/remision-conciliacion.service */ 52768);
/* harmony import */ var _services_conciliacion_disponible_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../services/conciliacion-disponible.service */ 10825);





























function RemisionConciliacionComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function RemisionConciliacionComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_4_div_11_div_1_Template_div_click_0_listener() {
      const result_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](result_r5.action && result_r5.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 38)(4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](result_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](result_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](result_r5.description);
  }
}
function RemisionConciliacionComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, RemisionConciliacionComponent_div_4_div_11_div_1_Template, 8, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function RemisionConciliacionComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function RemisionConciliacionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 24)(3, "div", 25)(4, "div", 26)(5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function RemisionConciliacionComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, RemisionConciliacionComponent_div_4_button_8_Template, 2, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, RemisionConciliacionComponent_div_4_div_11_Template, 2, 1, "div", 31)(12, RemisionConciliacionComponent_div_4_div_12_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function RemisionConciliacionComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 50)(7, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
}
function RemisionConciliacionComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function RemisionConciliacionComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 58)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, RemisionConciliacionComponent_div_5_div_4_div_9_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function RemisionConciliacionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, RemisionConciliacionComponent_div_5_div_2_Template, 17, 0, "div", 44)(3, RemisionConciliacionComponent_div_5_div_3_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, RemisionConciliacionComponent_div_5_div_4_Template, 10, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function RemisionConciliacionComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\uD83D\uDCE4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 68)(5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Total Remisiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 66)(10, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "\uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 68)(13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, "Total Conciliaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 66)(18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 68)(21, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Denuncias para Remisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 66)(26, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 68)(29, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32, "Denuncias para Conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getEstadisticas().remisiones.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getEstadisticas().conciliaciones.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getEstadisticas().denuncias.para_remision);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getEstadisticas().denuncias.para_conciliacion);
  }
}
function RemisionConciliacionComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Cargando datos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 83)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "\u26A0\uFE0F Excede competencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 84)(16, "p")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Sentencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "p")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Motivo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_21_div_7_Template_button_click_24_listener() {
      const denuncia_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("remision", denuncia_r10.denuncia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, " \uD83D\uDCE4 Crear Remisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const denuncia_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](denuncia_r10.codigo_externo || denuncia_r10.numero_expediente || "S/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.getGravedadClass(ctx_r1.determinarGravedad(denuncia_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 8, ctx_r1.determinarGravedad(denuncia_r10)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](denuncia_r10.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](12, 10, denuncia_r10.fecha_ingreso, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.obtenerSentenciaInfo(denuncia_r10.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.obtenerMotivoExcede(denuncia_r10.denuncia_id));
  }
}
function RemisionConciliacionComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Todas las denuncias que exceden competencias ya han sido remitidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 73)(1, "div", 74)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\uD83D\uDCDD Denuncias Disponibles para Remisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Denuncias que exceden las competencias del m\u00F3dulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, RemisionConciliacionComponent_div_21_div_7_Template, 26, 13, "div", 76)(8, RemisionConciliacionComponent_div_21_div_8_Template, 5, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.getDenunciasParaRemision());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.getDenunciasParaRemision().length === 0);
  }
}
function RemisionConciliacionComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 83)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "\u2705 Dentro de competencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_22_div_7_Template_button_click_15_listener() {
      const denuncia_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("conciliacion", denuncia_r12.denuncia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, " \uD83E\uDD1D Crear Conciliaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const denuncia_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](denuncia_r12.codigo_externo || denuncia_r12.numero_expediente || "S/C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.getGravedadClass(ctx_r1.determinarGravedad(denuncia_r12)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 6, ctx_r1.determinarGravedad(denuncia_r12)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](denuncia_r12.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](12, 8, denuncia_r12.fecha_ingreso, "dd/MM/yyyy"));
  }
}
function RemisionConciliacionComponent_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Todas las denuncias aptas para conciliaci\u00F3n ya tienen procesos activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 73)(1, "div", 74)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\uD83E\uDD1D Denuncias Disponibles para Conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Denuncias dentro de las competencias del m\u00F3dulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, RemisionConciliacionComponent_div_22_div_7_Template, 17, 11, "div", 76)(8, RemisionConciliacionComponent_div_22_div_8_Template, 5, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.getDenunciasParaConciliacion());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.getDenunciasParaConciliacion().length === 0);
  }
}
function RemisionConciliacionComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_23_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.limpiarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Limpiar filtros");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 91)(7, "div", 92)(8, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_23_Template_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.filtroEstado, $event) || (ctx_r1.filtroEstado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function RemisionConciliacionComponent_div_23_Template_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.aplicarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "Todos los estados");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, "Programada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "En Proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "Finalizada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Completada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 92)(26, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "Fecha Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_23_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.filtroFechaDesde, $event) || (ctx_r1.filtroFechaDesde = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function RemisionConciliacionComponent_div_23_Template_input_change_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.aplicarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 92)(30, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31, "Fecha Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_23_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.filtroFechaHasta, $event) || (ctx_r1.filtroFechaHasta = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function RemisionConciliacionComponent_div_23_Template_input_change_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.aplicarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 92)(34, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Buscar Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_23_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.filtroDenuncia, $event) || (ctx_r1.filtroDenuncia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup", function RemisionConciliacionComponent_div_23_Template_input_keyup_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.aplicarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 92)(38, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_23_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.limpiarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](40, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](41, " Limpiar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroEstado);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroFechaDesde);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroFechaHasta);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filtroDenuncia);
  }
}
function RemisionConciliacionComponent_div_24_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "div", 121)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "td")(21, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "td", 123)(24, "div", 124)(25, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_tr_35_Template_button_click_25_listener() {
      const remision_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.generarReportePorInstitucion(remision_r16.institucion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_tr_35_Template_button_click_28_listener() {
      const remision_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalEditar("remision", remision_r16.remision_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_tr_35_Template_button_click_31_listener() {
      const remision_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalEliminar("remision", remision_r16.remision_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_tr_35_Template_button_click_34_listener() {
      const remision_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.exportarPDF("remision", remision_r16.institucion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const remision_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("REM-", remision_r16.remision_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getDenunciaCodigo(remision_r16.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](11, 10, ctx_r1.getDenunciaDescripcion(remision_r16.denuncia_id), 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getInstitucionNombre(remision_r16.institucion_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](16, 13, remision_r16.motivo, 60));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](19, 16, remision_r16.fecha_remision, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.getEstadoClass(remision_r16.estado || "pendiente"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", ctx_r1.getEstadoIcon(remision_r16.estado || "pendiente"), " ", ctx_r1.getEstadoText(remision_r16.estado || "pendiente"), " ");
  }
}
function RemisionConciliacionComponent_div_24_div_36_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_div_36_button_4_Template_button_click_0_listener() {
      const pagina_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active", pagina_r19 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", pagina_r19 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", pagina_r19, " ");
  }
}
function RemisionConciliacionComponent_div_24_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 129)(1, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_div_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, RemisionConciliacionComponent_div_24_div_36_button_4_Template, 2, 4, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_div_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function RemisionConciliacionComponent_div_24_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "No hay remisiones registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Comience creando una nueva remisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_div_37_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("remision"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " Crear primera remisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "\uD83D\uDCE4 Lista de Remisiones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 113)(8, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.descargarReporte("remision"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, " Descargar Reporte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_24_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("remision"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, " Nueva Remisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 115)(17, "table", 116)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, "Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, "Instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "Motivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29, "Fecha Remisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, RemisionConciliacionComponent_div_24_tr_35_Template, 37, 19, "tr", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, RemisionConciliacionComponent_div_24_div_36_Template, 7, 3, "div", 119)(37, RemisionConciliacionComponent_div_24_div_37_Template, 11, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", ctx_r1.totalItems, " registros encontrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.registrosPaginados);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.registrosPaginados.length === 0);
  }
}
function RemisionConciliacionComponent_div_25_tr_35_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_tr_35_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r24);
      const conciliacion_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirVotacion(conciliacion_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDDF3\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_25_tr_35_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_tr_35_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25);
      const conciliacion_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.iniciarConciliacion(conciliacion_r23.conciliacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_25_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "div", 121)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td")(16, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "td")(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "td")(22, "div", 134)(23, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 137)(28, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "div", 139)(30, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "td", 123)(34, "div", 124)(35, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_tr_35_Template_button_click_35_listener() {
      const conciliacion_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.generarActaConciliacion(conciliacion_r23.conciliacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](37, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, RemisionConciliacionComponent_div_25_tr_35_button_38_Template, 3, 0, "button", 142)(39, RemisionConciliacionComponent_div_25_tr_35_button_39_Template, 3, 0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_tr_35_Template_button_click_40_listener() {
      const conciliacion_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.exportarPDF("conciliacion", conciliacion_r23.conciliacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](42, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const conciliacion_r23 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("CONC-", conciliacion_r23.conciliacion_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getDenunciaCodigo(conciliacion_r23.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](11, 21, ctx_r1.getDenunciaDescripcion(conciliacion_r23.denuncia_id), 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](14, 24, conciliacion_r23.fecha_inicio, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx_r1.getEstadoClass(ctx_r1.mapearEstadoUI(conciliacion_r23.estado)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", ctx_r1.getEstadoIcon(ctx_r1.mapearEstadoUI(conciliacion_r23.estado)), " ", ctx_r1.getEstadoText(ctx_r1.mapearEstadoUI(conciliacion_r23.estado)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](conciliacion_r23.resultado_final === "APROBADA" ? "resultado-acuerdo" : "resultado-desacuerdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", conciliacion_r23.resultado_final || "Pendiente", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u2705 ", conciliacion_r23.votos_favor || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u274C ", conciliacion_r23.votos_contra || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("width", ctx_r1.calcularPorcentajeVotos(conciliacion_r23, "favor"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("width", ctx_r1.calcularPorcentajeVotos(conciliacion_r23, "contra"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", ctx_r1.calcularPorcentajeVotos(conciliacion_r23, "favor"), "% / ", ctx_r1.calcularPorcentajeVotos(conciliacion_r23, "contra"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", conciliacion_r23.estado === "EN_PROCESO" || conciliacion_r23.estado === "INCOMPLETA");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", conciliacion_r23.estado === "INCOMPLETA");
  }
}
function RemisionConciliacionComponent_div_25_div_36_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_div_36_button_4_Template_button_click_0_listener() {
      const pagina_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r27).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r28 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active", pagina_r28 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", pagina_r28 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", pagina_r28, " ");
  }
}
function RemisionConciliacionComponent_div_25_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 129)(1, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_div_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, RemisionConciliacionComponent_div_25_div_36_button_4_Template, 2, 4, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_div_36_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function RemisionConciliacionComponent_div_25_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "No hay conciliaciones registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Comience creando una nueva conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_div_37_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("conciliacion"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " Crear primera conciliaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "div", 111)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "\uD83E\uDD1D Lista de Conciliaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 113)(8, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.descargarReporte("conciliacion"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, " Descargar Reporte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_25_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.abrirModalCrear("conciliacion"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, " Nueva Conciliaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 115)(17, "table", 116)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, "Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25, "Fecha Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29, "Resultado");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31, "Votos");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, RemisionConciliacionComponent_div_25_tr_35_Template, 43, 27, "tr", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, RemisionConciliacionComponent_div_25_div_36_Template, 7, 3, "div", 119)(37, RemisionConciliacionComponent_div_25_div_37_Template, 11, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", ctx_r1.totalItems, " registros encontrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.registrosPaginados);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.registrosPaginados.length === 0);
  }
}
function RemisionConciliacionComponent_div_26_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const denuncia_r31 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", denuncia_r31.denuncia_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", denuncia_r31.codigo_externo || denuncia_r31.numero_expediente || "S/C", " - ", ctx_r1.truncate(denuncia_r31.descripcion, 60), " ");
  }
}
function RemisionConciliacionComponent_div_26_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 170)(1, "small")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "C\u00F3digo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "small")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.codigo_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.truncate(ctx_r1.formData.descripcion_denuncia, 80));
  }
}
function RemisionConciliacionComponent_div_26_div_23_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const institucion_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", institucion_r33.institucion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", institucion_r33.nombre, " ");
  }
}
function RemisionConciliacionComponent_div_26_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 155)(1, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " Instituci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "select", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_26_div_23_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.formData.id_institucion, $event) || (ctx_r1.formData.id_institucion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Seleccione una instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, RemisionConciliacionComponent_div_26_div_23_option_8_Template, 2, 2, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.id_institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.instituciones);
  }
}
function RemisionConciliacionComponent_div_26_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 155)(1, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " Motivo de Remisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "textarea", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_26_div_24_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.formData.motivo, $event) || (ctx_r1.formData.motivo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.motivo);
  }
}
function RemisionConciliacionComponent_div_26_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 155)(1, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " Fecha de Audiencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_26_div_26_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.formData.fecha_audiencia, $event) || (ctx_r1.formData.fecha_audiencia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "La fecha real de inicio se registrar\u00E1 al iniciar la conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.fecha_audiencia);
  }
}
function RemisionConciliacionComponent_div_26_div_31_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Evaluaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, " Esta denuncia excede las competencias del m\u00F3dulo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\u26A0\uFE0F Se bloquear\u00E1 la opci\u00F3n de conciliaci\u00F3n para esta denuncia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_26_div_31_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "p")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Evaluaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, " Esta denuncia est\u00E1 dentro de las competencias del m\u00F3dulo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "\u26A0\uFE0F Se bloquear\u00E1 la opci\u00F3n de remisi\u00F3n para esta denuncia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_26_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 178)(1, "div", 179)(2, "div", 180)(3, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Evaluaci\u00F3n de Competencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, RemisionConciliacionComponent_div_26_div_31_div_8_Template, 7, 0, "div", 184)(9, RemisionConciliacionComponent_div_26_div_31_div_9_Template, 7, 0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "remision");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "conciliacion");
  }
}
function RemisionConciliacionComponent_div_26_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 186);
  }
}
function RemisionConciliacionComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "div", 149)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_26_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 151)(9, "form", 152, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngSubmit", function RemisionConciliacionComponent_div_26_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.guardarRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 153)(12, "div", 154)(13, "div", 155)(14, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, " Denuncia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_26_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.formData.id_denuncia, $event) || (ctx_r1.formData.id_denuncia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function RemisionConciliacionComponent_div_26_Template_select_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.onDenunciaChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "Seleccione una denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, RemisionConciliacionComponent_div_26_option_21_Template, 2, 3, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, RemisionConciliacionComponent_div_26_div_22_Template, 10, 2, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, RemisionConciliacionComponent_div_26_div_23_Template, 9, 3, "div", 162)(24, RemisionConciliacionComponent_div_26_div_24_Template, 6, 1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, RemisionConciliacionComponent_div_26_div_26_Template, 6, 1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div", 155)(28, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "textarea", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_26_Template_textarea_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.formData.observaciones, $event) || (ctx_r1.formData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](31, RemisionConciliacionComponent_div_26_div_31_Template, 10, 2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 166)(33, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_26_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, RemisionConciliacionComponent_div_26_span_36_Template, 1, 0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const registroForm_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.modalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.id_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.currentMode === "remision" ? ctx_r1.getDenunciasParaRemision() : ctx_r1.getDenunciasParaConciliacion());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.formData.descripcion_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "remision");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "remision");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "conciliacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("placeholder", ctx_r1.currentMode === "remision" ? "Observaciones adicionales sobre la remisi\u00F3n..." : "Observaciones sobre la conciliaci\u00F3n...");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.formData.id_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !registroForm_r36.form.valid || ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", ctx_r1.isEditing ? "Actualizar" : "Crear", " ", ctx_r1.currentMode === "remision" ? "Remisi\u00F3n" : "Conciliaci\u00F3n", " ");
  }
}
function RemisionConciliacionComponent_div_27_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Lugar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.lugar);
  }
}
function RemisionConciliacionComponent_div_27_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voto_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", voto_r38.nombre_completo);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", voto_r38.nombre_completo, " (", voto_r38.cargo, ") ");
  }
}
function RemisionConciliacionComponent_div_27_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 216)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Seleccione un votante de la lista para poder votar");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function RemisionConciliacionComponent_div_27_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 217)(1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const voto_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](voto_r39.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("(", voto_r39.cargo, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](voto_r39.usado ? "usado" : "disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", voto_r39.usado ? "\u2705 Vot\u00F3" : "\uD83D\uDD04 Pendiente", " ");
  }
}
function RemisionConciliacionComponent_div_27_div_79_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDFE2 Tendencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" Aprobaci\u00F3n con ", (ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_favor) || 0, " votos a favor (", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "favor"), "%) ");
  }
}
function RemisionConciliacionComponent_div_27_div_79_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDD34 Tendencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" Rechazo con ", (ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_contra) || 0, " votos en contra (", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "contra"), "%) ");
  }
}
function RemisionConciliacionComponent_div_27_div_79_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDFE1 Tendencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, " Empate - Se requiere m\u00E1s votos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function RemisionConciliacionComponent_div_27_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 221)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDCCA Resultado Preliminar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, RemisionConciliacionComponent_div_27_div_79_p_4_Template, 4, 2, "p", 184)(5, RemisionConciliacionComponent_div_27_div_79_p_5_Template, 4, 2, "p", 184)(6, RemisionConciliacionComponent_div_27_div_79_p_6_Template, 4, 0, "p", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_favor) || 0) > ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_contra) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_favor) || 0) < ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_contra) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_favor) || 0) === ((ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_contra) || 0));
  }
}
function RemisionConciliacionComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 147)(1, "div", 187)(2, "div", 149)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_27_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarVotingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 151)(9, "div", 188)(10, "div", 83)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 189)(16, "small")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Fecha Inicio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "small")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23, "Estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, RemisionConciliacionComponent_div_27_small_25_Template, 4, 1, "small", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 190)(27, "div", 191)(28, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29, "Votos a Favor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 191)(33, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34, "Votos en Contra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div", 191)(38, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](39, "Votos Restantes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "div", 191)(43, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44, "Total Votos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 194)(48, "div", 195)(49, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](54, "div", 199)(55, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "div", 201)(57, "div", 202)(58, "label", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](59, "Seleccionar Votante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "select", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function RemisionConciliacionComponent_div_27_Template_select_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r1.votoSeleccionado, $event) || (ctx_r1.votoSeleccionado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](62, "Seleccione un votante disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, RemisionConciliacionComponent_div_27_option_63_Template, 2, 3, "option", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](64, RemisionConciliacionComponent_div_27_div_64_Template, 3, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 206)(66, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_27_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.registrarVoto("favor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](68, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](69, " Votar a FAVOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](70, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_27_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.registrarVoto("contra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](72, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](73, " Votar en CONTRA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "div", 209)(75, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](76, "\uD83D\uDCCB Estado de Votos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](78, RemisionConciliacionComponent_div_27_div_78_Template, 7, 5, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](79, RemisionConciliacionComponent_div_27_div_79_Template, 7, 3, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "div", 213)(81, "p")(82, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](83, "\uD83D\uDCDD Instrucciones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "ol")(85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](86, "Seleccione un votante disponible de la lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](88, "Elija votar a FAVOR o en CONTRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](90, "El voto se registrar\u00E1 inmediatamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](91, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](92, "La votaci\u00F3n finaliza cuando se alcancen 4 votos (mayor\u00EDa) o 6 votos (m\u00E1ximo)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](93, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](94, "Puede ver los resultados en tiempo real en la barra de progreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](95, "div", 166)(96, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_27_Template_button_click_96_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarVotingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](97, " Cerrar Votaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](98, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_27_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.finalizarVotacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](99, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](100, "\uD83C\uDFC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](101, " Finalizar Votaci\u00F3n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@slideIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\uD83D\uDDF3\uFE0F Sistema de Votaci\u00F3n - Conciliaci\u00F3n #", ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.conciliacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Denuncia: ", ctx_r1.getDenunciaCodigo(ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getDenunciaDescripcion(ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](20, 27, ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.fecha_inicio, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.lugar);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u2705 ", (ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_favor) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u274C ", (ctx_r1.currentVotingConciliacion == null ? null : ctx_r1.currentVotingConciliacion.votos_contra) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.getVotosDisponibles().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r1.votosDisponibles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("A FAVOR (", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "favor"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("EN CONTRA (", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "contra"), "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("width", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "favor"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("width", ctx_r1.calcularPorcentajeVotos(ctx_r1.currentVotingConciliacion, "contra"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.votoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.getVotosDisponibles());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.votoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.votoSeleccionado || ctx_r1.loadingVotacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.votoSeleccionado || ctx_r1.loadingVotacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.votosDisponibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.getVotosDisponibles().length < ctx_r1.votosDisponibles.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.puedeFinalizarVotacion() || ctx_r1.loadingVotacion);
  }
}
function RemisionConciliacionComponent_div_28_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 186);
  }
}
function RemisionConciliacionComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 147)(1, "div", 223)(2, "div", 224)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "\u26A0\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_28_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 225)(9, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Esta acci\u00F3n no se puede deshacer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 228)(16, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_28_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_div_28_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.eliminarRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, RemisionConciliacionComponent_div_28_span_19_Template, 1, 0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u00BFEst\u00E1 seguro de eliminar esta ", ctx_r1.currentMode === "remision" ? "remisi\u00F3n" : "conciliaci\u00F3n", "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.loading);
  }
}
class RemisionConciliacionComponent {
  router;
  notificationService;
  authService;
  denunciaService;
  catalogoService;
  cdr;
  themeService;
  sentenciaService;
  personalService;
  moduleLoader;
  loadingService;
  remisionConciliacionService;
  conciliacionDisponibleService;
  // ========== VARIABLES COMPARTIDAS ==========
  moduleName = 'Gestión de Intermediaciones';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  isSidebarCollapsed = false;
  showMinimizeNotification = false;
  minimizing = false;
  showHelpSupport = false;
  isMinimized = false;
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  searchQuery = '';
  searchResults = [];
  currentTheme = 'light';
  // Notificaciones
  notifications = [{
    user: 'Sistema SGP',
    action: 'Nueva remisión requerida',
    time: '30 min',
    read: false,
    avatar: 'SS'
  }];
  // Usuario actual
  user = {
    name: 'Usuario',
    email: '',
    avatar: 'U',
    role: 'Usuario'
  };
  // ========== DATOS PRINCIPALES ==========
  remisiones = [];
  conciliaciones = [];
  denuncias = [];
  instituciones = [];
  personalList = [];
  personalDisponible = [];
  conciliacionesDisponiblesNueva = [];
  conciliacionesDisponiblesRemision = [];
  denunciasParaNuevaConciliacion = [];
  denunciasParaRemision = [];
  // ========== ESTADOS DE CARGA ==========
  loading = false;
  loadingDenuncias = false;
  loadingInstituciones = false;
  loadingRemisiones = false;
  loadingConciliaciones = false;
  loadingPersonal = false;
  loadingVotacion = false;
  panelVotacionAbierto = false;
  // ========== VARIABLES PARA MODALES ==========
  showModal = false;
  showDeleteModal = false;
  showVotingModal = false;
  modalTitle = 'Nuevo Registro';
  isEditing = false;
  currentId = null;
  currentMode = 'remision';
  currentVotingConciliacion = null;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
  // ========== DATOS DEL FORMULARIO ==========
  formData = {
    id_denuncia: null,
    id_institucion: null,
    motivo: '',
    observaciones: '',
    fecha_audiencia: '',
    lugar: 'Sala de Conciliación Principal',
    participantes: '',
    codigo_denuncia: '',
    descripcion_denuncia: ''
  };
  sentencias = [];
  // ========== VARIABLES PARA VOTACIÓN ==========
  votosDisponibles = [];
  votoSeleccionado = '';
  // ========== PAGINACIÓN ==========
  paginaActual = 1;
  itemsPorPagina = 10;
  totalItems = 0;
  // ========== FILTROS ==========
  filtroEstado = 'todos';
  filtroFechaDesde = '';
  filtroFechaHasta = '';
  filtroDenuncia = '';
  // ========== CONSTRUCTOR ==========
  constructor(router, notificationService, authService, denunciaService, catalogoService, cdr, themeService, sentenciaService, personalService, moduleLoader, loadingService, remisionConciliacionService, conciliacionDisponibleService) {
    this.router = router;
    this.notificationService = notificationService;
    this.authService = authService;
    this.denunciaService = denunciaService;
    this.catalogoService = catalogoService;
    this.cdr = cdr;
    this.themeService = themeService;
    this.sentenciaService = sentenciaService;
    this.personalService = personalService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.remisionConciliacionService = remisionConciliacionService;
    this.conciliacionDisponibleService = conciliacionDisponibleService;
  }
  // ========== LIFECYCLE HOOKS ==========
  ngOnInit() {
    this.setupThemeSubscription();
    this.setupKeyboardShortcuts();
    this.cargarDatosIniciales();
    this.cargarUsuario();
    this.cargarDenunciasDesdeServicio();
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
  ngOnDestroy() {
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  checkAndMarkReady() {
    if (this.isMarkedReady) return;
    const hasContent = document.querySelector('.remision-conciliacion-container, .main-content, app-resolucion');
    const hasData = document.querySelector('.quick-stats, .denuncias-panel, .filtros-container, .table-container');
    console.log(`🔍 [Resolución] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  // ========== MÉTODOS PÚBLICOS PARA EL HTML ==========
  /**
   * Cambiar el modo actual (remisión/conciliación)
   */
  setCurrentMode(mode) {
    this.currentMode = mode;
    this.paginaActual = 1;
    this.calcularTotalItems();
    this.limpiarFiltros();
  }
  /**
   * Determinar gravedad de una denuncia (público para el HTML)
   */
  determinarGravedad(denuncia) {
    if (denuncia.tipo_conflicto_id === 1) return 'alta';
    if (denuncia.tipo_conflicto_id === 2) return 'media';
    if (denuncia.tipo_conflicto_id === 3) return 'baja';
    // Lógica por defecto basada en descripción
    const descripcion = denuncia.descripcion?.toLowerCase() || '';
    if (descripcion.includes('grave') || descripcion.includes('violencia')) return 'alta';
    if (descripcion.includes('medio') || descripcion.includes('moderado')) return 'media';
    return 'baja';
  }
  /**
   * Mapear estado de backend a frontend
   */
  mapearEstadoUI(estadoBackend) {
    const mapa = {
      'INCOMPLETA': 'pendiente',
      'EN_PROCESO': 'en_proceso',
      'COMPLETA': 'finalizada'
    };
    return mapa[estadoBackend] || estadoBackend.toLowerCase();
  }
  // ========== CARGA DE DATOS ==========
  cargarDenuncias() {
    this.loadingDenuncias = true;
    return this.denunciaService.getDenuncias({
      per_page: 100
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      this.loadingDenuncias = false;
      return response.success && response.data ? response.data : [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.loadingDenuncias = false;
      console.error('Error cargando denuncias:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarInstituciones() {
    this.loadingInstituciones = true;
    return this.catalogoService.getInstituciones().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(instituciones => {
      this.loadingInstituciones = false;
      return instituciones || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.loadingInstituciones = false;
      console.error('Error cargando instituciones:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarRemisiones() {
    this.loadingRemisiones = true;
    return this.remisionConciliacionService.listarRemisiones().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(remisiones => {
      this.loadingRemisiones = false;
      return remisiones || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.loadingRemisiones = false;
      console.error('Error cargando remisiones:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarConciliaciones() {
    this.loadingConciliaciones = true;
    return this.remisionConciliacionService.listarConciliaciones().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(conciliaciones => {
      this.loadingConciliaciones = false;
      return conciliaciones || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.loadingConciliaciones = false;
      console.error('Error cargando conciliaciones:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarPersonal() {
    this.loadingPersonal = true;
    return this.personalService.listarPersonal({
      per_page: 100
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      this.loadingPersonal = false;
      return response.success && response.data ? response.data : [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.loadingPersonal = false;
      console.error('Error cargando personal:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarUsuario() {
    // Usar el método correcto de AuthService
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user = {
        name: currentUser.nombre_usuario || 'Usuario',
        email: currentUser.email || '',
        avatar: currentUser.nombre_usuario?.charAt(0) || 'U',
        role: currentUser.rol_nombre || 'Usuario'
      };
    }
  }
  // ========== MÉTODOS PARA REMISIÓN ==========
  crearRemision() {
    if (!this.validarFormularioRemision()) return;
    this.loading = true;
    const dto = {
      denuncia_id: this.formData.id_denuncia,
      institucion_id: this.formData.id_institucion,
      motivo: this.formData.motivo,
      observaciones: this.formData.observaciones,
      fecha_remision: new Date().toISOString()
    };
    this.remisionConciliacionService.crearRemision(dto).subscribe({
      next: nuevaRemision => {
        this.remisiones = [nuevaRemision, ...this.remisiones];
        this.calcularTotalItems();
        this.cerrarModal();
        this.resetForm();
        this.notificationService.showSuccess('✅ Remisión creada exitosamente');
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.notificationService.showError(error.message || 'Error al crear remisión');
      }
    });
  }
  actualizarRemision() {
    if (!this.validarFormularioRemision() || !this.currentId) return;
    this.loading = true;
    const dto = {
      motivo: this.formData.motivo,
      observaciones: this.formData.observaciones
    };
    this.remisionConciliacionService.actualizarRemision(this.currentId, dto).subscribe({
      next: remisionActualizada => {
        const index = this.remisiones.findIndex(r => r.remision_id === this.currentId);
        if (index !== -1) {
          this.remisiones[index] = remisionActualizada;
        }
        this.cerrarModal();
        this.resetForm();
        this.notificationService.showSuccess('✅ Remisión actualizada exitosamente');
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.notificationService.showError(error.message || 'Error al actualizar remisión');
      }
    });
  }
  eliminarRemision(id) {
    this.loading = true;
    this.remisionConciliacionService.eliminarRemision(id).subscribe({
      next: exito => {
        if (exito) {
          this.remisiones = this.remisiones.filter(r => r.remision_id !== id);
          this.calcularTotalItems();
          this.cerrarDeleteModal();
          this.notificationService.showSuccess('✅ Remisión eliminada exitosamente');
        }
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.notificationService.showError(error.message || 'Error al eliminar remisión');
      }
    });
  }
  // ========== MÉTODOS PARA CONCILIACIÓN ==========
  crearConciliacion() {
    if (!this.validarFormularioConciliacion()) return;
    this.loading = true;
    const dto = {
      denuncia_id: this.formData.id_denuncia,
      observaciones: this.formData.observaciones
    };
    this.remisionConciliacionService.crearConciliacion(dto).subscribe({
      next: nuevaConciliacion => {
        this.conciliaciones = [nuevaConciliacion, ...this.conciliaciones];
        this.calcularTotalItems();
        this.cerrarModal();
        this.resetForm();
        this.notificationService.showSuccess('✅ Conciliación creada exitosamente');
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.notificationService.showError(error.message || 'Error al crear conciliación');
      }
    });
  }
  // ========== MÉTODOS PARA VOTACIÓN ==========
  resetVotos() {
    this.votosDisponibles = [];
    this.votoSeleccionado = '';
    this.personalDisponible = [];
  }
  getVotosDisponibles() {
    return this.votosDisponibles.filter(v => !v.usado);
  }
  // ========== MÉTODOS DE FILTRADO ==========
  getRegistrosFiltrados() {
    let registros = this.currentMode === 'remision' ? [...this.remisiones] : [...this.conciliaciones];
    if (this.filtroEstado !== 'todos') {
      registros = registros.filter(r => {
        if (this.currentMode === 'remision') {
          return r.estado === this.filtroEstado;
        } else {
          const estadoUI = this.mapearEstadoUI(r.estado);
          return estadoUI === this.filtroEstado;
        }
      });
    }
    if (this.filtroFechaDesde) {
      const desde = new Date(this.filtroFechaDesde);
      desde.setHours(0, 0, 0, 0);
      registros = registros.filter(r => {
        const fecha = this.currentMode === 'remision' ? new Date(r.fecha_remision) : new Date(r.fecha_inicio);
        return fecha >= desde;
      });
    }
    if (this.filtroFechaHasta) {
      const hasta = new Date(this.filtroFechaHasta);
      hasta.setHours(23, 59, 59, 999);
      registros = registros.filter(r => {
        const fecha = this.currentMode === 'remision' ? new Date(r.fecha_remision) : new Date(r.fecha_inicio);
        return fecha <= hasta;
      });
    }
    if (this.filtroDenuncia) {
      const searchTerm = this.filtroDenuncia.toLowerCase();
      registros = registros.filter(r => {
        const denuncia = this.denuncias.find(d => d.denuncia_id === r.denuncia_id);
        return denuncia && ((denuncia.codigo_externo || '').toLowerCase().includes(searchTerm) || (denuncia.numero_expediente || '').toLowerCase().includes(searchTerm) || (denuncia.descripcion || '').toLowerCase().includes(searchTerm));
      });
    }
    return registros;
  }
  getEstadoClass(estado) {
    const mapaClases = {
      'pendiente': 'estado-pendiente',
      'programada': 'estado-programada',
      'en_proceso': 'estado-proceso',
      'finalizada': 'estado-finalizada',
      'completada': 'estado-completada',
      'anulada': 'estado-anulada',
      'INCOMPLETA': 'estado-pendiente',
      'EN_PROCESO': 'estado-proceso',
      'COMPLETA': 'estado-finalizada'
    };
    return mapaClases[estado] || 'estado-desconocido';
  }
  getEstadoIcon(estado) {
    const mapaIconos = {
      'pendiente': '⏳',
      'programada': '📅',
      'en_proceso': '⚖️',
      'finalizada': '✅',
      'completada': '📤',
      'anulada': '❌',
      'INCOMPLETA': '⏳',
      'EN_PROCESO': '⚖️',
      'COMPLETA': '✅'
    };
    return mapaIconos[estado] || '❓';
  }
  getEstadoText(estado) {
    const mapaTextos = {
      'pendiente': 'Pendiente',
      'programada': 'Programada',
      'en_proceso': 'En Proceso',
      'finalizada': 'Finalizada',
      'completada': 'Completada',
      'anulada': 'Anulada',
      'INCOMPLETA': 'Incompleta',
      'EN_PROCESO': 'En Proceso',
      'COMPLETA': 'Completa'
    };
    return mapaTextos[estado] || estado;
  }
  getGravedadClass(gravedad) {
    const mapaClases = {
      'alta': 'gravedad-alta',
      'media': 'gravedad-media',
      'baja': 'gravedad-baja'
    };
    return mapaClases[gravedad] || 'gravedad-desconocida';
  }
  getDenunciaCodigo(id) {
    if (!id) return 'S/C';
    const denuncia = this.denuncias.find(d => d.denuncia_id === id);
    return denuncia ? denuncia.codigo_externo || denuncia.numero_expediente || 'S/C' : 'DESCONOCIDA';
  }
  getDenunciaDescripcion(id) {
    if (!id) return 'Descripción no disponible';
    const denuncia = this.denuncias.find(d => d.denuncia_id === id);
    return denuncia ? denuncia.descripcion : 'Descripción no disponible';
  }
  getInstitucionNombre(id) {
    const institucion = this.instituciones.find(i => i.institucion_id === id);
    return institucion ? institucion.nombre : 'Desconocida';
  }
  // ========== MÉTODOS DE FORMULARIO ==========
  validarFormularioRemision() {
    if (!this.formData.id_denuncia) {
      this.notificationService.showWarning('⚠️ Seleccione una denuncia');
      return false;
    }
    if (!this.formData.id_institucion) {
      this.notificationService.showWarning('⚠️ Seleccione una institución');
      return false;
    }
    if (!this.formData.motivo || this.formData.motivo.trim().length < 10) {
      this.notificationService.showWarning('⚠️ El motivo debe tener al menos 10 caracteres');
      return false;
    }
    return true;
  }
  validarFormularioConciliacion() {
    if (!this.formData.id_denuncia) {
      this.notificationService.showWarning('⚠️ Seleccione una denuncia');
      return false;
    }
    return true;
  }
  onDenunciaChange(event) {
    const idDenuncia = event.target.value;
    if (idDenuncia) {
      const denuncia = this.denuncias.find(d => d.denuncia_id == idDenuncia);
      if (denuncia) {
        this.formData.codigo_denuncia = denuncia.codigo_externo || denuncia.numero_expediente;
        this.formData.descripcion_denuncia = denuncia.descripcion;
        if (this.currentMode === 'remision' && !this.isEditing) {
          this.formData.motivo = this.generarMotivoRemision(denuncia);
        }
      }
    }
  }
  generarMotivoRemision(denuncia) {
    const gravedad = this.determinarGravedad(denuncia);
    return `La denuncia ${denuncia.codigo_externo || denuncia.numero_expediente || 'S/C'} excede las competencias del módulo por su gravedad (${gravedad}). Se requiere intervención de instancia superior.`;
  }
  resetForm() {
    this.formData = {
      id_denuncia: null,
      id_institucion: null,
      motivo: '',
      observaciones: '',
      fecha_audiencia: '',
      lugar: 'Sala de Conciliación Principal',
      participantes: '',
      codigo_denuncia: '',
      descripcion_denuncia: ''
    };
    this.currentId = null;
    this.isEditing = false;
  }
  abrirModalCrear(mode, idDenuncia) {
    this.currentMode = mode;
    this.isEditing = false;
    this.modalTitle = mode === 'remision' ? '📤 Nueva Remisión' : '🤝 Nueva Conciliación';
    this.resetForm();
    if (idDenuncia) {
      const denuncia = this.denuncias.find(d => d.denuncia_id === idDenuncia);
      if (denuncia) {
        this.formData.id_denuncia = idDenuncia;
        this.formData.descripcion_denuncia = denuncia.descripcion;
        this.formData.codigo_denuncia = denuncia.codigo_externo || denuncia.numero_expediente;
        if (mode === 'remision') {
          this.formData.motivo = this.generarMotivoRemision(denuncia);
        } else {
          const fecha = new Date();
          fecha.setDate(fecha.getDate() + 7);
          this.formData.fecha_audiencia = fecha.toISOString().slice(0, 16);
        }
      }
    }
    this.showModal = true;
  }
  abrirModalEliminar(mode, id) {
    this.currentMode = mode;
    this.currentId = id;
    this.showDeleteModal = true;
  }
  guardarRegistro() {
    if (this.currentMode === 'remision') {
      if (this.isEditing && this.currentId) {
        this.actualizarRemision();
      } else {
        this.crearRemision();
      }
    } else {
      if (this.isEditing && this.currentId) {
        this.notificationService.showInfo('Funcionalidad de edición en desarrollo');
      } else {
        this.crearConciliacion();
      }
    }
  }
  eliminarRegistro() {
    if (this.currentId) {
      if (this.currentMode === 'remision') {
        this.eliminarRemision(this.currentId);
      } else {
        this.notificationService.showInfo('Funcionalidad en desarrollo');
        this.cerrarDeleteModal();
      }
    }
  }
  cerrarModal() {
    this.showModal = false;
    this.resetForm();
  }
  cerrarDeleteModal() {
    this.showDeleteModal = false;
    this.currentId = null;
  }
  // ========== MÉTODOS DE EXPORTACIÓN ==========
  generarActaConciliacion(id) {
    this.remisionConciliacionService.obtenerResumenConciliacion(id).subscribe({
      next: resumen => {
        console.log('📄 Acta de conciliación:', resumen);
        this.notificationService.showSuccess('Acta generada (ver consola)');
      },
      error: () => {
        this.notificationService.showError('Error al generar acta');
      }
    });
  }
  generarReportePorInstitucion(id) {
    const remisionesFiltradas = this.remisiones.filter(r => r.institucion_id === id);
    console.log('📊 Reporte por institución:', {
      institucion_id: id,
      total: remisionesFiltradas.length,
      remisiones: remisionesFiltradas
    });
    this.notificationService.showSuccess('Reporte generado (ver consola)');
  }
  generarReporteGeneralRemisiones() {
    const reporte = {
      titulo: 'REPORTE GENERAL DE REMISIONES',
      fecha: new Date().toISOString(),
      total: this.remisiones.length,
      por_estado: {
        pendientes: this.remisiones.filter(r => r.estado === 'pendiente').length,
        completadas: this.remisiones.filter(r => r.estado === 'completada').length
      },
      detalle: this.remisiones
    };
    return JSON.stringify(reporte, null, 2);
  }
  generarReporteGeneralConciliaciones() {
    const reporte = {
      titulo: 'REPORTE GENERAL DE CONCILIACIONES',
      fecha: new Date().toISOString(),
      total: this.conciliaciones.length,
      por_estado: {
        incompletas: this.conciliaciones.filter(c => c.estado === 'INCOMPLETA').length,
        en_proceso: this.conciliaciones.filter(c => c.estado === 'EN_PROCESO').length,
        completas: this.conciliaciones.filter(c => c.estado === 'COMPLETA').length
      },
      detalle: this.conciliaciones
    };
    return JSON.stringify(reporte, null, 2);
  }
  descargarReporte(mode) {
    const reporte = mode === 'remision' ? this.generarReporteGeneralRemisiones() : this.generarReporteGeneralConciliaciones();
    const blob = new Blob([reporte], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte_${mode}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
    this.notificationService.showSuccess(`📥 Reporte de ${mode} descargado`);
  }
  exportarPDF(mode, id) {
    this.notificationService.showInfo(`📄 Exportando ${mode} a PDF...`);
  }
  exportarExcel(mode, id) {
    this.notificationService.showInfo(`📊 Exportando ${mode} a Excel...`);
  }
  // ========== MÉTODOS DE PAGINACIÓN ==========
  calcularTotalItems() {
    this.totalItems = this.getRegistrosFiltrados().length;
  }
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
  }
  get totalPaginas() {
    return Math.ceil(this.totalItems / this.itemsPorPagina);
  }
  get registrosPaginados() {
    const registros = this.getRegistrosFiltrados();
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return registros.slice(inicio, fin);
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
  cambiarPaginaNumero(pagina) {
    if (typeof pagina === 'number') {
      this.paginaActual = pagina;
    }
  }
  // ========== MÉTODOS DE FILTROS ==========
  aplicarFiltros() {
    this.paginaActual = 1;
    this.calcularTotalItems();
  }
  limpiarFiltros() {
    this.filtroEstado = 'todos';
    this.filtroFechaDesde = '';
    this.filtroFechaHasta = '';
    this.filtroDenuncia = '';
    this.paginaActual = 1;
    this.calcularTotalItems();
    this.notificationService.showInfo('Filtros limpiados');
  }
  // ========== MÉTODOS DE ESTADÍSTICAS ==========
  getEstadisticas() {
    return {
      remisiones: {
        total: this.remisiones.length,
        pendientes: this.remisiones.filter(r => r.estado === 'pendiente').length,
        completadas: this.remisiones.filter(r => r.estado === 'completada').length
      },
      conciliaciones: {
        total: this.conciliaciones.length,
        incompletas: this.conciliaciones.filter(c => c.estado === 'INCOMPLETA').length,
        en_proceso: this.conciliaciones.filter(c => c.estado === 'EN_PROCESO').length,
        completas: this.conciliaciones.filter(c => c.estado === 'COMPLETA').length,
        aprobadas: this.conciliaciones.filter(c => c.resultado_final === 'APROBADA').length,
        rechazadas: this.conciliaciones.filter(c => c.resultado_final === 'RECHAZADA').length
      },
      denuncias: {
        total: this.denuncias.length,
        para_remision: this.getDenunciasParaRemision().length,
        para_conciliacion: this.getDenunciasParaConciliacion().length
      }
    };
  }
  // ========== MÉTODOS DE BÚSQUEDA ==========
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
      this.searchResults = [{
        title: 'Ver Remisiones',
        description: 'Mostrar todas las remisiones',
        icon: '📤',
        action: () => {
          this.setCurrentMode('remision');
          this.limpiarFiltros();
          this.closeSearchModal();
        }
      }, {
        title: 'Ver Conciliaciones',
        description: 'Mostrar todas las conciliaciones',
        icon: '🤝',
        action: () => {
          this.setCurrentMode('conciliacion');
          this.limpiarFiltros();
          this.closeSearchModal();
        }
      }, ...this.denuncias.slice(0, 5).map(d => ({
        title: d.codigo_externo || d.numero_expediente || 'Denuncia',
        description: d.descripcion?.substring(0, 100),
        icon: '📝',
        action: () => {
          const modo = this.getDenunciasParaRemision().some(dn => dn.denuncia_id === d.denuncia_id) ? 'remision' : 'conciliacion';
          this.abrirModalCrear(modo, d.denuncia_id);
          this.closeSearchModal();
        }
      }))];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ========== MÉTODOS DE UTILIDAD ==========
  truncate(text, length) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
  get unreadNotificationsCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  // ========== MÉTODOS DE TEMA Y UI ==========
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
        if (this.showVotingModal) this.cerrarVotingModal();
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
  }
  // ========== MÉTODOS DEL MENÚ Y HEADER ==========
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
    if (this.isNotificationsOpen) {
      this.isUserMenuOpen = false;
    }
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      this.isNotificationsOpen = false;
    }
  }
  onMarkAllAsRead() {
    this.notifications.forEach(notification => notification.read = true);
    this.notificationService.showSuccess('Notificaciones marcadas como leídas');
  }
  // ========== MÉTODOS DEL MODAL DE AYUDA ==========
  minimizeToBubble() {
    this.isMinimized = true;
    document.body.classList.add('minimized-mode');
    setTimeout(() => {
      this.minimizing = false;
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
    if (event.target.classList.contains('modal-overlay-sigpaz')) {
      if (this.showHelpSupport && !this.isMinimized) {
        this.minimizeToBubble();
      }
    }
  }
  // Agregar este método para depuración
  verificarDenunciasDisponibles() {
    console.log('======= DIAGNÓSTICO DE DENUNCIAS =======');
    console.log('Total denuncias:', this.denuncias.length);
    console.log('Total remisiones:', this.remisiones.length);
    console.log('Total conciliaciones:', this.conciliaciones.length);
    console.log('Denuncias para remisión:', this.getDenunciasParaRemision().length);
    console.log('Denuncias para conciliación:', this.getDenunciasParaConciliacion().length);
    console.log('=======================================');
  }
  obtenerSentenciaInfo(denunciaId) {
    const sentencia = this.sentencias?.find(s => s.conciliacion?.denuncia_id === denunciaId);
    if (!sentencia) return 'Sin sentencia';
    return `#${sentencia.sentencia_id} - ${sentencia.tipo_resolucion} - ${new Date(sentencia.fecha_sentencia).toLocaleDateString('es-ES')}`;
  }
  obtenerMotivoExcede(denunciaId) {
    const sentencia = this.sentencias?.find(s => s.conciliacion?.denuncia_id === denunciaId);
    return sentencia?.motivo_excede_competencias || 'La sentencia excede las competencias del módulo';
  }
  isRemisionBloqueada(idDenuncia) {
    // Una remisión está bloqueada si hay conciliación activa
    return this.conciliaciones.some(c => c.denuncia_id === idDenuncia && ['INCOMPLETA', 'EN_PROCESO'].includes(c.estado));
  }
  isConciliacionBloqueada(idDenuncia) {
    // Una conciliación está bloqueada si hay remisión activa
    return this.remisiones.some(r => r.denuncia_id === idDenuncia);
  }
  iniciarConciliacion(id) {
    this.loading = true;
    this.remisionConciliacionService.iniciarConciliacion(id).subscribe({
      next: conciliacion => {
        console.log('📥 Respuesta iniciarConciliacion:', conciliacion);
        // Actualizar estado local inmediato en microtask para evitar NG0100
        Promise.resolve().then(() => {
          const index = this.conciliaciones.findIndex(c => c.conciliacion_id === id);
          if (index !== -1) {
            this.conciliaciones[index] = conciliacion;
          } else {
            this.conciliaciones.unshift(conciliacion);
          }
          // Forzar recarga desde servidor para confirmar persistencia
          this.cargarConciliaciones().subscribe(data => {
            this.conciliaciones = data;
            this.cargarRemisiones().subscribe(r => {
              this.remisiones = r;
              this.calcularTotalItems();
              this.notificationService.showSuccess('✅ Conciliación iniciada (estado recargado desde servidor)');
              this.loading = false;
            }, () => {
              this.loading = false;
              this.notificationService.showWarning('Conciliación iniciada pero fallo al recargar remisiones');
            });
          }, () => {
            this.loading = false;
            this.notificationService.showWarning('Conciliación iniciada pero fallo al recargar conciliaciones');
          });
        });
      },
      error: error => {
        console.error('❌ Error al iniciar conciliación:', error);
        this.loading = false;
        this.notificationService.showError(error.message || 'Error al iniciar conciliación');
      }
    });
  }
  puedeFinalizarVotacion() {
    if (!this.currentVotingConciliacion) return true;
    const votosFavor = this.currentVotingConciliacion.votos_favor ?? 0;
    const votosContra = this.currentVotingConciliacion.votos_contra ?? 0;
    const totalVotos = votosFavor + votosContra;
    // ✅ Si ya hay 3 o más votos totales, se puede finalizar
    return totalVotos < 3;
  }
  cerrarVotingModal() {
    this.showVotingModal = false;
    this.currentVotingConciliacion = null;
    this.resetVotos();
    this.panelVotacionAbierto = false;
    // 👈 RECARGAR conciliaciones para tener datos frescos
    this.cargarConciliaciones().subscribe(data => {
      this.conciliaciones = data;
      this.calcularTotalItems();
      this.cdr.detectChanges();
    });
    // 👈 También recargar denuncias
    this.cargarDenuncias().subscribe(denuncias => {
      this.denuncias = denuncias;
    });
  }
  registrarVoto(tipo) {
    console.log('🗳️ Intentando registrar voto:', {
      tipo,
      votoSeleccionado: this.votoSeleccionado
    });
    console.log('📋 votosDisponibles actual:', this.votosDisponibles);
    console.log('🔍 currentVotingConciliacion:', this.currentVotingConciliacion);
    if (!this.currentVotingConciliacion || !this.votoSeleccionado) {
      this.notificationService.showWarning('⚠️ Seleccione un voto disponible');
      return;
    }
    const conciliacionId = this.currentVotingConciliacion.conciliacion_id;
    if (!conciliacionId) {
      this.notificationService.showError('Error: No se pudo identificar la conciliación');
      return;
    }
    const votoSeleccionado = this.votosDisponibles.find(v => v.nombre_completo === this.votoSeleccionado);
    console.log('🔎 Votante encontrado:', votoSeleccionado);
    if (!votoSeleccionado || votoSeleccionado.usado) {
      this.notificationService.showWarning('⚠️ Voto no válido o ya utilizado');
      return;
    }
    this.loadingVotacion = true;
    // ✅ CORRECCIÓN PRINCIPAL: Enviar como string 'true' o 'false'
    const valorVoto = tipo === 'favor' ? 'true' : 'false';
    const dto = {
      personal_id: votoSeleccionado.personal_id,
      voto: valorVoto,
      // 👈 Enviar como string para que Laravel lo convierta correctamente
      comentario: ''
    };
    console.log('📤 Enviando voto al backend:', {
      conciliacionId,
      dto
    });
    this.remisionConciliacionService.registrarVoto(conciliacionId, dto).subscribe({
      next: response => {
        console.log('📥 Voto registrado, respuesta:', response);
        votoSeleccionado.usado = true;
        if (response && response.conciliacion && this.currentVotingConciliacion) {
          this.currentVotingConciliacion = response.conciliacion;
        } else if (response && this.currentVotingConciliacion) {
          this.currentVotingConciliacion = response;
        }
        if (this.currentVotingConciliacion) {
          const index = this.conciliaciones.findIndex(c => c.conciliacion_id === conciliacionId);
          if (index !== -1 && this.currentVotingConciliacion) {
            this.conciliaciones[index] = this.currentVotingConciliacion;
          }
        }
        this.votoSeleccionado = '';
        this.loadingVotacion = false;
        this.cdr.detectChanges();
        this.notificationService.showSuccess('✅ Voto registrado exitosamente');
        if (this.currentVotingConciliacion) {
          const estado = this.currentVotingConciliacion.estado;
          const votosFavor = this.currentVotingConciliacion.votos_favor ?? 0;
          const votosContra = this.currentVotingConciliacion.votos_contra ?? 0;
          if (estado === 'COMPLETA') {
            const resultado = votosFavor > votosContra ? 'APROBADA' : 'RECHAZADA';
            this.notificationService.showSuccess(`✅ Conciliación completada. Resultado: ${resultado}`);
            setTimeout(() => {
              this.cerrarVotingModal();
            }, 2000);
            this.cargarConciliaciones().subscribe(data => {
              this.conciliaciones = data;
              this.calcularTotalItems();
            });
            this.cargarDenuncias().subscribe(denuncias => {
              this.denuncias = denuncias;
            });
          } else {
            this.cargarPersonalDisponible(conciliacionId);
          }
        }
      },
      error: error => {
        console.error('❌ Error registrando voto:', error);
        this.loadingVotacion = false;
        this.notificationService.showError(error.message || 'Error al registrar voto');
      }
    });
  }
  // Fix recargarConciliacionActual method:
  recargarConciliacionActual() {
    if (!this.currentVotingConciliacion) return;
    this.remisionConciliacionService.obtenerConciliacion(this.currentVotingConciliacion.conciliacion_id).subscribe({
      next: conciliacion => {
        // Actualizar la conciliación actual
        this.currentVotingConciliacion = conciliacion;
        // Actualizar en la lista principal
        const index = this.conciliaciones.findIndex(c => c.conciliacion_id === conciliacion.conciliacion_id);
        if (index !== -1) {
          this.conciliaciones[index] = conciliacion;
        }
        this.votoSeleccionado = '';
        this.loadingVotacion = false;
        this.notificationService.showSuccess('✅ Voto registrado exitosamente');
        // Verificar si todos los votos han sido usados
        const todosUsados = this.votosDisponibles.every(v => v.usado);
        if (todosUsados) {
          setTimeout(() => {
            this.notificationService.showInfo('🎉 Todos los votos han sido emitidos');
          }, 1000);
        }
        // Si la conciliación se completó, mostrar mensaje
        if (conciliacion.estado === 'COMPLETA') {
          this.notificationService.showSuccess(`✅ Conciliación completada. Resultado: ${conciliacion.resultado_final || 'APROBADA'}`);
        }
      },
      error: error => {
        this.loadingVotacion = false;
        this.notificationService.showError('Error al recargar la conciliación');
      }
    });
  }
  // Fix calcularPorcentajeVotos method (already correct, but ensure null safety):
  calcularPorcentajeVotos(conciliacion, tipo) {
    if (!conciliacion) return 0;
    // ✅ CORREGIDO: Usar valores por defecto (0) para evitar undefined
    const favor = conciliacion.votos_favor ?? 0;
    const contra = conciliacion.votos_contra ?? 0;
    const total = favor + contra;
    if (total === 0) return 0;
    return tipo === 'favor' ? Math.round(favor / total * 100) : Math.round(contra / total * 100);
  }
  // Fix getVotacionEstado method:
  getVotacionEstado(idConciliacion) {
    const conciliacion = this.conciliaciones.find(c => c.conciliacion_id === idConciliacion);
    if (!conciliacion) return 'No disponible';
    // ✅ CORREGIDO: Usar valores por defecto (0) para evitar undefined
    const favor = conciliacion.votos_favor ?? 0;
    const contra = conciliacion.votos_contra ?? 0;
    return `Votos: ${favor} a favor, ${contra} en contra`;
  }
  // Fix finalizarVotacion method:
  finalizarVotacion() {
    if (!this.currentVotingConciliacion) return;
    this.loadingVotacion = true;
    this.remisionConciliacionService.obtenerResumenConciliacion(this.currentVotingConciliacion.conciliacion_id).subscribe({
      next: resumen => {
        // ✅ CORREGIDO: Usar valores por defecto (0) para evitar undefined
        const votosFavor = resumen.estadisticas?.votos_favor ?? 0;
        const votosContra = resumen.estadisticas?.votos_contra ?? 0;
        const resultado = votosFavor > votosContra ? 'APROBADA' : votosContra > votosFavor ? 'RECHAZADA' : 'EMPATE';
        this.notificationService.showSuccess(`✅ Votación finalizada. Resultado: ${resultado}`);
        this.showVotingModal = false;
        this.currentVotingConciliacion = null;
        this.panelVotacionAbierto = false;
        this.loadingVotacion = false;
        // ✅ RECARGAR TODOS LOS DATOS
        this.cargarConciliaciones().subscribe(data => {
          this.conciliaciones = data;
          this.calcularTotalItems();
        });
        this.cargarDenuncias().subscribe(denuncias => {
          this.denuncias = denuncias;
        });
        if (resultado === 'APROBADA') {
          this.cargarRemisiones().subscribe(remisiones => {
            this.remisiones = remisiones;
          });
        }
      },
      error: error => {
        console.error('❌ Error al finalizar votación:', error);
        this.loadingVotacion = false;
        this.notificationService.showError(error.message || 'Error al finalizar votación');
      }
    });
  }
  cargarPersonalDisponible(conciliacionId) {
    console.log('🔍 Cargando personal disponible para conciliación:', conciliacionId);
    // Primero obtener la conciliación actualizada
    this.remisionConciliacionService.obtenerConciliacion(conciliacionId).subscribe({
      next: conciliacion => {
        console.log('✅ Conciliación cargada:', {
          id: conciliacion.conciliacion_id,
          estado: conciliacion.estado,
          votos_favor: conciliacion.votos_favor,
          votos_contra: conciliacion.votos_contra,
          total_votos: conciliacion.total_votos,
          votos: conciliacion.votos
        });
        this.currentVotingConciliacion = conciliacion;
        // Luego obtener el personal disponible
        this.remisionConciliacionService.obtenerPersonalDisponible(conciliacionId).subscribe({
          next: response => {
            console.log('✅ Personal disponible:', response);
            this.personalDisponible = response.personal_disponible || [];
            // IMPORTANTE: Usar la misma propiedad que en el HTML
            this.votosDisponibles = this.personalDisponible.map((p, index) => ({
              id: index + 1,
              nombre_completo: p.nombre_completo,
              // 👈 USAR nombre_completo
              personal_id: p.personal_id,
              cargo: p.cargo || 'Sin cargo',
              usado: false,
              tipo: 'personal'
            }));
            // Marcar como usados los que ya votaron
            if (this.currentVotingConciliacion?.votos) {
              this.currentVotingConciliacion.votos.forEach(voto => {
                const votoEncontrado = this.votosDisponibles.find(v => v.personal_id === voto.personal_id);
                if (votoEncontrado) {
                  votoEncontrado.usado = true;
                }
              });
            }
            console.log('🎯 Votos disponibles procesados:', this.votosDisponibles);
            if (this.votosDisponibles.length === 0) {
              this.notificationService.showWarning('⚠️ No hay personal disponible para votar');
            }
            this.showVotingModal = true;
            this.loadingVotacion = false;
          },
          error: error => {
            console.error('❌ Error cargando personal disponible:', error);
            this.loadingVotacion = false;
            this.notificationService.showError(error.message || 'Error al cargar personal disponible');
          }
        });
      },
      error: error => {
        console.error('❌ Error cargando conciliación:', error);
        this.loadingVotacion = false;
        this.notificationService.showError(error.message || 'Error al obtener conciliación');
      }
    });
  }
  abrirVotacion(conciliacion) {
    console.log('🔍 Abriendo votación para conciliación:', conciliacion);
    // Validación más flexible - verifica diferentes posibles nombres de propiedad
    if (!conciliacion) {
      this.notificationService.showError('Conciliación inválida - objeto vacío');
      return;
    }
    // Verificar diferentes posibles nombres para el ID
    const conciliacionId = conciliacion.conciliacion_id || conciliacion.id;
    if (!conciliacionId) {
      console.error('❌ Conciliación sin ID válido:', conciliacion);
      this.notificationService.showError('Conciliación inválida - sin ID');
      return;
    }
    this.loadingVotacion = true;
    this.panelVotacionAbierto = true;
    this.currentVotingConciliacion = conciliacion;
    this.remisionConciliacionService.obtenerConciliacion(conciliacionId).subscribe({
      next: conciliacionActualizada => {
        console.log('✅ Conciliación cargada:', conciliacionActualizada);
        this.currentVotingConciliacion = conciliacionActualizada;
        // Cargar personal disponible
        this.cargarPersonalDisponible(conciliacionId);
        this.loadingVotacion = false;
      },
      error: error => {
        console.error('❌ Error al cargar conciliación:', error);
        this.loadingVotacion = false;
        this.panelVotacionAbierto = false;
        this.notificationService.showError('Error al obtener conciliación: ' + (error.message || 'Error desconocido'));
      }
    });
  }
  abrirModalEditar(mode, id) {
    console.log('✏️ Abriendo modal edición:', {
      mode,
      id
    });
    this.currentMode = mode;
    this.currentId = id; // 👈 IMPORTANTE: guardar el ID actual
    this.isEditing = true; // 👈 IMPORTANTE: marcar como edición
    if (mode === 'remision') {
      const remision = this.remisiones.find(r => r.remision_id === id);
      if (remision) {
        this.modalTitle = '✏️ Editar Remisión';
        this.formData = {
          id_denuncia: remision.denuncia_id,
          id_institucion: remision.institucion_id,
          motivo: remision.motivo,
          observaciones: remision.observaciones || '',
          codigo_denuncia: this.getDenunciaCodigo(remision.denuncia_id),
          descripcion_denuncia: this.getDenunciaDescripcion(remision.denuncia_id)
        };
        this.showModal = true;
        // Forzar detección de cambios
        setTimeout(() => {
          this.cdr.detectChanges();
        }, 100);
      }
    }
  }
  cargarDenunciasDesdeServicio() {
    // Para NUEVA conciliación
    this.conciliacionDisponibleService.getParaNuevaConciliacion().subscribe({
      next: conciliaciones => {
        this.denunciasParaNuevaConciliacion = conciliaciones.map(c => ({
          denuncia_id: c.denuncia_id,
          numero_expediente: c.numero_expediente,
          denunciante: c.denunciante,
          descripcion: c.descripcion
        }));
        console.log('✅ Denuncias para nueva conciliación (servicio):', this.denunciasParaNuevaConciliacion);
      },
      error: err => {
        console.error('❌ Error cargando conciliaciones disponibles:', err);
      }
    });
    // Para REMISIÓN
    this.conciliacionDisponibleService.getParaRemision().subscribe({
      next: conciliaciones => {
        this.denunciasParaRemision = conciliaciones.map(c => ({
          denuncia_id: c.denuncia_id,
          numero_expediente: c.numero_expediente,
          denunciante: c.denunciante,
          motivo_remision: c.motivo_remision
        }));
        console.log('✅ Denuncias para remisión (servicio):', this.denunciasParaRemision);
      },
      error: err => {
        console.error('❌ Error cargando denuncias para remisión:', err);
      }
    });
  }
  /**
   * Denuncias disponibles para NUEVA conciliación
   * Excluye:
   * - Denuncias con remisión activa
   * - Denuncias con CUALQUIER conciliación (INCOMPLETA, EN_PROCESO, COMPLETA)
   */
  getDenunciasParaConciliacion() {
    return this.denuncias.filter(d => {
      // Si estamos editando, permitir la denuncia actual
      if (this.isEditing && this.currentId) {
        const conciliacionActual = this.conciliaciones.find(c => c.conciliacion_id === this.currentId);
        if (conciliacionActual && d.denuncia_id === conciliacionActual.denuncia_id) {
          return true;
        }
      }
      // Verificar si tiene remisión activa
      const tieneRemisionActiva = this.remisiones.some(r => r.denuncia_id === d.denuncia_id);
      if (tieneRemisionActiva) return false;
      // 👈 CLAVE: Verificar si tiene CUALQUIER conciliación (no solo activa)
      const tieneConciliacion = this.conciliaciones.some(c => c.denuncia_id === d.denuncia_id);
      if (tieneConciliacion) return false; // Excluir si tiene conciliación (cualquier estado)
      return true;
    });
  }
  getDenunciasParaRemision() {
    return this.denuncias.filter(d => {
      // Buscar sentencia asociada a esta denuncia
      const sentencia = this.sentencias?.find(s => s.conciliacion?.denuncia_id === d.denuncia_id && s.excede_competencias === true // 👈 Solo si excede competencias
      );
      return !!sentencia; // Solo mostrar si tiene sentencia que excede competencias
    });
  }
  /**
     * Obtener información de la sentencia asociada a una denuncia
     */
  getSentenciaInfo(denunciaId) {
    // Buscar la conciliación de esta denuncia
    const conciliacion = this.conciliaciones.find(c => c.denuncia_id === denunciaId);
    if (!conciliacion) return 'Sin conciliación';
    // Buscar la sentencia de esta conciliación
    const sentencia = this.sentencias.find(s => s.conciliacion_id === conciliacion.conciliacion_id);
    if (!sentencia) return 'Sin sentencia';
    return `#${sentencia.sentencia_id} - ${sentencia.tipo_resolucion} - ${new Date(sentencia.fecha_sentencia).toLocaleDateString('es-ES')}`;
  }
  /**
   * Obtener el motivo por el que excede competencias
   */
  getMotivoExcede(denunciaId) {
    const conciliacion = this.conciliaciones.find(c => c.denuncia_id === denunciaId);
    if (!conciliacion) return 'No disponible';
    const sentencia = this.sentencias.find(s => s.conciliacion_id === conciliacion.conciliacion_id);
    if (!sentencia) return 'No disponible';
    return sentencia.motivo_excede_competencias || 'La sentencia excede las competencias del módulo';
  }
  cargarSentencias() {
    return this.sentenciaService.listarSentencias({
      per_page: 100
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(response => {
      // response ya es { data: Sentencia[], meta: any }
      return response.data || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error cargando sentencias:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
    }));
  }
  cargarDatosIniciales() {
    this.loading = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)({
      denuncias: this.cargarDenuncias(),
      instituciones: this.cargarInstituciones(),
      remisiones: this.cargarRemisiones(),
      conciliaciones: this.cargarConciliaciones(),
      personal: this.cargarPersonal(),
      sentencias: this.cargarSentencias() // 👈 AGREGAR
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loading = false)).subscribe({
      next: resultados => {
        this.denuncias = resultados.denuncias;
        this.instituciones = resultados.instituciones;
        this.remisiones = resultados.remisiones;
        this.conciliaciones = resultados.conciliaciones;
        this.personalList = resultados.personal;
        this.sentencias = resultados.sentencias; // 👈 AGREGAR
        this.calcularTotalItems();
        this.verificarDenunciasDisponibles();
        console.log('✅ Datos cargados exitosamente');
      },
      error: error => {
        console.error('❌ Error cargando datos:', error);
        this.notificationService.showError('Error al cargar datos iniciales');
      }
    });
  }
  static ɵfac = function RemisionConciliacionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RemisionConciliacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_21__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_denuncia_service__WEBPACK_IMPORTED_MODULE_23__.DenunciaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_24__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_25__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_sentencia_service__WEBPACK_IMPORTED_MODULE_26__.SentenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_personal_service__WEBPACK_IMPORTED_MODULE_27__.PersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_28__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_29__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_30__.RemisionConciliacionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_conciliacion_disponible_service__WEBPACK_IMPORTED_MODULE_31__.ConciliacionDisponibleService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: RemisionConciliacionComponent,
    selectors: [["app-remision-conciliacion"]],
    hostBindings: function RemisionConciliacionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresolveDocument"]);
      }
    },
    decls: 30,
    vars: 24,
    consts: [["registroForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "remision-conciliacion-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-tabs"], [1, "tabs"], [1, "tab", 3, "click"], ["class", "quick-stats", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "denuncias-panel", 4, "ngIf"], ["class", "filtros-container", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el sistema...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-icon"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "quick-stats"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "loading-container"], [1, "spinner"], [1, "denuncias-panel"], [1, "panel-header"], [1, "denuncias-grid"], ["class", "denuncia-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "denuncia-card"], [1, "denuncia-header"], [1, "denuncia-codigo"], [1, "denuncia-gravedad"], [1, "denuncia-descripcion"], [1, "denuncia-info"], [1, "remision-info"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "empty-state"], [1, "empty-icon"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-estado"], ["id", "filtro-estado", 3, "ngModelChange", "change", "ngModel"], ["value", "todos"], ["value", "pendiente"], ["value", "programada"], ["value", "en_proceso"], ["value", "finalizada"], ["value", "completada"], ["value", "anulada"], ["for", "filtro-fecha-desde"], ["type", "date", "id", "filtro-fecha-desde", 3, "ngModelChange", "change", "ngModel"], ["for", "filtro-fecha-hasta"], ["type", "date", "id", "filtro-fecha-hasta", 3, "ngModelChange", "change", "ngModel"], ["for", "filtro-denuncia"], ["type", "text", "id", "filtro-denuncia", "placeholder", "C\u00F3digo o descripci\u00F3n", 3, "ngModelChange", "keyup", "ngModel"], [1, "btn", "btn-secondary", 3, "click"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "codigo-cell"], [1, "denuncia-cell"], [1, "estado-badge"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Ver Reporte", 1, "btn-action", "view", 3, "click"], ["title", "Editar", 1, "btn-action", "edit", 3, "click"], ["title", "Eliminar", 1, "btn-action", "delete", 3, "click"], ["title", "Exportar PDF", 1, "btn-action", "export", 3, "click"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "votos-cell"], [1, "voto-favor"], [1, "voto-contra"], [1, "votos-progreso"], [1, "progreso-bar"], [1, "progreso-favor"], [1, "progreso-contra"], ["title", "Generar Acta", 1, "btn-action", "acta", 3, "click"], ["class", "btn-action votar", "title", "Abrir Votaci\u00F3n", 3, "click", 4, "ngIf"], ["class", "btn-action iniciar", "title", "Iniciar Conciliaci\u00F3n", 3, "click", 4, "ngIf"], ["title", "Exportar Acta PDF", 1, "btn-action", "export", 3, "click"], ["title", "Abrir Votaci\u00F3n", 1, "btn-action", "votar", 3, "click"], ["title", "Iniciar Conciliaci\u00F3n", 1, "btn-action", "iniciar", 3, "click"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "id_denuncia", 1, "form-label"], [1, "required"], ["id", "id_denuncia", "name", "id_denuncia", "required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "denuncia-info-preview", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "4", 1, "form-textarea", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "competencia-info", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-small", 4, "ngIf"], [1, "denuncia-info-preview"], ["for", "id_institucion", 1, "form-label"], ["id", "id_institucion", "name", "id_institucion", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "motivo", 1, "form-label"], ["id", "motivo", "name", "motivo", "required", "", "rows", "4", "placeholder", "Describa por qu\u00E9 la denuncia excede las competencias del m\u00F3dulo...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "fecha_audiencia", 1, "form-label"], ["type", "datetime-local", "id", "fecha_audiencia", "name", "fecha_audiencia", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "competencia-info"], [1, "info-card"], [1, "info-header"], [1, "info-icon"], [1, "info-title"], [1, "info-content"], [4, "ngIf"], [1, "info-alerta"], [1, "spinner-small"], [1, "voting-modal"], [1, "voting-info"], [1, "audiencia-info"], [1, "voting-stats"], [1, "stat"], [1, "stat-value", "favor"], [1, "stat-value", "contra"], [1, "voting-progress"], [1, "progress-labels"], [1, "label-favor"], [1, "label-contra"], [1, "progress-bar"], [1, "progress-favor"], [1, "progress-contra"], [1, "voting-controls"], [1, "voto-selector"], ["for", "voto-seleccionado"], ["id", "voto-seleccionado", 1, "voto-select", 3, "ngModelChange", "ngModel"], ["class", "voto-hint", 4, "ngIf"], [1, "voting-buttons"], [1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "btn", "btn-danger", "btn-lg", 3, "click", "disabled"], [1, "votos-usados"], [1, "votos-list"], ["class", "voto-item", 4, "ngFor", "ngForOf"], ["class", "resultado-preliminar", 4, "ngIf"], [1, "voting-instructions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "voto-hint"], [1, "voto-item"], [1, "voto-nombre"], [1, "voto-cargo"], [1, "voto-estado"], [1, "resultado-preliminar"], [1, "resultado-content"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"]],
    template: function RemisionConciliacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("toggleSidebar", function RemisionConciliacionComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function RemisionConciliacionComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("toggleNotifications", function RemisionConciliacionComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function RemisionConciliacionComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function RemisionConciliacionComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function RemisionConciliacionComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, RemisionConciliacionComponent_div_4_Template, 13, 6, "div", 5)(5, RemisionConciliacionComponent_div_5_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "\u2696\uFE0F Gesti\u00F3n de Resoluci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "Administre los procesos de Remisi\u00F3n y Conciliaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_Template_button_click_15_listener() {
          return ctx.setCurrentMode("remision");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, " \uD83D\uDCE4 Remisiones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function RemisionConciliacionComponent_Template_button_click_17_listener() {
          return ctx.setCurrentMode("conciliacion");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, " \uD83E\uDD1D Conciliaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, RemisionConciliacionComponent_div_19_Template, 33, 5, "div", 15)(20, RemisionConciliacionComponent_div_20_Template, 4, 0, "div", 16)(21, RemisionConciliacionComponent_div_21_Template, 9, 3, "div", 17)(22, RemisionConciliacionComponent_div_22_Template, 9, 3, "div", 17)(23, RemisionConciliacionComponent_div_23_Template, 42, 5, "div", 18)(24, RemisionConciliacionComponent_div_24_Template, 38, 5, "div", 19)(25, RemisionConciliacionComponent_div_25_Template, 38, 5, "div", 19)(26, RemisionConciliacionComponent_div_26_Template, 38, 17, "div", 20)(27, RemisionConciliacionComponent_div_27_Template, 102, 30, "div", 20)(28, RemisionConciliacionComponent_div_28_Template, 21, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "app-footer", 21);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active", ctx.currentMode === "remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active", ctx.currentMode === "conciliacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.currentMode === "remision" && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.currentMode === "conciliacion" && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.currentMode === "remision" && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.currentMode === "conciliacion" && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showVotingModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_8__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _components_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__.TruncatePipe],
    styles: [".loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n  background: var(--bg-primary);\n  border-radius: 8px;\n  box-shadow: var(--shadow-sm);\n  margin: 20px 0;\n}\n.loading-container .spinner {\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 15px;\n}\n.loading-container p {\n  color: var(--text-secondary);\n  font-size: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner-small {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid var(--border-color);\n  border-top: 2px solid var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-right: 8px;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: var(--text-primary);\n}\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 90px;\n}\n.main-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) transparent;\n  width: calc(100% - 280px);\n}\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.top-bar-container {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 0 24px;\n  margin-bottom: 32px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: slideInTop 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes slideInTop {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n}\n.search-button-wrapper .search-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-light);\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 18px;\n  color: var(--primary);\n}\n.search-button-wrapper .search-button:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1) rotate(10deg);\n  box-shadow: var(--shadow-sm);\n}\n.search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  box-shadow: var(--shadow-xl);\n  z-index: 2001;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.search-modal .search-modal-header {\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.search-modal .search-modal-header .search-input-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 0 16px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container:focus-within {\n  background: var(--primary-light);\n  box-shadow: 0 0 0 2px var(--primary-light);\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  font-size: 20px;\n  opacity: 0.7;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 16px 0;\n  font-size: 16px;\n  color: inherit;\n  outline: none;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input::placeholder {\n  color: var(--placeholder-color);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 18px;\n  padding: 4px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-clear:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.search-modal .search-modal-header .search-close {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-close:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.search-modal .search-results {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-bottom: 1px solid var(--border-light);\n}\n.search-modal .search-results .search-result-item:last-child {\n  border-bottom: none;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--bg-hover);\n  padding-left: 32px;\n}\n.search-modal .search-results .search-result-item:hover .result-icon {\n  transform: scale(1.2);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 20px;\n  transition: transform 0.3s;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.search-modal .search-empty {\n  padding: 32px 24px;\n  text-align: center;\n  color: var(--text-muted);\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    width: 240px;\n  }\n  .sidebar.collapsed {\n    width: 60px;\n  }\n  .main-content {\n    margin-left: 240px;\n  }\n  .sidebar.collapsed ~ .main-content {\n    margin-left: 60px;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(0);\n  }\n  .sidebar.collapsed {\n    transform: translateX(0);\n    width: 50px;\n  }\n  .main-content {\n    padding: 20px;\n    margin-left: 220px;\n    background: var(--bg-secondary);\n  }\n  .main-content .top-bar-container {\n    padding: 0 12px;\n    margin-bottom: 16px;\n    border-radius: 10px;\n  }\n  .main-content .top-bar {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0;\n    min-height: 50px;\n  }\n  .header-actions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: auto;\n  }\n  .search-button-wrapper .search-button {\n    width: 36px;\n    height: 36px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .sidebar {\n    width: 100%;\n    max-width: 280px;\n  }\n  .top-bar-container {\n    padding: 0 16px;\n  }\n  .search-modal {\n    padding-top: 20px;\n  }\n  .search-modal .search-modal-content {\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n    height: 100vh;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.chatbot-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.3s ease;\n}\n.chatbot-overlay.minimized-mode {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode .modal-overlay-sigpaz {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode .modal-overlay-sigpaz::before {\n  display: none !important;\n}\n.chatbot-overlay.minimized-mode .chatbot-minimized {\n  pointer-events: auto !important;\n  z-index: 10001 !important;\n}\n.chatbot-overlay:not(.minimized-mode) {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.chatbot-overlay:not(.minimized-mode) .chatbot-minimized {\n  display: none !important;\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none !important;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-container,\n.modal-overlay-sigpaz.minimized-mode .chatbot-header,\n.modal-overlay-sigpaz.minimized-mode .chatbot-content,\n.modal-overlay-sigpaz.minimized-mode .chatbot-footer {\n  display: none !important;\n  visibility: hidden !important;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-minimized {\n  display: flex !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n}\n.chatbot-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  z-index: 10002;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 800px;\n  width: auto;\n}\n.chatbot-container:not(.minimized):not(.maximized) {\n  animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.chatbot-container.minimized {\n  display: none;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.chatbot-header .modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header .modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.chatbot-header .modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.chatbot-header .modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n.chatbot-content .modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.chatbot-content .modal-body-wrapper .modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, var(--primary-hover), var(--security));\n}\n.chatbot-content .modal-body-wrapper .modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.chatbot-footer {\n  padding: 20px 40px;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.chatbot-footer .footer-stats {\n  display: flex;\n  gap: 25px;\n}\n.chatbot-footer .footer-stats .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.chatbot-footer .footer-stats .stat-item .stat-icon {\n  font-size: 16px;\n}\n.chatbot-footer .footer-actions {\n  display: flex;\n  gap: 15px;\n}\n.chatbot-footer .footer-actions .action-btn {\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n  border: none;\n  font-family: inherit;\n}\n.chatbot-footer .footer-actions .action-btn.secondary {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.chatbot-footer .footer-actions .action-btn.secondary:hover {\n  background: var(--bg-hover);\n  border-color: var(--border-dark);\n  transform: translateY(-2px);\n}\n.chatbot-footer .footer-actions .action-btn.primary {\n  background: var(--gradient-primary);\n  border: none;\n  color: white;\n}\n.chatbot-footer .footer-actions .action-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-footer .footer-actions .action-btn .btn-icon {\n  font-size: 16px;\n}\n.chatbot-minimized {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  z-index: 10002;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-minimized {\n  display: flex !important;\n  pointer-events: auto !important;\n  z-index: 10003 !important;\n}\n.chatbot-minimized:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-lg);\n}\n.chatbot-minimized.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.chatbot-minimized .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.chatbot-minimized .bubble-content .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.chatbot-minimized .bubble-content .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.chatbot-minimized .bubble-content .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.chatbot-minimized .bubble-content .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: var(--shadow-md);\n  }\n  50% {\n    box-shadow: var(--shadow-lg);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@media (max-width: 1024px) {\n  .chatbot-container:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .chatbot-footer {\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n  }\n  .chatbot-footer .footer-stats {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-container:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .chatbot-header .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .chatbot-minimized {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .chatbot-container:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .chatbot-minimized {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n.chatbot-container.maximized {\n  width: 100vw !important;\n  height: 100vh !important;\n  max-width: 100vw !important;\n  max-height: 100vh !important;\n  border-radius: 0;\n  margin: 0;\n}\n.chatbot-container.maximized .modal-body-wrapper {\n  flex: 1;\n  border-radius: 0;\n}\n.sidebar-chat-sigpaz {\n  margin: 20px 15px;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.7s;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover:hover::after {\n  left: 100%;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-icon {\n  font-size: 20px;\n  margin-right: 12px;\n  animation: pulseIcon 2s infinite;\n}\n@keyframes pulseIcon {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-text {\n  flex: 1;\n  text-align: left;\n  letter-spacing: 0.8px;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-badge {\n  background: var(--danger);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: pulseBadge 2s infinite;\n  margin-left: 10px;\n}\n@keyframes pulseBadge {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.theme-toggle-container .theme-toggle-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--primary-light);\n  border: none;\n  padding: 10px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary);\n  animation: glow 3s infinite alternate;\n}\n@keyframes glow {\n  from {\n    box-shadow: 0 0 5px var(--primary-light);\n  }\n  to {\n    box-shadow: 0 0 15px var(--primary-light);\n  }\n}\n.theme-toggle-container .theme-toggle-btn:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-2px) scale(1.05);\n}\n.theme-toggle-container .theme-toggle-btn .theme-icon {\n  font-size: 18px;\n  transition: transform 0.3s;\n}\n.theme-toggle-container .theme-toggle-btn .theme-icon:hover {\n  transform: rotate(30deg);\n}\n.theme-toggle-container .theme-toggle-btn .theme-text {\n  white-space: nowrap;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.notification-wrapper {\n  position: relative;\n}\n.notification-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n}\n.notification-btn:hover {\n  background: var(--bg-hover);\n  transform: scale(1.1);\n}\n.notification-btn .notification-icon {\n  font-size: 20px;\n  transition: transform 0.3s;\n}\n.notification-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--danger);\n  color: white;\n  font-size: 11px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n.notifications-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  width: 320px;\n  z-index: 1000;\n  margin-top: 8px;\n  border: 1px solid var(--modal-border);\n}\n.notifications-dropdown .dropdown-header {\n  padding: 20px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notifications-dropdown .dropdown-header h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notifications-dropdown .dropdown-header .mark-all-read {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.notifications-dropdown .dropdown-header .mark-all-read:hover {\n  color: var(--primary-hover);\n  text-decoration: underline;\n}\n.notifications-dropdown .notifications-list {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.notifications-dropdown .notification-item {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n  transition: background-color 0.2s;\n}\n.notifications-dropdown .notification-item:last-child {\n  border-bottom: none;\n}\n.notifications-dropdown .notification-item:hover {\n  background: var(--bg-hover);\n}\n.notifications-dropdown .notification-item.unread {\n  background: var(--primary-light);\n  position: relative;\n}\n.notifications-dropdown .notification-item.unread::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--primary);\n  border-radius: 0 2px 2px 0;\n}\n.notifications-dropdown .notification-item .notification-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.notifications-dropdown .notification-item .notification-content .notification-avatar {\n  width: 40px;\n  height: 40px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.notifications-dropdown .notification-item .notification-content .notification-details {\n  flex: 1;\n}\n.notifications-dropdown .notification-item .notification-content .notification-details .notification-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.notifications-dropdown .notification-item .notification-content .notification-details .notification-message {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n.notifications-dropdown .notification-item .notification-content .notification-details .notification-time {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.user-menu-wrapper {\n  position: relative;\n}\n.user-menu-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-menu-btn:hover {\n  background: var(--bg-hover);\n  transform: scale(1.1);\n}\n.user-menu-btn .user-avatar-initial {\n  width: 36px;\n  height: 36px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.user-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  width: 280px;\n  z-index: 1000;\n  margin-top: 8px;\n  border: 1px solid var(--modal-border);\n}\n.user-dropdown .dropdown-menu {\n  padding: 16px 0;\n}\n.user-dropdown .user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 16px 16px;\n}\n.user-dropdown .user-info .user-avatar-large {\n  width: 48px;\n  height: 48px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n.user-dropdown .user-info .user-details {\n  flex: 1;\n}\n.user-dropdown .user-info .user-details .user-name {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.user-dropdown .user-info .user-details .user-email {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.user-dropdown .dropdown-divider {\n  height: 1px;\n  background: var(--border-color);\n  margin: 16px 0;\n}\n.user-dropdown .menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: inherit;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n  font-size: 0.95rem;\n}\n.user-dropdown .menu-item:hover {\n  background: var(--bg-hover);\n  padding-left: 20px;\n}\n.user-dropdown .menu-item .menu-icon {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  min-width: 24px;\n  transition: transform 0.3s;\n}\n.user-dropdown .menu-item .menu-text {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.remision-conciliacion-container {\n  min-height: 100vh;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header .header-tabs .tabs {\n  display: flex;\n  gap: 8px;\n  background: var(--bg-tertiary);\n  padding: 4px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.header .header-tabs .tabs .tab {\n  padding: 10px 24px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header .header-tabs .tabs .tab:hover:not(.active) {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.header .header-tabs .tabs .tab.active {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.quick-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.quick-stats .stat-card {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n  box-shadow: var(--shadow-sm);\n}\n.quick-stats .stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n}\n.quick-stats .stat-card .stat-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-size: 24px;\n}\n.quick-stats .stat-card .stat-icon.remision-icon {\n  background: rgba(var(--security), 0.1);\n  color: var(--security);\n}\n.quick-stats .stat-card .stat-icon.conciliacion-icon {\n  background: rgba(var(--success), 0.1);\n  color: var(--success);\n}\n.quick-stats .stat-card .stat-icon.denuncia-icon {\n  background: rgba(var(--primary), 0.1);\n  color: var(--primary);\n}\n.quick-stats .stat-card .stat-content .stat-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.quick-stats .stat-card .stat-content .stat-label {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.denuncias-panel {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.denuncias-panel .panel-header {\n  margin-bottom: 20px;\n}\n.denuncias-panel .panel-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.denuncias-panel .panel-header p {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.denuncias-panel .denuncias-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  border-radius: 6px;\n}\n.denuncias-panel .denuncias-grid .empty-state {\n  display: grid;\n  place-items: center;\n  padding: 48px 24px;\n}\n.denuncias-panel .denuncias-grid .empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.denuncias-panel .denuncias-grid .empty-state p {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n}\n.denuncias-panel .denuncias-grid .empty-state p:last-child {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.denuncias-panel .denuncias-grid .denuncia-card {\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.denuncias-panel .denuncias-grid .denuncia-card:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header .denuncia-codigo {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n  font-size: 14px;\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header .denuncia-gravedad {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header .denuncia-gravedad.gravedad-alta {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header .denuncia-gravedad.gravedad-media {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-header .denuncia-gravedad.gravedad-baja {\n  background: var(--success-light);\n  color: var(--success);\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-descripcion {\n  color: var(--text-muted);\n  font-size: 13px;\n  line-height: 1.5;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.denuncias-panel .denuncias-grid .denuncia-card .denuncia-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.denuncias-panel .denuncias-grid .denuncia-card .btn-sm {\n  width: 100%;\n  padding: 8px 16px;\n  font-size: 13px;\n}\n.filtros-container {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.filtros-container .filtros-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container .filtros-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-container .filtros-header .btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  font-weight: 500;\n}\n.filtros-container .filtros-header .btn-link:hover {\n  color: var(--primary-hover);\n}\n.filtros-container .filtros-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.filtros-container .filtros-grid .filtro-item label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.filtros-container .filtros-grid .filtro-item input,\n.filtros-container .filtros-grid .filtro-item select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container .filtros-grid .filtro-item input:focus,\n.filtros-container .filtros-grid .filtro-item select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.filtros-container .filtros-grid .filtro-item input::placeholder,\n.filtros-container .filtros-grid .filtro-item select::placeholder {\n  color: var(--placeholder-color);\n}\n.table-container {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 24px;\n}\n.table-container .table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.table-container .table-header .table-title h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .table-header .table-title .table-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container .table-header .table-actions {\n  display: flex;\n  gap: 12px;\n}\n.table-container .table-responsive {\n  overflow-x: auto;\n}\n.table-container .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1200px;\n}\n.table-container .data-table thead {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n}\n.table-container .data-table thead th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container .data-table thead th.text-center {\n  text-align: center;\n}\n.table-container .data-table tbody tr {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container .data-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.table-container .data-table tbody tr:last-child {\n  border-bottom: none;\n}\n.table-container .data-table tbody tr td {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container .data-table tbody tr td .codigo-cell {\n  font-weight: 600;\n  color: var(--primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n  font-size: 13px;\n}\n.table-container .data-table tbody tr td .denuncia-cell strong {\n  display: block;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.table-container .data-table tbody tr td .denuncia-cell small {\n  color: var(--text-muted);\n  font-size: 12px;\n  display: block;\n  line-height: 1.4;\n}\n.table-container .data-table tbody tr td .votos-cell {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.table-container .data-table tbody tr td .votos-cell .voto-favor,\n.table-container .data-table tbody tr td .votos-cell .voto-contra {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 13px;\n}\n.table-container .data-table tbody tr td .votos-cell .voto-favor.voto-favor,\n.table-container .data-table tbody tr td .votos-cell .voto-contra.voto-favor {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .votos-cell .voto-favor.voto-contra,\n.table-container .data-table tbody tr td .votos-cell .voto-contra.voto-contra {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.acta {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.acta:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit:hover {\n  background: var(--warning);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.complete,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.iniciar,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.finalizar {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.complete:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.iniciar:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.finalizar:hover {\n  background: var(--success);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.anular {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.anular:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.votar {\n  background: rgba(var(--warning), 0.1);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.votar:hover {\n  background: var(--warning);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .empty-state {\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 48px 24px;\n}\n.table-container .empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.table-container .empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.table-container .empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.estado-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.estado-badge.estado-pendiente {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge.estado-programada {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-badge.estado-proceso {\n  background: rgba(var(--warning), 0.1);\n  color: var(--warning);\n}\n.estado-badge.estado-finalizada {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.estado-completada {\n  background: rgba(var(--security), 0.1);\n  color: var(--security);\n}\n.estado-badge.estado-anulada {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.resultado-acuerdo {\n  color: var(--success);\n  font-weight: 600;\n}\n.resultado-desacuerdo {\n  color: var(--danger);\n  font-weight: 600;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.pagination .pagination-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .pagination-pages {\n  display: flex;\n  gap: 6px;\n}\n.pagination .pagination-pages .pagination-page {\n  min-width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination .pagination-pages .pagination-page:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination .pagination-pages .pagination-page.active {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.pagination .pagination-pages .pagination-page:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  animation: fadeIn 0.3s ease;\n}\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-container .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.modal-container .modal-header h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-container .modal-header h2.remision-title {\n  color: var(--security);\n}\n.modal-container .modal-header h2.conciliacion-title {\n  color: var(--success);\n}\n.modal-container .modal-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-container .modal-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-container .modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-container .modal-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal-container .form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .modal-container .form-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.modal-container .form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.modal-container .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.modal-container .form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.modal-container .form-group label::after {\n  content: ' *';\n  color: var(--danger);\n  display: none;\n}\n.modal-container .form-group label[for=\"id_denuncia\"]::after,\n.modal-container .form-group label[for=\"id_institucion\"]::after,\n.modal-container .form-group label[for=\"motivo\"]::after,\n.modal-container .form-group label[for=\"fecha_audiencia\"]::after,\n.modal-container .form-group label[for=\"lugar\"]::after {\n  display: inline;\n}\n.modal-container .form-group input,\n.modal-container .form-group textarea,\n.modal-container .form-group select {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.modal-container .form-group input:focus,\n.modal-container .form-group textarea:focus,\n.modal-container .form-group select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.modal-container .form-group input::placeholder,\n.modal-container .form-group textarea::placeholder,\n.modal-container .form-group select::placeholder {\n  color: var(--placeholder-color);\n}\n.modal-container .form-group input:disabled,\n.modal-container .form-group textarea:disabled,\n.modal-container .form-group select:disabled {\n  background: var(--input-disabled-bg);\n  color: var(--input-disabled-text);\n  cursor: not-allowed;\n}\n.modal-container .form-group textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.modal-container .denuncia-bloqueada {\n  background: var(--warning-light) !important;\n  border: 1px solid rgba(var(--warning), 0.2) !important;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 8px;\n}\n.modal-container .denuncia-bloqueada .bloqueada-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--warning);\n  font-size: 13px;\n  font-weight: 500;\n}\n.modal-container .denuncia-bloqueada .bloqueada-info .bloqueada-icon {\n  font-size: 16px;\n}\n.modal-container .denuncia-bloqueada .bloqueada-info strong {\n  color: var(--text-primary);\n}\n.modal-container .denuncia-info-preview {\n  margin-top: 12px;\n  padding: 12px;\n  background: var(--bg-tertiary);\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n}\n.modal-container .denuncia-info-preview small {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.modal-container .denuncia-info-preview small strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-container .competencia-info {\n  margin-top: 20px;\n}\n.modal-container .competencia-info .info-card {\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n}\n.modal-container .competencia-info .info-card .info-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.modal-container .competencia-info .info-card .info-header .info-icon {\n  font-size: 20px;\n  color: var(--primary);\n}\n.modal-container .competencia-info .info-card .info-header .info-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.modal-container .competencia-info .info-card .info-content p {\n  margin: 0 0 8px 0;\n  color: var(--text-muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n.modal-container .competencia-info .info-card .info-content p strong {\n  color: var(--text-primary);\n}\n.modal-container .competencia-info .info-card .info-content p .info-alerta {\n  color: var(--warning);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  padding: 8px;\n  background: var(--warning-light);\n  border-radius: 4px;\n}\n.modal-container .terms-container {\n  margin-top: 20px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border-left: 4px solid var(--primary);\n}\n.modal-container .terms-container .terms-text {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  text-align: center;\n}\n.modal-container .modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 24px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.voting-modal {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.voting-modal .modal-header {\n  background: var(--gradient-primary);\n  color: white;\n}\n.voting-modal .modal-header h2 {\n  color: white;\n}\n.voting-modal .modal-header .modal-close {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.voting-modal .modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.voting-modal .voting-info .denuncia-info {\n  background: var(--bg-tertiary);\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n  margin-bottom: 16px;\n}\n.voting-modal .voting-info .denuncia-info h4 {\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  font-size: 16px;\n}\n.voting-modal .voting-info .denuncia-info p {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.voting-modal .voting-info .denuncia-info .audiencia-info {\n  display: flex;\n  gap: 16px;\n  margin-top: 8px;\n}\n.voting-modal .voting-info .denuncia-info .audiencia-info small {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.voting-modal .voting-info .voting-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.voting-modal .voting-info .voting-stats .stat {\n  text-align: center;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.voting-modal .voting-info .voting-stats .stat .stat-label {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.voting-modal .voting-info .voting-stats .stat .stat-value {\n  display: block;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.voting-modal .voting-info .voting-stats .stat .stat-value.favor {\n  color: var(--success);\n}\n.voting-modal .voting-info .voting-stats .stat .stat-value.contra {\n  color: var(--danger);\n}\n.voting-modal .voting-info .voting-progress .progress-labels {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.voting-modal .voting-info .voting-progress .progress-labels .label-favor {\n  color: var(--success);\n  font-weight: 600;\n  font-size: 12px;\n}\n.voting-modal .voting-info .voting-progress .progress-labels .label-contra {\n  color: var(--danger);\n  font-weight: 600;\n  font-size: 12px;\n}\n.voting-modal .voting-info .voting-progress .progress-bar {\n  height: 8px;\n  background: var(--border-color);\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n}\n.voting-modal .voting-info .voting-progress .progress-bar .progress-favor {\n  height: 100%;\n  background: var(--success);\n}\n.voting-modal .voting-info .voting-progress .progress-bar .progress-contra {\n  height: 100%;\n  background: var(--danger);\n}\n.voting-modal .voting-controls .voto-selector {\n  margin-bottom: 20px;\n}\n.voting-modal .voting-controls .voto-selector label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.voting-modal .voting-controls .voto-selector select {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.voting-modal .voting-controls .voto-selector select:focus {\n  outline: none;\n  border-color: var(--warning);\n  box-shadow: var(--input-focus-shadow);\n}\n.voting-modal .voting-controls .voto-selector .voto-hint {\n  margin-top: 8px;\n}\n.voting-modal .voting-controls .voto-selector .voto-hint small {\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.voting-modal .voting-controls .voting-buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.voting-modal .voting-controls .voting-buttons button {\n  padding: 16px;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.voting-modal .voting-controls .voting-buttons button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.voting-modal .voting-controls .voting-buttons button.btn-success {\n  background: var(--gradient-success);\n  color: white;\n}\n.voting-modal .voting-controls .voting-buttons button.btn-success:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.voting-modal .voting-controls .voting-buttons button.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.voting-modal .voting-controls .voting-buttons button.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.voting-modal .votos-usados h4 {\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  font-size: 16px;\n}\n.voting-modal .votos-usados .votos-list {\n  display: grid;\n  gap: 8px;\n}\n.voting-modal .votos-usados .votos-list .voto-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: var(--bg-tertiary);\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n}\n.voting-modal .votos-usados .votos-list .voto-item .voto-nombre {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.voting-modal .votos-usados .votos-list .voto-item .voto-estado {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n}\n.voting-modal .votos-usados .votos-list .voto-item .voto-estado.usado {\n  background: var(--success-light);\n  color: var(--success);\n}\n.voting-modal .votos-usados .votos-list .voto-item .voto-estado.disponible {\n  background: var(--info-light);\n  color: var(--info);\n}\n.voting-modal .voting-instructions {\n  padding: 16px;\n  background: rgba(var(--warning), 0.1);\n  border-radius: 8px;\n  border: 1px solid rgba(var(--warning), 0.2);\n}\n.voting-modal .voting-instructions p {\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  font-size: 13px;\n  line-height: 1.5;\n}\n.voting-modal .voting-instructions p strong {\n  color: var(--warning);\n}\n.voting-modal .modal-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal .confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-modal .confirm-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-modal .confirm-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.confirm-modal .confirm-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n}\n.confirm-modal .confirm-body {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n}\n.confirm-modal .confirm-body p {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.confirm-modal .confirm-body p.confirm-warning {\n  color: var(--danger);\n  font-weight: 500;\n  font-size: 14px;\n}\n.confirm-modal .confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.btn .btn-icon {\n  font-size: 16px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-primary.btn-remision {\n  background: linear-gradient(135deg, var(--security), #692cf3);\n}\n.btn.btn-primary.btn-remision:hover:not(:disabled) {\n  background: linear-gradient(135deg, #692cf3, #4d0ce0);\n}\n.btn.btn-primary.btn-conciliacion {\n  background: linear-gradient(135deg, var(--success), #0c8a60);\n}\n.btn.btn-primary.btn-conciliacion:hover:not(:disabled) {\n  background: linear-gradient(135deg, #0c8a60, #085b40);\n}\n.btn.btn-secondary {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-success {\n  background: var(--gradient-success);\n  color: white;\n}\n.btn.btn-success:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-cancel {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn.btn-cancel:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn.btn-sm .btn-icon {\n  font-size: 12px;\n}\n.btn.btn-lg {\n  padding: 14px 28px;\n  font-size: 16px;\n}\n.btn.btn-lg .btn-icon {\n  font-size: 18px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--link-color);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  font-weight: 500;\n}\n.btn-link:hover {\n  color: var(--link-hover);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    width: 240px;\n  }\n  .sidebar.collapsed {\n    width: 60px;\n  }\n  .main-content {\n    margin-left: 240px;\n  }\n  .sidebar.collapsed ~ .main-content {\n    margin-left: 60px;\n  }\n  .remision-conciliacion-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .denuncias-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;\n  }\n  .filtros-grid {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n  .quick-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .header .header-tabs .tabs {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .header .header-tabs .tabs .tab {\n    width: 100%;\n    justify-content: center;\n  }\n  .quick-stats {\n    grid-template-columns: 1fr;\n  }\n  .denuncias-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .filtros-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .voting-controls .voting-buttons {\n    grid-template-columns: 1fr !important;\n  }\n  .modal-container,\n  .voting-modal,\n  .confirm-modal {\n    max-height: 95vh;\n    margin: 0;\n  }\n  .form-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .pagination .pagination-btn {\n    order: 3;\n  }\n  .pagination .pagination-pages {\n    order: 2;\n  }\n}\n@media (max-width: 480px) {\n  .header {\n    padding: 20px;\n  }\n  .header .page-title {\n    font-size: 24px;\n  }\n  .modal-container,\n  .voting-modal,\n  .confirm-modal {\n    max-width: 95%;\n  }\n  .modal-header {\n    padding: 20px !important;\n  }\n  .modal-header h2 {\n    font-size: 20px !important;\n  }\n  .modal-content {\n    padding: 20px !important;\n  }\n  .voting-stats {\n    grid-template-columns: 1fr !important;\n  }\n  .btn {\n    padding: 10px 16px !important;\n    font-size: 13px !important;\n  }\n  .table-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .table-header .table-actions {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-content-sigpaz:not(.minimized) {\n  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-close .close-icon {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbnRlcm1lZGlhY2lvbmVzL3BhZ2VzL2ludGVybWVkaWFjaW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBYkY7QUFJQTtFQVlJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQWJKO0FBTEE7RUFzQkksNEJBQUE7RUFDQSxlQUFBO0FBZEo7QUFrQkE7RUFDRTtJQUFLLHVCQUFBO0VBZkw7RUFnQkE7SUFBTyx5QkFBQTtFQWJQO0FBQ0Y7QUFlQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBYkY7QUFnQkE7RUFDRSxzQkFBQTtBQWRGO0FBaUJBO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO0VBQ0EsaURBQUE7RUFDQSwwQkFBQTtBQWZGO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUFoQkY7QUFrQkU7RUFFSSxpQkFBQTtBQWpCTjtBQXlCQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQXZCRjtBQXlCRTtFQUNFLFVBQUE7QUF2Qko7QUEwQkU7RUFDRSx1QkFBQTtBQXhCSjtBQTJCRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUF6Qko7QUEyQkk7RUFDRSxnQ0FBQTtBQXpCTjtBQStCQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFD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QTtJQUNBLFdBQUE7RUE5Z0JGO0VBaWhCQTtJQUNFLGdCQUFBO0VBL2dCRjtBQUNGO0FBa2hCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBaGhCRjtFQW1oQkE7SUFDRSxrQkFBQTtFQWpoQkY7RUFvaEJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUFsaEJGO0VBcWhCQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQW5oQkY7RUFzaEJBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQXBoQkY7QUFDRjtBQXVoQkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFyaEJGO0VBd2hCQTtJQUNFLGdCQUFBO0lBQ0EsT0FBQTtFQXRoQkY7RUF5aEJBO0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtFQXZoQkY7RUEwaEJBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQXhoQkY7RUEyaEJBO0lBQ0UsZUFBQTtFQXpoQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU1JU0nDg8KTTiAmIENPTkNJTElBQ0nDg8KTTiAtIEVTVElMT1MgQ09OIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTm90YTogVG9kYXMgbGFzIHZhcmlhYmxlcyBDU1MgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xuLy8gU2UgYWNjZWRlbiBtZWRpYW50ZSB2YXIoLS1ub21icmUtdmFyaWFibGUpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQVJJQUJMRVMgR0xPQkFMRVMgKHBhcmEgdXNhciBlbiBlbCBjb21wb25lbnRlKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgR0xPQkFMRVMgLSBURU1BIE9TQ1VSTyBNRUpPUkFET1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBtYXJnaW46IDIwcHggMDtcblxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5zcGlubmVyLXNtYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbn1cblxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVOSURPIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNjZweDtcbiAgbWFyZ2luLWxlZnQ6IDI2NHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cblxufVxuXG4udG9wLWJhci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBhbmltYXRpb246IHNsaWRlSW5Ub3AgMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gIEBrZXlmcmFtZXMgc2xpZGVJblRvcCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbn1cblxuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLy8gQm90w4PCs24gZGUgYsODwrpzcXVlZGFcbi5zZWFyY2gtYnV0dG9uLXdyYXBwZXIge1xuICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgQsODwppTUVVFREFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc2VhcmNoLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuXG4gIC5zZWFyY2gtbW9kYWwtYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB9XG5cbiAgLnNlYXJjaC1tb2RhbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gICAgei1pbmRleDogMjAwMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1tb2RhbC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtbW9kYWwtaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWNsZWFyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtY2xvc2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyNHB4O1xuICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG5cbiAgICAgICAgLnJlc3VsdC1pY29uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAucmVzdWx0LXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWVtcHR5IHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAyNDBweDtcblxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcblxuICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB+ICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcblxuICAgIC50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5cbiAgICAudG9wLWJhciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24td3JhcHBlciAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cblxuICAudG9wLWJhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuXG4gIC5zZWFyY2gtbW9kYWwge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgLnNlYXJjaC1tb2RhbC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ0hBVEJPVCBTSUdQQVogLSBFU1RJTE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBPdmVybGF5IHByaW5jaXBhbCBkZWwgY2hhdGJvdFxuLmNoYXRib3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0Ym90LWNvbnRhaW5lcixcbiAgICAuY2hhdGJvdC1oZWFkZXIsXG4gICAgLmNoYXRib3QtY29udGVudCxcbiAgICAuY2hhdGJvdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICY6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1oZWFkZXIge1xuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4taWNvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1pbmltaXplLWJ0bi5hbmltYXRpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jbG9zZS1tb2RhbC1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1pbmltaXplQW5pbWF0aW9uIHtcbiAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICAgICAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgICAgICAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRlbnQge1xuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWhvdmVyKSwgdmFyKC0tc2VjdXJpdHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5mb290ZXItc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xuXG4gICAgLnN0YXQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1taW5pbWl6ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFuaW1hdGlvbjogYnViYmxlQXBwZWFyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAubW9kYWwtb3ZlcmxheS1zaWdwYXoubWluaW1pemVkLW1vZGUgJiB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAwMDMgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmJ1YmJsZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgYW5pbWF0aW9uOiBzcGluU2xvdyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLmJ1YmJsZS10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5idWJibGUtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZVB1bHNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxufVxuXG4uYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2hhdGJvdC1jb250YWluZXI6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmNoYXRib3QtZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZm9vdGVyLXN0YXRzIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXRib3QtY29udGFpbmVyOm5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLmNoYXRib3QtaGVhZGVyIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cblxuICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jaGF0Ym90LWNvbnRhaW5lcjpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5jaGF0Ym90LW1pbmltaXplZCB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lci5tYXhpbWl6ZWQge1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoYXRib3QtY29udGFpbmVyLm1heGltaXplZCAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gQXl1ZGEgU0lHUEFaIGVuIFNpZGViYXJcbi5zaWRlYmFyLWNoYXQtc2lncGF6IHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG5cbiAgLmNoYXQtc2lncGF6LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXG4gICAgICAgICAgdHJhbnNwYXJlbnQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3M7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2VJY29uIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxuICAgIH1cblxuICAgIC5jaGF0LXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgfVxuXG4gICAgLmNoYXQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZUJhZGdlIDJzIGluZmluaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwdWxzZUJhZGdlIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRlbmVkb3IgZGVsIGJvdMODwrNuIGRlIHRlbWFcbi50aGVtZS10b2dnbGUtY29udGFpbmVyIHtcbiAgLnRoZW1lLXRvZ2dsZS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgICBAa2V5ZnJhbWVzIGdsb3cge1xuICAgICAgZnJvbSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wNSk7XG4gICAgfVxuXG4gICAgLnRoZW1lLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRoZW1lLXRleHQge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3RpZmljYXRpb24tYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3RpZmljYXRpb25zLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiAzMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuXG4gIC5kcm9wZG93bi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5tYXJrLWFsbC1yZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cblxuICAgICYudW5yZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLm5vdGlmaWNhdGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbi1kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnVzZXItbWVudS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlci1tZW51LWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIC51c2VyLWF2YXRhci1pbml0aWFsIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cblxuLnVzZXItZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgd2lkdGg6IDI4MHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgfVxuXG4gIC51c2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG5cbiAgICAudXNlci1hdmF0YXItbGFyZ2Uge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnVzZXItZW1haWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZHJvcGRvd24tZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxuXG4gIC5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG5cbiAgICAubWVudS10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUkVNSVNJw4PCk04vQ09OQ0lMSUFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnJlbWlzaW9uLWNvbmNpbGlhY2lvbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLXRhYnMge1xuICAgIC50YWJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIC50YWIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnF1aWNrLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcblxuICAgICAgJi5yZW1pc2lvbi1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zZWN1cml0eSksIDAuMSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWN1cml0eSk7XG4gICAgICB9XG5cbiAgICAgICYuY29uY2lsaWFjaW9uLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXN1Y2Nlc3MpLCAwLjEpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICB9XG5cbiAgICAgICYuZGVudW5jaWEtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeSksIDAuMSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhdC1jb250ZW50IHtcbiAgICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kZW51bmNpYXMtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5kZW51bmNpYXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDQ4cHggMjRweDtcblxuICAgICAgLmVtcHR5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlbnVuY2lhLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICB9XG5cbiAgICAgIC5kZW51bmNpYS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgLmRlbnVuY2lhLWNvZGlnbyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbmFjbycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVudW5jaWEtZ3JhdmVkYWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgJi5ncmF2ZWRhZC1hbHRhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmdyYXZlZGFkLW1lZGlhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZ3JhdmVkYWQtYmFqYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRlbnVuY2lhLWRlc2NyaXBjaW9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5kZW51bmNpYS1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1zbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZmlsdHJvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5maWx0cm9zLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuYnRuLWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogMTZweDtcblxuICAgIC5maWx0cm8taXRlbSB7XG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIC5kYXRhLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1pbi13aWR0aDogMTIwMHB4O1xuXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICYudGV4dC1jZW50ZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAuY29kaWdvLWNlbGwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9uYWNvJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZW51bmNpYS1jZWxsIHtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudm90b3MtY2VsbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC52b3RvLWZhdm9yLCAudm90by1jb250cmEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAgICAgICAgICAgJi52b3RvLWZhdm9yIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnZvdG8tY29udHJhIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMtY2VsbCB7XG4gICAgICAgICAgLmFjdGlvbnMtYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmJ0bi1hY3Rpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgJi52aWV3LCAmLmFjdGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5lZGl0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuY29tcGxldGUsICYuaW5pY2lhciwgJi5maW5hbGl6YXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5hbnVsYXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi52b3RhciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS13YXJuaW5nKSwgMC4xKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1zdGF0ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDI0cHg7XG5cbiAgICAuZW1wdHktaWNvbiB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbi5lc3RhZG8tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmLmVzdGFkby1wZW5kaWVudGUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgfVxuXG4gICYuZXN0YWRvLXByb2dyYW1hZGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgfVxuXG4gICYuZXN0YWRvLXByb2Nlc28ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0td2FybmluZyksIDAuMSk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5lc3RhZG8tZmluYWxpemFkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5lc3RhZG8tY29tcGxldGFkYSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zZWN1cml0eSksIDAuMSk7XG4gICAgY29sb3I6IHZhcigtLXNlY3VyaXR5KTtcbiAgfVxuXG4gICYuZXN0YWRvLWFudWxhZGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cbn1cblxuLnJlc3VsdGFkby1hY3VlcmRvIHtcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVzdWx0YWRvLWRlc2FjdWVyZG8ge1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcblxuICAucGFnaW5hdGlvbi1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcblxuICAgIC5wYWdpbmF0aW9uLXBhZ2Uge1xuICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUxFUyBNRUpPUkFET1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICYucmVtaXNpb24tdGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2VjdXJpdHkpO1xuICAgICAgfVxuXG4gICAgICAmLmNvbmNpbGlhY2lvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAzMnB4O1xuXG4gICAgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjRweDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDMycHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnIConO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJltmb3I9XCJpZF9kZW51bmNpYVwiXTo6YWZ0ZXIsXG4gICAgICAmW2Zvcj1cImlkX2luc3RpdHVjaW9uXCJdOjphZnRlcixcbiAgICAgICZbZm9yPVwibW90aXZvXCJdOjphZnRlcixcbiAgICAgICZbZm9yPVwiZmVjaGFfYXVkaWVuY2lhXCJdOjphZnRlcixcbiAgICAgICZbZm9yPVwibHVnYXJcIl06OmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWRpc2FibGVkLWJnKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWRpc2FibGVkLXRleHQpO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIH1cblxuICAvLyBEZW51bmNpYSBibG9xdWVhZGFcbiAgLmRlbnVuY2lhLWJsb3F1ZWFkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLXdhcm5pbmcpLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgLmJsb3F1ZWFkYS1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAuYmxvcXVlYWRhLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZW51bmNpYS1pbmZvLXByZXZpZXcge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBzbWFsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb21wZXRlbmNpYS1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLmluZm8tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgLmluZm8taGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgLmluZm8taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvLXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5mby1jb250ZW50IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuXG4gICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmZvLWFsZXJ0YSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXJtcy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAudGVybXMtdGV4dCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZyk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIFZPVEFDScODwpNOIE1FSk9SQURPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZvdGluZy1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaDIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gIH1cblxuICAudm90aW5nLWluZm8ge1xuICAgIC5kZW51bmNpYS1pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG5cbiAgICAgIC5hdWRpZW5jaWEtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZvdGluZy1zdGF0cyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGdhcDogMTZweDtcblxuICAgICAgLnN0YXQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXQtdmFsdWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAgICAgJi5mYXZvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5jb250cmEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZvdGluZy1wcm9ncmVzcyB7XG4gICAgICAucHJvZ3Jlc3MtbGFiZWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgLmxhYmVsLWZhdm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGFiZWwtY29udHJhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAucHJvZ3Jlc3MtZmF2b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250cmEge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnZvdGluZy1jb250cm9scyB7XG4gICAgLnZvdG8tc2VsZWN0b3Ige1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC52b3RvLWhpbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudm90aW5nLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogMTZweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tc3VjY2VzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtc3VjY2Vzcyk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWRhbmdlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnZvdG9zLXVzYWRvcyB7XG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnZvdG9zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAudm90by1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICAudm90by1ub21icmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZvdG8tZXN0YWRvIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG5cbiAgICAgICAgICAmLnVzYWRvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZGlzcG9uaWJsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudm90aW5nLWluc3RydWN0aW9ucyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXdhcm5pbmcpLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLXdhcm5pbmcpLCAwLjIpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZyk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIENPTkZJUk1BQ0nDg8KTTiBNRUpPUkFET1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb25maXJtLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29uZmlybS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgICYuY29uZmlybS13YXJuaW5nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTIE1FSk9SQURPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cblxuICAgICYuYnRuLXJlbWlzaW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNlY3VyaXR5KSwgZGFya2VuKCM4YjVjZjYsIDEwJSkpO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZGFya2VuKCM4YjVjZjYsIDEwJSksIGRhcmtlbigjOGI1Y2Y2LCAyMCUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmJ0bi1jb25jaWxpYWNpb24ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc3VjY2VzcyksIGRhcmtlbigjMTBiOTgxLCAxMCUpKTtcblxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGRhcmtlbigjMTBiOTgxLCAxMCUpLCBkYXJrZW4oIzEwYjk4MSwgMjAlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuICB9XG5cbiAgJi5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAmLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1zdWNjZXNzKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG5cbiAgJi5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLXNtIHtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAuYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgLmJ0bi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1saW5rIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tbGluay1ob3Zlcik7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTIEFESUNJT05BTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC43OyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFIEFESUNJT05BTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAyNDBweDtcblxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcblxuICAgIC5zaWRlYmFyLmNvbGxhcHNlZCB+ICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJlbWlzaW9uLWNvbmNpbGlhY2lvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5kZW51bmNpYXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucXVpY2stc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIC5oZWFkZXItdGFicyB7XG4gICAgICAudGFicyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgIC50YWIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnF1aWNrLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5kZW51bmNpYXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudm90aW5nLWNvbnRyb2xzIHtcbiAgICAudm90aW5nLWJ1dHRvbnMge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyLFxuICAudm90aW5nLW1vZGFsLFxuICAuY29uZmlybS1tb2RhbCB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgICBvcmRlcjogMztcbiAgICB9XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lcixcbiAgLnZvdGluZy1tb2RhbCxcbiAgLmNvbmZpcm0tbW9kYWwge1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC52b3Rpbmctc3RhdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTSUdQQVogLSBFU1RJTE9TIMODwppOSUNPUyAoQ09NUExFVE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYXJpYWJsZXMgaW50ZXJuYXMgKG5vIGludGVyZmllcmVuIGNvbiBnbG9iYWxlcylcbkBzaWdwYXotcHJpbWFyeTogIzRmNDZlNTtcbkBzaWdwYXotc2Vjb25kYXJ5OiAjNjM2NmYxO1xuQHNpZ3Bhei1hY2NlbnQ6ICMwMGZmODg7XG5Ac2lncGF6LWRhbmdlcjogI2VmNDQ0NDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9WRVJMQVkgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIC8vIFNvbG8gbW9zdHJhciBmb25kbyBjdWFuZG8gZWwgbW9kYWwgZXN0w4PCoSBhYmllcnRvXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cblxuICAvLyBDdWFuZG8gZXN0w4PCoSBtaW5pbWl6YWRvOiBzaW4gZm9uZG8gbmkgYmxvcXVlb1xuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8vIFNvbG8gbGEgYnVyYnVqYSBlcyBpbnRlcmFjdGl2YVxuICAgIC5mbG9hdGluZy1idWJibGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICYubWluaW1pemVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZCkge1xuICAgIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVIgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAubW9kYWwtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAubW9kYWwtYnRuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogNDJweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk1KTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciAuYnRuLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG5cbiAgICAgIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgei1pbmRleDogMTAwMDI7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIH1cblxuICAgICAgJi5taW5pbWl6ZS1idG4uYW5pbWF0aW5nIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICYuY2xvc2UtbW9kYWwtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENVRVJQTyBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcblxuICAvLyBTY3JvbGxiYXIgcGVyc29uYWxpemFkYVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1zZWNvbmRhcnksIEBzaWdwYXotcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXNlZ3VyYXIgcXVlIGVsIGNvbXBvbmVudGUgaW50ZXJubyBvY3VwZSB0b2RvIGVsIGFuY2hvXG4gIGFwcC1oZWxwLXN1cHBvcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQlVSQlVKQSBGTE9UQU5URSAoTUlOSU1JWkFETylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmxvYXRpbmctYnViYmxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBhbmltYXRpb246IGJ1YmJsZUFwcGVhciAwLjZzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNyk7XG4gIH1cblxuICAmLnB1bHNpbmcge1xuICAgIGFuaW1hdGlvbjogYnViYmxlUHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cblxuICAuYnViYmxlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cblxuICAuYnViYmxlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gIC5idWJibGUtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5idWJibGUtbm90aWZpY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY29sb3I6IEBzaWdwYXotcHJpbWFyeTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuQGtleWZyYW1lcyBtaW5pbWl6ZUFuaW1hdGlvbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpblNsb3cge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_intermediaciones_pages_intermediacion_component_ts.js.map