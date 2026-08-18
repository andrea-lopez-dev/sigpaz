"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_shared_features_reset-password_reset-password_component_ts"],{

/***/ 73630:
/*!****************************************************************************!*\
  !*** ./src/app/shared/features/reset-password/reset-password.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/password */ 96371);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 17780);


















const _c0 = /[A-Z]/;
const _c1 = /[a-z]/;
const _c2 = /[0-9]/;
const _c3 = /[@$!%*?&]/;
function ResetPasswordComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Cargando preguntas de seguridad...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ResetPasswordComponent_form_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25)(1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_form_13_div_8_Template_input_ngModelChange_6_listener($event) {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.respuestas[i_r4], $event) || (ctx_r1.respuestas[i_r4] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pregunta_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "pregunta_" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", pregunta_r5.texto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("id", "pregunta_" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.respuestas[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("name", "pregunta_" + i_r4);
  }
}
function ResetPasswordComponent_form_13_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Las contrase\u00F1as no coinciden");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ResetPasswordComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_form_13_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Preguntas de seguridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Responde correctamente al menos el 80% de las preguntas");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ResetPasswordComponent_form_13_div_8_Template, 7, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 23)(10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Nueva contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 25)(15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " Nueva contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "p-password", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_form_13_Template_p_password_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 25)(22, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, " Confirmar contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "p-password", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_form_13_Template_p_password_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, ResetPasswordComponent_form_13_div_28_Template, 4, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 35)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "La contrase\u00F1a debe cumplir con:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "ul")(33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " M\u00EDnimo 8 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, " Al menos una may\u00FAscula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Al menos una min\u00FAscula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " Al menos un n\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " Al menos un car\u00E1cter especial (@$!%*?&) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 37)(49, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordComponent_form_13_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.preguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("feedback", true)("toggleMask", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("feedback", false)("toggleMask", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.passwordMismatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("valid", ctx_r1.newPassword.length >= 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pi-check", ctx_r1.newPassword.length >= 8)("pi-times", ctx_r1.newPassword.length < 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("valid", _c0.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pi-check", _c0.test(ctx_r1.newPassword))("pi-times", !_c0.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("valid", _c1.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pi-check", _c1.test(ctx_r1.newPassword))("pi-times", !_c1.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("valid", _c2.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pi-check", _c2.test(ctx_r1.newPassword))("pi-times", !_c2.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("valid", _c3.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pi-check", _c3.test(ctx_r1.newPassword))("pi-times", !_c3.test(ctx_r1.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.enviando);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.isFormValid() || ctx_r1.enviando);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.enviando ? "Restableciendo..." : "Restablecer contrase\u00F1a", " ");
  }
}
function ResetPasswordComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u00A1Contrase\u00F1a restablecida!");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Tu contrase\u00F1a ha sido actualizada correctamente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordComponent_div_14_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Iniciar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ResetPasswordComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Sesi\u00F3n expirada");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordComponent_div_15_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goToForgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Solicitar nuevo restablecimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.errorMensaje);
  }
}
class ResetPasswordComponent {
  router;
  authService;
  messageService;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  email = null;
  resetToken = null;
  cargando = true;
  enviando = false;
  completado = false;
  errorToken = false;
  errorMensaje = '';
  currentTheme = 'light';
  preguntas = [];
  respuestas = [];
  newPassword = '';
  confirmPassword = '';
  passwordMismatch = false;
  constructor(router, authService, messageService) {
    this.router = router;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadTheme();
    // ✅ Recibir email y token del state (desde forgot-password)
    const navigation = this.router.getCurrentNavigation();
    this.email = navigation?.extras?.state?.['email'] || null;
    this.resetToken = navigation?.extras?.state?.['resetToken'] || null;
    if (!this.email || !this.resetToken) {
      this.errorToken = true;
      this.errorMensaje = 'No se encontró información de verificación. Por favor, solicite un nuevo restablecimiento.';
      this.cargando = false;
      return;
    }
    this.cargarPreguntas();
  }
  cargarPreguntas() {
    // ✅ Usar el método NUEVO obtenerPreguntasUsuario (solo email, no token)
    this.authService.obtenerPreguntasUsuario(this.email).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.preguntas = response.data;
        this.respuestas = new Array(this.preguntas.length).fill('');
        this.cargando = false;
      },
      error: error => {
        this.errorToken = true;
        this.errorMensaje = error.error?.message || 'Error al cargar las preguntas de seguridad';
        this.cargando = false;
      }
    });
  }
  isFormValid() {
    const allAnswersFilled = this.respuestas.length > 0 && this.respuestas.every(r => r && r.trim().length > 0);
    const isPasswordValid = this.newPassword === this.confirmPassword && this.newPassword.length >= 8 && /[A-Z]/.test(this.newPassword) && /[a-z]/.test(this.newPassword) && /[0-9]/.test(this.newPassword) && /[@$!%*?&]/.test(this.newPassword);
    this.passwordMismatch = this.newPassword !== this.confirmPassword && this.confirmPassword.length > 0;
    return allAnswersFilled && isPasswordValid;
  }
  onSubmit() {
    if (!this.isFormValid() || !this.resetToken) return;
    this.enviando = true;
    // ✅ Usar el método resetPassword EXISTENTE (el que tiene token en URL)
    this.authService.resetPassword(this.resetToken, {
      password: this.newPassword,
      password_confirmation: this.confirmPassword,
      respuestas: this.preguntas.map((p, i) => ({
        pregunta_id: p.pregunta_id,
        respuesta: this.respuestas[i]
      }))
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.enviando = false;
        this.completado = true;
        this.messageService.add({
          severity: 'success',
          summary: '¡Éxito!',
          detail: response.message
        });
      },
      error: error => {
        this.enviando = false;
        if (error.error?.correctas !== undefined) {
          this.messageService.add({
            severity: 'error',
            summary: 'Respuestas incorrectas',
            detail: `Respondiste ${error.error.correctas} de ${error.error.total} preguntas correctamente`
          });
        } else if (error.status === 400 || error.status === 401) {
          this.errorToken = true;
          this.errorMensaje = error.error?.message || 'Token inválido o expirado';
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error?.message || 'Error al restablecer la contraseña'
          });
        }
      }
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  loadTheme() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${this.currentTheme}-theme`);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_14__.MessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ResetPasswordComponent,
    selectors: [["app-reset-password"]],
    decls: 20,
    vars: 6,
    consts: [[1, "reset-container"], ["position", "top-right"], [1, "reset-wrapper"], [1, "reset-card"], [1, "reset-header"], [1, "logo-icon"], [1, "pi", "pi-lock"], ["class", "loading-overlay", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "reset-footer"], [3, "click"], [1, "pi", "pi-arrow-left"], [1, "loading-overlay"], [1, "spinner-wrapper"], [1, "spinner"], [3, "ngSubmit"], [1, "security-section"], [1, "section-title"], [1, "pi", "pi-shield"], [1, "section-desc"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "password-section"], [1, "pi", "pi-key"], [1, "form-group"], ["for", "newPassword"], [1, "input-wrapper"], [1, "pi", "pi-lock", "input-icon"], ["id", "newPassword", "placeholder", "M\u00EDnimo 8 caracteres", "required", "", 3, "ngModelChange", "ngModel", "feedback", "toggleMask"], ["for", "confirmPassword"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-check-circle", "input-icon"], ["id", "confirmPassword", "placeholder", "Confirma tu nueva contrase\u00F1a", "required", "", 3, "ngModelChange", "ngModel", "feedback", "toggleMask"], ["class", "error-message small", 4, "ngIf"], [1, "password-requirements"], [1, "pi"], [1, "action-buttons"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], [1, "pi", "pi-times"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "pi", "pi-save"], [3, "for"], [1, "pi", "pi-question-circle"], [1, "pi", "pi-pencil", "input-icon"], ["pInputText", "", "type", "text", "placeholder", "Tu respuesta", "required", "", "autocomplete", "off", 3, "ngModelChange", "id", "ngModel", "name"], [1, "error-message", "small"], [1, "pi", "pi-times-circle"], [1, "success-message"], [1, "success-icon"], [1, "btn-primary", 3, "click"], [1, "pi", "pi-sign-in"], [1, "error-message"], [1, "pi", "pi-exclamation-triangle"], [1, "pi", "pi-refresh"]],
    template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Restablecer contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Responde las preguntas de seguridad para verificar tu identidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ResetPasswordComponent_div_12_Template, 5, 0, "div", 7)(13, ResetPasswordComponent_form_13_Template, 55, 41, "form", 8)(14, ResetPasswordComponent_div_14_Template, 10, 0, "div", 9)(15, ResetPasswordComponent_div_15_Template, 9, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 11)(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_a_click_17_listener() {
          return ctx.goToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, " Volver al inicio de sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.currentTheme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.cargando && !ctx.completado && ctx.preguntas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.completado);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.errorToken);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_6__.PasswordModule, primeng_password__WEBPACK_IMPORTED_MODULE_6__.Password, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_9__.ThemeSwitcherComponent],
    styles: [".reset-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-primary);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.reset-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out;\n}\n.reset-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 28px;\n  padding: 40px 36px;\n  box-shadow: var(--card-shadow);\n  transition: all 0.3s;\n}\n.reset-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-hover-shadow);\n}\n.reset-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.reset-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  box-shadow: var(--shadow-md);\n}\n.reset-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.reset-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.reset-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.security-section[_ngcontent-%COMP%], \n.password-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.security-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], \n.password-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid var(--border-color);\n  color: var(--text-primary);\n}\n.security-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.password-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 18px;\n}\n.security-section[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%], \n.password-section[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--primary);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 14px;\n  z-index: 1;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password input {\n  width: 100%;\n  padding: 12px 14px 12px 40px;\n  background: var(--input-bg);\n  border: 1px solid var(--input-border);\n  color: var(--text-primary);\n  border-radius: 14px;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password input:focus {\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password input::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password {\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-input {\n  width: 100%;\n  padding: 12px 14px 12px 40px;\n  background: var(--input-bg);\n  border: 1px solid var(--input-border);\n  border-radius: 14px;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-input:focus {\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-panel {\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 14px;\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-panel .p-password-strength {\n  height: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-panel .p-password-strength.p-password-strength-weak {\n  background: var(--danger);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-panel .p-password-strength.p-password-strength-medium {\n  background: var(--warning);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]     .p-password .p-password-panel .p-password-strength.p-password-strength-strong {\n  background: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 14px;\n  border: 1px solid var(--border-light);\n  font-size: 12px;\n}\n.password-requirements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 16px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.valid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.invalid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-top: 32px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  border-radius: 14px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--warning);\n  margin-bottom: 16px;\n  display: inline-block;\n}\n.error-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--text-primary);\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--text-muted);\n}\n.error-message.small[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  background: var(--danger-light);\n  border-radius: 12px;\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.error-message.small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: var(--danger);\n}\n.error-message.small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--danger);\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: var(--success);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  color: white;\n  margin: 0 auto 20px;\n  box-shadow: var(--shadow-md);\n}\n.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--text-primary);\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: var(--text-muted);\n}\n.success-message[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 200px;\n}\n.reset-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-light);\n}\n.reset-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--link-color);\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.reset-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.2s;\n}\n.reset-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--link-hover);\n}\n.reset-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--spinner-bg);\n  border-top-color: var(--spinner-active);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .reset-wrapper[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .reset-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n  .reset-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nbody.neon-theme[_ngcontent-%COMP%]   .reset-card[_ngcontent-%COMP%] {\n  border-width: 2px;\n  box-shadow: var(--shadow-neon-primary);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 25px rgba(52, 211, 153, 0.5);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px var(--warning);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border-top-color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaURBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBREY7QUFJQTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUZGO0FBSUU7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0FBRko7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQUdBO0VBS0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBTEo7QUFSQTtFQWdCTSxlQUFBO0VBQ0EsWUFBQTtBQUxOO0FBWkE7RUFzQkksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBUEo7QUFsQkE7RUE2QkksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVJKO0FBYUE7O0VBQ0UsbUJBQUE7QUFWRjtBQVNBOztFQUlJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSwwQkFBQTtBQVRKO0FBSEE7O0VBZU0scUJBQUE7RUFDQSxlQUFBO0FBUk47QUFSQTs7RUFxQkksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQWNBO0VBQ0UsbUJBQUE7QUFaRjtBQVdBO0VBSUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxl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QUE7QUFsRkY7QUFxRkE7RUFDRSxvQ0FBQTtBQW5GRjtBQXNGQTtFQUNFLHlCQUFBO0VBQ0EsMkNBQUE7QUFwRkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXNldC1wYXNzd29yZC5jb21wb25lbnQubGVzc1xuLnJlc2V0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi5yZXNldC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTYwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC41cyBlYXNlLW91dDtcbn1cblxuLnJlc2V0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBwYWRkaW5nOiA0MHB4IDM2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcbiAgfVxufVxuXG4vLyBIZWFkZXJcbi5yZXNldC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8vIFNlY2Npb25lc1xuLnNlY3VyaXR5LXNlY3Rpb24sIC5wYXNzd29yZC1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cblxuICAuc2VjdGlvbi1kZXNjIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLy8gRm9ybXVsYXJpb1xuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaW5wdXQtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxNHB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIGlucHV0LCA6Om5nLWRlZXAgLnAtcGFzc3dvcmQgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE0cHggMTJweCA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLnAtcGFzc3dvcmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5wLXBhc3N3b3JkLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTRweCAxMnB4IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wLXBhc3N3b3JkLXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAgIC5wLXBhc3N3b3JkLXN0cmVuZ3RoIHtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcblxuICAgICAgICAgICYucC1wYXNzd29yZC1zdHJlbmd0aC13ZWFrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgICYucC1wYXNzd29yZC1zdHJlbmd0aC1tZWRpdW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICYucC1wYXNzd29yZC1zdHJlbmd0aC1zdHJvbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlcXVpc2l0b3MgZGUgY29udHJhc2XDg8KxYVxuLnBhc3N3b3JkLXJlcXVpcmVtZW50cyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgIH1cblxuICAgICAgJi52YWxpZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5pbnZhbGlkIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEJvdG9uZXNcbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcblxuICBidXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cblxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbi8vIE1lbnNhamVzXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB9XG5cbiAgJi5zbWFsbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICB9XG4gIH1cbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDtcblxuICAuc3VjY2Vzcy1pY29uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxuXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMCAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgfVxufVxuXG4vLyBGb290ZXJcbi5yZXNldC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICBhIHtcbiAgICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tbGluay1ob3Zlcik7XG5cbiAgICAgIGkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExvYWRpbmdcbi5sb2FkaW5nLW92ZXJsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcblxuICAuc3Bpbm5lci13cmFwcGVyIHtcbiAgICAuc3Bpbm5lciB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNwaW5uZXItYmcpO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tc3Bpbm5lci1hY3RpdmUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWFjaW9uZXNcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmVcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucmVzZXQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuXG4gIC5yZXNldC1jYXJkIHtcbiAgICBwYWRkaW5nOiAyOHB4IDIwcHg7XG4gIH1cblxuICAucmVzZXQtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi8vIEVzdGlsb3MgZXNwZWPDg8KtZmljb3MgcGFyYSBOZW9uIFRoZW1lXG5ib2R5Lm5lb24tdGhlbWUgLnJlc2V0LWNhcmQge1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW5lb24tcHJpbWFyeSk7XG59XG5cbmJvZHkubmVvbi10aGVtZSAuYnRuLXByaW1hcnkge1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjUpO1xufVxuXG5ib2R5Lm5lb24tdGhlbWUgLnN1Y2Nlc3MtaWNvbiB7XG4gIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjUpO1xufVxuXG5ib2R5Lm5lb24tdGhlbWUgLmVycm9yLW1lc3NhZ2UgaSB7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCB2YXIoLS13YXJuaW5nKTtcbn1cblxuYm9keS5uZW9uLXRoZW1lIC5zcGlubmVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwZjBmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyNDAsIDI1NSwgMC41KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_shared_features_reset-password_reset-password_component_ts.js.map