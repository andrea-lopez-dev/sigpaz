"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_audiovisual_pages_audiovisual_component_ts"],{

/***/ 28373:
/*!********************************************************************!*\
  !*** ./src/app/modules/audiovisual/pages/audiovisual.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudiovisualComponent: () => (/* binding */ AudiovisualComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/header/header.component */ 50468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var _services_tiempo_formato_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/tiempo-formato.pipe */ 67831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);










 // IMPORTACIÓN DEL PIPE





const _c0 = ["videoPlayer"];
function AudiovisualComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AudiovisualComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87)(1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 89)(4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r5.description);
  }
}
function AudiovisualComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AudiovisualComponent_div_4_div_11_div_1_Template, 8, 3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResults);
  }
}
function AudiovisualComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r2.searchQuery, "\" ");
  }
}
function AudiovisualComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75)(3, "div", 76)(4, "div", 77)(5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AudiovisualComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AudiovisualComponent_div_4_button_8_Template, 2, 0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AudiovisualComponent_div_4_div_11_Template, 2, 1, "div", 82)(12, AudiovisualComponent_div_4_div_12_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchQuery && ctx_r2.searchResults.length === 0);
  }
}
function AudiovisualComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 101)(7, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function AudiovisualComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AudiovisualComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AudiovisualComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AudiovisualComponent_div_5_div_4_div_9_Template, 2, 0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pulsing", ctx_r2.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showMinimizeNotification);
  }
}
function AudiovisualComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudiovisualComponent_div_5_div_2_Template, 17, 0, "div", 95)(3, AudiovisualComponent_div_5_div_3_Template, 3, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AudiovisualComponent_div_5_div_4_Template, 10, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("minimized-mode", ctx_r2.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("minimized", ctx_r2.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMinimized);
  }
}
function AudiovisualComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120)(1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.porcentajeCarga + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.porcentajeCarga, "%");
  }
}
function AudiovisualComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115)(1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando video del manual...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AudiovisualComponent_div_27_div_5_Template, 5, 3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.porcentajeCarga);
  }
}
function AudiovisualComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 123)(1, "div", 124)(2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manual Audiovisual SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Este video contiene la gu\u00EDa completa para el uso del sistema SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 126)(9, "div", 127)(10, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Video tutorial completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 127)(15, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uD83D\uDCD6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cap\u00EDtulos por m\u00F3dulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 127)(20, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "B\u00FAsqueda por temas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_28_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cargarVideoManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Iniciar Manual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AudiovisualComponent_track_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "track", 130);
  }
  if (rf & 2) {
    const subtitulo_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", subtitulo_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("srclang", subtitulo_r10.lang)("label", subtitulo_r10.label)("default", subtitulo_r10.default);
  }
}
function AudiovisualComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_42_Template_div_click_0_listener($event) {
      const capitulo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r2.saltarACapitulo(capitulo_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r2.calcularPorcentajeCapitulo(capitulo_r12.tiempoInicio) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", capitulo_r12.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](capitulo_r12.titulo);
  }
}
function AudiovisualComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2022 ", ctx_r2.capituloActual.titulo, " ");
  }
}
function AudiovisualComponent_div_83_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_83_button_3_Template_button_click_0_listener() {
      const speed_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cambiarVelocidad(speed_r14.valor));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const speed_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", speed_r14.valor === ctx_r2.velocidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speed_r14.icono);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", speed_r14.nombre, " (", speed_r14.valor, "x)");
  }
}
function AudiovisualComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Velocidad del manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AudiovisualComponent_div_83_button_3_Template, 5, 5, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.velocidadesManual);
  }
}
function AudiovisualComponent_div_92_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_92_button_9_Template_button_click_0_listener() {
      const track_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cambiarSubtitulo(track_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDF0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const track_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", track_r17 === ctx_r2.subtituloActivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", track_r17.idioma, " (", track_r17.codigo, ")");
  }
}
function AudiovisualComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Idioma de subt\u00EDtulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_92_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.desactivarSubtitulos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDD07");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desactivar subt\u00EDtulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AudiovisualComponent_div_92_button_9_Template, 5, 4, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.subtitulosDisponibles);
  }
}
function AudiovisualComponent_div_101_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_101_button_9_Template_button_click_0_listener() {
      const calidad_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cambiarCalidad(calidad_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDCD0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const calidad_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", calidad_r20 === ctx_r2.calidadActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](calidad_r20.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](calidad_r20.resolucion);
  }
}
function AudiovisualComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calidad de visualizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_101_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cambiarCalidad("auto"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Auto (Recomendado)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AudiovisualComponent_div_101_button_9_Template, 7, 4, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.calidadesDisponibles);
  }
}
function AudiovisualComponent_div_111_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const capitulo_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", capitulo_r22.descripcion, " ");
  }
}
function AudiovisualComponent_div_111_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_111_div_4_Template_div_click_0_listener() {
      const capitulo_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.saltarACapitulo(capitulo_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 151)(5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AudiovisualComponent_div_111_div_4_div_7_Template, 2, 1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r22 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", capitulo_r22 === ctx_r2.capituloActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, capitulo_r22.tiempoInicio));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](capitulo_r22.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", capitulo_r22.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, capitulo_r22.duracion));
  }
}
function AudiovisualComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cap\u00EDtulos del manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AudiovisualComponent_div_111_div_4_Template, 11, 10, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.capitulosManual);
  }
}
function AudiovisualComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Opciones del manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.descargarManual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Descargar manual PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.descargarVideo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Descargar video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.tomarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tomar nota en este momento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.marcarComoVisto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Marcar como visto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cicloReproduccion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_119_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.abrirAjustes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u2699\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ajustes del reproductor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 3, ctx_r2.tiempoActual));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getModoRepeticionIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getModoRepeticionTexto());
  }
}
function AudiovisualComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_120_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarAtajos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_120_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 161)(3, "h4")(4, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2328\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Atajos del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_120_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.mostrarAtajos = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 164)(10, "div", 165)(11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reproducci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 166)(14, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Play / Pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 166)(22, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Retroceder / Adelantar 5s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 166)(30, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Retroceder / Adelantar 10s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 165)(38, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Navegaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 166)(41, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0-9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ir al porcentaje (0-90%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 166)(46, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ir al inicio / final");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 166)(54, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Siguiente / Anterior cap\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 165)(62, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Controles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 166)(65, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pantalla completa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 166)(70, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Esc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Salir pantalla completa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 166)(75, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Silenciar / Activar sonido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 166)(80, "kbd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mostrar / Ocultar subt\u00EDtulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function AudiovisualComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 167)(1, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("skip-back", ctx_r2.saltoAmount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.saltoAmount > 0 ? "\u23E9" : "\u23EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.saltoAmount > 0 ? "+" : "", "", ctx_r2.saltoAmount, "s");
  }
}
function AudiovisualComponent_div_122_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.capituloActual.descripcion, " ");
  }
}
function AudiovisualComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 170)(1, "div", 171)(2, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDCD6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 173)(5, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AudiovisualComponent_div_122_div_7_Template, 2, 1, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.capituloActual == null ? null : ctx_r2.capituloActual.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.capituloActual == null ? null : ctx_r2.capituloActual.descripcion);
  }
}
function AudiovisualComponent_div_123_div_8_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 198)(1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", capitulo_r27.progreso + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", capitulo_r27.progreso, "% visto");
  }
}
function AudiovisualComponent_div_123_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_8_div_5_Template_div_click_0_listener() {
      const capitulo_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.saltarACapitulo(capitulo_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 191)(4, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 193)(7, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AudiovisualComponent_div_123_div_8_div_5_div_13_Template, 5, 3, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", capitulo_r27 === ctx_r2.capituloActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r28 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](capitulo_r27.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, capitulo_r27.tiempoInicio));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, capitulo_r27.duracion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", capitulo_r27.progreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", capitulo_r27 === ctx_r2.capituloActual ? ctx_r2.isPlaying ? "\u25B6\uFE0F" : "\u23F8\uFE0F" : "\uD83D\uDCD6", " ");
  }
}
function AudiovisualComponent_div_123_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 181)(1, "div", 182)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00CDndice del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AudiovisualComponent_div_123_div_8_div_5_Template, 16, 12, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 185)(7, "div", 186)(8, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total cap\u00EDtulos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 186)(13, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tiempo total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 186)(19, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tu progreso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.capitulosManual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.capitulosManual.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 4, ctx_r2.duracionTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.porcentajeProgreso, "%");
  }
}
function AudiovisualComponent_div_123_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_9_div_10_Template_div_click_0_listener() {
      const nota_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.saltarATiempo(nota_r31.tiempo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 208)(5, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 212)(13, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_9_div_10_Template_button_click_13_listener($event) {
      const nota_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      ctx_r2.editarNota(nota_r31);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u270F\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_9_div_10_Template_button_click_15_listener($event) {
      const nota_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      ctx_r2.eliminarNota(nota_r31.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \uD83D\uDDD1\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const nota_r31 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", nota_r31.tiempo === ctx_r2.tiempoActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, nota_r31.tiempo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nota_r31.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nota_r31.contenido);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, nota_r31.fecha, "dd/MM/yyyy HH:mm"));
  }
}
function AudiovisualComponent_div_123_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 214)(1, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No has tomado notas a\u00FAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_9_div_11_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r32);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.agregarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tomar primera nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AudiovisualComponent_div_123_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 181)(1, "div", 201)(2, "div", 202)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mis Notas del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.agregarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nueva Nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AudiovisualComponent_div_123_div_9_div_10_Template, 17, 11, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AudiovisualComponent_div_123_div_9_div_11_Template, 7, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.notasUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.notasUsuario.length === 0);
  }
}
function AudiovisualComponent_div_123_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 181)(1, "div", 216)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recursos del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 217)(5, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_10_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.descargarManualPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 220)(9, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manual Completo PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Documentaci\u00F3n detallada en formato PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2.5 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_10_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.descargarPresentacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 220)(21, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Presentaci\u00F3n PPT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Diapositivas del curso de capacitaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5.1 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_10_Template_div_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.descargarGuiaRapida());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u26A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 220)(33, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gu\u00EDa R\u00E1pida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cheat sheet con atajos y funciones clave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1.2 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_div_10_Template_div_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.abrirEnlacesUtiles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83D\uDD17");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 220)(45, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Enlaces \u00DAtiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Documentaci\u00F3n oficial y foros de ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u2197\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 225)(52, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Informaci\u00F3n del Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 226)(55, "div", 227)(56, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Versi\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 227)(61, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 227)(67, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Autor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Equipo SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 227)(72, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Duraci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 227)(78, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Idiomas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 227)(83, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Tama\u00F1o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "125 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.versionManual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 4, ctx_r2.fechaActualizacion, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 7, ctx_r2.duracionTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subtitulosDisponibles.length + 1);
  }
}
function AudiovisualComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 177)(1, "div", 178)(2, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.tabActiva = "contenido");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDCD1 Contenido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.tabActiva = "notas");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \uD83D\uDCDD Mis Notas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_123_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.tabActiva = "recursos");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \uD83D\uDCCE Recursos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AudiovisualComponent_div_123_div_8_Template, 23, 6, "div", 180)(9, AudiovisualComponent_div_123_div_9_Template, 12, 2, "div", 180)(10, AudiovisualComponent_div_123_div_10_Template, 87, 9, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabActiva === "contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabActiva === "notas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.tabActiva === "recursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tabActiva === "contenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tabActiva === "notas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tabActiva === "recursos");
  }
}
function AudiovisualComponent_div_124_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 245);
  }
  if (rf & 2) {
    const capitulo_r34 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx_r2.calcularPorcentajeCapitulo(capitulo_r34.tiempoInicio) + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", capitulo_r34.titulo);
  }
}
function AudiovisualComponent_div_124_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_124_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.marcarComoCompletado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Marcar como visto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AudiovisualComponent_div_124_button_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 246)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDFC6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A1Manual completado! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AudiovisualComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 230)(1, "div", 231)(2, "div", 232)(3, "div", 233)(4, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Progreso del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 235)(9, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 237)(17, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AudiovisualComponent_div_124_div_20_Template, 1, 3, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 241)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AudiovisualComponent_div_124_button_29_Template, 4, 0, "button", 243)(30, AudiovisualComponent_div_124_button_30_Template, 4, 0, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Cap\u00EDtulo ", ctx_r2.capituloActualNumero, "/", ctx_r2.capitulosManual.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.porcentajeProgreso, "% completado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, ctx_r2.tiempoRestante), " restante");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.porcentajeProgreso + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.capitulosManual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, ctx_r2.tiempoActual));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 16, ctx_r2.duracionTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.porcentajeProgreso < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.porcentajeProgreso === 100);
  }
}
function AudiovisualComponent_div_125_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const capitulo_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", capitulo_r38.descripcion, " ");
  }
}
function AudiovisualComponent_div_125_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 270)(1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", capitulo_r38.progreso + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", capitulo_r38.progreso, "%");
  }
}
function AudiovisualComponent_div_125_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_125_div_12_Template_div_click_0_listener() {
      const capitulo_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      ctx_r2.saltarACapitulo(capitulo_r38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarCapitulosModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 261)(2, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AudiovisualComponent_div_125_div_12_div_9_Template, 2, 1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 266)(11, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AudiovisualComponent_div_125_div_12_div_14_Template, 5, 3, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const capitulo_r38 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", capitulo_r38 === ctx_r2.capituloActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cap\u00EDtulo ", capitulo_r38.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, capitulo_r38.tiempoInicio));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](capitulo_r38.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", capitulo_r38.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, capitulo_r38.duracion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", capitulo_r38.progreso);
  }
}
function AudiovisualComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 247)(1, "div", 248)(2, "div", 249)(3, "h2")(4, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCD6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cap\u00EDtulos del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_125_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarCapitulosModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 252)(11, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AudiovisualComponent_div_125_div_12_Template, 15, 12, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 255)(14, "div", 256)(15, "div", 257)(16, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uD83D\uDCD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 259)(19, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cap\u00EDtulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 257)(24, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u23F1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 259)(27, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Duraci\u00F3n total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 257)(33, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 259)(36, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tu progreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.capitulosManual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.capitulosManual.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 6, ctx_r2.duracionTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.porcentajeProgreso, "%");
  }
}
function AudiovisualComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 247)(1, "div", 272)(2, "div", 249)(3, "h2")(4, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nueva Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_126_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarNotaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 252)(11, "form", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AudiovisualComponent_div_126_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.guardarNota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 274)(13, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "T\u00EDtulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_126_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.nuevaNota.titulo, $event) || (ctx_r2.nuevaNota.titulo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 274)(17, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tiempo en el video:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 277)(20, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "tiempoFormato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_126_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.usarTiempoActual());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Usar tiempo actual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 274)(26, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contenido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_126_Template_textarea_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.nuevaNota.contenido, $event) || (ctx_r2.nuevaNota.contenido = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 255)(30, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_126_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarNotaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Guardar Nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.nuevaNota.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 5, ctx_r2.tiempoActual));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.nuevaNota.contenido);
  }
}
function AudiovisualComponent_div_127_div_19_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const speed_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", speed_r42.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", speed_r42.nombre, " (", speed_r42.valor, "x) ");
  }
}
function AudiovisualComponent_div_127_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 286)(1, "div", 274)(2, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Velocidad predeterminada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_19_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.velocidadDefault, $event) || (ctx_r2.ajustes.velocidadDefault = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AudiovisualComponent_div_127_div_19_option_5_Template, 2, 3, "option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 274)(7, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reproducci\u00F3n autom\u00E1tica:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 289)(10, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_19_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.autoplay, $event) || (ctx_r2.ajustes.autoplay = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Iniciar manual autom\u00E1ticamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 274)(15, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Continuar donde dej\u00E9:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 289)(18, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_19_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.continuar, $event) || (ctx_r2.ajustes.continuar = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recordar posici\u00F3n de reproducci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 274)(23, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Repetici\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_19_Template_select_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.modoRepeticion, $event) || (ctx_r2.ajustes.modoRepeticion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sin repetici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Repetir cap\u00EDtulo actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Repetir manual completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.velocidadDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.velocidadesManual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.autoplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.continuar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.modoRepeticion);
  }
}
function AudiovisualComponent_div_127_div_20_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sub_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sub_r44.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_r44.idioma, " ");
  }
}
function AudiovisualComponent_div_127_div_20_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_div_20_button_22_Template_button_click_0_listener() {
      const color_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r45).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.ajustes.colorSubtitulos = color_r46);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r46 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", color_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.ajustes.colorSubtitulos === color_r46);
  }
}
function AudiovisualComponent_div_127_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 286)(1, "div", 274)(2, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Idioma de subt\u00EDtulos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_20_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.idiomaSubtitulos, $event) || (ctx_r2.ajustes.idiomaSubtitulos = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sin subt\u00EDtulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AudiovisualComponent_div_127_div_20_option_7_Template, 2, 2, "option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 274)(9, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tama\u00F1o de fuente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_20_Template_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.tamanoSubtitulos, $event) || (ctx_r2.ajustes.tamanoSubtitulos = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Peque\u00F1o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Medio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Grande");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 274)(19, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Color de subt\u00EDtulos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AudiovisualComponent_div_127_div_20_button_22_Template, 1, 4, "button", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.idiomaSubtitulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.subtitulosDisponibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.tamanoSubtitulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.coloresSubtitulos);
  }
}
function AudiovisualComponent_div_127_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 286)(1, "div", 274)(2, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tema del reproductor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.temaReproductor, $event) || (ctx_r2.ajustes.temaReproductor = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usar tema del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tema claro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tema oscuro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 274)(12, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mostrar controles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 306)(15, "label", 307)(16, "input", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.mostrarControles, $event) || (ctx_r2.ajustes.mostrarControles = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Siempre visibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 307)(21, "input", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.mostrarControles, $event) || (ctx_r2.ajustes.mostrarControles = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Al pasar el mouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 307)(26, "input", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.mostrarControles, $event) || (ctx_r2.ajustes.mostrarControles = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ocultar en reproducci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 274)(31, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Animaciones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 289)(34, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.animaciones, $event) || (ctx_r2.ajustes.animaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Activar animaciones suaves");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 274)(39, "label", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mostrar progreso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 289)(42, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_div_127_div_21_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r2.ajustes.mostrarProgreso, $event) || (ctx_r2.ajustes.mostrarProgreso = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mostrar barra de progreso inferior");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.temaReproductor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.mostrarControles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.mostrarControles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.mostrarControles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.animaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ajustes.mostrarProgreso);
  }
}
function AudiovisualComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 247)(1, "div", 272)(2, "div", 249)(3, "h2")(4, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2699\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ajustes del Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.cerrarAjustes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 252)(11, "div", 282)(12, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.settingTab = "reproduccion");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u25B6\uFE0F Reproducci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.settingTab = "subtitulos");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \uD83D\uDCDD Subt\u00EDtulos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.settingTab = "interfaz");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \uD83C\uDFA8 Interfaz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AudiovisualComponent_div_127_div_19_Template, 32, 5, "div", 284)(20, AudiovisualComponent_div_127_div_20_Template, 23, 4, "div", 284)(21, AudiovisualComponent_div_127_div_21_Template, 46, 6, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 285)(23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.restaurarAjustesPredeterminados());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Restaurar predeterminados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_div_127_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.guardarAjustes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Guardar ajustes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.settingTab === "reproduccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.settingTab === "subtitulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.settingTab === "interfaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.settingTab === "reproduccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.settingTab === "subtitulos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.settingTab === "interfaz");
  }
}
class AudiovisualComponent {
  router;
  notificationService;
  elementRef;
  cdr;
  platformId;
  // ========== VARIABLES COMPARTIDAS DEL DASHBOARD ==========
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
  // Propiedad para verificar si estamos en el navegador
  isBrowser;
  // ========== VARIABLES DEL REPRODUCTOR DE VIDEO ==========
  // Elementos del video
  videoPlayer;
  // Estado de reproducción
  isPlaying = false;
  videoCargado = false;
  cargandoVideo = false;
  porcentajeCarga = 0;
  // Tiempo de video
  tiempoActual = 0;
  duracionTotal = 0;
  tiempoRestante = 0;
  porcentajeProgreso = 0;
  porcentajeBuffered = 0;
  // Volumen
  volumen = 1;
  isMuted = false;
  // Controles
  ocultarControles = false;
  mostrarAtajos = false;
  mostrarSalto = false;
  saltoAmount = 0;
  mostrarNotificacionCapitulo = false;
  modoTeatro = false;
  // Velocidades de reproducción
  velocidad = 1;
  velocidadesManual = [{
    valor: 0.5,
    nombre: 'Muy lento',
    icono: '🐌'
  }, {
    valor: 0.75,
    nombre: 'Lento',
    icono: '👣'
  }, {
    valor: 1,
    nombre: 'Normal',
    icono: '🚶'
  }, {
    valor: 1.25,
    nombre: 'Rápido',
    icono: '🏃'
  }, {
    valor: 1.5,
    nombre: 'Muy rápido',
    icono: '⚡'
  }, {
    valor: 2,
    nombre: 'Turbo',
    icono: '🚀'
  }];
  // Subtítulos
  subtitulosDisponibles = [{
    url: 'assets/subtitulos/es.vtt',
    lang: 'es',
    label: 'Español',
    codigo: 'es',
    idioma: 'Español',
    default: true
  }, {
    url: 'assets/subtitulos/en.vtt',
    lang: 'en',
    label: 'English',
    codigo: 'en',
    idioma: 'Inglés',
    default: false
  }];
  subtituloActivo = null;
  // Calidades de video
  calidadesDisponibles = [{
    nombre: 'Baja',
    resolucion: '480p',
    value: '480'
  }, {
    nombre: 'Media',
    resolucion: '720p',
    value: '720'
  }, {
    nombre: 'Alta',
    resolucion: '1080p',
    value: '1080'
  }, {
    nombre: 'Ultra',
    resolucion: '4K',
    value: '2160'
  }];
  calidadActual = {
    nombre: 'Auto',
    resolucion: 'Auto'
  };
  // Información del video
  versionManual = '2.5.1';
  fechaActualizacion = new Date('2024-01-15');
  resolucionActual = '1080p';
  // Capítulos del manual
  capitulosManual = [{
    numero: 1,
    titulo: 'Introducción a SIGPAZ',
    tiempoInicio: 0,
    duracion: 180,
    descripcion: 'Presentación del sistema',
    progreso: 100
  }, {
    numero: 2,
    titulo: 'Inicio de Sesión',
    tiempoInicio: 180,
    duracion: 240,
    descripcion: 'Acceso al sistema',
    progreso: 80
  }, {
    numero: 3,
    titulo: 'Dashboard Principal',
    tiempoInicio: 420,
    duracion: 360,
    descripcion: 'Interfaz principal',
    progreso: 60
  }, {
    numero: 4,
    titulo: 'Gestión de Usuarios',
    tiempoInicio: 780,
    duracion: 480,
    descripcion: 'Administración de usuarios',
    progreso: 40
  }, {
    numero: 5,
    titulo: 'Generación de Reportes',
    tiempoInicio: 1260,
    duracion: 420,
    descripcion: 'Creación de reportes',
    progreso: 20
  }, {
    numero: 6,
    titulo: 'Configuración del Sistema',
    tiempoInicio: 1680,
    duracion: 540,
    descripcion: 'Ajustes del sistema',
    progreso: 10
  }, {
    numero: 7,
    titulo: 'Seguridad y Permisos',
    tiempoInicio: 2220,
    duracion: 480,
    descripcion: 'Configuración de seguridad',
    progreso: 5
  }, {
    numero: 8,
    titulo: 'Preguntas Frecuentes',
    tiempoInicio: 2700,
    duracion: 600,
    descripcion: 'Resolución de dudas',
    progreso: 0
  }];
  capituloActual = null;
  capituloActualNumero = 1;
  // Panel lateral
  tabActiva = 'contenido';
  // Notas del usuario
  notasUsuario = [{
    id: 1,
    titulo: 'Configuración inicial',
    contenido: 'Recordar configurar permisos de administrador',
    tiempo: 120,
    fecha: new Date('2024-01-10 10:30')
  }, {
    id: 2,
    titulo: 'Exportar reportes',
    contenido: 'Los reportes se exportan en formato PDF y Excel',
    tiempo: 800,
    fecha: new Date('2024-01-12 14:45')
  }, {
    id: 3,
    titulo: 'Backup automático',
    contenido: 'Configurar backup automático cada 24 horas',
    tiempo: 1500,
    fecha: new Date('2024-01-14 09:15')
  }];
  nuevaNota = {
    titulo: '',
    contenido: '',
    tiempo: 0
  };
  // Modales
  showCapitulosModal = false;
  showNotaModal = false;
  showAjustesModal = false;
  // Dropdowns
  dropdownAbierto = null;
  // Ajustes del reproductor
  ajustes = {
    velocidadDefault: 1,
    autoplay: false,
    continuar: true,
    modoRepeticion: 'ninguno',
    idiomaSubtitulos: 'es',
    tamanoSubtitulos: 'medio',
    colorSubtitulos: '#ffffff',
    temaReproductor: 'sistema',
    mostrarControles: 'hover',
    animaciones: true,
    mostrarProgreso: true,
    calidadPreferida: 'auto',
    bufferSize: 30
  };
  // Colores para subtítulos
  coloresSubtitulos = ['#ffffff', '#000000', '#ffff00', '#00ffff', '#ff00ff'];
  // Modo repetición
  modoRepeticion = 'ninguno';
  // Pantalla completa
  isFullscreen = false;
  supportsPictureInPicture = false;
  // Picture in Picture
  isPictureInPicture = false;
  // Audio
  audioActivo = true;
  // Historial de reproducción
  historialReproduccion = [];
  // Estadísticas
  tiempoVistoTotal = 0;
  tiempoVistoSession = 0;
  porcentajeVisto = 0;
  // Session timer
  sessionTimerSubscription;
  sessionSeconds = 0;
  // Tab de ajustes
  settingTab = 'reproduccion';
  // Timer para ocultar controles
  hideControlsTimer;
  // ========== CONSTRUCTOR ==========
  constructor(router, notificationService, elementRef, cdr, platformId) {
    this.router = router;
    this.notificationService = notificationService;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.platformId = platformId;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  }
  // ========== LIFECYCLE HOOKS ==========
  ngOnInit() {
    this.applyTheme();
    this.inicializarDatosManual();
    this.startSessionTimer();
    this.cargarAjustesGuardados();
    // Solo configurar atajos de teclado en el navegador
    if (this.isBrowser) {
      this.setupKeyboardShortcuts();
      this.supportsPictureInPicture = 'pictureInPictureEnabled' in document;
    }
  }
  ngAfterViewInit() {
    if (this.isBrowser) {
      this.inicializarReproductor();
    }
  }
  ngOnDestroy() {
    if (this.sessionTimerSubscription) {
      this.sessionTimerSubscription.unsubscribe();
    }
    this.guardarAjustes();
    this.guardarDatosUsuario();
    if (this.hideControlsTimer) {
      clearTimeout(this.hideControlsTimer);
    }
  }
  // ========== MÉTODOS DEL DASHBOARD (MANTENIDOS) ==========
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
  onToggleNotifications() {
    // Implementación de notificaciones
  }
  onMarkAllAsRead() {
    // Implementación de marcar como leído
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
        description: 'Capítulo 4: Gestión completa de usuarios',
        icon: '👥',
        tiempo: 780
      }, {
        title: 'Creación de reportes',
        description: 'Capítulo 5: Generar y exportar reportes',
        icon: '📊',
        tiempo: 1260
      }, {
        title: 'Seguridad del sistema',
        description: 'Capítulo 7: Configuración de seguridad',
        icon: '🛡️',
        tiempo: 2220
      }];
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ========== MÉTODOS DEL REPRODUCTOR ==========
  inicializarReproductor() {
    if (!this.videoPlayer?.nativeElement) {
      console.error('Video player no encontrado');
      return;
    }
    const video = this.videoPlayer.nativeElement;
    // Configurar eventos
    video.addEventListener('loadeddata', () => {
      this.videoCargado = true;
      this.cargandoVideo = false;
      this.duracionTotal = video.duration;
      this.cdr.detectChanges();
    });
    video.addEventListener('waiting', () => {
      this.cargandoVideo = true;
    });
    video.addEventListener('playing', () => {
      this.cargandoVideo = false;
    });
    video.addEventListener('progress', () => {
      if (video.buffered.length > 0) {
        this.porcentajeBuffered = video.buffered.end(0) / video.duration * 100;
      }
    });
    // Cargar video automáticamente si está configurado
    if (this.ajustes.autoplay) {
      setTimeout(() => {
        this.cargarVideoManual();
      }, 1000);
    }
  }
  cargarVideoManual() {
    if (!this.videoPlayer?.nativeElement) return;
    this.cargandoVideo = true;
    const video = this.videoPlayer.nativeElement;
    // ESTA ES LA CLAVE: Establecer la fuente del video
    if (!video.src) {
      // Aquí debes poner la ruta real de tu video
      video.src = 'assets/videos/manual-sigpaz.mp4'; // O la ruta correcta
    }
    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      if (this.porcentajeCarga < 95) {
        this.porcentajeCarga += 5;
      } else {
        clearInterval(progressInterval);
        // Cargar el video
        video.load();
        // Si hay posición guardada, restaurarla
        if (this.ajustes.continuar) {
          const tiempoGuardado = this.obtenerTiempoGuardado();
          if (tiempoGuardado > 0) {
            video.currentTime = tiempoGuardado;
          }
        }
        // Reproducir automáticamente si está configurado
        if (this.ajustes.autoplay) {
          video.play().catch(console.error);
        }
      }
    }, 100);
  }
  obtenerTiempoGuardado() {
    if (!this.isBrowser || !localStorage) return 0;
    try {
      const saved = localStorage.getItem('sigpaz_video_progress');
      return saved ? parseFloat(saved) : 0;
    } catch {
      return 0;
    }
  }
  guardarTiempoActual() {
    if (!this.isBrowser || !localStorage || !this.videoCargado) return;
    try {
      localStorage.setItem('sigpaz_video_progress', this.tiempoActual.toString());
    } catch (error) {
      console.error('Error guardando progreso:', error);
    }
  }
  // ========== CONTROLES DE REPRODUCCIÓN ==========
  togglePlay() {
    if (!this.videoPlayer?.nativeElement) return;
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  onPlay() {
    this.isPlaying = true;
    this.ocultarControlesTimer();
  }
  onPause() {
    this.isPlaying = false;
    this.mostrarControles();
  }
  onVideoEnd() {
    this.isPlaying = false;
    if (this.modoRepeticion === 'manual') {
      this.videoPlayer.nativeElement.currentTime = 0;
      this.togglePlay();
    } else if (this.modoRepeticion === 'capitulo' && this.capituloActual) {
      this.saltarACapitulo(this.capituloActual);
    }
  }
  onVideoError(event) {
    console.error('Error en video:', event);
    this.cargandoVideo = false;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Error cargando video',
      message: 'Error al cargar el video',
      metadata: {
        avatar: '❌'
      },
      module: 'audiovisual',
      type: 'error'
    });
  }
  // ========== CONTROL DE TIEMPO ==========
  actualizarTiempo() {
    if (!this.videoPlayer?.nativeElement) return;
    const video = this.videoPlayer.nativeElement;
    this.tiempoActual = video.currentTime;
    this.duracionTotal = video.duration;
    this.tiempoRestante = this.duracionTotal - this.tiempoActual;
    this.porcentajeProgreso = this.tiempoActual / this.duracionTotal * 100;
    // Actualizar capítulo actual
    this.actualizarCapituloActual();
    // Guardar progreso cada 5 segundos
    if (Math.floor(this.tiempoActual) % 5 === 0) {
      this.guardarTiempoActual();
    }
  }
  onMetadataLoaded() {
    this.duracionTotal = this.videoPlayer.nativeElement.duration;
    this.cdr.detectChanges();
  }
  saltar(seconds) {
    if (!this.videoPlayer?.nativeElement) return;
    const video = this.videoPlayer.nativeElement;
    const newTime = Math.max(0, Math.min(video.currentTime + seconds, this.duracionTotal));
    video.currentTime = newTime;
    // Mostrar indicador de salto
    this.mostrarSalto = true;
    this.saltoAmount = seconds;
    setTimeout(() => {
      this.mostrarSalto = false;
    }, 1000);
  }
  saltarA(event) {
    if (!this.videoPlayer?.nativeElement) return;
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const newTime = percent * this.duracionTotal;
    this.videoPlayer.nativeElement.currentTime = newTime;
  }
  // ========== CONTROL DE VOLUMEN ==========
  actualizarVolumen() {
    if (!this.videoPlayer?.nativeElement) return;
    this.videoPlayer.nativeElement.volume = this.volumen;
    this.videoPlayer.nativeElement.muted = this.isMuted;
  }
  cambiarVolumen(event) {
    const input = event.target;
    this.volumen = parseFloat(input.value);
    this.actualizarVolumen();
  }
  toggleMute() {
    this.isMuted = !this.isMuted;
    this.actualizarVolumen();
  }
  // ========== CONTROL DE VELOCIDAD ==========
  cambiarVelocidad(speed) {
    this.velocidad = speed;
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.playbackRate = speed;
    }
    this.dropdownAbierto = null;
  }
  // ========== CONTROL DE SUBTÍTULOS ==========
  cambiarSubtitulo(track) {
    this.subtituloActivo = track;
    if (this.videoPlayer?.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      // Desactivar todos los tracks
      for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'disabled';
      }
      // Activar el track seleccionado
      if (track.default) {
        const tracks = video.textTracks;
        for (let i = 0; i < tracks.length; i++) {
          if (tracks[i].language === track.lang) {
            tracks[i].mode = 'showing';
            break;
          }
        }
      }
    }
    this.dropdownAbierto = null;
  }
  desactivarSubtitulos() {
    this.subtituloActivo = null;
    if (this.videoPlayer?.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'disabled';
      }
    }
    this.dropdownAbierto = null;
  }
  // ========== CONTROL DE CALIDAD ==========
  cambiarCalidad(calidad) {
    if (calidad === 'auto') {
      this.calidadActual = {
        nombre: 'Auto',
        resolucion: 'Auto'
      };
    } else {
      this.calidadActual = calidad;
    }
    this.dropdownAbierto = null;
    // En una implementación real, aquí cambiarías la fuente del video
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Calidad cambiada',
      message: `Calidad cambiada a ${this.calidadActual.nombre}`,
      metadata: {
        avatar: '🎯'
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  // ========== CONTROL DE CAPÍTULOS ==========
  actualizarCapituloActual() {
    if (!this.capitulosManual.length) return;
    for (const capitulo of this.capitulosManual) {
      if (this.tiempoActual >= capitulo.tiempoInicio && this.tiempoActual < capitulo.tiempoInicio + capitulo.duracion) {
        if (this.capituloActual !== capitulo) {
          this.capituloActual = capitulo;
          this.capituloActualNumero = capitulo.numero;
          this.mostrarNotificacionCapitulo = true;
          setTimeout(() => {
            this.mostrarNotificacionCapitulo = false;
          }, 3000);
        }
        break;
      }
    }
  }
  saltarACapitulo(capitulo) {
    if (!this.videoPlayer?.nativeElement) return;
    this.videoPlayer.nativeElement.currentTime = capitulo.tiempoInicio;
    this.capituloActual = capitulo;
    this.capituloActualNumero = capitulo.numero;
    this.dropdownAbierto = null;
    if (this.showCapitulosModal) {
      this.cerrarCapitulosModal();
    }
  }
  saltarATiempo(tiempo) {
    if (!this.videoPlayer?.nativeElement) return;
    this.videoPlayer.nativeElement.currentTime = tiempo;
  }
  calcularPorcentajeCapitulo(tiempoInicio) {
    if (!this.duracionTotal) return 0;
    return tiempoInicio / this.duracionTotal * 100;
  }
  // ========== CONTROL DE INTERFAZ ==========
  mostrarControles() {
    this.ocultarControles = false;
    if (this.hideControlsTimer) {
      clearTimeout(this.hideControlsTimer);
    }
  }
  ocultarControlesTimer() {
    if (this.isPlaying) {
      this.hideControlsTimer = setTimeout(() => {
        this.ocultarControles = true;
      }, 3000);
    }
  }
  resetOcultarControles() {
    this.mostrarControles();
    this.ocultarControlesTimer();
  }
  toggleDropdown(tipo) {
    this.dropdownAbierto = this.dropdownAbierto === tipo ? null : tipo;
  }
  cerrarAtajos(event) {
    if (event.target.classList.contains('shortcuts-overlay')) {
      this.mostrarAtajos = false;
    }
  }
  // ========== PANTALLA COMPLETA ==========
  toggleFullscreen() {
    if (!this.isBrowser) return;
    const container = this.elementRef.nativeElement.querySelector('.video-player-wrapper');
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(`Error al activar pantalla completa: ${err.message}`);
      });
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }
  togglePictureInPicture() {
    if (!this.isBrowser || !this.supportsPictureInPicture || !this.videoPlayer?.nativeElement) return;
    const video = this.videoPlayer.nativeElement;
    if (document.pictureInPictureElement === video) {
      document.exitPictureInPicture();
      this.isPictureInPicture = false;
    } else {
      video.requestPictureInPicture();
      this.isPictureInPicture = true;
    }
  }
  // ========== MODO TEATRO ==========
  alternarModoTeatro() {
    this.modoTeatro = !this.modoTeatro;
  }
  // ========== NOTAS DEL USUARIO ==========
  agregarNota() {
    this.nuevaNota = {
      titulo: '',
      contenido: '',
      tiempo: this.tiempoActual,
      fecha: new Date()
    };
    this.showNotaModal = true;
  }
  guardarNota() {
    if (this.nuevaNota.titulo && this.nuevaNota.contenido) {
      const nuevaNota = {
        id: Date.now(),
        titulo: this.nuevaNota.titulo,
        contenido: this.nuevaNota.contenido,
        tiempo: this.nuevaNota.tiempo,
        fecha: new Date()
      };
      this.notasUsuario.push(nuevaNota);
      this.cerrarNotaModal();
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Nota guardada',
        message: 'Nota guardada exitosamente',
        metadata: {
          avatar: '📝'
        },
        module: 'audiovisual',
        type: 'success'
      });
    }
  }
  editarNota(nota) {
    this.nuevaNota = {
      ...nota
    };
    this.showNotaModal = true;
  }
  eliminarNota(id) {
    this.notasUsuario = this.notasUsuario.filter(nota => nota.id !== id);
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Nota eliminada',
      message: 'Nota eliminada exitosamente',
      metadata: {
        avatar: '🗑️'
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  tomarNota() {
    this.agregarNota();
  }
  usarTiempoActual() {
    this.nuevaNota.tiempo = this.tiempoActual;
  }
  // ========== DESCARGAS ==========
  descargarManual() {
    if (!this.isBrowser) return;
    // Simular descarga del manual PDF
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Descargando manual PDF',
      message: 'Descargando manual PDF...',
      metadata: {
        avatar: '⏳'
      },
      module: 'audiovisual',
      type: 'info'
    });
    // Simular progreso de descarga
    setTimeout(() => {
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Manual descargado',
        message: 'Manual descargado exitosamente',
        metadata: {
          avatar: '✅'
        },
        module: 'audiovisual',
        type: 'success'
      });
    }, 2000);
  }
  descargarVideo() {
    if (!this.isBrowser || !this.videoPlayer?.nativeElement) return;
    const video = this.videoPlayer.nativeElement;
    const source = video.querySelector('source');
    if (source && source.src) {
      const link = document.createElement('a');
      link.href = source.src;
      link.download = `manual-sigpaz-${new Date().toISOString().split('T')[0]}.mp4`;
      link.click();
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Video descargado',
        message: 'Video descargado exitosamente',
        metadata: {
          avatar: '📥'
        },
        module: 'audiovisual',
        type: 'success'
      });
    }
  }
  descargarManualPDF() {
    this.descargarManual();
  }
  descargarPresentacion() {
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Descargando presentación',
      message: 'Descargando presentación...',
      metadata: {
        avatar: '📊'
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  descargarGuiaRapida() {
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Descargando guía rápida',
      message: 'Descargando guía rápida...',
      metadata: {
        avatar: '⚡'
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  abrirEnlacesUtiles() {
    if (this.isBrowser) {
      window.open('https://sigpaz.com/documentacion', '_blank');
    }
  }
  // ========== PROGRESO Y MARCACIÓN ==========
  marcarComoVisto() {
    if (this.capituloActual) {
      this.capituloActual.progreso = 100;
      this.notificationService.addNotification({
        userId: 'Sistema',
        title: 'Capítulo marcado como visto',
        message: `Capítulo "${this.capituloActual.titulo}" marcado como visto`,
        metadata: {
          avatar: '✅'
        },
        module: 'audiovisual',
        type: 'success'
      });
    }
  }
  marcarComoCompletado() {
    this.porcentajeProgreso = 100;
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Manual completado',
      message: 'Manual completado exitosamente',
      metadata: {
        avatar: '🏆'
      },
      module: 'audiovisual',
      type: 'success'
    });
  }
  // ========== CICLO DE REPRODUCCIÓN ==========
  cicloReproduccion() {
    const modos = ['ninguno', 'capitulo', 'manual'];
    const currentIndex = modos.indexOf(this.modoRepeticion);
    this.modoRepeticion = modos[(currentIndex + 1) % modos.length];
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Modo repetición cambiado',
      message: `Modo repetición: ${this.getModoRepeticionTexto()}`,
      metadata: {
        avatar: this.getModoRepeticionIcon()
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  getModoRepeticionIcon() {
    switch (this.modoRepeticion) {
      case 'capitulo':
        return '🔂';
      case 'manual':
        return '🔁';
      default:
        return '➰';
    }
  }
  getModoRepeticionTexto() {
    switch (this.modoRepeticion) {
      case 'capitulo':
        return 'Repetir capítulo';
      case 'manual':
        return 'Repetir manual';
      default:
        return 'Sin repetición';
    }
  }
  // ========== MODALES ==========
  abrirCapitulosModal() {
    this.showCapitulosModal = true;
  }
  cerrarCapitulosModal() {
    this.showCapitulosModal = false;
  }
  cerrarNotaModal() {
    this.showNotaModal = false;
    this.nuevaNota = {
      titulo: '',
      contenido: '',
      tiempo: 0
    };
  }
  abrirAjustes() {
    this.showAjustesModal = true;
  }
  cerrarAjustes() {
    this.showAjustesModal = false;
  }
  // ========== AJUSTES ==========
  guardarAjustes() {
    if (this.isBrowser && localStorage) {
      try {
        localStorage.setItem('sigpaz_video_settings', JSON.stringify(this.ajustes));
        this.notificationService.addNotification({
          userId: 'Sistema',
          title: 'Ajustes guardados',
          message: 'Ajustes guardados exitosamente',
          metadata: {
            avatar: '💾'
          },
          module: 'audiovisual',
          type: 'success'
        });
        this.cerrarAjustes();
      } catch (error) {
        console.error('Error guardando ajustes:', error);
      }
    }
  }
  cargarAjustesGuardados() {
    if (this.isBrowser && localStorage) {
      try {
        const saved = localStorage.getItem('sigpaz_video_settings');
        if (saved) {
          this.ajustes = {
            ...this.ajustes,
            ...JSON.parse(saved)
          };
          // Aplicar ajustes
          if (this.videoPlayer?.nativeElement) {
            this.videoPlayer.nativeElement.autoplay = this.ajustes.autoplay;
            this.velocidad = this.ajustes.velocidadDefault;
          }
        }
      } catch (error) {
        console.error('Error cargando ajustes:', error);
      }
    }
  }
  restaurarAjustesPredeterminados() {
    this.ajustes = {
      velocidadDefault: 1,
      autoplay: false,
      continuar: true,
      modoRepeticion: 'ninguno',
      idiomaSubtitulos: 'es',
      tamanoSubtitulos: 'medio',
      colorSubtitulos: '#ffffff',
      temaReproductor: 'sistema',
      mostrarControles: 'hover',
      animaciones: true,
      mostrarProgreso: true,
      calidadPreferida: 'auto',
      bufferSize: 30
    };
    this.notificationService.addNotification({
      userId: 'Sistema',
      title: 'Ajustes restaurados',
      message: 'Ajustes restaurados exitosamente',
      metadata: {
        avatar: '🔄'
      },
      module: 'audiovisual',
      type: 'info'
    });
  }
  // ========== AUXILIARES ==========
  esCapituloActual(capitulo) {
    return this.capituloActual === capitulo;
  }
  // ========== INICIALIZACIÓN ==========
  inicializarDatosManual() {
    this.duracionTotal = 3300; // 55 minutos en segundos
    this.capituloActual = this.capitulosManual[0];
    this.capituloActualNumero = 1;
    // Cargar historial de reproducción
    this.cargarHistorialReproduccion();
  }
  startSessionTimer() {
    this.sessionTimerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(1000).subscribe(() => {
      this.sessionSeconds++;
      if (this.isPlaying) {
        this.tiempoVistoSession++;
        this.tiempoVistoTotal++;
        this.porcentajeVisto = this.tiempoVistoTotal / this.duracionTotal * 100;
      }
    });
  }
  cargarHistorialReproduccion() {
    if (this.isBrowser && localStorage) {
      try {
        const saved = localStorage.getItem('sigpaz_video_history');
        if (saved) {
          this.historialReproduccion = JSON.parse(saved);
        }
      } catch (error) {
        console.error('Error cargando historial:', error);
      }
    }
  }
  guardarDatosUsuario() {
    if (this.isBrowser && localStorage) {
      try {
        // Guardar notas
        localStorage.setItem('sigpaz_video_notes', JSON.stringify(this.notasUsuario));
        // Guardar historial
        if (this.tiempoActual > 0) {
          const session = {
            fecha: new Date().toISOString(),
            tiempo: this.tiempoActual,
            porcentaje: this.porcentajeProgreso,
            capitulo: this.capituloActual?.titulo
          };
          this.historialReproduccion.unshift(session);
          if (this.historialReproduccion.length > 10) {
            this.historialReproduccion.pop();
          }
          localStorage.setItem('sigpaz_video_history', JSON.stringify(this.historialReproduccion));
        }
      } catch (error) {
        console.error('Error guardando datos:', error);
      }
    }
  }
  // ========== MÉTODOS DEL SISTEMA ==========
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
        if (this.mostrarAtajos) this.mostrarAtajos = false;
        if (this.showCapitulosModal) this.cerrarCapitulosModal();
        if (this.showNotaModal) this.cerrarNotaModal();
        if (this.showAjustesModal) this.cerrarAjustes();
      }
      // Atajos específicos del reproductor
      if (!this.isSearchOpen && !this.showCapitulosModal && !this.showNotaModal && !this.showAjustesModal) {
        switch (event.key) {
          case ' ':
          case 'k':
          case 'K':
            event.preventDefault();
            this.togglePlay();
            break;
          case 'ArrowLeft':
            event.preventDefault();
            this.saltar(-5);
            break;
          case 'ArrowRight':
            event.preventDefault();
            this.saltar(5);
            break;
          case 'j':
          case 'J':
            event.preventDefault();
            this.saltar(-10);
            break;
          case 'l':
          case 'L':
            event.preventDefault();
            this.saltar(10);
            break;
          case 'f':
          case 'F':
            event.preventDefault();
            this.toggleFullscreen();
            break;
          case 'm':
          case 'M':
            event.preventDefault();
            this.toggleMute();
            break;
          case 'c':
          case 'C':
            event.preventDefault();
            this.toggleDropdown('subtitles');
            break;
          case 't':
          case 'T':
            event.preventDefault();
            this.alternarModoTeatro();
            break;
          case 'n':
          case 'N':
            if (event.ctrlKey) {
              event.preventDefault();
              this.agregarNota();
            }
            break;
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            if (!event.ctrlKey && !event.metaKey) {
              event.preventDefault();
              const percent = parseInt(event.key) * 10;
              const newTime = percent / 100 * this.duracionTotal;
              this.videoPlayer.nativeElement.currentTime = newTime;
            }
            break;
          case 'Home':
            event.preventDefault();
            this.videoPlayer.nativeElement.currentTime = 0;
            break;
          case 'End':
            event.preventDefault();
            this.videoPlayer.nativeElement.currentTime = this.duracionTotal;
            break;
        }
      }
    });
  }
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.search-modal-content') && !target.closest('.search-button') && !target.closest('.sidebar-search')) {
      this.isSearchOpen = false;
    }
    if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-toggle')) {
      this.dropdownAbierto = null;
    }
    if (this.showCapitulosModal && target.closest('.modal-overlay')) {
      this.cerrarCapitulosModal();
    }
  }
  onFullscreenChange() {
    if (this.isBrowser) {
      this.isFullscreen = !!document.fullscreenElement;
    }
  }
  // ========== MÉTODOS DEL HELPER ==========
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
  restoreFromBubble() {
    this.isMinimized = false;
    document.body.classList.remove('minimized-mode');
  }
  closeBubble(event) {
    event.stopPropagation();
    this.showHelpSupport = false;
    this.isMinimized = false;
    document.body.classList.remove('minimized-mode');
  }
  // ========== ALTERNAR AUDIO ==========
  alternarAudio() {
    this.audioActivo = !this.audioActivo;
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.muted = !this.audioActivo;
    }
  }
  // ========== IR A ASIGNACIONES ==========
  irAAsignaciones() {
    // Implementación específica si es necesaria
    console.log('Ir a asignaciones');
  }
  static ɵfac = function AudiovisualComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AudiovisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AudiovisualComponent,
    selectors: [["app-audiovisual"]],
    viewQuery: function AudiovisualComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoPlayer = _t.first);
      }
    },
    hostBindings: function AudiovisualComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("fullscreenchange", function AudiovisualComponent_fullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
      }
    },
    decls: 129,
    vars: 54,
    consts: [["videoPlayer", ""], [1, "audiovisual-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "audiovisual-header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "video-container"], [1, "video-player-wrapper"], ["class", "video-loading-overlay", 4, "ngIf"], ["class", "manual-welcome", 4, "ngIf"], ["poster", "/videos/manual-sigpaz-thumbnail.png", 1, "video-element", 3, "click", "timeupdate", "loadedmetadata", "volumechange", "play", "pause", "ended", "error"], ["src", "/videos/manual-sigpaz.mp4", "type", "video/mp4"], ["kind", "subtitles", 3, "src", "srclang", "label", "default", 4, "ngFor", "ngForOf"], [1, "video-controls-overlay", 3, "mouseenter", "mouseleave", "mousemove"], [1, "progress-bar-main", 3, "click"], [1, "progress-timeline", 3, "click"], [1, "progress-background"], [1, "progress-played"], [1, "progress-buffer"], [1, "progress-thumb"], [1, "progress-chapters"], ["class", "progress-chapter-marker", 3, "left", "title", "click", 4, "ngFor", "ngForOf"], [1, "time-display"], [1, "time-current"], [1, "time-separator"], [1, "time-total"], ["class", "chapter-name", 4, "ngIf"], [1, "controls-bottom"], [1, "controls-left"], ["title", "Play/Pause", 1, "control-btn", "large", 3, "click"], ["title", "Retroceder 30 segundos", 1, "control-btn", 3, "click"], [1, "btn-text"], ["title", "Adelantar 30 segundos", 1, "control-btn", 3, "click"], [1, "volume-control"], ["title", "Silenciar", 1, "control-btn", 3, "click"], [1, "volume-slider-container"], ["type", "range", "min", "0", "max", "1", "step", "0.01", 1, "volume-slider", 3, "ngModelChange", "input", "ngModel"], [1, "controls-center"], [1, "speed-control", "dropdown"], ["title", "Velocidad de reproducci\u00F3n", 1, "control-btn", "dropdown-toggle", 3, "click"], [1, "speed-value"], [1, "dropdown-arrow"], ["class", "dropdown-menu", 4, "ngIf"], [1, "subtitles-control", "dropdown"], ["title", "Subt\u00EDtulos", 1, "control-btn", "dropdown-toggle", 3, "click"], [1, "subtitles-label"], [1, "quality-control", "dropdown"], ["title", "Calidad del video", 1, "control-btn", "dropdown-toggle", 3, "click"], [1, "quality-label"], [1, "controls-right"], [1, "chapters-control", "dropdown"], ["title", "Ir a cap\u00EDtulo", 1, "control-btn", "dropdown-toggle", 3, "click"], [1, "chapters-label"], ["class", "dropdown-menu dropdown-menu-right", 4, "ngIf"], ["title", "Pantalla completa", 1, "control-btn", 3, "click"], [1, "more-controls", "dropdown"], ["title", "M\u00E1s opciones", 1, "control-btn", "dropdown-toggle", 3, "click"], ["class", "shortcuts-overlay", 3, "click", 4, "ngIf"], ["class", "skip-indicator", 3, "skip-back", 4, "ngIf"], ["class", "chapter-notification", 4, "ngIf"], ["class", "manual-sidebar", 4, "ngIf"], ["class", "progress-bar-bottom", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "isSidebarCollapsed", "isDarkTheme"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el sistema...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "video-loading-overlay"], [1, "loading-content"], [1, "loading-spinner"], [1, "loading-text"], ["class", "loading-progress", 4, "ngIf"], [1, "loading-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "manual-welcome"], [1, "welcome-content"], [1, "welcome-icon"], [1, "welcome-features"], [1, "feature"], [1, "feature-icon"], [1, "feature-text"], ["kind", "subtitles", 3, "src", "srclang", "label", "default"], [1, "progress-chapter-marker", 3, "click", "title"], [1, "chapter-tooltip"], [1, "chapter-name"], [1, "dropdown-menu"], [1, "dropdown-header"], ["class", "dropdown-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"], [1, "speed-option-icon"], [1, "speed-option-text"], [1, "sub-option-icon"], [1, "sub-option-text"], [1, "dropdown-divider"], [1, "quality-option-icon"], [1, "quality-option-text"], [1, "quality-option-size"], [1, "dropdown-menu", "dropdown-menu-right"], [1, "chapters-list-dropdown"], ["class", "chapter-dropdown-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "chapter-dropdown-item", 3, "click"], [1, "chapter-dropdown-time"], [1, "chapter-dropdown-info"], [1, "chapter-dropdown-title"], ["class", "chapter-dropdown-desc", 4, "ngIf"], [1, "chapter-dropdown-duration"], [1, "chapter-dropdown-desc"], [1, "dropdown-icon"], [1, "dropdown-text"], [1, "dropdown-time"], [1, "shortcuts-overlay", 3, "click"], [1, "shortcuts-content", 3, "click"], [1, "shortcuts-header"], [1, "shortcuts-icon"], [1, "btn-close-shortcuts", 3, "click"], [1, "shortcuts-grid"], [1, "shortcut-category"], [1, "shortcut-item"], [1, "skip-indicator"], [1, "skip-icon"], [1, "skip-amount"], [1, "chapter-notification"], [1, "notification-content"], [1, "notification-icon"], [1, "notification-text"], [1, "notification-title"], ["class", "notification-desc", 4, "ngIf"], [1, "notification-desc"], [1, "manual-sidebar"], [1, "sidebar-tabs"], [1, "tab-btn", 3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "manual-toc"], [1, "toc-list"], ["class", "toc-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "toc-summary"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "toc-item", 3, "click"], [1, "toc-number"], [1, "toc-info"], [1, "toc-title"], [1, "toc-meta"], [1, "toc-time"], [1, "toc-duration"], ["class", "toc-progress", 4, "ngIf"], [1, "toc-icon"], [1, "toc-progress"], [1, "progress-bar", "small"], [1, "progress-text"], [1, "notes-container"], [1, "notes-header"], [1, "notes-list"], ["class", "note-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "notes-empty", 4, "ngIf"], [1, "note-item", 3, "click"], [1, "note-time"], [1, "note-content"], [1, "note-title"], [1, "note-text"], [1, "note-date"], [1, "note-actions"], [1, "btn-icon-small", 3, "click"], [1, "notes-empty"], [1, "empty-icon"], [1, "resources-container"], [1, "resources-list"], [1, "resource-item", 3, "click"], [1, "resource-icon"], [1, "resource-info"], [1, "resource-title"], [1, "resource-desc"], [1, "resource-size"], [1, "resource-action"], [1, "resources-info"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "progress-bar-bottom"], [1, "progress-container"], [1, "progress-info"], [1, "progress-title"], [1, "progress-icon"], [1, "progress-stats"], [1, "stat"], [1, "progress-bar-full"], [1, "progress-track"], [1, "chapter-markers"], ["class", "chapter-marker", 3, "left", "title", 4, "ngFor", "ngForOf"], [1, "progress-time"], [1, "progress-actions"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary btn-success", 4, "ngIf"], [1, "chapter-marker", 3, "title"], [1, "btn", "btn-primary", "btn-success"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-icon"], [1, "modal-close", 3, "click"], [1, "modal-content"], [1, "chapters-modal-grid"], ["class", "chapter-modal-card", 3, "current", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "chapters-summary"], [1, "summary-card"], [1, "summary-icon"], [1, "summary-content"], [1, "chapter-modal-card", 3, "click"], [1, "chapter-modal-header"], [1, "chapter-modal-number"], [1, "chapter-modal-time"], [1, "chapter-modal-title"], ["class", "chapter-modal-desc", 4, "ngIf"], [1, "chapter-modal-footer"], [1, "chapter-modal-duration"], ["class", "chapter-modal-progress", 4, "ngIf"], [1, "chapter-modal-desc"], [1, "chapter-modal-progress"], [1, "progress-bar", "mini"], [1, "modal-container"], [3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["type", "text", "name", "tituloNota", "required", "", "placeholder", "Ej: Configuraci\u00F3n inicial del sistema", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "time-input"], ["type", "button", 1, "btn", "btn-small", 3, "click"], ["rows", "5", "name", "contenidoNota", "placeholder", "Escribe tus notas aqu\u00ED...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "settings-tabs"], [1, "settings-content"], ["class", "settings-section", 4, "ngIf"], [1, "settings-footer"], [1, "settings-section"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkbox-container"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "checkbox-label"], ["value", "ninguno"], ["value", "capitulo"], ["value", "manual"], [3, "value"], ["value", "pequeno"], ["value", "medio"], ["value", "grande"], [1, "color-options"], ["class", "color-option", 3, "background", "active", "click", 4, "ngFor", "ngForOf"], [1, "color-option", 3, "click"], ["value", "sistema"], ["value", "claro"], ["value", "oscuro"], [1, "radio-group"], [1, "radio-container"], ["type", "radio", "name", "mostrarControles", "value", "siempre", 3, "ngModelChange", "ngModel"], [1, "radiomark"], [1, "radio-label"], ["type", "radio", "name", "mostrarControles", "value", "hover", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "mostrarControles", "value", "ocultar", 3, "ngModelChange", "ngModel"]],
    template: function AudiovisualComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "app-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function AudiovisualComponent_Template_app_menu_toggleSidebar_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onToggleSidebar());
        })("toggleHelpSupport", function AudiovisualComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onToggleHelpSupport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 3)(3, "app-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleNotifications", function AudiovisualComponent_Template_app_header_toggleNotifications_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onToggleNotifications());
        })("toggleUserMenu", function AudiovisualComponent_Template_app_header_toggleUserMenu_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onToggleUserMenu());
        })("markAllAsRead", function AudiovisualComponent_Template_app_header_markAllAsRead_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onMarkAllAsRead());
        })("openSearchModal", function AudiovisualComponent_Template_app_header_openSearchModal_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onOpenSearchModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AudiovisualComponent_div_4_Template, 13, 6, "div", 5)(5, AudiovisualComponent_div_5_Template, 5, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83D\uDCD8 Manual Audiovisual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reproductor para visualizar el video del manual de usuario SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.alternarModoTeatro());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.abrirCapitulosModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\uD83D\uDCD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ver Cap\u00EDtulos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.mostrarAtajos = true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u2328\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Atajos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AudiovisualComponent_div_27_Template, 6, 1, "div", 17)(28, AudiovisualComponent_div_28_Template, 28, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "video", 19, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_video_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.togglePlay());
        })("timeupdate", function AudiovisualComponent_Template_video_timeupdate_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.actualizarTiempo());
        })("loadedmetadata", function AudiovisualComponent_Template_video_loadedmetadata_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onMetadataLoaded());
        })("volumechange", function AudiovisualComponent_Template_video_volumechange_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.actualizarVolumen());
        })("play", function AudiovisualComponent_Template_video_play_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onPlay());
        })("pause", function AudiovisualComponent_Template_video_pause_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onPause());
        })("ended", function AudiovisualComponent_Template_video_ended_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onVideoEnd());
        })("error", function AudiovisualComponent_Template_video_error_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onVideoError($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "source", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AudiovisualComponent_track_32_Template, 1, 4, "track", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Tu navegador no soporta la reproducci\u00F3n de video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AudiovisualComponent_Template_div_mouseenter_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.mostrarControles());
        })("mouseleave", function AudiovisualComponent_Template_div_mouseleave_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.ocultarControlesTimer());
        })("mousemove", function AudiovisualComponent_Template_div_mousemove_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.resetOcultarControles());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_div_click_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_div_click_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saltarA($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 25)(38, "div", 26)(39, "div", 27)(40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AudiovisualComponent_div_42_Template, 3, 4, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31)(44, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "tiempoFormato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "tiempoFormato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AudiovisualComponent_span_52_Template, 2, 1, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 36)(54, "div", 37)(55, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.togglePlay());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saltar(-30));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u23EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "30s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.saltar(30));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u23E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "30s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42)(69, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_69_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleMute());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44)(73, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AudiovisualComponent_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.volumen, $event) || (ctx.volumen = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AudiovisualComponent_Template_input_input_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.cambiarVolumen($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46)(75, "div", 47)(76, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_76_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleDropdown("speed"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u26A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AudiovisualComponent_div_83_Template, 4, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 52)(85, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleDropdown("subtitles"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\uD83D\uDCDD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AudiovisualComponent_div_92_Template, 10, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 55)(94, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_94_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleDropdown("quality"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\uD83C\uDFAF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AudiovisualComponent_div_101_Template, 10, 1, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 58)(103, "div", 59)(104, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_104_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleDropdown("chapters"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\uD83D\uDCD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Cap\u00EDtulos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AudiovisualComponent_div_111_Template, 5, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_112_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleFullscreen());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 64)(116, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudiovisualComponent_Template_button_click_116_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleDropdown("more"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u22EF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AudiovisualComponent_div_119_Template, 38, 5, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, AudiovisualComponent_div_120_Template, 84, 0, "div", 66)(121, AudiovisualComponent_div_121_Template, 5, 5, "div", 67)(122, AudiovisualComponent_div_122_Template, 8, 3, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AudiovisualComponent_div_123_Template, 11, 9, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, AudiovisualComponent_div_124_Template, 31, 18, "div", 70)(125, AudiovisualComponent_div_125_Template, 40, 8, "div", 71)(126, AudiovisualComponent_div_126_Template, 34, 7, "div", 71)(127, AudiovisualComponent_div_127_Template, 27, 11, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "app-footer", 72);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx.isDarkTheme)("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modoTeatro ? "\uD83D\uDCF1" : "\uD83C\uDFAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.modoTeatro ? "Modo Normal" : "Modo Teatro", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("teatro-mode", ctx.modoTeatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargandoVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargandoVideo && !ctx.videoCargado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subtitulosDisponibles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.ocultarControles && ctx.isPlaying);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.porcentajeProgreso + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.porcentajeBuffered + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.porcentajeProgreso + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.capitulosManual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 50, ctx.tiempoActual));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 52, ctx.duracionTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.capituloActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isPlaying ? "\u23F8\uFE0F" : "\u25B6\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isMuted ? "\uD83D\uDD07" : ctx.volumen > 0.5 ? "\uD83D\uDD0A" : "\uD83D\uDD09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.volumen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.velocidad, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownAbierto === "speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.subtituloActivo == null ? null : ctx.subtituloActivo.idioma) || "Sin subt\u00EDtulos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownAbierto === "subtitles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.calidadActual == null ? null : ctx.calidadActual.nombre) || "Auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownAbierto === "quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownAbierto === "chapters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isFullscreen ? "\uD83D\uDDD9" : "\u26F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownAbierto === "more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarAtajos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarSalto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mostrarNotificacionCapitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.modoTeatro && ctx.videoCargado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoCargado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCapitulosModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNotaModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAjustesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed)("isDarkTheme", ctx.isDarkTheme);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_6__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_9__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _services_tiempo_formato_pipe__WEBPACK_IMPORTED_MODULE_11__.TiempoFormatoPipe // PIPE AÑADIDO A LOS IMPORTS
    ],
    styles: ["@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_iconFloat {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_welcomeSlide {\n  from {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_dropdownSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_skipBounce {\n  0%,\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    transform: translateY(-50px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_sectionFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_tabActive {\n  from {\n    transform: translateY(-5px);\n    opacity: 0.7;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.audiovisual-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 150vh;\n  padding: 24px;\n  position: relative;\n  transition: margin-left 0.3s;\n  margin-left: 320px;\n  margin-top: 70px;\n}\n.audiovisual-container.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.audiovisual-header[_ngcontent-%COMP%] {\n  background: var(--gradient-header);\n  border-bottom: 1px solid var(--border-color);\n  padding: 24px 32px;\n  border-radius: 15px;\n  margin-bottom: 24px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_slideInDown 0.5s ease-out;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 8px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  border-color: var(--text-secondary);\n  transform: translateY(-2px);\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s;\n}\n.audiovisual-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n}\n.manual-info-bar[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 20px 24px;\n  margin-bottom: 20px;\n  border: 1px solid var(--border-color);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-title[_ngcontent-%COMP%]   .manual-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  animation: _ngcontent-%COMP%_iconFloat 3s ease-in-out infinite;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.8;\n}\n.manual-info-bar[_ngcontent-%COMP%]   .manual-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .meta-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.video-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding: 0 24px;\n  flex: 1;\n  transition: all 0.3s;\n}\n.video-container.teatro-mode[_ngcontent-%COMP%]   .video-player-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.video-container.teatro-mode[_ngcontent-%COMP%]   .manual-sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1200px) {\n  .video-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%] {\n  flex: 2;\n  position: relative;\n  background: #000000;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_scaleIn 0.5s ease-out;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  max-width: 300px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  margin: 0 auto 20px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary);\n  transition: width 0.3s ease;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 117, 252, 0.9));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9;\n  padding: 40px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 40px;\n  max-width: 500px;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_welcomeSlide 0.6s ease-out;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .welcome-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  line-height: 1.5;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .welcome-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .welcome-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .welcome-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .welcome-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  text-align: center;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .manual-welcome[_ngcontent-%COMP%]   .welcome-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-element[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: black;\n  cursor: pointer;\n  object-fit: contain;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);\n  padding: 20px;\n  z-index: 5;\n  transition: opacity 0.3s ease;\n  opacity: 1;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]:hover {\n  opacity: 1 !important;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n  cursor: pointer;\n  margin-bottom: 8px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-played[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: var(--primary);\n  border-radius: 3px;\n  transition: width 0.1s linear;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-buffer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  transition: width 0.1s linear;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  background: var(--primary);\n  border-radius: 50%;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.video-controls-overlay[_ngcontent-%COMP%]:hover   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-thumb[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%]   .progress-chapter-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  width: 4px;\n  height: 14px;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transform: translateX(-50%);\n  border-radius: 2px;\n  transition: all 0.2s ease;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%]   .progress-chapter-marker[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  height: 18px;\n  top: -6px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%]   .progress-chapter-marker[_ngcontent-%COMP%]:hover   .chapter-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-10px);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%]   .progress-chapter-marker[_ngcontent-%COMP%]   .chapter-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(5px);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .progress-timeline[_ngcontent-%COMP%]   .progress-chapters[_ngcontent-%COMP%]   .progress-chapter-marker[_ngcontent-%COMP%]   .chapter-tooltip[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%]   .time-separator[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%]   .chapter-name[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-weight: 500;\n  opacity: 0.8;\n  font-size: 13px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-left[_ngcontent-%COMP%], \n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-center[_ngcontent-%COMP%], \n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-left[_ngcontent-%COMP%], \n   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-center[_ngcontent-%COMP%], \n   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .controls-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.1);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 20px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 4px;\n  font-weight: 500;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  width: auto;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .speed-value[_ngcontent-%COMP%], \n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .subtitles-label[_ngcontent-%COMP%], \n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .quality-label[_ngcontent-%COMP%], \n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .chapters-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  min-width: 60px;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .speed-value[_ngcontent-%COMP%], \n   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .subtitles-label[_ngcontent-%COMP%], \n   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .quality-label[_ngcontent-%COMP%], \n   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .chapters-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    min-width: auto;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .control-btn.dropdown-toggle[_ngcontent-%COMP%]   .dropdown-arrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%] {\n  width: 80px;\n  transform-origin: left;\n  transition: all 0.3s;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%]:hover, \n.volume-control[_ngcontent-%COMP%]:hover   .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]   .volume-slider-container[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n  border: none;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .current-time-display[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n  min-width: 100px;\n}\n@media (max-width: 768px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .current-time-display[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .current-time-display[_ngcontent-%COMP%]   .current-chapter[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-size: 12px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .chapter-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  font-size: 14px;\n  color: white;\n}\n@media (max-width: 768px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .chapter-display[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .chapter-display[_ngcontent-%COMP%]   .chapter-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .controls-bottom[_ngcontent-%COMP%]   .chapter-display[_ngcontent-%COMP%]   .chapter-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  max-width: 800px;\n  width: 90%;\n  max-height: 80vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-header[_ngcontent-%COMP%]   .btn-close-shortcuts[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-header[_ngcontent-%COMP%]   .btn-close-shortcuts[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--bg-secondary);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%]   .shortcut-category[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border-color);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%]   .shortcut-category[_ngcontent-%COMP%]   .shortcut-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding: 8px 0;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%]   .shortcut-category[_ngcontent-%COMP%]   .shortcut-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%]   .shortcut-category[_ngcontent-%COMP%]   .shortcut-item[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-family: 'Courier New', monospace;\n  font-size: 12px;\n  font-weight: 600;\n  border: 1px solid var(--border-color);\n  min-width: 60px;\n  text-align: center;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .shortcuts-overlay[_ngcontent-%COMP%]   .shortcuts-content[_ngcontent-%COMP%]   .shortcuts-grid[_ngcontent-%COMP%]   .shortcut-category[_ngcontent-%COMP%]   .shortcut-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  text-align: right;\n  flex: 1;\n  margin-left: 16px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .skip-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 16px 24px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 24px;\n  font-weight: 600;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_skipBounce 0.5s ease-out;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .skip-indicator.skip-back[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.7);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .skip-indicator[_ngcontent-%COMP%]   .skip-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .skip-indicator[_ngcontent-%COMP%]   .skip-amount[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 12px;\n  padding: 16px;\n  max-width: 400px;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 4px;\n}\n.video-player-wrapper[_ngcontent-%COMP%]   .chapter-notification[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%]   .notification-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.4;\n}\n.manual-sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  background: var(--card-bg);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  animation: _ngcontent-%COMP%_slideInRight 0.5s ease-out;\n}\n@media (max-width: 1200px) {\n  .manual-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.manual-sidebar[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--bg-tertiary);\n  padding: 4px;\n  border-bottom: 1px solid var(--border-color);\n}\n@media (max-width: 768px) {\n  .manual-sidebar[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-sidebar[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 6px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--primary);\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 20px 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: 1px solid transparent;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  border-color: var(--border-color);\n  transform: translateX(5px);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-color: var(--primary-light);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item.active[_ngcontent-%COMP%]   .toc-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-number[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-progress[_ngcontent-%COMP%]   .progress-bar.small[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: var(--border-color);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-progress[_ngcontent-%COMP%]   .progress-bar.small[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary);\n  transition: width 0.3s ease;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-info[_ngcontent-%COMP%]   .toc-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  min-width: 50px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-list[_ngcontent-%COMP%]   .toc-item[_ngcontent-%COMP%]   .toc-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-summary[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .manual-toc[_ngcontent-%COMP%]   .toc-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-header[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: 1px solid var(--border-color);\n  background: var(--card-bg);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-color: var(--primary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-color: var(--primary-light);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-time[_ngcontent-%COMP%] {\n  font-family: 'Courier New', monospace;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%]   .note-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%]   .note-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%]   .note-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-tertiary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-actions[_ngcontent-%COMP%]   .btn-icon-small[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-list[_ngcontent-%COMP%]   .note-item[_ngcontent-%COMP%]   .note-actions[_ngcontent-%COMP%]   .btn-icon-small[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .notes-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n  width: 100%;\n  justify-content: center;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .notes-container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 20px 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: 1px solid var(--border-color);\n  background: var(--card-bg);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-color: var(--primary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 50%;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-info[_ngcontent-%COMP%]   .resource-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-info[_ngcontent-%COMP%]   .resource-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 4px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-info[_ngcontent-%COMP%]   .resource-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-tertiary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-action[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-secondary);\n  transition: all 0.3s;\n}\n.resource-item[_ngcontent-%COMP%]:hover   .manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-list[_ngcontent-%COMP%]   .resource-item[_ngcontent-%COMP%]   .resource-action[_ngcontent-%COMP%] {\n  color: var(--primary);\n  transform: scale(1.2);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .resources-container[_ngcontent-%COMP%]   .resources-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-bar-bottom[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-top: 1px solid var(--border-color);\n  padding: 16px 24px;\n  margin-top: 24px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n  }\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%]   .progress-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary);\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 480px) {\n  .progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: '\u2022';\n  margin-left: 8px;\n  opacity: 0.5;\n}\n@media (max-width: 480px) {\n  .progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:not(:last-child)::after {\n    display: none;\n  }\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 0;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 8px;\n  background: var(--border-color);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--gradient-primary);\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .chapter-markers[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%]   .chapter-markers[_ngcontent-%COMP%]   .chapter-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: rgba(0, 0, 0, 0.3);\n  transform: translateX(-50%);\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar-full[_ngcontent-%COMP%]   .progress-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-actions[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-actions[_ngcontent-%COMP%]   .btn-small.btn-success[_ngcontent-%COMP%] {\n  background: var(--gradient-success);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.progress-bar-bottom[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-actions[_ngcontent-%COMP%]   .btn-small.btn-success[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  background: rgba(30, 30, 30, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  min-width: 200px;\n  z-index: 100;\n  margin-bottom: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_dropdownSlide 0.2s ease-out;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu.dropdown-menu-right[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 4px 0;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  width: 100%;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n  transition: all 0.3s;\n  text-align: left;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: var(--primary);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .speed-option-icon[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .sub-option-icon[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .quality-option-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.8;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-text[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .speed-option-text[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .sub-option-text[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .quality-option-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-time[_ngcontent-%COMP%], \n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .quality-option-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.6;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 8px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  border-left: 3px solid var(--primary);\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]   .chapter-dropdown-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  min-width: 40px;\n  font-family: 'Courier New', monospace;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]   .chapter-dropdown-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]   .chapter-dropdown-info[_ngcontent-%COMP%]   .chapter-dropdown-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 2px;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]   .chapter-dropdown-info[_ngcontent-%COMP%]   .chapter-dropdown-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.3;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .chapters-list-dropdown[_ngcontent-%COMP%]   .chapter-dropdown-item[_ngcontent-%COMP%]   .chapter-dropdown-duration[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.5);\n  min-width: 40px;\n  text-align: right;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease;\n}\n.modal-container.modal-large[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 32px;\n  overflow-y: auto;\n  max-height: calc(90vh - 100px);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px 32px;\n  border-top: 1px solid var(--border-color);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  border-color: var(--text-secondary);\n  transform: translateY(-2px);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 15px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n@media (max-width: 480px) {\n  .audiovisual-header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .audiovisual-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .audiovisual-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .manual-info-bar[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .video-container[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    gap: 16px;\n  }\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .video-player-wrapper[_ngcontent-%COMP%]   .video-controls-overlay[_ngcontent-%COMP%]   .progress-bar-main[_ngcontent-%COMP%]   .time-display[_ngcontent-%COMP%]   .chapter-name[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .manual-sidebar[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .progress-bar-bottom[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--modal-overlay);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-md);\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n.bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--gradient-primary);\n  filter: brightness(1.1);\n}\n@media (max-width: 1024px) {\n  .modal-content[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hdWRpb3Zpc3VhbC9wYWdlcy9hdWRpb3Zpc3VhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQkE7RUFDRTtJQUFPLFVBQUE7RUF4QlA7RUF5QkE7SUFBSyxVQUFBO0VBdEJMO0FBQ0Y7QUF3QkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQXRCRjtFQXdCQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQXRCRjtBQUNGO0FBeUJBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUF2QkY7RUF5QkE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUF2QkY7QUFDRjtBQTBCQTtFQUNFOztJQUFXLHdCQUFBO0VBdEJYO0VBdUJBO0lBQU0sNEJBQUE7RUFwQk47QUFDRjtBQXNCQTtFQUNFOztJQUFXLG1CQUFBO0VBbEJYO0VBbUJBO0lBQU0scUJBQUE7RUFoQk47QUFDRjtBQWtCQTtFQUNFO0lBQUsseUJBQUE7RUFmTDtBQUNGO0FBaUJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFmRjtFQWlCQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQWZGO0FBQ0Y7QUFrQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQWhCRjtFQWtCQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWhCRjtBQUNGO0FBbUJBO0VBQ0U7O0lBQ0UseUNBQUE7RUFoQkY7RUFrQkE7SUFDRSwyQ0FBQTtFQWhCRjtBQUNGO0FBbUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFqQkY7RUFtQkE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFqQkY7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBbEJGO0VBb0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBbEJGO0FBQ0Y7QUFxQkE7RUFDRTtJQUNFLHdDQUFBO0lBQ0EsVUFBQTtFQW5CRjtFQXFCQTtJQUNFLGlDQUFBO0lBQ0EsVUFBQTtF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QTRVQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQTFVRjtFQTZVQTtJQUNFLGdCQUFBO0lBQ0EsT0FBQTtFQTNVRjtFQThVQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUE1VUY7RUErVUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBN1VGO0VBZ1ZBO0lBQ0UsZUFBQTtFQTlVRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBUklBQkxFUyBFU1BFQ8ODwo1GSUNBUyBQQVJBIFJFUFJPRFVDVE9SIEFVRElPVklTVUFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBWYXJpYWJsZXMgZGUgdGllbXBvIHkgdHJhbnNpY2lvbmVzXG5AdHJhbnNpdGlvbi1zcGVlZDogMC4zcztcbkB0cmFuc2l0aW9uLWVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuLy8gVmFyaWFibGVzIGRlIGRpc2XDg8KxbyBlc3BlY8ODwq1maWNhc1xuQHBsYXllci1ib3JkZXItcmFkaXVzOiAxMnB4O1xuQHBsYXllci1jb250cm9scy1oZWlnaHQ6IDYwcHg7XG5AcHJvZ3Jlc3MtYmFyLWhlaWdodDogNnB4O1xuQHNpZGViYXItd2lkdGg6IDMyMHB4O1xuQHNpZGViYXItY29sbGFwc2VkLXdpZHRoOiA5MHB4O1xuXG4vLyBWYXJpYWJsZXMgZGUgc29tYnJhXG5AYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuQGJveC1zaGFkb3ctaG92ZXI6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbi8vIFZhcmlhYmxlcyBkZSBhbmltYWNpw4PCs25cbkBmYWRlLWR1cmF0aW9uOiAwLjNzO1xuQHNsaWRlLWR1cmF0aW9uOiAwLjVzO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVMgQkFTRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaWNvbkZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHdlbGNvbWVTbGlkZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRyb3Bkb3duU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBza2lwQm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4yKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KSBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNlY3Rpb25GYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGFiQWN0aXZlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFTCBSRVBST0RVQ1RPUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hdWRpb3Zpc3VhbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxNTB2aDtcbiAgcGFkZGluZzogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgbWFyZ2luLWxlZnQ6IEBzaWRlYmFyLXdpZHRoO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiBAc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBERUwgTcODwpNEVUxPIEFVRElPVklTVUFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmF1ZGlvdmlzdWFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWhlYWRlcik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICBhbmltYXRpb246IHNsaWRlSW5Eb3duIDAuNXMgZWFzZS1vdXQ7XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgLnBhZ2UtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLnBhZ2Utc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5idG4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBAdHJhbnNpdGlvbi1zcGVlZDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciAuYnRuLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFSUkEgREUgSU5GT1JNQUNJw4PCk04gREVMIE1BTlVBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tYW51YWwtaW5mby1iYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogQHBsYXllci1ib3JkZXItcmFkaXVzO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2Utb3V0O1xuXG4gIC5tYW51YWwtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIC5tYW51YWwtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBhbmltYXRpb246IGljb25GbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hbnVhbC1tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjRweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAubWV0YS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAubWV0YS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG5cbiAgICAgIC5tZXRhLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREUgVklERU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udmlkZW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGZsZXg6IDE7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAmLnRlYXRyby1tb2RlIHtcbiAgICAudmlkZW8tcGxheWVyLXdyYXBwZXIge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAubWFudWFsLXNpZGViYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVQUk9EVUNUT1IgREUgVklERU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udmlkZW8tcGxheWVyLXdyYXBwZXIge1xuICBmbGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IEBwbGF5ZXItYm9yZGVyLXJhZGl1cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogQGJveC1zaGFkb3ctaG92ZXI7XG4gIGFuaW1hdGlvbjogc2NhbGVJbiAwLjVzIGVhc2Utb3V0O1xuXG4gIC52aWRlby1sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG5cbiAgICAubG9hZGluZy1jb250ZW50IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG5cbiAgICAgIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG5cbiAgICAgIC5sb2FkaW5nLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2FkaW5nLXByb2dyZXNzIHtcbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hbnVhbC13ZWxjb21lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjkpLCByZ2JhKDM3LCAxMTcsIDI1MiwgMC45KSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDk7XG4gICAgcGFkZGluZzogNDBweDtcblxuICAgIC53ZWxjb21lLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiBAcGxheWVyLWJvcmRlci1yYWRpdXM7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGFuaW1hdGlvbjogd2VsY29tZVNsaWRlIDAuNnMgZWFzZS1vdXQ7XG5cbiAgICAgIC53ZWxjb21lLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG5cbiAgICAgIC53ZWxjb21lLWZlYXR1cmVzIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gICAgICAgIC5mZWF0dXJlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgICAgICAgLmZlYXR1cmUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZlYXR1cmUtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogMTRweCAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC52aWRlby1lbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAudmlkZW8tY29udHJvbHMtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC44KSwgdHJhbnNwYXJlbnQpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IEB0cmFuc2l0aW9uLXNwZWVkIGVhc2U7XG4gICAgb3BhY2l0eTogMTtcblxuICAgICYuaGlkZGVuIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyLW1haW4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLnByb2dyZXNzLXRpbWVsaW5lIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IEBwcm9ncmVzcy1iYXItaGVpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgLnByb2dyZXNzLWJhY2tncm91bmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1wbGF5ZWQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWJ1ZmZlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLXRodW1iIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgLnZpZGVvLWNvbnRyb2xzLW92ZXJsYXk6aG92ZXIgJiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jaGFwdGVycyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICAgIC5wcm9ncmVzcy1jaGFwdGVyLW1hcmtlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgIHRvcDogLTZweDtcblxuICAgICAgICAgICAgICAuY2hhcHRlci10b29sdGlwIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hhcHRlci10b29sdGlwIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcblxuICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGltZS1kaXNwbGF5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcblxuICAgICAgICAudGltZS1zZXBhcmF0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFwdGVyLW5hbWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250cm9scy1ib3R0b20ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5jb250cm9scy1sZWZ0LFxuICAgICAgLmNvbnRyb2xzLWNlbnRlcixcbiAgICAgIC5jb250cm9scy1yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2wtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmxhcmdlIHtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDZweDtcblxuICAgICAgICAgIC5zcGVlZC12YWx1ZSxcbiAgICAgICAgICAuc3VidGl0bGVzLWxhYmVsLFxuICAgICAgICAgIC5xdWFsaXR5LWxhYmVsLFxuICAgICAgICAgIC5jaGFwdGVycy1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRyb3Bkb3duLWFycm93IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnZvbHVtZS1jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgLnZvbHVtZS1zbGlkZXItY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZDtcblxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgLnZvbHVtZS1jb250cm9sOmhvdmVyICYge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52b2x1bWUtc2xpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gICAgICAgICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jdXJyZW50LXRpbWUtZGlzcGxheSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1cnJlbnQtY2hhcHRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2hhcHRlci1kaXNwbGF5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFwdGVyLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGFwdGVyLXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNob3J0Y3V0cy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAgIC5zaG9ydGN1dHMtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBwbGF5ZXItYm9yZGVyLXJhZGl1cztcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWF4LWhlaWdodDogODB2aDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBhbmltYXRpb246IHNjYWxlSW4gMC4zcyBlYXNlO1xuXG4gICAgICAuc2hvcnRjdXRzLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWNsb3NlLXNob3J0Y3V0cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zaG9ydGN1dHMtZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvcnRjdXQtY2F0ZWdvcnkge1xuICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hvcnRjdXQtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2JkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNraXAtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBhbmltYXRpb246IHNraXBCb3VuY2UgMC41cyBlYXNlLW91dDtcblxuICAgICYuc2tpcC1iYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuNyk7XG4gICAgfVxuXG4gICAgLnNraXAtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuXG4gICAgLnNraXAtYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG4gIH1cblxuICAuY2hhcHRlci1ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiBAcGxheWVyLWJvcmRlci1yYWRpdXM7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IDAuM3MgZWFzZS1vdXQ7XG5cbiAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAubm90aWZpY2F0aW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vdGlmaWNhdGlvbi1kZXNjIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQU5FTCBMQVRFUkFMIERFTCBNQU5VQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWFudWFsLXNpZGViYXIge1xuICB3aWR0aDogQHNpZGViYXItd2lkdGg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiBAcGxheWVyLWJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICBhbmltYXRpb246IHNsaWRlSW5SaWdodCAwLjVzIGVhc2Utb3V0O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zaWRlYmFyLXRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAudGFiLWJ0biB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJveC1zaGFkb3c6IEBib3gtc2hhZG93O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5tYW51YWwtdG9jIHtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgfVxuXG4gICAgICAudG9jLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAudG9jLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XG5cbiAgICAgICAgICAgIC50b2MtaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b2MtbnVtYmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvYy1pbmZvIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgICAgIC50b2MtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b2MtbWV0YSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9jLXByb2dyZXNzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAgICAgICAucHJvZ3Jlc3MtYmFyLnNtYWxsIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9jLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudG9jLXN1bW1hcnkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICAgLnN1bW1hcnktaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm90ZXMtY29udGFpbmVyIHtcbiAgICAgIC5ub3Rlcy1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tc21hbGwge1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubm90ZXMtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAubm90ZS1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm90ZS10aW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vdGUtY29udGVudCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgICAgICAubm90ZS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vdGUtdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubm90ZS1kYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vdGUtYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgICAgIC5idG4taWNvbi1zbWFsbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ub3Rlcy1lbXB0eSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuXG4gICAgICAgIC5lbXB0eS1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1OSwgMTMwLCAyNDYsIDAuMyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc291cmNlcy1jb250YWluZXIge1xuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5yZXNvdXJjZXMtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgICAucmVzb3VyY2UtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogQGJveC1zaGFkb3c7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZXNvdXJjZS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZXNvdXJjZS1pbmZvIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgICAgIC5yZXNvdXJjZS10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc291cmNlLWRlc2Mge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc291cmNlLXNpemUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVzb3VyY2UtYWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICAgICAgIC5yZXNvdXJjZS1pdGVtOmhvdmVyICYge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJlc291cmNlcy1pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mby1ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgICAgLmluZm8taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLmluZm8tbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbmZvLXZhbHVlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJBUlJBIElORkVSSU9SIERFIFBST0dSRVNPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnByb2dyZXNzLWJhci1ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgYm94LXNoYWRvdzogMCAtMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWluZm8ge1xuICAgICAgZmxleDogMTtcbiAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgLnByb2dyZXNzLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAucHJvZ3Jlc3MtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wcm9ncmVzcy1zdGF0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnw6LCgMKiJztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9ncmVzcy1iYXItZnVsbCB7XG4gICAgICBmbGV4OiAyO1xuICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAucHJvZ3Jlc3MtdHJhY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcHRlci1tYXJrZXJzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgLmNoYXB0ZXItbWFya2VyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wcm9ncmVzcy10aW1lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLmJ0bi1zbWFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgJi5idG4tc3VjY2VzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtc3VjY2Vzcyk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRFJPUERPV05TIChFU1RJTE9TIEFESUNJT05BTEVTKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMC45NSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYW5pbWF0aW9uOiBkcm9wZG93blNsaWRlIDAuMnMgZWFzZS1vdXQ7XG5cbiAgICAmLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tZGl2aWRlciB7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24taWNvbixcbiAgICAgIC5zcGVlZC1vcHRpb24taWNvbixcbiAgICAgIC5zdWItb3B0aW9uLWljb24sXG4gICAgICAucXVhbGl0eS1vcHRpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tdGV4dCxcbiAgICAgIC5zcGVlZC1vcHRpb24tdGV4dCxcbiAgICAgIC5zdWItb3B0aW9uLXRleHQsXG4gICAgICAucXVhbGl0eS1vcHRpb24tdGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLXRpbWUsXG4gICAgICAucXVhbGl0eS1vcHRpb24tc2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFwdGVycy1saXN0LWRyb3Bkb3duIHtcbiAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6IDhweDtcblxuICAgICAgLmNoYXB0ZXItZHJvcGRvd24taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXB0ZXItZHJvcGRvd24tdGltZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcHRlci1kcm9wZG93bi1pbmZvIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAgIC5jaGFwdGVyLWRyb3Bkb3duLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYXB0ZXItZHJvcGRvd24tZGVzYyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcHRlci1kcm9wZG93bi1kdXJhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTEVTIEVTUEVDw4PCjUZJQ09TIERFTCBSRVBST0RVQ1RPUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLW92ZXJsYXkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDI1cHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNjYWxlSW4gMC4zcyBlYXNlO1xuXG4gICYubW9kYWwtbGFyZ2Uge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gMTAwcHgpO1xuICB9XG5cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAuYnRuIHtcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgQHRyYW5zaXRpb24tc3BlZWQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgUEFSQSBGT1JNVUxBUklPUyBFTiBNT0RBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIC5mb3JtLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZm9ybS1pbnB1dCxcbiAgLmZvcm0tdGV4dGFyZWEsXG4gIC5mb3JtLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIEB0cmFuc2l0aW9uLXNwZWVkO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkUgQURJQ0lPTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hdWRpb3Zpc3VhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuaGVhZGVyLWNvbnRlbnQge1xuICAgICAgLnBhZ2UtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG5cbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYW51YWwtaW5mby1iYXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAudmlkZW8tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLnZpZGVvLXBsYXllci13cmFwcGVyIHtcbiAgICAudmlkZW8tY29udHJvbHMtb3ZlcmxheSB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgICAucHJvZ3Jlc3MtYmFyLW1haW4ge1xuICAgICAgICAudGltZS1kaXNwbGF5IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgICAgLmNoYXB0ZXItbmFtZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWFudWFsLXNpZGViYXIge1xuICAgIC50YWItY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5wcm9ncmVzcy1iYXItYm90dG9tIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMRVMgSEVMUCBTVVBQT1JUIChFWElTVEVOVEVTKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYubWluaW1pemVkLW1vZGUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5tb2RhbC10aXRsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBhbmltYXRpb246IGljb25Cb3VuY2UgMnMgaW5maW5pdGU7XG59XG5cbi5tb2RhbC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbn1cblxuLm1vZGFsLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1vZGFsLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG59XG5cbi5tb2RhbC1idG4gLmJ0bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLm1vZGFsLWJ0bjpob3ZlciAuYnRuLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5tb2RhbC1idG4gLmJ0bi10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtYnRuOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvdHRvbTogLTMwcHg7XG59XG5cbi5taW5pbWl6ZS1idG4uYW5pbWF0aW5nIHtcbiAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi5jbG9zZS1tb2RhbC1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuNSkgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9kYWwtYm9keSBhcHAtaGVscC1zdXBwb3J0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5mbG9hdGluZy1idWJibGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFuaW1hdGlvbjogYnViYmxlQXBwZWFyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC43KTtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZS5wdWxzaW5nIHtcbiAgYW5pbWF0aW9uOiBidWJibGVQdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG4uYnViYmxlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG5cbi5idWJibGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluU2xvdyB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmJ1YmJsZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5idWJibGUtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5idWJibGUtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbn1cblxuLmJ1YmJsZS1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25TbGlkZSAwLjVzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwtY29udGVudDpub3QoLm1pbmltaXplZCk6bm90KC5tYXhpbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQ6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG5cbiAgLmJ1YmJsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('150ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        transform: 'translateY(-10px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 67831:
/*!*********************************************************************!*\
  !*** ./src/app/modules/audiovisual/services/tiempo-formato.pipe.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiempoFormatoPipe: () => (/* binding */ TiempoFormatoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class TiempoFormatoPipe {
  transform(tiempo) {
    if (!tiempo || tiempo < 0) return '00:00';
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor(tiempo % 3600 / 60);
    const segundos = Math.floor(tiempo % 60);
    if (horas > 0) {
      return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }
  static ɵfac = function TiempoFormatoPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TiempoFormatoPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tiempoFormato",
    type: TiempoFormatoPipe,
    pure: true
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_audiovisual_pages_audiovisual_component_ts.js.map