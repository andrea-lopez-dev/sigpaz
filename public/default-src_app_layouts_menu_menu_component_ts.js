"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["default-src_app_layouts_menu_menu_component_ts"],{

/***/ 15980:
/*!************************************************!*\
  !*** ./src/app/layouts/menu/menu.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/auth.service */ 68010);
/* harmony import */ var _core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/sidebar.service */ 19964);
/* harmony import */ var _services_rol_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/rol-api.service */ 45446);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/features/home/services/theme.service */ 99535);












const _c0 = () => ["usuarios.ver", "accesos.ver", "auditoria.ver"];
const _forTrack0 = ($index, $item) => $item.name;
function MenuComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
  }
}
function MenuComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 8)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleHelpSupportHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Ayuda SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
}
function MenuComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u25CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
  }
}
function MenuComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 9)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleHelpSupportHandler());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "div", 20)(3, "div", 21)(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](5, "div", 23)(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](8, MenuComponent_Conditional_10_Conditional_8_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasUnreadMessages ? 8 : -1);
  }
}
function MenuComponent_For_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_For_16_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveMenu(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", item_r6.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r6.name);
  }
}
function MenuComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_For_16_Conditional_0_Template, 6, 4, "div", 14);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(item_r6.permission) ? 0 : -1);
  }
}
function MenuComponent_Conditional_22_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "li")(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_22_For_10_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ɵ$index_96_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const gestionar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveSubMenu(gestionar_r8, ɵ$index_96_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const subItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", subItem_r11.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r11.name);
  }
}
function MenuComponent_Conditional_22_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_Conditional_22_For_10_Conditional_0_Template, 6, 4, "li", 33);
  }
  if (rf & 2) {
    const subItem_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(subItem_r11.permission) ? 0 : -1);
  }
}
function MenuComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const gestionar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleMenuExpand(gestionar_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](8, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](9, MenuComponent_Conditional_22_For_10_Template, 1, 1, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const gestionar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", gestionar_r8.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](gestionar_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](gestionar_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", gestionar_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", gestionar_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](gestionar_r8.subItems);
  }
}
function MenuComponent_For_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_For_28_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveMenu(item_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", item_r13.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r13.name);
  }
}
function MenuComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_For_28_Conditional_0_Template, 6, 4, "div", 14);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(item_r13.permission) ? 0 : -1);
  }
}
function MenuComponent_Conditional_34_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "li")(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_34_For_10_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ɵ$index_151_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      const seguridad_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](33);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveSubMenu(seguridad_r15, ɵ$index_151_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const subItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", subItem_r18.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r18.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r18.name);
  }
}
function MenuComponent_Conditional_34_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_Conditional_34_For_10_Conditional_0_Template, 6, 4, "li", 33);
  }
  if (rf & 2) {
    const subItem_r18 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(subItem_r18.permission) ? 0 : -1);
  }
}
function MenuComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Conditional_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const seguridad_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](33);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleMenuExpand(seguridad_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](8, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](9, MenuComponent_Conditional_34_For_10_Template, 1, 1, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const seguridad_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", seguridad_r15.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](seguridad_r15.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](seguridad_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", seguridad_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", seguridad_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](seguridad_r15.subItems);
  }
}
function MenuComponent_For_40_Conditional_0_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "li")(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_For_40_Conditional_0_For_10_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ɵ$index_187_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$index;
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveSubMenu(item_r20, ɵ$index_187_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const subItem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", subItem_r23.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r23.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subItem_r23.name);
  }
}
function MenuComponent_For_40_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_For_40_Conditional_0_For_10_Conditional_0_Template, 6, 4, "li", 33);
  }
  if (rf & 2) {
    const subItem_r23 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(subItem_r23.permission) ? 0 : -1);
  }
}
function MenuComponent_For_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_For_40_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleMenuExpand(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](8, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](9, MenuComponent_For_40_Conditional_0_For_10_Template, 1, 1, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", item_r20.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", item_r20.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("expanded", item_r20.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](item_r20.subItems);
  }
}
function MenuComponent_For_40_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_For_40_Conditional_1_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.setActiveMenu(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", item_r20.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r20.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r20.name);
  }
}
function MenuComponent_For_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_For_40_Conditional_1_Conditional_0_Template, 6, 4, "div", 14);
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r2.hasPermission(item_r20.permission) ? 0 : -1);
  }
}
function MenuComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, MenuComponent_For_40_Conditional_0_Template, 11, 8, "div", 14)(1, MenuComponent_For_40_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"]((item_r20.subItems == null ? null : item_r20.subItems.length) ? 0 : 1);
  }
}
class MenuComponent {
  authService;
  sidebarService;
  rolApiService;
  themeService;
  router;
  isSidebarCollapsed = false;
  hasUnreadMessages = false;
  toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  toggleHelpSupport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Variables del menú
  activeMenu = '';
  currentTheme = 'light';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  // Permisos cacheados del usuario
  permisosUsuario = new Set();
  permisosCargados = false;
  // Definición del menú con permisos requeridos
  menuItems = [{
    name: 'Panel de control',
    icon: '📊',
    expanded: false,
    active: false,
    route: '/dashboard',
    subItems: []
  }, {
    name: 'Gestionar',
    icon: '⚙️',
    expanded: false,
    active: false,
    subItems: [{
      name: 'Normativas',
      icon: '📜',
      active: false,
      route: '/catalogos',
      permission: 'catalogos.ver'
    }, {
      name: 'Ciudadanos',
      icon: '👥',
      active: false,
      route: '/personas',
      permission: 'personas.ver'
    }, {
      name: 'Denuncias',
      icon: '⚖️',
      active: false,
      route: '/denuncias',
      permission: 'denuncias.ver'
    }, {
      name: 'Intermediación',
      icon: '🤝',
      active: false,
      route: '/intermediaciones',
      permission: 'intermediaciones.ver'
    }, {
      name: 'Resolución',
      icon: '✅',
      active: false,
      route: '/resoluciones',
      permission: 'resoluciones.ver'
    }, {
      name: 'Expedientes',
      icon: '📁',
      active: false,
      route: '/expedientes',
      permission: 'expedientes.ver'
    }]
  }, {
    name: 'Personal',
    icon: '👤',
    expanded: false,
    active: false,
    route: '/personal',
    permission: 'personal.ver',
    subItems: []
  }, {
    name: 'Calendario',
    icon: '📅',
    expanded: false,
    active: false,
    route: '/calendario',
    permission: 'calendario.ver',
    subItems: []
  }, {
    name: 'Reportes',
    icon: '📈',
    expanded: false,
    active: false,
    route: '/reportes',
    permission: 'reportes.ver',
    subItems: []
  }, {
    name: 'Seguridad',
    icon: '🔒',
    expanded: false,
    active: false,
    subItems: [{
      name: 'Usuarios',
      icon: '👥',
      active: false,
      route: '/seguridad/usuarios',
      permission: 'usuarios.ver'
    }, {
      name: 'Acceso',
      icon: '🔑',
      active: false,
      route: '/seguridad/accesos',
      permission: 'accesos.ver'
    }, {
      name: 'Auditoría',
      icon: '📋',
      active: false,
      route: '/seguridad/auditorias',
      permission: 'auditoria.ver'
    }]
  }, {
    name: 'Backup',
    icon: '💾',
    expanded: false,
    active: false,
    route: '/backup',
    permission: 'backup.ver',
    subItems: []
  }, {
    name: 'Manuales',
    icon: '📖',
    expanded: false,
    active: false,
    subItems: [{
      name: 'Usuario',
      icon: '👤',
      active: false,
      route: '/manuales/usuario',
      permission: 'manuales.ver'
    }, {
      name: 'Técnico',
      icon: '🔧',
      active: false,
      route: '/manuales/tecnico',
      permission: 'manuales.ver'
    }]
  }, {
    name: 'AudioVisual',
    icon: '💾',
    expanded: false,
    active: false,
    route: '/audiovisual',
    permission: 'audiovisual.ver',
    subItems: []
  }];
  constructor(authService, sidebarService, rolApiService, themeService, router) {
    this.authService = authService;
    this.sidebarService = sidebarService;
    this.rolApiService = rolApiService;
    this.themeService = themeService;
    this.router = router;
  }
  ngOnInit() {
    this.themeService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
    this.sidebarService.setCollapsed(this.isSidebarCollapsed);
    this.cargarPermisosUsuario(); // ✅ Cargar permisos al iniciar
    this.checkCurrentRoute();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      this.checkCurrentRoute();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * ✅ Cargar permisos usando RolApiService existente
   */
  cargarPermisosUsuario() {
    const user = this.authService.getCurrentUser();
    if (!user || !user.rol_id) {
      // Si no hay usuario, solo mostrar opciones públicas
      this.permisosCargados = true;
      return;
    }
    // ✅ Usar el método existente getPermisosPorRol de RolApiService
    this.rolApiService.getPermisosPorRol(user.rol_id).subscribe({
      next: response => {
        this.permisosUsuario.clear();
        if (response.success && response.data) {
          // Guardar nombres de permisos
          response.data.forEach(permiso => {
            this.permisosUsuario.add(permiso.nombre);
          });
        }
        // ✅ Administrador (rol_id = 1) tiene todos los permisos automáticamente
        if (user.rol_id === 1) {
          this.permisosUsuario.add('auditoria.ver');
          this.permisosUsuario.add('usuarios.ver');
          this.permisosUsuario.add('accesos.ver');
          this.permisosUsuario.add('personal.ver');
          this.permisosUsuario.add('reportes.ver');
          this.permisosUsuario.add('backup.ver');
        }
        this.permisosCargados = true;
        console.log('✅ Permisos cargados:', Array.from(this.permisosUsuario));
      },
      error: error => {
        console.error('Error cargando permisos:', error);
        // Fallback: si es admin, dar permisos básicos
        if (user.rol_id === 1) {
          this.permisosUsuario.add('auditoria.ver');
          this.permisosUsuario.add('usuarios.ver');
        }
        this.permisosCargados = true;
      }
    });
  }
  /**
   * ✅ Verificar si el usuario tiene un permiso específico
   */
  hasPermission(permission) {
    if (!permission) return true;
    if (!this.permisosCargados) return false;
    const user = this.authService.getCurrentUser();
    // Administrador siempre tiene acceso
    if (user?.rol_id === 1) return true;
    return this.permisosUsuario.has(permission);
  }
  /**
   * ✅ Verificar si tiene al menos uno de los permisos
   */
  hasAnyPermission(permissions) {
    if (!permissions || permissions.length === 0) return true;
    return permissions.some(p => this.hasPermission(p));
  }
  checkCurrentRoute() {
    const currentUrl = this.router.url;
    this.resetAllMenus();
    for (const menuItem of this.menuItems) {
      if (menuItem.route && this.isRouteActive(menuItem.route, currentUrl)) {
        menuItem.active = true;
        this.activeMenu = this.normalizeMenuName(menuItem.name);
        if (menuItem.subItems?.length) menuItem.expanded = true;
        return;
      }
      if (menuItem.subItems) {
        for (const subItem of menuItem.subItems) {
          if (this.isRouteActive(subItem.route, currentUrl)) {
            menuItem.active = true;
            menuItem.expanded = true;
            subItem.active = true;
            this.activeMenu = this.normalizeMenuName(menuItem.name);
            return;
          }
        }
      }
    }
    if (currentUrl === '/' || currentUrl === '/dashboard') {
      const dashboard = this.menuItems.find(i => i.name === 'Panel de control');
      if (dashboard) {
        dashboard.active = true;
        this.activeMenu = 'panel';
      }
    }
  }
  normalizeMenuName(name) {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
  }
  resetAllMenus() {
    this.menuItems.forEach(item => {
      item.active = false;
      item.subItems?.forEach(sub => sub.active = false);
    });
  }
  isRouteActive(menuRoute, currentUrl) {
    if (menuRoute === currentUrl) return true;
    if (menuRoute && currentUrl.startsWith(menuRoute)) {
      const nextChar = currentUrl.charAt(menuRoute.length);
      return nextChar === '' || nextChar === '/' || nextChar === '?' || nextChar === '#';
    }
    return false;
  }
  toggleSidebarHandler() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarService.setCollapsed(this.isSidebarCollapsed);
    this.toggleSidebar.emit();
  }
  toggleHelpSupportHandler() {
    this.toggleHelpSupport.emit();
  }
  setActiveMenu(menuItem) {
    this.resetAllMenus();
    menuItem.active = true;
    this.activeMenu = this.normalizeMenuName(menuItem.name);
    if (menuItem.route && (!menuItem.subItems || menuItem.subItems.length === 0)) {
      this.router.navigate([menuItem.route]);
    } else if (menuItem.subItems?.length) {
      menuItem.expanded = true;
    }
  }
  toggleMenuExpand(item) {
    if (item.subItems?.length) {
      item.expanded = !item.expanded;
      if (!item.expanded && item.active) {
        const hasActiveSub = item.subItems.some(sub => sub.active);
        if (!hasActiveSub) item.active = false;
      }
    } else if (item.route) {
      this.setActiveMenu(item);
    }
  }
  setActiveSubMenu(parent, subIndex) {
    if (!parent.subItems?.[subIndex]) return;
    this.resetAllMenus();
    parent.active = true;
    parent.expanded = true;
    parent.subItems[subIndex].active = true;
    this.activeMenu = this.normalizeMenuName(parent.name);
    const subRoute = parent.subItems[subIndex].route;
    if (subRoute) this.router.navigate([subRoute]);
  }
  // Getters para el template
  getPanelItems() {
    return this.menuItems.filter(i => ['Panel de control'].includes(i.name));
  }
  getGestionarItem() {
    return this.menuItems.find(i => i.name === 'Gestionar');
  }
  getSeguridadItem() {
    return this.menuItems.find(i => i.name === 'Seguridad');
  }
  getConfiguracionItems() {
    return this.menuItems.filter(i => ['Personal', 'Calendario', 'Reportes', 'Configuración', 'Backup'].includes(i.name));
  }
  getDocumentacionItems() {
    return this.menuItems.filter(i => ['Documentación', 'Manuales', 'AudioVisual'].includes(i.name));
  }
  static ɵfac = function MenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_9__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_rol_api_service__WEBPACK_IMPORTED_MODULE_10__.RolApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    inputs: {
      isSidebarCollapsed: "isSidebarCollapsed",
      hasUnreadMessages: "hasUnreadMessages"
    },
    outputs: {
      toggleSidebar: "toggleSidebar",
      toggleHelpSupport: "toggleHelpSupport"
    },
    decls: 41,
    vars: 17,
    consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "menu-toggle-btn", 3, "click"], [1, "toggle-icon"], [1, "logo-container"], [1, "logo-icon", 3, "click"], ["src", "/images/Icon-principal.png", "alt", "Logo SIGPAZ"], [1, "logo-text"], [1, "sidebar-chat-sigpaz"], [1, "sidebar-chat-collapsed"], [1, "menu-list"], [1, "menu-section-header"], [1, "section-title"], [1, "menu-divider"], [1, "menu-item", 3, "active"], ["src", "/images/Icon-secundario.png", "alt", "SIGPAZ"], [1, "chat-sigpaz-btn", 3, "click"], [1, "chat-icon"], [1, "chat-text"], [1, "chat-bot-face", 3, "click"], [1, "bot-face-container"], [1, "bot-face"], [1, "bot-eyes"], [1, "eye", "left-eye"], [1, "eye", "right-eye"], [1, "bot-mouth"], [1, "notification-dot"], [1, "menu-item"], [1, "menu-header", 3, "click"], [1, "menu-icon"], [1, "menu-text"], [1, "expand-icon"], [1, "submenu"], [3, "active"], [1, "submenu-item", 3, "click"], [1, "submenu-icon"], [1, "submenu-text"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](0, "aside", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleSidebarHandler());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomListener"]("click", function MenuComponent_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleSidebarHandler());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](8, MenuComponent_Conditional_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](9, MenuComponent_Conditional_9_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](10, MenuComponent_Conditional_10_Template, 9, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](11, "nav", 10)(12, "div", 11)(13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "PANEL DE CONTROL");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](15, MenuComponent_For_16_Template, 1, 1, null, null, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](18, "div", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Procesos judiciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdeclareLet"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](22, MenuComponent_Conditional_22_Template, 11, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](24, "div", 11)(25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Coordinaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](27, MenuComponent_For_28_Template, 1, 1, null, null, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](30, "div", 11)(31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "CONFIGURACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdeclareLet"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](34, MenuComponent_Conditional_34_Template, 11, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementStart"](36, "div", 11)(37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "DOCUMENTACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](39, MenuComponent_For_40_Template, 2, 1, null, null, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdomElementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isSidebarCollapsed ? "\u2192" : "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.isSidebarCollapsed ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.isSidebarCollapsed ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx.isSidebarCollapsed ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.getPanelItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        const gestionar_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstoreLet"](ctx.getGestionarItem());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](gestionar_r25 ? 22 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.getConfiguracionItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        const seguridad_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstoreLet"](ctx.getSeguridadItem());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](seguridad_r26 && ctx.hasAnyPermission(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c0)) ? 34 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.getDocumentacionItems());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
    styles: ["@keyframes blinkEyes {\n  0%,\n  90%,\n  100% {\n    height: 10px;\n    transform: scaleY(1);\n  }\n  95% {\n    height: 2px;\n    transform: scaleY(0.2);\n  }\n}\n@keyframes talkMouth {\n  0%,\n  100% {\n    width: 18px;\n    height: 8px;\n  }\n  25%,\n  75% {\n    width: 22px;\n    height: 6px;\n  }\n  50% {\n    width: 20px;\n    height: 10px;\n    border-radius: 4px 4px 12px 12px;\n  }\n}\n@keyframes pulseIcon {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n@keyframes pulseBadge {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n@keyframes bounceIcon {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes pulseNotification {\n  0%,\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);\n  }\n  70% {\n    transform: scale(1.1);\n    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes fadeInModal {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUpLarge {\n  from {\n    opacity: 0;\n    transform: translateY(60px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes blinkEyesLarge {\n  0%,\n  90%,\n  100% {\n    height: 16px;\n    transform: scaleY(1);\n  }\n  95% {\n    height: 4px;\n    transform: scaleY(0.2);\n  }\n}\n@keyframes talkMouthLarge {\n  0%,\n  100% {\n    width: 30px;\n    height: 10px;\n  }\n  50% {\n    width: 35px;\n    height: 8px;\n  }\n}\n@keyframes blinkMini {\n  0%,\n  90%,\n  100% {\n    opacity: 1;\n  }\n  95% {\n    opacity: 0.3;\n  }\n}\n@keyframes bounceInMinimized {\n  0% {\n    opacity: 0;\n    transform: scale(0.7) translateY(20px);\n  }\n  70% {\n    transform: scale(1.05) translateY(-5px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes float {\n  0%,\n  100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes glow {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.8;\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes bounce {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n}\n.sidebar {\n  width: 280px;\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 10000;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-right: 1px solid var(--border-color);\n  scrollbar-width: thin;\n  scrollbar-color: var(--primary) transparent;\n}\n.sidebar::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 2px;\n}\n.sidebar::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.sidebar.collapsed {\n  width: 99px;\n}\n.sidebar.collapsed .menu-text,\n.sidebar.collapsed .logo-text,\n.sidebar.collapsed .expand-icon,\n.sidebar.collapsed .submenu-text,\n.sidebar.collapsed .menu-subtitle,\n.sidebar.collapsed .section-title,\n.sidebar.collapsed .sidebar-search {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  display: none;\n}\n.sidebar.collapsed .sidebar-header {\n  justify-content: center;\n  padding: 20px 0;\n}\n.sidebar.collapsed .menu-header {\n  justify-content: center;\n  padding: 16px 0 !important;\n}\n.sidebar.collapsed .submenu,\n.sidebar.collapsed .menu-divider {\n  display: none !important;\n}\n.sidebar.collapsed .logo-icon {\n  font-size: 24px;\n  margin: 0 auto;\n}\n.sidebar.collapsed .menu-icon {\n  margin: 0 auto;\n}\n.sidebar.collapsed .menu-toggle-btn {\n  right: -12px;\n}\n.sidebar-header {\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  position: relative;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.logo-container.compact .logo-text,\n.logo-container.compact .logo-special {\n  display: none;\n}\n.logo-container.compact .logo {\n  gap: 0;\n}\n.logo-container.compact .logo img:last-child {\n  display: none;\n}\n.logo-icon {\n  background: transparent;\n  width: 52px;\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  animation: float 3s infinite ease-in-out;\n  animation-delay: 0.5s;\n  transition: all 0.3s ease;\n}\n.logo-icon img {\n  width: 55px;\n}\n.logo-icon:hover {\n  animation: none;\n  transform: scale(1.1) rotate(5deg);\n}\n.logo-icon:hover::before {\n  animation: spin 5s linear infinite;\n}\n.logo-text {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.5px;\n  transition: all 0.3s ease;\n  animation: float 3s infinite ease-in-out;\n  animation-delay: 0.5s;\n}\n.logo-text:hover {\n  animation: none;\n  transform: translateY(-2px);\n}\n.logo-text img {\n  height: 50px;\n  margin-left: -15px;\n  width: 170px;\n}\n.logo-text .logo-special {\n  color: var(--primary);\n  margin-left: 2px;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n  animation: glow 2s infinite alternate;\n}\n.logo-text .logo-special::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--gradient-primary);\n  transition: width 0.3s ease;\n}\n.logo-text .logo-special:hover::after {\n  width: 100%;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n.logo:hover {\n  transform: translateY(-2px);\n}\n.logo:hover::before {\n  opacity: 1;\n}\n.logo:hover img:first-child {\n  transform: scale(1.05) rotate(2deg);\n  filter: brightness(1.1) saturate(1.2);\n}\n.logo:hover img:last-child {\n  transform: scale(1.08) rotate(-2deg);\n  opacity: 1;\n  animation: float 2s infinite ease-in-out;\n}\n.logo::before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background: var(--primary-light);\n  border-radius: 16px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: -1;\n}\n.logo img:first-child {\n  height: 90px;\n  object-fit: contain;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  filter: drop-shadow(var(--shadow-sm));\n  animation: float 4s infinite ease-in-out;\n}\n.logo img:last-child {\n  height: 40px;\n  object-fit: contain;\n  opacity: 0.9;\n  margin-left: -18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  filter: drop-shadow(var(--shadow-sm));\n  animation: float 3s infinite ease-in-out;\n  animation-delay: 0.3s;\n}\n.logo:active {\n  transform: translateY(0) scale(0.98);\n  transition: transform 0.1s ease;\n}\n.sidebar-search {\n  padding: 0 24px 16px;\n}\n.sidebar-search .search-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  background: var(--bg-hover);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: 1px solid var(--border-light);\n}\n.sidebar-search .search-container:hover {\n  background: var(--bg-active);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-search .search-container .search-icon {\n  font-size: 16px;\n  opacity: 0.7;\n  color: var(--icon-color);\n}\n.sidebar-search .search-container .search-text {\n  flex: 1;\n  font-size: 14px;\n  opacity: 0.8;\n  color: var(--text-secondary);\n}\n.sidebar-search .search-container .search-shortcut {\n  font-size: 12px;\n  opacity: 0.5;\n  background: var(--bg-tertiary);\n  padding: 2px 6px;\n  border-radius: 4px;\n  color: var(--text-muted);\n}\n.menu-toggle-btn {\n  position: absolute;\n  right: -12px;\n  top: 24px;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-md);\n  z-index: 1001;\n  font-size: 14px;\n  animation: bounce 2s infinite;\n}\n.menu-toggle-btn:hover {\n  background: var(--primary-hover);\n  transform: scale(1.1) translateX(-2px);\n}\n.menu-toggle-btn .toggle-icon {\n  transition: transform 0.3s;\n}\n.menu-section-header {\n  padding: 16px 24px 8px;\n  margin-top: 8px;\n}\n.menu-section-header .section-title {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  opacity: 0.7;\n  transition: all 0.3s;\n}\n.menu-divider {\n  height: 1px;\n  background: var(--border-color);\n  margin: 8px 24px;\n  opacity: 0.3;\n  transition: all 0.3s;\n}\n.menu-item {\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n}\n.menu-item.active .menu-indicator {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-item.active .menu-header {\n  color: var(--primary);\n}\n.menu-item .menu-header {\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n  text-decoration: none;\n  color: inherit;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.menu-item .menu-header:hover {\n  background: var(--bg-hover);\n  padding-left: 28px;\n}\n.menu-item .menu-header:hover ~ .menu-indicator {\n  opacity: 0.7;\n  transform: scaleY(0.8);\n}\n.menu-item .menu-icon {\n  font-size: 18px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 16px;\n  transition: transform 0.3s;\n  color: var(--icon-color);\n}\n.menu-header:hover .menu-item .menu-icon {\n  transform: scale(1.1);\n  color: var(--icon-hover);\n}\n.menu-item .menu-text {\n  font-size: 15px;\n  font-weight: 500;\n  transition: all 0.3s;\n  white-space: nowrap;\n  flex: 1;\n  color: var(--text-primary);\n}\n.menu-item .menu-subtitle {\n  font-size: 12px;\n  color: var(--text-muted);\n  padding: 4px 24px 12px 64px;\n  opacity: 0.7;\n  transition: all 0.3s;\n}\n.menu-item .menu-indicator {\n  position: absolute;\n  left: 0;\n  top: 18%;\n  transform: translateY(-50%) scaleY(0);\n  width: 4px;\n  height: 70%;\n  background: var(--gradient-primary);\n  border-radius: 0 4px 4px 0;\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.menu-item .expand-icon {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 10px;\n  opacity: 0.7;\n  color: var(--icon-color);\n}\n.menu-item .expand-icon.expanded {\n  transform: rotate(180deg);\n  opacity: 1;\n  color: var(--primary);\n}\n.menu-item .submenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.menu-item .submenu.expanded {\n  max-height: 500px;\n}\n.menu-item .submenu li {\n  position: relative;\n}\n.menu-item .submenu li.active .submenu-indicator {\n  opacity: 1;\n}\n.menu-item .submenu li.active .submenu-item {\n  color: var(--primary);\n}\n.menu-item .submenu .submenu-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px 10px 64px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: inherit;\n  border: none;\n  background: none;\n  width: 100%;\n  text-align: left;\n  font-family: inherit;\n  font-size: 14px;\n  position: relative;\n  overflow: hidden;\n  color: var(--text-secondary);\n}\n.menu-item .submenu .submenu-item:hover {\n  background: var(--bg-hover);\n  padding-left: 68px;\n  color: var(--text-primary);\n}\n.menu-item .submenu .submenu-item:hover .submenu-indicator {\n  opacity: 0.7;\n}\n.menu-item .submenu .submenu-item .submenu-indicator {\n  position: absolute;\n  left: 48px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 6px;\n  height: 6px;\n  background: var(--primary);\n  border-radius: 50%;\n  opacity: 0;\n  transition: all 0.3s;\n  box-shadow: 0 0 8px var(--primary);\n}\n.menu-item .submenu .submenu-item .submenu-icon {\n  font-size: 16px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s;\n  color: var(--icon-color);\n}\n.submenu-item:hover .menu-item .submenu .submenu-item .submenu-icon {\n  transform: scale(1.1);\n  color: var(--icon-hover);\n}\n.sidebar-chat-collapsed {\n  margin: 20px auto;\n  width: fit-content;\n  padding: 10px 0;\n}\n.sidebar-chat-collapsed .chat-bot-face {\n  background: var(--gradient-primary);\n  border: none;\n  border-radius: 50%;\n  width: 56px;\n  height: 56px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-chat-collapsed .chat-bot-face:hover {\n  transform: scale(1.15) rotate(10deg);\n  box-shadow: var(--shadow-lg), var(--shadow-neon-primary);\n}\n.sidebar-chat-collapsed .chat-bot-face:hover .bot-face {\n  transform: scale(1.1);\n}\n.sidebar-chat-collapsed .chat-bot-face:hover .bot-face .eye {\n  height: 6px;\n}\n.sidebar-chat-collapsed .chat-bot-face:hover .bot-face .bot-mouth {\n  width: 22px;\n  border-radius: 12px 12px 4px 4px;\n}\n.sidebar-chat-collapsed .chat-bot-face:hover .notification-dot {\n  transform: scale(1.3);\n  box-shadow: var(--shadow-neon-danger);\n}\n.sidebar-chat-collapsed .chat-bot-face:active {\n  transform: scale(0.95);\n}\n.sidebar-chat-collapsed .bot-face-container {\n  position: relative;\n  width: 40px;\n  height: 40px;\n}\n.sidebar-chat-collapsed .bot-face {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  transition: transform 0.3s;\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes .eye {\n  width: 8px;\n  height: 10px;\n  background: var(--success);\n  border-radius: 50%;\n  position: relative;\n  animation: blinkEyes 3s infinite;\n  box-shadow: 0 0 8px var(--success);\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes .eye.left-eye {\n  transform: translateX(-5px);\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes .eye.left-eye::after {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes .eye.right-eye {\n  transform: translateX(5px);\n}\n.sidebar-chat-collapsed .bot-face .bot-eyes .eye.right-eye::after {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  right: 2px;\n}\n.sidebar-chat-collapsed .bot-face .bot-mouth {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 18px;\n  height: 8px;\n  background: var(--danger);\n  border-radius: 8px 8px 4px 4px;\n  transition: all 0.3s;\n  animation: talkMouth 4s infinite;\n}\n.sidebar-chat-collapsed .notification-dot {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  width: 12px;\n  height: 12px;\n  background: var(--danger);\n  border-radius: 50%;\n  color: white;\n  font-size: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: pulseNotification 1.5s infinite;\n  transition: all 0.3s;\n  z-index: 10;\n}\n.sigpaz-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  animation: fadeInModal 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sigpaz-modal-container {\n  background: var(--modal-bg);\n  border-radius: 24px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 1400px;\n  height: 90vh;\n  max-height: 900px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideUpLarge 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--border-color);\n}\n.sigpaz-modal-container .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 40px;\n  background: var(--gradient-primary);\n  color: white;\n  border-bottom: 1px solid var(--border-light);\n}\n.sigpaz-modal-container .modal-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  box-shadow: var(--shadow-lg);\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-eye-large {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background: var(--success);\n  border-radius: 50%;\n  top: 25px;\n  animation: blinkEyesLarge 4s infinite;\n  box-shadow: 0 0 15px var(--success);\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-eye-large.left {\n  left: 20px;\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-eye-large.left::after {\n  content: '';\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  top: 3px;\n  left: 3px;\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-eye-large.right {\n  right: 20px;\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-eye-large.right::after {\n  content: '';\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  top: 3px;\n  right: 3px;\n}\n.sigpaz-modal-container .modal-header .header-content .robot-avatar-large .robot-mouth-large {\n  position: absolute;\n  width: 30px;\n  height: 10px;\n  background: var(--danger);\n  border-radius: 5px;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  animation: talkMouthLarge 5s infinite;\n}\n.sigpaz-modal-container .modal-header .header-content .header-text .modal-title {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n}\n.sigpaz-modal-container .modal-header .header-content .header-text .modal-subtitle {\n  margin: 8px 0 0;\n  font-size: 16px;\n  opacity: 0.9;\n  font-weight: 400;\n}\n.sigpaz-modal-container .modal-header .header-actions {\n  display: flex;\n  gap: 12px;\n}\n.sigpaz-modal-container .modal-header .header-actions .modal-btn {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: white;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  font-size: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.sigpaz-modal-container .modal-header .header-actions .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: scale(1.1);\n}\n.sigpaz-modal-container .modal-header .header-actions .modal-btn.close-btn:hover {\n  background: rgba(239, 68, 68, 0.3);\n  transform: rotate(90deg) scale(1.1);\n}\n.sigpaz-modal-container .modal-footer {\n  padding: 20px 40px;\n  background: var(--bg-tertiary);\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.sigpaz-modal-container .modal-footer .footer-stats {\n  display: flex;\n  gap: 25px;\n}\n.sigpaz-modal-container .modal-footer .footer-stats .stat-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.sigpaz-modal-container .modal-footer .footer-stats .stat-item .stat-icon {\n  font-size: 16px;\n}\n.sigpaz-modal-container .modal-footer .footer-actions {\n  display: flex;\n  gap: 15px;\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn {\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn.secondary {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn.secondary:hover {\n  background: var(--bg-hover);\n  border-color: var(--border-dark);\n  transform: translateY(-2px);\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn.primary {\n  background: var(--gradient-primary);\n  border: none;\n  color: white;\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.sigpaz-modal-container .modal-footer .footer-actions .action-btn .btn-icon {\n  font-size: 16px;\n}\n.sigpaz-minimized {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 50px;\n  padding: 18px 30px;\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  z-index: 9998;\n  animation: bounceInMinimized 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: all 0.3s;\n}\n.sigpaz-minimized:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-xl);\n}\n.sigpaz-minimized .minimized-content {\n  display: none;\n  align-items: center;\n  gap: 15px;\n}\n.sigpaz-minimized .minimized-content .robot-mini {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.sigpaz-minimized .minimized-content .robot-mini .mini-eye {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: var(--success);\n  border-radius: 50%;\n  top: 12px;\n  animation: blinkMini 3s infinite;\n}\n.sigpaz-minimized .minimized-content .robot-mini .mini-eye.left {\n  left: 10px;\n}\n.sigpaz-minimized .minimized-content .robot-mini .mini-eye.right {\n  right: 10px;\n}\n.sigpaz-minimized .minimized-content .minimized-text {\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n.sigpaz-minimized .minimized-content .minimized-badge {\n  background: var(--danger);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: pulseBadge 1.5s infinite;\n  margin-left: 5px;\n}\n.sidebar-chat-sigpaz {\n  margin: 20px 15px;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.7s;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn:hover:hover::after {\n  left: 100%;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-icon {\n  font-size: 20px;\n  margin-right: 12px;\n  animation: pulseIcon 2s infinite;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-text {\n  flex: 1;\n  text-align: left;\n  letter-spacing: 0.8px;\n}\n.sidebar-chat-sigpaz .chat-sigpaz-btn .chat-badge {\n  background: var(--danger);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: pulseBadge 1.5s infinite;\n  margin-left: 10px;\n}\n.logo-variant-header .logo {\n  gap: 16px;\n}\n.logo-variant-header .logo img:first-child {\n  width: 180px;\n  height: 72px;\n}\n.logo-variant-header .logo img:last-child {\n  width: 96px;\n  height: 48px;\n}\n.logo-variant-header .logo-text {\n  font-size: 24px;\n}\n.logo-variant-footer .logo {\n  opacity: 0.8;\n}\n.logo-variant-footer .logo:hover {\n  opacity: 1;\n}\n.logo-variant-footer .logo img:first-child {\n  width: 135px;\n  height: 54px;\n}\n.logo-variant-footer .logo img:last-child {\n  display: none;\n}\n.logo-variant-sidebar .logo img:first-child {\n  width: 120px;\n  height: 48px;\n}\n.logo-variant-sidebar .logo img:last-child {\n  display: none;\n}\n.logo-variant-sidebar.collapsed .logo-text {\n  display: none;\n}\n.logo-variant-sidebar.collapsed .logo {\n  justify-content: center;\n}\n.logo-variant-sidebar.collapsed .logo img:first-child {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.logo-loading .logo {\n  opacity: 0.7;\n}\n.logo-loading .logo img {\n  animation: pulseIcon 1.5s infinite;\n}\n.logo-loading .logo-icon {\n  animation: pulseIcon 1s infinite;\n}\n.logo-glow .logo::after {\n  content: '';\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  background: radial-gradient(circle at center, var(--primary-light) 0%, transparent 70%);\n  border-radius: 20px;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.logo-glow .logo:hover::after {\n  opacity: 1;\n}\nbody.neon-theme .sidebar {\n  border-right: 1px solid var(--success);\n}\nbody.neon-theme .menu-item .menu-header:hover {\n  background: rgba(0, 240, 255, 0.1);\n}\nbody.neon-theme .submenu-item:hover {\n  background: rgba(0, 255, 136, 0.1);\n}\nbody.neon-theme .sidebar-chat-collapsed .chat-bot-face {\n  box-shadow: 0 0 20px var(--primary);\n}\nbody.neon-theme .sidebar-chat-collapsed .chat-bot-face:hover {\n  box-shadow: 0 0 30px var(--primary), 0 0 20px var(--success);\n}\n@media (max-width: 1440px) {\n  .sigpaz-modal-container {\n    max-width: 1200px;\n    height: 85vh;\n  }\n}\n@media (max-width: 1024px) {\n  .sigpaz-modal-overlay {\n    padding: 20px;\n  }\n  .sigpaz-modal-container {\n    max-width: 95%;\n    height: 90vh;\n  }\n  .sigpaz-modal-container .modal-header {\n    padding: 20px 30px;\n  }\n  .sigpaz-modal-container .modal-header .header-content .robot-avatar-large {\n    width: 60px;\n    height: 60px;\n  }\n  .sigpaz-modal-container .modal-header .header-content .header-text .modal-title {\n    font-size: 24px;\n  }\n  .sigpaz-modal-container .modal-footer {\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n  }\n  .sigpaz-modal-container .modal-footer .footer-stats {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    width: 220px;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    border-right: 1px solid var(--border-color);\n    overflow-y: auto;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translateX(0);\n  }\n  .sidebar.collapsed {\n    width: 60px;\n  }\n  .sidebar.collapsed .sidebar-header {\n    justify-content: center;\n    padding: 20px 0;\n  }\n  .sidebar.collapsed .sidebar-header .logo {\n    flex-direction: column;\n  }\n  .sidebar.collapsed .sidebar-header .logo .logo-icon {\n    margin-right: 0;\n  }\n  .sidebar.collapsed .sidebar-header .logo .logo-text {\n    display: none;\n  }\n  .sidebar.collapsed .menu-text,\n  .sidebar.collapsed .expand-icon,\n  .sidebar.collapsed .menu-subtitle,\n  .sidebar.collapsed .submenu-text,\n  .sidebar.collapsed .section-title {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    overflow: hidden;\n    margin: 0;\n    display: none;\n  }\n  .sidebar.collapsed .menu-item {\n    width: 35px;\n  }\n  .sidebar.collapsed .menu-item .menu-header {\n    justify-content: center;\n    padding: 12px 0 !important;\n  }\n  .sidebar.collapsed .menu-item .menu-header .menu-icon {\n    margin-right: 0;\n  }\n  .sidebar.collapsed .menu-item .submenu {\n    display: none !important;\n  }\n  .sidebar.collapsed .sidebar-chat-sigpaz .chat-sigpaz-btn {\n    width: 44px;\n    height: 44px;\n    border-radius: 50%;\n    justify-content: center;\n    padding: 0;\n  }\n  .sidebar.collapsed .sidebar-chat-sigpaz .chat-sigpaz-btn .chat-icon {\n    margin-right: 0;\n  }\n  .sidebar.collapsed .sidebar-chat-sigpaz .chat-sigpaz-btn .chat-text {\n    display: none;\n  }\n  .sidebar.collapsed .sidebar-search {\n    display: none;\n  }\n  .sidebar.collapsed .menu-section-header,\n  .sidebar.collapsed .menu-divider {\n    display: none;\n  }\n  .sigpaz-modal-container {\n    height: 95vh;\n    border-radius: 20px;\n  }\n  .sigpaz-modal-container .modal-header {\n    padding: 15px 20px;\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .sigpaz-modal-container .modal-header .header-content {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .sigpaz-modal-container .modal-header .header-content .header-text .modal-title {\n    font-size: 22px;\n  }\n  .sigpaz-modal-container .modal-header .header-content .header-text .modal-subtitle {\n    font-size: 14px;\n  }\n  .sigpaz-modal-container .modal-footer {\n    padding: 15px 20px;\n  }\n  .sigpaz-modal-container .modal-footer .footer-actions {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .sigpaz-minimized {\n    bottom: 20px;\n    right: 20px;\n    padding: 15px 25px;\n  }\n  .logo-container {\n    gap: 12px;\n  }\n  .logo-container.compact .logo-icon {\n    width: 36px;\n    height: 36px;\n    font-size: 24px;\n  }\n  .logo-icon {\n    width: 36px;\n    height: 36px;\n    font-size: 24px;\n    border-radius: 8px;\n  }\n  .logo-text {\n    font-size: 18px;\n  }\n  .logo {\n    gap: 8px;\n  }\n  .logo img:first-child {\n    width: 120px;\n    height: 48px;\n    animation: float 5s infinite ease-in-out;\n  }\n  .logo img:last-child {\n    width: 64px;\n    height: 32px;\n    animation: float 4s infinite ease-in-out;\n    animation-delay: 0.2s;\n  }\n}\n@media (max-width: 550px) {\n  .sidebar.collapsed {\n    width: 60px;\n  }\n  .sidebar .menu-item {\n    min-width: 35px;\n  }\n  .sidebar .menu-item .menu-header {\n    padding: 5px 6px !important;\n  }\n  .sidebar .menu-item .menu-icon {\n    font-size: 16px;\n    width: 20px;\n    height: 20px;\n    margin-bottom: 3px;\n  }\n  .sidebar .menu-item .menu-text {\n    font-size: 10px;\n  }\n  .sidebar-chat-sigpaz .chat-sigpaz-btn {\n    width: 42px;\n    height: 42px;\n  }\n  .sidebar-chat-sigpaz .chat-sigpaz-btn .chat-icon {\n    font-size: 18px;\n  }\n  .logo-container {\n    gap: 8px;\n  }\n  .logo-text {\n    font-size: 16px;\n  }\n  .logo-text .logo-special {\n    margin-left: 1px;\n  }\n  .logo {\n    gap: 6px;\n  }\n  .logo img:first-child {\n    width: 105px;\n    height: 42px;\n  }\n  .logo img:last-child {\n    width: 56px;\n    height: 28px;\n  }\n}\n@media (max-width: 360px) {\n  .logo img:last-child {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRTs7O0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBUEY7RUFTQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFOztJQUNFLFdBQUE7SUFDQSxXQUFBO0VBUEY7RUFTQTs7SUFDRSxXQUFBO0lBQ0EsV0FBQTtFQU5GO0VBUUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdDQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0U7O0lBQ0UsbUJBQUE7RUFORjtFQVFBO0lBQ0Usc0JBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTs7SUFDRSxtQkFBQTtFQU5GO0VBUUE7SUFDRSxxQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFOztJQUNFLHdCQUFBO0VBTkY7RUFRQTtJQUNFLDJCQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0U7O0lBQ0UsbUJBQUE7SUFDQSwwQ0FBQTtFQU5GO0VBUUE7SUFDRSxxQkFBQTtJQUNBLDBDQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0U7SUFDRSxVQUFBO0VBUEY7RUFTQTtJQUNFLFVBQUE7RUFQRjtBQUNGO0FBVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtFQVJGO0VBVUE7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTs7O0lBQ0UsWUFBQTtJQUNBLG9CQUFBO0VBUEY7RUFTQTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFOztJQUNFLFdBQUE7SUFDQSxZQUFBO0VBUEY7RUFTQTtJQUNFLFdBQUE7SUFDQSxXQUFBO0VBUEY7QUFDRjtBQVVBO0VBQ0U7OztJQUNFLFVBQUE7RUFORjtFQVFBO0lBQ0UsWUFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNDQUFBO0VBUEY7RUFTQTtJQUNFLHVDQUFBO0VBUEY7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RUFzVUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQXBVRjtFQWtVQTtJQUtJLGVBQUE7RUFwVUo7RUF3VUE7SUFDRSxRQUFBO0VBdFVGO0VBeVVBO0lBQ0UsZUFBQTtFQXZVRjtFQXNVQTtJQUlJLGdCQUFBO0VBdlVKO0VBMlVBO0lBQ0UsUUFBQTtFQXpVRjtFQXdVQTtJQUlJLFlBQUE7SUFDQSxZQUFBO0VBelVKO0VBb1VBO0lBU0ksV0FBQTtJQUNBLFlBQUE7RUExVUo7QUFDRjtBQThVQTtFQUNFO0lBRUksYUFBQTtFQTdVSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBUklBQkxFUyBHTE9CQUxFUyAoSU1QT1JUQURBUyBERUwgVEhFTUUpXG4vLyBOT1RBOiBUb2RhcyBlc3RhcyB2YXJpYWJsZXMgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xuLy8geSBzZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGtleWZyYW1lcyBibGlua0V5ZXMge1xuICAwJSwgOTAlLCAxMDAlIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbiAgOTUlIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGFsa01vdXRoIHtcbiAgMCUsIDEwMCUge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICB9XG4gIDI1JSwgNzUlIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDEycHggMTJweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlSWNvbiB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlQmFkZ2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUljb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VOb3RpZmljYXRpb24ge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjM5LCA2OCwgNjgsIDAuNyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNnB4IHJnYmEoMjM5LCA2OCwgNjgsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluTW9kYWwge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcExhcmdlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtFeWVzTGFyZ2Uge1xuICAwJSwgOTAlLCAxMDAlIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbiAgOTUlIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGFsa01vdXRoTGFyZ2Uge1xuICAwJSwgMTAwJSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBibGlua01pbmkge1xuICAwJSwgOTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk1JSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5NaW5pbWl6ZWQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlWSgtNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTSURFQkFSIC0gVVNBTkRPIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSB0cmFuc3BhcmVudDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVTVEFETyBDT0xBUFNBRE9cbiAgJi5jb2xsYXBzZWQge1xuICAgIHdpZHRoOiA5OXB4O1xuXG4gICAgLm1lbnUtdGV4dCxcbiAgICAubG9nby10ZXh0LFxuICAgIC5leHBhbmQtaWNvbixcbiAgICAuc3VibWVudS10ZXh0LFxuICAgIC5tZW51LXN1YnRpdGxlLFxuICAgIC5zZWN0aW9uLXRpdGxlLFxuICAgIC5zaWRlYmFyLXNlYXJjaCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTZweCAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnN1Ym1lbnUsXG4gICAgLm1lbnUtZGl2aWRlciB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmxvZ28taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAubWVudS1pY29uIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5tZW51LXRvZ2dsZS1idG4ge1xuICAgICAgcmlnaHQ6IC0xMnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBTVVBFUklPUiBDT04gQk9Uw4PCk04gREVTTElaQU5URVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTE9HTyBDT05UQUlORVIgLSBVU0FORE8gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuXG4gICYuY29tcGFjdCB7XG4gICAgLmxvZ28tdGV4dCxcbiAgICAubG9nby1zcGVjaWFsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgZ2FwOiAwO1xuXG4gICAgICBpbWc6bGFzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0dPIElDT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9nby1pY29uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDU1cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg1ZGVnKTtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPR08gVEVYVCAtIFVTQU5ETyBWQVJJQUJMRVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuXG4gICY6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICB9XG5cbiAgLmxvZ28tc3BlY2lhbCB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYW5pbWF0aW9uOiBnbG93IDJzIGluZmluaXRlIGFsdGVybmF0ZTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPR08gSU3Dg8KBR0VORVMgLSBVU0FORE8gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZSgyZGVnKTtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpIHNhdHVyYXRlKDEuMik7XG4gICAgfVxuXG4gICAgaW1nOmxhc3QtY2hpbGQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KSByb3RhdGUoLTJkZWcpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGFuaW1hdGlvbjogZmxvYXQgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogOTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyh2YXIoLS1zaGFkb3ctc20pKTtcbiAgICBhbmltYXRpb246IGZsb2F0IDRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgaW1nOmxhc3QtY2hpbGQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KHZhcigtLXNoYWRvdy1zbSkpO1xuICAgIGFuaW1hdGlvbjogZmxvYXQgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUFSQ0ggRU4gU0lERUJBUiAtIFVTQU5ETyBWQVJJQUJMRVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc2lkZWJhci1zZWFyY2gge1xuICBwYWRkaW5nOiAwIDI0cHggMTZweDtcblxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctYWN0aXZlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1zaG9ydGN1dCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9Uw4PCk04gREVTTElaQU5URSBERUwgTUVOw4PCmlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tZW51LXRvZ2dsZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTJweDtcbiAgdG9wOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgei1pbmRleDogMTAwMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgtMnB4KTtcbiAgfVxuXG4gIC50b2dnbGUtaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVOQ0FCRVpBRE9TIERFIFNFQ0NJw4PCk04gREVMIE1FTsODwppcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubWVudS1zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMjRweCA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFUEFSQURPUkVTIERFTCBNRU7Dg8KaXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1lbnUtZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBtYXJnaW46IDhweCAyNHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRUxFTUVOVE9TIERFTCBNRU7Dg8KaIENPTiBJTkRJQ0FET1JFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tZW51LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5hY3RpdmUge1xuICAgIC5tZW51LWluZGljYXRvciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxuXG4gICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAubWVudS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuXG4gICAgICAmIH4gLm1lbnUtaW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tZW51LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XG5cbiAgICAubWVudS1oZWFkZXI6aG92ZXIgJiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBjb2xvcjogdmFyKC0taWNvbi1ob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1lbnUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbGV4OiAxO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG5cbiAgLm1lbnUtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgcGFkZGluZzogNHB4IDI0cHggMTJweCA2NHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuXG4gIC5tZW51LWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAxOCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgfVxuXG4gIC5leHBhbmQtaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcblxuICAgICYuZXhwYW5kZWQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLnN1Ym1lbnUge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gICAgJi5leHBhbmRlZCB7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgLnN1Ym1lbnUtaW5kaWNhdG9yIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1lbnUtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjRweCAxMHB4IDY0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2OHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAuc3VibWVudS1pbmRpY2F0b3Ige1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3VibWVudS1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDQ4cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnN1Ym1lbnUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XG5cbiAgICAgICAgLnN1Ym1lbnUtaXRlbTpob3ZlciAmIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWljb24taG92ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWRVJTScODwpNOIENPTEFQU0FEQSAoU29sbyBjYXJhIGRlbCBib3QpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNpZGViYXItY2hhdC1jb2xsYXBzZWQge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgLmNoYXQtYm90LWZhY2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDU2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KSByb3RhdGUoMTBkZWcpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKSwgdmFyKC0tc2hhZG93LW5lb24tcHJpbWFyeSk7XG5cbiAgICAgIC5ib3QtZmFjZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblxuICAgICAgICAuZXllIHtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3QtbW91dGgge1xuICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCA0cHggNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24tZG90IHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbmVvbi1kYW5nZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgfVxuICB9XG5cbiAgLmJvdC1mYWNlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIC5ib3QtZmFjZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcblxuICAgIC5ib3QtZXllcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgIC5leWUge1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBibGlua0V5ZXMgM3MgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICAgICAgJi5sZWZ0LWV5ZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYucmlnaHQtZXllIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblxuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvdC1tb3V0aCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggNHB4IDRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgYW5pbWF0aW9uOiB0YWxrTW91dGggNHMgaW5maW5pdGU7XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1kb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0ycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBwdWxzZU5vdGlmaWNhdGlvbiAxLjVzIGluZmluaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTSUdQQVogR1JBTkRFIC0gVVNBTkRPIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gT3ZlcmxheSBkZWwgbW9kYWxcbi5zaWdwYXotbW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Nb2RhbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi8vIENvbnRlbmVkb3IgZGVsIG1vZGFsIEdSQU5ERVxuLnNpZ3Bhei1tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBtYXgtaGVpZ2h0OiA5MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwTGFyZ2UgMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4vLyBFbmNhYmV6YWRvIGRlbCBtb2RhbFxuLnNpZ3Bhei1tb2RhbC1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG5cbiAgICAucm9ib3QtYXZhdGFyLWxhcmdlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuXG4gICAgICAucm9ib3QtZXllLWxhcmdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIGFuaW1hdGlvbjogYmxpbmtFeWVzTGFyZ2UgNHMgaW5maW5pdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLXN1Y2Nlc3MpO1xuXG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJvYm90LW1vdXRoLWxhcmdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvdHRvbTogMThweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGFuaW1hdGlvbjogdGFsa01vdXRoTGFyZ2UgNXMgaW5maW5pdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci10ZXh0IHtcbiAgICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtc3VidGl0bGUge1xuICAgICAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAubW9kYWwtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgfVxuXG4gICAgICAmLmNsb3NlLWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBGb290ZXIgZGVsIG1vZGFsXG4uc2lncGF6LW1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmZvb3Rlci1zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG5cbiAgICAuc3RhdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gICAgICAuc3RhdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCb3TDg8KzbiBtaW5pbWl6YWRvIGZsb3RhbnRlXG4uc2lncGF6LW1pbmltaXplZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMThweCAzMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTg7XG4gIGFuaW1hdGlvbjogYm91bmNlSW5NaW5pbWl6ZWQgMC42cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgfVxuXG4gIC5taW5pbWl6ZWQtY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcblxuICAgIC5yb2JvdC1taW5pIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4gICAgICAubWluaS1leWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGFuaW1hdGlvbjogYmxpbmtNaW5pIDNzIGluZmluaXRlO1xuXG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1pbmltaXplZC10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuXG4gICAgLm1pbmltaXplZC1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbmltYXRpb246IHB1bHNlQmFkZ2UgMS41cyBpbmZpbml0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEJvdMODwrNuIGVuIGVsIHNpZGViYXJcbi5zaWRlYmFyLWNoYXQtc2lncGF6IHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG5cbiAgLmNoYXQtc2lncGF6LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXG4gICAgICAgICAgdHJhbnNwYXJlbnQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3M7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIC5jaGF0LXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgfVxuXG4gICAgLmNoYXQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZUJhZGdlIDEuNXMgaW5maW5pdGU7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZBUklBTlRFUyBFU1BFQ0lBTEVTIERFTCBMT0dPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ28tdmFyaWFudCB7XG5cbiAgJi1oZWFkZXIge1xuICAgIC5sb2dvIHtcbiAgICAgIGdhcDogMTZweDtcblxuICAgICAgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICB9XG5cbiAgICAgIGltZzpsYXN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDk2cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nby10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cblxuICAmLWZvb3RlciB7XG4gICAgLmxvZ28ge1xuICAgICAgb3BhY2l0eTogMC44O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICB9XG5cbiAgICAgIGltZzpsYXN0LWNoaWxkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLXNpZGViYXIge1xuICAgIC5sb2dvIHtcbiAgICAgIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgfVxuXG4gICAgICBpbWc6bGFzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRE8gREUgQ0FSR0Fcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9nby1sb2FkaW5nIHtcbiAgLmxvZ28ge1xuICAgIG9wYWNpdHk6IDAuNztcblxuICAgIGltZyB7XG4gICAgICBhbmltYXRpb246IHB1bHNlSWNvbiAxLjVzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5sb2dvLWljb24ge1xuICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDFzIGluZmluaXRlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFRkVDVE9TIEVTUEVDSUFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9nby1nbG93IHtcbiAgLmxvZ28ge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgbGVmdDogLTVweDtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICBjaXJjbGUgYXQgY2VudGVyLFxuICAgICAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgNzAlXG4gICAgICApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBURU1BIE5Fw4PCk04gLSBTT0JSRUVTQ1JJVFVSQVMgRVNQRUPDg8KNRklDQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ib2R5Lm5lb24tdGhlbWUge1xuICAuc2lkZWJhciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XG4gIH1cblxuICAubWVudS1pdGVtIC5tZW51LWhlYWRlciB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjEpOztcbiAgICB9XG4gIH1cblxuICAuc3VibWVudS1pdGVtIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzYsIDAuMSk7XG4gICAgfVxuICB9XG5cbiAgLnNpZGViYXItY2hhdC1jb2xsYXBzZWQgLmNoYXQtYm90LWZhY2Uge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLXByaW1hcnkpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1wcmltYXJ5KSwgMCAwIDIwcHggdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5zaWdwYXotbW9kYWwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBoZWlnaHQ6IDg1dmg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2lncGF6LW1vZGFsLW92ZXJsYXkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuc2lncGF6LW1vZGFsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLnNpZ3Bhei1tb2RhbC1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuXG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIC5yb2JvdC1hdmF0YXItbGFyZ2Uge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLXRleHQge1xuICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWdwYXotbW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5mb290ZXItc3RhdHMge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICB3aWR0aDogNjBweDtcblxuICAgICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC5sb2dvLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1lbnUtdGV4dCxcbiAgICAgIC5leHBhbmQtaWNvbixcbiAgICAgIC5tZW51LXN1YnRpdGxlLFxuICAgICAgLnN1Ym1lbnUtdGV4dCxcbiAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG5cbiAgICAgICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNpZGViYXItY2hhdC1zaWdwYXoge1xuICAgICAgICAuY2hhdC1zaWdwYXotYnRuIHtcbiAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAuY2hhdC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2hhdC10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zaWRlYmFyLXNlYXJjaCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tZW51LXNlY3Rpb24taGVhZGVyLFxuICAgICAgLm1lbnUtZGl2aWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZ3Bhei1tb2RhbC1jb250YWluZXIge1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgLnNpZ3Bhei1tb2RhbC1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNXB4O1xuXG4gICAgICAuaGVhZGVyLXRleHQge1xuICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2RhbC1zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZ3Bhei1tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuXG4gICAgLmZvb3Rlci1hY3Rpb25zIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5zaWdwYXotbWluaW1pemVkIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICB9XG5cbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAmLmNvbXBhY3Qge1xuICAgICAgLmxvZ28taWNvbiB7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9nby1pY29uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBnYXA6IDhweDtcblxuICAgIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIGltZzpsYXN0LWNoaWxkIHtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYW5pbWF0aW9uOiBmbG9hdCA0cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgIG1pbi13aWR0aDogMzVweDtcblxuICAgICAgLm1lbnUtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDZweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZGViYXItY2hhdC1zaWdwYXogLmNoYXQtc2lncGF6LWJ0biB7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuXG4gICAgLmNoYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgIC5sb2dvLXNwZWNpYWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgZ2FwOiA2cHg7XG5cbiAgICBpbWc6Zmlyc3QtY2hpbGQge1xuICAgICAgd2lkdGg6IDEwNXB4O1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgIH1cblxuICAgIGltZzpsYXN0LWNoaWxkIHtcbiAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmxvZ28ge1xuICAgIGltZzpsYXN0LWNoaWxkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45446:
/*!*********************************************!*\
  !*** ./src/app/services/rol-api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolApiService: () => (/* binding */ RolApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/notification/notification.service */ 97407);






class RolApiService {
  http;
  notificationService;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}`;
  rolesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  roles$ = this.rolesSubject.asObservable();
  permisosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  permisos$ = this.permisosSubject.asObservable();
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
    this.cargarRoles();
    this.cargarPermisos();
  }
  cargarRoles() {
    this.http.get(`${this.apiUrl}/roles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error cargando roles:', error);
      this.notificationService.showError('Error al cargar roles desde el servidor');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
        data: []
      });
    })).subscribe({
      next: response => {
        const roles = response.data || response;
        if (Array.isArray(roles)) {
          this.rolesSubject.next(roles);
          console.log('✅ Roles cargados desde backend:', roles.length);
        } else {
          this.rolesSubject.next([]);
        }
      }
    });
  }
  cargarPermisos() {
    this.http.get(`${this.apiUrl}/permisos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error cargando permisos:', error);
      this.notificationService.showError('Error al cargar permisos desde el servidor');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
        data: []
      });
    })).subscribe({
      next: response => {
        const permisos = response.data || response;
        if (Array.isArray(permisos)) {
          this.permisosSubject.next(permisos);
          console.log('✅ Permisos cargados desde backend:', permisos.length);
        } else {
          this.permisosSubject.next([]);
        }
      }
    });
  }
  // CRUD Roles
  crearRol(rol) {
    return this.http.post(`${this.apiUrl}/roles`, rol).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this.cargarRoles();
      this.notificationService.showSuccess('Rol creado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al crear rol');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  actualizarRol(id, rol) {
    return this.http.put(`${this.apiUrl}/roles/${id}`, rol).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.cargarRoles();
      this.notificationService.showSuccess('Rol actualizado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al actualizar rol');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  eliminarRol(id) {
    return this.http.delete(`${this.apiUrl}/roles/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.cargarRoles();
      this.notificationService.showSuccess('Rol eliminado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al eliminar rol');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  // CRUD Permisos
  crearPermiso(permiso) {
    return this.http.post(`${this.apiUrl}/permisos`, permiso).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.cargarPermisos();
      this.notificationService.showSuccess('Permiso creado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al crear permiso');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  actualizarPermiso(id, permiso) {
    return this.http.put(`${this.apiUrl}/permisos/${id}`, permiso).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.cargarPermisos();
      this.notificationService.showSuccess('Permiso actualizado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al actualizar permiso');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  eliminarPermiso(id) {
    return this.http.delete(`${this.apiUrl}/permisos/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.cargarPermisos();
      this.notificationService.showSuccess('Permiso eliminado exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al eliminar permiso');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  // Asignaciones
  getPermisosPorRol(rolId) {
    return this.http.get(`${this.apiUrl}/roles/${rolId}/permisos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error cargando permisos del rol:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
        data: []
      });
    }));
  }
  asignarPermisos(rolId, permisosIds) {
    return this.http.put(`${this.apiUrl}/roles/${rolId}/permisos`, {
      permisos_ids: permisosIds
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.notificationService.showSuccess('Permisos asignados exitosamente');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.showError(error.error?.message || 'Error al asignar permisos');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  static ɵfac = function RolApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RolApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: RolApiService,
    factory: RolApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_menu_menu_component_ts.js.map