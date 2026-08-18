"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_seguridad_pages_auditorias_auditoria_component_ts"],{

/***/ 357:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-filtros/auditoria-filtros.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaFiltrosComponent: () => (/* binding */ AuditoriaFiltrosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auditoria-state.service */ 4302);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/usuario.service */ 48570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);








function AuditoriaFiltrosComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", usuario_r1.usuario_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", usuario_r1.nombre_usuario, " ");
  }
}
function AuditoriaFiltrosComponent_div_24_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label")(1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AuditoriaFiltrosComponent_div_24_label_5_Template_input_change_1_listener() {
      const accion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.toggleAccion(accion_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accion_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", accion_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", accion_r4, " ");
  }
}
function AuditoriaFiltrosComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 2)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuditoriaFiltrosComponent_div_24_label_5_Template, 3, 2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Tabla");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaFiltrosComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r4.filtros.tabla_afectada, $event) || (ctx_r4.filtros.tabla_afectada = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Palabra clave");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaFiltrosComponent_div_24_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r4.filtros.keyword, $event) || (ctx_r4.filtros.keyword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.accionesDisponibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.filtros.tabla_afectada);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.filtros.keyword);
  }
}
class AuditoriaFiltrosComponent {
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__.AuditoriaStateService);
  usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService);
  aplicarFiltros = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  limpiarFiltros = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  filtros = {};
  mostrarAvanzados = false;
  usuarios = [];
  accionesDisponibles = ['INSERT', 'UPDATE', 'DELETE', 'SELECT', 'LOGIN', 'LOGOUT', 'ERROR', 'BACKUP', 'CHAT_USER_MSG', 'CHAT_BOT_MSG', 'CHAT_SYSTEM_MSG', 'CHAT_CODE_REQUEST', 'CHAT_FEEDBACK', 'CHAT_KB_CREATE', 'CHAT_KB_UPDATE', 'CHAT_KB_DELETE', 'CHAT_CALIFICACION'];
  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: response => {
        this.usuarios = Array.isArray(response) ? response : response?.data || [];
      }
    });
  }
  toggleAccion(accion) {
    const acciones = this.filtros.acciones || [];
    const index = acciones.indexOf(accion);
    if (index > -1) {
      acciones.splice(index, 1);
    } else {
      acciones.push(accion);
    }
    this.filtros.acciones = acciones;
  }
  aplicar() {
    this.aplicarFiltros.emit(this.filtros);
  }
  limpiar() {
    this.filtros = {};
    this.limpiarFiltros.emit();
  }
  toggleAvanzados() {
    this.mostrarAvanzados = !this.mostrarAvanzados;
  }
  static ɵfac = function AuditoriaFiltrosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaFiltrosComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AuditoriaFiltrosComponent,
    selectors: [["app-auditoria-filtros"]],
    outputs: {
      aplicarFiltros: "aplicarFiltros",
      limpiarFiltros: "limpiarFiltros"
    },
    decls: 25,
    vars: 7,
    consts: [[1, "filtros-container"], [1, "filtros-basicos"], [1, "filtro-group"], ["type", "date", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "filtro-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-link", 3, "click"], ["class", "filtros-avanzados", 4, "ngIf"], [1, "filtros-avanzados"], [1, "checkbox-group"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Nombre de tabla", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Buscar en descripci\u00F3n", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "change", "value"]],
    template: function AuditoriaFiltrosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Fecha inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaFiltrosComponent_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filtros.fecha_inicio, $event) || (ctx.filtros.fecha_inicio = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2)(7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Fecha fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaFiltrosComponent_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filtros.fecha_fin, $event) || (ctx.filtros.fecha_fin = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaFiltrosComponent_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filtros.usuario_id, $event) || (ctx.filtros.usuario_id = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AuditoriaFiltrosComponent_option_16_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuditoriaFiltrosComponent_Template_button_click_18_listener() {
          return ctx.aplicar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Aplicar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuditoriaFiltrosComponent_Template_button_click_20_listener() {
          return ctx.limpiar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuditoriaFiltrosComponent_Template_button_click_22_listener() {
          return ctx.toggleAvanzados();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AuditoriaFiltrosComponent_div_24_Template, 14, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.fecha_inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.fecha_fin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filtros.usuario_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.mostrarAvanzados ? "Ocultar" : "Mostrar", " avanzados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarAvanzados);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: [".filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s ease;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-basicos[_ngcontent-%COMP%]   .filtro-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-color);\n  padding-top: 16px;\n  margin-top: 16px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: normal;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  transition: all 0.2s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--primary);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-avanzados[_ngcontent-%COMP%]   .filtro-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS1maWx0cm9zL2F1ZGl0b3JpYS1maWx0cm9zLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUhGO0FBSkE7RUFVSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFISjtBQVZBO0VBaUJRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFqQkE7O0VBMEJRLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBTFI7QUFPUTs7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQUpWO0FBbENBO0VBNENNLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7QUFQTjtBQXZDQTtFQWlEUSxpQkFBQTtFQUNBLGVBQUE7QUFQUjtBQTNDQTtFQXdESSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZKO0FBWUk7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQVZOO0VBWUk7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFWTjtBQUNGO0FBM0RBO0VBeUVNLG1CQUFBO0FBWE47QUE5REE7RUE0RVEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQXJFQTtFQW9GUSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFaUjtBQTFFQTtFQXlGVSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7QUFaVjtBQWNVO0VBQ0UsMkJBQUE7QUFaWjtBQTFGQTtFQTBHWSw0QkFBQTtBQWJaO0FBN0ZBO0VBZ0hRLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQWhCUjtBQWtCUTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBaEJWIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJTFRST1MgREUgQVVESVRPUsODwo1BXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uZmlsdHJvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAuZmlsdHJvcy1iYXNpY29zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgLmZpbHRyby1ncm91cCB7XG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQsXG4gICAgICBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5maWx0cm8tYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWF2YW56YWRvcyB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2U7XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5maWx0cm8tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jaGVja2JveC1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4302:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/services/auditoria-state.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaStateService: () => (/* binding */ AuditoriaStateService)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 52260);
/* harmony import */ var _auditoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auditoria.service */ 54722);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/usuario.service */ 48570);







class AuditoriaStateService {
  auditoriaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auditoria_service__WEBPACK_IMPORTED_MODULE_3__.AuditoriaService);
  notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService);
  usuarioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__.UsuarioService);
  // Signals (estado reactivo)
  logsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
    debugName: "logsSignal"
  }] : []));
  estadisticasSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
    debugName: "estadisticasSignal"
  }] : []));
  alertasSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
    debugName: "alertasSignal"
  }] : []));
  patronesSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
    debugName: "patronesSignal"
  }] : []));
  paginacionSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
    current_page: 1,
    per_page: 15,
    total: 0,
    last_page: 1
  }, ...(ngDevMode ? [{
    debugName: "paginacionSignal"
  }] : []));
  cargandoSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
    debugName: "cargandoSignal"
  }] : []));
  filtrosSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
    pagina: 1,
    por_pagina: 15
  }, ...(ngDevMode ? [{
    debugName: "filtrosSignal"
  }] : []));
  exportandoSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
    debugName: "exportandoSignal"
  }] : []));
  usuariosSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
    debugName: "usuariosSignal"
  }] : []));
  // Computed (derivados)
  logs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.logsSignal(), ...(ngDevMode ? [{
    debugName: "logs"
  }] : []));
  estadisticas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.estadisticasSignal(), ...(ngDevMode ? [{
    debugName: "estadisticas"
  }] : []));
  alertas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.alertasSignal(), ...(ngDevMode ? [{
    debugName: "alertas"
  }] : []));
  patrones = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.patronesSignal(), ...(ngDevMode ? [{
    debugName: "patrones"
  }] : []));
  paginacion = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.paginacionSignal(), ...(ngDevMode ? [{
    debugName: "paginacion"
  }] : []));
  cargando = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.cargandoSignal(), ...(ngDevMode ? [{
    debugName: "cargando"
  }] : []));
  exportando = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.exportandoSignal(), ...(ngDevMode ? [{
    debugName: "exportando"
  }] : []));
  totalRegistros = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.paginacionSignal().total, ...(ngDevMode ? [{
    debugName: "totalRegistros"
  }] : []));
  totalPaginas = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.paginacionSignal().last_page, ...(ngDevMode ? [{
    debugName: "totalPaginas"
  }] : []));
  usuarios = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.usuariosSignal(), ...(ngDevMode ? [{
    debugName: "usuarios"
  }] : []));
  // Getter público para filtros (necesario para export)
  get filtros() {
    return this.filtrosSignal();
  }
  constructor() {
    this.cargarUsuarios();
    this.cargarDatosIniciales();
  }
  /**
   * Cargar todos los datos iniciales
   */
  cargarDatosIniciales() {
    this.cargarRegistros();
    this.cargarEstadisticas();
    this.cargarAlertas();
  }
  /**
   * Cargar registros con paginación
   */
  cargarRegistros(filtros) {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cargandoSignal.set(true);
      try {
        const nuevosFiltros = {
          ..._this.filtrosSignal(),
          ...filtros
        };
        _this.filtrosSignal.set(nuevosFiltros);
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this.auditoriaService.listar(nuevosFiltros));
        if (response?.success) {
          _this.logsSignal.set(response.data);
          if (response.pagination) {
            _this.paginacionSignal.set(response.pagination);
          }
        }
      } catch (error) {
        _this.notificationService.showError('Error al cargar registros de auditoría');
      } finally {
        _this.cargandoSignal.set(false);
      }
    })();
  }
  /**
   * Cargar estadísticas
   */
  cargarEstadisticas(filtros) {
    var _this2 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this2.auditoriaService.obtenerEstadisticas(filtros));
        if (response?.success) {
          _this2.estadisticasSignal.set(response.data);
        }
      } catch (error) {
        // Silencioso - mantener datos existentes
      }
    })();
  }
  /**
   * Cargar alertas
   */
  cargarAlertas() {
    var _this3 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this3.auditoriaService.obtenerAlertas());
        if (response?.success) {
          _this3.alertasSignal.set(response.data);
        }
      } catch (error) {
        // Silencioso
      }
    })();
  }
  /**
   * Analizar patrones
   */
  analizarPatrones(filtros) {
    var _this4 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const filtrosCombinados = {
          ..._this4.filtrosSignal(),
          ...filtros
        };
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this4.auditoriaService.analizarPatrones(filtrosCombinados));
        if (response?.success) {
          _this4.patronesSignal.set(response.data);
          return response.data;
        }
        return [];
      } catch (error) {
        _this4.notificationService.showError('Error al analizar patrones');
        return [];
      }
    })();
  }
  /**
   * Actualizar filtros y recargar
   */
  actualizarFiltros(nuevosFiltros) {
    const actuales = this.filtrosSignal();
    this.filtrosSignal.set({
      ...actuales,
      ...nuevosFiltros
    });
    this.cargarRegistros();
    this.cargarEstadisticas();
  }
  /**
   * Limpiar todos los filtros
   */
  limpiarFiltros() {
    this.filtrosSignal.set({
      pagina: 1,
      por_pagina: 15
    });
    this.cargarRegistros();
  }
  /**
   * Cambiar página
   */
  cambiarPagina(pagina) {
    const actuales = this.filtrosSignal();
    this.filtrosSignal.set({
      ...actuales,
      pagina
    });
    this.cargarRegistros();
  }
  /**
   * Exportar registros
   */
  exportar(formato) {
    var _this5 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.exportandoSignal.set(true);
      try {
        const filtros = _this5.filtrosSignal();
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this5.auditoriaService.exportar(formato, filtros));
        return response;
      } finally {
        _this5.exportandoSignal.set(false);
      }
    })();
  }
  /**
   * Obtener detalles de un registro
   */
  obtenerDetalles(id) {
    var _this6 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this6.auditoriaService.obtener(id));
        return response?.success ? response.data : null;
      } catch (error) {
        _this6.notificationService.showError('Error al obtener detalles');
        return null;
      }
    })();
  }
  /**
  * Buscar registros
  */
  buscar(termino) {
    var _this7 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this7.auditoriaService.buscar(termino));
        return response?.success ? response.data : [];
      } catch (error) {
        _this7.notificationService.showError('Error en la búsqueda');
        return [];
      }
    })();
  }
  cargarUsuarios() {
    var _this8 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this8.usuarioService.listar());
        _this8.usuariosSignal.set(Array.isArray(response) ? response : response?.data || []);
      } catch (error) {
        _this8.usuariosSignal.set([]);
      }
    })();
  }
  /**
   * Obtener estadísticas del chatbot
   */
  obtenerEstadisticasChatbot() {
    var _this9 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this9.auditoriaService.obtenerEstadisticas({
          acciones: ['CHAT_USER_MSG', 'CHAT_BOT_MSG', 'CHAT_CODE_REQUEST']
        }));
        return response?.success ? response.data : null;
      } catch (error) {
        _this9.notificationService.showError('Error al obtener estadísticas del chatbot');
        return null;
      }
    })();
  }
  /**
   * Obtener calificaciones del chat
   */
  obtenerCalificacionesChat() {
    var _this0 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this0.auditoriaService.listar({
          acciones: ['CHAT_FEEDBACK', 'CHAT_CALIFICACION']
        }));
        return response?.success ? response.data : [];
      } catch (error) {
        _this0.notificationService.showError('Error al obtener calificaciones');
        return [];
      }
    })();
  }
  static ɵfac = function AuditoriaStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaStateService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuditoriaStateService,
    factory: AuditoriaStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5342:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastValueFrom: () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 93335);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ }),

