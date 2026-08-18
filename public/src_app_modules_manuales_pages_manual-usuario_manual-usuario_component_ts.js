"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_manuales_pages_manual-usuario_manual-usuario_component_ts"],{

/***/ 98478:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/manuales/pages/manual-usuario/manual-usuario.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualUsuarioComponent: () => (/* binding */ ManualUsuarioComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/pdf-viewer.service */ 16225);




















const _c0 = ["pdfCanvas"];
const _c1 = ["pdfCanvas1"];
const _c2 = ["pdfCanvas2"];
const _c3 = ["pdfCanvasSingle"];
function ManualUsuarioComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105)(1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 107)(4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function ManualUsuarioComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManualUsuarioComponent_div_4_div_11_div_1_Template, 8, 3, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function ManualUsuarioComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function ManualUsuarioComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91)(1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 93)(3, "div", 94)(4, "div", 95)(5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ManualUsuarioComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManualUsuarioComponent_div_4_button_8_Template, 2, 0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManualUsuarioComponent_div_4_div_11_Template, 2, 1, "div", 100)(12, ManualUsuarioComponent_div_4_div_12_Template, 2, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function ManualUsuarioComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 113)(3, "div", 114)(4, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 116)(9, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_5_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 121)(20, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function ManualUsuarioComponent_div_36_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 131)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chapter_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.getChapterProgress(chapter_r7), "%");
  }
}
function ManualUsuarioComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_36_div_1_Template_div_click_0_listener() {
      const chapter_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.irACapitulo(chapter_r7.startPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 127)(4, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManualUsuarioComponent_div_36_div_1_div_8_Template, 3, 2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chapter_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.currentPage >= chapter_r7.startPage && ctx_r1.currentPage <= chapter_r7.endPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chapter_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chapter_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("P\u00E1ginas ", chapter_r7.startPage, " - ", chapter_r7.endPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getChapterProgress(chapter_r7) > 0);
  }
}
function ManualUsuarioComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManualUsuarioComponent_div_36_div_1_Template, 9, 7, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.chapters);
  }
}
function ManualUsuarioComponent_div_37_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_37_div_7_Template_div_click_0_listener() {
      const bookmark_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.irAMarcador(bookmark_r10.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 139)(4, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_37_div_7_Template_button_click_8_listener($event) {
      const bookmark_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.eliminarMarcador(bookmark_r10.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bookmark_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookmark_r10.title || "P\u00E1gina " + bookmark_r10.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("P\u00E1g. ", bookmark_r10.page);
  }
}
function ManualUsuarioComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 132)(1, "div", 133)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDD16 Marcadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_37_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.agregarMarcador());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManualUsuarioComponent_div_37_div_7_Template, 10, 2, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.bookmarks);
  }
}
function ManualUsuarioComponent_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_38_div_4_Template_div_click_0_listener() {
      const historyItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.irAPagina(historyItem_r12.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u21A9\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const historyItem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("P\u00E1g. ", historyItem_r12.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, historyItem_r12.time, "HH:mm"));
  }
}
function ManualUsuarioComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 143)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDD50 Historial");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManualUsuarioComponent_div_38_div_4_Template, 8, 5, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.navigationHistory);
  }
}
function ManualUsuarioComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 48)(2, "div", 149)(3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 151, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "canvas", 153, 1)(9, "canvas", 154, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("double-page", ctx_r1.viewMode === "double");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r1.viewMode === "single" && ctx_r1.pdfLoaded ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r1.viewMode === "double" && ctx_r1.pdfLoaded ? "flex" : "none");
  }
}
function ManualUsuarioComponent_div_74_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 159)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.pdfLoadProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.pdfLoadProgress, "%");
  }
}
function ManualUsuarioComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 155)(1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cargando manual de usuario...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManualUsuarioComponent_div_74_div_5_Template, 5, 3, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.pdfLoadProgress > 0);
  }
}
function ManualUsuarioComponent_div_75_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_75_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.reintentarCargarPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Reintentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_75_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_75_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.usarPDFDemo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Usar PDF de demostraci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 160)(1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Error al cargar el PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManualUsuarioComponent_div_75_button_8_Template, 4, 0, "button", 163)(9, ManualUsuarioComponent_div_75_button_9_Template, 4, 0, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.pdfError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBrowser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBrowser);
  }
}
function ManualUsuarioComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 167)(1, "div", 168)(2, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_76_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.toggleNotas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "textarea", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_div_76_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.pageNotes[ctx_r1.currentPage], $event) || (ctx_r1.pageNotes[ctx_r1.currentPage] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function ManualUsuarioComponent_div_76_Template_textarea_blur_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.guardarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 172)(9, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_76_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.guardarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCDD Notas de la p\u00E1gina ", ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pageNotes[ctx_r1.currentPage]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx_r1.pageNotes[ctx_r1.currentPage] == null ? null : ctx_r1.pageNotes[ctx_r1.currentPage].length) || 0, " caracteres");
  }
}
function ManualUsuarioComponent_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_button_79_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.imprimirPaginaActual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDDA8\uFE0F P\u00E1gina ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_button_80_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.imprimirTodo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDDA8\uFE0F Todo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_button_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_button_82_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.descargarPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCE5 PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_button_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_button_83_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.exportarNotas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCDD Notas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_button_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_button_89_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.togglePantallaCompleta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u26F6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_103_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_103_div_7_div_1_Template_div_click_0_listener() {
      const result_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.irAResultadoBusqueda(result_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("P\u00E1g. ", result_r23.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r23.description);
  }
}
function ManualUsuarioComponent_div_103_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManualUsuarioComponent_div_103_div_7_div_1_Template, 5, 2, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.searchResultsManual);
  }
}
function ManualUsuarioComponent_div_103_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_103_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.compartirPagina());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCC4 P\u00E1gina actual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_103_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_103_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.compartirSeccion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCD1 Secci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ManualUsuarioComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDD0D B\u00FAsqueda Avanzada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_div_103_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.advancedSearchTerm, $event) || (ctx_r1.advancedSearchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_103_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.busquedaAvanzada());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Buscar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManualUsuarioComponent_div_103_div_7_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 181)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\uD83D\uDCE4 Compartir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManualUsuarioComponent_div_103_button_12_Template, 2, 0, "button", 185)(13, ManualUsuarioComponent_div_103_button_13_Template, 2, 0, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 181)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u267F Accesibilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 186)(18, "label", 187)(19, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_div_103_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.textToSpeech, $event) || (ctx_r1.textToSpeech = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ManualUsuarioComponent_div_103_Template_input_change_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.toggleTextToSpeech());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Texto a voz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.advancedSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchResultsManual.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBrowser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBrowser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.textToSpeech);
  }
}
function ManualUsuarioComponent_div_126_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 205)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Resumen de la sesi\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 206)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCC4 P\u00E1ginas vistas: ", ctx_r1.pagesViewed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCCD Marcadores: ", ctx_r1.bookmarks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCDD Notas: ", ctx_r1.getTotalNotas());
  }
}
function ManualUsuarioComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 194)(1, "div", 195)(2, "div", 196)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCD8 Cerrar Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_126_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cancelarCerrarManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 198)(9, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00BFEst\u00E1 seguro de que desea cerrar el manual?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Si ha realizado cambios en las notas o marcadores, aseg\u00FArese de guardarlos antes de cerrar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManualUsuarioComponent_div_126_div_15_Template, 10, 3, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 202)(17, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_126_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cancelarCerrarManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_126_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.confirmarCerrarManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cerrar Manual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.pagesViewed > 0);
  }
}
function ManualUsuarioComponent_div_127_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 215)(1, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const shortcut_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shortcut_r28.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shortcut_r28.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](shortcut_r28.description);
  }
}
function ManualUsuarioComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 194)(1, "div", 207)(2, "div", 208)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u2753 Ayuda del Visor de Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_127_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarAyudaVisor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 209)(9, "div", 210)(10, "div", 211)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\uD83D\uDCD6 Navegaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul")(14, "li")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Click en bordes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Voltear p\u00E1ginas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Arrastrar esquina:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Efecto realista de hoja");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Rueda del mouse:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Avanzar/retroceder");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Teclas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " \u2190 \u2192 para navegar, + - para zoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 211)(31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\uD83D\uDEE0\uFE0F Herramientas Principales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul")(34, "li")(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\uD83D\uDD16 Marcadores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Guarda p\u00E1ginas importantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\uD83D\uDCDD Notas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Anotaciones por p\u00E1gina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\uD83D\uDDA8\uFE0F Impresi\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " P\u00E1gina, rango o completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\uD83D\uDCE5 Descarga:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " PDF, im\u00E1genes o texto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 211)(51, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u26A1 Atajos de Teclado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ManualUsuarioComponent_div_127_div_54_Template, 7, 3, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 214)(56, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_127_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cerrarAyudaVisor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Entendido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.keyboardShortcuts);
  }
}
function ManualUsuarioComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 219)(1, "div", 220)(2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 222)(5, "h4", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_div_128_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.closeNotification());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.notificationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.notificationIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.notificationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.notificationMessage);
  }
}
class ManualUsuarioComponent {
  router;
  notificationService;
  elementRef;
  cdr;
  themeService;
  moduleLoader;
  loadingService;
  platformId;
  pdfViewerService;
  moduleName = 'Manuales de Usuario';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  isEvenPage = false;
  leftPage = 1;
  rightPage = 2;
  currentTheme = 'light';
  // Canvas contexts adicionales
  // Contextos para cada canvas
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  canvasContext = null;
  canvasContext1 = null;
  canvasContext2 = null;
  pdfCanvas;
  pdfCanvas1;
  pdfCanvas2;
  pdfCanvasSingle;
  // Añade estas propiedades auxiliares
  pdfDoc = null;
  pdfjsLib = null;
  pageRendering = false;
  pageNumPending = null;
  // Variables para PDF.js
  notificaciones = [];
  // Propiedad para verificar si estamos en el navegador
  isBrowser;
  constructor(router, notificationService, elementRef, cdr, themeService, moduleLoader, loadingService, platformId, pdfViewerService) {
    this.router = router;
    this.notificationService = notificationService;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.themeService = themeService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.platformId = platformId;
    this.pdfViewerService = pdfViewerService;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId);
    this.pdfCanvas = null;
    this.pdfCanvas1 = null;
    this.pdfCanvas2 = null;
    this.pdfCanvasSingle = null;
  }
  // ========== VARIABLES COMPARTIDAS ==========
  isSidebarCollapsed = false;
  isDarkTheme = false;
  showMinimizeNotification = false;
  minimizing = false;
  // Variables para el modal de ayuda
  showHelpSupport = false;
  isMinimized = false;
  // Variables para dropdowns y modales
  isSearchOpen = false;
  isUserMenuOpen = false;
  // Búsqueda
  searchQuery = '';
  searchResults = [];
  // Configuración de usuario
  user = {
    name: 'Admin SIGPAZ',
    email: 'admin@sigpaz.com',
    avatar: 'A',
    role: 'Administrador'
  };
  // Variables principales del manual
  // Cambiado: El manual ahora está siempre visible
  sidebarCollapsed = false;
  toolsCollapsed = false;
  showVisorHelp = false;
  showConfirmCloseModal = false;
  isManualMinimized = false; // Nueva variable para minimizar el manual
  // Datos del manual
  totalPaginas = 156;
  currentPage = 1;
  zoomLevel = 100;
  viewMode = 'single';
  nightMode = false;
  showNotes = false;
  isFullscreen = false;
  // Datos de ejemplo
  fechaActualizacion = new Date('2024-01-15');
  pagesViewed = 1;
  sessionTimerSubscription;
  sessionSeconds = 0;
  // Búsqueda en el manual
  busquedaManual = '';
  advancedSearchTerm = '';
  searchResultsManual = [];
  // Marcadores y notas
  bookmarks = [{
    id: 1,
    page: 5,
    title: 'Inicio de sesión',
    fecha: new Date('2024-01-10')
  }, {
    id: 2,
    page: 23,
    title: 'Gestión de usuarios',
    fecha: new Date('2024-01-12')
  }, {
    id: 3,
    page: 45,
    title: 'Crear reportes',
    fecha: new Date('2024-01-14')
  }, {
    id: 4,
    page: 67,
    title: 'Configuración del sistema',
    fecha: new Date('2024-01-15')
  }];
  pageNotes = {
    1: 'Nota de ejemplo para la primera página',
    23: 'Recordatorio: Revisar permisos de usuario',
    45: 'Importante: Exportar reportes semanales'
  };
  navigationHistory = [];
  // Capítulos del manual
  chapters = [{
    id: 1,
    icon: '📖',
    title: 'Introducción',
    startPage: 1,
    endPage: 10
  }, {
    id: 2,
    icon: '🔐',
    title: 'Acceso al Sistema',
    startPage: 11,
    endPage: 25
  }, {
    id: 3,
    icon: '👥',
    title: 'Gestión de Usuarios',
    startPage: 26,
    endPage: 45
  }, {
    id: 4,
    icon: '📊',
    title: 'Reportes y Análisis',
    startPage: 46,
    endPage: 70
  }, {
    id: 5,
    icon: '⚙️',
    title: 'Configuración',
    startPage: 71,
    endPage: 90
  }, {
    id: 6,
    icon: '🛡️',
    title: 'Seguridad',
    startPage: 91,
    endPage: 120
  }, {
    id: 7,
    icon: '❓',
    title: 'Preguntas Frecuentes',
    startPage: 121,
    endPage: 140
  }, {
    id: 8,
    icon: '📋',
    title: 'Apéndice',
    startPage: 141,
    endPage: 156
  }];
  // Herramientas de impresión
  printWithNotes = false;
  printWithBookmarks = true;
  // Accesibilidad
  textToSpeech = false;
  // Navegación rápida
  jumpToPage = 1;
  // Progreso de descarga
  downloadProgress = 0;
  isDownloading = false;
  // Variables para el PDF
  pdfSrc = '/src/assets/manual-usuario-sigpaz.pdf';
  pdfLoaded = false;
  pdfLoadProgress = 0;
  pdfError = '';
  // PDF alternativo si el principal falla
  pdfDemoSrc = '/src/assets/demo-manual.pdf';
  // Atajos de teclado
  keyboardShortcuts = [{
    key: '← / →',
    description: 'Navegar páginas',
    icon: '↔️'
  }, {
    key: 'Ctrl + + / -',
    description: 'Zoom in/out',
    icon: '🔍'
  }, {
    key: 'Ctrl + F',
    description: 'Pantalla completa',
    icon: '⛶'
  }, {
    key: 'Ctrl + B',
    description: 'Añadir marcador',
    icon: '🔖'
  }, {
    key: 'Ctrl + N',
    description: 'Mostrar/ocultar notas',
    icon: '📝'
  }, {
    key: 'Ctrl + D',
    description: 'Descargar página',
    icon: '📥'
  }, {
    key: 'Ctrl + P',
    description: 'Imprimir',
    icon: '🖨️'
  }, {
    key: 'ESC',
    description: 'Cerrar ayuda',
    icon: '✕'
  }];
  // Estadísticas de uso
  usageStats = {
    tiempoTotalLectura: '00:00:00',
    paginasLeidas: 1,
    notasCreadas: 3,
    marcadoresAgregados: 4,
    ultimoAcceso: new Date()
  };
  // Notificaciones del sistema
  showNotification = false;
  notificationTitle = '';
  notificationMessage = '';
  notificationType = 'info';
  notificationIcon = 'ℹ️';
  // ========== LIFECYCLE HOOKS ==========
  ngOnInit() {
    this.applyTheme();
    this.inicializarDatosManual();
    this.startSessionTimer();
    this.loadSavedData();
    this.setupThemeSubscription();
    // Solo configurar atajos de teclado en el navegador
    if (this.isBrowser) {
      this.setupKeyboardShortcuts();
    }
    this.moduleLoader.registerComponentInstance(this.moduleName, this);
    // Cargar datos del módulo
    this.loadModuleData();
  }
  // Agregar este método auxiliar:
  mapTipoNotificacion(tipo) {
    const mapping = {
      'success': 'success',
      'error': 'error',
      'info': 'info',
      'warning': 'warning'
    };
    return mapping[tipo] || 'info';
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
    const hasContent = document.querySelector('.manual-usuario-container, .manual-wrapper, .manual-main-content');
    const hasData = document.querySelector('.pdf-viewer-container, .manual-sidebar, .viewer-toolbar');
    console.log(`🔍 [ManualUsuario] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  getIconoNotificacion(tipo) {
    const iconos = {
      'success': '✅',
      'error': '❌',
      'info': 'ℹ️',
      'warning': '⚠️'
    };
    return iconos[tipo] || '💡';
  }
  // ========== MÉTODOS NUEVOS PARA ESTRUCTURA INTEGRADA ==========
  cerrarNotificacion(id) {
    const index = this.notificaciones.findIndex(n => n.id === id);
    if (index !== -1) {
      this.notificaciones.splice(index, 1);
    }
  }
  minimizarManual() {
    this.isManualMinimized = !this.isManualMinimized;
    if (this.isManualMinimized) {
      this.notificationService.addNotification({
        userId: this.getCurrentUserId(),
        title: 'Sistema',
        message: 'Descargando manual PDF',
        module: 'manual-usuario',
        type: 'info',
        metadata: {
          avatar: '📘'
        }
      });
    } else {
      this.notificationService.addNotification({
        userId: this.getCurrentUserId(),
        title: 'Sistema',
        message: 'Manual restaurado',
        module: 'manual-usuario',
        type: 'success',
        metadata: {
          avatar: '📖'
        }
      });
    }
  }
  // Eliminado: abrirManualUsuario() ya no es necesario
  // Modificado: confirmarCerrarManual() ahora minimiza
  confirmarCerrarManual() {
    this.isManualMinimized = true;
    this.showConfirmCloseModal = false;
    this.saveData();
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Manual minimizado',
      module: 'manual-usuario',
      type: 'info',
      metadata: {
        avatar: '📘'
      }
    });
  }
  cancelarCerrarManual() {
    this.showConfirmCloseModal = false;
  }
  // ========== MÉTODOS COMPARTIDOS (MANTENIDOS) ==========
  getTotalNotas() {
    return Object.keys(this.pageNotes).length;
  }
  getBookmarksForPage(page) {
    return this.bookmarks.filter(b => b.page === page);
  }
  onPageInputChange(event) {
    const input = event.target;
    const pageNum = Number(input.value);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= this.totalPaginas) {
      this.currentPage = pageNum;
      this.addToHistory(pageNum);
      this.pagesViewed++;
      this.actualizarEstadisticas();
      // Renderizar la nueva página si el PDF está cargado
      if (this.pdfLoaded && !this.pageRendering) {
        this.renderPage(pageNum);
      }
    } else {
      input.value = this.currentPage.toString();
    }
  }
  inicializarDatosManual() {
    this.addToHistory(this.currentPage);
    this.actualizarEstadisticas();
  }
  startSessionTimer() {
    this.sessionTimerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.interval)(1000).subscribe(() => {
      this.sessionSeconds++;
      this.updateSessionTime();
    });
  }
  getCurrentUserId() {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        return JSON.parse(user).usuario_id || 0;
      } catch {
        return 0;
      }
    }
    return 0;
  }
  updateSessionTime() {
    const hours = Math.floor(this.sessionSeconds / 3600);
    const minutes = Math.floor(this.sessionSeconds % 3600 / 60);
    const seconds = this.sessionSeconds % 60;
    this.usageStats.tiempoTotalLectura = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  // ========== MÉTODOS DEL DASHBOARD ==========
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
    if (!this.showHelpSupport) {
      if (this.isBrowser) {
        document.body.classList.remove('minimized-mode');
      }
    }
  }
  onToggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
    this.isUserMenuOpen = false;
  }
  // ========== MÉTODOS DE NAVEGACIÓN PDF ==========
  irPrimeraPagina() {
    this.irAPagina(1);
  }
  irUltimaPagina() {
    this.irAPagina(this.totalPaginas);
  }
  irACapitulo(startPage) {
    this.irAPagina(startPage);
  }
  // ========== MÉTODOS DE MARCADORES ==========
  agregarMarcador() {
    const existingBookmark = this.bookmarks.find(b => b.page === this.currentPage);
    if (existingBookmark) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Marcador existente',
        module: 'manual-usuario',
        type: 'warning',
        metadata: {
          avatar: '⚠️'
        }
      });
      return;
    }
    const newBookmark = {
      id: Date.now(),
      page: this.currentPage,
      title: this.getPageTitle(this.currentPage),
      fecha: new Date()
    };
    this.bookmarks.push(newBookmark);
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Marcador agregado',
      module: 'manual-usuario',
      type: 'success',
      metadata: {
        avatar: '🔖'
      }
    });
  }
  toggleMarcadorPagina() {
    const existingIndex = this.bookmarks.findIndex(b => b.page === this.currentPage);
    if (existingIndex >= 0) {
      const removedBookmark = this.bookmarks[existingIndex];
      this.bookmarks.splice(existingIndex, 1);
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Marcador eliminado',
        module: 'manual-usuario',
        type: 'info',
        metadata: {
          avatar: '🗑️'
        }
      });
    } else {
      this.agregarMarcador();
    }
  }
  tieneMarcador(page) {
    return this.bookmarks.some(b => b.page === page);
  }
  eliminarMarcador(id, event) {
    event.stopPropagation();
    this.bookmarks = this.bookmarks.filter(b => b.id !== id);
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Marcador eliminado',
      module: 'manual-usuario',
      type: 'info',
      metadata: {
        avatar: '🗑️'
      }
    });
  }
  irAMarcador(page) {
    this.irAPagina(page);
  }
  // ========== MÉTODOS DE NOTAS ==========
  toggleNotas() {
    this.showNotes = !this.showNotes;
  }
  guardarNota() {
    if (this.pageNotes[this.currentPage]) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Nota guardada',
        module: 'manual-usuario',
        type: 'success',
        metadata: {
          avatar: '💾'
        }
      });
      this.saveData();
    }
  }
  // ========== MÉTODOS DE BÚSQUEDA ==========
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      this.searchResults = [{
        title: 'Configuración de usuarios',
        description: 'Páginas 26-45: Gestión completa de usuarios',
        icon: '👥',
        page: 26
      }, {
        title: 'Creación de reportes',
        description: 'Páginas 46-70: Generar y exportar reportes',
        icon: '📊',
        page: 46
      }, {
        title: 'Seguridad del sistema',
        description: 'Páginas 91-120: Configuración de seguridad',
        icon: '🛡️',
        page: 91
      }];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  buscarEnManual() {
    if (this.busquedaManual.trim()) {
      this.searchResultsManual = this.chapters.filter(chapter => chapter.title.toLowerCase().includes(this.busquedaManual.toLowerCase()) || `${chapter.startPage}`.includes(this.busquedaManual)).map(chapter => ({
        title: chapter.title,
        description: `Páginas ${chapter.startPage}-${chapter.endPage}`,
        page: chapter.startPage
      }));
    }
  }
  busquedaAvanzada() {
    if (this.advancedSearchTerm.trim()) {
      this.searchResultsManual = this.chapters.filter(chapter => chapter.title.toLowerCase().includes(this.advancedSearchTerm.toLowerCase()) || `${chapter.startPage}-${chapter.endPage}`.includes(this.advancedSearchTerm)).map(chapter => ({
        title: chapter.title,
        description: `Páginas ${chapter.startPage}-${chapter.endPage}`,
        page: chapter.startPage
      }));
    }
  }
  irAResultadoBusqueda(result) {
    this.irAPagina(result.page);
  }
  // ========== MÉTODOS DE INTERFAZ ==========
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  toggleTools() {
    this.toolsCollapsed = !this.toolsCollapsed;
  }
  togglePantallaCompleta() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error al activar pantalla completa',
        module: 'manual-usuario',
        type: 'error',
        metadata: {
          avatar: '❌'
        }
      });
      return;
    }
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error al activar pantalla completa: ${err.message}`);
        this.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'Error al activar pantalla completa',
          module: 'manual-usuario',
          type: 'error',
          metadata: {
            avatar: '❌'
          }
        });
      });
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }
  toggleModoNocturno() {
    this.nightMode = !this.nightMode;
    if (this.isBrowser) {
      const manualWrapper = this.elementRef.nativeElement.querySelector('.manual-wrapper');
      if (manualWrapper) {
        manualWrapper.classList.toggle('night-mode', this.nightMode);
      }
    }
  }
  // ========== MÉTODOS DE AYUDA ==========
  mostrarAyudaVisor() {
    this.showVisorHelp = true;
  }
  cerrarAyudaVisor() {
    this.showVisorHelp = false;
  }
  irAIndice() {
    this.irAPagina(2);
  }
  // ========== MÉTODOS DE IMPRESIÓN Y DESCARGA ==========
  imprimirPaginaActual() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error al imprimir',
        module: 'manual-usuario',
        type: 'error',
        metadata: {
          avatar: '❌'
        }
      });
      return;
    }
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Preparando impresión',
      module: 'manual-usuario',
      type: 'info',
      metadata: {
        avatar: '🖨️'
      }
    });
    // Crear una ventana temporal para imprimir
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Manual SIGPAZ - Página ${this.currentPage}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
                padding: 0;
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #ccc;
                padding-bottom: 20px;
              }
              .page-number {
                position: fixed;
                bottom: 10px;
                right: 10px;
                font-size: 12px;
                color: #666;
              }
              .notes-section {
                margin-top: 30px;
                padding: 15px;
                background-color: #f9f9f9;
                border-left: 4px solid #007bff;
              }
              @media print {
                body { margin: 0; }
                .page-number { display: block; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Manual SIGPAZ</h1>
              <p>Página ${this.currentPage} - ${this.getPageTitle(this.currentPage)}</p>
              <p><small>Impreso el ${new Date().toLocaleDateString()} a las ${new Date().toLocaleTimeString()}</small></p>
            </div>

            <div class="content">
              <h3>Contenido de la página ${this.currentPage}</h3>
              <p>Capítulo: ${this.getChapterForPage(this.currentPage)?.title || 'General'}</p>
              <p><em>Nota: Esta es una representación textual. Para ver el contenido gráfico completo, consulte el PDF digital.</em></p>

              ${this.pageNotes[this.currentPage] ? `<div class="notes-section">
                  <h4>Notas del usuario:</h4>
                  <p>${this.pageNotes[this.currentPage]}</p>
                </div>` : ''}

              ${this.bookmarks.filter(b => b.page === this.currentPage).length > 0 ? `<div style="margin-top: 20px; font-style: italic;">
                  <p>📌 Marcadores en esta página:</p>
                  <ul>
                    ${this.bookmarks.filter(b => b.page === this.currentPage).map(b => `<li>${b.title} (${b.fecha.toLocaleDateString()})</li>`).join('')}
                  </ul>
                </div>` : ''}
            </div>

            <div class="page-number">
              Página ${this.currentPage} de ${this.totalPaginas} | Manual SIGPAZ v2.5.1
            </div>

            <script>
              // Imprimir automáticamente cuando se cargue la ventana
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    } else {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error al abrir ventana de impresión',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
    }
  }
  descargarPDF() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error al descargar PDF',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
      return;
    }
    this.isDownloading = true;
    this.downloadProgress = 0;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Iniciando descarga',
      metadata: {
        avatar: '⏳'
      },
      module: 'manual-usuario',
      type: 'info'
    });
    // Crear enlace de descarga
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = `manual-sigpaz-${new Date().toISOString().split('T')[0]}.pdf`;
    link.click();
    this.isDownloading = false;
    this.downloadProgress = 100;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Descarga completada',
      metadata: {
        avatar: '📥'
      },
      module: 'manual-usuario',
      type: 'success'
    });
  }
  exportarNotas() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error al exportar notas',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
      return;
    }
    const notasTexto = Object.entries(this.pageNotes).map(([page, note]) => `Página ${page}: ${this.getPageTitle(parseInt(page))}\n${note}\n${'='.repeat(50)}\n`).join('\n');
    const blob = new Blob([notasTexto], {
      type: 'text/plain;charset=utf-8'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `notas-manual-sigpaz-${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Notas exportadas',
      metadata: {
        avatar: '💾'
      },
      module: 'manual-usuario',
      type: 'success'
    });
  }
  // ========== MÉTODOS DE ACCESIBILIDAD ==========
  toggleTextToSpeech() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Funcionalidad no disponible',
        metadata: {
          avatar: '⚠️'
        },
        module: 'manual-usuario',
        type: 'warning'
      });
      this.textToSpeech = false;
      return;
    }
    if ('speechSynthesis' in window) {
      if (this.textToSpeech) {
        const utterance = new SpeechSynthesisUtterance(`Página ${this.currentPage}. ${this.getPageTitle(this.currentPage)}`);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
        this.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'Texto a voz activado',
          metadata: {
            avatar: '🔊'
          },
          module: 'manual-usuario',
          type: 'info'
        });
      } else {
        window.speechSynthesis.cancel();
      }
    } else if (this.textToSpeech) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Funcionalidad no disponible',
        avatar: '⚠️',
        module: 'manual-usuario',
        type: 'warning'
      });
      this.textToSpeech = false;
    }
  }
  // ========== MÉTODOS DE UTILIDAD ==========
  addToHistory(page) {
    const historyEntry = {
      page,
      time: new Date(),
      title: this.getPageTitle(page)
    };
    this.navigationHistory.unshift(historyEntry);
    if (this.navigationHistory.length > 10) {
      this.navigationHistory.pop();
    }
  }
  actualizarEstadisticas() {
    this.usageStats.paginasLeidas = this.pagesViewed;
    this.usageStats.notasCreadas = Object.keys(this.pageNotes).length;
    this.usageStats.marcadoresAgregados = this.bookmarks.length;
    this.usageStats.ultimoAcceso = new Date();
  }
  getChapterForPage(page) {
    return this.chapters.find(ch => page >= ch.startPage && page <= ch.endPage);
  }
  getChapterProgress(chapter) {
    if (this.currentPage < chapter.startPage) return 0;
    if (this.currentPage > chapter.endPage) return 100;
    const totalPages = chapter.endPage - chapter.startPage + 1;
    const pagesRead = this.currentPage - chapter.startPage + 1;
    return Math.round(pagesRead / totalPages * 100);
  }
  getPageTitle(page) {
    const chapter = this.getChapterForPage(page);
    if (chapter) {
      return chapter.title;
    }
    const defaultTitles = {
      1: 'Portada y Presentación',
      2: 'Índice de Contenidos',
      150: 'Glosario de Términos',
      156: 'Fin del Manual'
    };
    return defaultTitles[page] || `Página ${page}`;
  }
  // ========== MÉTODOS DE ALMACENAMIENTO ==========
  loadSavedData() {
    if (!this.isBrowser || !window?.localStorage) {
      return;
    }
    try {
      const savedData = localStorage.getItem('manual_usuario_data');
      if (savedData) {
        const data = JSON.parse(savedData);
        if (data.bookmarks && Array.isArray(data.bookmarks)) {
          this.bookmarks = data.bookmarks.map(b => ({
            ...b,
            fecha: new Date(b.fecha)
          }));
        }
        if (data.pageNotes && typeof data.pageNotes === 'object') {
          this.pageNotes = data.pageNotes;
        }
        if (data.navigationHistory && Array.isArray(data.navigationHistory)) {
          this.navigationHistory = data.navigationHistory.map(h => ({
            ...h,
            time: new Date(h.time)
          }));
        }
        if (data.currentPage && !isNaN(data.currentPage)) {
          this.currentPage = Math.min(data.currentPage, this.totalPaginas);
        }
        console.log('Datos del manual cargados desde localStorage');
      }
    } catch (error) {
      console.error('Error al cargar datos guardados:', error);
    }
  }
  saveData() {
    if (!this.isBrowser || !window?.localStorage) {
      return;
    }
    try {
      const data = {
        bookmarks: this.bookmarks,
        pageNotes: this.pageNotes,
        navigationHistory: this.navigationHistory,
        currentPage: this.currentPage,
        lastAccess: new Date().toISOString()
      };
      localStorage.setItem('manual_usuario_data', JSON.stringify(data));
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  }
  // ========== MÉTODOS DE NOTIFICACIÓN ==========
  closeNotification() {
    this.showNotification = false;
  }
  // ========== MÉTODOS DE PDF ==========
  verificarPDF() {
    var _this2 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield fetch(_this2.pdfSrc);
        if (!response.ok) {
          console.error('❌ PDF no encontrado:', _this2.pdfSrc);
          return false;
        }
        const contentLength = response.headers.get('content-length');
        if (contentLength && parseInt(contentLength) === 0) {
          console.error('❌ PDF está vacío (0 bytes)');
          return false;
        }
        const contentType = response.headers.get('content-type');
        if (contentType && !contentType.includes('pdf')) {
          console.error('❌ No es un PDF válido. Content-Type:', contentType);
          return false;
        }
        const buffer = yield response.arrayBuffer();
        const bytes = new Uint8Array(buffer.slice(0, 5));
        const header = String.fromCharCode.apply(null, Array.from(bytes));
        if (!header.startsWith('%PDF-')) {
          console.error('❌ No es un PDF válido. Header:', header);
          return false;
        }
        console.log('✅ PDF verificado correctamente');
        return true;
      } catch (error) {
        console.error('❌ Error verificando PDF:', error);
        return false;
      }
    })();
  }
  reintentarCargarPDF() {
    this.pdfError = '';
    this.pdfLoaded = false;
    this.pdfLoadProgress = 0;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Reintentando carga',
      metadata: {
        avatar: '🔄'
      },
      module: 'manual-usuario',
      type: 'info'
    });
    this.cargarPDF();
  }
  usarPDFDemo() {
    this.pdfSrc = this.pdfDemoSrc;
    this.pdfError = '';
    this.pdfLoaded = false;
    this.pdfLoadProgress = 0;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Usando PDF de demostración',
      metadata: {
        avatar: '📄'
      },
      module: 'manual-usuario',
      type: 'info'
    });
    this.cargarPDF();
  }
  setWorkerLocalOnly() {
    if (!this.pdfjsLib) return;
    this.pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.js';
    console.log('Worker configurado para assets/pdf.worker.js');
  }
  // ========== MÉTODOS PRIVADOS ==========
  applyTheme() {
    if (!this.isBrowser) return;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
  setupKeyboardShortcuts() {
    if (!this.isBrowser) return;
    document.addEventListener('keydown', event => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        this.onOpenSearchModal();
      }
      if (event.key === 'Escape') {
        if (this.isSearchOpen) this.closeSearchModal();
        if (this.isUserMenuOpen) this.isUserMenuOpen = false;
        if (this.showVisorHelp) this.cerrarAyudaVisor();
      }
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          this.paginaAnterior();
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.paginaSiguiente();
          break;
        case '+':
        case '=':
          if (event.ctrlKey) {
            event.preventDefault();
            this.zoomIn();
          }
          break;
        case '-':
          if (event.ctrlKey) {
            event.preventDefault();
            this.zoomOut();
          }
          break;
        case 'b':
        case 'B':
          if (event.ctrlKey) {
            event.preventDefault();
            this.toggleMarcadorPagina();
          }
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          this.togglePantallaCompleta();
          break;
        case 'n':
        case 'N':
          if (event.ctrlKey) {
            event.preventDefault();
            this.toggleNotas();
          }
          break;
        case 'd':
        case 'D':
          if (event.ctrlKey) {
            event.preventDefault();
            this.descargarPDF();
          }
          break;
        case 'p':
        case 'P':
          if (event.ctrlKey) {
            event.preventDefault();
            this.imprimirPaginaActual();
          }
          break;
      }
    });
  }
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.search-modal-content') && !target.closest('.search-button') && !target.closest('.sidebar-search')) {
      this.isSearchOpen = false;
    }
    if (this.showConfirmCloseModal && target.closest('.modal-overlay')) {
      this.cancelarCerrarManual();
    }
    if (this.showVisorHelp && !target.closest('.modal-container') && target.closest('.modal-overlay')) {
      this.cerrarAyudaVisor();
    }
  }
  onFullscreenChange() {
    if (this.isBrowser) {
      this.isFullscreen = !!document.fullscreenElement;
    }
  }
  compartirPagina() {
    if (!this.isBrowser || !navigator?.clipboard) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
      return;
    }
    const shareUrl = `${window.location.origin}${this.router.url}?manual=abierto&page=${this.currentPage}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Página compartida',
        metadata: {
          avatar: '📄'
        },
        module: 'manual-usuario',
        type: 'success'
      });
    }).catch(err => {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
    });
  }
  compartirSeccion() {
    if (!this.isBrowser || !navigator?.clipboard) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
      return;
    }
    const chapter = this.getChapterForPage(this.currentPage);
    if (chapter) {
      const shareUrl = `${window.location.origin}${this.router.url}?manual=abierto&chapter=${chapter.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        this.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'Sección compartida',
          metadata: {
            avatar: '📄'
          },
          module: 'manual-usuario',
          type: 'success'
        });
      }).catch(err => {
        this.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'Error',
          metadata: {
            avatar: '❌'
          },
          module: 'manual-usuario',
          type: 'error'
        });
      });
    }
  }
  imprimirTodo() {
    if (!this.isBrowser) {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Error',
        metadata: {
          avatar: '❌'
        },
        module: 'manual-usuario',
        type: 'error'
      });
      return;
    }
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'Preparando impresión',
      metadata: {
        avatar: '🖨️'
      },
      module: 'manual-usuario',
      type: 'info'
    });
    setTimeout(() => {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const pages = [];
        for (let i = 1; i <= this.totalPaginas; i++) {
          pages.push(i);
        }
        printWindow.document.write(`
          <html>
            <head>
              <title>Manual SIGPAZ - Completo</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .page { page-break-after: always; margin-bottom: 50px; }
                .page-number { position: fixed; bottom: 10px; right: 10px; }
                .notes { margin-top: 20px; padding: 10px; background-color: #f5f5f5; }
                @media print {
                  body { margin: 0; }
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>Manual SIGPAZ - Completo</h1>
                <p>${new Date().toLocaleDateString()}</p>
              </div>

              ${pages.map(page => `
                <div class="page">
                  <h3>Página ${page}: ${this.getPageTitle(page)}</h3>
                  <p>Contenido simulado de la página ${page} del manual.</p>
                  ${this.pageNotes[page] && this.printWithNotes ? `<div class="notes">
                      <strong>Notas:</strong><br>
                      ${this.pageNotes[page]}
                    </div>` : ''}
                  ${this.bookmarks.find(b => b.page === page) && this.printWithBookmarks ? `<div style="margin-top: 10px; color: #666;">
                      <em>Marcador: ${this.bookmarks.find(b => b.page === page)?.title}</em>
                    </div>` : ''}
                </div>
              `).join('')}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }, 500);
  }
  handleOverlayClick(event) {
    if (event.target.classList.contains('modal-overlay-sigpaz')) {
      if (this.showHelpSupport && !this.isMinimized) {
        this.minimizeToBubble();
      }
    }
  }
  minimizeToBubble() {
    if (!this.isBrowser) return;
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
  usarPDFBase64Demo() {
    // PDF base64 simple de 1 página
    const pdfBase64 = 'JVBERi0xLjcKMSAwIG9iaiA8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iaiA8PC9UeXBlL1BhZ2VzL0NvdW50IDEvS2lkc1szIDAgUl0+PgplbmRvYmoKMyAwIG9iaiA8PC9UeXBlL1BhZ2UvUGFyZW50IDIgMCBSL1Jlc291cmNlcyA8PC9Gb250IDw8L0YxIDQgMCBSPj4+Pi9NZWRpYUJveFswIDAgNTk1IDg0Ml0vQ29udGVudHMgNSAwIFI+PgplbmRvYmoKNCAwIG9iaiA8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2EvTmFtZS9GMS9FbmNvZGluZy9XaW5BbnNpRW5jb2Rpbmc+PgplbmRvYmoKNSAwIG9iaiA8PC9MZW5ndGggMTEwPj4Kc3RyZWFtCnEKMCBTYyAwIFRkCjAgMCAwIHJnCi9GMSAxMiBUZgooRGVtbyBQREYgLSBTSUdQQVogTWFudWFsKSBUagogMCAtMTUgVGQKKFNlIGdlbmVyw7MgYXV0b23DoXRpY2FtZW50ZSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp0cmFpbGVyIDw8L1Jvb3QgMSAwIFIvU2l6ZSA2Pj4Kc3RhcnR4cmVmCjAKJSVFT0YK';
    this.pdfSrc = 'data:application/pdf;base64,' + pdfBase64;
    this.pdfDemoSrc = this.pdfSrc;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'PDF demo generado',
      metadata: {
        avatar: '✅'
      },
      module: 'manual-usuario',
      type: 'success'
    });
    // Cargar después de un breve retraso
    setTimeout(() => this.cargarPDF(), 300);
  }
  // Método mejorado para buscar PDF en rutas alternativas
  buscarPDFEnRutasAlternativas() {
    var _this3 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Nombre del archivo según el componente
      const nombreArchivo = 'manual-usuario-sigpaz.pdf';
      const rutasPosibles = [
      // Rutas absolutas desde la raíz
      `/assets/manuales/${nombreArchivo}`, `/src/assets/manuales/${nombreArchivo}`, `/assets/${nombreArchivo}`, `/manuales/assets/${nombreArchivo}`, `/${nombreArchivo}`,
      // Rutas relativas
      `assets/manuales/${nombreArchivo}`, `assets/${nombreArchivo}`, `manuales/assets/${nombreArchivo}`, `${nombreArchivo}`,
      // Con punto
      `./assets/manuales/${nombreArchivo}`, `./../../assets/${nombreArchivo}`, `./../../assets/manuales${nombreArchivo}`, `./assets/${nombreArchivo}`, `../assets/manuales/${nombreArchivo}`, `../assets/${nombreArchivo}`,
      // URLs completas para debug
      `${window.location.origin}/assets/manuales/${nombreArchivo}`, `${window.location.origin}/assets/${nombreArchivo}`];
      console.log(`🔍 Buscando PDF: ${nombreArchivo}`);
      for (const ruta of rutasPosibles) {
        try {
          console.log(`Probando ruta: ${ruta}`);
          const response = yield fetch(ruta, {
            method: 'HEAD'
          });
          if (response.ok) {
            console.log(`✅ PDF encontrado en: ${ruta}`);
            _this3.pdfSrc = ruta;
            _this3.pdfDemoSrc = ruta; // Actualizar también la demo
            return true;
          }
        } catch (error) {
          // Continuar con la siguiente ruta
        }
      }
      // Si no encuentra el PDF, intentar generar uno demo
      console.log('⚠️ No se encontró el PDF, generando demo...');
      yield _this3.generarPDFDemoLocal();
      return true; // El demo siempre "existe"
    })();
  }
  // Método mejorado para usar PDF demo
  usarPDFDemoConVerificacion() {
    var _this4 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Intentando cargar PDF de demostración...');
      // Primero, intentar cargar un PDF demo existente
      const demoExistente = yield _this4.verificarRutaPDF(_this4.pdfDemoSrc);
      if (demoExistente) {
        _this4.pdfSrc = _this4.pdfDemoSrc;
        _this4.pdfError = '';
        _this4.pdfLoaded = false;
        _this4.pdfLoadProgress = 0;
        _this4.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'Cargando demostración',
          metadata: {
            avatar: '📄'
          },
          module: 'manual-usuario',
          type: 'info'
        });
        // Intentar cargar el demo
        setTimeout(() => {
          _this4.cargarPDF();
        }, 500);
      } else {
        // Si no existe el demo, generar uno
        yield _this4.generarPDFDemo();
      }
    })();
  }
  // Método para generar PDF demo si no existe
  generarPDFDemo() {
    var _this5 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Generando PDF demo...');
        // Verificar si jsPDF está disponible
        let jsPDFModule;
        try {
          jsPDFModule = yield __webpack_require__.e(/*! import() */ "node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 2752));
        } catch (error) {
          console.warn('jsPDF no disponible, usando PDF base64');
          return _this5.usarPDFBase64Demo();
        }
        const {
          jsPDF
        } = jsPDFModule;
        const doc = new jsPDF();
        // Título
        doc.setFontSize(24);
        doc.setTextColor(79, 70, 229); // Color primario
        doc.text('Manual de Usuario SIGPAZ', 20, 30);
        // Información del sistema
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('Versión 2.5.1', 20, 45);
        doc.text('Manual de Demostración', 20, 55);
        // Separador
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(1);
        doc.line(20, 60, 190, 60);
        // Contenido
        doc.setFontSize(14);
        doc.text('Bienvenido al Manual de Usuario SIGPAZ', 20, 75);
        doc.setFontSize(11);
        const contenido = ['Este es un PDF de demostración generado automáticamente porque', 'el archivo PDF original no se encontró en el servidor.', '', 'Para solucionar este problema:', '1. Coloca el archivo manual-usuario-sigpaz.pdf en la carpeta:', '   src/assets/manuales/', '2. O contacta al administrador del sistema.', '', 'Características del visor:', '• Navegación por páginas', '• Zoom in/out', '• Marcadores', '• Notas por página', '• Búsqueda de contenido', '• Modo nocturno', '', `Fecha: ${new Date().toLocaleDateString()}`, 'Este documento es temporal y será reemplazado cuando', 'se cargue el PDF oficial del manual.'];
        let y = 85;
        contenido.forEach(linea => {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }
          doc.text(linea, 20, y);
          y += 7;
        });
        // Pie de página
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('SIGPAZ - Sistema Integrado de Gestión para la Paz', 105, 285, {
          align: 'center'
        });
        // Guardar como blob
        const pdfBlob = doc.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        // Actualizar la fuente del PDF
        _this5.pdfSrc = url;
        _this5.pdfDemoSrc = url;
        _this5.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Sistema',
          message: 'PDF demo generado',
          metadata: {
            avatar: '✅'
          },
          module: 'manual-usuario',
          type: 'success'
        });
        // Cargar el PDF generado
        setTimeout(() => {
          _this5.cargarPDF();
        }, 500);
      } catch (error) {
        console.error('Error generando PDF demo:', error);
        // Último recurso: usar PDF base64
        _this5.usarPDFBase64Demo();
      }
    })();
  }
  verificarRutaPDF(ruta) {
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield fetch(ruta, {
          method: 'HEAD'
        });
        return response.ok;
      } catch {
        return false;
      }
    })();
  }
  initializePdfJs() {
    var _this6 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.isBrowser) return;
      try {
        console.log('Intentando cargar PDF.js...');
        // Opción 1: Usar CDN (más confiable)
        if (typeof window !== 'undefined') {
          // Verificar si pdfjsLib ya está disponible globalmente
          if (window.pdfjsLib || window.pdfjsDist) {
            _this6.pdfjsLib = window.pdfjsLib || window.pdfjsDist;
            console.log('✅ PDF.js cargado desde ventana global');
            return;
          }
        }
        // Opción 2: Intentar importar desde diferentes ubicaciones
        try {
          // Intentar desde pdfjs-dist (el paquete oficial)
          const pdfjsModule = yield __webpack_require__.e(/*! import() */ "node_modules_pdfjs-dist_build_pdf_js").then(__webpack_require__.t.bind(__webpack_require__, /*! pdfjs-dist */ 55472, 23));
          _this6.pdfjsLib = pdfjsModule.default || pdfjsModule;
          console.log('✅ PDF.js cargado desde pdfjs-dist');
        } catch (error) {
          console.warn('No se pudo cargar desde pdfjs-dist, intentando otras opciones...');
          // Opción 3: Intentar cargar desde CDN
          yield _this6.cargarPDFjsDesdeCDN();
          if (!_this6.pdfjsLib) {
            throw new Error('No se pudo cargar PDF.js desde ninguna fuente');
          }
        }
        // Configurar worker
        _this6.configurarWorker();
      } catch (error) {
        console.error('❌ Error inicializando PDF.js:', error);
        // Crear un objeto mínimo para poder mostrar mensaje de error
        _this6.pdfjsLib = {
          getDocument: () => ({
            promise: Promise.reject(new Error('PDF.js no disponible'))
          })
        };
        _this6.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Error del visor',
          message: 'Error inicializando PDF.js',
          metadata: {
            avatar: '⚠️'
          },
          module: 'manual-usuario',
          type: 'warning'
        });
      }
    })();
  }
  configurarWorker() {
    if (!this.pdfjsLib || typeof window === 'undefined') return;
    try {
      // Configurar worker desde CDN
      this.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      console.log('Worker configurado desde CDN');
    } catch (error) {
      console.warn('No se pudo configurar worker, usando modo sin worker');
    }
  }
  cargarPDFReal() {
    var _this7 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        // Intentar cargar el PDF real
        fetch(_this7.pdfSrc).then(response => {
          if (response.ok) {
            console.log('✅ PDF real encontrado');
            resolve();
          } else {
            reject(new Error('PDF no encontrado'));
          }
        }).catch(reject);
      });
    })();
  }
  cargarPDFDemo() {
    var _this8 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        console.log('Cargando PDF demo...');
        // Crear un PDF demo simple con una página
        _this8.crearPDFDemoSimple();
        setTimeout(() => {
          console.log('✅ PDF demo creado');
          resolve();
        }, 500);
      });
    })();
  }
  crearPDFDemoSimple() {
    // Crear un canvas con contenido simulado
    const canvas = this.pdfCanvas?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Configurar canvas
    canvas.width = 800;
    canvas.height = 1131; // Tamaño A4
    // Fondo blanco
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Título
    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📘 Manual de Usuario SIGPAZ', canvas.width / 2, 100);
    // Subtítulo
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px Arial';
    ctx.fillText('Versión 2.5.1 - Modo Demostración', canvas.width / 2, 140);
    // Línea separadora
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 180);
    ctx.lineTo(canvas.width - 100, 180);
    ctx.stroke();
    // Contenido
    ctx.fillStyle = '#1f2937';
    ctx.font = '18px Arial';
    ctx.textAlign = 'left';
    const contenido = [`Página ${this.currentPage} de ${this.totalPaginas}`, '', 'Este es un contenido de demostración porque', 'el archivo PDF original no se encuentra.', '', 'Para solucionar este problema:', '1. Coloca el archivo manual-usuario-sigpaz.pdf', '   en la carpeta: src/assets/manuales/', '2. O contacta al administrador del sistema.', '', 'Características disponibles:', '• Navegación por páginas', '• Zoom in/out', '• Marcadores', '• Notas por página', '• Búsqueda de contenido', '', `Fecha: ${new Date().toLocaleDateString()}`, 'Hora: ' + new Date().toLocaleTimeString()];
    let y = 220;
    contenido.forEach(linea => {
      ctx.fillText(linea, 100, y);
      y += 30;
    });
    // Pie de página
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SIGPAZ - Sistema Integrado de Gestión para la Paz', canvas.width / 2, canvas.height - 50);
    // Marcar como cargado
    this.pdfLoaded = true;
    this.pdfLoadProgress = 100;
  }
  mostrarMensajeNoDisponible() {
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Sistema',
      message: 'No disponible',
      metadata: {
        avatar: '⚠️'
      },
      module: 'manual-usuario',
      type: 'warning'
    });
  }
  // Método auxiliar para mostrar contenido de error
  mostrarErrorPDF(mensaje) {
    const canvasContainer = this.elementRef.nativeElement.querySelector('.canvas-container');
    if (canvasContainer) {
      canvasContainer.innerHTML = `
      <div style="padding: 40px; text-align: center; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px;">
        <div style="font-size: 3rem; margin-bottom: 20px;">⚠️</div>
        <h3 style="color: #856404; margin-bottom: 15px;">Error cargando PDF</h3>
        <p style="color: #856404;">${mensaje}</p>
        <div style="margin-top: 20px;">
          <button style="padding: 10px 20px; background: #ffc107; border: none; border-radius: 4px; cursor: pointer;"
                  (click)="reintentarCargarPDF()">
            Reintentar
          </button>
        </div>
      </div>
    `;
    }
  }
  mostrarContenidoFallback() {
    this.pdfLoaded = false;
    this.pdfError = 'No se pudo cargar el PDF';
    // Mostrar mensaje en el contenedor
    const container = this.elementRef.nativeElement.querySelector('.pdf-canvas-wrapper');
    if (container) {
      container.innerHTML = `
      <div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        max-width: 500px;
        width: 90%;
      ">
        <div style="font-size: 4rem; margin-bottom: 20px;">📘</div>
        <h3 style="color: #4f46e5; margin-bottom: 15px;">Manual SIGPAZ</h3>
        <p style="color: #6b7280; margin-bottom: 25px; line-height: 1.5;">
          El visor de PDF no pudo cargarse correctamente.
        </p>
        <div style="
          background: #f3f4f6;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          text-align: left;
        ">
          <p style="margin: 0; color: #374151;">
            <strong>Página actual:</strong> ${this.currentPage}<br>
            <strong>Total páginas:</strong> ${this.totalPaginas}<br>
            <strong>Título:</strong> ${this.getPageTitle(this.currentPage)}
          </p>
        </div>
        <button
          style="
            padding: 12px 24px;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          "
          (click)="reintentarCargarPDF()"
          onmouseover="this.style.background='#6366f1'"
          onmouseout="this.style.background='#4f46e5'"
        >
          🔄 Reintentar carga
        </button>
      </div>
    `;
    }
    // Vincular el evento click del botón
    setTimeout(() => {
      const retryButton = this.elementRef.nativeElement.querySelector('button');
      if (retryButton) {
        retryButton.addEventListener('click', () => {
          this.reintentarCargarPDF();
        });
      }
    }, 100);
  }
  intentarCargarDemo(error) {
    var _this9 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔄 Intentando cargar PDF demo...');
      // Usar PDF demo local si está disponible
      _this9.pdfSrc = _this9.pdfDemoSrc;
      _this9.pdfError = '';
      _this9.pdfLoaded = false;
      _this9.pdfLoadProgress = 0;
      _this9.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Sistema',
        message: 'Usando PDF demo',
        metadata: {
          avatar: '📄'
        },
        module: 'manual-usuario',
        type: 'info'
      });
      // Esperar un momento antes de reintentar
      yield new Promise(resolve => setTimeout(resolve, 1000));
      // Reintentar carga
      yield _this9.cargarPDF();
    })();
  }
  inicializarPDFjs() {
    var _this0 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔄 Inicializando PDF.js...');
      try {
        // Cargar PDF.js desde CDN (la manera más confiable)
        if (typeof window !== 'undefined' && !window.pdfjsLib) {
          yield _this0.cargarPDFjsDesdeCDN();
        }
        _this0.pdfjsLib = window.pdfjsLib;
        if (!_this0.pdfjsLib) {
          throw new Error('PDF.js no se cargó correctamente');
        }
        console.log('✅ PDF.js cargado, versión:', _this0.pdfjsLib.version);
        // Configurar el worker (IMPORTANTE para quitar el warning)
        if (_this0.pdfjsLib.GlobalWorkerOptions) {
          _this0.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          console.log('✅ Worker configurado');
        }
      } catch (error) {
        console.error('❌ Error inicializando PDF.js:', error);
        throw error;
      }
    })();
  }
  cargarPDFjsDesdeCDN() {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('No en navegador'));
        return;
      }
      console.log('🌐 Cargando PDF.js desde CDN...');
      // Si ya está cargado, salir
      if (window.pdfjsLib) {
        console.log('✅ PDF.js ya está cargado');
        resolve();
        return;
      }
      // Crear script para PDF.js
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => {
        console.log('✅ PDF.js cargado desde CDN');
        // El worker se cargará automáticamente cuando se necesite
        // PDF.js 3.x maneja esto automáticamente
        resolve();
      };
      script.onerror = () => {
        console.error('❌ Error cargando PDF.js desde CDN');
        reject(new Error('Error cargando PDF.js'));
      };
      document.head.appendChild(script);
    });
  }
  cargarPDF() {
    var _this1 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🚀 INICIANDO CARGA DE PDF ====================');
      if (!_this1.isBrowser) {
        console.log('❌ No es navegador, saliendo');
        return;
      }
      // Resetear estado
      _this1.pdfLoadProgress = 0;
      _this1.pdfLoaded = false;
      _this1.pdfError = '';
      // Forzar detección de cambios
      _this1.cdr.detectChanges();
      try {
        // 1. Inicializar PDF.js
        console.log('1️⃣ Inicializando PDF.js...');
        yield _this1.inicializarPDFjs();
        if (!_this1.pdfjsLib) {
          throw new Error('PDF.js no inicializado');
        }
        // 2. Verificar que el canvas esté listo
        console.log('2️⃣ Verificando canvas...');
        if (!_this1.pdfCanvas) {
          throw new Error('Canvas no disponible');
        }
        if (!_this1.canvasContext) {
          _this1.canvasContext = _this1.pdfCanvas.nativeElement.getContext('2d');
          if (!_this1.canvasContext) {
            throw new Error('No se pudo obtener contexto 2D del canvas');
          }
        }
        // 3. Verificar existencia del PDF
        console.log('3️⃣ Verificando PDF en:', _this1.pdfSrc);
        const response = yield fetch(_this1.pdfSrc);
        if (!response.ok) {
          throw new Error(`PDF no encontrado (${response.status} ${response.statusText})`);
        }
        console.log('✅ PDF encontrado, tamaño:', response.headers.get('content-length'), 'bytes');
        // 4. Configurar loading task
        console.log('4️⃣ Configurando loading task...');
        const loadingTask = _this1.pdfjsLib.getDocument({
          url: _this1.pdfSrc,
          cMapUrl: 'https://unpkg.com/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true
        });
        // Progreso
        loadingTask.onProgress = progress => {
          const percent = Math.round(progress.loaded / progress.total * 100);
          _this1.pdfLoadProgress = percent;
          console.log(`📊 Progreso: ${percent}%`);
          _this1.cdr.detectChanges();
        };
        // 5. Cargar documento
        console.log('5️⃣ Cargando documento PDF...');
        _this1.pdfDoc = yield loadingTask.promise;
        // 6. Actualizar información
        _this1.totalPaginas = _this1.pdfDoc.numPages;
        _this1.pdfLoadProgress = 100;
        _this1.pdfLoaded = true;
        console.log(`✅ PDF cargado exitosamente: ${_this1.totalPaginas} páginas`);
        // 7. Renderizar primera página
        console.log('6️⃣ Renderizando primera página...');
        yield _this1.renderPage(_this1.currentPage);
        console.log('🎉 CARGA COMPLETADA EXITOSAMENTE');
        _this1.notificationService.addNotification({
          userId: 'Sistema',
          title: '✅ PDF cargado',
          message: 'PDF cargado exitosamente',
          metadata: {
            avatar: '📄'
          },
          module: 'manual-usuario',
          type: 'success'
        });
      } catch (error) {
        console.error('❌ ERROR EN CARGA DE PDF:', error);
        _this1.pdfError = error.message;
        _this1.pdfLoaded = false;
        _this1.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Error cargando PDF',
          message: 'Error cargando PDF',
          metadata: {
            avatar: '❌'
          },
          module: 'manual-usuario',
          type: 'error'
        });
        // Intentar PDF demo
        yield _this1.intentarPDFDemo(error);
      } finally {
        _this1.cdr.detectChanges();
      }
    })();
  }
  renderPage(num) {
    var _this10 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`\n🎬 INICIANDO RENDER DE PÁGINA ${num} ====================`);
      if (!_this10.pdfDoc) {
        console.log('❌ pdfDoc no disponible');
        return;
      }
      if (!_this10.canvasContext) {
        console.log('❌ canvasContext no disponible');
        return;
      }
      if (_this10.pageRendering) {
        console.log('⏳ Ya se está renderizando, guardando página pendiente:', num);
        _this10.pageNumPending = num;
        return;
      }
      _this10.pageRendering = true;
      console.log(`🔄 Renderizando página ${num}...`);
      try {
        // 1. Obtener página del PDF
        console.log(`1️⃣ Obteniendo página ${num}...`);
        const page = yield _this10.pdfDoc.getPage(num);
        console.log(`✅ Página ${num} obtenida`);
        // 2. Obtener canvas y contenedor
        const canvas = _this10.pdfCanvas.nativeElement;
        const container = canvas.parentElement;
        console.log(`2️⃣ Canvas: ${canvas.width}x${canvas.height}`);
        console.log(`2️⃣ Canvas client: ${canvas.clientWidth}x${canvas.clientHeight}`);
        console.log(`2️⃣ Contenedor: ${container?.clientWidth}x${container?.clientHeight}`);
        // 3. Calcular escala
        const viewport = page.getViewport({
          scale: 1
        });
        console.log(`3️⃣ Viewport original: ${viewport.width}x${viewport.height}`);
        // Usar ancho fijo para pruebas
        const targetWidth = 800; // Ancho fijo para pruebas
        const scale = targetWidth / viewport.width;
        const finalScale = _this10.zoomLevel / 100 * scale;
        console.log(`3️⃣ Escala calculada: ${finalScale.toFixed(2)}`);
        const finalViewport = page.getViewport({
          scale: finalScale
        });
        console.log(`3️⃣ Viewport final: ${finalViewport.width}x${finalViewport.height}`);
        // 4. Configurar canvas - ESTO ES LO MÁS IMPORTANTE
        console.log('4️⃣ Configurando canvas...');
        // Establecer dimensiones físicas del canvas
        canvas.width = Math.floor(finalViewport.width);
        canvas.height = Math.floor(finalViewport.height);
        // Establecer dimensiones CSS (para visualización)
        canvas.style.width = finalViewport.width + 'px';
        canvas.style.height = finalViewport.height + 'px';
        // Hacer el canvas visible
        canvas.style.display = 'block';
        canvas.style.visibility = 'visible';
        canvas.style.opacity = '1';
        canvas.style.backgroundColor = '#ffffff';
        canvas.style.border = '2px solid #4f46e5';
        canvas.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        canvas.style.margin = '20px auto';
        console.log(`4️⃣ Canvas configurado: ${canvas.width}x${canvas.height}`);
        console.log(`4️⃣ Canvas CSS: ${canvas.style.width} x ${canvas.style.height}`);
        // 5. Preparar contexto de render
        console.log('5️⃣ Preparando contexto de render...');
        // Limpiar canvas
        _this10.canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        // Fondo blanco
        _this10.canvasContext.fillStyle = '#ffffff';
        _this10.canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        // 6. Renderizar página
        console.log('6️⃣ Renderizando...');
        const renderContext = {
          canvasContext: _this10.canvasContext,
          viewport: finalViewport,
          enableWebGL: false,
          renderInteractiveForms: false,
          background: 'rgba(255, 255, 255, 1)'
        };
        const renderTask = page.render(renderContext);
        yield renderTask.promise;
        console.log(`✅ Página ${num} renderizada exitosamente`);
        // 7. Dibujar borde de debug
        _this10.canvasContext.strokeStyle = '#4f46e5';
        _this10.canvasContext.lineWidth = 2;
        _this10.canvasContext.strokeRect(0, 0, canvas.width, canvas.height);
        // 8. Dibujar texto de debug en el canvas
        _this10.canvasContext.fillStyle = '#4f46e5';
        _this10.canvasContext.font = '16px Arial';
        _this10.canvasContext.fillText(`Página ${num}`, 10, 30);
        _this10.canvasContext.fillText(`${canvas.width}x${canvas.height}`, 10, 50);
        // 9. Actualizar estado
        _this10.currentPage = num;
        _this10.pageRendering = false;
        // 10. Manejar página pendiente
        if (_this10.pageNumPending !== null) {
          const nextPage = _this10.pageNumPending;
          _this10.pageNumPending = null;
          console.log(`📖 Renderizando página pendiente: ${nextPage}`);
          yield _this10.renderPage(nextPage);
        }
        // 11. Actualizar UI
        _this10.addToHistory(num);
        _this10.pagesViewed++;
        _this10.actualizarEstadisticas();
        _this10.saveData();
        // Forzar actualización
        _this10.cdr.detectChanges();
        console.log('🎉 RENDER COMPLETADO EXITOSAMENTE');
      } catch (error) {
        console.error('❌ ERROR RENDERIZANDO PÁGINA:', error);
        console.error('Stack:', error.stack);
        _this10.pageRendering = false;
        // Mostrar error en el canvas
        if (_this10.canvasContext && _this10.pdfCanvas) {
          const canvas = _this10.pdfCanvas.nativeElement;
          _this10.canvasContext.fillStyle = '#ff0000';
          _this10.canvasContext.font = '20px Arial';
          _this10.canvasContext.fillText('ERROR RENDERIZANDO', 50, 100);
          _this10.canvasContext.fillText(error.message, 50, 130);
        }
      }
    })();
  }
  probarCanvas() {
    console.log('🧪 PROBANDO CANVAS MANUALMENTE');
    if (!this.pdfCanvas) {
      console.log('❌ Canvas no disponible');
      return;
    }
    const canvas = this.pdfCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('❌ Contexto 2D no disponible');
      return;
    }
    // Configurar canvas
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.width = '800px';
    canvas.style.height = '600px';
    canvas.style.display = 'block';
    canvas.style.backgroundColor = '#4f46e5';
    canvas.style.border = '3px solid #10b981';
    canvas.style.margin = '20px auto';
    // Dibujar algo
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#4f46e5';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('✅ CANVAS FUNCIONANDO', canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText('Este es un test manual', canvas.width / 2, canvas.height / 2 + 30);
    // Dibujar un rectángulo
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    console.log('✅ Test de canvas completado');
    console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
    console.log('Canvas visible:', canvas.offsetWidth, 'x', canvas.offsetHeight);
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Test de Canvas',
      message: 'Test de Canvas completado',
      metadata: {
        avatar: '✅'
      },
      module: 'manual-usuario',
      type: 'success'
    });
  }
  intentarPDFDemo(error) {
    var _this11 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔄 INTENTANDO CARGAR PDF DEMO ====================');
      console.log('Error original:', error.message);
      try {
        // Guardar la ruta original
        const originalSrc = _this11.pdfSrc;
        // Intentar diferentes rutas para el demo
        const rutasDemo = ['assets/demo-manual.pdf', 'assets/manuales/demo-manual.pdf', 'assets/docs/demo-manual.pdf', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'https://www.africau.edu/images/default/sample.pdf'];
        let demoEncontrado = false;
        for (const ruta of rutasDemo) {
          console.log(`🔍 Probando demo en: ${ruta}`);
          try {
            const response = yield fetch(ruta, {
              method: 'HEAD'
            });
            if (response.ok) {
              console.log(`✅ Demo encontrado en: ${ruta}`);
              _this11.pdfSrc = ruta;
              _this11.pdfDemoSrc = ruta;
              demoEncontrado = true;
              break;
            }
          } catch (e) {
            console.log(`❌ No se pudo acceder a: ${ruta}`);
          }
        }
        if (!demoEncontrado) {
          console.log('⚠️ No se encontró ningún demo, generando uno...');
          yield _this11.generarPDFDemoLocal();
          return;
        }
        // Resetear estado
        _this11.pdfError = '';
        _this11.pdfLoaded = false;
        _this11.pdfLoadProgress = 0;
        _this11.cdr.detectChanges();
        _this11.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Cargando demo',
          message: 'Cargando demo',
          metadata: {
            avatar: '📄'
          },
          module: 'manual-usuario',
          type: 'info'
        });
        // Esperar un momento para que el usuario vea el mensaje
        yield new Promise(resolve => setTimeout(resolve, 1000));
        // Reintentar carga con el demo
        console.log('🔄 Reintentando carga con demo...');
        yield _this11.cargarPDF();
      } catch (demoError) {
        console.error('❌ Error cargando demo:', demoError);
        // Último recurso: generar PDF localmente
        yield _this11.generarPDFDemoLocal();
      }
    })();
  }
  generarPDFDemoLocal() {
    var _this12 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🛠️ GENERANDO PDF DEMO LOCAL ====================');
      try {
        // Verificar si jsPDF está disponible
        let jsPDFModule;
        try {
          jsPDFModule = yield __webpack_require__.e(/*! import() */ "node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 2752));
        } catch (error) {
          console.warn('jsPDF no disponible, usando canvas fallback');
          return _this12.generarPDFDemoConCanvas();
        }
        const {
          jsPDF
        } = jsPDFModule;
        const doc = new jsPDF();
        // Configurar documento
        doc.setProperties({
          title: 'Manual SIGPAZ - Demo',
          subject: 'Demostración del visor de PDF',
          author: 'Sistema SIGPAZ',
          keywords: 'demo, manual, usuario, sigpaz',
          creator: 'SIGPAZ PDF Viewer'
        });
        // Portada
        doc.setFillColor(79, 70, 229); // Color primario
        doc.rect(0, 0, 210, 297, 'F'); // Fondo azul (tamaño A4)
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(36);
        doc.setFont('helvetica', 'bold');
        doc.text('📘 Manual SIGPAZ', 105, 60, {
          align: 'center'
        });
        doc.setFontSize(20);
        doc.text('Versión 2.5.1 - Demo', 105, 85, {
          align: 'center'
        });
        // Separador
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(1);
        doc.line(30, 100, 180, 100);
        // Información
        doc.setFontSize(14);
        doc.text('Este es un PDF de demostración generado automáticamente', 105, 120, {
          align: 'center'
        });
        doc.text('porque el archivo PDF original no se encontró.', 105, 130, {
          align: 'center'
        });
        doc.setFontSize(12);
        const contenido = ['Para solucionar este problema:', '1. Coloca el archivo manual-usuario-sigpaz.pdf', '   en la carpeta: src/assets/manuales/', '2. O contacta al administrador del sistema.', '', 'Características del visor:', '• Navegación por páginas', '• Zoom in/out', '• Marcadores', '• Notas por página', '• Búsqueda de contenido', '• Modo nocturno', '', `Fecha: ${new Date().toLocaleDateString()}`, 'Hora: ' + new Date().toLocaleTimeString(), '', 'Este documento es temporal y será reemplazado cuando', 'se cargue el PDF oficial del manual.'];
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        let y = 150;
        contenido.forEach(linea => {
          doc.text(linea, 20, y);
          y += 7;
        });
        // Pie de página
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('SIGPAZ - Sistema Integrado de Gestión para la Paz', 105, 285, {
          align: 'center'
        });
        doc.text('Página 1 de 1', 105, 290, {
          align: 'center'
        });
        // Generar Blob
        const pdfBlob = doc.output('blob');
        const blobUrl = URL.createObjectURL(pdfBlob);
        // Actualizar rutas
        _this12.pdfSrc = blobUrl;
        _this12.pdfDemoSrc = blobUrl;
        console.log('✅ PDF demo generado localmente');
        _this12.notificationService.addNotification({
          userId: 'Sistema',
          title: 'PDF demo generado',
          message: 'PDF demo generado exitosamente',
          metadata: {
            avatar: '✅'
          },
          module: 'manual-usuario',
          type: 'success'
        });
        // Cargar después de un breve retraso
        setTimeout(() => {
          _this12.cargarPDF();
        }, 500);
      } catch (error) {
        console.error('❌ Error generando PDF demo:', error);
        // Último recurso: canvas simple
        _this12.generarPDFDemoConCanvas();
      }
    })();
  }
  generarPDFDemoConCanvas() {
    console.log('🎨 Generando demo con canvas...');
    if (!this.pdfCanvas || !this.canvasContext) {
      console.log('❌ Canvas no disponible para demo');
      return;
    }
    const canvas = this.pdfCanvas.nativeElement;
    const ctx = this.canvasContext;
    // Configurar canvas
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.width = '800px';
    canvas.style.height = '600px';
    canvas.style.display = 'block';
    canvas.style.backgroundColor = '#ffffff';
    canvas.style.border = '2px solid #4f46e5';
    canvas.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    canvas.style.margin = '20px auto';
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fondo
    ctx.fillStyle = '#4f46e5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Contenido
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📘 Manual SIGPAZ', canvas.width / 2, canvas.height / 2 - 80);
    ctx.font = '24px Arial';
    ctx.fillText('Versión 2.5.1 - Demo', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '18px Arial';
    ctx.fillText('PDF no encontrado', canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText('Este es un contenido de demostración', canvas.width / 2, canvas.height / 2 + 50);
    ctx.font = '16px Arial';
    ctx.fillText('Coloca manual-usuario-sigpaz.pdf en:', canvas.width / 2, canvas.height / 2 + 100);
    ctx.fillText('src/assets/manuales/', canvas.width / 2, canvas.height / 2 + 130);
    ctx.font = '14px Arial';
    ctx.fillText(`Generado: ${new Date().toLocaleString()}`, canvas.width / 2, canvas.height - 50);
    // Actualizar estado
    this.pdfLoaded = true;
    this.pdfLoadProgress = 100;
    this.totalPaginas = 1;
    this.currentPage = 1;
    console.log('✅ Demo generado en canvas');
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Demo generado',
      message: 'Demo generado exitosamente',
      metadata: {
        avatar: '🎨'
      },
      module: 'manual-usuario',
      type: 'info'
    });
    this.cdr.detectChanges();
  }
  // ========== MÉTODOS PARA VISTA DOBLE PÁGINA ==========
  renderizarPaginaActual() {
    var _this13 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this13.pdfDoc) return;
      try {
        const page = yield _this13.pdfDoc.getPage(_this13.currentPage);
        const canvas = _this13.pdfCanvas?.nativeElement;
        if (!canvas) return;
        if (!_this13.canvasContext) {
          _this13.canvasContext = canvas.getContext('2d');
          if (!_this13.canvasContext) return;
        }
        const scale = _this13.calcularEscalaPagina(page, canvas) * (_this13.zoomLevel / 100);
        yield _this13.renderizarPaginaEnCanvas(page, canvas, _this13.canvasContext, scale);
      } catch (error) {
        console.error('Error renderizando página:', error);
      }
    })();
  }
  renderizarPaginaEnCanvas(page, canvas, context, scale) {
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const viewport = page.getViewport({
        scale
      });
      // Configurar canvas
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = viewport.width + 'px';
      canvas.style.height = viewport.height + 'px';
      canvas.style.display = 'block';
      canvas.style.visibility = 'visible';
      canvas.style.backgroundColor = '#ffffff';
      // Renderizar página
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        enableWebGL: false
      };
      yield page.render(renderContext).promise;
    })();
  }
  renderizarModoScroll() {
    var _this14 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('📜 Iniciando modo scroll...');
      if (!_this14.pdfDoc || !_this14.pdfCanvasSingle) return;
      try {
        const container = _this14.pdfCanvasSingle.nativeElement.parentElement;
        if (!container) return;
        // Limpiar contenedor
        container.innerHTML = '';
        // Crear canvas para cada página
        for (let i = 1; i <= _this14.totalPaginas; i++) {
          try {
            const page = yield _this14.pdfDoc.getPage(i);
            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page-canvas scroll-page';
            canvas.style.display = 'block';
            canvas.style.margin = '0 auto 30px auto';
            canvas.style.backgroundColor = '#ffffff';
            canvas.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            canvas.style.border = '1px solid #e5e7eb';
            container.appendChild(canvas);
            const context = canvas.getContext('2d');
            if (!context) continue;
            const scale = _this14.calcularEscalaPagina(page, canvas) * (_this14.zoomLevel / 100);
            yield _this14.renderizarPaginaEnCanvas(page, canvas, context, scale);
          } catch (error) {
            console.error(`Error renderizando página ${i} en modo scroll:`, error);
          }
        }
        console.log(`✅ Modo scroll completado: ${_this14.totalPaginas} páginas renderizadas`);
      } catch (error) {
        console.error('Error en modo scroll:', error);
      }
    })();
  }
  calcularEscalaPagina(page, canvas, isDoublePage = false) {
    const viewport = page.getViewport({
      scale: 1
    });
    const container = canvas.parentElement;
    if (!container) return 1;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    if (isDoublePage) {
      // Para vista doble, dividir el ancho entre 2 páginas (con espacio entre ellas)
      const availableWidth = (containerWidth - 40) / 2; // 40px de gap total
      const scaleX = availableWidth / viewport.width;
      const scaleY = containerHeight / viewport.height;
      return Math.min(scaleX, scaleY);
    }
    // Para vista única
    const scaleX = containerWidth / viewport.width;
    const scaleY = containerHeight / viewport.height;
    return Math.min(scaleX, scaleY);
  }
  calcularPaginasDobles() {
    // Si la página actual es impar, mostrar páginas actual y siguiente
    if (this.currentPage % 2 === 1) {
      this.leftPage = this.currentPage;
      this.rightPage = Math.min(this.currentPage + 1, this.totalPaginas);
    } else {
      // Si es par, mostrar página anterior y actual
      this.leftPage = Math.max(1, this.currentPage - 1);
      this.rightPage = this.currentPage;
    }
  }
  // ========== ACTUALIZA LAS FUNCIONES DE NAVEGACIÓN ==========
  paginaSiguiente() {
    if (this.viewMode === 'double') {
      // Avanzar dos páginas en modo doble
      const newPage = Math.min(this.currentPage + 2, this.totalPaginas);
      if (newPage !== this.currentPage) {
        this.currentPage = newPage;
        this.cambiarModoVisualizacion();
      }
    } else {
      if (this.currentPage < this.totalPaginas && !this.pageRendering) {
        this.renderPage(this.currentPage + 1);
      }
    }
  }
  paginaAnterior() {
    if (this.viewMode === 'double') {
      // Retroceder dos páginas en modo doble
      const newPage = Math.max(1, this.currentPage - 2);
      if (newPage !== this.currentPage) {
        this.currentPage = newPage;
        this.cambiarModoVisualizacion();
      }
    } else {
      if (this.currentPage > 1 && !this.pageRendering) {
        this.renderPage(this.currentPage - 1);
      }
    }
  }
  irAPagina(page) {
    let pageNum;
    if (typeof page === 'object' && page !== null) {
      if (page.target) {
        const input = page.target;
        pageNum = Number(input.value);
      } else if (page.page) {
        pageNum = Number(page.page);
      } else {
        pageNum = Number(page);
      }
    } else {
      pageNum = Number(page);
    }
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= this.totalPaginas) {
      if (this.viewMode === 'double') {
        // Ajustar para vista doble
        if (pageNum % 2 === 0) {
          pageNum = pageNum - 1; // Mostrar como página izquierda
        }
      }
      this.currentPage = pageNum;
      this.cambiarModoVisualizacion();
    }
  }
  // ========== ACTUALIZA LAS FUNCIONES DE ZOOM ==========
  zoomIn() {
    if (this.zoomLevel < 300) {
      this.zoomLevel += 10;
      this.cambiarModoVisualizacion();
    }
  }
  zoomOut() {
    if (this.zoomLevel > 30) {
      this.zoomLevel -= 10;
      this.cambiarModoVisualizacion();
    }
  }
  zoom100() {
    this.zoomLevel = 100;
    this.cambiarModoVisualizacion();
  }
  ajustarZoom() {
    this.zoomLevel = 85;
    this.cambiarModoVisualizacion();
  }
  // ========== ACTUALIZA ngAfterViewInit() ==========
  verificarCanvas() {
    console.log('🔍 Verificando estado de canvas...');
    if (this.viewMode === 'single' && this.pdfCanvas) {
      if (!this.canvasContext) {
        this.canvasContext = this.pdfCanvas.nativeElement.getContext('2d');
        console.log('✅ Canvas principal verificado/creado');
      }
    }
    if (this.viewMode === 'double') {
      if (this.pdfCanvas1 && !this.canvasContext1) {
        this.canvasContext1 = this.pdfCanvas1.nativeElement.getContext('2d');
        console.log('✅ Canvas 1 verificado/creado');
      }
      if (this.pdfCanvas2 && !this.canvasContext2) {
        this.canvasContext2 = this.pdfCanvas2.nativeElement.getContext('2d');
        console.log('✅ Canvas 2 verificado/creado');
      }
    }
  }
  observer = null;
  ngOnDestroy() {
    if (this.sessionTimerSubscription) {
      this.sessionTimerSubscription.unsubscribe();
    }
    this.saveData();
    if (this.observer) {
      this.observer.disconnect();
    }
    this.moduleLoader.markModuleRendered(this.moduleName);
    this.markModuleAsReady();
  }
  stopRendering() {
    console.log('🛑 Deteniendo renderizado...');
    // Definir arrays separados para canvas y divs
    const canvasElements = [];
    const scrollContainer = this.pdfCanvasSingle?.nativeElement;
    // Solo agregar elementos que sean HTMLCanvasElement
    if (this.pdfCanvas?.nativeElement instanceof HTMLCanvasElement) {
      canvasElements.push(this.pdfCanvas.nativeElement);
    }
    if (this.pdfCanvas1?.nativeElement instanceof HTMLCanvasElement) {
      canvasElements.push(this.pdfCanvas1.nativeElement);
    }
    if (this.pdfCanvas2?.nativeElement instanceof HTMLCanvasElement) {
      canvasElements.push(this.pdfCanvas2.nativeElement);
    }
    console.log(`🎯 Limpiando ${canvasElements.length} canvas...`);
    // Limpiar todos los canvas
    canvasElements.forEach(canvas => {
      try {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          console.log(`✅ Canvas limpiado: ${canvas.width}x${canvas.height}`);
        }
      } catch (error) {
        console.error('❌ Error limpiando canvas:', error);
      }
    });
    // Limpiar el contenedor scroll (que es un div)
    if (scrollContainer instanceof HTMLDivElement) {
      scrollContainer.innerHTML = ''; // Limpiar contenido HTML
      console.log('✅ Contenedor scroll limpiado');
    }
    this.pageRendering = false;
    this.pageNumPending = null;
  }
  cambiarModoVisualizacion() {
    var _this15 = this;
    console.log(`🔄 Cambiando modo de visualización a: ${this.viewMode}`);
    // Detener renderizado actual
    this.stopRendering();
    // Forzar detección de cambios inmediata
    this.cdr.detectChanges();
    // Pequeño delay para asegurar que el DOM se actualice
    setTimeout(() => {
      this.cdr.detectChanges();
      // Verificar que los canvas existan en el DOM
      setTimeout(/*#__PURE__*/(0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log(`🎯 Modo ${_this15.viewMode}: Verificando canvas en DOM...`);
        if (_this15.viewMode === 'double') {
          yield _this15.modoVistaDoble();
        } else if (_this15.viewMode === 'single') {
          yield _this15.modoVistaUnica();
        } else if (_this15.viewMode === 'scroll') {
          yield _this15.modoVistaScroll();
        }
      }), 300);
    }, 100);
  }
  modoVistaDoble() {
    var _this16 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('📖 Configurando vista doble...');
      // Calcular páginas para vista doble
      _this16.calcularPaginasDobles();
      // Asegurar que la página actual sea válida para vista doble
      if (_this16.currentPage % 2 === 0 && _this16.currentPage > 1) {
        _this16.currentPage = _this16.currentPage - 1;
      }
      console.log(`📄 Páginas a mostrar: ${_this16.leftPage} | ${_this16.rightPage}`);
      // Verificar que los canvas estén en el DOM
      const canvas1InDOM = document.querySelector('canvas.left-page');
      const canvas2InDOM = document.querySelector('canvas.right-page');
      console.log('🎯 Canvas en DOM:', {
        canvas1: !!canvas1InDOM,
        canvas2: !!canvas2InDOM
      });
      // Si los canvas no están en el DOM, esperar y reintentar
      if (!canvas1InDOM || !canvas2InDOM) {
        console.log('⏳ Esperando que canvas aparezcan en DOM...');
        setTimeout(() => _this16.modoVistaDoble(), 200);
        return;
      }
      // Inicializar contextos si es necesario
      yield _this16.inicializarContextosVistaDoble();
      // Renderizar páginas
      if (_this16.pdfLoaded && _this16.pdfDoc) {
        yield _this16.renderizarPaginasDobles();
      } else {
        console.log('⏳ PDF no cargado aún, esperando...');
        setTimeout(() => _this16.modoVistaDoble(), 500);
      }
    })();
  }
  inicializarContextosVistaDoble() {
    var _this17 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔧 Inicializando contextos para vista doble...');
      if (!_this17.pdfCanvas1 || !_this17.pdfCanvas2) {
        console.error('❌ Canvas no disponibles');
        return;
      }
      // Verificar que sean HTMLCanvasElement
      const canvas1 = _this17.pdfCanvas1.nativeElement;
      const canvas2 = _this17.pdfCanvas2.nativeElement;
      if (!(canvas1 instanceof HTMLCanvasElement) || !(canvas2 instanceof HTMLCanvasElement)) {
        console.error('❌ Elementos no son canvas');
        return;
      }
      // Inicializar contextos
      if (!_this17.canvasContext1) {
        _this17.canvasContext1 = canvas1.getContext('2d');
        console.log('✅ Contexto 1 inicializado:', !!_this17.canvasContext1);
      }
      if (!_this17.canvasContext2) {
        _this17.canvasContext2 = canvas2.getContext('2d');
        console.log('✅ Contexto 2 inicializado:', !!_this17.canvasContext2);
      }
      // Configurar canvas visibles
      canvas1.style.display = 'block';
      canvas1.style.visibility = 'visible';
      canvas1.style.opacity = '1';
      canvas2.style.display = 'block';
      canvas2.style.visibility = 'visible';
      canvas2.style.opacity = '1';
    })();
  }
  modoVistaUnica() {
    var _this18 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('📖 Configurando vista única...');
      if (_this18.pdfLoaded && _this18.pdfDoc) {
        yield _this18.renderizarPaginaActual();
      }
    })();
  }
  modoVistaScroll() {
    var _this19 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('📖 Configurando vista scroll...');
      if (_this19.pdfLoaded && _this19.pdfDoc) {
        yield _this19.renderizarModoScroll();
      }
    })();
  }
  renderizarPaginasDobles() {
    var _this20 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔄 Renderizando vista doble...');
      // Verificar que los canvas estén en el DOM y sean visibles
      if (!_this20.pdfCanvas1 || !_this20.pdfCanvas2) {
        console.error('❌ Canvas no disponibles');
        return;
      }
      const canvas1 = _this20.pdfCanvas1.nativeElement;
      const canvas2 = _this20.pdfCanvas2.nativeElement;
      if (!(canvas1 instanceof HTMLCanvasElement) || !(canvas2 instanceof HTMLCanvasElement)) {
        console.error('❌ Elementos no son canvas');
        return;
      }
      // Hacer visibles los canvas
      canvas1.style.display = 'block';
      canvas1.style.visibility = 'visible';
      canvas1.style.opacity = '1';
      canvas2.style.display = 'block';
      canvas2.style.visibility = 'visible';
      canvas2.style.opacity = '1';
      // Verificar contexto
      if (!_this20.canvasContext1) {
        _this20.canvasContext1 = canvas1.getContext('2d');
      }
      if (!_this20.canvasContext2) {
        _this20.canvasContext2 = canvas2.getContext('2d');
      }
      if (!_this20.canvasContext1 || !_this20.canvasContext2) {
        console.error('❌ Contextos no disponibles');
        return;
      }
      if (!_this20.pdfDoc) {
        console.log('❌ pdfDoc no disponible para vista doble');
        return;
      }
      try {
        console.log(`🔄 Renderizando páginas: ${_this20.leftPage} | ${_this20.rightPage}`);
        // Obtener páginas
        const page1 = yield _this20.pdfDoc.getPage(_this20.leftPage);
        const page2 = yield _this20.pdfDoc.getPage(_this20.rightPage);
        // Calcular escalas
        const scale1 = _this20.calcularEscalaPagina(page1, canvas1, true);
        const scale2 = _this20.calcularEscalaPagina(page2, canvas2, true);
        // Aplicar escala común
        const commonScale = Math.min(scale1, scale2) * (_this20.zoomLevel / 100);
        console.log(`📐 Escala: ${commonScale.toFixed(2)} (Zoom: ${_this20.zoomLevel}%)`);
        // Renderizar ambas páginas
        const renderPromises = [_this20.renderizarPaginaEnCanvas(page1, canvas1, _this20.canvasContext1, commonScale), _this20.renderizarPaginaEnCanvas(page2, canvas2, _this20.canvasContext2, commonScale)];
        yield Promise.all(renderPromises);
        console.log(`✅ Vista doble renderizada: Páginas ${_this20.leftPage} | ${_this20.rightPage}`);
        // Añadir estilos para separación visual
        canvas1.style.marginRight = '10px';
        canvas2.style.marginLeft = '10px';
        // Mostrar notificación
        _this20.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Vista doble activada',
          message: 'Vista doble activada exitosamente',
          metadata: {
            avatar: '📖'
          },
          module: 'manual-usuario',
          type: 'info'
        });
      } catch (error) {
        console.error('❌ Error renderizando páginas dobles:', error);
        // Fallback a vista única
        _this20.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Error vista doble',
          message: 'Error al activar vista doble',
          metadata: {
            avatar: '⚠️'
          },
          module: 'manual-usuario',
          type: 'warning'
        });
        _this20.viewMode = 'single';
        _this20.cambiarModoVisualizacion();
      }
    })();
  }
  verificarVisibilidadCanvas() {
    console.log('👁️ Verificando visibilidad de canvas...');
    // Verificar canvas principal
    const canvasPrincipal = this.pdfCanvas?.nativeElement;
    if (canvasPrincipal instanceof HTMLCanvasElement) {
      console.log('🎯 Canvas principal:', {
        display: canvasPrincipal.style.display,
        visibility: canvasPrincipal.style.visibility,
        opacity: canvasPrincipal.style.opacity,
        inDOM: document.body.contains(canvasPrincipal)
      });
    }
    // Verificar canvas de vista doble
    const canvas1 = this.pdfCanvas1?.nativeElement;
    const canvas2 = this.pdfCanvas2?.nativeElement;
    if (canvas1 instanceof HTMLCanvasElement) {
      console.log('🎯 Canvas 1 (izquierda):', {
        display: canvas1.style.display,
        visibility: canvas1.style.visibility,
        opacity: canvas1.style.opacity,
        inDOM: document.body.contains(canvas1)
      });
    }
    if (canvas2 instanceof HTMLCanvasElement) {
      console.log('🎯 Canvas 2 (derecha):', {
        display: canvas2.style.display,
        visibility: canvas2.style.visibility,
        opacity: canvas2.style.opacity,
        inDOM: document.body.contains(canvas2)
      });
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      console.log('🎨 Inicializando visor PDF...');
      // Primero buscar el PDF en rutas alternativas
      this.buscarPDFEnRutasAlternativas().then(pdfEncontrado => {
        if (pdfEncontrado) {
          console.log('✅ PDF encontrado, inicializando visor...');
          // Esperar a que Angular renderice completamente
          setTimeout(() => {
            this.inicializarVisorPDF();
          }, 1000);
        } else {
          console.error('❌ No se encontró el PDF en ninguna ruta');
          this.mostrarErrorPDF('No se encontró el archivo PDF del manual');
        }
      });
    }
  }
  inicializarVisorPDF() {
    console.log('🔧 Inicializando visor PDF...');
    // Verificar que los elementos existan en el DOM
    this.verificarElementosDOM();
    // Inicializar canvas después de un breve delay
    setTimeout(() => {
      this.inicializarCanvas();
    }, 500);
  }
  verificarElementosDOM() {
    console.log('🔍 Verificando elementos en DOM...');
    const elementos = [{
      selector: 'canvas.single-view',
      nombre: 'Canvas principal'
    }, {
      selector: 'canvas.left-page',
      nombre: 'Canvas izquierdo'
    }, {
      selector: 'canvas.right-page',
      nombre: 'Canvas derecho'
    }, {
      selector: '.scroll-container',
      nombre: 'Contenedor scroll'
    }];
    elementos.forEach(item => {
      const elemento = document.querySelector(item.selector);
      console.log(`${item.nombre}: ${elemento ? '✅ Encontrado' : '❌ No encontrado'}`);
    });
  }
  inicializarCanvas() {
    console.log('🔧 Inicializando canvas...');
    // Usar un enfoque más directo para obtener los canvas
    const canvasPrincipal = document.querySelector('canvas.single-view');
    const canvasIzquierdo = document.querySelector('canvas.left-page');
    const canvasDerecho = document.querySelector('canvas.right-page');
    const contenedorScroll = document.querySelector('.scroll-container');
    let canvasInicializados = 0;
    // Canvas principal
    if (canvasPrincipal instanceof HTMLCanvasElement) {
      this.pdfCanvas = {
        nativeElement: canvasPrincipal
      };
      this.canvasContext = canvasPrincipal.getContext('2d');
      if (this.canvasContext) {
        console.log('✅ Canvas principal inicializado');
        canvasInicializados++;
      }
    } else {
      console.warn('⚠️ Canvas principal no encontrado en DOM');
    }
    // Canvas izquierdo (vista doble)
    if (canvasIzquierdo instanceof HTMLCanvasElement) {
      this.pdfCanvas1 = {
        nativeElement: canvasIzquierdo
      };
      this.canvasContext1 = canvasIzquierdo.getContext('2d');
      if (this.canvasContext1) {
        console.log('✅ Canvas izquierdo inicializado');
        canvasInicializados++;
      }
    } else {
      console.warn('⚠️ Canvas izquierdo no encontrado en DOM');
    }
    // Canvas derecho (vista doble)
    if (canvasDerecho instanceof HTMLCanvasElement) {
      this.pdfCanvas2 = {
        nativeElement: canvasDerecho
      };
      this.canvasContext2 = canvasDerecho.getContext('2d');
      if (this.canvasContext2) {
        console.log('✅ Canvas derecho inicializado');
        canvasInicializados++;
      }
    } else {
      console.warn('⚠️ Canvas derecho no encontrado en DOM');
    }
    // Contenedor scroll
    if (contenedorScroll instanceof HTMLDivElement) {
      this.pdfCanvasSingle = {
        nativeElement: contenedorScroll
      };
      console.log('✅ Contenedor scroll inicializado');
      canvasInicializados++;
    } else {
      console.warn('⚠️ Contenedor scroll no encontrado en DOM');
    }
    console.log(`🎯 Total elementos inicializados: ${canvasInicializados}`);
    if (canvasInicializados > 0) {
      console.log('✅ Elementos inicializados correctamente');
      // Cargar PDF automáticamente
      setTimeout(() => {
        this.cargarPDF();
      }, 500);
    } else {
      console.error('❌ No se pudo inicializar ningún elemento');
      // Mostrar fallback visual
      this.mostrarFallbackVisor();
    }
  }
  mostrarFallbackVisor() {
    console.log('🔄 Mostrando fallback del visor...');
    const container = document.querySelector('.canvas-container');
    if (container) {
      container.innerHTML = `
      <div style="
        text-align: center;
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        margin: 20px;
      ">
        <div style="font-size: 4rem; margin-bottom: 20px;">📘</div>
        <h3 style="color: #4f46e5; margin-bottom: 15px;">Manual SIGPAZ</h3>
        <p style="color: #6b7280; margin-bottom: 25px; line-height: 1.5;">
          El visor de PDF se está iniciando...
        </p>
        <button
          style="
            padding: 12px 24px;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
          "
          onclick="location.reload()"
        >
          🔄 Reiniciar Visor
        </button>
      </div>
    `;
    }
  }
  static ɵfac = function ManualUsuarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ManualUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_17__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_18__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_19__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_20__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_21__.PdfViewerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ManualUsuarioComponent,
    selectors: [["app-manual-usuario"]],
    viewQuery: function ManualUsuarioComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfCanvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfCanvas1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfCanvas2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfCanvasSingle = _t.first);
      }
    },
    hostBindings: function ManualUsuarioComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("fullscreenchange", function ManualUsuarioComponent_fullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("webkitfullscreenchange", function ManualUsuarioComponent_webkitfullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("mozfullscreenchange", function ManualUsuarioComponent_mozfullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("MSFullscreenChange", function ManualUsuarioComponent_MSFullscreenChange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    decls: 130,
    vars: 57,
    consts: [["pdfCanvas", ""], ["pdfCanvas1", ""], ["pdfCanvas2", ""], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleUserMenu", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "click", 4, "ngIf"], [1, "manual-usuario-container"], [1, "manual-wrapper"], [1, "manual-header"], [1, "manual-header-left"], [1, "manual-title"], [1, "manual-icon"], [1, "manual-version"], [1, "manual-info"], [1, "manual-info-item"], [1, "manual-header-right"], [1, "header-actions"], ["title", "Minimizar manual", 1, "btn-close-manual", 3, "click"], [1, "manual-main-content"], [1, "manual-sidebar"], [1, "sidebar-header"], [1, "sidebar-toggle", 3, "click"], ["class", "chapters-list", 4, "ngIf"], ["class", "bookmarks-section", 4, "ngIf"], ["class", "history-section", 4, "ngIf"], [1, "manual-viewer-area"], [1, "viewer-toolbar"], [1, "nav-controls"], ["title", "Primera p\u00E1gina", 1, "nav-btn", "first", 3, "click"], ["title", "P\u00E1gina anterior", 1, "nav-btn", "prev", 3, "click"], [1, "page-indicator"], ["type", "number", "min", "1", 1, "page-input", 3, "change", "value", "max"], [1, "page-total"], ["title", "P\u00E1gina siguiente", 1, "nav-btn", "next", 3, "click"], ["title", "\u00DAltima p\u00E1gina", 1, "nav-btn", "last", 3, "click"], [1, "zoom-controls"], ["title", "Alejar", 1, "zoom-btn", "zoom-out", 3, "click"], [1, "zoom-level"], ["title", "Acercar", 1, "zoom-btn", "zoom-in", 3, "click"], ["title", "Ajustar a pantalla", 1, "zoom-btn", "zoom-fit", 3, "click"], ["title", "Tama\u00F1o real", 1, "zoom-btn", "zoom-actual", 3, "click"], [1, "view-mode-controls"], [1, "view-mode-select", 3, "ngModelChange", "change", "ngModel"], ["value", "single"], ["value", "double"], [1, "pdf-viewer-container"], [1, "pdf-real-viewer"], [4, "ngIf"], ["class", "pdf-loading", 4, "ngIf"], ["class", "pdf-error", 4, "ngIf"], ["class", "page-notes", 4, "ngIf"], [1, "viewer-bottom-toolbar"], [1, "print-controls"], ["class", "tool-btn print", "title", "Imprimir p\u00E1gina actual", 3, "click", 4, "ngIf"], ["class", "tool-btn print-all", "title", "Imprimir manual completo", 3, "click", 4, "ngIf"], [1, "download-controls"], ["class", "tool-btn download", "title", "Descargar PDF completo", 3, "click", 4, "ngIf"], ["class", "tool-btn export-notes", "title", "Exportar notas", 3, "click", 4, "ngIf"], [1, "extra-tools"], ["title", "Mostrar/ocultar notas", 1, "tool-btn", "notes-toggle", 3, "click"], ["title", "Marcar/desmarcar p\u00E1gina", 1, "tool-btn", "bookmark-toggle", 3, "click"], ["class", "tool-btn fullscreen", "title", "Pantalla completa", 3, "click", 4, "ngIf"], ["title", "Modo nocturno", 1, "tool-btn", "night-mode", 3, "click"], [1, "progress-indicator"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "manual-tools-panel"], [1, "tools-header"], [1, "tools-toggle", 3, "click"], ["class", "tools-content", 4, "ngIf"], [1, "manual-footer"], [1, "footer-left"], [1, "quick-nav"], [1, "nav-label"], [1, "nav-quick", 3, "click"], [1, "footer-center"], [1, "page-jump"], ["type", "number", "min", "1", "placeholder", "Ir a p\u00E1gina", 3, "ngModelChange", "keyup.enter", "ngModel", "max"], [1, "btn-jump", 3, "click"], [1, "footer-right"], [1, "session-info"], [1, "session-time"], [1, "pages-viewed"], ["title", "Ayuda del visor", 1, "btn-help", 3, "click"], ["class", "modal-overlay", 4, "ngIf"], ["class", "system-notifications", 4, "ngIf"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el manual...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-icon"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "chapters-list"], ["class", "chapter-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chapter-item", 3, "click"], [1, "chapter-icon"], [1, "chapter-info"], [1, "chapter-title"], [1, "chapter-pages"], ["class", "chapter-progress", 4, "ngIf"], [1, "chapter-progress"], [1, "bookmarks-section"], [1, "section-header"], ["title", "Agregar marcador actual", 1, "btn-add-bookmark", 3, "click"], [1, "bookmarks-list"], ["class", "bookmark-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "bookmark-item", 3, "click"], [1, "bookmark-icon"], [1, "bookmark-details"], [1, "bookmark-title"], [1, "bookmark-page"], [1, "btn-remove-bookmark", 3, "click"], [1, "history-section"], [1, "history-list"], ["class", "history-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "history-item", 3, "click"], [1, "history-icon"], [1, "history-time"], [1, "pdf-canvas-wrapper"], [1, "canvas-container"], [1, "pdf-canvas", "single-view"], [1, "double-page-container"], [1, "pdf-canvas", "left-page"], [1, "pdf-canvas", "right-page"], [1, "pdf-loading"], [1, "loading-spinner"], [1, "spinner"], ["class", "loading-progress", 4, "ngIf"], [1, "loading-progress"], [1, "pdf-error"], [1, "error-icon"], [1, "error-actions"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "page-notes"], [1, "notes-header"], [1, "notes-title"], [1, "notes-close", 3, "click"], ["placeholder", "Escribe tus notas aqu\u00ED...", "rows", "5", 1, "notes-input", 3, "ngModelChange", "blur", "ngModel"], [1, "notes-footer"], [1, "btn", "btn-small", 3, "click"], [1, "notes-count"], ["title", "Imprimir p\u00E1gina actual", 1, "tool-btn", "print", 3, "click"], ["title", "Imprimir manual completo", 1, "tool-btn", "print-all", 3, "click"], ["title", "Descargar PDF completo", 1, "tool-btn", "download", 3, "click"], ["title", "Exportar notas", 1, "tool-btn", "export-notes", 3, "click"], ["title", "Pantalla completa", 1, "tool-btn", "fullscreen", 3, "click"], [1, "tools-content"], [1, "tool-section"], ["type", "text", "placeholder", "Texto a buscar...", 1, "search-advanced-input", 3, "ngModelChange", "ngModel"], [1, "btn-search-advanced", 3, "click"], [1, "share-options"], ["class", "share-btn", 3, "click", 4, "ngIf"], [1, "accessibility-options"], [1, "checkbox-option"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], ["class", "search-result", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result", 3, "click"], [1, "result-page"], [1, "result-context"], [1, "share-btn", 3, "click"], [1, "modal-overlay"], [1, "confirm-modal"], [1, "confirm-header"], [1, "modal-close", 3, "click"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning"], ["class", "session-summary", 4, "ngIf"], [1, "confirm-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "session-summary"], [1, "summary-stats"], [1, "modal-container", "modal-medium"], [1, "modal-header"], [1, "modal-content"], [1, "help-content"], [1, "help-section"], [1, "shortcuts-grid"], ["class", "shortcut-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "shortcut-item"], [1, "shortcut-key"], [1, "shortcut-icon"], [1, "shortcut-desc"], [1, "system-notifications"], [1, "notification", 3, "ngClass"], [1, "notification-icon"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], [1, "notification-close", 3, "click"]],
    template: function ManualUsuarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "app-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggleSidebar", function ManualUsuarioComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function ManualUsuarioComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 5)(3, "app-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggleUserMenu", function ManualUsuarioComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("openSearchModal", function ManualUsuarioComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManualUsuarioComponent_div_4_Template, 13, 4, "div", 7)(5, ManualUsuarioComponent_div_5_Template, 22, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13)(11, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\uD83D\uDCD8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Manual de Usuario SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "v2.5.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16)(18, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\uD83D\uDC65 Para todos los roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_27_listener() {
          return ctx.minimizarManual();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u2195\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "div", 22)(31, "div", 23)(32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\uD83D\uDCD1 Contenidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_34_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ManualUsuarioComponent_div_36_Template, 2, 1, "div", 25)(37, ManualUsuarioComponent_div_37_Template, 8, 1, "div", 26)(38, ManualUsuarioComponent_div_38_Template, 5, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28)(40, "div", 29)(41, "div", 30)(42, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_42_listener() {
          return ctx.irPrimeraPagina();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " \u23EE\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_44_listener() {
          return ctx.paginaAnterior();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " \u25C0\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33)(47, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ManualUsuarioComponent_Template_input_change_47_listener($event) {
          return ctx.onPageInputChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_50_listener() {
          return ctx.paginaSiguiente();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " \u25B6\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_52_listener() {
          return ctx.irUltimaPagina();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " \u23ED\uFE0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 38)(55, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_55_listener() {
          return ctx.zoomOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " \uD83D\uDD0D- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_59_listener() {
          return ctx.zoomIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " \uD83D\uDD0D+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_61_listener() {
          return ctx.ajustarZoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " \uD83D\uDCD0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_63_listener() {
          return ctx.zoom100();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " 1:1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 44)(66, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_Template_select_ngModelChange_66_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.viewMode, $event) || (ctx.viewMode = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ManualUsuarioComponent_Template_select_change_66_listener() {
          return ctx.cambiarModoVisualizacion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "P\u00E1gina \u00FAnica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Doble p\u00E1gina");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 48)(72, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, ManualUsuarioComponent_div_73_Template, 11, 6, "div", 50)(74, ManualUsuarioComponent_div_74_Template, 6, 1, "div", 51)(75, ManualUsuarioComponent_div_75_Template, 10, 3, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ManualUsuarioComponent_div_76_Template, 15, 3, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 54)(78, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ManualUsuarioComponent_button_79_Template, 2, 0, "button", 56)(80, ManualUsuarioComponent_button_80_Template, 2, 0, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, ManualUsuarioComponent_button_82_Template, 2, 0, "button", 59)(83, ManualUsuarioComponent_button_83_Template, 2, 0, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 61)(85, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_85_listener() {
          return ctx.toggleNotas();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " \uD83D\uDCDD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_87_listener() {
          return ctx.toggleMarcadorPagina();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " \uD83D\uDD16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ManualUsuarioComponent_button_89_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_90_listener() {
          return ctx.toggleModoNocturno();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " \uD83C\uDF19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 66)(93, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 70)(98, "div", 71)(99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u2699\uFE0F Herramientas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_101_listener() {
          return ctx.toggleTools();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, ManualUsuarioComponent_div_103_Template, 22, 5, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 74)(105, "div", 75)(106, "div", 76)(107, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Ir a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_109_listener() {
          return ctx.irAPagina(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_111_listener() {
          return ctx.irAIndice();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u00CDndice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 79)(114, "div", 80)(115, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ManualUsuarioComponent_Template_input_ngModelChange_115_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.jumpToPage, $event) || (ctx.jumpToPage = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ManualUsuarioComponent_Template_input_keyup_enter_115_listener() {
          return ctx.irAPagina(ctx.jumpToPage);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_116_listener() {
          return ctx.irAPagina(ctx.jumpToPage);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " Ir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 83)(119, "div", 84)(120, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualUsuarioComponent_Template_button_click_124_listener() {
          return ctx.mostrarAyudaVisor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " \u2753 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, ManualUsuarioComponent_div_126_Template, 21, 1, "div", 88)(127, ManualUsuarioComponent_div_127_Template, 58, 1, "div", 88)(128, ManualUsuarioComponent_div_128_Template, 12, 4, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "app-footer", 90);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCC5 \u00DAltima actualizaci\u00F3n: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 54, ctx.fechaActualizacion, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDCC4 ", ctx.totalPaginas, " p\u00E1ginas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx.sidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.sidebarCollapsed ? "\u25B6" : "\u25C0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.sidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.currentPage)("max", ctx.totalPaginas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/ ", ctx.totalPaginas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.zoomLevel, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pdfLoaded && !ctx.pdfError && ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pdfError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.showNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.tieneMarcador(ctx.currentPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.nightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentPage / ctx.totalPaginas * 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.currentPage, "/", ctx.totalPaginas, " (", (ctx.currentPage / ctx.totalPaginas * 100).toFixed(1), "%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", ctx.toolsCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.toolsCollapsed ? "\u2699\uFE0F" : "\u00D7", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.toolsCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.jumpToPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", ctx.totalPaginas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u23F1\uFE0F ", ctx.usageStats.tiempoTotalLectura);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83D\uDC41\uFE0F ", ctx.pagesViewed, " p\u00E1ginas vistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirmCloseModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showVisorHelp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_7__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: [".dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: margin-left 0.3s;\n}\n.dashboard-container.sidebar-collapsed {\n  margin-left: 20px;\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n.dashboard-container .main-content {\n  flex: 1;\n  margin-left: 280px;\n  width: calc(100% - 280px);\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: column;\n}\n.manual-usuario-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: var(--card-bg);\n  border-radius: 16px;\n  box-shadow: var(--card-shadow);\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n}\n.manual-header {\n  height: 100px;\n  background: var(--gradient-header);\n  color: white;\n  padding: 0 24px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n  position: relative;\n  overflow: hidden;\n}\n.manual-header::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);\n  animation: wave 6s linear infinite;\n}\n.manual-header-left {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  z-index: 1;\n}\n.manual-header-left .manual-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.manual-header-left .manual-title .manual-icon {\n  font-size: 2rem;\n  animation: float 3s ease-in-out infinite;\n}\n.manual-header-left .manual-title h2 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.manual-header-left .manual-title .manual-version {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.manual-header-left .manual-info {\n  display: flex;\n  gap: 16px;\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.manual-header-left .manual-info .manual-info-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.manual-header-right {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n  z-index: 1;\n}\n.manual-header-right .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.manual-header-right .search-manual-container {\n  display: flex;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 8px 12px;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.manual-header-right .search-manual-container .search-manual-input {\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 0.9rem;\n  width: 200px;\n  outline: none;\n}\n.manual-header-right .search-manual-container .search-manual-input::placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\n.manual-header-right .search-manual-container .search-manual-btn {\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.manual-header-right .search-manual-container .search-manual-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.1);\n}\n.manual-header-right .btn-close-manual {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.manual-header-right .btn-close-manual:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.1);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.manual-main-content {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  min-height: 600px;\n}\n.manual-sidebar {\n  width: 280px;\n  background: var(--bg-secondary);\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.manual-sidebar.collapsed {\n  width: 60px;\n}\n.manual-sidebar.collapsed .sidebar-header h3,\n.manual-sidebar.collapsed .chapter-info,\n.manual-sidebar.collapsed .chapter-pages,\n.manual-sidebar.collapsed .chapter-progress,\n.manual-sidebar.collapsed .section-header h4,\n.manual-sidebar.collapsed .bookmark-details,\n.manual-sidebar.collapsed .bookmark-page,\n.manual-sidebar.collapsed .history-time {\n  display: none;\n}\n.manual-sidebar.collapsed .chapter-item {\n  justify-content: center;\n  padding: 12px;\n}\n.manual-sidebar.collapsed .chapter-item:hover .chapter-icon {\n  transform: scale(1.2);\n}\n.manual-sidebar.collapsed .chapter-icon {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.manual-sidebar.collapsed .bookmark-item,\n.manual-sidebar.collapsed .history-item {\n  justify-content: center;\n  padding: 12px;\n}\n.manual-sidebar.collapsed .bookmark-icon,\n.manual-sidebar.collapsed .history-icon {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.sidebar-header {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sidebar-header h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sidebar-header .sidebar-toggle {\n  background: var(--bg-tertiary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.3s;\n}\n.sidebar-header .sidebar-toggle:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.chapters-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.chapter-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  margin-bottom: 8px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.chapter-item:hover {\n  transform: translateX(4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.chapter-item.active {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-light);\n}\n.chapter-item.active::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--primary);\n}\n.chapter-item .chapter-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n  transition: all 0.3s;\n}\n.chapter-item .chapter-info {\n  flex: 1;\n  min-width: 0;\n}\n.chapter-item .chapter-info .chapter-title {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chapter-item .chapter-info .chapter-pages {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.chapter-item .chapter-progress {\n  width: 60px;\n  flex-shrink: 0;\n}\n.chapter-item .chapter-progress .progress-bar {\n  width: 100%;\n  height: 6px;\n  background: var(--border-color);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.chapter-item .chapter-progress .progress-bar .progress-fill {\n  height: 100%;\n  background: var(--gradient-primary);\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.manual-viewer-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  background: var(--bg-primary);\n}\n.viewer-toolbar {\n  padding: 12px 16px;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.nav-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.nav-controls .nav-btn {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.nav-controls .nav-btn:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.nav-controls .nav-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nav-controls .page-indicator {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 12px;\n}\n.nav-controls .page-indicator .page-input {\n  width: 60px;\n  padding: 6px 8px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.3s;\n}\n.nav-controls .page-indicator .page-input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.nav-controls .page-indicator .page-total {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.zoom-controls .zoom-btn {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.zoom-controls .zoom-btn:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.zoom-controls .zoom-level {\n  min-width: 60px;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  padding: 6px 8px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n}\n.view-mode-controls .view-mode-select {\n  padding: 8px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.view-mode-controls .view-mode-select:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.pdf-viewer-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  overflow: visible;\n}\n.pdf-viewer-container .pdf-controls-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: var(--card-bg);\n  border-bottom: 1px solid var(--border-color);\n  padding: 8px 12px;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: var(--shadow-sm);\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation button {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  min-width: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation button:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation .page-info {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation .page-jump {\n  margin-left: 8px;\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation .page-jump .page-input {\n  width: 60px;\n  padding: 6px 8px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  text-align: center;\n}\n.pdf-viewer-container .pdf-controls-bar .page-navigation .page-jump .page-input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.pdf-viewer-container .pdf-controls-bar .zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pdf-viewer-container .pdf-controls-bar .zoom-controls button {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  min-width: 36px;\n  color: var(--text-primary);\n}\n.pdf-viewer-container .pdf-controls-bar .zoom-controls button:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.pdf-viewer-container .pdf-controls-bar .zoom-controls .zoom-level {\n  font-size: 14px;\n  color: var(--text-primary);\n  min-width: 40px;\n  text-align: center;\n  font-weight: 500;\n}\n.pdf-viewer-container .pdf-controls-bar .additional-controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.pdf-viewer-container .pdf-controls-bar .additional-controls button {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 6px 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  min-width: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-primary);\n}\n.pdf-viewer-container .pdf-controls-bar .additional-controls button:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.pdf-viewer-container .pdf-controls-bar .additional-controls button.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.pdf-viewer-container .pdf-controls-bar .additional-controls button.active:hover {\n  background: var(--primary-hover);\n}\n.pdf-viewer-container .pdf-canvas-wrapper {\n  overflow: visible !important;\n  position: absolute;\n  top: 49px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .canvas-container {\n  overflow: visible !important;\n  width: 100%;\n  height: 150%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  background: var(--bg-tertiary);\n}\n.pdf-viewer-container .pdf-canvas-wrapper .canvas-container .pdf-canvas {\n  max-width: 100%;\n  max-height: 100%;\n  box-shadow: var(--shadow-md);\n  border-radius: 4px;\n  background: white;\n  contain: content;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .pdf-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.85);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  z-index: 5;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .pdf-loading .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--primary-light);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: rotate 1s linear infinite;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .pdf-loading p {\n  color: white;\n  font-size: 14px;\n  margin: 0;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .pdf-loading .retry-btn {\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.pdf-viewer-container .pdf-canvas-wrapper .pdf-loading .retry-btn:hover {\n  background: var(--primary-hover);\n  transform: translateY(-1px);\n}\n.viewer-bottom-toolbar {\n  padding: 12px 16px;\n  background: var(--bg-secondary);\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.tool-btn {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  padding: 8px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tool-btn:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.tool-btn.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.progress-indicator {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 200px;\n}\n.progress-indicator .progress-bar {\n  flex: 1;\n  height: 6px;\n  background: var(--border-color);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-indicator .progress-bar .progress-fill {\n  height: 100%;\n  background: var(--gradient-primary);\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.progress-indicator .progress-text {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  min-width: 80px;\n  text-align: right;\n}\n.manual-tools-panel {\n  width: 250px;\n  background: var(--bg-secondary);\n  border-left: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.manual-tools-panel.collapsed {\n  width: 60px;\n}\n.manual-tools-panel.collapsed .tools-header h3,\n.manual-tools-panel.collapsed .tools-content {\n  display: none;\n}\n.tools-header {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.tools-header h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tools-header .tools-toggle {\n  background: var(--bg-tertiary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.tools-header .tools-toggle:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: rotate(180deg);\n}\n.manual-footer {\n  height: 60px;\n  background: var(--bg-secondary);\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  flex-shrink: 0;\n}\n.footer-center {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.page-jump {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-jump input {\n  width: 60px;\n  padding: 6px 8px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  text-align: center;\n  transition: all 0.3s;\n}\n.page-jump input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.page-jump .btn-jump {\n  padding: 6px 16px;\n  background: var(--primary);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.page-jump .btn-jump:hover {\n  background: var(--primary-hover);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n@media (max-width: 1200px) {\n  .manual-sidebar,\n  .manual-tools-panel {\n    position: absolute;\n    height: 100%;\n    z-index: 100;\n    box-shadow: var(--shadow-xl);\n  }\n  .manual-sidebar.collapsed,\n  .manual-tools-panel.collapsed {\n    width: 60px;\n  }\n  .manual-sidebar {\n    left: 0;\n  }\n  .manual-sidebar:not(.collapsed) {\n    width: 300px;\n  }\n  .manual-tools-panel {\n    right: 0;\n  }\n  .manual-tools-panel:not(.collapsed) {\n    width: 280px;\n  }\n  .manual-viewer-area {\n    margin: 0 60px;\n  }\n}\n@media (max-width: 992px) {\n  .manual-header {\n    flex-direction: column;\n    height: auto;\n    padding: 16px;\n    gap: 16px;\n  }\n  .manual-header .manual-header-left,\n  .manual-header .manual-header-right {\n    width: 100%;\n  }\n  .viewer-toolbar {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .viewer-bottom-toolbar {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .manual-footer {\n    flex-direction: column;\n    height: auto;\n    padding: 16px;\n    gap: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .manual-sidebar:not(.collapsed),\n  .manual-tools-panel:not(.collapsed) {\n    width: 100%;\n  }\n  .pdf-viewer-container .pdf-controls-bar {\n    flex-direction: column;\n    gap: 8px;\n    padding: 8px;\n  }\n  .pdf-viewer-container .pdf-controls-bar .page-navigation,\n  .pdf-viewer-container .pdf-controls-bar .zoom-controls,\n  .pdf-viewer-container .pdf-controls-bar .additional-controls {\n    width: 100%;\n    justify-content: center;\n  }\n  .pdf-viewer-container .pdf-canvas-wrapper {\n    top: calc(49px * 3);\n  }\n}\n.manual-sidebar::-webkit-scrollbar,\n.chapters-list::-webkit-scrollbar,\n.bookmarks-list::-webkit-scrollbar,\n.history-list::-webkit-scrollbar,\n.tools-content::-webkit-scrollbar {\n  width: 6px;\n}\n.manual-sidebar::-webkit-scrollbar-track,\n.chapters-list::-webkit-scrollbar-track,\n.bookmarks-list::-webkit-scrollbar-track,\n.history-list::-webkit-scrollbar-track,\n.tools-content::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.manual-sidebar::-webkit-scrollbar-thumb,\n.chapters-list::-webkit-scrollbar-thumb,\n.bookmarks-list::-webkit-scrollbar-thumb,\n.history-list::-webkit-scrollbar-thumb,\n.tools-content::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 3px;\n}\n.manual-sidebar::-webkit-scrollbar-thumb:hover,\n.chapters-list::-webkit-scrollbar-thumb:hover,\n.bookmarks-list::-webkit-scrollbar-thumb:hover,\n.history-list::-webkit-scrollbar-thumb:hover,\n.tools-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  padding: 24px;\n  transition: all 0.3s;\n  margin-top: 70px;\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 60px;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 250px;\n  transition: margin-left 0.3s;\n  position: relative;\n  overflow-x: hidden;\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--modal-overlay);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-md);\n}\n.modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n@keyframes iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n}\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n.bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: var(--gradient-primary);\n  filter: brightness(1.1);\n}\n@media (max-width: 1024px) {\n  .modal-content:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: manualFadeIn 0.3s;\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl);\n  max-width: 500px;\n  width: 100%;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal .confirm-header {\n  padding: 16px 24px;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirm-modal .confirm-header h3 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n.confirm-modal .confirm-header .modal-close {\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.confirm-modal .confirm-header .modal-close:hover {\n  transform: rotate(90deg) scale(1.1);\n}\n.confirm-modal .confirm-body {\n  padding: 24px;\n  text-align: center;\n}\n.confirm-modal .confirm-body .confirm-icon {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.confirm-modal .confirm-body p {\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  line-height: 1.5;\n}\n.confirm-modal .confirm-body p.confirm-warning {\n  color: var(--warning);\n  font-weight: 500;\n}\n.confirm-modal .confirm-body .session-summary {\n  margin-top: 24px;\n  text-align: left;\n}\n.confirm-modal .confirm-body .session-summary h4 {\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.confirm-modal .confirm-body .session-summary .summary-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 12px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n}\n.confirm-modal .confirm-body .session-summary .summary-stats span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-secondary);\n}\n.confirm-modal .confirm-footer {\n  padding: 16px 24px;\n  background: var(--bg-secondary);\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl);\n  max-width: 700px;\n  width: 100%;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.modal-container.modal-medium {\n  max-width: 700px;\n}\n.modal-container .modal-header {\n  padding: 16px 24px;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-container .modal-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.modal-container .modal-header .modal-close {\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.modal-container .modal-header .modal-close:hover {\n  transform: rotate(90deg) scale(1.1);\n}\n.modal-container .modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.modal-container .modal-content .help-content .help-section {\n  margin-bottom: 32px;\n}\n.modal-container .modal-content .help-content .help-section:last-child {\n  margin-bottom: 0;\n}\n.modal-container .modal-content .help-content .help-section h4 {\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-container .modal-content .help-content .help-section ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.modal-container .modal-content .help-content .help-section ul li {\n  padding: 8px 0;\n  color: var(--text-secondary);\n  border-bottom: 1px solid var(--border-color);\n}\n.modal-container .modal-content .help-content .help-section ul li:last-child {\n  border-bottom: none;\n}\n.modal-container .modal-content .help-content .help-section ul li strong {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.modal-container .modal-content .shortcuts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.modal-container .modal-content .shortcuts-grid .shortcut-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n}\n.modal-container .modal-content .shortcuts-grid .shortcut-item .shortcut-key {\n  background: var(--primary);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 2px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.modal-container .modal-content .shortcuts-grid .shortcut-item .shortcut-icon {\n  font-size: 1.2rem;\n}\n.modal-container .modal-content .shortcuts-grid .shortcut-item .shortcut-desc {\n  flex: 1;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n}\n.modal-container .modal-footer {\n  padding: 16px 24px;\n  background: var(--bg-secondary);\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: center;\n}\n.pdf-error {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--bg-secondary);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  text-align: center;\n  z-index: 100;\n  animation: manualFadeIn 0.3s ease-out;\n}\n.pdf-error .error-icon {\n  font-size: 4rem;\n  color: var(--danger);\n  margin-bottom: 16px;\n  animation: manualShake 0.5s ease-out;\n}\n.pdf-error h4 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.pdf-error p {\n  color: var(--text-secondary);\n  margin-bottom: 32px;\n  max-width: 500px;\n  line-height: 1.5;\n}\n.pdf-error .error-actions {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.pdf-error .error-actions .btn {\n  min-width: 150px;\n}\n.bookmarks-section,\n.history-section {\n  padding: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.bookmarks-section .section-header,\n.history-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.bookmarks-section .section-header h4,\n.history-section .section-header h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.bookmarks-section .section-header .btn-add-bookmark,\n.history-section .section-header .btn-add-bookmark {\n  background: var(--primary-light);\n  border: 1px solid var(--primary);\n  color: var(--primary);\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.bookmarks-section .section-header .btn-add-bookmark:hover,\n.history-section .section-header .btn-add-bookmark:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n  animation: manualPulseGlow 1.5s infinite;\n}\n.bookmarks-list,\n.history-list {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.bookmark-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  margin-bottom: 4px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.bookmark-item:hover {\n  transform: translateX(2px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.bookmark-item:hover .btn-remove-bookmark {\n  opacity: 1;\n}\n.bookmark-item .bookmark-icon {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.bookmark-item .bookmark-details {\n  flex: 1;\n  min-width: 0;\n}\n.bookmark-item .bookmark-details .bookmark-title {\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.bookmark-item .bookmark-details .bookmark-page {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.bookmark-item .btn-remove-bookmark {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 2px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.bookmark-item .btn-remove-bookmark:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.history-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  margin-bottom: 4px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 0.9rem;\n}\n.history-item:hover {\n  transform: translateX(2px);\n  box-shadow: var(--shadow-md);\n  background: var(--primary-light);\n}\n.history-item .history-icon {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.history-item span:first-of-type {\n  flex: 1;\n  color: var(--text-primary);\n}\n.history-item .history-time {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.tools-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n}\n.tool-section {\n  margin-bottom: 24px;\n}\n.tool-section:last-child {\n  margin-bottom: 0;\n}\n.tool-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.search-advanced-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  margin-bottom: 12px;\n  transition: all 0.3s;\n}\n.search-advanced-input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.btn-search-advanced {\n  width: 100%;\n  padding: 10px;\n  background: var(--primary);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-search-advanced:hover {\n  background: var(--primary-hover);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.search-results {\n  margin-top: 16px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.search-results .search-result {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  margin-bottom: 8px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.search-results .search-result:hover {\n  transform: translateX(4px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.search-results .search-result .result-page {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--primary);\n  margin-bottom: 4px;\n}\n.search-results .search-result .result-context {\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  line-height: 1.4;\n}\n.share-options {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.share-options .share-btn {\n  padding: 10px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.share-options .share-btn:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.accessibility-options .checkbox-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.accessibility-options .checkbox-option:hover {\n  background: var(--bg-hover);\n}\n.accessibility-options .checkbox-option input[type=\"checkbox\"] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.accessibility-options .checkbox-option span {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.footer-left,\n.footer-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.footer-left {\n  justify-content: flex-start;\n}\n.footer-right {\n  justify-content: flex-end;\n}\n.quick-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.quick-nav .nav-label {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.quick-nav .nav-quick {\n  padding: 6px 12px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.quick-nav .nav-quick:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.session-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.session-info .session-time,\n.session-info .pages-viewed {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.session-info .btn-help {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n.session-info .btn-help:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: rotate(15deg) scale(1.1);\n}\n.system-notifications {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  max-width: 400px;\n  animation: slideInRight 0.3s ease-out;\n}\n.notification {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 12px;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  border-left: 4px solid var(--info);\n  animation: slideDown 0.3s ease-out;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n}\n.notification.success {\n  border-left-color: var(--success);\n}\n.notification.success .notification-icon {\n  color: var(--success);\n}\n.notification.warning {\n  border-left-color: var(--warning);\n}\n.notification.warning .notification-icon {\n  color: var(--warning);\n}\n.notification.error {\n  border-left-color: var(--danger);\n}\n.notification.error .notification-icon {\n  color: var(--danger);\n  animation: manualShake 0.5s;\n}\n.notification::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);\n  animation: wave 6s linear infinite;\n}\n.notification .notification-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1;\n}\n.notification .notification-content {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.notification .notification-content .notification-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  font-size: 1rem;\n}\n.notification .notification-content .notification-message {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.notification .notification-close {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 2px;\n  flex-shrink: 0;\n  transition: all 0.3s;\n  position: relative;\n  z-index: 1;\n}\n.notification .notification-close:hover {\n  color: var(--danger);\n  transform: rotate(90deg) scale(1.1);\n}\n.btn {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-decoration: none;\n  font-size: 0.875rem;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-small {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.btn-large {\n  padding: 12px 24px;\n  font-size: 1rem;\n}\n.btn-icon {\n  font-size: 1.2rem;\n}\n.btn-text {\n  font-weight: 500;\n}\n.search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9997;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 80px;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl);\n  width: 90%;\n  max-width: 600px;\n  max-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideDown 0.3s ease-out;\n  border: 1px solid var(--modal-border);\n}\n.search-modal .search-modal-header {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-modal .search-modal-header .search-input-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 8px 12px;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  color: var(--text-muted);\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  color: var(--text-primary);\n  font-size: 1rem;\n  outline: none;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input::placeholder {\n  color: var(--placeholder-color);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 2px;\n}\n.search-modal .search-modal-header .search-input-container .search-clear:hover {\n  color: var(--danger);\n}\n.search-modal .search-modal-header .search-close {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 2px;\n}\n.search-modal .search-modal-header .search-close:hover {\n  color: var(--danger);\n}\n.search-modal .search-results {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  margin-bottom: 8px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  transform: translateX(4px);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 1.5rem;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n.search-modal .search-empty {\n  padding: 32px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.canvas-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 600px;\n  overflow: visible !important;\n}\n.canvas-container .single-view {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 20;\n}\n.canvas-container .double-page-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 20px;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 30;\n}\n.canvas-container .double-page-container .pdf-canvas {\n  flex: 1;\n  max-width: calc(50% - 10px);\n  position: relative;\n  z-index: 31;\n}\n.canvas-container .double-page-container .pdf-canvas.left-page {\n  border-right: 2px solid var(--border-color);\n}\n.canvas-container .double-page-container .pdf-canvas.right-page {\n  border-left: 2px solid var(--border-color);\n}\n.canvas-container .scroll-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  padding: 20px;\n  z-index: 40;\n}\n.canvas-container .scroll-container canvas {\n  display: block;\n  margin: 0 auto 30px auto;\n  background: white;\n  box-shadow: var(--shadow-md);\n}\n.canvas-container.double-mode .single-view {\n  display: none !important;\n}\n.canvas-container.double-mode .double-page-container {\n  display: flex !important;\n}\n.pdf-canvas-wrapper {\n  position: relative;\n  z-index: 1;\n}\n.pdf-canvas-wrapper .canvas-container > * {\n  will-change: transform;\n}\n@media (max-width: 1024px) {\n  .double-page-container {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n  }\n  .double-page-container .pdf-canvas {\n    max-width: 100% !important;\n    width: 100% !important;\n  }\n}\n.pdf-canvas {\n  transition: all 0.3s ease;\n}\n.pdf-canvas:not([style*=\"display: none\"]) {\n  animation: fadeInCanvas 0.5s ease-out;\n}\n@keyframes fadeInCanvas {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.double-page-container {\n  animation: slideInDouble 0.5s ease-out;\n}\n@keyframes slideInDouble {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes wave {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes float {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes manualFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes manualShake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-2px);\n  }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(2px);\n  }\n}\n@keyframes manualPulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tYW51YWxlcy9wYWdlcy9tYW51YWwtdXN1YXJpby9tYW51YWwtdXN1YXJpby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQTNCRjtBQTZCRTtFQUNFLGlCQUFBO0FBM0JKO0FBMEJFO0VBSUksaUJBQUE7RUFDQSx3QkFBQTtBQTNCTjtBQWlCQTtFQWVJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUE3Qko7QUFpQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUEvQkY7QUFxQ0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW5DRjtBQXFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrR0FBQTtFQU1BLGtDQUFBO0FBeENKO0FBNENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQTFDRjtBQXFDQTtFQVFJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUExQ0o7QUFnQ0E7RUFhTSxlQUFBO0VBQ0Esd0NBQUE7QUExQ047QUE0QkE7RUFrQk0saUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtBQTNDTjtBQXNCQTtFQXlCTSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdC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RSxVQUFBO0lBQ0Esd0JBQUE7RUF6YUY7QUFDRjtBQSthQTtFQUNFO0lBQUssNEJBQUE7RUE1YUw7RUE2YUE7SUFBTywyQkFBQTtFQTFhUDtBQUNGO0FBNGFBO0VBQ0U7O0lBQVcsd0JBQUE7RUF4YVg7RUF5YUE7SUFBTSw0QkFBQTtFQXRhTjtBQUNGO0FBd2FBO0VBQ0U7SUFBTyx1QkFBQTtFQXJhUDtFQXNhQTtJQUFLLHlCQUFBO0VBbmFMO0FBQ0Y7QUFxYUE7RUFDRTtJQUFPLFVBQUE7RUFsYVA7RUFtYUE7SUFBSyxVQUFBO0VBaGFMO0FBQ0Y7QUFrYUE7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQTlabkI7RUErWkE7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUEzWmpCO0FBQ0Y7QUE2WkE7RUFDRTtJQUFPLFVBQUE7SUFBWSw0QkFBQTtFQXpabkI7RUEwWkE7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUF0WmpCO0FBQ0Y7QUF3WkE7RUFDRTs7SUFBVyx3QkFBQTtFQXBaWDtFQXFaQTs7Ozs7SUFBMEIsMkJBQUE7RUE5WTFCO0VBK1lBOzs7O0lBQXFCLDBCQUFBO0VBellyQjtBQUNGO0FBMllBO0VBQ0U7SUFBSywwQ0FBQTtFQXhZTDtFQXlZQTtJQUFNLDJDQUFBO0VBdFlOO0VBdVlBO0lBQU8sd0NBQUE7RUFwWVA7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQVJJQUJMRVMgR0xPQkFMRVMgLSBVU0FORE8gQ1NTIENVU1RPTSBQUk9QRVJUSUVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIGFob3JhIHVzYW4gdmFyKC0tbm9tYnJlLXZhcmlhYmxlKVxuLy8gcGFyYSBxdWUgbG9zIHRlbWFzIGRlZmluaWRvcyBlbiB0aGVtZXMubGVzcyBzZSBhcGxpcXVlbiBjb3JyZWN0YW1lbnRlXG5cbkB0cmFuc2l0aW9uLXNwZWVkOiAwLjNzO1xuQGFuaW1hdGlvbi1zbW9vdGg6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5AYm9yZGVyLXJhZGl1czogMTJweDtcbkBib3JkZXItcmFkaXVzLXNtOiA4cHg7XG5AYm9yZGVyLXJhZGl1cy1sZzogMTZweDtcbkBib3JkZXItcmFkaXVzLXhsOiAyNHB4O1xuQGJvcmRlci1yYWRpdXMtdW5pdDogNHB4O1xuQGJvcmRlci1yYWRpdXMteHM6IEBib3JkZXItcmFkaXVzLXVuaXQgKiAwLjU7XG5cbkBzcGFjaW5nLXhzOiA0cHg7XG5Ac3BhY2luZy1zbTogOHB4O1xuQHNwYWNpbmctbWQ6IDEycHg7XG5Ac3BhY2luZy1sZzogMTZweDtcbkBzcGFjaW5nLXhsOiAyNHB4O1xuQHNwYWNpbmctMnhsOiAzMnB4O1xuQHNwYWNpbmctM3hsOiA0OHB4O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICB9XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLm1hbnVhbC11c3VhcmlvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWxnO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNQU5VQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWFudWFsLWhlYWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWhlYWRlcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCBAc3BhY2luZy14bDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHRyYW5zcGFyZW50IDMwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSA1MCUsXG4gICAgICB0cmFuc3BhcmVudCA3MCVcbiAgICApO1xuICAgIGFuaW1hdGlvbjogd2F2ZSA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cblxuLm1hbnVhbC1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogQHNwYWNpbmctc207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAubWFudWFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBAc3BhY2luZy1tZDtcblxuICAgIC5tYW51YWwtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC5tYW51YWwtdmVyc2lvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBwYWRkaW5nOiAycHggQHNwYWNpbmctc207XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB9XG4gIH1cblxuICAubWFudWFsLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiBAc3BhY2luZy1sZztcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgb3BhY2l0eTogMC45O1xuXG4gICAgLm1hbnVhbC1pbmZvLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IEBzcGFjaW5nLXhzO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgcGFkZGluZzogQHNwYWNpbmcteHMgQHNwYWNpbmctc207XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgfVxuICB9XG59XG5cbi5tYW51YWwtaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBAc3BhY2luZy1sZztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogQHNwYWNpbmctbWQ7XG4gIH1cblxuICAuc2VhcmNoLW1hbnVhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLXNtIEBzcGFjaW5nLW1kO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICAuc2VhcmNoLW1hbnVhbC1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtbWFudWFsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogQHNwYWNpbmcteHM7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tY2xvc2UtbWFudWFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVOSURPIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYW51YWwtbWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNJREVCQVIgSVpRVUlFUkRBIC0gQ09OVEVOSURPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYW51YWwtc2lkZWJhciB7XG4gIHdpZHRoOiAyODBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkIEBhbmltYXRpb24tc21vb3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXNocmluazogMDtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDYwcHg7XG5cbiAgICAuc2lkZWJhci1oZWFkZXIgaDMsXG4gICAgLmNoYXB0ZXItaW5mbyxcbiAgICAuY2hhcHRlci1wYWdlcyxcbiAgICAuY2hhcHRlci1wcm9ncmVzcyxcbiAgICAuc2VjdGlvbi1oZWFkZXIgaDQsXG4gICAgLmJvb2ttYXJrLWRldGFpbHMsXG4gICAgLmJvb2ttYXJrLXBhZ2UsXG4gICAgLmhpc3RvcnktdGltZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5jaGFwdGVyLWl0ZW0ge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiBAc3BhY2luZy1tZDtcblxuICAgICAgJjpob3ZlciAuY2hhcHRlci1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFwdGVyLWljb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuXG4gICAgLmJvb2ttYXJrLWl0ZW0sXG4gICAgLmhpc3RvcnktaXRlbSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLW1kO1xuICAgIH1cblxuICAgIC5ib29rbWFyay1pY29uLFxuICAgIC5oaXN0b3J5LWljb24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG59XG5cbi5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgfVxuXG4gIC5zaWRlYmFyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhcHRlcnMtbGlzdCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xufVxuXG4uY2hhcHRlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBAc3BhY2luZy1tZDtcbiAgcGFkZGluZzogQHNwYWNpbmctbWQ7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLXNtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLXByaW1hcnktbGlnaHQpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuY2hhcHRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gIH1cblxuICAuY2hhcHRlci1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcblxuICAgIC5jaGFwdGVyLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmNoYXB0ZXItcGFnZXMge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgLmNoYXB0ZXItcHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgLnByb2dyZXNzLWJhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDDg8KBUkVBIFBSSU5DSVBBTCBERUwgVklTT1Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWFudWFsLXZpZXdlci1hcmVhIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFSUkEgREUgSEVSUkFNSUVOVEFTIFNVUEVSSU9SXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZpZXdlci10b29sYmFyIHtcbiAgcGFkZGluZzogQHNwYWNpbmctbWQgQHNwYWNpbmctbGc7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiBAc3BhY2luZy1sZztcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5uYXYtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLXNtO1xuXG4gIC5uYXYtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogQHNwYWNpbmctc207XG4gICAgbWFyZ2luOiAwIEBzcGFjaW5nLW1kO1xuXG4gICAgLnBhZ2UtaW5wdXQge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBwYWRkaW5nOiA2cHggQHNwYWNpbmctc207XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBhZ2UtdG90YWwge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG59XG5cbi56b29tLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBAc3BhY2luZy1zbTtcblxuICAuem9vbS1idG4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAuem9vbS1sZXZlbCB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDZweCBAc3BhY2luZy1zbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICB9XG59XG5cbi52aWV3LW1vZGUtY29udHJvbHMge1xuICAudmlldy1tb2RlLXNlbGVjdCB7XG4gICAgcGFkZGluZzogQHNwYWNpbmctc20gQHNwYWNpbmctbWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBERUwgVklTT1IgUERGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBkZi12aWV3ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAucGRmLWNvbnRyb2xzLWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLXNtIEBzcGFjaW5nLW1kO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5wYWdlLW5hdmlnYXRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IEBzcGFjaW5nLXNtO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhZ2UtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAucGFnZS1qdW1wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjaW5nLXNtO1xuXG4gICAgICAgIC5wYWdlLWlucHV0IHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuem9vbS1jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogQHNwYWNpbmcteHM7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuem9vbS1sZXZlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRpdGlvbmFsLWNvbnRyb2xzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiBAc3BhY2luZy14cztcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDM2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBkZi1jYW52YXMtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0OXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgLmNhbnZhcy1jb250YWluZXIge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgICAucGRmLWNhbnZhcyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGRmLWxvYWRpbmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiBAc3BhY2luZy1sZztcbiAgICAgIHotaW5kZXg6IDU7XG5cbiAgICAgIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnJldHJ5LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLXNtIEBzcGFjaW5nLWxnO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFSUkEgREUgSEVSUkFNSUVOVEFTIElORkVSSU9SXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnZpZXdlci1ib3R0b20tdG9vbGJhciB7XG4gIHBhZGRpbmc6IEBzcGFjaW5nLW1kIEBzcGFjaW5nLWxnO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogQHNwYWNpbmctbGc7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udG9vbC1idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHBhZGRpbmc6IEBzcGFjaW5nLXNtIEBzcGFjaW5nLWxnO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLXhzO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5wcm9ncmVzcy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLW1kO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gIC5wcm9ncmVzcy1iYXIge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9ncmVzcy10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFORUwgREVSRUNITyAtIEhFUlJBTUlFTlRBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYW51YWwtdG9vbHMtcGFuZWwge1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkIEBhbmltYXRpb24tc21vb3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXNocmluazogMDtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDYwcHg7XG5cbiAgICAudG9vbHMtaGVhZGVyIGgzLFxuICAgIC50b29scy1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi50b29scy1oZWFkZXIge1xuICBwYWRkaW5nOiBAc3BhY2luZy1sZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogQHNwYWNpbmctc207XG4gIH1cblxuICAudG9vbHMtdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRk9PVEVSIERFTCBNQU5VQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWFudWFsLWZvb3RlciB7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCBAc3BhY2luZy14bDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5mb290ZXItY2VudGVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogQHNwYWNpbmctbGc7XG59XG5cbi5wYWdlLWp1bXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLXNtO1xuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiA2cHggQHNwYWNpbmctc207XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tanVtcCB7XG4gICAgcGFkZGluZzogNnB4IEBzcGFjaW5nLWxnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRSBERVNJR05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYW51YWwtc2lkZWJhcixcbiAgLm1hbnVhbC10b29scy1wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcblxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYW51YWwtc2lkZWJhciB7XG4gICAgbGVmdDogMDtcblxuICAgICY6bm90KC5jb2xsYXBzZWQpIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH1cblxuICAubWFudWFsLXRvb2xzLXBhbmVsIHtcbiAgICByaWdodDogMDtcblxuICAgICY6bm90KC5jb2xsYXBzZWQpIHtcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG4gIH1cblxuICAubWFudWFsLXZpZXdlci1hcmVhIHtcbiAgICBtYXJnaW46IDAgNjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1hbnVhbC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICAgIGdhcDogQHNwYWNpbmctbGc7XG5cbiAgICAubWFudWFsLWhlYWRlci1sZWZ0LFxuICAgIC5tYW51YWwtaGVhZGVyLXJpZ2h0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC52aWV3ZXItdG9vbGJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IEBzcGFjaW5nLW1kO1xuICB9XG5cbiAgLnZpZXdlci1ib3R0b20tdG9vbGJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IEBzcGFjaW5nLW1kO1xuICB9XG5cbiAgLm1hbnVhbC1mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICAgIGdhcDogQHNwYWNpbmctbGc7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYW51YWwtc2lkZWJhcixcbiAgLm1hbnVhbC10b29scy1wYW5lbCB7XG4gICAgJjpub3QoLmNvbGxhcHNlZCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnBkZi12aWV3ZXItY29udGFpbmVyIHtcbiAgICAucGRmLWNvbnRyb2xzLWJhciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLXNtO1xuXG4gICAgICAucGFnZS1uYXZpZ2F0aW9uLFxuICAgICAgLnpvb20tY29udHJvbHMsXG4gICAgICAuYWRkaXRpb25hbC1jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGRmLWNhbnZhcy13cmFwcGVyIHtcbiAgICAgIHRvcDogY2FsYyg0OXB4ICogMyk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTQ1JPTExCQVIgU1RZTElOR1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYW51YWwtc2lkZWJhcixcbi5jaGFwdGVycy1saXN0LFxuLmJvb2ttYXJrcy1saXN0LFxuLmhpc3RvcnktbGlzdCxcbi50b29scy1jb250ZW50IHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEQVNIQk9BUkQgQ09OVEFJTkVSIFkgTUFJTiBDT05URU5UXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgfVxuICB9XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IEB0cmFuc2l0aW9uLXNwZWVkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5mbG9hdGluZy1idWJibGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1jb250ZW50LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDEwMDAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIG1heC13aWR0aDogOTh2dztcbiAgbWF4LWhlaWdodDogOTh2aDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubW9kYWwtdGl0bGUgLmljb24ge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbn1cblxuLm1vZGFsLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubW9kYWwtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubW9kYWwtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk1KTtcbn1cblxuLm1vZGFsLWJ0biAuYnRuLWljb24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtYnRuOmhvdmVyIC5idG4taWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLm1vZGFsLWJ0biAuYnRuLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTM1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5tb2RhbC1idG46aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm90dG9tOiAtMzBweDtcbn1cblxuLm1pbmltaXplLWJ0bi5hbmltYXRpbmcge1xuICBhbmltYXRpb246IG1pbmltaXplQW5pbWF0aW9uIDAuNXMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBtaW5pbWl6ZUFuaW1hdGlvbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuLmNsb3NlLW1vZGFsLWJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC41KSAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxufVxuXG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2RhbC1ib2R5IGFwcC1oZWxwLXN1cHBvcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmxvYXRpbmctYnViYmxlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjcpO1xufVxuXG4uZmxvYXRpbmctYnViYmxlLnB1bHNpbmcge1xuICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5cbi5idWJibGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cblxuLmJ1YmJsZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uYnViYmxlLXRleHQge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJ1YmJsZS1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ1YmJsZS1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xufVxuXG4uYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBub3RpZmljYXRpb25TbGlkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbn1cblxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5tb2RhbC1jb250ZW50Om5vdCgubWluaW1pemVkKTpub3QoLm1heGltaXplZCkge1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDc1dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGVudDpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5mbG9hdGluZy1idWJibGUge1xuICAgIGJvdHRvbTogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIH1cblxuICAuYnViYmxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgT1ZFUkxBWSAocGFyYSBjaWVycmUgeSBheXVkYSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICBhbmltYXRpb246IG1hbnVhbEZhZGVJbiBAdHJhbnNpdGlvbi1zcGVlZDtcbn1cblxuLmNvbmZpcm0tbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWxnO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnIEBzcGFjaW5nLXhsO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogQHNwYWNpbmcteHM7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLXhsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5jb25maXJtLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNpbmctbGc7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLW1kO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgJi5jb25maXJtLXdhcm5pbmcge1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlc3Npb24tc3VtbWFyeSB7XG4gICAgICBtYXJnaW4tdG9wOiBAc3BhY2luZy14bDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgIGg0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLW1kO1xuICAgICAgfVxuXG4gICAgICAuc3VtbWFyeS1zdGF0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogQHNwYWNpbmctc207XG4gICAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLW1kO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiBAc3BhY2luZy1sZyBAc3BhY2luZy14bDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IEBzcGFjaW5nLW1kO1xuICB9XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWxnO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAmLm1vZGFsLW1lZGl1bSB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnIEBzcGFjaW5nLXhsO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogQHNwYWNpbmcteHM7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy14cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogQHNwYWNpbmcteGw7XG5cbiAgICAuaGVscC1jb250ZW50IHtcbiAgICAgIC5oZWxwLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0yeGw7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLW1kO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IEBzcGFjaW5nLXNtO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBAc3BhY2luZy1zbSAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvcnRjdXRzLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogQHNwYWNpbmctbWQ7XG5cbiAgICAgIC5zaG9ydGN1dC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICAgICAgcGFkZGluZzogQHNwYWNpbmctc207XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgIC5zaG9ydGN1dC1rZXkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXhzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvcnRjdXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvcnRjdXQtZGVzYyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnIEBzcGFjaW5nLXhsO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVJST1IgREUgQ0FSR0EgREUgUERGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBkZi1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogQHNwYWNpbmctMnhsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbiAgYW5pbWF0aW9uOiBtYW51YWxGYWRlSW4gQHRyYW5zaXRpb24tc3BlZWQgZWFzZS1vdXQ7XG5cbiAgLmVycm9yLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy1sZztcbiAgICBhbmltYXRpb246IG1hbnVhbFNoYWtlIDAuNXMgZWFzZS1vdXQ7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy1tZDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMnhsO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5lcnJvci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogQHNwYWNpbmctbGc7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0biB7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09NUE9ORU5URVMgREVMIFNJREVCQVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYm9va21hcmtzLXNlY3Rpb24sXG4uaGlzdG9yeS1zZWN0aW9uIHtcbiAgcGFkZGluZzogQHNwYWNpbmctbGc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy1tZDtcblxuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiBAc3BhY2luZy14cztcbiAgICB9XG5cbiAgICAuYnRuLWFkZC1ib29rbWFyayB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgYW5pbWF0aW9uOiBtYW51YWxQdWxzZUdsb3cgMS41cyBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJvb2ttYXJrcy1saXN0LFxuLmhpc3RvcnktbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYm9va21hcmstaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogQHNwYWNpbmctc207XG4gIHBhZGRpbmc6IEBzcGFjaW5nLXNtO1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy14cztcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAuYnRuLXJlbW92ZS1ib29rbWFyayB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5ib29rbWFyay1pY29uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAuYm9va21hcmstZGV0YWlscyB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAuYm9va21hcmstdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5ib29rbWFyay1wYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gIH1cblxuICAuYnRuLXJlbW92ZS1ib29rbWFyayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXhzO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gIH1cbn1cblxuLmhpc3RvcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogQHNwYWNpbmctc207XG4gIHBhZGRpbmc6IEBzcGFjaW5nLXNtO1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy14cztcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgfVxuXG4gIC5oaXN0b3J5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICBmbGV4OiAxO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG5cbiAgLmhpc3RvcnktdGltZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRVJSQU1JRU5UQVMgREVMIFBBTkVMIERFUkVDSE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udG9vbHMtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xufVxuXG4udG9vbC1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNpbmcteGw7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLW1kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IEBzcGFjaW5nLXhzO1xuICB9XG59XG5cbi5zZWFyY2gtYWR2YW5jZWQtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCBAc3BhY2luZy1tZDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy1tZDtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICB9XG59XG5cbi5idG4tc2VhcmNoLWFkdmFuY2VkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi5zZWFyY2gtcmVzdWx0cyB7XG4gIG1hcmdpbi10b3A6IEBzcGFjaW5nLWxnO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAuc2VhcmNoLXJlc3VsdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNwYWNpbmctc207XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5yZXN1bHQtcGFnZSB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy14cztcbiAgICB9XG5cbiAgICAucmVzdWx0LWNvbnRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cbiAgfVxufVxuXG4uc2hhcmUtb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogQHNwYWNpbmctc207XG5cbiAgLnNoYXJlLWJ0biB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXNtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogQHNwYWNpbmctc207XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG59XG5cbi5hY2Nlc3NpYmlsaXR5LW9wdGlvbnMge1xuICAuY2hlY2tib3gtb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogQHNwYWNpbmctc207XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtc207XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPT1RFUiBDT01QTEVUT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb290ZXItbGVmdCxcbi5mb290ZXItcmlnaHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLWxnO1xufVxuXG4uZm9vdGVyLWxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5mb290ZXItcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucXVpY2stbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBAc3BhY2luZy1zbTtcblxuICAubmF2LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cblxuICAubmF2LXF1aWNrIHtcbiAgICBwYWRkaW5nOiA2cHggQHNwYWNpbmctbWQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1zbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG4uc2Vzc2lvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBAc3BhY2luZy1sZztcblxuICAuc2Vzc2lvbi10aW1lLFxuICAucGFnZXMtdmlld2VkIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IEBzcGFjaW5nLXhzO1xuICB9XG5cbiAgLmJ0bi1oZWxwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZykgc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5PVElGSUNBQ0lPTkVTIERFTCBTSVNURU1BXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnN5c3RlbS1ub3RpZmljYXRpb25zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgQHRyYW5zaXRpb24tc3BlZWQgZWFzZS1vdXQ7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2luZy1tZDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogQHNwYWNpbmctbWQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW5mbyk7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIEB0cmFuc2l0aW9uLXNwZWVkIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJi5zdWNjZXNzIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICAubm90aWZpY2F0aW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIH1cbiAgfVxuXG4gICYud2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG4gIH1cblxuICAmLmVycm9yIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcblxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGFuaW1hdGlvbjogbWFudWFsU2hha2UgMC41cztcbiAgICB9XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgNDVkZWcsXG4gICAgICB0cmFuc3BhcmVudCAzMCUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDUwJSxcbiAgICAgIHRyYW5zcGFyZW50IDcwJVxuICAgICk7XG4gICAgYW5pbWF0aW9uOiB3YXZlIDZzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLXhzO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cbiAgfVxuXG4gIC5ub3RpZmljYXRpb24tY2xvc2Uge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLXhzO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXhzO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgR0VORVJBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IEBzcGFjaW5nLXNtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAmLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAmLXNtYWxsIHtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cblxuICAmLWxhcmdlIHtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgJi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VBUkNIIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuXG4gIC5zZWFyY2gtbW9kYWwtYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIH1cblxuICAuc2VhcmNoLW1vZGFsLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtbGc7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbmltYXRpb246IHNsaWRlRG93biBAdHJhbnNpdGlvbi1zcGVlZCBlYXNlLW91dDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuICB9XG5cbiAgLnNlYXJjaC1tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IEBzcGFjaW5nLWxnO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IEBzcGFjaW5nLW1kO1xuXG4gICAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiBAc3BhY2luZy1zbTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgcGFkZGluZzogQHNwYWNpbmctc20gQHNwYWNpbmctbWQ7XG5cbiAgICAgIC5zZWFyY2gtbW9kYWwtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1tb2RhbC1pbnB1dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiBAc3BhY2luZy14cztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMteHM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiBAc3BhY2luZy14cztcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLXhzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaC1yZXN1bHRzIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogQHNwYWNpbmctbWQ7XG5cbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiBAc3BhY2luZy1tZDtcbiAgICAgIHBhZGRpbmc6IEBzcGFjaW5nLW1kO1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNpbmctc207XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5yZXN1bHQtZGV0YWlscyB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLnJlc3VsdC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaC1lbXB0eSB7XG4gICAgcGFkZGluZzogQHNwYWNpbmctMnhsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgREVMIFZJU09SIFBERiAtIFZJU1RBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jYW52YXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblxuICAuc2luZ2xlLXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMjA7XG4gIH1cblxuICAuZG91YmxlLXBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMzA7XG5cbiAgICAucGRmLWNhbnZhcyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMzE7XG5cbiAgICAgICYubGVmdC1wYWdlIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJi5yaWdodC1wYWdlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zY3JvbGwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB6LWluZGV4OiA0MDtcblxuICAgIGNhbnZhcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAmLmRvdWJsZS1tb2RlIHtcbiAgICAuc2luZ2xlLXZpZXcge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kb3VibGUtcGFnZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4ucGRmLWNhbnZhcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuXG4gIC5jYW52YXMtY29udGFpbmVyID4gKiB7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kb3VibGUtcGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG5cbiAgICAucGRmLWNhbnZhcyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5wZGYtY2FudmFzIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXSkge1xuICAgIGFuaW1hdGlvbjogZmFkZUluQ2FudmFzIDAuNXMgZWFzZS1vdXQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5DYW52YXMge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmRvdWJsZS1wYWdlLWNvbnRhaW5lciB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkRvdWJsZSAwLjVzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3VibGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1hbnVhbEZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1hbnVhbFNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7IH1cbiAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7IH1cbn1cblxuQGtleWZyYW1lcyBtYW51YWxQdWxzZUdsb3cge1xuICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3OSwgNzAsIDIyOSwgMC40KTsgfVxuICA3MCUgeyBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoNzksIDcwLCAyMjksIDApOyB9XG4gIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNzksIDcwLCAyMjksIDApOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('300ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('200ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])])]
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_manuales_pages_manual-usuario_manual-usuario_component_ts.js.map