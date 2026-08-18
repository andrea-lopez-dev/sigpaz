"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_seguridad_pages_usuarios_usuarios_component_ts"],{

/***/ 757:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/components/usuario-filters/usuario-filters.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioFiltersComponent: () => (/* binding */ UsuarioFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _services_rol_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/rol-api.service */ 45446);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/services/notification/notification.service */ 97407);










function UsuarioFiltersComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", rol_r1.rol_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rol_r1.nombre, " ");
  }
}
class UsuarioFiltersComponent {
  fb;
  rolApiService;
  notificationService;
  filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  filterForm;
  roles = [];
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  constructor(fb, rolApiService, notificationService) {
    this.fb = fb;
    this.rolApiService = rolApiService;
    this.notificationService = notificationService;
    this.filterForm = this.fb.group({
      search: [''],
      rol_id: [null],
      activo: [null]
    });
  }
  ngOnInit() {
    this.setupFilterSubscription();
    this.cargarRoles();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  cargarRoles() {
    // ✅ Solo cargar roles desde el backend, sin mock data
    this.rolApiService.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe({
      next: roles => {
        this.roles = roles;
        console.log('✅ Roles cargados en filtros:', this.roles);
      },
      error: error => {
        console.error('❌ Error cargando roles en filtros:', error);
        this.notificationService.showError('Error al cargar los roles para filtros');
        this.roles = []; // ✅ Array vacío
      }
    });
  }
  resetFilters() {
    this.filterForm.reset({
      search: '',
      rol_id: null,
      activo: null
    });
  }
  setupFilterSubscription() {
    this.filterForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(filters => {
      // ✅ Construir objeto solo con valores válidos
      const cleanedFilters = {};
      if (filters.search && filters.search.trim() !== '') {
        cleanedFilters.search = filters.search;
      }
      // ✅ Solo incluir rol_id si tiene un valor numérico válido
      if (filters.rol_id !== null && filters.rol_id !== undefined && filters.rol_id !== '') {
        cleanedFilters.rol_id = filters.rol_id;
      }
      // ✅ Solo incluir activo si es booleano
      if (filters.activo === true || filters.activo === false) {
        cleanedFilters.activo = filters.activo;
      }
      console.log('📤 Emitiendo filtros:', cleanedFilters);
      this.filtersChange.emit(cleanedFilters);
    });
  }
  static ɵfac = function UsuarioFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuarioFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_rol_api_service__WEBPACK_IMPORTED_MODULE_8__.RolApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: UsuarioFiltersComponent,
    selectors: [["app-usuario-filters"]],
    outputs: {
      filtersChange: "filtersChange"
    },
    decls: 25,
    vars: 6,
    consts: [[1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid", 3, "formGroup"], [1, "filter-item"], ["type", "text", "formControlName", "search", "placeholder", "\uD83D\uDD0D Buscar por nombre o email...", 1, "filter-input"], ["formControlName", "rol_id", 1, "filter-select"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "activo", 1, "filter-select"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
    template: function UsuarioFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsuarioFiltersComponent_Template_button_click_4_listener() {
          return ctx.resetFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "select", 6)(11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Todos los roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, UsuarioFiltersComponent_option_13_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 4)(15, "select", 9)(16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Todos los estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Inactivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 4)(23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsuarioFiltersComponent_Template_button_click_23_listener() {
          return ctx.resetFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Limpiar filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["@charset \"UTF-8\";\n.filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.filtros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n.filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDD0D\";\n  font-size: 18px;\n}\n.filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: underline;\n  transition: all 0.3s ease;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-hover);\n  background: var(--bg-hover);\n  transform: translateY(-1px);\n}\n.filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n  font-size: 13px;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.filter-item[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--input-border-hover);\n}\n.filter-item[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg);\n  color: var(--input-disabled-text);\n  cursor: not-allowed;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  appearance: none;\n  background-image: var(--link-color);\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  background-size: 14px;\n  padding-right: 36px;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.filter-item[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--input-border-hover);\n}\n.filter-item[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg);\n  color: var(--input-disabled-text);\n  cursor: not-allowed;\n}\n.filter-item[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  padding: 8px;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 16px;\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-weight: 500;\n  font-size: 14px;\n  font-family: inherit;\n  white-space: nowrap;\n}\n.btn-secondary[_ngcontent-%COMP%]::before {\n  content: \"\uD83E\uDDF9\";\n  font-size: 14px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.btn-secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n@media (max-width: 768px) {\n  .filtros-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .filtros-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .filter-input[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .filtros-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .filtros-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: flex-start;\n  }\n  .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .filter-input[_ngcontent-%COMP%], \n   .filter-select[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL29yaWdpbmFsJTIwU0lHUEFaL2p1c3RpY2lhLXBhei1mcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvc2VndXJpZGFkL3BhZ2VzL3VzdWFyaW9zL2NvbXBvbmVudHMvdXN1YXJpby1maWx0ZXJzL3VzdWFyaW8tZmlsdGVycy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvdXN1YXJpb3MvY29tcG9uZW50cy91c3VhcmlvLWZpbHRlcnMvdXN1YXJpby1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ1VoQjtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscURBQUE7QURSRjtBQ1VFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RURSSjtFQ1VFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VEUko7QUFDRjs7QUNlQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRDQUFBO0FEWkY7QUNjRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QURaSjtBQ2NJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURaTjtBQ2dCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEZEo7QUNnQkk7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QURkTjtBQ2lCSTtFQUNFLHdCQUFBO0FEZk47O0FDdUJBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRHBCRjtBQ3NCRTtFQUxGO0lBTUkscUNBQUE7SUFDQSxTQUFBO0VEbkJGO0FBQ0Y7QUNxQkU7RUFWRjtJQVdJLDBCQUFBO0lBQ0EsU0FBQTtFRGxCRjtBQUNGOztBQ3dCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QURyQkY7QUN3QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FEdEJKO0FDd0JJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FEdEJOO0FDeUJJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QUR2Qk47QUMwQkk7RUFDRSx1Q0FBQTtBRHhCTjtBQzJCSTtFQUNFLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRHpCTjtBQzhCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRDVCSjtBQzhCSTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FENUJOO0FDK0JJO0VBQ0UsdUNBQUE7QUQ3Qk47QUNnQ0k7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUQ5Qk47QUNrQ0k7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBRGhDTjs7QUN3Q0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FEckNGO0FDdUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURyQ0o7QUN3Q0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FEdENKO0FDeUNFO0VBQ0Usd0JBQUE7QUR2Q0o7QUMwQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR4Q0o7O0FDK0NBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUQ1Q0Y7RUM4Q0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUQ1Q0Y7QUFDRjtBQytDQTtFQUNFO0lBQ0UsVUFBQTtFRDdDRjtFQytDQTtJQUNFLFlBQUE7RUQ3Q0Y7QUFDRjtBQ21EQTtFQUNFO0lBQ0UsYUFBQTtFRGpERjtFQ29EQTtJQUNFLG1CQUFBO0VEbERGO0VDb0RFO0lBQ0UsZUFBQTtFRGxESjtFQ3FERTtJQUNFLGVBQUE7RURuREo7RUN1REE7OztJQUdFLGlCQUFBO0lBQ0EsZUFBQTtFRHJERjtBQUNGO0FDd0RBO0VBQ0U7SUFDRSxhQUFBO0VEdERGO0VDeURBO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0lBQ0EsdUJBQUE7RUR2REY7RUN5REU7SUFDRSxvQkFBQTtFRHZESjtFQzJEQTs7O0lBR0UsaUJBQUE7SUFDQSxlQUFBO0VEekRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmlsdHJvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5maWx0cm9zLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xufVxuLmZpbHRyb3MtaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5maWx0cm9zLWhlYWRlciBoMzo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDsMKfwpTCjVwiO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZmlsdHJvcy1oZWFkZXIgLmJ0bi1saW5rIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZpbHRyb3MtaGVhZGVyIC5idG4tbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4uZmlsdHJvcy1oZWFkZXIgLmJ0bi1saW5rOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmZpbHRyb3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xuICBnYXA6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLmZpbHRlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG4uZmlsdGVyLWl0ZW0gLmZpbHRlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5maWx0ZXItaXRlbSAuZmlsdGVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5maWx0ZXItaXRlbSAuZmlsdGVyLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG59XG4uZmlsdGVyLWl0ZW0gLmZpbHRlci1pbnB1dDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcbn1cbi5maWx0ZXItaXRlbSAuZmlsdGVyLWlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtZGlzYWJsZWQtYmcpO1xuICBjb2xvcjogdmFyKC0taW5wdXQtZGlzYWJsZWQtdGV4dCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZmlsdGVyLWl0ZW0gLmZpbHRlci1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1saW5rLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMzZweDtcbn1cbi5maWx0ZXItaXRlbSAuZmlsdGVyLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xufVxuLmZpbHRlci1pdGVtIC5maWx0ZXItc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1ib3JkZXItaG92ZXIpO1xufVxuLmZpbHRlci1pdGVtIC5maWx0ZXItc2VsZWN0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtZGlzYWJsZWQtYmcpO1xuICBjb2xvcjogdmFyKC0taW5wdXQtZGlzYWJsZWQtdGV4dCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZmlsdGVyLWl0ZW0gLmZpbHRlci1zZWxlY3Qgb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYnRuLXNlY29uZGFyeTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDsMKfwqfCuVwiO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG59XG4uYnRuLXNlY29uZGFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4uYnRuLXNlY29uZGFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWx0cm9zLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICAuZmlsdHJvcy1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmZpbHRyb3MtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpbHRyb3MtaGVhZGVyIC5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5maWx0ZXItaW5wdXQsXG4gIC5maWx0ZXItc2VsZWN0LFxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmZpbHRyb3MtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIC5maWx0cm9zLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuZmlsdHJvcy1oZWFkZXIgLmJ0bi1saW5rIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICAuZmlsdGVyLWlucHV0LFxuICAuZmlsdGVyLXNlbGVjdCxcbiAgLmJ0bi1zZWNvbmRhcnkge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZJTFRST1MgREUgVVNVQVJJT1MgLSBFU1RJTE9TIENPTVBMRVRPU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gTm90YTogVG9kYXMgbGFzIHZhcmlhYmxlcyBDU1MgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xyXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5maWx0cm9zLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhFQURFUiBERUwgRklMVFJPXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5maWx0cm9zLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICfDsMKfwpTCjSc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHUklEIERFIEZJTFRST1NcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmZpbHRyb3MtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICBnYXA6IDE2cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJVEVNUyBERSBGSUxUUk9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmZpbHRlci1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcblxyXG4gIC8vIElucHV0IGRlIHRleHRvXHJcbiAgLmZpbHRlci1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1mb2N1cyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtZGlzYWJsZWQtYmcpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5wdXQtZGlzYWJsZWQtdGV4dCk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTZWxlY3QgZHJvcGRvd25cclxuICAuZmlsdGVyLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluay1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1ib3JkZXItaG92ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1kaXNhYmxlZC1iZyk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnB1dC1kaXNhYmxlZC10ZXh0KTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFc3RpbG9zIHBhcmEgbGFzIG9wY2lvbmVzXHJcbiAgICBvcHRpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJPVMODwpNOIFNFQ1VOREFSSU9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ8Owwp/Cp8K5JztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQU5JTUFDSU9ORVMgQURJQ0lPTkFMRVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVTUE9OU0lWRSBBSlVTVEVTIEZJTkFMRVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZpbHRyb3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZmlsdHJvcy1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWlucHV0LFxyXG4gIC5maWx0ZXItc2VsZWN0LFxyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmZpbHRyb3MtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuZmlsdHJvcy1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmJ0bi1saW5rIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWlucHV0LFxyXG4gIC5maWx0ZXItc2VsZWN0LFxyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36361:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/components/usuarios-list/usuarios-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuariosListComponent: () => (/* binding */ UsuariosListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);




function UsuariosListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cargando usuarios...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function UsuariosListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No hay usuarios registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Comience registrando un nuevo usuario del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function UsuariosListComponent_ng_container_3_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 12)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "div", 15)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td")(23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td", 18)(28, "div", 19)(29, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_tr_21_Template_button_click_29_listener() {
      const usuario_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.edit.emit(usuario_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_tr_21_Template_button_click_31_listener() {
      const usuario_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.passwordChange.emit(usuario_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_tr_21_Template_button_click_33_listener() {
      const usuario_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleActive.emit(usuario_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_tr_21_Template_button_click_35_listener() {
      const usuario_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.delete.emit(usuario_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const usuario_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("USR-", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 20, usuario_r2.usuario_id, "5.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r2.nombre_usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getNombreCompleto(usuario_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usuario_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.getRolClass(usuario_r2.rol_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getRolNombre(usuario_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.getEstadoClass(usuario_r2.estado, usuario_r2.activo));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getEstado(usuario_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 23, usuario_r2.ultimo_acceso, "dd/MM/yyyy HH:mm") || "Nunca");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.getActividadClass(usuario_r2.ultimo_acceso));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getActividadTexto(usuario_r2.ultimo_acceso));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", usuario_r2.activo)("inactive", !usuario_r2.activo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", usuario_r2.activo ? "Desactivar usuario" : "Activar usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", usuario_r2.activo ? "\uD83D\uDD34" : "\uD83D\uDFE2", " ");
  }
}
function UsuariosListComponent_ng_container_3_div_22_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_div_22_button_4_Template_button_click_0_listener() {
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onPageChange(+page_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", page_r6 === ctx_r2.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", page_r6 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r6, " ");
  }
}
function UsuariosListComponent_ng_container_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_div_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u25C0 Anterior");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UsuariosListComponent_ng_container_3_div_22_button_4_Template, 2, 4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosListComponent_ng_container_3_div_22_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onPageChange(ctx_r2.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Siguiente \u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getPaginationArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function UsuariosListComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00DAltimo Acceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, UsuariosListComponent_ng_container_3_tr_21_Template, 37, 26, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UsuariosListComponent_ng_container_3_div_22_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.usuarios);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.totalPages > 1);
  }
}
class UsuariosListComponent {
  usuarios = [];
  loading = false;
  totalItems = 0;
  currentPage = 1;
  edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  passwordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  toggleActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // ✅ Nuevo evento para activar/desactivar
  pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  itemsPerPage = 10;
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  onPageChange(page) {
    this.pageChange.emit(page);
  }
  getEstadoClass(estado, activo) {
    const estadoActual = estado || (activo ? 'ACTIVO' : 'INACTIVO');
    const clases = {
      'ACTIVO': 'status-active',
      'INACTIVO': 'status-inactive',
      'BLOQUEADO': 'status-blocked',
      'SUSPENDIDO': 'status-suspended'
    };
    return clases[estadoActual] || 'status-unknown';
  }
  getRolClass(rolId) {
    const clases = {
      1: 'badge-admin',
      2: 'badge-manager',
      3: 'badge-analyst',
      4: 'badge-auditor'
    };
    return clases[rolId] || 'badge-default';
  }
  getNombreCompleto(usuario) {
    if (usuario.persona_nombres && usuario.persona_apellidos) {
      return `${usuario.persona_nombres} ${usuario.persona_apellidos}`;
    }
    if (usuario.personal?.nombres && usuario.personal?.apellidos) {
      return `${usuario.personal.nombres} ${usuario.personal.apellidos}`;
    }
    return '';
  }
  getRolNombre(usuario) {
    if (usuario.rol_nombre) return usuario.rol_nombre;
    if (usuario.rol?.nombre) return usuario.rol.nombre;
    return 'Sin rol';
  }
  getEstado(usuario) {
    if (usuario.estado) return usuario.estado;
    return usuario.activo ? 'ACTIVO' : 'INACTIVO';
  }
  getPaginationArray() {
    const total = this.totalPages;
    const current = this.currentPage;
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
  getActividadClass(ultimoAcceso) {
    if (this.estaEnLinea(ultimoAcceso)) return 'dot-online';
    if (!ultimoAcceso) return 'dot-never';
    const fecha = new Date(ultimoAcceso);
    const ahora = new Date();
    const diffHoras = (ahora.getTime() - fecha.getTime()) / (1000 * 60 * 60);
    if (diffHoras < 24) return 'dot-recent';
    if (diffHoras < 168) return 'dot-week';
    return 'dot-old';
  }
  getActividadTexto(ultimoAcceso) {
    if (this.estaEnLinea(ultimoAcceso)) return 'En línea';
    if (!ultimoAcceso) return 'Nunca';
    const fecha = new Date(ultimoAcceso);
    const ahora = new Date();
    const diffMinutos = Math.floor((ahora.getTime() - fecha.getTime()) / (1000 * 60));
    const diffHoras = Math.floor(diffMinutos / 60);
    const diffDias = Math.floor(diffHoras / 24);
    if (diffMinutos < 5) return 'En línea';
    if (diffMinutos < 60) return `Hace ${diffMinutos} minutos`;
    if (diffHoras < 24) return `Hace ${diffHoras} horas`;
    if (diffDias < 7) return `Hace ${diffDias} días`;
    if (diffDias < 30) return `Hace ${Math.floor(diffDias / 7)} semanas`;
    return `Hace ${Math.floor(diffDias / 30)} meses`;
  }
  estaEnLinea(ultimoAcceso) {
    if (!ultimoAcceso) return false;
    const fecha = new Date(ultimoAcceso);
    const ahora = new Date();
    const diffMinutos = (ahora.getTime() - fecha.getTime()) / (1000 * 60);
    return diffMinutos < 5; // Considerar en línea si su última actividad fue hace menos de 5 minutos
  }
  static ɵfac = function UsuariosListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuariosListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UsuariosListComponent,
    selectors: [["app-usuarios-list"]],
    inputs: {
      usuarios: "usuarios",
      loading: "loading",
      totalItems: "totalItems",
      currentPage: "currentPage"
    },
    outputs: {
      edit: "edit",
      delete: "delete",
      passwordChange: "passwordChange",
      toggleActive: "toggleActive",
      pageChange: "pageChange"
    },
    decls: 4,
    vars: 3,
    consts: [[1, "table-container"], ["class", "loading-overlay", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-overlay"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], [1, "codigo-cell"], [1, "usuario-cell"], [1, "badge"], [1, "status"], [1, "acceso-cell"], [1, "actividad-cell"], [1, "actividad-dot"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Editar", 1, "btn-icon", "edit", 3, "click"], ["title", "Cambiar contrase\u00F1a", 1, "btn-icon", "password", 3, "click"], [1, "btn-icon", "toggle", 3, "click", "title"], ["title", "Eliminar", 1, "btn-icon", "delete", 3, "click"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-pages"], ["class", "pagination-page", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "pagination-page", 3, "click", "disabled"]],
    template: function UsuariosListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsuariosListComponent_div_1_Template, 4, 0, "div", 1)(2, UsuariosListComponent_div_2_Template, 7, 0, "div", 2)(3, UsuariosListComponent_ng_container_3_Template, 23, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.usuarios.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.usuarios.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.table-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-md);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.table-container[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  gap: 20px;\n  background: var(--bg-primary);\n  min-height: 400px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-right-color: var(--primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 15px;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  background: var(--bg-primary);\n  min-height: 400px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 20px;\n  opacity: 0.7;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 15px;\n  max-width: 350px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n@media (max-width: 1024px) {\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 900px;\n  }\n}\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  border-bottom: 2px solid var(--border-color);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n  text-align: center;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8) {\n  text-align: center;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 24px;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 24px;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: center;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  text-align: center;\n}\n.data-table[_ngcontent-%COMP%]   .codigo-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n  font-family: \"SF Mono\", \"Monaco\", monospace;\n  font-size: 13px;\n  background: var(--primary-light);\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n  line-height: 1.4;\n}\n.data-table[_ngcontent-%COMP%]   .usuario-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n  display: inline-block;\n  margin-right: 8px;\n}\n.data-table[_ngcontent-%COMP%]   .usuario-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  display: block;\n  margin-top: 4px;\n}\n.data-table[_ngcontent-%COMP%]   .acceso-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: \"SF Mono\", monospace;\n  background: var(--bg-tertiary);\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   .actividad-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   .actividad-dot.dot-recent[_ngcontent-%COMP%] {\n  background: var(--success);\n  animation: _ngcontent-%COMP%_pulse-recent 2s infinite;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   .actividad-dot.dot-week[_ngcontent-%COMP%] {\n  background: var(--warning);\n  animation: _ngcontent-%COMP%_pulse-week 2s infinite;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   .actividad-dot.dot-old[_ngcontent-%COMP%] {\n  background: var(--danger);\n  animation: _ngcontent-%COMP%_pulse-old 2s infinite;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   .actividad-dot.dot-never[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n  opacity: 0.5;\n  animation: none;\n}\n.data-table[_ngcontent-%COMP%]   .actividad-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-recent {\n  0% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-week {\n  0% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.6);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(245, 158, 11, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-old {\n  0% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 4px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.badge.badge-admin[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #8b5cf6, #7c3aed);\n  color: white;\n}\n.badge.badge-admin[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDC51\";\n  margin-right: 4px;\n}\n.badge.badge-manager[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3b82f6, #2563eb);\n  color: white;\n}\n.badge.badge-manager[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCCA\";\n  margin-right: 4px;\n}\n.badge.badge-analyst[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: white;\n}\n.badge.badge-analyst[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDCC8\";\n  margin-right: 4px;\n}\n.badge.badge-auditor[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #1a1a2e;\n}\n.badge.badge-auditor[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDD0D\";\n  margin-right: 4px;\n}\n.badge.badge-default[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.badge.badge-default[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDC64\";\n  margin-right: 4px;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.status[_ngcontent-%COMP%]::before {\n  content: \"\u25CF\";\n  font-size: 10px;\n  margin-right: 4px;\n}\n.status.status-active[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.status.status-inactive[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-muted);\n}\n.status.status-blocked[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.status.status-suspended[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 15px;\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.05);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon.password[_ngcontent-%COMP%]:hover {\n  background: var(--warning);\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon.toggle.active[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon.toggle.inactive[_ngcontent-%COMP%]:hover {\n  background: var(--success);\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  border-radius: 30px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: var(--text-primary);\n  font-size: 13px;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n  min-width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-pages[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 10px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n\n.dark-theme[_nghost-%COMP%]   .codigo-cell[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .codigo-cell[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.15);\n}\n.dark-theme[_nghost-%COMP%]   .badge-default[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .badge-default[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-color: var(--border-color);\n}\n\n.neon-theme[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n  border-color: rgba(0, 255, 135, 0.3);\n}\n.neon-theme[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #00ff87;\n}\n.neon-theme[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 255, 135, 0.1);\n}\n.neon-theme[_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover, .neon-theme   [_nghost-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 255, 135, 0.05);\n}\n.neon-theme[_nghost-%COMP%]   .codigo-cell[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .codigo-cell[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 135, 0.1);\n  color: #00ff87;\n}\n.neon-theme[_nghost-%COMP%]   .badge-default[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .badge-default[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 135, 0.1);\n  color: #00ff87;\n  border-color: rgba(0, 255, 135, 0.3);\n}\n.neon-theme[_nghost-%COMP%]   .pagination-page.active[_ngcontent-%COMP%], .neon-theme   [_nghost-%COMP%]   .pagination-page.active[_ngcontent-%COMP%] {\n  background: #00ff87;\n  color: #000;\n}\n\n@media (max-width: 768px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px !important;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 13px;\n  }\n  .badge[_ngcontent-%COMP%], .status[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 10px;\n  }\n}\n@media (max-width: 480px) {\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 64px 16px;\n  }\n  .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n  .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 12px;\n    border-radius: 8px;\n  }\n  .pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n    padding: 4px 12px;\n    font-size: 12px;\n  }\n  .pagination[_ngcontent-%COMP%]   .pagination-page[_ngcontent-%COMP%] {\n    min-width: 32px;\n    height: 32px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL29yaWdpbmFsJTIwU0lHUEFaL2p1c3RpY2lhLXBhei1mcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvc2VndXJpZGFkL3BhZ2VzL3VzdWFyaW9zL2NvbXBvbmVudHMvdXN1YXJpb3MtbGlzdC91c3Vhcmlvcy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL3NlZ3VyaWRhZC9wYWdlcy91c3Vhcmlvcy9jb21wb25lbnRzL3VzdWFyaW9zLWxpc3QvdXN1YXJpb3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUN1QmhCO0VBQ0UsNkJBQUE7RUFDQSxtQkFoQm1CO0VBaUJuQixnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREF0Qm1CO0FEQ3JCO0FDdUJFO0VBQ0UsNEJBQUE7QURyQko7O0FDNEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0E3Qlc7RUE4QlgsNkJBQUE7RUFDQSxpQkFBQTtBRHpCRjtBQzJCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBRHpCSjtBQzRCRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMUJKO0FDNkJFO0VBQ0U7SUFBSyx5QkFBQTtFRDFCUDtBQUNGOztBQ2dDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FEN0JGO0FDK0JFO0VBQ0UsZUFBQTtFQUNBLG1CQWpFUztFQWtFVCxZQUFBO0VBQ0Esd0NBQUE7QUQ3Qko7QUNnQ0U7RUFDRTtJQUFXLHdCQUFBO0VEN0JiO0VDOEJFO0lBQU0sMkJBQUE7RUQzQlI7QUFDRjtBQzZCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBC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QUFBO0VBQ0Esb0NBQUE7QURySEo7QUN3SEU7RUFDRSxjQUFBO0FEdEhKO0FDeUhFO0VBQ0UsMkNBQUE7QUR2SEo7QUN5SEk7RUFDRSxtQ0FBQTtBRHZITjtBQzJIRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBRHpISjtBQzRIRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FEMUhKO0FDNkhFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FEM0hKOztBQ2tJQTtFQUVJO0lBQ0UsNEJBQUE7RURoSUo7RUNvSUE7SUFDRSxRQXRuQlM7RURvZlg7RUNvSUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RURsSUo7RUNzSUE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RURwSUY7QUFDRjtBQ3VJQTtFQUNFO0lBQ0Usa0JBQUE7RURySUY7RUN1SUU7SUFDRSxlQUFBO0VEcklKO0VDd0lFO0lBQ0UsZUFBQTtFRHRJSjtFQzJJRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VEeklKO0VDOElFO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VENUlKO0VDK0lFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VEN0lKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG4udGFibGUtY29udGFpbmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDIwcHg7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuLmxvYWRpbmctb3ZlcmxheSAuc3Bpbm5lciB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5sb2FkaW5nLW92ZXJsYXkgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cbi5lbXB0eS1zdGF0ZSAuZW1wdHktaWNvbiB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cbn1cbi5lbXB0eS1zdGF0ZSBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZW1wdHktc3RhdGUgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWluLXdpZHRoOiAxMDAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kYXRhLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRhdGEtdGFibGUge1xuICAgIG1pbi13aWR0aDogODAwcHg7XG4gIH1cbn1cbi5kYXRhLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xufVxuLmRhdGEtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGF0YS10YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5kYXRhLXRhYmxlIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGF0YS10YWJsZSB0aGVhZCB0aDpudGgtY2hpbGQoNSksIC5kYXRhLXRhYmxlIHRoZWFkIHRoOm50aC1jaGlsZCg4KSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kYXRhLXRhYmxlIHRib2R5IHRyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xufVxuLmRhdGEtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG59XG4uZGF0YS10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5kYXRhLXRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMTZweCAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGF0YS10YWJsZSB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5kYXRhLXRhYmxlIHRib2R5IHRyIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmRhdGEtdGFibGUgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhdGEtdGFibGUgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDgpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhdGEtdGFibGUgLmNvZGlnby1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiTW9uYWNvXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5kYXRhLXRhYmxlIC51c3VhcmlvLWNlbGwgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5kYXRhLXRhYmxlIC51c3VhcmlvLWNlbGwgc21hbGwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kYXRhLXRhYmxlIC5hY2Nlc28tY2VsbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGF0YS10YWJsZSAuYWN0aXZpZGFkLWNlbGwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRhdGEtdGFibGUgLmFjdGl2aWRhZC1jZWxsIC5hY3RpdmlkYWQtZG90IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmRhdGEtdGFibGUgLmFjdGl2aWRhZC1jZWxsIC5hY3RpdmlkYWQtZG90LmRvdC1yZWNlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgYW5pbWF0aW9uOiBwdWxzZS1yZWNlbnQgMnMgaW5maW5pdGU7XG59XG4uZGF0YS10YWJsZSAuYWN0aXZpZGFkLWNlbGwgLmFjdGl2aWRhZC1kb3QuZG90LXdlZWsge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nKTtcbiAgYW5pbWF0aW9uOiBwdWxzZS13ZWVrIDJzIGluZmluaXRlO1xufVxuLmRhdGEtdGFibGUgLmFjdGl2aWRhZC1jZWxsIC5hY3RpdmlkYWQtZG90LmRvdC1vbGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBhbmltYXRpb246IHB1bHNlLW9sZCAycyBpbmZpbml0ZTtcbn1cbi5kYXRhLXRhYmxlIC5hY3RpdmlkYWQtY2VsbCAuYWN0aXZpZGFkLWRvdC5kb3QtbmV2ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgb3BhY2l0eTogMC41O1xuICBhbmltYXRpb246IG5vbmU7XG59XG4uZGF0YS10YWJsZSAuYWN0aXZpZGFkLWNlbGwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2UtcmVjZW50IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNiwgMTg1LCAxMjksIDAuNik7XG4gIH1cbiAgNzAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiYSgxNiwgMTg1LCAxMjksIDApO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNiwgMTg1LCAxMjksIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlLXdlZWsge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NSwgMTU4LCAxMSwgMC42KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDI0NSwgMTU4LCAxMSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDI0NSwgMTU4LCAxMSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2Utb2xkIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMzksIDY4LCA2OCwgMC42KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDIzOSwgNjgsIDY4LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjM5LCA2OCwgNjgsIDApO1xuICB9XG59XG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiA0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmJhZGdlLmJhZGdlLWFkbWluIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiwgIzdjM2FlZCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYWRnZS5iYWRnZS1hZG1pbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDsMKfwpHCkVwiO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5iYWRnZS5iYWRnZS1tYW5hZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNiODJmNiwgIzI1NjNlYik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYWRnZS5iYWRnZS1tYW5hZ2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOwwp/Ck8KKXCI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmJhZGdlLmJhZGdlLWFuYWx5c3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJhZGdlLmJhZGdlLWFuYWx5c3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw7DCn8KTwohcIjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uYmFkZ2UuYmFkZ2UtYXVkaXRvciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICBjb2xvcjogIzFhMWEyZTtcbn1cbi5iYWRnZS5iYWRnZS1hdWRpdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOwwp/ClMKNXCI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmJhZGdlLmJhZGdlLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuLmJhZGdlLmJhZGdlLWRlZmF1bHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw7DCn8KRwqRcIjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnN0YXR1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDosKXwo9cIjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5zdGF0dXMuc3RhdHVzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4uc3RhdHVzLnN0YXR1cy1pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuLnN0YXR1cy5zdGF0dXMtYmxvY2tlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xufVxuLnN0YXR1cy5zdGF0dXMtc3VzcGVuZGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbn1cblxuLmFjdGlvbnMtY2VsbCAuYWN0aW9ucy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjdGlvbnMtY2VsbCAuYWN0aW9ucy1idXR0b25zIC5idG4taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbn1cbi5hY3Rpb25zLWNlbGwgLmFjdGlvbnMtYnV0dG9ucyAuYnRuLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wNSk7XG59XG4uYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uLmVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFjdGlvbnMtY2VsbCAuYWN0aW9ucy1idXR0b25zIC5idG4taWNvbi5wYXNzd29yZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uLnRvZ2dsZS5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uLnRvZ2dsZS5pbmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uLmRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG4ucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1idG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4ucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhZ2luYXRpb24gLnBhZ2luYXRpb24tcGFnZXMgLnBhZ2luYXRpb24tcGFnZSB7XG4gIG1pbi13aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXBhZ2VzIC5wYWdpbmF0aW9uLXBhZ2U6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXBhZ2VzIC5wYWdpbmF0aW9uLXBhZ2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXBhZ2VzIC5wYWdpbmF0aW9uLXBhZ2U6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogOHB4O1xufVxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udGFibGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRhYmxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmNvZGlnby1jZWxsIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzAsIDIyOSwgMC4xNSk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuYmFkZ2UtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG46aG9zdC1jb250ZXh0KC5uZW9uLXRoZW1lKSAudGFibGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDI1NSwgMTM1LCAwLjMpO1xufVxuOmhvc3QtY29udGV4dCgubmVvbi10aGVtZSkgLmRhdGEtdGFibGUgdGhlYWQgdGgge1xuICBjb2xvcjogIzAwZmY4Nztcbn1cbjpob3N0LWNvbnRleHQoLm5lb24tdGhlbWUpIC5kYXRhLXRhYmxlIHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAyNTUsIDEzNSwgMC4xKTtcbn1cbjpob3N0LWNvbnRleHQoLm5lb24tdGhlbWUpIC5kYXRhLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNSwgMC4wNSk7XG59XG46aG9zdC1jb250ZXh0KC5uZW9uLXRoZW1lKSAuY29kaWdvLWNlbGwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMTM1LCAwLjEpO1xuICBjb2xvcjogIzAwZmY4Nztcbn1cbjpob3N0LWNvbnRleHQoLm5lb24tdGhlbWUpIC5iYWRnZS1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNSwgMC4xKTtcbiAgY29sb3I6ICMwMGZmODc7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDEzNSwgMC4zKTtcbn1cbjpob3N0LWNvbnRleHQoLm5lb24tdGhlbWUpIC5wYWdpbmF0aW9uLXBhZ2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwZmY4NztcbiAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGF0YS10YWJsZSB0aCwgLmRhdGEtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDEycHggOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFjdGlvbnMtY2VsbCAuYWN0aW9ucy1idXR0b25zIHtcbiAgICBnYXA6IDRweDtcbiAgfVxuICAuYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5iYWRnZSwgLnN0YXR1cyB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZW1wdHktc3RhdGUge1xuICAgIHBhZGRpbmc6IDY0cHggMTZweDtcbiAgfVxuICAuZW1wdHktc3RhdGUgLmVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxuICAuZW1wdHktc3RhdGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuYWN0aW9ucy1jZWxsIC5hY3Rpb25zLWJ1dHRvbnMgLmJ0bi1pY29uIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1idG4ge1xuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wYWdlIHtcbiAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFRBQkxBIERFIFVTVUFSSU9TIC0gRVNUSUxPUyBDT1JSRUdJRE9TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQVJJQUJMRVMgTE9DQUxFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4kdHJhbnNpdGlvbi1kZWZhdWx0OiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4kdHJhbnNpdGlvbi1mYXN0OiBhbGwgMC4ycyBlYXNlO1xyXG4kYm9yZGVyLXJhZGl1cy1jYXJkOiAxNnB4O1xyXG4kYm9yZGVyLXJhZGl1cy10YWJsZTogMTJweDtcclxuJGJvcmRlci1yYWRpdXMtYmFkZ2U6IDIwcHg7XHJcbiRzcGFjaW5nLXhzOiA0cHg7XHJcbiRzcGFjaW5nLXNtOiA4cHg7XHJcbiRzcGFjaW5nLW1kOiAxMnB4O1xyXG4kc3BhY2luZy1sZzogMTZweDtcclxuJHNwYWNpbmcteGw6IDIwcHg7XHJcbiRzcGFjaW5nLTJ4bDogMjRweDtcclxuJHNwYWNpbmctM3hsOiAzMnB4O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtY2FyZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1kZWZhdWx0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FESU5HIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICRzcGFjaW5nLTN4bCAqIDIuNSAkc3BhY2luZy14bDtcclxuICBnYXA6ICRzcGFjaW5nLXhsO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFTVBUWSBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkc3BhY2luZy0zeGwgKiAyLjUgJHNwYWNpbmcteGw7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcblxyXG4gIC5lbXB0eS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206ICRzcGFjaW5nLXhsO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmxvYXQge1xyXG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTsgfVxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmctbWQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBUQUJMQSBERSBEQVRPUyAtIFNJTiB0YWJsZS1sYXlvdXQ6IGZpeGVkXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5kYXRhLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1pbi13aWR0aDogMTAwMHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PSBDQUJFQ0VSQSA9PT09PT09PT09XHJcbiAgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZzogJHNwYWNpbmctbGcgJHNwYWNpbmctbWQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRzcGFjaW5nLTJ4bDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2luZy0yeGw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCg1KSxcclxuICAgICAgJjpudGgtY2hpbGQoOCkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PSBDVUVSUE8gREUgTEEgVEFCTEEgPT09PT09PT09PVxyXG4gIHRib2R5IHtcclxuICAgIHRyIHtcclxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVmYXVsdDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAkc3BhY2luZy1sZyAkc3BhY2luZy1tZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogJHNwYWNpbmctMnhsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRzcGFjaW5nLTJ4bDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDgpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT0gRVNUSUxPUyBERSBDRUxEQVMgRVNQRUPDg8KNRklDQVMgPT09PT09PT09PVxyXG5cclxuICAvLyBDw4PCs2RpZ28gSURcclxuICAuY29kaWdvLWNlbGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU0YgTW9ubycsICdNb25hY28nLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzICRzcGFjaW5nLW1kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFkZ2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2VsZGEgZGUgdXN1YXJpbyAoc2luIGZsZXgsIHVzYW5kbyBpbmxpbmUtYmxvY2spXHJcbiAgLnVzdWFyaW8tY2VsbCB7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJHNwYWNpbmctc207XHJcbiAgICB9XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXhzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2VsZGEgZGUgYWNjZXNvXHJcbiAgLmFjY2Vzby1jZWxsIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdTRiBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjaW5nLXhzICRzcGFjaW5nLW1kO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYWRnZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2VsZGEgZGUgYWN0aXZpZGFkXHJcbiAgLmFjdGl2aWRhZC1jZWxsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgLmFjdGl2aWRhZC1kb3Qge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2luZy1zbTtcclxuXHJcbiAgICAgICYuZG90LXJlY2VudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZS1yZWNlbnQgMnMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZG90LXdlZWsge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2Utd2VlayAycyBpbmZpbml0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kb3Qtb2xkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2Utb2xkIDJzIGluZmluaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRvdC1uZXZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQU5JTUFDSU9ORVMgREUgUFVMU09cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQGtleWZyYW1lcyBwdWxzZS1yZWNlbnQge1xyXG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2LCAxODUsIDEyOSwgMC42KTsgfVxyXG4gIDcwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDE2LCAxODUsIDEyOSwgMCk7IH1cclxuICAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2LCAxODUsIDEyOSwgMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS13ZWVrIHtcclxuICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDUsIDE1OCwgMTEsIDAuNik7IH1cclxuICA3MCUgeyBib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiYSgyNDUsIDE1OCwgMTEsIDApOyB9XHJcbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyNDUsIDE1OCwgMTEsIDApOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Utb2xkIHtcclxuICAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgyMzksIDY4LCA2OCwgMC42KTsgfVxyXG4gIDcwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDIzOSwgNjgsIDY4LCAwKTsgfVxyXG4gIDEwMCUgeyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMjM5LCA2OCwgNjgsIDApOyB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJBREdFUyBERSBST0xFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAkc3BhY2luZy14cztcclxuICBwYWRkaW5nOiAkc3BhY2luZy14cyAkc3BhY2luZy1sZztcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYWRnZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWZhc3Q7XHJcblxyXG4gICYuYmFkZ2UtYWRtaW4ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiwgIzdjM2FlZCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ8Owwp/CkcKRJztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2luZy14cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYmFkZ2UtbWFuYWdlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjMjU2M2ViKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnw7DCn8KTwoonO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXhzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5iYWRnZS1hbmFseXN0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICfDsMKfwpPCiCc7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJHNwYWNpbmcteHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJhZGdlLWF1ZGl0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XHJcbiAgICBjb2xvcjogIzFhMWEyZTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnw7DCn8KUwo0nO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXhzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5iYWRnZS1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnw7DCn8KRwqQnO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXhzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVNUQURPUyBERUwgVVNVQVJJT1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogJHNwYWNpbmcteHM7XHJcbiAgcGFkZGluZzogJHNwYWNpbmcteHMgJHNwYWNpbmctbWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFkZ2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1mYXN0O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ8OiwpfCjyc7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nLXhzO1xyXG4gIH1cclxuXHJcbiAgJi5zdGF0dXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gIH1cclxuXHJcbiAgJi5zdGF0dXMtaW5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgJi5zdGF0dXMtYmxvY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgfVxyXG5cclxuICAmLnN0YXR1cy1zdXNwZW5kZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCT1RPTkVTIERFIEFDQ0nDg8KTTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uYWN0aW9ucy1jZWxsIHtcclxuICAuYWN0aW9ucy1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6ICRzcGFjaW5nLXNtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5idG4taWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5lZGl0OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGFzc3dvcmQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50b2dnbGUuYWN0aXZlOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50b2dnbGUuaW5hY3RpdmU6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kZWxldGU6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQUdJTkFDScODwpNOXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAkc3BhY2luZy1zbTtcclxuICBwYWRkaW5nOiAkc3BhY2luZy14bCAkc3BhY2luZy0yeGw7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6ICRzcGFjaW5nLW1kO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tYnRuIHtcclxuICAgIHBhZGRpbmc6ICRzcGFjaW5nLXNtICRzcGFjaW5nLXhsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWRlZmF1bHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLXBhZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6ICRzcGFjaW5nLXNtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnBhZ2luYXRpb24tcGFnZSB7XHJcbiAgICAgIG1pbi13aWR0aDogMzhweDtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tZGVmYXVsdDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0NST0xMQkFSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBURU1BIE9TQ1VST1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgLmNvZGlnby1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNzksIDcwLCAyMjksIDAuMTUpO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVEVNQSBORcODwpNOXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjpob3N0LWNvbnRleHQoLm5lb24tdGhlbWUpIHtcclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAuZGF0YS10YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzAwZmY4NztcclxuICB9XHJcblxyXG4gIC5kYXRhLXRhYmxlIHRib2R5IHRyIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMDUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvZGlnby1jZWxsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XHJcbiAgICBjb2xvcjogIzAwZmY4NztcclxuICB9XHJcblxyXG4gIC5iYWRnZS1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjU1LCAxMzUsIDAuMSk7XHJcbiAgICBjb2xvcjogIzAwZmY4NztcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAyNTUsIDEzNSwgMC4zKTtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLXBhZ2UuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGZmODc7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFU1BPTlNJVkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRhdGEtdGFibGUge1xyXG4gICAgdGgsIHRkIHtcclxuICAgICAgcGFkZGluZzogJHNwYWNpbmctbWQgJHNwYWNpbmctc20gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zLWNlbGwgLmFjdGlvbnMtYnV0dG9ucyB7XHJcbiAgICBnYXA6ICRzcGFjaW5nLXhzO1xyXG5cclxuICAgIC5idG4taWNvbiB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWRnZSwgLnN0YXR1cyB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2luZy14cyAkc3BhY2luZy1zbTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5lbXB0eS1zdGF0ZSB7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2luZy0zeGwgKiAyICRzcGFjaW5nLWxnO1xyXG5cclxuICAgIC5lbXB0eS1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMtY2VsbCAuYWN0aW9ucy1idXR0b25zIHtcclxuICAgIC5idG4taWNvbiB7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgLnBhZ2luYXRpb24tYnRuIHtcclxuICAgICAgcGFkZGluZzogJHNwYWNpbmcteHMgJHNwYWNpbmctbWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbi1wYWdlIHtcclxuICAgICAgbWluLXdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41558:
/*!***************************************************!*\
  !*** ./src/app/services/usuario-state.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioStateService: () => (/* binding */ UsuarioStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 11817);



const initialState = {
  usuarios: [],
  loading: false,
  error: null,
  totalItems: 0,
  currentPage: 1,
  perPage: 10,
  filters: {}
};
class UsuarioStateService {
  state = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(initialState);
  state$ = this.state.asObservable();
  selectUsuarios() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.usuarios), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  selectLoading() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.loading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  selectError() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.error), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  selectTotalItems() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.totalItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  selectCurrentPage() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.currentPage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  selectFilters() {
    return this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.filters), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
  }
  setLoading(loading) {
    this.state.next({
      ...this.state.value,
      loading
    });
  }
  setUsuarios(usuarios, totalItems) {
    this.state.next({
      ...this.state.value,
      usuarios,
      totalItems,
      loading: false,
      error: null
    });
  }
  setError(error) {
    this.state.next({
      ...this.state.value,
      error,
      loading: false
    });
  }
  setCurrentPage(page) {
    this.state.next({
      ...this.state.value,
      currentPage: page
    });
  }
  setFilters(filters) {
    const cleanFilters = {};
    if (filters.search) cleanFilters.search = filters.search;
    if (filters.rol_id !== null && filters.rol_id !== undefined) cleanFilters.rol_id = filters.rol_id;
    if (filters.activo !== null && filters.activo !== undefined) cleanFilters.activo = filters.activo;
    this.state.next({
      ...this.state.value,
      filters: cleanFilters,
      currentPage: 1
    });
  }
  addUsuario(usuario) {
    this.state.next({
      ...this.state.value,
      usuarios: [usuario, ...this.state.value.usuarios],
      totalItems: this.state.value.totalItems + 1
    });
  }
  updateUsuario(usuarioId, changes) {
    const usuarios = this.state.value.usuarios.map(u => u.usuario_id === usuarioId ? {
      ...u,
      ...changes
    } : u);
    this.state.next({
      ...this.state.value,
      usuarios
    });
  }
  removeUsuario(usuarioId) {
    const usuarios = this.state.value.usuarios.filter(u => u.usuario_id !== usuarioId);
    this.state.next({
      ...this.state.value,
      usuarios,
      totalItems: this.state.value.totalItems - 1
    });
  }
  resetState() {
    this.state.next(initialState);
  }
  static ɵfac = function UsuarioStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuarioStateService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UsuarioStateService,
    factory: UsuarioStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81669:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/components/usuario-form/usuario-form.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuarioFormComponent: () => (/* binding */ UsuarioFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/usuario.validators */ 96987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _services_rol_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/rol-api.service */ 45446);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../services/personal.service */ 45322);












function UsuarioFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("nombre_usuario"), " ");
  }
}
function UsuarioFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("email"), " ");
  }
}
function UsuarioFormComponent_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("password"), " ");
  }
}
function UsuarioFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Contrase\u00F1a *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 19)(4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function UsuarioFormComponent_div_13_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.updatePasswordReqs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuarioFormComponent_div_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.showPassword = !ctx_r0.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 22)(8, "ul")(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u2713 M\u00EDnimo 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\u2713 Al menos una may\u00FAscula");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u2713 Al menos una min\u00FAscula");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u2713 Al menos un n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u2713 Al menos un car\u00E1cter especial");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UsuarioFormComponent_div_13_div_19_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.showPassword ? "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F" : "\uD83D\uDC41\uFE0F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.passwordReqs.minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.passwordReqs.hasUppercase);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.passwordReqs.hasLowercase);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.passwordReqs.hasNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid", ctx_r0.passwordReqs.hasSpecial);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r0.usuarioForm.get("password")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r0.usuarioForm.get("password")) == null ? null : tmp_8_0.invalid));
  }
}
function UsuarioFormComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("password_confirmation"), " ");
  }
}
function UsuarioFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Confirmar Contrase\u00F1a *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UsuarioFormComponent_div_14_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r0.usuarioForm.get("password_confirmation")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r0.usuarioForm.get("password_confirmation")) == null ? null : tmp_1_0.invalid));
  }
}
function UsuarioFormComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const personal_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", personal_r3.personal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getPersonalNombre(personal_r3), " ");
  }
}
function UsuarioFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("personal_id"), " ");
  }
}
function UsuarioFormComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rol_r4.rol_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rol_r4.nombre, " ");
  }
}
function UsuarioFormComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getErrorMessage("rol_id"), " ");
  }
}
class UsuarioFormComponent {
  fb;
  rolApiService;
  notificationService;
  personalService;
  mode = 'create';
  usuario;
  save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  usuarioForm;
  roles = [];
  personalList = []; // ✅ Array para almacenar personal
  showPassword = false;
  isLoading = false;
  searchPersonalTerm = '';
  filteredPersonalList = [];
  showPersonalSearch = false;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  passwordReqs = {
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false
  };
  constructor(fb, rolApiService, notificationService, personalService // ✅ Inyectar PersonalService
  ) {
    this.fb = fb;
    this.rolApiService = rolApiService;
    this.notificationService = notificationService;
    this.personalService = personalService;
  }
  ngOnInit() {
    this.initForm();
    this.loadRoles();
    this.loadPersonal(); // ✅ Cargar personal
    if (this.mode === 'edit' && this.usuario) {
      setTimeout(() => {
        this.patchForm();
      }, 100);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.usuarioForm = this.fb.group({
      nombre_usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(100)]],
      personal_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      // ✅ Campo requerido - se refiere a personal
      rol_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      activo: [true],
      requiere_cambio_contrasena: [true]
    });
    if (this.mode === 'create') {
      this.usuarioForm.addControl('password', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8), _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_5__.usuarioValidators.passwordStrengthStrict]));
      this.usuarioForm.addControl('password_confirmation', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_5__.usuarioValidators.passwordMatch('password')]));
    }
  }
  loadPersonal() {
    this.personalService.getPersonalDisponible().subscribe({
      next: response => {
        this.personalList = response.data || response;
        console.log('✅ Personal cargado:', this.personalList);
      },
      error: error => {
        console.error('❌ Error cargando personal:', error);
        this.notificationService.showError('Error al cargar el personal');
        this.personalList = [];
      }
    });
  }
  loadRoles() {
    this.rolApiService.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: roles => {
        this.roles = roles;
        console.log('✅ Roles cargados en formulario:', this.roles);
      },
      error: error => {
        console.error('❌ Error cargando roles:', error);
        this.notificationService.showError('Error al cargar los roles');
        this.roles = [];
      }
    });
  }
  patchForm() {
    if (this.usuario) {
      console.log('📝 Patch form con usuario:', this.usuario);
      console.log('📝 personal_id a seleccionar:', this.usuario.personal_id);
      this.usuarioForm.patchValue({
        nombre_usuario: this.usuario.nombre_usuario,
        email: this.usuario.email,
        personal_id: this.usuario.personal_id,
        rol_id: this.usuario.rol_id,
        activo: this.usuario.activo,
        requiere_cambio_contrasena: this.usuario.requiere_cambio_contrasena
      });
    }
  }
  getPersonalNombre(personal) {
    if (personal.persona) {
      return `${personal.persona.nombres} ${personal.persona.apellidos} - ${personal.persona.numero_documento}`;
    }
    return `Personal ID: ${personal.personal_id}`;
  }
  updatePasswordReqs() {
    const password = this.usuarioForm.get('password')?.value || '';
    this.passwordReqs = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
  }
  getErrorMessage(controlName) {
    const control = this.usuarioForm.get(controlName);
    if (!control || !control.errors || !control.touched) return '';
    const errors = control.errors;
    if (errors['required']) return 'Este campo es requerido';
    if (errors['minlength']) return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    if (errors['maxlength']) return `Máximo ${errors['maxlength'].requiredLength} caracteres`;
    if (errors['email']) return 'Email inválido';
    if (errors['passwordMismatch']) return 'Las contraseñas no coinciden';
    if (errors['minlength']) return 'La contraseña debe tener al menos 8 caracteres';
    if (errors['noUppercase']) return 'La contraseña debe tener al menos una mayúscula';
    if (errors['noLowercase']) return 'La contraseña debe tener al menos una minúscula';
    if (errors['noNumber']) return 'La contraseña debe tener al menos un número';
    if (errors['noSpecial']) return 'La contraseña debe tener al menos un carácter especial';
    return 'Campo inválido';
  }
  getPasswordStrengthClass() {
    const met = Object.values(this.passwordReqs).filter(Boolean).length;
    if (met === 5) return 'strength-very-strong';
    if (met >= 4) return 'strength-strong';
    if (met >= 3) return 'strength-medium';
    return 'strength-weak';
  }
  onSubmit() {
    if (this.usuarioForm.valid) {
      this.isLoading = true;
      const formValue = this.usuarioForm.value;
      // ✅ Enviar booleanos explícitos como true/false, no como 1/0
      const dataToSend = {
        nombre_usuario: formValue.nombre_usuario,
        email: formValue.email,
        password: formValue.password,
        password_confirmation: formValue.password_confirmation,
        personal_id: formValue.personal_id,
        rol_id: formValue.rol_id,
        activo: formValue.activo === true || formValue.activo === 1 || formValue.activo === '1' || formValue.activo === 'true' ? true : false,
        requiere_cambio_contrasena: formValue.requiere_cambio_contrasena === true || formValue.requiere_cambio_contrasena === 1 || formValue.requiere_cambio_contrasena === '1' || formValue.requiere_cambio_contrasena === 'true' ? true : false
      };
      console.log('📤 Enviando datos:', dataToSend);
      this.save.emit(dataToSend);
    }
  }
  static ɵfac = function UsuarioFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuarioFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_rol_api_service__WEBPACK_IMPORTED_MODULE_7__.RolApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_personal_service__WEBPACK_IMPORTED_MODULE_9__.PersonalService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: UsuarioFormComponent,
    selectors: [["app-usuario-form"]],
    inputs: {
      mode: "mode",
      usuario: "usuario"
    },
    outputs: {
      save: "save",
      cancel: "cancel"
    },
    decls: 47,
    vars: 13,
    consts: [[3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["type", "text", "formControlName", "nombre_usuario", "placeholder", "ej: jperez", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "ej: juan@empresa.com", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["formControlName", "personal_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "rol_id", 1, "form-control"], [1, "checkbox"], ["type", "checkbox", "formControlName", "activo"], ["type", "checkbox", "formControlName", "requiere_cambio_contrasena"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error"], [1, "password-wrapper"], ["formControlName", "password", 1, "form-control", 3, "input", "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "password-requirements"], ["type", "password", "formControlName", "password_confirmation", 1, "form-control"]],
    template: function UsuarioFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UsuarioFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Nombre de Usuario *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, UsuarioFormComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 3)(9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, UsuarioFormComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UsuarioFormComponent_div_13_Template, 20, 13, "div", 7)(14, UsuarioFormComponent_div_14_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 2)(16, "div", 3)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Personal Asociado *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "select", 8)(20, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Seleccione un personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UsuarioFormComponent_option_22_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, UsuarioFormComponent_div_23_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 3)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Rol *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 11)(28, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Seleccione un rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UsuarioFormComponent_option_30_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UsuarioFormComponent_div_31_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 3)(33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Usuario activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 3)(38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Requerir cambio de contrase\u00F1a en primer inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 15)(43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuarioFormComponent_Template_button_click_43_listener() {
          return ctx.cancel.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_7_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.usuarioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.usuarioForm.get("nombre_usuario")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.usuarioForm.get("nombre_usuario")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.usuarioForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.usuarioForm.get("email")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode === "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.personalList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.usuarioForm.get("personal_id")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.usuarioForm.get("personal_id")) == null ? null : tmp_7_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.usuarioForm.get("rol_id")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.usuarioForm.get("rol_id")) == null ? null : tmp_10_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.usuarioForm.invalid || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.mode === "create" ? "Crear Usuario" : "Actualizar Usuario", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["@charset \"UTF-8\";\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n\n.form-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--input-border-hover);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 12px;\n  margin-top: 4px;\n  animation: _ngcontent-%COMP%_shake 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-4px);\n  }\n  75% {\n    transform: translateX(4px);\n  }\n}\n\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 45px;\n}\n.password-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 4px;\n  border-radius: 50%;\n  transition: all 0.3s;\n  color: var(--text-muted);\n}\n.password-wrapper[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n}\n\n.password-requirements[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u25CB\";\n  font-size: 12px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.valid[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.valid[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n}\n\n.password-strength[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: var(--border-color);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.weak[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--danger) 25%, var(--border-color) 25%);\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.medium[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--warning) 50%, var(--border-color) 50%);\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.strong[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--info) 75%, var(--border-color) 25%);\n}\n.password-strength[_ngcontent-%COMP%]   .strength-bar.very-strong[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.password-strength[_ngcontent-%COMP%]   .strength-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-align: right;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  color: var(--text-primary);\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL29yaWdpbmFsJTIwU0lHUEFaL2p1c3RpY2lhLXBhei1mcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvc2VndXJpZGFkL3BhZ2VzL3VzdWFyaW9zL2NvbXBvbmVudHMvdXN1YXJpby1mb3JtL3VzdWFyaW8tZm9ybS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvdXN1YXJpb3MvY29tcG9uZW50cy91c3VhcmlvLWZvcm0vdXN1YXJpby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0loQjtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QURGRjtBQ0lFO0VBTEY7SUFNSSwwQkFBQTtJQUNBLFNBQUE7RURERjtBQUNGOztBQ0lBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRERGOztBQ0lBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBRERGO0FDR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FEREo7QUNHSTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QURETjtBQ0tFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QURISjtBQ0tJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QURITjtBQ01JO0VBQ0UsdUNBQUE7QURKTjtBQ09JO0VBQ0UsK0JBQUE7QURMTjtBQ1NFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEUEo7QUNVRTtFQUNFO0lBQVcsd0JBQUE7RURQYjtFQ1FFO0lBQU0sMkJBQUE7RURMUjtFQ01FO0lBQU0sMEJBQUE7RURIUjtBQUNGOztBQ09BO0VBQ0Usa0JBQUE7QURKRjtBQ01FO0VBQ0UsbUJBQUE7QURKSjtBQ09FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FETEo7QUNPSTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7QURMTjs7QUNXQTtFQUNFLGVBQUE7QURSRjtBQ1VFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBRFJKO0FDVUk7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QURSTjtBQ1VNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURSUjtBQ1dNO0VBQ0UscUJBQUE7QURUUjtBQ1dRO0VBQ0UsWUFBQTtBRFRWOztBQ2lCQTtFQUNFLGVBQUE7QURkRjtBQ2dCRTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRGRKO0FDZ0JJO0VBQ0UsOEVBQUE7QURkTjtBQ2lCSTtFQUNFLCtFQUFBO0FEZk47QUNrQkk7RUFDRSw0RUFBQTtBRGhCTjtBQ21CSTtFQUNFLDBCQUFBO0FEakJOO0FDcUJFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QURuQko7O0FDd0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QURyQkY7QUN1QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBRHJCSjtBQ3dCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FEdEJKOztBQzJCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUR4QkY7QUMwQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FEeEJKO0FDMEJJO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0FEeEJOO0FDMEJNO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtBRHhCUjtBQzRCSTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUQxQk47QUM0Qk07RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FEMUJSO0FDNkJNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEM0JSIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG4uZm9ybS1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIC5yZXF1aXJlZCB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2w6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWJvcmRlci1ob3Zlcik7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG59XG4uZm9ybS1ncm91cCAuZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4zcyBlYXNlLWluLW91dDtcbn1cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gIH1cbn1cblxuLnBhc3N3b3JkLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc3dvcmQtd3JhcHBlciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbn1cbi5wYXNzd29yZC13cmFwcGVyIC5wYXNzd29yZC10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbi5wYXNzd29yZC13cmFwcGVyIC5wYXNzd29yZC10b2dnbGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjEpO1xufVxuXG4ucGFzc3dvcmQtcmVxdWlyZW1lbnRzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnBhc3N3b3JkLXJlcXVpcmVtZW50cyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG59XG4ucGFzc3dvcmQtcmVxdWlyZW1lbnRzIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cbi5wYXNzd29yZC1yZXF1aXJlbWVudHMgdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6LCl8KLXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYXNzd29yZC1yZXF1aXJlbWVudHMgdWwgbGkudmFsaWQge1xuICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4ucGFzc3dvcmQtcmVxdWlyZW1lbnRzIHVsIGxpLnZhbGlkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOiwpzCk1wiO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ucGFzc3dvcmQtc3RyZW5ndGggLnN0cmVuZ3RoLWJhciB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5wYXNzd29yZC1zdHJlbmd0aCAuc3RyZW5ndGgtYmFyLndlYWsge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWRhbmdlcikgMjUlLCB2YXIoLS1ib3JkZXItY29sb3IpIDI1JSk7XG59XG4ucGFzc3dvcmQtc3RyZW5ndGggLnN0cmVuZ3RoLWJhci5tZWRpdW0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXdhcm5pbmcpIDUwJSwgdmFyKC0tYm9yZGVyLWNvbG9yKSA1MCUpO1xufVxuLnBhc3N3b3JkLXN0cmVuZ3RoIC5zdHJlbmd0aC1iYXIuc3Ryb25nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pbmZvKSA3NSUsIHZhcigtLWJvcmRlci1jb2xvcikgMjUlKTtcbn1cbi5wYXNzd29yZC1zdHJlbmd0aCAuc3RyZW5ndGgtYmFyLnZlcnktc3Ryb25nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcyk7XG59XG4ucGFzc3dvcmQtc3RyZW5ndGggLnN0cmVuZ3RoLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoZWNrYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLmNoZWNrYm94IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG4uZm9ybS1hY3Rpb25zIC5idG4ge1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmZvcm0tYWN0aW9ucyAuYnRuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuLmZvcm0tYWN0aW9ucyAuYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5mb3JtLWFjdGlvbnMgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5mb3JtLWFjdGlvbnMgLmJ0bi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbn1cbi5mb3JtLWFjdGlvbnMgLmJ0bi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGT1JNVUxBUklPIERFIFVTVUFSSU9TIC0gRVNUSUxPUyBDT01QTEVUT1NcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5mb3JtLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMzJweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICAgIC5yZXF1aXJlZCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1ib3JkZXItaG92ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2hha2Uge1xyXG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cclxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTsgfVxyXG4gICAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBhc3N3b3JkIHdyYXBwZXJcclxuLnBhc3N3b3JkLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhc3N3b3JkLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUGFzc3dvcmQgcmVxdWlyZW1lbnRzXHJcbi5wYXNzd29yZC1yZXF1aXJlbWVudHMge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDRweDtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ8OiwpfCiyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnZhbGlkIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnw6LCnMKTJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFBhc3N3b3JkIHN0cmVuZ3RoXHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAuc3RyZW5ndGgtYmFyIHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgJi53ZWFrIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1kYW5nZXIpIDI1JSwgdmFyKC0tYm9yZGVyLWNvbG9yKSAyNSUpO1xyXG4gICAgfVxyXG5cclxuICAgICYubWVkaXVtIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS13YXJuaW5nKSA1MCUsIHZhcigtLWJvcmRlci1jb2xvcikgNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0cm9uZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW5mbykgNzUlLCB2YXIoLS1ib3JkZXItY29sb3IpIDI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi52ZXJ5LXN0cm9uZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0cmVuZ3RoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDaGVja2JveFxyXG4uY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gYWN0aW9uc1xyXG4uZm9ybS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICYuYnRuLXNlY29uZGFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96987:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/validators/usuario.validators.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usuarioValidators: () => (/* binding */ usuarioValidators)
/* harmony export */ });
class usuarioValidators {
  // ✅ Validador suave: solo requiere mínimo 8 caracteres
  static passwordStrength(control) {
    const value = control.value;
    if (!value) return null;
    // Solo verificar longitud mínima
    const isValid = value.length >= 8;
    return isValid ? null : {
      passwordWeak: true
    };
  }
  static passwordMatch(passwordControlName) {
    return control => {
      const password = control.parent?.get(passwordControlName)?.value;
      const confirm = control.value;
      if (!password || !confirm) return null;
      return password === confirm ? null : {
        passwordMismatch: true
      };
    };
  }
  // ✅ Validador estricto (opcional, para mostrar fortaleza)
  static passwordStrengthStrict(control) {
    const value = control.value;
    if (!value) return null;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const hasMinLength = value.length >= 8;
    const isValid = hasMinLength && hasUpper && hasLower && hasNumber && hasSpecial;
    return isValid ? null : {
      passwordStrength: true
    };
  }
}

/***/ }),

