"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_shared_features_reset-password_forgot-password_component_ts"],{

/***/ 81404:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/features/reset-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);















function ForgotPasswordComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_form_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_form_12_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.email, $event) || (ctx_r1.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 17)(11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ForgotPasswordComponent_form_12_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Volver al login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r1.email || ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Verificando..." : "Verificar identidad", " ");
  }
}
function ForgotPasswordComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Reintentar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
class ForgotPasswordComponent {
  router;
  authService;
  messageService;
  email = '';
  loading = false;
  errorMessage = '';
  currentTheme = 'light';
  constructor(router, authService, messageService) {
    this.router = router;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadTheme();
  }
  onSubmit() {
    if (!this.email) return;
    this.loading = true;
    this.errorMessage = '';
    this.authService.solicitarResetPassword({
      email: this.email
    }).subscribe({
      next: response => {
        this.loading = false;
        // ✅ Redirigir directamente, no mostrar mensaje de correo
        this.router.navigate(['/reset-password'], {
          state: {
            resetToken: response.token,
            email: this.email
          }
        });
      },
      error: error => {
        this.loading = false;
        // ✅ Mensaje genérico pero honesto
        this.errorMessage = 'Error al verificar el correo. Por favor, intente nuevamente.';
        console.error('Error:', error);
      }
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  loadTheme() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${this.currentTheme}-theme`);
  }
  static ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    decls: 14,
    vars: 4,
    consts: [[1, "forgot-container"], ["position", "top-right"], [1, "forgot-wrapper"], [1, "forgot-card"], [1, "forgot-header"], [1, "logo-icon"], [1, "pi", "pi-lock"], [3, "ngSubmit", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "input-wrapper"], [1, "pi", "pi-envelope", "input-icon"], ["pInputText", "", "type", "email", "id", "email", "name", "email", "placeholder", "tu@email.com", "required", "", "autofocus", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "pi", "pi-send"], [1, "back-link"], [3, "click"], [1, "pi", "pi-arrow-left"], [1, "error-message"], [1, "pi", "pi-exclamation-triangle"], [1, "btn-secondary", 3, "click"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Verifica tu identidad para restablecer tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ForgotPasswordComponent_form_12_Template, 14, 3, "form", 7)(13, ForgotPasswordComponent_div_13_Template, 6, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.currentTheme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.Toast, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_5__.ProgressSpinnerModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_6__.ThemeSwitcherComponent],
    styles: [".forgot-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-primary);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.forgot-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out;\n}\n.forgot-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 24px;\n  padding: 40px 32px;\n  box-shadow: var(--card-shadow);\n  transition: all 0.3s;\n}\n.forgot-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-hover-shadow);\n}\n.forgot-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.forgot-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  box-shadow: var(--shadow-md);\n}\n.forgot-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.forgot-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.forgot-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: var(--primary);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 12px 12px 36px;\n  background: var(--input-bg);\n  border: 1px solid var(--input-border);\n  color: var(--text-primary);\n  border-radius: 12px;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 20px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.btn-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: transparent;\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.back-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--link-color);\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  transition: transform 0.2s;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--link-hover);\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n.success-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background: var(--success);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  color: white;\n  margin: 0 auto 20px;\n  box-shadow: var(--shadow-md);\n}\n.success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--text-primary);\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: var(--text-muted);\n}\n.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.success-message[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 8px;\n}\n.success-message[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--warning);\n  margin-bottom: 16px;\n  display: inline-block;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--text-muted);\n}\n.error-message[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--spinner-bg);\n  border-top-color: var(--spinner-active);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .forgot-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .forgot-card[_ngcontent-%COMP%] {\n    padding: 28px 20px;\n  }\n  .forgot-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\nbody.neon-theme[_ngcontent-%COMP%]   .forgot-card[_ngcontent-%COMP%] {\n  border-width: 2px;\n  box-shadow: var(--shadow-neon-primary);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  text-shadow: 0 0 5px rgba(0, 240, 255, 0.5);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px rgba(52, 211, 153, 0.5);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px var(--warning);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL3Jlc2V0LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlEQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQUFGO0FBR0E7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtBQURKO0FBTUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSkY7QUFFQTtFQUtJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUpKO0FBVEE7RUFnQk0sZUFBQTtFQUNBLFlBQUE7QUFKTjtBQWJBO0VBc0JJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQU5KO0FBbkJBO0VBNkJJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFQSjtBQVlBO0VBQ0UsbUJBQUE7QUFWRjtBQVNBO0VBSUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFWSjtBQUVBO0VBV00saUJBQUE7RUFDQSxxQkFBQTtBQVZOO0FBRkE7RUFpQkksa0JBQUE7QUFaSjtBQUxBO0VBb0JNLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQVpOO0FBYkE7RUE2Qk0sV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBC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Q0FBQTtBQWpFRjtBQW9FQTtFQUNFLG9DQUFBO0FBbEVGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4uZm9yZ290LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjVzIGVhc2Utb3V0O1xufVxuXG4uZm9yZ290LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiA0MHB4IDMycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcbiAgfVxufVxuXG4vLyBIZWFkZXJcbi5mb3Jnb3QtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5sb2dvLWljb24ge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDE2cHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4vLyBGb3JtdWxhcmlvXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pbnB1dC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDM2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCb3TDg8KzbiBwcmluY2lwYWxcbi5idG4tc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cblxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLy8gQm90w4PCs24gc2VjdW5kYXJpb1xuLmJ0bi1zZWNvbmRhcnkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4vLyBFbmxhY2UgZGUgdm9sdmVyXG4uYmFjay1saW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gIGEge1xuICAgIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWhvdmVyKTtcblxuICAgICAgaSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTWVuc2FqZSBkZSDDg8KpeGl0b1xuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0O1xuXG4gIC5zdWNjZXNzLWljb24ge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuaW5mby10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxufVxuXG4vLyBNZW5zYWplIGRlIGVycm9yXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cblxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59XG5cbi8vIExvYWRpbmcgb3ZlcmxheVxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcblxuICAuc3Bpbm5lci13cmFwcGVyIHtcbiAgICAuc3Bpbm5lciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNwaW5uZXItYmcpO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tc3Bpbm5lci1hY3RpdmUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWFjaW9uZXNcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmVcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZm9yZ290LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuZm9yZ290LWNhcmQge1xuICAgIHBhZGRpbmc6IDI4cHggMjBweDtcbiAgfVxuXG4gIC5mb3Jnb3QtaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLy8gRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIHRlbWEgTmVvblxuYm9keS5uZW9uLXRoZW1lIC5mb3Jnb3QtY2FyZCB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbmVvbi1wcmltYXJ5KTtcbn1cblxuYm9keS5uZW9uLXRoZW1lIC5idG4tc3VibWl0IHtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAyNDAsIDI1NSwgMC41KTtcbn1cblxuYm9keS5uZW9uLXRoZW1lIC5zdWNjZXNzLWljb24ge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDUyLCAyMTEsIDE1MywgMC41KTtcbn1cblxuYm9keS5uZW9uLXRoZW1lIC5lcnJvci1tZXNzYWdlIGkge1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggdmFyKC0td2FybmluZyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_shared_features_reset-password_forgot-password_component_ts.js.map