/***/ 14950:
/*!********************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/pipes/format-log-id.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatLogIdPipe: () => (/* binding */ FormatLogIdPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class FormatLogIdPipe {
  transform(value) {
    if (!value) return 'N/A';
    return `LOG-${String(value).padStart(6, '0')}`;
  }
  static ɵfac = function FormatLogIdPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormatLogIdPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "formatLogId",
    type: FormatLogIdPipe,
    pure: true
  });
}

/***/ }),

/***/ 19231:
/*!***************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/auditoria.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaComponent: () => (/* binding */ AuditoriaComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var _services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auditoria-state.service */ 4302);
/* harmony import */ var _services_auditoria_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auditoria-export.service */ 70615);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/truncate.pipe */ 24768);
/* harmony import */ var _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/format-ip.pipe */ 78825);
/* harmony import */ var _pipes_format_log_id_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/format-log-id.pipe */ 14950);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _components_auditoria_filtros_auditoria_filtros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auditoria-filtros/auditoria-filtros.component */ 357);
/* harmony import */ var _components_auditoria_estadisticas_auditoria_estadisticas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auditoria-estadisticas/auditoria-estadisticas.component */ 74943);
/* harmony import */ var _components_auditoria_tabla_auditoria_tabla_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/auditoria-tabla/auditoria-tabla.component */ 62517);
/* harmony import */ var _components_auditoria_export_auditoria_export_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auditoria-export/auditoria-export.component */ 21093);
/* harmony import */ var _components_auditoria_timeline_auditoria_timeline_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/auditoria-timeline/auditoria-timeline.component */ 81759);
/* harmony import */ var _components_auditoria_modal_export_auditoria_export_registro_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/auditoria-modal-export/auditoria-export-registro-modal.component */ 25825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 36124);





















 // ✅ Importar



function AuditoriaComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function AuditoriaComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 32)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](8, 3, result_r4.description, 80));
  }
}
function AuditoriaComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, AuditoriaComponent_div_4_div_11_div_1_Template, 9, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function AuditoriaComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function AuditoriaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("keyup.enter", function AuditoriaComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, AuditoriaComponent_div_4_button_8_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, AuditoriaComponent_div_4_div_11_Template, 2, 1, "div", 25)(12, AuditoriaComponent_div_4_div_12_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function AuditoriaComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 44)(7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
}
function AuditoriaComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function AuditoriaComponent_div_5_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u00A1Minimizado! Click para restaurar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function AuditoriaComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 51)(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, AuditoriaComponent_div_5_div_4_div_8_Template, 2, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function AuditoriaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, AuditoriaComponent_div_5_div_2_Template, 13, 0, "div", 38)(3, AuditoriaComponent_div_5_div_3_Template, 3, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, AuditoriaComponent_div_5_div_4_Template, 9, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function AuditoriaComponent_div_17_div_7_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 70)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "User Agent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, ctx_r1.registroSeleccionado.user_agent, 100));
  }
}
function AuditoriaComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "ID Log:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "formatLogId");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 67)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 67)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 67)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "Acci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 67)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Tabla:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 67)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](31, "IP Origen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](34, "formatIp");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div", 67)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37, "Nivel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "div", 70)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](42, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](45, AuditoriaComponent_div_17_div_7_div_45_Template, 6, 4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 13, ctx_r1.registroSeleccionado.log_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](13, 15, ctx_r1.registroSeleccionado.fecha, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.registroSeleccionado.usuario_nombre || "Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"]("badge-" + ctx_r1.registroSeleccionado.accion.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.registroSeleccionado.accion);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.registroSeleccionado.tabla_afectada);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](34, 18, ctx_r1.registroSeleccionado.ip_origen));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"]("nivel-" + (ctx_r1.registroSeleccionado.nivel || "info").toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.registroSeleccionado.nivel || "INFO");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.registroSeleccionado.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.registroSeleccionado.user_agent);
  }
}
function AuditoriaComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "\uD83D\uDD0D Detalles del Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_17_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalDetalles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, AuditoriaComponent_div_17_div_7_Template, 46, 20, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 62)(9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.exportarRegistro(ctx_r1.registroSeleccionado));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Exportar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function AuditoriaComponent_div_17_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarModalDetalles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.registroSeleccionado);
  }
}
class AuditoriaComponent {
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_5__.AuditoriaStateService);
  exportService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auditoria_export_service__WEBPACK_IMPORTED_MODULE_6__.AuditoriaExportService);
  themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService);
  notification = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService);
  // Exponer estado
  logs = this.state.logs;
  estadisticas = this.state.estadisticas;
  alertas = this.state.alertas;
  paginacion = this.state.paginacion;
  cargando = this.state.cargando;
  totalRegistros = this.state.totalRegistros;
  totalPaginas = this.state.totalPaginas;
  // UI State
  isSidebarCollapsed = false;
  currentTheme = 'light';
  showHelpSupport = false;
  isMinimized = false;
  showMinimizeNotification = false;
  isSearchOpen = false;
  searchQuery = '';
  searchResults = [];
  showModalExportIndividual = false;
  registroParaExportar = null;
  // Notificaciones
  notifications = [];
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  // ============================================
  // MODALES (AGREGADOS)
  // ============================================
  showModalDetalles = false;
  showModalTimeline = false;
  registroSeleccionado = null;
  eventosTimeline = [];
  timelineFiltroUsuario = null;
  timelineFiltroAccion = null;
  eventoTimelineSeleccionado = null;
  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.isSidebarCollapsed = theme === 'dark';
    });
  }
  // ============================================
  // SIDEBAR
  // ============================================
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  // ============================================
  // HELP SUPPORT
  // ============================================
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
  }
  minimizeToBubble() {
    this.isMinimized = true;
    this.showMinimizeNotification = true;
    setTimeout(() => this.showMinimizeNotification = false, 3000);
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
  // ============================================
  // NOTIFICACIONES Y MENÚ
  // ============================================
  onToggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onMarkAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }
  // ============================================
  // BÚSQUEDA
  // ============================================
  onOpenSearchModal() {
    this.isSearchOpen = true;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (!this.searchQuery.trim()) return;
    // Usar el servicio real
    this.state.buscar(this.searchQuery).then(results => {
      this.searchResults = results.map(r => ({
        icon: '📝',
        title: `${r.accion} - ${r.usuario_nombre}`,
        description: r.descripcion
      }));
    });
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ============================================
  // ACCIONES DE AUDITORÍA
  // ============================================
  aplicarFiltros(filtros) {
    this.state.actualizarFiltros(filtros);
  }
  limpiarFiltros() {
    this.state.limpiarFiltros();
  }
  cambiarPagina(pagina) {
    this.state.cambiarPagina(pagina);
  }
  exportar(formato) {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const filtros = _this.state.filtros;
        yield _this.exportService.exportar(formato, filtros);
        _this.notification.showSuccess(`Exportación completada en formato ${formato.toUpperCase()}`);
      } catch (error) {
        console.error('Error al exportar:', error);
        _this.notification.showError('Error al exportar');
      }
    })();
  }
  // ============================================
  // MODALES - DETALLES
  // ============================================
  verDetalles(log) {
    this.state.obtenerDetalles(log.log_id).then(detalle => {
      if (detalle) {
        this.registroSeleccionado = detalle;
        this.showModalDetalles = true;
      }
    });
  }
  cerrarModalDetalles() {
    this.showModalDetalles = false;
    this.registroSeleccionado = null;
  }
  exportarRegistro(log) {
    this.notification.showInfo(`Exportando registro ${log.log_id}`);
    // Implementar exportación de un solo registro si es necesario
  }
  // ============================================
  // MODALES - TIMELINE
  // ============================================
  onEventoTimelineSeleccionado(evento) {
    console.log('Evento seleccionado en timeline:', evento);
    // Aquí puedes abrir el modal de detalles o realizar otra acción
  }
  verTimeline(log) {
    this.registroSeleccionado = log;
    this.showModalTimeline = true;
  }
  cargarEventosTimeline() {
    if (!this.registroSeleccionado) return;
    const filtros = {
      fecha_inicio: new Date(new Date(this.registroSeleccionado.fecha).getTime() - 3600000).toISOString(),
      fecha_fin: new Date(new Date(this.registroSeleccionado.fecha).getTime() + 3600000).toISOString(),
      usuario_id: this.timelineFiltroUsuario,
      acciones: this.timelineFiltroAccion ? [this.timelineFiltroAccion] : undefined,
      por_pagina: 50
    };
    this.state.cargarRegistros(filtros).then(() => {
      const logs = this.state.logs();
      this.eventosTimeline = logs.map(l => ({
        id: l.log_id,
        tipo: l.log_id === this.registroSeleccionado?.log_id ? 'principal' : 'relacionado',
        icon: this.getAccionIcon(l.accion),
        usuario: l.usuario_nombre || 'Sistema',
        usuario_id: l.usuario_id,
        accion: l.accion,
        descripcion: l.descripcion,
        fecha: l.fecha,
        ip: l.ip_origen,
        tabla: l.tabla_afectada,
        nivel: l.nivel
      }));
    });
  }
  cerrarModalTimeline() {
    this.showModalTimeline = false;
    this.registroSeleccionado = null;
  }
  actualizarTimeline() {
    this.cargarEventosTimeline();
  }
  calcularPosicionTimeline(fecha) {
    if (!this.eventosTimeline.length || !this.registroSeleccionado) return 0;
    const fechas = this.eventosTimeline.map(e => new Date(e.fecha).getTime());
    const fechaEvento = new Date(fecha).getTime();
    const fechaCentral = new Date(this.registroSeleccionado.fecha).getTime();
    const minFecha = fechaCentral - 3600000;
    const maxFecha = fechaCentral + 3600000;
    const total = maxFecha - minFecha;
    const desdeInicio = fechaEvento - minFecha;
    if (total === 0) return 50;
    let porcentaje = desdeInicio / total * 100;
    return Math.max(0, Math.min(100, porcentaje));
  }
  seleccionarEventoTimeline(evento) {
    this.eventoTimelineSeleccionado = evento;
  }
  getAccionIcon(accion) {
    const icons = {
      INSERT: '➕',
      UPDATE: '✏️',
      DELETE: '🗑️',
      SELECT: '🔍',
      LOGIN: '🔑',
      LOGOUT: '🚪',
      ERROR: '❌',
      BACKUP: '💾'
    };
    return icons[accion] || '📝';
  }
  /**
  * Exportar un registro individual - Abre el modal
  */
  exportarRegistroIndividual(log) {
    this.registroParaExportar = log;
    this.showModalExportIndividual = true;
  }
  /**
   * Exportar un registro específico (llamado desde el modal)
   */
  exportarRegistroEspecifico(formato) {
    var _this2 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.registroParaExportar) return;
      try {
        // Crear filtros específicos para este registro
        const filtros = {
          log_id: _this2.registroParaExportar.log_id,
          fecha_inicio: _this2.registroParaExportar.fecha,
          fecha_fin: _this2.registroParaExportar.fecha
        };
        yield _this2.exportService.exportar(formato, filtros);
        _this2.notification.showSuccess(`Registro ${_this2.registroParaExportar.log_id} exportado en formato ${formato.toUpperCase()}`);
        _this2.cerrarModalExportIndividual();
      } catch (error) {
        console.error('Error al exportar registro:', error);
        _this2.notification.showError('Error al exportar el registro');
      }
    })();
  }
  cerrarModalExportIndividual() {
    this.showModalExportIndividual = false;
    this.registroParaExportar = null;
  }
  static ɵfac = function AuditoriaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
    type: AuditoriaComponent,
    selectors: [["app-auditoria"]],
    decls: 20,
    vars: 18,
    consts: [[1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "auditoria-container"], [1, "header"], [3, "aplicarFiltros", "limpiarFiltros"], [3, "estadisticas"], [3, "paginaCambiada", "verDetalles", "exportarRegistro", "verTimeline", "logs", "paginacion", "cargando", "totalPaginas"], [3, "exportStarted"], [3, "isSidebarCollapsed"], ["class", "modal-overlay", 4, "ngIf"], [3, "cerrar", "eventoSeleccionado", "registroSeleccionado", "isOpen"], [3, "cerrarModal", "exportar", "isOpen", "registro"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar registros de auditor\u00EDa...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-icon"], ["title", "Cerrar", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar", 1, "bubble-close", 3, "click"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["class", "modal-content", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-content"], [1, "detalles-grid"], [1, "detalle-item"], [1, "badge"], [1, "nivel-badge"], [1, "detalle-item", "full-width"], ["class", "detalle-item full-width", 4, "ngIf"]],
    template: function AuditoriaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0)(1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("toggleSidebar", function AuditoriaComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function AuditoriaComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "main", 2)(3, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("toggleNotifications", function AuditoriaComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function AuditoriaComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function AuditoriaComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function AuditoriaComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, AuditoriaComponent_div_4_Template, 13, 4, "div", 4)(5, AuditoriaComponent_div_5_Template, 5, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\uD83D\uDCCA Auditor\u00EDa del Sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Monitorizaci\u00F3n integral de todas las actividades del sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "app-auditoria-filtros", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("aplicarFiltros", function AuditoriaComponent_Template_app_auditoria_filtros_aplicarFiltros_12_listener($event) {
          return ctx.aplicarFiltros($event);
        })("limpiarFiltros", function AuditoriaComponent_Template_app_auditoria_filtros_limpiarFiltros_12_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "app-auditoria-estadisticas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "app-auditoria-tabla", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("paginaCambiada", function AuditoriaComponent_Template_app_auditoria_tabla_paginaCambiada_14_listener($event) {
          return ctx.cambiarPagina($event);
        })("verDetalles", function AuditoriaComponent_Template_app_auditoria_tabla_verDetalles_14_listener($event) {
          return ctx.verDetalles($event);
        })("exportarRegistro", function AuditoriaComponent_Template_app_auditoria_tabla_exportarRegistro_14_listener($event) {
          return ctx.exportarRegistro($event);
        })("exportarRegistro", function AuditoriaComponent_Template_app_auditoria_tabla_exportarRegistro_14_listener($event) {
          return ctx.exportarRegistroIndividual($event);
        })("verTimeline", function AuditoriaComponent_Template_app_auditoria_tabla_verTimeline_14_listener($event) {
          return ctx.verTimeline($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "app-auditoria-export", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("exportStarted", function AuditoriaComponent_Template_app_auditoria_export_exportStarted_15_listener($event) {
          return ctx.exportar($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](16, "app-footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, AuditoriaComponent_div_17_Template, 13, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "app-auditoria-timeline", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("cerrar", function AuditoriaComponent_Template_app_auditoria_timeline_cerrar_18_listener() {
          return ctx.cerrarModalTimeline();
        })("eventoSeleccionado", function AuditoriaComponent_Template_app_auditoria_timeline_eventoSeleccionado_18_listener($event) {
          return ctx.onEventoTimelineSeleccionado($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "app-auditoria-export-registro-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("cerrarModal", function AuditoriaComponent_Template_app_auditoria_export_registro_modal_cerrarModal_19_listener() {
          return ctx.cerrarModalExportIndividual();
        })("exportar", function AuditoriaComponent_Template_app_auditoria_export_registro_modal_exportar_19_listener($event) {
          return ctx.exportarRegistroEspecifico($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("estadisticas", ctx.estadisticas());
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("logs", ctx.logs())("paginacion", ctx.paginacion())("cargando", ctx.cargando())("totalPaginas", ctx.totalPaginas());
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showModalDetalles);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("registroSeleccionado", ctx.registroSeleccionado)("isOpen", ctx.showModalTimeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isOpen", ctx.showModalExportIndividual)("registro", ctx.registroParaExportar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_13__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_15__.HelpSupportComponent, _components_auditoria_filtros_auditoria_filtros_component__WEBPACK_IMPORTED_MODULE_16__.AuditoriaFiltrosComponent, _components_auditoria_estadisticas_auditoria_estadisticas_component__WEBPACK_IMPORTED_MODULE_17__.AuditoriaEstadisticasComponent, _components_auditoria_timeline_auditoria_timeline_component__WEBPACK_IMPORTED_MODULE_20__.AuditoriaTimelineComponent, _components_auditoria_tabla_auditoria_tabla_component__WEBPACK_IMPORTED_MODULE_18__.AuditoriaTablaComponent, _components_auditoria_export_auditoria_export_component__WEBPACK_IMPORTED_MODULE_19__.AuditoriaExportComponent, _components_auditoria_modal_export_auditoria_export_registro_modal_component__WEBPACK_IMPORTED_MODULE_21__.AuditoriaExportRegistroModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__.TruncatePipe, _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_10__.FormatIpPipe, _pipes_format_log_id_pipe__WEBPACK_IMPORTED_MODULE_11__.FormatLogIdPipe],
    styles: [".dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 280px;\n  transition: all 0.3s;\n  width: calc(100% - 280px);\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.auditoria-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n  width: 100%;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  color: var(--text-primary);\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0 0 12px 0;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-badges[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-badges[_ngcontent-%COMP%]   .badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.auditoria-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 8px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border: 1px solid var(--modal-border);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  max-width: 90%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideInUp 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(50px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-large[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 90%;\n  margin-left: 295px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  width: 90%;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.detalles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n.detalles-grid[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px 0;\n  border-bottom: 1px dashed var(--border-light);\n}\n.detalles-grid[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detalles-grid[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  word-break: break-word;\n}\n.detalles-grid[_ngcontent-%COMP%]   .detalle-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.timeline-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.timeline-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  min-width: 180px;\n  font-size: 14px;\n}\n.timeline-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n.timeline-controls[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.timeline-controls[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 120px;\n  background: var(--bg-secondary);\n  border-radius: 12px;\n  margin: 24px 0;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 4px;\n  background: var(--border-color);\n  border-radius: 2px;\n  margin: 58px 40px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::before, \n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: -8px;\n  width: 12px;\n  height: 12px;\n  background: var(--primary);\n  border-radius: 50%;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  transform: translateX(-50%);\n  cursor: pointer;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--bg-primary);\n  border: 2px solid;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.3s;\n  box-shadow: var(--shadow-sm);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  box-shadow: var(--shadow-lg);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-principal[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: var(--danger-light);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-relacionado[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--info);\n  background: var(--info-light);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-secundario[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--secondary);\n  background: var(--secondary-light);\n}\n.timeline-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n.timeline-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.5;\n  margin-bottom: 16px;\n}\n.timeline-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 16px;\n}\n.timeline-info-panel[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  border-left: 4px solid var(--primary);\n}\n.timeline-info-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: var(--text-primary);\n  font-size: 16px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px 0;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 12px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .auditoria-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .auditoria-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .modal-container.modal-large[_ngcontent-%COMP%] {\n    max-width: 96%;\n  }\n  .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n    max-width: 96%;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-container.modal-large[_ngcontent-%COMP%], \n   .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 0;\n    height: 95vh;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9hdWRpdG9yaWEuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBQUZGO0FBSUU7RUFFSSxpQkFBQTtBQUhOO0FBV0E7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQVRGO0FBV0U7RUFDRSxVQUFBO0FBVEo7QUFZRTtFQUNFLHVCQUFBO0FBVko7QUFhRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWFJO0VBQ0UsZ0NBQUE7QUFYTjtBQW9CQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQWxCRjtBQW9CRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBbEJKO0VBb0JFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBbEJKO0FBQ0Y7QUFJQTtFQW1CSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBcEJKO0FBVEE7RUFnQ00sT0FBQTtFQUNBLGdCQUFBO0FBcEJOO0FBYkE7RUFvQ1EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFwQlI7QUF0QkE7RUE4Q1EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFyQlI7QUEzQkE7RUFvRFEsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBdEJSO0FBaENBO0VBeURVLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF0QlY7QUF3QlU7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUF0Qlo7QUF5QlU7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7QUF2Qlo7QUFyREE7RUFnRlksZUFBQTtBQXhCWjtBQXhEQTtFQXVGTSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBNUJOO0FBcUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQkFBQTtBQW5DRjtBQXFDRTtFQUNFO0lBQ0UsVUFBQTtFQW5DSjtFQXFDRTtJQUNFLFVBQUE7RUFuQ0o7QUFDRjtBQWVBO0VBd0JJLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQXBDSjtBQXNDSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VBcENOO0VBc0NJO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VBcENOO0FBQ0Y7QUF1Q0k7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQXJDTjtBQXdDSTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQXRDTjtBQWhCQTtFQTBETSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXZDTjtBQXhCQTtFQWtFUSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBdkNSO0FBakNBO0VBNEVRLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQXhDUjtBQTBDUTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7QUF4Q1Y7QUE3Q0E7RUEyRk0sYUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQTNDTjtBQTZDTTtFQUNFLFVBQUE7QUEzQ1I7QUE4Q007RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBNUNSO0FBK0NNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQTdDUjtBQStDUTtFQUNFLGdDQUFBO0FBN0NWO0FBaEVBO0VBbUhNLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFoRE47QUF5REE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBdkRGO0FBb0RBO0VBTUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQXZESjtBQTZDQTtFQWFNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXZETjtBQXNDQTtFQXFCTSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQXhETjtBQTJESTtFQUNFLG1CQUFBO0FBekROO0FBa0VBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFoRUY7QUE0REE7RUFPSSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBaEVKO0FBa0VJO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUFoRU47QUE4Q0E7RUF1QkksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFsRUo7QUFvRUk7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBbEVOO0FBdUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBckVGO0FBOERBO0VBVUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBckVKO0FBdUVJOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFyRU47QUF3RUk7RUFDRSxPQUFBO0FBdEVOO0FBeUVJO0VBQ0UsUUFBQTtBQXZFTjtBQXVDQTtFQW9DTSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUF4RU47QUFpQ0E7RUEwQ1EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBeEVSO0FBMEVRO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQXhFVjtBQTRFTTtFQUNFLDJCQUFBO0VBQ0EsK0JBQUE7QUExRVI7QUE2RU07RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0FBM0VSO0FBOEVNO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtBQTVFUjtBQWtGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFoRkY7QUE4RUE7RUFLSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBaEZKO0FBeUVBO0VBV0ksd0JBQUE7RUFDQSxlQUFBO0FBakZKO0FBcUZBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBbkZGO0FBOEVBO0VBUUksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFuRko7QUF5RUE7RUFjSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0FBcEZKO0FBb0VBO0VBbUJNLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBcEZOO0FBOERBO0VBeUJRLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBcEZSO0FBeURBO0VBK0JRLDBCQUFBO0VBQ0EsZUFBQTtBQXJGUjtBQXdGTTtFQUNFLG1CQUFBO0FBdEZSO0FBNEZBO0VBQ0U7SUFDRSxhQUFBO0VBMUZGO0FBQ0Y7QUE2RkE7RUFDRTtJQUNFLGFBQUE7RUEzRkY7QUFDRjtBQWlHQTtFQUNFO0lBQStCLGNBQUE7RUE5Ri9CO0VBK0ZBO0lBQWdDLGNBQUE7RUE1RmhDO0VBNkZBO0lBQW1CLGVBQUE7RUExRm5CO0VBMkZBO0lBQWlCLGtCQUFBO0VBeEZqQjtBQUNGO0FBMEZBO0VBQ0U7O0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBdkZGO0VBeUZBO0lBQWdCLGtCQUFBO0VBdEZoQjtFQXVGQTtJQUFtQixlQUFBO0VBcEZuQjtFQXFGQTtJQUFpQixrQkFBQTtFQWxGakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEQVNIQk9BUkQgQ09OVEFJTkVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuICAmLnNpZGViYXItY29sbGFwc2VkIHtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUFJTiBDT05URU5UXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiA2NnB4O1xuICBtYXJnaW4tbGVmdDogMjgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERSBBVURJVE9Sw4PCjUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5hdWRpdG9yaWEtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XG5cbiAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlYWRlciBkZSBsYSBww4PCoWdpbmFcbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuXG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuXG4gICAgICAucGFnZS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItYmFkZ2VzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICAgICAmLmJhZGdlLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmJhZGdlLXN1Y2Nlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFkZ2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG5cbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbmltYXRpb246IHNsaWRlSW5VcCAwLjRzIGVhc2Utb3V0O1xuXG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSBzY2FsZSgwLjk1KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubW9kYWwtbGFyZ2Uge1xuICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogMjk1cHg7XG4gICAgfVxuXG4gICAgJi5tb2RhbC14bGFyZ2Uge1xuICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBERVRBTExFUyBHUklEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uZGV0YWxsZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG5cbiAgLmRldGFsbGUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcblxuICAgIGxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAmLmZ1bGwtd2lkdGgge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRJTUVMSU5FXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4udGltZWxpbmUtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBzZWxlY3Qge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tc21hbGwge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWVsaW5lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAyNHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnRpbWVsaW5lLXRyYWNrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiA1OHB4IDQwcHg7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC50aW1lbGluZS1ldmVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0yMHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAuZXZlbnQtbWFya2VyIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmV2ZW50LXByaW5jaXBhbCAuZXZlbnQtbWFya2VyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgfVxuXG4gICAgICAmLmV2ZW50LXJlbGFjaW9uYWRvIC5ldmVudC1tYXJrZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWluZm8pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJi5ldmVudC1zZWN1bmRhcmlvIC5ldmVudC1tYXJrZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aW1lbGluZS1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi50aW1lbGluZS1pbmZvLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuXG4gIGg0IHtcbiAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmV2ZW50LWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLmRldGFpbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBwYWRkaW5nOiA0cHggMDtcblxuICAgICAgLmRldGFpbC1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgICYuZnVsbC13aWR0aCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXVkaXRvcmlhLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmF1ZGl0b3JpYS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFIE1PREFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtY29udGFpbmVyLm1vZGFsLWxhcmdlIHsgbWF4LXdpZHRoOiA5NiU7IH1cbiAgLm1vZGFsLWNvbnRhaW5lci5tb2RhbC14bGFyZ2UgeyBtYXgtd2lkdGg6IDk2JTsgfVxuICAubW9kYWwtaGVhZGVyIGgyIHsgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5tb2RhbC1jb250ZW50IHsgcGFkZGluZzogMTJweCAxNnB4OyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGFpbmVyLm1vZGFsLWxhcmdlLCAubW9kYWwtY29udGFpbmVyLm1vZGFsLXhsYXJnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaGVpZ2h0OiA5NXZoO1xuICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gIH1cbiAgLm1vZGFsLWhlYWRlciB7IHBhZGRpbmc6IDEwcHggMTRweDsgfVxuICAubW9kYWwtaGVhZGVyIGgyIHsgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5tb2RhbC1jb250ZW50IHsgcGFkZGluZzogMTBweCAxMnB4OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 21093:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-export/auditoria-export.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaExportComponent: () => (/* binding */ AuditoriaExportComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auditoria_export_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auditoria-export.service */ 70615);
/* harmony import */ var _services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auditoria-state.service */ 4302);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 36124);









function AuditoriaExportComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuditoriaExportComponent_button_9_Template_button_click_0_listener() {
      const fmt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.formatoSeleccionado = fmt_r2.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fmt_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r2.formatoSeleccionado === fmt_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fmt_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fmt_r2.label, " ");
  }
}
function AuditoriaExportComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u23F3 Exportando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AuditoriaExportComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\uD83D\uDCE5 Exportar ", ctx_r2.formatoSeleccionado.toUpperCase());
  }
}
class AuditoriaExportComponent {
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_5__.AuditoriaStateService);
  exportService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auditoria_export_service__WEBPACK_IMPORTED_MODULE_4__.AuditoriaExportService);
  notification = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService);
  exportStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  // ✅ Tipado correcto
  formatoSeleccionado = 'csv';
  exportando = false;
  formatos = [{
    value: 'csv',
    label: 'CSV',
    icon: '📋'
  }, {
    value: 'json',
    label: 'JSON',
    icon: '🔧'
  }, {
    value: 'excel',
    label: 'Excel',
    icon: '📊'
  }, {
    value: 'pdf',
    label: 'PDF',
    icon: '📄'
  }];
  exportar() {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.exportando = true;
      _this.exportStarted.emit(_this.formatoSeleccionado);
      try {
        const filtros = _this.state.filtros;
        yield _this.exportService.exportar(_this.formatoSeleccionado, filtros);
        _this.notification.showSuccess(`Exportación completada en formato ${_this.formatoSeleccionado.toUpperCase()}`);
      } catch (error) {
        _this.notification.showError('Error al exportar');
      } finally {
        _this.exportando = false;
      }
    })();
  }
  static ɵfac = function AuditoriaExportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaExportComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AuditoriaExportComponent,
    selectors: [["app-auditoria-export"]],
    outputs: {
      exportStarted: "exportStarted"
    },
    decls: 14,
    vars: 4,
    consts: [[1, "export-panel"], [1, "export-header"], [1, "export-options"], [1, "form-group"], [1, "format-buttons"], ["class", "format-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "export-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "format-btn", 3, "click"], [1, "icon"]],
    template: function AuditoriaExportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\uD83D\uDCE4 Exportar Auditor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Formato:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AuditoriaExportComponent_button_9_Template, 4, 4, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuditoriaExportComponent_Template_button_click_11_listener() {
          return ctx.exportar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AuditoriaExportComponent_span_12_Template, 2, 0, "span", 8)(13, AuditoriaExportComponent_span_13_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.formatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.exportando);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.exportando);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.exportando);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    styles: [".export-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-sm);\n}\n.export-panel[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.export-panel[_ngcontent-%COMP%]   .export-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .format-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .format-buttons[_ngcontent-%COMP%]   .format-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .format-buttons[_ngcontent-%COMP%]   .format-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .format-buttons[_ngcontent-%COMP%]   .format-btn.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border-color: transparent;\n  color: white;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .format-buttons[_ngcontent-%COMP%]   .format-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-light);\n}\n.export-panel[_ngcontent-%COMP%]   .export-options[_ngcontent-%COMP%]   .export-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS1leHBvcnQvYXVkaXRvcmlhLWV4cG9ydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBSEY7QUFIQTtFQVNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FBSEo7QUFYQTtFQWlCTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSE47QUFwQkE7RUE2Qk0sbUJBQUE7QUFOTjtBQXZCQTtFQWdDUSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQU5SO0FBOUJBO0VBd0NRLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQVBSO0FBbkNBO0VBNkNVLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQVBWO0FBU1U7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVVVO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFSWjtBQTFEQTtFQXNFWSxlQUFBO0FBVFo7QUE3REE7RUE2RU0sYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFiTjtBQXBFQTtFQW9GUSxpQkFBQTtFQUNBLGVBQUE7QUFiUiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQU5FTCBERSBFWFBPUlRBQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLmV4cG9ydC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5leHBvcnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5leHBvcnQtb3B0aW9ucyB7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtYXQtYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLmZvcm1hdC1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhwb3J0LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24768:
/*!***************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/pipes/truncate.pipe.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class TruncatePipe {
  transform(value, limit = 100, ellipsis = '...') {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + ellipsis : value;
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

/***/ 25825:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-modal-export/auditoria-export-registro-modal.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaExportRegistroModalComponent: () => (/* binding */ AuditoriaExportRegistroModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);




function AuditoriaExportRegistroModalComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16)(7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 16)(12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Acci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16)(17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.registro.log_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.registro.usuario_nombre || "Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.registro.accion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 4, ctx_r1.registro.fecha, "dd/MM/yyyy HH:mm:ss"));
  }
}
function AuditoriaExportRegistroModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83D\uDCE5 Exportar Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuditoriaExportRegistroModalComponent_div_0_div_8_Template, 22, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Selecciona el formato de exportaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.exportarFormato("csv"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.exportarFormato("excel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.exportarFormato("pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\uD83D\uDCD1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13)(29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuditoriaExportRegistroModalComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.registro);
  }
}
class AuditoriaExportRegistroModalComponent {
  isOpen = false;
  registro = null;
  cerrarModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  exportar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  cerrar() {
    this.cerrarModal.emit();
  }
  exportarFormato(formato) {
    this.exportar.emit(formato);
  }
  onOverlayClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
      this.cerrar();
    }
  }
  static ɵfac = function AuditoriaExportRegistroModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaExportRegistroModalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuditoriaExportRegistroModalComponent,
    selectors: [["app-auditoria-export-registro-modal"]],
    inputs: {
      isOpen: "isOpen",
      registro: "registro"
    },
    outputs: {
      cerrarModal: "cerrarModal",
      exportar: "exportar"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-export", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], ["class", "export-info", 4, "ngIf"], [1, "export-buttons"], [1, "buttons-grid"], [1, "btn-export", "csv", 3, "click"], [1, "btn-icon"], [1, "btn-export", "excel", 3, "click"], [1, "btn-export", "pdf", 3, "click"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "export-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"]],
    template: function AuditoriaExportRegistroModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuditoriaExportRegistroModalComponent_div_0_Template, 31, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 480px;\n  max-width: 90%;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: linear-gradient(135deg, #1a472a 0%, #2d6a4f 100%);\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 18px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.export-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.export-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.export-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.export-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n}\n.export-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: #212529;\n  font-family: monospace;\n}\n.export-buttons[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #495057;\n  margin-bottom: 16px;\n}\n.export-buttons[_ngcontent-%COMP%]   .buttons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.btn-icon) {\n  font-size: 12px;\n  font-weight: 500;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export.csv[_ngcontent-%COMP%]:hover {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export.excel[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  background: #f0f8ff;\n}\n.export-buttons[_ngcontent-%COMP%]   .btn-export.pdf[_ngcontent-%COMP%]:hover {\n  border-color: #dc3545;\n  background: #fff5f5;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dark-theme[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n}\n.dark-theme[_nghost-%COMP%]   .export-info[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .export-info[_ngcontent-%COMP%] {\n  background: #3d3d3d;\n}\n.dark-theme[_nghost-%COMP%]   .export-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .export-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.dark-theme[_nghost-%COMP%]   .export-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .export-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\n.dark-theme[_nghost-%COMP%]   .export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%] {\n  background: #3d3d3d;\n  border-color: #4d4d4d;\n  color: #e9ecef;\n}\n.dark-theme[_nghost-%COMP%]   .export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .export-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:hover {\n  background: #4d4d4d;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS1tb2RhbC1leHBvcnQvYXVkaXRvcmlhLWV4cG9ydC1yZWdpc3Ryby1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQU47QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkRBQUE7RUFDQSw0QkFBQTtBQUZOO0FBTEk7RUFVSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGUjtBQVZJO0VBZ0JJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUhSO0FBS1E7RUFDRSxVQUFBO0FBSFY7QUFRSTtFQUNFLGFBQUE7QUFOTjtBQVNJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBOO0FBR0k7RUFPSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFQUjtBQVNRO0VBQ0UsbUJBQUE7QUFQVjtBQU5JO0VBaUJNLGdCQUFBO0VBQ0EsY0FBQTtBQVJWO0FBVkk7RUFzQk0sY0FBQTtFQUNBLHNCQUFBO0FBVFY7QUFjSTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQVNJO0VBUUksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQWRSO0FBSUk7RUFjSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBZlI7QUFSSTtFQTBCTSxlQUFBO0FBZlY7QUFYSTtFQThCTSxlQUFBO0VBQ0EsZ0JBQUE7QUFoQlY7QUFtQlE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBakJWO0FBb0JRO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQWxCVjtBQXFCUTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFuQlY7QUF3Qkk7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBdEJOO0FBa0JJO0VBT0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUF0QlI7QUFXSTtFQWVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF2QlI7QUF5QlE7RUFDRSxtQkFBQTtBQXZCVjtBQTRCSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBMUJOO0VBNEJJO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBMUJOO0FBQ0Y7QUE2Qkk7RUFFSSxtQkFBQTtBQTVCUjtBQTBCSTtFQU1JLG1CQUFBO0FBN0JSO0FBdUJJO0VBU00sY0FBQTtBQTdCVjtBQW9CSTtFQWFNLGNBQUE7QUE5QlY7QUFpQkk7RUFrQkksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFoQ1I7QUFrQ1E7RUFDRSxtQkFBQTtBQWhDViIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5tb2RhbC1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBhbmltYXRpb246IG1vZGFsRmFkZUluIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWE0NzJhIDAlLCAjMmQ2YTRmIDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcblxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtY2xvc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgIH1cblxuICAgIC5leHBvcnQtaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgIC5pbmZvLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8tdmFsdWUge1xuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhwb3J0LWJ1dHRvbnMge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9ucy1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuYnRuLWV4cG9ydCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbjpub3QoLmJ0bi1pY29uKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNzdjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGZmZjQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmV4Y2VsOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YwZjhmZjtcbiAgICAgICAgfVxuXG4gICAgICAgICYucGRmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjVmNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIH1cblxuICAgICAgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb2RhbEZhZGVJbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICAgIC5tb2RhbC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgICAgfVxuXG4gICAgICAuZXhwb3J0LWluZm8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuXG4gICAgICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgICAgICBjb2xvcjogI2FkYjViZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvLXZhbHVlIHtcbiAgICAgICAgICBjb2xvcjogI2U5ZWNlZjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXhwb3J0LWJ1dHRvbnMgLmJ0bi1leHBvcnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuICAgICAgICBib3JkZXItY29sb3I6ICM0ZDRkNGQ7XG4gICAgICAgIGNvbG9yOiAjZTllY2VmO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 54722:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/services/auditoria.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaService: () => (/* binding */ AuditoriaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 50698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 11817);




class AuditoriaService {
  http;
  API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/auditoria`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Listar registros con paginación y filtros
   */
  listar(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.entries(filtros).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          value.forEach(v => params = params.append(`${key}[]`, v));
        } else {
          params = params.set(key, value.toString());
        }
      }
    });
    return this.http.get(this.API_URL, {
      params
    });
  }
  /**
   * Obtener un registro específico
   */
  obtener(id) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  /**
   * Obtener estadísticas
   */
  obtenerEstadisticas(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          params = params.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.API_URL}/estadisticas`, {
      params
    });
  }
  /**
   * Obtener alertas de seguridad
   */
  obtenerAlertas(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          params = params.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.API_URL}/alertas`, {
      params
    });
  }
  /**
   * Analizar patrones
   */
  analizarPatrones(filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filtros) {
      Object.entries(filtros).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          params = params.set(key, value.toString());
        }
      });
    }
    return this.http.get(`${this.API_URL}/patrones`, {
      params
    });
  }
  /**
   * Buscar en registros
   */
  buscar(termino, filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('q', termino);
    if (filtros) {
      if (filtros.fecha_inicio) params = params.set('fecha_inicio', filtros.fecha_inicio);
      if (filtros.fecha_fin) params = params.set('fecha_fin', filtros.fecha_fin);
      if (filtros.usuario_id) params = params.set('usuario_id', filtros.usuario_id.toString());
    }
    return this.http.get(`${this.API_URL}/buscar`, {
      params
    });
  }
  /**
   * Exportar registros - Devuelve Blob para descarga
   */
  exportar(formato, filtros) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('formato', formato);
    if (filtros) {
      if (filtros.fecha_inicio) params = params.set('fecha_inicio', filtros.fecha_inicio);
      if (filtros.fecha_fin) params = params.set('fecha_fin', filtros.fecha_fin);
      if (filtros.usuario_id) params = params.set('usuario_id', filtros.usuario_id.toString());
      if (filtros.tabla_afectada) params = params.set('tabla_afectada', filtros.tabla_afectada);
      if (filtros.keyword) params = params.set('keyword', filtros.keyword);
      if (filtros.acciones && filtros.acciones.length > 0) {
        filtros.acciones.forEach(a => params = params.append('acciones[]', a));
      }
    }
    return this.http.get(`${this.API_URL}/exportar`, {
      params,
      responseType: 'blob'
    });
  }
  static ɵfac = function AuditoriaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuditoriaService,
    factory: AuditoriaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 62517:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-tabla/auditoria-tabla.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaTablaComponent: () => (/* binding */ AuditoriaTablaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ 24768);
/* harmony import */ var _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/format-ip.pipe */ 78825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);






function AuditoriaTablaComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td")(13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "formatIp");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td", 10)(27, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_tr_24_Template_button_click_27_listener() {
      const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.verDetalles.emit(log_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_tr_24_Template_button_click_29_listener() {
      const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.exportarRegistro.emit(log_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\uD83D\uDCE5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_tr_24_Template_button_click_31_listener() {
      const log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.verTimeline.emit(log_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\uD83D\uDCC8");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r2.getRowClass(log_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r2.log_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 17, log_r2.fecha, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 20, log_r2.fecha, "HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r2.usuario_nombre || "Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("badge-" + log_r2.accion.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r2.accion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](log_r2.tabla_afectada);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate"](log_r2.descripcion));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 23, log_r2.descripcion, 80));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 26, log_r2.ip_origen));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("nivel-" + (log_r2.nivel || "info").toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", log_r2.nivel || "INFO", " ");
  }
}
function AuditoriaTablaComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cargando registros... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AuditoriaTablaComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "No hay registros de auditor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AuditoriaTablaComponent_div_27_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_div_27_span_5_Template_span_click_0_listener() {
      const pagina_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cambiarPagina(pagina_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pagina_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", pagina_r6 === (ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pagina_r6, " ");
  }
}
function AuditoriaTablaComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_div_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cambiarPagina(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u23EE\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_div_27_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cambiarPagina(((ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) || 1) - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AuditoriaTablaComponent_div_27_span_5_Template, 2, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_div_27_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cambiarPagina(((ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) || 1) + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuditoriaTablaComponent_div_27_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.cambiarPagina(ctx_r2.totalPaginas));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u23ED\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.getRangoPaginas());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) === ctx_r2.totalPaginas);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r2.paginacion == null ? null : ctx_r2.paginacion.current_page) === ctx_r2.totalPaginas);
  }
}
class AuditoriaTablaComponent {
  logs = [];
  paginacion = null;
  cargando = false;
  totalPaginas = 1;
  paginaCambiada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  verDetalles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  exportarRegistro = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  verTimeline = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  getRowClass(log) {
    const classes = [];
    if (log.nivel === 'ERROR') classes.push('row-error');
    if (log.nivel === 'CRITICAL') classes.push('row-critical');
    if (log.accion === 'DELETE') classes.push('row-delete');
    return classes.join(' ');
  }
  // ✅ Conversión explícita a number
  cambiarPagina(pagina) {
    const numPagina = typeof pagina === 'string' ? parseInt(pagina, 10) : pagina;
    if (!isNaN(numPagina) && numPagina >= 1 && numPagina <= this.totalPaginas) {
      this.paginaCambiada.emit(numPagina);
    }
  }
  getRangoPaginas() {
    const current = this.paginacion?.current_page || 1;
    const last = this.totalPaginas;
    const delta = 2;
    const range = [];
    const result = [];
    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || i >= current - delta && i <= current + delta) {
        range.push(i);
      }
    }
    let prev = 0;
    for (const i of range) {
      if (prev !== 0 && i - prev === 2) {
        result.push(prev + 1);
      } else if (prev !== 0 && i - prev !== 1) {
        result.push('...');
      }
      result.push(i);
      prev = i;
    }
    return result;
  }
  static ɵfac = function AuditoriaTablaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaTablaComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AuditoriaTablaComponent,
    selectors: [["app-auditoria-tabla"]],
    inputs: {
      logs: "logs",
      paginacion: "paginacion",
      cargando: "cargando",
      totalPaginas: "totalPaginas"
    },
    outputs: {
      paginaCambiada: "paginaCambiada",
      verDetalles: "verDetalles",
      exportarRegistro: "exportarRegistro",
      verTimeline: "verTimeline"
    },
    decls: 28,
    vars: 4,
    consts: [[1, "table-container"], [1, "table-responsive"], [1, "audit-table"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "time"], [1, "accion-badge"], [3, "title"], [1, "nivel-badge"], [1, "actions"], ["title", "Ver detalles", 1, "btn-action", 3, "click"], ["title", "Exportar", 1, "btn-action", 3, "click"], ["title", "L\u00EDnea de tiempo", 1, "btn-action", 3, "click"], ["colspan", "9", 1, "loading-cell"], [1, "spinner"], ["colspan", "9", 1, "empty-cell"], [1, "empty-state"], [1, "empty-icon"], [1, "pagination"], [3, "click", "disabled"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]],
    template: function AuditoriaTablaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Fecha/Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Tabla");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Nivel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AuditoriaTablaComponent_tr_24_Template, 33, 28, "tr", 3)(25, AuditoriaTablaComponent_tr_25_Template, 4, 0, "tr", 4)(26, AuditoriaTablaComponent_tr_26_Template, 7, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AuditoriaTablaComponent_div_27_Template, 10, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.logs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cargando && ctx.logs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalPaginas > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__.TruncatePipe, _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_3__.FormatIpPipe],
    styles: [".table-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 450px;\n  overflow-y: auto;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 700px;\n  font-size: 13px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  position: sticky;\n  top: 0;\n  z-index: 5;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  border-bottom: 2px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: background 0.15s ease;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-critical[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  border-left: 3px solid var(--danger);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-error[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-warning[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-delete[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  color: var(--text-secondary);\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 12px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-insert[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-update[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-select[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-login[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .accion-badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nivel-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nivel-badge.nivel-error[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nivel-badge.nivel-critical[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nivel-badge.nivel-warning[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .nivel-badge.nivel-info[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 4px 8px;\n  cursor: pointer;\n  font-size: 14px;\n  border-radius: 6px;\n  transition: all 0.2s;\n  color: var(--text-secondary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: scale(1.1);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action.btn-view[_ngcontent-%COMP%]:hover {\n  color: var(--info);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action.btn-export[_ngcontent-%COMP%]:hover {\n  color: var(--success);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action.btn-timeline[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .loading-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px !important;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .loading-cell[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin: 0 auto 12px auto;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .loading-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px !important;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  opacity: 0.5;\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .audit-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 13px;\n}\n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-color);\n  flex-wrap: wrap;\n}\n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  color: var(--text-secondary);\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  min-width: 32px;\n  text-align: center;\n  transition: all 0.2s;\n}\n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), \n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, \n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border-color: transparent;\n  color: white;\n}\n@media (max-width: 768px) {\n  .audit-table[_ngcontent-%COMP%] {\n    min-width: 550px;\n    font-size: 12px;\n  }\n  .audit-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 10px;\n  }\n  .audit-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n  }\n  .audit-table[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 2px 6px;\n  }\n}\n@media (max-width: 480px) {\n  .audit-table[_ngcontent-%COMP%] {\n    min-width: 450px;\n    font-size: 11px;\n  }\n  .audit-table[_ngcontent-%COMP%]   .col-descripcion[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n  .audit-table[_ngcontent-%COMP%]   .col-ip[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS10YWJsYS9hdWRpdG9yaWEtdGFibGEuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUhBO0VBU0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUF1QixVQUFBO0VBQVksV0FBQTtBQUR2QztBQUVJO0VBQTZCLCtCQUFBO0FBQ2pDO0FBQUk7RUFBNkIsMEJBQUE7RUFBNEIsa0JBQUE7QUFJN0Q7QUFuQkE7RUFrQk0sV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSU47QUF6QkE7RUF3QlEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBSVI7QUEvQkE7RUE4QlUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBSVY7QUF6Q0E7RUEyQ1UsNENBQUE7RUFDQSxpQ0FBQTtBQUNWO0FBQ1U7RUFBVSwyQkFBQTtBQUVwQjtBQURVO0VBQWlCLCtCQUFBO0VBQWlDLG9DQUFBO0FBSzVEO0FBSlU7RUFBYywrQkFBQTtBQU94QjtBQU5VO0VBQWdCLGdDQUFBO0FBUzFCO0FBUlU7RUFBZSxhQUFBO0FBV3pCO0FBN0RBO0VBcURZLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQVdaO0FBbEVBO0VBeURvQixlQUFBO0VBQWlCLHdCQUFBO0FBYXJDO0FBdEVBO0VBNkRjLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVlkO0FBWGM7RUFBaUIsZ0NBQUE7RUFBa0MscUJBQUE7QUFlakU7QUFkYztFQUFpQiw2QkFBQTtFQUErQixrQkFBQTtBQWtCOUQ7QUFqQmM7RUFBaUIsK0JBQUE7RUFBaUMsb0JBQUE7QUFxQmhFO0FBcEJjO0VBQWlCLGdDQUFBO0VBQWtDLHFCQUFBO0FBd0JqRTtBQXZCYztFQUFnQixpQ0FBQTtFQUFtQyxzQkFBQTtBQTJCakU7QUExQmM7RUFBZ0IsK0JBQUE7RUFBaUMsb0JBQUE7QUE4Qi9EO0FBckdBO0VBMkVjLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTZCZDtBQTVCYzs7RUFBa0MsK0JBQUE7RUFBaUMsb0JBQUE7QUFpQ2pGO0FBaENjO0VBQWtCLGdDQUFBO0VBQWtDLHFCQUFBO0FBb0NsRTtBQW5DYztFQUFlLDZCQUFBO0VBQStCLGtCQUFBO0FBdUM1RDtBQXpIQTtFQXVGYyxhQUFBO0VBQ0EsUUFBQTtBQXFDZDtBQTdIQTtFQTJGZ0IsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQXFDaEI7QUFuQ2dCO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBcUNsQjtBQWxDNkI7RUFBVSxrQkFBQTtBQXFDdkM7QUFwQytCO0VBQVUscUJBQUE7QUF1Q3pDO0FBdENpQztFQUFVLHFCQUFBO0FBeUMzQztBQXJKQTtFQW9IUSxrQkFBQTtFQUNBLHdCQUFBO0FBb0NSO0FBekpBO0VBc0htQix3QkFBQTtBQXNDbkI7QUE1SkE7RUF1SFksd0JBQUE7RUFBMEIsZUFBQTtBQXlDdEM7QUFoS0E7RUEySFEsa0JBQUE7RUFDQSw2QkFBQTtBQXdDUjtBQXBLQTtFQThIVSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF5Q1Y7QUExS0E7RUFrSXdCLGVBQUE7RUFBaUIsWUFBQTtBQTRDekM7QUE5S0E7RUFtSWMsd0JBQUE7RUFBMEIsU0FBQTtFQUFXLGVBQUE7QUFnRG5EO0FBbkxBO0VBMklJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBMkNKO0FBNUxBOztFQW9KTSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTRDTjtBQTFDTTs7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUE2Q1I7QUEzQ007O0VBQWEsWUFBQTtFQUFjLG1CQUFBO0FBZ0RqQztBQS9DTTs7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWtEUjtBQXhDQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBMENGO0VBNUNBO0lBR2EsZ0JBQUE7SUFBa0IsZUFBQTtFQTZDL0I7RUFoREE7SUFJYSxnQkFBQTtFQStDYjtFQW5EQTtJQUt5QixlQUFBO0lBQWlCLGdCQUFBO0VBa0QxQztBQUNGO0FBL0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFpREY7RUFuREE7SUFHcUIsZ0JBQUE7RUFtRHJCO0VBdERBO0lBSVksYUFBQTtFQXFEWjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRBQkxBIERFIEFVRElUT1LDg8KNQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpOyB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbiAgICAuYXVkaXQtdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgbWluLXdpZHRoOiA3MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICAgdGhlYWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogNTtcblxuICAgICAgICB0aCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuXG4gICAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTsgfVxuICAgICAgICAgICYucm93LWNyaXRpY2FsIHsgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1kYW5nZXIpOyB9XG4gICAgICAgICAgJi5yb3ctZXJyb3IgeyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpOyB9XG4gICAgICAgICAgJi5yb3ctd2FybmluZyB7IGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpOyB9XG4gICAgICAgICAgJi5yb3ctZGVsZXRlIHsgb3BhY2l0eTogMC44NTsgfVxuXG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICAgLnRpbWUgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuXG4gICAgICAgICAgICAvLyBCQURHRVNcbiAgICAgICAgICAgIC5hY2Npb24tYmFkZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgJi5iYWRnZS1pbnNlcnQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTsgY29sb3I6IHZhcigtLXN1Y2Nlc3MpOyB9XG4gICAgICAgICAgICAgICYuYmFkZ2UtdXBkYXRlIHsgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7IGNvbG9yOiB2YXIoLS1pbmZvKTsgfVxuICAgICAgICAgICAgICAmLmJhZGdlLWRlbGV0ZSB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4gICAgICAgICAgICAgICYuYmFkZ2Utc2VsZWN0IHsgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfVxuICAgICAgICAgICAgICAmLmJhZGdlLWxvZ2luIHsgYmFja2dyb3VuZDogdmFyKC0tc2VjdXJpdHktbGlnaHQpOyBjb2xvcjogdmFyKC0tc2VjdXJpdHkpOyB9XG4gICAgICAgICAgICAgICYuYmFkZ2UtZXJyb3IgeyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpOyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubml2ZWwtYmFkZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgJi5uaXZlbC1lcnJvciwgJi5uaXZlbC1jcml0aWNhbCB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4gICAgICAgICAgICAgICYubml2ZWwtd2FybmluZyB7IGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpOyBjb2xvcjogdmFyKC0td2FybmluZyk7IH1cbiAgICAgICAgICAgICAgJi5uaXZlbC1pbmZvIHsgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7IGNvbG9yOiB2YXIoLS1pbmZvKTsgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCT1RPTkVTIERFIEFDQ0nDg8KTTiAtIEVTVElMSVpBRE9TIERFTlRSTyBERSBMQSBUQUJMQVxuICAgICAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAgICAgICAuYnRuLWFjdGlvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5idG4tdmlldyB7ICY6aG92ZXIgeyBjb2xvcjogdmFyKC0taW5mbyk7IH0gfVxuICAgICAgICAgICAgICAgICYuYnRuLWV4cG9ydCB7ICY6aG92ZXIgeyBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7IH0gfVxuICAgICAgICAgICAgICAgICYuYnRuLXRpbWVsaW5lIHsgJjpob3ZlciB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5KTsgfSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxvYWRpbmctY2VsbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAuc3Bpbm5lciB7IG1hcmdpbjogMCBhdXRvIDEycHggYXV0bzsgfVxuICAgICAgICBwIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXNpemU6IDEzcHg7IH1cbiAgICAgIH1cblxuICAgICAgLmVtcHR5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAuZW1wdHktc3RhdGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICAuZW1wdHktaWNvbiB7IGZvbnQtc2l6ZTogNDBweDsgb3BhY2l0eTogMC41OyB9XG4gICAgICAgICAgcCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luOiAwOyBmb250LXNpemU6IDEzcHg7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBBR0lOQUNJw4PCk05cbiAgLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgYnV0dG9uLCBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVTUE9OU0lWRSBUQUJMQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hdWRpdC10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA1NTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGhlYWQgdGggeyBwYWRkaW5nOiA2cHggOHB4OyBmb250LXNpemU6IDEwcHg7IH1cbiAgICB0Ym9keSB0ZCB7IHBhZGRpbmc6IDZweCA4cHg7IH1cbiAgICAuYWN0aW9ucyAuYnRuLWFjdGlvbiB7IGZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogMnB4IDZweDsgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXVkaXQtdGFibGUge1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIC5jb2wtZGVzY3JpcGNpb24geyBtYXgtd2lkdGg6IDEwMHB4OyB9XG4gICAgLmNvbC1pcCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70615:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/services/auditoria-export.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaExportService: () => (/* binding */ AuditoriaExportService)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _auditoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auditoria.service */ 54722);
/* harmony import */ var _auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auditoria-state.service */ 4302);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5342);







class AuditoriaExportService {
  auditoriaService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auditoria_service__WEBPACK_IMPORTED_MODULE_2__.AuditoriaService);
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__.AuditoriaStateService);
  estrategias = new Map();
  constructor() {
    this.registrarEstrategias();
  }
  registrarEstrategias() {
    this.estrategias.set('csv', new CSVExportStrategy(this.auditoriaService));
    this.estrategias.set('json', new JSONExportStrategy(this.auditoriaService));
    this.estrategias.set('excel', new ExcelExportStrategy(this.auditoriaService));
    this.estrategias.set('pdf', new PDFExportStrategy(this.auditoriaService));
  }
  /**
   * Exporta en el formato especificado usando la estrategia correspondiente
   */
  exportar(formato, filtros) {
    var _this = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const estrategia = _this.estrategias.get(formato);
      if (!estrategia) {
        throw new Error(`Formato no soportado: ${formato}`);
      }
      return estrategia.exportar(filtros);
    })();
  }
  static ɵfac = function AuditoriaExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaExportService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuditoriaExportService,
    factory: AuditoriaExportService.ɵfac,
    providedIn: 'root'
  });
}
// ============================================
// Estrategias concretas
// ============================================
class BaseExportStrategy {
  nombreArchivo(formato) {
    return `auditoria_${Date.now()}.${formato}`;
  }
}
class CSVExportStrategy extends BaseExportStrategy {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  exportar(filtros) {
    var _this2 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this2.service.exportar('csv', filtros));
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, _this2.nombreArchivo('csv'));
    })();
  }
}
class JSONExportStrategy extends BaseExportStrategy {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  exportar(filtros) {
    var _this3 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this3.service.exportar('json', filtros));
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, _this3.nombreArchivo('json'));
    })();
  }
}
class ExcelExportStrategy extends BaseExportStrategy {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  exportar(filtros) {
    var _this4 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this4.service.exportar('excel', filtros));
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, _this4.nombreArchivo('xlsx'));
    })();
  }
}
class PDFExportStrategy extends BaseExportStrategy {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  exportar(filtros) {
    var _this5 = this;
    return (0,C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(_this5.service.exportar('pdf', filtros));
      (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, _this5.nombreArchivo('pdf'));
    })();
  }
}

/***/ }),

/***/ 74943:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-estadisticas/auditoria-estadisticas.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaEstadisticasComponent: () => (/* binding */ AuditoriaEstadisticasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 36792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);




const _c0 = ["accionesChart"];
const _c1 = ["tablasChart"];
const _c2 = ["horariosChart"];
function AuditoriaEstadisticasComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83D\uDCDD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Registros Totales");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Usuarios Activos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6)(22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8)(25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Eventos Cr\u00EDticos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6)(32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u26A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8)(35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Hora Pico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12)(40, "div", 13)(41, "div", 14)(42, "div", 15)(43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Distribuci\u00F3n de Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "canvas", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 15)(49, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Actividad por Tabla");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "canvas", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 15)(55, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Patrones Horarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "canvas", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, ctx_r0.estadisticas.total_registros));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2197 ", ctx_r0.estadisticas.total_registros > 0 ? "Activo" : "Sin datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.estadisticas.usuarios_activos == null ? null : ctx_r0.estadisticas.usuarios_activos.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.estadisticas.eventos_criticos || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("trend-alert", ctx_r0.estadisticas.eventos_criticos > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.estadisticas.eventos_criticos > 0 ? "\u26A0\uFE0F Atenci\u00F3n" : "\u2705 Normal", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.obtenerHoraPico());
  }
}
chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_1__.registerables);
class AuditoriaEstadisticasComponent {
  estadisticas = null;
  accionesChartRef;
  tablasChartRef;
  horariosChartRef;
  accionesChart = null;
  tablasChart = null;
  horariosChart = null;
  ngAfterViewInit() {
    if (this.estadisticas) {
      setTimeout(() => this.inicializarGraficos(), 200);
    }
  }
  ngOnChanges(changes) {
    if (changes['estadisticas'] && this.estadisticas) {
      this.destruirGraficos();
      setTimeout(() => this.inicializarGraficos(), 200);
    }
  }
  obtenerHoraPico() {
    if (!this.estadisticas?.actividad_por_hora || this.estadisticas.actividad_por_hora.length === 0) {
      return 'N/A';
    }
    const maxHora = this.estadisticas.actividad_por_hora.reduce((max, curr) => curr.total > max.total ? curr : max);
    return `${maxHora.hora}:00`;
  }
  inicializarGraficos() {
    if (!this.accionesChartRef?.nativeElement) return;
    this.crearGraficoAcciones();
    this.crearGraficoTablas();
    this.crearGraficoHorarios();
  }
  crearGraficoAcciones() {
    if (!this.accionesChartRef?.nativeElement) return;
    const ctx = this.accionesChartRef.nativeElement.getContext('2d');
    const datos = this.estadisticas?.por_accion.slice(0, 5) || [];
    const labels = datos.map(item => item.accion);
    const values = datos.map(item => item.total);
    const colors = ['#4CAF50', '#2196F3', '#FFC107', '#F44336', '#9C27B0'];
    if (this.accionesChart) this.accionesChart.destroy();
    this.accionesChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels.length ? labels : ['Sin datos'],
        datasets: [{
          data: values.length ? values : [1],
          backgroundColor: colors.slice(0, values.length || 1)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 10
              },
              boxWidth: 12
            }
          }
        },
        cutout: '70%'
      }
    });
  }
  crearGraficoTablas() {
    if (!this.tablasChartRef?.nativeElement) return;
    const ctx = this.tablasChartRef.nativeElement.getContext('2d');
    const datos = this.estadisticas?.por_tabla.slice(0, 5) || [];
    if (this.tablasChart) this.tablasChart.destroy();
    this.tablasChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(ctx, {
      type: 'bar',
      data: {
        labels: datos.map(item => item.tabla_afectada) || ['Sin datos'],
        datasets: [{
          label: 'Registros',
          data: datos.map(item => item.total) || [1],
          backgroundColor: '#2196F3',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 9
              }
            }
          },
          x: {
            ticks: {
              font: {
                size: 9
              }
            }
          }
        }
      }
    });
  }
  crearGraficoHorarios() {
    if (!this.horariosChartRef?.nativeElement) return;
    const ctx = this.horariosChartRef.nativeElement.getContext('2d');
    const horas = Array.from({
      length: 24
    }, (_, i) => i);
    const valores = this.estadisticas?.actividad_por_hora ? horas.map(h => this.estadisticas.actividad_por_hora.find(d => d.hora === h)?.total || 0) : Array(24).fill(0);
    if (this.horariosChart) this.horariosChart.destroy();
    this.horariosChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(ctx, {
      type: 'line',
      data: {
        labels: horas.map(h => `${h}:00`),
        datasets: [{
          label: 'Actividad',
          data: valores,
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.3,
          fill: true,
          pointRadius: 2,
          pointHoverRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 9
              }
            }
          },
          x: {
            ticks: {
              font: {
                size: 9
              },
              maxRotation: 45
            } // ✅ AQUÍ FALTA LA COMA
          } // ✅ COMA AGREGADA
        }
      }
    });
  }
  destruirGraficos() {
    this.accionesChart?.destroy();
    this.tablasChart?.destroy();
    this.horariosChart?.destroy();
    this.accionesChart = null;
    this.tablasChart = null;
    this.horariosChart = null;
  }
  static ɵfac = function AuditoriaEstadisticasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaEstadisticasComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuditoriaEstadisticasComponent,
    selectors: [["app-auditoria-estadisticas"]],
    viewQuery: function AuditoriaEstadisticasComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.accionesChartRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tablasChartRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.horariosChartRef = _t.first);
      }
    },
    inputs: {
      estadisticas: "estadisticas"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["accionesChart", ""], ["tablasChart", ""], ["horariosChart", ""], ["class", "stats-panel", 4, "ngIf"], [1, "stats-panel"], [1, "stats-row"], [1, "stat-card", "realtime"], [1, "stat-icon"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-trend"], [1, "charts-container"], [1, "chart-section"], [1, "chart-row"], [1, "chart-card"], [1, "chart-title"], [1, "chart-container"]],
    template: function AuditoriaEstadisticasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AuditoriaEstadisticasComponent_div_0_Template, 60, 10, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.estadisticas);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: [".stats-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n  box-shadow: var(--shadow-sm);\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: 10px;\n  padding: 12px 16px;\n  border: 1px solid var(--border-light);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 0.2s;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1.2;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%] {\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 2px;\n  color: var(--text-muted);\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-trend.trend-alert[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-weight: 600;\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-trend.trend-up[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.stats-panel[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-trend.trend-down[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.charts-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 12px;\n}\n.charts-container[_ngcontent-%COMP%]   .chart-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 10px;\n}\n.charts-container[_ngcontent-%COMP%]   .chart-row[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: 10px;\n  padding: 10px;\n  border: 1px solid var(--border-light);\n}\n.charts-container[_ngcontent-%COMP%]   .chart-row[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  margin-bottom: 8px;\n}\n.charts-container[_ngcontent-%COMP%]   .chart-row[_ngcontent-%COMP%]   .chart-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  height: 130px;\n  position: relative;\n  max-width: 100%;\n  overflow: hidden;\n}\n@media (max-width: 1024px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .chart-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 28px;\n    height: 28px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .chart-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: 110px !important;\n  }\n}\n@media (max-width: 480px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 24px;\n    height: 24px;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: 90px !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS1lc3RhZGlzdGljYXMvYXVkaXRvcmlhLWVzdGFkaXN0aWNhcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBSEY7QUFIQTtFQVNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBVEE7RUFlTSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUhOO0FBS007RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBSFI7QUF2QkE7RUE4QlEsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUpSO0FBbENBO0VBMENRLE9BQUE7RUFDQSxZQUFBO0FBTFI7QUF0Q0E7RUE4Q1UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUxWO0FBNUNBO0VBcURVLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQU5WO0FBbkRBO0VBNkRVLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBUFY7QUFTVTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFQWjtBQVNVO0VBQ0UscUJBQUE7QUFQWjtBQVNVO0VBQ0Usb0JBQUE7QUFQWjtBQW1CQTtFQUNFLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFqQkY7QUFhQTtFQU9JLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUFqQko7QUFRQTtFQVlNLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFqQk47QUFFQTtFQWtCUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFqQlI7QUFMQTtFQTBCUSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQlI7QUE0QkE7RUFDRTtJQUNFLHFDQUFBO0VBMUJGO0VBNEJBO0lBQ0UscUNBQUE7RUExQkY7QUFDRjtBQTZCQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxRQUFBO0VBM0JGO0VBNkJBO0lBQ0Usa0JBQUE7RUEzQkY7RUEwQkE7SUFFZSxlQUFBO0lBQWlCLFdBQUE7SUFBYSxZQUFBO0VBdkI3QztFQXFCQTtJQUdnQixlQUFBO0VBckJoQjtFQXVCQTtJQUNFLDBCQUFBO0VBckJGO0VBdUJBO0lBQ0Usd0JBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsMEJBQUE7RUF0QkY7RUF3QkE7SUFDRSxpQkFBQTtFQXRCRjtFQXFCQTtJQUVlLGVBQUE7SUFBaUIsV0FBQTtJQUFhLFlBQUE7RUFsQjdDO0VBZ0JBO0lBR2dCLGVBQUE7RUFoQmhCO0VBa0JBO0lBQ0UsdUJBQUE7RUFoQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQU5FTCBERSBFU1RBRMODwo1TVElDQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5zdGF0cy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5zdGF0cy1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAuc3RhdC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0LWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgLnN0YXQtdmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdC1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0LXRyZW5kIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgICAgICAmLnRyZW5kLWFsZXJ0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICYudHJlbmQtdXAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLnRyZW5kLWRvd24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHUsODwoFGSUNPUyAtIFJFU1BPTlNJVkUgWSBDT05UUk9MQURPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLmNoYXJ0cy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweDtcblxuICAuY2hhcnQtcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogMTBweDtcblxuICAgIC5jaGFydC1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgICAgIC5jaGFydC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zdGF0cy1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLmNoYXJ0LXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDhweDtcbiAgfVxuICAuc3RhdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgLnN0YXQtaWNvbiB7IGZvbnQtc2l6ZTogMThweDsgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgfVxuICAgIC5zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAxNnB4OyB9XG4gIH1cbiAgLmNoYXJ0LXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3RhdHMtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuc3RhdC1jYXJkIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAuc3RhdC1pY29uIHsgZm9udC1zaXplOiAxNnB4OyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyB9XG4gICAgLnN0YXQtdmFsdWUgeyBmb250LXNpemU6IDE0cHg7IH1cbiAgfVxuICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78825:
/*!****************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/pipes/format-ip.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatIpPipe: () => (/* binding */ FormatIpPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class FormatIpPipe {
  transform(value) {
    if (!value) return 'N/A';
    if (value === '127.0.0.1' || value === '::1') return 'Localhost';
    if (value.startsWith('192.168.')) return 'Red Local';
    if (value.startsWith('10.')) return 'Red Privada';
    if (value.startsWith('172.')) return 'Red Privada';
    return value;
  }
  static ɵfac = function FormatIpPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormatIpPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "formatIp",
    type: FormatIpPipe,
    pure: true
  });
}

/***/ }),

/***/ 81759:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/auditorias/components/auditoria-timeline/auditoria-timeline.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuditoriaTimelineComponent: () => (/* binding */ AuditoriaTimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auditoria-state.service */ 4302);
/* harmony import */ var _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/format-ip.pipe */ 78825);
/* harmony import */ var _pipes_format_log_id_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/format-log-id.pipe */ 14950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);









function AuditoriaTimelineComponent_div_0_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_r3.usuario_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_r3.nombre_usuario, " ");
  }
}
function AuditoriaTimelineComponent_div_0_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accion_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", accion_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getLabelAccion(accion_r4), " ");
  }
}
function AuditoriaTimelineComponent_div_0_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AuditoriaTimelineComponent_div_0_div_19_div_2_Template_div_click_1_listener() {
      const evento_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.seleccionarEvento(evento_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const evento_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("event-" + evento_r6.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("left", ctx_r1.calcularPosicionTimeline(evento_r6.fecha), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("border-color", evento_r6.tipo === "principal" ? "var(--danger)" : evento_r6.tipo === "relacionado" ? "var(--info)" : "var(--secondary)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", evento_r6.icon, " ");
  }
}
function AuditoriaTimelineComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AuditoriaTimelineComponent_div_0_div_19_div_2_Template, 3, 7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.eventosTimeline);
  }
}
function AuditoriaTimelineComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No hay eventos relacionados en el rango de tiempo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AuditoriaTimelineComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cargando eventos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AuditoriaTimelineComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCCB Detalles del Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 27)(4, "div", 28)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "formatLogId");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 28)(11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 28)(16, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Acci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 30)(19, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 28)(22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Tabla:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 28)(27, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Fecha/Hora:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 28)(33, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "IP Origen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "formatIp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 28)(39, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Nivel:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 30)(42, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 33)(45, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 12, ctx_r1.eventoTimelineSeleccionado.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.eventoTimelineSeleccionado.usuario || "Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("badge-" + (ctx_r1.eventoTimelineSeleccionado.accion == null ? null : ctx_r1.eventoTimelineSeleccionado.accion.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getLabelAccion(ctx_r1.eventoTimelineSeleccionado.accion), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.eventoTimelineSeleccionado.tabla || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](31, 14, ctx_r1.eventoTimelineSeleccionado.fecha, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 17, ctx_r1.eventoTimelineSeleccionado.ip || "N/A"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("nivel-" + (ctx_r1.eventoTimelineSeleccionado.nivel || "info").toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.eventoTimelineSeleccionado.nivel || "INFO", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.eventoTimelineSeleccionado.descripcion);
  }
}
function AuditoriaTimelineComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\uD83D\uDCC8 L\u00EDnea de Tiempo - Eventos relacionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AuditoriaTimelineComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaTimelineComponent_div_0_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.timelineFiltroUsuario, $event) || (ctx_r1.timelineFiltroUsuario = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AuditoriaTimelineComponent_div_0_Template_select_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.actualizarTimeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Todos los usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AuditoriaTimelineComponent_div_0_option_12_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AuditoriaTimelineComponent_div_0_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.timelineFiltroAccion, $event) || (ctx_r1.timelineFiltroAccion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AuditoriaTimelineComponent_div_0_Template_select_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.actualizarTimeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Todas las acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AuditoriaTimelineComponent_div_0_option_16_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AuditoriaTimelineComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.actualizarTimeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AuditoriaTimelineComponent_div_0_div_19_Template, 3, 1, "div", 11)(20, AuditoriaTimelineComponent_div_0_div_20_Template, 5, 0, "div", 12)(21, AuditoriaTimelineComponent_div_0_div_21_Template, 4, 0, "div", 13)(22, AuditoriaTimelineComponent_div_0_div_22_Template, 49, 19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AuditoriaTimelineComponent_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.timelineFiltroUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.usuarios);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.timelineFiltroAccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.accionesDisponibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.cargando ? "\u23F3 Cargando..." : "\uD83D\uDD04 Actualizar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.cargando && ctx_r1.eventosTimeline.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.cargando && ctx_r1.eventosTimeline.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.eventoTimelineSeleccionado);
  }
}
class AuditoriaTimelineComponent {
  state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auditoria_state_service__WEBPACK_IMPORTED_MODULE_3__.AuditoriaStateService);
  get usuarios() {
    return this.state.usuarios();
  }
  // ============================================
  // INPUTS / OUTPUTS
  // ============================================
  registroSeleccionado = null;
  isOpen = false;
  cerrar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  eventoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // ============================================
  // ESTADO INTERNO
  // ============================================
  eventosTimeline = [];
  timelineFiltroUsuario = null;
  timelineFiltroAccion = null;
  eventoTimelineSeleccionado = null;
  cargando = false;
  accionesDisponibles = ['INSERT', 'UPDATE', 'DELETE', 'SELECT', 'LOGIN', 'LOGOUT', 'ERROR', 'BACKUP'];
  // ============================================
  // CICLO DE VIDA
  // ============================================
  ngOnInit() {
    // No cargar automáticamente, esperar a que se abra
  }
  ngOnChanges(changes) {
    if (changes['isOpen'] && this.isOpen && this.registroSeleccionado) {
      this.cargarEventosTimeline();
    }
    if (changes['registroSeleccionado'] && this.registroSeleccionado && this.isOpen) {
      this.timelineFiltroUsuario = this.registroSeleccionado.usuario_id;
      this.timelineFiltroAccion = null;
      this.cargarEventosTimeline();
    }
  }
  // ============================================
  // CARGA DE DATOS (BACKEND REAL)
  // ============================================
  cargarEventosTimeline() {
    if (!this.registroSeleccionado) return;
    this.cargando = true;
    this.eventosTimeline = [];
    // Construir filtros para el backend
    const fechaEvento = new Date(this.registroSeleccionado.fecha);
    const filtros = {
      fecha_inicio: new Date(fechaEvento.getTime() - 3600000).toISOString(),
      fecha_fin: new Date(fechaEvento.getTime() + 3600000).toISOString(),
      usuario_id: this.timelineFiltroUsuario,
      acciones: this.timelineFiltroAccion ? [this.timelineFiltroAccion] : undefined,
      por_pagina: 50
    };
    // Usar el servicio real del backend
    this.state.cargarRegistros(filtros).then(() => {
      const logs = this.state.logs();
      this.eventosTimeline = logs.map(l => ({
        id: l.log_id,
        tipo: l.log_id === this.registroSeleccionado?.log_id ? 'principal' : 'relacionado',
        icon: this.getAccionIcon(l.accion),
        usuario: l.usuario_nombre || 'Sistema',
        usuario_id: l.usuario_id,
        accion: l.accion,
        descripcion: l.descripcion,
        fecha: l.fecha,
        ip: l.ip_origen,
        tabla: l.tabla_afectada,
        nivel: l.nivel
      }));
      this.cargando = false;
    });
  }
  // ============================================
  // ACCIONES
  // ============================================
  actualizarTimeline() {
    this.cargarEventosTimeline();
  }
  seleccionarEvento(evento) {
    this.eventoTimelineSeleccionado = evento;
    this.eventoSeleccionado.emit(evento);
  }
  cerrarModal() {
    this.cerrar.emit();
  }
  getLabelAccion(accion) {
    const labels = {
      INSERT: 'Creación',
      UPDATE: 'Actualización',
      DELETE: 'Eliminación',
      SELECT: 'Consulta',
      LOGIN: 'Inicio Sesión',
      LOGOUT: 'Cierre Sesión',
      ERROR: 'Error',
      BACKUP: 'Backup',
      'CHAT_USER_MSG': 'Mensaje Usuario',
      'CHAT_BOT_MSG': 'Respuesta Bot',
      'CHAT_SYSTEM_MSG': 'Mensaje Sistema',
      'CHAT_CODE_REQUEST': 'Solicitud Código Maestro',
      'CHAT_FEEDBACK': 'Calificación Chat',
      'CHAT_KB_CREATE': 'KB Crear',
      'CHAT_KB_UPDATE': 'KB Actualizar',
      'CHAT_KB_DELETE': 'KB Eliminar',
      'CHAT_CALIFICACION': 'Calificación'
    };
    return labels[accion] || accion;
  }
  getAccionIcon(accion) {
    const icons = {
      INSERT: '➕',
      UPDATE: '✏️',
      DELETE: '🗑️',
      SELECT: '🔍',
      LOGIN: '🔑',
      LOGOUT: '🚪',
      ERROR: '❌',
      BACKUP: '💾',
      'CHAT_USER_MSG': '💬',
      'CHAT_BOT_MSG': '🤖',
      'CHAT_SYSTEM_MSG': '⚙️',
      'CHAT_CODE_REQUEST': '🔐',
      'CHAT_FEEDBACK': '⭐',
      'CHAT_KB_CREATE': '📝',
      'CHAT_KB_UPDATE': '✏️',
      'CHAT_KB_DELETE': '🗑️',
      'CHAT_CALIFICACION': '📊'
    };
    return icons[accion] || '📝';
  }
  // ============================================
  // CÁLCULOS DE POSICIÓN
  // ============================================
  calcularPosicionTimeline(fecha) {
    if (!this.eventosTimeline.length || !this.registroSeleccionado) return 0;
    const fechas = this.eventosTimeline.map(e => new Date(e.fecha).getTime());
    const fechaEvento = new Date(fecha).getTime();
    const fechaCentral = new Date(this.registroSeleccionado.fecha).getTime();
    const minFecha = fechaCentral - 3600000;
    const maxFecha = fechaCentral + 3600000;
    const total = maxFecha - minFecha;
    const desdeInicio = fechaEvento - minFecha;
    if (total === 0) return 50;
    let porcentaje = desdeInicio / total * 100;
    return Math.max(0, Math.min(100, porcentaje));
  }
  static ɵfac = function AuditoriaTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuditoriaTimelineComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AuditoriaTimelineComponent,
    selectors: [["app-auditoria-timeline"]],
    inputs: {
      registroSeleccionado: "registroSeleccionado",
      isOpen: "isOpen"
    },
    outputs: {
      cerrar: "cerrar",
      eventoSeleccionado: "eventoSeleccionado"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [1, "timeline-controls"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn-small", 3, "click", "disabled"], ["class", "timeline-container", 4, "ngIf"], ["class", "timeline-empty", 4, "ngIf"], ["class", "timeline-loading", 4, "ngIf"], ["class", "timeline-info-panel", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "timeline-container"], [1, "timeline-track"], ["class", "timeline-event", 3, "class", "left", 4, "ngFor", "ngForOf"], [1, "timeline-event"], [1, "event-marker", 3, "click"], [1, "timeline-empty"], [1, "empty-icon"], [1, "timeline-loading"], [1, "spinner"], [1, "timeline-info-panel"], [1, "event-details"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "accion-badge"], [1, "nivel-badge"], [1, "detail-item", "full-width"]],
    template: function AuditoriaTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AuditoriaTimelineComponent_div_0_Template, 26, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _pipes_format_ip_pipe__WEBPACK_IMPORTED_MODULE_4__.FormatIpPipe, _pipes_format_log_id_pipe__WEBPACK_IMPORTED_MODULE_5__.FormatLogIdPipe],
    styles: [".timeline-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.timeline-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 13px;\n  min-width: 140px;\n}\n.timeline-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n  outline: none;\n}\n.timeline-controls[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.timeline-controls[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.timeline-controls[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.timeline-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80px;\n  background: var(--bg-secondary);\n  border-radius: 10px;\n  margin: 16px 0;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 3px;\n  background: var(--border-color);\n  border-radius: 2px;\n  margin: 38px 30px;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::before, \n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  width: 10px;\n  height: 10px;\n  background: var(--primary);\n  border-radius: 50%;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -16px;\n  transform: translateX(-50%);\n  cursor: pointer;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: var(--bg-primary);\n  border: 2px solid;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  transition: all 0.2s;\n  box-shadow: var(--shadow-sm);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n  box-shadow: var(--shadow-md);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-principal[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: var(--danger-light);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-relacionado[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--info);\n  background: var(--info-light);\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-track[_ngcontent-%COMP%]   .timeline-event.event-secundario[_ngcontent-%COMP%]   .event-marker[_ngcontent-%COMP%] {\n  border-color: var(--secondary);\n  background: var(--secondary-light);\n}\n.timeline-empty[_ngcontent-%COMP%], \n.timeline-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 16px;\n}\n.timeline-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%], \n.timeline-loading[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  opacity: 0.5;\n  margin-bottom: 8px;\n}\n.timeline-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.timeline-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.timeline-empty[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.timeline-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin: 0 auto 12px auto;\n}\n.timeline-info-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n  border-left: 4px solid var(--primary);\n}\n.timeline-info-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 8px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 4px 0;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 13px;\n  word-break: break-word;\n}\n.timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n@media (max-width: 1024px) {\n  .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n    max-width: 92vw;\n    width: 92vw;\n  }\n}\n@media (max-width: 768px) {\n  .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n    max-width: 96vw;\n    width: 96vw;\n  }\n  .timeline-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .timeline-container[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .timeline-track[_ngcontent-%COMP%] {\n    margin: 28px 16px;\n  }\n  .event-marker[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-container.modal-xlarge[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    width: 100vw;\n    border-radius: 0;\n  }\n  .timeline-container[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .timeline-track[_ngcontent-%COMP%] {\n    margin: 24px 10px;\n  }\n  .event-marker[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n    font-size: 10px;\n  }\n  .timeline-info-panel[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border: 1px solid var(--modal-border);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  max-width: 90%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideInUp 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(50px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container.modal-large[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 90%;\n  margin-left: 295px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvYXVkaXRvcmlhcy9jb21wb25lbnRzL2F1ZGl0b3JpYS10aW1lbGluZS9hdWRpdG9yaWEtdGltZWxpbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpGO0FBQUE7RUFPSSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBSk47QUFkQTtFQXVCSSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5KO0FBUUk7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBTk47QUFRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQU5OO0FBWUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQUdBO0VBVUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVko7QUFZSTs7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBVE47QUFXSTtFQUFZLE9BQUE7QUFSaEI7QUFTSTtFQUFXLFFBQUE7QUFOZjtBQXBCQTtFQTZCTSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFOTjtBQTFCQTtFQW1DUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUFOUjtBQVFRO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQU5WO0FBVU07RUFDRSwyQkFBQTtFQUNBLCtCQUFBO0FBUlI7QUFVTTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUFSUjtBQVVNO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtBQVJSO0FBY0E7O0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVhGO0FBU0E7O0VBR2dCLGVBQUE7RUFBaUIsWUFBQTtFQUFjLGtCQUFBO0FBTi9DO0FBR0E7O0VBSU0sd0JBQUE7RUFBMEIsZUFBQTtBQUZoQztBQUZBOztFQUthLHdCQUFBO0FBQ2I7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFERjtBQUpBO0VBUUksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFESjtBQVRBO0VBY0ksYUFBQTtFQUNBLDJEQUFBO0VBQ0EsUUFBQTtBQUZKO0FBZEE7RUFtQk0sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFGTjtBQXBCQTtFQXlCUSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGUjtBQTNCQTtFQWdDUSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUZSO0FBSU07RUFBZSxtQkFBQTtBQURyQjtBQVVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsV0FBQTtFQVJGO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUFURjtFQVdBO0lBQTRCLGdCQUFBO0VBUjVCO0VBU0E7SUFBc0IsWUFBQTtFQU50QjtFQU9BO0lBQWtCLGlCQUFBO0VBSmxCO0VBS0E7SUFBZ0IsV0FBQTtJQUFhLFlBQUE7SUFBYyxlQUFBO0VBQTNDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFBRjtFQUVBO0lBQXNCLFlBQUE7RUFDdEI7RUFBQTtJQUFrQixpQkFBQTtFQUdsQjtFQUZBO0lBQWdCLFdBQUE7SUFBYSxZQUFBO0lBQWMsZUFBQTtFQU8zQztFQU5BO0lBQXNDLDBCQUFBO0VBU3RDO0FBQ0Y7QUFKQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsMkJBQUE7QUFNRjtBQUpFO0VBQ0U7SUFDRSxVQUFBO0VBTUo7RUFKRTtJQUNFLFVBQUE7RUFNSjtBQUNGO0FBMUJBO0VBd0JJLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQUtKO0FBSEk7RUFDRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtFQUtOO0VBSEk7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUFLTjtBQUNGO0FBRkk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUlOO0FBckRBO0VBcURNLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBR047QUE3REE7RUE2RFEsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUdSO0FBdEVBO0VBdUVRLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUVSO0FBQVE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FBRVY7QUFsRkE7RUFzRk0sYUFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQUROO0FBR007RUFDRSxVQUFBO0FBRFI7QUFJTTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUtNO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBS1E7RUFDRSxnQ0FBQTtBQUhWO0FBckdBO0VBOEdNLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFOTiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUSU1FTElORSAtIE1PREFMIEdSQU5ERSBZIFZJU0lCTEVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIENPTlRST0xFUyBERSBUSU1FTElORVxuLnRpbWVsaW5lLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1pbi13aWR0aDogMTQwcHg7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuYnRuLXNtYWxsIHtcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTMODwo1ORUEgREUgVElFTVBPXG4udGltZWxpbmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50aW1lbGluZS10cmFjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbjogMzhweCAzMHB4O1xuXG4gICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTZweDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7IGxlZnQ6IDA7IH1cbiAgICAmOjphZnRlciB7IHJpZ2h0OiAwOyB9XG5cbiAgICAudGltZWxpbmUtZXZlbnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTZweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgLmV2ZW50LW1hcmtlciB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5ldmVudC1wcmluY2lwYWwgLmV2ZW50LW1hcmtlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgIH1cbiAgICAgICYuZXZlbnQtcmVsYWNpb25hZG8gLmV2ZW50LW1hcmtlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgfVxuICAgICAgJi5ldmVudC1zZWN1bmRhcmlvIC5ldmVudC1tYXJrZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aW1lbGluZS1lbXB0eSwgLnRpbWVsaW5lLWxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTZweDtcbiAgLmVtcHR5LWljb24geyBmb250LXNpemU6IDM2cHg7IG9wYWNpdHk6IDAuNTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4gIHAgeyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc2l6ZTogMTRweDsgfVxuICAuc3Bpbm5lciB7IG1hcmdpbjogMCBhdXRvIDEycHggYXV0bzsgfVxufVxuXG4vLyBQQU5FTCBERSBERVRBTExFU1xuLnRpbWVsaW5lLWluZm8tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcblxuICBoNCB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmV2ZW50LWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuZGV0YWlsLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDJweDtcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xuXG4gICAgICAuZGV0YWlsLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICB9XG4gICAgICAuZGV0YWlsLXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICAgICYuZnVsbC13aWR0aCB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkUgVElNRUxJTkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsLWNvbnRhaW5lci5tb2RhbC14bGFyZ2Uge1xuICAgIG1heC13aWR0aDogOTJ2dztcbiAgICB3aWR0aDogOTJ2dztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRhaW5lci5tb2RhbC14bGFyZ2Uge1xuICAgIG1heC13aWR0aDogOTZ2dztcbiAgICB3aWR0aDogOTZ2dztcbiAgfVxuICAudGltZWxpbmUtY29udHJvbHMgc2VsZWN0IHsgbWluLXdpZHRoOiAxMDBweDsgfVxuICAudGltZWxpbmUtY29udGFpbmVyIHsgaGVpZ2h0OiA2MHB4OyB9XG4gIC50aW1lbGluZS10cmFjayB7IG1hcmdpbjogMjhweCAxNnB4OyB9XG4gIC5ldmVudC1tYXJrZXIgeyB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4OyBmb250LXNpemU6IDEycHg7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tb2RhbC1jb250YWluZXIubW9kYWwteGxhcmdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC50aW1lbGluZS1jb250YWluZXIgeyBoZWlnaHQ6IDUwcHg7IH1cbiAgLnRpbWVsaW5lLXRyYWNrIHsgbWFyZ2luOiAyNHB4IDEwcHg7IH1cbiAgLmV2ZW50LW1hcmtlciB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7IGZvbnQtc2l6ZTogMTBweDsgfVxuICAudGltZWxpbmUtaW5mby1wYW5lbCAuZXZlbnQtZGV0YWlscyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC40cyBlYXNlLW91dDtcblxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgc2NhbGUoMC45NSk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1vZGFsLWxhcmdlIHtcbiAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDI5NXB4O1xuICAgIH1cblxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEycHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_seguridad_pages_auditorias_auditoria_component_ts.js.map