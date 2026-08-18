"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_resoluciones_pages_resolucion_component_ts"],{

/***/ 36379:
/*!********************************************************************!*\
  !*** ./src/app/modules/resoluciones/pages/resolucion.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MedidaSentenciaComponent: () => (/* binding */ MedidaSentenciaComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _components_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/truncate.pipe */ 71721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _services_sentencia_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/sentencia.service */ 74950);
/* harmony import */ var _services_medida_cautelar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/medida-cautelar.service */ 34804);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _services_conciliacion_disponible_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/conciliacion-disponible.service */ 10825);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../services/remision-conciliacion.service */ 52768);







// Layouts y componentes



















function MedidaSentenciaComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MedidaSentenciaComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_4_div_11_div_1_Template_div_click_0_listener() {
      const result_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](result_r5.action && result_r5.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 58)(4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](result_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](result_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](result_r5.description);
  }
}
function MedidaSentenciaComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MedidaSentenciaComponent_div_4_div_11_div_1_Template, 8, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function MedidaSentenciaComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function MedidaSentenciaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 44)(3, "div", 45)(4, "div", 46)(5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup.enter", function MedidaSentenciaComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, MedidaSentenciaComponent_div_4_button_8_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MedidaSentenciaComponent_div_4_div_11_Template, 2, 1, "div", 51)(12, MedidaSentenciaComponent_div_4_div_12_Template, 2, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function MedidaSentenciaComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 70)(7, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
}
function MedidaSentenciaComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 74)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MedidaSentenciaComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 77)(2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, MedidaSentenciaComponent_div_5_div_4_div_9_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function MedidaSentenciaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MedidaSentenciaComponent_div_5_div_2_Template, 17, 0, "div", 64)(3, MedidaSentenciaComponent_div_5_div_3_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MedidaSentenciaComponent_div_5_div_4_Template, 10, 3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function MedidaSentenciaComponent_div_52_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 102)(1, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u26A0\uFE0F Ya existe sentencia para esta denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_52_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " \u2705 ACUERDO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 93)(7, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 96)(13, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 99)(18, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_52_div_7_Template_button_click_18_listener() {
      const conciliacion_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("medida", conciliacion_r10.conciliacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " \uD83D\uDEE1\uFE0F Crear Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, MedidaSentenciaComponent_div_52_div_7_div_20_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const conciliacion_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("CONC-", conciliacion_r10.conciliacion_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Denuncia: ", conciliacion_r10.numero_expediente || "SIN-EXP");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 7, conciliacion_r10.fecha_audiencia, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u2705 ", conciliacion_r10.votos_favor || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u274C ", conciliacion_r10.votos_contra || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.tieneSentencia(conciliacion_r10.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.tieneSentencia(conciliacion_r10.denuncia_id));
  }
}
function MedidaSentenciaComponent_div_52_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Todas las conciliaciones con acuerdo ya tienen medidas asociadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\uD83E\uDD1D Conciliaciones Disponibles para Medida Cautelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Conciliaciones con acuerdo que pueden generar medidas cautelares");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MedidaSentenciaComponent_div_52_div_7_Template, 21, 10, "div", 87)(8, MedidaSentenciaComponent_div_52_div_8_Template, 5, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.getConciliacionesParaMedida());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.getConciliacionesParaMedida().length === 0);
  }
}
function MedidaSentenciaComponent_div_53_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 102)(1, "small", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u26A0\uFE0F Ya existe medida cautelar para esta denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_53_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " \u2705 ACUERDO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 93)(7, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 96)(13, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 99)(18, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_53_div_7_Template_button_click_18_listener() {
      const conciliacion_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("sentencia", conciliacion_r12.conciliacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " \uD83D\uDCDC Crear Sentencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, MedidaSentenciaComponent_div_53_div_7_div_20_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const conciliacion_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("CONC-", conciliacion_r12.conciliacion_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Denuncia: ", conciliacion_r12.numero_expediente || "SIN-EXP");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 7, conciliacion_r12.fecha_audiencia, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u2705 ", conciliacion_r12.votos_favor || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u274C ", conciliacion_r12.votos_contra || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.tieneMedida(conciliacion_r12.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.tieneMedida(conciliacion_r12.denuncia_id));
  }
}
function MedidaSentenciaComponent_div_53_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Todas las conciliaciones con acuerdo ya tienen sentencias asociadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\uD83D\uDCDC Conciliaciones Disponibles para Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Conciliaciones con acuerdo que pueden generar sentencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MedidaSentenciaComponent_div_53_div_7_Template, 21, 10, "div", 87)(8, MedidaSentenciaComponent_div_53_div_8_Template, 5, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.getConciliacionesParaSentencia());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.getConciliacionesParaSentencia().length === 0);
  }
}
function MedidaSentenciaComponent_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", estado_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", estado_r13.label, " ");
  }
}
function MedidaSentenciaComponent_div_85_tr_45_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.levantarMedida(medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u23EB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_85_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td")(5, "div", 120)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "td")(23, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "td")(26, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "td")(29, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "td", 124)(32, "div", 125)(33, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_33_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.consultarMedida(medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_36_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalEditar("medida", medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, MedidaSentenciaComponent_div_85_tr_45_button_39_Template, 3, 0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_40_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalEliminar("medida", medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_43_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generarReporteVigencia(medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_46_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.exportarPDF("medida", medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_tr_45_Template_button_click_49_listener() {
      const medida_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.exportarExcel("medida", medida_r16.medida_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const medida_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("MED-", medida_r16.medida_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](medida_r16.denuncia_codigo || "SIN-EXP");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 19, medida_r16.denuncia_descripcion || "Sin descripci\u00F3n", 40));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](medida_r16.tipo_medida_nombre || "Desconocido");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](16, 22, medida_r16.descripcion || "Sin descripci\u00F3n", 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](19, 25, medida_r16.fecha_inicio, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.formatDuracion(medida_r16.duracion_dias));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.getVigenciaClass(medida_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.calcularVigenciaRestante(medida_r16), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.getEstadoCumplimientoClass(medida_r16.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", medida_r16.estado_texto || medida_r16.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.tieneSentencia(medida_r16.conciliacion == null ? null : medida_r16.conciliacion.denuncia_id) ? "bloqueado" : "desbloqueado");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.tieneSentencia(medida_r16.conciliacion == null ? null : medida_r16.conciliacion.denuncia_id) ? "\uD83D\uDD12 Sentencia activa" : "\uD83D\uDD13 Sin sentencia", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.tieneSentencia(medida_r16.conciliacion == null ? null : medida_r16.conciliacion.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", medida_r16.estado === "ACTIVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.tieneSentencia(medida_r16.conciliacion == null ? null : medida_r16.conciliacion.denuncia_id));
  }
}
function MedidaSentenciaComponent_div_85_div_46_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_div_46_button_4_Template_button_click_0_listener() {
      const pagina_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", pagina_r20 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", pagina_r20 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", pagina_r20, " ");
  }
}
function MedidaSentenciaComponent_div_85_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 134)(1, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_div_46_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MedidaSentenciaComponent_div_85_div_46_button_4_Template, 2, 4, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_div_46_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function MedidaSentenciaComponent_div_85_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\uD83D\uDEE1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No hay medidas cautelares registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Comience creando una nueva medida cautelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_div_47_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("medida"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Crear primera medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "div", 109)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\uD83D\uDEE1\uFE0F Medidas Cautelares Registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 111)(8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.descargarReporte("medida"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Reporte General ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generarReporteVigencias());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Alertas de Vencimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_85_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("medida"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Nueva Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 114)(21, "table", 115)(22, "thead")(23, "tr")(24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "ID Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Tipo Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Fecha Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Duraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Vigencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Bloqueo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "th", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, MedidaSentenciaComponent_div_85_tr_45_Template, 52, 28, "tr", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, MedidaSentenciaComponent_div_85_div_46_Template, 7, 3, "div", 118)(47, MedidaSentenciaComponent_div_85_div_47_Template, 11, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.totalItems, " registros encontrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.registrosMedidaPaginados);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.medidasCautelares.length === 0);
  }
}
function MedidaSentenciaComponent_div_86_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td")(5, "div", 120)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td")(16, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "td")(21, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "td")(24, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "td")(27, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "td", 124)(30, "div", 125)(31, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_31_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.verDetalleSentencia(sentencia_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_34_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalEditar("sentencia", sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_37_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalEliminar("sentencia", sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_40_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.crearRemisionDesdeSentencia(sentencia_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "\uD83D\uDCE4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_43_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generarCertificacion(sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_46_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.exportarPDF("sentencia", sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_49_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.exportarExcel("sentencia", sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_tr_43_Template_button_click_52_listener() {
      const sentencia_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.validarEjecucionSentencia(sentencia_r24.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const sentencia_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("SEN-", sentencia_r24.sentencia_id.toString().padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](sentencia_r24.denuncia_codigo || "SIN-EXP");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 23, sentencia_r24.denuncia_descripcion || "Sin descripci\u00F3n", 40));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](14, 26, sentencia_r24.fecha_sentencia, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.getTipoResolucionClass(sentencia_r24.tipo_resolucion));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", sentencia_r24.tipo_resolucion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.getInstitucionNombre(sentencia_r24.institucion_remitida_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.getEstadoEjecucionClass(sentencia_r24.estado_ejecucion));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", sentencia_r24.estado_ejecucion_texto || sentencia_r24.estado_ejecucion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.validarEjecucion(sentencia_r24) ? "valido" : "invalido");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.validarEjecucion(sentencia_r24) ? "\u2705 V\u00E1lida" : "\u274C Requiere atenci\u00F3n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.tieneRemision(sentencia_r24.conciliacion == null ? null : sentencia_r24.conciliacion.denuncia_id) ? "bloqueado" : "desbloqueado");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.tieneRemision(sentencia_r24.conciliacion == null ? null : sentencia_r24.conciliacion.denuncia_id) ? "\uD83D\uDD12 En Remisi\u00F3n" : "\uD83D\uDD13 Sin remisi\u00F3n", "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.sentenciaTieneRemision(sentencia_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.sentenciaTieneRemision(sentencia_r24))("disabled", ctx_r1.tieneMedida(sentencia_r24.conciliacion == null ? null : sentencia_r24.conciliacion.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.tieneMedida(sentencia_r24.conciliacion == null ? null : sentencia_r24.conciliacion.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.sentenciaTieneRemision(sentencia_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", sentencia_r24.estado_ejecucion === "EJECUTADA" || ctx_r1.sentenciaTieneRemision(sentencia_r24));
  }
}
function MedidaSentenciaComponent_div_86_div_44_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_div_44_button_4_Template_button_click_0_listener() {
      const pagina_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r27 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", pagina_r27 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", pagina_r27 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", pagina_r27, " ");
  }
}
function MedidaSentenciaComponent_div_86_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 134)(1, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_div_44_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MedidaSentenciaComponent_div_86_div_44_button_4_Template, 2, 4, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_div_44_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function MedidaSentenciaComponent_div_86_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "No hay sentencias registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Comience creando una nueva sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_div_45_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("sentencia"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Crear primera sentencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "div", 109)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\uD83D\uDCDC Sentencias Registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 111)(8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.descargarReporte("sentencia"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Reporte General ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generarCertificacionesPendientes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Certificaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_86_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.abrirModalCrear("sentencia"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Nueva Sentencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 114)(21, "table", 115)(22, "thead")(23, "tr")(24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "ID Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Fecha Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Tipo Resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Estado Ejecuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Validez");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Bloqueo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "th", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, MedidaSentenciaComponent_div_86_tr_43_Template, 55, 29, "tr", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, MedidaSentenciaComponent_div_86_div_44_Template, 7, 3, "div", 118)(45, MedidaSentenciaComponent_div_86_div_45_Template, 11, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r1.totalItems, " registros encontrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.registrosSentenciaPaginados);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.totalPaginas > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.sentencias.length === 0);
  }
}
function MedidaSentenciaComponent_div_87_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conciliacion_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", conciliacion_r30.conciliacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" CONC-", conciliacion_r30.conciliacion_id.toString().padStart(4, "0"), " - ", conciliacion_r30.numero_expediente || "SIN-EXP", " ");
  }
}
function MedidaSentenciaComponent_div_87_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 179)(1, "small")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Denuncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "small")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Resultado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "small")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Fecha Audiencia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.codigo_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.resultado_conciliacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](15, 3, ctx_r1.formData.fecha_audiencia, "dd/MM/yyyy"));
  }
}
function MedidaSentenciaComponent_div_87_div_23_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", tipo_r32.tipo_medida_id || tipo_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", tipo_r32.nombre, " - ", tipo_r32.descripcion, " ");
  }
}
function MedidaSentenciaComponent_div_87_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Tipo de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "select", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_23_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.tipo_medida_id, $event) || (ctx_r1.formData.tipo_medida_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Seleccione tipo de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, MedidaSentenciaComponent_div_87_div_23_option_8_Template, 2, 3, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.tipo_medida_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.tiposMedida);
  }
}
function MedidaSentenciaComponent_div_87_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "textarea", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_24_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.descripcion, $event) || (ctx_r1.formData.descripcion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.descripcion);
  }
}
function MedidaSentenciaComponent_div_87_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Tipo de Resoluci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "select", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_25_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.tipo_resolucion, $event) || (ctx_r1.formData.tipo_resolucion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Seleccione tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "option", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Absoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "option", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Condena");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "option", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Transacci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "option", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "option", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.tipo_resolucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
  }
}
function MedidaSentenciaComponent_div_87_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Fecha Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_27_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.fecha_inicio, $event) || (ctx_r1.formData.fecha_inicio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.fecha_inicio);
  }
}
function MedidaSentenciaComponent_div_87_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Duraci\u00F3n (d\u00EDas) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_28_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.duracion_dias, $event) || (ctx_r1.formData.duracion_dias = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "small", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Dejar vac\u00EDo para duraci\u00F3n indefinida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.duracion_dias);
  }
}
function MedidaSentenciaComponent_div_87_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Fecha Sentencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_29_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.fecha_sentencia, $event) || (ctx_r1.formData.fecha_sentencia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.fecha_sentencia);
  }
}
function MedidaSentenciaComponent_div_87_div_30_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const institucion_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", institucion_r39.institucion_id || institucion_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", institucion_r39.nombre, " ");
  }
}
function MedidaSentenciaComponent_div_87_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Instituci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_30_Template_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.institucion_id, $event) || (ctx_r1.formData.institucion_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Seleccione instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, MedidaSentenciaComponent_div_87_div_30_option_8_Template, 2, 2, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.institucion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.instituciones);
  }
}
function MedidaSentenciaComponent_div_87_small_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "small", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Al marcar esta opci\u00F3n, la denuncia estar\u00E1 disponible para ser remitida a otra instituci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MedidaSentenciaComponent_div_87_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 154)(1, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Motivo por el que excede competencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "textarea", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_div_41_Template_textarea_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.motivo_excede_competencias, $event) || (ctx_r1.formData.motivo_excede_competencias = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.motivo_excede_competencias);
  }
}
function MedidaSentenciaComponent_div_87_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u274C Ya existe una sentencia para esta denuncia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Para crear una medida cautelar, primero debe anular la sentencia existente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_87_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u274C Ya existe una medida cautelar para esta denuncia.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Para crear una sentencia, primero debe levantar la medida cautelar existente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_87_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u2705 No hay conflictos de exclusividad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Puede proceder con la creaci\u00F3n del registro.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MedidaSentenciaComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 146)(1, "div", 147)(2, "div", 148)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_87_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 150)(9, "form", 151, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function MedidaSentenciaComponent_div_87_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.guardarRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 152)(12, "div", 153)(13, "div", 154)(14, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Conciliaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "select", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.conciliacion_id, $event) || (ctx_r1.formData.conciliacion_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function MedidaSentenciaComponent_div_87_Template_select_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onConciliacionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Seleccione una conciliaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, MedidaSentenciaComponent_div_87_option_21_Template, 2, 3, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, MedidaSentenciaComponent_div_87_div_22_Template, 16, 6, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, MedidaSentenciaComponent_div_87_div_23_Template, 9, 3, "div", 161)(24, MedidaSentenciaComponent_div_87_div_24_Template, 6, 1, "div", 161)(25, MedidaSentenciaComponent_div_87_div_25_Template, 18, 2, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, MedidaSentenciaComponent_div_87_div_27_Template, 6, 1, "div", 161)(28, MedidaSentenciaComponent_div_87_div_28_Template, 8, 1, "div", 161)(29, MedidaSentenciaComponent_div_87_div_29_Template, 6, 1, "div", 161)(30, MedidaSentenciaComponent_div_87_div_30_Template, 9, 3, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 154)(32, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "textarea", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_Template_textarea_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.observaciones, $event) || (ctx_r1.formData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 154)(36, "label", 164)(37, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_87_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formData.excede_competencias, $event) || (ctx_r1.formData.excede_competencias = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "\u26A0\uFE0F Esta sentencia excede las competencias del m\u00F3dulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, MedidaSentenciaComponent_div_87_small_40_Template, 2, 0, "small", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, MedidaSentenciaComponent_div_87_div_41_Template, 4, 1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 167)(43, "div", 168)(44, "div", 169)(45, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Validaci\u00F3n de Exclusividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, MedidaSentenciaComponent_div_87_div_50_Template, 5, 0, "div", 173)(51, MedidaSentenciaComponent_div_87_div_51_Template, 5, 0, "div", 173)(52, MedidaSentenciaComponent_div_87_div_52_Template, 5, 0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 174)(54, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 176)(57, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_87_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const registroForm_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.modalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.conciliacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.currentMode === "medida" ? ctx_r1.getConciliacionesParaMedida() : ctx_r1.getConciliacionesParaSentencia());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.formData.conciliacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("placeholder", ctx_r1.currentMode === "medida" ? "Observaciones sobre la medida cautelar..." : "Observaciones sobre la sentencia...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.excede_competencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.formData.excede_competencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.formData.excede_competencias);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "medida" && ctx_r1.tieneSentencia(ctx_r1.formData.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.currentMode === "sentencia" && ctx_r1.tieneMedida(ctx_r1.formData.denuncia_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.tieneConflicto());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" Al crear esta ", ctx_r1.currentMode === "medida" ? "medida cautelar" : "sentencia", ", ", ctx_r1.currentMode === "medida" ? "se bloquear\u00E1 la creaci\u00F3n de sentencias para esta denuncia" : "se bloquear\u00E1 la creaci\u00F3n de medidas cautelares para esta denuncia", ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !registroForm_r41.form.valid || ctx_r1.tieneConflicto());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", ctx_r1.isEditing ? "Actualizar" : "Crear", " ", ctx_r1.currentMode === "medida" ? "Medida" : "Sentencia", " ");
  }
}
function MedidaSentenciaComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 146)(1, "div", 206)(2, "div", 207)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u26A0\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_88_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 208)(9, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "p", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "p", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Esta acci\u00F3n no se puede deshacer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 211)(18, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_88_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_88_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.eliminarRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\u00BFEst\u00E1 seguro de eliminar esta ", ctx_r1.currentMode === "medida" ? "medida cautelar" : "sentencia", "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.currentMode === "medida" ? "Se desbloquear\u00E1 la creaci\u00F3n de sentencias para esta denuncia." : "Se desbloquear\u00E1 la creaci\u00F3n de medidas cautelares para esta denuncia.", " ");
  }
}
function MedidaSentenciaComponent_div_89_div_13_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 230)(1, "div", 231)(2, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Contenido de la Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 256)(7, "p", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.sentenciaSeleccionada.contenido);
  }
}
function MedidaSentenciaComponent_div_89_div_13_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 230)(1, "div", 231)(2, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 258)(7, "p", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.sentenciaSeleccionada.observaciones);
  }
}
function MedidaSentenciaComponent_div_89_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "div", 224)(3, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 226)(6, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Tipo de Resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 224)(12, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 226)(15, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Fecha de Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 224)(21, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "\uD83C\uDFDB\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 226)(24, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 224)(29, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 226)(32, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Estado Ejecuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 230)(37, "div", 231)(38, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Cambiar Estado de Ejecuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 233)(43, "div", 234)(44, "div", 235)(45, "select", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_89_div_13_Template_select_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.estadoSeleccionado, $event) || (ctx_r1.estadoSeleccionado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "option", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "\u26A1 Pendiente de Ejecuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "option", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "\uD83D\uDD04 En Ejecuci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "option", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "\u2705 Ejecutada");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "option", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "\uD83D\uDCCA Parcialmente Ejecutada");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "option", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "\u23F8\uFE0F Suspendida");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "option", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "\uD83D\uDCC1 Archivada");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_89_div_13_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.actualizarEstadoEjecucionDesdeModal(ctx_r1.estadoSeleccionado));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, " Actualizar Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 230)(61, "div", 231)(62, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "Informaci\u00F3n de la Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div", 244)(67, "div", 245)(68, "span", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "C\u00F3digo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 248)(73, "span", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](77, MedidaSentenciaComponent_div_89_div_13_div_77_Template, 9, 1, "div", 249)(78, MedidaSentenciaComponent_div_89_div_13_div_78_Template, 9, 1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "div", 250)(80, "div", 251)(81, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 253)(84, "h4", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "p", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 19, ctx_r1.sentenciaSeleccionada.tipo_resolucion));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](19, 21, ctx_r1.sentenciaSeleccionada.fecha_sentencia, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.getInstitucionNombre(ctx_r1.sentenciaSeleccionada.institucion_remitida_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.getEstadoEjecucionClass(ctx_r1.sentenciaSeleccionada.estado_ejecucion));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.sentenciaSeleccionada.estado_ejecucion_texto || ctx_r1.sentenciaSeleccionada.estado_ejecucion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.estadoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.estadoSeleccionado === (ctx_r1.sentenciaSeleccionada == null ? null : ctx_r1.sentenciaSeleccionada.estado_ejecucion));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.sentenciaSeleccionada.denuncia_codigo || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.sentenciaSeleccionada.denuncia_descripcion || "Sin descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.sentenciaSeleccionada.contenido);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.sentenciaSeleccionada.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("valido", ctx_r1.sentenciaSeleccionada.estado_ejecucion === "EJECUTADA")("invalido", ctx_r1.sentenciaSeleccionada.estado_ejecucion !== "EJECUTADA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.sentenciaSeleccionada.estado_ejecucion === "EJECUTADA" ? "\u2705" : "\u26A0\uFE0F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.sentenciaSeleccionada.estado_ejecucion === "EJECUTADA" ? "Sentencia V\u00E1lida y Ejecutable" : "Sentencia Pendiente de Ejecuci\u00F3n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.sentenciaSeleccionada.estado_ejecucion === "EJECUTADA" ? "La sentencia ha sido ejecutada correctamente y cumple con todos los requisitos legales." : "La sentencia a\u00FAn no ha sido ejecutada. Se requiere acci\u00F3n para completar la ejecuci\u00F3n.", " ");
  }
}
function MedidaSentenciaComponent_div_89_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_89_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.validarEjecucionSentencia(ctx_r1.sentenciaSeleccionada == null ? null : ctx_r1.sentenciaSeleccionada.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Marcar como Ejecutada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function MedidaSentenciaComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 146)(1, "div", 214)(2, "div", 215)(3, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 217)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Detalles de Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_89_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarDetalleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, MedidaSentenciaComponent_div_89_div_13_Template, 88, 24, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 220)(15, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_89_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cerrarDetalleModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, MedidaSentenciaComponent_div_89_button_19_Template, 4, 0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_89_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.generarCertificacion(ctx_r1.sentenciaSeleccionada == null ? null : ctx_r1.sentenciaSeleccionada.sentencia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, " Generar Certificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("SEN-", ctx_r1.sentenciaSeleccionada == null ? null : ctx_r1.sentenciaSeleccionada.sentencia_id == null ? null : (tmp_3_0 = ctx_r1.sentenciaSeleccionada.sentencia_id.toString()) == null ? null : tmp_3_0.padStart(4, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.sentenciaSeleccionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.sentenciaSeleccionada && ctx_r1.sentenciaSeleccionada.estado_ejecucion !== "EJECUTADA");
  }
}
function MedidaSentenciaComponent_div_90_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", inst_r47.institucion_id || inst_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", inst_r47.nombre, " ");
  }
}
function MedidaSentenciaComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 146)(1, "div", 147)(2, "div", 148)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "\uD83D\uDCE4 Crear Remisi\u00F3n por Exceso de Competencias");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_90_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cancelarRemisionDesdeSentencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 150)(9, "div", 260)(10, "h4", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "\uD83D\uDCDC Sentencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "p")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Denuncia ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 154)(21, "label", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, " Instituci\u00F3n de Destino ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "select", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_90_Template_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formDataRemision.institucion_id, $event) || (ctx_r1.formDataRemision.institucion_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "option", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Seleccione una instituci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, MedidaSentenciaComponent_div_90_option_28_Template, 2, 2, "option", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 154)(30, "label", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Motivo de Remisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "textarea", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_90_Template_textarea_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formDataRemision.motivo, $event) || (ctx_r1.formDataRemision.motivo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "small", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Puede editar este motivo si es necesario");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 154)(36, "label", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "textarea", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_div_90_Template_textarea_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.formDataRemision.observaciones, $event) || (ctx_r1.formDataRemision.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 176)(40, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_90_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.cancelarRemisionDesdeSentencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_div_90_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.confirmarRemisionDesdeSentencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, " \uD83D\uDCE4 Crear Remisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.formDataRemision.sentencia_info);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.formDataRemision.denuncia_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formDataRemision.institucion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.instituciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formDataRemision.motivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formDataRemision.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r1.formDataRemision.institucion_id);
  }
}
class MedidaSentenciaComponent {
  router;
  notificationService;
  authService;
  sentenciaService;
  medidaService;
  themeService;
  conciliacionDisponibleService;
  catalogoService;
  moduleLoader;
  loadingService;
  remisionConciliacionService;
  moduleName = 'Gestión de Resoluciones';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  constructor(router, notificationService, authService, sentenciaService, medidaService, themeService, conciliacionDisponibleService, catalogoService, moduleLoader, loadingService, remisionConciliacionService) {
    this.router = router;
    this.notificationService = notificationService;
    this.authService = authService;
    this.sentenciaService = sentenciaService;
    this.medidaService = medidaService;
    this.themeService = themeService;
    this.conciliacionDisponibleService = conciliacionDisponibleService;
    this.catalogoService = catalogoService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.remisionConciliacionService = remisionConciliacionService;
  }
  // Variables compartidas
  isSidebarCollapsed = false;
  showMinimizeNotification = false;
  minimizing = false;
  currentTheme = 'light';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  // Variables para el modal de ayuda
  showHelpSupport = false;
  isMinimized = false;
  // Variables para dropdowns y modales
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  remisiones = [];
  remisionPendiente = null;
  modalRemisionDesdeSentencia = false;
  formDataRemision = {
    denuncia_id: null,
    institucion_id: null,
    motivo: '',
    observaciones: '',
    sentencia_id: null,
    sentencia_info: ''
  };
  showDetalleModal = false;
  sentenciaSeleccionada = null;
  estadoSeleccionado = 'PENDIENTE';
  // Búsqueda
  searchQuery = '';
  searchResults = [];
  // Notificaciones (mock por ahora)
  notifications = [{
    user: 'Sistema SGP',
    action: 'Nueva medida cautelar requerida',
    time: '30 min',
    read: false,
    avatar: 'SS'
  }, {
    user: 'Maria García',
    action: 'Medida cautelar por vencer en 3 días',
    time: '1 hora',
    read: true,
    avatar: 'MG'
  }, {
    user: 'Carlos López',
    action: 'Sentencia pendiente de validación de ejecución',
    time: '2 horas',
    read: false,
    avatar: 'CL'
  }];
  // Configuración de usuario
  user = {
    name: 'Admin SGPAZ',
    email: 'admin@sgpaz.com',
    avatar: 'A',
    role: 'Administrador'
  };
  // Suscripciones
  subscriptions = [];
  // Variables específicas para resolución
  showModal = false;
  showDeleteModal = false;
  modalTitle = 'Nuevo Registro';
  isEditing = false;
  currentId = null;
  currentMode = 'medida';
  // Datos del backend
  medidasCautelares = [];
  sentencias = [];
  conciliacionesDisponiblesMedida = [];
  conciliacionesDisponiblesSentencia = [];
  tiposMedida = [];
  instituciones = [];
  // Estados para filtros (desde catálogos)
  estadosMedida = [{
    value: 'ACTIVA',
    label: 'Activa'
  }, {
    value: 'CUMPLIDA',
    label: 'Cumplida'
  }, {
    value: 'VENCIDA',
    label: 'Vencida'
  }, {
    value: 'REVOCADA',
    label: 'Revocada'
  }, {
    value: 'SUSPENDIDA',
    label: 'Suspendida'
  }, {
    value: 'PRORROGADA',
    label: 'Prorrogada'
  }];
  estadosSentencia = [{
    value: 'PENDIENTE',
    label: 'Pendiente de Ejecución'
  }, {
    value: 'EN_EJECUCION',
    label: 'En Ejecución'
  }, {
    value: 'EJECUTADA',
    label: 'Ejecutada'
  }, {
    value: 'PARCIALMENTE_EJECUTADA',
    label: 'Parcialmente Ejecutada'
  }, {
    value: 'SUSPENDIDA',
    label: 'Suspendida'
  }, {
    value: 'ARCHIVADA',
    label: 'Archivada'
  }];
  tiposResolucion = [{
    value: 'absolucion',
    label: 'Absolución'
  }, {
    value: 'condena',
    label: 'Condena'
  }, {
    value: 'transaccion',
    label: 'Transacción'
  }, {
    value: 'conciliacion',
    label: 'Conciliación'
  }, {
    value: 'otro',
    label: 'Otro'
  }];
  // Datos del formulario
  formData = {};
  // Paginación
  paginaActual = 1;
  itemsPorPagina = 10;
  totalItems = 0;
  // Filtros
  filtroEstado = 'todos';
  filtroFechaDesde = '';
  filtroFechaHasta = '';
  filtroDenuncia = '';
  // Estadísticas
  estadisticas = {
    medidas: {
      total: 0,
      activas: 0,
      cumplidas: 0,
      levantadas: 0,
      por_vencer: 0
    },
    sentencias: {
      total: 0,
      ejecutadas: 0,
      pendientes: 0,
      en_proceso: 0,
      validas: 0
    },
    conciliaciones: {
      total: 0,
      con_acuerdo: 0,
      disponibles_medida: 0,
      disponibles_sentencia: 0
    }
  };
  get unreadNotificationsCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  ngOnInit() {
    this.setupThemeSubscription();
    this.setupKeyboardShortcuts();
    this.cargarDatosIniciales();
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
    const hasContent = document.querySelector('.resolucion-container, .main-content, app-resolucion');
    const hasData = document.querySelector('.quick-stats, .conciliaciones-panel, .filtros-container, .table-container, .data-table');
    console.log(`🔍 [Resolucion] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  cargarDatosIniciales() {
    this.cargarTiposMedida();
    this.cargarInstituciones();
    this.cargarMedidas();
    this.cargarRemisiones();
    this.cargarSentencias();
    this.cargarConciliacionesDisponibles();
    this.cargarEstadisticas();
  }
  cargarRemisiones() {
    this.remisionConciliacionService.listarRemisiones().subscribe({
      next: remisiones => {
        this.remisiones = remisiones;
        console.log('✅ Remisiones cargadas:', this.remisiones);
      },
      error: err => {
        console.error('❌ Error cargando remisiones:', err);
      }
    });
  }
  tieneRemision(denunciaId) {
    if (!denunciaId) return false;
    return this.remisiones?.some(r => r.denuncia_id === denunciaId) || false;
  }
  cargarTiposMedida() {
    const sub = this.catalogoService.getTiposMedidaActivos().subscribe({
      next: data => {
        this.tiposMedida = data;
        console.log('✅ Tipos de medida cargados:', this.tiposMedida);
      },
      error: err => {
        console.error('❌ Error cargando tipos de medida:', err);
        this.notificationService.showError('Error al cargar tipos de medida');
      }
    });
    this.subscriptions.push(sub);
  }
  cargarInstituciones() {
    const sub = this.catalogoService.getInstitucionesActivas().subscribe({
      next: data => {
        this.instituciones = data;
        console.log('✅ Instituciones cargadas:', this.instituciones);
      },
      error: err => {
        console.error('❌ Error cargando instituciones:', err);
        this.notificationService.showError('Error al cargar instituciones');
      }
    });
    this.subscriptions.push(sub);
  }
  cargarMedidas(filtros) {
    const sub = this.medidaService.listarMedidas({
      page: this.paginaActual,
      per_page: this.itemsPorPagina,
      ...filtros
    }).subscribe({
      next: response => {
        this.medidasCautelares = response.data;
        this.totalItems = response.meta?.total || 0;
        console.log('✅ Medidas cargadas:', this.medidasCautelares);
      },
      error: err => {
        console.error('❌ Error cargando medidas:', err);
        this.notificationService.showError('Error al cargar medidas cautelares');
      }
    });
    this.subscriptions.push(sub);
  }
  cargarConciliacionesDisponibles() {
    // Para medidas cautelares
    const subMedida = this.conciliacionDisponibleService.getParaMedidaCautelar().subscribe({
      next: data => {
        this.conciliacionesDisponiblesMedida = data;
        console.log('✅ Conciliaciones para medida:', this.conciliacionesDisponiblesMedida);
      },
      error: err => console.error('❌ Error cargando conciliaciones para medida:', err)
    });
    // Para sentencias
    const subSentencia = this.conciliacionDisponibleService.getParaSentencia().subscribe({
      next: data => {
        this.conciliacionesDisponiblesSentencia = data;
        console.log('✅ Conciliaciones para sentencia:', this.conciliacionesDisponiblesSentencia);
      },
      error: err => console.error('❌ Error cargando conciliaciones para sentencia:', err)
    });
    this.subscriptions.push(subMedida, subSentencia);
  }
  cargarEstadisticas() {
    // Estadísticas de medidas
    const subMedidas = this.medidaService.obtenerEstadisticas().subscribe({
      next: stats => {
        this.estadisticas.medidas = {
          total: stats.total,
          activas: stats.por_estado['ACTIVA'] || 0,
          cumplidas: stats.por_estado['CUMPLIDA'] || 0,
          levantadas: stats.por_estado['REVOCADA'] || 0,
          por_vencer: stats.proximas_a_vencer || 0
        };
      },
      error: err => console.error('❌ Error cargando estadísticas de medidas:', err)
    });
    // Estadísticas de sentencias
    const subSentencias = this.sentenciaService.obtenerEstadisticas().subscribe({
      next: stats => {
        this.estadisticas.sentencias = {
          total: stats.total,
          ejecutadas: stats.ejecutadas,
          pendientes: stats.pendientes,
          en_proceso: stats.por_estado['EN_EJECUCION'] || 0,
          validas: stats.ejecutadas // Simplificado
        };
      },
      error: err => console.error('❌ Error cargando estadísticas de sentencias:', err)
    });
    this.subscriptions.push(subMedidas, subSentencias);
  }
  // ========== MÉTODOS COMPARTIDOS (Sidebar, Header, etc.) ==========
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
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
    this.isNotificationsOpen = false;
    this.isUserMenuOpen = false;
  }
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
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      this.searchResults = [{
        title: 'Medidas por Vencer',
        description: 'Ver medidas cautelares próximas a vencer',
        icon: '⚠️',
        action: () => {
          this.filtroEstado = 'ACTIVA';
          this.currentMode = 'medida';
          this.aplicarFiltros();
          this.closeSearchModal();
        }
      }, {
        title: 'Sentencias Pendientes de Ejecución',
        description: 'Ver sentencias con ejecución pendiente',
        icon: '⚖️',
        action: () => {
          this.filtroEstado = 'PENDIENTE';
          this.currentMode = 'sentencia';
          this.aplicarFiltros();
          this.closeSearchModal();
        }
      }, {
        title: 'Conciliaciones con Acuerdo',
        description: 'Ver conciliaciones disponibles para resolución',
        icon: '✅',
        action: () => {
          this.closeSearchModal();
          this.notificationService.showInfo('Mostrando conciliaciones con acuerdo');
        }
      }];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
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
  // ========== MÉTODOS ESPECÍFICOS DE RESOLUCIÓN ==========
  cambiarModo(mode) {
    this.currentMode = mode;
    this.paginaActual = 1;
    this.limpiarFiltros();
    if (mode === 'medida') {
      this.cargarMedidas();
    } else {
      this.cargarSentencias();
    }
  }
  onConciliacionChange(event) {
    const idConciliacion = event.target.value;
    if (idConciliacion) {
      const disponibles = this.currentMode === 'medida' ? this.conciliacionesDisponiblesMedida : this.conciliacionesDisponiblesSentencia;
      const conciliacion = disponibles.find(c => c.conciliacion_id == idConciliacion);
      if (conciliacion) {
        this.formData.conciliacion_id = conciliacion.conciliacion_id;
        this.formData.denuncia_id = conciliacion.denuncia_id;
        this.formData.codigo_denuncia = conciliacion.numero_expediente;
        this.formData.descripcion_denuncia = conciliacion.denunciante;
        this.formData.resultado_conciliacion = conciliacion.resultado_final;
        this.formData.fecha_audiencia = conciliacion.fecha_audiencia;
        if (this.currentMode === 'medida' && !this.isEditing) {
          this.formData.fecha_inicio = new Date().toISOString().split('T')[0];
          this.formData.estado = 'ACTIVA';
        }
      }
    }
  }
  getEstadisticas() {
    return this.estadisticas;
  }
  tieneConflicto() {
    const idDenuncia = this.formData.denuncia_id;
    if (!idDenuncia) return false;
    if (this.currentMode === 'medida') {
      return this.tieneSentencia(idDenuncia);
    } else {
      return this.tieneMedida(idDenuncia);
    }
  }
  getConciliacionesParaMedida() {
    return this.conciliacionesDisponiblesMedida;
  }
  getConciliacionesParaSentencia() {
    return this.conciliacionesDisponiblesSentencia;
  }
  limpiarFiltros() {
    this.filtroEstado = 'todos';
    this.filtroFechaDesde = '';
    this.filtroFechaHasta = '';
    this.filtroDenuncia = '';
    this.paginaActual = 1;
    if (this.currentMode === 'medida') {
      this.cargarMedidas();
    } else {
      this.cargarSentencias();
    }
  }
  getEstadosDisponibles() {
    return this.currentMode === 'medida' ? this.estadosMedida : this.estadosSentencia;
  }
  get registrosPaginados() {
    const registros = this.getRegistrosFiltrados();
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return registros.slice(inicio, fin);
  }
  aplicarFiltros() {
    this.paginaActual = 1;
    const filtros = {};
    if (this.filtroEstado !== 'todos') {
      if (this.currentMode === 'medida') {
        filtros.estado = this.filtroEstado;
      } else {
        filtros.estado_ejecucion = this.filtroEstado;
      }
    }
    if (this.filtroFechaDesde && this.filtroFechaHasta) {
      filtros.fecha_desde = this.filtroFechaDesde;
      filtros.fecha_hasta = this.filtroFechaHasta;
    }
    // El filtro por denuncia se maneja en el frontend
    if (this.currentMode === 'medida') {
      this.cargarMedidas(filtros);
    } else {
      this.cargarSentencias(filtros);
    }
  }
  // Versión corregida con type guards
  getRegistrosFiltrados() {
    if (this.currentMode === 'medida') {
      let registros = [...this.medidasCautelares];
      if (this.filtroDenuncia) {
        const termino = this.filtroDenuncia.toLowerCase();
        registros = registros.filter(r => {
          const codigo = r.denuncia_codigo || '';
          const descripcion = r.denuncia_descripcion || '';
          return codigo.toLowerCase().includes(termino) || descripcion.toLowerCase().includes(termino);
        });
      }
      return registros;
    } else {
      let registros = [...this.sentencias];
      if (this.filtroDenuncia) {
        const termino = this.filtroDenuncia.toLowerCase();
        registros = registros.filter(r => {
          const codigo = r.denuncia_codigo || '';
          const descripcion = r.denuncia_descripcion || '';
          return codigo.toLowerCase().includes(termino) || descripcion.toLowerCase().includes(termino);
        });
      }
      return registros;
    }
  }
  tieneMedida(idDenuncia) {
    if (!idDenuncia) return false;
    return this.medidasCautelares.some(m => m.conciliacion?.denuncia_id === idDenuncia && m.estado === 'ACTIVA');
  }
  tieneSentencia(idDenuncia) {
    if (!idDenuncia) return false;
    return this.sentencias.some(s => s.conciliacion?.denuncia_id === idDenuncia && !['ARCHIVADA'].includes(s.estado_ejecucion || ''));
  }
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
  }
  get totalPaginas() {
    return Math.ceil(this.totalItems / this.itemsPorPagina);
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
  getEstadoCumplimientoClass(estado) {
    switch (estado) {
      case 'ACTIVA':
        return 'estado-activa';
      case 'CUMPLIDA':
        return 'estado-cumplida';
      case 'VENCIDA':
        return 'estado-vencida';
      case 'REVOCADA':
        return 'estado-levantada';
      case 'SUSPENDIDA':
        return 'estado-suspendida';
      case 'PRORROGADA':
        return 'estado-prorrogada';
      default:
        return 'estado-desconocido';
    }
  }
  getEstadoEjecucionClass(estado) {
    switch (estado) {
      case 'PENDIENTE':
        return 'estado-pendiente';
      case 'EN_EJECUCION':
        return 'estado-proceso';
      case 'EJECUTADA':
        return 'estado-ejecutada';
      case 'PARCIALMENTE_EJECUTADA':
        return 'estado-parcial';
      case 'SUSPENDIDA':
        return 'estado-suspendida';
      case 'ARCHIVADA':
        return 'estado-archivada';
      default:
        return 'estado-desconocido';
    }
  }
  getTipoResolucionClass(tipo) {
    switch (tipo) {
      case 'absolucion':
        return 'tipo-absolucion';
      case 'condena':
        return 'tipo-condena';
      case 'transaccion':
        return 'tipo-transaccion';
      case 'conciliacion':
        return 'tipo-conciliacion';
      default:
        return 'tipo-otro';
    }
  }
  getVigenciaClass(medida) {
    if (medida.estado !== 'ACTIVA') return 'vigencia-finalizada';
    if (!medida.dias_restantes) return 'vigencia-normal';
    if (medida.dias_restantes <= 7) return 'vigencia-urgente';
    if (medida.dias_restantes <= 30) return 'vigencia-alerta';
    return 'vigencia-normal';
  }
  esMedidaPorVencer(medida) {
    if (medida.estado !== 'ACTIVA') return false;
    return (medida.dias_restantes || 0) <= 30;
  }
  getInstitucionNombre(id) {
    if (!id) return 'No especificada';
    const institucion = this.instituciones.find(i => i.id === id || i.institucion_id === id);
    return institucion ? institucion.nombre : 'Desconocida';
  }
  getDenunciaCodigo(medida) {
    return medida.denuncia_codigo || 'DESCONOCIDA';
  }
  getDenunciaDescripcion(medida) {
    return medida.denuncia_descripcion || 'Descripción no disponible';
  }
  getTipoMedidaNombre(id) {
    if (!id) return 'No especificado';
    const tipo = this.tiposMedida.find(t => t.id === id || t.tipo_medida_id === id);
    return tipo ? tipo.nombre : 'Desconocido';
  }
  truncate(text, length) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
  // ========== MÉTODOS DE MEDIDA CAUTELAR ==========
  aplicarMedida() {
    if (!this.validarFormulario()) return;
    const dto = {
      conciliacion_id: this.formData.conciliacion_id,
      tipo_medida_id: this.formData.tipo_medida_id,
      fecha_inicio: this.formData.fecha_inicio,
      duracion_dias: this.formData.duracion_dias,
      descripcion: this.formData.descripcion || this.formData.observaciones || '',
      estado: 'ACTIVA',
      observaciones: this.formData.observaciones
    };
    this.medidaService.crearMedida(dto).subscribe({
      next: medida => {
        console.log('✅ Medida creada:', medida);
        this.notificationService.showSuccess('Medida cautelar creada exitosamente');
        this.cargarMedidas();
        this.cargarConciliacionesDisponibles();
        this.cargarEstadisticas();
        this.cerrarModal();
        this.resetForm();
      },
      error: err => {
        console.error('❌ Error creando medida:', err);
        this.notificationService.showError(err.message || 'Error al crear medida cautelar');
      }
    });
  }
  levantarMedida(id) {
    if (confirm('¿Está seguro de revocar esta medida cautelar?')) {
      this.medidaService.cambiarEstado(id, 'REVOCADA', 'Medida revocada por solicitud').subscribe({
        next: () => {
          this.notificationService.showSuccess('Medida revocada exitosamente');
          this.cargarMedidas();
        },
        error: err => {
          console.error('❌ Error revocando medida:', err);
          this.notificationService.showError(err.message || 'Error al revocar medida');
        }
      });
    }
  }
  consultarMedida(id) {
    this.medidaService.obtenerMedida(id).subscribe({
      next: medida => {
        const info = `
          🛡️ Medida Cautelar #${medida.medida_id}
          📋 Tipo: ${medida.tipo_medida_nombre}
          📅 Fecha Inicio: ${new Date(medida.fecha_inicio).toLocaleDateString('es-ES')}
          ⏳ Duración: ${medida.duracion_dias ? medida.duracion_dias + ' días' : 'Indefinida'}
          📈 Vigencia Restante: ${medida.dias_restantes ? medida.dias_restantes + ' días' : 'N/A'}
          📝 Estado: ${medida.estado_texto}
          📋 Descripción: ${medida.descripcion}
        `;
        alert(info);
      },
      error: err => {
        console.error('❌ Error consultando medida:', err);
        this.notificationService.showError('Error al consultar medida');
      }
    });
  }
  generarReporteVigencia(id) {
    this.medidaService.obtenerMedida(id).subscribe({
      next: medida => {
        const report = {
          titulo: 'REPORTE DE VIGENCIA - MEDIDA CAUTELAR',
          numero_reporte: `RPT-MED-${id.toString().padStart(4, '0')}`,
          fecha_generacion: new Date().toLocaleDateString('es-ES'),
          identificacion: {
            id_medida: medida.medida_id,
            denuncia: medida.denuncia_codigo,
            tipo_medida: medida.tipo_medida_nombre
          },
          vigencia: {
            fecha_inicio: new Date(medida.fecha_inicio).toLocaleDateString('es-ES'),
            duracion: medida.duracion_dias ? medida.duracion_dias + ' días' : 'Indefinida',
            dias_restantes: medida.dias_restantes,
            estado_vigencia: medida.esta_vigente ? 'VIGENTE' : 'VENCIDA'
          },
          estado: medida.estado
        };
        const blob = new Blob([JSON.stringify(report, null, 2)], {
          type: 'application/json'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte_vigencia_${id}_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: err => {
        console.error('❌ Error generando reporte:', err);
        this.notificationService.showError('Error al generar reporte');
      }
    });
  }
  generarReporteVigencias() {
    const medidasPorVencer = this.medidasCautelares.filter(m => this.esMedidaPorVencer(m));
    const report = {
      titulo: 'ALERTAS DE VENCIMIENTO - MEDIDAS CAUTELARES',
      fecha_generacion: new Date().toLocaleDateString('es-ES'),
      total_medidas_analizadas: this.medidasCautelares.length,
      medidas_por_vencer: medidasPorVencer.length,
      detalle_alertas: medidasPorVencer.map(m => ({
        id_medida: m.medida_id,
        denuncia: m.denuncia_codigo,
        fecha_vencimiento: m.fecha_vencimiento,
        dias_restantes: m.dias_restantes,
        urgencia: (m.dias_restantes || 0) <= 7 ? 'ALTA' : (m.dias_restantes || 0) <= 30 ? 'MEDIA' : 'BAJA'
      }))
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alertas_vigencias_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  // ========== MÉTODOS DE SENTENCIA ==========
  crearSentencia() {
    if (!this.validarFormulario()) return;
    const dto = {
      conciliacion_id: this.formData.conciliacion_id,
      fecha_sentencia: this.formData.fecha_sentencia,
      tipo_resolucion: this.formData.tipo_resolucion,
      contenido: this.formData.descripcion || this.formData.observaciones || '',
      estado_ejecucion: 'PENDIENTE',
      institucion_remitida_id: this.formData.institucion_id,
      observaciones: this.formData.observaciones
    };
    this.sentenciaService.crearSentencia(dto).subscribe({
      next: sentencia => {
        console.log('✅ Sentencia creada:', sentencia);
        this.notificationService.showSuccess('Sentencia creada exitosamente');
        this.cargarSentencias();
        this.cargarConciliacionesDisponibles();
        this.cargarEstadisticas();
        this.cerrarModal();
        this.resetForm();
      },
      error: err => {
        console.error('❌ Error creando sentencia:', err);
        this.notificationService.showError(err.message || 'Error al crear sentencia');
      }
    });
  }
  actualizarSentencia() {
    if (!this.currentId) return;
    this.sentenciaService.actualizarSentencia(this.currentId, this.formData).subscribe({
      next: sentencia => {
        console.log('✅ Sentencia actualizada:', sentencia);
        this.notificationService.showSuccess('Sentencia actualizada exitosamente');
        this.cargarSentencias();
        this.cerrarModal();
        this.resetForm();
      },
      error: err => {
        console.error('❌ Error actualizando sentencia:', err);
        this.notificationService.showError(err.message || 'Error al actualizar sentencia');
      }
    });
  }
  consultarSentencia(id) {
    this.sentenciaService.obtenerSentencia(id).subscribe({
      next: sentencia => {
        const info = `
          📜 Sentencia #${sentencia.sentencia_id}
          📅 Fecha: ${new Date(sentencia.fecha_sentencia).toLocaleDateString('es-ES')}
          ⚖️ Tipo: ${sentencia.tipo_resolucion}
          🏛️ Institución: ${this.getInstitucionNombre(sentencia.institucion_remitida_id)}
          📊 Estado Ejecución: ${sentencia.estado_ejecucion_texto}
          ✅ Contenido: ${sentencia.tiene_contenido ? 'Disponible' : 'No disponible'}
          📋 Observaciones: ${sentencia.observaciones || 'Ninguna'}
        `;
        alert(info);
      },
      error: err => {
        console.error('❌ Error consultando sentencia:', err);
        this.notificationService.showError('Error al consultar sentencia');
      }
    });
  }
  generarCertificacion(id) {
    // Validar que el ID sea válido
    if (!id) {
      this.notificationService.showError('No se puede generar certificación: sentencia no identificada');
      return;
    }
    this.sentenciaService.obtenerSentencia(id).subscribe({
      next: sentencia => {
        const certificacion = {
          tipo_documento: 'CERTIFICACIÓN OFICIAL DE SENTENCIA',
          numero_certificado: `CERT-SEN-${id.toString().padStart(4, '0')}`,
          fecha_emision: new Date().toLocaleDateString('es-ES'),
          identificacion: {
            id_sentencia: sentencia.sentencia_id,
            denuncia: sentencia.denuncia_codigo
          },
          contenido: {
            fecha_sentencia: new Date(sentencia.fecha_sentencia).toLocaleDateString('es-ES'),
            tipo_resolucion: sentencia.tipo_resolucion,
            estado_ejecucion: sentencia.estado_ejecucion_texto
          }
        };
        const blob = new Blob([JSON.stringify(certificacion, null, 2)], {
          type: 'application/json'
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `certificacion_${id}_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess(`✅ Certificación de sentencia #${id} generada exitosamente`);
      },
      error: err => {
        console.error('❌ Error generando certificación:', err);
        this.notificationService.showError('Error al generar certificación');
      }
    });
  }
  generarCertificacionesPendientes() {
    const pendientes = this.sentencias.filter(s => s.estado_ejecucion === 'PENDIENTE');
    this.notificationService.showInfo(`📜 Se encontraron ${pendientes.length} sentencias pendientes de certificación`);
  }
  validarEjecucion(sentencia) {
    if (!sentencia) return false;
    return sentencia.estado_ejecucion === 'EJECUTADA';
  }
  // ========== MÉTODOS DE CÁLCULO Y FORMATO ==========
  calcularVigenciaRestante(medida) {
    if (medida.estado !== 'ACTIVA') {
      return 'FINALIZADA';
    }
    if (!medida.dias_restantes) {
      return 'INDEFINIDO';
    }
    if (medida.dias_restantes < 0) {
      return 'VENCIDA';
    } else if (medida.dias_restantes === 0) {
      return 'VENCE HOY';
    } else if (medida.dias_restantes === 1) {
      return 'VENCE MAÑANA';
    } else {
      return `${medida.dias_restantes} DÍAS`;
    }
  }
  formatDuracion(dias) {
    if (!dias) return 'INDEFINIDO';
    return `${dias} ${dias === 1 ? 'DÍA' : 'DÍAS'}`;
  }
  // ========== MÉTODOS DE FORMULARIO Y MODALES ==========
  abrirModalCrear(mode, idConciliacion) {
    this.currentMode = mode;
    this.isEditing = false;
    this.modalTitle = mode === 'medida' ? '🛡️ Nueva Medida Cautelar' : '📜 Nueva Sentencia';
    this.resetForm();
    if (idConciliacion) {
      const disponibles = mode === 'medida' ? this.conciliacionesDisponiblesMedida : this.conciliacionesDisponiblesSentencia;
      const conciliacion = disponibles.find(c => c.conciliacion_id === idConciliacion);
      if (conciliacion) {
        this.formData.conciliacion_id = idConciliacion;
        this.formData.denuncia_id = conciliacion.denuncia_id;
        this.formData.codigo_denuncia = conciliacion.numero_expediente;
        this.formData.descripcion_denuncia = conciliacion.denunciante;
        this.formData.resultado_conciliacion = conciliacion.resultado_final;
        this.formData.fecha_audiencia = conciliacion.fecha_audiencia;
        if (mode === 'medida') {
          this.formData.fecha_inicio = new Date().toISOString().split('T')[0];
          this.formData.duracion_dias = 30;
          this.formData.estado = 'ACTIVA';
        } else {
          this.formData.fecha_sentencia = new Date().toISOString().split('T')[0];
          this.formData.tipo_resolucion = 'condena';
        }
      }
    }
    this.showModal = true;
  }
  abrirModalEditar(mode, id) {
    this.currentMode = mode;
    this.isEditing = true;
    this.modalTitle = mode === 'medida' ? '✏️ Editar Medida Cautelar' : '✏️ Editar Sentencia';
    this.currentId = id;
    if (mode === 'medida') {
      const medida = this.medidasCautelares.find(m => m.medida_id === id);
      if (medida) {
        this.formData = {
          ...medida,
          fecha_inicio: medida.fecha_inicio.split('T')[0],
          tipo_medida_id: medida.tipo_medida_id,
          duracion_dias: medida.duracion_dias
        };
        this.formData.codigo_denuncia = medida.denuncia_codigo;
        this.formData.descripcion_denuncia = medida.denuncia_descripcion;
      }
    } else {
      const sentencia = this.sentencias.find(s => s.sentencia_id === id);
      if (sentencia) {
        this.formData = {
          ...sentencia,
          fecha_sentencia: sentencia.fecha_sentencia.split('T')[0],
          institucion_id: sentencia.institucion_remitida_id
        };
        this.formData.codigo_denuncia = sentencia.denuncia_codigo;
        this.formData.descripcion_denuncia = sentencia.denuncia_descripcion;
      }
    }
    this.showModal = true;
  }
  guardarRegistro() {
    if (this.validarFormulario() && !this.tieneConflicto()) {
      if (this.currentMode === 'medida') {
        if (this.isEditing && this.currentId) {
          this.actualizarMedida();
        } else {
          this.aplicarMedida();
        }
      } else {
        if (this.isEditing && this.currentId) {
          this.actualizarSentencia();
        } else {
          this.crearSentencia();
        }
      }
    } else if (this.tieneConflicto()) {
      this.notificationService.showError('❌ No se puede crear/editar debido a conflicto de exclusividad');
    }
  }
  actualizarMedida() {
    if (!this.currentId) return;
    const dto = {
      tipo_medida_id: this.formData.tipo_medida_id,
      fecha_inicio: this.formData.fecha_inicio,
      duracion_dias: this.formData.duracion_dias,
      descripcion: this.formData.descripcion || this.formData.observaciones,
      observaciones: this.formData.observaciones
    };
    this.medidaService.actualizarMedida(this.currentId, dto).subscribe({
      next: medida => {
        console.log('✅ Medida actualizada:', medida);
        this.notificationService.showSuccess('Medida cautelar actualizada exitosamente');
        this.cargarMedidas();
        this.cerrarModal();
        this.resetForm();
      },
      error: err => {
        console.error('❌ Error actualizando medida:', err);
        this.notificationService.showError(err.message || 'Error al actualizar medida');
      }
    });
  }
  abrirModalEliminar(mode, id) {
    this.currentMode = mode;
    this.currentId = id;
    this.showDeleteModal = true;
  }
  eliminarRegistro() {
    if (this.currentId) {
      if (this.currentMode === 'medida') {
        this.medidaService.eliminarMedida(this.currentId).subscribe({
          next: success => {
            if (success) {
              this.notificationService.showSuccess('Medida cautelar eliminada exitosamente');
              this.cargarMedidas();
              this.cargarConciliacionesDisponibles();
              this.cargarEstadisticas();
            }
          },
          error: err => {
            console.error('❌ Error eliminando medida:', err);
            this.notificationService.showError(err.message || 'Error al eliminar medida');
          }
        });
      } else {
        this.sentenciaService.eliminarSentencia(this.currentId).subscribe({
          next: success => {
            if (success) {
              this.notificationService.showSuccess('Sentencia eliminada exitosamente');
              this.cargarSentencias();
              this.cargarConciliacionesDisponibles();
              this.cargarEstadisticas();
            }
          },
          error: err => {
            console.error('❌ Error eliminando sentencia:', err);
            this.notificationService.showError(err.message || 'Error al eliminar sentencia');
          }
        });
      }
      this.cerrarDeleteModal();
    }
  }
  validarFormulario() {
    if (this.currentMode === 'medida') {
      if (!this.formData.conciliacion_id) {
        this.notificationService.showError('Seleccione una conciliación');
        return false;
      }
      if (!this.formData.tipo_medida_id) {
        this.notificationService.showError('Seleccione un tipo de medida');
        return false;
      }
      if (!this.formData.fecha_inicio) {
        this.notificationService.showError('Seleccione una fecha de inicio');
        return false;
      }
    } else {
      if (!this.formData.conciliacion_id) {
        this.notificationService.showError('Seleccione una conciliación');
        return false;
      }
      if (!this.formData.tipo_resolucion) {
        this.notificationService.showError('Seleccione un tipo de resolución');
        return false;
      }
      if (!this.formData.fecha_sentencia) {
        this.notificationService.showError('Seleccione una fecha de sentencia');
        return false;
      }
    }
    return true;
  }
  resetForm() {
    this.formData = {
      conciliacion_id: null,
      denuncia_id: null,
      codigo_denuncia: '',
      descripcion_denuncia: '',
      resultado_conciliacion: '',
      fecha_audiencia: '',
      tipo_medida_id: null,
      fecha_inicio: new Date().toISOString().split('T')[0],
      duracion_dias: 30,
      tipo_resolucion: 'condena',
      fecha_sentencia: new Date().toISOString().split('T')[0],
      institucion_id: null,
      descripcion: '',
      observaciones: ''
    };
    this.currentId = null;
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
  exportarPDF(mode, id) {
    if (mode === 'medida' && id) {
      this.generarReporteVigencia(id);
    } else if (mode === 'sentencia' && id) {
      this.generarCertificacion(id);
    } else {
      this.notificationService.showInfo(`📄 Exportando reporte general de ${mode === 'medida' ? 'medidas' : 'sentencias'} a PDF...`);
    }
  }
  exportarExcel(mode, id) {
    console.log(`📊 Exportando ${mode} a Excel${id ? ` para ID ${id}` : ''}`);
    this.notificationService.showInfo(`📊 Exportando ${mode === 'medida' ? 'medida cautelar' : 'sentencia'} a Excel...`);
  }
  descargarReporte(mode) {
    if (mode === 'medida') {
      this.generarReporteGeneralMedidas();
    } else {
      this.generarReporteGeneralSentencias();
    }
  }
  generarReporteGeneralMedidas() {
    const report = {
      titulo: 'REPORTE GENERAL DE MEDIDAS CAUTELARES',
      fecha_generacion: new Date().toLocaleDateString('es-ES'),
      estadisticas_totales: this.estadisticas.medidas,
      detalle: this.medidasCautelares.map(m => ({
        id: m.medida_id,
        denuncia: m.denuncia_codigo,
        tipo_medida: m.tipo_medida_nombre,
        fecha_inicio: new Date(m.fecha_inicio).toLocaleDateString('es-ES'),
        duracion: this.formatDuracion(m.duracion_dias),
        fecha_vencimiento: m.fecha_vencimiento,
        dias_restantes: m.dias_restantes,
        estado: m.estado_texto
      }))
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte_medidas_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  get registrosMedidaPaginados() {
    const registros = this.getRegistrosMedidaFiltrados();
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return registros.slice(inicio, fin);
  }
  cancelarRemisionDesdeSentencia() {
    this.modalRemisionDesdeSentencia = false;
    this.remisionPendiente = null;
    this.formDataRemision = {
      denuncia_id: null,
      institucion_id: null,
      motivo: '',
      observaciones: '',
      sentencia_id: null,
      sentencia_info: ''
    };
  }
  // Método auxiliar para generar el motivo
  generarMotivoRemision(sentencia) {
    const tipoTexto = this.getTipoResolucionTexto(sentencia.tipo_resolucion);
    return `La sentencia #${sentencia.sentencia_id} (${tipoTexto}) del ${new Date(sentencia.fecha_sentencia).toLocaleDateString('es-ES')} excede las competencias del módulo. ` + `Se requiere intervención de instancia superior para su ejecución.`;
  }
  // Verificar si la sentencia ya tiene remisión
  sentenciaTieneRemision(sentencia) {
    const denunciaId = sentencia.conciliacion?.denuncia_id;
    if (!denunciaId) return false;
    return this.remisiones?.some(r => r.denuncia_id === denunciaId) || false;
  }
  // Modificar crearRemisionDesdeSentencia para validar
  crearRemisionDesdeSentencia(sentencia) {
    // Validar que no tenga remisión ya
    if (this.sentenciaTieneRemision(sentencia)) {
      this.notificationService.showWarning('⚠️ Esta sentencia ya tiene una remisión asociada');
      return;
    }
    if (!sentencia.conciliacion?.denuncia_id) {
      this.notificationService.showError('No se puede crear remisión: denuncia no encontrada');
      return;
    }
    const motivo = this.generarMotivoRemision(sentencia);
    const dto = {
      denuncia_id: sentencia.conciliacion.denuncia_id,
      institucion_id: null,
      // 👈 Usar null en lugar de 0
      motivo: motivo,
      observaciones: `Sentencia #${sentencia.sentencia_id}. ${sentencia.contenido?.substring(0, 200) || ''}`,
      fecha_remision: new Date().toISOString()
    };
    this.abrirModalRemisionDesdeSentencia(dto, sentencia);
  }
  confirmarRemisionDesdeSentencia() {
    if (!this.remisionPendiente) return;
    // 👈 VALIDAR que se haya seleccionado una institución
    if (!this.formDataRemision.institucion_id || this.formDataRemision.institucion_id === 0) {
      this.notificationService.showWarning('⚠️ Seleccione una institución de destino');
      return;
    }
    const dto = {
      denuncia_id: this.formDataRemision.denuncia_id,
      institucion_id: this.formDataRemision.institucion_id,
      motivo: this.formDataRemision.motivo,
      observaciones: this.formDataRemision.observaciones,
      fecha_remision: new Date().toISOString()
    };
    this.remisionConciliacionService.crearRemision(dto).subscribe({
      next: remision => {
        this.notificationService.showSuccess('✅ Remisión creada exitosamente');
        this.modalRemisionDesdeSentencia = false;
        this.remisionPendiente = null;
        // Recargar datos
        this.cargarRemisiones();
        this.cargarSentencias();
        this.cargarConciliacionesDisponibles();
      },
      error: error => {
        this.notificationService.showError(error.message || 'Error al crear remisión');
      }
    });
  }
  getTipoResolucionTexto(tipo) {
    const tipos = {
      'absolucion': 'Absolución',
      'condena': 'Condena',
      'transaccion': 'Transacción',
      'conciliacion': 'Conciliación',
      'otro': 'Otro tipo'
    };
    return tipos[tipo] || tipo;
  }
  getRegistrosMedidaFiltrados() {
    let registros = [...this.medidasCautelares];
    // Filtro por denuncia
    if (this.filtroDenuncia) {
      const termino = this.filtroDenuncia.toLowerCase();
      registros = registros.filter(r => {
        const codigo = r.denuncia_codigo || '';
        const descripcion = r.denuncia_descripcion || '';
        return codigo.toLowerCase().includes(termino) || descripcion.toLowerCase().includes(termino);
      });
    }
    return registros;
  }
  // Para sentencias
  get registrosSentenciaPaginados() {
    const registros = this.getRegistrosSentenciaFiltrados();
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return registros.slice(inicio, fin);
  }
  getRegistrosSentenciaFiltrados() {
    let registros = [...this.sentencias];
    // Filtro por denuncia
    if (this.filtroDenuncia) {
      const termino = this.filtroDenuncia.toLowerCase();
      registros = registros.filter(r => {
        const codigo = r.denuncia_codigo || '';
        const descripcion = r.denuncia_descripcion || '';
        return codigo.toLowerCase().includes(termino) || descripcion.toLowerCase().includes(termino);
      });
    }
    return registros;
  }
  // Actualizar el método calcularTotalItems
  calcularTotalItems() {
    if (this.currentMode === 'medida') {
      this.totalItems = this.getRegistrosMedidaFiltrados().length;
    } else {
      this.totalItems = this.getRegistrosSentenciaFiltrados().length;
    }
  }
  // También necesitamos actualizar el método getCurrentEntityData
  getCurrentEntityData() {
    return this.currentMode === 'medida' ? this.medidasCautelares : this.sentencias;
  }
  generarReporteGeneralSentencias() {
    const report = {
      titulo: 'REPORTE GENERAL DE SENTENCIAS',
      fecha_generacion: new Date().toLocaleDateString('es-ES'),
      estadisticas_totales: this.estadisticas.sentencias,
      detalle: this.sentencias.map(s => ({
        id: s.sentencia_id,
        denuncia: s.denuncia_codigo,
        tipo_resolucion: s.tipo_resolucion,
        fecha_sentencia: new Date(s.fecha_sentencia).toLocaleDateString('es-ES'),
        institucion: this.getInstitucionNombre(s.institucion_remitida_id),
        estado_ejecucion: s.estado_ejecucion_texto,
        validez: this.validarEjecucion(s) ? 'VÁLIDA' : 'PENDIENTE'
      }))
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reporte_sentencias_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  // Abrir modal para remisión desde sentencia
  abrirModalRemisionDesdeSentencia(dto, sentencia) {
    // Guardar datos temporalmente
    this.remisionPendiente = {
      dto,
      sentencia
    };
    // Abrir modal de remisión (reutilizar el existente)
    this.modalRemisionDesdeSentencia = true;
    this.formDataRemision = {
      denuncia_id: dto.denuncia_id,
      institucion_id: dto.institucion_id,
      motivo: dto.motivo,
      observaciones: dto.observaciones,
      sentencia_id: sentencia.sentencia_id,
      sentencia_info: `#${sentencia.sentencia_id} - ${sentencia.tipo_resolucion}`
    };
  }
  // Método para abrir el modal de detalles
  verDetalleSentencia(sentencia) {
    this.sentenciaSeleccionada = sentencia;
    this.estadoSeleccionado = sentencia.estado_ejecucion || 'PENDIENTE';
    this.showDetalleModal = true;
  }
  // Método para cerrar el modal de detalles
  cerrarDetalleModal() {
    this.showDetalleModal = false;
    this.sentenciaSeleccionada = null;
    this.estadoSeleccionado = 'PENDIENTE';
  }
  // Método para actualizar el estado de ejecución desde el modal
  actualizarEstadoEjecucionDesdeModal(estado) {
    if (!this.sentenciaSeleccionada) return;
    const estadosTexto = {
      'PENDIENTE': 'Pendiente de Ejecución',
      'EN_EJECUCION': 'En Ejecución',
      'EJECUTADA': 'Ejecutada',
      'PARCIALMENTE_EJECUTADA': 'Parcialmente Ejecutada',
      'SUSPENDIDA': 'Suspendida',
      'ARCHIVADA': 'Archivada'
    };
    const confirmar = confirm(`⚠️ ¿Está seguro de cambiar el estado de esta sentencia a: ${estadosTexto[estado] || estado}?`);
    if (!confirmar) return;
    this.notificationService.showInfo(`⏳ Cambiando estado a: ${estadosTexto[estado] || estado}...`);
    this.sentenciaService.cambiarEstadoEjecucion(this.sentenciaSeleccionada.sentencia_id, estado, 'Cambio manual desde el sistema').subscribe({
      next: sentenciaActualizada => {
        this.notificationService.showSuccess(`✅ Estado de sentencia #${this.sentenciaSeleccionada?.sentencia_id} actualizado a: ${estadosTexto[estado] || estado}`);
        this.cargarSentencias();
        this.sentenciaSeleccionada = sentenciaActualizada;
        this.estadoSeleccionado = sentenciaActualizada.estado_ejecucion || estado;
      },
      error: err => {
        console.error('❌ Error actualizando estado:', err);
        this.notificationService.showError(err.message || 'Error al cambiar estado');
      }
    });
  }
  validarEjecucionSentencia(id) {
    if (!id) {
      this.notificationService.showError('No se puede validar: sentencia no identificada');
      return;
    }
    const confirmar = confirm('⚠️ ¿Está seguro de marcar esta sentencia como EJECUTADA?\n\nEsta acción cambiará el estado de la sentencia y no podrá revertirse automáticamente.');
    if (!confirmar) return;
    this.notificationService.showInfo('⏳ Actualizando estado de sentencia...');
    this.sentenciaService.cambiarEstadoEjecucion(id, 'EJECUTADA', 'Validación manual desde el sistema').subscribe({
      next: sentenciaActualizada => {
        this.notificationService.showSuccess(`✅ Sentencia #${id} marcada como EJECUTADA exitosamente`);
        this.cargarSentencias();
        if (this.showDetalleModal && this.sentenciaSeleccionada?.sentencia_id === id) {
          this.sentenciaSeleccionada = sentenciaActualizada;
          this.estadoSeleccionado = 'EJECUTADA';
        }
        this.cargarEstadisticas();
      },
      error: err => {
        console.error('❌ Error validando ejecución:', err);
        this.notificationService.showError(err.message || 'Error al validar ejecución de sentencia');
      }
    });
  }
  // También agregar un método para cambiar a otros estados
  cambiarEstadoSentencia(id, nuevoEstado) {
    const estadosTexto = {
      'PENDIENTE': 'Pendiente de Ejecución',
      'EN_EJECUCION': 'En Ejecución',
      'EJECUTADA': 'Ejecutada',
      'PARCIALMENTE_EJECUTADA': 'Parcialmente Ejecutada',
      'SUSPENDIDA': 'Suspendida',
      'ARCHIVADA': 'Archivada'
    };
    const confirmar = confirm(`⚠️ ¿Está seguro de cambiar el estado de esta sentencia a: ${estadosTexto[nuevoEstado] || nuevoEstado}?`);
    if (!confirmar) return;
    this.notificationService.showInfo(`⏳ Cambiando estado a: ${estadosTexto[nuevoEstado] || nuevoEstado}...`);
    this.sentenciaService.cambiarEstadoEjecucion(id, nuevoEstado, 'Cambio manual desde el sistema').subscribe({
      next: sentenciaActualizada => {
        this.notificationService.showSuccess(`✅ Estado de sentencia #${id} actualizado a: ${estadosTexto[nuevoEstado] || nuevoEstado}`);
        this.cargarSentencias();
        if (this.showDetalleModal && this.sentenciaSeleccionada?.sentencia_id === id) {
          this.sentenciaSeleccionada = sentenciaActualizada;
          setTimeout(() => {
            this.sentenciaSeleccionada = {
              ...sentenciaActualizada
            };
          }, 100);
        }
        this.cargarEstadisticas();
      },
      error: err => {
        this.notificationService.showError(err.message || 'Error al cambiar estado');
      }
    });
  }
  cargarSentencias(filtros) {
    const sub = this.sentenciaService.listarSentencias({
      page: this.paginaActual,
      per_page: this.itemsPorPagina,
      estado_ejecucion: this.filtroEstado !== 'todos' ? this.filtroEstado : undefined,
      fecha_desde: this.filtroFechaDesde || undefined,
      fecha_hasta: this.filtroFechaHasta || undefined,
      ...filtros
    }).subscribe({
      next: response => {
        this.sentencias = response.data;
        this.totalItems = response.meta?.total || 0;
        console.log('✅ Sentencias cargadas:', this.sentencias);
      },
      error: err => {
        console.error('❌ Error cargando sentencias:', err);
        this.notificationService.showError('Error al cargar sentencias');
      }
    });
    this.subscriptions.push(sub);
  }
  static ɵfac = function MedidaSentenciaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MedidaSentenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_sentencia_service__WEBPACK_IMPORTED_MODULE_17__.SentenciaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_medida_cautelar_service__WEBPACK_IMPORTED_MODULE_18__.MedidaCautelarService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_19__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_conciliacion_disponible_service__WEBPACK_IMPORTED_MODULE_20__.ConciliacionDisponibleService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_21__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_22__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_23__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_24__.RemisionConciliacionService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: MedidaSentenciaComponent,
    selectors: [["app-resolucion"]],
    hostBindings: function MedidaSentenciaComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveDocument"]);
      }
    },
    decls: 92,
    vars: 33,
    consts: [["registroForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "resolucion-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-tabs"], [1, "tabs"], [1, "tab", 3, "click"], [1, "quick-stats"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], ["class", "conciliaciones-panel", 4, "ngIf"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-estado"], ["id", "filtro-estado", 3, "ngModelChange", "change", "ngModel"], ["value", "todos"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "filtro-fecha-desde"], ["type", "date", "id", "filtro-fecha-desde", 3, "ngModelChange", "change", "ngModel"], ["for", "filtro-fecha-hasta"], ["type", "date", "id", "filtro-fecha-hasta", 3, "ngModelChange", "change", "ngModel"], ["for", "filtro-denuncia"], ["type", "text", "id", "filtro-denuncia", "placeholder", "C\u00F3digo de denuncia", 3, "ngModelChange", "keyup", "ngModel"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn-icon"], ["class", "table-container", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el sistema...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "conciliaciones-panel"], [1, "panel-header"], [1, "conciliaciones-grid"], ["class", "conciliacion-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "conciliacion-card"], [1, "conciliacion-header"], [1, "conciliacion-codigo"], [1, "conciliacion-resultado", "resultado-acuerdo"], [1, "conciliacion-info"], [1, "denuncia-info"], [1, "fecha-info"], [1, "conciliacion-votos"], [1, "voto-favor"], [1, "voto-contra"], [1, "conciliacion-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "bloqueo-info", 4, "ngIf"], [1, "bloqueo-info"], [1, "bloqueo-text"], [1, "empty-state"], [1, "empty-icon"], [3, "value"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "codigo-cell"], [1, "denuncia-cell"], [1, "vigencia-badge"], [1, "estado-badge"], [1, "bloqueo-indicator"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Consultar", 1, "btn-action", "view", 3, "click"], ["title", "Editar", 1, "btn-action", "edit", 3, "click", "disabled"], ["class", "btn-action levantar", "title", "Revocar Medida", 3, "click", 4, "ngIf"], ["title", "Eliminar", 1, "btn-action", "delete", 3, "click", "disabled"], ["title", "Reporte de Vigencia", 1, "btn-action", "report", 3, "click"], ["title", "Exportar PDF", 1, "btn-action", "export", 3, "click"], ["title", "Exportar Excel", 1, "btn-action", "excel", 3, "click"], ["title", "Revocar Medida", 1, "btn-action", "levantar", 3, "click"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "btn", "btn-info", 3, "click"], [1, "tipo-resolucion"], [1, "validez-badge"], ["title", "Ver Detalles", 1, "btn-action", "view-detail", 3, "click", "disabled"], ["title", "Remitir por exceso de competencias", 1, "btn-action", "remitir", 3, "click", "disabled"], ["title", "Generar Certificaci\u00F3n", 1, "btn-action", "certificar", 3, "click"], ["title", "Validar Ejecuci\u00F3n", 1, "btn-action", "validar", 3, "click", "disabled"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "conciliacion_id", 1, "form-label"], [1, "required"], ["id", "conciliacion_id", "name", "conciliacion_id", "required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "conciliacion-info-preview", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel", "placeholder"], [1, "checkbox-label"], ["type", "checkbox", "name", "excede_competencias", 3, "ngModelChange", "ngModel"], ["class", "form-text text-warning", 4, "ngIf"], [1, "validacion-container"], [1, "validacion-card"], [1, "validacion-header"], [1, "validacion-icon"], [1, "validacion-title"], [1, "validacion-content"], [4, "ngIf"], [1, "terms-container"], [1, "terms-text"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "conciliacion-info-preview"], ["for", "tipo_medida_id", 1, "form-label"], ["id", "tipo_medida_id", "name", "tipo_medida_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "descripcion", 1, "form-label"], ["id", "descripcion", "name", "descripcion", "required", "", "rows", "3", "placeholder", "Descripci\u00F3n de la medida cautelar", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "tipo_resolucion", 1, "form-label"], ["id", "tipo_resolucion", "name", "tipo_resolucion", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "absolucion"], ["value", "condena"], ["value", "transaccion"], ["value", "conciliacion"], ["value", "otro"], ["for", "fecha_inicio", 1, "form-label"], ["type", "date", "id", "fecha_inicio", "name", "fecha_inicio", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "duracion_dias", 1, "form-label"], ["type", "number", "id", "duracion_dias", "name", "duracion_dias", "required", "", "min", "1", "placeholder", "Ej: 30, 60, 90", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-text"], ["for", "fecha_sentencia", 1, "form-label"], ["type", "date", "id", "fecha_sentencia", "name", "fecha_sentencia", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "institucion_id", 1, "form-label"], ["id", "institucion_id", "name", "institucion_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-warning"], ["for", "motivo_excede", 1, "form-label"], ["id", "motivo_excede", "name", "motivo_excede_competencias", "rows", "2", "placeholder", "Describa por qu\u00E9 esta sentencia excede las competencias...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "validacion-error"], [1, "validacion-detalle"], [1, "validacion-success"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "detalle-modal-container"], [1, "detalle-modal-header"], [1, "header-icon"], [1, "header-title"], [1, "header-subtitle"], ["class", "detalle-modal-body", 4, "ngIf"], [1, "detalle-modal-footer", 2, "display", "flex", "justify-content", "flex-end", "gap", "12px", "padding", "16px 28px", "background", "var(--bg-tertiary)", "border-top", "1px solid var(--border-color)"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "detalle-modal-body"], [1, "info-grid"], [1, "info-card"], [1, "info-icon"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "info-value", "estado-badge-detalle"], [1, "section-card"], [1, "section-header"], [1, "section-icon"], [1, "cambiar-estado-section", 2, "padding", "16px 20px"], [1, "estado-selector"], [1, "selector-group", 2, "display", "flex", "gap", "12px", "align-items", "center"], [1, "form-select", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["value", "PENDIENTE"], ["value", "EN_EJECUCION"], ["value", "EJECUTADA"], ["value", "PARCIALMENTE_EJECUTADA"], ["value", "SUSPENDIDA"], ["value", "ARCHIVADA"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "denuncia-info-detalle", 2, "padding", "16px 20px"], [1, "denuncia-row", 2, "margin-bottom", "8px"], [1, "denuncia-label", 2, "width", "120px"], [1, "denuncia-value"], [1, "denuncia-row"], ["class", "section-card", 4, "ngIf"], [1, "validacion-section", 2, "margin-top", "20px"], [1, "validacion-card", 2, "display", "flex", "align-items", "center", "gap", "16px", "padding", "20px", "border-radius", "16px", "border", "1px solid var(--border-color)"], [1, "validacion-icon", 2, "font-size", "40px"], [1, "validacion-content", 2, "flex", "1"], [2, "margin", "0 0 8px"], [2, "margin", "0"], [1, "contenido-box", 2, "padding", "16px 20px"], [2, "margin", "0", "white-space", "pre-wrap"], [1, "observaciones-box", 2, "padding", "16px 20px"], [1, "btn", "btn-success", 3, "click"], [1, "info-card", 2, "background", "#f8f9fa", "padding", "15px", "border-radius", "8px", "margin-bottom", "20px"], [2, "margin", "0 0 10px 0"], ["for", "institucion_id_remision", 1, "form-label"], ["id", "institucion_id_remision", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "motivo_remision", 1, "form-label"], ["id", "motivo_remision", "rows", "4", "placeholder", "Describa por qu\u00E9 esta sentencia excede las competencias...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-muted"], ["for", "observaciones_remision", 1, "form-label"], ["id", "observaciones_remision", "rows", "3", "placeholder", "Observaciones adicionales...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]],
    template: function MedidaSentenciaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toggleSidebar", function MedidaSentenciaComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function MedidaSentenciaComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toggleNotifications", function MedidaSentenciaComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function MedidaSentenciaComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function MedidaSentenciaComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function MedidaSentenciaComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MedidaSentenciaComponent_div_4_Template, 13, 6, "div", 5)(5, MedidaSentenciaComponent_div_5_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\u2696\uFE0F Gesti\u00F3n de Resoluciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Administre Medidas Cautelares y Sentencias de Conciliaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_Template_button_click_15_listener() {
          return ctx.cambiarModo("medida");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " \uD83D\uDEE1\uFE0F Medidas Cautelares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_Template_button_click_17_listener() {
          return ctx.cambiarModo("sentencia");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, " \uD83D\uDCDC Sentencias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "\uD83D\uDEE1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 18)(24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Medidas Activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 16)(29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "\uD83D\uDCDC");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 18)(32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Sentencias Emitidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 16)(37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 18)(40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Conciliaciones con Acuerdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 16)(45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "\u26A0\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 18)(48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51, "Medidas por Vencer");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](52, MedidaSentenciaComponent_div_52_Template, 9, 3, "div", 21)(53, MedidaSentenciaComponent_div_53_Template, 9, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div", 22)(55, "div", 23)(56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_Template_button_click_58_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 25)(61, "div", 26)(62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_Template_select_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function MedidaSentenciaComponent_Template_select_change_64_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66, "Todos los estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, MedidaSentenciaComponent_option_67_Template, 2, 2, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](68, "div", 26)(69, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70, "Fecha Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_Template_input_ngModelChange_71_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.filtroFechaDesde, $event) || (ctx.filtroFechaDesde = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function MedidaSentenciaComponent_Template_input_change_71_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 26)(73, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Fecha Hasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.filtroFechaHasta, $event) || (ctx.filtroFechaHasta = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function MedidaSentenciaComponent_Template_input_change_75_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "div", 26)(77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78, "Buscar Denuncia");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function MedidaSentenciaComponent_Template_input_ngModelChange_79_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.filtroDenuncia, $event) || (ctx.filtroDenuncia = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function MedidaSentenciaComponent_Template_input_keyup_79_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 26)(81, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MedidaSentenciaComponent_Template_button_click_81_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83, "\uD83D\uDD04");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](85, MedidaSentenciaComponent_div_85_Template, 48, 5, "div", 39)(86, MedidaSentenciaComponent_div_86_Template, 46, 5, "div", 39)(87, MedidaSentenciaComponent_div_87_Template, 61, 27, "div", 40)(88, MedidaSentenciaComponent_div_88_Template, 22, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](89, MedidaSentenciaComponent_div_89_Template, 24, 5, "div", 40)(90, MedidaSentenciaComponent_div_90_Template, 44, 10, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](91, "app-footer", 41);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx.currentMode === "medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx.currentMode === "sentencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.getEstadisticas().medidas.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.getEstadisticas().sentencias.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.getEstadisticas().conciliaciones.con_acuerdo);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.getEstadisticas().medidas.por_vencer);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.currentMode === "medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.currentMode === "sentencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroEstado);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.getEstadosDisponibles());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroFechaDesde);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroFechaHasta);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.filtroDenuncia);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.currentMode === "medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.currentMode === "sentencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showDetalleModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.modalRemisionDesdeSentencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_7__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _components_truncate_pipe__WEBPACK_IMPORTED_MODULE_11__.TruncatePipe],
    styles: ["* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: var(--bg-secondary);\n  color: var(--text-primary);\n}\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 90px;\n}\n.main-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) transparent;\n  width: calc(100% - 280px);\n}\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.dashboard-container.sidebar.collapsed ~ .main-content {\n  margin-left: 90px;\n  width: calc(100% - 90px);\n}\n.search-button-wrapper .search-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-light);\n  border: none;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 18px;\n  color: var(--primary);\n}\n.search-button-wrapper .search-button:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1) rotate(10deg);\n  box-shadow: var(--shadow-sm);\n}\n.theme-toggle-container .theme-toggle-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--primary-light);\n  border: none;\n  padding: 10px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--primary);\n  animation: glow 3s infinite alternate;\n}\n@keyframes glow {\n  from {\n    box-shadow: 0 0 5px var(--primary-light);\n  }\n  to {\n    box-shadow: 0 0 15px var(--primary-light);\n  }\n}\n.theme-toggle-container .theme-toggle-btn:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-2px) scale(1.05);\n}\n.theme-toggle-container .theme-toggle-btn .theme-icon {\n  font-size: 18px;\n  transition: transform 0.3s;\n}\n.theme-toggle-container .theme-toggle-btn .theme-icon:hover {\n  transform: rotate(30deg);\n}\n.notification-wrapper {\n  position: relative;\n}\n.notification-wrapper .notification-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n}\n.notification-wrapper .notification-btn:hover {\n  background: var(--bg-hover);\n  transform: scale(1.1);\n}\n.notification-wrapper .notification-btn .notification-icon {\n  font-size: 20px;\n  transition: transform 0.3s;\n}\n.notification-wrapper .notification-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--danger);\n  color: white;\n  font-size: 11px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n.notification-wrapper .notifications-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  width: 320px;\n  z-index: 1000;\n  margin-top: 8px;\n  border: 1px solid var(--modal-border);\n}\n.notification-wrapper .notifications-dropdown .dropdown-header {\n  padding: 20px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notification-wrapper .notifications-dropdown .dropdown-header h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notification-wrapper .notifications-dropdown .dropdown-header .mark-all-read {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.notification-wrapper .notifications-dropdown .dropdown-header .mark-all-read:hover {\n  color: var(--primary-hover);\n  text-decoration: underline;\n}\n.notification-wrapper .notifications-dropdown .notifications-list {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.notification-wrapper .notifications-dropdown .notification-item {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n  transition: background-color 0.2s;\n}\n.notification-wrapper .notifications-dropdown .notification-item:last-child {\n  border-bottom: none;\n}\n.notification-wrapper .notifications-dropdown .notification-item:hover {\n  background: var(--bg-hover);\n}\n.notification-wrapper .notifications-dropdown .notification-item.unread {\n  background: var(--primary-light);\n  position: relative;\n}\n.notification-wrapper .notifications-dropdown .notification-item.unread::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--primary);\n  border-radius: 0 2px 2px 0;\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content .notification-avatar {\n  width: 40px;\n  height: 40px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content .notification-details {\n  flex: 1;\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content .notification-details .notification-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content .notification-details .notification-message {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n.notification-wrapper .notifications-dropdown .notification-item .notification-content .notification-details .notification-time {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.user-menu-wrapper {\n  position: relative;\n}\n.user-menu-wrapper .user-menu-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-menu-wrapper .user-menu-btn:hover {\n  background: var(--bg-hover);\n  transform: scale(1.1);\n}\n.user-menu-wrapper .user-menu-btn .user-avatar-initial {\n  width: 36px;\n  height: 36px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.user-menu-wrapper .user-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  width: 280px;\n  z-index: 1000;\n  margin-top: 8px;\n  border: 1px solid var(--modal-border);\n}\n.user-menu-wrapper .user-dropdown .user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n}\n.user-menu-wrapper .user-dropdown .user-info .user-avatar-large {\n  width: 48px;\n  height: 48px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n.user-menu-wrapper .user-dropdown .user-info .user-details {\n  flex: 1;\n}\n.user-menu-wrapper .user-dropdown .user-info .user-details .user-name {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.user-menu-wrapper .user-dropdown .user-info .user-details .user-email {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.user-menu-wrapper .user-dropdown .dropdown-divider {\n  height: 1px;\n  background: var(--border-color);\n  margin: 0;\n}\n.user-menu-wrapper .user-dropdown .menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: inherit;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n  font-size: 0.95rem;\n}\n.user-menu-wrapper .user-dropdown .menu-item:hover {\n  background: var(--bg-hover);\n  padding-left: 20px;\n}\n.user-menu-wrapper .user-dropdown .menu-item .menu-icon {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  min-width: 24px;\n  transition: transform 0.3s;\n}\n.user-menu-wrapper .user-dropdown .menu-item .menu-text {\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  width: 90%;\n  max-width: 600px;\n  box-shadow: var(--shadow-xl);\n  z-index: 2001;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.search-modal .search-modal-header {\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.search-modal .search-modal-header .search-input-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--bg-hover);\n  border-radius: 8px;\n  padding: 0 16px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container:focus-within {\n  background: var(--primary-light);\n  box-shadow: 0 0 0 2px var(--primary-light);\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  font-size: 20px;\n  opacity: 0.7;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  flex: 1;\n  border: none;\n  background: none;\n  padding: 16px 0;\n  font-size: 16px;\n  color: inherit;\n  outline: none;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input::placeholder {\n  color: var(--placeholder-color);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 18px;\n  padding: 4px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-clear:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.search-modal .search-modal-header .search-close {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-close:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.search-modal .search-results {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-bottom: 1px solid var(--border-light);\n}\n.search-modal .search-results .search-result-item:last-child {\n  border-bottom: none;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--bg-hover);\n  padding-left: 32px;\n}\n.search-modal .search-results .search-result-item:hover .result-icon {\n  transform: scale(1.2);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 20px;\n  transition: transform 0.3s;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.search-modal .search-empty {\n  padding: 32px 24px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.chatbot-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.3s ease;\n}\n.chatbot-overlay.minimized-mode {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode .modal-overlay-sigpaz {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode .modal-overlay-sigpaz::before {\n  display: none !important;\n}\n.chatbot-overlay.minimized-mode .chatbot-minimized {\n  pointer-events: auto !important;\n  z-index: 10001 !important;\n}\n.chatbot-overlay:not(.minimized-mode) {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.chatbot-overlay:not(.minimized-mode) .chatbot-minimized {\n  display: none !important;\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none !important;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-container,\n.modal-overlay-sigpaz.minimized-mode .chatbot-header,\n.modal-overlay-sigpaz.minimized-mode .chatbot-content,\n.modal-overlay-sigpaz.minimized-mode .chatbot-footer {\n  display: none !important;\n  visibility: hidden !important;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-minimized {\n  display: flex !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n}\n.chatbot-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  z-index: 10002;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 800px;\n  width: auto;\n}\n.chatbot-container:not(.minimized):not(.maximized) {\n  animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.chatbot-container.minimized {\n  display: none;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.chatbot-header .modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header .modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.chatbot-header .modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.chatbot-header .modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.chatbot-header .modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n}\n.chatbot-content .modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.chatbot-content .modal-body-wrapper .modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.chatbot-content .modal-body-wrapper .modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, var(--primary-hover), var(--security));\n}\n.chatbot-footer {\n  padding: 20px 40px;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.chatbot-footer .footer-stats {\n  display: flex;\n  gap: 25px;\n}\n.chatbot-footer .footer-stats .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.chatbot-footer .footer-stats .stat-item .stat-icon {\n  font-size: 16px;\n}\n.chatbot-minimized {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  z-index: 10002;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.modal-overlay-sigpaz.minimized-mode .chatbot-minimized {\n  display: flex !important;\n  pointer-events: auto !important;\n  z-index: 10003 !important;\n}\n.chatbot-minimized:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-lg);\n}\n.chatbot-minimized.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.chatbot-minimized .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.chatbot-minimized .bubble-content .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.chatbot-minimized .bubble-content .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.chatbot-minimized .bubble-content .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.chatbot-minimized .bubble-content .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.chatbot-minimized .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: var(--shadow-md);\n  }\n  50% {\n    box-shadow: var(--shadow-lg);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.resolucion-container {\n  min-height: 100vh;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header .header-tabs .tabs {\n  display: flex;\n  gap: 8px;\n  background: var(--bg-tertiary);\n  padding: 4px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.header .header-tabs .tabs .tab {\n  padding: 10px 24px;\n  border: none;\n  background: transparent;\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header .header-tabs .tabs .tab:hover:not(.active) {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.header .header-tabs .tabs .tab.active {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.quick-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.quick-stats .stat-card {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n  box-shadow: var(--shadow-sm);\n}\n.quick-stats .stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n}\n.quick-stats .stat-card .stat-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-size: 24px;\n}\n.quick-stats .stat-card .stat-icon.medida-icon {\n  background: rgba(var(--security), 0.1);\n  color: var(--security);\n}\n.quick-stats .stat-card .stat-icon.sentencia-icon {\n  background: rgba(var(--success), 0.1);\n  color: var(--success);\n}\n.quick-stats .stat-card .stat-icon.success-icon {\n  background: rgba(var(--success), 0.1);\n  color: var(--success);\n}\n.quick-stats .stat-card .stat-icon.warning-icon {\n  background: rgba(var(--warning), 0.1);\n  color: var(--warning);\n}\n.quick-stats .stat-card .stat-content .stat-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.quick-stats .stat-card .stat-content .stat-label {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.conciliaciones-panel {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.conciliaciones-panel .panel-header {\n  margin-bottom: 20px;\n}\n.conciliaciones-panel .panel-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.conciliaciones-panel .panel-header p {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.conciliaciones-panel .conciliaciones-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  border-radius: 6px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card {\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-header .conciliacion-codigo {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n  font-size: 14px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-header .conciliacion-resultado {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n  text-transform: uppercase;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-header .conciliacion-resultado.resultado-acuerdo {\n  background: var(--success-light);\n  color: var(--success);\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-header .conciliacion-resultado.resultado-desacuerdo {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-info .denuncia-info,\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-info .fecha-info {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-favor,\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-contra {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 12px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-favor.voto-favor,\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-contra.voto-favor {\n  background: var(--success-light);\n  color: var(--success);\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-favor.voto-contra,\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-votos .voto-contra.voto-contra {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-actions .btn-sm {\n  width: 100%;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-actions .bloqueo-info {\n  margin-top: 8px;\n}\n.conciliaciones-panel .conciliaciones-grid .conciliacion-card .conciliacion-actions .bloqueo-info .bloqueo-text {\n  color: var(--warning);\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.conciliaciones-panel .conciliaciones-grid .empty-state {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  text-align: center;\n}\n.conciliaciones-panel .conciliaciones-grid .empty-state .empty-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.6;\n}\n.conciliaciones-panel .conciliaciones-grid .empty-state p {\n  color: var(--text-muted);\n  margin: 0;\n}\n.filtros-container {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.filtros-container .filtros-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container .filtros-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-container .filtros-header .btn-link {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  font-weight: 500;\n}\n.filtros-container .filtros-header .btn-link:hover {\n  color: var(--primary-hover);\n}\n.filtros-container .filtros-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.filtros-container .filtros-grid .filtro-item label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.filtros-container .filtros-grid .filtro-item input,\n.filtros-container .filtros-grid .filtro-item select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container .filtros-grid .filtro-item input:focus,\n.filtros-container .filtros-grid .filtro-item select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.filtros-container .filtros-grid .filtro-item input::placeholder,\n.filtros-container .filtros-grid .filtro-item select::placeholder {\n  color: var(--placeholder-color);\n}\n.filtros-container .filtros-grid .filtro-item .btn {\n  margin-top: 24px;\n}\n.table-container {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 24px;\n}\n.table-container .table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.table-container .table-header .table-title h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .table-header .table-title .table-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container .table-header .table-actions {\n  display: flex;\n  gap: 12px;\n}\n.table-container .table-responsive {\n  overflow-x: auto;\n}\n.table-container .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1400px;\n}\n.table-container .data-table thead {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n}\n.table-container .data-table thead th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container .data-table thead th.text-center {\n  text-align: center;\n}\n.table-container .data-table tbody tr {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container .data-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.table-container .data-table tbody tr:last-child {\n  border-bottom: none;\n}\n.table-container .data-table tbody tr td {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container .data-table tbody tr td .codigo-cell {\n  font-weight: 600;\n  color: var(--primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n  font-size: 13px;\n}\n.table-container .data-table tbody tr td .denuncia-cell strong {\n  display: block;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.table-container .data-table tbody tr td .denuncia-cell small {\n  color: var(--text-muted);\n  font-size: 12px;\n  display: block;\n  line-height: 1.4;\n}\n.table-container .data-table tbody tr td .vigencia-badge,\n.table-container .data-table tbody tr td .estado-badge,\n.table-container .data-table tbody tr td .validez-badge,\n.table-container .data-table tbody tr td .bloqueo-indicator,\n.table-container .data-table tbody tr td .tipo-resolucion {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container .data-table tbody tr td .vigencia-badge.vigencia-normal,\n.table-container .data-table tbody tr td .estado-badge.vigencia-normal,\n.table-container .data-table tbody tr td .validez-badge.vigencia-normal,\n.table-container .data-table tbody tr td .bloqueo-indicator.vigencia-normal,\n.table-container .data-table tbody tr td .tipo-resolucion.vigencia-normal {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.vigencia-alerta,\n.table-container .data-table tbody tr td .estado-badge.vigencia-alerta,\n.table-container .data-table tbody tr td .validez-badge.vigencia-alerta,\n.table-container .data-table tbody tr td .bloqueo-indicator.vigencia-alerta,\n.table-container .data-table tbody tr td .tipo-resolucion.vigencia-alerta {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr td .vigencia-badge.vigencia-urgente,\n.table-container .data-table tbody tr td .estado-badge.vigencia-urgente,\n.table-container .data-table tbody tr td .validez-badge.vigencia-urgente,\n.table-container .data-table tbody tr td .bloqueo-indicator.vigencia-urgente,\n.table-container .data-table tbody tr td .tipo-resolucion.vigencia-urgente {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.vigencia-finalizada,\n.table-container .data-table tbody tr td .estado-badge.vigencia-finalizada,\n.table-container .data-table tbody tr td .validez-badge.vigencia-finalizada,\n.table-container .data-table tbody tr td .bloqueo-indicator.vigencia-finalizada,\n.table-container .data-table tbody tr td .tipo-resolucion.vigencia-finalizada {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-activa,\n.table-container .data-table tbody tr td .estado-badge.estado-activa,\n.table-container .data-table tbody tr td .validez-badge.estado-activa,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-activa,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-activa {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-cumplida,\n.table-container .data-table tbody tr td .estado-badge.estado-cumplida,\n.table-container .data-table tbody tr td .validez-badge.estado-cumplida,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-cumplida,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-cumplida {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-levantada,\n.table-container .data-table tbody tr td .estado-badge.estado-levantada,\n.table-container .data-table tbody tr td .validez-badge.estado-levantada,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-levantada,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-levantada {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-vencida,\n.table-container .data-table tbody tr td .estado-badge.estado-vencida,\n.table-container .data-table tbody tr td .validez-badge.estado-vencida,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-vencida,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-vencida {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-pendiente,\n.table-container .data-table tbody tr td .estado-badge.estado-pendiente,\n.table-container .data-table tbody tr td .validez-badge.estado-pendiente,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-pendiente,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-pendiente {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-proceso,\n.table-container .data-table tbody tr td .estado-badge.estado-proceso,\n.table-container .data-table tbody tr td .validez-badge.estado-proceso,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-proceso,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-proceso {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-ejecutada,\n.table-container .data-table tbody tr td .estado-badge.estado-ejecutada,\n.table-container .data-table tbody tr td .validez-badge.estado-ejecutada,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-ejecutada,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-ejecutada {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.estado-anulada,\n.table-container .data-table tbody tr td .estado-badge.estado-anulada,\n.table-container .data-table tbody tr td .validez-badge.estado-anulada,\n.table-container .data-table tbody tr td .bloqueo-indicator.estado-anulada,\n.table-container .data-table tbody tr td .tipo-resolucion.estado-anulada {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.valido,\n.table-container .data-table tbody tr td .estado-badge.valido,\n.table-container .data-table tbody tr td .validez-badge.valido,\n.table-container .data-table tbody tr td .bloqueo-indicator.valido,\n.table-container .data-table tbody tr td .tipo-resolucion.valido {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.invalido,\n.table-container .data-table tbody tr td .estado-badge.invalido,\n.table-container .data-table tbody tr td .validez-badge.invalido,\n.table-container .data-table tbody tr td .bloqueo-indicator.invalido,\n.table-container .data-table tbody tr td .tipo-resolucion.invalido {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.bloqueado,\n.table-container .data-table tbody tr td .estado-badge.bloqueado,\n.table-container .data-table tbody tr td .validez-badge.bloqueado,\n.table-container .data-table tbody tr td .bloqueo-indicator.bloqueado,\n.table-container .data-table tbody tr td .tipo-resolucion.bloqueado {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.desbloqueado,\n.table-container .data-table tbody tr td .estado-badge.desbloqueado,\n.table-container .data-table tbody tr td .validez-badge.desbloqueado,\n.table-container .data-table tbody tr td .bloqueo-indicator.desbloqueado,\n.table-container .data-table tbody tr td .tipo-resolucion.desbloqueado {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.tipo-absolucion,\n.table-container .data-table tbody tr td .estado-badge.tipo-absolucion,\n.table-container .data-table tbody tr td .validez-badge.tipo-absolucion,\n.table-container .data-table tbody tr td .bloqueo-indicator.tipo-absolucion,\n.table-container .data-table tbody tr td .tipo-resolucion.tipo-absolucion {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr td .vigencia-badge.tipo-condena,\n.table-container .data-table tbody tr td .estado-badge.tipo-condena,\n.table-container .data-table tbody tr td .validez-badge.tipo-condena,\n.table-container .data-table tbody tr td .bloqueo-indicator.tipo-condena,\n.table-container .data-table tbody tr td .tipo-resolucion.tipo-condena {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr td .vigencia-badge.tipo-transaccion,\n.table-container .data-table tbody tr td .estado-badge.tipo-transaccion,\n.table-container .data-table tbody tr td .validez-badge.tipo-transaccion,\n.table-container .data-table tbody tr td .bloqueo-indicator.tipo-transaccion,\n.table-container .data-table tbody tr td .tipo-resolucion.tipo-transaccion {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr td .vigencia-badge.tipo-conciliacion,\n.table-container .data-table tbody tr td .estado-badge.tipo-conciliacion,\n.table-container .data-table tbody tr td .validez-badge.tipo-conciliacion,\n.table-container .data-table tbody tr td .bloqueo-indicator.tipo-conciliacion,\n.table-container .data-table tbody tr td .tipo-resolucion.tipo-conciliacion {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr td .vigencia-badge.tipo-otro,\n.table-container .data-table tbody tr td .estado-badge.tipo-otro,\n.table-container .data-table tbody tr td .validez-badge.tipo-otro,\n.table-container .data-table tbody tr td .bloqueo-indicator.tipo-otro,\n.table-container .data-table tbody tr td .tipo-resolucion.tipo-otro {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons {\n  display: flex;\n  gap: 6px;\n  justify-content: center;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.report,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.export,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.excel,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.certificar,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.validar {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.report:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.export:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.excel:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.certificar:hover,\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.validar:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.edit:hover {\n  background: var(--warning);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.delete:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.levantar {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.levantar:hover {\n  background: var(--success);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.remitir {\n  background: rgba(var(--warning), 0.1);\n  color: var(--warning);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.remitir:hover {\n  background: var(--warning);\n  color: white;\n  transform: translateY(-2px);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table-container .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  text-align: center;\n}\n.table-container .empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.table-container .empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.table-container .empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.pagination .pagination-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination .pagination-pages {\n  display: flex;\n  gap: 6px;\n}\n.pagination .pagination-pages .pagination-page {\n  min-width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination .pagination-pages .pagination-page:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination .pagination-pages .pagination-page.active {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n}\n.pagination .pagination-pages .pagination-page:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.modal-container .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.modal-container .modal-header h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-container .modal-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-container .modal-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-container .modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-container .modal-content form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal-container .form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .modal-container .form-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.modal-container .form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.modal-container .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.modal-container .form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.modal-container .form-group label .required {\n  color: var(--danger);\n  margin-left: 4px;\n}\n.modal-container .form-group .form-select,\n.modal-container .form-group .form-input,\n.modal-container .form-group .form-textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.modal-container .form-group .form-select:focus,\n.modal-container .form-group .form-input:focus,\n.modal-container .form-group .form-textarea:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.modal-container .form-group .form-select::placeholder,\n.modal-container .form-group .form-input::placeholder,\n.modal-container .form-group .form-textarea::placeholder {\n  color: var(--placeholder-color);\n}\n.modal-container .form-group .form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.modal-container .form-group .conciliacion-info-preview {\n  margin-top: 12px;\n  padding: 12px;\n  background: var(--bg-tertiary);\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n}\n.modal-container .form-group .conciliacion-info-preview small {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.modal-container .form-group .conciliacion-info-preview small strong {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.modal-container .validacion-container {\n  margin-top: 20px;\n}\n.modal-container .validacion-container .validacion-card {\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n}\n.modal-container .validacion-container .validacion-card .validacion-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.modal-container .validacion-container .validacion-card .validacion-header .validacion-icon {\n  font-size: 20px;\n  color: var(--primary);\n}\n.modal-container .validacion-container .validacion-card .validacion-header .validacion-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.modal-container .validacion-container .validacion-card .validacion-content p {\n  margin: 0 0 8px 0;\n  color: var(--text-muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n.modal-container .validacion-container .validacion-card .validacion-content p.validacion-error {\n  color: var(--danger);\n  font-weight: 500;\n}\n.modal-container .validacion-container .validacion-card .validacion-content p.validacion-success {\n  color: var(--success);\n  font-weight: 500;\n}\n.modal-container .validacion-container .validacion-card .validacion-content p.validacion-detalle {\n  font-size: 12px;\n  margin-top: 4px;\n}\n.modal-container .terms-container {\n  margin-top: 20px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border-left: 4px solid var(--primary);\n}\n.modal-container .terms-container .terms-text {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  text-align: center;\n}\n.modal-container .modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 24px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal .confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-modal .confirm-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-modal .confirm-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.confirm-modal .confirm-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n}\n.confirm-modal .confirm-body {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n}\n.confirm-modal .confirm-body p {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n.confirm-modal .confirm-body p.confirm-warning {\n  color: var(--danger);\n  font-weight: 500;\n  font-size: 14px;\n}\n.confirm-modal .confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.btn .btn-icon {\n  font-size: 16px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-warning {\n  background: linear-gradient(135deg, var(--warning), #c57f08);\n  color: white;\n}\n.btn.btn-warning:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-info {\n  background: linear-gradient(135deg, var(--info), #0b63f3);\n  color: white;\n}\n.btn.btn-info:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-cancel {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn.btn-cancel:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.btn.btn-sm .btn-icon {\n  font-size: 12px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: var(--link-color);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  font-weight: 500;\n}\n.btn-link:hover {\n  color: var(--link-hover);\n}\napp-footer {\n  display: block;\n  margin-top: auto;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    width: 240px;\n  }\n  .sidebar.collapsed {\n    width: 60px;\n  }\n  .main-content {\n    margin-left: 240px;\n  }\n  .sidebar.collapsed ~ .main-content {\n    margin-left: 60px;\n  }\n  .resolucion-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .conciliaciones-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;\n  }\n  .filtros-grid {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n  .quick-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .data-table {\n    min-width: 1200px;\n  }\n  .chatbot-container:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(0);\n  }\n  .sidebar.collapsed {\n    transform: translateX(0);\n    width: 50px;\n  }\n  .main-content {\n    padding: 20px;\n    margin-left: 220px;\n    background: var(--bg-secondary);\n  }\n  .main-content .top-bar-container {\n    padding: 0 12px;\n    margin-bottom: 16px;\n    border-radius: 10px;\n  }\n  .main-content .top-bar {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0;\n    min-height: 50px;\n  }\n  .header-actions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: auto;\n  }\n  .search-button-wrapper .search-button {\n    width: 36px;\n    height: 36px;\n    font-size: 16px;\n  }\n  .theme-toggle-container .theme-toggle-btn {\n    padding: 8px 12px;\n    font-size: 13px;\n    gap: 6px;\n  }\n  .theme-toggle-container .theme-toggle-btn .theme-icon {\n    font-size: 16px;\n  }\n  .notification-wrapper .notification-btn {\n    padding: 6px;\n  }\n  .notification-wrapper .notification-btn .notification-icon {\n    font-size: 18px;\n  }\n  .notification-wrapper .notifications-dropdown {\n    position: fixed;\n    top: 55px;\n    right: 10px;\n    width: calc(100vw - 20px);\n    max-width: 350px;\n    max-height: 400px;\n    overflow-y: auto;\n  }\n  .user-menu-wrapper .user-menu-btn .user-avatar-initial {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n  .user-menu-wrapper .user-dropdown {\n    position: fixed;\n    top: 55px;\n    right: 10px;\n    width: calc(100vw - 20px);\n    max-width: 300px;\n  }\n  .header .header-tabs .tabs {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .header .header-tabs .tabs .tab {\n    width: 100%;\n    justify-content: center;\n  }\n  .quick-stats {\n    grid-template-columns: 1fr;\n  }\n  .conciliaciones-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .filtros-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .table-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .table-header .table-actions {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .modal-container,\n  .confirm-modal {\n    max-height: 95vh;\n    margin: 0;\n  }\n  .form-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .pagination .pagination-btn {\n    order: 3;\n  }\n  .pagination .pagination-pages {\n    order: 2;\n  }\n  .chatbot-container:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .chatbot-header .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n}\n@media (max-width: 480px) {\n  .sidebar {\n    width: 100%;\n    max-width: 280px;\n  }\n  .top-bar-container {\n    padding: 0 16px;\n  }\n  .notifications-dropdown,\n  .user-dropdown {\n    position: fixed;\n    top: auto;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 12px 12px 0 0;\n  }\n  .search-modal {\n    padding-top: 20px;\n  }\n  .search-modal .search-modal-content {\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    border-radius: 0;\n    height: 100vh;\n  }\n  .header {\n    padding: 20px;\n  }\n  .header .page-title {\n    font-size: 24px;\n  }\n  .modal-container,\n  .confirm-modal {\n    max-width: 95%;\n  }\n  .modal-header {\n    padding: 20px !important;\n  }\n  .modal-header h2 {\n    font-size: 20px !important;\n  }\n  .modal-content {\n    padding: 20px !important;\n  }\n  .btn {\n    padding: 10px 16px !important;\n    font-size: 13px !important;\n  }\n  .chatbot-container:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .chatbot-minimized {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-content-sigpaz:not(.minimized) {\n  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-close .close-icon {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n.detalle-modal-container {\n  background: var(--modal-bg);\n  border-radius: 24px;\n  width: 90%;\n  max-width: 850px;\n  max-height: 85vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n  animation: slideUpModal 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--border-color);\n}\n@keyframes slideUpModal {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.detalle-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 28px;\n  background: var(--gradient-primary);\n  color: white;\n  position: relative;\n  overflow: hidden;\n}\n.detalle-modal-header::before {\n  content: '';\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);\n  pointer-events: none;\n}\n.detalle-modal-header .header-icon {\n  font-size: 48px;\n  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));\n  animation: floatIcon 3s ease-in-out infinite;\n}\n@keyframes floatIcon {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.detalle-modal-header .header-title {\n  flex: 1;\n}\n.detalle-modal-header .header-title h2 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.detalle-modal-header .header-title .header-subtitle {\n  margin: 4px 0 0;\n  font-size: 13px;\n  opacity: 0.85;\n  font-family: 'Courier New', monospace;\n  letter-spacing: 0.5px;\n}\n.detalle-modal-header .modal-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: white;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.detalle-modal-header .modal-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.1);\n}\n.detalle-modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 28px;\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) var(--bg-tertiary);\n}\n.detalle-modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.detalle-modal-body::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.detalle-modal-body::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n}\n.detalle-modal-body::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.info-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid transparent;\n}\n.info-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n  background: var(--card-bg);\n}\n.info-card .info-icon {\n  font-size: 32px;\n  transition: transform 0.3s;\n}\n.info-card:hover .info-icon {\n  transform: scale(1.1);\n}\n.info-card .info-content {\n  flex: 1;\n}\n.info-card .info-content .info-label {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n}\n.info-card .info-content .info-value {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.section-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 16px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.section-card:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.section-card .section-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: var(--bg-tertiary);\n  border-bottom: 1px solid var(--border-color);\n}\n.section-card .section-header .section-icon {\n  font-size: 22px;\n}\n.section-card .section-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.denuncia-info-detalle {\n  padding: 16px 20px;\n}\n.denuncia-info-detalle .denuncia-row {\n  display: flex;\n  margin-bottom: 10px;\n}\n.denuncia-info-detalle .denuncia-row:last-child {\n  margin-bottom: 0;\n}\n.denuncia-info-detalle .denuncia-row .denuncia-label {\n  width: 100px;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.denuncia-info-detalle .denuncia-row .denuncia-value {\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n  word-break: break-word;\n}\n.contenido-box,\n.observaciones-box {\n  padding: 16px 20px;\n  max-height: 200px;\n  overflow-y: auto;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  margin: 12px;\n}\n.contenido-box p,\n.observaciones-box p {\n  margin: 0;\n  line-height: 1.6;\n  color: var(--text-primary);\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n}\n.cambiar-estado-section {\n  padding: 16px 20px;\n}\n.cambiar-estado-section .estado-selector .selector-group {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 640px) {\n  .cambiar-estado-section .estado-selector .selector-group {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.form-select {\n  background: var(--input-bg);\n  border: 1px solid var(--input-border);\n  color: var(--text-primary);\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 14px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.form-select:hover {\n  border-color: var(--input-border-hover);\n}\n.form-select:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.estado-badge-detalle {\n  display: inline-block;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge-detalle.estado-pendiente {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge-detalle.estado-proceso,\n.estado-badge-detalle.estado-en_ejecucion {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-badge-detalle.estado-ejecutada {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge-detalle.estado-parcial,\n.estado-badge-detalle.estado-parcialmente_ejecutada {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.estado-badge-detalle.estado-suspendida {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.estado-badge-detalle.estado-archivada {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.validacion-section {\n  margin-top: 20px;\n}\n.validacion-section .validacion-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 16px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n  background: var(--card-bg);\n}\n.validacion-section .validacion-card.valido {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02));\n  border-color: var(--success);\n}\n.validacion-section .validacion-card.invalido {\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02));\n  border-color: var(--warning);\n}\n.validacion-section .validacion-card .validacion-icon {\n  font-size: 40px;\n  animation: pulseIcon 2s ease-in-out infinite;\n}\n@keyframes pulseIcon {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.validacion-section .validacion-card .validacion-content {\n  flex: 1;\n}\n.validacion-section .validacion-card .validacion-content h4 {\n  margin: 0 0 6px;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.validacion-section .validacion-card .validacion-content p {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.detalle-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 18px 28px;\n  background: var(--bg-tertiary);\n  border-top: 1px solid var(--border-color);\n}\n.detalle-modal-footer .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n}\n.detalle-modal-footer .btn .btn-icon {\n  font-size: 16px;\n}\n.detalle-modal-footer .btn.btn-secondary {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.detalle-modal-footer .btn.btn-secondary:hover {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n  border-color: var(--primary);\n}\n.detalle-modal-footer .btn.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n}\n.detalle-modal-footer .btn.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.detalle-modal-footer .btn.btn-success {\n  background: linear-gradient(135deg, var(--success), var(--success-hover));\n  color: white;\n}\n.detalle-modal-footer .btn.btn-success:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.detalle-modal-footer .btn.btn-warning {\n  background: linear-gradient(135deg, var(--warning), var(--warning-hover));\n  color: white;\n}\n.detalle-modal-footer .btn.btn-warning:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.detalle-modal-footer .btn:active {\n  transform: translateY(0);\n}\n.detalle-modal-footer .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n@media (max-width: 768px) {\n  .detalle-modal-container {\n    width: 95%;\n    max-height: 90vh;\n  }\n  .detalle-modal-header {\n    padding: 18px 20px;\n  }\n  .detalle-modal-header .header-icon {\n    font-size: 36px;\n  }\n  .detalle-modal-header .header-title h2 {\n    font-size: 20px;\n  }\n  .detalle-modal-body {\n    padding: 18px 20px;\n  }\n  .info-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .info-card {\n    padding: 12px;\n  }\n  .info-card .info-icon {\n    font-size: 24px;\n  }\n  .info-card .info-content .info-value {\n    font-size: 13px;\n  }\n  .detalle-modal-footer {\n    padding: 14px 20px;\n    flex-wrap: wrap;\n  }\n  .detalle-modal-footer .btn {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n  .validacion-card {\n    flex-direction: column;\n    text-align: center;\n  }\n  .validacion-card .validacion-icon {\n    font-size: 32px;\n  }\n}\n@media (max-width: 480px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .selector-group {\n    flex-direction: column !important;\n  }\n  .selector-group select,\n  .selector-group button {\n    width: 100%;\n  }\n  .denuncia-row {\n    flex-direction: column;\n  }\n  .denuncia-row .denuncia-label {\n    width: 100% !important;\n    margin-bottom: 4px;\n  }\n}\nbody.neon-theme .detalle-modal-container {\n  box-shadow: var(--shadow-neon-primary);\n  border-color: var(--border-color);\n}\nbody.neon-theme .info-card:hover {\n  border-color: var(--primary);\n  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);\n}\nbody.neon-theme .section-card:hover {\n  border-color: var(--primary);\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);\n}\nbody.neon-theme .form-select:focus {\n  box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.2);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXNvbHVjaW9uZXMvcGFnZXMvcmVzb2x1Y2lvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLHNCQUFBO0FBVEY7QUFZQTtFQUNFLFNBQUE7RUFDQSw4Q0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtBQVZGO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUFkRjtBQWdCRTtFQUVJLGlCQUFBO0FBZk47QUF3QkE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUF0QkY7QUF3QkU7RUFDRSxVQUFBO0FBdEJKO0FBeUJFO0VBQ0UsdUJBQUE7QUF2Qko7QUEwQkU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FBeEJKO0FBMEJJO0VBQ0UsZ0NBQUE7QUF4Qk47QUE0QkU7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FBMUJKO0FBK0JBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtBQTlCTjtBQW9DQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FBbkNKO0FBcUNJO0VBQ0U7SUFDRSx3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O0FBc2VBO0VBWUksNEJBQUE7RUFDQSwyQ0FBQTtBQS9lSjtBQWtlQTtFQWlCSSw0Q0FBQTtBQWhmSiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNPTFVDScODwpNOIC0gRVNUSUxPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEQVNIQk9BUkQgQ09OVEFJTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNQUlOIENPTlRFTlRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWFpbi1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi10b3A6IDY2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXByaW1hcnkpIHRyYW5zcGFyZW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLmRhc2hib2FyZC1jb250YWluZXIuc2lkZWJhci5jb2xsYXBzZWQgfiAmIHtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gIH1cbn1cblxuLy8gU2VhcmNoIEJ1dHRvblxuLnNlYXJjaC1idXR0b24td3JhcHBlciB7XG4gIC5zZWFyY2gtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoZW1lIFRvZ2dsZVxuLnRoZW1lLXRvZ2dsZS1jb250YWluZXIge1xuICAudGhlbWUtdG9nZ2xlLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYW5pbWF0aW9uOiBnbG93IDNzIGluZmluaXRlIGFsdGVybmF0ZTtcblxuICAgIEBrZXlmcmFtZXMgZ2xvdyB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTtcbiAgICB9XG5cbiAgICAudGhlbWUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTm90aWZpY2F0aW9uc1xuLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb25zLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgICAuZHJvcGRvd24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAubWFyay1hbGwtcmVhZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmLnVucmVhZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgIC5ub3RpZmljYXRpb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3RpZmljYXRpb24tZGV0YWlscyB7XG4gICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm90aWZpY2F0aW9uLXRpbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VyIE1lbnVcbi51c2VyLW1lbnUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudXNlci1tZW51LWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG5cbiAgICAudXNlci1hdmF0YXItaW5pdGlhbCB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB9XG4gIH1cblxuICAudXNlci1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgIC51c2VyLWF2YXRhci1sYXJnZSB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuXG4gICAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWVtYWlsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWRpdmlkZXIge1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLm1lbnUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5tZW51LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VBUkNIIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcblxuICAuc2VhcmNoLW1vZGFsLWJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgfVxuXG4gIC5zZWFyY2gtbW9kYWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgIHotaW5kZXg6IDIwMDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuICB9XG5cbiAgLnNlYXJjaC1tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtbW9kYWwtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLW1vZGFsLWlucHV0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjRweDtcbiAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuXG4gICAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtZGV0YWlscyB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLnJlc3VsdC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaC1lbXB0eSB7XG4gICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFTFAgU1VQUE9SVCBNT0RBTCAoQ0hBVEJPVCBTSUdQQVopXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNoYXRib3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0Ym90LWNvbnRhaW5lcixcbiAgICAuY2hhdGJvdC1oZWFkZXIsXG4gICAgLmNoYXRib3QtY29udGVudCxcbiAgICAuY2hhdGJvdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICY6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1oZWFkZXIge1xuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuNSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNoYXRib3QtY29udGVudCB7XG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgYm94LXNoYWRvdzogMCAyNXB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODV2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktaG92ZXIpLCB2YXIoLS1zZWN1cml0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5mb290ZXItc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xuXG4gICAgLnN0YXQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNoYXRib3QtbWluaW1pemVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBhbmltYXRpb246IGJ1YmJsZUFwcGVhciAwLjZzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLm1vZGFsLW92ZXJsYXktc2lncGF6Lm1pbmltaXplZC1tb2RlICYge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMDAzICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgfVxuXG4gICYucHVsc2luZyB7XG4gICAgYW5pbWF0aW9uOiBidWJibGVQdWxzZSAycyBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIC5idWJibGUtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xuICAgIH1cblxuICAgIC5idWJibGUtdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG5cbiAgICAuYnViYmxlLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ1YmJsZS1ub3RpZmljYXRpb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnViYmxlQXBwZWFyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc3BpblNsb3cge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNPTFVDSU9OIENPTlRBSU5FUiAoQ29udGVuaWRvIHByaW5jaXBhbClcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucmVzb2x1Y2lvbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBERSBSRVNPTFVDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLXRhYnMge1xuICAgIC50YWJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIC50YWIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFFVSUNLIFNUQVRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnF1aWNrLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgIH1cblxuICAgIC5zdGF0LWljb24ge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcblxuICAgICAgJi5tZWRpZGEtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2VjdXJpdHkpLCAwLjEpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2VjdXJpdHkpO1xuICAgICAgfVxuXG4gICAgICAmLnNlbnRlbmNpYS1pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zdWNjZXNzKSwgMC4xKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgfVxuXG4gICAgICAmLnN1Y2Nlc3MtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3VjY2VzcyksIDAuMSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgIH1cblxuICAgICAgJi53YXJuaW5nLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXdhcm5pbmcpLCAwLjEpO1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXQtY29udGVudCB7XG4gICAgICAuc3RhdC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuXG4gICAgICAuc3RhdC1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OQ0lMSUFDSU9ORVMgUEFORUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29uY2lsaWFjaW9uZXMtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5jb25jaWxpYWNpb25lcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgLmNvbmNpbGlhY2lvbi1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgICAgfVxuXG4gICAgICAuY29uY2lsaWFjaW9uLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgICAuY29uY2lsaWFjaW9uLWNvZGlnbyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbmFjbycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uY2lsaWFjaW9uLXJlc3VsdGFkbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAmLnJlc3VsdGFkby1hY3VlcmRvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucmVzdWx0YWRvLWRlc2FjdWVyZG8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29uY2lsaWFjaW9uLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgICAgIC5kZW51bmNpYS1pbmZvLCAuZmVjaGEtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb25jaWxpYWNpb24tdm90b3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgLnZvdG8tZmF2b3IsIC52b3RvLWNvbnRyYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgJi52b3RvLWZhdm9yIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYudm90by1jb250cmEge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29uY2lsaWFjaW9uLWFjdGlvbnMge1xuICAgICAgICAuYnRuLXNtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9xdWVvLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAgIC5ibG9xdWVvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZW1wdHktc3RhdGUge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDhweCAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuZW1wdHktaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSUxUUk9TIENPTlRBSU5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5maWx0cm9zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgLmZpbHRyb3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLmZpbHRyby1pdGVtIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQUJMRSBDT05UQUlORVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAudGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC50YWJsZS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAuZGF0YS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtaW4td2lkdGg6IDE0MDBweDtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAmLnRleHQtY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgLmNvZGlnby1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbmFjbycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVudW5jaWEtY2VsbCB7XG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQmFkZ2Ugc3R5bGVzXG4gICAgICAgICAgLnZpZ2VuY2lhLWJhZGdlLCAuZXN0YWRvLWJhZGdlLCAudmFsaWRlei1iYWRnZSwgLmJsb3F1ZW8taW5kaWNhdG9yLCAudGlwby1yZXNvbHVjaW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICAgICAmLnZpZ2VuY2lhLW5vcm1hbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudmlnZW5jaWEtYWxlcnRhIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi52aWdlbmNpYS11cmdlbnRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudmlnZW5jaWEtZmluYWxpemFkYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVzdGFkby1hY3RpdmEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmVzdGFkby1jdW1wbGlkYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLWxldmFudGFkYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLXZlbmNpZGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5lc3RhZG8tcGVuZGllbnRlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5lc3RhZG8tcHJvY2VzbyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLWVqZWN1dGFkYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXN0YWRvLWFudWxhZGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi52YWxpZG8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmludmFsaWRvIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYmxvcXVlYWRvIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZGVzYmxvcXVlYWRvIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aXBvLWFic29sdWNpb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWluZm8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRpcG8tY29uZGVuYSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRpcG8tdHJhbnNhY2Npb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnRpcG8tY29uY2lsaWFjaW9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi50aXBvLW90cm8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucy1jZWxsIHtcbiAgICAgICAgICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICAgICAmLnZpZXcsICYucmVwb3J0LCAmLmV4cG9ydCwgJi5leGNlbCwgJi5jZXJ0aWZpY2FyLCAmLnZhbGlkYXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5lZGl0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYubGV2YW50YXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5yZW1pdGlyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXdhcm5pbmcpLCAwLjEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZW1wdHktc3RhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZW1wdHktaWNvbiB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQUdJTkFUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcblxuICAucGFnaW5hdGlvbi1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcblxuICAgIC5wYWdpbmF0aW9uLXBhZ2Uge1xuICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUxFUyBERSBSRVNPTFVDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLm1vZGFsLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMzJweDtcblxuICAgIGZvcm0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAzMnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIC5yZXF1aXJlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLXNlbGVjdCwgLmZvcm0taW5wdXQsIC5mb3JtLXRleHRhcmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLmNvbmNpbGlhY2lvbi1pbmZvLXByZXZpZXcge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudmFsaWRhY2lvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAudmFsaWRhY2lvbi1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAudmFsaWRhY2lvbi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgICAudmFsaWRhY2lvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYWNpb24tdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC52YWxpZGFjaW9uLWNvbnRlbnQge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgICAgICAgICAmLnZhbGlkYWNpb24tZXJyb3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYudmFsaWRhY2lvbi1zdWNjZXNzIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi52YWxpZGFjaW9uLWRldGFsbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50ZXJtcy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAudGVybXMtdGV4dCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMjRweCAzMnB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZyk7XG4gIH1cbn1cblxuLy8gTW9kYWwgZGUgY29uZmlybWFjacODwrNuXG4uY29uZmlybS1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmNvbmZpcm0taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtaGVhZGVyLWJnKTtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLm1vZGFsLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmNvbmZpcm0taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuXG4gICAgICAmLmNvbmZpcm0td2FybmluZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG5cbiAgJi5idG4td2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZyksIGRhcmtlbigjZjU5ZTBiLCAxMCUpKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG5cbiAgJi5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW5mbyksIGRhcmtlbigjM2I4MmY2LCAxMCUpKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG5cbiAgJi5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gICYuYnRuLXNtIHtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAuYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1saW5rLWhvdmVyKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRk9PVEVSIENPTVBPTkVOVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmFwcC1mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgb3BhY2l0eTogMC43OyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDI0MHB4O1xuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuXG4gICAgLnNpZGViYXIuY29sbGFwc2VkIH4gJiB7XG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICB9XG4gIH1cblxuICAucmVzb2x1Y2lvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5jb25jaWxpYWNpb25lcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcikgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5xdWljay1zdGF0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5kYXRhLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcbiAgfVxuXG4gIC5jaGF0Ym90LWNvbnRhaW5lcjpub3QoLm1pbmltaXplZCk6bm90KC5tYXhpbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuXG4gICAgLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC50b3AtYmFyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuc2VhcmNoLWJ1dHRvbi13cmFwcGVyIC5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnRoZW1lLXRvZ2dsZS1jb250YWluZXIgLnRoZW1lLXRvZ2dsZS1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBnYXA6IDZweDtcblxuICAgIC50aGVtZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICAubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICAgIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICAgIHBhZGRpbmc6IDZweDtcblxuICAgICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb25zLWRyb3Bkb3duIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNTVweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbWVudS13cmFwcGVyIHtcbiAgICAudXNlci1tZW51LWJ0biAudXNlci1hdmF0YXItaW5pdGlhbCB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudXNlci1kcm9wZG93biB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDU1cHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIC5oZWFkZXItdGFicyB7XG4gICAgICAudGFicyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgIC50YWIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnF1aWNrLXN0YXRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5jb25jaWxpYWNpb25lcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyLFxuICAuY29uZmlybS1tb2RhbCB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgICBvcmRlcjogMztcbiAgICB9XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlcyB7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG4gIH1cblxuICAuY2hhdGJvdC1jb250YWluZXI6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAuY2hhdGJvdC1oZWFkZXIgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cblxuICAudG9wLWJhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb25zLWRyb3Bkb3duLFxuICAudXNlci1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgIC5zZWFyY2gtbW9kYWwtY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lcixcbiAgLmNvbmZpcm0tbW9kYWwge1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDEwcHggMTZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNoYXRib3QtY29udGFpbmVyOm5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTSUdQQVogLSBFU1RJTE9TIMODwppOSUNPUyAoQ09NUExFVE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYXJpYWJsZXMgaW50ZXJuYXMgKG5vIGludGVyZmllcmVuIGNvbiBnbG9iYWxlcylcbkBzaWdwYXotcHJpbWFyeTogIzRmNDZlNTtcbkBzaWdwYXotc2Vjb25kYXJ5OiAjNjM2NmYxO1xuQHNpZ3Bhei1hY2NlbnQ6ICMwMGZmODg7XG5Ac2lncGF6LWRhbmdlcjogI2VmNDQ0NDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9WRVJMQVkgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gIC8vIFNvbG8gbW9zdHJhciBmb25kbyBjdWFuZG8gZWwgbW9kYWwgZXN0w4PCoSBhYmllcnRvXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cblxuICAvLyBDdWFuZG8gZXN0w4PCoSBtaW5pbWl6YWRvOiBzaW4gZm9uZG8gbmkgYmxvcXVlb1xuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8vIFNvbG8gbGEgYnVyYnVqYSBlcyBpbnRlcmFjdGl2YVxuICAgIC5mbG9hdGluZy1idWJibGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICYubWluaW1pemVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZCkge1xuICAgIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVIgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAubW9kYWwtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICAubW9kYWwtYnRuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogNDJweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk1KTtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciAuYnRuLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG5cbiAgICAgIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgei1pbmRleDogMTAwMDI7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIH1cblxuICAgICAgJi5taW5pbWl6ZS1idG4uYW5pbWF0aW5nIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICYuY2xvc2UtbW9kYWwtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENVRVJQTyBERUwgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcblxuICAvLyBTY3JvbGxiYXIgcGVyc29uYWxpemFkYVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1zZWNvbmRhcnksIEBzaWdwYXotcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQXNlZ3VyYXIgcXVlIGVsIGNvbXBvbmVudGUgaW50ZXJubyBvY3VwZSB0b2RvIGVsIGFuY2hvXG4gIGFwcC1oZWxwLXN1cHBvcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQlVSQlVKQSBGTE9UQU5URSAoTUlOSU1JWkFETylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmxvYXRpbmctYnViYmxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBAc2lncGF6LXByaW1hcnksIEBzaWdwYXotc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBhbmltYXRpb246IGJ1YmJsZUFwcGVhciAwLjZzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNyk7XG4gIH1cblxuICAmLnB1bHNpbmcge1xuICAgIGFuaW1hdGlvbjogYnViYmxlUHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cblxuICAuYnViYmxlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cblxuICAuYnViYmxlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gIC5idWJibGUtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICB9XG5cbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5idWJibGUtbm90aWZpY2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY29sb3I6IEBzaWdwYXotcHJpbWFyeTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuQGtleWZyYW1lcyBtaW5pbWl6ZUFuaW1hdGlvbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpblNsb3cge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBERVRBTExFUyBERSBTRU5URU5DSUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5kZXRhbGxlLW1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwTW9kYWwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXBNb2RhbCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHNjYWxlKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxufVxuXG4vLyBIZWFkZXIgZGVsIG1vZGFsXG4uZGV0YWxsZS1tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwJTtcbiAgICByaWdodDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmhlYWRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2JhKDAsMCwwLDAuMikpO1xuICAgIGFuaW1hdGlvbjogZmxvYXRJY29uIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBmbG9hdEljb24ge1xuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG4gIH1cblxuICAuaGVhZGVyLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbi8vIEJvZHkgZGVsIG1vZGFsXG4uZGV0YWxsZS1tb2RhbC1ib2R5IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjRweCAyOHB4O1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG59XG5cbi8vIEdyaWQgZGUgaW5mb3JtYWNpw4PCs25cbi5pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uaW5mby1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIH1cblxuICAuaW5mby1pY29uIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIH1cblxuICAmOmhvdmVyIC5pbmZvLWljb24ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuXG4gIC5pbmZvLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG5cbiAgICAuaW5mby1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuaW5mby12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2VjY2lvbmVzIGRlIGNhcmRzXG4uc2VjdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLnNlY3Rpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJbmZvcm1hY2nDg8KzbiBkZSBkZW51bmNpYVxuLmRlbnVuY2lhLWluZm8tZGV0YWxsZSB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcblxuICAuZGVudW5jaWEtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuZGVudW5jaWEtbGFiZWwge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLmRlbnVuY2lhLXZhbHVlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRlbmlkbyB5IG9ic2VydmFjaW9uZXNcbi5jb250ZW5pZG8tYm94LFxuLm9ic2VydmFjaW9uZXMtYm94IHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDEycHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8vIFNlbGVjdG9yIGRlIGVzdGFkb1xuLmNhbWJpYXItZXN0YWRvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG5cbiAgLmVzdGFkby1zZWxlY3RvciB7XG4gICAgLnNlbGVjdG9yLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgfVxufVxuXG4vLyBCYWRnZSBkZSBlc3RhZG8gZW4gZGV0YWxsZVxuLmVzdGFkby1iYWRnZS1kZXRhbGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgJi5lc3RhZG8tcGVuZGllbnRlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAmLmVzdGFkby1wcm9jZXNvLFxuICAmLmVzdGFkby1lbl9lamVjdWNpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgfVxuXG4gICYuZXN0YWRvLWVqZWN1dGFkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5lc3RhZG8tcGFyY2lhbCxcbiAgJi5lc3RhZG8tcGFyY2lhbG1lbnRlX2VqZWN1dGFkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgJi5lc3RhZG8tc3VzcGVuZGlkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgfVxuXG4gICYuZXN0YWRvLWFyY2hpdmFkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4vLyBWYWxpZGFjacODwrNuIGNhcmRcbi52YWxpZGFjaW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC52YWxpZGFjaW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG5cbiAgICAmLnZhbGlkbyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4wOCksIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjAyKSk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIH1cblxuICAgICYuaW52YWxpZG8ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMDgpLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wMikpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG5cbiAgICAudmFsaWRhY2lvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2VJY29uIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICAgIH1cblxuICAgIC52YWxpZGFjaW9uLWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcblxuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRm9vdGVyIGRlbCBtb2RhbFxuLmRldGFsbGUtbW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxOHB4IDI4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLmJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAuYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5idG4tc3VjY2VzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdWNjZXNzKSwgdmFyKC0tc3VjY2Vzcy1ob3ZlcikpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXdhcm5pbmcge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZyksIHZhcigtLXdhcm5pbmctaG92ZXIpKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRldGFsbGUtbW9kYWwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAuZGV0YWxsZS1tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcblxuICAgIC5oZWFkZXItaWNvbiB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci10aXRsZSBoMiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLmRldGFsbGUtbW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMThweCAyMHB4O1xuICB9XG5cbiAgLmluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuaW5mby1jYXJkIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgLmluZm8taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLmluZm8tY29udGVudCAuaW5mby12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG5cbiAgLmRldGFsbGUtbW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cblxuICAudmFsaWRhY2lvbi1jYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC52YWxpZGFjaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc2VsZWN0b3ItZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcblxuICAgIHNlbGVjdCwgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5kZW51bmNpYS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZGVudW5jaWEtbGFiZWwge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGVtYSBOZW9uIGVzcGVjw4PCrWZpY29cbmJvZHkubmVvbi10aGVtZSB7XG4gIC5kZXRhbGxlLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW5lb24tcHJpbWFyeSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLmluZm8tY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuICB9XG5cbiAgLnNlY3Rpb24tY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjEpO1xuICB9XG5cbiAgLmZvcm0tc2VsZWN0OmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slideIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        transform: 'translateX(100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 71721:
/*!******************************************************************!*\
  !*** ./src/app/modules/resoluciones/components/truncate.pipe.ts ***!
  \******************************************************************/
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_resoluciones_pages_resolucion_component_ts.js.map