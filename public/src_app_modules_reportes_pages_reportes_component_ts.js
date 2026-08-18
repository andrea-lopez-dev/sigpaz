"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_reportes_pages_reportes_component_ts"],{

/***/ 38709:
/*!**************************************************************!*\
  !*** ./src/app/modules/reportes/pages/reportes.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesNotificacionesComponent: () => (/* binding */ ReportesNotificacionesComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/notification.service */ 98344);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/services/loading.service */ 98660);



















function ReportesNotificacionesComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function ReportesNotificacionesComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_4_div_11_div_1_Template_div_click_0_listener() {
      const result_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.verDetallesDenuncia(result_r5.id_denuncia));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 69)(4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Denuncia #", result_r5.numero_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](result_r5.descripcion_corta);
  }
}
function ReportesNotificacionesComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ReportesNotificacionesComponent_div_4_div_11_div_1_Template, 8, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function ReportesNotificacionesComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function ReportesNotificacionesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 55)(3, "div", 56)(4, "div", 57)(5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup.enter", function ReportesNotificacionesComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ReportesNotificacionesComponent_div_4_button_8_Template, 2, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ReportesNotificacionesComponent_div_4_div_11_Template, 2, 1, "div", 62)(12, ReportesNotificacionesComponent_div_4_div_12_Template, 2, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function ReportesNotificacionesComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 81)(7, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function ReportesNotificacionesComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 85)(1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function ReportesNotificacionesComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function ReportesNotificacionesComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 88)(2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ReportesNotificacionesComponent_div_5_div_4_div_9_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function ReportesNotificacionesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ReportesNotificacionesComponent_div_5_div_2_Template, 17, 0, "div", 75)(3, ReportesNotificacionesComponent_div_5_div_3_Template, 3, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportesNotificacionesComponent_div_5_div_4_Template, 10, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function ReportesNotificacionesComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", tipo_r9.tipo_notificacion_id || tipo_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", tipo_r9.nombre, " ");
  }
}
function ReportesNotificacionesComponent_tr_119_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.abrirModalCancelar(notificacion_r11.notificacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u2716\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function ReportesNotificacionesComponent_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 95)(3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83C\uDD94");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "td")(7, "div", 97)(8, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_Template_a_click_10_listener() {
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.previsualizarDenuncia(notificacion_r11.denuncia_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td")(13, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "td")(21, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "td")(24, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "td", 103)(27, "div", 104)(28, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_Template_button_click_28_listener() {
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.verDetalles(notificacion_r11.notificacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_Template_button_click_31_listener() {
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarPDF(notificacion_r11.notificacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_Template_button_click_34_listener() {
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarExcelIndividual(notificacion_r11.notificacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_tr_119_Template_button_click_37_listener() {
      const notificacion_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.generarConstancia(notificacion_r11.notificacion_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](40, ReportesNotificacionesComponent_tr_119_button_40_Template, 3, 0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notificacion_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", notificacion_r11.notificacion_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Denuncia #", (notificacion_r11.denuncia == null ? null : notificacion_r11.denuncia.numero_expediente) || notificacion_r11.denuncia_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r1.getTipoClass(notificacion_r11.tipo_notificacion_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.getTipoNombre(notificacion_r11.tipo_notificacion_id), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](17, 12, notificacion_r11.fecha_emision, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](notificacion_r11.destinatario);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", notificacion_r11.medio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r1.getEstadoClass(notificacion_r11.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.getEstadoNombre(notificacion_r11.estado), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", notificacion_r11.estado !== "CANCELADA" && notificacion_r11.estado !== "ENTREGADA");
  }
}
function ReportesNotificacionesComponent_div_120_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_120_button_4_Template_button_click_0_listener() {
      const pagina_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", pagina_r15 === ctx_r1.paginaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", pagina_r15 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", pagina_r15, " ");
  }
}
function ReportesNotificacionesComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 111)(1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_120_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportesNotificacionesComponent_div_120_button_4_Template, 2, 4, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_120_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.paginaActual + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.paginaActual === ctx_r1.totalPaginas);
  }
}
function ReportesNotificacionesComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 116)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCE8");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "No hay notificaciones registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Comience emitiendo una nueva notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_121_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.emitirNuevaNotificacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\uD83D\uDCE8");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Emitir primera notificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function ReportesNotificacionesComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Cargando notificaciones...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function ReportesNotificacionesComponent_div_123_div_9_div_44_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 148)(1, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const involucrado_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](involucrado_r18.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](involucrado_r18.rol);
  }
}
function ReportesNotificacionesComponent_div_123_div_9_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 139)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDC65 Involucrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportesNotificacionesComponent_div_123_div_9_div_44_div_4_Template, 5, 2, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.denunciaSeleccionada.involucrados);
  }
}
function ReportesNotificacionesComponent_div_123_div_9_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 153)(1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_123_div_9_div_45_div_4_Template_button_click_5_listener() {
      const doc_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.descargarDocumento(doc_r20.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u2B07\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](doc_r20.nombre);
  }
}
function ReportesNotificacionesComponent_div_123_div_9_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 139)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCCE Documentos Adjuntos");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportesNotificacionesComponent_div_123_div_9_div_45_div_4_Template, 8, 1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.denunciaSeleccionada.documentos);
  }
}
function ReportesNotificacionesComponent_div_123_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 130)(1, "div", 131)(2, "div", 132)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 134)(8, "div", 135)(9, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Fecha Registro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 135)(15, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Denunciante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 138)(20, "div", 139)(21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "\uD83D\uDCDD Descripci\u00F3n de los Hechos");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 139)(26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\uD83D\uDCCD Ubicaci\u00F3n del Hecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 141)(29, "div", 142)(30, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "Departamento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 142)(35, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Municipio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 142)(40, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, ReportesNotificacionesComponent_div_123_div_9_div_44_Template, 5, 1, "div", 145)(45, ReportesNotificacionesComponent_div_123_div_9_div_45_Template, 5, 1, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Denuncia #", ctx_r1.denunciaSeleccionada.numero_denuncia || ctx_r1.denunciaSeleccionada.numero_expediente);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r1.getEstadoDenunciaClass(ctx_r1.denunciaSeleccionada.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.denunciaSeleccionada.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](13, 12, ctx_r1.denunciaSeleccionada.fecha_registro, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.denunciaSeleccionada.denunciante_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.denunciaSeleccionada.descripcion_hechos || ctx_r1.denunciaSeleccionada.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.denunciaSeleccionada.departamento || "No especificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.denunciaSeleccionada.municipio || "No especificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.denunciaSeleccionada.direccion || "No especificada");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.denunciaSeleccionada.involucrados && ctx_r1.denunciaSeleccionada.involucrados.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.denunciaSeleccionada.documentos && ctx_r1.denunciaSeleccionada.documentos.length > 0);
  }
}
function ReportesNotificacionesComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 120)(1, "div", 121)(2, "div", 122)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83D\uDCC4 Previsualizaci\u00F3n de Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_123_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarDenunciaPreviewModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ReportesNotificacionesComponent_div_123_div_9_Template, 46, 15, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 126)(11, "div", 127)(12, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_123_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarDenunciaPreviewModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_123_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.continuarConNotificacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, " Continuar con Notificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.denunciaSeleccionada);
  }
}
function ReportesNotificacionesComponent_div_124_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const denuncia_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", denuncia_r22.id_denuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" #", denuncia_r22.numero_denuncia || denuncia_r22.numero_expediente, " - ", denuncia_r22.denunciante_nombre, " ");
  }
}
function ReportesNotificacionesComponent_div_124_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 183)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Denuncia seleccionada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "N\u00FAmero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Denunciante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" #", ctx_r1.denunciaPreview.numero_denuncia || ctx_r1.denunciaPreview.numero_expediente);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.denunciaPreview.denunciante_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.denunciaPreview.descripcion_corta || ctx_r1.denunciaPreview.descripcion);
  }
}
function ReportesNotificacionesComponent_div_124_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", tipo_r23.tipo_notificacion_id || tipo_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", tipo_r23.nombre, " ");
  }
}
function ReportesNotificacionesComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 120)(1, "div", 121)(2, "div", 122)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_124_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarNotificacionModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "form", 157, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function ReportesNotificacionesComponent_div_124_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.guardarNotificacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 124)(11, "div", 158)(12, "div", 159)(13, "div", 160)(14, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, " Denuncia Asociada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 163)(19, "select", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.denuncia_id, $event) || (ctx_r1.notificacionFormData.denuncia_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ReportesNotificacionesComponent_div_124_Template_select_change_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarDenunciaSeleccionada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Seleccione una denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, ReportesNotificacionesComponent_div_124_option_22_Template, 2, 3, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_124_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.buscarDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " \uD83D\uDD0D Buscar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ReportesNotificacionesComponent_div_124_div_25_Template, 15, 3, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 160)(27, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, " Tipo de Notificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "select", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.tipo_notificacion_id, $event) || (ctx_r1.notificacionFormData.tipo_notificacion_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Seleccione tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, ReportesNotificacionesComponent_div_124_option_34_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 160)(36, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Destinatario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.destinatario, $event) || (ctx_r1.notificacionFormData.destinatario = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 160)(42, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " Medio de Notificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "select", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_select_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.medio, $event) || (ctx_r1.notificacionFormData.medio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "option", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Notificaci\u00F3n Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "option", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Carta Certificada");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Mensaje de Texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, "Oficio");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 159)(58, "div", 160)(59, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60, " Fecha de Emisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.fecha_emision, $event) || (ctx_r1.notificacionFormData.fecha_emision = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "div", 160)(65, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "textarea", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_124_Template_textarea_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.notificacionFormData.observaciones, $event) || (ctx_r1.notificacionFormData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 126)(69, "div", 127)(70, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_124_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarNotificacionModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const notificacionForm_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "\u270F\uFE0F Editar Notificaci\u00F3n" : "\uD83D\uDCE8 Emitir Nueva Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.denuncia_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.denunciasDisponibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.denunciaPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.tipo_notificacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.tiposNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.destinatario);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.medio);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.fecha_emision);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.notificacionFormData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !notificacionForm_r24.form.valid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditing ? "Actualizar" : "Emitir", " Notificaci\u00F3n ");
  }
}
function ReportesNotificacionesComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 120)(1, "div", 184)(2, "div", 185)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\u26A0\uFE0F Cancelar Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_125_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarCancelModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 186)(9, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u2716\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "\u00BFEst\u00E1 seguro de cancelar la notificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 160)(17, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Motivo de Cancelaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "textarea", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_div_125_Template_textarea_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.motivoCancelacion, $event) || (ctx_r1.motivoCancelacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 190)(21, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_125_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarCancelModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_125_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmarCancelacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " Confirmar Cancelaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("#", ctx_r1.notificacionACancelar);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.motivoCancelacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r1.motivoCancelacion || ctx_r1.isLoading);
  }
}
function ReportesNotificacionesComponent_div_126_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Tipo: ", ctx_r1.getTipoNombre((ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.tipo_notificacion) || ctx_r1.filtros.tipo_notificacion), " ");
  }
}
function ReportesNotificacionesComponent_div_126_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Estado: ", ctx_r1.getEstadoNombre((ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.estado) || ctx_r1.filtros.estado), " ");
  }
}
function ReportesNotificacionesComponent_div_126_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Destinatario: ", (ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.destinatario) || ctx_r1.filtros.destinatario, " ");
  }
}
function ReportesNotificacionesComponent_div_126_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r27.notificacion_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("#", (item_r27.denuncia == null ? null : item_r27.denuncia.numero_expediente) || item_r27.denuncia_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r27.tipo || ctx_r1.getTipoNombre(item_r27.tipo_notificacion_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](9, 7, item_r27.fecha_emision, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r27.destinatario);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r27.medio);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getEstadoNombre(item_r27.estado));
  }
}
function ReportesNotificacionesComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 120)(1, "div", 193)(2, "div", 122)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83D\uDCC8 Reporte Detallado de Notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_126_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarReporteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 124)(9, "div", 194)(10, "div", 195)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Per\u00EDodo del Reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 196)(18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Filtros Aplicados");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, ReportesNotificacionesComponent_div_126_span_21_Template, 2, 1, "span", 198)(22, ReportesNotificacionesComponent_div_126_span_22_Template, 2, 1, "span", 198)(23, ReportesNotificacionesComponent_div_126_span_23_Template, 2, 1, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 199)(25, "div", 200)(26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "Distribuci\u00F3n por Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 201)(29, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "\uD83D\uDCCA Gr\u00E1fico de Tipos");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 200)(32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "Evoluci\u00F3n Mensual");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 201)(35, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "\uD83D\uDCC8 Gr\u00E1fico de Evoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 203)(38, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Detalle de Notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 43)(41, "table", 44)(42, "thead")(43, "tr")(44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53, "Destinatario");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Medio");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](59, ReportesNotificacionesComponent_div_126_tr_59_Template, 16, 10, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 204)(61, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62, "Resumen Ejecutivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 205)(64, "div", 206)(65, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, "Total Notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 206)(70, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "Emitidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 206)(75, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78, "Entregadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 206)(80, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](83, "Tasa de Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "div", 126)(85, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_126_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarReporteCompletoPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](87, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](88, " Exportar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](89, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_126_Template_button_click_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarReporteCompletoExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](90, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](91, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92, " Exportar Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_126_Template_button_click_93_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.enviarReportePorCorreo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](94, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](95, "\uD83D\uDCE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96, " Enviar por Correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](15, 12, ctx_r1.reporteDetallado.fecha_inicio || ctx_r1.filtros.fecha_inicio, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](16, 15, ctx_r1.reporteDetallado.fecha_fin || ctx_r1.filtros.fecha_fin, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.tipo_notificacion) || ctx_r1.filtros.tipo_notificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.estado) || ctx_r1.filtros.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r1.reporteDetallado.filtros == null ? null : ctx_r1.reporteDetallado.filtros.destinatario) || ctx_r1.filtros.destinatario);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.reporteDetallado.detalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"]((ctx_r1.reporteDetallado.resumen == null ? null : ctx_r1.reporteDetallado.resumen.total) || ctx_r1.estadisticas.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"]((ctx_r1.reporteDetallado.resumen == null ? null : ctx_r1.reporteDetallado.resumen.emitidas) || ctx_r1.estadisticas.emitidas);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"]((ctx_r1.reporteDetallado.resumen == null ? null : ctx_r1.reporteDetallado.resumen.entregadas) || ctx_r1.estadisticas.entregadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", (ctx_r1.reporteDetallado.resumen == null ? null : ctx_r1.reporteDetallado.resumen.tasa_entrega) || (ctx_r1.estadisticas.total > 0 ? (ctx_r1.estadisticas.entregadas / ctx_r1.estadisticas.total * 100).toFixed(1) : 0), "%");
  }
}
function ReportesNotificacionesComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 210)(1, "div", 211)(2, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_div_127_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.isError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
class ReportesNotificacionesComponent {
  themeService;
  moduleLoader;
  loadingService;
  moduleName = 'Gestión de Reportes y Estadísticas';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService);
  catalogoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_catalogo_service__WEBPACK_IMPORTED_MODULE_10__.CatalogoService);
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  subscriptions = [];
  // Estado de UI
  isLoading = false;
  isError = false;
  errorMessage = '';
  currentTheme = 'light';
  // Notificaciones
  notificaciones = [];
  totalNotificaciones = 0;
  paginaActual = 1;
  itemsPorPagina = 10;
  totalPaginas = 1;
  // Catálogos
  tiposNotificacion = [];
  denunciasDisponibles = [];
  // Estadísticas
  estadisticas = {
    total: 0,
    emitidas: 0,
    pendientes: 0,
    canceladas: 0,
    entregadas: 0
  };
  // Filtros
  filtros = {
    fecha_inicio: '',
    fecha_fin: '',
    tipo_notificacion: undefined,
    estado: undefined,
    destinatario: ''
  };
  // Estados posibles
  estadosPosibles = [{
    value: 'EMITIDA',
    label: 'Emitida'
  }, {
    value: 'PENDIENTE',
    label: 'Pendiente'
  }, {
    value: 'CANCELADA',
    label: 'Cancelada'
  }, {
    value: 'ENTREGADA',
    label: 'Entregada'
  }];
  mediosNotificacion = ['CORREO_ELECTRÓNICO', 'NOTIFICACIÓN_PERSONAL', 'CARTA_CERTIFICADA', 'MENSAJE_TEXTO', 'OFICIO'];
  // Modales
  showDenunciaPreviewModal = false;
  showNotificacionModal = false;
  showCancelModal = false;
  showReporteModal = false;
  // Datos de formulario
  notificacionFormData = {
    denuncia_id: undefined,
    tipo_notificacion_id: undefined,
    fecha_emision: '',
    destinatario: '',
    medio: '',
    contenido: '',
    observaciones: '',
    estado: 'EMITIDA'
  };
  isEditing = false;
  currentNotificacionId = null;
  notificacionACancelar = null;
  motivoCancelacion = '';
  denunciaSeleccionada = null;
  denunciaPreview = null;
  // Reporte detallado
  reporteDetallado = null;
  // Componentes compartidos
  isSidebarCollapsed = false;
  isDarkTheme = false;
  showHelpSupport = false;
  isMinimized = false;
  isSearchOpen = false;
  searchQuery = '';
  searchResults = [];
  showMinimizeNotification = false;
  constructor(themeService, moduleLoader, loadingService) {
    this.themeService = themeService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
  }
  ngOnInit() {
    this.cargarDatosIniciales();
    this.setupThemeSubscription();
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
    const hasContent = document.querySelector('.reportes-container, .main-content, app-reportes-notificaciones');
    const hasData = document.querySelector('.control-panel, .stats-container, .table-container, .data-table');
    console.log(`🔍 [ReportesNotificaciones] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  cargarDatosIniciales() {
    this.cargarTiposNotificacion();
    this.cargarDenunciasDisponibles();
    this.cargarNotificaciones();
  }
  cargarTiposNotificacion() {
    this.subscriptions.push(this.catalogoService.getTiposNotificacion().subscribe({
      next: tipos => {
        this.tiposNotificacion = tipos;
      },
      error: err => {
        console.error('Error cargando tipos:', err);
        this.mostrarError('Error al cargar los tipos de notificación');
      }
    }));
  }
  cargarDenunciasDisponibles() {
    this.subscriptions.push(this.notificationService.obtenerDenunciasDisponibles().subscribe({
      next: denuncias => {
        this.denunciasDisponibles = denuncias;
      },
      error: err => {
        console.error('Error cargando denuncias:', err);
        this.mostrarError('Error al cargar las denuncias disponibles');
      }
    }));
  }
  cargarNotificaciones() {
    this.isLoading = true;
    this.isError = false;
    this.subscriptions.push(this.notificationService.listarNotificaciones(this.filtros, this.paginaActual, this.itemsPorPagina).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isLoading = false)).subscribe({
      next: response => {
        this.notificaciones = response.data;
        this.totalNotificaciones = response.pagination.total;
        this.totalPaginas = response.pagination.last_page;
        this.estadisticas = response.estadisticas;
      },
      error: err => {
        console.error('Error cargando notificaciones:', err);
        this.mostrarError('Error al cargar las notificaciones');
      }
    }));
  }
  aplicarFiltros() {
    this.paginaActual = 1;
    this.cargarNotificaciones();
  }
  limpiarFiltros() {
    this.filtros = {
      fecha_inicio: '',
      fecha_fin: '',
      tipo_notificacion: undefined,
      estado: undefined,
      destinatario: ''
    };
    this.aplicarFiltros();
  }
  cambiarPagina(pagina) {
    if (pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaActual = pagina;
    this.cargarNotificaciones();
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
      this.cargarNotificaciones();
    }
  }
  emitirNuevaNotificacion() {
    this.isEditing = false;
    this.currentNotificacionId = null;
    this.limpiarFormularioNotificacion();
    const ahora = new Date();
    ahora.setMinutes(ahora.getMinutes() - ahora.getTimezoneOffset());
    this.notificacionFormData.fecha_emision = ahora.toISOString().slice(0, 16);
    this.showNotificacionModal = true;
  }
  editarNotificacion(notificacion) {
    this.isEditing = true;
    this.currentNotificacionId = notificacion.notificacion_id;
    this.notificacionFormData = {
      denuncia_id: notificacion.denuncia_id,
      tipo_notificacion_id: notificacion.tipo_notificacion_id,
      fecha_emision: new Date(notificacion.fecha_emision).toISOString().slice(0, 16),
      destinatario: notificacion.destinatario,
      medio: notificacion.medio,
      contenido: notificacion.contenido,
      observaciones: notificacion.observaciones,
      estado: notificacion.estado
    };
    if (notificacion.denuncia) {
      this.denunciaPreview = notificacion.denuncia;
    }
    this.showNotificacionModal = true;
  }
  guardarNotificacion() {
    if (!this.validarFormulario()) return;
    this.isLoading = true;
    const observable = this.isEditing ? this.notificationService.actualizarNotificacion(this.currentNotificacionId, this.notificacionFormData) : this.notificationService.crearNotificacion(this.notificacionFormData);
    this.subscriptions.push(observable.subscribe({
      next: () => {
        this.cerrarNotificacionModal();
        this.cargarNotificaciones();
        this.isLoading = false;
      },
      error: err => {
        console.error('Error guardando notificación:', err);
        this.mostrarError(err.error?.message || 'Error al guardar la notificación');
        this.isLoading = false;
      }
    }));
  }
  cancelarNotificacion(id, motivo) {
    this.isLoading = true;
    this.subscriptions.push(this.notificationService.cancelarNotificacion(id, motivo).subscribe({
      next: () => {
        this.cerrarCancelModal();
        this.cargarNotificaciones();
        this.isLoading = false;
      },
      error: err => {
        console.error('Error cancelando notificación:', err);
        this.mostrarError(err.error?.message || 'Error al cancelar la notificación');
        this.isLoading = false;
      }
    }));
  }
  verDetalles(id) {
    // Navegar a la página de detalle de la notificación
    this.router.navigate(['/dashboard/notificaciones', id]);
  }
  exportarPDF(id) {
    // Usar generarConstancia que ahora funciona
    this.generarConstancia(id);
  }
  descargarBlob(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  exportarExcel() {
    this.isLoading = true;
    this.notificationService.exportarExcel(this.filtros).subscribe({
      next: blob => {
        this.descargarBlob(blob, `reporte_notificaciones_${new Date().toISOString().slice(0, 19)}.xlsx`);
        this.isLoading = false;
      },
      error: err => {
        console.error('Error exportando Excel:', err);
        this.mostrarError('Error al exportar el reporte Excel');
        this.isLoading = false;
      }
    });
  }
  exportarExcelIndividual(id) {
    this.isLoading = true;
    this.notificationService.exportarExcelIndividual(id).subscribe({
      next: blob => {
        this.descargarBlob(blob, `notificacion_${id}.xlsx`);
        this.isLoading = false;
      },
      error: err => {
        console.error('Error exportando Excel:', err);
        this.mostrarError('Error al exportar Excel');
        this.isLoading = false;
      }
    });
  }
  generarConstancia(id) {
    this.isLoading = true;
    this.notificationService.generarConstancia(id).subscribe({
      next: blob => {
        this.descargarBlob(blob, `constancia_notificacion_${id}.pdf`);
        this.isLoading = false;
        this.mostrarExito('Constancia generada exitosamente');
      },
      error: err => {
        console.error('Error generando constancia:', err);
        this.mostrarError(err.error?.message || 'Error al generar la constancia');
        this.isLoading = false;
      }
    });
  }
  exportarReporteCompletoPDF() {
    this.isLoading = true;
    this.notificationService.exportarReporteCompletoPDF(this.filtros).subscribe({
      next: blob => {
        this.descargarBlob(blob, `reporte_completo_${new Date().toISOString().slice(0, 19)}.pdf`);
        this.isLoading = false;
      },
      error: err => {
        console.error('Error exportando PDF:', err);
        this.mostrarError('Error al exportar PDF');
        this.isLoading = false;
      }
    });
  }
  exportarReporteCompletoExcel() {
    this.isLoading = true;
    this.notificationService.exportarReporteCompletoExcel(this.filtros).subscribe({
      next: blob => {
        this.descargarBlob(blob, `reporte_completo_${new Date().toISOString().slice(0, 19)}.xlsx`);
        this.isLoading = false;
      },
      error: err => {
        console.error('Error exportando Excel:', err);
        this.mostrarError('Error al exportar Excel');
        this.isLoading = false;
      }
    });
  }
  enviarReportePorCorreo() {
    const email = prompt('Ingrese el correo electrónico:');
    if (email && this.validateEmail(email)) {
      this.isLoading = true;
      this.notificationService.enviarReportePorCorreo(this.filtros, email).subscribe({
        next: () => {
          this.mostrarExito(`Reporte enviado a ${email}`);
          this.isLoading = false;
        },
        error: err => {
          console.error('Error enviando reporte:', err);
          this.mostrarError('Error al enviar el reporte');
          this.isLoading = false;
        }
      });
    } else if (email) {
      this.mostrarError('Correo electrónico inválido');
    }
  }
  mostrarExito(mensaje) {
    alert(mensaje); // O usar MatSnackBar
  }
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  generarReporteGeneral() {
    this.isLoading = true;
    this.subscriptions.push(this.notificationService.obtenerReporteDetallado(this.filtros).subscribe({
      next: reporte => {
        this.reporteDetallado = reporte;
        this.showReporteModal = true;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error generando reporte:', err);
        this.mostrarError('Error al generar el reporte');
        this.isLoading = false;
      }
    }));
  }
  previsualizarDenuncia(denunciaId) {
    const denuncia = this.denunciasDisponibles.find(d => d.id_denuncia === denunciaId);
    if (denuncia) {
      this.denunciaSeleccionada = denuncia;
      this.showDenunciaPreviewModal = true;
    }
  }
  cargarDenunciaSeleccionada() {
    if (this.notificacionFormData.denuncia_id) {
      this.denunciaPreview = this.denunciasDisponibles.find(d => d.id_denuncia === this.notificacionFormData.denuncia_id);
    } else {
      this.denunciaPreview = null;
    }
  }
  buscarDenuncia() {
    if (this.notificacionFormData.denuncia_id) {
      this.cargarDenunciaSeleccionada();
    } else {
      alert('Seleccione una denuncia primero');
    }
  }
  continuarConNotificacion() {
    if (this.denunciaSeleccionada) {
      this.notificacionFormData.denuncia_id = this.denunciaSeleccionada.id_denuncia;
      this.denunciaPreview = this.denunciaSeleccionada;
      this.cerrarDenunciaPreviewModal();
      this.showNotificacionModal = true;
    }
  }
  descargarDocumento(id) {
    console.log('Descargando documento:', id);
    alert(`Descargando documento #${id}`);
  }
  // Búsqueda
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      this.searchResults = this.denunciasDisponibles.filter(denuncia => denuncia.numero_denuncia?.toLowerCase().includes(this.searchQuery.toLowerCase()) || denuncia.denunciante_nombre?.toLowerCase().includes(this.searchQuery.toLowerCase())).slice(0, 5);
    }
  }
  verDetallesDenuncia(idDenuncia) {
    this.previsualizarDenuncia(idDenuncia);
    this.closeSearchModal();
  }
  // Métodos auxiliares
  getTipoNombre(tipoId) {
    const tipo = this.tiposNotificacion.find(t => t.tipo_notificacion_id === tipoId || t.id === tipoId);
    return tipo?.nombre || 'Desconocido';
  }
  getTipoClass(tipoId) {
    const clases = {
      1: 'tipo-email',
      2: 'tipo-personal',
      3: 'tipo-carta',
      4: 'tipo-sms',
      5: 'tipo-oficio'
    };
    return clases[tipoId] || 'tipo-desconocido';
  }
  getEstadoNombre(estado) {
    const estados = {
      'EMITIDA': 'Emitida',
      'PENDIENTE': 'Pendiente',
      'CANCELADA': 'Cancelada',
      'ENTREGADA': 'Entregada'
    };
    return estados[estado] || estado;
  }
  getEstadoClass(estado) {
    const clases = {
      'EMITIDA': 'estado-emitida',
      'PENDIENTE': 'estado-pendiente',
      'CANCELADA': 'estado-cancelada',
      'ENTREGADA': 'estado-entregada'
    };
    return clases[estado] || 'estado-desconocido';
  }
  getEstadoDenunciaClass(estado) {
    const clases = {
      'EN INVESTIGACIÓN': 'estado-activa',
      'EN TRÁMITE': 'estado-en-proceso',
      'RESUELTA': 'estado-resuelta',
      'ARCHIVADA': 'estado-archivada'
    };
    return clases[estado] || 'estado-desconocido';
  }
  validarFormulario() {
    if (!this.notificacionFormData.denuncia_id) {
      this.mostrarError('Debe seleccionar una denuncia');
      return false;
    }
    if (!this.notificacionFormData.tipo_notificacion_id) {
      this.mostrarError('Debe seleccionar un tipo de notificación');
      return false;
    }
    if (!this.notificacionFormData.destinatario?.trim()) {
      this.mostrarError('El destinatario es requerido');
      return false;
    }
    if (!this.notificacionFormData.medio) {
      this.mostrarError('Debe seleccionar un medio de notificación');
      return false;
    }
    if (!this.notificacionFormData.fecha_emision) {
      this.mostrarError('La fecha de emisión es requerida');
      return false;
    }
    return true;
  }
  limpiarFormularioNotificacion() {
    this.notificacionFormData = {
      denuncia_id: undefined,
      tipo_notificacion_id: undefined,
      fecha_emision: '',
      destinatario: '',
      medio: '',
      contenido: '',
      observaciones: '',
      estado: 'EMITIDA'
    };
    this.denunciaPreview = null;
  }
  mostrarError(mensaje) {
    this.isError = true;
    this.errorMessage = mensaje;
    setTimeout(() => this.isError = false, 5000);
  }
  // Getters
  get notificacionesPaginadas() {
    return this.notificaciones;
  }
  get totalItems() {
    return this.totalNotificaciones;
  }
  get notificacionesEmitidas() {
    return this.estadisticas.emitidas;
  }
  get notificacionesPendientes() {
    return this.estadisticas.pendientes;
  }
  get notificacionesCanceladas() {
    return this.estadisticas.canceladas;
  }
  get notificacionesEntregadas() {
    return this.estadisticas.entregadas;
  }
  // Métodos de UI para modales
  cerrarNotificacionModal() {
    this.showNotificacionModal = false;
    this.limpiarFormularioNotificacion();
    this.isEditing = false;
    this.currentNotificacionId = null;
  }
  cerrarDenunciaPreviewModal() {
    this.showDenunciaPreviewModal = false;
    this.denunciaSeleccionada = null;
  }
  abrirModalCancelar(id) {
    this.notificacionACancelar = id;
    this.motivoCancelacion = '';
    this.showCancelModal = true;
  }
  cerrarCancelModal() {
    this.showCancelModal = false;
    this.notificacionACancelar = null;
    this.motivoCancelacion = '';
  }
  confirmarCancelacion() {
    if (this.notificacionACancelar && this.motivoCancelacion.trim()) {
      this.cancelarNotificacion(this.notificacionACancelar, this.motivoCancelacion);
    }
  }
  cerrarReporteModal() {
    this.showReporteModal = false;
    this.reporteDetallado = null;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  // Métodos del menú y header
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
    if (!this.showHelpSupport) {
      this.isMinimized = false;
    }
  }
  onToggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
  onToggleNotifications() {
    // Implementar
  }
  onToggleUserMenu() {
    // Implementar
  }
  onMarkAllAsRead() {
    // Implementar
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
  }
  minimizeToBubble() {
    this.isMinimized = true;
    this.showMinimizeNotification = true;
    setTimeout(() => {
      this.showMinimizeNotification = false;
    }, 3000);
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
    if (event.target.classList.contains('modal-overlay-sigpaz')) {
      this.minimizeToBubble();
    }
  }
  static ɵfac = function ReportesNotificacionesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReportesNotificacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_16__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_17__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_18__.LoadingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: ReportesNotificacionesComponent,
    selectors: [["app-reportes-notificaciones"]],
    decls: 129,
    vars: 36,
    consts: [["notificacionForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "reportes-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "control-panel"], [1, "control-grid"], [1, "control-item"], ["for", "filtro-fecha-inicio"], ["type", "date", "id", "filtro-fecha-inicio", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "filtro-fecha-fin"], ["type", "date", "id", "filtro-fecha-fin", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "filtro-tipo"], ["id", "filtro-tipo", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "filtro-estado"], ["id", "filtro-estado", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "EMITIDA"], ["value", "PENDIENTE"], ["value", "CANCELADA"], ["value", "ENTREGADA"], [1, "btn", "btn-link", 3, "click"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], ["class", "error-toast", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar notificaciones...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "id-cell"], [1, "id-icon"], [1, "denuncia-cell"], [1, "denuncia-icon"], ["href", "javascript:void(0)", 1, "denuncia-link", 3, "click"], [1, "tipo-badge"], [1, "medio-cell"], [1, "estado-badge"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Ver Detalles", 1, "btn-action", "view", 3, "click"], ["title", "Exportar PDF", 1, "btn-action", "pdf", 3, "click"], ["title", "Exportar Excel", 1, "btn-action", "excel", 3, "click"], ["title", "Generar Constancia", 1, "btn-action", "constancia", 3, "click"], ["class", "btn-action cancel", "title", "Cancelar", 3, "click", 4, "ngIf"], ["title", "Cancelar", 1, "btn-action", "cancel", 3, "click"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "empty-state"], [1, "empty-icon"], [1, "loading-state"], [1, "spinner"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], ["class", "denuncia-preview", 4, "ngIf"], [1, "modal-footer"], [1, "footer-right"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "denuncia-preview"], [1, "denuncia-header"], [1, "denuncia-title"], [1, "denuncia-estado"], [1, "denuncia-metadata"], [1, "metadata-item"], [1, "metadata-label"], [1, "metadata-value"], [1, "denuncia-body"], [1, "section"], [1, "denuncia-text"], [1, "ubicacion-grid"], [1, "ubicacion-item"], [1, "ubicacion-label"], [1, "ubicacion-value"], ["class", "section", 4, "ngIf"], [1, "involucrados-list"], ["class", "involucrado-item", 4, "ngFor", "ngForOf"], [1, "involucrado-item"], [1, "involucrado-nombre"], [1, "involucrado-rol"], [1, "documentos-list"], ["class", "documento-item", 4, "ngFor", "ngForOf"], [1, "documento-item"], [1, "documento-icon"], [1, "documento-nombre"], [1, "btn-download", 3, "click"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "id_denuncia", 1, "form-label"], [1, "required"], [1, "denuncia-selector"], ["id", "id_denuncia", "name", "denuncia_id", "required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["class", "denuncia-preview-mini", 4, "ngIf"], ["for", "id_tipo_notificacion", 1, "form-label"], ["id", "id_tipo_notificacion", "name", "tipo_notificacion_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "destinatario", 1, "form-label"], ["type", "text", "id", "destinatario", "name", "destinatario", "required", "", "placeholder", "Nombre completo del destinatario", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "medio_notificacion", 1, "form-label"], ["id", "medio_notificacion", "name", "medio", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "CORREO_ELECTR\u00D3NICO"], ["value", "NOTIFICACI\u00D3N_PERSONAL"], ["value", "CARTA_CERTIFICADA"], ["value", "MENSAJE_TEXTO"], ["value", "OFICIO"], ["for", "fecha_emision", 1, "form-label"], ["type", "datetime-local", "id", "fecha_emision", "name", "fecha_emision", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "5", "placeholder", "Observaciones adicionales para la notificaci\u00F3n...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "denuncia-preview-mini"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], ["for", "motivo_cancelacion", 1, "form-label"], ["id", "motivo_cancelacion", "rows", "3", "placeholder", "Especifique el motivo de la cancelaci\u00F3n...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "modal-container", "modal-extra-large"], [1, "reporte-options"], [1, "reporte-periodo"], [1, "reporte-filtros"], [1, "filtros-list"], ["class", "filtro-tag", 4, "ngIf"], [1, "reporte-graficos"], [1, "grafico-container"], [1, "grafico-placeholder"], [1, "grafico-simulado"], [1, "reporte-tabla-detalle"], [1, "reporte-resumen"], [1, "resumen-grid"], [1, "resumen-item"], [1, "resumen-value"], [1, "resumen-label"], [1, "filtro-tag"], [1, "error-toast"], [1, "error-toast-content"], [1, "error-icon"], [1, "error-message"], [1, "error-close", 3, "click"]],
    template: function ReportesNotificacionesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("toggleSidebar", function ReportesNotificacionesComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function ReportesNotificacionesComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("toggleNotifications", function ReportesNotificacionesComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function ReportesNotificacionesComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function ReportesNotificacionesComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function ReportesNotificacionesComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ReportesNotificacionesComponent_div_4_Template, 13, 6, "div", 5)(5, ReportesNotificacionesComponent_div_5_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\uD83D\uDCCA Reportes de Notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Gesti\u00F3n y generaci\u00F3n de reportes del sistema de notificaciones SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_Template_button_click_14_listener() {
          return ctx.emitirNuevaNotificacion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "\uD83D\uDCE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " Emitir Notificaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_Template_button_click_18_listener() {
          return ctx.generarReporteGeneral();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "\uD83D\uDCC8");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, " Reporte General ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Fecha Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtros.fecha_inicio, $event) || (ctx.filtros.fecha_inicio = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 18)(29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Fecha Fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtros.fecha_fin, $event) || (ctx.filtros.fecha_fin = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 18)(33, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Tipo Notificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_Template_select_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtros.tipo_notificacion, $event) || (ctx.filtros.tipo_notificacion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ReportesNotificacionesComponent_option_38_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 18)(40, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ReportesNotificacionesComponent_Template_select_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtros.estado, $event) || (ctx.filtros.estado = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "Emitida");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Cancelada");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Entregada");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 18)(54, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_Template_button_click_54_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, " Filtrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_Template_button_click_58_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 34)(61, "div", 35)(62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65, "Total Notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](66, "div", 35)(67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70, "Emitidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 35)(72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](75, "Pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 35)(77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80, "Canceladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 35)(82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85, "Entregadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 38)(87, "div", 39)(88, "div", 40)(89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "\uD83D\uDCCB Notificaciones Registradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "div", 42)(94, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ReportesNotificacionesComponent_Template_button_click_94_listener() {
          return ctx.exportarExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96, "\uD83D\uDCE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97, " Exportar Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "div", 43)(99, "table", 44)(100, "thead")(101, "tr")(102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105, "Denuncia");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](107, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](109, "Fecha Emisi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111, "Destinatario");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](113, "Medio");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](115, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](116, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](117, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](119, ReportesNotificacionesComponent_tr_119_Template, 41, 15, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](120, ReportesNotificacionesComponent_div_120_Template, 7, 3, "div", 47)(121, ReportesNotificacionesComponent_div_121_Template, 11, 0, "div", 48)(122, ReportesNotificacionesComponent_div_122_Template, 4, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](123, ReportesNotificacionesComponent_div_123_Template, 16, 3, "div", 50)(124, ReportesNotificacionesComponent_div_124_Template, 74, 16, "div", 50)(125, ReportesNotificacionesComponent_div_125_Template, 25, 5, "div", 50)(126, ReportesNotificacionesComponent_div_126_Template, 97, 18, "div", 50)(127, ReportesNotificacionesComponent_div_127_Template, 8, 2, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](128, "app-footer", 52);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.fecha_inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.fecha_fin);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.tipo_notificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.tiposNotificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.emitidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.pendientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.canceladas);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.entregadas);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx.notificaciones.length, " registros mostrados (", ctx.estadisticas.total, " total)");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.notificaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.totalPaginas > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.notificaciones.length === 0 && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showDenunciaPreviewModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showNotificacionModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showCancelModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showReporteModal && ctx.reporteDetallado);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_11__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_14__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: [".dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed {\n  margin-left: 20px;\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n.dashboard-container .main-content {\n  flex: 1;\n  margin-top: 66px;\n  margin-left: 280px;\n  width: calc(100% - 280px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n}\n.reportes-container {\n  min-height: 100vh;\n  width: 100%;\n  padding: 24px;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.dark-theme .header {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary, #1f2937);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dark-theme .header .header-content .page-title {\n  color: var(--text-primary, #f9fafb);\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-secondary, #6b7280);\n  margin: 0;\n}\n.dark-theme .header .header-content .page-subtitle {\n  color: var(--text-secondary, #d1d5db);\n}\n.header .header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.control-panel {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));\n}\n.dark-theme .control-panel {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.control-panel .control-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .control-panel .control-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .control-panel .control-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.control-panel .control-grid .control-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.control-panel .control-grid .control-item:last-child {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 12px;\n}\n.control-panel .control-grid .control-item label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary, #6b7280);\n  font-size: 14px;\n}\n.dark-theme .control-panel .control-grid .control-item label {\n  color: var(--text-secondary, #d1d5db);\n}\n.control-panel .control-grid .control-item .form-input,\n.control-panel .control-grid .control-item .form-select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 8px;\n  background: var(--input-bg, #ffffff);\n  color: var(--text-primary, #1f2937);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.control-panel .control-grid .control-item .form-input:focus,\n.control-panel .control-grid .control-item .form-select:focus {\n  outline: none;\n  border-color: var(--primary, #4f46e5);\n  box-shadow: var(--input-focus-shadow, 0 0 0 3px rgba(79, 70, 229, 0.1));\n}\n.control-panel .control-grid .control-item .form-input::placeholder,\n.control-panel .control-grid .control-item .form-select::placeholder {\n  color: var(--placeholder-color, #9ca3af);\n}\n.dark-theme .control-panel .control-grid .control-item .form-input,\n.dark-theme .control-panel .control-grid .control-item .form-select {\n  background: var(--input-bg, #1f2937);\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.control-panel .control-grid .control-item .btn-link {\n  background: none;\n  border: none;\n  color: var(--primary, #4f46e5);\n  cursor: pointer;\n  font-size: 14px;\n  padding: 8px 0;\n  text-decoration: underline;\n  transition: color 0.3s;\n}\n.control-panel .control-grid .control-item .btn-link:hover {\n  color: var(--primary-hover, #6366f1);\n}\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container .stat-card {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.stats-container .stat-card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));\n}\n.stats-container .stat-card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  opacity: 0.8;\n}\n.dark-theme .stats-container .stat-card {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.stats-container .stat-card .stat-value {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--primary, #4f46e5);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.dark-theme .stats-container .stat-card .stat-value {\n  color: var(--primary, #818cf8);\n}\n.neon-theme .stats-container .stat-card .stat-value {\n  color: #00f0ff;\n  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);\n}\n.stats-container .stat-card .stat-label {\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n  font-weight: 500;\n}\n.dark-theme .stats-container .stat-card .stat-label {\n  color: var(--text-secondary, #d1d5db);\n}\n.neon-theme .stats-container .stat-card .stat-label {\n  color: #80f6ff;\n}\n.table-container {\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));\n}\n.dark-theme .table-container {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.table-container .table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.dark-theme .table-container .table-header {\n  border-bottom: 1px solid var(--border-color, #374151);\n}\n.table-container .table-header .table-title h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dark-theme .table-container .table-header .table-title h3 {\n  color: var(--text-primary, #f9fafb);\n}\n.table-container .table-header .table-title .table-subtitle {\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n}\n.dark-theme .table-container .table-header .table-title .table-subtitle {\n  color: var(--text-secondary, #d1d5db);\n}\n.table-container .table-header .table-actions {\n  display: flex;\n  gap: 8px;\n}\n.table-container .table-responsive {\n  overflow-x: auto;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.table-container .table-responsive::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container .table-responsive::-webkit-scrollbar-track {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 4px;\n}\n.table-container .table-responsive::-webkit-scrollbar-thumb {\n  background: var(--border-color, #e5e7eb);\n  border-radius: 4px;\n}\n.table-container .table-responsive::-webkit-scrollbar-thumb:hover {\n  background: var(--text-secondary, #6b7280);\n}\n.table-container .data-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n.table-container .data-table thead {\n  background: var(--bg-tertiary, #f1f3f5);\n  border-bottom: 2px solid var(--border-color, #e5e7eb);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.dark-theme .table-container .data-table thead {\n  background: var(--bg-tertiary, #0f172a);\n  border-bottom: 2px solid var(--border-color, #374151);\n}\n.table-container .data-table thead th {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.dark-theme .table-container .data-table thead th {\n  color: var(--text-primary, #f9fafb);\n}\n.table-container .data-table thead th.text-center {\n  text-align: center;\n}\n.table-container .data-table tbody tr {\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s;\n}\n.dark-theme .table-container .data-table tbody tr {\n  border-bottom: 1px solid var(--border-color, #374151);\n}\n.table-container .data-table tbody tr:hover {\n  background: var(--bg-hover, rgba(0, 0, 0, 0.02));\n}\n.dark-theme .table-container .data-table tbody tr:hover {\n  background: var(--bg-hover, rgba(255, 255, 255, 0.02));\n}\n.table-container .data-table tbody tr:last-child {\n  border-bottom: none;\n}\n.table-container .data-table tbody tr td {\n  padding: 16px;\n  color: var(--text-primary, #1f2937);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.dark-theme .table-container .data-table tbody tr td {\n  color: var(--text-primary, #f9fafb);\n}\n.table-container .data-table tbody tr td .id-cell {\n  font-weight: 600;\n  color: var(--primary, #4f46e5);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .data-table tbody tr td .id-cell .id-icon {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.table-container .data-table tbody tr td .denuncia-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container .data-table tbody tr td .denuncia-cell .denuncia-icon {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.table-container .data-table tbody tr td .denuncia-cell .denuncia-link {\n  color: var(--primary, #4f46e5);\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.table-container .data-table tbody tr td .denuncia-cell .denuncia-link:hover {\n  color: var(--primary-hover, #6366f1);\n  text-decoration: underline;\n}\n.table-container .data-table tbody tr td .medio-cell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view {\n  background: var(--info-light, #dbeafe);\n  color: var(--info, #3b82f6);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.view:hover {\n  background: var(--info, #3b82f6);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.pdf {\n  background: var(--danger-light, #fee2e2);\n  color: var(--danger, #ef4444);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.pdf:hover {\n  background: var(--danger, #ef4444);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.excel {\n  background: var(--success-light, #dcfce7);\n  color: var(--success, #10b981);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.excel:hover {\n  background: var(--success, #10b981);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.constancia {\n  background: var(--warning-light, #fef3c7);\n  color: var(--warning, #f59e0b);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.constancia:hover {\n  background: var(--warning, #f59e0b);\n  color: white;\n  transform: scale(1.1);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.cancel {\n  background: var(--danger-light, #fee2e2);\n  color: var(--danger, #dc2626);\n}\n.table-container .data-table tbody tr .actions-cell .actions-buttons .btn-action.cancel:hover {\n  background: var(--danger, #dc2626);\n  color: white;\n  transform: scale(1.1);\n}\n.tipo-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.tipo-badge.tipo-email {\n  background: var(--info-light, #dbeafe);\n  color: var(--info, #1e40af);\n}\n.tipo-badge.tipo-personal {\n  background: var(--primary-light, #f0f9ff);\n  color: var(--primary, #0369a1);\n}\n.tipo-badge.tipo-carta {\n  background: var(--warning-light, #fef3c7);\n  color: var(--warning, #92400e);\n}\n.tipo-badge.tipo-sms {\n  background: var(--security-light, #f3e8ff);\n  color: var(--security, #7c3aed);\n}\n.tipo-badge.tipo-oficio {\n  background: var(--bg-tertiary, #f1f5f9);\n  color: var(--text-secondary, #475569);\n}\n.estado-badge {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge.estado-emitida {\n  background: var(--info-light, #dbeafe);\n  color: var(--info, #1e40af);\n}\n.estado-badge.estado-pendiente {\n  background: var(--warning-light, #fef3c7);\n  color: var(--warning, #92400e);\n}\n.estado-badge.estado-cancelada {\n  background: var(--danger-light, #fee2e2);\n  color: var(--danger, #991b1b);\n}\n.estado-badge.estado-entregada {\n  background: var(--success-light, #dcfce7);\n  color: var(--success, #166534);\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n}\n.dark-theme .pagination {\n  border-top: 1px solid var(--border-color, #374151);\n}\n.pagination .pagination-btn {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary, #1f2937);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-secondary, #f8f9fa);\n  transform: translateY(-2px);\n}\n.pagination .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dark-theme .pagination .pagination-btn {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.dark-theme .pagination .pagination-btn:hover:not(:disabled) {\n  background: var(--bg-secondary, #111827);\n}\n.pagination .pagination-pages {\n  display: flex;\n  gap: 8px;\n}\n.pagination .pagination-pages .pagination-page {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color, #e5e7eb);\n  background: var(--bg-primary, #ffffff);\n  color: var(--text-primary, #1f2937);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination .pagination-pages .pagination-page:hover:not(:disabled) {\n  background: var(--bg-secondary, #f8f9fa);\n}\n.pagination .pagination-pages .pagination-page.active {\n  background: var(--primary, #4f46e5);\n  color: white;\n  border-color: var(--primary, #4f46e5);\n  font-weight: 600;\n}\n.pagination .pagination-pages .pagination-page:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted, #9ca3af);\n}\n.dark-theme .pagination .pagination-pages .pagination-page {\n  background: var(--bg-primary, #1f2937);\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.dark-theme .pagination .pagination-pages .pagination-page:hover:not(:disabled) {\n  background: var(--bg-secondary, #111827);\n}\n.dark-theme .pagination .pagination-pages .pagination-page.active {\n  background: var(--primary, #818cf8);\n  color: white;\n  border-color: var(--primary, #818cf8);\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state .empty-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n  animation: bounce 2s infinite;\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin-bottom: 8px;\n}\n.dark-theme .empty-state h3 {\n  color: var(--text-primary, #f9fafb);\n}\n.empty-state p {\n  color: var(--text-secondary, #6b7280);\n  margin-bottom: 24px;\n}\n.dark-theme .empty-state p {\n  color: var(--text-secondary, #d1d5db);\n}\n.loading-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color, #e5e7eb);\n  border-top-color: var(--primary, #4f46e5);\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  color: var(--text-secondary, #6b7280);\n}\n.error-toast {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 3000;\n  animation: slideInRight 0.3s ease;\n}\n.error-toast .error-toast-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--danger, #ef4444);\n  color: white;\n  padding: 12px 20px;\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));\n}\n.error-toast .error-toast-content .error-icon {\n  font-size: 20px;\n}\n.error-toast .error-toast-content .error-message {\n  font-size: 14px;\n}\n.error-toast .error-toast-content .error-close {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: 50%;\n  transition: all 0.2s;\n}\n.error-toast .error-toast-content .error-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  bottom: 0;\n  background: var(--modal-overlay, rgba(0, 0, 0, 0.5));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container {\n  background: var(--modal-bg, #ffffff);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1));\n  width: 100%;\n  max-width: 800px;\n  margin-left: 100px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  animation: slideIn 0.3s ease;\n}\n.dark-theme .modal-container {\n  background: var(--modal-bg, #1f2937);\n}\n.modal-extra-large {\n  max-width: 1400px;\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  background: var(--modal-header-bg, #f8fafc);\n  flex-shrink: 0;\n}\n.dark-theme .modal-header {\n  background: var(--modal-header-bg, #111827);\n  border-bottom: 1px solid var(--border-color, #374151);\n}\n.modal-header h2 {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dark-theme .modal-header h2 {\n  color: var(--text-primary, #f9fafb);\n}\n.modal-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-secondary, #6b7280);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.modal-header .modal-close:hover {\n  background: var(--bg-secondary, #f8f9fa);\n  color: var(--danger, #ef4444);\n  transform: rotate(90deg);\n}\n.dark-theme .modal-header .modal-close {\n  color: var(--text-secondary, #d1d5db);\n}\n.dark-theme .modal-header .modal-close:hover {\n  background: var(--bg-secondary, #111827);\n}\n.modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.modal-content::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content::-webkit-scrollbar-track {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb {\n  background: var(--border-color, #e5e7eb);\n  border-radius: 4px;\n}\n.modal-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-secondary, #6b7280);\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n  background: var(--modal-footer-bg, #f8fafc);\n  flex-shrink: 0;\n  gap: 12px;\n}\n.dark-theme .modal-footer {\n  background: var(--modal-footer-bg, #111827);\n  border-top: 1px solid var(--border-color, #374151);\n}\n.modal-footer .footer-right {\n  display: flex;\n  gap: 12px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group .form-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary, #1f2937);\n}\n.form-group .form-label .required {\n  color: var(--danger, #ef4444);\n  margin-left: 2px;\n}\n.dark-theme .form-group .form-label {\n  color: var(--text-primary, #f9fafb);\n}\n.form-group .form-input,\n.form-group .form-select,\n.form-group .form-textarea {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 8px;\n  background: var(--input-bg, #ffffff);\n  color: var(--text-primary, #1f2937);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group .form-input:focus,\n.form-group .form-select:focus,\n.form-group .form-textarea:focus {\n  outline: none;\n  border-color: var(--primary, #4f46e5);\n  box-shadow: var(--input-focus-shadow, 0 0 0 3px rgba(79, 70, 229, 0.1));\n}\n.dark-theme .form-group .form-input,\n.dark-theme .form-group .form-select,\n.dark-theme .form-group .form-textarea {\n  background: var(--input-bg, #1f2937);\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.form-group .form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.denuncia-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.denuncia-preview .denuncia-header {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.dark-theme .denuncia-preview .denuncia-header {\n  background: var(--bg-secondary, #111827);\n  border-color: var(--border-color, #374151);\n}\n.denuncia-preview .denuncia-header .denuncia-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.denuncia-preview .denuncia-header .denuncia-title h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary, #1f2937);\n  margin: 0;\n}\n.dark-theme .denuncia-preview .denuncia-header .denuncia-title h3 {\n  color: var(--text-primary, #f9fafb);\n}\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-activa,\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-en-investigacion {\n  background: var(--info-light, #dbeafe);\n  color: var(--info, #1e40af);\n}\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-en-proceso,\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-en-tramite {\n  background: var(--warning-light, #fef3c7);\n  color: var(--warning, #92400e);\n}\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-resuelta {\n  background: var(--success-light, #dcfce7);\n  color: var(--success, #166534);\n}\n.denuncia-preview .denuncia-header .denuncia-title .denuncia-estado.estado-archivada {\n  background: var(--bg-tertiary, #f1f5f9);\n  color: var(--text-secondary, #475569);\n}\n.denuncia-preview .denuncia-header .denuncia-metadata {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.denuncia-preview .section h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dark-theme .denuncia-preview .section h4 {\n  color: var(--text-primary, #f9fafb);\n}\n.denuncia-preview .section .denuncia-text {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 8px;\n  padding: 16px;\n  line-height: 1.6;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.confirm-modal {\n  background: var(--modal-bg, #ffffff);\n  border-radius: 16px;\n  width: 100%;\n  max-width: 450px;\n  overflow: hidden;\n}\n.dark-theme .confirm-modal {\n  background: var(--modal-bg, #1f2937);\n}\n.confirm-modal .confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.confirm-modal .confirm-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-modal .confirm-body {\n  padding: 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.confirm-modal .confirm-body p {\n  margin-bottom: 16px;\n  color: var(--text-primary, #1f2937);\n}\n.confirm-modal .confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color, #e5e7eb);\n}\n.reporte-options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .reporte-options {\n    grid-template-columns: 1fr;\n  }\n}\n.reporte-options .reporte-periodo,\n.reporte-options .reporte-filtros {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 12px;\n  padding: 16px;\n}\n.reporte-options .reporte-periodo h4,\n.reporte-options .reporte-filtros h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.reporte-graficos {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 24px;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .reporte-graficos {\n    grid-template-columns: 1fr;\n  }\n}\n.reporte-graficos .grafico-container {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 12px;\n  padding: 16px;\n}\n.reporte-graficos .grafico-container h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.reporte-graficos .grafico-placeholder {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 8px;\n  border: 2px dashed var(--border-color, #e5e7eb);\n}\n.reporte-graficos .grafico-placeholder .grafico-simulado {\n  color: var(--text-secondary, #6b7280);\n  font-size: 16px;\n}\n.reporte-tabla-detalle {\n  margin-bottom: 24px;\n}\n.reporte-tabla-detalle h4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.reporte-resumen {\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 12px;\n  padding: 20px;\n  margin-top: 24px;\n}\n.reporte-resumen .resumen-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-top: 16px;\n}\n@media (max-width: 768px) {\n  .reporte-resumen .resumen-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.reporte-resumen .resumen-grid .resumen-item {\n  text-align: center;\n  padding: 12px;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 8px;\n}\n.reporte-resumen .resumen-grid .resumen-item .resumen-value {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--primary, #4f46e5);\n}\n.reporte-resumen .resumen-grid .resumen-item .resumen-label {\n  font-size: 12px;\n  color: var(--text-secondary, #6b7280);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn .btn-icon {\n  font-size: 16px;\n}\n.btn-primary {\n  background: var(--gradient-primary, linear-gradient(135deg, #4f46e5, #6366f1));\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));\n}\n.btn-secondary {\n  background: var(--bg-tertiary, #f1f3f5);\n  color: var(--text-primary, #1f2937);\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-secondary, #f8f9fa);\n}\n.btn-cancel {\n  background: var(--bg-secondary, #f8f9fa);\n  color: var(--text-primary, #1f2937);\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.btn-cancel:hover:not(:disabled) {\n  background: var(--bg-tertiary, #f1f3f5);\n}\n.btn-danger {\n  background: var(--gradient-danger, linear-gradient(135deg, #ef4444, #dc2626));\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.denuncia-selector {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.denuncia-selector .form-select {\n  flex: 1;\n}\n.denuncia-preview-mini {\n  margin-top: 12px;\n  padding: 12px;\n  background: var(--bg-secondary, #f8f9fa);\n  border-radius: 8px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.denuncia-preview-mini h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.denuncia-preview-mini p {\n  margin: 4px 0;\n  font-size: 13px;\n}\n.search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  z-index: 1;\n  background: var(--bg-primary, #ffffff);\n  border-radius: 12px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  overflow: hidden;\n}\n.dark-theme .search-modal .search-modal-content {\n  background: var(--bg-primary, #1f2937);\n}\n.search-modal .search-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n}\n.search-modal .search-modal-header .search-input-container {\n  flex: 1;\n  position: relative;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  width: 100%;\n  padding: 14px 52px 14px 48px;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n  background: var(--input-bg, #ffffff);\n  color: var(--text-primary, #1f2937);\n  font-size: 16px;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input:focus {\n  outline: none;\n  border-color: var(--primary, #4f46e5);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: var(--text-secondary, #6b7280);\n}\n.search-modal .search-modal-header .search-close {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--bg-secondary, #f8f9fa);\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.search-modal .search-modal-header .search-close:hover {\n  background: var(--bg-tertiary, #f1f3f5);\n  transform: rotate(90deg);\n}\n.search-modal .search-results {\n  max-height: 60vh;\n  overflow-y: auto;\n  padding: 16px;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary, #f8f9fa);\n  border: 1px solid var(--border-color, #e5e7eb);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--bg-tertiary, #f1f3f5);\n  transform: translateX(4px);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 24px;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  color: var(--text-primary, #1f2937);\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 12px;\n  color: var(--text-secondary, #6b7280);\n}\n.search-modal .search-empty {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-secondary, #6b7280);\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(106, 17, 203, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n}\n.floating-bubble.pulsing {\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 18px;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg);\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #6a11cb;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: slideDown 0.5s ease;\n}\n@media (max-width: 1024px) {\n  .reportes-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .dashboard-container .main-content {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .stats-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .reporte-graficos {\n    grid-template-columns: 1fr;\n  }\n  .reporte-resumen .resumen-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .modal-content-sigpaz {\n    min-width: 95vw;\n  }\n}\n@media (max-width: 480px) {\n  .stats-container {\n    grid-template-columns: 1fr;\n  }\n  .header-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .header-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .actions-buttons {\n    flex-wrap: wrap;\n    justify-content: center !important;\n  }\n  .denuncia-selector {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .modal-footer .footer-right {\n    flex-direction: column;\n    width: 100%;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9yZXBvcnRlcy9wYWdlcy9yZXBvcnRlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7QUFORjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQUtFO0VBSUksaUJBQUE7RUFDQSx3QkFBQTtBQU5OO0FBTEE7RUFnQkksT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBUko7QUFlQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFiRjtBQW9CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsOENBQUE7RUFDQSxvQkFBQTtBQWxCRjtBQW9CRTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUFsQko7QUFJQTtFQW1CTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXBCTjtBQXNCTTtFQUNFLG1DQUFBO0FBcEJSO0FBUkE7RUFpQ00sZUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQXRCTjtBQXdCTTtFQUNFLHFDQUFBO0FBdEJSO0FBaEJBO0VBNENJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXpCSjtBQWdDQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLDZEQUFBO0FBOUJGO0FBZ0NFO0VBQ0Usc0NBQUE7RUFDQSwwQ0FBQTtBQTlCSjtBQW9CQTtFQWNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUEvQko7QUFpQ0k7RUFBQTtJQUNFLHFDQUFBO0VB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O0lBQ0EsV0FBQTtFQTNURjtFQXlUQTtJQUtJLFdBQUE7SUFDQSx1QkFBQTtFQTNUSjtFQStUQTtJQUNFLGVBQUE7SUFDQSxrQ0FBQTtFQTdURjtFQWdVQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUE5VEY7RUFpVUE7SUFDRSxzQkFBQTtJQUNBLFdBQUE7RUEvVEY7RUFrVUE7SUFDRSxrQkFBQTtFQWhVRjtFQW1VQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFqVUY7QUFDRjtBQXVVQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBclVGO0VBdVVBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBclVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVQT1JURVMgREUgTk9USUZJQ0FDSU9ORVMgLSBFU1RJTE9TIENPTVBMRVRPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERBU0hCT0FSRCBDT05UQUlORVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgfVxuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERSBSRVBPUlRFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5yZXBvcnRlcy1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI0cHg7XG5cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBERSBSRVBPUlRFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQsIDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gIC5kYXJrLXRoZW1lICYge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICMxZjI5MzcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgfVxuXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmOWZhZmIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICNkMWQ1ZGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQU5FTCBERSBDT05UUk9MIChGaWx0cm9zKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb250cm9sLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgI2ZmZmZmZik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSk7XG5cbiAgLmRhcmstdGhlbWUgJiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IsICMzNzQxNTEpO1xuICB9XG5cbiAgLmNvbnRyb2wtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuY29udHJvbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICNkMWQ1ZGIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWlucHV0LFxuICAgICAgLmZvcm0tc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZywgI2ZmZmZmZik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjNGY0NmU1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3csIDAgMCAwIDNweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IsICM5Y2EzYWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcsICMxZjI5MzcpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjNGY0NmU1KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ob3ZlciwgIzYzNjZmMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVEFEw4PCjVNUSUNBUyBERSBOT1RJRklDQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnLCAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGY0NmU1LCAjNjM2NmYxKTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IsICMzNzQxNTEpO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSwgIzRmNDZlNSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjODE4Y2Y4KTtcbiAgICAgIH1cblxuICAgICAgLm5lb24tdGhlbWUgJiB7XG4gICAgICAgIGNvbG9yOiAjMDBmMGZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyNDAsIDI1NSwgMC41KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgI2QxZDVkYik7XG4gICAgICB9XG5cbiAgICAgIC5uZW9uLXRoZW1lICYge1xuICAgICAgICBjb2xvcjogIzgwZjZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRBQkxBIERFIE5PVElGSUNBQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20sIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSkpO1xuXG4gIC5kYXJrLXRoZW1lICYge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICMxZjI5MzcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgfVxuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgICB9XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuXG4gICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgI2QxZDVkYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOGY5ZmEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwgI2YxZjNmNSk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiAxMDtcblxuICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjMGYxNzJhKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICB9XG5cbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmOWZhZmIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi50ZXh0LWNlbnRlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkge1xuICAgICAgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3ZlciwgcmdiYSgwLCAwLCAwLCAwLjAyKSk7XG5cbiAgICAgICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlkLWNlbGwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjNGY0NmU1KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIC5pZC1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlbnVuY2lhLWNlbGwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAgICAgLmRlbnVuY2lhLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlbnVuY2lhLWxpbmsge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSwgIzRmNDZlNSk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ob3ZlciwgIzYzNjZmMSk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVkaW8tY2VsbCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucy1jZWxsIHtcbiAgICAgICAgICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgICAgICAgICAmLnZpZXcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQsICNkYmVhZmUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvLCAjM2I4MmY2KTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mbywgIzNiODJmNik7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5wZGYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCwgI2ZlZTJlMik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlciwgI2VmNDQ0NCk7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlciwgI2VmNDQ0NCk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5leGNlbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCwgI2RjZmNlNyk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MsICMxMGI5ODEpO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLCAjMTBiOTgxKTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmNvbnN0YW5jaWEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQsICNmZWYzYzcpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nLCAjZjU5ZTBiKTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZywgI2Y1OWUwYik7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJi5jYW5jZWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCwgI2ZlZTJlMik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlciwgI2RjMjYyNik7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlciwgI2RjMjYyNik7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCQURHRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGlwby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYudGlwby1lbWFpbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCwgI2RiZWFmZSk7XG4gICAgY29sb3I6IHZhcigtLWluZm8sICMxZTQwYWYpO1xuICB9XG5cbiAgJi50aXBvLXBlcnNvbmFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0LCAjZjBmOWZmKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSwgIzAzNjlhMSk7XG4gIH1cblxuICAmLnRpcG8tY2FydGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQsICNmZWYzYzcpO1xuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nLCAjOTI0MDBlKTtcbiAgfVxuXG4gICYudGlwby1zbXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY3VyaXR5LWxpZ2h0LCAjZjNlOGZmKTtcbiAgICBjb2xvcjogdmFyKC0tc2VjdXJpdHksICM3YzNhZWQpO1xuICB9XG5cbiAgJi50aXBvLW9maWNpbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksICNmMWY1ZjkpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzQ3NTU2OSk7XG4gIH1cbn1cblxuLmVzdGFkby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuZXN0YWRvLWVtaXRpZGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQsICNkYmVhZmUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmZvLCAjMWU0MGFmKTtcbiAgfVxuXG4gICYuZXN0YWRvLXBlbmRpZW50ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCwgI2ZlZjNjNyk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcsICM5MjQwMGUpO1xuICB9XG5cbiAgJi5lc3RhZG8tY2FuY2VsYWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQsICNmZWUyZTIpO1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIsICM5OTFiMWIpO1xuICB9XG5cbiAgJi5lc3RhZG8tZW50cmVnYWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0LCAjZGNmY2U3KTtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2VzcywgIzE2NjUzNCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBR0lOQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcblxuICAuZGFyay10aGVtZSAmIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgfVxuXG4gIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjZmZmZmZmKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcblxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgIzExMTgyNyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhZ2luYXRpb24tcGFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAucGFnaW5hdGlvbi1wYWdlIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjZmZmZmZmKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOGY5ZmEpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnksICM0ZjQ2ZTUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSwgIzRmNDZlNSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQsICM5Y2EzYWYpO1xuICAgICAgfVxuXG4gICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjMTExODI3KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LCAjODE4Y2Y4KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjODE4Y2Y4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUQURPIFZBQ8ODwo1PIFkgTE9BRElOR1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDhweCAyNHB4O1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgI2QxZDVkYik7XG4gICAgfVxuICB9XG59XG5cbi5sb2FkaW5nLXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG5cbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXByaW1hcnksICM0ZjQ2ZTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFUlJPUiBUT0FTVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lcnJvci10b2FzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMzAwMDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMC4zcyBlYXNlO1xuXG4gIC5lcnJvci10b2FzdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlciwgI2VmNDQ0NCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZywgMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuXG4gICAgLmVycm9yLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZXJyb3ItY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnLCAjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsLCAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuXG4gIC5kYXJrLXRoZW1lICYge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnLCAjMWYyOTM3KTtcbiAgfVxufVxuXG4ubW9kYWwtbGFyZ2Uge1xufVxuXG4ubW9kYWwtZXh0cmEtbGFyZ2Uge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcsICNmOGZhZmMpO1xuICBmbGV4LXNocmluazogMDtcblxuICAuZGFyay10aGVtZSAmIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcsICMxMTE4MjcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICMzNzQxNTEpO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyLCAjZWY0NDQ0KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgI2QxZDVkYik7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICMxMTE4MjcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDI0cHg7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjZjhmOWZhKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZywgI2Y4ZmFmYyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBnYXA6IDEycHg7XG5cbiAgLmRhcmstdGhlbWUgJiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnLCAjMTExODI3KTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgfVxuXG4gIC5mb290ZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT1JNVUxBUklPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLmZvcm0tY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuXG4gIC5mb3JtLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcblxuICAgIC5yZXF1aXJlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyLCAjZWY0NDQ0KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1pbnB1dCxcbiAgLmZvcm0tc2VsZWN0LFxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnLCAjZmZmZmZmKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnksICM0ZjQ2ZTUpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93LCAwIDAgMCAzcHggcmdiYSg3OSwgNzAsIDIyOSwgMC4xKSk7XG4gICAgfVxuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZywgIzFmMjkzNyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJFVklTVUFMSVpBQ0nDg8KTTiBERSBERU5VTkNJQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kZW51bmNpYS1wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuXG4gIC5kZW51bmNpYS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgIzExMTgyNyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgfVxuXG4gICAgLmRlbnVuY2lhLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRlbnVuY2lhLWVzdGFkbyB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICAgJi5lc3RhZG8tYWN0aXZhLFxuICAgICAgICAmLmVzdGFkby1lbi1pbnZlc3RpZ2FjaW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0LCAjZGJlYWZlKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbywgIzFlNDBhZik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmVzdGFkby1lbi1wcm9jZXNvLFxuICAgICAgICAmLmVzdGFkby1lbi10cmFtaXRlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0LCAjZmVmM2M3KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZywgIzkyNDAwZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmVzdGFkby1yZXN1ZWx0YSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCwgI2RjZmNlNyk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MsICMxNjY1MzQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5lc3RhZG8tYXJjaGl2YWRhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwgI2YxZjVmOSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNDc1NTY5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kZW51bmNpYS1tZXRhZGF0YSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLnNlY3Rpb24ge1xuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlbnVuY2lhLXRleHQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjZjhmOWZhKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTkZJUk1BQ0nDg8KTTiBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb25maXJtLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcsICNmZmZmZmYpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZGFyay10aGVtZSAmIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZywgIzFmMjkzNyk7XG4gIH1cblxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5jb25maXJtLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVBPUlRFIERFVEFMTEFET1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5yZXBvcnRlLW9wdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZXBvcnRlLXBlcmlvZG8sXG4gIC5yZXBvcnRlLWZpbHRyb3Mge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLnJlcG9ydGUtZ3JhZmljb3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZ3JhZmljby1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmdyYWZpY28tcGxhY2Vob2xkZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICNmZmZmZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcblxuICAgIC5ncmFmaWNvLXNpbXVsYWRvIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5yZXBvcnRlLXRhYmxhLWRldGFsbGUge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG5cbi5yZXBvcnRlLXJlc3VtZW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOGY5ZmEpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gIC5yZXN1bWVuLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG5cbiAgICAucmVzdW1lbi1pdGVtIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5LCAjZmZmZmZmKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgLnJlc3VtZW4tdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LCAjNGY0NmU1KTtcbiAgICAgIH1cblxuICAgICAgLnJlc3VtZW4tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSkpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCwgMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjZjFmM2Y1KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjZjhmOWZhKTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSwgI2Y4ZjlmYSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjZjFmM2Y1KTtcbiAgfVxufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlciwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCwgI2RjMjYyNikpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUxFQ1RPUiBERSBERU5VTkNJQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kZW51bmNpYS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5mb3JtLXNlbGVjdCB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4uZGVudW5jaWEtcHJldmlldy1taW5pIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5LCAjZjhmOWZhKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VBUkNIIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcblxuICAuc2VhcmNoLW1vZGFsLWJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgfVxuXG4gIC5zZWFyY2gtbW9kYWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSwgI2ZmZmZmZik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnksICMxZjI5MzcpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtbW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG5cbiAgICAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAuc2VhcmNoLW1vZGFsLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1tb2RhbC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDUycHggMTRweCA0OHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZywgI2ZmZmZmZik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnksICM0ZjQ2ZTUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtY2xlYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtY2xvc2Uge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOGY5ZmEpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwgI2YxZjNmNSk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdHMge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnNlYXJjaC1yZXN1bHQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnksICNmOGY5ZmEpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksICNmMWYzZjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAucmVzdWx0LWRldGFpbHMge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5yZXN1bHQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgIzFmMjkzNyk7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtZW1wdHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFTFAgU1VQUE9SVCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJi5taW5pbWl6ZWQtbW9kZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICYubWluaW1pemVkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YTExY2IgMCUsICMyNTc1ZmMgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLm1vZGFsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG5cbiAgICAgIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbG9hdGluZy1idWJibGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2YTExY2IgMCUsICMyNTc1ZmMgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDEwNiwgMTcsIDIwMywgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gICYucHVsc2luZyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbiAgfVxuXG4gIC5idWJibGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5idWJibGUtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLmJ1YmJsZS1ub3RpZmljYXRpb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBjb2xvcjogIzZhMTFjYjtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuNXMgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnJlcG9ydGVzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIC5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3RhdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnJlcG9ydGUtZ3JhZmljb3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnJlcG9ydGUtcmVzdW1lbiAucmVzdW1lbi1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgICBtaW4td2lkdGg6IDk1dnc7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlbnVuY2lhLXNlbGVjdG9yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLm1vZGFsLWZvb3RlciAuZm9vdGVyLXJpZ2h0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5mbG9hdGluZy1idWJibGUge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('300ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('200ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 98344:
/*!*******************************************************************!*\
  !*** ./src/app/modules/reportes/services/notification.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);





class NotificationService {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/notificaciones`;
  listarNotificaciones(filtros, page = 1, perPage = 10) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page.toString()).set('per_page', perPage.toString());
    Object.entries(filtros).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params = params.set(key, value.toString());
      }
    });
    return this.http.get(this.baseUrl, {
      params
    });
  }
  obtenerNotificacion(id) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  crearNotificacion(data) {
    return this.http.post(this.baseUrl, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  actualizarNotificacion(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  cancelarNotificacion(id, motivo) {
    return this.http.post(`${this.baseUrl}/${id}/cancelar`, {
      motivo
    });
  }
  obtenerEstadisticas(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (filtros.fecha_inicio) params = params.set('fecha_inicio', filtros.fecha_inicio);
    if (filtros.fecha_fin) params = params.set('fecha_fin', filtros.fecha_fin);
    return this.http.get(`${this.baseUrl}/estadisticas`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  obtenerTiposNotificacion() {
    return this.http.get(`${this.baseUrl}/tipos`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  obtenerDenunciasDisponibles() {
    return this.http.get(`${this.baseUrl}/denuncias-disponibles`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  generarConstancia(id) {
    return this.http.get(`${this.baseUrl}/${id}/constancia`, {
      responseType: 'blob'
    });
  }
  exportarExcelIndividual(id) {
    return this.http.get(`${this.baseUrl}/${id}/exportar-excel`, {
      responseType: 'blob'
    });
  }
  exportarExcel(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value) params = params.set(key, value.toString());
    });
    return this.http.get(`${this.baseUrl}/exportar-excel`, {
      params,
      responseType: 'blob'
    });
  }
  exportarReporteCompletoPDF(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value) params = params.set(key, value.toString());
    });
    return this.http.get(`${this.baseUrl}/reporte-completo-pdf`, {
      params,
      responseType: 'blob'
    });
  }
  exportarReporteCompletoExcel(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value) params = params.set(key, value.toString());
    });
    return this.http.get(`${this.baseUrl}/reporte-completo-excel`, {
      params,
      responseType: 'blob'
    });
  }
  enviarReportePorCorreo(filtros, email) {
    return this.http.post(`${this.baseUrl}/enviar-reporte`, {
      ...filtros,
      email
    });
  }
  obtenerReporteDetallado(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params = params.set(key, value.toString());
      }
    });
    return this.http.get(`${this.baseUrl}/reporte-detallado`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data));
  }
  static ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_reportes_pages_reportes_component_ts.js.map