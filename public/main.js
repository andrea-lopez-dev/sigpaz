"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["main"],{

/***/ 3654:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelativeTimePipe: () => (/* binding */ RelativeTimePipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);


class RelativeTimePipe {
  cdr;
  timerSubscription;
  lastTimestamp = '';
  lastResult = '';
  constructor(cdr) {
    this.cdr = cdr;
  }
  transform(timestamp) {
    if (this.lastTimestamp !== timestamp) {
      this.lastTimestamp = timestamp;
      this.updateResult(timestamp);
      this.startTimer();
    }
    return this.lastResult;
  }
  updateResult(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMins < 1) this.lastResult = 'Ahora';else if (diffMins < 60) this.lastResult = `Hace ${diffMins} min`;else if (diffHours < 24) this.lastResult = `Hace ${diffHours} h`;else if (diffDays < 7) this.lastResult = `Hace ${diffDays} d`;else this.lastResult = date.toLocaleDateString();
  }
  startTimer() {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(60000).subscribe(() => {
      this.updateResult(this.lastTimestamp);
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }
  static ɵfac = function RelativeTimePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RelativeTimePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "relativeTime",
    type: RelativeTimePipe,
    pure: false
  });
}

/***/ }),

/***/ 3711:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/otp-code/codigo-maestro-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodigoMaestroModalComponent: () => (/* binding */ CodigoMaestroModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/modal-communication.service */ 44728);
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/modal.service */ 67509);







function CodigoMaestroModalComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Verificando c\u00F3digo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CodigoMaestroModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CodigoMaestroModalComponent_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\uD83D\uDD10 C\u00F3digo Maestro Requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CodigoMaestroModalComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.cancelar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CodigoMaestroModalComponent_div_0_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.codigo, $event) || (ctx_r1.codigo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function CodigoMaestroModalComponent_div_0_Template_input_keyup_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.confirmar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CodigoMaestroModalComponent_div_0_div_12_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \uD83D\uDCA1 Este c\u00F3digo es requerido para realizar operaciones cr\u00EDticas en el sistema. Consulte con su administrador si no lo conoce. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CodigoMaestroModalComponent_div_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.cancelar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CodigoMaestroModalComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.confirmar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("z-index", ctx_r1.modalState.zIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.codigo.trim() || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isLoading ? "Verificando..." : "Confirmar", " ");
  }
}
class CodigoMaestroModalComponent {
  modalCommService;
  cdr;
  modalService;
  isVisible = false;
  modalState = {
    isOpen: false,
    type: 'none',
    zIndex: 1000,
    position: {}
  };
  codigo = '';
  mensaje = 'Esta acción requiere el código maestro de seguridad.';
  isLoading = false;
  visible = false;
  subscription;
  modalSubscription = null;
  constructor(modalCommService, cdr, modalService) {
    this.modalCommService = modalCommService;
    this.cdr = cdr;
    this.modalService = modalService;
  }
  ngOnInit() {
    this.subscription = this.modalService.modalState$.subscribe(state => {
      if (this.visible !== state.codigoMaestroModal) {
        this.visible = state.codigoMaestroModal;
      }
    });
    this.modalSubscription = this.modalCommService.getModalState().subscribe(state => {
      console.log('📢 Modal state recibido:', state);
      if (state.type === 'codigoMaestro') {
        this.isVisible = state.isOpen;
        this.modalState = state;
        console.log('📢 isVisible actualizado a:', this.isVisible);
        this.cdr.detectChanges();
        if (state.isOpen) {
          this.codigo = '';
          this.isLoading = false;
          this.mensaje = 'Esta acción requiere el código maestro de seguridad.';
          setTimeout(() => {
            const input = document.querySelector('.codigo-input');
            if (input) input.focus();
          }, 100);
        }
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.cancelar();
    }
  }
  confirmar() {
    console.log('🔐 Confirmar clickeado, código:', this.codigo ? '***' : 'vacío');
    if (this.codigo && this.codigo.trim()) {
      this.isLoading = true;
      this.mensaje = '🔐 Verificando código maestro...';
      this.cdr.detectChanges();
      this.modalCommService.submitCodigoMaestro(this.codigo.trim());
      // Mostrar éxito después de un breve momento
      setTimeout(() => {
        if (this.isVisible) {
          this.mensaje = '✅ Código verificado correctamente';
          this.cdr.detectChanges();
          setTimeout(() => {
            this.modalCommService.closeCodigoMaestroModal();
          }, 500);
        }
      }, 500);
    } else {
      this.mensaje = '❌ Por favor ingrese el código maestro';
      setTimeout(() => {
        this.mensaje = 'Esta acción requiere el código maestro de seguridad.';
        this.cdr.detectChanges();
      }, 2000);
    }
  }
  cancelar() {
    console.log('❌ Cancelar clickeado');
    this.modalCommService.submitCodigoMaestro('');
  }
  static ɵfac = function CodigoMaestroModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CodigoMaestroModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_5__.ModalCommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CodigoMaestroModalComponent,
    selectors: [["app-codigo-maestro-modal"]],
    decls: 1,
    vars: 1,
    consts: [["class", "codigo-master-overlay", 3, "click", 4, "ngIf"], [1, "codigo-master-overlay", 3, "click"], [1, "codigo-master-modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "codigo-input-group"], ["type", "password", "placeholder", "Ingrese el c\u00F3digo maestro", "autofocus", "", 1, "codigo-input", 3, "ngModelChange", "keyup.enter", "ngModel", "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "info-text"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "loading-spinner"], [1, "spinner"]],
    template: function CodigoMaestroModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CodigoMaestroModalComponent_div_0_Template, 20, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
    styles: [".codigo-master-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.codigo-master-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 18px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #999;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #666;\n}\n.codigo-input-group[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.codigo-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s;\n}\n.codigo-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.codigo-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n  padding: 8px;\n  background: #f0f7ff;\n  border-radius: 6px;\n  color: #667eea;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #999;\n  margin-top: 12px;\n  padding: 8px;\n  background: #f5f5f5;\n  border-radius: 6px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #666;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e0e0e0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3RwLWNvZGUvY29kaWdvLW1hZXN0cm8tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUFOO0FBR0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtBQUROO0FBSUk7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUZOO0VBSUk7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFGTjtBQUNGO0FBS0k7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQU1JO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSk47QUFPSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0FBTk47QUFTSTtFQUNFLGFBQUE7QUFQTjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUk47QUFXSTtFQUNFLGNBQUE7QUFUTjtBQVlJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBVk47QUFhSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0FBWE47QUFjSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWJOO0FBZ0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQWROO0FBaUJJO0VBQ0U7SUFBSyx5QkFBQTtFQWRUO0FBQ0Y7QUFnQkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFkTjtBQWlCSTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBZk47QUFrQkk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFoQk47QUFtQkk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFqQk47QUFvQkk7RUFDRSxtQkFBQTtBQWxCTjtBQXFCSTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtBQW5CTjtBQXNCSTtFQUNFLDJCQUFBO0VBQ0EsK0NBQUE7QUFwQk47QUF1Qkk7O0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBcEJOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNvZGlnby1tYXN0ZXItb3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICB9XG5cbiAgICAuY29kaWdvLW1hc3Rlci1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuXG4gICAgLmNsb3NlLWJ0bjpob3ZlciB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAubW9kYWwtYm9keSB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5tb2RhbC1ib2R5IHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgLmNvZGlnby1pbnB1dC1ncm91cCB7XG4gICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG5cbiAgICAuY29kaWdvLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB9XG5cbiAgICAuY29kaWdvLWlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICM2NjdlZWE7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuICAgIH1cblxuICAgIC5jb2RpZ28taW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmN2ZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6ICM2NjdlZWE7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzY2N2VlYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuXG4gICAgLmluZm8tdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnk6ZGlzYWJsZWQsIC5idG4tc2Vjb25kYXJ5OmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5378:
/*!*********************************************!*\
  !*** ./src/app/services/persona.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonaService: () => (/* binding */ PersonaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 11817);





class PersonaService {
  http;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl}/personas`;
  constructor(http) {
    this.http = http;
  }
  // ========== MÉTODOS PRINCIPALES ==========
  crearPersona(datos) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log('📤 Enviando JSON al backend (crear):', datos);
    return this.http.post(this.apiUrl, datos, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      console.log('📥 Respuesta del servidor (crear):', response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en crearPersona:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  actualizarPersona(id, datos) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log('📤 Enviando JSON al backend (actualizar):', datos);
    return this.http.put(`${this.apiUrl}/${id}`, datos, {
      headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      console.log('📥 Respuesta del servidor (actualizar):', response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en actualizarPersona:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  eliminarPersona(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      console.log('📥 Respuesta del servidor (eliminar):', response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en eliminarPersona:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  obtenerPersona(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      console.log('📥 Respuesta de persona individual:', response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en obtenerPersona:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // En persona.service.ts
  buscar(termino) {
    console.log(`📡 Buscando personas con término: "${termino}"`);
    // Usar el endpoint específico de búsqueda
    return this.http.get(`${this.apiUrl}/buscar/${encodeURIComponent(termino)}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('📥 Respuesta de búsqueda:', response);
      // 👈 EXTRACTAR DATA SEGÚN ESTRUCTURA DEL BACKEND
      if (response && response.success && Array.isArray(response.data)) {
        return response.data; // {success: true, data: [...]}
      } else if (Array.isArray(response)) {
        return response; // Array directo
      } else if (response && response.data && Array.isArray(response.data)) {
        return response.data; // {data: [...]}
      } else if (response && response.personas && Array.isArray(response.personas)) {
        return response.personas; // {personas: [...]}
      }
      console.warn('⚠️ Estructura de respuesta inesperada:', response);
      return [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(personas => console.log('👥 Personas encontradas:', personas.length)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en búsqueda:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }));
  }
  listarPersonas(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.keys(filtros).forEach(key => {
      if (filtros[key] !== null && filtros[key] !== undefined && filtros[key] !== '') {
        params = params.append(key, filtros[key].toString());
      }
    });
    console.log('📡 Llamando a API personas con params:', params.toString());
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      console.log('📥 Respuesta cruda de personas:', response);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en listarPersonas:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // ========== REPORTES ==========
  generarReporteEdad() {
    return this.http.get(`${this.apiUrl}/reportes/edad`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte edad:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteGenero() {
    return this.http.get(`${this.apiUrl}/reportes/genero`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte género:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteDepartamento() {
    return this.http.get(`${this.apiUrl}/reportes/departamento`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte departamento:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteDiscapacidad() {
    return this.http.get(`${this.apiUrl}/reportes/discapacidad`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte discapacidad:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteTipoDocumento() {
    return this.http.get(`${this.apiUrl}/reportes/tipo-documento`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte tipo documento:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteEstadoCivil() {
    return this.http.get(`${this.apiUrl}/reportes/estado-civil`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte estado civil:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarReporteCompleto() {
    return this.http.get(`${this.apiUrl}/reportes/completo`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en reporte completo:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  /**
   * Exportar reporte por edad a Excel
   */
  exportarReporteEdadExcel() {
    return this.http.get(`${this.apiUrl}/reportes/edad/excel`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por género a Excel
   */
  exportarReporteGeneroExcel() {
    return this.http.get(`${this.apiUrl}/reportes/genero/excel`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por departamento a Excel
   */
  exportarReporteDepartamentoExcel() {
    return this.http.get(`${this.apiUrl}/reportes/departamento/excel`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por discapacidad a Excel
   */
  exportarReporteDiscapacidadExcel() {
    return this.http.get(`${this.apiUrl}/reportes/discapacidad/excel`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por edad a PDF
   */
  exportarReporteEdadPDF() {
    return this.http.get(`${this.apiUrl}/reportes/edad/pdf`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por género a PDF
   */
  exportarReporteGeneroPDF() {
    return this.http.get(`${this.apiUrl}/reportes/genero/pdf`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por departamento a PDF
   */
  exportarReporteDepartamentoPDF() {
    return this.http.get(`${this.apiUrl}/reportes/departamento/pdf`, {
      responseType: 'blob'
    });
  }
  /**
   * Exportar reporte por discapacidad a PDF
   */
  exportarReporteDiscapacidadPDF() {
    return this.http.get(`${this.apiUrl}/reportes/discapacidad/pdf`, {
      responseType: 'blob'
    });
  }
  // ========== VALIDACIONES ==========
  validarIdentidad(numeroDocumento) {
    return this.http.post(`${this.apiUrl}/validar-identidad`, {
      numero_documento: numeroDocumento
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en validar identidad:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // ========== EXPORTACIONES ==========
  exportarExcel() {
    return this.http.get(`${this.apiUrl}/exportar-excel`, {
      responseType: 'blob'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en exportarExcel:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  exportarPDF(id) {
    return this.http.get(`${this.apiUrl}/${id}/exportar-pdf`, {
      responseType: 'blob'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en exportarPDF:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  generarFichaCompleta(id) {
    return this.http.get(`${this.apiUrl}/${id}/ficha`, {
      responseType: 'blob'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en generarFichaCompleta:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // ========== FIRMA DIGITAL ==========
  guardarFirma(personaId, firmaBase64) {
    const data = {
      firma_digital: firmaBase64
    };
    return this.http.post(`${this.apiUrl}/${personaId}/firma`, data, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error guardando firma:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  obtenerFirma(personaId) {
    return this.http.get(`${this.apiUrl}/${personaId}/firma`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error obteniendo firma:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // ========== FOTO ==========
  subirFoto(personaId, fotoBase64) {
    const data = {
      foto_cifrada: fotoBase64
    };
    return this.http.post(`${this.apiUrl}/${personaId}/foto`, data, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error subiendo foto:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  obtenerFoto(personaId) {
    return this.http.get(`${this.apiUrl}/${personaId}/foto`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('Error obteniendo foto:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // ========== MÉTODOS DE COMPATIBILIDAD ==========
  crear(persona) {
    return this.http.post(this.apiUrl, persona).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en crear:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  actualizar(id, datos) {
    return this.http.put(`${this.apiUrl}/${id}`, datos).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en actualizar:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en eliminar:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  eliminarPersonaFisicamente(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en obtenerPorId:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  paginar(pagina = 1, porPagina = 15) {
    return this.http.get(this.apiUrl, {
      params: {
        page: pagina.toString(),
        per_page: porPagina.toString()
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error('❌ Error en paginar:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  static ɵfac = function PersonaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonaService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: PersonaService,
    factory: PersonaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9105:
/*!*********************************************************************!*\
  !*** ./src/app/shared/features/login/services/countdown.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownService: () => (/* binding */ CountdownService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class CountdownService {
  ngZone;
  timer = null;
  constructor(ngZone) {
    this.ngZone = ngZone;
  }
  startCountdown(until, onTick, onComplete) {
    this.stopCountdown();
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        const now = new Date();
        const diff = until.getTime() - now.getTime();
        if (diff <= 0) {
          this.ngZone.run(() => onComplete());
          this.stopCountdown();
          return;
        }
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor(diff % 60000 / 1000);
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        this.ngZone.run(() => {
          onTick(minutes, seconds, timeString);
        });
      }, 1000);
    });
  }
  stopCountdown() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  static ɵfac = function CountdownService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CountdownService,
    factory: CountdownService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 13443:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _config_app_config_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-config.token */ 96048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ 88705);






class UserService {
  http;
  tokenService;
  cfg;
  userKey = 'currentUser';
  currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(http, tokenService, cfg) {
    this.http = http;
    this.tokenService = tokenService;
    this.cfg = cfg;
    this.loadStoredUser();
  }
  saveUserData(userData) {
    this.currentUserSubject.next(userData);
    localStorage.setItem(this.userKey, JSON.stringify(userData));
    sessionStorage.setItem('current_user', JSON.stringify(userData));
  }
  getCurrentUser() {
    const user = this.currentUserSubject.value;
    if (user) return user;
    const stored = localStorage.getItem(this.userKey);
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  loadStoredUser() {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) {
      const sessionUser = sessionStorage.getItem('current_user');
      if (sessionUser) {
        try {
          const user = JSON.parse(sessionUser);
          this.currentUserSubject.next(user);
          localStorage.setItem(this.userKey, sessionUser);
        } catch {}
      }
      return;
    }
    try {
      const user = JSON.parse(stored);
      this.currentUserSubject.next(user);
    } catch {}
  }
  clearUserData() {
    localStorage.removeItem(this.userKey);
    sessionStorage.removeItem('current_user');
    this.currentUserSubject.next(null);
  }
  getProfile() {
    const url = `${this.cfg.apiUrl}/auth/me`;
    return this.http.get(url, {
      headers: this.tokenService.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(resp => {
      if (resp?.success && resp.data) this.saveUserData(resp.data);
    }));
  }
  updateProfile(profile) {
    const url = `${this.cfg.apiUrl}/auth/update-profile`;
    return this.http.put(url, profile, {
      headers: this.tokenService.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(resp => {
      if (resp?.success && resp.data) this.saveUserData(resp.data);
    }));
  }
  static ɵfac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_5__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_config_app_config_token__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19964:
/*!**************************************************!*\
  !*** ./src/app/core/services/sidebar.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarService: () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class SidebarService {
  isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  isCollapsed$ = this.isCollapsedSubject.asObservable();
  toggleSidebar() {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }
  setCollapsed(collapsed) {
    this.isCollapsedSubject.next(collapsed);
  }
  getCollapsed() {
    return this.isCollapsedSubject.value;
  }
  static ɵfac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SidebarService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SidebarService,
    factory: SidebarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ 76233);
/* harmony import */ var _core_components_session_timeout_session_timeout_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/session-timeout/session-timeout-modal.component */ 63443);
/* harmony import */ var _shared_components_otp_code_otp_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/otp-code/otp-code.component */ 45757);
/* harmony import */ var _shared_components_otp_code_codigo_maestro_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/otp-code/codigo-maestro-modal.component */ 3711);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/header/header.component */ 50468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/notification/notification.service */ 97407);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/auth.service */ 68010);
/* harmony import */ var _app_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../app/shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/loading.service */ 98660);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/services/module-loader.service */ 37780);



















function AppComponent_app_header_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-header");
  }
}
class AppComponent {
  notificationService;
  authService;
  router;
  themeService;
  loadingService;
  moduleLoader;
  ngZone;
  title = 'SIGPAZ';
  lastModule = '';
  initialLoadDone = false;
  showHeader = true;
  currentTheme = 'light';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  navigationTimeout;
  hideHeaderRoutes = ['/login', '/login?sessionExpired=true', '/login?sessionExpired=true&reason=inactivity', '/login?sessionExpired=true&reason=refresh_failed', '/login?sessionExpired=true&reason=idle_timeout', '/login?sessionExpired=true&reason=forced_logout', '/forgot-password', '/reset-password', '/security-questions', '/configue-questions', '/configure-security', '/home'];
  constructor(notificationService, authService, router, themeService, loadingService, moduleLoader, ngZone) {
    this.notificationService = notificationService;
    this.authService = authService;
    this.router = router;
    this.themeService = themeService;
    this.loadingService = loadingService;
    this.moduleLoader = moduleLoader;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
      document.body.classList.remove('light-theme', 'dark-theme', 'neon-theme');
      document.body.classList.add(`${theme}-theme`);
    });
    // Escuchar eventos de navegación
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.RoutesRecognized || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationError)).subscribe(event => {
      this.ngZone.run(() => {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
          const url = event.url;
          const module = this.getModuleFromUrl(url);
          if (module && module !== this.lastModule) {
            console.log(`🚀 Iniciando navegación a: ${module}`);
            // Limpiar cualquier loading anterior
            this.moduleLoader.forceHideLoading();
            // Registrar el nuevo módulo
            this.moduleLoader.registerModuleLoading(module);
            this.lastModule = module;
          }
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.RoutesRecognized) {
          console.log(`📍 Ruta reconocida: ${event.url}`);
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
          if (this.navigationTimeout) {
            clearTimeout(this.navigationTimeout);
          }
          const url = event.urlAfterRedirects;
          const baseUrl = url.split('?')[0]; // ✅ Extraer ruta base
          const shouldHide = this.hideHeaderRoutes.some(route => url === route || url.startsWith(route + '/'));
          this.showHeader = !shouldHide;
          console.log(`📍 URL: ${url}, Base: ${baseUrl}, showHeader: ${this.showHeader}`);
          const module = this.getModuleFromUrl(baseUrl);
          if (module) {
            console.log(`✅ Navegación completada a: ${module}`);
          }
          // Notificar módulo cargado
          this.notificationService.addNotification({
            title: 'Navegación',
            message: `Accedió al módulo: ${module}`,
            type: 'info',
            module: 'sistema',
            metadata: {
              action: 'navigation',
              url: url
            }
          }).subscribe();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationError) {
          if (this.navigationTimeout) {
            clearTimeout(this.navigationTimeout);
          }
          this.moduleLoader.forceHideLoading();
          console.error('Error de navegación:', event.error);
        }
      });
    });
  }
  ngOnDestroy() {
    if (this.navigationTimeout) {
      clearTimeout(this.navigationTimeout);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  getModuleFromUrl(url) {
    const moduleMap = {
      '/dashboard': 'Vista General Dashboard',
      '/personas': 'Gestión de Personas',
      '/catalogos': 'Catálogos del Sistema',
      '/denuncias': 'Gestión de Denuncias',
      //'/seguridad/auditorias': 'Gestión de Auditoría y Logs',
      '/seguridad/usuarios': 'Administración de Usuarios',
      '/seguridad/accesos': 'Administración de Accesos y Permisos',
      '/intermediaciones': 'Gestión de Intermediaciones',
      '/resoluciones': 'Gestión de Resoluciones',
      '/expedientes': 'Gestión de Expedientes',
      '/calendario': 'Gestión de Calendario y Asistencia',
      '/reportes': 'Gestión de Reportes y Estadísticas',
      '/personal': 'Gestión de Personal',
      '/manuales/usuario': 'Manuales de Usuario',
      '/backup': 'Gestión de Respaldo y Restauración'
    };
    for (const [route, moduleName] of Object.entries(moduleMap)) {
      if (url.includes(route)) {
        return moduleName;
      }
    }
    return '';
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_13__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_15__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_16__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_17__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 1,
    consts: [[4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "router-outlet")(2, "p-toast")(3, "app-session-timeout-modal")(4, "app-loading")(5, "app-otp-code")(6, "app-codigo-maestro-modal");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showHeader);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_1__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_1__.Toast, _core_components_session_timeout_session_timeout_modal_component__WEBPACK_IMPORTED_MODULE_3__.SessionTimeoutModalComponent, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_components_otp_code_otp_code_component__WEBPACK_IMPORTED_MODULE_4__.OtpCodeComponent, _shared_components_otp_code_codigo_maestro_modal_component__WEBPACK_IMPORTED_MODULE_5__.CodigoMaestroModalComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25800:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/features/security-questions/services/security-session.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecuritySessionService: () => (/* binding */ SecuritySessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class SecuritySessionService {
  loadSession() {
    const securitySession = sessionStorage.getItem('security_session');
    if (!securitySession) return null;
    try {
      const rawSession = JSON.parse(securitySession);
      return this.normalizeSessionData(rawSession);
    } catch (e) {
      console.error('Error parseando sesión:', e);
      return null;
    }
  }
  saveSession(sessionData) {
    sessionStorage.setItem('security_session', JSON.stringify(sessionData));
  }
  cleanup() {
    sessionStorage.removeItem('security_session');
    localStorage.removeItem('token_temp');
  }
  normalizeSessionData(rawSession) {
    let preguntasActuales = [];
    if (rawSession.preguntas_actuales && rawSession.preguntas_actuales.length > 0) {
      preguntasActuales = rawSession.preguntas_actuales;
    } else if (rawSession.preguntas && rawSession.preguntas.length > 0) {
      preguntasActuales = rawSession.preguntas;
    } else if (rawSession.pregunta_id && rawSession.pregunta) {
      preguntasActuales = [{
        pregunta_id: rawSession.pregunta_id,
        texto: rawSession.pregunta
      }];
    }
    return {
      usuario_id: rawSession.usuario_id || 0,
      session_id: rawSession.session_id,
      token_temp: rawSession.token_temp || '',
      preguntas_actuales: preguntasActuales,
      intentos_realizados: rawSession.intentos_realizados || 0,
      max_intentos: rawSession.max_intentos || rawSession.intentos_restantes || 3,
      preguntas_disponibles: rawSession.preguntas_disponibles || [...preguntasActuales],
      preguntas_usadas: rawSession.preguntas_usadas || [],
      bloqueado_hasta: rawSession.bloqueado_hasta
    };
  }
  getAvailableQuestions(sessionData) {
    if (sessionData.preguntas_disponibles?.length) {
      return sessionData.preguntas_disponibles;
    }
    if (sessionData.preguntas_actuales?.length) {
      return sessionData.preguntas_actuales;
    }
    if (sessionData.preguntas?.length) {
      return sessionData.preguntas;
    }
    return [];
  }
  getNextQuestion(sessionData) {
    const availableQuestions = this.getAvailableQuestions(sessionData);
    if (!availableQuestions.length) return null;
    const usedQuestions = sessionData.preguntas_usadas || [];
    let unusedQuestions = availableQuestions.filter(q => !usedQuestions.includes(q.pregunta_id));
    if (unusedQuestions.length === 0) {
      unusedQuestions = [...availableQuestions];
      sessionData.preguntas_usadas = [];
    }
    const nextQuestion = unusedQuestions[0];
    this.markQuestionAsUsed(sessionData, nextQuestion.pregunta_id);
    return nextQuestion;
  }
  markQuestionAsUsed(sessionData, questionId) {
    if (!sessionData.preguntas_usadas) {
      sessionData.preguntas_usadas = [];
    }
    if (!sessionData.preguntas_usadas.includes(questionId)) {
      sessionData.preguntas_usadas.push(questionId);
    }
  }
  static ɵfac = function SecuritySessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SecuritySessionService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SecuritySessionService,
    factory: SecuritySessionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28399:
/*!*****************************************************************!*\
  !*** ./src/app/shared/features/login/services/theme.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class ThemeService {
  themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('light');
  theme$ = this.themeSubject.asObservable();
  constructor() {
    this.loadTheme();
  }
  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark', 'neon'].includes(savedTheme)) {
      this.setTheme(savedTheme);
    }
  }
  setTheme(theme) {
    // ✅ Aplicar tema al body (global)
    document.body.classList.remove('light-theme', 'dark-theme', 'neon-theme');
    document.body.classList.add(`${theme}-theme`);
    // ✅ Guardar en localStorage
    localStorage.setItem('theme', theme);
    // ✅ Notificar a todos los suscriptores
    this.themeSubject.next(theme);
    console.log(`🎨 Tema cambiado a: ${theme}`);
  }
  getTheme() {
    return this.themeSubject.value;
  }
  toggleTheme() {
    const themes = ['light', 'dark', 'neon'];
    const currentIndex = themes.indexOf(this.getTheme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    this.setTheme(nextTheme);
  }
  static ɵfac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _app_shared_features_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/shared/features/login/login.component */ 32946);
/* harmony import */ var _app_shared_features_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/shared/features/security-questions/security-questions.component */ 45920);
/* harmony import */ var _shared_features_configure_questions_configure_security_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/features/configure-questions/configure-security.component */ 45815);
/* harmony import */ var _core_guards_security_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/security.guard */ 78006);
/* harmony import */ var _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/resolvers/module.resolver */ 44568);





const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_shared_features_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/features/home/home.component */ 73006)).then(m => m.HomeComponent)
}, {
  path: 'login',
  component: _app_shared_features_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'forgot-password',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_shared_features_reset-password_forgot-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/features/reset-password/forgot-password.component */ 81404)).then(m => m.ForgotPasswordComponent)
}, {
  path: 'reset-password',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_shared_features_reset-password_reset-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shared/features/reset-password/reset-password.component */ 73630)).then(m => m.ResetPasswordComponent)
}, {
  path: 'configure-security',
  component: _shared_features_configure_questions_configure_security_component__WEBPACK_IMPORTED_MODULE_2__.ConfigureSecurityComponent,
  canActivate: [_core_guards_security_guard__WEBPACK_IMPORTED_MODULE_3__.securityGuard]
}, {
  path: 'security-questions',
  component: _app_shared_features_security_questions_security_questions_component__WEBPACK_IMPORTED_MODULE_1__.SecurityQuestionsComponent,
  canActivate: [_core_guards_security_guard__WEBPACK_IMPORTED_MODULE_3__.securityGuard]
}, {
  path: '',
  canActivate: [_core_guards_security_guard__WEBPACK_IMPORTED_MODULE_3__.securityGuard],
  // TODAS las rutas hijas requieren seguridad
  children: [{
    path: 'dashboard',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-node_modules_chart_js_dist_chart_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_dashboard_dashboard_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.component */ 69786)).then(m => m.DashboardComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Dashboard'
  }, {
    path: 'denuncias',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-src_app_services_remision-conciliacion_service_ts-src_app_services_sentencia_service_ts"), __webpack_require__.e("default-node_modules_ng-qrcode_fesm2022_ng-qrcode_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_denuncias_pages_denuncias-list_denuncias-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/denuncias/pages/denuncias-list/denuncias-list.component */ 30038)).then(m => m.DenunciasListComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Denuncias'
  }, {
    path: 'catalogos',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_catalogos_pages_catalogos-list_catalogos_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/catalogos/pages/catalogos-list/catalogos.component */ 74962)).then(m => m.CatalogosComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Normativas'
  }, {
    path: 'personas',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-node_modules_ng-qrcode_fesm2022_ng-qrcode_mjs"), __webpack_require__.e("src_app_modules_personas_pages_personas_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/personas/pages/personas.component */ 11003)).then(m => m.PersonasListComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Personas'
  }, {
    path: 'intermediaciones',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-src_app_services_remision-conciliacion_service_ts-src_app_services_sentencia_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_intermediaciones_pages_intermediacion_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/intermediaciones/pages/intermediacion.component */ 72859)).then(m => m.RemisionConciliacionComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Intermediaciones'
  }, {
    path: 'resoluciones',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-src_app_services_remision-conciliacion_service_ts-src_app_services_sentencia_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_resoluciones_pages_resolucion_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/resoluciones/pages/resolucion.component */ 36379)).then(m => m.MedidaSentenciaComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Resoluciones'
  }, {
    path: 'expedientes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_expedientes_pages_expediente_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/expedientes/pages/expediente.component */ 78032)).then(m => m.ExpedienteComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Expedientes'
  }, {
    path: 'personal',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_personal_pages_personal_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/personal/pages/personal.component */ 77029)).then(m => m.PersonalListComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Personal'
  }, {
    path: 'calendario',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_calendario_pages_calendario_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/calendario/pages/calendario.component */ 82253)).then(m => m.CalendarioComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Calendario'
  }, {
    path: 'reportes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_reportes_pages_reportes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/reportes/pages/reportes.component */ 38709)).then(m => m.ReportesNotificacionesComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Reportes'
  }, {
    path: 'seguridad',
    children: [{
      path: 'usuarios',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_seguridad_pages_usuarios_usuarios_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/seguridad/pages/usuarios/usuarios.component */ 98116)).then(m => m.UsuariosComponent),
      resolve: {
        module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
      },
      title: 'SIGPAZ │ Usuarios'
    }, {
      path: 'accesos',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_seguridad_pages_accesos_acceso_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/seguridad/pages/accesos/acceso.component */ 61687)).then(m => m.AccesosComponent),
      resolve: {
        module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
      },
      title: 'SIGPAZ │ Accesos'
    }, {
      path: 'auditorias',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("default-node_modules_chart_js_dist_chart_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_seguridad_pages_auditorias_auditoria_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/seguridad/pages/auditorias/auditoria.component */ 19231)).then(m => m.AuditoriaComponent),
      resolve: {
        module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
      },
      data: {
        permission: 'auditoria.ver',
        title: 'Auditoría del Sistema'
      },
      title: 'SIGPAZ │ Auditorias'
    }]
  }, {
    path: 'backup',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_backup-restore_backup-restore_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/backup-restore/backup-restore.component */ 26002)).then(m => m.BackupRestoreComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Backup and Restore'
  }, {
    path: 'manuales',
    children: [{
      path: 'usuario',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_manuales_pages_manual-usuario_manual-usuario_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/manuales/pages/manual-usuario/manual-usuario.component */ 98478)).then(m => m.ManualUsuarioComponent),
      resolve: {
        module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
      },
      title: 'SIGPAZ │ Manual de Usuario'
    }, {
      path: 'tecnico',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_manuales_pages_manual-tecnico_manual-tecnico_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/manuales/pages/manual-tecnico/manual-tecnico.component */ 5808)).then(m => m.ManualTecnicoComponent),
      resolve: {
        module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
      },
      title: 'SIGPAZ │ Manual Técnico'
    }]
  }, {
    path: 'audiovisual',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_menu_menu_component_ts"), __webpack_require__.e("default-src_app_layouts_footer_footer_component_ts-src_app_modules_dashboard_components_help--596621"), __webpack_require__.e("src_app_modules_audiovisual_pages_audiovisual_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/audiovisual/pages/audiovisual.component */ 28373)).then(m => m.AudiovisualComponent),
    resolve: {
      module: _core_resolvers_module_resolver__WEBPACK_IMPORTED_MODULE_4__.ModuleResolver
    },
    title: 'SIGPAZ │ Audiovisual'
  }, {
    path: '**',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_modules_not-found_not-found_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/not-found/not-found.component */ 97178)).then(m => m.NotFoundComponent)
  }]
}];

/***/ }),

/***/ 32946:
/*!**********************************************************!*\
  !*** ./src/app/shared/features/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/password */ 96371);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/theme.service */ 28399);
/* harmony import */ var _services_blocked_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/blocked.service */ 40574);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_countdown_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/countdown.service */ 9105);




// PrimeNG Modules



























const _c0 = ["emailInput"];
const _c1 = ["passwordInput"];
function LoginComponent_form_12_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "i", 57);
  }
}
function LoginComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_12_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 39)(2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, " Correo Electr\u00F3nico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "input", 44, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_form_12_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.credentials.email, $event) || (ctx_r1.credentials.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 39)(10, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, " Contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "input", 47, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_form_12_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.credentials.password, $event) || (ctx_r1.credentials.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_i_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 49)(19, "div", 50)(20, "p-checkbox", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_form_12_Template_p_checkbox_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r1.rememberMe, $event) || (ctx_r1.rememberMe = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_label_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.rememberMe = !ctx_r1.rememberMe);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, "Recordarme");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r1.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, " \u00BFOlvid\u00F3 su contrase\u00F1a? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, LoginComponent_form_12_i_29_Template, 1, 0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.credentials.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.loading || ctx_r1.isFormDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.credentials.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx_r1.loading || ctx_r1.isFormDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("pi-eye-slash", ctx_r1.showPassword)("pi-eye", !ctx_r1.showPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rememberMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("binary", true)("disabled", ctx_r1.loading || ctx_r1.isFormDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx_r1.credentials.email || !ctx_r1.credentials.password || ctx_r1.loading || ctx_r1.isFormDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r1.loading ? "Iniciando sesi\u00F3n..." : "Ingresar al Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function LoginComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "Verificando credenciales...");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function LoginComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](msg_r3.detail);
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 4, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
  }
}
function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "Cuenta temporalmente bloqueada");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "Sistema de bloqueo SIGPAZ - Protecci\u00F3n de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
class LoginComponent {
  authService;
  router;
  route;
  cdr;
  ngZone;
  messageService;
  themeService;
  blockedService;
  moduleLoader;
  loadingService;
  countdownService;
  moduleName = 'Autenticación';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  emailInput;
  passwordInput;
  // Datos de login
  credentials = {
    email: '',
    password: ''
  };
  rememberMe = false;
  loading = false;
  returnUrl = '/dashboard';
  messages = [];
  // Estado de bloqueo
  blockedState = {
    isBlocked: false,
    message: '',
    until: null,
    minutes: 0,
    seconds: 0,
    remainingTime: ''
  };
  showBlockedDialog = false;
  isFormDisabled = false;
  // Opciones de tema
  themeOptions = [{
    label: '☀️ Claro',
    value: 'light',
    icon: 'pi pi-sun'
  }, {
    label: '🌙 Oscuro',
    value: 'dark',
    icon: 'pi pi-moon'
  }, {
    label: '⚡ Neón',
    value: 'neon',
    icon: 'pi pi-bolt'
  }];
  currentTheme = 'light';
  // Animaciones y efectos
  showPassword = false;
  isHovered = false;
  countdownInterval = null;
  constructor(authService, router, route, cdr, ngZone, messageService, themeService, blockedService, moduleLoader, loadingService, countdownService) {
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.messageService = messageService;
    this.themeService = themeService;
    this.blockedService = blockedService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.countdownService = countdownService;
  }
  ngOnInit() {
    this.initializeComponent();
    this.checkBlockedStatus();
    this.checkRedirectIfAuthenticated();
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
  ngOnDestroy() {
    this.cleanup();
    this.moduleLoader.markModuleRendered(this.moduleName);
    this.markModuleAsReady();
  }
  checkBlockedStatus() {
    const email = localStorage.getItem('blocked_email');
    if (!email) return;
    this.authService.checkBlockStatus(email).subscribe({
      next: response => {
        if (response.is_blocked && response.blocked_until) {
          // Usuario sigue bloqueado
          this.blockedState = {
            isBlocked: true,
            message: 'Cuenta bloqueada temporalmente',
            until: new Date(response.blocked_until),
            minutes: 0,
            seconds: 0,
            remainingTime: ''
          };
          this.showBlockedDialog = true;
          this.isFormDisabled = true;
          this.disableInputs();
          this.startBlockCountdown();
          // Recuperar el email bloqueado
          this.credentials.email = email;
        } else {
          // Usuario ya no está bloqueado
          localStorage.removeItem('blocked_email');
        }
      },
      error: () => {
        localStorage.removeItem('blocked_email');
      }
    });
  }
  handleBlockedState(errorData) {
    this.blockedState = this.blockedService.parseBlockedResponse(errorData);
    // ✅ Guardar email bloqueado en localStorage
    localStorage.setItem('blocked_email', this.credentials.email);
    this.showBlockedDialog = true;
    this.isFormDisabled = true;
    this.disableInputs();
    this.startBlockCountdown();
    this.showToastMessage('error', 'Cuenta Bloqueada', this.blockedState.message);
  }
  onBlockExpired() {
    this.countdownService.stopCountdown();
    this.showBlockedDialog = false;
    this.isFormDisabled = false;
    this.blockedState.isBlocked = false;
    // ✅ Limpiar email bloqueado
    localStorage.removeItem('blocked_email');
    this.enableInputs();
    this.showToastMessage('success', 'Cuenta Desbloqueada', 'Su cuenta ha sido desbloqueada. Puede intentar nuevamente.');
  }
  initializeComponent() {
    this.checkRedirectIfAuthenticated();
    this.setupQueryParams();
    this.loadSavedTheme();
  }
  checkRedirectIfAuthenticated() {
    // ✅ Primero: ¿Hay alguna sesión activa?
    if (!this.authService.isAuthenticated()) {
      console.log('❌ No hay sesión activa, mostrar login');
      return; // No hay sesión, dejar que muestre el formulario de login
    }
    console.log('✅ Sesión activa detectada, redirigiendo según tipo...');
    // ✅ Caso 1: Token definitivo (sesión completa)
    if (this.authService.getToken()) {
      console.log('🔑 Token definitivo → Dashboard');
      this.router.navigate(['/dashboard'], {
        replaceUrl: true
      });
      return;
    }
    // ✅ Caso 2: Token temporal (necesita validar preguntas)
    if (localStorage.getItem('token_temp')) {
      console.log('🔐 Token temporal → Security Questions');
      this.router.navigate(['/security-questions'], {
        replaceUrl: true
      });
      return;
    }
    // ✅ Caso 3: Sesión de seguridad activa
    if (sessionStorage.getItem('security_session')) {
      console.log('🛡️ Sesión de seguridad → Security Questions');
      this.router.navigate(['/security-questions'], {
        replaceUrl: true
      });
      return;
    }
    // ✅ Caso 4: Necesita configurar preguntas
    if (localStorage.getItem('require_security_setup') === 'true') {
      console.log('⚙️ Configuración de preguntas pendiente → Configure Security');
      this.router.navigate(['/configure-security'], {
        replaceUrl: true
      });
      return;
    }
    // ✅ Por defecto: ir a home
    console.log('⚠️ Sesión indeterminada → Home');
    this.router.navigate(['/home'], {
      replaceUrl: true
    });
  }
  setupQueryParams() {
    this.route.queryParams.subscribe(params => {
      console.log('📋 [Login] QueryParams recibidos:', params);
      this.returnUrl = params['returnUrl'] || '/dashboard';
      // ✅ Manejar diferentes razones de expiración
      if (params['sessionExpired'] === 'true') {
        const reason = params['reason'];
        let message = '';
        switch (reason) {
          case 'refresh_failed':
            message = 'No se pudo renovar su sesión. Por favor, inicie sesión nuevamente.';
            break;
          case 'inactivity':
            message = 'Su sesión se cerró por inactividad. Por favor, inicie sesión nuevamente.';
            break;
          case 'token_refresh_failed':
            message = 'La sesión expiró y no se pudo renovar automáticamente.';
            break;
          default:
            message = 'Su sesión ha expirado. Por favor, inicie sesión nuevamente.';
        }
        this.showToastMessage('warn', 'Sesión Expirada', message);
      }
      if (params['unauthorized']) {
        this.showToastMessage('error', 'Acceso Denegado', 'Debe iniciar sesión para acceder a esta página.');
      }
    });
  }
  loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.currentTheme = savedTheme;
    this.applyTheme(savedTheme);
  }
  changeTheme(theme) {
    this.currentTheme = theme;
    this.applyTheme(theme);
    this.themeService.setTheme(theme);
    localStorage.setItem('theme', theme);
    this.showToastMessage('success', 'Tema Cambiado', `Tema ${theme === 'light' ? 'claro' : theme === 'dark' ? 'oscuro' : 'neón'} activado`);
  }
  applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme', 'neon-theme');
    document.body.classList.add(`${theme}-theme`);
  }
  onSubmit() {
    if (this.isFormDisabled) return;
    this.loading = true;
    this.messages = [];
    this.authService.login(this.credentials).subscribe({
      next: response => {
        this.handleLoginSuccess(response);
      },
      error: error => {
        this.handleLoginError(error);
      }
    });
  }
  handleLoginSuccess(response) {
    this.loading = false;
    if (response.requiere_configurar_preguntas) {
      this.router.navigate(['/configure-security']);
    } else if (response.requiere_preguntas) {
      this.router.navigate(['/security-questions']);
    } else if (response.access_token) {
      localStorage.setItem('access_token', response.access_token);
      this.router.navigate(['/dashboard']);
    }
  }
  handleLoginError(error) {
    this.loading = false;
    if (error.status === 423) {
      this.handleBlockedState(error.error);
    } else if (error.status === 401) {
      this.showError('Credenciales incorrectas');
      this.animateShake();
    } else {
      this.showError(error.message || 'Error de conexión');
    }
  }
  startBlockCountdown() {
    if (!this.blockedState.until) return;
    this.countdownService.startCountdown(this.blockedState.until, (minutes, seconds, timeString) => {
      this.blockedState.minutes = minutes;
      this.blockedState.seconds = seconds;
      this.blockedState.remainingTime = timeString;
      this.cdr.detectChanges();
    }, () => {
      this.onBlockExpired();
    });
  }
  switchToDifferentUser() {
    const confirmed = confirm(`¿Desea intentar con un email diferente?\n\n` + `⚠️ Nota: ${this.credentials.email} permanecerá bloqueado.\n` + `Puede volver a intentar cuando termine el tiempo.`);
    if (confirmed) {
      this.countdownService.stopCountdown();
      this.showBlockedDialog = false;
      this.isFormDisabled = false;
      this.clearFormForNewUser();
    }
  }
  clearFormForNewUser() {
    const blockedEmail = this.credentials.email;
    this.credentials = {
      email: '',
      password: ''
    };
    this.messages = [];
    setTimeout(() => {
      if (this.emailInput?.nativeElement) {
        this.emailInput.nativeElement.focus();
        this.emailInput.nativeElement.placeholder = `Email diferente a ${blockedEmail}`;
      }
    }, 300);
  }
  forgotPassword() {
    const email = this.credentials.email;
    this.router.navigate(['/forgot-password'], {
      state: {
        email: email
      } // ✅ No aparece en la URL
    });
  }
  showError(message) {
    this.messages = [{
      severity: 'error',
      summary: 'Error',
      detail: message
    }];
  }
  animateShake() {
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
      loginCard.classList.add('shake-animation');
      setTimeout(() => {
        loginCard.classList.remove('shake-animation');
      }, 500);
    }
  }
  showToastMessage(severity, summary, detail) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 5000
    });
  }
  disableInputs() {
    setTimeout(() => {
      if (this.emailInput?.nativeElement) this.emailInput.nativeElement.disabled = true;
      if (this.passwordInput?.nativeElement) this.passwordInput.nativeElement.disabled = true;
    }, 100);
  }
  enableInputs() {
    setTimeout(() => {
      if (this.emailInput?.nativeElement) this.emailInput.nativeElement.disabled = false;
      if (this.passwordInput?.nativeElement) this.passwordInput.nativeElement.disabled = false;
      if (this.emailInput?.nativeElement) this.emailInput.nativeElement.focus();
    }, 150);
  }
  cleanup() {
    this.countdownService.stopCountdown();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  goToHome() {
    console.log('🏠 Navegando a home desde login');
    // ✅ Limpiar cualquier parámetro de sesión expirada
    this.router.navigate(['/home'], {
      replaceUrl: true,
      queryParams: {} // Limpiar cualquier queryParam
    });
  }
  static ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_19__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_22__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_blocked_service__WEBPACK_IMPORTED_MODULE_23__.BlockedService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_24__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_25__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_countdown_service__WEBPACK_IMPORTED_MODULE_26__.CountdownService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    viewQuery: function LoginComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.emailInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.passwordInput = _t.first);
      }
    },
    decls: 77,
    vars: 21,
    consts: [["emailInput", ""], ["passwordInput", ""], [1, "login-container"], ["position", "top-right"], [1, "login-wrapper"], [1, "login-card"], [1, "login-header"], [1, "logo-icon"], [1, "pi", "pi-gavel"], [1, "logo-text"], ["src", "/images/logo_sigpaz.png", "alt", "Justicia 3D Logo", 1, "logo-image"], [3, "ngSubmit", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-messages", 4, "ngIf"], ["class", "blocked-notice", 4, "ngIf"], [1, "back-home-btn", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "login-footer"], [1, "security-badges"], [1, "pi", "pi-shield"], [1, "pi", "pi-lock"], [1, "help-text"], ["styleClass", "blocked-dialog", 3, "visibleChange", "visible", "modal", "closable", "draggable", "closeOnEscape"], [1, "blocked-content"], [1, "blocked-icon"], [1, "blocked-message"], [1, "countdown-container"], [1, "countdown-timer"], [1, "time-block"], [1, "time-value"], [1, "time-label"], [1, "separator"], [1, "info-box"], [1, "pi", "pi-info-circle"], [1, "info-text"], [1, "switch-user-btn", 3, "click"], [1, "pi", "pi-user-plus"], ["pTemplate", "footer"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "pi", "pi-envelope"], [1, "input-wrapper"], [1, "pi", "pi-envelope", "input-icon"], ["pInputText", "", "type", "email", "id", "email", "name", "email", "placeholder", "tu@email.com", "required", "", "autocomplete", "email", 3, "ngModelChange", "ngModel", "disabled"], ["for", "password"], [1, "pi", "pi-lock", "input-icon"], ["pInputText", "", "id", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", "autocomplete", "current-password", 3, "ngModelChange", "type", "ngModel", "disabled"], [1, "pi", "pi-eye", "password-toggle", 3, "click"], [1, "form-options"], [1, "checkbox-wrapper"], ["name", "rememberMe", 3, "ngModelChange", "ngModel", "binary", "disabled"], [3, "click"], [1, "forgot-link", 3, "click"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "pi", "pi-sign-in"], ["class", "pi pi-arrow-right", 4, "ngIf"], [1, "pi", "pi-arrow-right"], [1, "loading-overlay"], [1, "spinner-wrapper"], [1, "spinner"], [1, "error-messages"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"], [1, "pi", "pi-exclamation-triangle"], [1, "blocked-notice"], [1, "dialog-footer"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "p-toast", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 6)(6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "Sistema Integral de Gesti\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, LoginComponent_form_12_Template, 30, 15, "form", 11)(13, LoginComponent_div_13_Template, 5, 0, "div", 12)(14, LoginComponent_div_14_Template, 2, 1, "div", 13)(15, LoginComponent_div_15_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_16_listener() {
          return ctx.goToHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "Volver al Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 17)(21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, "SSL Seguro");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "Datos Encriptados");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, " \u00BFProblemas para acceder? Contacte al administrador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "p-dialog", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("visibleChange", function LoginComponent_Template_p_dialog_visibleChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.showBlockedDialog, $event) || (ctx.showBlockedDialog = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 23)(32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "Acceso Restringido Temporalmente");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "p", 25)(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, " ha sido bloqueado por seguridad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 26)(41, "div", 27)(42, "div", 28)(43, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46, "MINUTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "div", 28)(50, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](52, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "SEGUNDOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, "Tiempo restante para desbloqueo autom\u00E1tico");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](58, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 34)(60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, "Informaci\u00F3n importante:");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "ul")(63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](64, "Bloqueo por seguridad: 60 minutos");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](66, "El contador se actualiza en tiempo real");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](68, "Puede intentar con un email diferente");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](70, "Al desbloquearse tendr\u00E1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](72, "3 intentos nuevos");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_73_listener() {
          return ctx.switchToDifferentUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](74, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](75, " Intentar con otro usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](76, LoginComponent_ng_template_76_Template, 4, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassMap"](ctx.currentTheme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("disabled", ctx.isFormDisabled)("shake", ctx.isHovered);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isFormDisabled && !ctx.showBlockedDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("visible", ctx.showBlockedDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("modal", true)("closable", false)("draggable", false)("closeOnEscape", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.blockedState.minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](52, 18, ctx.blockedState.seconds, "2.0"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_21__.PrimeTemplate, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_messages__WEBPACK_IMPORTED_MODULE_6__.MessagesModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule, primeng_password__WEBPACK_IMPORTED_MODULE_10__.PasswordModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_15__.ThemeSwitcherComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__.SelectButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%,\n  100% {\n    box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(0, 255, 135, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 33px;\n  padding: 6px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--border-color);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.light[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.dark[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.neon[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 24px;\n  padding: 40px;\n  box-shadow: var(--shadow-xl);\n  transition: all 0.3s;\n  border: 1px solid var(--border-color);\n}\n.login-card.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n.login-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-xl);\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.login-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n  color: var(--text-primary);\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 15px 14px 45px;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: all 0.3s;\n  background: var(--input-bg);\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--input-focus);\n  outline: none;\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg);\n  cursor: not-allowed;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-options[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.form-options[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.form-options[_ngcontent-%COMP%]   .checkbox-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.form-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n.form-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--primary-hover);\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 15px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.error-messages[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.error-messages[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  background: var(--danger-light);\n  border-left: 3px solid var(--danger);\n  border-radius: 8px;\n  color: var(--danger);\n}\n.error-messages[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.login-footer[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.login-footer[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 15px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.login-footer[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.login-footer[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.blocked-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 12px;\n  background: var(--danger-light);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 0.85rem;\n}\n.blocked-notice[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.back-home-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 0.9rem;\n  font-weight: 500;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.05);\n  color: var(--text-primary);\n}\n.back-home-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: transform 0.3s;\n}\n.back-home-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  transform: translateX(-5px);\n}\n.back-home-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(-3px);\n}\n@media (max-width: 768px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .form-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n  }\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .login-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .login-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .blocked-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: var(--danger-light);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .blocked-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--danger);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--danger);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .blocked-message[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 25px;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--warning);\n  font-family: monospace;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-block[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  display: block;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--warning);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .countdown-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  background: var(--info-light);\n  border-radius: 12px;\n  padding: 15px;\n  text-align: left;\n  margin: 20px 0;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--info);\n  font-size: 1.2rem;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 5px 0 0 20px;\n  color: var(--text-secondary);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .switch-user-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: linear-gradient(135deg, var(--info), var(--info-hover));\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.blocked-dialog[_ngcontent-%COMP%]   .blocked-content[_ngcontent-%COMP%]   .switch-user-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.blocked-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n  .blocked-dialog .p-dialog {\n  border-radius: 24px;\n  overflow: hidden;\n  max-width: 480px;\n}\n  .blocked-dialog .p-dialog .p-dialog-header {\n  background: var(--gradient-danger);\n  color: white;\n  padding: 20px 24px;\n  border-bottom: none;\n}\n  .blocked-dialog .p-dialog .p-dialog-header .p-dialog-title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n  .blocked-dialog .p-dialog .p-dialog-content {\n  padding: 0;\n}\n  .blocked-dialog .p-dialog .p-dialog-footer {\n  padding: 16px 20px;\n  background: var(--bg-tertiary);\n  border-top: 1px solid var(--border-color);\n}\n.pi-bolt[_ngcontent-%COMP%]:before {\n  color: chartreuse;\n}\n.pi-moon[_ngcontent-%COMP%]:before {\n  color: black;\n}\n.pi-sun[_ngcontent-%COMP%]:before {\n  color: yellow;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  align-items: center;\n  letter-spacing: -0.5px;\n  transition: all 0.3s ease;\n  animation: float 3s infinite ease-in-out;\n  animation-delay: 0.5s;\n}\n.logo-text[_ngcontent-%COMP%]:hover {\n  animation: none;\n  transform: translateY(-2px);\n}\n.logo-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60px;\n  margin-left: -15px;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-left: 2px;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n  animation: _ngcontent-%COMP%_glow 2s infinite alternate;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--gradient-primary);\n  transition: width 0.3s ease;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0U7O0lBQVcsd0JBQUE7RUFQWDtFQVFBO0lBQU0sNEJBQUE7RUFMTjtFQU1BO0lBQU0sMkJBQUE7RUFITjtBQUNGO0FBS0E7RUFDRTtJQUFPLFVBQUE7SUFBWSw0QkFBQTtFQURuQjtFQUVBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBRWpCO0FBQ0Y7QUFBQTtFQUNFOztJQUFXLDJDQUFBO0VBSVg7RUFIQTtJQUFNLDJDQUFBO0VBTU47QUFDRjtBQUpBO0VBQ0U7SUFBSyx5QkFBQTtFQU9MO0FBQ0Y7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUFJRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQ0FBQTtBQUFGO0FBUEE7RUFVSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQXBCQTtFQXVCTSxlQUFBO0FBQU47QUF2QkE7RUEyQk0sa0JBQUE7QUFETjtBQUlJO0VBQ0UsMkJBQUE7QUFGTjtBQUtJO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFITjtBQU1JO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBUUk7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQU5OO0FBY0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFB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O0FBcElOO0FBNElBO0VBR00sbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBNUlOO0FBdUlBO0VBUVEsa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTVJUjtBQWlJQTtFQWNVLGdCQUFBO0VBQ0EsaUJBQUE7QUE1SVY7QUE2SEE7RUFvQlEsVUFBQTtBQTlJUjtBQTBIQTtFQXdCUSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QUEvSVI7QUFxSkE7RUFDRSxpQkFBQTtBQW5KRjtBQXFKQTtFQUNFLFlBQUE7QUFuSkY7QUFxSkE7RUFDRSxhQUFBO0FBbkpGO0FBeUpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFCQUFBO0FBdkpGO0FBeUpFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBdkpKO0FBMklBO0VBZ0JJLFlBQUE7RUFDQSxrQkFBQTtBQXhKSjtBQXVJQTtFQXFCSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBekpKO0FBMkpJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUF6Sk47QUE0Skk7RUFDRSxXQUFBO0FBMUpOIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPR0lOIC0gRVNUSUxPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgMCUsIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDI1NSwgMTM1LCAwLjMpOyB9XG4gIDUwJSB7IGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMjU1LCAxMzUsIDAuNik7IH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RJTE9TIEJBU0Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9naW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUSEVNRSBTV0lUQ0hFUiAoYm90b25lcyBkZSB0ZW1hKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50aGVtZS1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzNweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLnRoZW1lLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzksIDcwLCAyMjksIDAuMyk7XG4gICAgfVxuXG4gICAgJi5saWdodDpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgfVxuXG4gICAgJi5kYXJrOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5uZW9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMwMGYwZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTE9HSU4gV1JBUFBFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQ7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0dJTiBDQVJEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ2luLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogNDBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJi5zaGFrZSB7XG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dpbi1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLmxvZ28taWNvbiB7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT1JNVUxBUklPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pbnB1dC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDE0cHggMTVweCAxNHB4IDQ1cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWRpc2FibGVkLWJnKTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYXNzd29yZC10b2dnbGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT1BDSU9ORVMgREVMIEZPUk1VTEFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZm9ybS1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIC5jaGVja2JveC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gIH1cblxuICAuZm9yZ290LWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVMODwpNOIERFIExPR0lOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIE9WRVJMQVlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgLnNwaW5uZXItd3JhcHBlciB7XG4gICAgLnNwaW5uZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUVOU0FKRVMgREUgRVJST1Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZXJyb3ItbWVzc2FnZXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWRhbmdlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPT1RFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dpbi1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLnNlY3VyaXR5LWJhZGdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5oZWxwLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJMT1FVRUQgTk9USUNFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJsb2NrZWQtbm90aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFDSyBIT01FIEJVVFRPTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5iYWNrLWhvbWUtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG5cbiAgICBpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tY2FyZCB7XG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xuICB9XG5cbiAgLmZvcm0tb3B0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAudGhlbWUtc3dpdGNoZXIge1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC50aGVtZS1idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG5cbiAgICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dpbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmxvZ2luLWNhcmQge1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgfVxuXG4gIC5sb2dpbi1oZWFkZXIge1xuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIC5sb2dvLWljb24ge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEScODwoFMT0dPIERFIEJMT1FVRU8gLSBFU1RJTE9TIENPTVBBUlRJRE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJsb2NrZWQtZGlhbG9nIHtcbiAgLmJsb2NrZWQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmJsb2NrZWQtaWNvbiB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgIH1cblxuICAgIC5ibG9ja2VkLW1lc3NhZ2Uge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgLmNvdW50ZG93bi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgLmNvdW50ZG93bi10aW1lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICAudGltZS1ibG9jayB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgLnRpbWUtdmFsdWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGltZS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mby1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuXG4gICAgICAuaW5mby10ZXh0IHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMjBweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dpdGNoLXVzZXItYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWluZm8pLCB2YXIoLS1pbmZvLWhvdmVyKSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpYWxvZy1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUFJJTUVORyBESUFMT0cgT1ZFUlJJREVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOjpuZy1kZWVwIHtcbiAgLmJsb2NrZWQtZGlhbG9nIHtcbiAgICAucC1kaWFsb2cge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuXG4gICAgICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgICAgICAgLnAtZGlhbG9nLXRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgLnAtZGlhbG9nLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBpLWJvbHQ6YmVmb3Jle1xuICBjb2xvcjpjaGFydHJldXNlO1xufVxuLnBpLW1vb246YmVmb3Jle1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGktc3VuOmJlZm9yZXtcbiAgY29sb3I6eWVsbG93O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTE9HTyBURVhUIC0gVVNBTkRPIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBhbmltYXRpb246IGZsb2F0IDNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuXG4gIC5sb2dvLXNwZWNpYWwge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37780:
/*!********************************************************!*\
  !*** ./src/app/core/services/module-loader.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleLoaderService: () => (/* binding */ ModuleLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ 98660);


class ModuleLoaderService {
  loadingService;
  loadingModules = new Map();
  activeModuleId = null;
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  registerModuleLoading(moduleName, loadPromise) {
    console.log(`📦 Registrando carga de módulo: ${moduleName}`);
    if (this.activeModuleId && this.activeModuleId !== moduleName) {
      console.log(`🔄 Cambiando de módulo: ${this.activeModuleId} -> ${moduleName}`);
      this.loadingService.hideAll();
      this.loadingModules.clear();
    }
    this.activeModuleId = moduleName;
    if (!this.loadingService.isVisible()) {
      this.loadingService.show(`Cargando módulo: ${moduleName}...`, moduleName);
    }
    const promise = loadPromise || Promise.resolve();
    this.loadingModules.set(moduleName, {
      promise,
      startTime: Date.now(),
      componentInstance: null
    });
    promise.then(() => {
      console.log(`✅ Módulo ${moduleName} cargado (esperando renderizado)`);
    }).catch(error => {
      console.error(`❌ Error cargando módulo ${moduleName}:`, error);
      this.forceHideLoading();
    });
  }
  registerComponentInstance(moduleName, componentInstance) {
    const moduleData = this.loadingModules.get(moduleName);
    if (moduleData) {
      moduleData.componentInstance = componentInstance;
      this.loadingModules.set(moduleName, moduleData);
      console.log(`🔧 Componente registrado para módulo: ${moduleName}`);
    }
  }
  markModuleRendered(moduleName) {
    console.log(`🎨 Marcando módulo como renderizado: ${moduleName}`);
    const moduleData = this.loadingModules.get(moduleName);
    if (moduleData) {
      const loadTime = Date.now() - moduleData.startTime;
      console.log(`⏱️ Módulo ${moduleName} cargado en ${loadTime}ms`);
      // Limpiar el intervalo si existe
      if (moduleData.domCheckInterval) {
        clearInterval(moduleData.domCheckInterval);
      }
      this.loadingModules.delete(moduleName);
      if (this.loadingModules.size === 0) {
        console.log(`✅ Todos los módulos cargados, verificando DOM...`);
        // Verificar que el DOM esté listo antes de ocultar
        this.waitForDomAndHide();
      }
    }
  }
  waitForDomAndHide() {
    // Esperar a que el DOM se estabilice
    let checks = 0;
    const maxChecks = 80; // 8 segundos máximo
    const checkDom = setInterval(() => {
      checks++;
      // Buscar contenido principal del módulo
      const mainContent = document.querySelector('main, .main-content, .content-wrapper, router-outlet + *');
      const hasContent = mainContent && mainContent.children.length > 0;
      // También verificar que no haya skeleton loaders
      const hasSkeleton = document.querySelector('.skeleton-loader, .shimmer, .loading-placeholder');
      console.log(`🔍 Verificando DOM (${checks}/${maxChecks}): hasContent=${!!hasContent}, hasSkeleton=${!!hasSkeleton}`);
      if (hasContent && !hasSkeleton || checks >= maxChecks) {
        clearInterval(checkDom);
        console.log(`✅ DOM listo, ocultando loading definitivamente`);
        this.loadingService.hideAll();
        this.activeModuleId = null;
      }
    }, 100);
  }
  forceHideLoading() {
    console.log(`🛑 Force hide loading desde ModuleLoaderService`);
    this.loadingModules.forEach((_, key) => {
      const data = this.loadingModules.get(key);
      if (data?.domCheckInterval) {
        clearInterval(data.domCheckInterval);
      }
    });
    this.loadingModules.clear();
    this.loadingService.hideAll();
    this.activeModuleId = null;
  }
  static ɵfac = function ModuleLoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModuleLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ModuleLoaderService,
    factory: ModuleLoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 40574:
/*!*******************************************************************!*\
  !*** ./src/app/shared/features/login/services/blocked.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedService: () => (/* binding */ BlockedService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class BlockedService {
  parseBlockedResponse(errorData) {
    const blockedUntil = errorData?.bloqueado_hasta ? new Date(errorData.bloqueado_hasta) : new Date(Date.now() + 60 * 60 * 1000);
    return {
      isBlocked: true,
      message: errorData?.message || 'Usuario bloqueado temporalmente por múltiples intentos fallidos.',
      until: blockedUntil,
      minutes: 0,
      seconds: 0,
      remainingTime: ''
    };
  }
  static ɵfac = function BlockedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlockedService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BlockedService,
    factory: BlockedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41869:
/*!********************************************************!*\
  !*** ./src/app/core/services/dialog/dialog.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogService: () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ 68709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 12587);



class DialogService {
  matDialog;
  constructor(matDialog) {
    this.matDialog = matDialog;
  }
  confirm(config) {
    const dialogRef = this.matDialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: config.title,
        message: config.message,
        confirmText: config.confirmText || 'Confirmar',
        cancelText: config.cancelText || 'Cancelar',
        type: config.type || 'warning',
        showCancel: config.showCancel !== false
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        config.onConfirm();
      } else if (config.onCancel) {
        config.onCancel();
      }
    });
  }
  alert(message, title = 'Información') {
    this.matDialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
      width: '350px',
      data: {
        title,
        message,
        confirmText: 'Aceptar',
        showCancel: false,
        type: 'info'
      }
    });
  }
  static ɵfac = function DialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DialogService,
    factory: DialogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44568:
/*!***************************************************!*\
  !*** ./src/app/core/resolvers/module.resolver.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleResolver: () => (/* binding */ ModuleResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 95074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/loading.service */ 98660);




class ModuleResolver {
  loadingService;
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  resolve(route, state) {
    const moduleName = this.getModuleName(state.url);
    // NO mostrar loading aquí - ya lo muestra el ModuleLoaderService
    console.log(`🔍 Resolver ejecutándose para: ${moduleName}`);
    // Pequeño delay para asegurar que el resolver no bloquee
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
      console.log(`✅ Resolver completado para: ${moduleName}`);
    }));
  }
  getModuleName(url) {
    const moduleMap = {
      '/personas': 'Gestión de Personas',
      '/catalogos': 'Catálogos del Sistema',
      '/denuncias': 'Gestión de Denuncias',
      '/seguridad/usuarios': 'Administración de Usuarios',
      '/personal': 'Gestión de Personal',
      '/seguridad/accesos': 'Administración de Accesos',
      '/seguridad/auditoria': 'Auditoría y Logs',
      '/manuales/usuario': 'Manuales del Sistema',
      '/manuales/tecnico': 'Manuales del Sistema',
      '/dashboard': 'Dashboard y Reportes',
      '/backup': 'Respaldo y Seguridad'
    };
    for (const [route, moduleName] of Object.entries(moduleMap)) {
      if (url.includes(route)) {
        return moduleName;
      }
    }
    return 'SIGPAZ';
  }
  static ɵfac = function ModuleResolver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModuleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ModuleResolver,
    factory: ModuleResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44728:
/*!**************************************************************!*\
  !*** ./src/app/core/services/modal-communication.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalCommunicationService: () => (/* binding */ ModalCommunicationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ 67509);



class ModalCommunicationService {
  modalService;
  visible = false;
  subscription;
  static instance;
  modalStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
    isOpen: false,
    type: 'none',
    zIndex: 1000,
    position: {
      bottom: '20px',
      right: '20px'
    }
  });
  eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  activeModal = null;
  // ✅ Subject para el código maestro
  codigoMaestroSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  constructor(modalService) {
    this.modalService = modalService;
    if (ModalCommunicationService.instance) {
      return ModalCommunicationService.instance;
    }
    ModalCommunicationService.instance = this;
  }
  getModalState() {
    return this.modalStateSubject.asObservable();
  }
  getEvents() {
    return this.eventsSubject.asObservable();
  }
  // ✅ Método para obtener el código maestro
  getCodigoMaestro() {
    return this.codigoMaestroSubject.asObservable();
  }
  // ✅ Abrir modal de código maestro
  openCodigoMaestroModal() {
    if (this.activeModal === 'chat') {
      this.minimizeChat();
    }
    if (this.activeModal === 'otp') {
      this.closeOTPModal();
    }
    this.activeModal = 'codigoMaestro';
    this.modalStateSubject.next({
      isOpen: true,
      type: 'codigoMaestro',
      zIndex: 1200,
      position: {
        bottom: '50%',
        right: '50%'
      }
    });
    this.eventsSubject.next('openCodigoMaestroModal');
    this.modalService.openModal('otpModal'); // Reutilizamos el mismo modal para código maestro
  }
  closeCodigoMaestroModal() {
    console.log('🔒 closeCodigoMaestroModal llamado');
    this.activeModal = null;
    this.modalStateSubject.next({
      isOpen: false,
      type: 'none',
      zIndex: 1000,
      position: {
        bottom: '20px',
        right: '20px'
      }
    });
    this.eventsSubject.next('closeCodigoMaestroModal');
    this.modalService.closeModal('otpModal');
  }
  submitCodigoMaestro(codigo) {
    console.log('📤 submitCodigoMaestro llamado con:', codigo ? '***' : 'vacío');
    this.codigoMaestroSubject.next(codigo);
  }
  // Métodos existentes
  openOTPModal() {
    if (this.activeModal === 'chat') {
      this.minimizeChat();
    }
    if (this.activeModal === 'codigoMaestro') {
      this.closeCodigoMaestroModal();
    }
    this.activeModal = 'otp';
    this.modalStateSubject.next({
      isOpen: true,
      type: 'otp',
      zIndex: 1100,
      position: {
        bottom: '20px',
        right: '20px'
      }
    });
    this.eventsSubject.next('openOTPModal');
    this.modalService.openModal('otpModal');
  }
  closeOTPModal() {
    this.activeModal = null;
    this.modalStateSubject.next({
      isOpen: false,
      type: 'none',
      zIndex: 1000,
      position: {
        bottom: '20px',
        right: '20px'
      }
    });
    this.eventsSubject.next('closeOTPModal');
    this.modalService.closeModal('otpModal');
  }
  openChatModal() {
    if (this.activeModal === 'otp') {
      this.closeOTPModal();
    }
    if (this.activeModal === 'codigoMaestro') {
      this.closeCodigoMaestroModal();
    }
    this.activeModal = 'chat';
    this.modalStateSubject.next({
      isOpen: true,
      type: 'chat',
      zIndex: 1000,
      position: {
        bottom: '20px',
        right: '20px'
      }
    });
    this.eventsSubject.next('openChatModal');
    this.modalService.openModal('otpModal'); // Reutilizamos el mismo modal para el chat
  }
  closeChatModal() {
    this.activeModal = null;
    this.modalStateSubject.next({
      isOpen: false,
      type: 'none',
      zIndex: 1000,
      position: {
        bottom: '20px',
        right: '20px'
      }
    });
    this.eventsSubject.next('closeChatModal');
    this.modalService.closeModal('otpModal');
  }
  minimizeChat() {
    this.eventsSubject.next('toggleChat');
    this.modalService.updateModal('otpModal', false); // Ocultar el modal pero mantener el estado de chat activo
  }
  checkCollision() {
    return this.activeModal !== null;
  }
  static ɵfac = function ModalCommunicationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModalCommunicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ModalCommunicationService,
    factory: ModalCommunicationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api/v1',
  wsUrl: 'ws://localhost:8080',
  wsKey: 'knghnyhbqxpckqkm6zuz',
  // Tu REVERB_APP_KEY
  wsHost: 'localhost',
  wsPort: 8081
};

/***/ }),

/***/ 45322:
/*!**********************************************!*\
  !*** ./src/app/services/personal.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalPermisoFactory: () => (/* binding */ PersonalPermisoFactory),
/* harmony export */   PersonalService: () => (/* binding */ PersonalService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth.service */ 68010);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/notification/notification.service */ 97407);








class AdministradorPersonalStrategy {
  puedeVer() {
    return true;
  }
  puedeCrear() {
    return true;
  }
  puedeActualizar() {
    return true;
  }
  puedeEliminar() {
    return true;
  }
  getPermisosEspecificos() {
    return ['ver', 'crear', 'editar', 'eliminar', 'reportes', 'exportar'];
  }
}
class TecnicoPersonalStrategy {
  puedeVer() {
    return true;
  }
  puedeCrear() {
    return true;
  }
  puedeActualizar() {
    return true;
  }
  puedeEliminar() {
    return false;
  }
  getPermisosEspecificos() {
    return ['ver', 'crear', 'editar', 'reportes'];
  }
}
class UsuarioAvanzadoPersonalStrategy {
  puedeVer() {
    return true;
  }
  puedeCrear() {
    return false;
  }
  puedeActualizar() {
    return false;
  }
  puedeEliminar() {
    return false;
  }
  getPermisosEspecificos() {
    return ['ver', 'reportes'];
  }
}
class UsuarioEstandarPersonalStrategy {
  puedeVer() {
    return true;
  }
  puedeCrear() {
    return false;
  }
  puedeActualizar() {
    return false;
  }
  puedeEliminar() {
    return false;
  }
  getPermisosEspecificos() {
    return ['ver'];
  }
}
class PersonalPermisoFactory {
  static create(rolId, permisos) {
    if (rolId === 1 || permisos.includes(1)) {
      return new AdministradorPersonalStrategy();
    }
    if (rolId === 2 || permisos.includes(2)) {
      return new TecnicoPersonalStrategy();
    }
    if (rolId === 3 || permisos.includes(3)) {
      return new UsuarioAvanzadoPersonalStrategy();
    }
    return new UsuarioEstandarPersonalStrategy();
  }
}
class PersonalService {
  http;
  authService;
  notificationService;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl}/personal`;
  permisosStrategy = null;
  constructor(http, authService, notificationService) {
    this.http = http;
    this.authService = authService;
    this.notificationService = notificationService;
    this.inicializarPermisos();
  }
  // ========== PERMISOS ==========
  inicializarPermisos() {
    const user = this.authService.getCurrentUser();
    if (user) {
      const permisosStr = localStorage.getItem('user_permisos');
      const permisos = permisosStr ? JSON.parse(permisosStr) : [];
      this.permisosStrategy = PersonalPermisoFactory.create(user.rol_id, permisos);
    }
  }
  puedeVer() {
    return this.permisosStrategy?.puedeVer() ?? false;
  }
  puedeCrear() {
    return this.permisosStrategy?.puedeCrear() ?? false;
  }
  puedeActualizar() {
    return this.permisosStrategy?.puedeActualizar() ?? false;
  }
  puedeEliminar() {
    return this.permisosStrategy?.puedeEliminar() ?? false;
  }
  // ========== MÉTODOS CRUD ==========
  /**
   * Listar personal con filtros
   * GET /api/v1/personal
   */
  listarPersonal(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.keys(filtros).forEach(key => {
        if (filtros[key] !== null && filtros[key] !== undefined && filtros[key] !== '') {
          const value = typeof filtros[key] === 'boolean' ? filtros[key].toString() : filtros[key].toString();
          params = params.append(key, value);
        }
      });
    }
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Personal listado:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener personal por ID
   * GET /api/v1/personal/{id}
   */
  obtenerPersonal(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Personal obtenido:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Actualizar personal
   * PUT /api/v1/personal/{id}
   */
  actualizarPersonal(id, datos) {
    if (!this.puedeActualizar()) {
      this.notificationService.showError('No tiene permisos para actualizar personal');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No tiene permisos para actualizar personal'));
    }
    // ✅ AGREGAR usuario_actualizacion_id del usuario actual
    const user = this.authService.getCurrentUser();
    if (user) {
      datos.usuario_actualizacion_id = user.usuario_id;
    }
    console.log('📤 Actualizando personal:', {
      id,
      datos
    });
    return this.http.put(`${this.apiUrl}/${id}`, datos).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      console.log('📥 Respuesta actualización:', response);
      if (response.success) {
        this.notificationService.showSuccess(response.message || 'Personal actualizado exitosamente');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Eliminar personal (soft delete)
   * DELETE /api/v1/personal/{id}
   */
  eliminarPersonal(id) {
    if (!this.puedeEliminar()) {
      this.notificationService.showError('No tiene permisos para eliminar personal');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No tiene permisos para eliminar personal'));
    }
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      if (response.success) {
        this.notificationService.showSuccess(response.message || 'Personal eliminado exitosamente');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS ESPECIALIZADOS ==========
  /**
   * Activar personal
   * POST /api/v1/personal/{id}/activar
   */
  activarPersonal(id) {
    if (!this.puedeActualizar()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No tiene permisos para activar personal'));
    }
    return this.http.post(`${this.apiUrl}/${id}/activar`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      if (response.success) {
        this.notificationService.showSuccess('Personal activado exitosamente');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Desactivar personal
   * POST /api/v1/personal/{id}/desactivar
   */
  desactivarPersonal(id) {
    if (!this.puedeActualizar()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No tiene permisos para desactivar personal'));
    }
    return this.http.post(`${this.apiUrl}/${id}/desactivar`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      console.log('📥 Respuesta desactivar:', response);
      if (response.success) {
        this.notificationService.showSuccess('Personal desactivado exitosamente');
        // ✅ IMPORTANTE: Recargar la lista para reflejar el cambio
        this.listarPersonal({}).subscribe();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getPersonalDisponible() {
    return this.http.get(`${this.apiUrl}/disponible`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Cambiar estado (alternativa unificada)
   */
  cambiarEstadoPersonal(id, activo) {
    return activo ? this.activarPersonal(id) : this.desactivarPersonal(id);
  }
  /**
   * Obtener personal activo
   * GET /api/v1/personal/activos (si existe este endpoint)
   */
  listarPersonalActivo() {
    return this.http.get(`${this.apiUrl}/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => console.log('📥 Personal activos:', response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Obtener personal del usuario actual
   */
  obtenerPersonalActual() {
    const user = this.authService.getCurrentUser();
    if (!user?.personal_id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Usuario no tiene personal asociado'));
    }
    return this.obtenerPersonal(user.personal_id);
  }
  // ========== MÉTODOS DE APOYO ==========
  handleError(error) {
    console.error('❌ Error en PersonalService:', error);
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 401:
          errorMessage = 'No autorizado';
          break;
        case 403:
          errorMessage = 'No tiene permisos para esta acción';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 422:
          errorMessage = 'Error de validación';
          if (error.error?.errors) {
            const errors = error.error.errors;
            errorMessage = Object.values(errors).flat().join(', ');
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = error.error?.message || `Error ${error.status}`;
      }
    }
    if (this.notificationService) {
      this.notificationService.showError(errorMessage);
    } else {
      console.error('NotificationService no disponible:', errorMessage);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  // ========== VALIDACIONES ==========
  validarDatosCreacion(datos) {
    const errores = [];
    if (!datos.persona_id) {
      errores.push('La persona es requerida');
    }
    if (!datos.cargo_id) {
      errores.push('El cargo es requerido');
    }
    if (!datos.fecha_ingreso) {
      errores.push('La fecha de ingreso es requerida');
    } else {
      // Validar que no sea fecha futura
      const fechaIngreso = new Date(datos.fecha_ingreso);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaIngreso > hoy) {
        errores.push('La fecha de ingreso no puede ser futura');
      }
    }
    if (datos.fecha_egreso && datos.fecha_ingreso) {
      const egreso = new Date(datos.fecha_egreso);
      const ingreso = new Date(datos.fecha_ingreso);
      if (egreso < ingreso) {
        errores.push('La fecha de egreso no puede ser anterior a la fecha de ingreso');
      }
    }
    return errores;
  }
  /**
  * Crear personal
  * POST /api/v1/personal
  */
  crearPersonal(datos) {
    if (!this.puedeCrear()) {
      this.notificationService.showError('No tiene permisos para crear personal');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No tiene permisos para crear personal'));
    }
    // ✅ ASEGURAR QUE activo sea booleano, no número
    const datosCorregidos = {
      ...datos,
      activo: datos.activo ?? true,
      fecha_ingreso: datos.fecha_ingreso?.includes('T') ? datos.fecha_ingreso.split('T')[0] : datos.fecha_ingreso
    };
    // Agregar usuario_creacion_id del usuario actual
    const user = this.authService.getCurrentUser();
    if (user) {
      datosCorregidos.usuario_creacion_id = user.usuario_id;
    }
    console.log('📤 Creando personal:', datosCorregidos);
    return this.http.post(this.apiUrl, datosCorregidos).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      console.log('📥 Respuesta creación:', response);
      if (response.success) {
        this.notificationService.showSuccess(response.message || 'Personal creado exitosamente');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  // ========== MÉTODOS DE EXPORTACIÓN ==========
  /**
   * Exportar listado completo a Excel
   */
  exportarExcel() {
    return this.http.get(`${this.apiUrl}/exportar-excel`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Exportar reporte específico a PDF
   */
  exportarReportePDF(tipo) {
    return this.http.get(`${this.apiUrl}/reportes/${tipo}/pdf`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Exportar reporte específico a Excel
   */
  exportarReporteExcel(tipo) {
    return this.http.get(`${this.apiUrl}/reportes/${tipo}/excel`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Exportar reporte completo (todos los reportes en uno)
   */
  exportarReporteCompleto() {
    return this.http.get(`${this.apiUrl}/reportes/completo/pdf`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Generar contrato PDF para un empleado
   * GET /api/v1/personal/{id}/contrato-pdf
   */
  generarContratoPDF(id) {
    return this.http.get(`${this.apiUrl}/${id}/contrato-pdf`, {
      responseType: 'blob'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(blob => {
      // Crear link de descarga
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `contrato_personal_${id}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
      // La notificación se maneja en el componente
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  static ɵfac = function PersonalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PersonalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PersonalService,
    factory: PersonalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45757:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/otp-code/otp-code.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpCodeComponent: () => (/* binding */ OtpCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pipes/time-format.pipe */ 88229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/modal-communication.service */ 44728);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/modal.service */ 67509);











function OtpCodeComponent_div_0_div_12_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u26A0\uFE0F El c\u00F3digo ha expirado. Por favor, regenere uno nuevo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OtpCodeComponent_div_0_div_12_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \uD83D\uDCA1 Este c\u00F3digo es solicitado por el sistema requiere la verificaci\u00F3n del codigo de acceso del administrador, por favor comun\u00EDcate con \u00E9l. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OtpCodeComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "C\u00F3digo de acceso maestro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpCodeComponent_div_0_div_12_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.copiarCodigo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Codigo de acceso Maestro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 17)(13, "div", 18)(14, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u23F1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 20)(17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Vigencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 18)(23, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 20)(26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Usos restantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpCodeComponent_div_0_div_12_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.regenerarCodigo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\uD83D\uDD04");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, OtpCodeComponent_div_0_div_12_div_34_Template, 2, 0, "div", 25)(35, OtpCodeComponent_div_0_div_12_div_35_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.codigoData == null ? null : ctx_r1.codigoData.codigo) || "CARGANDO...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(ctx_r1.codigoData == null ? null : ctx_r1.codigoData.codigo) || ctx_r1.copiando || ctx_r1.codigoExpirado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.copiado ? "\u2713" : "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expiring-text", ctx_r1.tiempoRestanteVigencia < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 13, ctx_r1.tiempoRestanteVigencia), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("low-uses", ((ctx_r1.codigoData == null ? null : ctx_r1.codigoData.usos_restantes) || 0) <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r1.codigoData == null ? null : ctx_r1.codigoData.usos_restantes) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.puedeRegenerar || ctx_r1.regenerando);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.regenerando ? "Generando..." : "Regenerar c\u00F3digo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.codigoExpirado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.codigoExpirado);
  }
}
function OtpCodeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpCodeComponent_div_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleMinimize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "C\u00F3digo Maestro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OtpCodeComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OtpCodeComponent_div_0_div_12_Template, 36, 15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("z-index", ctx_r1.modalState.zIndex)("bottom", ctx_r1.modalState.position.bottom)("right", ctx_r1.modalState.position.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expiring", ctx_r1.tiempoRestanteVigencia < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 12, ctx_r1.tiempoRestanteVigencia), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
  }
}
class OtpCodeComponent {
  http;
  authService;
  modalCommService;
  clipboard;
  modalService;
  cdr;
  codigoData = null;
  tiempoRestanteVigencia = 0;
  regenerando = false;
  copiando = false;
  copiado = false;
  isVisible = false;
  isMinimized = false;
  puedeRegenerar = false;
  codigoExpirado = false;
  visible = false;
  subscription;
  modalState = {
    isOpen: false,
    type: 'none',
    zIndex: 1000,
    position: {
      bottom: '20px',
      right: '20px'
    }
  };
  intervalSubscription = null;
  modalSubscription = null;
  eventsSubscription = null;
  constructor(http, authService, modalCommService, clipboard, modalService, cdr) {
    this.http = http;
    this.authService = authService;
    this.modalCommService = modalCommService;
    this.clipboard = clipboard;
    this.modalService = modalService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.subscription = this.modalService.modalState$.subscribe(state => {
      if (this.visible !== state.otpModal) {
        this.visible = state.otpModal;
      }
    });
    this.modalSubscription = this.modalCommService.getModalState().subscribe(state => {
      switch (state.type) {
        case 'otp':
          this.isVisible = state.isOpen;
          this.modalState = {
            ...state
          };
          if (state.isOpen) {
            this.cargarCodigo();
            this.iniciarContador();
          } else {
            this.detenerContador();
          }
          break;
        case 'chat':
          if (this.isVisible) {
            this.isVisible = false;
          }
          break;
        case 'none':
          if (this.isVisible) {
            this.isVisible = false;
          }
          break;
      }
      this.cdr.detectChanges();
    });
    this.eventsSubscription = this.modalCommService.getEvents().subscribe(event => {
      if (event === 'toggleChat' && this.isVisible) {
        this.isMinimized = !this.isMinimized;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.detenerContador();
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }
  detenerContador() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = null;
    }
  }
  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    this.cdr.detectChanges();
  }
  closeModal() {
    this.modalCommService.closeOTPModal();
  }
  cargarCodigo() {
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/codigo-otp`).subscribe({
      next: res => {
        this.codigoData = res.data;
        this.codigoExpirado = false;
        this.puedeRegenerar = res.data.puede_regenerar === true;
        this.verificarExpiracion();
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error cargando código:', err);
        this.codigoData = {
          id: 1,
          codigo: 'DEMO-001',
          usos_restantes: 0,
          // ✅ Simular sin usos
          puede_regenerar: true,
          puede_regenerar_en: null,
          expira_en: new Date(Date.now() + 5 * 60000).toISOString(),
          activo: false
        };
        this.codigoExpirado = true;
        this.puedeRegenerar = true; // ✅ Habilitar botón
        this.cdr.detectChanges();
      }
    });
  }
  copiarCodigo() {
    if (!this.codigoData?.codigo) return;
    if (this.codigoData.usos_restantes <= 0) {
      this.codigoExpirado = true;
      this.puedeRegenerar = true; // ✅ Habilitar botón
      this.cdr.detectChanges();
      return;
    }
    this.copiando = true;
    this.cdr.detectChanges();
    // Copiar al portapapeles
    this.clipboard.copy(this.codigoData.codigo);
    this.copiado = true;
    setTimeout(() => {
      this.copiado = false;
      this.cdr.detectChanges();
    }, 2000);
    // Consumir el código
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/codigo-otp/usar`, {
      codigo: this.codigoData.codigo
    }).subscribe({
      next: res => {
        console.log('✅ Código consumido correctamente');
        if (res.data) {
          this.codigoData.usos_restantes = res.data.usos_restantes;
          // ✅ Si ya no quedan usos, habilitar regeneración
          if (this.codigoData.usos_restantes <= 0) {
            this.codigoExpirado = true;
            this.puedeRegenerar = true; // ✅ Habilitar botón
            console.log('🔓 Sin usos, botón regenerar habilitado');
          }
        }
        this.copiando = false;
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error al consumir código:', err);
        this.copiando = false;
        this.cdr.detectChanges();
      }
    });
  }
  regenerarCodigo() {
    if (!this.puedeRegenerar) return;
    this.regenerando = true;
    this.cdr.detectChanges();
    this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/codigo-otp/regenerar`, {
      codigo_id: this.codigoData?.id
    }).subscribe({
      next: res => {
        this.codigoData = res.data;
        this.regenerando = false;
        this.copiado = false;
        this.codigoExpirado = false;
        this.actualizarPuedeRegenerar();
        this.cdr.detectChanges();
        // Reiniciar el contador
        this.detenerContador();
        this.iniciarContador();
      },
      error: err => {
        console.error('Error regenerando código:', err);
        this.regenerando = false;
        this.cdr.detectChanges();
      }
    });
  }
  actualizarPuedeRegenerar() {
    if (!this.codigoData) {
      this.puedeRegenerar = false;
      return;
    }
    // ✅ Si el código está expirado o no tiene usos, puede regenerar
    const expirado = new Date(this.codigoData.expira_en) <= new Date();
    const sinUsos = this.codigoData.usos_restantes <= 0;
    if (expirado || sinUsos) {
      this.puedeRegenerar = true;
    } else {
      // Si está activo, usar el valor del backend para el cooldown
      this.puedeRegenerar = this.codigoData.puede_regenerar === true;
    }
    console.log('🔄 puedeRegenerar:', this.puedeRegenerar, '| expirado:', expirado, '| sinUsos:', sinUsos);
  }
  verificarExpiracion() {
    if (this.codigoData?.expira_en) {
      const ahora = new Date();
      const expira = new Date(this.codigoData.expira_en);
      const expirado = ahora >= expira;
      const sinUsos = this.codigoData.usos_restantes <= 0;
      this.codigoExpirado = expirado || sinUsos;
      // ✅ Si expiró o no tiene usos, habilitar botón regenerar
      if (this.codigoExpirado) {
        this.puedeRegenerar = true;
        console.log('🔓 Código expirado/sin usos, botón regenerar habilitado');
      }
    }
  }
  iniciarContador() {
    this.detenerContador();
    this.intervalSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(1000).subscribe(() => {
      if (this.codigoData?.expira_en) {
        const ahora = new Date();
        const expira = new Date(this.codigoData.expira_en);
        const diffSegundos = Math.floor((expira.getTime() - ahora.getTime()) / 1000);
        this.tiempoRestanteVigencia = Math.max(0, diffSegundos);
        // ✅ Cuando el tiempo expira, solo marcar como expirado y habilitar regeneración
        if (this.tiempoRestanteVigencia <= 0 && !this.codigoExpirado) {
          console.log('⏰ Código expirado, habilitando botón regenerar');
          this.codigoExpirado = true;
          // ✅ NO llamar a cargarCodigo() automáticamente
          // ✅ Solo habilitar el botón de regenerar
          this.puedeRegenerar = true;
          this.cdr.detectChanges();
        }
        this.cdr.detectChanges();
      }
    });
  }
  static ɵfac = function OtpCodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OtpCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_9__.ModalCommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_modal_service__WEBPACK_IMPORTED_MODULE_11__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: OtpCodeComponent,
    selectors: [["app-otp-code"]],
    decls: 1,
    vars: 1,
    consts: [["class", "otp-modal", 3, "zIndex", "bottom", "right", "minimized", 4, "ngIf"], [1, "otp-modal"], [1, "otp-header", 3, "click"], [1, "header-content"], [1, "icon"], [1, "title"], [1, "status-badge"], [1, "close-btn", 3, "click"], ["class", "otp-content", 4, "ngIf"], [1, "otp-content"], [1, "codigo-container"], [1, "codigo-label"], [1, "codigo-wrapper"], [1, "codigo-valor"], [1, "copy-btn", 3, "click", "disabled"], [1, "copy-icon"], [1, "codigo-helper"], [1, "info-grid"], [1, "info-item"], [1, "info-icon"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "regenerate-btn", 3, "click", "disabled"], [1, "btn-icon"], ["class", "info-message", 4, "ngIf"], [1, "info-message"]],
    template: function OtpCodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OtpCodeComponent_div_0_Template, 13, 14, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeFormatPipe],
    styles: [".otp-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border-radius: 16px;\n  color: white;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n  font-family: monospace;\n  transition: all 0.3s ease;\n  width: 280px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.otp-modal.minimized[_ngcontent-%COMP%] {\n  width: auto;\n}\n.otp-modal.minimized[_ngcontent-%COMP%]   .otp-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.otp-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.otp-header[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.otp-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.otp-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.otp-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n}\n.otp-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 2px 6px;\n  border-radius: 12px;\n}\n.otp-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .status-badge.expiring[_ngcontent-%COMP%] {\n  background: #ff6b6b;\n  animation: _ngcontent-%COMP%_pulse 1s infinite;\n}\n.otp-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.otp-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.otp-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.8;\n  margin-bottom: 8px;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%]   .codigo-valor[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 4px;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 12px;\n  border-radius: 8px;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  width: 44px;\n  height: 44px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%]   .copy-btn.copied[_ngcontent-%COMP%] {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-wrapper[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.otp-content[_ngcontent-%COMP%]   .codigo-container[_ngcontent-%COMP%]   .codigo-helper[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 8px;\n  border-radius: 8px;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value.expiring-text[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n  animation: _ngcontent-%COMP%_pulse 1s infinite;\n}\n.otp-content[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value.low-uses[_ngcontent-%COMP%] {\n  color: #ffa502;\n}\n.otp-content[_ngcontent-%COMP%]   .regenerate-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n  margin-bottom: 12px;\n}\n.otp-content[_ngcontent-%COMP%]   .regenerate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n.otp-content[_ngcontent-%COMP%]   .regenerate-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.otp-content[_ngcontent-%COMP%]   .info-message[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  text-align: center;\n  line-height: 1.4;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3RwLWNvZGUvb3RwLWNvZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0YsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtBQUFGO0FBRUU7RUFDRSxXQUFBO0FBQUo7QUFERTtFQUlJLGFBQUE7QUFBTjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFITjtBQUtNO0VBQ0Usb0NBQUE7QUFIUjtBQVBJO0VBY0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFKUjtBQWJJO0VBb0JNLGVBQUE7QUFKVjtBQWhCSTtFQXdCTSxpQkFBQTtFQUNBLGVBQUE7QUFMVjtBQXBCSTtFQTZCTSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTlY7QUFRVTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUFOWjtBQTlCSTtFQTBDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFUUjtBQVdRO0VBQ0Usb0NBQUE7QUFUVjtBQWNJO0VBQ0UsYUFBQTtBQVpOO0FBV0k7RUFJSSxrQkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFPSTtFQVFNLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWlY7QUFBSTtFQWdCTSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWJWO0FBUEk7RUF1QlEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWJaO0FBZkk7RUFnQ1Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZFo7QUFnQlk7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0FBZGQ7QUFpQlk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBZmQ7QUFrQlk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFoQmQ7QUF6Q0k7RUErRE0sZUFBQTtFQUNBLFlBQUE7QUFuQlY7QUE3Q0k7RUFxRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBckJSO0FBbkRJO0VBMkVNLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJCVjtBQTNESTtFQW1GUSxlQUFBO0FBckJaO0FBOURJO0VBdUZRLE9BQUE7QUF0Qlo7QUFqRUk7RUEwRlUsZUFBQTtFQUNBLFlBQUE7QUF0QmQ7QUFyRUk7RUErRlUsZUFBQTtFQUNBLGlCQUFBO0FBdkJkO0FBeUJjO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0FBdkJoQjtBQTBCYztFQUNFLGNBQUE7QUF4QmhCO0FBaEZJO0VBZ0hJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUE3QlI7QUErQlE7RUFDRSxvQ0FBQTtFQUNBLDJCQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBOUJWO0FBcEdJO0VBdUlJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhDUjtBQW9DSTtFQUNFOztJQUNFLFVBQUE7RUFqQ047RUFtQ0k7SUFDRSxZQUFBO0VBakNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAub3RwLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHdpZHRoOiAyODBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG5cbiAgJi5taW5pbWl6ZWQge1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgLm90cC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbiAgICAub3RwLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtYmFkZ2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgICAgICAgJi5leHBpcmluZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2YjZiO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3RwLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgLmNvZGlnby1jb250YWluZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmNvZGlnby1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvZGlnby13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgLmNvZGlnby12YWxvciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3B5LWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5jb3BpZWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvZGlnby1oZWxwZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluZm8tZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAgIC5pbmZvLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmZvLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgLmluZm8tbGFiZWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmluZm8tdmFsdWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgICAgICYuZXhwaXJpbmctdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjZiNmI7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYubG93LXVzZXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZhNTAyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yZWdlbmVyYXRlLWJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbmZvLW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgICAgMCUsIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45815:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/features/configure-questions/configure-security.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigureSecurityComponent: () => (/* binding */ ConfigureSecurityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _home_services_theme_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../home/services/theme.service */ 99535);




// PrimeNG Modules





















const _c0 = () => ({
  "width": "100%"
});
function ConfigureSecurityComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Cargando preguntas disponibles...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ConfigureSecurityComponent_form_14_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 24)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Respuesta");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ConfigureSecurityComponent_form_14_div_2_div_8_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const respuesta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](respuesta_r4.respuesta, $event) || (respuesta_r4.respuesta = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const respuesta_r4 = ctx_r5.$implicit;
    const i_r7 = ctx_r5.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", respuesta_r4.respuesta);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("name", "respuesta" + i_r7);
  }
}
function ConfigureSecurityComponent_form_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 24)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ConfigureSecurityComponent_form_14_div_2_Template_p_dropdown_ngModelChange_7_listener($event) {
      const respuesta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](respuesta_r4.pregunta_id, $event) || (respuesta_r4.pregunta_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ConfigureSecurityComponent_form_14_div_2_div_8_Template, 6, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const respuesta_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Pregunta ", i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", respuesta_r4.pregunta_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("name", "pregunta" + i_r7)("options", ctx_r1.preguntasDisponibles)("showClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", respuesta_r4.pregunta_id);
  }
}
function ConfigureSecurityComponent_form_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Debe seleccionar 3 preguntas diferentes y proporcionar respuestas para todas");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ConfigureSecurityComponent_form_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function ConfigureSecurityComponent_form_14_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ConfigureSecurityComponent_form_14_div_2_Template, 9, 10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ConfigureSecurityComponent_form_14_div_3_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 18)(5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ConfigureSecurityComponent_form_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@staggerAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.respuestas);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.formularioEnviado && !ctx_r1.isFormValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.loading || !ctx_r1.isFormValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Configurando..." : "Configurar Preguntas", " ");
  }
}
class ConfigureSecurityComponent {
  authService;
  http;
  router;
  messageService;
  cdr;
  themeService;
  API_URL = 'http://localhost:8000/api/v1';
  themeOptions = [{
    label: '☀️ Claro',
    value: 'light',
    icon: 'pi pi-sun'
  }, {
    label: '🌙 Oscuro',
    value: 'dark',
    icon: 'pi pi-moon'
  }, {
    label: '⚡ Neón',
    value: 'neon',
    icon: 'pi pi-bolt'
  }];
  // Tema
  currentTheme = 'light';
  preguntasDisponibles = [];
  respuestas = [{
    pregunta_id: 0,
    respuesta: ''
  }, {
    pregunta_id: 0,
    respuesta: ''
  }, {
    pregunta_id: 0,
    respuesta: ''
  }];
  loading = true;
  formularioEnviado = false;
  usuarioId = null;
  preguntasCargadas = false;
  constructor(authService, http, router, messageService, cdr, themeService) {
    this.authService = authService;
    this.http = http;
    this.router = router;
    this.messageService = messageService;
    this.cdr = cdr;
    this.themeService = themeService;
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
    this.usuarioId = this.authService.getSetupUsuarioId();
    if (!this.usuarioId) {
      this.router.navigate(['/login']);
      return;
    }
    if (!this.preguntasCargadas) {
      this.loadPreguntasDisponibles();
    }
  }
  loadPreguntasDisponibles() {
    // ✅ Evitar recargas múltiples
    if (this.preguntasCargadas) {
      console.log('⚠️ Preguntas ya cargadas, omitiendo recarga');
      return;
    }
    this.loading = true;
    this.cdr.detectChanges();
    const tempToken = localStorage.getItem('token_temp');
    if (!tempToken) {
      this.loading = false;
      this.showMessage('error', 'Error', 'Sesión no válida');
      this.router.navigate(['/login']);
      return;
    }
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${tempToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.http.get(`${this.API_URL}/auth/preguntas-disponibles`, {
      headers
    }).subscribe({
      next: response => {
        console.log('📥 Preguntas recibidas:', response);
        if (response.success && response.data && response.data.length > 0) {
          this.preguntasDisponibles = response.data;
          this.preguntasCargadas = true; // ✅ Marcar como cargadas
          console.log('✅ Preguntas cargadas:', this.preguntasDisponibles.length);
        } else {
          console.warn('⚠️ No hay preguntas disponibles');
          this.preguntasDisponibles = this.getDefaultQuestions();
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('❌ Error cargando preguntas:', error);
        this.preguntasDisponibles = this.getDefaultQuestions();
        this.showMessage('error', 'Error', 'No se pudieron cargar las preguntas');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getDefaultQuestions() {
    return [{
      pregunta_id: 1,
      texto: '¿Cuál es el nombre de tu primera mascota?'
    }, {
      pregunta_id: 2,
      texto: '¿En qué ciudad naciste?'
    }, {
      pregunta_id: 3,
      texto: '¿Cuál es tu comida favorita?'
    }, {
      pregunta_id: 4,
      texto: '¿Nombre de tu mejor amigo de la infancia?'
    }, {
      pregunta_id: 5,
      texto: '¿Color favorito?'
    }, {
      pregunta_id: 6,
      texto: '¿Modelo de tu primer auto?'
    }];
  }
  isFormValid() {
    const preguntasIds = this.respuestas.map(r => r.pregunta_id);
    const uniqueIds = new Set(preguntasIds.filter(id => id > 0));
    const hasThreeUniqueQuestions = uniqueIds.size === 3;
    const allAnswersFilled = this.respuestas.every(r => r.respuesta.trim().length > 0 && r.pregunta_id > 0);
    return hasThreeUniqueQuestions && allAnswersFilled;
  }
  onSubmit() {
    if (!this.isFormValid()) {
      this.showMessage('error', 'Error', 'Debe seleccionar 3 preguntas diferentes y proporcionar respuestas');
      this.formularioEnviado = true;
      return;
    }
    this.loading = true;
    const formData = {
      respuestas: this.respuestas.filter(r => r.pregunta_id > 0 && r.respuesta.trim()).map(r => ({
        pregunta_id: r.pregunta_id,
        respuesta: r.respuesta.trim()
      }))
    };
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token_temp')}`,
      'Content-Type': 'application/json'
    });
    this.http.post(`${this.API_URL}/auth/configurar-preguntas`, formData, {
      headers
    }).subscribe({
      next: response => {
        if (response.success) {
          if (response.access_token) {
            localStorage.setItem('token', response.access_token);
            localStorage.removeItem('token_temp');
          }
          sessionStorage.setItem('just_configured_security', 'true');
          this.showMessage('success', '¡Configuración exitosa!', 'Preguntas configuradas correctamente');
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        } else {
          this.showMessage('error', 'Error', response.message || 'Error en la configuración');
          this.loading = false;
        }
      },
      error: error => {
        this.showMessage('error', 'Error', error.error?.message || 'No se pudieron guardar las preguntas');
        this.loading = false;
      }
    });
  }
  logout() {
    this.authService.clearAuthData();
    this.router.navigate(['/login']);
  }
  changeTheme(theme) {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }
  showMessage(severity, summary, detail) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 5000
    });
  }
  static ɵfac = function ConfigureSecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfigureSecurityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_18__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_home_services_theme_service__WEBPACK_IMPORTED_MODULE_19__.ThemeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ConfigureSecurityComponent,
    selectors: [["app-configure-security"]],
    decls: 30,
    vars: 5,
    consts: [[1, "configure-container"], [1, "configure-wrapper"], [1, "configure-card"], [1, "configure-header"], [1, "logo-icon"], [1, "pi", "pi-shield"], ["class", "loading-state", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "security-info"], [1, "info-header"], [1, "pi", "pi-info-circle"], ["position", "top-right"], [1, "loading-state"], [1, "spinner"], [3, "ngSubmit"], [1, "questions-grid"], ["class", "question-card", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], [1, "button-group"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "pi", "pi-times"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "question-card"], [1, "question-number"], [1, "form-field"], ["optionLabel", "texto", "optionValue", "pregunta_id", "placeholder", "Seleccione una pregunta", 3, "ngModelChange", "ngModel", "name", "options", "showClear"], ["class", "form-field", 4, "ngIf"], [1, "input-wrapper"], [1, "pi", "pi-key", "input-icon"], ["pInputText", "", "type", "password", "placeholder", "Escriba su respuesta", "required", "", 3, "ngModelChange", "ngModel", "name"], [1, "error-message"], [1, "pi", "pi-exclamation-triangle"]],
    template: function ConfigureSecurityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Configuraci\u00F3n de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Seleccione y responda 3 preguntas diferentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ConfigureSecurityComponent_div_13_Template, 4, 0, "div", 6)(14, ConfigureSecurityComponent_form_14_Template, 11, 5, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Informaci\u00F3n de seguridad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ul")(21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Las respuestas son sensibles a may\u00FAsculas/min\u00FAsculas");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Seleccione preguntas cuyas respuestas recuerde f\u00E1cilmente");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Estas preguntas se usar\u00E1n para verificar su identidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Puede configurar nuevas preguntas m\u00E1s tarde desde su perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "p-toast", 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx.currentTheme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.MessagesModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.RippleModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_12__.ThemeSwitcherComponent, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipModule],
    styles: ["@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 800;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYMZg.ttf) format('truetype');\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%,\n  100% {\n    box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(0, 255, 135, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -1000px 0;\n  }\n  100% {\n    background-position: 1000px 0;\n  }\n}\n.configure-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.configure-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, var(--primary-light) 0%, transparent 50%);\n  pointer-events: none;\n}\n.pi-bolt[_ngcontent-%COMP%]:before {\n  color: chartreuse;\n}\n.pi-moon[_ngcontent-%COMP%]:before {\n  color: black;\n}\n.pi-sun[_ngcontent-%COMP%]:before {\n  color: yellow;\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 33px;\n  padding: 6px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--border-color);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.light[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.dark[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.neon[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n.configure-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.configure-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 24px;\n  padding: 40px;\n  box-shadow: var(--shadow-xl);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--border-color);\n}\n.configure-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-xl);\n}\n.configure-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.configure-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: var(--shadow-md);\n}\n.configure-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n}\n.configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n  color: var(--text-primary);\n}\n.configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.configure-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.questions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-bottom: 30px;\n}\n.question-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  border-radius: 20px;\n  padding: 25px 20px 20px;\n  position: relative;\n  transition: all 0.3s;\n  background: var(--bg-primary);\n}\n.question-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.question-card[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 20px;\n  background: var(--gradient-primary);\n  color: white;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  box-shadow: var(--shadow-sm);\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--primary);\n}\n.form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 1rem;\n}\n.form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 15px 14px 45px;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: all 0.3s;\n  background: var(--input-bg);\n  color: var(--text-primary);\n}\n.form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--input-focus);\n  outline: none;\n  box-shadow: var(--input-focus-shadow);\n}\n.form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n  .p-dropdown {\n  width: 100%;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  transition: all 0.3s;\n  background: var(--input-bg);\n}\n  .p-dropdown:hover {\n  border-color: var(--primary);\n}\n  .p-dropdown.p-focus {\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n  .p-dropdown .p-dropdown-label {\n  padding: 12px 15px;\n  font-size: 1rem;\n  color: var(--text-primary);\n}\n  .p-dropdown .p-dropdown-label.p-placeholder {\n  color: var(--placeholder-color);\n}\n  .p-dropdown .p-dropdown-trigger {\n  width: 40px;\n  color: var(--text-muted);\n}\n  .p-dropdown-panel {\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n}\n  .p-dropdown-panel .p-dropdown-items {\n  padding: 8px;\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  padding: 12px 16px;\n  border-radius: 8px;\n  transition: all 0.3s;\n  color: var(--text-primary);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {\n  background: var(--bg-hover);\n}\n  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  background: var(--gradient-primary);\n  color: white;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 20px;\n  background: var(--danger-light);\n  border-left: 3px solid var(--danger);\n  border-radius: 12px;\n  color: var(--danger);\n  font-size: 0.85rem;\n  margin: 20px 0;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-top: 30px;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 24px;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border: none;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.button-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.button-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--border-color);\n  color: var(--text-muted);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: var(--danger);\n  color: var(--danger);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.security-info[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 20px;\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n.security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.security-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 30px;\n}\n.security-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  line-height: 1.5;\n}\n.security-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--primary);\n}\n.light-theme[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.light-theme[_ngcontent-%COMP%]   .configure-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n}\n.light-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-color: var(--border-color);\n}\n.dark-theme[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);\n}\n.dark-theme[_ngcontent-%COMP%]   .configure-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n.dark-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.dark-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-color: var(--border-color);\n}\n.dark-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--input-bg);\n  border-color: var(--input-border);\n  color: var(--text-primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.dark-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown {\n  background: var(--input-bg);\n  border-color: var(--input-border);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-label {\n  color: var(--text-primary);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-label.p-placeholder {\n  color: var(--placeholder-color);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-trigger {\n  color: #ccc;\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown-panel {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown-panel .p-dropdown-item {\n  color: var(--text-primary);\n}\n.dark-theme[_ngcontent-%COMP%]     .p-dropdown-panel .p-dropdown-item:hover {\n  background: rgba(67, 97, 238, 0.2);\n}\n.dark-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: #ccc;\n}\n.dark-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n.dark-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n  color: #ccc;\n}\n.neon-theme[_ngcontent-%COMP%] {\n  background: #000;\n}\n.neon-theme[_ngcontent-%COMP%]   .configure-card[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n  border: 1px solid var(--success);\n  animation: _ngcontent-%COMP%_glow 2s ease-in-out infinite;\n}\n.neon-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #66ffb7;\n}\n.neon-theme[_ngcontent-%COMP%]   .configure-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #99ffcf;\n}\n.neon-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%] {\n  background: #111;\n  border-color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%]:hover {\n  border-color: #66ffb7;\n  box-shadow: 0 5px 20px rgba(0, 255, 135, 0.1);\n}\n.neon-theme[_ngcontent-%COMP%]   .question-card[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--success), #66ffb7);\n  color: #000;\n}\n.neon-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #111;\n  border-color: var(--success);\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 10px var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 255, 135, 0.5);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown {\n  background: #111;\n  border-color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-label {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-label.p-placeholder {\n  color: rgba(0, 255, 135, 0.5);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown .p-dropdown-trigger {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown:hover {\n  border-color: #66ffb7;\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown-panel {\n  background: #111;\n  border: 1px solid var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown-panel .p-dropdown-item {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown-panel .p-dropdown-item:hover {\n  background: rgba(0, 255, 135, 0.1);\n}\n.neon-theme[_ngcontent-%COMP%]     .p-dropdown-panel .p-dropdown-item.p-highlight {\n  background: linear-gradient(135deg, var(--success), #66ffb7);\n  color: #000;\n}\n.neon-theme[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--success), #66ffb7);\n  color: #000;\n}\n.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 255, 135, 0.1);\n  color: #66ffb7;\n}\n.neon-theme[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #66ffb7;\n}\n.neon-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 135, 0.05);\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.neon-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #66ffb7;\n}\n.neon-theme[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--success);\n}\n@media (max-width: 768px) {\n  .configure-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n  }\n  .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .questions-grid[_ngcontent-%COMP%] {\n    gap: 25px;\n  }\n  .question-card[_ngcontent-%COMP%] {\n    padding: 20px 15px 15px;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .security-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .configure-card[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .configure-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .configure-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .configure-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .question-card[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 0.85rem;\n    top: -12px;\n  }\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2h0dHBzOi9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2NvbmZpZ3VyZS1xdWVzdGlvbnMvY29uZmlndXJlLXNlY3VyaXR5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwSEFBQTtBQ0NGO0FEQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBIQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEhBQUE7QUNDRjtBRENBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwSEFBQTtBQ0NGO0FEQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBIQUFBO0FDQ0Y7QURDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEhBQUE7QUNDRjtBQTdCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBK0JGO0VBN0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBK0JGO0FBQ0Y7QUE1QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQThCRjtFQTVCQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQThCRjtBQUNGO0FBM0JBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUE2QkY7RUEzQkE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUE2QkY7QUFDRjtBQTFCQTtFQUNFO0lBQ0UseUJBQUE7RUE0QkY7QUFDRjtBQXpCQTtF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QUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUEvS0Y7QUFDRjtBQXFMQTtFQUNFLGtCQUFBO0FBbkxGO0FBc0xBO0VBQVEsZ0JBQUE7QUFuTFI7QUFvTEE7RUFBUSxnQkFBQTtBQWpMUjtBQWtMQTtFQUFRLGdCQUFBO0FBL0tSO0FBZ0xBO0VBQVEsbUJBQUE7QUE3S1I7QUE4S0E7RUFBUSxtQkFBQTtBQTNLUjtBQTRLQTtFQUFRLG1CQUFBO0FBektSIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2ludGVyL3YyMC9VY0NPM0Z3ckszaUxUZUh1U19uVk1yTXhDcDUwU2pJdzJib0tvZHVLbU1FVnVPS2ZNWmcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaW50ZXIvdjIwL1VjQ08zRndySzNpTFRlSHVTX25WTXJNeENwNTBTakl3MmJvS29kdUttTUVWdUx5Zk1aZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pbnRlci92MjAvVWNDTzNGd3JLM2lMVGVIdVNfblZNck14Q3A1MFNqSXcyYm9Lb2R1S21NRVZ1STZmTVpnLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2ludGVyL3YyMC9VY0NPM0Z3ckszaUxUZUh1U19uVk1yTXhDcDUwU2pJdzJib0tvZHVLbU1FVnVHS1lNWmcudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaW50ZXIvdjIwL1VjQ08zRndySzNpTFRlSHVTX25WTXJNeENwNTBTakl3MmJvS29kdUttTUVWdUZ1WU1aZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pbnRlci92MjAvVWNDTzNGd3JLM2lMVGVIdVNfblZNck14Q3A1MFNqSXcyYm9Lb2R1S21NRVZ1RHlZTVpnLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFVFVQIFNFQ1VSSVRZIC0gRVNUSUxPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMjU1LCAxMzUsIDAuMyk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDI1NSwgMTM1LCAwLjYpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwMHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwMHB4IDA7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVElMT1MgQkFTRSBERUwgQ09OVEVORURPUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb25maWd1cmUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDUwJSwgdmFyKC0tcHJpbWFyeS1saWdodCkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FIFNFTEVDVE9SXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBpLWJvbHQ6YmVmb3Jle1xuICBjb2xvcjpjaGFydHJldXNlO1xufVxuLnBpLW1vb246YmVmb3Jle1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGktc3VuOmJlZm9yZXtcbiAgY29sb3I6eWVsbG93O1xufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUSEVNRSBTV0lUQ0hFUiAoYm90b25lcyBkZSB0ZW1hKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50aGVtZS1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzNweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLnRoZW1lLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzksIDcwLCAyMjksIDAuMyk7XG4gICAgfVxuXG4gICAgJi5saWdodDpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgfVxuXG4gICAgJi5kYXJrOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5uZW9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMwMGYwZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gV1JBUFBFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb25maWd1cmUtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjZzIGVhc2Utb3V0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEFSSkVUQSBQUklOQ0lQQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29uZmlndXJlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogNDBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNvbmZpZ3VyZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIFNUQVRFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvYWRpbmctc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMDtcblxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFFVRVNUSU9OUyBHUklEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnF1ZXN0aW9ucy1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUVVFU1RJT04gQ0FSRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5xdWVzdGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjVweCAyMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgfVxuXG4gIC5xdWVzdGlvbi1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPUk0gRklFTERTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaW5wdXQtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxNHB4IDE1cHggMTRweCA0NXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERST1BET1dOIFBFUlNPTkFMSVpBRE8gUEFSQSBQUklNRU5HXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOjpuZy1kZWVwIHtcbiAgLnAtZHJvcGRvd24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5wLWZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgIH1cblxuICAgIC5wLWRyb3Bkb3duLWxhYmVsIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAmLnAtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWRyb3Bkb3duLXRyaWdnZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgLnAtZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLnAtZHJvcGRvd24taXRlbXMge1xuICAgICAgcGFkZGluZzogOHB4O1xuXG4gICAgICAucC1kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLnAtaGlnaGxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVSUk9SIE1FU1NBR0Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWRhbmdlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCVVRUT04gR1JPVVBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cblxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUNVUklUWSBJTkZPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlY3VyaXR5LWluZm8ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gIC5pbmZvLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAgICAgJjo6bWFya2VyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEVNQVMgLSBVc2FuZG8gdmFyaWFibGVzIGdsb2JhbGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBMaWdodCBUaGVtZVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblxuICAuY29uZmlndXJlLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICB9XG5cbiAgLnF1ZXN0aW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxufVxuXG4vLyBEYXJrIFRoZW1lXG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTFhMmUgMCUsICMxNjIxM2UgMTAwJSk7XG5cbiAgLmNvbmZpZ3VyZS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgfVxuXG4gIC5jb25maWd1cmUtaGVhZGVyIHtcbiAgICBoMSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gIH1cblxuICAucXVlc3Rpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgICBjb2xvcjogI2NjYztcbiAgfVxuXG4gIC5mb3JtLWZpZWxkIC5pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAucC1kcm9wZG93biB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWJvcmRlcik7XG5cbiAgICAgIC5wLWRyb3Bkb3duLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJi5wLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wLWRyb3Bkb3duLXRyaWdnZXIge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIC5wLWRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCA5NywgMjM4LCAwLjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNlY3VyaXR5LWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgY29sb3I6ICNjY2M7XG5cbiAgICAuaW5mby1oZWFkZXIgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAjZGRkO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tc2Vjb25kYXJ5IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbn1cblxuLy8gTmVvbiBUaGVtZVxuLm5lb24tdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuXG4gIC5jb25maWd1cmUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWNjZXNzKTtcbiAgICBhbmltYXRpb246IGdsb3cgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAuY29uZmlndXJlLWhlYWRlciB7XG4gICAgaDEge1xuICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oIzAwZmY4NywgMjAlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiBsaWdodGVuKCMwMGZmODcsIDMwJSk7XG4gICAgfVxuICB9XG5cbiAgLnF1ZXN0aW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMwMGZmODcsIDIwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XG4gICAgfVxuXG4gICAgLnF1ZXN0aW9uLW51bWJlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdWNjZXNzKSwgbGlnaHRlbigjMDBmZjg3LCAyMCUpKTtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1maWVsZCAuaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogIzExMTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tc3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMjU1LCAxMzUsIDAuNSk7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAucC1kcm9wZG93biB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcblxuICAgICAgLnAtZHJvcGRvd24tbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICAgICAgJi5wLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAyNTUsIDEzNSwgMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucC1kcm9wZG93bi10cmlnZ2VyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMwMGZmODcsIDIwJSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogIzExMTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuXG4gICAgICAucC1kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnAtaGlnaGxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdWNjZXNzKSwgbGlnaHRlbigjMDBmZjg3LCAyMCUpKTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc3VjY2VzcyksIGxpZ2h0ZW4oIzAwZmY4NywgMjAlKSk7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XG4gICAgICBjb2xvcjogbGlnaHRlbigjMDBmZjg3LCAyMCUpO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0ZW4oIzAwZmY4NywgMjAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VjdXJpdHktaW5mbyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNSwgMC4wNSk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuXG4gICAgLmluZm8taGVhZGVyIGkge1xuICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIH1cblxuICAgIC5pbmZvLWhlYWRlciBzdHJvbmcge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4oIzAwZmY4NywgMjAlKTtcbiAgICB9XG5cbiAgICB1bCBsaTo6bWFya2VyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbmZpZ3VyZS1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIH1cblxuICAuY29uZmlndXJlLWhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cblxuICAucXVlc3Rpb25zLWdyaWQge1xuICAgIGdhcDogMjVweDtcbiAgfVxuXG4gIC5xdWVzdGlvbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMTVweDtcbiAgfVxuXG4gIC5idXR0b24tZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICB9XG4gIH1cblxuICAudGhlbWUtc3dpdGNoZXIge1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC50aGVtZS1idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG5cbiAgICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VjdXJpdHktaW5mbyB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29uZmlndXJlLWNhcmQge1xuICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgfVxuXG4gIC5jb25maWd1cmUtaGVhZGVyIC5sb2dvLWljb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5jb25maWd1cmUtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5xdWVzdGlvbi1jYXJkIC5xdWVzdGlvbi1udW1iZXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgdG9wOiAtMTJweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVVRJTElEQURFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm10LTEgeyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4ubXQtMiB7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5tdC0zIHsgbWFyZ2luLXRvcDogMzBweDsgfVxuLm1iLTEgeyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4ubWItMiB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbi5tYi0zIHsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('500ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('staggerAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'translateX(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(100, [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: 'translateX(0)'
      }))])], {
        optional: true
      })])])]
    }
  });
}

/***/ }),

/***/ 45920:
/*!************************************************************************************!*\
  !*** ./src/app/shared/features/security-questions/security-questions.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecurityQuestionsComponent: () => (/* binding */ SecurityQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ 91564);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/auth.service */ 68010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _home_services_theme_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../home/services/theme.service */ 99535);
/* harmony import */ var _services_security_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/security-session.service */ 25800);



// PrimeNG Modules



















function SecurityQuestionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Cuenta Bloqueada Temporalmente");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Ha excedido el n\u00FAmero m\u00E1ximo de intentos fallidos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 15)(8, "div", 16)(9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "MINUTOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "SEGUNDOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SecurityQuestionsComponent_div_13_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, " Volver al Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.getRemainingMinutes());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](17, 2, ctx_r1.getRemainingSeconds(), "2.0"));
  }
}
function SecurityQuestionsComponent_div_14_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 50);
  }
}
function SecurityQuestionsComponent_div_14_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 51);
  }
}
function SecurityQuestionsComponent_div_14_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SecurityQuestionsComponent_div_14_i_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 53);
  }
}
function SecurityQuestionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Intento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, SecurityQuestionsComponent_div_14_i_14_Template, 1, 0, "i", 29)(15, SecurityQuestionsComponent_div_14_i_15_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 31)(18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Pregunta de Seguridad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, " Cada respuesta incorrecta mostrar\u00E1 una pregunta diferente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function SecurityQuestionsComponent_div_14_Template_form_ngSubmit_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 37)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, " Su respuesta: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function SecurityQuestionsComponent_div_14_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r1.respuestaActual, $event) || (ctx_r1.respuestaActual = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, " Respuesta sensible a may\u00FAsculas/min\u00FAsculas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, SecurityQuestionsComponent_div_14_div_38_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 45)(40, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SecurityQuestionsComponent_div_14_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](41, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, SecurityQuestionsComponent_div_14_i_46_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("warning", ctx_r1.intentosRealizados > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r1.intentosRealizados + 1, "/", ctx_r1.maxIntentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("Pregunta ", ctx_r1.currentQuestionIndex + 1, "/", ctx_r1.totalQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("text-warning", ctx_r1.intentosRealizados > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.intentosRealizados > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.intentosRealizados === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.intentosRealizados > 0 ? "Pregunta cambiada tras respuesta incorrecta" : "Primer intento", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("shake", ctx_r1.shakeAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.preguntaActual.texto);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.respuestaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.loading || !ctx_r1.respuestaActual.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Verificando..." : "Verificar Respuesta", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.loading);
  }
}
function SecurityQuestionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Verificando respuesta...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
class SecurityQuestionsComponent {
  authService;
  router;
  route;
  messageService;
  notificationService;
  themeService;
  sessionService;
  themeOptions = [{
    label: '☀️ Claro',
    value: 'light',
    icon: 'pi pi-sun'
  }, {
    label: '🌙 Oscuro',
    value: 'dark',
    icon: 'pi pi-moon'
  }, {
    label: '⚡ Neón',
    value: 'neon',
    icon: 'pi pi-bolt'
  }];
  // Tema
  currentTheme = 'light';
  // Datos de sesión
  sessionData = null;
  preguntaActual = null;
  respuestaActual = '';
  currentQuestionIndex = 0;
  totalQuestions = 0;
  // Control de intentos
  intentosRealizados = 0;
  maxIntentos = 3;
  isBlocked = false;
  bloqueoHasta = null;
  // Estado
  loading = false;
  errorMessage = '';
  shakeAnimation = false;
  constructor(authService, router, route, messageService, notificationService, themeService, sessionService) {
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.messageService = messageService;
    this.notificationService = notificationService;
    this.themeService = themeService;
    this.sessionService = sessionService;
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnInit() {
    this.initializeComponent();
  }
  ngOnDestroy() {
    this.sessionService.cleanup();
  }
  initializeComponent() {
    const tempToken = localStorage.getItem('token_temp');
    const securitySession = sessionStorage.getItem('security_session');
    if (!tempToken && !securitySession) {
      this.router.navigate(['/login']);
      return;
    }
    if (securitySession) {
      this.sessionData = this.sessionService.loadSession();
      if (this.sessionData) {
        this.initializeQuestionSystem();
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  initializeQuestionSystem() {
    if (!this.sessionData) return;
    this.sessionData.preguntas_disponibles = this.sessionService.getAvailableQuestions(this.sessionData);
    if (!this.sessionData.preguntas_disponibles?.length) {
      this.errorMessage = 'Error: No hay preguntas de seguridad configuradas';
      return;
    }
    this.maxIntentos = this.sessionData.max_intentos || 3;
    this.intentosRealizados = this.sessionData.intentos_realizados || 0;
    this.totalQuestions = this.sessionData.preguntas_disponibles.length;
    this.preguntaActual = this.sessionData.preguntas_disponibles[0];
    this.sessionService.markQuestionAsUsed(this.sessionData, this.preguntaActual?.pregunta_id ?? 0);
    this.sessionService.saveSession(this.sessionData);
  }
  onSubmit() {
    if (!this.respuestaActual.trim()) {
      this.showError('Por favor ingrese su respuesta');
      this.triggerShake();
      return;
    }
    if (!this.sessionData || !this.preguntaActual) {
      this.showError('Sesión no válida');
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    const validationData = {
      usuario_id: this.sessionData.usuario_id,
      session_id: this.sessionData.session_id,
      respuestas: [{
        pregunta_id: this.preguntaActual.pregunta_id,
        respuesta: this.respuestaActual.trim()
      }]
    };
    this.authService.validateSecurityQuestions(validationData).subscribe({
      next: response => {
        this.loading = false;
        if (response.access_token) {
          this.onValidationSuccess(response);
        } else if (response.success === false && response.requiere_nuevas_preguntas) {
          this.onValidationFailed(response);
        } else {
          this.showError(response.message || 'Error en la validación');
          this.triggerShake();
        }
      },
      error: error => {
        this.loading = false;
        if (error.status === 400 && error.error?.requiere_nuevas_preguntas) {
          this.onValidationFailed(error.error);
        } else if (error.status === 423) {
          this.onUserBlocked(error.error);
        } else {
          this.showError(error.message || 'Error en la conexión');
          this.triggerShake();
        }
      }
    });
  }
  onValidationSuccess(response) {
    const token = localStorage.getItem('access_token');
    if (token) {}
    this.sessionService.cleanup();
    this.showSuccess('¡Éxito!', 'Autenticación completada correctamente');
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
  onValidationFailed(response) {
    this.intentosRealizados++;
    if (this.sessionData) {
      this.sessionData.intentos_realizados = this.intentosRealizados;
      if (response.nuevas_preguntas?.length) {
        this.sessionData.preguntas_disponibles = response.nuevas_preguntas;
        this.sessionData.preguntas_usadas = [response.nuevas_preguntas[0]?.pregunta_id];
        this.totalQuestions = response.nuevas_preguntas.length;
        this.preguntaActual = response.nuevas_preguntas[0];
      } else {
        this.preguntaActual = this.sessionService.getNextQuestion(this.sessionData);
      }
      this.sessionService.saveSession(this.sessionData);
    }
    const intentosRestantes = this.maxIntentos - this.intentosRealizados;
    this.errorMessage = response.message || `Respuesta incorrecta. Le quedan ${intentosRestantes} intentos.`;
    this.showError(this.errorMessage);
    this.triggerShake();
    this.respuestaActual = '';
    if (this.intentosRealizados >= this.maxIntentos) {
      this.onMaxAttemptsReached();
    } else {
      setTimeout(() => this.focusInput(), 100);
    }
  }
  onMaxAttemptsReached() {
    this.isBlocked = true;
    this.bloqueoHasta = new Date(Date.now() + 60 * 60 * 1000);
    if (this.sessionData) {
      this.sessionData.bloqueado_hasta = this.bloqueoHasta.toISOString();
      this.sessionService.saveSession(this.sessionData);
    }
    this.showError(`Ha excedido ${this.maxIntentos} intentos fallidos. Cuenta bloqueada por 60 minutos.`);
    setTimeout(() => {
      this.logout();
    }, 5000);
  }
  onUserBlocked(response) {
    this.isBlocked = true;
    this.bloqueoHasta = new Date(response.bloqueado_hasta);
    this.showError(`Cuenta bloqueada hasta ${this.bloqueoHasta?.toLocaleTimeString()}`);
    setTimeout(() => {
      this.logout();
    }, 3000);
  }
  logout() {
    this.authService.clearAuthData();
    this.router.navigate(['/login']);
  }
  changeTheme(theme) {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }
  triggerShake() {
    this.shakeAnimation = true;
    setTimeout(() => {
      this.shakeAnimation = false;
    }, 500);
  }
  focusInput() {
    const input = document.getElementById('answer');
    if (input) input.focus();
  }
  showError(message) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 5000
    });
  }
  showSuccess(summary, detail) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      life: 3000
    });
  }
  getRemainingMinutes() {
    if (!this.bloqueoHasta) return 0;
    const diff = this.bloqueoHasta.getTime() - new Date().getTime();
    if (diff <= 0) return 0;
    return Math.floor(diff / 60000);
  }
  getRemainingSeconds() {
    if (!this.bloqueoHasta) return 0;
    const diff = this.bloqueoHasta.getTime() - new Date().getTime();
    if (diff <= 0) return 0;
    return Math.floor(diff % 60000 / 1000);
  }
  static ɵfac = function SecurityQuestionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SecurityQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_17__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_home_services_theme_service__WEBPACK_IMPORTED_MODULE_18__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_security_session_service__WEBPACK_IMPORTED_MODULE_19__.SecuritySessionService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: SecurityQuestionsComponent,
    selectors: [["app-security-questions"]],
    decls: 30,
    vars: 8,
    consts: [[1, "security-container"], [1, "security-wrapper"], [1, "security-card"], [1, "security-header"], [1, "logo-text"], ["src", "/images/logo_security_sigpaz.png", "alt", "Justicia 3D Logo", 1, "logo-image"], ["class", "blocked-state", 4, "ngIf"], [4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "system-info"], [1, "pi", "pi-shield"], ["position", "top-right"], [1, "blocked-state"], [1, "blocked-icon"], [1, "pi", "pi-lock"], [1, "countdown-box"], [1, "countdown-timer"], [1, "time-value"], [1, "time-label"], [1, "separator"], [1, "logout-btn", 3, "click"], [1, "pi", "pi-sign-out"], [1, "attempts-info"], [1, "info-row"], [1, "attempt-badge"], [1, "pi", "pi-exclamation-triangle"], [1, "question-badge"], [1, "pi", "pi-question-circle"], [1, "info-message"], ["class", "pi pi-refresh", 4, "ngIf"], ["class", "pi pi-check-circle", 4, "ngIf"], [1, "question-box"], [1, "question-header"], [1, "question-text"], [1, "question-hint"], [1, "pi", "pi-info-circle"], [3, "ngSubmit"], [1, "input-group"], [1, "pi", "pi-key"], [1, "input-wrapper"], [1, "pi", "pi-pencil", "input-icon"], ["id", "answer", "type", "password", "name", "answer", "placeholder", "Ingrese su respuesta", "autocomplete", "off", "autofocus", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "input-hint"], [1, "pi", "pi-exclamation-circle"], ["class", "error-message", 4, "ngIf"], [1, "button-group"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "pi", "pi-check"], ["class", "pi pi-spinner pi-spin", 4, "ngIf"], [1, "pi", "pi-refresh"], [1, "pi", "pi-check-circle"], [1, "error-message"], [1, "pi", "pi-spinner", "pi-spin"], [1, "loading-overlay"], [1, "spinner"]],
    template: function SecurityQuestionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Verificaci\u00F3n de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Responda correctamente para continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, SecurityQuestionsComponent_div_13_Template, 23, 5, "div", 6)(14, SecurityQuestionsComponent_div_14_Template, 47, 22, "div", 7)(15, SecurityQuestionsComponent_div_15_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Sistema de seguridad rotativo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ul")(21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Muestra preguntas diferentes tras cada error");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Contacte al administrador si olvid\u00F3 sus respuestas");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "p-toast", 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.currentTheme + "-theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isBlocked && ctx.bloqueoHasta);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isBlocked && ctx.preguntaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("M\u00E1ximo ", ctx.maxIntentos, " intentos permitidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Bloqueo autom\u00E1tico tras ", ctx.maxIntentos, " errores consecutivos");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_6__.ProgressSpinnerModule, primeng_messages__WEBPACK_IMPORTED_MODULE_7__.MessagesModule, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.Toast, primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_11__.ThemeSwitcherComponent, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: ["@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%,\n  100% {\n    box-shadow: 0 0 20px rgba(var(--primary-rgb, 0, 240, 255), 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(var(--primary-rgb, 0, 240, 255), 0.6);\n  }\n}\n.security-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.security-container[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD12';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(circle at 20% 50%, var(--primary-light) 0%, transparent 50%);\n  pointer-events: none;\n  font-size: 300px;\n  opacity: 0.05;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 6px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--border-color);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.light[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.dark[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.neon[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n.pi-bolt[_ngcontent-%COMP%]:before {\n  color: chartreuse;\n}\n.pi-moon[_ngcontent-%COMP%]:before {\n  color: #1f2937;\n}\n.pi-sun[_ngcontent-%COMP%]:before {\n  color: #fbbf24;\n}\n.security-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out;\n}\n.security-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 24px;\n  padding: 40px;\n  box-shadow: var(--card-shadow);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--card-border);\n}\n.security-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--card-hover-shadow);\n}\n.security-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.security-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  box-shadow: var(--shadow-md);\n}\n.security-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: white;\n}\n.security-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 10px;\n  color: var(--text-primary);\n}\n.security-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.security-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n}\n.security-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD10 ';\n}\n.attempts-info[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-radius: 12px;\n  padding: 15px 20px;\n  margin-bottom: 25px;\n  border-left: 3px solid var(--primary);\n}\n.attempts-info.warning[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  border-left-color: var(--warning);\n}\n.attempts-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: var(--text-primary);\n}\n.attempts-info[_ngcontent-%COMP%]   .attempt-badge[_ngcontent-%COMP%], \n.attempts-info[_ngcontent-%COMP%]   .question-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n}\n.attempts-info[_ngcontent-%COMP%]   .info-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--text-primary);\n}\n.attempts-info[_ngcontent-%COMP%]   .info-message.text-warning[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.question-box[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  padding: 25px;\n  margin-bottom: 30px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.question-box.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n.question-box[_ngcontent-%COMP%]   .question-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 15px;\n  color: var(--primary);\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.question-box[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 15px;\n  line-height: 1.5;\n}\n.question-box[_ngcontent-%COMP%]   .question-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--icon-color);\n  font-size: 1rem;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 15px 14px 45px;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  font-size: 1rem;\n  transition: all 0.3s;\n  background: var(--input-bg);\n  color: var(--text-primary);\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--input-focus);\n  outline: none;\n  box-shadow: var(--input-focus-shadow);\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg);\n  cursor: not-allowed;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.input-group[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 15px;\n  background: var(--danger-light);\n  border-left: 3px solid var(--danger);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 0.85rem;\n  margin: 15px 0;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  margin-top: 25px;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border: none;\n}\n.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.button-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.button-group[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--border-color);\n  color: var(--text-secondary);\n}\n.button-group[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--danger);\n  color: var(--danger);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--spinner-bg);\n  border-top-color: var(--spinner-active);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 15px;\n}\n.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.loading-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: '\u23F3 ';\n}\n.system-info[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 15px 20px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  border: 1px solid var(--border-light);\n}\n.system-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.system-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.system-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  margin-right: 5px;\n}\n.blocked-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.blocked-state[_ngcontent-%COMP%]   .blocked-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--danger-light);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  position: relative;\n}\n.blocked-state[_ngcontent-%COMP%]   .blocked-icon[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD12';\n  font-size: 40px;\n  position: absolute;\n}\n.blocked-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-bottom: 10px;\n  font-size: 1.3rem;\n}\n.blocked-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: '\u26D4 ';\n}\n.blocked-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 20px;\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid var(--border-light);\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: bold;\n  color: var(--warning);\n  font-family: monospace;\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  display: block;\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--warning);\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.blocked-state[_ngcontent-%COMP%]   .countdown-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: '\u23F0 ';\n}\n.blocked-state[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: var(--gradient-danger);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.blocked-state[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDEAA ';\n}\n.blocked-state[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .security-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n  animation: _ngcontent-%COMP%_glow 2s ease-in-out infinite;\n}\nbody.neon-theme[_ngcontent-%COMP%]   .question-box[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n}\n@media (max-width: 768px) {\n  .security-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n  }\n  .security-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .question-box[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .security-card[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .security-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .security-header[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .countdown-timer[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  align-items: center;\n  letter-spacing: -0.5px;\n  transition: all 0.3s ease;\n  animation: float 3s infinite ease-in-out;\n  animation-delay: 0.5s;\n}\n.logo-text[_ngcontent-%COMP%]:hover {\n  animation: none;\n  transform: translateY(-2px);\n}\n.logo-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  margin-left: -15px;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-left: 2px;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  position: relative;\n  animation: _ngcontent-%COMP%_glow 2s infinite alternate;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--gradient-primary);\n  transition: width 0.3s ease;\n}\n.logo-text[_ngcontent-%COMP%]   .logo-special[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL3NlY3VyaXR5LXF1ZXN0aW9ucy9zZWN1cml0eS1xdWVzdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQVRGO0VBV0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFURjtBQUNGO0FBWUE7RUFDRTs7SUFBVyx3QkFBQTtFQVJYO0VBU0E7SUFBTSw0QkFBQTtFQU5OO0VBT0E7SUFBTSwyQkFBQTtFQUpOO0FBQ0Y7QUFNQTtFQUNFO0lBQUsseUJBQUE7RUFITDtBQUNGO0FBS0E7RUFDRTs7SUFBVyxVQUFBO0VBRFg7RUFFQTtJQUFNLFlBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDRTs7SUFBVywrREFBQTtFQUdYO0VBRkE7SUFBTSwrREFBQTtFQUtOO0FBQ0Y7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdGQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBS0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHFDQUFBO0FBSEY7QUFKQTtFQVVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUhKO0FBakJBO0VBdUJNLGVBQUE7QUFITjtBQXBC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QXhJTjtBQTJJSTtFQUNFLFdBQUE7QUF6SU4iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gREVQRU5ERU5DSUFTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IH1cbn1cblxuQGtleWZyYW1lcyBnbG93IHtcbiAgMCUsIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKHZhcigtLXByaW1hcnktcmdiLCAwLCAyNDAsIDI1NSksIDAuMyk7IH1cbiAgNTAlIHsgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiwgMCwgMjQwLCAyNTUpLCAwLjYpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RJTE9TIEJBU0UgREVMIENPTlRFTkVET1Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc2VjdXJpdHktY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnw7DCn8KUwpInO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgNTAlLCB2YXIoLS1wcmltYXJ5LWxpZ2h0KSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXNpemU6IDMwMHB4O1xuICAgIG9wYWNpdHk6IDAuMDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUSEVNRSBTV0lUQ0hFUiAoYm90b25lcyBkZSB0ZW1hKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50aGVtZS1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAudGhlbWUtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLnRoZW1lLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg3OSwgNzAsIDIyOSwgMC4zKTtcbiAgICB9XG5cbiAgICAmLmxpZ2h0OmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogIzFmMjkzNztcbiAgICB9XG5cbiAgICAmLmRhcms6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmLm5lb246aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjQwLCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogIzAwZjBmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMjQwLCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi8vIEljb25vcyBkZWwgdGhlbWUgc2VsZWN0b3Jcbi5waS1ib2x0OmJlZm9yZSB7XG4gIGNvbG9yOiBjaGFydHJldXNlO1xufVxuLnBpLW1vb246YmVmb3JlIHtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG4ucGktc3VuOmJlZm9yZSB7XG4gIGNvbG9yOiAjZmJiZjI0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gV1JBUFBFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWN1cml0eS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNnMgZWFzZS1vdXQ7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUQVJKRVRBIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWN1cml0eS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWhvdmVyLXNoYWRvdyk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWN1cml0eS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbjogMDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnw7DCn8KUwpAgJztcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFUVEVNUFRTIElORk9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYXR0ZW1wdHMtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG5cbiAgJi53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAuaW5mby1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIH1cblxuICAuYXR0ZW1wdC1iYWRnZSxcbiAgLnF1ZXN0aW9uLWJhZGdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB9XG5cbiAgLmluZm8tbWVzc2FnZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBjb2xvcjp2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgJi50ZXh0LXdhcm5pbmcge1xuICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUVVFU1RJT04gQk9YXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnF1ZXN0aW9uLWJveCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJi5zaGFrZSB7XG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnF1ZXN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAucXVlc3Rpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAucXVlc3Rpb24taGludCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPUk1VTEFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAuaW5wdXQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmlucHV0LWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTRweCAxNXB4IDE0cHggNDVweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtZGlzYWJsZWQtYmcpO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFUlJPUiBNRVNTQUdFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVycm9yLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIE9WRVJMQVlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zcGlubmVyLWJnKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1zcGlubmVyLWFjdGl2ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW46IDAgYXV0byAxNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnw6LCj8KzICc7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTWVNURU0gSU5GT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zeXN0ZW0taW5mbyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIH1cblxuICB1bCB7XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJMT1FVRU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYmxvY2tlZC1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuYmxvY2tlZC1pY29uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICfDsMKfwpTCkic7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ8OiwpvClCAnO1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5jb3VudGRvd24tYm94IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgICAuY291bnRkb3duLXRpbWVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDE1cHg7XG5cbiAgICAgIC50aW1lLXVuaXQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpbWUtdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDE1cHggMCAwO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDosKPwrAgJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9nb3V0LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnw7DCn8KawqogJztcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNRUpPUkFTIFBBUkEgVEVNQSBORU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYm9keS5uZW9uLXRoZW1lIHtcbiAgLnNlY3VyaXR5LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIC5xdWVzdGlvbi1ib3gge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN1cml0eS1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIH1cblxuICAuc2VjdXJpdHktaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIC5xdWVzdGlvbi1ib3ggLnF1ZXN0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5idXR0b24tZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICB9XG4gIH1cblxuICAuaW5mby1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gLnRoZW1lLXN3aXRjaGVyIHtcbiAgICBnYXA6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG5cbiAgICAudGhlbWUtYnRuIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuXG4gICAgICAudGhlbWUtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc2VjdXJpdHktY2FyZCB7XG4gICAgcGFkZGluZzogMjVweCAyMHB4O1xuICB9XG5cbiAgLnNlY3VyaXR5LWhlYWRlciAubG9nby1pY29uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cblxuICAuY291bnRkb3duLXRpbWVyIC50aW1lLXVuaXQgLnRpbWUtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVVElMSURBREVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXQtMSB7IG1hcmdpbi10b3A6IDEwcHg7IH1cbi5tdC0yIHsgbWFyZ2luLXRvcDogMjBweDsgfVxuLm10LTMgeyBtYXJnaW4tdG9wOiAzMHB4OyB9XG4ubWItMSB7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi5tYi0yIHsgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuLm1iLTMgeyBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0dPIFRFWFQgLSBVU0FORE8gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogZmxvYXQgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcblxuICAmOmhvdmVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuXG4gIC5sb2dvLXNwZWNpYWwge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('500ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('shake', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('500ms ease-in-out')])])]
    }
  });
}

/***/ }),

/***/ 47081:
/*!****************************************************!*\
  !*** ./src/app/services/codigo-maestro.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodigoMaestroService: () => (/* binding */ CodigoMaestroService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _app_core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/core/services/modal-communication.service */ 44728);
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/modal.service */ 67509);
/* harmony import */ var _app_core_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/core/services/token.service */ 88705);





class CodigoMaestroService {
  modalCommService;
  modalService;
  tokenService;
  codigoMaestro = null;
  pendingRequests = [];
  isModalOpen = false;
  constructor(modalCommService, modalService, tokenService) {
    this.modalCommService = modalCommService;
    this.modalService = modalService;
    this.tokenService = tokenService;
    this.modalCommService.getCodigoMaestro().subscribe(codigo => {
      console.log('📝 Código maestro recibido:', codigo ? '***' : 'null');
      console.log('📝 Pending requests:', this.pendingRequests.length);
      if (codigo !== undefined && this.pendingRequests.length > 0) {
        if (codigo) {
          this.codigoMaestro = codigo;
          // Procesar todas las peticiones pendientes
          this.pendingRequests.forEach(pending => {
            this.enviarPeticion(pending.req, pending.next, pending.observer, codigo);
          });
        } else {
          this.pendingRequests.forEach(pending => {
            pending.observer.error(new Error('Código maestro requerido'));
            pending.observer.complete();
          });
          console.log('🔄 Cancelado, recargando página...');
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
        this.pendingRequests = [];
        this.isModalOpen = false;
        // ✅ Cerrar el modal después de procesar todas las peticiones
        this.modalCommService.closeCodigoMaestroModal();
        // ✅ Si el código fue exitoso, recargar la página
        if (codigo) {
          console.log('🔄 Código verificado correctamente, recargando página...');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
    });
  }
  enviarPeticion(req, next, observer, codigo) {
    let token = this.tokenService.getToken();
    if (!token) {
      token = this.tokenService.getTempToken();
    }
    const headers = {
      'X-Codigo-Maestro': codigo
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const newReq = req.clone({
      setHeaders: headers
    });
    console.log('🔄 Reenviando petición con código maestro');
    next(newReq).subscribe({
      next: response => {
        console.log('✅ Petición exitosa');
        observer.next(response);
        observer.complete();
      },
      error: err => {
        console.log('❌ Petición fallida:', err.status);
        if (err.status === 403) {
          this.clearCodigoMaestro();
        }
        observer.error(err);
        observer.complete();
      }
    });
  }
  getCodigoMaestro() {
    if (!this.codigoMaestro) {
      this.codigoMaestro = sessionStorage.getItem('codigo_maestro');
    }
    return this.codigoMaestro;
  }
  setCodigoMaestro(codigo) {
    this.codigoMaestro = codigo;
    sessionStorage.setItem('codigo_maestro', codigo);
  }
  clearCodigoMaestro() {
    this.codigoMaestro = null;
    sessionStorage.removeItem('codigo_maestro');
    this.modalService.closeModal('codigoMaestroModal');
  }
  showModalAndRetry(req, next) {
    this.modalService.openModal('codigoMaestroModal');
    console.log('🔐 showModalAndRetry llamado');
    // Si ya hay un código maestro guardado, usarlo directamente
    if (this.getCodigoMaestro()) {
      const codigo = this.getCodigoMaestro();
      let token = this.tokenService.getToken();
      if (!token) {
        token = this.tokenService.getTempToken();
      }
      const headers = {
        'X-Codigo-Maestro': codigo
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      const newReq = req.clone({
        setHeaders: headers
      });
      return next(newReq);
    }
    // Si el modal ya está abierto, agregar a la cola
    if (this.isModalOpen) {
      console.log('📌 Modal ya abierto, agregando a cola');
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
        this.pendingRequests.push({
          req,
          next,
          observer
        });
      });
    }
    // Abrir el modal
    console.log('🔄 Abriendo modal de código maestro');
    this.isModalOpen = true;
    this.modalCommService.openCodigoMaestroModal();
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.pendingRequests.push({
        req,
        next,
        observer
      });
    });
  }
  static ɵfac = function CodigoMaestroService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CodigoMaestroService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_core_services_modal_communication_service__WEBPACK_IMPORTED_MODULE_2__.ModalCommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CodigoMaestroService,
    factory: CodigoMaestroService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50468:
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/avatar */ 46095);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var _shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/notification/notification.component */ 76085);
/* harmony import */ var _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../shared/features/home/components/theme-switcher/theme-switcher.component */ 56177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/services/auth.service */ 68010);
/* harmony import */ var _core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/services/sidebar.service */ 19964);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/personal.service */ 45322);
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/persona.service */ 5378);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/services/notification/notification.service */ 97407);










 // ✅ Importar








function HeaderComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9)(1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("error", function HeaderComponent_Conditional_9_Conditional_2_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onImageError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.userInfo.fotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("alt", ctx_r1.userInfo.displayName);
  }
}
function HeaderComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.avatarInitials);
  }
}
function HeaderComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_Conditional_9_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("error", function HeaderComponent_Conditional_9_Conditional_5_Conditional_4_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onImageError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.userInfo.fotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("alt", ctx_r1.userInfo.displayName);
  }
}
function HeaderComponent_Conditional_9_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.avatarInitials);
  }
}
function HeaderComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Conditional_9_Conditional_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](4, HeaderComponent_Conditional_9_Conditional_5_Conditional_4_Template, 1, 2, "img", 19)(5, HeaderComponent_Conditional_9_Conditional_5_Conditional_5_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 21)(7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Conditional_9_Conditional_5_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onProfileClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Conditional_9_Conditional_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onSettingsClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "\u2699\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Configuraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Conditional_9_Conditional_5_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onLogoutClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "\uD83D\uDEAA");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.userInfo.tieneFoto && ctx_r1.userInfo.fotoUrl ? 4 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function HeaderComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Conditional_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onToggleUserMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](2, HeaderComponent_Conditional_9_Conditional_2_Template, 2, 2, "div", 9)(3, HeaderComponent_Conditional_9_Conditional_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](4, HeaderComponent_Conditional_9_Conditional_4_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](5, HeaderComponent_Conditional_9_Conditional_5_Template, 29, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r1.isUserMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", ctx_r1.userInfo.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", ctx_r1.isUserMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.userInfo.tieneFoto && ctx_r1.userInfo.fotoUrl ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.isLoading ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.isUserMenuOpen ? 5 : -1);
  }
}
function HeaderComponent_div_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r1.userInfo.fotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("alt", ctx_r1.userInfo.displayName);
  }
}
function HeaderComponent_div_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.avatarInitials);
  }
}
function HeaderComponent_div_10_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("width", ctx_r1.logoutProgress, "%");
  }
}
function HeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBackdropClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\u00BFCerrar sesi\u00F3n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Tu sesi\u00F3n se cerrar\u00E1 y tendr\u00E1s que volver a iniciar sesi\u00F3n para acceder al sistema. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 38)(10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](11, HeaderComponent_div_10_Conditional_11_Template, 1, 2, "img", 40)(12, HeaderComponent_div_10_Conditional_12_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 42)(14, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 45)(19, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "\uD83D\uDC4B \u00A1Hasta pronto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 47)(22, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.confirmLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](28, HeaderComponent_div_10_Conditional_28_Template, 3, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("pulsing", ctx_r1.isLoggingOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("spinning", ctx_r1.isLoggingOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.userInfo.tieneFoto && ctx_r1.userInfo.fotoUrl ? 11 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.userInfo.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isLoggingOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isLoggingOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r1.isLoggingOut ? "pi pi-spin pi-spinner" : "pi pi-power-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.isLoggingOut ? "Cerrando sesi\u00F3n..." : "Cerrar sesi\u00F3n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx_r1.isLoggingOut ? 28 : -1);
  }
}
class HeaderComponent {
  authService;
  sidebarService;
  personalService;
  personaService;
  notificationService;
  router;
  openSearchModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  isUserMenuOpen = false;
  showLogoutModal = false;
  isLoading = false;
  isLoggingOut = false;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  logoutProgress = 0;
  logoutInterval;
  isSidebarCollapsed = false;
  userInfo = {
    avatarInitials: '?',
    displayName: 'Usuario',
    email: 'No disponible',
    role: 'Sin rol',
    fotoUrl: null,
    tieneFoto: false
  };
  constructor(authService, sidebarService, personalService, personaService, notificationService, router) {
    this.authService = authService;
    this.sidebarService = sidebarService;
    this.personalService = personalService;
    this.personaService = personaService;
    this.notificationService = notificationService;
    this.router = router;
  }
  ngOnInit() {
    this.loadUserInfo();
    this.checkSidebarState();
    this.authService.currentUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadUserInfo();
    });
    this.sidebarService.isCollapsed$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(collapsed => {
      this.isSidebarCollapsed = collapsed;
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(() => {
      this.isUserMenuOpen = false;
    });
  }
  checkSidebarState() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      this.isSidebarCollapsed = sidebar.classList.contains('collapsed');
    }
  }
  // Método confirmLogout
  confirmLogout() {
    this.isLoggingOut = true;
    this.logoutProgress = 0;
    // Animación de progreso
    this.logoutInterval = setInterval(() => {
      this.logoutProgress += 2; // Incremento más suave
      if (this.logoutProgress >= 100) {
        clearInterval(this.logoutInterval);
        this.performLogout();
      }
    }, 16); // ~60fps
  }
  // Método cancelLogout
  cancelLogout() {
    if (this.logoutInterval) {
      clearInterval(this.logoutInterval);
    }
    this.isLoggingOut = false;
    this.logoutProgress = 0;
    this.showLogoutModal = false;
  }
  // Método ngOnDestroy para limpiar intervalos
  ngOnDestroy() {
    if (this.logoutInterval) {
      clearInterval(this.logoutInterval);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onOpenSearchModal() {
    this.openSearchModal.emit();
  }
  onProfileClick() {
    this.isUserMenuOpen = false;
    this.router.navigate(['/profile']);
  }
  onSettingsClick() {
    this.isUserMenuOpen = false;
    this.router.navigate(['/seguridad/usuarios']);
  }
  onLogoutClick() {
    this.isUserMenuOpen = false;
    this.showLogoutModal = true;
  }
  onImageError() {
    this.userInfo.tieneFoto = false;
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userInfo.avatarInitials = this.getAvatarInitials(user);
    }
  }
  onClickOutside(event) {
    const target = event.target;
    if (this.isUserMenuOpen && !target.closest('.user-menu-wrapper') && !target.closest('.user-dropdown')) {
      this.isUserMenuOpen = false;
    }
  }
  performLogout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('✅ Logout exitoso');
      },
      error: () => {
        console.error('❌ Error en logout:');
        // Fallback: limpiar datos localmente
        this.authService.clearAuthData(true, false);
      }
    });
  }
  loadUserInfo() {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.userInfo = {
        avatarInitials: '?',
        displayName: 'Invitado',
        email: 'No disponible',
        role: 'Sin rol',
        fotoUrl: null,
        tieneFoto: false
      };
      return;
    }
    this.userInfo = {
      avatarInitials: this.getAvatarInitials(user),
      displayName: this.getDisplayName(user),
      email: this.getDisplayEmail(user),
      role: this.getRoleName(user),
      fotoUrl: null,
      tieneFoto: false
    };
    this.cargarFotoPersona(user);
  }
  cargarFotoPersona(user) {
    this.isLoading = true;
    if (user.personal_id) {
      this.personalService.obtenerPersonal(user.personal_id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
        next: response => {
          console.log('🔍 DEBUG - Respuesta completa de personal:', response);
          if (response && response.data) {
            const personalData = response.data;
            console.log('✅ Datos de personal recibidos:', personalData);
            if (personalData.persona) {
              console.log('✅ Persona encontrada:', personalData.persona);
              this.procesarPersona(personalData.persona);
            } else {
              console.log('⚠️ El personal no tiene persona asociada');
              this.isLoading = false;
            }
          } else {
            console.log('❌ Respuesta de personal inválida:', response);
            this.isLoading = false;
          }
        },
        error: error => {
          console.error('❌ Error obteniendo personal:', error);
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
    }
  }
  procesarPersona(persona) {
    console.log('🔍 Procesando persona:', persona);
    if (persona.nombres && persona.apellidos) {
      this.userInfo.displayName = `${persona.nombres} ${persona.apellidos}`;
      console.log('✅ Nombre actualizado:', this.userInfo.displayName);
    }
    if (persona.foto_cifrada) {
      console.log('✅ Foto encontrada, longitud:', persona.foto_cifrada.length);
      this.userInfo.fotoUrl = persona.foto_cifrada;
      this.userInfo.tieneFoto = true;
      this.userInfo.avatarInitials = '';
      console.log('✅ Foto asignada a userInfo.fotoUrl');
    } else {
      console.log('⚠️ La persona no tiene foto');
    }
    this.isLoading = false;
  }
  getRoleName(user) {
    if (!user) return 'Sin rol';
    if (user.rol_nombre) {
      return user.rol_nombre;
    }
    if (user.rol_id) {
      const roleNames = {
        1: 'Administrador del Sistema',
        2: 'Administrador Técnico',
        3: 'Usuario Avanzado',
        4: 'Usuario Estándar'
      };
      return roleNames[user.rol_id] || `Rol ${user.rol_id}`;
    }
    return 'Sin rol asignado';
  }
  getDisplayEmail(user) {
    if (!user) return 'No disponible';
    return user.email || 'No disponible';
  }
  getAvatarInitials(user) {
    if (!user) return '?';
    const username = user.nombre_usuario || user.email || '';
    if (!username.trim()) return '?';
    if (username.includes('@')) {
      const emailPart = username.split('@')[0];
      return emailPart.charAt(0).toUpperCase();
    }
    const parts = username.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    }
    return username.charAt(0).toUpperCase();
  }
  getDisplayName(user) {
    if (!user) return 'Usuario';
    if (user.nombre_usuario) return user.nombre_usuario;
    if (user.email && user.email.includes('@')) {
      return user.email.split('@')[0];
    }
    return user.email || 'Usuario';
  }
  onBackdropClick(event) {
    // Esto evita que se cierre si se hace clic fuera del modal
    // Si quieres que se cierre al hacer clic fuera, descomenta la siguiente línea:
    // this.cancelLogout();
  }
  // También puedes agregar un método para cerrar al hacer clic fuera (opcional)
  onBackdropClickToClose(event) {
    // Solo cierra si NO está en modo logging out
    if (!this.isLoggingOut) {
      this.cancelLogout();
    }
  }
  static ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_sidebar_service__WEBPACK_IMPORTED_MODULE_15__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_personal_service__WEBPACK_IMPORTED_MODULE_16__.PersonalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_persona_service__WEBPACK_IMPORTED_MODULE_17__.PersonaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_18__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler() {
          return ctx.checkSidebarState();
        }, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"])("click", function HeaderComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveDocument"]);
      }
    },
    outputs: {
      openSearchModal: "openSearchModal"
    },
    decls: 11,
    vars: 6,
    consts: [[1, "top-bar-container"], [1, "top-bar"], [1, "search-button-wrapper"], ["aria-label", "Search", 1, "search-button", 3, "click"], [1, "search-button-icon"], [1, "header-actions"], [1, "user-menu-wrapper"], ["class", "custom-logout-modal", 3, "click", 4, "ngIf"], ["aria-label", "Men\u00FA de usuario", 1, "user-menu-btn", 3, "click", "title"], [1, "user-avatar-photo"], [1, "user-avatar-initial"], [1, "avatar-loading"], [1, "user-dropdown"], ["loading", "lazy", 1, "avatar-image", 3, "error", "src", "alt"], [1, "loading-spinner"], [1, "user-dropdown", 3, "click"], [1, "dropdown-menu"], [1, "user-info"], [1, "user-avatar-large"], ["loading", "lazy", 1, "avatar-image-large", 3, "src", "alt"], [1, "avatar-large-initial"], [1, "user-details"], [1, "user-name"], [1, "user-email"], [1, "user-role"], [1, "dropdown-divider"], [1, "menu-item", 3, "click"], [1, "menu-icon"], [1, "menu-text"], [1, "menu-item", "logout-item", 3, "click"], ["loading", "lazy", 1, "avatar-image-large", 3, "error", "src", "alt"], [1, "custom-logout-modal", 3, "click"], [1, "custom-logout-content", 3, "click"], [1, "logout-icon-wrapper"], [1, "logout-icon-circle"], [1, "pi", "pi-power-off", "logout-icon"], [1, "logout-title"], [1, "logout-message"], [1, "user-info-chip"], [1, "user-avatar-mini"], [1, "avatar-mini-img", 3, "src", "alt"], [1, "avatar-mini-initial"], [1, "user-details-mini"], [1, "user-name-mini"], [1, "user-role-mini"], [1, "farewell-message"], [1, "farewell-text"], [1, "button-container-premium"], ["type", "button", 1, "btn-cancel-premium", 3, "click", "disabled"], [1, "pi", "pi-times"], ["type", "button", 1, "btn-logout-premium", 3, "click", "disabled"], [1, "logout-progress"], [1, "progress-bar-custom"], [1, "progress-fill"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "app-theme-switcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "app-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditionalCreate"](9, HeaderComponent_Conditional_9_Template, 6, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 29, 13, "div", 7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("sidebar-collapsed", ctx.isSidebarCollapsed)("sidebar-expanded", !ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx.userInfo ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showLogoutModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _shared_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__.NotificationComponent, primeng_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBarModule, _shared_features_home_components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_12__.ThemeSwitcherComponent],
    styles: [":host {\n  display: block;\n  width: 100%;\n}\n.top-bar-container {\n  position: fixed;\n  z-index: 1000;\n  background: var(--bg-primary);\n  border-radius: 16px;\n  padding: 0 24px;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s ease;\n  border: 1px solid var(--border-color);\n}\n.top-bar-container.sidebar-expanded {\n  left: 284px;\n  top: 3px;\n  width: calc(100% - 292px);\n}\n.top-bar-container.sidebar-collapsed {\n  left: 105px;\n  top: 3px;\n  width: calc(100% - 116px);\n}\n.top-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  gap: 16px;\n}\n.search-button-wrapper {\n  flex-shrink: 0;\n  z-index: 1000;\n}\n.search-button-wrapper .search-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.search-button-wrapper .search-button .search-button-icon {\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n.search-button-wrapper .search-button:hover {\n  background: var(--primary);\n  transform: scale(1.05);\n}\n.search-button-wrapper .search-button:hover .search-button-icon {\n  color: white;\n}\n.theme-switcher {\n  display: flex;\n  gap: 8px;\n  padding: 6px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--border-color);\n}\n.theme-switcher .theme-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-switcher .theme-btn i {\n  font-size: 1rem;\n}\n.theme-switcher .theme-btn .theme-label {\n  font-size: 0.85rem;\n}\n.theme-switcher .theme-btn:hover {\n  transform: translateY(-2px);\n}\n.theme-switcher .theme-btn.active {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-switcher .theme-btn.light:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-switcher .theme-btn.dark:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-switcher .theme-btn.neon:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.notification-wrapper {\n  position: relative;\n  flex-shrink: 0;\n}\n.notification-wrapper .notification-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.notification-wrapper .notification-btn:hover {\n  background: var(--bg-hover);\n}\n.notification-wrapper .notification-btn .notification-icon {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n}\n.notification-wrapper .notification-btn .notification-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--danger);\n  color: white;\n  font-size: 10px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.user-menu-wrapper {\n  position: relative;\n  flex-shrink: 0;\n}\n.user-menu-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.user-menu-btn:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-sm);\n}\n.user-menu-btn.active {\n  border: 2px solid white;\n  box-shadow: 0 0 0 2px var(--primary);\n}\n.user-menu-btn .user-avatar-photo {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.user-menu-btn .user-avatar-photo .avatar-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-menu-btn .user-avatar-initial {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n}\n.avatar-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-loading .loading-spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border-color);\n  border-top: 2px solid var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.user-dropdown {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 280px;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  z-index: 1000;\n  overflow: hidden;\n  animation: slideDown 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.user-dropdown .dropdown-menu {\n  padding: 8px 0;\n}\n.user-dropdown .user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-bottom: 1px solid var(--border-color);\n}\n.user-dropdown .user-avatar-large {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.user-dropdown .user-avatar-large .avatar-image-large {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-dropdown .user-avatar-large .avatar-large-initial {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: white;\n}\n.user-dropdown .user-details {\n  flex: 1;\n}\n.user-dropdown .user-details .user-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.user-dropdown .user-details .user-email {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n.user-dropdown .user-details .user-role {\n  font-size: 0.7rem;\n  color: var(--primary);\n  font-weight: 500;\n}\n.user-dropdown .dropdown-divider {\n  height: 1px;\n  background: var(--border-color);\n  margin: 8px 0;\n}\n.user-dropdown .menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: var(--text-primary);\n}\n.user-dropdown .menu-item:hover {\n  background: var(--bg-hover);\n  padding-left: 20px;\n}\n.user-dropdown .menu-item .menu-icon {\n  font-size: 1.1rem;\n  min-width: 24px;\n}\n.user-dropdown .menu-item .menu-text {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.user-dropdown .menu-item.logout-item {\n  color: var(--danger);\n}\n.user-dropdown .menu-item.logout-item:hover {\n  background: var(--danger-light);\n}\n.custom-logout-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n}\n.custom-logout-modal .custom-logout-content {\n  background: var(--card-bg, #ffffff);\n  border-radius: 28px;\n  padding: 32px;\n  text-align: center;\n  max-width: 450px;\n  width: 90%;\n  position: relative;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  border: 1px solid var(--border-color, #e5e7eb);\n  transition: all 0.3s ease;\n}\n.dark-theme .custom-logout-modal .custom-logout-content {\n  background: var(--card-bg, #1f2937);\n  border-color: var(--border-color, #374151);\n}\n.neon-theme .custom-logout-modal .custom-logout-content {\n  background: #05050a;\n  border: 1px solid #00f0ff;\n  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);\n}\n.logout-icon-wrapper {\n  margin-bottom: 24px;\n}\n.logout-icon-wrapper .logout-icon-circle {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.logout-icon-wrapper .logout-icon-circle.pulsing {\n  animation: pulseRing 1.5s infinite;\n}\n.logout-icon-wrapper .logout-icon-circle .logout-icon {\n  font-size: 40px;\n  color: white;\n}\n.logout-icon-wrapper .logout-icon-circle .logout-icon.spinning {\n  animation: spin 1s linear infinite;\n}\n.logout-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary, #1f2937);\n  margin: 0 0 12px 0;\n}\n.dark-theme .logout-title {\n  color: var(--text-primary, #f9fafb);\n}\n.neon-theme .logout-title {\n  color: #e0fcff;\n  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);\n}\n.logout-message {\n  font-size: 15px;\n  color: var(--text-secondary, #6b7280);\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\n.dark-theme .logout-message {\n  color: var(--text-secondary, #d1d5db);\n}\n.neon-theme .logout-message {\n  color: #80f6ff;\n}\n.user-info-chip {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 60px;\n  margin-bottom: 20px;\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.dark-theme .user-info-chip {\n  background: var(--bg-tertiary, #374151);\n  border-color: var(--border-color, #374151);\n}\n.neon-theme .user-info-chip {\n  background: rgba(0, 240, 255, 0.1);\n  border: 1px solid #00f0ff;\n}\n.user-info-chip .user-avatar-mini {\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n}\n.user-info-chip .user-avatar-mini .avatar-mini-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-info-chip .user-avatar-mini .avatar-mini-initial {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 18px;\n  color: white;\n}\n.user-info-chip .user-details-mini {\n  flex: 1;\n  text-align: left;\n}\n.user-info-chip .user-details-mini .user-name-mini {\n  display: block;\n  font-weight: 600;\n  font-size: 15px;\n  color: var(--text-primary, #1f2937);\n  margin-bottom: 2px;\n}\n.dark-theme .user-info-chip .user-details-mini .user-name-mini {\n  color: var(--text-primary, #f9fafb);\n}\n.user-info-chip .user-details-mini .user-role-mini {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary, #6b7280);\n}\n.dark-theme .user-info-chip .user-details-mini .user-role-mini {\n  color: var(--text-secondary, #d1d5db);\n}\n.farewell-message {\n  margin-bottom: 28px;\n}\n.farewell-message .farewell-text {\n  font-size: 14px;\n  color: var(--text-secondary, #6b7280);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--bg-tertiary, #f3f4f6);\n  border-radius: 40px;\n}\n.dark-theme .farewell-message .farewell-text {\n  background: var(--bg-tertiary, #374151);\n  color: var(--text-secondary, #d1d5db);\n}\n.neon-theme .farewell-message .farewell-text {\n  background: rgba(0, 240, 255, 0.1);\n  color: #80f6ff;\n}\n.button-container-premium {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.button-container-premium button {\n  flex: 1;\n  padding: 12px 20px;\n  font-weight: 600;\n  border-radius: 60px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.button-container-premium button:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.button-container-premium button i {\n  font-size: 16px;\n}\n.button-container-premium .btn-cancel-premium {\n  background: transparent;\n  border: 1px solid var(--border-color, #e5e7eb);\n  color: var(--text-primary, #1f2937);\n}\n.button-container-premium .btn-cancel-premium:hover:not(:disabled) {\n  background: var(--bg-tertiary, #f3f4f6);\n  transform: translateY(-2px);\n}\n.dark-theme .button-container-premium .btn-cancel-premium {\n  border-color: var(--border-color, #374151);\n  color: var(--text-primary, #f9fafb);\n}\n.dark-theme .button-container-premium .btn-cancel-premium:hover:not(:disabled) {\n  background: var(--bg-tertiary, #374151);\n}\n.button-container-premium .btn-logout-premium {\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  border: none;\n  color: white;\n}\n.button-container-premium .btn-logout-premium:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);\n}\n.logout-progress {\n  margin-top: 8px;\n}\n.logout-progress .progress-bar-custom {\n  height: 4px;\n  background: var(--border-color, #e5e7eb);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.dark-theme .logout-progress .progress-bar-custom {\n  background: var(--border-color, #374151);\n}\n.logout-progress .progress-bar-custom .progress-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #ef4444, #dc2626);\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes pulseRing {\n  0% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 20px rgba(239, 68, 68, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .custom-logout-content {\n    padding: 24px 20px;\n    width: 95%;\n  }\n  .logout-title {\n    font-size: 20px;\n  }\n  .logout-message {\n    font-size: 14px;\n  }\n  .logout-icon-circle {\n    width: 60px;\n    height: 60px;\n  }\n  .logout-icon-circle .logout-icon {\n    font-size: 30px;\n  }\n  .button-container-premium {\n    flex-direction: column;\n  }\n  .button-container-premium button {\n    width: 100%;\n  }\n  .user-info-chip {\n    padding: 10px 12px;\n  }\n  .user-info-chip .user-avatar-mini {\n    width: 36px;\n    height: 36px;\n  }\n  .user-info-chip .user-details-mini .user-name-mini {\n    font-size: 14px;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .top-bar-container {\n    padding: 0 16px;\n  }\n  .top-bar {\n    height: 56px;\n    gap: 12px;\n  }\n  .search-button-wrapper .search-button {\n    width: 36px;\n    height: 36px;\n  }\n  .theme-switcher {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher .theme-btn {\n    padding: 6px 12px;\n  }\n  .theme-switcher .theme-btn .theme-label {\n    display: none;\n  }\n  .theme-switcher .theme-btn i {\n    font-size: 1.1rem;\n  }\n  .user-menu-btn {\n    width: 36px;\n    height: 36px;\n  }\n  .user-dropdown {\n    position: fixed;\n    top: 60px;\n    right: 16px;\n    width: calc(100vw - 32px);\n    max-width: 300px;\n  }\n  .logout-modal-content {\n    padding: 1.5rem;\n  }\n  .logout-modal-content .button-container-premium {\n    flex-direction: column;\n  }\n  .logout-modal-content .button-container-premium button {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .top-bar-container {\n    padding: 0 12px;\n  }\n  .top-bar {\n    gap: 8px;\n  }\n  .search-button-wrapper .search-button {\n    width: 32px;\n    height: 32px;\n  }\n  .theme-switcher {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher .theme-btn {\n    padding: 6px 12px;\n  }\n  .theme-switcher .theme-btn .theme-label {\n    display: none;\n  }\n  .theme-switcher .theme-btn i {\n    font-size: 1.1rem;\n  }\n  .user-menu-btn {\n    width: 32px;\n    height: 32px;\n  }\n  .header-actions {\n    gap: 8px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFURjtBQVlBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQVZGO0FBYUU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FBWEo7QUFlRTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUFiSjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFmRjtBQXFCQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBbkJGO0FBaUJBO0VBS0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBS0E7RUFpQk0saUJBQUE7RUFDQSxxQkFBQTtBQW5CTjtBQXNCSTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFwQk47QUFrQkk7RUFLSSxZQUFBO0FBcEJSO0FBNkJBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQ0FBQTtBQTNCRjtBQW9CQTtFQVVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQTNCSjtBQU9BO0VBdUJNLGVBQUE7QUEzQk47QUFJQTtFQTJCTSxrQkFBQTtBQTVCTjtBQStCSTtFQUNFLDJC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QWdNRDtJQUtLLGlCQUFBO0VBbE1KO0VBNkxEO0lBUU8sYUFBQTtFQWxNTjtFQTBMRDtJQVlPLGlCQUFBO0VBbk1OO0VBd01BO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUF0TUY7RUF5TUE7SUFDRSxRQUFBO0VBdk1GO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIENPTVBPTkVOVCAtIEVTVElMT1MgQ09OIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTm90YTogVG9kYXMgbGFzIHZhcmlhYmxlcyBDU1MgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xuLy8gU2UgYWNjZWRlbiBtZWRpYW50ZSB2YXIoLS1ub21icmUtdmFyaWFibGUpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9wLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLy8gU2lkZWJhciBleHBhbmRpZG8gKDI4MHB4KVxuICAmLnNpZGViYXItZXhwYW5kZWQge1xuICAgIGxlZnQ6IDI4NHB4O1xuICAgIHRvcDogM3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyOTJweCk7XG4gIH1cblxuICAvLyBTaWRlYmFyIGNvbGFwc2FkbyAoOTBweClcbiAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XG4gICAgbGVmdDogMTA1cHg7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExNnB4KTtcbiAgfVxufVxuXG4udG9wLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBnYXA6IDE2cHg7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1TDg8KTTiBERSBCw4PCmlNRVUVEQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zZWFyY2gtYnV0dG9uLXdyYXBwZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgei1pbmRleDogMTAwMDtcblxuICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgLnNlYXJjaC1idXR0b24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblxuICAgICAgLnNlYXJjaC1idXR0b24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FIFNXSVRDSEVSIChib3RvbmVzIGRlIHRlbWEpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRoZW1lLXN3aXRjaGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC50aGVtZS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAudGhlbWUtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjMpO1xuICAgIH1cblxuICAgICYubGlnaHQ6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIH1cblxuICAgICYuZGFyazpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYubmVvbjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNDAsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiAjMDBmMGZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyNDAsIDI1NSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFDQ0lPTkVTIERFTCBIRUFERVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk9USUZJQ0FDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNRU7Dg8KaIERFIFVTVUFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udXNlci1tZW51LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udXNlci1tZW51LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgLnVzZXItYXZhdGFyLXBob3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuYXZhdGFyLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItYXZhdGFyLWluaXRpYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uYXZhdGFyLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRFJPUERPV04gREUgVVNVQVJJT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi51c2VyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMjgwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgfVxuXG4gIC51c2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIH1cblxuICAudXNlci1hdmF0YXItbGFyZ2Uge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAuYXZhdGFyLWltYWdlLWxhcmdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgLmF2YXRhci1sYXJnZS1pbml0aWFsIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuXG4gICAgLnVzZXItZW1haWwge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIC51c2VyLXJvbGUge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1kaXZpZGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAubWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAubWVudS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgIC5tZW51LXRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICYubG9nb3V0LWl0ZW0ge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgUEVSU09OQUxJWkFETyBDT04gRk9ORE8gT1BBQ09cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5jdXN0b20tbG9nb3V0LW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgLy8gRm9uZG8gb3BhY28gLSBldml0YSBjbGlja3MgZGV0csODwqFzXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAvLyBFbCBjb250ZW5pZG8gZGVsIG1vZGFsXG4gIC5jdXN0b20tbG9nb3V0LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcsICNmZmZmZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgcGFkZGluZzogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgIC8vIFRlbWEgb3NjdXJvXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnLCAjMWYyOTM3KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLCAjMzc0MTUxKTtcbiAgICB9XG5cbiAgICAvLyBUZW1hIG5lw4PCs25cbiAgICAubmVvbi10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNTA1MGE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBmMGZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAyNDAsIDI1NSwgMC4zKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElDT05PIEFOSU1BRE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9nb3V0LWljb24td3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLmxvZ291dC1pY29uLWNpcmNsZSB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZjQ0NDQsICNkYzI2MjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICYucHVsc2luZyB7XG4gICAgICBhbmltYXRpb246IHB1bHNlUmluZyAxLjVzIGluZmluaXRlO1xuICAgIH1cblxuICAgIC5sb2dvdXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICYuc3Bpbm5pbmcge1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVMODwo1UVUxPIFkgTUVOU0FKRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dvdXQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG5cbiAgLmRhcmstdGhlbWUgJiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gIH1cblxuICAubmVvbi10aGVtZSAmIHtcbiAgICBjb2xvcjogI2UwZmNmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyNDAsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4ubG9nb3V0LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLmRhcmstdGhlbWUgJiB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjZDFkNWRiKTtcbiAgfVxuXG4gIC5uZW9uLXRoZW1lICYge1xuICAgIGNvbG9yOiAjODBmNmZmO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDSElQIERFIFVTVUFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udXNlci1pbmZvLWNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksICNmM2Y0ZjYpO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gIC5kYXJrLXRoZW1lICYge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjMzc0MTUxKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gIH1cblxuICAubmVvbi10aGVtZSAmIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGYwZmY7XG4gIH1cblxuICAudXNlci1hdmF0YXItbWluaSB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgLmF2YXRhci1taW5pLWltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgIC5hdmF0YXItbWluaS1pbml0aWFsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLW1pbmkge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIC51c2VyLW5hbWUtbWluaSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcblxuICAgICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmOWZhZmIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLXJvbGUtbWluaSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG5cbiAgICAgIC5kYXJrLXRoZW1lICYge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICNkMWQ1ZGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUVOU0FKRSBERSBERVNQRURJREFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmFyZXdlbGwtbWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG5cbiAgLmZhcmV3ZWxsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksICM2YjcyODApO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnksICNmM2Y0ZjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjMzc0MTUxKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgI2QxZDVkYik7XG4gICAgfVxuXG4gICAgLm5lb24tdGhlbWUgJiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjEpO1xuICAgICAgY29sb3I6ICM4MGY2ZmY7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ1dHRvbi1jb250YWluZXItcHJlbWl1bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cblxuICAuYnRuLWNhbmNlbC1wcmVtaXVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICMxZjI5MzcpO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSwgI2YzZjRmNik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZjlmYWZiKTtcblxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5LCAjMzc0MTUxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLWxvZ291dC1wcmVtaXVtIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWY0NDQ0LCAjZGMyNjI2KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMyk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCQVJSQSBERSBQUk9HUkVTT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2dvdXQtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLnByb2dyZXNzLWJhci1jdXN0b20ge1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvciwgIzM3NDE1MSk7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWZpbGwge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZWY0NDQ0LCAjZGMyNjI2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2VSaW5nIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMzksIDY4LCA2OCwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDIwcHggcmdiYSgyMzksIDY4LCA2OCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIzOSwgNjgsIDY4LCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY3VzdG9tLWxvZ291dC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5sb2dvdXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5sb2dvdXQtbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmxvZ291dC1pY29uLWNpcmNsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmxvZ291dC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLWNvbnRhaW5lci1wcmVtaXVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8tY2hpcCB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuXG4gICAgLnVzZXItYXZhdGFyLW1pbmkge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscy1taW5pIHtcbiAgICAgIC51c2VyLW5hbWUtbWluaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMzksIDY4LCA2OCwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggcmdiYSgyMzksIDY4LCA2OCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cblxuICAudG9wLWJhciB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgLnNlYXJjaC1idXR0b24ge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxuXG4gICAudGhlbWUtc3dpdGNoZXIge1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC50aGVtZS1idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG5cbiAgICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1tZW51LWJ0biB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG5cbiAgLnVzZXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmxvZ291dC1tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgICAuYnV0dG9uLWNvbnRhaW5lci1wcmVtaXVtIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cblxuICAudG9wLWJhciB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAuc2VhcmNoLWJ1dHRvbi13cmFwcGVyIC5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuIC50aGVtZS1zd2l0Y2hlciB7XG4gICAgZ2FwOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuXG4gICAgLnRoZW1lLWJ0biB7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcblxuICAgICAgLnRoZW1lLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLW1lbnUtYnRuIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGdhcDogOHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('300ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('200ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.4, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('logoutAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'scale(0.8)',
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0.5,
        transform: 'scale(1.05)',
        offset: 0.5
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: 'scale(1)',
        offset: 1.0
      })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 1,
        transform: 'scale(1)',
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0.5,
        transform: 'scale(0.95)',
        offset: 0.5
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        opacity: 0,
        transform: 'scale(0.8)',
        offset: 1.0
      })]))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('iconSpin', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => spin', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('1000ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: 'rotate(0deg)',
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
        transform: 'rotate(360deg)',
        offset: 1.0
      })]))])])]
    }
  });
}

/***/ }),

/***/ 56091:
/*!***********************************************************!*\
  !*** ./src/app/core/services/websocket/pusher.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PusherService: () => (/* binding */ PusherService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);


class PusherService {
  ngZone;
  pusher = null;
  channels = new Map();
  connectionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.loadPusherScript();
  }
  loadPusherScript() {
    if (typeof Pusher !== 'undefined') {
      this.initializePusher();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://js.pusher.com/8.4.0/pusher.min.js';
    script.onload = () => {
      console.log('✅ Pusher JS cargado');
      this.initializePusher();
    };
    script.onerror = () => {
      console.error('❌ Error cargando Pusher JS');
    };
    document.head.appendChild(script);
  }
  initializePusher() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setTimeout(() => this.initializePusher(), 2000);
      return;
    }
    const config = {
      wsHost: 'localhost',
      wsPort: 8081,
      wssPort: 8081,
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
      disableStats: true,
      authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
      auth: {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    };
    try {
      this.pusher = new Pusher('knghnyhbqxpckqkm6zuz', config);
      this.pusher.connection.bind('connected', () => {
        this.ngZone.run(() => this.connectionStatus.next(true));
        console.log('✅ WebSocket conectado');
      });
      this.pusher.connection.bind('disconnected', () => {
        this.ngZone.run(() => this.connectionStatus.next(false));
        console.log('❌ WebSocket desconectado');
      });
    } catch (error) {
      console.error('❌ Error:', error);
    }
  }
  subscribePrivate(channelName, eventName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      if (!this.pusher) {
        observer.error('Pusher no inicializado');
        return; // ✅ Retorna undefined para cerrar el observable
      }
      try {
        const channel = this.pusher.subscribe(channelName);
        const handler = data => this.ngZone.run(() => observer.next(data));
        channel.bind(eventName, handler);
        const key = `${channelName}|${eventName}`;
        this.channels.set(key, {
          channel,
          handler,
          eventName,
          channelName
        });
        // ✅ Función de limpieza (return es opcional aquí)
        return () => {
          try {
            channel.unbind(eventName, handler);
            if (this.pusher) {
              this.pusher.unsubscribe(channelName);
            }
            this.channels.delete(key);
          } catch (e) {
            // Ignorar errores de limpieza
          }
        };
      } catch (error) {
        observer.error(error);
        return; // ✅ Retorna undefined
      }
    });
  }
  getConnectionStatus() {
    return this.connectionStatus.asObservable();
  }
  disconnect() {
    this.channels.forEach(({
      channel,
      eventName,
      handler,
      channelName
    }) => {
      try {
        channel.unbind(eventName, handler);
        this.pusher?.unsubscribe(channelName);
      } catch (e) {}
    });
    this.channels.clear();
    if (this.pusher) {
      this.pusher.disconnect();
      this.pusher = null;
    }
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function PusherService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PusherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PusherService,
    factory: PusherService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56177:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/features/home/components/theme-switcher/theme-switcher.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitcherComponent: () => (/* binding */ ThemeSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/theme.service */ 99535);





function ThemeSwitcherComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThemeSwitcherComponent_button_1_Template_button_click_0_listener() {
      const theme_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.setTheme(theme_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](theme_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.currentTheme === theme_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", theme_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](theme_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](theme_r2.label);
  }
}
class ThemeSwitcherComponent {
  themeService;
  themes = [{
    value: 'light',
    label: 'Claro',
    icon: 'pi pi-sun'
  }, {
    value: 'dark',
    label: 'Oscuro',
    icon: 'pi pi-moon'
  }, {
    value: 'neon',
    label: 'Neón',
    icon: 'pi pi-star'
  }];
  currentTheme = 'light';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  constructor(themeService) {
    this.themeService = themeService;
  }
  ngOnInit() {
    this.themeService.theme$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setTheme(theme) {
    this.themeService.setTheme(theme);
  }
  static ɵfac = function ThemeSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ThemeSwitcherComponent,
    selectors: [["app-theme-switcher"]],
    decls: 2,
    vars: 1,
    consts: [[1, "theme-switcher"], ["class", "theme-btn", 3, "active", "class", "click", 4, "ngFor", "ngForOf"], [1, "theme-btn", 3, "click"], [1, "theme-label"]],
    template: function ThemeSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThemeSwitcherComponent_button_1_Template, 4, 8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.themes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
    styles: [".theme-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 33px;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 6px;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.theme-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-btn.light[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-btn.dark[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-btn.neon[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2hvbWUvY29tcG9uZW50cy90aGVtZS1zd2l0Y2hlci90aGVtZS1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0FBQU47QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUROO0FBVkk7RUFjSSxlQUFBO0FBRFI7QUFiSTtFQWtCSSxrQkFBQTtBQUZSO0FBS007RUFDRSwyQkFBQTtBQUhSO0FBTU07RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQUpSO0FBT007RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUFMUjtBQVFNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FBTlI7QUFTTTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBUFI7QUFXSTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFlBQUE7RUFUTjtFQVlJO0lBQ0UsaUJBQUE7RUFWTjtFQVNJO0lBSUksYUFBQTtFQVZSO0VBTUk7SUFRSSxpQkFBQTtFQVhSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGhlbWUtc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMzNweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cblxuICAgIC50aGVtZS1idG4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAudGhlbWUtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjMpO1xuICAgICAgfVxuXG4gICAgICAmLmxpZ2h0OmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICB9XG5cbiAgICAgICYuZGFyazpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgJi5uZW9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjQwLCAyNTUsIDAuMik7XG4gICAgICAgIGNvbG9yOiAjMDBmMGZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnRoZW1lLXN3aXRjaGVyIHtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIH1cblxuICAgICAgLnRoZW1lLWJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuXG4gICAgICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63443:
/*!************************************************************************************!*\
  !*** ./src/app/core/components/session-timeout/session-timeout-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionTimeoutModalComponent: () => (/* binding */ SessionTimeoutModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/session.service */ 87988);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 17780);










const _c0 = () => ({
  width: "480px"
});
const _c1 = () => ({
  height: "6px"
});
function SessionTimeoutModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sesi\u00F3n por expirar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SessionTimeoutModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Por seguridad, su sesi\u00F3n se cerrar\u00E1 autom\u00E1ticamente debido a inactividad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "circle", 15)(8, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17)(10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "segundos restantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "p-progressBar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Si no realiza ninguna acci\u00F3n, su sesi\u00F3n se cerrar\u00E1 autom\u00E1ticamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("stroke-dasharray", ctx_r0.circleCircumference)("stroke-dashoffset", ctx_r0.circleOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.timeLeftFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.progressValue)("showValue", false);
  }
}
function SessionTimeoutModalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SessionTimeoutModalComponent_ng_template_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.logoutNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SessionTimeoutModalComponent_ng_template_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.keepSession());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autofocus", true);
  }
}
class SessionTimeoutModalComponent {
  sessionService;
  cdr;
  visible = false;
  timeLeft = 0;
  totalWarningTime = 30;
  circleCircumference = 2 * Math.PI * 54;
  subscription;
  constructor(sessionService, cdr) {
    this.sessionService = sessionService;
    this.cdr = cdr;
    console.log('🏗️ [Modal] Constructor ejecutado');
  }
  ngOnInit() {
    console.log('🏗️ [Modal] OnInit - Suscribiendo a timeoutWarning$');
    this.subscription = this.sessionService.timeoutWarning$.subscribe(timeLeft => {
      console.log(`📢 [Modal] timeoutWarning$ recibido: ${timeLeft} segundos`);
      if (timeLeft > 0 && timeLeft <= 60) {
        this.timeLeft = timeLeft;
        this.visible = true;
        this.cdr.detectChanges();
        this.bringAttention();
        console.log(`✅ [Modal] Modal abierto con ${timeLeft} segundos`);
      } else if (timeLeft <= 0) {
        console.log(`🚪 [Modal] Cerrando modal (timeLeft=${timeLeft})`);
        this.visible = false;
        this.cdr.detectChanges();
      }
    });
  }
  get circleOffset() {
    const progress = Math.min(Math.max(this.timeLeft / this.totalWarningTime, 0), 1);
    const offset = this.circleCircumference * (1 - progress);
    return isNaN(offset) ? this.circleCircumference : offset;
  }
  get progressValue() {
    const value = this.timeLeft / this.totalWarningTime * 100;
    return Math.min(Math.max(value, 0), 100);
  }
  get timeLeftFormatted() {
    return `${this.timeLeft}`;
  }
  bringAttention() {
    const originalTitle = document.title;
    document.title = `⏰ ${this.timeLeft}s - ${originalTitle}`;
    this.playWarningSound();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
    try {
      window.focus();
    } catch (e) {
      console.log('No se pudo enfocar la ventana');
    }
  }
  playWarningSound() {
    try {
      const audio = new Audio('/assets/sounds/warning-beep.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('No se pudo reproducir sonido:', e));
    } catch (e) {
      console.log('Error reproduciendo sonido:', e);
    }
  }
  keepSession() {
    console.log('🔄 [Modal] Usuario hizo clic en "Continuar sesión"');
    this.sessionService.extendSession();
    this.visible = false;
  }
  logoutNow() {
    console.log('🚪 [Modal] Usuario hizo clic en "Cerrar sesión"');
    this.visible = false;
    // ✅ Pequeño delay para asegurar que el modal se cierre
    setTimeout(() => {
      this.sessionService.logoutDueToInactivity();
    }, 100);
  }
  onModalShow() {
    setTimeout(() => {
      const continueBtn = document.querySelector('.btn-continue-bank');
      if (continueBtn) {
        continueBtn.focus();
      }
    }, 100);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SessionTimeoutModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SessionTimeoutModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_session_service__WEBPACK_IMPORTED_MODULE_7__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SessionTimeoutModalComponent,
    selectors: [["app-session-timeout-modal"]],
    decls: 4,
    vars: 16,
    consts: [[3, "visibleChange", "onShow", "visible", "modal", "closable", "draggable", "resizable", "blockScroll", "baseZIndex", "styleClass", "closeOnEscape", "dismissableMask", "focusOnShow", "position", "appendTo"], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "modal-header-bank"], [1, "header-icon"], [1, "pi", "pi-exclamation-triangle"], [1, "header-title"], [1, "header-badge"], [1, "pi", "pi-lock"], [1, "modal-content-bank"], [1, "warning-message"], [1, "countdown-circle"], [1, "circle-progress"], ["width", "120", "height", "120", "viewBox", "0 0 120 120"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke", "var(--border-color)", "stroke-width", "6"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke", "var(--warning)", "stroke-width", "6", "stroke-linecap", "round", "transform", "rotate(-90 60 60)"], [1, "countdown-text"], [1, "time-number"], [1, "time-label"], [1, "progress-section"], ["styleClass", "timeout-progress-bank", 3, "value", "showValue"], [1, "final-message"], [1, "modal-footer-bank"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cerrar sesi\u00F3n", "icon", "pi pi-sign-out", 1, "p-button-text", "btn-logout-bank", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Continuar sesi\u00F3n", "icon", "pi pi-check", 1, "p-button-primary", "btn-continue-bank", 3, "click", "autofocus"]],
    template: function SessionTimeoutModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("visibleChange", function SessionTimeoutModalComponent_Template_p_dialog_visibleChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onShow", function SessionTimeoutModalComponent_Template_p_dialog_onShow_0_listener() {
          return ctx.onModalShow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SessionTimeoutModalComponent_ng_template_1_Template, 7, 0, "ng-template", 1)(2, SessionTimeoutModalComponent_ng_template_2_Template, 18, 8, "ng-template", 2)(3, SessionTimeoutModalComponent_ng_template_3_Template, 3, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("visible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("modal", true)("closable", false)("draggable", false)("resizable", false)("blockScroll", true)("baseZIndex", 10000000)("styleClass", "session-timeout-modal-bank")("closeOnEscape", false)("dismissableMask", false)("focusOnShow", true)("position", "center")("appendTo", "body");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar],
    styles: [".session-timeout-modal-bank.p-dialog .p-dialog-mask {\n  background: var(--modal-overlay, rgba(0, 0, 0, 0.75));\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n  .session-timeout-modal-bank.p-dialog .p-dialog {\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: var(--shadow-xl, 0 25px 50px -12px rgba(0, 0, 0, 0.5));\n  animation: _ngcontent-%COMP%_modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  background: var(--modal-bg, #ffffff);\n}\n  .session-timeout-modal-bank.p-dialog .p-dialog .p-dialog-header {\n  padding: 0;\n  border-bottom: none;\n  background: transparent;\n}\n  .session-timeout-modal-bank.p-dialog .p-dialog .p-dialog-content {\n  padding: 0;\n  background: transparent;\n}\n  .session-timeout-modal-bank.p-dialog .p-dialog .p-dialog-footer {\n  padding: 0;\n  border-top: none;\n  background: transparent;\n}\n.modal-header-bank[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px 0 28px;\n  background: linear-gradient(135deg, var(--bg-primary, #1a1a2e) 0%, var(--bg-secondary, #16213e) 100%);\n  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));\n}\n.modal-header-bank[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--warning-light, rgba(245, 158, 11, 0.15));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header-bank[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--warning, #f59e0b);\n  animation: _ngcontent-%COMP%_pulseWarning 1.5s infinite;\n}\n.modal-header-bank[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary, white);\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.modal-header-bank[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header-bank[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--text-secondary, rgba(255, 255, 255, 0.7));\n}\n.modal-content-bank[_ngcontent-%COMP%] {\n  padding: 28px;\n  background: var(--modal-bg, #ffffff);\n}\n.modal-content-bank[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.modal-content-bank[_ngcontent-%COMP%]   .warning-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-secondary, #6b7280);\n  line-height: 1.5;\n}\n.countdown-circle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:first-child {\n  stroke: var(--border-color, #e5e7eb);\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-child {\n  stroke: var(--warning, #f59e0b);\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .countdown-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 100%;\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .countdown-text[_ngcontent-%COMP%]   .time-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text-primary, #1f2937);\n  display: block;\n  line-height: 1.2;\n}\n.countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .countdown-text[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-secondary, #6b7280);\n  display: block;\n}\n.progress-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.progress-section[_ngcontent-%COMP%]     .timeout-progress-bank {\n  background: var(--progress-bg, #e5e7eb);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-section[_ngcontent-%COMP%]     .timeout-progress-bank .p-progressbar-value {\n  background: linear-gradient(90deg, var(--warning, #f59e0b), var(--danger, #ef4444));\n  border-radius: 3px;\n  transition: width 0.3s linear;\n}\n.final-message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.85rem;\n  color: var(--text-secondary, #6b7280);\n  margin: 0;\n  padding: 0 16px;\n}\n.modal-footer-bank[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px 28px 28px 28px;\n  background: var(--modal-footer-bg, #ffffff);\n  border-top: 1px solid var(--border-color, #e5e7eb);\n}\n.modal-footer-bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  border-radius: 12px;\n  cursor: pointer;\n}\n.modal-footer-bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1rem;\n}\n.modal-footer-bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.modal-footer-bank[_ngcontent-%COMP%]   .btn-logout-bank[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-secondary, #6b7280);\n  border: 1px solid var(--border-color, #e5e7eb);\n}\n.modal-footer-bank[_ngcontent-%COMP%]   .btn-logout-bank[_ngcontent-%COMP%]:hover {\n  background: var(--danger-light, rgba(239, 68, 68, 0.1));\n  border-color: var(--danger, #ef4444);\n  color: var(--danger, #ef4444);\n}\n.modal-footer-bank[_ngcontent-%COMP%]   .btn-continue-bank[_ngcontent-%COMP%] {\n  background: var(--gradient-success, linear-gradient(135deg, #10b981, #059669));\n  border: none;\n  color: white;\n}\n.modal-footer-bank[_ngcontent-%COMP%]   .btn-continue-bank[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulseWarning {\n  0%,\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 550px) {\n    .session-timeout-modal-bank.p-dialog .p-dialog {\n    width: 95% !important;\n    margin: 0 16px;\n  }\n  .modal-header-bank[_ngcontent-%COMP%] {\n    padding: 20px 20px 0 20px;\n  }\n  .modal-header-bank[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%], \n   .modal-header-bank[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .modal-header-bank[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n   .modal-header-bank[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .modal-header-bank[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .modal-content-bank[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .modal-footer-bank[_ngcontent-%COMP%] {\n    padding: 16px 20px 24px 20px;\n    flex-direction: column;\n  }\n  .modal-footer-bank[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .countdown-circle[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3Nlc3Npb24tdGltZW91dC9zZXNzaW9uLXRpbWVvdXQtbW9kYWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFFSSxxREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFOUjtBQUdJO0VBT0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtFQUFBO0VBQ0EsOERBQUE7RUFDQSxvQ0FBQTtBQVBSO0FBSkk7RUFjTSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBWO0FBVEk7RUFvQk0sVUFBQTtFQUNBLHVCQUFBO0FBUlY7QUFiSTtFQXlCTSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVRWO0FBbUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFHQUFBO0VBQ0Esc0VBQUE7QUFqQkY7QUFXQTtFQVNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMERBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBakJKO0FBRUE7RUFrQk0sZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7QUFqQk47QUFIQTtFQXlCSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFuQko7QUFWQTtFQWlDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXBCSjtBQW5CQTtFQTBDTSxlQUFBO0VBQ0Esc0RBQUE7QUFwQk47QUE0QkE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7QUExQkY7QUF3QkE7RUFLSSxrQkFBQTtFQUNBLG1CQUFBO0FBMUJKO0FBb0JBO0VBU00sZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUExQk47QUFrQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhDRjtBQTZCQTtFQU1JLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFoQ0o7QUF3QkE7RUFXTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBaENOO0FBbUJBO0VBZ0JRLG9DQUFBO0FBaENSO0FBZ0JBO0VBb0JRLCtCQUFBO0FBakNSO0FBYUE7RUF5Qk0sa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbkNOO0FBS0E7RUFpQ1EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFuQ1I7QUFGQTtFQXlDUSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQXBDUjtBQTZDQTtFQUNFLG1CQUFBO0FBM0NGO0FBMENBO0VBS00sdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNUNOO0FBcUNBO0VBVVEsbUZBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBNUNSO0FBcURBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFuREY7QUF5REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtEQUFBO0FBdkRGO0FBaURBO0VBU0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdkRKO0FBd0NBO0VBa0JNLGlCQUFBO0VBQ0EsZUFBQTtBQXZETjtBQTBESTtFQUNFLDJCQUFBO0FBeEROO0FBaUNBO0VBNEJJLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSw4Q0FBQTtBQTFESjtBQTRESTtFQUNFLHVEQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQTFETjtBQXVCQTtFQXdDSSw4RUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBNURKO0FBOERJO0VBQ0UsK0RBQUE7QUE1RE47QUFvRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtFQWxFRjtFQW9FQTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQWxFRjtBQUNGO0FBcUVBO0VBQ0U7O0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBbEVGO0VBb0VBO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VBbEVGO0FBQ0Y7QUF3RUE7RUFHTTtJQUVJLHFCQUFBO0lBQ0EsY0FBQTtFQXpFUjtFQStFQTtJQUNFLHlCQUFBO0VBN0VGO0VBNEVBOztJQUtJLFdBQUE7SUFDQSxZQUFBO0VBN0VKO0VBdUVBOztJQVNNLGVBQUE7RUE1RU47RUFtRUE7SUFjSSxpQkFBQTtFQTlFSjtFQWtGQTtJQUNFLGFBQUE7RUFoRkY7RUFtRkE7SUFDRSw0QkFBQTtJQUNBLHNCQUFBO0VBakZGO0VBK0VBO0lBS0ksV0FBQTtFQWpGSjtFQXFGQTtJQUVJLFlBQUE7SUFDQSxhQUFBO0VBcEZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VTU0lPTiBUSU1FT1VUIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46Om5nLWRlZXAge1xuICAuc2Vzc2lvbi10aW1lb3V0LW1vZGFsLWJhbmsge1xuICAgICYucC1kaWFsb2cge1xuICAgICAgLnAtZGlhbG9nLW1hc2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5LCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICB9XG5cbiAgICAgIC5wLWRpYWxvZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCwgMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAgICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnLCAjZmZmZmZmKTsgLy8gQXNlZ3VyYSBlbCBmb25kbyBkZWwgbW9kYWxcblxuICAgICAgICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucC1kaWFsb2ctY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wLWRpYWxvZy1mb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1oZWFkZXItYmFuayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjRweCAyOHB4IDAgMjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctcHJpbWFyeSwgIzFhMWEyZSkgMCUsIHZhcigtLWJnLXNlY29uZGFyeSwgIzE2MjEzZSkgMTAwJSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XG5cbiAgLmhlYWRlci1pY29uIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCwgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogdmFyKC0td2FybmluZywgI2Y1OWUwYik7XG4gICAgICBhbmltYXRpb246IHB1bHNlV2FybmluZyAxLjVzIGluZmluaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgd2hpdGUpO1xuICAgIG1hcmdpbjogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB9XG5cbiAgLmhlYWRlci1iYWRnZSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5JRE8gREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQtYmFuayB7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnLCAjZmZmZmZmKTtcblxuICAud2FybmluZy1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05UQURPUiBDSVJDVUxBUiAoZXN0aWxvIGJhbmNvKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5jb3VudGRvd24tY2lyY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLmNpcmNsZS1wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcblxuICAgICAgY2lyY2xlOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgICAgfVxuXG4gICAgICBjaXJjbGU6bGFzdC1jaGlsZCB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0td2FybmluZywgI2Y1OWUwYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvdW50ZG93bi10ZXh0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnRpbWUtbnVtYmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjMWYyOTM3KTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG5cbiAgICAgIC50aW1lLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSwgIzZiNzI4MCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkFSUkEgREUgUFJPR1JFU09cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucHJvZ3Jlc3Mtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAudGltZW91dC1wcm9ncmVzcy1iYW5rIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2dyZXNzLWJnLCAjZTVlN2ViKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS13YXJuaW5nLCAjZjU5ZTBiKSwgdmFyKC0tZGFuZ2VyLCAjZWY0NDQ0KSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBsaW5lYXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNRU5TQUpFIEZJTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZpbmFsLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT09URVIgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWZvb3Rlci1iYW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMjhweCAyOHB4IDI4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZywgI2ZmZmZmZik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1sb2dvdXQtYmFuayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LCAjNmI3MjgwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQsIHJnYmEoMjM5LCA2OCwgNjgsIDAuMSkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXIsICNlZjQ0NDQpO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlciwgI2VmNDQ0NCk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1jb250aW51ZS1iYW5rIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1zdWNjZXNzLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kLCAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIG1vZGFsU2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlV2FybmluZyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIDo6bmctZGVlcCB7XG4gICAgLnNlc3Npb24tdGltZW91dC1tb2RhbC1iYW5rIHtcbiAgICAgICYucC1kaWFsb2cge1xuICAgICAgICAucC1kaWFsb2cge1xuICAgICAgICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1oZWFkZXItYmFuayB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcblxuICAgIC5oZWFkZXItaWNvbixcbiAgICAuaGVhZGVyLWJhZGdlIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRlbnQtYmFuayB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXItYmFuayB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4IDI0cHggMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jb3VudGRvd24tY2lyY2xlIHtcbiAgICAuY2lyY2xlLXByb2dyZXNzIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 63622:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/token.service */ 88705);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _config_app_config_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/app-config.token */ 96048);
/* harmony import */ var _services_codigo_maestro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/codigo-maestro.service */ 47081);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/services/session.service */ 87988);









// ✅ Variable global para evitar múltiples redirecciones
let isRedirecting = false;
let redirectTimeout = null;
const authInterceptor = (req, next) => {
  const tokenService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_token_service__WEBPACK_IMPORTED_MODULE_7__.TokenService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService);
  const cfg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_config_app_config_token__WEBPACK_IMPORTED_MODULE_9__.APP_CONFIG);
  const codigoMaestroService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_codigo_maestro_service__WEBPACK_IMPORTED_MODULE_10__.CodigoMaestroService);
  const sessionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_session_service__WEBPACK_IMPORTED_MODULE_11__.SessionService);
  // ✅ Función para resetear el flag después de un tiempo
  const resetRedirecting = () => {
    if (redirectTimeout) {
      clearTimeout(redirectTimeout);
    }
    redirectTimeout = setTimeout(() => {
      isRedirecting = false;
      console.log('🔄 [Interceptor] Flag de redirección reiniciado');
    }, 3000);
  };
  const publicUrls = cfg.publicUrls || ['/auth/login', '/auth/logout', '/auth/refresh-token', '/auth/reset-password', '/auth/preguntas-disponibles', '/ping', '/catalogos/', '/roles', '/permisos', '/auth/check-session', '/auth/refresh-activity'];
  const isPublicUrl = publicUrls.some(url => req.url.includes(url));
  // ✅ Si es URL pública y no hay token, pasar directamente
  if (isPublicUrl && !tokenService.getToken() && !tokenService.getTempToken()) {
    return next(req);
  }
  // Obtener token correctamente
  let token = tokenService.getToken();
  if (!token) {
    token = tokenService.getTempToken();
  }
  const headers = {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  };
  // Agregar código maestro si existe
  const codigoMaestro = codigoMaestroService.getCodigoMaestro();
  if (codigoMaestro) {
    headers['X-Codigo-Maestro'] = codigoMaestro;
  }
  if (!(req.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }
  if (!isPublicUrl && token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const authReq = req.clone({
    setHeaders: headers,
    withCredentials: true
  });
  return next(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(event => {
    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
      const sessionWarning = event.headers.get('X-Session-Warning');
      if (sessionWarning && parseInt(sessionWarning, 10) > 0) {
        console.log(`🚨 [Interceptor] Advertencia detectada: ${sessionWarning} segundos`);
        const timeLeft = parseInt(sessionWarning, 10);
        sessionService.triggerWarningFromBackend(timeLeft);
      }
      if (event.body && typeof event.body === 'object') {
        const body = event.body;
        if (body.session_time_left && body.session_time_left > 0 && body.session_time_left <= 60) {
          sessionService.triggerWarningFromBackend(body.session_time_left);
        }
        if (body.session_warning && body.session_warning === true) {
          const timeLeft = body.time_left || 60;
          sessionService.triggerWarningFromBackend(timeLeft);
        }
      }
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
    // ✅ Evitar múltiples redirecciones
    if (isRedirecting) {
      console.log('🚫 [Interceptor] Redirección en curso, ignorando error:', req.url);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // Manejar 401 - Token expirado o sesión expirada
    if (error.status === 401 && !req.url.includes('/refresh-token') && !req.url.includes('/login')) {
      // ✅ IMPORTANTE: Verificar si la URL actual es pública
      const currentUrl = router.url;
      const isPublicRoute = currentUrl.includes('/home') || currentUrl === '/' || currentUrl.includes('/login');
      if (isPublicRoute) {
        console.log('🌐 [Interceptor] Error 401 en ruta pública, ignorando');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error); // No redirigir
      }
      const errorBody = error.error;
      const isSessionExpired = errorBody?.message?.toLowerCase().includes('inactividad') || errorBody?.code === 'SESSION_EXPIRED';
      if (isSessionExpired) {
        console.log('⏰ Sesión expirada por inactividad');
        isRedirecting = true;
        resetRedirecting();
        sessionService.logoutDueToInactivity();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      // ✅ Verificar si hay token antes de intentar refresh
      const currentToken = tokenService.getToken();
      if (!currentToken) {
        console.log('🔑 No hay token, redirigiendo a login');
        isRedirecting = true;
        resetRedirecting();
        router.navigate(['/login']);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      console.log('🔄 Token expirado, refrescando...');
      return tokenService.refreshToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(response => {
        const newToken = response.access_token || response.token;
        if (response.success && newToken) {
          tokenService.setToken(newToken);
          const newHeaders = {
            ...headers,
            'Authorization': `Bearer ${newToken}`
          };
          if (codigoMaestroService.getCodigoMaestro()) {
            newHeaders['X-Codigo-Maestro'] = codigoMaestroService.getCodigoMaestro();
          }
          const newReq = req.clone({
            setHeaders: newHeaders
          });
          return next(newReq);
        }
        if (!isRedirecting) {
          isRedirecting = true;
          resetRedirecting();
          tokenService.clearToken();
          router.navigate(['/login'], {
            queryParams: {
              sessionExpired: true
            }
          });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(refreshError => {
        console.error('❌ Error refrescando token:', refreshError);
        if (!isRedirecting) {
          isRedirecting = true;
          resetRedirecting();
          tokenService.clearToken();
          // ✅ Redirigir a HOME con parámetro
          router.navigate(['/home'], {
            queryParams: {
              sessionExpired: true,
              reason: 'refresh_failed'
            },
            replaceUrl: true
          });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => refreshError);
      }));
    }
    // Manejar 403 - Código maestro requerido
    if (error.status === 403) {
      const errorBody = error.error;
      const mensajeError = (errorBody?.message || '').toLowerCase();
      if (mensajeError.includes('código maestro') || mensajeError.includes('codigo maestro') || errorBody?.requires_code === true) {
        console.log('🔐 Código maestro requerido para:', req.url);
        codigoMaestroService.clearCodigoMaestro();
        return codigoMaestroService.showModalAndRetry(req, next);
      }
      notificationService.showError(errorBody?.message || 'No tiene permisos para realizar esta acción');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // ✅ Verificación final para 401 sin token
    const hasValidToken = tokenService.getToken() || tokenService.getTempToken();
    if (!hasValidToken && error.status === 401 && !isRedirecting) {
      isRedirecting = true;
      resetRedirecting();
      router.navigate(['/login']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // Manejar errores de validación (422)
    if (error.status === 422) {
      if (error.error?.errors) {
        const errores = error.error.errors;
        let mensaje = '';
        Object.keys(errores).forEach(key => {
          mensaje += `${errores[key].join(', ')}\n`;
        });
        notificationService.showError(mensaje || error.error?.message || 'Error de validación');
      } else if (error.error?.message) {
        notificationService.showError(error.error.message);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // Manejar errores de conexión
    if (error.status === 0) {
      notificationService.showError('No se puede conectar con el servidor. Verifique su conexión.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // Manejar errores 500
    if (error.status === 500) {
      notificationService.showError(error.error?.message || 'Error interno del servidor. Intente más tarde.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // 404 solo log
    if (error.status === 404) {
      console.warn('Recurso no encontrado:', req.url);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    // 400 Bad Request
    if (error.status === 400) {
      notificationService.showError(error.error?.message || 'Solicitud incorrecta');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
  }));
};

/***/ }),

/***/ 64081:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class ThemeService {
  venezuelaThemeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  venezuelaTheme$ = this.venezuelaThemeSubject.asObservable();
  darkModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  darkMode$ = this.darkModeSubject.asObservable();
  toggleVenezuelaTheme() {
    this.venezuelaThemeSubject.next(!this.venezuelaThemeSubject.value);
  }
  toggleDarkMode() {
    const newDark = !this.darkModeSubject.value;
    this.darkModeSubject.next(newDark);
    // Aplica la clase al body
    if (newDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  static ɵfac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65466:
/*!**********************************************!*\
  !*** ./src/app/services/catalogo.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdministradorStrategy: () => (/* binding */ AdministradorStrategy),
/* harmony export */   CatalogoService: () => (/* binding */ CatalogoService),
/* harmony export */   PermisoStrategyFactory: () => (/* binding */ PermisoStrategyFactory),
/* harmony export */   TecnicoStrategy: () => (/* binding */ TecnicoStrategy),
/* harmony export */   UsuarioAvanzadoStrategy: () => (/* binding */ UsuarioAvanzadoStrategy),
/* harmony export */   UsuarioEstandarStrategy: () => (/* binding */ UsuarioEstandarStrategy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 11817);






class AdministradorStrategy {
  puedeVer() {
    return true;
  }
  puedeModificar() {
    return true;
  }
  getCatalogosPermitidos() {
    return ['tipos-documento', 'sexos', 'estados-civiles', 'tipos-vinculo', 'cargos', 'tipos-conflicto', 'estados-denuncia', 'instituciones', 'tipos-medida', 'estados-asistencia', 'tipos-notificacion'];
  }
  getTipoUsuario() {
    return 'ADMINISTRADOR DEL SISTEMA';
  }
}
class TecnicoStrategy {
  puedeVer() {
    return true;
  }
  puedeModificar() {
    return true;
  }
  getCatalogosPermitidos() {
    return ['tipos-documento', 'sexos', 'estados-civiles', 'tipos-vinculo', 'cargos', 'tipos-conflicto', 'estados-denuncia', 'instituciones', 'tipos-medida', 'estados-asistencia', 'tipos-notificacion'];
  }
  getTipoUsuario() {
    return 'ADMINISTRADOR TECNICO';
  }
}
class UsuarioAvanzadoStrategy {
  puedeVer() {
    return true;
  }
  puedeModificar() {
    return false;
  }
  getCatalogosPermitidos() {
    return ['tipos-documento', 'sexos', 'estados-civiles', 'tipos-vinculo', 'cargos', 'tipos-conflicto', 'estados-denuncia', 'instituciones', 'tipos-medida', 'estados-asistencia', 'tipos-notificacion'];
  }
  getTipoUsuario() {
    return 'USUARIO AVANZADO';
  }
}
class UsuarioEstandarStrategy {
  puedeVer() {
    return true;
  }
  puedeModificar() {
    return false;
  }
  getCatalogosPermitidos() {
    return ['tipos-documento', 'sexos', 'estados-civiles', 'tipos-vinculo', 'cargos', 'tipos-conflicto', 'estados-denuncia', 'instituciones', 'tipos-medida', 'estados-asistencia', 'tipos-notificacion'];
  }
  getTipoUsuario() {
    return 'USUARIO ESTANDAR';
  }
}
// ========== FACTORY PARA PERMISOS ==========
class PermisoStrategyFactory {
  static create(permisos) {
    const hasPermiso1 = permisos.includes(1);
    const hasPermiso2 = permisos.includes(2);
    const hasPermiso3 = permisos.includes(3);
    if (hasPermiso1) {
      return new AdministradorStrategy();
    } else if (hasPermiso2) {
      return new TecnicoStrategy();
    } else if (hasPermiso3) {
      return new UsuarioEstandarStrategy();
    }
    return new UsuarioEstandarStrategy();
  }
}
class CatalogoService {
  http;
  apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}`;
  _permisosUsuario = [];
  _estrategiaPermisos = null;
  _catalogosPermitidosCache$ = null;
  permisosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  permisos$ = this.permisosSubject.asObservable();
  tipoUsuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
  tipoUsuario$ = this.tipoUsuarioSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.cargarPermisosDesdeStorage();
  }
  // ========== MAPEADOR PARA BACKEND ==========
  mapToBackend(entityType, data) {
    const mappedData = {};
    if (data.nombre) mappedData.nombre = data.nombre;
    if (data.descripcion !== undefined) mappedData.descripcion = data.descripcion;
    if (data.hasOwnProperty('estado')) {
      mappedData.activo = data.estado;
    } else if (data.hasOwnProperty('activo')) {
      mappedData.activo = data.activo;
    } else {
      mappedData.activo = true;
    }
    if (entityType === 'cargo') {
      if (data.nombre_cargo) {
        mappedData.nombre = data.nombre_cargo;
      } else if (data.nombre) {
        mappedData.nombre = data.nombre;
      }
      delete mappedData.nombre_cargo;
    }
    console.log('🔄 Datos mapeados para backend:', mappedData);
    return mappedData;
  }
  mapFromBackend(entityType, item) {
    if (!item) return item;
    const mappedItem = {
      ...item
    };
    if (item.hasOwnProperty('activo')) {
      mappedItem.estado = item.activo;
    }
    switch (entityType) {
      case 'tipo_medida':
        mappedItem.id = item.tipo_medida_id;
        mappedItem.tipo_medida_id = item.tipo_medida_id;
        break;
      case 'institucion':
        mappedItem.id = item.institucion_id;
        mappedItem.institucion_id = item.institucion_id;
        break;
      case 'tipo_documento':
        mappedItem.id = item.tipo_documento_id;
        mappedItem.tipo_documento_id = item.tipo_documento_id;
        break;
      case 'sexo':
        mappedItem.id = item.genero_id;
        mappedItem.genero_id = item.genero_id;
        break;
      case 'estado_civil':
        mappedItem.id = item.estado_civil_id;
        mappedItem.estado_civil_id = item.estado_civil_id;
        break;
      case 'tipo_vinculo':
        mappedItem.id = item.tipo_vinculo_id;
        mappedItem.tipo_vinculo_id = item.tipo_vinculo_id;
        break;
      case 'cargo':
        mappedItem.id = item.cargo_id;
        mappedItem.cargo_id = item.cargo_id;
        mappedItem.nombre_cargo = item.nombre;
        break;
      case 'tipo_conflicto':
        mappedItem.id = item.tipo_conflicto_id;
        mappedItem.tipo_conflicto_id = item.tipo_conflicto_id;
        break;
      case 'estado_denuncia':
        mappedItem.id = item.estado_denuncia_id;
        mappedItem.estado_denuncia_id = item.estado_denuncia_id;
        break;
      case 'estado_asistencia':
        mappedItem.id = item.estado_asistencia_id;
        mappedItem.estado_asistencia_id = item.estado_asistencia_id;
        break;
      case 'tipo_notificacion':
        mappedItem.id = item.tipo_notificacion_id;
        mappedItem.tipo_notificacion_id = item.tipo_notificacion_id;
        break;
    }
    return mappedItem;
  }
  // ========== GESTIÓN DE PERMISOS ==========
  setPermisosUsuario(permisos) {
    this._permisosUsuario = permisos;
    this.permisosSubject.next(permisos);
    try {
      this._estrategiaPermisos = PermisoStrategyFactory.create(permisos);
      this.tipoUsuarioSubject.next(this._estrategiaPermisos.getTipoUsuario());
      localStorage.setItem('user_permisos', JSON.stringify(permisos));
      localStorage.setItem('user_tipo', this._estrategiaPermisos.getTipoUsuario());
    } catch (error) {
      console.error('Error creando estrategia de permisos:', error);
      this._estrategiaPermisos = null;
      this.tipoUsuarioSubject.next('');
    }
  }
  cargarPermisosDesdeStorage() {
    const permisosStr = localStorage.getItem('user_permisos');
    if (permisosStr) {
      try {
        const permisos = JSON.parse(permisosStr);
        this.setPermisosUsuario(permisos);
      } catch (error) {
        console.error('Error cargando permisos del storage:', error);
      }
    }
  }
  getPermisosUsuario() {
    return this._permisosUsuario;
  }
  getTipoUsuario() {
    return this.tipoUsuarioSubject.value;
  }
  puedeVerCatalogos() {
    return this._estrategiaPermisos?.puedeVer() ?? true;
  }
  puedeModificarCatalogos() {
    return this._estrategiaPermisos?.puedeModificar() ?? false;
  }
  getCatalogosPermitidos() {
    return this._estrategiaPermisos?.getCatalogosPermitidos() ?? [];
  }
  clearPermisos() {
    this._permisosUsuario = [];
    this._estrategiaPermisos = null;
    this.permisosSubject.next([]);
    this.tipoUsuarioSubject.next('');
    localStorage.removeItem('user_permisos');
    localStorage.removeItem('user_tipo');
    this.clearCatalogosCache();
  }
  // ========== CATÁLOGOS PERMITIDOS ==========
  obtenerCatalogosPermitidosBackend() {
    if (!this._catalogosPermitidosCache$) {
      this._catalogosPermitidosCache$ = this.http.get(`${this.apiUrl}/catalogos-permitidos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        if (response.success && response.data) {
          if (response.data.permisos_usuario) {
            this.setPermisosUsuario(response.data.permisos_usuario);
          }
          return response.data;
        }
        throw new Error('Respuesta inválida del servidor');
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        console.error('Error obteniendo catálogos permitidos:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
          catalogos: this.getCatalogosPermitidos().map(cat => ({
            nombre: cat,
            endpoint: cat,
            endpoint_activos: `${cat}/activos`
          })),
          puede_modificar: this.puedeModificarCatalogos(),
          permisos_usuario: this.getPermisosUsuario()
        });
      }));
    }
    return this._catalogosPermitidosCache$;
  }
  clearCatalogosCache() {
    this._catalogosPermitidosCache$ = null;
  }
  // ========== MÉTODOS DE EXTRACCIÓN DE DATOS ==========
  extractData(response, entityType = '') {
    console.log('🔍 Respuesta cruda del servidor:', response);
    let data = [];
    if (Array.isArray(response)) {
      data = response;
    } else if (response && response.success !== undefined && response.data) {
      data = Array.isArray(response.data) ? response.data : [response.data];
    } else if (response && response.data) {
      data = Array.isArray(response.data) ? response.data : [response.data];
    } else if (response && typeof response === 'object') {
      for (const key in response) {
        if (Array.isArray(response[key])) {
          data = response[key];
          break;
        }
      }
    }
    return data.map(item => this.mapFromBackend(entityType, item));
  }
  handleError(operation, entidad) {
    return error => {
      console.error(`❌ Error en ${operation} (${entidad}):`, error);
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
        console.error('📊 Detalles:', error.status, error.statusText, error.url);
        if (error.error) console.error('- Error body:', error.error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    };
  }
  // ========== MÉTODOS DE LECTURA (GET) ==========
  getTiposDocumento() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-documento`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_documento')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposDocumento', 'tipos-documento')));
  }
  getSexos() {
    return this.http.get(`${this.apiUrl}/catalogos/sexos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'sexo')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getSexos', 'sexos')));
  }
  getEstadosCiviles() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-civiles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'estado_civil')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosCiviles', 'estados-civiles')));
  }
  getTiposVinculo() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-vinculo`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_vinculo')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposVinculo', 'tipos-vinculo')));
  }
  getCargos() {
    return this.http.get(`${this.apiUrl}/catalogos/cargos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      const data = this.extractData(response, 'cargo');
      return data.map(item => ({
        ...item,
        nombre_cargo: item.nombre
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getCargos', 'cargos')));
  }
  getInstituciones() {
    return this.http.get(`${this.apiUrl}/catalogos/instituciones`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'institucion')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getInstituciones', 'instituciones')));
  }
  getTiposMedida() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-medida`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_medida')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposMedida', 'tipos-medida')));
  }
  getEstadosAsistencia() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-asistencia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'estado_asistencia')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosAsistencia', 'estados-asistencia')));
  }
  getTiposNotificacion() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-notificacion`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_notificacion')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposNotificacion', 'tipos-notificacion')));
  }
  getRoles() {
    return this.http.get(`${this.apiUrl}/catalogos/roles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('🔍 Roles - Respuesta cruda:', response);
      let data = [];
      if (response?.success && response.data) {
        data = Array.isArray(response.data) ? response.data : [response.data];
      } else if (Array.isArray(response)) {
        data = response;
      }
      return data.map(item => ({
        rol_id: item.rol_id || item.id,
        nombre: item.nombre,
        nombre_rol: item.nombre,
        descripcion: item.descripcion || '',
        activo: item.activo ?? true
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => console.log('✅ Roles mapeados:', data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getRoles', 'roles')));
  }
  // ========== MÉTODOS PARA SOLO ACTIVOS ==========
  getTiposDocumentoActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-documento/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_documento')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposDocumentoActivos', 'tipos-documento/activos')));
  }
  getSexosActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/sexos/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'sexo')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getSexosActivos', 'sexos/activos')));
  }
  getEstadosCivilesActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-civiles/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'estado_civil')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosCivilesActivos', 'estados-civiles/activos')));
  }
  getTiposVinculoActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-vinculo/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_vinculo')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposVinculoActivos', 'tipos-vinculo/activos')));
  }
  getCargosActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/cargos/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      const data = this.extractData(response, 'cargo');
      return data.map(item => ({
        ...item,
        nombre_cargo: item.nombre
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getCargosActivos', 'cargos/activos')));
  }
  getTiposConflictoActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-conflicto/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_conflicto')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposConflictoActivos', 'tipos-conflicto/activos')));
  }
  getEstadosDenunciaActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-denuncia/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'estado_denuncia')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosDenunciaActivos', 'estados-denuncia/activos')));
  }
  getInstitucionesActivas() {
    return this.http.get(`${this.apiUrl}/catalogos/instituciones/activas`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'institucion')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getInstitucionesActivas', 'instituciones/activas')));
  }
  getTiposMedidaActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-medida/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_medida')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposMedidaActivos', 'tipos-medida/activos')));
  }
  getEstadosAsistenciaActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-asistencia/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'estado_asistencia')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosAsistenciaActivos', 'estados-asistencia/activos')));
  }
  getTiposNotificacionActivos() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-notificacion/activos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => this.extractData(response, 'tipo_notificacion')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposNotificacionActivos', 'tipos-notificacion/activos')));
  }
  // ========== MÉTODOS CRUD (POST, PUT) ==========
  crearTipoDocumento(datos) {
    const backendData = this.mapToBackend('tipo_documento', datos);
    return this.http.post(`${this.apiUrl}/admin/tipos-documento`, backendData);
  }
  actualizarTipoDocumento(id, datos) {
    const backendData = this.mapToBackend('tipo_documento', datos);
    return this.http.put(`${this.apiUrl}/admin/tipos-documento/${id}`, backendData);
  }
  crearSexo(datos) {
    const backendData = this.mapToBackend('sexo', datos);
    return this.http.post(`${this.apiUrl}/admin/sexos`, backendData);
  }
  actualizarSexo(id, datos) {
    const backendData = this.mapToBackend('sexo', datos);
    return this.http.put(`${this.apiUrl}/admin/sexos/${id}`, backendData);
  }
  crearEstadoCivil(datos) {
    const backendData = this.mapToBackend('estado_civil', datos);
    return this.http.post(`${this.apiUrl}/admin/estados-civiles`, backendData);
  }
  actualizarEstadoCivil(id, datos) {
    const backendData = this.mapToBackend('estado_civil', datos);
    return this.http.put(`${this.apiUrl}/admin/estados-civiles/${id}`, backendData);
  }
  crearTipoVinculo(datos) {
    const backendData = this.mapToBackend('tipo_vinculo', datos);
    return this.http.post(`${this.apiUrl}/admin/tipos-vinculo`, backendData);
  }
  actualizarTipoVinculo(id, datos) {
    const backendData = this.mapToBackend('tipo_vinculo', datos);
    return this.http.put(`${this.apiUrl}/admin/tipos-vinculo/${id}`, backendData);
  }
  crearCargo(datos) {
    const backendData = this.mapToBackend('cargo', datos);
    return this.http.post(`${this.apiUrl}/admin/cargos`, backendData);
  }
  actualizarCargo(id, datos) {
    const backendData = this.mapToBackend('cargo', datos);
    return this.http.put(`${this.apiUrl}/admin/cargos/${id}`, backendData);
  }
  crearTipoConflicto(datos) {
    const backendData = this.mapToBackend('tipo_conflicto', datos);
    return this.http.post(`${this.apiUrl}/admin/tipos-conflicto`, backendData);
  }
  actualizarTipoConflicto(id, datos) {
    const backendData = this.mapToBackend('tipo_conflicto', datos);
    return this.http.put(`${this.apiUrl}/admin/tipos-conflicto/${id}`, backendData);
  }
  crearEstadoDenuncia(datos) {
    const backendData = this.mapToBackend('estado_denuncia', datos);
    return this.http.post(`${this.apiUrl}/admin/estados-denuncia`, backendData);
  }
  actualizarEstadoDenuncia(id, datos) {
    const backendData = this.mapToBackend('estado_denuncia', datos);
    return this.http.put(`${this.apiUrl}/admin/estados-denuncia/${id}`, backendData);
  }
  crearInstitucion(datos) {
    const backendData = this.mapToBackend('institucion', datos);
    return this.http.post(`${this.apiUrl}/admin/instituciones`, backendData);
  }
  actualizarInstitucion(id, datos) {
    const backendData = this.mapToBackend('institucion', datos);
    return this.http.put(`${this.apiUrl}/admin/instituciones/${id}`, backendData);
  }
  crearTipoMedida(datos) {
    const backendData = this.mapToBackend('tipo_medida', datos);
    return this.http.post(`${this.apiUrl}/admin/tipos-medida`, backendData);
  }
  actualizarTipoMedida(id, datos) {
    const backendData = this.mapToBackend('tipo_medida', datos);
    return this.http.put(`${this.apiUrl}/admin/tipos-medida/${id}`, backendData);
  }
  crearEstadoAsistencia(datos) {
    const backendData = this.mapToBackend('estado_asistencia', datos);
    return this.http.post(`${this.apiUrl}/admin/estados-asistencia`, backendData);
  }
  actualizarEstadoAsistencia(id, datos) {
    const backendData = this.mapToBackend('estado_asistencia', datos);
    return this.http.put(`${this.apiUrl}/admin/estados-asistencia/${id}`, backendData);
  }
  crearTipoNotificacion(datos) {
    const backendData = this.mapToBackend('tipo_notificacion', datos);
    return this.http.post(`${this.apiUrl}/admin/tipos-notificacion`, backendData);
  }
  actualizarTipoNotificacion(id, datos) {
    const backendData = this.mapToBackend('tipo_notificacion', datos);
    return this.http.put(`${this.apiUrl}/admin/tipos-notificacion/${id}`, backendData);
  }
  // ========== ELIMINACIÓN LÓGICA (original) ==========
  eliminarTipoDocumento(id) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-documento/${id}`);
  }
  eliminarSexo(id) {
    return this.http.delete(`${this.apiUrl}/admin/sexos/${id}`);
  }
  eliminarEstadoCivil(id) {
    return this.http.delete(`${this.apiUrl}/admin/estados-civiles/${id}`);
  }
  eliminarTipoVinculo(id) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-vinculo/${id}`);
  }
  eliminarCargo(id) {
    return this.http.delete(`${this.apiUrl}/admin/cargos/${id}`);
  }
  eliminarTipoConflicto(id) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-conflicto/${id}`);
  }
  eliminarEstadoDenuncia(id) {
    return this.http.delete(`${this.apiUrl}/admin/estados-denuncia/${id}`);
  }
  eliminarInstitucion(id) {
    return this.http.delete(`${this.apiUrl}/admin/instituciones/${id}`);
  }
  eliminarTipoMedida(id) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-medida/${id}`);
  }
  eliminarEstadoAsistencia(id) {
    return this.http.delete(`${this.apiUrl}/admin/estados-asistencia/${id}`);
  }
  eliminarTipoNotificacion(id) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-notificacion/${id}`);
  }
  // ========== ELIMINACIÓN FÍSICA (KILLER) ==========
  eliminarTipoMedidaFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-medida/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarInstitucionFisica(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/instituciones/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarTipoDocumentoFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-documento/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarSexoFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/sexos/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarEstadoCivilFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/estados-civiles/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarTipoVinculoFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-vinculo/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarCargoFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/cargos/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarTipoConflictoFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-conflicto/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarEstadoDenunciaFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/estados-denuncia/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarEstadoAsistenciaFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/estados-asistencia/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  eliminarTipoNotificacionFisico(id, confirmacion) {
    return this.http.delete(`${this.apiUrl}/admin/tipos-notificacion/${id}`, {
      params: {
        confirmacion: confirmacion
      }
    });
  }
  // ========== MÉTODOS UTILITARIOS ==========
  isCatalogoPermitido(catalogoNombre) {
    return this.getCatalogosPermitidos().includes(catalogoNombre);
  }
  getTiposConflicto() {
    return this.http.get(`${this.apiUrl}/catalogos/tipos-conflicto`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('🔍 Tipos conflicto - Respuesta cruda:', response);
      // Extraer data con tipo explícito
      let data = [];
      if (response?.success && response.data) {
        data = Array.isArray(response.data) ? response.data : [response.data];
      } else if (Array.isArray(response)) {
        data = response;
      }
      // 👈 TIPO EXPLÍCITO EN EL PARÁMETRO
      return data.map(item => ({
        id: item.tipo_conflicto_id,
        tipo_conflicto_id: item.tipo_conflicto_id,
        nombre: item.nombre || '',
        descripcion: item.descripcion,
        activo: item.activo ?? true,
        estado: item.activo ?? true
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => console.log('✅ Tipos conflicto mapeados:', data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getTiposConflicto', 'tipos-conflicto')));
  }
  getEstadosDenuncia() {
    return this.http.get(`${this.apiUrl}/catalogos/estados-denuncia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log('🔍 Estados denuncia - Respuesta cruda:', response);
      // Extraer data con tipo explícito
      let data = [];
      if (response?.success && response.data) {
        data = Array.isArray(response.data) ? response.data : [response.data];
      } else if (Array.isArray(response)) {
        data = response;
      }
      // 👈 TIPO EXPLÍCITO EN EL PARÁMETRO
      return data.map(item => ({
        id: item.estado_denuncia_id,
        estado_denuncia_id: item.estado_denuncia_id,
        nombre: item.nombre || '',
        activo: item.activo ?? true,
        estado: item.activo ?? true
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => console.log('✅ Estados denuncia mapeados:', data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getEstadosDenuncia', 'estados-denuncia')));
  }
  static ɵfac = function CatalogoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CatalogoService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: CatalogoService,
    factory: CatalogoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 67509:
/*!************************************************!*\
  !*** ./src/app/core/services/modal.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalService: () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class ModalService {
  modalState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
    otpModal: false,
    codigoMaestroModal: false,
    sessionTimeoutModal: false,
    loadingModal: false
  });
  modalState$ = this.modalState.asObservable();
  // Cerrar todos los modales
  closeAllModals() {
    console.log('🔒 Cerrando todos los modales');
    this.modalState.next({
      otpModal: false,
      codigoMaestroModal: false,
      sessionTimeoutModal: false,
      loadingModal: false
    });
  }
  // Cerrar modales específicos
  closeModal(modalName) {
    const current = this.modalState.value;
    this.modalState.next({
      ...current,
      [modalName]: false
    });
  }
  // Abrir modal específico
  openModal(modalName) {
    const current = this.modalState.value;
    this.modalState.next({
      ...current,
      [modalName]: true
    });
  }
  // Actualizar estado individual
  updateModal(modalName, value) {
    const current = this.modalState.value;
    this.modalState.next({
      ...current,
      [modalName]: value
    });
  }
  getCurrentState() {
    return this.modalState.value;
  }
  static ɵfac = function ModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModalService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ModalService,
    factory: ModalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ 13443);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token.service */ 88705);
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./permission.service */ 80871);









class AuthService {
  http;
  router;
  userService;
  tokenService;
  permissionService;
  API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiUrl;
  currentUser$;
  isClearing = false; // ✅ Evitar limpiezas múltiples
  constructor(http, router, userService, tokenService, permissionService) {
    this.http = http;
    this.router = router;
    this.userService = userService;
    this.tokenService = tokenService;
    this.permissionService = permissionService;
    this.currentUser$ = this.userService.currentUser$;
  }
  getPermisosFromRol(rolId) {
    switch (rolId) {
      case 1:
        return [1, 2, 3];
      case 2:
        return [2, 3];
      case 4:
        return [2, 3];
      case 3:
        return [3];
      default:
        return [];
    }
  }
  saveUserData(userData) {
    this.userService.saveUserData(userData);
    if (userData.rol_id) {
      const permisos = this.getPermisosFromRol(userData.rol_id);
      this.permissionService.setPermisosUsuario(permisos);
      console.log('🔑 Permisos guardados:', permisos);
    }
  }
  login(credentials) {
    const url = `${this.API_URL}/auth/login`;
    console.log('🔐 [AuthService] Iniciando login para:', credentials.email);
    return this.http.post(url, credentials, {
      headers: this.tokenService.buildBaseHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      console.log('✅ [AuthService] Respuesta login:', response);
      if (response.access_token) {
        console.log('✅ [AuthService] Guardando access_token');
        this.tokenService.setToken(response.access_token);
      }
      if (response.token_temp) {
        console.log('✅ [AuthService] Guardando token_temp');
        localStorage.setItem('token_temp', response.token_temp);
      }
      if (response.usuario) {
        this.saveUserData(response.usuario);
      } else if (response.usuario_id) {
        const basicUser = {
          usuario_id: response.usuario_id,
          nombre_usuario: response.email?.split('@')[0] || 'Usuario',
          email: response.email || credentials.email,
          rol_id: response.rol_id || 0,
          activo: true,
          fecha_creacion: new Date().toISOString(),
          requiere_configurar_preguntas: response.requiere_configurar_preguntas || false,
          requiere_cambio_contrasena: false,
          preguntas_seguridad: response.preguntas_seguridad || response.preguntas || []
        };
        this.saveUserData(basicUser);
      }
      if (response.requiere_configurar_preguntas) {
        localStorage.setItem('require_security_setup', 'true');
        localStorage.setItem('setup_usuario_id', response.usuario_id?.toString() || '');
      } else if (response.requiere_preguntas || response.requiere_pregunta) {
        const securityData = {
          usuario_id: response.usuario_id,
          session_id: response.session_id,
          token_temp: response.token_temp,
          preguntas_actuales: response.preguntas || [{
            pregunta_id: response.pregunta_id,
            texto: response.pregunta
          }],
          intentos_restantes: response.intentos_restantes || 3
        };
        sessionStorage.setItem('security_session', JSON.stringify(securityData));
      } else if (response.access_token) {
        console.log('✅ Login directo exitoso');
        this.tokenService.setToken(response.access_token);
      }
      const savedToken = this.tokenService.getToken();
      console.log('🔍 [AuthService] Token guardado verificación:', savedToken ? '✅ OK' : '❌ NO GUARDADO');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getToken() {
    return this.tokenService.getToken();
  }
  getCurrentUser() {
    return this.userService.getCurrentUser();
  }
  checkBlockStatus(email) {
    return this.http.post(`${this.API_URL}/auth/check-block-status`, {
      email
    });
  }
  validateSecurityQuestions(data) {
    const url = `${this.API_URL}/auth/validar-preguntas`;
    const tempToken = this.tokenService.getTempToken();
    let headers = this.tokenService.getAuthHeaders();
    if (tempToken) {
      headers = headers.set('Authorization', `Bearer ${tempToken}`);
    }
    return this.http.post(url, data, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      console.log('✅ Respuesta validación:', response);
      if (response.access_token) {
        console.log('🎉 Validación exitosa - guardando token final');
        this.tokenService.setToken(response.access_token);
        localStorage.removeItem('token_temp');
        sessionStorage.removeItem('security_session');
        const savedToken = this.tokenService.getToken();
        console.log('🔍 Token final guardado:', savedToken ? '✅ OK' : '❌ FALLO');
        if (response.usuario) {
          this.saveUserData(response.usuario);
        }
        this.saveSecurityVerification();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  requiresSecuritySetup() {
    return localStorage.getItem('require_security_setup') === 'true';
  }
  getSetupUsuarioId() {
    const user = this.getCurrentUser();
    return user?.usuario_id || null;
  }
  configurarPreguntasSeguridad(data) {
    const url = `${this.API_URL}/auth/configurar-preguntas`;
    const tempToken = localStorage.getItem('token_temp');
    let headers = this.tokenService.getAuthHeaders();
    if (tempToken) {
      headers = headers.set('Authorization', `Bearer ${tempToken}`);
    }
    return this.http.post(url, data, {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      if (response.success) {
        localStorage.removeItem('require_security_setup');
        localStorage.removeItem('setup_usuario_id');
        localStorage.removeItem('token_temp');
        if (response.access_token) {
          this.tokenService.setToken(response.access_token);
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  markSecurityConfigured() {
    const user = this.getCurrentUser();
    if (user) {
      user.requiere_configurar_preguntas = false;
      this.saveUserData(user);
    }
    localStorage.removeItem('require_security_setup');
    localStorage.removeItem('setup_usuario_id');
    localStorage.removeItem('token_temp');
    sessionStorage.setItem('security_configured', 'true');
  }
  isSecurityVerified() {
    const verified = localStorage.getItem('security_verified');
    const verifiedAt = localStorage.getItem('security_verified_at');
    if (!verified || !verifiedAt) return false;
    const verificationTime = parseInt(verifiedAt, 10);
    const hoursSinceVerification = (Date.now() - verificationTime) / (1000 * 60 * 60);
    return hoursSinceVerification < 12;
  }
  clearSecurityVerification() {
    localStorage.removeItem('security_verified');
    localStorage.removeItem('security_verified_at');
  }
  saveSecurityVerification() {
    localStorage.setItem('security_verified', 'true');
    localStorage.setItem('security_verified_at', Date.now().toString());
  }
  isAuthenticated() {
    const token = this.getToken();
    if (token) return true;
    const tempToken = localStorage.getItem('token_temp');
    const securitySession = sessionStorage.getItem('security_session');
    return !!tempToken || !!securitySession;
  }
  logout() {
    const url = `${this.API_URL}/auth/logout`;
    const token = this.getToken() || localStorage.getItem('token_temp');
    if (!token) {
      this.clearAuthData(true, false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
        success: true,
        message: 'Sesión cerrada localmente'
      });
    }
    return this.http.post(url, {}, {
      headers: this.tokenService.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.clearAuthData(true, false);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      this.clearAuthData(true, false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
        success: true,
        message: 'Sesión cerrada localmente'
      });
    }));
  }
  clearAuthData(redirectToLogin = true, isSessionExpired = false) {
    if (this.isClearing) {
      console.log('⚠️ [AuthService] Ya se está limpiando la sesión, ignorando');
      return;
    }
    this.isClearing = true;
    console.log('🧹 [AuthService] Limpiando datos de autenticación', {
      isSessionExpired
    });
    // ✅ Mantener solo datos esenciales
    const itemsToKeep = ['theme', 'language', 'appConfig'];
    const keptItems = {};
    itemsToKeep.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) keptItems[key] = value;
    });
    localStorage.clear();
    sessionStorage.clear();
    // Restaurar datos esenciales
    Object.entries(keptItems).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
    // Limpiar datos de autenticación
    this.userService.clearUserData();
    this.tokenService.clearToken();
    this.permissionService.clearPermisos();
    localStorage.removeItem('token_temp');
    localStorage.removeItem('require_security_setup');
    localStorage.removeItem('setup_usuario_id');
    localStorage.removeItem('security_verified');
    localStorage.removeItem('security_verified_at');
    localStorage.removeItem('codigo_maestro');
    sessionStorage.removeItem('security_session');
    if (redirectToLogin) {
      // ✅ Redirigir a HOME, no a login
      const queryParams = isSessionExpired ? {
        sessionExpired: true
      } : {};
      console.log('🚀 [AuthService] Navegando a home con params:', queryParams);
      setTimeout(() => {
        this.router.navigate(['/home'], {
          queryParams,
          replaceUrl: true
        }).then(success => {
          console.log('✅ [AuthService] Navegación a home exitosa:', success);
          if (!success) {
            const url = isSessionExpired ? '/home?sessionExpired=true' : '/home';
            window.location.href = url;
          }
          setTimeout(() => {
            this.isClearing = false;
          }, 500);
        }).catch(err => {
          console.error('❌ [AuthService] Error en navegación:', err);
          const url = isSessionExpired ? '/home?sessionExpired=true' : '/home';
          window.location.href = url;
          this.isClearing = false;
        });
      }, 100);
    } else {
      this.isClearing = false;
    }
  }
  getAuthHeaders(useTempToken = false) {
    return this.tokenService.getAuthHeaders(useTempToken);
  }
  me() {
    const url = `${this.API_URL}/auth/me`;
    return this.http.get(url, {
      headers: this.tokenService.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      if (response && response.success && response.data) {
        this.saveUserData(response.data);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  refreshToken() {
    const url = `${this.API_URL}/auth/refrescar-token`;
    const currentToken = this.getToken();
    if (!currentToken) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => ({
        success: false,
        message: 'No hay token para refrescar'
      }));
    }
    return this.http.post(url, {}, {
      headers: this.tokenService.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      if (response.success && response.access_token) {
        this.tokenService.setToken(response.access_token);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error.status === 401) {
        this.clearAuthData(true, true);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  handleError(error) {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 401:
          errorMessage = error.error?.message || 'No autorizado';
          break;
        case 423:
          errorMessage = error.error?.message || 'Usuario bloqueado';
          break;
        case 422:
          errorMessage = 'Error de validación';
          if (error.error?.errors) {
            const errors = error.error.errors;
            errorMessage = Object.values(errors).flat().join(', ');
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = error.error?.message || `Error ${error.status}: ${error.message}`;
      }
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => ({
      status: error.status,
      message: errorMessage,
      error: error.error
    }));
  }
  updateToken(newToken) {
    console.log('🔄 Actualizando token por renovación');
    this.tokenService.setToken(newToken);
    this.tokenService.updateAuthHeaders(newToken);
  }
  needsTokenRefresh() {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiracion = payload.exp * 1000;
      const tiempoRestante = expiracion - Date.now();
      return tiempoRestante < 5 * 60 * 1000;
    } catch (e) {
      return false;
    }
  }
  solicitarResetPassword(data) {
    const url = `${this.API_URL}/auth/reset-password`;
    return this.http.post(url, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  resetPassword(token, data) {
    const url = `${this.API_URL}/auth/reset-password/${token}`;
    return this.http.post(url, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  obtenerPreguntasUsuario(email) {
    const url = `${this.API_URL}/auth/obtener-preguntas-usuario`;
    return this.http.post(url, {
      email
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  static ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_9__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_permission_service__WEBPACK_IMPORTED_MODULE_10__.PermissionService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 36124);






class ConfirmDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static ɵfac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ConfirmDialogComponent,
    selectors: [["app-confirm-dialog"]],
    decls: 10,
    vars: 2,
    consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
    template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-dialog-actions", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
          return ctx.onConfirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 69083:
/*!***************************************************!*\
  !*** ./src/app/core/models/notification.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ Notification)
/* harmony export */ });
class Notification {
  id;
  userId;
  title;
  message;
  type;
  module;
  read;
  createdAt;
  avatar;
  actionUrl;
  metadata;
  constructor(data) {
    this.id = data.id || Date.now();
    this.userId = data.userId || '';
    this.title = data.title || '';
    this.message = data.message || '';
    this.type = data.type || 'info';
    this.module = data.module || 'sistema';
    this.read = data.read || false;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.avatar = data.avatar;
    this.actionUrl = data.actionUrl;
    this.metadata = data.metadata;
  }
  getFullMessage() {
    return `${this.title}: ${this.message}`;
  }
  isExpired(expirationHours = 24) {
    const created = new Date(this.createdAt);
    const now = new Date();
    const diffHours = (now.getTime() - created.getTime()) / (1000 * 60 * 60);
    return diffHours > expirationHours;
  }
  markAsRead() {
    this.read = true;
  }
  static fromApi(response) {
    console.log('🔄 fromApi - Respuesta completa:', response);
    // ✅ Si la respuesta tiene la estructura {success: true, data: {...}}
    const notificationData = response.data || response;
    console.log('🔄 fromApi - Datos extraídos:', notificationData);
    return new Notification({
      id: notificationData.id,
      userId: notificationData.user_id || notificationData.userId?.toString() || '',
      title: notificationData.title || notificationData.titulo || '',
      message: notificationData.message || notificationData.mensaje || '',
      type: notificationData.type || notificationData.tipo_alerta || 'info',
      module: notificationData.module || notificationData.modulo || 'sistema',
      read: notificationData.read === 1 || notificationData.read === true || notificationData.leida === 1,
      createdAt: notificationData.created_at || notificationData.createdAt || notificationData.fecha_creacion,
      actionUrl: notificationData.action_url || notificationData.actionUrl,
      avatar: notificationData.avatar,
      metadata: notificationData.metadata
    });
  }
}

/***/ }),

/***/ 70289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ 32181);
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ 63622);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/session.service */ 87988);
/* harmony import */ var _core_config_app_config_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/config/app-config.token */ 96048);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/es */ 64110);
/* harmony import */ var _app_modules_seguridad_pages_auditorias_interceptors_auditoria_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/modules/seguridad/pages/auditorias/interceptors/auditoria.interceptor */ 76946);
/* harmony import */ var _core_interceptors_LoadingInterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptors/LoadingInterceptor */ 97418);
/* harmony import */ var _core_services_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/modal.service */ 67509);















(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_11__["default"], 'es');
const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_4__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.withInterceptors)([_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.authInterceptor])), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)(), primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, _core_services_session_service__WEBPACK_IMPORTED_MODULE_6__.SessionService, _core_services_modal_service__WEBPACK_IMPORTED_MODULE_14__.ModalService, {
    provide: _core_config_app_config_token__WEBPACK_IMPORTED_MODULE_7__.APP_CONFIG,
    useValue: {
      apiUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiUrl,
      production: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production ?? false,
      publicUrls: ['/auth/login', '/auth/logout', '/auth/refresh-token', '/auth/reset-password', '/auth/preguntas-disponibles', '/ping']
    }
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
    useValue: 'es'
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
    useClass: _app_modules_seguridad_pages_auditorias_interceptors_auditoria_interceptor__WEBPACK_IMPORTED_MODULE_12__.AuditoriaInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_LoadingInterceptor__WEBPACK_IMPORTED_MODULE_13__.LoadingInterceptor,
    multi: true
  }]
};

/***/ }),

/***/ 72723:
/*!****************************************************************************!*\
  !*** ./src/app/core/services/notification/notification-storage.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationStorageService: () => (/* binding */ NotificationStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

class NotificationStorageService {
  STORAGE_KEY = 'app_notifications';
  MAX_STORAGE = 100;
  saveNotifications(notifications) {
    const toStore = notifications.slice(0, this.MAX_STORAGE);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toStore));
  }
  loadNotifications() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  clearNotifications() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  getStoredCount() {
    return this.loadNotifications().length;
  }
  static ɵfac = function NotificationStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationStorageService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationStorageService,
    factory: NotificationStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 76085:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/notification/notification.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/relative-time.pipe */ 3654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _core_services_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/dialog/dialog.service */ 41869);







function NotificationComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount > 99 ? "99+" : ctx_r0.unreadCount, " ");
  }
}
function NotificationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 7);
  }
}
function NotificationComponent_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount, " sin leer ");
  }
}
function NotificationComponent_div_6_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_div_6_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.markAllAsRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Marcar todas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.loading);
  }
}
function NotificationComponent_div_6_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, notification_r4.module), " ");
  }
}
function NotificationComponent_div_6_div_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u25CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function NotificationComponent_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_div_6_div_8_Template_div_click_0_listener() {
      const notification_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onNotificationClick(notification_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 23)(5, "div", 24)(6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NotificationComponent_div_6_div_8_div_8_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 27)(12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "relativeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NotificationComponent_div_6_div_8_div_15_Template, 3, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](notification_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("unread", !notification_r4.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r0.getAvatarColor(notification_r4.module));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", notification_r4.avatar || ctx_r0.getDefaultAvatar(notification_r4.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](notification_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", notification_r4.module);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](notification_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 12, notification_r4.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !notification_r4.read);
  }
}
function NotificationComponent_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No tienes notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Todo est\u00E1 al d\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function NotificationComponent_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cargando notificaciones...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function NotificationComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_div_6_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.deleteAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Limpiar todas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r0.loading);
  }
}
function NotificationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Notificaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NotificationComponent_div_6_span_5_Template, 2, 1, "span", 11)(6, NotificationComponent_div_6_button_6_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NotificationComponent_div_6_div_8_Template, 16, 14, "div", 14)(9, NotificationComponent_div_6_div_9_Template, 7, 0, "div", 15)(10, NotificationComponent_div_6_div_10_Template, 4, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NotificationComponent_div_6_div_11_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.notifications)("ngForTrackBy", ctx_r0.trackByFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.notifications.length === 0 && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.notifications.length > 0);
  }
}
class NotificationComponent {
  notificationService;
  dialogService;
  cdr;
  isOpen = false;
  notifications = [];
  unreadCount = 0;
  loading = false;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  constructor(notificationService, dialogService, cdr) {
    this.notificationService = notificationService;
    this.dialogService = dialogService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.subscriptions.add(this.notificationService.state$.subscribe(state => {
      this.notifications = state.notifications;
      this.unreadCount = state.unreadCount;
      this.loading = state.loading;
      this.cdr.markForCheck();
    }));
    this.subscriptions.add(this.notificationService.unreadCount$.subscribe(count => {
      this.unreadCount = count;
      this.cdr.markForCheck();
    }));
    this.subscriptions.add(this.notificationService.loading$.subscribe(loading => {
      this.loading = loading;
      this.cdr.markForCheck();
    }));
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.setupClickOutsideListener();
    } else {
      this.removeClickOutsideListener();
    }
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe({
      error: error => console.error('Error marking all as read:', error)
    });
  }
  deleteAll() {
    this.dialogService.confirm({
      title: 'Confirmar eliminación',
      message: '¿Está seguro de eliminar TODAS las notificaciones? Esta acción no se puede deshacer.',
      confirmText: 'Eliminar todo',
      type: 'danger',
      onConfirm: () => {
        // Mostrar estado de carga
        this.loading = true;
        this.cdr.markForCheck();
        this.notificationService.deleteAll().subscribe({
          next: () => {
            this.loading = false;
            this.cdr.markForCheck();
            // Opcional: cerrar el dropdown después de eliminar
            setTimeout(() => {
              this.isOpen = false;
              this.cdr.markForCheck();
            }, 1500);
          },
          error: error => {
            console.error('Error en deleteAll:', error);
            this.loading = false;
            this.cdr.markForCheck();
          }
        });
      }
    });
  }
  onNotificationClick(notification) {
    if (!notification.read) {
      this.notificationService.markAsRead(notification.id).subscribe();
    }
    if (notification.actionUrl) {
      // Navegar a la URL - puedes implementar router navigation
      // this.router.navigateByUrl(notification.actionUrl);
    }
  }
  getAvatarColor(module) {
    const colors = {
      personas: '#4CAF50',
      denuncias: '#FF9800',
      reportes: '#2196F3',
      usuarios: '#9C27B0',
      sistema: '#607D8B',
      backup: '#795548',
      configuracion: '#3F51B5'
    };
    return colors[module || 'sistema'] || '#3F51B5';
  }
  getDefaultAvatar(type) {
    const avatars = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
    return avatars[type] || '📢';
  }
  trackByFn(index, notification) {
    return notification.id;
  }
  clickOutsideHandler;
  setupClickOutsideListener() {
    setTimeout(() => {
      this.clickOutsideHandler = event => {
        const target = event.target;
        const wrapper = document.querySelector('.notification-wrapper');
        if (wrapper && !wrapper.contains(target)) {
          this.isOpen = false;
          this.removeClickOutsideListener();
          this.cdr.markForCheck();
        }
      };
      document.addEventListener('click', this.clickOutsideHandler);
    });
  }
  removeClickOutsideListener() {
    if (this.clickOutsideHandler) {
      document.removeEventListener('click', this.clickOutsideHandler);
      this.clickOutsideHandler = undefined;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.removeClickOutsideListener();
  }
  static ɵfac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["app-notification"]],
    decls: 7,
    vars: 6,
    consts: [[1, "notification-wrapper"], [1, "notification-btn", 3, "click"], [1, "notification-icon"], ["class", "notification-badge", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "notifications-dropdown", 4, "ngIf"], [1, "notification-badge"], [1, "loading-spinner"], [1, "notifications-dropdown"], [1, "dropdown-header"], [1, "header-actions"], ["class", "unread-count", 4, "ngIf"], ["class", "mark-all-read", 3, "disabled", "click", 4, "ngIf"], [1, "notifications-list"], ["class", "notification-item", 3, "unread", "class", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "no-notifications", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "dropdown-footer", 4, "ngIf"], [1, "unread-count"], [1, "mark-all-read", 3, "click", "disabled"], [1, "notification-item", 3, "click"], [1, "notification-content"], [1, "notification-avatar"], [1, "notification-details"], [1, "notification-header"], [1, "notification-title"], [1, "notification-message"], [1, "notification-footer"], [1, "notification-time"], ["class", "notification-status", 4, "ngIf"], [1, "notification-status"], [1, "unread-dot"], [1, "no-notifications"], [1, "empty-icon"], [1, "empty-subtitle"], [1, "loading-state"], [1, "spinner"], [1, "dropdown-footer"], [1, "clear-all", 3, "click", "disabled"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_1_listener() {
          return ctx.toggleDropdown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\uD83D\uDD14");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NotificationComponent_span_4_Template, 2, 1, "span", 3)(5, NotificationComponent_span_5_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NotificationComponent_div_6_Template, 12, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Notificaciones (" + ctx.unreadCount + " sin leer)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.TitleCasePipe, _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__.RelativeTimePipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n  z-index: 100;\n}\n.top-bar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  background: var(--bg-primary);\n  border-radius: 16px;\n  padding: 0 24px;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid var(--border-color);\n  top: 12px;\n  left: 284px;\n  right: 16px;\n  width: auto;\n}\n.top-bar-container.sidebar-expanded[_ngcontent-%COMP%] {\n  left: 284px;\n  right: 16px;\n}\n.top-bar-container.sidebar-collapsed[_ngcontent-%COMP%] {\n  left: 96px;\n  right: 16px;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  gap: 16px;\n  position: relative;\n  z-index: 1001;\n}\n.search-button-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]   .search-button-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n.search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  transform: scale(1.05);\n}\n.search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover   .search-button-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.theme-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 6px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid var(--border-color);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  color: var(--text-secondary);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.light[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(255, 255, 255, 0.2);\n  color: #1f2937;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.dark[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.theme-switcher[_ngcontent-%COMP%]   .theme-btn.neon[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(0, 240, 255, 0.2);\n  color: #00f0ff;\n  box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 1002;\n}\n.notification-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.notification-wrapper[_ngcontent-%COMP%]   .notification-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification-wrapper[_ngcontent-%COMP%]   .notification-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  transform: scale(1.05);\n}\n.notification-wrapper[_ngcontent-%COMP%]   .notification-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n}\n.notification-wrapper[_ngcontent-%COMP%]   .notification-btn[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.3s;\n}\n.notification-wrapper[_ngcontent-%COMP%]   .notification-btn[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--danger);\n  color: white;\n  font-size: 10px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n}\n.notifications-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 380px;\n  max-height: 500px;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--modal-header-bg);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .unread-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-size: 12px;\n  cursor: pointer;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notifications-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  position: relative;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  background: var(--primary);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n  color: white;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n  border-radius: 12px;\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n  line-height: 1.4;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-details[_ngcontent-%COMP%]   .notification-footer[_ngcontent-%COMP%]   .notification-status[_ngcontent-%COMP%]   .unread-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 50%;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 12px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .no-notifications[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .no-notifications[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  opacity: 0.6;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .no-notifications[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-footer[_ngcontent-%COMP%]   .clear-all[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  background: none;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--text-primary);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-footer[_ngcontent-%COMP%]   .clear-all[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.notifications-dropdown[_ngcontent-%COMP%]   .dropdown-footer[_ngcontent-%COMP%]   .clear-all[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.user-menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-sm);\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn.active[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  box-shadow: 0 0 0 2px var(--primary);\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar-photo[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-menu-wrapper[_ngcontent-%COMP%]   .user-menu-btn[_ngcontent-%COMP%]   .user-avatar-initial[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  font-weight: 600;\n  color: white;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 280px;\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-lg);\n  z-index: 2000;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-bottom: 1px solid var(--border-color);\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-avatar-large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n  color: white;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-avatar-large[_ngcontent-%COMP%]   .avatar-image-large[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-avatar-large[_ngcontent-%COMP%]   .avatar-large-initial[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n.user-dropdown[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--primary);\n  font-weight: 500;\n}\n.user-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border-color);\n  margin: 8px 0;\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: var(--text-primary);\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  padding-left: 20px;\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  min-width: 24px;\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item.logout-item[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.user-dropdown[_ngcontent-%COMP%]   .menu-item.logout-item[_ngcontent-%COMP%]:hover {\n  background: var(--danger-light);\n}\n  .logout-modal-pring .p-dialog {\n  border-radius: 24px;\n  overflow: hidden;\n  max-width: 450px;\n}\n  .logout-modal-pring .p-dialog .p-dialog-header {\n  display: none;\n}\n  .logout-modal-pring .p-dialog .p-dialog-content {\n  padding: 0;\n  background: var(--modal-bg);\n  border-radius: 24px;\n}\n.logout-modal-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  background: var(--modal-bg);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-icon-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-icon-wrapper[_ngcontent-%COMP%]   .logout-icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  background: var(--danger-light);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-icon-wrapper[_ngcontent-%COMP%]   .logout-icon-circle.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-icon-wrapper[_ngcontent-%COMP%]   .logout-icon-circle[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--danger);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-icon-wrapper[_ngcontent-%COMP%]   .logout-icon-circle[_ngcontent-%COMP%]   .logout-icon.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: var(--text-primary);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .logout-message[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 1.5rem;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .user-info-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 16px 8px 8px;\n  background: var(--bg-tertiary);\n  border-radius: 50px;\n  margin-bottom: 1.5rem;\n  border: 1px solid var(--border-color);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .user-info-chip[_ngcontent-%COMP%]   .user-avatar-mini[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n  color: white;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .user-info-chip[_ngcontent-%COMP%]   .user-details-mini[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .user-info-chip[_ngcontent-%COMP%]   .user-details-mini[_ngcontent-%COMP%]   .user-name-mini[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .user-info-chip[_ngcontent-%COMP%]   .user-details-mini[_ngcontent-%COMP%]   .user-role-mini[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--primary);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding: 0.75rem 1.5rem;\n  border-radius: 50px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   .btn-cancel-premium[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid var(--border-color);\n  color: var(--text-primary);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   .btn-cancel-premium[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   .btn-logout-premium[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  border: none;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.logout-modal-content[_ngcontent-%COMP%]   .button-container-premium[_ngcontent-%COMP%]   .btn-logout-premium[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.custom-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n}\n.custom-dialog[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  padding: 24px;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--modal-border);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  font-size: 1.25rem;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: var(--text-secondary);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-warning[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n  font-weight: 500;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.3s;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.custom-dialog[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .top-bar-container[_ngcontent-%COMP%] {\n    top: 8px;\n    left: 16px !important;\n    right: 16px !important;\n    width: auto !important;\n    padding: 0 16px;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    height: 56px;\n    gap: 8px;\n  }\n  .search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .user-menu-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .notifications-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 60px;\n    left: 16px;\n    right: 16px;\n    width: auto;\n    max-width: none;\n  }\n  .user-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 60px;\n    right: 16px;\n    width: calc(100vw - 32px);\n    max-width: 300px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .top-bar-container[_ngcontent-%COMP%] {\n    top: 5px;\n    padding: 0 12px;\n  }\n  .search-button-wrapper[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .theme-switcher[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .theme-switcher[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .user-menu-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVEY7QUFZQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVkY7QUFhRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBWEo7QUFlRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBYko7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZkY7QUFxQkE7RUFDRSxjQUFBO0FBbkJGO0FBa0JBO0VBSUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBTUE7RUFnQk0saUJBQUE7RUFDQSxxQkFBQTtBQW5CTjtBQXNCSTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7QUFwQk47QUFrQkk7RUFLSSxZQUFBO0FBcEJSO0FBNkJBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQ0FBQTtBQTNCRjtBQW9CQTtFQVVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsdUJBQUE7RUFD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QUNBLFlBQUE7RUF0TEY7RUFvTEE7SUFLSSxpQkFBQTtFQXRMSjtFQWlMQTtJQVFNLGFBQUE7RUF0TE47RUE4S0E7SUFZTSxpQkFBQTtFQXZMTjtFQTRMQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBMUxGO0VBNkxBO0lBQ0UsUUFBQTtFQTNMRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhFQURFUiBDT01QT05FTlQgLSBFU1RJTE9TIENPTVBMRVRPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4udG9wLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMjg0cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICB3aWR0aDogYXV0bztcblxuICAvLyBTaWRlYmFyIGV4cGFuZGlkbyAoMjgwcHgpXG4gICYuc2lkZWJhci1leHBhbmRlZCB7XG4gICAgbGVmdDogMjg0cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAvLyBTaWRlYmFyIGNvbGFwc2FkbyAoOTBweClcbiAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XG4gICAgbGVmdDogOTZweDtcbiAgICByaWdodDogMTZweDtcbiAgfVxufVxuXG4udG9wLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBnYXA6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVMODwpNOIERFIELDg8KaU1FVRURBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1idXR0b24td3JhcHBlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5zZWFyY2gtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAuc2VhcmNoLWJ1dHRvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuXG4gICAgICAuc2VhcmNoLWJ1dHRvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEhFTUUgU1dJVENIRVIgKGJvdG9uZXMgZGUgdGVtYSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGhlbWUtc3dpdGNoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLnRoZW1lLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNzksIDcwLCAyMjksIDAuMyk7XG4gICAgfVxuXG4gICAgJi5saWdodDpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgfVxuXG4gICAgJi5kYXJrOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5uZW9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI0MCwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6ICMwMGYwZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDI0MCwgMjU1LCAwLjMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQUNDSU9ORVMgREVMIEhFQURFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5oZWFkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMjtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5PVElGSUNBQ0lPTkVTIC0gVkVSU0nDg8KTTiBDT1JSRUdJREFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5ub3RpZmljYXRpb24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERST1BET1dOIERFIE5PVElGSUNBQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm5vdGlmaWNhdGlvbnMtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgOHB4KTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzODBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xuXG4gIC5kcm9wZG93bi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAudW5yZWFkLWNvdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXJrLWFsbC1yZWFkIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbnMtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICB9XG5cbiAgICAmLnVucmVhZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAubm90aWZpY2F0aW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24tZGV0YWlscyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIH1cblxuICAgICAgICAubm90aWZpY2F0aW9uLWZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5ub3RpZmljYXRpb24tdGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vdGlmaWNhdGlvbi1zdGF0dXMge1xuICAgICAgICAgICAgLnVucmVhZC1kb3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5sb2FkaW5nLXN0YXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG5cbiAgICAuc3Bpbm5lciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cblxuICAubm8tbm90aWZpY2F0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuXG4gICAgLmNsZWFyLWFsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUVOw4PCmiBERSBVU1VBUklPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnVzZXItbWVudS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXNocmluazogMDtcblxuICAudXNlci1tZW51LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAudXNlci1hdmF0YXItcGhvdG8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAuYXZhdGFyLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItYXZhdGFyLWluaXRpYWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERST1BET1dOIERFIFVTVUFSSU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udXNlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHotaW5kZXg6IDIwMDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcblxuICAuZHJvcGRvd24tbWVudSB7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gIH1cblxuICAudXNlci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLnVzZXItYXZhdGFyLWxhcmdlIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC5hdmF0YXItaW1hZ2UtbGFyZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAuYXZhdGFyLWxhcmdlLWluaXRpYWwge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWRldGFpbHMge1xuICAgIGZsZXg6IDE7XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG5cbiAgICAudXNlci1lbWFpbCB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgfVxuXG4gICAgLnVzZXItcm9sZSB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmRyb3Bkb3duLWRpdmlkZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIC5tZW51LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgLm1lbnUtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgJi5sb2dvdXQtaXRlbSB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBMT0dPVVRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46Om5nLWRlZXAgLmxvZ291dC1tb2RhbC1wcmluZyB7XG4gIC5wLWRpYWxvZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG5cbiAgICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnAtZGlhbG9nLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgfVxuICB9XG59XG5cbi5sb2dvdXQtbW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuXG4gIC5sb2dvdXQtaWNvbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG5cbiAgICAubG9nb3V0LWljb24tY2lyY2xlIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgJi5wdWxzaW5nIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgLmxvZ291dC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICAgICYuc3Bpbm5pbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9nb3V0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gIC5sb2dvdXQtbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuXG4gIC51c2VyLWluZm8tY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHggOHB4IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC51c2VyLWF2YXRhci1taW5pIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC51c2VyLWRldGFpbHMtbWluaSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAudXNlci1uYW1lLW1pbmkge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLXJvbGUtbWluaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXItcHJlbWl1bSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY2FuY2VsLXByZW1pdW0ge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1sb2dvdXQtcHJlbWl1bSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRElBTE9HTyBQRVJTT05BTElaQURPIFBBUkEgQ09ORklSTUFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmN1c3RvbS1kaWFsb2ctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmN1c3RvbS1kaWFsb2cge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmRpYWxvZy1oZWFkZXIgaDMge1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAuZGlhbG9nLWJvZHkgcCB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgfVxuXG4gIC5kaWFsb2ctd2FybmluZyB7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmRpYWxvZy1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIC5idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLWRhbmdlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjM5LCA2OCwgNjgsIDAuNCk7XG4gIH1cbiAgNzAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxNXB4IHJnYmEoMjM5LCA2OCwgNjgsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogMTZweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cblxuICAudG9wLWJhciB7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24td3JhcHBlciAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG5cbiAgLnRoZW1lLXN3aXRjaGVyIHtcbiAgICBnYXA6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG5cbiAgICAudGhlbWUtYnRuIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuXG4gICAgICAudGhlbWUtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbWVudS1idG4ge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb25zLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG5cbiAgLnVzZXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBnYXA6IDhweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICB0b3A6IDVweDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cblxuICAuc2VhcmNoLWJ1dHRvbi13cmFwcGVyIC5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAudGhlbWUtc3dpdGNoZXIge1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcblxuICAgIC50aGVtZS1idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG5cbiAgICAgIC50aGVtZS1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1tZW51LWJ0biB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBnYXA6IDZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 76233:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/loading.service */ 98660);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/theme.service */ 64081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);






const _c0 = (a0, a1, a2) => ({
  "left": a0,
  "top": a1,
  "animation-delay": a2
});
function LoadingComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 45);
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](1, _c0, p_r2.x + "%", p_r2.y + "%", p_r2.delay + "s"));
  }
}
function LoadingComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LoadingComponent_div_4_p_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" M\u00F3dulo: ", ctx_r2.currentModule, "\n");
  }
}
function LoadingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LoadingComponent_div_4_div_3_Template, 1, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoadingComponent_div_4_div_4_Template, 17, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 10)(7, "g", 11)(8, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 14)(11, "g", 15)(12, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 18)(16, "g", 19)(17, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "path", 20)(19, "path", 21)(20, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "svg", 24)(23, "g", 25)(24, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "path", 26)(26, "path", 27)(27, "path", 28)(28, "path", 29)(29, "path", 30)(30, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "svg", 32)(32, "g", 33)(33, "g", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "path", 35)(35, "path", 36)(36, "path", 37)(37, "path", 38)(38, "path", 39)(39, "path", 40)(40, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, LoadingComponent_div_4_p_44_Template, 3, 1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoadingComponent_div_4_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("dark-mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 11, ctx_r2.themeService.darkMode$))("venezuela", ctx_r2.isVenezuelaTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.particles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isVenezuelaTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("venezuela", ctx_r2.isVenezuelaTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 13, ctx_r2.message$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.currentModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Cambiar a tema ", ctx_r2.isVenezuelaTheme ? "Sistema" : "Tricolor", " ");
  }
}
class LoadingComponent {
  loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService);
  themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_core_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService);
  loading$ = this.loadingService.loading$;
  message$ = this.loadingService.message$;
  currentModule$ = this.loadingService.currentModule$;
  isVenezuelaTheme = false;
  particles = [];
  currentModule = '';
  themeSub;
  moduleSub;
  ngOnInit() {
    // Suscribirse al tema del loader
    this.themeSub = this.themeService.venezuelaTheme$.subscribe(value => this.isVenezuelaTheme = value);
    // Suscribirse al módulo actual
    this.moduleSub = this.currentModule$.subscribe(module => {
      this.currentModule = module;
    });
    // Generar partículas para el fondo
    for (let i = 0; i < 12; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      });
    }
  }
  ngOnDestroy() {
    this.themeSub?.unsubscribe();
    this.moduleSub?.unsubscribe();
  }
  toggleTheme() {
    this.themeService.toggleVenezuelaTheme();
  }
  static ɵfac = function LoadingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoadingComponent,
    selectors: [["app-loading"]],
    decls: 6,
    vars: 3,
    consts: [["width", "0", "height", "0", 2, "position", "absolute"], ["id", "gradiente-paloma", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#8a2be2"], ["offset", "100%", "stop-color", "#87cefa"], ["class", "loading-overlay", 3, "dark-mode", "venezuela", 4, "ngIf"], [1, "loading-overlay"], [1, "particles"], ["class", "particle", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "stars-container", 4, "ngIf"], [1, "loader"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "20.69332", "height", "68.19944", "viewBox", "0,0,20.69332,68.19944", 1, "legl"], ["transform", "translate(-201.44063,-235.75466)"], ["stroke-miterlimit", "10"], ["d", "M218.11971,301.20087c-2.20708,1.73229 -4.41416,0 -4.41416,0l-1.43017,-1.1437c-1.42954,-1.40829 -3.04351,-2.54728 -4.56954,-3.87927c-0.95183,-0.8308 -2.29837,-1.49883 -2.7652,-2.55433c-0.42378,-0.95815 0.14432,-2.02654 0.29355,-3.03399c0.41251,-2.78499 1.82164,-5.43386 2.41472,-8.22683c1.25895,-4.44509 2.73863,-8.98683 3.15318,-13.54796c0.22615,-2.4883 -0.21672,-5.0155 -0.00278,-7.50605c0.30636,-3.56649 1.24602,-7.10406 1.59992,-10.6738c0.29105,-2.93579 -0.00785,-5.9806 -0.00785,-8.93046c0,0 0,-2.44982 3.12129,-2.44982c3.12129,0 3.12129,2.44982 3.12129,2.44982c0,3.06839 0.28868,6.22201 -0.00786,9.27779c-0.34637,3.56935 -1.30115,7.10906 -1.59992,10.6738c-0.2103,2.50918 0.22586,5.05326 -0.00278,7.56284c-0.43159,4.7371 -1.94029,9.46317 -3.24651,14.07835c-0.47439,2.23403 -1.29927,4.31705 -2.05805,6.47156c-0.18628,0.52896 -0.1402,1.0974 -0.327,1.62624c-0.09463,0.26791 -0.64731,0.47816 -0.50641,0.73323c0.19122,0.34617 0.86423,0.3445 1.2346,0.58502c1.88637,1.22503 3.50777,2.79494 5.03,4.28305l0.96971,0.73991c0,0 2.20708,1.73229 0,3.46457z", "fill", "none", "stroke", "#191e2e", "stroke-width", "7"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "41.02537", "height", "64.85502", "viewBox", "0,0,41.02537,64.85502", 1, "legr"], ["transform", "translate(-241.54137,-218.44347)"], ["d", "M279.06674,279.42662c-2.27967,1.98991 -6.08116,0.58804 -6.08116,0.58804l-2.47264,-0.92915c-2.58799,-1.18826 -5.31176,-2.08831 -7.99917,-3.18902c-1.67622,-0.68654 -3.82471,-1.16116 -4.93147,-2.13229c-1.00468,-0.88156 -0.69132,-2.00318 -0.92827,-3.00935c-0.65501,-2.78142 0.12275,-5.56236 -0.287,-8.37565c-0.2181,-4.51941 -0.17458,-9.16283 -1.60696,-13.68334c-0.78143,-2.46614 -2.50162,-4.88125 -3.30086,-7.34796c-1.14452,-3.53236 -1.40387,-7.12078 -2.48433,-10.66266c-0.88858,-2.91287 -2.63779,-5.85389 -3.93351,-8.74177c0,0 -1.07608,-2.39835 3.22395,-2.81415c4.30003,-0.41581 2.41605,1.98254 2.41605,1.98254c1.34779,3.00392 3.13072,6.05282 4.06444,9.0839c1.09065,3.54049 1.33011,7.13302 2.48433,10.66266c0.81245,2.48448 2.5308,4.917 3.31813,7.40431c1.48619,4.69506 1.48366,9.52281 1.71137,14.21503c0.32776,2.25028 0.10631,4.39942 0.00736,6.60975c-0.02429,0.54266 0.28888,1.09302 0.26382,1.63563c-0.01269,0.27488 -0.68173,0.55435 -0.37558,0.78529c0.41549,0.31342 1.34191,0.22213 1.95781,0.40826c3.13684,0.94799 6.06014,2.26892 8.81088,3.52298l1.66093,0.59519c0,0 6.76155,1.40187 4.48187,3.39177z", "fill", "none", "stroke", "#000000", "stroke-width", "7"], [1, "bod"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "144.10576", "height", "144.91623", "viewBox", "0,0,144.10576,144.91623"], ["transform", "translate(-164.41679,-112.94712)"], ["d", "M166.9168,184.02633c0,-36.49454 35.0206,-66.07921 72.05288,-66.07921c37.03228,0 67.05288,29.58467 67.05288,66.07921c0,6.94489 -1.08716,13.63956 -3.10292,19.92772c-2.71464,8.46831 -7.1134,16.19939 -12.809,22.81158c-2.31017,2.68194 -7.54471,12.91599 -7.54471,12.91599c0,0 -5.46714,-1.18309 -8.44434,0.6266c-3.86867,2.35159 -10.95356,10.86714 -10.95356,10.86714c0,0 -6.96906,-3.20396 -9.87477,-2.58085c-2.64748,0.56773 -6.72538,5.77072 -6.72538,5.77072c0,0 -5.5023,-4.25969 -7.5982,-4.25969c-3.08622,0 -9.09924,3.48259 -9.09924,3.48259c0,0 -6.0782,-5.11244 -9.00348,-5.91884c-4.26461,-1.17561 -12.23343,0.75049 -12.23343,0.75049c0,0 -5.18164,-8.26065 -7.60688,-9.90388c-3.50443,-2.37445 -8.8271,-3.95414 -8.8271,-3.95414c0,0 -5.33472,-8.81718 -7.27019,-11.40895c-4.81099,-6.44239 -13.46422,-9.83437 -15.65729,-17.76175c-1.53558,-5.55073 -2.35527,-21.36472 -2.35527,-21.36472z", "fill", "#191e2e", "stroke", "#000000", "stroke-width", "5", "stroke-linecap", "butt"], ["d", "M167.94713,180c0,-37.03228 35.0206,-67.05288 72.05288,-67.05288c37.03228,0 67.05288,30.0206 67.05288,67.05288c0,7.04722 -1.08716,13.84053 -3.10292,20.22135c-2.71464,8.59309 -7.1134,16.43809 -12.809,23.14771c-2.31017,2.72146 -7.54471,13.1063 -7.54471,13.1063c0,0 -5.46714,-1.20052 -8.44434,0.63584c-3.86867,2.38624 -10.95356,11.02726 -10.95356,11.02726c0,0 -6.96906,-3.25117 -9.87477,-2.61888c-2.64748,0.5761 -6.72538,5.85575 -6.72538,5.85575c0,0 -5.5023,-4.32246 -7.5982,-4.32246c-3.08622,0 -9.09924,3.5339 -9.09924,3.5339c0,0 -6.0782,-5.18777 -9.00348,-6.00605c-4.26461,-1.19293 -12.23343,0.76155 -12.23343,0.76155c0,0 -5.18164,-8.38236 -7.60688,-10.04981c-3.50443,-2.40943 -8.8271,-4.0124 -8.8271,-4.0124c0,0 -5.33472,-8.9471 -7.27019,-11.57706c-4.81099,-6.53732 -13.46422,-9.97928 -15.65729,-18.02347c-1.53558,-5.63252 -2.35527,-21.67953 -2.35527,-21.67953z", "fill", "#191e2e", "stroke", "none", "stroke-width", "0", "stroke-linecap", "butt"], ["d", "M216.22445,188.06994c0,0 1.02834,11.73245 -3.62335,21.11235c-4.65169,9.3799 -13.06183,10.03776 -13.06183,10.03776c0,0 7.0703,-3.03121 10.89231,-10.7381c4.34839,-8.76831 5.79288,-20.41201 5.79288,-20.41201z", "fill", "none", "stroke", "#2f3a50", "stroke-width", "3", "stroke-linecap", "round"], [1, "head"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "115.68559", "height", "88.29441", "viewBox", "0,0,115.68559,88.29441"], ["transform", "translate(-191.87889,-75.62023)"], ["d", "M195.12889,128.77752c0,-26.96048 21.33334,-48.81626 47.64934,-48.81626c26.316,0 47.64935,21.85578 47.64935,48.81626c0,0.60102 -9.22352,20.49284 -9.22352,20.49284l-7.75885,0.35623l-7.59417,6.15039l-8.64295,-1.74822l-11.70703,6.06119l-6.38599,-4.79382l-6.45999,2.36133l-7.01451,-7.38888l-8.11916,1.29382l-6.19237,-6.07265l-7.6263,-1.37795l-4.19835,-7.87062l-4.24236,-4.16907c0,0 -0.13314,-2.0999 -0.13314,-3.29458z", "fill", "none", "stroke", "#2f3a50", "stroke-width", "6", "stroke-linecap", "butt"], ["d", "M195.31785,124.43649c0,-26.96048 21.33334,-48.81626 47.64934,-48.81626c26.316,0 47.64935,21.85578 47.64935,48.81626c0,1.03481 -0.08666,2.8866 -0.08666,2.8866c0,0 16.8538,15.99287 16.21847,17.23929c-0.66726,1.30905 -23.05667,-4.14265 -23.05667,-4.14265l-2.29866,4.5096l-7.75885,0.35623l-7.59417,6.15039l-8.64295,-1.74822l-11.70703,6.06119l-6.38599,-4.79382l-6.45999,2.36133l-7.01451,-7.38888l-8.11916,1.29382l-6.19237,-6.07265l-7.6263,-1.37795l-4.19835,-7.87062l-4.24236,-4.16907c0,0 -0.13314,-2.0999 -0.13314,-3.29458z", "fill", "#191e2e", "stroke-opacity", "0.48627", "stroke", "#ffffff", "stroke-width", "0", "stroke-linecap", "butt"], ["d", "M271.10348,122.46768l10.06374,-3.28166l24.06547,24.28424", "fill", "none", "stroke", "#2f3a50", "stroke-width", "6", "stroke-linecap", "round"], ["d", "M306.56448,144.85764l-41.62024,-8.16845l2.44004,-7.87698", "fill", "none", "stroke", "#000000", "stroke-width", "3.5", "stroke-linecap", "round"], ["d", "M276.02738,115.72434c-0.66448,-4.64715 2.56411,-8.95308 7.21127,-9.61756c4.64715,-0.66448 8.95309,2.56411 9.61757,7.21126c0.46467,3.24972 -1.94776,8.02206 -5.96624,9.09336c-2.11289,-1.73012 -5.08673,-5.03426 -5.08673,-5.03426c0,0 -4.12095,1.16329 -4.60481,1.54229c-0.16433,-0.04891 -0.62732,-0.38126 -0.72803,-0.61269c-0.30602,-0.70328 -0.36302,-2.02286 -0.44303,-2.58239z", "fill", "#ffffff", "stroke", "none", "stroke-width", "0.5", "stroke-linecap", "butt"], ["d", "M242.49281,125.6424c0,-4.69442 3.80558,-8.5 8.5,-8.5c4.69442,0 8.5,3.80558 8.5,8.5c0,4.69442 -3.80558,8.5 -8.5,8.5c-4.69442,0 -8.5,-3.80558 -8.5,-8.5z", "fill", "#ffffff", "stroke", "none", "stroke-width", "0.5", "stroke-linecap", "butt"], ["id", "gnd", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "475", "height", "530", "viewBox", "0,0,163.40011,85.20095"], ["transform", "translate(-176.25,-207.64957)"], ["stroke", "#000000", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-miterlimit", "10"], ["d", "M295.5,273.1829c0,0 -57.38915,6.69521 -76.94095,-9.01465c-13.65063,-10.50609 15.70098,-20.69467 -2.5451,-19.94465c-30.31027,2.05753 -38.51396,-26.84135 -38.51396,-26.84135c0,0 6.50084,13.30023 18.93224,19.17888c9.53286,4.50796 26.23632,-1.02541 32.09529,4.95137c3.62417,3.69704 2.8012,6.33005 0.66517,8.49452c-3.79415,3.84467 -11.7312,6.21103 -6.24682,10.43645c22.01082,16.95812 72.55412,12.73944 72.55412,12.73944z", "fill", "#000000"], ["d", "M338.92138,217.76285c0,0 -17.49626,12.55408 -45.36424,10.00353c-8.39872,-0.76867 -17.29557,-6.23066 -17.29557,-6.23066c0,0 3.06461,-2.23972 15.41857,0.72484c26.30467,6.31228 47.24124,-4.49771 47.24124,-4.49771z", "fill", "#000000"], ["d", "M209.14443,223.00182l1.34223,15.4356l-10.0667,-15.4356", "fill", "none"], ["d", "M198.20391,230.41806l12.95386,7.34824l6.71113,-12.08004", "fill", "none"], ["d", "M211.19621,238.53825l8.5262,-6.09014", "fill", "none"], ["d", "M317.57068,215.80173l5.27812,6.49615l0.40601,-13.39831", "fill", "none"], ["d", "M323.66082,222.70389l6.09014,-9.33822", "fill", "none"], [1, "loading-message"], ["class", "loading-module", 4, "ngIf"], [1, "theme-toggle", 3, "click"], [1, "particle", 3, "ngStyle"], [1, "stars-container"], [1, "star", "star-1"], [1, "star", "star-2"], [1, "star", "star-3"], [1, "star", "star-4"], [1, "star", "star-5"], [1, "star", "star-6"], [1, "star", "star-7"], [1, "star", "star-8"], [1, "loading-module"], [1, "pi", "pi-folder-open"]],
    template: function LoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 0)(1, "linearGradient", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "stop", 2)(3, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoadingComponent_div_4_Template, 47, 15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, ctx.loading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  --color-bod: url(#gradiente-paloma);\n  --color-head: url(#gradiente-paloma);\n  --color-legs: #8a2be2;\n  --color-legs-stroke: #8a2be2;\n  --color-eye-pupil: #ffffff;\n  --color-eye-iris: #000000;\n  --overlay-bg: rgba(0, 0, 0, 0.6);\n  --message-color: white;\n}\n.loading-module[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.loading-module[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--overlay-bg);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999999;\n  color: var(--message-color);\n  font-family: 'Segoe UI', Arial, sans-serif;\n  transition: background 0.3s ease, -webkit-backdrop-filter 0.3s ease;\n  transition: background 0.3s ease, backdrop-filter 0.3s ease;\n  transition: background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease;\n  \n\n}\n.loading-overlay.dark-mode[_ngcontent-%COMP%] {\n  --overlay-bg: rgba(15, 23, 42, 0.85);\n  --message-color: #e2e8f0;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%] {\n  \n\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: repeating-linear-gradient(180deg, rgba(255, 209, 0, 0.15) 0px, rgba(255, 209, 0, 0.15) 33.33%, rgba(0, 51, 160, 0.15) 33.33%, rgba(0, 51, 160, 0.15) 66.66%, rgba(206, 17, 38, 0.15) 66.66%, rgba(206, 17, 38, 0.15) 100%);\n  pointer-events: none;\n  z-index: 1;\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 2;\n  overflow: hidden;\n}\n\n\n.star[_ngcontent-%COMP%] {\n  position: absolute;\n  color: rgba(255, 215, 0, 0.9);\n  font-size: 20px;\n  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);\n  animation: _ngcontent-%COMP%_starTwinkle 3s infinite alternate ease-in-out;\n  transform-origin: center;\n}\n\n\n@keyframes _ngcontent-%COMP%_starTwinkle {\n  0% {\n    opacity: 0.3;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n\n\n.particles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n.particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_floatParticle 8s infinite ease-in-out;\n  filter: blur(1px);\n}\n@keyframes _ngcontent-%COMP%_floatParticle {\n  0% {\n    transform: translate(0, 0) scale(1);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.8;\n  }\n  90% {\n    opacity: 0.8;\n  }\n  100% {\n    transform: translate(calc(100vw - 100%), calc(100vh - 100%)) scale(2);\n    opacity: 0;\n  }\n}\n.loader[_ngcontent-%COMP%] {\n  scale: 0.85;\n  position: relative;\n  width: 200px;\n  height: 200px;\n  translate: 10px -20px;\n  cursor: pointer;\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 10;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.loader[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.loader[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.loader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.2s ease;\n}\n.loader.venezuela[_ngcontent-%COMP%] {\n  --color-bod: #FFD100;\n  --color-head: #0033A0;\n  --color-legs: #CE1126;\n  --color-legs-stroke: #CE1126;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  translate: 27px -30px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_bob 1.2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);\n  transform-origin: center;\n}\n.loader[_ngcontent-%COMP%]   .bod[_ngcontent-%COMP%] {\n  translate: 0px 30px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_bob 1.2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) reverse;\n}\n.loader[_ngcontent-%COMP%]   .legr[_ngcontent-%COMP%] {\n  translate: 75px 135px;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_rstep 0.9s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  animation-delay: 0.2s;\n}\n.loader[_ngcontent-%COMP%]   .legl[_ngcontent-%COMP%] {\n  translate: 30px 155px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_lstep 0.9s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.loader[_ngcontent-%COMP%]   .bod[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#191e2e\"][_ngcontent-%COMP%], \n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#191e2e\"][_ngcontent-%COMP%] {\n  fill: var(--color-bod);\n  transition: fill 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[stroke=\"#2f3a50\"][_ngcontent-%COMP%] {\n  stroke: var(--color-head);\n  transition: stroke 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .legl[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], \n.loader[_ngcontent-%COMP%]   .legr[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-legs-stroke) !important;\n  transition: stroke 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#ffffff\"][_ngcontent-%COMP%] {\n  fill: var(--color-eye-pupil);\n}\n@keyframes _ngcontent-%COMP%_bob {\n  0%,\n  100% {\n    transform: translateY(0) rotate(2deg);\n  }\n  25% {\n    transform: translateY(-3px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0) rotate(-2deg);\n  }\n  75% {\n    transform: translateY(3px) rotate(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_lstep {\n  0% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  30% {\n    transform: translateY(-10px) translateX(25px) rotate(30deg);\n  }\n  60% {\n    transform: translateY(0) translateX(20px) rotate(-20deg);\n  }\n  100% {\n    transform: translateY(0) rotate(-5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rstep {\n  0% {\n    transform: translateY(0) translateX(0) rotate(-5deg);\n  }\n  30% {\n    transform: translateY(-8px) translateX(25px) rotate(35deg);\n  }\n  60% {\n    transform: translateY(0) translateX(15px) rotate(-25deg);\n  }\n  100% {\n    transform: translateY(0) translateX(0) rotate(-5deg);\n  }\n}\n.loader[_ngcontent-%COMP%]::after {\n  content: var(--texto-sigpaz);\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Arial', sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n  background: linear-gradient(135deg, #8a2be2, #4a90e2, #67b26f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 1;\n  transition: transform 0.3s ease;\n  pointer-events: none;\n  white-space: nowrap;\n  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);\n  letter-spacing: 4px;\n  z-index: 10;\n}\n.loader.venezuela[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #FFD100, #0033A0, #CE1126);\n}\n.loader[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(-50%) scale(1.1);\n}\n.loader[_ngcontent-%COMP%]   #gnd[_ngcontent-%COMP%] {\n  translate: -140px 0;\n  rotate: 10deg;\n  z-index: -1;\n  filter: blur(0.8px) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_scroll 6s infinite linear;\n}\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateY(20px) translateX(40px);\n    opacity: 0;\n  }\n  20% {\n    opacity: 0.4;\n  }\n  80% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: translateY(-60px) translateX(-120px);\n    opacity: 0;\n  }\n}\n\n\n.loading-message[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  \n\n  font-size: 1.3rem;\n  font-weight: 500;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_messagePulse 2s infinite ease-in-out;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 24px;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s;\n  z-index: 10;\n}\n.loading-message[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.5);\n  transform: scale(1.02);\n}\n@keyframes _ngcontent-%COMP%_messagePulse {\n  0%,\n  100% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n}\n\n\n.theme-toggle[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 12px 30px;\n  font-size: 16px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  border-radius: 40px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  letter-spacing: 1px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n}\n.theme-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n\n\n@media (max-width: 768px) {\n  .loader[_ngcontent-%COMP%] {\n    scale: 0.6;\n  }\n  .loader[_ngcontent-%COMP%]::after {\n    font-size: 24px;\n    top: -40px;\n  }\n  .loading-message[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    font-size: 1.1rem;\n    padding: 8px 18px;\n  }\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .stars-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  font-size: 26px;\n  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out;\n  transform-origin: center;\n  font-weight: normal;\n}\n\n\n\n\n\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-1[_ngcontent-%COMP%] {\n  left: 8%;\n  top: 52%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-2[_ngcontent-%COMP%] {\n  left: 21%;\n  top: 48%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-3[_ngcontent-%COMP%] {\n  left: 34%;\n  top: 45.5%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-4[_ngcontent-%COMP%] {\n  left: 47%;\n  top: 44.5%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-5[_ngcontent-%COMP%] {\n  left: 60%;\n  top: 44.5%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-6[_ngcontent-%COMP%] {\n  left: 73%;\n  top: 45.5%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-7[_ngcontent-%COMP%] {\n  left: 86%;\n  top: 48%;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-8[_ngcontent-%COMP%] {\n  left: 99%;\n  top: 52%;\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-2[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-3[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-4[_ngcontent-%COMP%] {\n  animation-delay: 0.9s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-5[_ngcontent-%COMP%] {\n  animation-delay: 1.2s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-6[_ngcontent-%COMP%] {\n  animation-delay: 1.5s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-7[_ngcontent-%COMP%] {\n  animation-delay: 1.8s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-8[_ngcontent-%COMP%] {\n  animation-delay: 2.1s;\n}\n\n\n@keyframes _ngcontent-%COMP%_starTwinkle {\n  0% {\n    opacity: 0.4;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_starAppear {\n  0% {\n    opacity: 0;\n    transform: scale(0) rotate(0deg);\n  }\n  50% {\n    transform: scale(1.3) rotate(180deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) rotate(360deg);\n  }\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 0.6s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 0.3s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 0.9s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 0.6s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 1.2s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 0.9s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 1.5s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-5[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 1.2s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 1.8s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-6[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 1.5s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 2.1s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-7[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 1.8s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 2.4s;\n}\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star-8[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starAppear 0.6s ease-out 2.1s forwards, _ngcontent-%COMP%_starTwinkle 2s infinite alternate ease-in-out 2.7s;\n}\n\n\n.loading-overlay.venezuela[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0);\n}\n\n\n.particles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n.particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_floatParticle 8s infinite ease-in-out;\n  filter: blur(1px);\n}\n@keyframes _ngcontent-%COMP%_floatParticle {\n  0% {\n    transform: translate(0, 0) scale(1);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.8;\n  }\n  90% {\n    opacity: 0.8;\n  }\n  100% {\n    transform: translate(calc(100vw - 100%), calc(100vh - 100%)) scale(2);\n    opacity: 0;\n  }\n}\n.loader[_ngcontent-%COMP%] {\n  scale: 0.85;\n  position: relative;\n  width: 200px;\n  height: 200px;\n  translate: 10px -20px;\n  cursor: pointer;\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 10;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.loader[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.loader[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.loader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.2s ease;\n}\n.loader.venezuela[_ngcontent-%COMP%] {\n  --color-bod: #FFD100;\n  --color-head: #0033A0;\n  --color-legs: #CE1126;\n  --color-legs-stroke: #CE1126;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  translate: 27px -30px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_bob 1.2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);\n  transform-origin: center;\n}\n.loader[_ngcontent-%COMP%]   .bod[_ngcontent-%COMP%] {\n  translate: 0px 30px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_bob 1.2s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) reverse;\n}\n.loader[_ngcontent-%COMP%]   .legr[_ngcontent-%COMP%] {\n  translate: 75px 135px;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_rstep 0.9s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  animation-delay: 0.2s;\n}\n.loader[_ngcontent-%COMP%]   .legl[_ngcontent-%COMP%] {\n  translate: 30px 155px;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_lstep 0.9s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.loader[_ngcontent-%COMP%]   .bod[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#191e2e\"][_ngcontent-%COMP%], \n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#191e2e\"][_ngcontent-%COMP%] {\n  fill: var(--color-bod);\n  transition: fill 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[stroke=\"#2f3a50\"][_ngcontent-%COMP%] {\n  stroke: var(--color-head);\n  transition: stroke 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .legl[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], \n.loader[_ngcontent-%COMP%]   .legr[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: var(--color-legs-stroke) !important;\n  transition: stroke 0.4s ease;\n}\n.loader[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[fill=\"#ffffff\"][_ngcontent-%COMP%] {\n  fill: var(--color-eye-pupil);\n}\n@keyframes _ngcontent-%COMP%_bob {\n  0%,\n  100% {\n    transform: translateY(0) rotate(2deg);\n  }\n  25% {\n    transform: translateY(-3px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(0) rotate(-2deg);\n  }\n  75% {\n    transform: translateY(3px) rotate(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_lstep {\n  0% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  30% {\n    transform: translateY(-10px) translateX(25px) rotate(30deg);\n  }\n  60% {\n    transform: translateY(0) translateX(20px) rotate(-20deg);\n  }\n  100% {\n    transform: translateY(0) rotate(-5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rstep {\n  0% {\n    transform: translateY(0) translateX(0) rotate(-5deg);\n  }\n  30% {\n    transform: translateY(-8px) translateX(25px) rotate(35deg);\n  }\n  60% {\n    transform: translateY(0) translateX(15px) rotate(-25deg);\n  }\n  100% {\n    transform: translateY(0) translateX(0) rotate(-5deg);\n  }\n}\n.loader[_ngcontent-%COMP%]::after {\n  content: var(--texto-sigpaz);\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: 'Arial', sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n  background: linear-gradient(135deg, #8a2be2, #4a90e2, #67b26f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 1;\n  transition: transform 0.3s ease;\n  pointer-events: none;\n  white-space: nowrap;\n  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);\n  letter-spacing: 4px;\n  z-index: 10;\n}\n.loader.venezuela[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #FFD100, #0033A0, #CE1126);\n}\n.loader[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(-50%) scale(1.1);\n}\n.loader[_ngcontent-%COMP%]   #gnd[_ngcontent-%COMP%] {\n  translate: -140px 0;\n  rotate: 10deg;\n  z-index: -1;\n  filter: blur(0.8px) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_scroll 6s infinite linear;\n}\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateY(20px) translateX(40px);\n    opacity: 0;\n  }\n  20% {\n    opacity: 0.4;\n  }\n  80% {\n    opacity: 0.4;\n  }\n  100% {\n    transform: translateY(-60px) translateX(-120px);\n    opacity: 0;\n  }\n}\n\n\n.loading-message[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  font-size: 1.3rem;\n  font-weight: 500;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_messagePulse 2s infinite ease-in-out;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 24px;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s;\n  z-index: 10;\n}\n.loading-message[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.5);\n  transform: scale(1.02);\n}\n@keyframes _ngcontent-%COMP%_messagePulse {\n  0%,\n  100% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n}\n\n\n.theme-toggle[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 12px 30px;\n  font-size: 16px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  border-radius: 40px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  letter-spacing: 1px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);\n}\n.theme-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n\n\n@media (max-width: 768px) {\n  .loader[_ngcontent-%COMP%] {\n    scale: 0.6;\n  }\n  .loader[_ngcontent-%COMP%]::after {\n    font-size: 24px;\n    top: -40px;\n  }\n  .loading-message[_ngcontent-%COMP%] {\n    margin-top: 60px;\n    font-size: 1.1rem;\n    padding: 8px 18px;\n  }\n  .loading-overlay.venezuela[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQVBBO0VBVUksZUFBQTtBQUFKO0FBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxtRUFBQTtFQUFBLDJEQUFBO0VBQUEsOEZBQUE7RUFGQSxzRUFBc0U7QUFDeEU7QUFHRTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUFESjtBQUtFO0VBSEEsZ0VBQWdFO0FBQ2xFO0FBR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc09BQUE7RUFTQSxvQkFBQTtFQUNBLFVBQUE7QUFUTjtBQUNBLDhEQUE4RDtBQWdCOUQ7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWRGO0FBQ0EsMENBQTBDO0FBaUIxQztFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSx3REFBQTtFQUNBLHdCQUFBO0FBZkY7QUFDQSw2Q0FB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QSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFxRUY7QUFuRUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FBcUVKO0FBakVBO0VBQ0U7O0lBQVcsWUFBQTtJQUFjLG1CQUFBO0VBc0V6QjtFQXJFQTtJQUFNLFVBQUE7SUFBWSxzQkFBQTtFQXlFbEI7QUFDRjtBQUNBLGtCQUFrQjtBQXZFbEI7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQXlFRjtBQXZFRTtFQUNFLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0FBeUVKO0FBdEVFO0VBQ0Usb0NBQUE7QUF3RUo7QUFDQSxlQUFlO0FBcEVmO0VBQ0U7SUFDRSxVQUFBO0VBc0VGO0VBcEVFO0lBQ0UsZUFBQTtJQUNBLFVBQUE7RUFzRUo7RUFsRUE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFvRUY7RUFqRUE7SUFDRSxlQUFBO0VBbUVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tY29sb3ItYm9kOiB1cmwoI2dyYWRpZW50ZS1wYWxvbWEpO1xuICAtLWNvbG9yLWhlYWQ6IHVybCgjZ3JhZGllbnRlLXBhbG9tYSk7XG4gIC0tY29sb3ItbGVnczogIzhhMmJlMjtcbiAgLS1jb2xvci1sZWdzLXN0cm9rZTogIzhhMmJlMjtcbiAgLS1jb2xvci1leWUtcHVwaWw6ICNmZmZmZmY7XG4gIC0tY29sb3ItZXllLWlyaXM6ICMwMDAwMDA7XG4gIC0tb3ZlcmxheS1iZzogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAtLW1lc3NhZ2UtY29sb3I6IHdoaXRlO1xufVxuXG4ubG9hZGluZy1tb2R1bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW92ZXJsYXktYmcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIGNvbG9yOiB2YXIoLS1tZXNzYWdlLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSwgYmFja2Ryb3AtZmlsdGVyIDAuM3MgZWFzZTtcblxuICAmLmRhcmstbW9kZSB7XG4gICAgLS1vdmVybGF5LWJnOiByZ2JhKDE1LCAyMywgNDIsIDAuODUpO1xuICAgIC0tbWVzc2FnZS1jb2xvcjogI2UyZThmMDtcbiAgfVxuXG4gIC8qIEZvbmRvIGRlIGJhbmRlcmEgZGUgVmVuZXp1ZWxhIChzaW4gZXN0cmVsbGFzIGVuIHBzZXVkby1lbGVtZW50b3MpICovXG4gICYudmVuZXp1ZWxhIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyMDksIDAsIDAuMTUpIDBweCxcbiAgICAgICAgcmdiYSgyNTUsIDIwOSwgMCwgMC4xNSkgMzMuMzMlLFxuICAgICAgICByZ2JhKDAsIDUxLCAxNjAsIDAuMTUpIDMzLjMzJSxcbiAgICAgICAgcmdiYSgwLCA1MSwgMTYwLCAwLjE1KSA2Ni42NiUsXG4gICAgICAgIHJnYmEoMjA2LCAxNywgMzgsIDAuMTUpIDY2LjY2JSxcbiAgICAgICAgcmdiYSgyMDYsIDE3LCAzOCwgMC4xNSkgMTAwJVxuICAgICAgKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAvKiBFbGltaW5hZG8gZWwgcHNldWRvLWVsZW1lbnRvIDo6YWZ0ZXIgY29uIHRleHRvIGRlIGVzdHJlbGxhcyAqL1xuICB9XG59XG5cbi8qIENvbnRlbmVkb3IgZGUgZXN0cmVsbGFzIHJlYWxlcyAoc29sbyBwYXJhIHRlbWEgVmVuZXp1ZWxhKSAqL1xuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXJzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRXN0aWxvcyBkZSBsYXMgZXN0cmVsbGFzIGluZGl2aWR1YWxlcyAqL1xuLnN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjE1LCAwLCAwLjkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuNik7XG4gIGFuaW1hdGlvbjogc3RhclR3aW5rbGUgM3MgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi8qIEFuaW1hY2nDg8KzbiBkZSBwYXJwYWRlbyBwYXJhIGxhcyBlc3RyZWxsYXMgKi9cbkBrZXlmcmFtZXMgc3RhclR3aW5rbGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4vKiBQYXJ0w4PCrWN1bGFzIGRlIGZvbmRvICovXG4ucGFydGljbGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuXG4gIC5wYXJ0aWNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGZsb2F0UGFydGljbGUgOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgZmlsdGVyOiBibHVyKDFweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdFBhcnRpY2xlIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgb3BhY2l0eTogMDsgfVxuICAxMCUgeyBvcGFjaXR5OiAwLjg7IH1cbiAgOTAlIHsgb3BhY2l0eTogMC44OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMHZ3IC0gMTAwJSksIGNhbGMoMTAwdmggLSAxMDAlKSkgc2NhbGUoMik7IG9wYWNpdHk6IDA7IH1cbn1cblxuLmxvYWRlciB7XG4gIHNjYWxlOiAwLjg1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdHJhbnNsYXRlOiAxMHB4IC0yMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgei1pbmRleDogMTA7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuXG4gIC8qIFRlbWEgVmVuZXp1ZWxhIHBhcmEgbGEgcGFsb21hICovXG4gICYudmVuZXp1ZWxhIHtcbiAgICAtLWNvbG9yLWJvZDogI0ZGRDEwMDtcbiAgICAtLWNvbG9yLWhlYWQ6ICMwMDMzQTA7XG4gICAgLS1jb2xvci1sZWdzOiAjQ0UxMTI2O1xuICAgIC0tY29sb3ItbGVncy1zdHJva2U6ICNDRTExMjY7XG4gIH1cblxuICAvKiBQYXJ0ZXMgZGUgbGEgcGFsb21hICovXG4gIC5oZWFkIHtcbiAgICB0cmFuc2xhdGU6IDI3cHggLTMwcHg7XG4gICAgei1pbmRleDogMztcbiAgICBhbmltYXRpb246IGJvYiAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIH1cblxuICAuYm9kIHtcbiAgICB0cmFuc2xhdGU6IDBweCAzMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYW5pbWF0aW9uOiBib2IgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgcmV2ZXJzZTtcbiAgfVxuXG4gIC5sZWdyIHtcbiAgICB0cmFuc2xhdGU6IDc1cHggMTM1cHg7XG4gICAgei1pbmRleDogMDtcbiAgICBhbmltYXRpb246IHJzdGVwIDAuOXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgfVxuXG4gIC5sZWdsIHtcbiAgICB0cmFuc2xhdGU6IDMwcHggMTU1cHg7XG4gICAgei1pbmRleDogMztcbiAgICBhbmltYXRpb246IGxzdGVwIDAuOXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICB9XG5cbiAgLyogQXBsaWNhciBjb2xvcmVzICovXG4gIC5ib2Qgc3ZnIHBhdGhbZmlsbD1cIiMxOTFlMmVcIl0sXG4gIC5oZWFkIHN2ZyBwYXRoW2ZpbGw9XCIjMTkxZTJlXCJdIHtcbiAgICBmaWxsOiB2YXIoLS1jb2xvci1ib2QpO1xuICAgIHRyYW5zaXRpb246IGZpbGwgMC40cyBlYXNlO1xuICB9XG5cbiAgLmhlYWQgc3ZnIHBhdGhbc3Ryb2tlPVwiIzJmM2E1MFwiXSB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1oZWFkKTtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC40cyBlYXNlO1xuICB9XG5cbiAgLmxlZ2wgcGF0aCxcbiAgLmxlZ3IgcGF0aCB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1sZWdzLXN0cm9rZSkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC40cyBlYXNlO1xuICB9XG5cbiAgLmhlYWQgc3ZnIHBhdGhbZmlsbD1cIiNmZmZmZmZcIl0ge1xuICAgIGZpbGw6IHZhcigtLWNvbG9yLWV5ZS1wdXBpbCk7XG4gIH1cblxuICAvKiBBbmltYWNpb25lcyAqL1xuICBAa2V5ZnJhbWVzIGJvYiB7XG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDJkZWcpOyB9XG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTJkZWcpOyB9XG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCkgcm90YXRlKDBkZWcpOyB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGxzdGVwIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTVkZWcpOyB9XG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSB0cmFuc2xhdGVYKDI1cHgpIHJvdGF0ZSgzMGRlZyk7IH1cbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgyMHB4KSByb3RhdGUoLTIwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC01ZGVnKTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyByc3RlcCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTVkZWcpOyB9XG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHRyYW5zbGF0ZVgoMjVweCkgcm90YXRlKDM1ZGVnKTsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSgtMjVkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNWRlZyk7IH1cbiAgfVxuXG4gIC8qIFRleHRvIFNJR1BBWiBzaWVtcHJlIHZpc2libGUgZW4gbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHZhcigtLXRleHRvLXNpZ3Bheik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGEyYmUyLCAjNGE5MGUyLCAjNjdiMjZmKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtc2hhZG93OiAycHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAmLnZlbmV6dWVsYTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkQxMDAsICMwMDMzQTAsICNDRTExMjYpO1xuICB9XG5cbiAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjEpO1xuICB9XG5cbiAgLyogU3VlbG8gYW5pbWFkbyAqL1xuICAjZ25kIHtcbiAgICB0cmFuc2xhdGU6IC0xNDBweCAwO1xuICAgIHJvdGF0ZTogMTBkZWc7XG4gICAgei1pbmRleDogLTE7XG4gICAgZmlsdGVyOiBibHVyKDAuOHB4KSBkcm9wLXNoYWRvdygycHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBhbmltYXRpb246IHNjcm9sbCA2cyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgdHJhbnNsYXRlWCg0MHB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDIwJSB7IG9wYWNpdHk6IDAuNDsgfVxuICAgIDgwJSB7IG9wYWNpdHk6IDAuNDsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwcHgpIHRyYW5zbGF0ZVgoLTEyMHB4KTsgb3BhY2l0eTogMDsgfVxuICB9XG59XG5cbi8qIE1lbnNhamUgZGUgY2FyZ2EgZGluw4PCoW1pY28gKi9cbi5sb2FkaW5nLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiA4MHB4OyAgLyogQXVtZW50YWRvIHBhcmEgZGVqYXIgZXNwYWNpbyBhbCB0ZXh0byBTSUdQQVogKi9cbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGFuaW1hdGlvbjogbWVzc2FnZVB1bHNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHotaW5kZXg6IDEwO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbWVzc2FnZVB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjk7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxufVxuXG4vKiBCb3TDg8KzbiBkZSB0ZW1hICovXG4udGhlbWUtdG9nZ2xlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk4KTtcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvYWRlciB7XG4gICAgc2NhbGU6IDAuNjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIHRvcDogLTQwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxvYWRpbmctbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgfVxufVxuXG5cblxuXG4vKiBDb250ZW5lZG9yIGRlIGVzdHJlbGxhcyAtIGNlbnRyYWRvIGVuIGxhIGZyYW5qYSBhenVsICovXG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3RhcnMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogRXN0aWxvcyBkZSBsYXMgZXN0cmVsbGFzIGluZGl2aWR1YWxlcyAqL1xuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGFuaW1hdGlvbjogc3RhclR3aW5rbGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qXG4gIFBvc2ljaW9uZXMgZGUgbGFzIDggZXN0cmVsbGFzIGVuIGZvcm1hIGRlIGN1cnZhIChwYXLDg8KhYm9sYSlcbiAgQ2VudHJhZGFzIGVuIGxhIGZyYW5qYSBhenVsICgzMy4zMyUgYSA2Ni42NiUgZGUgbGEgYWx0dXJhKVxuICBMYSBjdXJ2YSBjb21pZW56YSBlbiBlbCBleHRyZW1vIGl6cXVpZXJkbyB5IHRlcm1pbmEgZW4gZWwgZXh0cmVtbyBkZXJlY2hvXG4gIExhIGVzdHJlbGxhIG3Dg8KhcyBhbHRhIGVzdMODwqEgZW4gZWwgY2VudHJvIChwb3NpY2nDg8KzbiA0IHkgNSlcbiovXG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0xIHsgbGVmdDogOCU7IHRvcDogNTIlOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0yIHsgbGVmdDogMjElOyB0b3A6IDQ4JTsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItMyB7IGxlZnQ6IDM0JTsgdG9wOiA0NS41JTsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNCB7IGxlZnQ6IDQ3JTsgdG9wOiA0NC41JTsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNSB7IGxlZnQ6IDYwJTsgdG9wOiA0NC41JTsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNiB7IGxlZnQ6IDczJTsgdG9wOiA0NS41JTsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNyB7IGxlZnQ6IDg2JTsgdG9wOiA0OCU7IH1cbi5sb2FkaW5nLW92ZXJsYXkudmVuZXp1ZWxhIC5zdGFyLTggeyBsZWZ0OiA5OSU7IHRvcDogNTIlOyB9XG5cbi8qIFJldHJhc29zIGRlIGFuaW1hY2nDg8KzbiBwYXJhIGVmZWN0byBzZWN1ZW5jaWFsIGRlIGl6cXVpZXJkYSBhIGRlcmVjaGEgKi9cbi5sb2FkaW5nLW92ZXJsYXkudmVuZXp1ZWxhIC5zdGFyLTEgeyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0yIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0zIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci00IHsgYW5pbWF0aW9uLWRlbGF5OiAwLjlzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci01IHsgYW5pbWF0aW9uLWRlbGF5OiAxLjJzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci02IHsgYW5pbWF0aW9uLWRlbGF5OiAxLjVzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci03IHsgYW5pbWF0aW9uLWRlbGF5OiAxLjhzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci04IHsgYW5pbWF0aW9uLWRlbGF5OiAyLjFzOyB9XG5cbi8qIEFuaW1hY2nDg8KzbiBkZSBwYXJwYWRlbyBwYXJhIGxhcyBlc3RyZWxsYXMgKi9cbkBrZXlmcmFtZXMgc3RhclR3aW5rbGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4vKiBBbmltYWNpw4PCs24gZGUgYXBhcmljacODwrNuIHNlY3VlbmNpYWwgcGFyYSBjYWRhIGVzdHJlbGxhICovXG5Aa2V5ZnJhbWVzIHN0YXJBcHBlYXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogQXBsaWNhciBhbmltYWNpw4PCs24gZGUgYXBhcmljacODwrNuIHNlY3VlbmNpYWwgYWwgY2FyZ2FyICovXG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0xIHsgYW5pbWF0aW9uOiBzdGFyQXBwZWFyIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHMsIHN0YXJUd2lua2xlIDJzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dCAwLjZzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci0yIHsgYW5pbWF0aW9uOiBzdGFyQXBwZWFyIDAuNnMgZWFzZS1vdXQgMC4zcyBmb3J3YXJkcywgc3RhclR3aW5rbGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0IDAuOXM7IH1cbi5sb2FkaW5nLW92ZXJsYXkudmVuZXp1ZWxhIC5zdGFyLTMgeyBhbmltYXRpb246IHN0YXJBcHBlYXIgMC42cyBlYXNlLW91dCAwLjZzIGZvcndhcmRzLCBzdGFyVHdpbmtsZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQgMS4yczsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNCB7IGFuaW1hdGlvbjogc3RhckFwcGVhciAwLjZzIGVhc2Utb3V0IDAuOXMgZm9yd2FyZHMsIHN0YXJUd2lua2xlIDJzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dCAxLjVzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci01IHsgYW5pbWF0aW9uOiBzdGFyQXBwZWFyIDAuNnMgZWFzZS1vdXQgMS4ycyBmb3J3YXJkcywgc3RhclR3aW5rbGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0IDEuOHM7IH1cbi5sb2FkaW5nLW92ZXJsYXkudmVuZXp1ZWxhIC5zdGFyLTYgeyBhbmltYXRpb246IHN0YXJBcHBlYXIgMC42cyBlYXNlLW91dCAxLjVzIGZvcndhcmRzLCBzdGFyVHdpbmtsZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQgMi4xczsgfVxuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXItNyB7IGFuaW1hdGlvbjogc3RhckFwcGVhciAwLjZzIGVhc2Utb3V0IDEuOHMgZm9yd2FyZHMsIHN0YXJUd2lua2xlIDJzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dCAyLjRzOyB9XG4ubG9hZGluZy1vdmVybGF5LnZlbmV6dWVsYSAuc3Rhci04IHsgYW5pbWF0aW9uOiBzdGFyQXBwZWFyIDAuNnMgZWFzZS1vdXQgMi4xcyBmb3J3YXJkcywgc3RhclR3aW5rbGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0IDIuN3M7IH1cblxuLyogRXN0YWRvIGluaWNpYWwgcGFyYSBlc3RyZWxsYXMgKG9jdWx0YXMgaGFzdGEgYW5pbWFjacODwrNuKSAqL1xuLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4vKiBQYXJ0w4PCrWN1bGFzIGRlIGZvbmRvICovXG4ucGFydGljbGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuXG4gIC5wYXJ0aWNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGZsb2F0UGFydGljbGUgOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgZmlsdGVyOiBibHVyKDFweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdFBhcnRpY2xlIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgb3BhY2l0eTogMDsgfVxuICAxMCUgeyBvcGFjaXR5OiAwLjg7IH1cbiAgOTAlIHsgb3BhY2l0eTogMC44OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMHZ3IC0gMTAwJSksIGNhbGMoMTAwdmggLSAxMDAlKSkgc2NhbGUoMik7IG9wYWNpdHk6IDA7IH1cbn1cblxuLmxvYWRlciB7XG4gIHNjYWxlOiAwLjg1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdHJhbnNsYXRlOiAxMHB4IC0yMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgei1pbmRleDogMTA7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuXG4gIC8qIFRlbWEgVmVuZXp1ZWxhIHBhcmEgbGEgcGFsb21hICovXG4gICYudmVuZXp1ZWxhIHtcbiAgICAtLWNvbG9yLWJvZDogI0ZGRDEwMDtcbiAgICAtLWNvbG9yLWhlYWQ6ICMwMDMzQTA7XG4gICAgLS1jb2xvci1sZWdzOiAjQ0UxMTI2O1xuICAgIC0tY29sb3ItbGVncy1zdHJva2U6ICNDRTExMjY7XG4gIH1cblxuICAvKiBQYXJ0ZXMgZGUgbGEgcGFsb21hICovXG4gIC5oZWFkIHtcbiAgICB0cmFuc2xhdGU6IDI3cHggLTMwcHg7XG4gICAgei1pbmRleDogMztcbiAgICBhbmltYXRpb246IGJvYiAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIH1cblxuICAuYm9kIHtcbiAgICB0cmFuc2xhdGU6IDBweCAzMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYW5pbWF0aW9uOiBib2IgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC40NSwgMC4wNSwgMC41NSwgMC45NSkgcmV2ZXJzZTtcbiAgfVxuXG4gIC5sZWdyIHtcbiAgICB0cmFuc2xhdGU6IDc1cHggMTM1cHg7XG4gICAgei1pbmRleDogMDtcbiAgICBhbmltYXRpb246IHJzdGVwIDAuOXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgfVxuXG4gIC5sZWdsIHtcbiAgICB0cmFuc2xhdGU6IDMwcHggMTU1cHg7XG4gICAgei1pbmRleDogMztcbiAgICBhbmltYXRpb246IGxzdGVwIDAuOXMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICB9XG5cbiAgLyogQXBsaWNhciBjb2xvcmVzICovXG4gIC5ib2Qgc3ZnIHBhdGhbZmlsbD1cIiMxOTFlMmVcIl0sXG4gIC5oZWFkIHN2ZyBwYXRoW2ZpbGw9XCIjMTkxZTJlXCJdIHtcbiAgICBmaWxsOiB2YXIoLS1jb2xvci1ib2QpO1xuICAgIHRyYW5zaXRpb246IGZpbGwgMC40cyBlYXNlO1xuICB9XG5cbiAgLmhlYWQgc3ZnIHBhdGhbc3Ryb2tlPVwiIzJmM2E1MFwiXSB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1oZWFkKTtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC40cyBlYXNlO1xuICB9XG5cbiAgLmxlZ2wgcGF0aCxcbiAgLmxlZ3IgcGF0aCB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1sZWdzLXN0cm9rZSkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UgMC40cyBlYXNlO1xuICB9XG5cbiAgLmhlYWQgc3ZnIHBhdGhbZmlsbD1cIiNmZmZmZmZcIl0ge1xuICAgIGZpbGw6IHZhcigtLWNvbG9yLWV5ZS1wdXBpbCk7XG4gIH1cblxuICAvKiBBbmltYWNpb25lcyAqL1xuICBAa2V5ZnJhbWVzIGJvYiB7XG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDJkZWcpOyB9XG4gICAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTJkZWcpOyB9XG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCkgcm90YXRlKDBkZWcpOyB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGxzdGVwIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTVkZWcpOyB9XG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSB0cmFuc2xhdGVYKDI1cHgpIHJvdGF0ZSgzMGRlZyk7IH1cbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgyMHB4KSByb3RhdGUoLTIwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC01ZGVnKTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyByc3RlcCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTVkZWcpOyB9XG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHRyYW5zbGF0ZVgoMjVweCkgcm90YXRlKDM1ZGVnKTsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSgtMjVkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNWRlZyk7IH1cbiAgfVxuXG4gIC8qIFRleHRvIFNJR1BBWiBzaWVtcHJlIHZpc2libGUgZW4gbGEgcGFydGUgc3VwZXJpb3IgKi9cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHZhcigtLXRleHRvLXNpZ3Bheik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGEyYmUyLCAjNGE5MGUyLCAjNjdiMjZmKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtc2hhZG93OiAycHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAmLnZlbmV6dWVsYTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNGRkQxMDAsICMwMDMzQTAsICNDRTExMjYpO1xuICB9XG5cbiAgJjpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjEpO1xuICB9XG5cbiAgLyogU3VlbG8gYW5pbWFkbyAqL1xuICAjZ25kIHtcbiAgICB0cmFuc2xhdGU6IC0xNDBweCAwO1xuICAgIHJvdGF0ZTogMTBkZWc7XG4gICAgei1pbmRleDogLTE7XG4gICAgZmlsdGVyOiBibHVyKDAuOHB4KSBkcm9wLXNoYWRvdygycHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBhbmltYXRpb246IHNjcm9sbCA2cyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgdHJhbnNsYXRlWCg0MHB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDIwJSB7IG9wYWNpdHk6IDAuNDsgfVxuICAgIDgwJSB7IG9wYWNpdHk6IDAuNDsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwcHgpIHRyYW5zbGF0ZVgoLTEyMHB4KTsgb3BhY2l0eTogMDsgfVxuICB9XG59XG5cbi8qIE1lbnNhamUgZGUgY2FyZ2EgZGluw4PCoW1pY28gKi9cbi5sb2FkaW5nLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYW5pbWF0aW9uOiBtZXNzYWdlUHVsc2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgei1pbmRleDogMTA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtZXNzYWdlUHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuOTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG59XG5cbi8qIEJvdMODwrNuIGRlIHRlbWEgKi9cbi50aGVtZS10b2dnbGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDEwO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTgpO1xuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9hZGVyIHtcbiAgICBzY2FsZTogMC42O1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgdG9wOiAtNDBweDtcbiAgICB9XG4gIH1cblxuICAubG9hZGluZy1tZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICB9XG5cbiAgLmxvYWRpbmctb3ZlcmxheS52ZW5lenVlbGEgLnN0YXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76946:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/interceptors/auditoria.interceptor.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaInterceptor: () => (/* binding */ AuditoriaInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../core/services/auth.service */ 68010);




class AuditoriaInterceptor {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    // Solo interceptar operaciones de escritura
    const metodosEscritura = ['POST', 'PUT', 'PATCH', 'DELETE'];
    if (!metodosEscritura.includes(req.method)) {
      return next.handle(req);
    }
    const inicio = Date.now();
    const usuario = this.authService.getCurrentUser();
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)({
      next: event => {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
          this.registrarOperacion(req, event, inicio, usuario);
        }
      },
      error: error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse) {
          this.registrarError(req, error, usuario);
        }
      }
    }));
  }
  registrarOperacion(req, res, inicio, usuario) {
    const duracion = Date.now() - inicio;
    const accion = this.getAccionFromMethod(req.method);
    const tabla = this.getTablaFromUrl(req.url);
    const logData = {
      usuario_id: usuario?.usuario_id,
      accion: accion,
      tabla_afectada: tabla,
      descripcion: `Operación ${accion} en ${tabla} completada en ${duracion}ms`,
      ip_origen: null,
      user_agent: navigator.userAgent,
      nivel: res.status >= 400 ? 'WARNING' : 'INFO'
    };
    // Enviar log al backend (opcional - puede usar un servicio específico)
    console.log('[AUDITORIA_CLIENTE]', logData);
  }
  registrarError(req, error, usuario) {
    const accion = this.getAccionFromMethod(req.method);
    const tabla = this.getTablaFromUrl(req.url);
    const logData = {
      usuario_id: usuario?.usuario_id,
      accion: accion,
      tabla_afectada: tabla,
      descripcion: `Error en ${accion}: ${error.message}`,
      nivel: error.status >= 500 ? 'ERROR' : 'WARNING'
    };
    console.error('[AUDITORIA_ERROR]', logData);
  }
  getAccionFromMethod(method) {
    const map = {
      'POST': 'INSERT',
      'PUT': 'UPDATE',
      'PATCH': 'UPDATE',
      'DELETE': 'DELETE'
    };
    return map[method] || method;
  }
  getTablaFromUrl(url) {
    const match = url.match(/\/api\/v1\/([^\/?]+)/);
    return match ? match[1] : 'desconocido';
  }
  static ɵfac = function AuditoriaInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuditoriaInterceptor,
    factory: AuditoriaInterceptor.ɵfac
  });
}

/***/ }),

/***/ 78006:
/*!***********************************************!*\
  !*** ./src/app/core/guards/security.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   securityGuard: () => (/* binding */ securityGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 68010);
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification/notification.service */ 97407);




const securityGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService);
  // ✅ URLS PÚBLICAS - PERMITIR SIEMPRE
  const publicUrls = ['/login', '/home', '/', '/forgot-password', '/reset-password'];
  const baseUrl = state.url.split('?')[0];
  // ✅✅✅ LO MÁS IMPORTANTE: HOME Y LOGIN SIEMPRE ACCESIBLES
  if (publicUrls.includes(baseUrl)) {
    console.log('🌐 [SecurityGuard] URL pública, permitiendo acceso:', baseUrl);
    // ✅ Si es home, permitir siempre sin verificar nada
    if (baseUrl === '/home') {
      return true;
    }
    // ✅ Si es login, permitir siempre
    if (baseUrl === '/login') {
      return true;
    }
    return true;
  }
  // ✅ Verificar si tiene token (definitivo O temporal)
  const token = authService.getToken();
  const tempToken = localStorage.getItem('token_temp');
  const hasAnyToken = token || tempToken;
  if (!hasAnyToken) {
    console.log('⚠️ [SecurityGuard] No hay token, redirigiendo a home');
    return router.createUrlTree(['/home']); // ✅ Redirigir a HOME, no a login
  }
  // ✅ Si tiene token temporal, necesita seguridad
  if (tempToken && !token) {
    const securitySession = sessionStorage.getItem('security_session');
    if (!securitySession && !baseUrl.includes('/security-questions')) {
      console.log('🔐 [SecurityGuard] Redirigiendo a validación de preguntas');
      return router.createUrlTree(['/security-questions']);
    }
  }
  // ✅ Verificar si necesita configurar preguntas
  const requiereConfigurar = localStorage.getItem('require_security_setup') === 'true';
  if (requiereConfigurar && tempToken && !baseUrl.includes('/configure-security')) {
    console.log('⚙️ [SecurityGuard] Redirigiendo a configuración');
    return router.createUrlTree(['/configure-security']);
  }
  // ✅ Usuario autenticado completamente
  const user = authService.getCurrentUser();
  if (token && user && !user.requiere_configurar_preguntas) {
    console.log('✅ [SecurityGuard] Usuario autenticado');
    return true;
  }
  // ✅ Por defecto, permitir si tiene algún token
  return true;
};

/***/ }),

/***/ 80871:
/*!*****************************************************!*\
  !*** ./src/app/core/services/permission.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionService: () => (/* binding */ PermissionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/catalogo.service */ 65466);


class PermissionService {
  catalogoService;
  constructor(catalogoService) {
    this.catalogoService = catalogoService;
  }
  setPermisosUsuario(permisos) {
    this.catalogoService.setPermisosUsuario(permisos);
  }
  clearPermisos() {
    this.catalogoService.clearPermisos();
  }
  static ɵfac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__.CatalogoService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PermissionService,
    factory: PermissionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 94967);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 70289);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 20092);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
  console.log('🚀 Dev: Estado inicial (solo en desarrollo)');
  console.log('token_present:', !!localStorage.getItem('token'));
  console.log('token_temp_present:', !!localStorage.getItem('token_temp'));
  console.log('currentUser_present:', !!localStorage.getItem('currentUser'));
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 87988:
/*!**************************************************!*\
  !*** ./src/app/core/services/session.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionService: () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 12136);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ 68010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 50698);









class SessionService {
  authService;
  router;
  ngZone;
  http;
  API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiUrl;
  DEFAULT_CONFIG = {
    idleTimeout: 5 * 60 * 1000,
    warningThreshold: 60 * 1000,
    heartbeatInterval: 10 * 1000
  };
  config = {
    ...this.DEFAULT_CONFIG
  };
  lastActivityTime = Date.now();
  timeoutWarningSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
  isModalOpen = false;
  isActive = false; // ✅ Inicia DESACTIVADO
  heartbeatSubscription;
  activitySubscription;
  countdownInterval;
  timeoutWarning$ = this.timeoutWarningSubject.asObservable();
  constructor(authService, router, ngZone, http) {
    this.authService = authService;
    this.router = router;
    this.ngZone = ngZone;
    this.http = http;
    this.config = {
      ...this.DEFAULT_CONFIG
    };
    // ✅ Escuchar cambios de ruta para activar/desactivar según autenticación
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(() => {
      this.updateActivationState();
    });
    // ✅ Verificar estado inicial
    this.updateActivationState();
  }
  updateActivationState() {
    const hasValidToken = this.authService.getToken() !== null;
    const currentUrl = this.router.url;
    const isPublicRoute = currentUrl.includes('/login') || currentUrl.includes('/home') || currentUrl.includes('/forgot-password') || currentUrl.includes('/reset-password');
    // ✅ Activar SOLO si tiene token y NO está en ruta pública
    const shouldBeActive = hasValidToken && !isPublicRoute;
    if (shouldBeActive && !this.isActive) {
      this.activate();
    } else if (!shouldBeActive && this.isActive) {
      this.deactivate();
    }
  }
  activate() {
    console.log('✅ [SessionService] Activado - Usuario autenticado');
    this.isActive = true;
    this.lastActivityTime = Date.now();
    this.setupActivityListeners();
    this.startHeartbeat();
  }
  deactivate() {
    console.log('🛑 [SessionService] Desactivado - Sin sesión o ruta pública');
    this.isActive = false;
    this.stopHeartbeat();
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
      this.activitySubscription = undefined;
    }
    this.clearWarningTimer();
    this.isModalOpen = false;
    this.timeoutWarningSubject.next(0);
  }
  startHeartbeat() {
    if (this.heartbeatSubscription) {
      this.heartbeatSubscription.unsubscribe();
    }
    this.ngZone.runOutsideAngular(() => {
      this.heartbeatSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(this.config.heartbeatInterval).subscribe(() => {
        if (this.isActive && this.authService.getToken()) {
          this.checkSessionWithBackend();
        }
      });
    });
  }
  stopHeartbeat() {
    if (this.heartbeatSubscription) {
      this.heartbeatSubscription.unsubscribe();
      this.heartbeatSubscription = undefined;
      console.log('🛑 [Heartbeat] Detenido');
    }
  }
  checkSessionWithBackend() {
    if (!this.isActive || !this.authService.getToken()) return;
    if (this.isModalOpen) return;
    const url = `${this.API_URL}/auth/check-session`;
    this.http.get(url, {
      headers: this.authService.getAuthHeaders(),
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      if (error.status === 401) {
        console.log('🔴 [Heartbeat] Sesión expirada');
        this.ngZone.run(() => {
          this.deactivate();
          this.authService.clearAuthData(true, true);
        });
      }
      return [];
    })).subscribe(response => {
      if (!this.isActive) return;
      if (response && response.headers) {
        const warningSeconds = response.headers.get('X-Session-Warning');
        if (warningSeconds && parseInt(warningSeconds) > 0 && !this.isModalOpen) {
          console.log(`🚨 ADVERTENCIA! ${warningSeconds} segundos restantes`);
          this.ngZone.run(() => {
            this.showTimeoutWarningFromBackend(parseInt(warningSeconds));
          });
        }
      }
    });
  }
  showTimeoutWarningFromBackend(secondsLeft) {
    if (this.isModalOpen) return;
    if (secondsLeft <= 0) {
      this.logoutDueToInactivity();
      return;
    }
    this.isModalOpen = true;
    this.clearWarningTimer();
    this.ngZone.run(() => {
      this.timeoutWarningSubject.next(secondsLeft);
    });
    let timeLeft = secondsLeft;
    this.countdownInterval = setInterval(() => {
      timeLeft--;
      this.ngZone.run(() => {
        this.timeoutWarningSubject.next(timeLeft);
      });
      if (timeLeft <= 0) {
        this.clearWarningTimer();
        this.logoutDueToInactivity();
      }
    }, 1000);
  }
  triggerWarningFromBackend(secondsLeft) {
    if (this.isActive && !this.isModalOpen && secondsLeft > 0 && secondsLeft <= 60) {
      this.showTimeoutWarningFromBackend(secondsLeft);
    }
  }
  resetActivityTimer() {
    this.lastActivityTime = Date.now();
    if (!this.isModalOpen && this.isActive && this.authService.getToken()) {
      this.notifyBackendActivity();
    }
  }
  clearWarningTimer() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = undefined;
    }
  }
  logoutDueToInactivity() {
    console.log('🚪 [SessionService] Cerrando sesión por INACTIVIDAD');
    this.deactivate();
    this.authService.clearAuthData(false, true);
    this.ngZone.run(() => {
      this.router.navigate(['/home'], {
        queryParams: {
          sessionExpired: true,
          reason: 'inactivity'
        },
        replaceUrl: true
      });
    });
  }
  setupActivityListeners() {
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
    const activity$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'keydown', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'click', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'scroll', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'touchstart', {
      passive: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'wheel', {
      passive: true
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.throttleTime)(500));
    this.ngZone.runOutsideAngular(() => {
      this.activitySubscription = activity$.subscribe(event => {
        if (!this.isActive) return;
        const target = event.target;
        const isInsideModal = target?.closest?.('.session-timeout-modal-bank') !== null;
        if (isInsideModal) return;
        this.resetActivityTimer();
      });
    });
  }
  notifyBackendActivity() {
    return new Promise(resolve => {
      if (!this.authService.getToken()) {
        resolve(false);
        return;
      }
      const url = `${this.API_URL}/auth/refresh-activity`;
      this.http.post(url, {}, {
        headers: this.authService.getAuthHeaders()
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => [])).subscribe({
        next: response => {
          if (response?.token_refreshed && response?.access_token) {
            this.authService.updateToken(response.access_token);
          }
          resolve(true);
        },
        error: () => resolve(false)
      });
    });
  }
  extendSession() {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('🔄 [SessionService] Extendiendo sesión...');
      const success = yield _this.notifyBackendActivity();
      _this.clearWarningTimer();
      _this.isModalOpen = false;
      _this.lastActivityTime = Date.now();
      _this.ngZone.run(() => _this.timeoutWarningSubject.next(0));
      console.log(success ? '✅ Sesión extendida' : '⚠️ No se pudo extender');
    })();
  }
  destroy() {
    this.deactivate();
    this.timeoutWarningSubject.complete();
  }
  static ɵfac = function SessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: SessionService,
    factory: SessionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88229:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/time-format.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeFormatPipe: () => (/* binding */ TimeFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class TimeFormatPipe {
  transform(segundos) {
    if (segundos === undefined || segundos === null) return '0:00';
    if (segundos <= 0) return 'Expirado';
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${minutos}:${segs.toString().padStart(2, '0')}`;
  }
  static ɵfac = function TimeFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TimeFormatPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "timeFormat",
    type: TimeFormatPipe,
    pure: true
  });
}

/***/ }),

/***/ 88705:
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenService: () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _config_app_config_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/app-config.token */ 96048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 83305);







class TokenService {
  http;
  router;
  cfg;
  tokenKey = 'token';
  refreshInProgress = false;
  refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  constructor(http, router, cfg) {
    this.http = http;
    this.router = router;
    this.cfg = cfg;
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  setToken(token) {
    if (token) {
      localStorage.setItem(this.tokenKey, token);
      console.log('✅ [TokenService] Token guardado, longitud:', token.length);
      const saved = localStorage.getItem(this.tokenKey);
      console.log('✅ [TokenService] Verificación:', saved ? 'Guardado correctamente' : 'ERROR: No se guardó');
    }
  }
  clearToken() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('token_temp');
  }
  getTempToken() {
    return localStorage.getItem('token_temp');
  }
  buildBaseHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
  }
  refreshToken() {
    const url = `${this.cfg.apiUrl}/auth/refrescar-token`;
    const currentToken = this.getToken();
    if (!currentToken) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => ({
        success: false,
        message: 'No hay token para refrescar'
      }));
    }
    if (this.refreshInProgress) {
      return this.refreshSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(t => t !== null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(token => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        success: true,
        access_token: token
      })));
    }
    this.refreshInProgress = true;
    this.refreshSubject.next(null);
    return this.http.post(url, {}, {
      headers: this.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(resp => {
      if (resp.success && resp.access_token) {
        this.setToken(resp.access_token);
        this.refreshSubject.next(resp.access_token);
      } else {
        this.refreshSubject.next(null);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      this.refreshSubject.next(null);
      // ✅ SOLO limpiar token, NO navegar (el interceptor maneja la navegación)
      if (err?.status === 401) {
        this.clearToken();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.refreshInProgress = false;
    }));
  }
  updateAuthHeaders(newToken) {
    this.setToken(newToken);
  }
  getAuthHeaders(useTempToken = false) {
    const token = useTempToken ? this.getTempToken() : this.getToken();
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
  static ɵfac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_config_app_config_token__WEBPACK_IMPORTED_MODULE_10__.APP_CONFIG));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: TokenService,
    factory: TokenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96048:
/*!*************************************************!*\
  !*** ./src/app/core/config/app-config.token.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);

const APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('app.config');

/***/ }),

/***/ 97407:
/*!********************************************************************!*\
  !*** ./src/app/core/services/notification/notification.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/notification.model */ 69083);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ 68709);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _notification_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-storage.service */ 72723);
/* harmony import */ var _websocket_pusher_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../websocket/pusher.service */ 56091);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../auth.service */ 68010);












class NotificationService {
  http;
  storageService;
  pusherService;
  snackBar;
  dialog;
  authService;
  API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiUrl}/notifications`;
  stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
    notifications: [],
    unreadCount: 0,
    loading: false,
    error: null
  });
  state$ = this.stateSubject.asObservable();
  notifications$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => state.notifications));
  unreadCount$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => state.unreadCount));
  loading$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(state => state.loading));
  initializationAttempts = 0;
  maxAttempts = 5;
  isInitialized = false;
  realtimeSubscription;
  saveDebounce;
  constructor(http, storageService, pusherService, snackBar, dialog, authService) {
    this.http = http;
    this.storageService = storageService;
    this.pusherService = pusherService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.authService = authService;
    console.log('🔔 NOTIFICATION SERVICE CREADA');
  }
  initialize(token) {
    if (this.isInitialized) {
      console.log('⚠️ NotificationService ya inicializado');
      return;
    }
    const currentUrl = window.location.pathname;
    if (currentUrl === '/' || currentUrl.includes('/home')) {
      console.log('🚫 [NotificationService] En home, no inicializar notificaciones');
      return;
    }
    // Usar el token pasado o buscar en localStorage
    const accessToken = token || localStorage.getItem('access_token');
    if (!accessToken) {
      console.warn('⚠️ No hay access_token definitivo, esperando...');
      return;
    }
    console.log('🚀 Inicializando NotificationService con token definitivo');
    this.isInitialized = true;
    this.setState({
      loading: true
    });
    this.loadInitialNotifications();
    this.subscribeToRealtime();
  }
  reset() {
    this.isInitialized = false;
    this.initializationAttempts = 0;
    this.updateStateWithNotifications([]);
    if (this.realtimeSubscription) {
      this.realtimeSubscription.unsubscribe();
      this.realtimeSubscription = undefined;
    }
  }
  loadInitialNotifications() {
    // ✅ No cargar si estamos en home
    const currentUrl = window.location.pathname;
    if (currentUrl === '/' || currentUrl.includes('/home')) {
      console.log('🚫 [NotificationService] En home, omitir carga de notificaciones');
      this.setState({
        loading: false
      });
      return;
    }
    console.log('📡 Cargando notificaciones desde API...');
    this.setState({
      loading: true
    });
    this.http.get(this.API_URL).subscribe({
      next: response => {
        // ✅ Manejar diferentes estructuras de respuesta
        let notificationsArray = [];
        // Si la respuesta tiene data y es array
        if (response && response.data && Array.isArray(response.data)) {
          notificationsArray = response.data;
        }
        // Si la respuesta es directamente un array
        else if (Array.isArray(response)) {
          notificationsArray = response;
        }
        // Si la respuesta tiene success y data
        else if (response && response.success && response.data && Array.isArray(response.data)) {
          notificationsArray = response.data;
        }
        // ✅ Convertir a instancias de Notification
        const notificationInstances = notificationsArray.map(n => {
          const notif = n instanceof _models_notification_model__WEBPACK_IMPORTED_MODULE_5__.Notification ? n : _models_notification_model__WEBPACK_IMPORTED_MODULE_5__.Notification.fromApi(n);
          return notif;
        });
        // ✅ ACTUALIZAR EL ESTADO - Este es el paso que falta
        this.updateStateWithNotifications(notificationInstances);
        // ✅ También persistir en storage
        this.persistToStorage();
        // ✅ Finalizar loading
        this.setState({
          loading: false,
          error: null
        });
      },
      error: error => {
        // ✅ No mostrar error si es 401 y estamos en home (ya validamos arriba)
        if (error.status !== 401) {
          console.error('❌ Error cargando notificaciones:', error);
          this.setState({
            loading: false,
            error: error.message
          });
        } else {
          console.log('⚠️ 401 en notificaciones, ignorando');
          this.setState({
            loading: false
          });
        }
      }
    });
  }
  subscribeToRealtime() {
    const userId = this.getCurrentUserId();
    if (userId) {
      this.realtimeSubscription = this.pusherService.subscribePrivate(`user.${userId}`, 'alert.created').subscribe({
        next: event => {
          const notification = _models_notification_model__WEBPACK_IMPORTED_MODULE_5__.Notification.fromApi(event);
          this.addRealTimeNotification(notification);
          this.showToast(notification);
        },
        error: error => console.error('Error WebSocket:', error)
      });
    }
  }
  getCurrentUserId() {
    // ✅ Probar diferentes fuentes
    const userStr = localStorage.getItem('user') || localStorage.getItem('currentUser');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        const userId = user.usuario_id || user.id || user.userId;
        if (userId) {
          console.log('✅ userId obtenido:', userId);
          return Number(userId);
        }
      } catch (e) {
        console.error('Error parsing user:', e);
      }
    }
    // ✅ Intentar desde el token JWT
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.sub || payload.userId || payload.usuario_id;
        if (userId) {
          console.log('✅ userId desde token:', userId);
          return Number(userId);
        }
      } catch (e) {
        console.error('Error parsing token:', e);
      }
    }
    console.warn('⚠️ No se pudo obtener userId');
    return 0;
  }
  showToast(notification) {
    const message = `${notification.title}: ${notification.message}`;
    switch (notification.type) {
      case 'success':
        this.showSuccess(message);
        break;
      case 'error':
        this.showError(message);
        break;
      case 'warning':
        this.showWarning(message);
        break;
      default:
        this.showInfo(message);
    }
  }
  // ========== MÉTODO PRINCIPAL FLEXIBLE ==========
  // ✅ Método para detectar mensajes genéricos
  isGenericMessage(data) {
    const message = data.message || '';
    const genericMessages = ['Notificación creada exitosamente', 'Notificación', 'Éxito', 'Operación exitosa'];
    return genericMessages.some(generic => message === generic || message.includes(generic));
  }
  // ✅ Extraer título del mensaje descriptivo
  extractTitleFromMessage(message) {
    if (message.includes('Personal')) return 'Personal';
    if (message.includes('Catálogo')) return 'Catálogos';
    if (message.includes('Persona')) return 'Personas';
    if (message.includes('Denuncia')) return 'Denuncias';
    if (message.includes('Usuario')) return 'Usuarios';
    if (message.includes('Backup')) return 'Backup';
    return 'Sistema';
  }
  // ✅ Extraer módulo del mensaje descriptivo
  extractModuleFromMessage(message) {
    if (message.includes('Personal')) return 'personal';
    if (message.includes('Catálogo')) return 'catalogos';
    if (message.includes('Persona')) return 'personas';
    if (message.includes('Denuncia')) return 'denuncias';
    if (message.includes('Usuario')) return 'usuarios';
    if (message.includes('Backup')) return 'backup';
    return 'sistema';
  }
  // Método flexible que acepta cualquier objeto
  add(data) {
    return this.addNotification(data);
  }
  addRealTimeNotification(notification) {
    const current = this.stateSubject.value;
    const updated = [notification, ...current.notifications].slice(0, 100);
    this.updateStateWithNotifications(updated);
    this.persistToStorage();
  }
  // ========== MÉTODOS DE GESTIÓN ==========
  markAsRead(notificationId) {
    return this.http.put(`${this.API_URL}/${notificationId}/read`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      const current = this.stateSubject.value;
      const updated = current.notifications.map(notif => {
        if (notif.id === notificationId) {
          notif.markAsRead();
        }
        return notif;
      });
      this.updateStateWithNotifications(updated);
      this.persistToStorage();
    }));
  }
  markAllAsRead() {
    return this.http.put(`${this.API_URL}/read-all`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      const current = this.stateSubject.value;
      const updated = current.notifications.map(notif => {
        notif.markAsRead();
        return notif;
      });
      this.updateStateWithNotifications(updated);
      this.persistToStorage();
    }));
  }
  deleteAll() {
    return this.http.delete(this.API_URL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.updateStateWithNotifications([]);
      this.storageService.clearNotifications();
    }));
  }
  getUnreadCount() {
    return this.unreadCount$;
  }
  // ========== MÉTODOS DE SNACKBAR ==========
  addNotification(data) {
    this.setState({
      loading: true
    });
    // ✅ Obtener userId correctamente
    let userId = data.userId;
    if (!userId || userId === '0' || userId === '') {
      userId = this.getCurrentUserId().toString();
    }
    // ✅ Si sigue vacío, usar un valor por defecto (el usuario actual)
    if (!userId || userId === '0' || userId === '') {
      const currentUser = this.authService?.getCurrentUser();
      userId = currentUser?.usuario_id?.toString() || '1';
    }
    const payload = {
      userId: userId,
      // ← Asegurar que no sea vacío
      title: data.title || data['action'] || data['user'] || 'Notificación',
      message: data.message || data['action'] || '',
      type: data.type || data['tipo'] || 'info',
      module: data.module || data['user'] || 'sistema',
      actionUrl: data.actionUrl,
      metadata: data.metadata || {}
    };
    return this.http.post(this.API_URL, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(apiNotification => {
      return _models_notification_model__WEBPACK_IMPORTED_MODULE_5__.Notification.fromApi(apiNotification);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(notification => {
      const current = this.stateSubject.value;
      const updated = [notification, ...current.notifications].slice(0, 100);
      this.updateStateWithNotifications(updated);
      this.persistToStorage();
      this.setState({
        loading: false
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('❌ Error guardando notificación:', error);
      this.setState({
        loading: false,
        error: error.message
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }));
  }
  // Modifica showSuccess
  showSuccess(message, duration = 3000) {
    // Mostrar toast
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    // ✅ Guardar en BD con el mensaje correcto
    this.addNotification({
      title: this.extractTitleFromMessage(message),
      message: message,
      // ← El mensaje original se pasa aquí
      type: 'success',
      module: this.extractModuleFromMessage(message)
    }).subscribe();
  }
  showError(message, duration = 5000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    console.error('❌', message);
    this.addNotification({
      title: this.extractTitleFromMessage(message),
      message: message,
      type: 'error',
      module: this.extractModuleFromMessage(message)
    }).subscribe();
  }
  showWarning(message, duration = 4000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['warning-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    console.warn('⚠️', message);
    this.addNotification({
      title: this.extractTitleFromMessage(message),
      message: message,
      type: 'warning',
      module: this.extractModuleFromMessage(message)
    }).subscribe();
  }
  showInfo(message, duration = 3000) {
    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: ['info-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    console.info('ℹ️', message);
    this.addNotification({
      title: this.extractTitleFromMessage(message),
      message: message,
      type: 'info',
      module: this.extractModuleFromMessage(message)
    }).subscribe();
  }
  // ========== MÉTODOS AUXILIARES ==========
  // Métodos auxiliares para parsear el mensaje
  parseMessage(message) {
    let module = 'Sistema';
    let action = 'Operación';
    let itemName = '';
    // Detectar módulo por palabras clave en el mensaje
    if (message.includes('Catálogo') || message.includes('catalogos') || message.includes('Tipo de medida') || message.includes('Estado denuncia')) {
      module = 'Catálogos';
    } else if (message.includes('Persona') || message.includes('personas')) {
      module = 'Personas';
    } else if (message.includes('Denuncia') || message.includes('denuncias')) {
      module = 'Denuncias';
    } else if (message.includes('Usuario') || message.includes('usuarios')) {
      module = 'Usuarios';
    } else if (message.includes('Personal')) {
      module = 'Personal';
    } else if (message.includes('Backup')) {
      module = 'Backup';
    } else if (message.includes('Login') || message.includes('Sesión')) {
      module = 'Autenticación';
    }
    // Detectar acción
    if (message.includes('creado') || message.includes('Creado') || message.includes('registrado')) {
      action = 'Creación';
    } else if (message.includes('actualizado') || message.includes('Actualizado') || message.includes('editado')) {
      action = 'Actualización';
    } else if (message.includes('eliminado') || message.includes('Eliminado')) {
      action = 'Eliminación';
    } else if (message.includes('activado') || message.includes('Activado')) {
      action = 'Activación';
    } else if (message.includes('desactivado') || message.includes('Desactivado')) {
      action = 'Desactivación';
    } else if (message.includes('inicio de sesión') || message.includes('Login')) {
      action = 'Inicio de sesión';
    } else if (message.includes('cerrado') || message.includes('Logout')) {
      action = 'Cierre de sesión';
    }
    return {
      module,
      action,
      itemName
    };
  }
  getModuleFromString(module) {
    const moduleMap = {
      'Catálogos': 'catalogos',
      'Personas': 'personas',
      'Denuncias': 'denuncias',
      'Usuarios': 'usuarios',
      'Personal': 'personal',
      'Backup': 'backup',
      'Autenticación': 'login',
      'Sistema': 'sistema'
    };
    return moduleMap[module] || 'sistema';
  }
  // Alias para compatibilidad
  success(message, title) {
    this.showSuccess(title ? `${title}: ${message}` : message);
  }
  error(message, title) {
    this.showError(title ? `${title}: ${message}` : message);
  }
  warning(message, title) {
    this.showWarning(title ? `${title}: ${message}` : message);
  }
  info(message, title) {
    this.showInfo(title ? `${title}: ${message}` : message);
  }
  // ========== MÉTODO DE CONFIRMACIÓN ==========
  showConfirm(title, message, onConfirm, onCancel) {
    const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
      width: '400px',
      data: {
        title,
        message,
        confirmText: 'Confirmar',
        cancelText: 'Cancelar'
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        onConfirm();
      } else if (onCancel) {
        onCancel();
      }
    });
  }
  // ========== MÉTODOS DE NOTIFICACIONES POR MÓDULO ==========
  createPersonaNotification(action, personaName, type = 'info') {
    return this.addNotification({
      userId: this.getCurrentUserId().toString(),
      title: 'Módulo Personas',
      message: personaName ? `${action}: ${personaName}` : action,
      type,
      module: 'personas',
      metadata: {
        personaName,
        action
      }
    });
  }
  addPersonaNotification(action, details, type = 'info') {
    return this.createPersonaNotification(action, details, type);
  }
  addModuleNotification(module, action, details, type = 'info') {
    const moduleNames = {
      'personas': 'Módulo Personas',
      'denuncias': 'Módulo Denuncias',
      'reportes': 'Módulo Reportes',
      'usuarios': 'Módulo Usuarios',
      'sistema': 'Sistema',
      'backup': 'Backup',
      'configuracion': 'Configuración'
    };
    return this.addNotification({
      userId: this.getCurrentUserId().toString(),
      title: moduleNames[module] || `Módulo ${module}`,
      message: details ? `${action}: ${details}` : action,
      type,
      module,
      metadata: {
        module,
        action,
        details
      }
    });
  }
  createDenunciaNotification(action, details, denunciaId) {
    const actionMessages = {
      'registro': `Denuncia registrada: ${details || 'Nueva entrada'}`,
      'seguimiento': `Actualización: ${details || 'Proceso actualizado'}`,
      'investigacion': `Investigación: ${details || 'Nueva evidencia'}`,
      'reportes': `Reporte generado: ${details || 'Documento listo'}`
    };
    return this.addNotification({
      userId: this.getCurrentUserId().toString(),
      title: 'Módulo Denuncias',
      message: actionMessages[action] || action,
      type: 'info',
      module: 'denuncias',
      actionUrl: denunciaId ? `/denuncias/${denunciaId}` : undefined,
      metadata: {
        action,
        details,
        denunciaId
      }
    });
  }
  // ========== MÉTODOS PRIVADOS ==========
  setState(partial) {
    const current = this.stateSubject.value;
    this.stateSubject.next({
      ...current,
      ...partial
    });
  }
  updateStateWithNotifications(notifications) {
    const unreadCount = notifications.filter(n => !n.read).length;
    // ✅ Actualizar el BehaviorSubject
    this.stateSubject.next({
      notifications: notifications,
      unreadCount: unreadCount,
      loading: false,
      error: null
    });
  }
  persistToStorage() {
    if (this.saveDebounce) clearTimeout(this.saveDebounce);
    this.saveDebounce = setTimeout(() => {
      const current = this.stateSubject.value;
      this.storageService.saveNotifications(current.notifications);
    }, 500);
  }
  ngOnDestroy() {
    this.realtimeSubscription?.unsubscribe();
    if (this.saveDebounce) clearTimeout(this.saveDebounce);
  }
  showSuccessWithTitle(title, message) {
    this.showSuccess(`${title}: ${message}`);
  }
  showErrorWithTitle(title, message) {
    this.showError(`${title}: ${message}`);
  }
  static ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_notification_storage_service__WEBPACK_IMPORTED_MODULE_10__.NotificationStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_websocket_pusher_service__WEBPACK_IMPORTED_MODULE_11__.PusherService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: NotificationService,
    factory: NotificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 97418:
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/LoadingInterceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/loading.service */ 98660);




class LoadingInterceptor {
  loadingService;
  activeRequests = 0;
  currentModule = '';
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.loadingService.currentModule$.subscribe(module => {
      this.currentModule = module;
    });
  }
  intercept(req, next) {
    // No mostrar loading para peticiones específicas
    if (req.url.includes('/notificaciones/') && req.method === 'GET') {
      return next.handle(req);
    }
    this.activeRequests++;
    if (this.activeRequests === 1) {
      const message = this.getLoadingMessage(req);
      this.loadingService.show(message, this.currentModule);
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.hide();
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      this.activeRequests--;
      if (this.activeRequests === 0) {
        this.loadingService.hide();
      }
      throw error;
    }));
  }
  getLoadingMessage(req) {
    if (req.method === 'GET') return 'Obteniendo información...';
    if (req.method === 'POST') return 'Guardando información...';
    if (req.method === 'PUT') return 'Actualizando datos...';
    if (req.method === 'DELETE') return 'Eliminando registro...';
    return 'Procesando solicitud...';
  }
  static ɵfac = function LoadingInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LoadingInterceptor,
    factory: LoadingInterceptor.ɵfac
  });
}

/***/ }),

/***/ 98660:
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);



class LoadingService {
  loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Cargando sistema...');
  message$ = this.messageSubject.asObservable();
  currentModuleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
  currentModule$ = this.currentModuleSubject.asObservable();
  loadingCount = 0;
  autoResetTimer = null;
  show(message, moduleName) {
    // Limpiar timer de auto-reset si existe
    if (this.autoResetTimer) {
      clearTimeout(this.autoResetTimer);
      this.autoResetTimer = null;
    }
    this.loadingCount++;
    console.log(`🟢 LOADING SHOW: ${message || 'Sin mensaje'} (contador: ${this.loadingCount})`);
    if (message) {
      this.messageSubject.next(message);
    }
    if (moduleName) {
      this.currentModuleSubject.next(moduleName);
    }
    this.loadingSubject.next(true);
  }
  hide() {
    this.loadingCount--;
    console.log(`🔴 LOADING HIDE (contador: ${this.loadingCount})`);
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      this.executeHide();
    }
  }
  hideAll() {
    console.log(`🛑 HIDE ALL - Ocultando loading inmediatamente`);
    this.loadingCount = 0;
    this.executeHide();
  }
  executeHide() {
    this.loadingSubject.next(false);
    this.messageSubject.next('Cargando sistema...');
    this.currentModuleSubject.next('');
    // Auto-reset de seguridad después de 8 segundos para dar tiempo a que el loading se oculte correctamente
    if (this.autoResetTimer) {
      clearTimeout(this.autoResetTimer);
    }
    this.autoResetTimer = setTimeout(() => {
      if (this.loadingSubject.value === true) {
        console.warn(`⚠️ Auto-reset: Forzando ocultación después de timeout`);
        this.loadingSubject.next(false);
        this.loadingCount = 0;
      }
      this.autoResetTimer = null;
    }, 8000);
  }
  forceHide() {
    console.log(`⚠️ FORCE HIDE - Ocultando loading inmediatamente`);
    this.loadingCount = 0;
    this.executeHide();
  }
  isVisible() {
    return this.loadingSubject.value;
  }
  reset() {
    console.log(`🔄 Reset completo del loading service`);
    this.loadingCount = 0;
    this.executeHide();
  }
  wrap(obs, message, moduleName) {
    this.show(message, moduleName);
    return obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.hide()));
  }
  static ɵfac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: LoadingService,
    factory: LoadingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99535:
/*!****************************************************************!*\
  !*** ./src/app/shared/features/home/services/theme.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);


class ThemeService {
  themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('light');
  theme$ = this.themeSubject.asObservable();
  constructor() {
    this.loadTheme();
  }
  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark', 'neon'].includes(savedTheme)) {
      this.setTheme(savedTheme);
    }
  }
  setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme', 'neon-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
  }
  getTheme() {
    return this.themeSubject.value;
  }
  getTheme$() {
    return this.themeSubject.asObservable();
  }
  toggleTheme() {
    const themes = ['light', 'dark', 'neon'];
    const currentIndex = themes.indexOf(this.getTheme());
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    this.setTheme(nextTheme);
  }
  static ɵfac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map