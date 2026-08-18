"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_personas_pages_personas_component_ts"],{

/***/ 11003:
/*!**************************************************************!*\
  !*** ./src/app/modules/personas/pages/personas.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonasListComponent: () => (/* binding */ PersonasListComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _components_firma_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/firma-modal.component */ 54143);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-qrcode */ 12551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _services_qr_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/qr.service */ 99305);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/persona.service */ 5378);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../services/catalogo.service */ 65466);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../services/personal.service */ 45322);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../../../core/services/loading.service */ 98660);

























function PersonasListComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 70)(4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function PersonasListComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PersonasListComponent_div_4_div_11_div_1_Template, 8, 3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function PersonasListComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function PersonasListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 56)(3, "div", 57)(4, "div", 58)(5, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keyup.enter", function PersonasListComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, PersonasListComponent_div_4_button_8_Template, 2, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, PersonasListComponent_div_4_div_11_Template, 2, 1, "div", 63)(12, PersonasListComponent_div_4_div_12_Template, 2, 1, "div", 64);
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
function PersonasListComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 82)(7, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function PersonasListComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 89)(2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, PersonasListComponent_div_5_div_4_div_9_Template, 2, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function PersonasListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, PersonasListComponent_div_5_div_2_Template, 17, 0, "div", 76)(3, PersonasListComponent_div_5_div_3_Template, 3, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, PersonasListComponent_div_5_div_4_Template, 10, 3, "div", 78);
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
function PersonasListComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div")(5, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_6_div_1_Template_button_click_9_listener() {
      const notificacion_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarNotificacion(notificacion_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notificacion_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](notificacion_r9.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](notificacion_r9.icono);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](notificacion_r9.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](notificacion_r9.mensaje);
  }
}
function PersonasListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PersonasListComponent_div_6_div_1_Template, 11, 5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.notificaciones);
  }
}
function PersonasListComponent_tr_125_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 127)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.tipo_documento.nombre);
  }
}
function PersonasListComponent_tr_125_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" \uD83D\uDCE7 ", persona_r11.correo_electronico_cifrado, " ");
  }
}
function PersonasListComponent_tr_125_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", persona_r11.genero.nombre, " ");
  }
}
function PersonasListComponent_tr_125_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.getGeneroNombre(persona_r11.genero_id), " ");
  }
}
function PersonasListComponent_tr_125_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " No especificado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_tr_125_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 130)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("(", persona_r11.edad, " a\u00F1os)");
  }
}
function PersonasListComponent_tr_125_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" \uD83D\uDC70 ", persona_r11.estado_civil.nombre, " ");
  }
}
function PersonasListComponent_tr_125_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" \uD83D\uDC70 ", ctx_r1.getEstadoCivilNombre(persona_r11.estado_civil_id), " ");
  }
}
function PersonasListComponent_tr_125_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " No especificado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_tr_125_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", persona_r11.discapacidad, " ");
  }
}
function PersonasListComponent_tr_125_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_tr_125_button_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.verCodigoQR(persona_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_tr_125_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 134)(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCF5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_tr_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 104)(3, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83C\uDD94");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 106)(6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, PersonasListComponent_tr_125_div_8_Template, 3, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, PersonasListComponent_tr_125_div_14_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, PersonasListComponent_tr_125_span_16_Template, 2, 1, "span", 111)(17, PersonasListComponent_tr_125_span_17_Template, 2, 1, "span", 111)(18, PersonasListComponent_tr_125_span_18_Template, 2, 0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, PersonasListComponent_tr_125_div_22_Template, 3, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "td")(26, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, PersonasListComponent_tr_125_div_29_Template, 2, 1, "div", 114)(30, PersonasListComponent_tr_125_div_30_Template, 2, 1, "div", 114)(31, PersonasListComponent_tr_125_div_31_Template, 2, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "td")(33, "div", 115)(34, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, PersonasListComponent_tr_125_span_36_Template, 2, 1, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "td", 118)(38, "div", 119)(39, "span", 120)(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_tr_125_Template_button_click_42_listener() {
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.verDetalles(persona_r11.persona_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_tr_125_Template_button_click_45_listener() {
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.abrirModalEditar(persona_r11.persona_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, PersonasListComponent_tr_125_button_48_Template, 3, 0, "button", 123)(49, PersonasListComponent_tr_125_span_49_Template, 3, 0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_tr_125_Template_button_click_50_listener() {
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.abrirModalEliminar(persona_r11.persona_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_tr_125_Template_button_click_53_listener() {
      const persona_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.exportarPDF(persona_r11.persona_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const persona_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.numero_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.tipo_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.correo_electronico_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.genero);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !persona_r11.genero && persona_r11.genero_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !persona_r11.genero && !persona_r11.genero_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](21, 29, persona_r11.fecha_nacimiento, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.edad);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.departamento || "No especificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", persona_r11.telefono_movil_cifrado ? "\uD83D\uDCF1 " + persona_r11.telefono_movil_cifrado : "\uD83D\uDCDE " + persona_r11.telefono_fijo_cifrado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.estado_civil);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !persona_r11.estado_civil && persona_r11.estado_civil_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !persona_r11.estado_civil && !persona_r11.estado_civil_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("badge-warning", persona_r11.discapacidad && persona_r11.discapacidad.trim().length > 0 && persona_r11.discapacidad !== "NO")("badge-secondary", !persona_r11.discapacidad || persona_r11.discapacidad.trim().length === 0 || persona_r11.discapacidad === "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", persona_r11.discapacidad && persona_r11.discapacidad.trim().length > 0 && persona_r11.discapacidad !== "NO" ? "S\u00ED" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.discapacidad && persona_r11.discapacidad.trim().length > 0 && persona_r11.discapacidad !== "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("validado", persona_r11.activo === true)("no-validado", !persona_r11.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", persona_r11.activo ? "Persona validada" : "Persona no validada");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r11.activo ? "\u2705" : "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r11.codigo_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !persona_r11.codigo_qr);
  }
}
function PersonasListComponent_div_126_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_126_button_4_Template_button_click_0_listener() {
      const pagina_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cambiarPaginaNumero(pagina_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", pagina_r15 === ctx_r1.metaPaginacion.current_page);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", pagina_r15 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", pagina_r15, " ");
  }
}
function PersonasListComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 136)(1, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_126_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.metaPaginacion.current_page - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, PersonasListComponent_div_126_button_4_Template, 2, 4, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_126_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cambiarPagina(ctx_r1.metaPaginacion.current_page + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.metaPaginacion.current_page === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.metaPaginacion.current_page === ctx_r1.totalPaginas);
  }
}
function PersonasListComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 141)(1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "No hay personas registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Comience registrando una nueva persona");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_127_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.abrirModalCrear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Registrar primera persona ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_128_div_19_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const genero_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", genero_r19.genero_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", genero_r19.nombre, " ");
  }
}
function PersonasListComponent_div_128_div_19_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", estado_r20.estado_civil_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", estado_r20.nombre, " ");
  }
}
function PersonasListComponent_div_128_div_19_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", tipo_r21.tipo_documento_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", tipo_r21.nombre, " ");
  }
}
function PersonasListComponent_div_128_div_19_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_div_19_div_73_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.removerFoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.personaFormData.foto_cifrada, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function PersonasListComponent_div_128_div_19_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 196)(1, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Subir foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function PersonasListComponent_div_128_div_19_div_74_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.subirFoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_128_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 163)(3, "div", 164)(4, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " N\u00B0 Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.numero_documento, $event) || (ctx_r1.personaFormData.numero_documento = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 164)(10, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " Nombres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.nombres, $event) || (ctx_r1.personaFormData.nombres = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 164)(16, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " Apellidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.apellidos, $event) || (ctx_r1.personaFormData.apellidos = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 164)(22, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, " Fecha de Nacimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.fecha_nacimiento, $event) || (ctx_r1.personaFormData.fecha_nacimiento = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 164)(28, "label", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " G\u00E9nero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "select", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_select_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.genero_id, $event) || (ctx_r1.personaFormData.genero_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Seleccione g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, PersonasListComponent_div_128_div_19_option_35_Template, 2, 2, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 164)(37, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, " Estado Civil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "select", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_select_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.estado_civil_id, $event) || (ctx_r1.personaFormData.estado_civil_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Seleccione estado civil");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](42, PersonasListComponent_div_128_div_19_option_42_Template, 2, 2, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 163)(44, "div", 164)(45, "label", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, " Tipo de Documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "select", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_select_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.tipo_documento_id, $event) || (ctx_r1.personaFormData.tipo_documento_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "Seleccione tipo de documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, PersonasListComponent_div_128_div_19_option_52_Template, 2, 2, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 164)(54, "label", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, " Nacionalidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.nacionalidad, $event) || (ctx_r1.personaFormData.nacionalidad = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 164)(58, "label", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, " Lugar de Nacimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.lugar_nacimiento, $event) || (ctx_r1.personaFormData.lugar_nacimiento = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "div", 164)(62, "label", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, " Profesi\u00F3n/Oficio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](64, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.profesion_oficio, $event) || (ctx_r1.personaFormData.profesion_oficio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 164)(66, "label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67, " Ocupaci\u00F3n Actual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_19_Template_input_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.ocupacion_actual, $event) || (ctx_r1.personaFormData.ocupacion_actual = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 164)(70, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71, "Foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, PersonasListComponent_div_128_div_19_div_73_Template, 4, 1, "div", 191)(74, PersonasListComponent_div_128_div_19_div_74_Template, 6, 0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.numero_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.fecha_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.genero_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.generos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.estado_civil_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.estadosCiviles);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.tipo_documento_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.tiposDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.nacionalidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.lugar_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.profesion_oficio);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.ocupacion_actual);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.personaFormData.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.personaFormData.foto_cifrada);
  }
}
function PersonasListComponent_div_128_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 163)(3, "div", 164)(4, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Departamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.departamento, $event) || (ctx_r1.personaFormData.departamento = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 164)(8, "label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " Municipio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.municipio, $event) || (ctx_r1.personaFormData.municipio = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 164)(12, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Direcci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "textarea", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.direccion_cifrada, $event) || (ctx_r1.personaFormData.direccion_cifrada = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 164)(16, "label", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " C\u00F3digo Postal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.codigo_postal, $event) || (ctx_r1.personaFormData.codigo_postal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 163)(20, "div", 164)(21, "label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Tel\u00E9fono Fijo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.telefono_fijo_cifrado, $event) || (ctx_r1.personaFormData.telefono_fijo_cifrado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 164)(25, "label", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, " Tel\u00E9fono M\u00F3vil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.telefono_movil_cifrado, $event) || (ctx_r1.personaFormData.telefono_movil_cifrado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 164)(31, "label", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, " Correo Electr\u00F3nico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.correo_electronico_cifrado, $event) || (ctx_r1.personaFormData.correo_electronico_cifrado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 164)(35, "label", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, " Correo Alternativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_20_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.correo_alternativo_cifrado, $event) || (ctx_r1.personaFormData.correo_alternativo_cifrado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.departamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.municipio);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.direccion_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.codigo_postal);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.telefono_fijo_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.telefono_movil_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.correo_electronico_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.correo_alternativo_cifrado);
  }
}
function PersonasListComponent_div_128_div_21_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 240)(1, "img", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("load", function PersonasListComponent_div_128_div_21_div_13_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onQRLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 242)(3, "span", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " \u2705 QR Generado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "small", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Identificador \u00FAnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.personaFormData.codigo_qr, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function PersonasListComponent_div_128_div_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "qr-code", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 242)(3, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " \u23F3 Generando QR... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.personaFormData.qrData || "Generando...")("size", 150)("errorCorrectionLevel", "M");
  }
}
function PersonasListComponent_div_128_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 248)(1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "El c\u00F3digo QR se generar\u00E1 al hacer clic en el bot\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_div_21_div_15_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.generarCodigoQR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("spinning", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.generandoQR ? "Generando..." : "Generar C\u00F3digo QR Ahora", " ");
  }
}
function PersonasListComponent_div_128_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 252)(1, "div", 253)(2, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "El c\u00F3digo QR se genera autom\u00E1ticamente y no se puede modificar despu\u00E9s de guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function PersonasListComponent_div_128_div_21_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 252)(1, "div", 253)(2, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "QR \u00FAnico generado - No puede modificarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "small", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Este c\u00F3digo QR es permanente y no editable");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_128_div_21_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", tipo_r28.tipo_vinculo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", tipo_r28.nombre, " ");
  }
}
function PersonasListComponent_div_128_div_21_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 256)(1, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u270D\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Firma registrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_div_21_div_46_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.verFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_div_21_div_46_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.eliminarFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_128_div_21_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_div_21_button_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.abrirModalFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u270D\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Agregar Firma ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_128_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 163)(3, "div", 164)(4, "label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Discapacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "textarea", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.discapacidad, $event) || (ctx_r1.personaFormData.discapacidad = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 164)(8, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " C\u00F3digo QR \u00DAnico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "\uD83D\uDD10 No modificable");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PersonasListComponent_div_128_div_21_div_13_Template, 7, 1, "div", 220)(14, PersonasListComponent_div_128_div_21_div_14_Template, 5, 3, "div", 221)(15, PersonasListComponent_div_128_div_21_div_15_Template, 9, 4, "div", 222)(16, PersonasListComponent_div_128_div_21_div_16_Template, 6, 0, "div", 223)(17, PersonasListComponent_div_128_div_21_div_17_Template, 8, 0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 164)(19, "label", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "textarea", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.observaciones, $event) || (ctx_r1.personaFormData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 163)(23, "div", 164)(24, "label", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, " Contacto de Emergencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.nombre_contacto_emergencia, $event) || (ctx_r1.personaFormData.nombre_contacto_emergencia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 164)(28, "label", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " Parentesco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.parentesco_emergencia, $event) || (ctx_r1.personaFormData.parentesco_emergencia = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 164)(32, "label", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, " Tel\u00E9fono Emergencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.telefono_emergencia_cifrado, $event) || (ctx_r1.personaFormData.telefono_emergencia_cifrado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 164)(36, "label", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Tipo de V\u00EDnculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "select", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_select_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.personaFormData.tipo_vinculo_id, $event) || (ctx_r1.personaFormData.tipo_vinculo_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Seleccione tipo de v\u00EDnculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](41, PersonasListComponent_div_128_div_21_option_41_Template, 2, 2, "option", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 164)(43, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "Firma Digital");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, PersonasListComponent_div_128_div_21_div_46_Template, 11, 0, "div", 235)(47, PersonasListComponent_div_128_div_21_button_47_Template, 4, 0, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "div", 164)(49, "div", 237)(50, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_128_div_21_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.camposCifrados, $event) || (ctx_r1.camposCifrados = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, " Cifrar campos sensibles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.discapacidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.personaFormData.codigo_qr && !ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.personaFormData.codigo_qr && !ctx_r1.generandoQR && !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isEditing && !ctx_r1.personaFormData.codigo_qr && !ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.isEditing && ctx_r1.personaFormData.codigo_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.nombre_contacto_emergencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.parentesco_emergencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.telefono_emergencia_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaFormData.tipo_vinculo_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.tiposVinculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.personaFormData.firma_digital);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.personaFormData.firma_digital);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.camposCifrados);
  }
}
function PersonasListComponent_div_128_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cambiarTabAnterior());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " \u2190 Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loadingPersona);
  }
}
function PersonasListComponent_div_128_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cambiarTabSiguiente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Siguiente \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loadingPersona);
  }
}
function PersonasListComponent_div_128_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 143)(1, "div", 144)(2, "div", 145)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 147)(9, "div", 148)(10, "div", 149)(11, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.activeTab = "datos-personales");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, " \uD83D\uDCCB Datos Personales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.activeTab = "contacto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, " \uD83D\uDCDE Contacto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.activeTab = "adicionales");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, " \uD83D\uDCDD Informaci\u00F3n Adicional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "form", 151, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function PersonasListComponent_div_128_Template_form_ngSubmit_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.guardarPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, PersonasListComponent_div_128_div_19_Template, 75, 19, "div", 152)(20, PersonasListComponent_div_128_div_20_Template, 38, 8, "div", 152)(21, PersonasListComponent_div_128_div_21_Template, 53, 16, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 153)(23, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " Al registrar la persona, usted acepta nuestras pol\u00EDticas de protecci\u00F3n de datos personales. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, PersonasListComponent_div_128_button_26_Template, 2, 1, "button", 156)(27, PersonasListComponent_div_128_button_27_Template, 2, 1, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 157)(29, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_128_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, PersonasListComponent_div_128_span_32_Template, 2, 0, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const personaForm_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](18);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "\u270F\uFE0F Editar Persona" : "\uD83D\uDC64 Nueva Persona");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r1.activeTab === "datos-personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r1.activeTab === "contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r1.activeTab === "adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "datos-personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.activeTab !== "datos-personales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.activeTab !== "adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loadingPersona);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !personaForm_r33.form.valid || ctx_r1.loadingPersona);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loadingPersona);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditing ? "Actualizar" : "Guardar", " Persona ");
  }
}
function PersonasListComponent_app_firma_modal_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-firma-modal", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("firmaGuardada", function PersonasListComponent_app_firma_modal_129_Template_app_firma_modal_firmaGuardada_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.guardarFirma($event));
    })("modalCerrado", function PersonasListComponent_app_firma_modal_129_Template_app_firma_modal_modalCerrado_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarModalFirma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("mostrarModal", ctx_r1.mostrarModalFirma);
  }
}
function PersonasListComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 143)(1, "div", 265)(2, "div", 266)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83D\uDDD1\uFE0F CONFIRMAR ELIMINACI\u00D3N PERMANENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_130_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 268)(9, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "\u26A0\uFE0F \u00A1ATENCI\u00D3N! \u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Est\u00E1 a punto de eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "PERMANENTEMENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "p", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Esta acci\u00F3n es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "IRREVERSIBLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " y eliminar\u00E1 los datos de la base de datos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 273)(26, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_130_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_130_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.abrirModalConfirmacionFisica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" este registro de ", ctx_r1.getCurrentEntityName(), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("\"", ctx_r1.nombreConfirmacion, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Eliminando..." : "\uD83D\uDDD1\uFE0F Eliminar Permanentemente", " ");
  }
}
function PersonasListComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 143)(1, "div", 275)(2, "div", 266)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\u270D\uFE0F CONFIRMACI\u00D3N ESCRITA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_131_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarConfirmacionFisicaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 268)(9, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "p", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "\u00DALTIMO PASO - CONFIRMACI\u00D3N ESCRITA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Para eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "PERMANENTEMENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " el registro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "p", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "p", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Escriba exactamente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "\"ELIMINAR\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " en el campo siguiente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 277)(26, "input", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_131_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.confirmacionTexto, $event) || (ctx_r1.confirmacionTexto = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "p", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Esta acci\u00F3n es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "IRREVERSIBLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " y no se puede deshacer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 273)(33, "button", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_131_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarConfirmacionFisicaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_131_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.ejecutarEliminacionFisica());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("\"", ctx_r1.nombreConfirmacion, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.confirmacionTexto);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loading || ctx_r1.confirmacionTexto !== "ELIMINAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Eliminando..." : "\uD83D\uDDD1\uFE0F Confirmar Eliminaci\u00F3n", " ");
  }
}
function PersonasListComponent_div_132_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 287)(1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Generando reporte...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_132_div_39_div_7_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, key_r38));
  }
}
function PersonasListComponent_div_132_div_39_div_7_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r39 = ctx.$implicit;
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r40[key_r39]);
  }
}
function PersonasListComponent_div_132_div_39_div_7_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PersonasListComponent_div_132_div_39_div_7_tr_6_td_1_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.getReporteKeys());
  }
}
function PersonasListComponent_div_132_div_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 295)(1, "table", 296)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, PersonasListComponent_div_132_div_39_div_7_th_4_Template, 3, 3, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, PersonasListComponent_div_132_div_39_div_7_tr_6_Template, 2, 1, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.getReporteKeys());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.reporteSeleccionado.datos);
  }
}
function PersonasListComponent_div_132_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " No hay datos para mostrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_132_div_39_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 298)(1, "button", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_div_39_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.exportarReportePDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Exportar PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_div_39_div_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.exportarReporteExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Exportar Excel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loadingReporte);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.loadingReporte);
  }
}
function PersonasListComponent_div_132_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 289)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 290)(4, "p", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, PersonasListComponent_div_132_div_39_div_7_Template, 7, 2, "div", 292)(8, PersonasListComponent_div_132_div_39_div_8_Template, 2, 0, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, PersonasListComponent_div_132_div_39_div_9_Template, 9, 2, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.reporteSeleccionado.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Reporte generado: ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](6, 5, ctx_r1.reporteSeleccionado.fecha, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.reporteSeleccionado.datos && ctx_r1.reporteSeleccionado.datos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.reporteSeleccionado.datos || ctx_r1.reporteSeleccionado.datos.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.reporteSeleccionado);
  }
}
function PersonasListComponent_div_132_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 301)(1, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Seleccione un tipo de reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Haga clic en uno de los reportes para generar la informaci\u00F3n estad\u00EDstica");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 143)(1, "div", 144)(2, "div", 145)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\uD83D\uDCCA Reportes de Personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarReportesModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, PersonasListComponent_div_132_div_9_Template, 5, 0, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 280)(11, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.generarReporteEdad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "\uD83C\uDF82");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Por Edad");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "Distribuci\u00F3n por rangos de edad");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_Template_div_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.generarReporteSexo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "\uD83D\uDC6B");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Por Sexo");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Estad\u00EDsticas por g\u00E9nero");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_Template_div_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.generarReporteDepartamento());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, "\uD83D\uDDFA\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "Por Departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "Distribuci\u00F3n geogr\u00E1fica");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_132_Template_div_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.generarReporteDiscapacidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "\u267F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Discapacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "Personas con discapacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](39, PersonasListComponent_div_132_div_39_Template, 10, 8, "div", 285)(40, PersonasListComponent_div_132_div_40_Template, 7, 0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loadingReporte);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.reporteSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.reporteSeleccionado && !ctx_r1.loadingReporte);
  }
}
function PersonasListComponent_div_133_div_17_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 323)(1, "span", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u2705 Validado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PersonasListComponent_div_133_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_133_div_17_div_1_Template_div_click_0_listener() {
      const persona_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r43).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.seleccionarPersonaValidacion(persona_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 318)(4, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 320)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "span", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PersonasListComponent_div_133_div_17_div_1_div_13_Template, 3, 0, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r44 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("seleccionado", (ctx_r1.personaSeleccionadaValidacion == null ? null : ctx_r1.personaSeleccionadaValidacion.persona_id) === persona_r44.persona_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", persona_r44.nombres == null ? null : persona_r44.nombres.charAt(0), "", persona_r44.apellidos == null ? null : persona_r44.apellidos.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", persona_r44.nombres, " ", persona_r44.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Doc: ", persona_r44.numero_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](persona_r44.departamento || "Sin departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", persona_r44.identidadValidada);
  }
}
function PersonasListComponent_div_133_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PersonasListComponent_div_133_div_17_div_1_Template, 14, 9, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.resultadosValidacion);
  }
}
function PersonasListComponent_div_133_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" No se encontraron personas con \"", ctx_r1.busquedaValidacion, "\" ");
  }
}
function PersonasListComponent_div_133_div_19_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " \u26A0\uFE0F Esta persona ya tiene la identidad validada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_133_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 326)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Persona seleccionada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 327)(4, "div", 328)(5, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 330)(8, "div")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Documento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Fecha Nac.:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "G\u00E9nero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "Tel\u00E9fono:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, PersonasListComponent_div_133_div_19_div_25_Template, 2, 0, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r1.personaSeleccionadaValidacion.nombres, " ", ctx_r1.personaSeleccionadaValidacion.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.personaSeleccionadaValidacion.numero_documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](16, 7, ctx_r1.personaSeleccionadaValidacion.fecha_nacimiento, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.getGeneroNombre(ctx_r1.personaSeleccionadaValidacion.genero_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.personaSeleccionadaValidacion.telefono_movil_cifrado || "No registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.personaSeleccionadaValidacion.identidadValidada);
  }
}
function PersonasListComponent_div_133_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PersonasListComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 143)(1, "div", 303)(2, "div", 145)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\u2705 Validar Identidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_133_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarValidarIdentidadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 147)(9, "div", 304)(10, "p", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, " Seleccione una persona para validar su identidad. Una vez validada, los datos de la persona no podr\u00E1n ser editados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 306)(13, "div", 58)(14, "span", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_div_133_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.busquedaValidacion, $event) || (ctx_r1.busquedaValidacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function PersonasListComponent_div_133_Template_input_input_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.buscarPersonasValidacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, PersonasListComponent_div_133_div_17_Template, 2, 1, "div", 309)(18, PersonasListComponent_div_133_div_18_Template, 2, 1, "div", 310)(19, PersonasListComponent_div_133_div_19_Template, 26, 10, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 155)(21, "button", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_133_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarValidarIdentidadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_133_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.confirmarValidacionIdentidad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](24, PersonasListComponent_div_133_span_24_Template, 2, 0, "span", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.busquedaValidacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.resultadosValidacion.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.resultadosValidacion.length === 0 && ctx_r1.busquedaValidacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.personaSeleccionadaValidacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r1.personaSeleccionadaValidacion || ctx_r1.validandoIdentidad || ctx_r1.personaSeleccionadaValidacion.identidadValidada);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.validandoIdentidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.validandoIdentidad ? "Validando..." : "Validar Identidad", " ");
  }
}
function PersonasListComponent_div_134_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "qr-code", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", (ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.qrData) || "")("size", 250)("errorCorrectionLevel", "H");
  }
}
function PersonasListComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_134_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarQRModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_134_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 335)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "C\u00F3digo QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, PersonasListComponent_div_134_div_7_Template, 2, 3, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 338)(9, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 341)(14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_134_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarQRModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_div_134_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.descargarQR());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "Descargar QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.nombres, " ", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.codigo_qr);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.nombres, " ", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Doc: ", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.numero_documento);
  }
}
class PersonasListComponent {
  router;
  qrService;
  notificationService;
  personaService;
  catalogoService;
  personalService;
  authService;
  themeService;
  cdr;
  moduleLoader;
  loadingService;
  fb;
  moduleName = 'Gestión de Personas';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  loading = false;
  currentTheme = 'light';
  loadingPersona = false;
  loadingReporte = false;
  cargandoDatos = false;
  fotoArchivo = null;
  ultimaEntidadCargada = null;
  personaForm;
  totalItems = 0;
  currentUser = null;
  personalInfo = null;
  personaInfo = null;
  generandoQR = false;
  showQRModal = false;
  qrSeleccionado = null;
  showValidarIdentidadModal = false;
  busquedaValidacion = '';
  resultadosValidacion = [];
  personaSeleccionadaValidacion = null;
  validandoIdentidad = false;
  constructor(router, qrService, notificationService, personaService, catalogoService, personalService, authService, themeService, cdr, moduleLoader, loadingService, fb) {
    this.router = router;
    this.qrService = qrService;
    this.notificationService = notificationService;
    this.personaService = personaService;
    this.catalogoService = catalogoService;
    this.personalService = personalService;
    this.authService = authService;
    this.themeService = themeService;
    this.cdr = cdr;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.fb = fb;
    this.personaForm = this.fb.group({
      nombres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      apellidos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      numero_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fecha_nacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      telefono_movil_cifrado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      correo_electronico_cifrado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      genero_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  // Variables compartidas
  isSidebarCollapsed = false;
  isDarkTheme = false;
  showMinimizeNotification = false;
  minimizing = false;
  linksPaginacion = {
    first: '',
    last: '',
    prev: null,
    next: null
  };
  showHelpSupport = false;
  isMinimized = false;
  notificaciones = [];
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  currentEntityType = 'persona';
  searchQuery = '';
  searchResults = [];
  notifications = [];
  user = {
    name: 'Admin SIGPAZ',
    email: 'admin@sigpaz.com',
    avatar: 'A'
  };
  getDefaultLinks() {
    return {
      first: '',
      last: '',
      prev: null,
      next: null
    };
  }
  // Variables específicas para personas
  showModal = false;
  showDeleteModal = false;
  showReportesModal = false;
  modalTitle = 'Nueva Persona';
  isEditing = false;
  esEdicion = false;
  activeTab = 'datos-personales';
  currentPersonaId = null;
  personaId = null;
  camposCifrados = false;
  esEliminacionFisica = false;
  nombreConfirmacion = '';
  confirmacionTexto = '';
  showConfirmacionFisicaModal = false;
  // Lista de personas desde API
  personas = [];
  metaPaginacion = {
    total: 0,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    from: 0,
    to: 0
  };
  personaFormData = {
    // IDs
    tipo_documento_id: null,
    genero_id: null,
    estado_civil_id: null,
    tipo_vinculo_id: null,
    qrData: '',
    codigo_qr: '',
    // Datos personales - REQUERIDOS
    numero_documento: '',
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    // Datos personales - OPCIONALES
    nacionalidad: '',
    lugar_nacimiento: '',
    profesion_oficio: '',
    ocupacion_actual: '',
    // Dirección y contacto
    direccion_cifrada: '',
    municipio: '',
    departamento: '',
    codigo_postal: '',
    telefono_fijo_cifrado: '',
    telefono_movil_cifrado: '',
    correo_electronico_cifrado: '',
    correo_alternativo_cifrado: '',
    // Información adicional
    discapacidad: '',
    observaciones: '',
    // Multimedia
    foto_cifrada: '',
    firma_digital: '',
    // Contacto de emergencia
    nombre_contacto_emergencia: '',
    parentesco_emergencia: '',
    telefono_emergencia_cifrado: '',
    // Representante legal
    representante_legal: ''
  };
  // Datos para selectores (desde API)
  tiposDocumento = [];
  generos = []; // ← Cambiado de sexos
  estadosCiviles = [];
  tiposVinculo = [];
  // Filtros
  filtro = {
    numero_documento: '',
    nombres: '',
    apellidos: '',
    departamento: '',
    discapacidad: null,
    per_page: 10,
    page: 1
  };
  // Reporte seleccionado
  reporteSeleccionado = null;
  reportesData = {};
  // Estadísticas
  estadisticas = {
    total: 0,
    masculino: 0,
    femenino: 0,
    otros: 0,
    sinGenero: 0,
    conDiscapacidad: 0,
    sinDiscapacidad: 0
  };
  get unreadNotificationsCount() {
    return this.notifications.filter(n => !n.read).length;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  ngOnInit() {
    this.setupKeyboardShortcuts();
    this.cargarCatalogos();
    this.suscribirNotificaciones();
    this.cargarPersonas();
    this.cargarUsuarioActual();
    this.setupThemeSubscription();
    this.moduleLoader.registerComponentInstance(this.moduleName, this);
    // Cargar datos del módulo
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
    const hasContent = document.querySelector('.persona-container, .main-content, app-personas');
    const hasData = document.querySelector('.filtros-container, .stats-container, .data-table, .table-responsive');
    console.log(`🔍 [Personas] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
  suscribirNotificaciones() {
    this.notificationService.notifications$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: notificaciones => {
        this.notifications = notificaciones;
      },
      error: error => {
        console.error('Error al cargar notificaciones:', error);
        this.notifications = [];
      }
    });
  }
  agregarNotificacionPersona(accion, detalles, tipo = 'info') {
    this.notificationService.createPersonaNotification(accion, detalles, tipo);
  }
  // ========== MÉTODOS PARA EL MENÚ ==========
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
  cerrarNotificacion(id) {
    const index = this.notificaciones.findIndex(n => n.id === id);
    if (index !== -1) {
      this.notificaciones.splice(index, 1);
    }
  }
  onMarkAllAsRead() {
    this.notificationService.markAllAsRead();
  }
  onMarkAsRead(id) {
    this.notificationService.markAsRead(id);
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
    if (event.target.classList.contains('modal-overlay')) {
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
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ========== MÉTODOS DE MODAL ==========
  abrirModalCrear() {
    this.showDeleteModal = false;
    this.showReportesModal = false;
    this.isEditing = false;
    this.esEdicion = false;
    this.modalTitle = 'Nueva Persona';
    this.activeTab = 'datos-personales';
    this.camposCifrados = false;
    this.resetForm();
    this.showModal = true;
  }
  resetForm() {
    console.log('🔄 Resetando formulario a valores por defecto');
    this.personaFormData = {
      // IDs
      tipo_documento_id: null,
      genero_id: null,
      estado_civil_id: null,
      tipo_vinculo_id: null,
      qrData: '',
      codigo_qr: '',
      // Datos personales
      numero_documento: '',
      nombres: '',
      apellidos: '',
      fecha_nacimiento: '',
      nacionalidad: '',
      lugar_nacimiento: '',
      profesion_oficio: '',
      ocupacion_actual: '',
      // Dirección y contacto
      direccion_cifrada: '',
      municipio: '',
      departamento: '',
      codigo_postal: '',
      telefono_fijo_cifrado: '',
      telefono_movil_cifrado: '',
      correo_electronico_cifrado: '',
      correo_alternativo_cifrado: '',
      // Información adicional
      discapacidad: '',
      observaciones: '',
      // Multimedia
      foto_cifrada: '',
      firma_digital: '',
      // Contacto de emergencia
      nombre_contacto_emergencia: '',
      parentesco_emergencia: '',
      telefono_emergencia_cifrado: '',
      // Representante legal
      representante_legal: ''
    };
    this.currentPersonaId = null;
    this.personaId = null;
    this.camposCifrados = false;
    this.esEdicion = false;
  }
  abrirModalEliminar(id) {
    this.showModal = false;
    this.showReportesModal = false;
    this.currentPersonaId = id;
    this.showDeleteModal = true;
  }
  /**
   * Abrir modal de confirmación para eliminación física
   */
  abrirModalConfirmacionFisica() {
    if (!this.currentPersonaId) return;
    this.confirmacionTexto = '';
    this.showConfirmacionFisicaModal = true;
    this.showDeleteModal = false; // Cerrar el modal anterior
  }
  /**
   * Ejecutar eliminación física después de confirmación
   */
  ejecutarEliminacionFisica() {
    if (this.confirmacionTexto !== 'ELIMINAR') {
      this.notificationService.showWarning('Cancelado: Debe escribir exactamente "ELIMINAR" para confirmar');
      return;
    }
    this.loading = true;
    this.showConfirmacionFisicaModal = false;
    const eliminarObservable = this.getEliminarFisicoObservable();
    if (!eliminarObservable) {
      this.loading = false;
      this.notificationService.showError('Error: Tipo de entidad no soportado');
      this.cerrarDeleteModal();
      return;
    }
    eliminarObservable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loading = false;
      setTimeout(() => this.cdr.detectChanges());
    })).subscribe({
      next: response => {
        setTimeout(() => {
          this.notificationService.showSuccess('Éxito:Registro eliminado permanentemente');
          this.agregarNotificacionPersona('Registro eliminado físicamente', `${this.getCurrentEntityName()}: ${this.nombreConfirmacion}`, 'warning');
          this.cerrarDeleteModal();
          this.recargarEntidadActual();
        });
      },
      error: error => {
        setTimeout(() => {
          let errorMessage = error.error?.message || error.message || 'Error al eliminar el registro';
          this.notificationService.showError('Error', errorMessage);
          this.agregarNotificacionPersona('Error al eliminar', errorMessage, 'error');
          this.cerrarDeleteModal();
        });
      }
    });
  }
  calcularTotalItems() {
    const entityData = this.getCurrentEntity();
    this.totalItems = entityData.length;
  }
  recargarEntidadActual() {
    this.ultimaEntidadCargada = null;
    this.cargarEntidadActual();
    this.calcularTotalItems();
    this.agregarNotificacionPersona('Datos recargados', `${this.getCurrentEntityName()} recargados exitosamente`, 'info');
  }
  cargarEntidadActual() {
    if (!this.currentEntityType) return;
    console.log('Cargando entidad actual:', this.currentEntityType);
    this.cargandoDatos = true;
    this.limpiarDatosVista();
    switch (this.currentEntityType) {
      case 'persona':
        this.cargarPersonas();
        break;
      default:
        console.warn('Tipo de entidad no reconocido:', this.currentEntityType);
        this.cargandoDatos = false;
        return;
    }
    this.ultimaEntidadCargada = this.currentEntityType;
    console.log('Entidad cargada:', this.currentEntityType);
  }
  limpiarDatosVista() {
    switch (this.currentEntityType) {
      case 'persona':
        break;
    }
    this.calcularTotalItems();
  }
  getEliminarFisicoObservable() {
    switch (this.currentEntityType) {
      case 'persona':
        return this.personaService.eliminarPersonaFisicamente(this.currentPersonaId, 'ELIMINAR' // ← Enviar la confirmación
        );
      default:
        return null;
    }
  }
  /**
   * Cerrar modal de confirmación física
   */
  cerrarConfirmacionFisicaModal() {
    this.showConfirmacionFisicaModal = false;
    this.confirmacionTexto = '';
  }
  cerrarDeleteModal() {
    this.showDeleteModal = false;
    this.showConfirmacionFisicaModal = false;
    this.currentPersonaId = null;
    this.esEliminacionFisica = false;
    this.nombreConfirmacion = '';
    this.confirmacionTexto = '';
  }
  getGeneroNombre(id) {
    // Si es un objeto, extraer el ID
    if (id && typeof id === 'object') {
      const idObjeto = id.genero_id || id.id || id.value;
      return this.getGeneroNombre(idObjeto);
    }
    const idNumero = id ? Number(id) : null;
    if (!idNumero || isNaN(idNumero)) {
      return 'No especificado';
    }
    if (!this.generos || this.generos.length === 0) {
      return 'Cargando...';
    }
    // Buscar por diferentes propiedades posibles
    const item = this.generos.find(g => g.genero_id && Number(g.genero_id) === idNumero || g.id && Number(g.id) === idNumero);
    return item?.nombre || item?.descripcion || `ID: ${idNumero}`;
  }
  cerrarModal() {
    console.log('🔄 Cerrando modal');
    this.showModal = false;
    this.isEditing = false;
    this.esEdicion = false;
    this.currentPersonaId = null;
    this.personaId = null;
    this.fotoArchivo = null;
    this.camposCifrados = false;
    this.generandoQR = false;
    // Resetear el formulario SOLO si no estamos en modo edición
    // Pero como cerramos, siempre reseteamos
    this.resetForm();
    // Si usas ReactiveForms
    if (this.personaForm) {
      this.personaForm.reset();
    }
  }
  cambiarTabAnterior() {
    switch (this.activeTab) {
      case 'contacto':
        this.activeTab = 'datos-personales';
        break;
      case 'adicionales':
        this.activeTab = 'contacto';
        break;
    }
  }
  cambiarTabSiguiente() {
    switch (this.activeTab) {
      case 'datos-personales':
        this.activeTab = 'contacto';
        break;
      case 'contacto':
        this.activeTab = 'adicionales';
        break;
    }
  }
  subirFoto(event) {
    const file = event.target.files[0];
    if (file) {
      this.fotoArchivo = file;
      const reader = new FileReader();
      reader.onload = e => {
        this.personaFormData.foto_cifrada = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  removerFoto() {
    this.personaFormData.foto_cifrada = '';
    this.fotoArchivo = null;
  }
  verFirma() {
    if (this.personaFormData.firma_digital) {
      const ventana = window.open('', '_blank');
      if (ventana) {
        ventana.document.write(`
          <html>
            <head>
              <title>Firma Digital</title>
              <style>
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  background: #f5f5f5;
                }
                img {
                  max-width: 90%;
                  max-height: 90%;
                  border: 2px solid #333;
                  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
              </style>
            </head>
            <body>
              <img src="${this.personaFormData.firma_digital}" alt="Firma digital">
            </body>
          </html>
        `);
        ventana.document.close();
      }
    }
  }
  // ========== MÉTODOS DE REPORTES ==========
  generarReportes() {
    this.showModal = false;
    this.showDeleteModal = false;
    this.showReportesModal = true;
    this.reporteSeleccionado = null;
  }
  cerrarReportesModal() {
    this.showReportesModal = false;
    this.reporteSeleccionado = null;
  }
  generarReporteEdad() {
    this.loadingReporte = true;
    this.personaService.generarReporteEdad().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loadingReporte = false)).subscribe({
      next: response => {
        if (response.success) {
          this.reporteSeleccionado = {
            titulo: 'Reporte por Edad',
            fecha: new Date(),
            datos: Object.entries(response.data).map(([rango, cantidad]) => ({
              rango,
              cantidad
            }))
          };
          this.agregarNotificacionPersona('Reporte generado', 'Reporte por edad generado exitosamente', 'success');
        } else {
          this.notificationService.showError('Error al generar reporte de edad');
        }
      },
      error: error => {
        this.notificationService.showError('Error al generar reporte de edad');
        console.error('Error:', error);
      }
    });
  }
  mapearPersonaParaForm(persona) {
    console.log('🔍 Mapeando persona para formulario:', persona);
    const personaData = persona.data || persona;
    console.log('📋 Campos recibidos del backend:', Object.keys(personaData));
    // Función para formatear fecha correctamente
    const formatearFecha = fecha => {
      if (!fecha) return '';
      // Si viene en formato ISO (2026-02-21T00:00:00.000000Z)
      if (fecha.includes('T')) {
        return fecha.split('T')[0]; // Devuelve solo YYYY-MM-DD
      }
      return fecha;
    };
    return {
      // IDs
      tipo_documento_id: personaData.tipo_documento_id ? Number(personaData.tipo_documento_id) : null,
      genero_id: personaData.genero_id ? Number(personaData.genero_id) : null,
      estado_civil_id: personaData.estado_civil_id ? Number(personaData.estado_civil_id) : null,
      tipo_vinculo_id: personaData.tipo_vinculo_id ? Number(personaData.tipo_vinculo_id) : null,
      codigo_qr: personaData.codigo_qr || '',
      qrData: personaData.codigo_qr ? this.qrService.generarDatosQR(personaData) : '',
      // Datos personales
      numero_documento: personaData.numero_documento || '',
      nombres: personaData.nombres || '',
      apellidos: personaData.apellidos || '',
      fecha_nacimiento: formatearFecha(personaData.fecha_nacimiento),
      // 👈 FECHA FORMATEADA
      nacionalidad: personaData.nacionalidad || '',
      lugar_nacimiento: personaData.lugar_nacimiento || '',
      profesion_oficio: personaData.profesion_oficio || '',
      ocupacion_actual: personaData.ocupacion_actual || '',
      // Dirección y contacto
      direccion_cifrada: personaData.direccion_cifrada || '',
      municipio: personaData.municipio || '',
      departamento: personaData.departamento || '',
      codigo_postal: personaData.codigo_postal || '',
      telefono_fijo_cifrado: personaData.telefono_fijo_cifrado || '',
      telefono_movil_cifrado: personaData.telefono_movil_cifrado || '',
      correo_electronico_cifrado: personaData.correo_electronico_cifrado || '',
      correo_alternativo_cifrado: personaData.correo_alternativo_cifrado || '',
      // Información adicional
      discapacidad: personaData.discapacidad || '',
      observaciones: personaData.observaciones || '',
      // Multimedia
      foto_cifrada: personaData.foto_cifrada || '',
      firma_digital: personaData.firma_digital || '',
      // Contacto de emergencia
      nombre_contacto_emergencia: personaData.nombre_contacto_emergencia || '',
      parentesco_emergencia: personaData.parentesco_emergencia || '',
      telefono_emergencia_cifrado: personaData.telefono_emergencia_cifrado || '',
      // Representante legal
      representante_legal: personaData.representante_legal || ''
    };
  }
  generarReporteSexo() {
    this.loadingReporte = true;
    this.personaService.generarReporteGenero().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loadingReporte = false)).subscribe({
      next: response => {
        if (response.success) {
          this.reporteSeleccionado = {
            titulo: 'Reporte por Sexo',
            fecha: new Date(),
            datos: Object.entries(response.data).map(([sexo, cantidad]) => ({
              sexo,
              cantidad
            }))
          };
          this.agregarNotificacionPersona('Reporte generado', 'Reporte por sexo generado exitosamente', 'success');
        } else {
          this.notificationService.showError('Error al generar reporte de sexo');
        }
      },
      error: error => {
        this.notificationService.showError('Error al generar reporte de sexo');
        console.error('Error:', error);
      }
    });
  }
  generarReporteDepartamento() {
    this.loadingReporte = true;
    this.personaService.generarReporteDepartamento().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loadingReporte = false)).subscribe({
      next: response => {
        if (response.success) {
          this.reporteSeleccionado = {
            titulo: 'Reporte por Departamento',
            fecha: new Date(),
            datos: response.data
          };
          this.agregarNotificacionPersona('Reporte generado', 'Reporte por departamento generado exitosamente', 'success');
        } else {
          this.notificationService.showError('Error al generar reporte de departamento');
        }
      },
      error: error => {
        this.notificationService.showError('Error al generar reporte de departamento');
        console.error('Error:', error);
      }
    });
  }
  generarReporteDiscapacidad() {
    this.loadingReporte = true;
    this.personaService.generarReporteDiscapacidad().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loadingReporte = false)).subscribe({
      next: response => {
        if (response.success) {
          this.reporteSeleccionado = {
            titulo: 'Reporte por Discapacidad',
            fecha: new Date(),
            datos: response.data
          };
          this.agregarNotificacionPersona('Reporte generado', 'Reporte por discapacidad generado exitosamente', 'success');
        } else {
          this.notificationService.showError('Error al generar reporte de discapacidad');
        }
      },
      error: error => {
        this.notificationService.showError('Error al generar reporte de discapacidad');
        console.error('Error:', error);
      }
    });
  }
  exportarExcel() {
    this.personaService.exportarExcel().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: blob => {
        this.descargarArchivo(blob, `personas_${new Date().toISOString().slice(0, 10)}.xlsx`);
        this.notificationService.showSuccess('Exportación a Excel completada');
        this.agregarNotificacionPersona('Exportación completada', 'Listado de personas exportado a Excel', 'success');
      },
      error: error => {
        this.notificationService.showError('Error al exportar a Excel');
        this.agregarNotificacionPersona('Error en exportación', 'No se pudo exportar a Excel', 'error');
        console.error('Error:', error);
      }
    });
  }
  generarFichaCompleta(id) {
    this.personaService.generarFichaCompleta(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: blob => {
        this.descargarArchivo(blob, `ficha_persona_${id}.pdf`);
        this.notificationService.showSuccess('Ficha generada exitosamente');
        this.agregarNotificacionPersona('Ficha generada', `Ficha de persona ID: ${id} generada`, 'success');
      },
      error: error => {
        this.notificationService.showError('Error al generar ficha');
        this.agregarNotificacionPersona('Error al generar ficha', `No se pudo generar ficha para persona ID: ${id}`, 'error');
        console.error('Error:', error);
      }
    });
  }
  validarFormulario() {
    if (!this.personaFormData.numero_documento?.trim()) {
      this.notificationService.showWarning('El número de documento es requerido');
      return false;
    }
    if (!this.personaFormData.nombres?.trim()) {
      this.notificationService.showWarning('Los nombres son requeridos');
      return false;
    }
    if (!this.personaFormData.apellidos?.trim()) {
      this.notificationService.showWarning('Los apellidos son requeridos');
      return false;
    }
    if (!this.personaFormData.fecha_nacimiento) {
      this.notificationService.showWarning('La fecha de nacimiento es requerida');
      return false;
    }
    if (!this.personaFormData.genero_id) {
      this.notificationService.showWarning('Debe seleccionar el género');
      return false;
    }
    if (!this.personaFormData.telefono_movil_cifrado?.trim()) {
      this.notificationService.showWarning('El teléfono móvil es requerido');
      return false;
    }
    return true;
  }
  limpiarFiltros() {
    this.filtro = {
      numero_documento: '',
      nombres: '',
      apellidos: '',
      departamento: '',
      discapacidad: null,
      per_page: 10,
      page: 1
    };
    this.cargarPersonas();
    this.agregarNotificacionPersona('Filtros limpiados', 'Todos los filtros han sido restablecidos', 'info');
  }
  cambiarPagina(pagina) {
    this.filtro.page = pagina;
    this.cargarPersonas();
  }
  cambiarItemsPorPagina(event) {
    this.filtro.per_page = event.target.value;
    this.filtro.page = 1;
    this.cargarPersonas();
    this.agregarNotificacionPersona('Paginación actualizada', `Mostrando ${event.target.value} elementos por página`, 'info');
  }
  get totalPaginas() {
    return this.metaPaginacion.last_page;
  }
  getPaginationArray() {
    const total = this.totalPaginas;
    const current = this.metaPaginacion.current_page;
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
      this.cambiarPagina(pagina);
    }
  }
  actualizarEstadisticas() {
    this.estadisticas.total = this.personas.length;
    this.estadisticas.masculino = 0;
    this.estadisticas.femenino = 0;
    this.estadisticas.otros = 0;
    this.estadisticas.sinGenero = 0;
    this.estadisticas.conDiscapacidad = 0;
    this.personas.forEach(persona => {
      const generoId = persona.genero?.genero_id || persona.genero_id;
      if (generoId === 1) {
        this.estadisticas.masculino++;
      } else if (generoId === 2) {
        this.estadisticas.femenino++;
      } else if (generoId && generoId !== 1 && generoId !== 2) {
        this.estadisticas.otros++;
      } else {
        this.estadisticas.sinGenero++;
      }
      if (persona.tiene_discapacidad === true || persona.discapacidad && persona.discapacidad.trim().length > 0) {
        this.estadisticas.conDiscapacidad++;
      }
    });
    this.estadisticas.sinDiscapacidad = this.estadisticas.total - this.estadisticas.conDiscapacidad;
    console.log('📊 Estadísticas actualizadas:', this.estadisticas);
  }
  verDetalles(id) {
    this.generarFichaCompleta(id);
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
        if (this.showReportesModal) this.cerrarReportesModal();
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
  getCurrentEntity() {
    return {
      name: 'Persona'
    };
  }
  getCurrentEntityName() {
    return 'Persona';
  }
  getReporteKeys() {
    if (!this.reporteSeleccionado?.datos || this.reporteSeleccionado.datos.length === 0) {
      return [];
    }
    return Object.keys(this.reporteSeleccionado.datos[0]);
  }
  descargarArchivo(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
  cargarCatalogos() {
    this.catalogoService.getTiposDocumento().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        console.log('✅ Tipos documento cargados:', data);
        this.tiposDocumento = data || [];
      },
      error: error => {
        console.error('❌ Error tipos documento:', error);
        this.tiposDocumento = [];
      }
    });
    this.catalogoService.getSexosActivos().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        console.log('✅ Géneros recibidos del API:', data);
        this.generos = Array.isArray(data) ? data : [];
        console.log('📋 Géneros asignados al componente:', this.generos);
      },
      error: error => {
        console.error('❌ Error al cargar géneros:', error);
        this.generos = [];
      }
    });
    this.catalogoService.getEstadosCivilesActivos().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        console.log('✅ Estados civiles cargados (activos):', data);
        this.estadosCiviles = data || [];
        console.log('📋 Estados civiles asignados:', this.estadosCiviles);
      },
      error: error => {
        console.error('❌ Error al cargar estados civiles:', error);
        this.estadosCiviles = [];
      }
    });
    this.catalogoService.getTiposVinculoActivos().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        console.log('✅ Tipos de vínculo cargados (activos):', data);
        this.tiposVinculo = data || [];
        console.log('📋 Tipos vínculo asignados:', this.tiposVinculo);
      },
      error: error => {
        console.error('❌ Error al cargar tipos de vínculo:', error);
        this.tiposVinculo = [];
      }
    });
  }
  getTipoDocumentoNombre(id) {
    if (!id || !this.tiposDocumento.length) return 'No especificado';
    const item = this.tiposDocumento.find(item => item.tipo_documento_id === id || item.id === id);
    return item?.nombre || 'Desconocido';
  }
  getEstadoCivilNombre(id) {
    if (!id || !this.estadosCiviles.length) return 'No especificado';
    const item = this.estadosCiviles.find(item => item.estado_civil_id === id || item.id_estado_civil === id || item.id === id);
    return item?.nombre || 'Desconocido';
  }
  getTipoVinculoNombre(id) {
    if (!id || !this.tiposVinculo.length) return 'No especificado';
    const item = this.tiposVinculo.find(item => item.tipo_vinculo_id === id || item.id === id);
    return item?.nombre || 'Desconocido';
  }
  mostrarModalFirma = false;
  abrirModalFirma() {
    this.mostrarModalFirma = true;
  }
  cerrarModalFirma() {
    this.mostrarModalFirma = false;
  }
  eliminarFirma() {
    this.personaFormData.firma_digital = '';
  }
  getNombreDeCatalogo(id, catalogo, idProp, nombreProp) {
    if (!id || !catalogo.length) return 'No especificado';
    const item = catalogo.find(item => {
      return item[idProp] === id || item[idProp.replace('_', '')] === id || item.id === id || item[`id_${idProp}`] === id;
    });
    if (!item) {
      console.warn(`Item no encontrado en catálogo: ID=${id}, Prop=${idProp}, Catálogo=`, catalogo);
      return 'Desconocido';
    }
    return item[nombreProp] || item['nombre'] || item['descripcion'] || 'Sin nombre';
  }
  base64ToBlob(base64Data) {
    const byteString = atob(base64Data.split(',')[1]);
    const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  }
  cargarPersonas() {
    this.loading = true;
    console.log('📡 Cargando personas...');
    this.personaService.listarPersonas(this.filtro).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loading = false)).subscribe({
      next: response => {
        console.log('✅ Respuesta personas:', response);
        if (response && response.success !== undefined) {
          this.personas = response.data || [];
          this.metaPaginacion = response.meta || this.getDefaultMeta();
          this.linksPaginacion = response.links || this.getDefaultLinks();
        } else if (Array.isArray(response)) {
          this.personas = response;
          this.metaPaginacion = this.getDefaultMeta();
        } else if (response && response.data) {
          this.personas = response.data;
          this.metaPaginacion = response.meta || this.getDefaultMeta();
        } else {
          this.personas = [];
          this.metaPaginacion = this.getDefaultMeta();
        }
        console.log('🔍 Verificando genero_id en todas las personas:');
        this.personas.forEach((persona, index) => {
          console.log(`   Persona ${index + 1} (${persona.nombres} ${persona.apellidos}):`);
          console.log(`     - genero_id: ${persona.genero_id}`);
        });
        this.actualizarEstadisticas();
      },
      error: error => {
        console.error('❌ Error al cargar personas:', error);
        this.notificationService.showError('Error al cargar personas');
        this.personas = [];
        this.metaPaginacion = this.getDefaultMeta();
      }
    });
  }
  getDefaultMeta() {
    return {
      total: 0,
      per_page: this.filtro.per_page,
      current_page: this.filtro.page,
      last_page: 1,
      from: 0,
      to: 0
    };
  }
  abrirModalEditar(id) {
    console.log('✏️ Abriendo modal para editar persona ID:', id);
    this.showDeleteModal = false;
    this.showReportesModal = false;
    this.loadingPersona = true;
    this.personaService.obtenerPersona(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loadingPersona = false;
      console.log('🔄 Finalizada carga de persona');
    })).subscribe({
      next: response => {
        console.log('📥 Persona para editar - Respuesta completa:', response);
        // ✅ VERIFICACIÓN CORRECTA
        if (response && response.data) {
          console.log('✅ Datos de persona recibidos:', response.data);
          this.isEditing = true;
          this.esEdicion = true;
          this.modalTitle = 'Editar Persona';
          this.currentPersonaId = id;
          this.personaId = id;
          // Mapear los datos al formulario
          this.personaFormData = this.mapearPersonaParaForm(response.data);
          console.log('📋 Datos mapeados para el formulario:', this.personaFormData);
          this.activeTab = 'datos-personales';
          this.showModal = true;
          // ✅ NO mostrar error, solo éxito (opcional)
          // this.notificationService.showSuccess('Persona cargada correctamente');
        } else {
          // Este bloque ya no debería ejecutarse
          console.warn('⚠️ Respuesta sin datos:', response);
          this.notificationService.showError(response?.message || 'Error al cargar persona');
        }
      },
      error: error => {
        console.error('❌ Error al cargar persona:', error);
        this.notificationService.showError('Error al cargar persona');
      }
    });
  }
  crearFormData() {
    console.log('🎯 Creando datos para enviar (JSON):', this.personaFormData);
    const datos = {
      tipo_documento_id: this.personaFormData.tipo_documento_id ? Number(this.personaFormData.tipo_documento_id) : null,
      genero_id: this.personaFormData.genero_id ? Number(this.personaFormData.genero_id) : null,
      estado_civil_id: this.personaFormData.estado_civil_id ? Number(this.personaFormData.estado_civil_id) : null,
      tipo_vinculo_id: this.personaFormData.tipo_vinculo_id ? Number(this.personaFormData.tipo_vinculo_id) : null,
      numero_documento: this.personaFormData.numero_documento,
      nombres: this.personaFormData.nombres,
      apellidos: this.personaFormData.apellidos,
      fecha_nacimiento: this.personaFormData.fecha_nacimiento,
      nacionalidad: this.personaFormData.nacionalidad,
      lugar_nacimiento: this.personaFormData.lugar_nacimiento,
      profesion_oficio: this.personaFormData.profesion_oficio,
      ocupacion_actual: this.personaFormData.ocupacion_actual,
      direccion_cifrada: this.personaFormData.direccion_cifrada,
      municipio: this.personaFormData.municipio,
      departamento: this.personaFormData.departamento,
      codigo_postal: this.personaFormData.codigo_postal,
      telefono_fijo_cifrado: this.personaFormData.telefono_fijo_cifrado,
      telefono_movil_cifrado: this.personaFormData.telefono_movil_cifrado,
      correo_electronico_cifrado: this.personaFormData.correo_electronico_cifrado,
      correo_alternativo_cifrado: this.personaFormData.correo_alternativo_cifrado,
      nombre_contacto_emergencia: this.personaFormData.nombre_contacto_emergencia,
      telefono_emergencia_cifrado: this.personaFormData.telefono_emergencia_cifrado,
      parentesco_emergencia: this.personaFormData.parentesco_emergencia,
      discapacidad: this.personaFormData.discapacidad,
      observaciones: this.personaFormData.observaciones,
      foto_cifrada: this.personaFormData.foto_cifrada,
      codigo_qr: this.personaFormData.codigo_qr,
      firma_digital: this.personaFormData.firma_digital
    };
    console.log('🔍 Verificación de tipos antes de limpiar:');
    Object.keys(datos).forEach(key => {
      console.log(`  ${key}: ${datos[key]} (tipo: ${typeof datos[key]})`);
    });
    Object.keys(datos).forEach(key => {
      if (datos[key] === null || datos[key] === undefined || datos[key] === '') {
        delete datos[key];
      }
    });
    console.log('📦 Datos preparados para enviar (JSON):', datos);
    return datos;
  }
  cargarUsuarioActual() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser?.personal_id) {
      this.cargarInformacionPersonal();
    }
  }
  cargarInformacionPersonal() {
    this.personalService.obtenerPersonalActual().subscribe({
      next: response => {
        if (response.success && response.data) {
          this.personalInfo = response.data;
          if (response.data.persona) {
            this.personaInfo = response.data.persona;
            console.log('✅ Información de persona cargada:', this.personaInfo);
          }
        }
      },
      error: error => {
        console.warn('⚠️ No se pudo cargar información del personal:', error.message);
      }
    });
  }
  getFotoUsuarioActual() {
    if (this.personaInfo?.foto_cifrada) {
      return this.personaInfo.foto_cifrada;
    }
    return null;
  }
  getNombreUsuarioActual() {
    if (this.personaInfo) {
      return `${this.personaInfo.nombres || ''} ${this.personaInfo.apellidos || ''}`.trim();
    }
    if (this.currentUser) {
      return this.currentUser.nombre_usuario || 'Usuario';
    }
    return 'Usuario';
  }
  guardarFirmaPersona(personaId, firmaBase64) {
    if (!personaId) {
      this.notificationService.showError('ID de persona no válido');
      return;
    }
    this.personaService.guardarFirma(personaId, firmaBase64).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Firma guardada correctamente');
          if (this.currentPersonaId === personaId) {
            this.personaFormData.firma_digital = firmaBase64;
          }
        } else {
          this.notificationService.showError(response.message || 'Error al guardar firma');
        }
      },
      error: error => {
        console.error('❌ Error al guardar firma:', error);
        this.notificationService.showError('Error al guardar firma');
      }
    });
  }
  guardarFirma(firmaDataURL) {
    if (this.currentPersonaId) {
      this.guardarFirmaPersona(this.currentPersonaId, firmaDataURL);
    } else if (this.esEdicion && this.personaId) {
      this.guardarFirmaPersona(this.personaId, firmaDataURL);
    } else {
      this.personaFormData.firma_digital = firmaDataURL;
      this.notificationService.showInfo('Firma guardada localmente');
    }
  }
  eliminarPersona() {
    if (!this.currentPersonaId) {
      this.notificationService.showWarning('No hay persona seleccionada para eliminar');
      return;
    }
    this.personaService.eliminarPersona(this.currentPersonaId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      // Cerrar loading si es necesario
    })).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Persona eliminada exitosamente');
          this.agregarNotificacionPersona('Persona eliminada', `ID: ${this.currentPersonaId}`, 'warning');
          this.cargarPersonas();
          this.cerrarDeleteModal();
        } else {
          this.notificationService.showError(response.message || 'Error al eliminar persona');
        }
      },
      error: error => {
        console.error('❌ Error al eliminar persona:', error);
        if (error.status === 422) {
          this.notificationService.showError('No se puede eliminar: La persona tiene registros asociados');
        } else if (error.status === 404) {
          this.notificationService.showError('La persona no existe');
        } else {
          this.notificationService.showError('Error al eliminar persona');
        }
      }
    });
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      // Usar el método de búsqueda que usa el endpoint /buscar/{termino}
      this.personaService.buscar(this.searchQuery).subscribe({
        next: resultados => {
          console.log('✅ Resultados de búsqueda:', resultados);
          this.searchResults = resultados.slice(0, 5).map(persona => ({
            title: `${persona.nombres} ${persona.apellidos}`,
            description: `Doc: ${persona.numero_documento} | ${persona.departamento || 'Sin departamento'}`,
            icon: '👤',
            id: persona.persona_id,
            action: () => {
              this.abrirModalEditar(persona.persona_id);
              this.closeSearchModal();
            }
          }));
          if (this.searchResults.length === 0) {
            this.searchResults = [{
              title: 'No se encontraron resultados',
              description: `No hay personas que coincidan con "${this.searchQuery}"`,
              icon: '🔍',
              action: () => {}
            }];
          }
        },
        error: error => {
          console.error('Error en búsqueda:', error);
          this.searchResults = [{
            title: 'Error en la búsqueda',
            description: 'No se pudo completar la búsqueda',
            icon: '❌',
            action: () => {}
          }];
        }
      });
    } else {
      this.searchResults = [];
    }
  }
  /**
   * Capturar canvas del QR y convertirlo a base64
   */
  capturarQRComoBase64(canvas) {
    return this.qrService.canvasToBase64(canvas);
  }
  /**
   * Ver QR en modal ampliado
   */
  verCodigoQR(persona) {
    if (persona.codigo_qr) {
      // Asegurar que tenga qrData para el componente
      this.qrSeleccionado = {
        ...persona,
        qrData: this.qrService.generarDatosQR(persona)
      };
      this.showQRModal = true;
    } else {
      // Si no tiene QR, preguntar si quiere generarlo
      if (confirm(`¿Desea generar un código QR para ${persona.nombres} ${persona.apellidos}?`)) {
        this.personaFormData = this.mapearPersonaParaForm(persona);
        this.currentPersonaId = persona.persona_id;
        this.isEditing = true;
        this.generarCodigoQR();
      }
    }
  }
  /**
   * Descargar QR como imagen
   */
  descargarQR() {
    if (this.qrSeleccionado) {
      // Buscar el canvas generado por ng-qrcode en el modal
      setTimeout(() => {
        const canvas = document.querySelector('.qr-modal canvas');
        if (canvas) {
          const link = document.createElement('a');
          link.download = `QR_${this.qrSeleccionado.numero_documento}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
          this.notificationService.showSuccess('QR descargado');
        } else {
          // Fallback: usar la URL del QR
          const link = document.createElement('a');
          link.href = this.qrSeleccionado.codigo_qr;
          link.download = `QR_${this.qrSeleccionado.numero_documento}.png`;
          link.click();
        }
      }, 100);
    }
  }
  /**
   * Cerrar modal QR
   */
  cerrarQRModal() {
    this.showQRModal = false;
    this.qrSeleccionado = null;
  }
  // Método para abrir el modal de validación (reemplaza el método validarIdentidad actual)
  validarIdentidad() {
    this.showValidarIdentidadModal = true;
    this.busquedaValidacion = '';
    this.resultadosValidacion = [];
    this.personaSeleccionadaValidacion = null;
  }
  // Método para cerrar el modal
  cerrarValidarIdentidadModal() {
    this.showValidarIdentidadModal = false;
    this.busquedaValidacion = '';
    this.resultadosValidacion = [];
    this.personaSeleccionadaValidacion = null;
  }
  // Método para seleccionar persona
  seleccionarPersonaValidacion(persona) {
    this.personaSeleccionadaValidacion = persona;
  }
  /**
   * Generar código QR real usando ng-qrcode y convertirlo a base64
   */
  generarCodigoQR() {
    if (this.isEditing && this.personaFormData.codigo_qr) {
      this.notificationService.showWarning('El código QR ya existe y no puede modificarse');
      return;
    }
    this.generandoQR = true;
    // ✅ 1. Crear la URL para la página bonita
    const baseUrl = 'http://localhost:8000/qr/';
    const tipo = 'persona';
    // Datos para identificar a la persona (no demasiados datos)
    const datosIdentificacion = {
      id: this.currentPersonaId || 'temp_' + Date.now(),
      documento: this.personaFormData.numero_documento,
      timestamp: Date.now()
    };
    // Codificar los datos para la URL
    const datosCodificados = btoa(JSON.stringify(datosIdentificacion));
    const urlQR = `${baseUrl}${tipo}/${datosCodificados}`;
    // ✅ 2. Guardar la URL como dato del QR
    this.personaFormData.codigo_qr = urlQR;
    this.personaFormData.qrData = urlQR;
    // ✅ 3. Forzar detección de cambios
    this.cdr.detectChanges();
    // ✅ 4. Generar el QR con la URL
    setTimeout(() => {
      const canvas = document.querySelector('qr-code canvas');
      if (canvas) {
        try {
          // Convertir el canvas a base64 (imagen del QR)
          const qrBase64 = canvas.toDataURL('image/png');
          // ✅ Guardar la imagen del QR (NO la URL)
          this.personaFormData.codigo_qr = qrBase64;
          this.generandoQR = false;
          this.notificationService.showSuccess('Código QR generado exitosamente');
          this.cdr.detectChanges();
        } catch (error) {
          console.error('Error al convertir canvas:', error);
          this.fallbackGenerarQR(urlQR);
        }
      } else {
        console.warn('Canvas no encontrado, intentando de nuevo...');
        // Reintentar después de otro pequeño delay
        setTimeout(() => {
          const canvasRetry = document.querySelector('qr-code canvas');
          if (canvasRetry) {
            const qrBase64 = canvasRetry.toDataURL('image/png');
            this.personaFormData.codigo_qr = qrBase64;
            this.generandoQR = false;
            this.notificationService.showSuccess('Código QR generado exitosamente');
            this.cdr.detectChanges();
          } else {
            this.fallbackGenerarQR(urlQR);
          }
        }, 500);
      }
    }, 300);
  }
  /**
   * Método de respaldo para generar QR
   */
  fallbackGenerarQR(url) {
    // Usar API externa solo como fallback
    this.personaFormData.codigo_qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    this.generandoQR = false;
    this.notificationService.showSuccess('Código QR generado exitosamente (usando API externa)');
    this.cdr.detectChanges();
  }
  onQRLoaded() {
    console.log('✅ QR cargado correctamente');
  }
  exportarPDF(id) {
    this.personaService.exportarPDF(id).subscribe({
      next: blob => {
        // Crear link de descarga
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `persona_${id}_${new Date().toISOString().slice(0, 10)}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('PDF generado exitosamente');
      },
      error: error => {
        console.error('❌ Error al exportar PDF:', error);
        this.notificationService.showError('Error al generar PDF');
      }
    });
  }
  guardarPersona() {
    if (!this.validarFormulario()) {
      this.notificationService.showWarning('Complete los campos requeridos');
      return;
    }
    this.loadingPersona = true;
    // Crear copia de los datos para enviar
    const jsonDatos = {
      ...this.crearFormData()
    };
    // Asegurar que el QR se incluya en los datos
    if (this.personaFormData.codigo_qr) {
      jsonDatos.codigo_qr = this.personaFormData.codigo_qr;
    }
    const request = this.esEdicion && this.currentPersonaId ? this.personaService.actualizarPersona(this.currentPersonaId, jsonDatos) : this.personaService.crearPersona(jsonDatos);
    request.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.loadingPersona = false;
    })).subscribe({
      next: response => {
        // ✅ VERIFICAR AMBOS FORMATOS DE RESPUESTA
        const isSuccess = response.success === true || response.message?.includes('exitosa') || response.message?.includes('éxito');
        if (isSuccess) {
          const mensaje = this.esEdicion ? 'Persona actualizada' : 'Persona creada';
          this.notificationService.showSuccess(mensaje + ' exitosamente');
          // ✅ CERRAR MODAL INMEDIATAMENTE
          this.cerrarModal();
          // ✅ RECARGAR DATOS
          this.cargarPersonas();
          this.agregarNotificacionPersona(this.esEdicion ? 'Persona actualizada' : 'Persona creada', `Documento: ${this.personaFormData.numero_documento}`, 'success');
        } else {
          // Si hay un mensaje de error específico
          const errorMsg = response.message || 'Error al guardar persona';
          this.notificationService.showError(errorMsg);
        }
      },
      error: error => {
        console.error('Error:', error);
        // Extraer mensaje de error del backend si existe
        const errorMsg = error.error?.message || error.message || 'Error al guardar persona';
        this.notificationService.showError(errorMsg);
      }
    });
  }
  confirmarValidacionIdentidad() {
    if (!this.personaSeleccionadaValidacion) return;
    this.validandoIdentidad = true;
    // Forzar detección de cambios
    this.cdr.detectChanges();
    this.personaService.validarIdentidad(this.personaSeleccionadaValidacion.numero_documento).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.validandoIdentidad = false;
      this.cdr.detectChanges(); // Forzar actualización al finalizar
    })).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Persona validada exitosamente');
          // Actualizar el estado en la lista local
          const index = this.personas.findIndex(p => p.persona_id === this.personaSeleccionadaValidacion.persona_id);
          if (index !== -1) {
            this.personas[index].activo = true;
          }
          // Actualizar la persona seleccionada
          this.personaSeleccionadaValidacion.activo = true;
          // Cerrar modal después de 2 segundos
          setTimeout(() => {
            this.cerrarValidarIdentidadModal();
            this.cdr.detectChanges();
          }, 2000);
        } else {
          this.notificationService.showError(response.message || 'Error al validar persona');
        }
      },
      error: error => {
        console.error('Error:', error);
        this.notificationService.showError('Error al validar persona');
        this.cdr.detectChanges();
      }
    });
  }
  aplicarFiltros() {
    // Resetear a página 1
    this.filtro.page = 1;
    // ✅ Crear un NUEVO objeto con TODAS las propiedades
    const nuevosFiltros = {
      numero_documento: this.filtro.numero_documento?.trim() || '',
      nombres: this.filtro.nombres?.trim() || '',
      apellidos: this.filtro.apellidos?.trim() || '',
      departamento: this.filtro.departamento?.trim() || '',
      discapacidad: this.filtro.discapacidad,
      per_page: this.filtro.per_page,
      page: 1
    };
    // Limpiar valores vacíos
    Object.keys(nuevosFiltros).forEach(key => {
      if (nuevosFiltros[key] === '') {
        delete nuevosFiltros[key];
      }
    });
    // ✅ Asignar el nuevo objeto
    this.filtro = nuevosFiltros;
    this.cargarPersonas();
    const criteriosCount = Object.keys(this.filtro).filter(k => k !== 'page' && k !== 'per_page').length;
    this.agregarNotificacionPersona('Filtros aplicados', `Búsqueda con ${criteriosCount} criterio${criteriosCount !== 1 ? 's' : ''}`, 'info');
  }
  // En personas.component.ts - Método buscarPersonasValidacion
  buscarPersonasValidacion() {
    if (this.busquedaValidacion.trim().length < 2) {
      this.resultadosValidacion = [];
      return;
    }
    console.log('🔍 Buscando personas con término:', this.busquedaValidacion);
    // 👈 USAR EL MÉTODO buscar EN VEZ DE listarPersonas
    this.personaService.buscar(this.busquedaValidacion).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: resultados => {
        console.log('✅ Resultados de búsqueda:', resultados);
        this.resultadosValidacion = resultados || [];
      },
      error: error => {
        console.error('Error al buscar personas:', error);
        this.resultadosValidacion = [];
      }
    });
  }
  /**
   * Exportar reporte actual a PDF (según el reporte seleccionado)
   */
  exportarReportePDF() {
    if (!this.reporteSeleccionado) {
      this.notificationService.showWarning('Primero seleccione un reporte');
      return;
    }
    this.loadingReporte = true;
    let llamada = null;
    switch (this.reporteSeleccionado.titulo) {
      case 'Reporte por Edad':
        llamada = this.personaService.exportarReporteEdadPDF();
        break;
      case 'Reporte por Sexo':
        llamada = this.personaService.exportarReporteGeneroPDF();
        break;
      case 'Reporte por Departamento':
        llamada = this.personaService.exportarReporteDepartamentoPDF();
        break;
      case 'Reporte por Discapacidad':
        llamada = this.personaService.exportarReporteDiscapacidadPDF();
        break;
      default:
        this.notificationService.showError('Tipo de reporte no soportado');
        this.loadingReporte = false;
        return;
    }
    if (llamada) {
      llamada.subscribe({
        next: blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          const nombreArchivo = `${this.reporteSeleccionado.titulo.toLowerCase().replace(/ /g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;
          link.download = nombreArchivo;
          link.click();
          window.URL.revokeObjectURL(url);
          this.notificationService.showSuccess(`${this.reporteSeleccionado.titulo} exportado exitosamente`);
          this.loadingReporte = false;
        },
        error: error => {
          console.error('Error:', error);
          this.notificationService.showError(`Error al exportar ${this.reporteSeleccionado.titulo}`);
          this.loadingReporte = false;
        }
      });
    }
  }
  /**
   * Exportar reporte actual a Excel (según el reporte seleccionado)
   */
  exportarReporteExcel() {
    if (!this.reporteSeleccionado) {
      this.notificationService.showWarning('Primero seleccione un reporte');
      return;
    }
    this.loadingReporte = true;
    let llamada = null;
    switch (this.reporteSeleccionado.titulo) {
      case 'Reporte por Edad':
        llamada = this.personaService.exportarReporteEdadExcel();
        break;
      case 'Reporte por Sexo':
        llamada = this.personaService.exportarReporteGeneroExcel();
        break;
      case 'Reporte por Departamento':
        llamada = this.personaService.exportarReporteDepartamentoExcel();
        break;
      case 'Reporte por Discapacidad':
        llamada = this.personaService.exportarReporteDiscapacidadExcel();
        break;
      default:
        this.notificationService.showError('Tipo de reporte no soportado');
        this.loadingReporte = false;
        return;
    }
    if (llamada) {
      llamada.subscribe({
        next: blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          const nombreArchivo = `${this.reporteSeleccionado.titulo.toLowerCase().replace(/ /g, '_')}_${new Date().toISOString().slice(0, 10)}.xlsx`;
          link.download = nombreArchivo;
          link.click();
          window.URL.revokeObjectURL(url);
          this.notificationService.showSuccess(`${this.reporteSeleccionado.titulo} exportado exitosamente`);
          this.loadingReporte = false;
        },
        error: error => {
          console.error('Error:', error);
          this.notificationService.showError(`Error al exportar ${this.reporteSeleccionado.titulo}`);
          this.loadingReporte = false;
        }
      });
    }
  }
  static ɵfac = function PersonasListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_qr_service__WEBPACK_IMPORTED_MODULE_18__.QrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_19__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_persona_service__WEBPACK_IMPORTED_MODULE_20__.PersonaService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_21__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_personal_service__WEBPACK_IMPORTED_MODULE_22__.PersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_23__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_24__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_25__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_26__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: PersonasListComponent,
    selectors: [["app-personas-list"]],
    hostBindings: function PersonasListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveDocument"]);
      }
    },
    decls: 136,
    vars: 38,
    consts: [["personaForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], ["class", "system-notifications", 4, "ngIf"], [1, "persona-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-documento"], ["type", "text", "id", "filtro-documento", "placeholder", "Ej: 12345678", 3, "ngModelChange", "ngModel"], ["for", "filtro-nombres"], ["type", "text", "id", "filtro-nombres", "placeholder", "Buscar por nombres", 3, "ngModelChange", "ngModel"], ["for", "filtro-apellidos"], ["type", "text", "id", "filtro-apellidos", "placeholder", "Buscar por apellidos", 3, "ngModelChange", "ngModel"], ["for", "filtro-departamento"], ["type", "text", "id", "filtro-departamento", "placeholder", "Ej: La Paz", 3, "ngModelChange", "ngModel"], ["for", "filtro-discapacidad"], ["id", "filtro-discapacidad", 3, "ngModelChange", "ngModel"], [3, "value"], ["value", "SI"], ["value", "NO"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "table-subtitle"], [1, "table-actions"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "mostrarModal", "firmaGuardada", "modalCerrado", 4, "ngIf"], ["class", "qr-modal-overlay", 3, "click", 4, "ngIf"], [3, "isSidebarCollapsed", "isDarkTheme"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar personas...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "system-notifications"], ["class", "notification-alert", 3, "class", 4, "ngFor", "ngForOf"], [1, "notification-alert"], [1, "notification-content"], [1, "notification-icon"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"], [1, "documento-cell"], [1, "documento-icon"], [1, "documento-info"], [1, "documento-numero"], ["class", "documento-tipo", 4, "ngIf"], [1, "nombre-cell"], ["class", "persona-email", 4, "ngIf"], ["class", "genero-badge", 4, "ngIf"], ["class", "edad-info", 4, "ngIf"], [1, "telefono-cell"], ["class", "estado-civil-info", 4, "ngIf"], [1, "discapacidad-container"], [1, "discapacidad-badge"], ["class", "discapacidad-texto", 4, "ngIf"], [1, "actions-cell"], [1, "actions-buttons"], [1, "btn-action", "validation-badge", 3, "title"], ["title", "Ver Detalles", 1, "btn-action", "view", 3, "click"], ["title", "Editar", 1, "btn-action", "edit", 3, "click"], ["class", "btn-action qr", "title", "Ver C\u00F3digo QR", 3, "click", 4, "ngIf"], ["class", "qr-indicator", "title", "Esta persona no tiene c\u00F3digo QR generado", 4, "ngIf"], ["title", "Eliminar", 1, "btn-action", "delete", 3, "click"], ["title", "Exportar PDF", 1, "btn-action", "pdf", 3, "click"], [1, "documento-tipo"], [1, "persona-email"], [1, "genero-badge"], [1, "edad-info"], [1, "estado-civil-info"], [1, "discapacidad-texto"], ["title", "Ver C\u00F3digo QR", 1, "btn-action", "qr", 3, "click"], ["title", "Esta persona no tiene c\u00F3digo QR generado", 1, "qr-indicator"], [1, "qr-icon-disabled"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"], [1, "empty-state"], [1, "empty-icon"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [1, "tab-container"], [1, "tab-buttons"], [1, "tab-button", 3, "click"], [3, "ngSubmit"], ["class", "tab-content", 4, "ngIf"], [1, "terms-container"], [1, "terms-text"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "disabled", "click", 4, "ngIf"], [1, "footer-right"], ["type", "button", 1, "btn", "btn-cancel", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-btn", 4, "ngIf"], [1, "tab-content"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "numero_documento", 1, "form-label"], [1, "required"], ["type", "text", "id", "numero_documento", "name", "numero_documento", "required", "", "placeholder", "N\u00B0 Documento", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "nombres", 1, "form-label"], ["type", "text", "id", "nombres", "name", "nombres", "required", "", "placeholder", "Nombre completo", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "apellidos", 1, "form-label"], ["type", "text", "id", "apellidos", "name", "apellidos", "required", "", "placeholder", "Apellidos", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fecha_nacimiento", 1, "form-label"], ["type", "date", "id", "fecha_nacimiento", "name", "fecha_nacimiento", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "genero_id", 1, "form-label"], ["id", "genero_id", "name", "genero_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "estado_civil_id", 1, "form-label"], ["id", "estado_civil_id", "name", "estado_civil_id", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "tipo_documento_id", 1, "form-label"], ["id", "tipo_documento_id", "name", "tipo_documento_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "nacionalidad", 1, "form-label"], ["type", "text", "id", "nacionalidad", "name", "nacionalidad", "placeholder", "Nacionalidad", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "lugar_nacimiento", 1, "form-label"], ["type", "text", "id", "lugar_nacimiento", "name", "lugar_nacimiento", "placeholder", "Ciudad, Departamento", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "profesion_oficio", 1, "form-label"], ["type", "text", "id", "profesion_oficio", "name", "profesion_oficio", "placeholder", "Profesi\u00F3n u Oficio", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "ocupacion_actual", 1, "form-label"], ["type", "text", "id", "ocupacion_actual", "name", "ocupacion_actual", "placeholder", "Ocupaci\u00F3n Actual", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-label"], [1, "foto-upload"], ["class", "foto-preview", 4, "ngIf"], ["class", "foto-upload-area", 4, "ngIf"], [1, "foto-preview"], ["alt", "Foto preview", 3, "src"], ["type", "button", 1, "btn-remove-foto", 3, "click"], [1, "foto-upload-area"], [1, "upload-icon"], [1, "upload-text"], ["type", "file", "accept", "image/*", 3, "change"], ["for", "departamento", 1, "form-label"], ["type", "text", "id", "departamento", "name", "departamento", "placeholder", "Departamento", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "municipio", 1, "form-label"], ["type", "text", "id", "municipio", "name", "municipio", "placeholder", "Municipio", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "direccion_cifrada", 1, "form-label"], ["id", "direccion_cifrada", "name", "direccion_cifrada", "rows", "3", "placeholder", "Direcci\u00F3n completa", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "codigo_postal", 1, "form-label"], ["type", "text", "id", "codigo_postal", "name", "codigo_postal", "placeholder", "Codigo Postal", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "telefono_fijo_cifrado", 1, "form-label"], ["type", "tel", "id", "telefono_fijo_cifrado", "name", "telefono_fijo_cifrado", "placeholder", "Tel\u00E9fono Fijo", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "telefono_movil_cifrado", 1, "form-label"], ["type", "tel", "id", "telefono_movil_cifrado", "name", "telefono_movil_cifrado", "required", "", "placeholder", "Tel\u00E9fono M\u00F3vil", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "correo_electronico_cifrado", 1, "form-label"], ["type", "email", "id", "correo_electronico_cifrado", "name", "correo_electronico_cifrado", "placeholder", "Correo Electr\u00F3nico", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "correo_alternativo_cifrado", 1, "form-label"], ["type", "email", "id", "correo_alternativo_cifrado", "name", "correo_alternativo_cifrado", "placeholder", "Correo Alternativo", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "discapacidad", 1, "form-label"], ["id", "discapacidad", "name", "discapacidad", "rows", "4", "placeholder", "Describa el tipo de discapacidad si aplica", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "qr-unique-badge"], [1, "qr-container"], ["class", "qr-preview", 4, "ngIf"], ["class", "qr-temp", 4, "ngIf"], ["class", "qr-empty", 4, "ngIf"], ["class", "qr-readonly", 4, "ngIf"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "4", "placeholder", "Observaciones adicionales...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["for", "nombre_contacto_emergencia", 1, "form-label"], ["type", "text", "id", "nombre_contacto_emergencia", "name", "nombre_contacto_emergencia", "placeholder", "Nombre completo", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "parentesco_emergencia", 1, "form-label"], ["type", "text", "id", "parentesco_emergencia", "name", "parentesco_emergencia", "placeholder", "Parentesco", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "telefono_emergencia_cifrado", 1, "form-label"], ["type", "tel", "id", "telefono_emergencia_cifrado", "name", "telefono_emergencia_cifrado", "placeholder", "Tel\u00E9fono de Emergencia", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "tipo_vinculo_id", 1, "form-label"], ["id", "tipo_vinculo_id", "name", "tipo_vinculo_id", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "firma-container"], ["class", "firma-info", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", "id", "campos_cifrados", "name", "campos_cifrados", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "campos_cifrados", 1, "form-check-label"], [1, "qr-preview"], ["alt", "C\u00F3digo QR", 1, "qr-image", 2, "width", "150px", "height", "150px", "border-radius", "12px", 3, "load", "src"], [1, "qr-info"], [1, "qr-badge", "qr-generado"], [1, "qr-unique"], [1, "qr-temp"], ["styleClass", "qr-canvas", 3, "value", "size", "errorCorrectionLevel"], [1, "qr-badge", "qr-generando"], [1, "qr-empty"], [1, "qr-empty-icon"], [1, "qr-empty-text"], ["type", "button", 1, "btn", "btn-secondary", "btn-generar-qr", "mt-2", 3, "click", "disabled"], [1, "qr-readonly"], [1, "qr-readonly-message"], [1, "info-icon"], [1, "qr-help"], [1, "firma-info"], [1, "firma-icon"], [1, "firma-text"], ["type", "button", 1, "btn-ver-firma", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "ml-2", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "spinner-btn"], [3, "firmaGuardada", "modalCerrado", "mostrarModal"], [1, "confirm-modal"], [1, "confirm-header"], [1, "modal-close", 3, "click", "disabled"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning-bold"], [1, "confirm-name"], [1, "confirm-warning"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "confirm-modal", "confirm-modal-write"], [1, "confirm-instruction"], [1, "form-group", "confirm-input-group"], ["type", "text", "placeholder", "Escriba ELIMINAR", "autofocus", "", 1, "form-input", "confirm-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "loading-reporte", 4, "ngIf"], [1, "reportes-grid"], [1, "reporte-card", 3, "click"], [1, "reporte-icon"], [1, "reporte-title"], [1, "reporte-desc"], ["class", "reporte-preview", 4, "ngIf"], ["class", "reporte-seleccion", 4, "ngIf"], [1, "loading-reporte"], [1, "spinner"], [1, "reporte-preview"], [1, "reporte-content"], [1, "reporte-fecha"], ["class", "reporte-tabla", 4, "ngIf"], ["class", "reporte-vacio", 4, "ngIf"], ["class", "reporte-actions", 4, "ngIf"], [1, "reporte-tabla"], [1, "reporte-table"], [1, "reporte-vacio"], [1, "reporte-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "reporte-seleccion"], [1, "seleccion-icon"], [1, "modal-container", "modal-medium"], [1, "validacion-info"], [1, "validacion-descripcion"], [1, "validacion-buscador"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar por nombre, apellido o documento...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["class", "validacion-resultados", 4, "ngIf"], ["class", "validacion-vacio", 4, "ngIf"], ["class", "persona-seleccionada", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [1, "validacion-resultados"], ["class", "resultado-item", 3, "seleccionado", "click", 4, "ngFor", "ngForOf"], [1, "resultado-item", 3, "click"], [1, "resultado-avatar"], [1, "resultado-info"], [1, "resultado-nombre"], [1, "resultado-detalle"], [1, "separador"], ["class", "resultado-estado", 4, "ngIf"], [1, "resultado-estado"], [1, "badge-validado"], [1, "validacion-vacio"], [1, "persona-seleccionada"], [1, "seleccionada-card"], [1, "seleccionada-info"], [1, "seleccionada-nombre"], [1, "seleccionada-detalle"], ["class", "seleccionada-alerta", 4, "ngIf"], [1, "seleccionada-alerta"], [1, "qr-modal-overlay", 3, "click"], [1, "qr-modal", 3, "click"], [1, "qr-modal-header"], [1, "qr-modal-subtitle"], ["class", "qr-modal-image", 4, "ngIf"], [1, "qr-modal-info"], [1, "persona-nombre"], [1, "persona-documento"], [1, "qr-modal-actions"], [1, "qr-modal-image"], [3, "value", "size", "errorCorrectionLevel"]],
    template: function PersonasListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("toggleSidebar", function PersonasListComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function PersonasListComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("openSearchModal", function PersonasListComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, PersonasListComponent_div_4_Template, 13, 6, "div", 5)(5, PersonasListComponent_div_5_Template, 5, 7, "div", 6)(6, PersonasListComponent_div_6_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "\uD83D\uDC65 Gesti\u00F3n de Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Administre el registro de personas del sistema SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_15_listener() {
          return ctx.abrirModalCrear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, " Nueva Persona ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_19_listener() {
          return ctx.exportarExcel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "\uD83D\uDCE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " Exportar Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_23_listener() {
          return ctx.generarReportes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_31_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 20)(34, "div", 21)(35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "N\u00B0 Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtro.numero_documento, $event) || (ctx.filtro.numero_documento = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 21)(39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtro.nombres, $event) || (ctx.filtro.nombres = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 21)(43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_Template_input_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtro.apellidos, $event) || (ctx.filtro.apellidos = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div", 21)(47, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_Template_input_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtro.departamento, $event) || (ctx.filtro.departamento = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "div", 21)(51, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PersonasListComponent_Template_select_ngModelChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.filtro.discapacidad, $event) || (ctx.filtro.discapacidad = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "Con discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, "Sin discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "div", 21)(61, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_61_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 35)(66, "div", 36)(67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70, "Total Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 36)(72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](75, "Hombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](76, "div", 36)(77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80, "Mujeres");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "div", 36)(82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85, "Con Discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "div", 39)(87, "div", 40)(88, "div", 41)(89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](90, "\uD83D\uDCCB Lista de Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](91, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "div", 43)(94, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PersonasListComponent_Template_button_click_94_listener() {
          return ctx.validarIdentidad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97, " Validar Identidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "div", 44)(99, "table", 45)(100, "thead")(101, "tr")(102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103, "N\u00B0 Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](107, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](109, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111, "G\u00E9nero");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](113, "Fecha Nac.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](115, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](117, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](119, "Estado Civil");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](121, "Discapacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](122, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](123, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](124, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](125, PersonasListComponent_tr_125_Template, 56, 32, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](126, PersonasListComponent_div_126_Template, 7, 3, "div", 48)(127, PersonasListComponent_div_127_Template, 11, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](128, PersonasListComponent_div_128_Template, 34, 18, "div", 50)(129, PersonasListComponent_app_firma_modal_129_Template, 1, 1, "app-firma-modal", 51)(130, PersonasListComponent_div_130_Template, 30, 8, "div", 50)(131, PersonasListComponent_div_131_Template, 37, 9, "div", 50)(132, PersonasListComponent_div_132_Template, 41, 5, "div", 50)(133, PersonasListComponent_div_133_Template, 26, 9, "div", 50)(134, PersonasListComponent_div_134_Template, 18, 6, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](135, "app-footer", 53);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.notificaciones.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.numero_documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.departamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.discapacidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.masculino);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.femenino);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.estadisticas.conDiscapacidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate3"](" Mostrando ", ctx.metaPaginacion.from, " a ", ctx.metaPaginacion.to, " de ", ctx.metaPaginacion.total, " registros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.personas);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.totalPaginas > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.personas.length === 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mostrarModalFirma);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showConfirmacionFisicaModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showReportesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showValidarIdentidadModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showQRModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed)("isDarkTheme", ctx.isDarkTheme);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_9__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent, _components_firma_modal_component__WEBPACK_IMPORTED_MODULE_8__.FirmaModalComponent, ng_qrcode__WEBPACK_IMPORTED_MODULE_13__.QrCodeComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".persona-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n  width: calc(100% - 280px);\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.dashboard-container.sidebar.collapsed[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-md);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n  transition: color 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-hover);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--gradient-primary);\n  opacity: 0.7;\n  transition: opacity 0.3s;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-md);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 600px;\n  overflow-y: auto;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .documento-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .documento-cell[_ngcontent-%COMP%]   .documento-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nombre-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .telefono-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 16px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.pdf[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.pdf[_ngcontent-%COMP%]:hover {\n  background: var(--warning);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.qr[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--success), var(--success-hover));\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.qr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.sexo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.sexo-badge.sexo-masculino[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.sexo-badge.sexo-femenino[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.sexo-badge.sexo-otro[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.discapacidad-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.discapacidad-badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.discapacidad-badge.badge-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.discapacidad-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.discapacidad-container[_ngcontent-%COMP%]   .discapacidad-badge[_ngcontent-%COMP%] {\n  width: fit-content;\n}\n.discapacidad-container[_ngcontent-%COMP%]   .discapacidad-texto[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  max-width: 200px;\n  word-wrap: break-word;\n  padding: 2px 4px;\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n  border-left: 3px solid var(--warning);\n}\n.validation-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  transition: all 0.3s ease;\n}\n.validation-badge.validado[_ngcontent-%COMP%] {\n  background: var(--gradient-success);\n  box-shadow: var(--shadow-sm);\n}\n.validation-badge.validado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.validation-badge.validado[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.validation-badge.no-validado[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  box-shadow: var(--shadow-sm);\n}\n.validation-badge.no-validado[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.validation-badge.no-validado[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  font-weight: 600;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-large[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  max-height: 90vh;\n}\n@media (max-width: 768px) {\n  .modal-large[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 95vh;\n  }\n}\n.modal-medium[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  margin-left: 100px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n  flex-shrink: 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 32px;\n  border-bottom: 2px solid var(--border-color);\n  padding-bottom: 8px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  background: none;\n  color: var(--text-muted);\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 8px 8px 0 0;\n  transition: all 0.3s;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-hover);\n}\n.tab-container[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.tab-container[_ngcontent-%COMP%]   .tab-buttons[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary);\n  border-radius: 2px;\n}\n.tab-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.form-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 15px;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover, \n.form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:hover, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:hover {\n  border-color: var(--input-border-hover);\n}\n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n  line-height: 1.5;\n}\n.form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 2px solid var(--border-color);\n  margin-bottom: 12px;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-preview[_ngcontent-%COMP%]   .btn-remove-foto[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--danger);\n  color: white;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-preview[_ngcontent-%COMP%]   .btn-remove-foto[_ngcontent-%COMP%]:hover {\n  background: var(--danger-hover);\n  transform: scale(1.1);\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-upload-area[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border: 2px dashed var(--border-color);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-upload-area[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--bg-hover);\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-upload-area[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n  opacity: 0.7;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-upload-area[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.foto-upload[_ngcontent-%COMP%]   .foto-upload-area[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.firma-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 15px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-primary);\n}\n.firma-container[_ngcontent-%COMP%]   .firma-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  background: var(--bg-tertiary);\n  border-radius: 6px;\n}\n.firma-container[_ngcontent-%COMP%]   .firma-info[_ngcontent-%COMP%]   .firma-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.firma-container[_ngcontent-%COMP%]   .firma-info[_ngcontent-%COMP%]   .firma-text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.firma-container[_ngcontent-%COMP%]   .firma-info[_ngcontent-%COMP%]   .btn-ver-firma[_ngcontent-%COMP%] {\n  background: var(--info);\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.firma-container[_ngcontent-%COMP%]   .firma-info[_ngcontent-%COMP%]   .btn-ver-firma[_ngcontent-%COMP%]:hover {\n  background: var(--info-hover);\n  transform: translateY(-2px);\n}\n.qr-container[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 1.5rem;\n  border: 2px dashed var(--border-color);\n  transition: all 0.3s ease;\n}\n.qr-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n}\n.qr-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.qr-preview[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  display: block;\n  background: white;\n  border-radius: 12px;\n  padding: 0.5rem;\n  border: 2px solid var(--border-color);\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge.qr-generado[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-unique[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.qr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n}\n.qr-empty[_ngcontent-%COMP%]   .qr-empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 0.5rem;\n}\n.qr-empty[_ngcontent-%COMP%]   .qr-empty-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.qr-readonly[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-readonly-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-readonly-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-help[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-style: italic;\n  margin-top: 0.5rem;\n}\n.validacion-info[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-left: 3px solid var(--primary);\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.validacion-info[_ngcontent-%COMP%]   .validacion-descripcion[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n}\n.validacion-buscador[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.validacion-buscador[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.validacion-buscador[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 1rem;\n}\n.validacion-buscador[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  font-size: 1rem;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  transition: all 0.3s ease;\n}\n.validacion-buscador[_ngcontent-%COMP%]   .search-input-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.validacion-resultados[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 1.5rem;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item.seleccionado[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-left: 4px solid var(--primary);\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]   .resultado-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]   .resultado-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]   .resultado-info[_ngcontent-%COMP%]   .resultado-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]   .resultado-info[_ngcontent-%COMP%]   .resultado-detalle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.validacion-resultados[_ngcontent-%COMP%]   .resultado-item[_ngcontent-%COMP%]   .resultado-estado[_ngcontent-%COMP%]   .badge-validado[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n  padding: 0.25rem 0.5rem;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.validacion-vacio[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.persona-seleccionada[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.persona-seleccionada[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.persona-seleccionada[_ngcontent-%COMP%]   .seleccionada-card[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 1rem;\n  border: 2px solid var(--border-color);\n}\n.persona-seleccionada[_ngcontent-%COMP%]   .seleccionada-card[_ngcontent-%COMP%]   .seleccionada-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.persona-seleccionada[_ngcontent-%COMP%]   .seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.persona-seleccionada[_ngcontent-%COMP%]   .seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.persona-seleccionada[_ngcontent-%COMP%]   .seleccionada-card[_ngcontent-%COMP%]   .seleccionada-alerta[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  background: var(--danger-light);\n  color: var(--danger);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  text-align: center;\n  font-weight: 500;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  font-size: 16px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p.confirm-warning[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 500;\n  font-size: 14px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-warning-bold[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-name[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: bold;\n  margin: 10px 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-instruction[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%]   .confirm-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 15px;\n  font-size: 18px;\n  text-align: center;\n  font-weight: bold;\n  background: var(--input-bg);\n  border: 2px solid var(--border-color);\n  color: var(--text-primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%]   .confirm-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--danger);\n  box-shadow: var(--input-error-shadow);\n  outline: none;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-input-group[_ngcontent-%COMP%]   .confirm-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n  font-size: 14px;\n  font-weight: normal;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.reportes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.3s;\n  text-align: center;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.reportes-grid[_ngcontent-%COMP%]   .reporte-card[_ngcontent-%COMP%]   .reporte-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.reporte-preview[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n}\n.reporte-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .reporte-content[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n}\n.reporte-preview[_ngcontent-%COMP%]   .reporte-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n.qr-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 24px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease;\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--modal-border);\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   .qr-modal-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  display: block;\n  background: white;\n  border-radius: 12px;\n  padding: 0.5rem;\n  border: 2px solid var(--border-color);\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  padding: 1rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-documento[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 50px;\n  padding: 0.75rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--border-color);\n  color: var(--text-primary);\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  border: none;\n  color: white;\n}\n.qr-modal-overlay[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.terms-container[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border-left: 4px solid var(--primary);\n}\n.terms-container[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--gradient-success);\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  color: var(--link-color);\n}\n.btn-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--link-hover);\n  text-decoration: underline;\n}\n.loading-reporte[_ngcontent-%COMP%], \n.loading-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.loading-reporte[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.loading-section[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  display: inline-block;\n}\n.loading-reporte[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.loading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-top: 10px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--spinner-bg);\n  border-top-color: var(--spinner-active);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 15px;\n}\n.spinner-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-right: 5px;\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n@media (max-width: 1024px) {\n  .persona-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n    text-align: center;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .tab-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tab-buttons[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 8px;\n    margin-bottom: 4px;\n  }\n  .tab-buttons[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .actions-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center !important;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .reportes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chatbot-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  pointer-events: auto !important;\n  z-index: 10001 !important;\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode) {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode)   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-container[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-header[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-content[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%] {\n  display: none !important;\n  visibility: hidden !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n}\n.chatbot-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  z-index: 10002;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 800px;\n  width: auto;\n}\n.chatbot-container[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.chatbot-container.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, var(--primary-hover), var(--security));\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.chatbot-footer[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n  border: none;\n  font-family: inherit;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--border-dark);\n  transform: translateY(-2px);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border: none;\n  color: white;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chatbot-minimized[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  z-index: 10002;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  pointer-events: auto !important;\n  z-index: 10003 !important;\n}\n.chatbot-minimized[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-lg);\n}\n.chatbot-minimized.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: var(--shadow-md);\n  }\n  50% {\n    box-shadow: var(--shadow-lg);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@media (max-width: 1024px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .chatbot-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n  }\n  .chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .chatbot-minimized[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .chatbot-minimized[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.chatbot-container.maximized[_ngcontent-%COMP%] {\n  width: 100vw !important;\n  height: 100vh !important;\n  max-width: 100vw !important;\n  max-height: 100vh !important;\n  border-radius: 0;\n  margin: 0;\n}\n.chatbot-container.maximized[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%] {\n  margin: 20px 15px;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.7s;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover:hover::after {\n  left: 100%;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 12px;\n  animation: _ngcontent-%COMP%_pulseIcon 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseIcon {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-text[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  letter-spacing: 0.8px;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-badge[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_pulseBadge 2s infinite;\n  margin-left: 10px;\n}\n@keyframes _ngcontent-%COMP%_pulseBadge {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wZXJzb25hcy9wYWdlcy9wZXJzb25hcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFqQkY7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQWpCRjtBQW9CRTtFQUdJLGlCQUFBO0FBcEJOO0FBMkJBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNDLHlCQUFBO0FBekJIO0FBMkJFO0VBQ0UsVUFBQTtBQXpCSjtBQTRCRTtFQUNFLHVCQUFBO0FBMUJKO0FBNkJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQTNCSjtBQTZCSTtFQUNFLDhCQUFBO0FBM0JOO0FBK0JFO0VBQ0UsaUJBQUE7RUFDRSx3QkFBQTtBQTdCTjtBQW9DQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtBQWxDRjtBQXdCQTtFQWNNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBbkNOO0FBZUE7RUF3Qk0sZUFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBQXBDTjtBQVVBO0VBK0JJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXRDSjtBQTZDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FBM0NGO0FBcUNBO0VBU0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTNDSjtBQStC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QUFBO0VBOWRMO0VBK2RBO0lBQU8seUJBQUE7RUE1ZFA7QUFDRjtBQThkQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBNWRGO0VBOGRBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBNWRGO0FBQ0Y7QUFrZUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBaGVGO0VBbWVBO0lBQ0UsZ0JBQUE7RUFqZUY7QUFDRjtBQW9lQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBbGVGO0VBcWVBO0lBQ0Usa0JBQUE7RUFuZUY7RUFzZUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXBlRjtFQXVlQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQXJlRjtFQXdlQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUF0ZUY7QUFDRjtBQXllQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXZlRjtFQTBlQTtJQUNFLGdCQUFBO0lBQ0EsT0FBQTtFQXhlRjtFQTJlQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUF6ZUY7RUE0ZUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBMWVGO0VBNmVBO0lBQ0UsZUFBQTtFQTNlRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBFUlNPTkFTIENPTVBPTkVOVCAtIEVTVElMT1MgQ09OIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTm90YTogVG9kYXMgbGFzIHZhcmlhYmxlcyBDU1MgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xuLy8gU2UgYWNjZWRlbiBtZWRpYW50ZSB2YXIoLS1ub21icmUtdmFyaWFibGUpXG5AdHJhbnNpdGlvbi1zcGVlZDogMC4zcztcbkBzaWRlYmFyLXdpZHRoOiAyODBweDtcbkBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDogNzBweDtcblxuLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZG9cbkBzY3JvbGxiYXItdHJhY2s6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5Ac2Nyb2xsYmFyLXRodW1iOiByZ2JhKDAsIDAsIDAsIDAuMik7XG5Ac2Nyb2xsYmFyLXRodW1iLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5wZXJzb25hLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gIC8vIEN1YW5kbyBlbCBzaWRlYmFyIGVzdMODwqEgY29sYXBzYWRvXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIC8vIEFzZWd1cmFybm9zIHF1ZSBlbCBjb250ZW5pZG8gb2N1cGUgdG9kbyBlbCBlc3BhY2lvXG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB9XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5JRE8gUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiA2NnB4O1xuICBtYXJnaW4tbGVmdDogMjY0cHg7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogQHNjcm9sbGJhci10aHVtYiB0cmFuc3BhcmVudDtcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSBAc2lkZWJhci13aWR0aCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogQHNjcm9sbGJhci10aHVtYjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IEBzY3JvbGxiYXItdGh1bWItaG92ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRhc2hib2FyZC1jb250YWluZXIuc2lkZWJhci5jb2xsYXBzZWQgfiAmIHtcbiAgICBtYXJnaW4tbGVmdDogQHNpZGViYXItY29sbGFwc2VkLXdpZHRoO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIEBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLnBhZ2Utc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklMVFJPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5maWx0cm9zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gIC5maWx0cm9zLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAuYnRuLWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICAgIGdhcDogMTZweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5maWx0cm8taXRlbSB7XG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUQUTDg8KNU1RJQ0FTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLnN0YXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEFCTEEgREUgUEVSU09OQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcblxuICAudGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5kYXRhLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1pbi13aWR0aDogMTAwMHB4O1xuXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICYudGV4dC1jZW50ZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAuZG9jdW1lbnRvLWNlbGwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIC5kb2N1bWVudG8taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ub21icmUtY2VsbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlbGVmb25vLWNlbGwge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTIERFIEFDQ0nDg8KTTiBFTiBUQUJMQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hY3Rpb25zLWNlbGwge1xuICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0bi1hY3Rpb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmLnZpZXcge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWluZm8pO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucGRmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdWNjZXNzKSwgdmFyKC0tc3VjY2Vzcy1ob3ZlcikpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJBREdFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZXhvLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgJi5zZXhvLW1hc2N1bGlubyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5zZXhvLWZlbWVuaW5vIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICB9XG5cbiAgJi5zZXhvLW90cm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIH1cbn1cblxuLmRpc2NhcGFjaWRhZC1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuYmFkZ2Utd2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5iYWRnZS1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIH1cbn1cblxuLmRpc2NhcGFjaWRhZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcblxuICAuZGlzY2FwYWNpZGFkLWJhZGdlIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuZGlzY2FwYWNpZGFkLXRleHRvIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXdhcm5pbmcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQUxJREFUSU9OIEJBREdFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZhbGlkYXRpb24tYmFkZ2Uge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICYudmFsaWRhZG8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXN1Y2Nlc3MpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAmLm5vLXZhbGlkYWRvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBR0lOQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAucGFnaW5hdGlvbi1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLXBhZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuXG4gICAgLnBhZ2luYXRpb24tcGFnZSB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUQURPIFZBQ8ODwo1PXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG5cbiAgLmVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLm1vZGFsLWxhcmdlIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICB9XG59XG5cbi5tb2RhbC1tZWRpdW0ge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuICBmbGV4LXNocmluazogMDtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAubW9kYWwtY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMzJweDtcblxuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDMycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuXG4gIC5mb290ZXItcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQUJTIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50YWItY29udGFpbmVyIHtcbiAgLnRhYi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgIC50YWItYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFiLWNvbnRlbnQge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRk9STVVMQVJJT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3JtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMzJweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbn1cblxuLmZvcm0tY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuXG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWlucHV0LFxuICAuZm9ybS1zZWxlY3QsXG4gIC5mb3JtLXRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS10ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVUExPQUQgREUgRk9UT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3RvLXVwbG9hZCB7XG4gIC5mb3RvLXByZXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAuYnRuLXJlbW92ZS1mb3RvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgcmlnaHQ6IDhweDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1ob3Zlcik7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm90by11cGxvYWQtYXJlYSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICB9XG5cbiAgICAudXBsb2FkLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cblxuICAgIC51cGxvYWQtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJUk1BIERJR0lUQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlybWEtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcblxuICAuZmlybWEtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICAuZmlybWEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmZpcm1hLXRleHQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5idG4tdmVyLWZpcm1hIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8taG92ZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBRUiBDT05UQUlORVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbn1cblxuLnFyLXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgcXItY29kZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxuXG4gIC5xci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMjVyZW07XG5cbiAgICAucXItYmFkZ2Uge1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAmLnFyLWdlbmVyYWRvIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXItdW5pcXVlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLnFyLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgLnFyLWVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cblxuICAucXItZW1wdHktdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuLnFyLXJlYWRvbmx5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIC5xci1yZWFkb25seS1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gICAgLmluZm8taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgLnFyLWhlbHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFMSURBQ0nDg8KTTiBERSBJREVOVElEQURcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udmFsaWRhY2lvbi1pbmZvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAudmFsaWRhY2lvbi1kZXNjcmlwY2lvbiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLnZhbGlkYWNpb24tYnVzY2Fkb3Ige1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxcmVtO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDIuNXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi52YWxpZGFjaW9uLXJlc3VsdGFkb3Mge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gIC5yZXN1bHRhZG8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgfVxuXG4gICAgJi5zZWxlY2Npb25hZG8ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5yZXN1bHRhZG8tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cblxuICAgIC5yZXN1bHRhZG8taW5mbyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAucmVzdWx0YWRvLW5vbWJyZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAucmVzdWx0YWRvLWRldGFsbGUge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3VsdGFkby1lc3RhZG8ge1xuICAgICAgLmJhZGdlLXZhbGlkYWRvIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnZhbGlkYWNpb24tdmFjaW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ucGVyc29uYS1zZWxlY2Npb25hZGEge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICAuc2VsZWNjaW9uYWRhLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC5zZWxlY2Npb25hZGEtbm9tYnJlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cblxuICAgIC5zZWxlY2Npb25hZGEtZGV0YWxsZSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY2Npb25hZGEtYWxlcnRhIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgQ09ORklSTUFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNvbmZpcm0tbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuXG4gIC5jb25maXJtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29uZmlybS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAmLmNvbmZpcm0td2FybmluZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbmZpcm0td2FybmluZy1ib2xkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC5jb25maXJtLW5hbWUge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG5cbiAgICAuY29uZmlybS1pbnN0cnVjdGlvbiB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG5cbiAgICAuY29uZmlybS1pbnB1dC1ncm91cCB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgLmNvbmZpcm0taW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZXJyb3Itc2hhZG93KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgUkVQT1JURVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucmVwb3J0ZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLnJlcG9ydGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWhvdmVyLXNoYWRvdyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5yZXBvcnRlLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAucmVwb3J0ZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnJlcG9ydGUtZGVzYyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG59XG5cbi5yZXBvcnRlLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICAucmVwb3J0ZS1jb250ZW50IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAucmVwb3J0ZS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBRUiBPVkVSTEFZXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnFyLW1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG5cbiAgLnFyLW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBzY2FsZUluIDAuM3MgZWFzZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgICBAa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXItbW9kYWwtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnFyLW1vZGFsLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xci1tb2RhbC1pbWFnZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIHFyLWNvZGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWluZm8ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAgIC5wZXJzb25hLW5vbWJyZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAucGVyc29uYS1kb2N1bWVudG8ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMXJlbTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEVSTVMgQ09OVEFJTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRlcm1zLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG5cbiAgLnRlcm1zLXRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG5cbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIH1cbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4uYnRuLXNtIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgY29sb3I6IHZhcigtLWxpbmstaG92ZXIpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIFNUQVRFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2FkaW5nLXJlcG9ydGUsXG4ubG9hZGluZy1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gIC5zcGlubmVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3Bpbm5lci1iZyk7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXNwaW5uZXItYWN0aXZlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbjogMCBhdXRvIDE1cHg7XG59XG5cbi5zcGlubmVyLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNwaW5uaW5nIHtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJVElFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBlcnNvbmEtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuXG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnRhYi1idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRhYi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAgICYuYWN0aXZlOjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAuZm9vdGVyLXJpZ2h0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAudGFibGUtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnJlcG9ydGVzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ0hBVEJPVCBTSUdQQVogLSBFU1RJTE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBPdmVybGF5IHByaW5jaXBhbCBkZWwgY2hhdGJvdFxuLmNoYXRib3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0Ym90LWNvbnRhaW5lcixcbiAgICAuY2hhdGJvdC1oZWFkZXIsXG4gICAgLmNoYXRib3QtY29udGVudCxcbiAgICAuY2hhdGJvdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICY6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1oZWFkZXIge1xuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4taWNvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1pbmltaXplLWJ0bi5hbmltYXRpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jbG9zZS1tb2RhbC1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1pbmltaXplQW5pbWF0aW9uIHtcbiAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICAgICAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgICAgICAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRlbnQge1xuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWhvdmVyKSwgdmFyKC0tc2VjdXJpdHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5mb290ZXItc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xuXG4gICAgLnN0YXQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1taW5pbWl6ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFuaW1hdGlvbjogYnViYmxlQXBwZWFyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAubW9kYWwtb3ZlcmxheS1zaWdwYXoubWluaW1pemVkLW1vZGUgJiB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAwMDMgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmJ1YmJsZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgYW5pbWF0aW9uOiBzcGluU2xvdyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLmJ1YmJsZS10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5idWJibGUtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZVB1bHNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxufVxuXG4uYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2hhdGJvdC1jb250YWluZXI6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmNoYXRib3QtZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZm9vdGVyLXN0YXRzIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXRib3QtY29udGFpbmVyOm5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLmNoYXRib3QtaGVhZGVyIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cblxuICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jaGF0Ym90LWNvbnRhaW5lcjpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5jaGF0Ym90LW1pbmltaXplZCB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lci5tYXhpbWl6ZWQge1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoYXRib3QtY29udGFpbmVyLm1heGltaXplZCAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gQXl1ZGEgU0lHUEFaIGVuIFNpZGViYXJcbi5zaWRlYmFyLWNoYXQtc2lncGF6IHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG5cbiAgLmNoYXQtc2lncGF6LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXG4gICAgICAgICAgdHJhbnNwYXJlbnQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3M7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2VJY29uIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxuICAgIH1cblxuICAgIC5jaGF0LXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgfVxuXG4gICAgLmNoYXQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZUJhZGdlIDJzIGluZmluaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwdWxzZUJhZGdlIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4gICAgfVxuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU0lHUEFaIC0gRVNUSUxPUyDDg8KaTklDT1MgKENPTVBMRVRPKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFyaWFibGVzIGludGVybmFzIChubyBpbnRlcmZpZXJlbiBjb24gZ2xvYmFsZXMpXG5Ac2lncGF6LXByaW1hcnk6ICM0ZjQ2ZTU7XG5Ac2lncGF6LXNlY29uZGFyeTogIzYzNjZmMTtcbkBzaWdwYXotYWNjZW50OiAjMDBmZjg4O1xuQHNpZ3Bhei1kYW5nZXI6ICNlZjQ0NDQ7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPVkVSTEFZIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAvLyBTb2xvIG1vc3RyYXIgZm9uZG8gY3VhbmRvIGVsIG1vZGFsIGVzdMODwqEgYWJpZXJ0b1xuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VhbmRvIGVzdMODwqEgbWluaW1pemFkbzogc2luIGZvbmRvIG5pIGJsb3F1ZW9cbiAgJi5taW5pbWl6ZWQtbW9kZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBTb2xvIGxhIGJ1cmJ1amEgZXMgaW50ZXJhY3RpdmFcbiAgICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBhbmltYXRpb246IG1vZGFsU2xpZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLm1vZGFsLWJ0biB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICB9XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXRvb2x0aXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6IDEwMDAyO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICB9XG5cbiAgICAgICYubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XG4gICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC41KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDVUVSUE8gREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZGFcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotc2Vjb25kYXJ5LCBAc2lncGF6LXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFzZWd1cmFyIHF1ZSBlbCBjb21wb25lbnRlIGludGVybm8gb2N1cGUgdG9kbyBlbCBhbmNob1xuICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVUkJVSkEgRkxPVEFOVEUgKE1JTklNSVpBRE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmJ1YmJsZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuYnViYmxlLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLmNsb3NlLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gIH1cblxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGNvbG9yOiBAc2lncGF6LXByaW1hcnk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsU2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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