/***/ 98116:
/*!************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/usuarios.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuariosComponent: () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var _components_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/roles-modal/roles-modal.component */ 99377);
/* harmony import */ var _components_usuario_filters_usuario_filters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/usuario-filters/usuario-filters.component */ 757);
/* harmony import */ var _components_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/usuarios-list/usuarios-list.component */ 36361);
/* harmony import */ var _components_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/usuario-form/usuario-form.component */ 81669);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./validators/usuario.validators */ 96987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_usuario_state_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../../../../services/usuario-state.service */ 41558);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../../../../services/usuario.service */ 48570);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../services/catalogo.service */ 65466);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../core/services/loading.service */ 98660);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../core/services/notification/notification.service */ 97407);



























const _c0 = () => [];
function UsuariosComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UsuariosComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40)(4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function UsuariosComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsuariosComponent_div_4_div_11_div_1_Template, 8, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function UsuariosComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function UsuariosComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function UsuariosComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function UsuariosComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UsuariosComponent_div_4_button_8_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UsuariosComponent_div_4_div_11_Template, 2, 1, "div", 33)(12, UsuariosComponent_div_4_div_12_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function UsuariosComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 52)(7, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function UsuariosComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UsuariosComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 59)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, UsuariosComponent_div_5_div_4_div_9_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function UsuariosComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UsuariosComponent_div_5_div_2_Template, 17, 0, "div", 46)(3, UsuariosComponent_div_5_div_3_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UsuariosComponent_div_5_div_4_Template, 10, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("minimized-mode", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("minimized", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isMinimized);
  }
}
function UsuariosComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 68)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_55_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 70)(8, "app-usuario-form", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("save", function UsuariosComponent_div_55_Template_app_usuario_form_save_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.guardarUsuario($event));
    })("cancel", function UsuariosComponent_div_55_Template_app_usuario_form_cancel_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.modalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx_r1.isEditing ? "edit" : "create")("usuario", ctx_r1.currentUsuario ?? undefined);
  }
}
function UsuariosComponent_div_56_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u26A0\uFE0F Como administrador, necesita la contrase\u00F1a actual del usuario para cambiarla ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UsuariosComponent_div_56_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.getPasswordStrengthClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getPasswordStrengthText());
  }
}
function UsuariosComponent_div_56_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.passwordError);
  }
}
function UsuariosComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 72)(2, "div", 68)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83D\uDD12 Cambiar Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 70)(8, "div", 73)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contrase\u00F1a Actual *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 74)(12, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function UsuariosComponent_div_56_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.currentPassword, $event) || (ctx_r1.passwordData.currentPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.showCurrentPassword = !ctx_r1.showCurrentPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, UsuariosComponent_div_56_small_15_Template, 2, 0, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 73)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Nueva Contrase\u00F1a *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 74)(20, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function UsuariosComponent_div_56_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.newPassword, $event) || (ctx_r1.passwordData.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function UsuariosComponent_div_56_Template_input_input_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.validarNuevaContrasena());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.showNewPassword = !ctx_r1.showNewPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, UsuariosComponent_div_56_div_23_Template, 4, 3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 73)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Confirmar Contrase\u00F1a *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 74)(28, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function UsuariosComponent_div_56_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.confirmPassword, $event) || (ctx_r1.passwordData.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function UsuariosComponent_div_56_Template_input_input_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.validarConfirmacionContrasena());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.showConfirmPassword = !ctx_r1.showConfirmPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, UsuariosComponent_div_56_div_31_Template, 2, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 82)(33, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_56_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cambiarPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cambiar Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.showCurrentPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.currentPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.showCurrentPassword ? "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F" : "\uD83D\uDC41\uFE0F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.esAutenticacionPropia);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.showNewPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.showNewPassword ? "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F" : "\uD83D\uDC41\uFE0F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordData.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.showConfirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.showConfirmPassword ? "\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F" : "\uD83D\uDC41\uFE0F", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.passwordError);
  }
}
function UsuariosComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 88)(2, "div", 89)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u26A0\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_57_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 90)(8, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u00BFEst\u00E1 seguro de eliminar este usuario del sistema?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Esta acci\u00F3n marcar\u00E1 el usuario como INACTIVO, pero mantendr\u00E1 el historial.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nota:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " No se puede eliminar el \u00FAltimo usuario administrador activo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 93)(19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_57_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.cerrarModales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_div_57_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r1.eliminarUsuario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Eliminar Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
class UsuariosComponent {
  usuarioState;
  usuarioService;
  catalogoService;
  themeService;
  moduleLoader;
  loadingService;
  notificationService;
  platformId;
  moduleName = 'Administración de Usuarios';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  // Layout variables
  isSidebarCollapsed = false;
  showHelpSupport = false;
  isMinimized = false;
  showMinimizeNotification = false;
  minimizing = false;
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  searchQuery = '';
  searchResults = [];
  currentTheme = 'light';
  // Usuario variables
  usuarios$;
  loading$;
  totalItems$;
  currentPage$;
  usuariosActivos$;
  showUsuarioModal = false;
  showPasswordModal = false;
  showDeleteModal = false;
  showRolesModal = false;
  showReportesModal = false;
  showValidacionModal = false;
  modalTitle = 'Nuevo Usuario';
  isEditing = false;
  currentUsuario = null;
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    contrasena: ''
  };
  // Password visibility
  showPassword = false;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  passwordError = '';
  passwordReqs = {
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
    valid: false
  };
  // Notifications
  notifications = [];
  user = {
    name: 'Admin SIGPAZ',
    email: 'admin@sigpaz.com',
    avatar: 'A',
    role: 'Administrador'
  };
  isBrowser;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  constructor(usuarioState, usuarioService, catalogoService, themeService, moduleLoader, loadingService, notificationService, platformId) {
    this.usuarioState = usuarioState;
    this.usuarioService = usuarioService;
    this.catalogoService = catalogoService;
    this.themeService = themeService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.notificationService = notificationService;
    this.platformId = platformId;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId);
  }
  ngOnInit() {
    this.usuarios$ = this.usuarioState.selectUsuarios();
    this.loading$ = this.usuarioState.selectLoading();
    this.totalItems$ = this.usuarioState.selectTotalItems();
    this.currentPage$ = this.usuarioState.selectCurrentPage();
    this.usuariosActivos$ = this.usuarios$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(usuarios => usuarios.filter(u => u.activo).length));
    this.setupFilterSubscription();
    this.loadUsuarios();
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
    const hasContent = document.querySelector('.users-container, .main-content, app-usuarios');
    const hasData = document.querySelector('.stats-container, app-usuarios-list, .data-table');
    console.log(`🔍 [Usuarios] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.moduleLoader.markModuleRendered(this.moduleName);
  }
  setupFilterSubscription() {
    this.filterSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
      this.usuarioState.setCurrentPage(1);
      this.loadUsuarios();
    });
  }
  loadUsuarios() {
    this.usuarioState.setLoading(true);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.usuarioState.selectCurrentPage(), this.usuarioState.selectFilters()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([page, filters]) => this.usuarioService.listar({
      ...filters,
      page,
      per_page: 10
    }))).subscribe({
      next: response => {
        this.usuarioState.setUsuarios(response.data, response.meta.total);
        this.notificationService?.showSuccess('Usuarios cargados correctamente', 2000);
      },
      error: error => {
        this.usuarioState.setError(error.message || 'Error al cargar usuarios');
        this.notificationService?.showError('Error al cargar usuarios');
      }
    });
  }
  // ========== LAYOUT METHODS ==========
  openSearchModal() {
    this.isSearchOpen = true;
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.searchQuery = '';
    this.searchResults = [];
  }
  performSearch() {
    if (this.searchQuery.trim()) this.searchResults = [];
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  markAllAsRead() {
    this.notifications.forEach(n => true);
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
    if (!this.showHelpSupport) {
      if (this.isBrowser) {
        document.body.classList.remove('minimized-mode');
      }
    }
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
    if (event.target.classList.contains('modal-overlay-sigpaz') && this.showHelpSupport && !this.isMinimized) this.minimizeToBubble();
  }
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.notification-wrapper') && !target.closest('.notifications-dropdown')) this.isNotificationsOpen = false;
    if (!target.closest('.user-menu-wrapper') && !target.closest('.user-dropdown')) this.isUserMenuOpen = false;
    if (!target.closest('.search-modal-content') && !target.closest('.search-button')) this.isSearchOpen = false;
  }
  // ========== USUARIO METHODS ==========
  onPageChange(page) {
    this.usuarioState.setCurrentPage(page);
    this.loadUsuarios();
  }
  abrirModalCrear() {
    this.isEditing = false;
    this.currentUsuario = null;
    this.modalTitle = 'Crear Nuevo Usuario';
    this.showUsuarioModal = true;
  }
  abrirModalEditar(usuario) {
    this.isEditing = true;
    this.currentUsuario = usuario;
    this.modalTitle = 'Editar Usuario';
    this.showUsuarioModal = true;
  }
  abrirModalCambiarPassword(usuario) {
    this.currentUsuario = usuario;
    this.passwordData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      contrasena: ''
    };
    this.passwordError = '';
    this.showPasswordModal = true;
  }
  abrirModalEliminar(usuario) {
    this.currentUsuario = usuario;
    this.showDeleteModal = true;
  }
  abrirModalRoles() {
    this.showRolesModal = true;
  }
  abrirModalReportes() {
    this.showReportesModal = true;
  }
  cerrarModales() {
    this.showUsuarioModal = false;
    this.showPasswordModal = false;
    this.showDeleteModal = false;
    this.showRolesModal = false;
    this.showReportesModal = false;
    this.showValidacionModal = false;
    this.currentUsuario = null;
  }
  guardarUsuario(usuarioData) {
    if (this.isEditing && this.currentUsuario) {
      this.usuarioService.actualizar(this.currentUsuario.usuario_id, usuarioData).subscribe({
        next: () => {
          this.usuarioState.updateUsuario(this.currentUsuario.usuario_id, usuarioData);
          this.showUsuarioModal = false;
          this.currentUsuario = null;
          this.notificationService?.showSuccess('Usuario actualizado exitosamente');
        },
        error: error => {
          console.error('Error updating usuario:', error);
          this.notificationService?.showError('Error al actualizar usuario');
        }
      });
    } else {
      this.usuarioService.crear(usuarioData).subscribe({
        next: response => {
          this.usuarioState.addUsuario(response.data);
          this.showUsuarioModal = false;
          this.notificationService?.showSuccess('Usuario creado exitosamente');
        },
        error: error => {
          console.error('Error creating usuario:', error);
          this.notificationService?.showError('Error al crear usuario');
        }
      });
    }
  }
  cambiarPassword() {
    // ✅ Validar que la contraseña actual esté presente
    if (!this.passwordData.currentPassword || this.passwordData.currentPassword.trim() === '') {
      this.passwordError = 'La contraseña actual es requerida';
      this.notificationService?.showError(this.passwordError);
      return;
    }
    // Validar fortaleza de la nueva contraseña
    const passwordStrength = _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_21__.usuarioValidators.passwordStrengthStrict({
      value: this.passwordData.newPassword
    });
    const passwordMatch = this.passwordData.newPassword === this.passwordData.confirmPassword;
    if (passwordStrength !== null) {
      this.passwordError = 'La contraseña debe tener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
      this.notificationService?.showError(this.passwordError);
      return;
    }
    if (!passwordMatch) {
      this.passwordError = 'Las contraseñas no coinciden';
      this.notificationService?.showError(this.passwordError);
      return;
    }
    if (this.currentUsuario) {
      // ✅ Siempre enviar current_password
      const payload = {
        current_password: this.passwordData.currentPassword,
        // ← Siempre presente
        password: this.passwordData.newPassword,
        password_confirmation: this.passwordData.confirmPassword
      };
      console.log('📤 Cambiando contraseña para usuario:', this.currentUsuario.usuario_id);
      this.usuarioService.cambiarPassword(this.currentUsuario.usuario_id, payload).subscribe({
        next: () => {
          this.showPasswordModal = false;
          this.currentUsuario = null;
          // Limpiar el formulario
          this.passwordData = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            contrasena: ''
          };
          this.passwordError = '';
          this.notificationService?.showSuccess('Contraseña cambiada exitosamente');
        },
        error: error => {
          console.error('❌ Error al cambiar contraseña:', error);
          const mensaje = error.error?.message || error.message || 'Error al cambiar contraseña';
          this.notificationService?.showError(mensaje);
        }
      });
    }
  }
  eliminarUsuario() {
    if (this.currentUsuario) {
      this.usuarioService.eliminar(this.currentUsuario.usuario_id).subscribe({
        next: () => {
          this.usuarioState.removeUsuario(this.currentUsuario.usuario_id);
          this.showDeleteModal = false;
          this.currentUsuario = null;
          this.notificationService?.showSuccess('Usuario eliminado exitosamente');
        },
        error: error => {
          console.error('Error deleting usuario:', error);
          this.notificationService?.showError('Error al eliminar usuario');
        }
      });
    }
  }
  onFiltersChange(filters) {
    // ✅ Limpiar filtros con null
    const cleanFilters = {};
    if (filters.search && filters.search.trim() !== '') {
      cleanFilters.search = filters.search;
    }
    if (filters.rol_id !== null && filters.rol_id !== undefined && filters.rol_id !== '') {
      cleanFilters.rol_id = filters.rol_id;
    }
    if (filters.activo !== null && filters.activo !== undefined && filters.activo !== '') {
      cleanFilters.activo = filters.activo;
    }
    this.usuarioState.setFilters(cleanFilters);
    this.filterSubject.next(cleanFilters);
  }
  toggleUsuarioActivo(usuario) {
    const nuevoEstado = !usuario.activo;
    const accion = nuevoEstado ? 'activar' : 'desactivar';
    if (confirm(`¿Está seguro de ${accion} este usuario?`)) {
      // ✅ Enviar booleano explícito (true/false, no 1/0)
      const data = {
        activo: nuevoEstado === true
      };
      console.log('📤 Desactivando usuario:', {
        usuario_id: usuario.usuario_id,
        activo: data.activo
      });
      this.usuarioService.actualizar(usuario.usuario_id, data).subscribe({
        next: () => {
          this.usuarioState.updateUsuario(usuario.usuario_id, {
            activo: nuevoEstado
          });
          this.notificationService?.showSuccess(`Usuario ${accion}do exitosamente`);
        },
        error: error => {
          console.error(`Error al ${accion} usuario:`, error);
          this.notificationService?.showError(`Error al ${accion} usuario`);
        }
      });
    }
  }
  // ========== MÉTODOS AUXILIARES ==========
  get usuariosConectados() {
    // Obtener usuarios actuales del estado
    let usuariosActuales = [];
    this.usuarioState.state$.subscribe(state => {
      usuariosActuales = state.usuarios;
    }).unsubscribe();
    const cincoMinutosAtras = new Date(Date.now() - 5 * 60 * 1000);
    return usuariosActuales.filter(u => {
      if (!u.ultimo_acceso) return false;
      const ultimoAcceso = new Date(u.ultimo_acceso);
      return ultimoAcceso > cincoMinutosAtras;
    }).length;
  }
  get rolesActivos() {
    return 6;
  }
  get esAutenticacionPropia() {
    return this.currentUsuario?.nombre_usuario === this.user.name;
  }
  validarNuevaContrasena() {
    const pwd = this.passwordData.newPassword;
    if (!pwd) {
      this.passwordReqs = {
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecial: false,
        valid: false
      };
      return;
    }
    const isValid = _validators_usuario_validators__WEBPACK_IMPORTED_MODULE_21__.usuarioValidators.passwordStrength({
      value: pwd
    }) === null;
    this.passwordReqs = {
      minLength: pwd.length >= 8,
      hasUppercase: /[A-Z]/.test(pwd),
      hasLowercase: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
      valid: isValid
    };
  }
  validarConfirmacionContrasena() {
    this.passwordError = this.passwordData.newPassword !== this.passwordData.confirmPassword ? 'Las contraseñas no coinciden' : '';
  }
  getPasswordStrengthClass() {
    const met = Object.values(this.passwordReqs).filter(Boolean).length;
    if (met === 5) return 'strength-very-strong';
    if (met >= 4) return 'strength-strong';
    if (met >= 3) return 'strength-medium';
    return 'strength-weak';
  }
  getPasswordStrengthText() {
    const clase = this.getPasswordStrengthClass();
    if (clase === 'strength-very-strong') return 'Muy fuerte';
    if (clase === 'strength-strong') return 'Fuerte';
    if (clase === 'strength-medium') return 'Medio';
    return 'Débil';
  }
  generarReportes() {
    this.showReportesModal = true;
  }
  generarReporteActividadGeneral() {
    console.log('Generando reporte');
  }
  generarReportePorRol() {
    console.log('Generando reporte por rol');
  }
  generarReporteInactivos() {
    console.log('Generando reporte inactivos');
  }
  generarReporteSeguridad() {
    console.log('Generando reporte seguridad');
  }
  generarReporteActividad() {
    this.generarReporteActividadGeneral();
  }
  exportarReportePDF() {
    console.log('Exportando PDF');
  }
  exportarReporteExcel() {
    console.log('Exportando Excel');
  }
  programarReporte() {
    alert('Reporte programado para envío periódico');
  }
  validarCredenciales() {
    this.showValidacionModal = true;
  }
  static ɵfac = function UsuariosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_usuario_state_service__WEBPACK_IMPORTED_MODULE_23__.UsuarioStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_24__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_25__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_26__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_27__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_28__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_29__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UsuariosComponent,
    selectors: [["app-usuarios"]],
    hostBindings: function UsuariosComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    decls: 60,
    vars: 35,
    consts: [[1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "users-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary", 3, "click"], [3, "filtersChange"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [3, "edit", "delete", "passwordChange", "toggleActive", "pageChange", "usuarios", "loading", "totalItems", "currentPage"], ["class", "modal-overlay", 4, "ngIf"], [3, "close", "visible"], [3, "isSidebarCollapsed"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar usuarios...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "modal-overlay"], [1, "modal-container", "modal-large"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "save", "cancel", "mode", "usuario"], [1, "modal-container"], [1, "form-group"], [1, "password-input-container"], ["placeholder", "Ingrese la contrase\u00F1a actual del usuario", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle", 3, "click"], ["class", "form-hint", 4, "ngIf"], ["placeholder", "M\u00EDnimo 8 caracteres, may\u00FAsculas, min\u00FAsculas, n\u00FAmeros y caracteres especiales", 1, "form-input", 3, "ngModelChange", "input", "type", "ngModel"], ["class", "password-strength", 4, "ngIf"], ["placeholder", "Confirme la nueva contrase\u00F1a", 1, "form-input", 3, "ngModelChange", "input", "type", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "modal-footer"], [1, "form-hint"], [1, "password-strength"], [1, "strength-bar"], [1, "strength-text"], [1, "form-error"], [1, "confirm-modal"], [1, "confirm-header"], [1, "confirm-body"], [1, "confirm-icon"], [1, "confirm-warning"], [1, "confirm-footer"], [1, "btn", "btn-danger", 3, "click"]],
    template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleSidebar", function UsuariosComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.isSidebarCollapsed = !ctx.isSidebarCollapsed;
        })("toggleHelpSupport", function UsuariosComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.showHelpSupport = !ctx.showHelpSupport;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 2)(3, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleNotifications", function UsuariosComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.isNotificationsOpen = !ctx.isNotificationsOpen;
        })("toggleUserMenu", function UsuariosComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.isUserMenuOpen = !ctx.isUserMenuOpen;
        })("markAllAsRead", function UsuariosComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.markAllAsRead();
        })("openSearchModal", function UsuariosComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.openSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UsuariosComponent_div_4_Template, 13, 6, "div", 4)(5, UsuariosComponent_div_5_Template, 5, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\uD83D\uDC64 Gesti\u00F3n de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Administre los usuarios del sistema SIGPAZ y sus permisos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_14_listener() {
          return ctx.abrirModalCrear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Nuevo Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_18_listener() {
          return ctx.generarReportes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_22_listener() {
          return ctx.abrirModalRoles();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\uD83D\uDC51");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Gestionar Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "app-usuario-filters", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("filtersChange", function UsuariosComponent_Template_app_usuario_filters_filtersChange_26_listener($event) {
          return ctx.onFiltersChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Total Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17)(35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17)(41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Conectados Ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17)(46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Roles Activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "app-usuarios-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("edit", function UsuariosComponent_Template_app_usuarios_list_edit_50_listener($event) {
          return ctx.abrirModalEditar($event);
        })("delete", function UsuariosComponent_Template_app_usuarios_list_delete_50_listener($event) {
          return ctx.abrirModalEliminar($event);
        })("passwordChange", function UsuariosComponent_Template_app_usuarios_list_passwordChange_50_listener($event) {
          return ctx.abrirModalCambiarPassword($event);
        })("toggleActive", function UsuariosComponent_Template_app_usuarios_list_toggleActive_50_listener($event) {
          return ctx.toggleUsuarioActivo($event);
        })("pageChange", function UsuariosComponent_Template_app_usuarios_list_pageChange_50_listener($event) {
          return ctx.onPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, UsuariosComponent_div_55_Template, 9, 5, "div", 21)(56, UsuariosComponent_div_56_Template, 37, 14, "div", 21)(57, UsuariosComponent_div_57_Template, 23, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "app-roles-modal", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function UsuariosComponent_Template_app_roles_modal_close_58_listener() {
          return ctx.cerrarModales();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "app-footer", 23);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, ctx.totalItems$) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 24, ctx.usuariosActivos$) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usuariosConectados);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.rolesActivos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("usuarios", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 26, ctx.usuarios$) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 28, ctx.loading$) || false)("totalItems", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 30, ctx.totalItems$) || 0)("currentPage", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 32, ctx.currentPage$) || 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showUsuarioModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPasswordModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.showRolesModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_17__.MenuComponent, _components_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_13__.RolesModalComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_18__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_20__.HelpSupportComponent, _components_usuario_filters_usuario_filters_component__WEBPACK_IMPORTED_MODULE_14__.UsuarioFiltersComponent, _components_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_15__.UsuariosListComponent, _components_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_16__.UsuarioFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["@charset \"UTF-8\";\n.dashboard-container {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed .main-content {\n  margin-left: 70px;\n}\n\n.main-content {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: var(--text-muted) transparent;\n  width: calc(100% - 280px);\n}\n.main-content::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content::-webkit-scrollbar-thumb {\n  background: var(--text-muted);\n  border-radius: 3px;\n}\n.main-content::-webkit-scrollbar-thumb:hover {\n  background: var(--text-secondary);\n}\n\n.search-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-top: 100px;\n  animation: fadeIn 0.3s ease;\n}\n.search-modal .search-modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.search-modal .search-modal-content {\n  position: relative;\n  z-index: 1;\n  background: var(--card-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: slideDown 0.3s ease;\n}\n.search-modal .search-modal-header {\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--card-bg);\n}\n.search-modal .search-modal-header .search-input-container {\n  flex: 1;\n  position: relative;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input {\n  width: 100%;\n  padding: 16px 52px 16px 48px;\n  border: 2px solid var(--input-border);\n  border-radius: 12px;\n  font-size: 16px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-modal-input:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.search-modal .search-modal-header .search-input-container .search-clear {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 20px;\n  transition: all 0.3s;\n}\n.search-modal .search-modal-header .search-input-container .search-clear:hover {\n  color: var(--danger);\n  transform: scale(1.2);\n}\n.search-modal .search-modal-header .search-close {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--bg-tertiary);\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-size: 20px;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-modal .search-modal-header .search-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.search-modal .search-results {\n  max-height: 60vh;\n  overflow-y: auto;\n  padding: 16px;\n}\n.search-modal .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.search-modal .search-results .search-result-item:hover {\n  background: var(--bg-hover);\n  transform: translateX(5px);\n}\n.search-modal .search-results .search-result-item .result-icon {\n  font-size: 24px;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-tertiary);\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.search-modal .search-results .search-result-item .result-details {\n  flex: 1;\n}\n.search-modal .search-results .search-result-item .result-details .result-title {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.search-modal .search-results .search-result-item .result-details .result-description {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.search-modal .search-empty {\n  padding: 40px 24px;\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 16px;\n}\n\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--modal-overlay);\n  animation: fadeIn 0.3s ease;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n}\n.modal-content-sigpaz .modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n}\n.modal-content-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-content-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-content-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-content-sigpaz .modal-btn {\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.modal-content-sigpaz .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.modal-content-sigpaz .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.modal-content-sigpaz .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-content-sigpaz .modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n}\n.modal-content-sigpaz .modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px color-mix(in srgb, var(--primary) 50%, transparent);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.floating-bubble .bubble-close:hover {\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s;\n}\n\n.users-container {\n  min-height: 100vh;\n  width: 100%;\n  padding: 24px;\n  animation: fadeInContainer 0.5s ease-out;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--card-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n}\n.header .header-content .page-title {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.header .header-content .page-subtitle {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.header .header-actions {\n  display: flex;\n  gap: 12px;\n}\n\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container .stat-card {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s;\n}\n.stats-container .stat-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--card-hover-shadow);\n}\n.stats-container .stat-card .stat-value {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container .stat-card .stat-label {\n  font-size: 14px;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n  animation: fadeIn 0.3s ease;\n}\n\n.modal-container {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  margin-left: 100px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: slideDown 0.3s ease;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.modal-header h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-header button {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.3s;\n}\n.modal-header button:hover {\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  animation: scaleIn 0.3s;\n}\n\n.modal-content {\n  padding: 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color);\n}\n\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-group label .required {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group .form-input,\n.form-group .form-select,\n.form-group .form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group .form-input:focus,\n.form-group .form-select:focus,\n.form-group .form-textarea:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n\n.password-input-container {\n  position: relative;\n}\n.password-input-container .form-input {\n  padding-right: 45px;\n}\n.password-input-container .password-toggle {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  color: var(--text-secondary);\n  transition: all 0.3s;\n}\n.password-input-container .password-toggle:hover {\n  color: var(--primary);\n  transform: translateY(-50%) scale(1.1);\n}\n\n.password-strength {\n  margin-top: 8px;\n}\n.password-strength .strength-bar {\n  height: 4px;\n  border-radius: 2px;\n  background: var(--border-color);\n  overflow: hidden;\n}\n.password-strength .strength-bar::before {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 0;\n  transition: width 0.5s;\n}\n.password-strength .strength-bar.strength-weak::before {\n  width: 25%;\n  background: var(--danger);\n}\n.password-strength .strength-bar.strength-medium::before {\n  width: 50%;\n  background: var(--warning);\n}\n.password-strength .strength-bar.strength-strong::before {\n  width: 75%;\n  background: var(--info);\n}\n.password-strength .strength-bar.strength-very-strong::before {\n  width: 100%;\n  background: var(--success);\n}\n.password-strength .strength-text {\n  font-size: 12px;\n  margin-top: 4px;\n  text-align: right;\n  color: var(--text-secondary);\n}\n\n.form-error {\n  color: var(--danger);\n  font-size: 12px;\n  margin-top: 4px;\n  animation: errorShake 0.5s;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn .btn-icon {\n  font-size: 16px;\n  transition: transform 0.3s;\n}\n.btn:hover .btn-icon {\n  transform: scale(1.1);\n}\n\n.btn-primary {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary) 30%, transparent);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px color-mix(in srgb, var(--primary) 40%, transparent);\n}\n\n.btn-secondary {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary:hover {\n  background: var(--bg-secondary);\n  transform: translateY(-2px);\n}\n\n.btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px color-mix(in srgb, var(--danger) 30%, transparent);\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes fadeInContainer {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes iconBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes bubblePulse {\n  0%, 100% {\n    box-shadow: 0 15px 40px color-mix(in srgb, var(--primary) 50%, transparent);\n  }\n  50% {\n    box-shadow: 0 15px 40px color-mix(in srgb, var(--primary) 80%, transparent), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes errorShake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    gap: 16px;\n    text-align: center;\n  }\n  .header-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .header-actions .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .modal-container.modal-large {\n    width: 95%;\n  }\n}\n@media (max-width: 480px) {\n  .users-container {\n    padding: 16px;\n  }\n  .stats-container {\n    grid-template-columns: 1fr;\n  }\n  .modal-container {\n    width: 95%;\n  }\n}\n.confirm-modal {\n  background: var(--modal-bg);\n  border-radius: 20px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 450px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n  animation: modalScaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes modalScaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.confirm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.confirm-header h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-header h3::before {\n  content: \"\u26A0\uFE0F\";\n  font-size: 20px;\n}\n.confirm-header .modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.confirm-header .modal-close:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n\n.confirm-body {\n  padding: 32px 24px;\n  text-align: center;\n  background: var(--modal-bg);\n}\n.confirm-body .confirm-icon {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.8;\n  animation: iconShake 0.5s ease-in-out;\n}\n@keyframes iconShake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.confirm-body p {\n  color: var(--text-primary);\n  margin-bottom: 12px;\n  font-size: 15px;\n  line-height: 1.5;\n}\n.confirm-body p:first-of-type {\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.confirm-body p.confirm-warning {\n  color: var(--danger);\n  font-weight: 500;\n  font-size: 13px;\n  background: var(--danger-light);\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 16px;\n  margin-bottom: 0;\n  text-align: left;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.confirm-body p.confirm-warning::before {\n  content: \"\u26A0\uFE0F\";\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.confirm-body p.confirm-warning strong {\n  font-weight: 700;\n  display: inline-block;\n}\n.confirm-body .confirm-name {\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 6px 12px;\n  border-radius: 20px;\n  display: inline-block;\n  margin: 8px 0;\n  font-size: 14px;\n}\n\n.confirm-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.confirm-footer .btn {\n  padding: 10px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  font-family: inherit;\n}\n.confirm-footer .btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.confirm-footer .btn-secondary {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.confirm-footer .btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.confirm-footer .btn-danger {\n  background: var(--gradient-danger);\n  color: white;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.confirm-footer .btn-danger::before {\n  content: \"\uD83D\uDDD1\uFE0F\";\n  font-size: 14px;\n}\n.confirm-footer .btn-danger:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.confirm-footer .btn-danger:active:not(:disabled) {\n  transform: translateY(0);\n}\n\n@media (max-width: 768px) {\n  .confirm-modal {\n    max-width: 95%;\n    border-radius: 16px;\n  }\n  .confirm-header {\n    padding: 16px 20px;\n  }\n  .confirm-header h3 {\n    font-size: 16px;\n  }\n  .confirm-body {\n    padding: 24px 20px;\n  }\n  .confirm-body .confirm-icon {\n    font-size: 48px;\n    margin-bottom: 16px;\n  }\n  .confirm-body p {\n    font-size: 14px;\n  }\n  .confirm-footer {\n    padding: 16px 20px;\n    flex-direction: column;\n  }\n  .confirm-footer .btn {\n    width: 100%;\n    justify-content: center;\n    padding: 10px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .confirm-body {\n    padding: 20px 16px;\n  }\n  .confirm-body .confirm-icon {\n    font-size: 40px;\n  }\n  .confirm-body p {\n    font-size: 13px;\n  }\n  .confirm-body p.confirm-warning {\n    font-size: 12px;\n    padding: 10px 12px;\n  }\n  .confirm-footer .btn {\n    font-size: 13px;\n    padding: 8px 14px;\n  }\n}\n.modal-overlay-sigpaz {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz:not(.minimized-mode)::before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode .floating-bubble {\n  pointer-events: auto;\n}\n\n.modal-content-sigpaz {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized {\n  display: none;\n}\n.modal-content-sigpaz:not(.minimized) {\n  animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.modal-header-sigpaz {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz .modal-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz .modal-title .icon {\n  font-size: 1.4rem;\n  animation: iconBounce 2s infinite;\n}\n.modal-header-sigpaz .modal-controls {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-icon {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-icon {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz .modal-controls .modal-btn .btn-tooltip {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz .modal-controls .modal-btn:hover .btn-tooltip {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.minimize-btn.animating {\n  animation: minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz .modal-controls .modal-btn.close-modal-btn:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: shake 0.5s ease;\n}\n\n.modal-body-wrapper {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n\n.modal-body {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body app-help-support {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n\n.floating-bubble {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing {\n  animation: bubblePulse 2s infinite;\n}\n.floating-bubble .bubble-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble .bubble-icon {\n  font-size: 1.5rem;\n  animation: spinSlow 3s linear infinite;\n}\n.floating-bubble .bubble-text {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble .bubble-close {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble .bubble-close:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble .bubble-close .close-icon {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble .bubble-notification {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: notificationSlide 0.5s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes iconBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes bubblePulse {\n  0%, 100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz {\n    padding: 12px 20px;\n  }\n  .modal-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL29yaWdpbmFsJTIwU0lHUEFaL2p1c3RpY2lhLXBhei1mcm9udGVuZC9zcmMvYXBwL21vZHVsZXMvc2VndXJpZGFkL3BhZ2VzL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9tb2R1bGVzL3NlZ3VyaWRhZC9wYWdlcy91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNjaEI7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpREFBQTtBRFpGO0FDZUk7RUFDRSxpQkFab0I7QUREMUI7O0FDa0JBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FEZkY7QUNpQkU7RUFDRSxVQUFBO0FEZko7QUNrQkU7RUFDRSx1QkFBQTtBRGhCSjtBQ21CRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QURqQko7QUNtQkk7RUFDRSxpQ0FBQTtBRGpCTjs7QUN5QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUR0QkY7QUN3QkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUR0Qko7QUN5QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQWhGWTtFQWlGWiw0QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBRHZCSjtBQzBC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O0FDa09BO0VBQ0U7SUFDRSx1REFBQTtJQUNBLFVBQUE7RURoT0Y7RUNrT0E7SUFDRSxxREFBQTtFRGhPRjtFQ2tPQTtJQUNFLDJDQUFBO0lBQ0EsVUFBQTtFRGhPRjtBQUNGO0FDbU9BO0VBQ0U7SUFDRSw4Q0FBQTtFRGpPRjtFQ21PQTtJQUNFLGlGQUFBO0VEak9GO0FBQ0Y7QUNvT0E7RUFDRTtJQUFLLHVCQUFBO0VEak9MO0VDa09BO0lBQU8seUJBQUE7RUQvTlA7QUFDRjtBQ2lPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VEL05GO0VDaU9BO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VEL05GO0FBQ0Y7QUNxT0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VEbk9GO0VDc09BO0lBQ0UsZ0JBQUE7RURwT0Y7QUFDRjtBQ3VPQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VEck9GO0VDd09BO0lBQ0Usa0JBQUE7RUR0T0Y7RUN5T0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFRHZPRjtFQzBPQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFRHhPRjtFQzJPQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUR6T0Y7QUFDRjtBQzRPQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFRDFPRjtFQzZPQTtJQUNFLGdCQUFBO0lBQ0EsT0FBQTtFRDNPRjtFQzhPQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUQ1T0Y7RUMrT0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VEN09GO0VDZ1BBO0lBQ0UsZUFBQTtFRDlPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbi5kYXNoYm9hcmQtY29udGFpbmVyLnNpZGViYXItY29sbGFwc2VkIC5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiA2NnB4O1xuICBtYXJnaW4tbGVmdDogMjY0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKSB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcbn1cbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cbi5tYWluLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWFpbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ubWFpbi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlYXJjaC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLW1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLW92ZXJsYXkpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLW1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLW1vZGFsLWhlYWRlciAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1tb2RhbC1oZWFkZXIgLnNlYXJjaC1pbnB1dC1jb250YWluZXIgLnNlYXJjaC1tb2RhbC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1tb2RhbC1oZWFkZXIgLnNlYXJjaC1pbnB1dC1jb250YWluZXIgLnNlYXJjaC1tb2RhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDUycHggMTZweCA0OHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLW1vZGFsLWhlYWRlciAuc2VhcmNoLWlucHV0LWNvbnRhaW5lciAuc2VhcmNoLW1vZGFsLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1tb2RhbC1oZWFkZXIgLnNlYXJjaC1pbnB1dC1jb250YWluZXIgLnNlYXJjaC1jbGVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtbW9kYWwtaGVhZGVyIC5zZWFyY2gtaW5wdXQtY29udGFpbmVyIC5zZWFyY2gtY2xlYXI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLW1vZGFsLWhlYWRlciAuc2VhcmNoLWNsb3NlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1tb2RhbC1oZWFkZXIgLnNlYXJjaC1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHRzIHtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHRzIC5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdHMgLnNlYXJjaC1yZXN1bHQtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG59XG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0cyAuc2VhcmNoLXJlc3VsdC1pdGVtIC5yZXN1bHQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHRzIC5zZWFyY2gtcmVzdWx0LWl0ZW0gLnJlc3VsdC1kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHRzIC5zZWFyY2gtcmVzdWx0LWl0ZW0gLnJlc3VsdC1kZXRhaWxzIC5yZXN1bHQtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdHMgLnNlYXJjaC1yZXN1bHQtaXRlbSAucmVzdWx0LWRldGFpbHMgLnJlc3VsdC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1lbXB0eSB7XG4gIHBhZGRpbmc6IDQwcHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5tb2RhbC1vdmVybGF5LXNpZ3Bhejpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1vdmVybGF5LXNpZ3Bhejpub3QoLm1pbmltaXplZC1tb2RlKTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLW92ZXJsYXkpO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IC0xO1xufVxuLm1vZGFsLW92ZXJsYXktc2lncGF6Lm1pbmltaXplZC1tb2RlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoubWluaW1pemVkLW1vZGU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoubWluaW1pemVkLW1vZGUgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG4ubW9kYWwtY29udGVudC1zaWdwYXogLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbn1cbi5tb2RhbC1jb250ZW50LXNpZ3BheiAubW9kYWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IC5tb2RhbC10aXRsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBhbmltYXRpb246IGljb25Cb3VuY2UgMnMgaW5maW5pdGU7XG59XG4ubW9kYWwtY29udGVudC1zaWdwYXogLm1vZGFsLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IC5tb2RhbC1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IC5tb2RhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4ubW9kYWwtY29udGVudC1zaWdwYXogLm1vZGFsLWJ0biAuYnRuLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTM1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IC5tb2RhbC1idG46aG92ZXIgLmJ0bi10b29sdGlwIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm90dG9tOiAtMzBweDtcbn1cbi5tb2RhbC1jb250ZW50LXNpZ3BheiAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tb2RhbC1jb250ZW50LXNpZ3BheiAubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeSkgNTAlLCB0cmFuc3BhcmVudCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5mbG9hdGluZy1idWJibGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wNSk7XG59XG4uZmxvYXRpbmctYnViYmxlLnB1bHNpbmcge1xuICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xufVxuLmZsb2F0aW5nLWJ1YmJsZSAuYnViYmxlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG4uZmxvYXRpbmctYnViYmxlIC5idWJibGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uZmxvYXRpbmctYnViYmxlIC5idWJibGUtY2xvc2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25TbGlkZSAwLjVzO1xufVxuXG4udXNlcnMtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNHB4O1xuICBhbmltYXRpb246IGZhZGVJbkNvbnRhaW5lciAwLjVzIGVhc2Utb3V0O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cbi5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMCA4cHggMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG4uaGVhZGVyIC5oZWFkZXItY29udGVudCAucGFnZS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlciAuaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uc3RhdHMtY29udGFpbmVyIC5zdGF0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcbn1cbi5zdGF0cy1jb250YWluZXIgLnN0YXQtY2FyZCAuc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnN0YXRzLWNvbnRhaW5lciAuc3RhdC1jYXJkIC5zdGF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuLm1vZGFsLWhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbn1cbi5tb2RhbC1oZWFkZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubW9kYWwtaGVhZGVyIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jb25maXJtLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDAuM3M7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleDogMTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwgLnJlcXVpcmVkIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1pbnB1dCxcbi5mb3JtLWdyb3VwIC5mb3JtLXNlbGVjdCxcbi5mb3JtLWdyb3VwIC5mb3JtLXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0taW5wdXQ6Zm9jdXMsXG4uZm9ybS1ncm91cCAuZm9ybS1zZWxlY3Q6Zm9jdXMsXG4uZm9ybS1ncm91cCAuZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG59XG5cbi5wYXNzd29yZC1pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc3dvcmQtaW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbn1cbi5wYXNzd29yZC1pbnB1dC1jb250YWluZXIgLnBhc3N3b3JkLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnBhc3N3b3JkLWlucHV0LWNvbnRhaW5lciAucGFzc3dvcmQtdG9nZ2xlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4xKTtcbn1cblxuLnBhc3N3b3JkLXN0cmVuZ3RoIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnBhc3N3b3JkLXN0cmVuZ3RoIC5zdHJlbmd0aC1iYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBhc3N3b3JkLXN0cmVuZ3RoIC5zdHJlbmd0aC1iYXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xufVxuLnBhc3N3b3JkLXN0cmVuZ3RoIC5zdHJlbmd0aC1iYXIuc3RyZW5ndGgtd2Vhazo6YmVmb3JlIHtcbiAgd2lkdGg6IDI1JTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbn1cbi5wYXNzd29yZC1zdHJlbmd0aCAuc3RyZW5ndGgtYmFyLnN0cmVuZ3RoLW1lZGl1bTo6YmVmb3JlIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XG59XG4ucGFzc3dvcmQtc3RyZW5ndGggLnN0cmVuZ3RoLWJhci5zdHJlbmd0aC1zdHJvbmc6OmJlZm9yZSB7XG4gIHdpZHRoOiA3NSU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xufVxuLnBhc3N3b3JkLXN0cmVuZ3RoIC5zdHJlbmd0aC1iYXIuc3RyZW5ndGgtdmVyeS1zdHJvbmc6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbn1cbi5wYXNzd29yZC1zdHJlbmd0aCAuc3RyZW5ndGgtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmZvcm0tZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGFuaW1hdGlvbjogZXJyb3JTaGFrZSAwLjVzO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJ0biAuYnRuLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuLmJ0bjpob3ZlciAuYnRuLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5KSA0MCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1kYW5nZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWRhbmdlcikgMzAlLCB0cmFuc3BhcmVudCk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkNvbnRhaW5lciB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeSkgNTAlLCB0cmFuc3BhcmVudCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeSkgODAlLCB0cmFuc3BhcmVudCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluU2xvdyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGVycm9yU2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXItYWN0aW9ucyAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc3RhdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIC5tb2RhbC1jb250YWluZXIubW9kYWwtbGFyZ2Uge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudXNlcnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbn1cbi5jb25maXJtLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcbiAgYW5pbWF0aW9uOiBtb2RhbFNjYWxlSW4gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuQGtleWZyYW1lcyBtb2RhbFNjYWxlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi5jb25maXJtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtaGVhZGVyLWJnKTtcbn1cbi5jb25maXJtLWhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4uY29uZmlybS1oZWFkZXIgaDM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6LCmsKgw6/CuMKPXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb25maXJtLWhlYWRlciAubW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY29uZmlybS1oZWFkZXIgLm1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY29uZmlybS1ib2R5IHtcbiAgcGFkZGluZzogMzJweCAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbn1cbi5jb25maXJtLWJvZHkgLmNvbmZpcm0taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3BhY2l0eTogMC44O1xuICBhbmltYXRpb246IGljb25TaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQGtleWZyYW1lcyBpY29uU2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gIH1cbn1cbi5jb25maXJtLWJvZHkgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29uZmlybS1ib2R5IHA6Zmlyc3Qtb2YtdHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY29uZmlybS1ib2R5IHAuY29uZmlybS13YXJuaW5nIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xufVxuLmNvbmZpcm0tYm9keSBwLmNvbmZpcm0td2FybmluZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCLDosKawqDDr8K4wo9cIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5jb25maXJtLWJvZHkgcC5jb25maXJtLXdhcm5pbmcgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbmZpcm0tYm9keSAuY29uZmlybS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29uZmlybS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWZvb3Rlci1iZyk7XG59XG4uY29uZmlybS1mb290ZXIgLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4uY29uZmlybS1mb290ZXIgLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5jb25maXJtLWZvb3RlciAuYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG4uY29uZmlybS1mb290ZXIgLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5jb25maXJtLWZvb3RlciAuYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmNvbmZpcm0tZm9vdGVyIC5idG4tZGFuZ2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOwwp/Cl8KRw6/CuMKPXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb25maXJtLWZvb3RlciAuYnRuLWRhbmdlcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbn1cbi5jb25maXJtLWZvb3RlciAuYnRuLWRhbmdlcjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29uZmlybS1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAuY29uZmlybS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgfVxuICAuY29uZmlybS1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIH1cbiAgLmNvbmZpcm0tYm9keSAuY29uZmlybS1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICAuY29uZmlybS1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29uZmlybS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb25maXJtLWZvb3RlciAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XG4gIH1cbiAgLmNvbmZpcm0tYm9keSAuY29uZmlybS1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgLmNvbmZpcm0tYm9keSBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLmNvbmZpcm0tYm9keSBwLmNvbmZpcm0td2FybmluZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgfVxuICAuY29uZmlybS1mb290ZXIgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICB9XG59XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG59XG4ubW9kYWwtb3ZlcmxheS1zaWdwYXo6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLm1vZGFsLW92ZXJsYXktc2lncGF6Om5vdCgubWluaW1pemVkLW1vZGUpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB6LWluZGV4OiAtMTtcbn1cbi5tb2RhbC1vdmVybGF5LXNpZ3Bhei5taW5pbWl6ZWQtbW9kZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1vZGFsLW92ZXJsYXktc2lncGF6Lm1pbmltaXplZC1tb2RlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFsLW92ZXJsYXktc2lncGF6Lm1pbmltaXplZC1tb2RlIC5mbG9hdGluZy1idWJibGUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5tb2RhbC1jb250ZW50LXNpZ3Bhei5taW5pbWl6ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gIGFuaW1hdGlvbjogbW9kYWxTbGlkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xufVxuXG4ubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGY0NmU1LCAjNjM2NmYxKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICBmbGV4LXNocmluazogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLm1vZGFsLWhlYWRlci1zaWdwYXogLm1vZGFsLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5tb2RhbC1oZWFkZXItc2lncGF6IC5tb2RhbC10aXRsZSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBhbmltYXRpb246IGljb25Cb3VuY2UgMnMgaW5maW5pdGU7XG59XG4ubW9kYWwtaGVhZGVyLXNpZ3BheiAubW9kYWwtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG4ubW9kYWwtaGVhZGVyLXNpZ3BheiAubW9kYWwtY29udHJvbHMgLm1vZGFsLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9kYWwtaGVhZGVyLXNpZ3BheiAubW9kYWwtY29udHJvbHMgLm1vZGFsLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1vZGFsLWhlYWRlci1zaWdwYXogLm1vZGFsLWNvbnRyb2xzIC5tb2RhbC1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTUpO1xufVxuLm1vZGFsLWhlYWRlci1zaWdwYXogLm1vZGFsLWNvbnRyb2xzIC5tb2RhbC1idG4gLmJ0bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5tb2RhbC1oZWFkZXItc2lncGF6IC5tb2RhbC1jb250cm9scyAubW9kYWwtYnRuOmhvdmVyIC5idG4taWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5tb2RhbC1oZWFkZXItc2lncGF6IC5tb2RhbC1jb250cm9scyAubW9kYWwtYnRuIC5idG4tdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzVweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgei1pbmRleDogMTAwMDI7XG59XG4ubW9kYWwtaGVhZGVyLXNpZ3BheiAubW9kYWwtY29udHJvbHMgLm1vZGFsLWJ0bjpob3ZlciAuYnRuLXRvb2x0aXAge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBib3R0b206IC0zMHB4O1xufVxuLm1vZGFsLWhlYWRlci1zaWdwYXogLm1vZGFsLWNvbnRyb2xzIC5tb2RhbC1idG4ubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XG4gIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xufVxuLm1vZGFsLWhlYWRlci1zaWdwYXogLm1vZGFsLWNvbnRyb2xzIC5tb2RhbC1idG4uY2xvc2UtbW9kYWwtYnRuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4yKSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1oZWFkZXItc2lncGF6IC5tb2RhbC1jb250cm9scyAubW9kYWwtYnRuLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlO1xufVxuXG4ubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjNGY0NmU1KTtcbn1cbi5tb2RhbC1ib2R5IGFwcC1oZWxwLXN1cHBvcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzYzNjZmMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmZsb2F0aW5nLWJ1YmJsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC43KTtcbn1cbi5mbG9hdGluZy1idWJibGUucHVsc2luZyB7XG4gIGFuaW1hdGlvbjogYnViYmxlUHVsc2UgMnMgaW5maW5pdGU7XG59XG4uZmxvYXRpbmctYnViYmxlIC5idWJibGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xufVxuLmZsb2F0aW5nLWJ1YmJsZSAuYnViYmxlLXRleHQge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5mbG9hdGluZy1idWJibGUgLmJ1YmJsZS1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjIpO1xufVxuLmZsb2F0aW5nLWJ1YmJsZSAuYnViYmxlLWNsb3NlIC5jbG9zZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmZsb2F0aW5nLWJ1YmJsZSAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6ICM0ZjQ2ZTU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBtaW5pbWl6ZUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYnViYmxlQXBwZWFyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCkgc2NhbGUoMC4zKSByb3RhdGUoLTE4MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC44KSwgMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uU2xpZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG4gIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbiAgLm1vZGFsLWJ0biB7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG4gIC5mbG9hdGluZy1idWJibGUge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICB9XG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRVNUSUxPUyBQUklOQ0lQQUxFUyAtIEdFU1RJw4PCk04gREUgVVNVQVJJT1NcclxuLy8gQWRhcHRhZG8gYWwgdGhlbWUgZ2xvYmFsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBWYXJpYWJsZXMgbG9jYWxlc1xyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuJHRyYW5zaXRpb24tc3BlZWQ6IDAuM3M7XHJcbiRzaWRlYmFyLXdpZHRoOiAyODBweDtcclxuJHNpZGViYXItY29sbGFwc2VkLXdpZHRoOiA3MHB4O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gREFTSEJPQVJEIENPTlRBSU5FUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tc3BlZWQgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgJi5zaWRlYmFyLWNvbGxhcHNlZCB7XHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi10b3A6IDY2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI2NHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpIHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAkc2lkZWJhci13aWR0aCk7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTRUFSQ0ggTU9EQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnNlYXJjaC1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcclxuXHJcbiAgLnNlYXJjaC1tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLW1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XHJcblxyXG4gICAgLnNlYXJjaC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAuc2VhcmNoLW1vZGFsLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLW1vZGFsLWlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDUycHggMTZweCA0OHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWNsZWFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWNsb3NlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlc3VsdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVzdWx0LWRldGFpbHMge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5yZXN1bHQtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlc3VsdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1lbXB0eSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEVMUCBTVVBQT1JUIE1PREFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubWluaW1pemVkLW1vZGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXRpbmctYnViYmxlIHtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTAwMDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4gIG1heC13aWR0aDogOTh2dztcclxuICBtYXgtaGVpZ2h0OiA5OHZoO1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcblxyXG4gIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi10b29sdGlwIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC0zNXB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYm9keS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogODV2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctYnViYmxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeSkgNTAlLCB0cmFuc3BhcmVudCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwMDAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcclxuICB9XHJcblxyXG4gICYucHVsc2luZyB7XHJcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluU2xvdyAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25TbGlkZSAwLjVzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVNVQVJJT1MgQ09OVEFJTkVSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi51c2Vycy1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5Db250YWluZXIgMC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEVBREVSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2Utc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU1RBVFMgQ09OVEFJTkVSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5zdGF0cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcblxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLXNwZWVkO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtaG92ZXItc2hhZG93KTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC12YWx1ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0LWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTU9EQUwgT1ZFUkxBWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLXNwZWVkO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbmZpcm0tbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IHNjYWxlSW4gMC4zcztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRk9STSBFTEVNRU5UU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgLnJlcXVpcmVkIHtcclxuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1pbnB1dCxcclxuICAuZm9ybS1zZWxlY3QsXHJcbiAgLmZvcm0tdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tc3BlZWQ7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFzc3dvcmQtaW5wdXQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5mb3JtLWlucHV0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAucGFzc3dvcmQtdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAuc3RyZW5ndGgtYmFyIHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RyZW5ndGgtd2Vhazo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0cmVuZ3RoLW1lZGl1bTo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdHJlbmd0aC1zdHJvbmc6OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RyZW5ndGgtdmVyeS1zdHJvbmc6OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdHJlbmd0aC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWVycm9yIHtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGFuaW1hdGlvbjogZXJyb3JTaGFrZSAwLjVzO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCVVRUT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAkdHJhbnNpdGlvbi1zcGVlZDtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1zcGVlZDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgLmJ0bi1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnkpIDMwJSwgdHJhbnNwYXJlbnQpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnkpIDQwJSwgdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tZGFuZ2VyKSAzMCUsIHRyYW5zcGFyZW50KTtcclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEFOSU1BVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Db250YWluZXIge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaWNvbkJvdW5jZSB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnkpIDUwJSwgdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnkpIDgwJSwgdHJhbnNwYXJlbnQpLCAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBub3RpZmljYXRpb25TbGlkZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlcnJvclNoYWtlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxyXG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFU1BPTlNJVkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1hY3Rpb25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0YXRzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRhaW5lci5tb2RhbC1sYXJnZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnVzZXJzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXRzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTU9EQUwgREUgQ09ORklSTUFDScODwpNOIERFIEVMSU1JTkFDScODwpNOXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERUwgTU9EQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmNvbmZpcm0tbW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XHJcbiAgYW5pbWF0aW9uOiBtb2RhbFNjYWxlSW4gMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG5cclxuICBAa2V5ZnJhbWVzIG1vZGFsU2NhbGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEVBREVSIERFTCBNT0RBTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uY29uZmlybS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ8OiwprCoMOvwrjCjyc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2RhbC1jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1VFUlBPIERFTCBNT0RBTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uY29uZmlybS1ib2R5IHtcclxuICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcclxuXHJcbiAgLmNvbmZpcm0taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYW5pbWF0aW9uOiBpY29uU2hha2UgMC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgaWNvblNoYWtlIHtcclxuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XHJcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cclxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmNvbmZpcm0td2FybmluZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ8OiwprCoMOvwrjCjyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29uZmlybS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGT09URVIgREVMIE1PREFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5jb25maXJtLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtZm9vdGVyLWJnKTtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG5cclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnw7DCn8KXwpHDr8K4wo8nO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFU1BPTlNJVkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbmZpcm0tbW9kYWwge1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm0taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb25maXJtLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjRweCAyMHB4O1xyXG5cclxuICAgIC5jb25maXJtLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb25maXJtLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb25maXJtLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweCAxNnB4O1xyXG5cclxuICAgIC5jb25maXJtLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICBwLmNvbmZpcm0td2FybmluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm0tZm9vdGVyIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNT0RBTCBTSUdQQVogLSBFU1RJTE9TIMODwppOSUNPUyAoVkVSU0nDg8KTTiBTQ1NTKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gVmFyaWFibGVzIGludGVybmFzXHJcbiRzaWdwYXotcHJpbWFyeTogIzRmNDZlNTtcclxuJHNpZ3Bhei1zZWNvbmRhcnk6ICM2MzY2ZjE7XHJcbiRzaWdwYXotYWNjZW50OiAjMDBmZjg4O1xyXG4kc2lncGF6LWRhbmdlcjogI2VmNDQ0NDtcclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuJHRyYW5zaXRpb24tYm91bmNlOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBPVkVSTEFZIERFTCBNT0RBTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4ubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gIC8vIFNvbG8gbW9zdHJhciBmb25kbyBjdWFuZG8gZWwgbW9kYWwgZXN0w4PCoSBhYmllcnRvXHJcbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDdWFuZG8gZXN0w4PCoSBtaW5pbWl6YWRvOiBzaW4gZm9uZG8gbmkgYmxvcXVlb1xyXG4gICYubWluaW1pemVkLW1vZGUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTb2xvIGxhIGJ1cmJ1amEgZXMgaW50ZXJhY3RpdmFcclxuICAgIC5mbG9hdGluZy1idWJibGUge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFTCBNT0RBTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4ubW9kYWwtY29udGVudC1zaWdwYXoge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHotaW5kZXg6IDEwMDAxO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJvdW5jZTtcclxuICBtYXgtd2lkdGg6IDk4dnc7XHJcbiAgbWF4LWhlaWdodDogOTh2aDtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5cclxuICAmLm1pbmltaXplZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoLm1pbmltaXplZCkge1xyXG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBIRUFERVIgREVMIE1PREFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkc2lncGF6LXByaW1hcnksICRzaWdwYXotc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBhbmltYXRpb246IGljb25Cb3VuY2UgMnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAubW9kYWwtYnRuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnRuLWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idG4tdG9vbHRpcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBtaW5pbWl6ZUFuaW1hdGlvbiAwLjVzIGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2xvc2UtbW9kYWwtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENVRVJQTyBERUwgTU9EQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLm1vZGFsLWJvZHktd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBib3gtc2hhZG93OiAwIDI1cHggNzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAvLyBTY3JvbGxiYXIgcGVyc29uYWxpemFkYVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkc2lncGF6LXByaW1hcnksICRzaWdwYXotc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHNpZ3Bhei1zZWNvbmRhcnksICRzaWdwYXotcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBc2VndXJhciBxdWUgZWwgY29tcG9uZW50ZSBpbnRlcm5vIG9jdXBlIHRvZG8gZWwgYW5jaG9cclxuICBhcHAtaGVscC1zdXBwb3J0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCVVJCVUpBIEZMT1RBTlRFIChNSU5JTUlaQURPKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uZmxvYXRpbmctYnViYmxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRzaWdwYXotcHJpbWFyeSwgJHNpZ3Bhei1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBhbmltYXRpb246IGJ1YmJsZUFwcGVhciAwLjZzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuNyk7XHJcbiAgfVxyXG5cclxuICAmLnB1bHNpbmcge1xyXG4gICAgYW5pbWF0aW9uOiBidWJibGVQdWxzZSAycyBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5idWJibGUtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5idWJibGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGFuaW1hdGlvbjogc3BpblNsb3cgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS10ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS1jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogJHNpZ3Bhei1wcmltYXJ5O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uU2xpZGUgMC41cyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQU5JTUFDSU9ORVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1pbmltaXplQW5pbWF0aW9uIHtcclxuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTsgfVxyXG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnViYmxlQXBwZWFyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpIHNjYWxlKDAuMykgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSByb3RhdGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidWJibGVQdWxzZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpblNsb3cge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRVNQT05TSVZFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcclxuICAgIG1pbi13aWR0aDogOTB2dztcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1jb250ZW50LXNpZ3Bhejpub3QoLm1pbmltaXplZCkge1xyXG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1idG4ge1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICB9XHJcblxyXG4gIC5mbG9hdGluZy1idWJibGUge1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcclxuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuZmxvYXRpbmctYnViYmxlIHtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1YmJsZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2,
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideDown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('300ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 1,
        transform: 'translateY(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('200ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
        opacity: 0,
        transform: 'translateY(-20px)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 99377:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/seguridad/pages/usuarios/components/roles-modal/roles-modal.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesModalComponent: () => (/* binding */ RolesModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_rol_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/rol-api.service */ 45446);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/services/notification/notification.service */ 97407);
// src/app/modules/seguridad/pages/usuarios/components/roles-modal/roles-modal.component.ts










function RolesModalComponent_div_0_div_16_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 16)(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_16_tr_21_Template_button_click_12_listener() {
      const rol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.editarRol(rol_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_16_tr_21_Template_button_click_14_listener() {
      const rol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.eliminarRol(rol_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rol_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("ROL-", rol_r5.rol_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rol_r5.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rol_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 4, rol_r5.fecha_creacion, "dd/MM/yyyy"));
  }
}
function RolesModalComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Roles del Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_16_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.abrirNuevoRol());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u2795 Nuevo Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 13)(7, "table", 14)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Fecha Creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, RolesModalComponent_div_0_div_16_tr_21_Template, 16, 7, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.roles);
  }
}
function RolesModalComponent_div_0_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 25)(10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_17_div_7_Template_button_click_10_listener() {
      const permiso_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.editarPermiso(permiso_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_17_div_7_Template_button_click_12_listener() {
      const permiso_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.eliminarPermiso(permiso_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const permiso_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](permiso_r8.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](permiso_r8.descripcion);
  }
}
function RolesModalComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Permisos del Sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.abrirNuevoPermiso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u2795 Nuevo Permiso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RolesModalComponent_div_0_div_17_div_7_Template, 14, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.permisos);
  }
}
function RolesModalComponent_div_0_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_18_div_6_Template_div_click_0_listener() {
      const rol_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.seleccionarRol(rol_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", (ctx_r1.rolSeleccionado == null ? null : ctx_r1.rolSeleccionado.rol_id) === rol_r10.rol_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", rol_r10.nombre, " ");
  }
}
function RolesModalComponent_div_0_div_18_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "label", 38)(2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RolesModalComponent_div_0_div_18_div_7_div_4_Template_input_change_2_listener() {
      const permiso_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.togglePermiso(permiso_r13.permiso_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 41)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const permiso_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.tienePermiso(permiso_r13.permiso_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](permiso_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](permiso_r13.descripcion);
  }
}
function RolesModalComponent_div_0_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RolesModalComponent_div_0_div_18_div_7_div_4_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 36)(6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_div_18_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.guardarAsignaciones());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Guardar Asignaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Permisos para: ", ctx_r1.rolSeleccionado.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.permisos);
  }
}
function RolesModalComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "div", 27)(2, "div", 28)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RolesModalComponent_div_0_div_18_div_6_Template, 2, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RolesModalComponent_div_0_div_18_div_7_Template, 8, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.rolSeleccionado);
  }
}
function RolesModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\uD83D\uDC51 Gesti\u00F3n de Roles y Permisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cerrar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.activeTab = "roles");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\uD83D\uDCCB Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.activeTab = "permisos");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\uD83D\uDD11 Permisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.activeTab = "asignaciones");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u2699\uFE0F Asignaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RolesModalComponent_div_0_div_16_Template, 22, 1, "div", 9)(17, RolesModalComponent_div_0_div_17_Template, 8, 1, "div", 9)(18, RolesModalComponent_div_0_div_18_Template, 8, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.activeTab === "roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.activeTab === "permisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r1.activeTab === "asignaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "permisos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "asignaciones");
  }
}
function RolesModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showRolForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showRolForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 43)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RolesModalComponent_div_1_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.rolForm.nombre, $event) || (ctx_r1.rolForm.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 43)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Descripci\u00F3n *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RolesModalComponent_div_1_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.rolForm.descripcion, $event) || (ctx_r1.rolForm.descripcion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 46)(17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showRolForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_1_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.guardarRol());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.isEditingRol ? "\u270F\uFE0F Editar Rol" : "\uD83D\uDC51 Nuevo Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rolForm.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rolForm.descripcion);
  }
}
function RolesModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showPermisoForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_2_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showPermisoForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 43)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RolesModalComponent_div_2_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.permisoForm.nombre, $event) || (ctx_r1.permisoForm.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 43)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Descripci\u00F3n *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function RolesModalComponent_div_2_Template_textarea_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.permisoForm.descripcion, $event) || (ctx_r1.permisoForm.descripcion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 46)(17, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_2_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showPermisoForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesModalComponent_div_2_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.guardarPermiso());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.isEditingPermiso ? "\u270F\uFE0F Editar Permiso" : "\uD83D\uDD10 Nuevo Permiso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.permisoForm.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.permisoForm.descripcion);
  }
}
class RolesModalComponent {
  rolApiService;
  cdr;
  notificationService;
  visible = false;
  close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  roles = [];
  permisos = [];
  rolSeleccionado = null;
  permisosAsignados = [];
  loading = false;
  showRolForm = false;
  isEditingRol = false;
  rolForm = {
    nombre: '',
    descripcion: ''
  };
  currentRolId = null;
  showPermisoForm = false;
  isEditingPermiso = false;
  permisoForm = {
    nombre: '',
    descripcion: ''
  };
  currentPermisoId = null;
  activeTab = 'roles';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  constructor(rolApiService, cdr, notificationService) {
    this.rolApiService = rolApiService;
    this.cdr = cdr;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.rolApiService.roles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(roles => {
      this.roles = roles;
      this.loading = false;
    });
    this.rolApiService.permisos$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(permisos => {
      this.permisos = permisos;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  cerrar() {
    this.visible = false;
    this.close.emit();
    this.resetForms();
  }
  resetForms() {
    this.showRolForm = false;
    this.showPermisoForm = false;
    this.rolSeleccionado = null;
    this.permisosAsignados = [];
  }
  // ========== ROLES ==========
  abrirNuevoRol() {
    this.isEditingRol = false;
    this.rolForm = {
      nombre: '',
      descripcion: ''
    };
    this.showRolForm = true;
  }
  editarRol(rol) {
    this.isEditingRol = true;
    this.currentRolId = rol.rol_id;
    this.rolForm = {
      ...rol
    };
    this.showRolForm = true;
  }
  guardarRol() {
    if (!this.rolForm.nombre?.trim()) {
      this.notificationService.showError('El nombre del rol es requerido');
      return;
    }
    this.loading = true;
    if (this.isEditingRol && this.currentRolId) {
      this.rolApiService.actualizarRol(this.currentRolId, this.rolForm).subscribe({
        next: () => {
          this.notificationService.showSuccess('Rol actualizado exitosamente');
          this.showRolForm = false;
          this.loading = false;
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al actualizar rol');
          this.loading = false;
        }
      });
    } else {
      this.rolApiService.crearRol(this.rolForm).subscribe({
        next: () => {
          this.notificationService.showSuccess('Rol creado exitosamente');
          this.showRolForm = false;
          this.loading = false;
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al crear rol');
          this.loading = false;
        }
      });
    }
  }
  eliminarRol(rol) {
    if (confirm(`¿Eliminar el rol "${rol.nombre}"?`)) {
      this.rolApiService.eliminarRol(rol.rol_id).subscribe({
        next: () => {
          this.notificationService.showSuccess('Rol eliminado exitosamente');
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al eliminar rol');
        }
      });
    }
  }
  // ========== PERMISOS ==========
  abrirNuevoPermiso() {
    this.isEditingPermiso = false;
    this.permisoForm = {
      nombre: '',
      descripcion: ''
    };
    this.showPermisoForm = true;
  }
  editarPermiso(permiso) {
    this.isEditingPermiso = true;
    this.currentPermisoId = permiso.permiso_id;
    this.permisoForm = {
      ...permiso
    };
    this.showPermisoForm = true;
  }
  guardarPermiso() {
    if (!this.permisoForm.nombre?.trim()) {
      this.notificationService.showError('El nombre del permiso es requerido');
      return;
    }
    this.loading = true;
    this.cdr.detectChanges();
    if (this.isEditingPermiso && this.currentPermisoId) {
      this.rolApiService.actualizarPermiso(this.currentPermisoId, this.permisoForm).subscribe({
        next: () => {
          this.notificationService.showSuccess('Permiso actualizado exitosamente');
          this.showPermisoForm = false;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al actualizar permiso');
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.rolApiService.crearPermiso(this.permisoForm).subscribe({
        next: () => {
          this.notificationService.showSuccess('Permiso creado exitosamente');
          this.showPermisoForm = false;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al crear permiso');
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  eliminarPermiso(permiso) {
    if (confirm(`¿Eliminar el permiso "${permiso.nombre}"?`)) {
      this.rolApiService.eliminarPermiso(permiso.permiso_id).subscribe({
        next: () => {
          this.notificationService.showSuccess('Permiso eliminado exitosamente');
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al eliminar permiso');
          this.cdr.detectChanges();
        }
      });
    }
  }
  // ========== ASIGNACIONES ==========
  seleccionarRol(rol) {
    this.rolSeleccionado = rol;
    this.loading = true;
    this.rolApiService.getPermisosPorRol(rol.rol_id).subscribe({
      next: response => {
        const permisos = response.data || response;
        this.permisosAsignados = permisos.map(p => p.permiso_id);
        this.loading = false;
      },
      error: error => {
        console.error('Error cargando permisos del rol:', error);
        this.permisosAsignados = [];
        this.loading = false;
      }
    });
  }
  tienePermiso(permisoId) {
    return this.permisosAsignados.includes(permisoId);
  }
  togglePermiso(permisoId) {
    if (this.tienePermiso(permisoId)) {
      this.permisosAsignados = this.permisosAsignados.filter(id => id !== permisoId);
    } else {
      this.permisosAsignados.push(permisoId);
    }
  }
  guardarAsignaciones() {
    if (this.rolSeleccionado) {
      this.loading = true;
      this.rolApiService.asignarPermisos(this.rolSeleccionado.rol_id, this.permisosAsignados).subscribe({
        next: () => {
          this.notificationService.showSuccess('Permisos asignados exitosamente');
          this.loading = false;
        },
        error: error => {
          this.notificationService.showError(error.error?.message || 'Error al asignar permisos');
          this.loading = false;
        }
      });
    }
  }
  static ɵfac = function RolesModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_rol_api_service__WEBPACK_IMPORTED_MODULE_7__.RolApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RolesModalComponent,
    selectors: [["app-roles-modal"]],
    inputs: {
      visible: "visible"
    },
    outputs: {
      close: "close"
    },
    decls: 3,
    vars: 3,
    consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "modal-xlarge", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [1, "tabs-container"], [1, "tabs-header"], [1, "tab-btn", 3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "tab-header"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "actions-cell"], ["title", "Editar", 1, "btn-icon", 3, "click"], ["title", "Eliminar", 1, "btn-icon", 3, "click"], [1, "permisos-grid"], ["class", "permiso-card", 4, "ngFor", "ngForOf"], [1, "permiso-card"], [1, "permiso-header"], [1, "permiso-icon"], [1, "permiso-body"], [1, "permiso-footer"], [1, "btn-small", 3, "click"], [1, "asignaciones-container"], [1, "asignaciones-sidebar"], [1, "roles-list"], ["class", "rol-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "asignaciones-content", 4, "ngIf"], [1, "rol-item", 3, "click"], [1, "asignaciones-content"], [1, "permisos-asignados"], ["class", "permiso-item", 4, "ngFor", "ngForOf"], [1, "asignaciones-actions"], [1, "permiso-item"], [1, "checkbox-container"], ["type", "checkbox", 3, "change", "checked"], [1, "checkmark"], [1, "permiso-info"], [1, "modal-container", 3, "click"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["type", "text", "placeholder", "ej: usuarios.crear", 1, "form-control", 3, "ngModelChange", "ngModel"]],
    template: function RolesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RolesModalComponent_div_0_Template, 19, 9, "div", 0)(1, RolesModalComponent_div_1_Template, 21, 3, "div", 0)(2, RolesModalComponent_div_2_Template, 21, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showRolForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPermisoForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 135;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 20px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.tabs-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tabs-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  border-bottom: 2px solid var(--border-color);\n  margin-bottom: 24px;\n  padding-bottom: 0;\n}\n.tabs-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px 8px 0 0;\n}\n.tabs-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background: var(--bg-hover);\n}\n.tabs-header[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: var(--primary-light);\n}\n.tabs-header[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary);\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.tab-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 12px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n  width: 8px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 600px;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background: var(--primary);\n  color: white;\n}\n.actions-cell[_ngcontent-%COMP%]   .btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n}\n.permisos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .permisos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--card-border);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--card-hover-shadow);\n  border-color: var(--primary);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--primary-light);\n  border-bottom: 1px solid var(--border-color);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-header[_ngcontent-%COMP%]   .permiso-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-top: 1px solid var(--border-color);\n  background: var(--bg-tertiary);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:first-child {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:first-child:hover {\n  background: var(--primary);\n  color: white;\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:last-child {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.permisos-grid[_ngcontent-%COMP%]   .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:last-child:hover {\n  background: var(--danger);\n  color: white;\n}\n.asignaciones-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 24px;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .asignaciones-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.asignaciones-sidebar[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n}\n.asignaciones-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-color);\n}\n.asignaciones-sidebar[_ngcontent-%COMP%]   .roles-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.asignaciones-sidebar[_ngcontent-%COMP%]   .roles-list[_ngcontent-%COMP%]   .rol-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.asignaciones-sidebar[_ngcontent-%COMP%]   .roles-list[_ngcontent-%COMP%]   .rol-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.asignaciones-sidebar[_ngcontent-%COMP%]   .roles-list[_ngcontent-%COMP%]   .rol-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n  border-left: 3px solid var(--primary);\n}\n.asignaciones-content[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n}\n.asignaciones-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permisos-asignados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 350px;\n  overflow-y: auto;\n  margin-bottom: 20px;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permisos-asignados[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permisos-asignados[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-secondary);\n  border-radius: 3px;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permisos-asignados[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .permiso-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .permiso-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.asignaciones-content[_ngcontent-%COMP%]   .permiso-item[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .permiso-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.asignaciones-content[_ngcontent-%COMP%]   .asignaciones-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 12px;\n  border-radius: 6px;\n}\n@media (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .tabs-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n  .permisos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .asignaciones-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .data-table[_ngcontent-%COMP%] {\n    min-width: 500px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n  .tabs-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tabs-header[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .permiso-card[_ngcontent-%COMP%]   .permiso-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 12px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWd1cmlkYWQvcGFnZXMvdXN1YXJpb3MvY29tcG9uZW50cy9yb2xlcy1tb2RhbC9yb2xlcy1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFYRjtBQWNBO0VBQ0U7SUFBTyxVQUFBO0VBWFA7RUFZQTtJQUFLLFVBQUE7RUFUTDtBQUNGO0FBWUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtBQVZGO0FBY0E7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQVpGO0VBY0E7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFaRjtBQUNGO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0NBQUE7QUFkRjtBQVFBO0VBU0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWRKO0FBREE7RUFtQkksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBZko7QUFpQkk7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUFmTjtB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RSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFuSEY7QUFxSEU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFuSEo7QUFvR0E7RUFtQkksZUFBQTtBQXBISjtBQXdIQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBdEhGO0FBd0hFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQXRISjtBQTBIQTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQXhIRjtBQTBIRTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBeEhKO0FBNEhBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0FBMUhGO0FBNEhFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQTFISjtBQThIQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNUhGO0FBa0lBO0VBQ0U7SUFDRSxrQkFBQTtFQWhJRjtFQStIQTtJQUlJLGVBQUE7RUFoSUo7RUFvSUE7SUFDRSxhQUFBO0VBbElGO0VBcUlBO0lBRUksaUJBQUE7SUFDQSxlQUFBO0VBcElKO0VBd0lBO0lBQ0UsMEJBQUE7RUF0SUY7RUF5SUE7SUFDRSwwQkFBQTtFQXZJRjtFQTBJQTtJQUNFLGdCQUFBO0VBeElGO0FBQ0Y7QUEySUE7RUFDRTtJQUNFLGNBQUE7RUF6SUY7RUE0SUE7SUFDRSxlQUFBO0VBMUlGO0VBeUlBO0lBSUksT0FBQTtJQUNBLHVCQUFBO0VBMUlKO0VBOElBO0lBRUksc0JBQUE7RUE3SUo7RUFpSkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEvSUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBST0xFUyBZIFBFUk1JU09TIC0gRVNUSUxPUyBDT01QTEVUT1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE5vdGE6IFRvZGFzIGxhcyB2YXJpYWJsZXMgQ1NTIHZpZW5lbiBkZWZpbmlkYXMgZW4gdGhlbWVzLmxlc3Ncbi8vIFNlIGFjY2VkZW4gbWVkaWFudGUgdmFyKC0tbm9tYnJlLXZhcmlhYmxlKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBNb2RhbCBvdmVybGF5XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMTM1O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLW92ZXJsYXkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vLyBNb2RhbCBjb250YWluZXIgLSB0YW1hw4PCsW8gZXh0cmEgZ3JhbmRlXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBNb2RhbCBoZWFkZXJcbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLm1vZGFsLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBNb2RhbCBjb250ZW50XG4ubW9kYWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDMycHg7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDMycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEFCU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50YWJzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFicy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gIC50YWItYnRuIHtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFiLWNvbnRlbnQge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG59XG5cbi50YWItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRBQkxBIERFIFJPTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWluLXdpZHRoOiA2MDBweDtcblxuICB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgIHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTIERFIEFDQ0nDg8KTTiBFTiBUQUJMQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hY3Rpb25zLWNlbGwge1xuICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuZGVsZXRlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHUklEIERFIFBFUk1JU09TIChUQVJKRVRBUylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGVybWlzb3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBlcm1pc28tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ob3Zlci1zaGFkb3cpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAucGVybWlzby1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgLnBlcm1pc28taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cblxuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBlcm1pc28tYm9keSB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGVybWlzby1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG5cbiAgICAgIC5idG4tc21hbGwge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFTSUdOQUNJT05FUyAoUm9sZXMgeSBQZXJtaXNvcylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYXNpZ25hY2lvbmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xuICBnYXA6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG4uYXNpZ25hY2lvbmVzLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLnJvbGVzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLnJvbC1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYXNpZ25hY2lvbmVzLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxuXG4gIC5wZXJtaXNvcy1hc2lnbmFkb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5wZXJtaXNvLWl0ZW0ge1xuICAgIC5jaGVja2JveC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnBlcm1pc28taW5mbyB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXNpZ25hY2lvbmVzLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRk9STVVMQVJJT1MgKFJvbCB5IFBlcm1pc28pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgLnJlcXVpcmVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICB9XG4gIH1cblxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIC5idG4taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1zbWFsbCB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnRhYnMtaGVhZGVyIHtcbiAgICAudGFiLWJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cblxuICAucGVybWlzb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYXNpZ25hY2lvbmVzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZGF0YS10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gIH1cblxuICAudGFicy1oZWFkZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC50YWItYnRuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAucGVybWlzby1jYXJkIHtcbiAgICAucGVybWlzby1mb290ZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_seguridad_pages_usuarios_usuarios_component_ts.js.map