/***/ }),

/***/ 54143:
/*!**********************************************************************!*\
  !*** ./src/app/modules/personas/components/firma-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirmaModalComponent: () => (/* binding */ FirmaModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 36124);


 // ← AÑADE ESTA IMPORTACIÓN



const _c0 = ["firmaCanvas"];
function FirmaModalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vista previa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.firmaDataURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class FirmaModalComponent {
  canvasRef;
  firmaGuardada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  modalCerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  mostrarModal = false;
  canvas;
  ctx;
  estaDibujando = false;
  ultimoX = 0;
  ultimoY = 0;
  historial = [];
  // Configuración
  colorFirma = '#000000';
  grosorLinea = 2;
  firmaDataURL = null;
  puedeDeshacer = false;
  ngAfterViewInit() {
    this.inicializarCanvas();
  }
  inicializarCanvas() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    // Configuración inicial
    this.ctx.lineWidth = this.grosorLinea;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = this.colorFirma;
    // Listeners para dibujar
    this.canvas.addEventListener('mousedown', this.comenzarDibujo.bind(this));
    this.canvas.addEventListener('mousemove', this.dibujar.bind(this));
    this.canvas.addEventListener('mouseup', this.terminarDibujo.bind(this));
    this.canvas.addEventListener('mouseout', this.terminarDibujo.bind(this));
    // Para dispositivos táctiles
    this.canvas.addEventListener('touchstart', this.comenzarDibujoTouch.bind(this));
    this.canvas.addEventListener('touchmove', this.dibujarTouch.bind(this));
    this.canvas.addEventListener('touchend', this.terminarDibujo.bind(this));
  }
  comenzarDibujo(e) {
    this.estaDibujando = true;
    const rect = this.canvas.getBoundingClientRect();
    this.ultimoX = e.clientX - rect.left;
    this.ultimoY = e.clientY - rect.top;
    // Guardar estado para deshacer
    this.guardarEstado();
  }
  comenzarDibujoTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    this.canvas.dispatchEvent(mouseEvent);
  }
  dibujar(e) {
    if (!this.estaDibujando) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.ctx.beginPath();
    this.ctx.moveTo(this.ultimoX, this.ultimoY);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ultimoX = x;
    this.ultimoY = y;
    // Actualizar vista previa
    this.actualizarVistaPrevia();
  }
  dibujarTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    this.canvas.dispatchEvent(mouseEvent);
  }
  terminarDibujo() {
    this.estaDibujando = false;
  }
  limpiarFirma() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.firmaDataURL = null;
    this.historial = [];
    this.puedeDeshacer = false;
  }
  deshacer() {
    if (this.historial.length > 0) {
      const estadoAnterior = this.historial.pop();
      this.ctx.putImageData(estadoAnterior, 0, 0);
      this.puedeDeshacer = this.historial.length > 0;
      this.actualizarVistaPrevia();
    }
  }
  guardarEstado() {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    this.historial.push(imageData);
    this.puedeDeshacer = true;
  }
  actualizarVistaPrevia() {
    this.firmaDataURL = this.canvas.toDataURL('image/png');
  }
  guardarFirma() {
    if (this.firmaDataURL) {
      // Convertir a base64 y enviar al componente padre
      this.firmaGuardada.emit(this.firmaDataURL);
      this.cerrarModal();
    }
  }
  cerrarModal() {
    this.limpiarFirma();
    this.modalCerrado.emit();
  }
  cambiarColor() {
    if (this.ctx) {
      this.ctx.strokeStyle = this.colorFirma;
    }
  }
  cambiarGrosor() {
    if (this.ctx) {
      this.ctx.lineWidth = this.grosorLinea;
    }
  }
  static ɵfac = function FirmaModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FirmaModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FirmaModalComponent,
    selectors: [["app-firma-modal"]],
    viewQuery: function FirmaModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
      }
    },
    inputs: {
      mostrarModal: "mostrarModal"
    },
    outputs: {
      firmaGuardada: "firmaGuardada",
      modalCerrado: "modalCerrado"
    },
    decls: 36,
    vars: 6,
    consts: [["firmaCanvas", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "firma-container"], ["width", "600", "height", "300", 1, "firma-canvas"], [1, "firma-controls"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-sm", "btn-secondary", 3, "click", "disabled"], [1, "color-picker"], ["type", "color", 3, "ngModelChange", "change", "ngModel"], [1, "grosor-linea"], ["type", "range", "min", "1", "max", "10", 3, "ngModelChange", "change", "ngModel"], ["class", "preview-container", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "preview-container"], ["alt", "Vista previa firma", 1, "preview-image", 3, "src"]],
    template: function FirmaModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrarModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_div_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Agregar Firma");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrarModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "canvas", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.limpiarFirma());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\uD83D\uDDD1\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Limpiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.deshacer());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u21A9\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Deshacer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FirmaModalComponent_Template_input_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.colorFirma, $event) || (ctx.colorFirma = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FirmaModalComponent_Template_input_change_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cambiarColor());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FirmaModalComponent_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.grosorLinea, $event) || (ctx.grosorLinea = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FirmaModalComponent_Template_input_change_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cambiarGrosor());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, FirmaModalComponent_div_28_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17)(30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.cerrarModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FirmaModalComponent_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.guardarFirma());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\uD83D\uDCBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Guardar Firma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.puedeDeshacer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.colorFirma);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Grosor: ", ctx.grosorLinea, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.grosorLinea);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.firmaDataURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.firmaDataURL);
      }
    },
    dependencies: [
    // ← AÑADE ESTA PROPIEDAD imports
    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule // ← AÑADE FormsModule AQUÍ
    , _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--modal-overlay);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 8px;\n  width: 90%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-xl);\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--modal-header-bg);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: var(--text-primary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--bg-hover);\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: var(--bg-primary);\n}\n.firma-container[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border-color);\n  border-radius: 8px;\n  padding: 15px;\n  background: var(--bg-primary);\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.firma-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n}\n.firma-canvas[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  background: white;\n  border: 1px solid var(--input-border);\n  border-radius: 4px;\n  cursor: crosshair;\n  touch-action: none;\n  transition: all 0.3s ease;\n}\n.firma-canvas[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.firma-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-top: 15px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%], \n.firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%], \n.firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 2px solid var(--border-color);\n  border-radius: 4px;\n  cursor: pointer;\n  background: var(--input-bg);\n  transition: all 0.3s ease;\n}\n.firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%]:hover, \n.firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: scale(1.05);\n}\n.firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%], \n.firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%] {\n  width: 100px;\n  accent-color: var(--primary);\n}\n.preview-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 15px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-tertiary);\n}\n.preview-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: var(--text-primary);\n  font-size: 1rem;\n  font-weight: 600;\n}\n.preview-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 100px;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  background: white;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  background: var(--modal-footer-bg);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: translate(-50%, -50%);\n  transition: width 0.6s, height 0.6s;\n}\n.btn[_ngcontent-%COMP%]:active::after {\n  width: 300px;\n  height: 300px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-danger[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--gradient-success);\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--border-dark);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: var(--neon-surface, #111111);\n  border: 1px solid var(--neon-border, #bf4ff7);\n  box-shadow: var(--neon-shadow-strong, 0 0 20px rgba(191, 79, 247, 0.5));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  color: var(--neon-text-muted, rgba(191, 79, 247, 0.6));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--neon-danger, #ff6b6b);\n  background: rgba(255, 107, 107, 0.1);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: var(--neon-surface, #111111);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-container[_ngcontent-%COMP%] {\n  border-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n  background: var(--neon-surface-light, #1a1a1a);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--neon-primary, #bf4ff7);\n  box-shadow: var(--neon-shadow, 0 0 10px rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-canvas[_ngcontent-%COMP%] {\n  background: var(--neon-surface, #111111);\n  border-color: var(--neon-border, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-canvas[_ngcontent-%COMP%]:focus {\n  border-color: var(--neon-primary, #bf4ff7);\n  box-shadow: 0 0 10px var(--neon-primary);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%], \nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%] {\n  border-color: var(--neon-border, #bf4ff7);\n  background: var(--neon-surface, #111111);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%]:hover, \nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%]:hover {\n  border-color: var(--neon-primary, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%], \nbody.neon-theme[_ngcontent-%COMP%]   .firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%]   input[type=\"range\"][_ngcontent-%COMP%] {\n  accent-color: var(--neon-primary, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%] {\n  border-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n  background: var(--neon-surface-light, #1a1a1a);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  border-color: var(--neon-border, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n  background: var(--neon-surface, #111111);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--neon-border, #bf4ff7);\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(191, 79, 247, 0.1);\n  border-color: var(--neon-primary, #bf4ff7);\n  color: var(--neon-primary, #bf4ff7);\n  box-shadow: var(--neon-shadow, 0 0 10px rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--neon-primary, #bf4ff7), var(--neon-secondary, #b537f2));\n  color: #000;\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: var(--neon-shadow-strong, 0 0 20px rgba(191, 79, 247, 0.5));\n  filter: brightness(1.1);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: var(--neon-danger, #ff6b6b);\n  color: #000;\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: var(--neon-shadow-danger, 0 0 10px rgba(255, 107, 107, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n  color: var(--neon-text-muted, rgba(191, 79, 247, 0.6));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--neon-danger, #ff6b6b);\n  color: var(--neon-danger, #ff6b6b);\n  background: rgba(255, 107, 107, 0.1);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  border-bottom-color: var(--border-color);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .firma-container[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n  background: var(--bg-primary);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .firma-canvas[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  border-color: var(--input-border);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .preview-container[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n  background: var(--bg-tertiary);\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .firma-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .firma-controls[_ngcontent-%COMP%]   .color-picker[_ngcontent-%COMP%], \n   .firma-controls[_ngcontent-%COMP%]   .grosor-linea[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 15px;\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .firma-canvas[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 120px);\n    overflow-y: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wZXJzb25hcy9jb21wb25lbnRzL2Zpcm1hLW1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFURjtBQWVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7QUFiRjtBQW1CQTtFQUNFLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFqQkY7QUFXQTtFQVNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBakJKO0FBTUE7RUFlSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFsQko7QUFvQkk7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFsQk47QUEwQkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUF4QkY7QUE4QkE7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTVCRjtBQThCRTtFQUNFLDRCQUFBO0FBNUJKO0FBbUNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFqQ0Y7QUFtQ0U7RUFDRSxhQUFBO0VBQ0Es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QUNBLDhCQUFBO0VBbklKO0VBdUlBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBcklGO0VBbUlBO0lBS0ksV0FBQTtJQUNBLHVCQUFBO0VBcklKO0VBeUlBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUF2SUY7QUFDRjtBQTBJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBeElGO0VBMklBO0lBQ0UsK0JBQUE7SUFDQSxnQkFBQTtFQXpJRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJUk1BIE1PREFMIC0gRVNUSUxPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIE9WRVJMQVlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIENPTlRBSU5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgSEVBREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBCT0RZXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJUk1BIENPTlRBSU5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5maXJtYS1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSVJNQSBDQU5WQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlybWEtY2FudmFzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklSTUEgQ09OVFJPTFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlybWEtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuY29sb3ItcGlja2VyLFxuICAuZ3Jvc29yLWxpbmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBSRVZJRVcgQ09OVEFJTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnByZXZpZXctY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4ucHJldmlldy1pbWFnZSB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgRk9PVEVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZyk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gRWZlY3RvIHJpcHBsZSBhbCBoYWNlciBjbGlja1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzLCBoZWlnaHQgMC42cztcbiAgfVxuXG4gICY6YWN0aXZlOjphZnRlciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4vLyBCb3TDg8KzbiBzZWN1bmRhcmlvXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICB9XG5cbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyBCb3TDg8KzbiBwcmltYXJpb1xuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gQm90w4PCs24gcGVsaWdyb3NvXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gQm90w4PCs24gw4PCqXhpdG9cbi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXN1Y2Nlc3MpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLy8gQm90w4PCs24gY2FuY2VsYXJcbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItZGFyayk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEVNQSBORcODwpNOIC0gU09CUkVFU0NSSVRVUkFTIEVTUEVDw4PCjUZJQ0FTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYm9keS5uZW9uLXRoZW1lIHtcbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLCAjMTExMTExKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZW9uLWJvcmRlciwgI2JmNGZmNyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi1zaGFkb3ctc3Ryb25nLCAwIDAgMjBweCByZ2JhKDE5MSwgNzksIDI0NywgMC41KSk7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbmVvbi1ib3JkZXItZGltLCByZ2JhKDE5MSwgNzksIDI0NywgMC4zKSk7XG5cbiAgICBoMyB7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LCAjYmY0ZmY3KTtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1tdXRlZCwgcmdiYSgxOTEsIDc5LCAyNDcsIDAuNikpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW5lb24tZGFuZ2VyLCAjZmY2YjZiKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9uLXN1cmZhY2UsICMxMTExMTEpO1xuICB9XG5cbiAgLmZpcm1hLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlci1kaW0sIHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjMpKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9uLXN1cmZhY2UtbGlnaHQsICMxYTFhMWEpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tcHJpbWFyeSwgI2JmNGZmNyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXNoYWRvdywgMCAwIDEwcHggcmdiYSgxOTEsIDc5LCAyNDcsIDAuMykpO1xuICAgIH1cbiAgfVxuXG4gIC5maXJtYS1jYW52YXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb24tc3VyZmFjZSwgIzExMTExMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlciwgI2JmNGZmNyk7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1wcmltYXJ5LCAjYmY0ZmY3KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLW5lb24tcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmZpcm1hLWNvbnRyb2xzIHtcbiAgICAuY29sb3ItcGlja2VyLFxuICAgIC5ncm9zb3ItbGluZWEge1xuICAgICAgbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LCAjYmY0ZmY3KTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlciwgI2JmNGZmNyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb24tc3VyZmFjZSwgIzExMTExMSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZW9uLXByaW1hcnksICNiZjRmZjcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gICAgICAgIGFjY2VudC1jb2xvcjogdmFyKC0tbmVvbi1wcmltYXJ5LCAjYmY0ZmY3KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJldmlldy1jb250YWluZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXItZGltLCByZ2JhKDE5MSwgNzksIDI0NywgMC4zKSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLWxpZ2h0LCAjMWExYTFhKTtcblxuICAgIGg0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLXRleHQsICNiZjRmZjcpO1xuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYm9yZGVyLCAjYmY0ZmY3KTtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLW5lb24tYm9yZGVyLWRpbSwgcmdiYSgxOTEsIDc5LCAyNDcsIDAuMykpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb24tc3VyZmFjZSwgIzExMTExMSk7XG4gIH1cblxuICAvLyBCb3RvbmVzIGVuIHRlbWEgbmXDg8KzblxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbmVvbi1ib3JkZXIsICNiZjRmZjcpO1xuICAgIGNvbG9yOiB2YXIoLS1uZW9uLXRleHQsICNiZjRmZjcpO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MSwgNzksIDI0NywgMC4xKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1wcmltYXJ5LCAjYmY0ZmY3KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLXByaW1hcnksICNiZjRmZjcpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi1zaGFkb3csIDAgMCAxMHB4IHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjMpKTtcbiAgICB9XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLW5lb24tcHJpbWFyeSwgI2JmNGZmNyksIHZhcigtLW5lb24tc2Vjb25kYXJ5LCAjYjUzN2YyKSk7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLW5lb24tc2hhZG93LXN0cm9uZywgMCAwIDIwcHggcmdiYSgxOTEsIDc5LCAyNDcsIDAuNSkpO1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb24tZGFuZ2VyLCAjZmY2YjZiKTtcbiAgICBjb2xvcjogIzAwMDtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi1zaGFkb3ctZGFuZ2VyLCAwIDAgMTBweCByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMykpO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZW9uLWJvcmRlci1kaW0sIHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjMpKTtcbiAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LW11dGVkLCByZ2JhKDE5MSwgNzksIDI0NywgMC42KSk7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1kYW5nZXIsICNmZjZiNmIpO1xuICAgICAgY29sb3I6IHZhcigtLW5lb24tZGFuZ2VyLCAjZmY2YjZiKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4xKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRFTUEgT1NDVVJPIC0gU09CUkVFU0NSSVRVUkFTIEVTUEVDw4PCjUZJQ0FTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYm9keS5kYXJrLXRoZW1lIHtcbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxuXG4gIC5maXJtYS1jb250YWluZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgfVxuXG4gIC5maXJtYS1jYW52YXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWJvcmRlcik7XG4gIH1cblxuICAucHJldmlldy1jb250YWluZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmZpcm1hLWNvbnRyb2xzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgLmNvbG9yLXBpY2tlcixcbiAgICAuZ3Jvc29yLWxpbmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZmlybWEtY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99305:
/*!****************************************!*\
  !*** ./src/app/services/qr.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrService: () => (/* binding */ QrService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class QrService {
  /**
   * Genera datos para QR a partir de la información de la persona
   */
  generarDatosQR(persona) {
    const datos = {
      id: persona.persona_id || persona.id,
      documento: persona.numero_documento,
      nombres: persona.nombres,
      apellidos: persona.apellidos,
      tipo_documento: persona.tipo_documento?.nombre || 'CI',
      timestamp: new Date().toISOString()
    };
    // Convertir a JSON string para el QR
    return JSON.stringify(datos);
  }
  /**
   * Convierte un canvas a base64
   */
  canvasToBase64(canvas) {
    return canvas.toDataURL('image/png');
  }
  /**
   * Simula la generación de QR (útil para desarrollo)
   */
  generarQRSimulado(persona) {
    const datos = this.generarDatosQR(persona);
    // Usar API pública de QR (solo para desarrollo)
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(datos)}`;
  }
  static ɵfac = function QrService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || QrService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: QrService,
    factory: QrService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_personas_pages_personas_component_ts.js.map