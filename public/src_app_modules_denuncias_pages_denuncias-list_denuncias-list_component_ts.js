"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_denuncias_pages_denuncias-list_denuncias-list_component_ts"],{

/***/ 4626:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/denuncias/components/denuncias-table/denuncias-table.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DenunciasTableComponent: () => (/* binding */ DenunciasTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 36124);




function DenunciasTableComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.total, " registros encontrados ");
  }
}
function DenunciasTableComponent_div_6_tr_23_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_tr_23_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.viewQr.emit(d_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DenunciasTableComponent_div_6_tr_23_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DenunciasTableComponent_div_6_tr_23_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.getTotalEvidencias(d_r4), " archivo(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r0.getDetalleEvidencias(d_r4), ")");
  }
}
function DenunciasTableComponent_div_6_tr_23_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sin evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DenunciasTableComponent_div_6_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DenunciasTableComponent_div_6_tr_23_button_6_Template, 3, 0, "button", 15)(7, DenunciasTableComponent_div_6_tr_23_span_7_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DenunciasTableComponent_div_6_tr_23_ng_container_19_Template, 7, 2, "ng-container", 19)(20, DenunciasTableComponent_div_6_tr_23_ng_template_20_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 20)(23, "div", 21)(24, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_tr_23_Template_button_click_24_listener() {
      const d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.view.emit(d_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " \uD83D\uDC41\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_tr_23_Template_button_click_26_listener() {
      const d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.edit.emit(d_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u270F\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_tr_23_Template_button_click_28_listener() {
      const d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.remove.emit(d_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \uD83D\uDDD1\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const sinEvidencia_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r4.codigo_externo || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r4.numero_expediente || "Sin asignar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", d_r4.codigo_qr_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !d_r4.codigo_qr_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (d_r4.persona == null ? null : d_r4.persona.nombre_completo) || (d_r4.persona_id ? ctx_r0.personasNombreCache[d_r4.persona_id] || "No asignado" : "No asignado"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((d_r4.tipo_conflicto == null ? null : d_r4.tipo_conflicto.nombre) || d_r4.tipo_conflicto_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.getEstadoProcesalClass(ctx_r0.getEstadoProcesal(d_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.getEstadoProcesal(d_r4), "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 11, d_r4.fecha_ingreso, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", d_r4.evidencia_urls && ctx_r0.getTotalEvidencias(d_r4) > 0)("ngIfElse", sinEvidencia_r5);
  }
}
function DenunciasTableComponent_div_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_div_24_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPageChange(ctx_r0.page - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u25C0\uFE0F Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DenunciasTableComponent_div_6_div_24_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPageChange(ctx_r0.page + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Siguiente \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.page === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" P\u00E1gina ", ctx_r0.page, " de ", ctx_r0.totalPages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.page === ctx_r0.totalPages);
  }
}
function DenunciasTableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Expediente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Persona");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tipo Conflicto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Fecha Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DenunciasTableComponent_div_6_tr_23_Template, 30, 14, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DenunciasTableComponent_div_6_div_24_Template, 7, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.denuncias)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.totalPages > 1);
  }
}
function DenunciasTableComponent_ng_template_7_Template(rf, ctx) {}
function DenunciasTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No hay denuncias registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Comience creando una nueva denuncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DenunciasTableComponent {
  denuncias = [];
  loading = false;
  page = 1;
  perPage = 10;
  total = 0;
  personasNombreCache = {};
  remisiones = [];
  conciliaciones = [];
  medidas = [];
  sentencias = [];
  pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  viewQr = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  get totalPages() {
    return this.total > 0 ? Math.ceil(this.total / this.perPage) : 1;
  }
  onPageChange(page) {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
  }
  trackById(index, item) {
    return item.denuncia_id;
  }
  getEstadoProcesal(denuncia) {
    // Verificar si tiene remisión
    const tieneRemision = this.remisiones?.some(r => r.denuncia_id === denuncia.denuncia_id);
    if (tieneRemision) return '📤 EN REMISIÓN';
    // Verificar si tiene sentencia válida
    const sentencia = this.sentencias?.find(s => s.conciliacion?.denuncia_id === denuncia.denuncia_id);
    if (sentencia) {
      if (sentencia.estado_ejecucion === 'EJECUTADA') return '⚖️ SENTENCIA EJECUTADA';
      if (sentencia.estado_ejecucion === 'EN_EJECUCION') return '⚖️ SENTENCIA EN EJECUCIÓN';
      return '📜 CON SENTENCIA';
    }
    // Verificar si tiene medida cautelar
    const tieneMedida = this.medidas?.some(m => m.conciliacion?.denuncia_id === denuncia.denuncia_id);
    if (tieneMedida) return '🛡️ MEDIDA CAUTELAR';
    // Verificar si tiene conciliación completa
    const conciliacion = this.conciliaciones?.find(c => c.denuncia_id === denuncia.denuncia_id);
    if (conciliacion) {
      if (conciliacion.estado === 'COMPLETA') return '✅ CONCILIACIÓN COMPLETA';
      if (conciliacion.estado === 'EN_PROCESO') return '⚖️ CONCILIACIÓN EN PROCESO';
      return '🤝 EN CONCILIACIÓN';
    }
    return '📋 EN TRÁMITE';
  }
  // Método para obtener el color del estado procesal
  getEstadoProcesalClass(estado) {
    if (estado.includes('REMISIÓN')) return 'estado-remision';
    if (estado.includes('SENTENCIA EJECUTADA')) return 'estado-sentencia-ejecutada';
    if (estado.includes('SENTENCIA')) return 'estado-sentencia';
    if (estado.includes('MEDIDA')) return 'estado-medida';
    if (estado.includes('COMPLETA')) return 'estado-completa';
    if (estado.includes('PROCESO')) return 'estado-proceso';
    return 'estado-tramite';
  }
  getTotalEvidencias(denuncia) {
    if (!denuncia?.evidencia_urls) return 0;
    const urls = denuncia.evidencia_urls;
    return (urls.documentos?.length || 0) + (urls.fotos?.length || 0) + (urls.videos?.length || 0) + (urls.audios?.length || 0);
  }
  getDetalleEvidencias(denuncia) {
    if (!denuncia?.evidencia_urls) return '';
    const urls = denuncia.evidencia_urls;
    const partes = [];
    if (urls.documentos?.length) partes.push(`📄${urls.documentos.length}`);
    if (urls.fotos?.length) partes.push(`📷${urls.fotos.length}`);
    if (urls.videos?.length) partes.push(`🎥${urls.videos.length}`);
    if (urls.audios?.length) partes.push(`🎵${urls.audios.length}`);
    return partes.join(' ');
  }
  static ɵfac = function DenunciasTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DenunciasTableComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DenunciasTableComponent,
    selectors: [["app-denuncias-table"]],
    inputs: {
      denuncias: "denuncias",
      loading: "loading",
      page: "page",
      perPage: "perPage",
      total: "total",
      personasNombreCache: "personasNombreCache",
      remisiones: "remisiones",
      conciliaciones: "conciliaciones",
      medidas: "medidas",
      sentencias: "sentencias"
    },
    outputs: {
      pageChange: "pageChange",
      view: "view",
      edit: "edit",
      remove: "remove",
      viewQr: "viewQr"
    },
    decls: 10,
    vars: 5,
    consts: [["loadingTpl", ""], ["sinEvidencia", ""], [1, "table-container"], [1, "table-header"], [1, "table-title"], ["class", "table-subtitle", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["class", "empty-state", 4, "ngIf"], [1, "table-subtitle"], [1, "table-responsive"], [1, "data-table"], [1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination", 4, "ngIf"], [1, "qr-cell"], ["class", "btn-qr-view", "title", "Ver QR", 3, "click", 4, "ngIf"], ["class", "qr-placeholder", 4, "ngIf"], [1, "estado-procesal-badge", 3, "ngClass"], [1, "evidencia-cell"], [4, "ngIf", "ngIfElse"], [1, "actions-cell"], [1, "actions-buttons"], ["title", "Ver Detalles", 1, "btn-action", "view", 3, "click"], ["title", "Editar", 1, "btn-action", "edit", 3, "click"], ["title", "Eliminar", 1, "btn-action", "delete", 3, "click"], ["title", "Ver QR", 1, "btn-qr-view", 3, "click"], [1, "qr-icon"], [1, "qr-placeholder"], [1, "evidencia-icon"], [1, "evidencia-count"], [1, "evidencia-detail"], [1, "sin-evidencia"], [1, "pagination"], [1, "pagination-btn", 3, "click", "disabled"], [1, "pagination-info"], [1, "empty-state"], [1, "empty-icon"]],
    template: function DenunciasTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83D\uDCCB Lista de Denuncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DenunciasTableComponent_span_5_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DenunciasTableComponent_div_6_Template, 25, 3, "div", 6)(7, DenunciasTableComponent_ng_template_7_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(9, DenunciasTableComponent_div_9_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const loadingTpl_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.total === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\nbody.light-theme[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  color: var(--text-primary);\n}\nbody.dark-theme[_ngcontent-%COMP%] {\n  background-color: #111827;\n  color: var(--text-primary);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%] {\n  background: #111827;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.denuncia-container[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  min-height: 100vh;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-hover);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .codigo-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .expediente-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.qr-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  border: none;\n  border-radius: 8px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%]   .qr-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.qr-cell[_ngcontent-%COMP%]   .qr-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-count[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-left: 4px;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .sin-evidencia[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-style: italic;\n  font-size: 0.75rem;\n}\n.estado-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge.estado-ingresada[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-badge.estado-revision[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge.estado-investigacion[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.estado-badge.estado-resuelta[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.estado-archivada[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.estado-badge.estado-desconocido[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.estado-procesal-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.estado-procesal-badge.estado-remision[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-sentencia-ejecutada[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-procesal-badge.estado-sentencia[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-procesal-badge.estado-medida[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.estado-procesal-badge.estado-completa[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.estado-procesal-badge.estado-proceso[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-tramite[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.detail-modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 900px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n  overflow-y: auto;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  background: var(--gradient-primary);\n  color: white;\n  position: relative;\n  z-index: 10;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-codigo[_ngcontent-%COMP%] {\n  font-family: 'JetBrains Mono', monospace;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin-left: 12px;\n  font-size: 0.9rem;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border-color);\n  padding: 0 24px;\n  background: var(--bg-primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.evidencia-detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--border-light);\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]   .evidencia-icon-detail[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]   .evidencia-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.evidencia-detail[_ngcontent-%COMP%]   .no-evidencia[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-style: italic;\n  font-size: 0.875rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p.confirm-warning[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 500;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 24px;\n  color: var(--text-secondary);\n}\n.loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .denuncia-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n    text-align: center;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;\n  }\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    margin: 0;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .detail-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n  }\n  .detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 12px;\n    font-size: 0.75rem;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZW51bmNpYXMvY29tcG9uZW50cy9kZW51bmNpYXMtdGFibGUvZGVudW5jaWFzLXRhYmxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUNFLHNCQUFBO0FBckJGO0FBd0JBO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO0VBQ0EsaURBQUE7QUF0QkY7QUF3QkU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBdEJKO0FBeUJFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQXZCSjtBQXFCRTtFQUtJLG1CQUFBO0FBdkJOO0FBNEJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUExQkY7QUFnQ0E7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTlCRjtBQW9DQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUFsQ0Y7QUF5QkE7RUFhTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBbkNOO0FBbUJBO0VBb0JNLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUFwQ047QUFjQTtFQTJCSSxhQUFBO0VBQ0EsU0FBQTtBQXRDSjtBQTZDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FBM0NGO0FBcUNBO0VBU0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTNDSjtBQStCQTtFQWVNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQTNDTjtBQXlCQTtFQXNCTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUE1Q047QUE4Q007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Z0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBdE5KO0FBME5BO0VBQ0U7SUFBSyx5QkFBQTtFQXZOTDtBQUNGO0FBNE5BO0VBQ0U7SUFDRSxhQUFBO0VBMU5GO0VBNk5BO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQTNORjtFQThOQTtJQUNFLHNFQUFBO0VBNU5GO0VBK05BO0lBQ0UscUNBQUE7RUE3TkY7QUFDRjtBQWdPQTtFQUNFO0lBQ0UsMEJBQUE7RUE5TkY7RUFpT0E7SUFDRSxnQkFBQTtJQUNBLFNBQUE7RUEvTkY7RUFrT0E7SUFDRSwwQkFBQTtFQWhPRjtFQW1PQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQWpPRjtFQW9PQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBbE9GO0VBK05BO0lBTUksbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFsT0o7RUFzT0E7SUFDRSwwQkFBQTtJQUNBLFNBQUE7RUFwT0Y7QUFDRjtBQTBPQTtFQUNFO0lBQU8sVUFBQTtFQXZPUDtFQXdPQTtJQUFLLFVBQUE7RUFyT0w7QUFDRjtBQXVPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBck9GO0VBdU9BO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBck9GO0FBQ0Y7QUF3T0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQXRPRjtFQXdPQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXRPRjtBQUNGO0FBNE9BOzs7RUFHRSxVQUFBO0FBMU9GO0FBNk9BOzs7RUFHRSw4QkFBQTtFQUNBLGtCQUFBO0FBM09GO0FBOE9BOzs7RUFHRSwwQkFBQTtFQUNBLGtCQUFBO0FBNU9GO0FBOE9FOzs7RUFDRSxnQ0FBQTtBQTFPSiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBERU5VTkNJQVMgQ09NUE9ORU5UIC0gRVNUSUxPUyBDT04gVkFSSUFCTEVTIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBOb3RhOiBUb2RhcyBsYXMgdmFyaWFibGVzIENTUyB2aWVuZW4gZGVmaW5pZGFzIGVuIHRoZW1lcy5sZXNzXG4vLyBTZSBhY2NlZGVuIG1lZGlhbnRlIHZhcigtLW5vbWJyZS12YXJpYWJsZSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNJU1RFTUEgREUgRVNQQUNJQURPICh1c2FuZG8gdmFyaWFibGVzIENTUylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTSVNURU1BIERFIEJPUkRFUiBSQURJVVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWQVJJQUJMRVMgR0xPQkFMRVMgKGFjdHVhbGl6YWRhcylcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RJTE9TIEdMT0JBTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJi5saWdodC10aGVtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgfVxuXG4gICYuZGFyay10aGVtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcblxuICAgIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxMTE4Mjc7XG4gICAgfVxuICB9XG59XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERSBERU5VTkNJQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZGVudW5jaWEtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLmhlYWRlci1jb250ZW50IHtcbiAgICAucGFnZS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAucGFnZS1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJTFRST1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZmlsdHJvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAuZmlsdHJvcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuYnRuLWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0cm9zLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLmZpbHRyby1pdGVtIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRMODwo1TVElDQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuc3RhdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG5cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgLnN0YXQtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRBQkxBIERFIERFTlVOQ0lBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50YWJsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLnRhYmxlLXRpdGxlIHtcbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC50YWJsZS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgJi50ZXh0LWNlbnRlciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkge1xuICAgICAgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgIC5jb2RpZ28tY2VsbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb25hY28nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmV4cGVkaWVudGUtY2VsbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUVIgQ0VMTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5xci1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmJ0bi1xci12aWV3IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1kYW5nZXIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuXG4gICAgLnFyLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG5cbiAgLnFyLXBsYWNlaG9sZGVyIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZJREVOQ0lBIENFTExcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZXZpZGVuY2lhLWNlbGwge1xuICAuZXZpZGVuY2lhLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgLmV2aWRlbmNpYS1jb3VudCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5ldmlkZW5jaWEtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIH1cblxuICAuc2luLWV2aWRlbmNpYSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVEFET1MgQkFER0VTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmVzdGFkby1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXG4gICYuZXN0YWRvLWluZ3Jlc2FkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5lc3RhZG8tcmV2aXNpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgfVxuXG4gICYuZXN0YWRvLWludmVzdGlnYWNpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gIH1cblxuICAmLmVzdGFkby1yZXN1ZWx0YSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICB9XG5cbiAgJi5lc3RhZG8tYXJjaGl2YWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICB9XG5cbiAgJi5lc3RhZG8tZGVzY29ub2NpZG8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIH1cbn1cblxuLy8gRXN0YWRvcyBwcm9jZXNhbGVzXG4uZXN0YWRvLXByb2Nlc2FsLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gICYuZXN0YWRvLXJlbWlzaW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAmLmVzdGFkby1zZW50ZW5jaWEtZWplY3V0YWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIH1cblxuICAmLmVzdGFkby1zZW50ZW5jaWEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgfVxuXG4gICYuZXN0YWRvLW1lZGlkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2VjdXJpdHktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWN1cml0eSk7XG4gIH1cblxuICAmLmVzdGFkby1jb21wbGV0YSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgJi5lc3RhZG8tcHJvY2VzbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5lc3RhZG8tdHJhbWl0ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FUyBERSBBQ0NJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYWN0aW9ucy1jZWxsIHtcbiAgLmFjdGlvbnMtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5idG4tYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgJi52aWV3IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRlbGV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFHSU5BQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC5wYWdpbmF0aW9uLWJ0biB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAucGFnaW5hdGlvbi1pbmZvIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFU1RBRE8gVkFDw4PCjU9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ4cHggMjRweDtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBERVRBTExFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kZXRhaWwtbW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAuZGV0YWlsLW1vZGFsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXG4gICAgLmRldGFpbC1tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIC5kZXRhaWwtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuZGV0YWlsLWNvZGlnbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUYWJzIGRlIGRldGFsbGVzXG4uZGV0YWlsLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcblxuICAudGFiLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWItaWNvbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLnRhYi1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDb250ZW5pZG8gZGUgdGFic1xuLnRhYi1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLy8gR3JpZCBkZSBkZXRhbGxlc1xuLmRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuZGV0YWlsLWl0ZW0ge1xuICAgIC5kZXRhaWwtbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi8vIEV2aWRlbmNpYSBlbiBkZXRhbGxlc1xuLmV2aWRlbmNpYS1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuZXZpZGVuY2lhLWl0ZW0tZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS1pY29uLWRldGFpbCB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLm5vLWV2aWRlbmNpYSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGT1JNVUxBUklPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgLmRhcmstdGhlbWUgJiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAucmVxdWlyZWQge1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0LWZvY3VzKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLWlucHV0LWZvY3VzLXNoYWRvdyk7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgREUgQ09ORklSTUFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmNvbmZpcm0tbW9kYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuXG4gIC5jb25maXJtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1ib2R5IHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmNvbmZpcm0taWNvbiB7XG4gICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICYuY29uZmlybS13YXJuaW5nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgR0xPQkFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIC5idG4taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMT0FESU5HIFNQSU5ORVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubG9hZGluZy1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcblxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZGVudW5jaWEtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdGF0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZm9ybS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmRldGFpbC10YWJzIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcblxuICAgIC50YWItYnRuIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNDUk9MTEJBUiBQRVJTT05BTElaQURBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLnRhYi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcixcbi5kZXRhaWwtbW9kYWwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5tb2RhbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbi50YWItY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXG4uZGV0YWlsLW1vZGFsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuLnRhYi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbi5kZXRhaWwtbW9kYWwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 30038:
/*!************************************************************************************!*\
  !*** ./src/app/modules/denuncias/pages/denuncias-list/denuncias-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DenunciasListComponent: () => (/* binding */ DenunciasListComponent)
/* harmony export */ });
/* harmony import */ var C_original_SIGPAZ_justicia_paz_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 98130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-qrcode */ 12551);
/* harmony import */ var _shared_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipes/file-size.pipe */ 88140);
/* harmony import */ var _components_denuncias_table_denuncias_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/denuncias-table/denuncias-table.component */ 4626);
/* harmony import */ var _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../dashboard/components/help-support/help-support.component */ 7174);
/* harmony import */ var _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../layouts/menu/menu.component */ 15980);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../layouts/footer/footer.component */ 17856);
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../layouts/header/header.component */ 50468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 36124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 83305);
/* harmony import */ var _services_denuncia_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../services/denuncia.service */ 45657);
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../services/catalogo.service */ 65466);
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../services/persona.service */ 5378);
/* harmony import */ var _core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../core/services/notification/notification.service */ 97407);
/* harmony import */ var _services_denuncia_facade_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../services/denuncia-facade.service */ 84461);
/* harmony import */ var _shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/features/home/services/theme.service */ 99535);
/* harmony import */ var _core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./../../../../core/services/module-loader.service */ 37780);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../core/services/loading.service */ 98660);
/* harmony import */ var _services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../services/remision-conciliacion.service */ 52768);
/* harmony import */ var _services_medida_cautelar_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../services/medida-cautelar.service */ 34804);
/* harmony import */ var _services_sentencia_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../services/sentencia.service */ 74950);































const _c0 = () => [];
function DenunciasListComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function DenunciasListComponent_div_4_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 59)(1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 61)(4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const result_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](result_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](result_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](result_r4.description);
  }
}
function DenunciasListComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_4_div_11_div_1_Template, 8, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
  }
}
function DenunciasListComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" No se encontraron resultados para \"", ctx_r1.searchQuery, "\" ");
  }
}
function DenunciasListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 47)(3, "div", 48)(4, "div", 49)(5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("keyup.enter", function DenunciasListComponent_div_4_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.performSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, DenunciasListComponent_div_4_button_8_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.closeSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, DenunciasListComponent_div_4_div_11_Template, 2, 1, "div", 54)(12, DenunciasListComponent_div_4_div_12_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@slideDown", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
  }
}
function DenunciasListComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Asistente SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 73)(7, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.minimizeToBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\uD83D\uDDD5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Minimizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onToggleHelpSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
}
function DenunciasListComponent_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "app-help-support");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " \u00A1Minimizado! Click para restaurar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function DenunciasListComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.restoreFromBubble());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 80)(2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "SIGPAZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_div_4_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.closeBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, DenunciasListComponent_div_5_div_4_div_9_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("pulsing", ctx_r1.isMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.showMinimizeNotification);
  }
}
function DenunciasListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.handleOverlayClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, DenunciasListComponent_div_5_div_2_Template, 17, 0, "div", 67)(3, DenunciasListComponent_div_5_div_3_Template, 3, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_5_div_4_Template, 10, 3, "div", 69);
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
function DenunciasListComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngValue", estado_r8.estado_denuncia_id || estado_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", estado_r8.nombre, " ");
  }
}
function DenunciasListComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Total Denuncias");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 88)(7, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "Ingresadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 88)(12, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "En Revisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 88)(17, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "Resueltas");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.totalItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.denunciasNuevas);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.denunciasEnRevision);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.denunciasResueltas);
  }
}
function DenunciasListComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "app-denuncias-table", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("pageChange", function DenunciasListComponent_ng_container_58_Template_app_denuncias_table_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPageChangeFacade($event));
    })("view", function DenunciasListComponent_ng_container_58_Template_app_denuncias_table_view_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onViewFromTable($event));
    })("edit", function DenunciasListComponent_ng_container_58_Template_app_denuncias_table_edit_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onEditFromTable($event));
    })("remove", function DenunciasListComponent_ng_container_58_Template_app_denuncias_table_remove_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onRemoveFromTable($event));
    })("viewQr", function DenunciasListComponent_ng_container_58_Template_app_denuncias_table_viewQr_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onViewQrFromTable($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const pag_r10 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("dark-theme", ctx_r1.isDarkTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("denuncias", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 12, ctx_r1.denuncias$) || _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](16, _c0))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 14, ctx_r1.loading$) || false)("page", pag_r10.page)("perPage", pag_r10.perPage)("total", pag_r10.total)("personasNombreCache", ctx_r1.personasNombreCache)("remisiones", ctx_r1.remisiones)("conciliaciones", ctx_r1.conciliaciones)("medidas", ctx_r1.medidas)("sentencias", ctx_r1.sentencias);
  }
}
function DenunciasListComponent_div_60_div_32_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 161);
  }
  if (rf & 2) {
    const inv_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", "data:image/jpeg;base64," + inv_r13.foto, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function DenunciasListComponent_div_60_div_32_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inv_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", (inv_r13.nombre == null ? null : inv_r13.nombre.charAt(0)) || "?", " ");
  }
}
function DenunciasListComponent_div_60_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 163)(1, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const inv_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", "rol-" + inv_r13.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", inv_r13.rol, " ");
  }
}
function DenunciasListComponent_div_60_div_32_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 165)(1, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u26A0\uFE0F Sin rol asignado");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_60_div_32_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_32_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r14);
      const inv_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.abrirModalAsignarRol(inv_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83C\uDFAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_60_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 150)(1, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, DenunciasListComponent_div_60_div_32_img_2_Template, 1, 1, "img", 152)(3, DenunciasListComponent_div_60_div_32_span_3_Template, 2, 1, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 154)(5, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, DenunciasListComponent_div_60_div_32_div_7_Template, 3, 2, "div", 156)(8, DenunciasListComponent_div_60_div_32_div_8_Template, 3, 0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, DenunciasListComponent_div_60_div_32_button_10_Template, 3, 0, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_32_Template_button_click_11_listener() {
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r12).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerInvolucradoTemp(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "\uD83D\uDDD1\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const inv_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", inv_r13.foto);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !inv_r13.foto);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](inv_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", inv_r13.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !inv_r13.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !inv_r13.rol);
  }
}
function DenunciasListComponent_div_60_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngValue", tipo_r16.tipo_conflicto_id || tipo_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", tipo_r16.nombre, " ");
  }
}
function DenunciasListComponent_div_60_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 168)(1, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("load", function DenunciasListComponent_div_60_div_54_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onQRLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 170)(3, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " \u2705 QR Generado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "small", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r1.denunciaFormData.codigo_qr_cifrado, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.denunciaFormData.codigo_externo || "Sin c\u00F3digo");
  }
}
function DenunciasListComponent_div_60_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "qr-code", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 170)(3, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " \u23F3 Generando QR... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r1.denunciaFormData.qrData || "Generando...")("size", 150)("errorCorrectionLevel", "M");
  }
}
function DenunciasListComponent_div_60_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 176)(1, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "El c\u00F3digo QR se generar\u00E1 al hacer clic en el bot\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_56_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.generarCodigoQRDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\uD83D\uDCF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("spinning", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.generandoQR ? "Generando..." : "Generar C\u00F3digo QR", " ");
  }
}
function DenunciasListComponent_div_60_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "El c\u00F3digo QR se genera autom\u00E1ticamente y no se puede modificar despu\u00E9s de guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}
function DenunciasListComponent_div_60_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "QR \u00FAnico generado - No puede modificarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "small", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "Este c\u00F3digo QR es permanente y no editable");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_60_option_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const estado_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngValue", estado_r19.estado_denuncia_id || estado_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", estado_r19.nombre, " ");
  }
}
function DenunciasListComponent_div_60_span_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.archivosSubidos.documentos.length, " archivo(s) ");
  }
}
function DenunciasListComponent_div_60_div_98_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 187)(1, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_98_div_1_Template_button_click_8_listener() {
      const i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r21).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerDocumento(i_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](doc_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 2, doc_r23.size));
  }
}
function DenunciasListComponent_div_60_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_60_div_98_div_1_Template, 11, 4, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.archivosSubidos.documentos);
  }
}
function DenunciasListComponent_div_60_span_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.archivosSubidos.fotos.length, " foto(s) ");
  }
}
function DenunciasListComponent_div_60_div_115_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "img", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_115_div_1_Template_button_click_2_listener() {
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r25).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerFoto(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const foto_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", foto_r27.preview, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](foto_r27.name);
  }
}
function DenunciasListComponent_div_60_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_60_div_115_div_1_Template, 7, 2, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.archivosSubidos.fotos);
  }
}
function DenunciasListComponent_div_60_span_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.archivosSubidos.videos.length, " video(s) ");
  }
}
function DenunciasListComponent_div_60_div_132_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 187)(1, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83C\uDFA5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_132_div_1_Template_button_click_8_listener() {
      const i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r29).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerVideo(i_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const video_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](video_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 2, video_r31.size));
  }
}
function DenunciasListComponent_div_60_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_60_div_132_div_1_Template, 11, 4, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.archivosSubidos.videos);
  }
}
function DenunciasListComponent_div_60_span_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.archivosSubidos.audios.length, " audio(s) ");
  }
}
function DenunciasListComponent_div_60_div_149_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 187)(1, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83C\uDFB5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_div_149_div_1_Template_button_click_8_listener() {
      const i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r33).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerAudio(i_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const audio_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](audio_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 2, audio_r35.size));
  }
}
function DenunciasListComponent_div_60_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_60_div_149_div_1_Template, 11, 4, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.archivosSubidos.audios);
  }
}
function DenunciasListComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "h2", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 96)(9, "form", 97, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngSubmit", function DenunciasListComponent_div_60_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.isEditing ? ctx_r1.actualizarDenuncia() : ctx_r1.crearDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 98)(12, "div", 99)(13, "div", 100)(14, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, " C\u00F3digo Externo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.codigo_externo, $event) || (ctx_r1.denunciaFormData.codigo_externo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 100)(20, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, " Persona Denunciante ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 105)(25, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_input_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.abrirBusquedaPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.abrirBusquedaPersona());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, " \uD83D\uDD0D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.abrirBusquedaPersonaParaInvolucrado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](31, " Agregar Involucrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](32, DenunciasListComponent_div_60_div_32_Template, 14, 6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "div", 100)(34, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35, " Tipo de Conflicto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_select_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.tipo_conflicto_id, $event) || (ctx_r1.denunciaFormData.tipo_conflicto_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](40, "Seleccione un tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, DenunciasListComponent_div_60_option_41_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "div", 100)(43, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](44, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "textarea", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_textarea_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.descripcion, $event) || (ctx_r1.denunciaFormData.descripcion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "div", 100)(49, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](50, " C\u00F3digo QR de la Denuncia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](52, "\uD83D\uDD10 Identificador \u00FAnico");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](53, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](54, DenunciasListComponent_div_60_div_54_Template, 7, 2, "div", 117)(55, DenunciasListComponent_div_60_div_55_Template, 5, 3, "div", 118)(56, DenunciasListComponent_div_60_div_56_Template, 9, 4, "div", 119)(57, DenunciasListComponent_div_60_div_57_Template, 6, 0, "div", 120)(58, DenunciasListComponent_div_60_div_58_Template, 8, 0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "div", 99)(60, "div", 100)(61, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](62, " N\u00FAmero de Expediente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_input_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.numero_expediente, $event) || (ctx_r1.denunciaFormData.numero_expediente = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](64, "div", 100)(65, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](66, " Fecha de Ingreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](67, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](68, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_input_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.fecha_ingreso, $event) || (ctx_r1.denunciaFormData.fecha_ingreso = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](70, "div", 100)(71, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](72, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](73, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](74, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](75, "select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_select_ngModelChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.estado_denuncia_id, $event) || (ctx_r1.denunciaFormData.estado_denuncia_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](76, DenunciasListComponent_div_60_option_76_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](77, "div", 100)(78, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](79, "Evidencia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](80, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](81, "(Archivos permitidos: im\u00E1genes, PDF, videos, audio)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](82, "div", 128)(83, "div", 129)(84, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](85, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](86, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](87, "Documentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](88, DenunciasListComponent_div_60_span_88_Template, 2, 1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](89, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_div_click_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const fileInputDocumentos_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](91);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](fileInputDocumentos_r20.click());
    })("dragover", function DenunciasListComponent_div_60_Template_div_dragover_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDragOver($event));
    })("drop", function DenunciasListComponent_div_60_Template_div_drop_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDropDocumentos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](90, "input", 134, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function DenunciasListComponent_div_60_Template_input_change_90_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onFileSelectedDocumentos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](92, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](93, "\uD83D\uDCCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](94, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](95, "Haga clic o arrastre documentos aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](96, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](97, "PDF, Word, Excel, TXT (Max. 10MB c/u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](98, DenunciasListComponent_div_60_div_98_Template, 2, 1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](99, "div", 128)(100, "div", 129)(101, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](102, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](103, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](104, "Fotos");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](105, DenunciasListComponent_div_60_span_105_Template, 2, 1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](106, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_div_click_106_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const fileInputFotos_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](108);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](fileInputFotos_r24.click());
    })("dragover", function DenunciasListComponent_div_60_Template_div_dragover_106_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDragOver($event));
    })("drop", function DenunciasListComponent_div_60_Template_div_drop_106_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDropFotos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](107, "input", 139, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function DenunciasListComponent_div_60_Template_input_change_107_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onFileSelectedFotos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](109, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](110, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](111, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](112, "Haga clic o arrastre im\u00E1genes aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](113, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](114, "JPG, PNG, GIF (Max. 5MB c/u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](115, DenunciasListComponent_div_60_div_115_Template, 2, 1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](116, "div", 128)(117, "div", 129)(118, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](119, "\uD83C\uDFA5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](120, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](121, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](122, DenunciasListComponent_div_60_span_122_Template, 2, 1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](123, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_div_click_123_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const fileInputVideos_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](125);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](fileInputVideos_r28.click());
    })("dragover", function DenunciasListComponent_div_60_Template_div_dragover_123_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDragOver($event));
    })("drop", function DenunciasListComponent_div_60_Template_div_drop_123_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDropVideos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](124, "input", 141, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function DenunciasListComponent_div_60_Template_input_change_124_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onFileSelectedVideos($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](126, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](127, "\uD83C\uDFA5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](128, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](129, "Haga clic o arrastre videos aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](130, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](131, "MP4, AVI, MOV (Max. 50MB c/u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](132, DenunciasListComponent_div_60_div_132_Template, 2, 1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](133, "div", 128)(134, "div", 129)(135, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](136, "\uD83C\uDFB5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](137, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](138, "Audios");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](139, DenunciasListComponent_div_60_span_139_Template, 2, 1, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](140, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_div_click_140_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const fileInputAudios_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](142);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](fileInputAudios_r32.click());
    })("dragover", function DenunciasListComponent_div_60_Template_div_dragover_140_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDragOver($event));
    })("drop", function DenunciasListComponent_div_60_Template_div_drop_140_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onDropAudios($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](141, "input", 142, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function DenunciasListComponent_div_60_Template_input_change_141_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onFileSelectedAudios($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](143, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](144, "\uD83C\uDFB5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](145, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](146, "Haga clic o arrastre audios aqu\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](147, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](148, "MP3, WAV, OGG (Max. 20MB c/u)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](149, DenunciasListComponent_div_60_div_149_Template, 2, 1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](150, "div", 100)(151, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](152, " \uD83D\uDC65 Involucrados Adicionales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](153, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](154, "(Testigos, v\u00EDctimas, acusados, etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](155, "div", 100)(156, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](157, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](158, "textarea", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_60_Template_textarea_ngModelChange_158_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.denunciaFormData.observaciones, $event) || (ctx_r1.denunciaFormData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](159, "div", 145)(160, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](161, " Al crear la denuncia, usted acepta nuestras pol\u00EDticas de tratamiento de datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](162, "div", 147)(163, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_60_Template_button_click_163_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](164, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](165, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditing ? "\u270F\uFE0F Editar Denuncia" : "\u2795 Crear Nueva Denuncia", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.codigo_externo);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r1.getPersonaNombre(ctx_r1.denunciaFormData.persona_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.involucradosTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.tipo_conflicto_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.tiposConflicto);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.denunciaFormData.codigo_qr_cifrado && !ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.denunciaFormData.codigo_qr_cifrado && !ctx_r1.generandoQR && !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.isEditing && !ctx_r1.denunciaFormData.codigo_qr_cifrado && !ctx_r1.generandoQR);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.isEditing && ctx_r1.denunciaFormData.codigo_qr_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.numero_expediente);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.fecha_ingreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.estado_denuncia_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.estadosDenuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.documentos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.documentos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.fotos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.fotos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.videos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.videos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.audios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.archivosSubidos.audios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.denunciaFormData.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r1.isDenunciaFormValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.isEditing ? "Actualizar" : "Crear", " Denuncia ");
  }
}
function DenunciasListComponent_div_61_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.involucrados.length);
  }
}
function DenunciasListComponent_div_61_div_27_div_41_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 225)(1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 227)(6, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_41_div_4_Template_button_click_6_listener() {
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r37);
      const doc_r39 = ctx_r37.$implicit;
      const i_r40 = ctx_r37.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.verEvidencia("documento", doc_r39, i_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, " \uD83D\uDC41\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_41_div_4_Template_button_click_8_listener() {
      const doc_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r37).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.descargarEvidenciaItem(doc_r39, "documento"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, " \u2B07\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](doc_r39.name);
  }
}
function DenunciasListComponent_div_61_div_27_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 222)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_61_div_27_div_41_div_4_Template, 10, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\uD83D\uDCC4 Documentos (", ctx_r1.evidencias.documentos.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.evidencias.documentos);
  }
}
function DenunciasListComponent_div_61_div_27_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_42_div_4_Template_div_click_0_listener() {
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41);
      const foto_r43 = ctx_r41.$implicit;
      const i_r44 = ctx_r41.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.verEvidencia("foto", foto_r43, i_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "img", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("error", function DenunciasListComponent_div_61_div_27_div_42_div_4_Template_img_error_1_listener() {
      const foto_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r41).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](foto_r43.url = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 234)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "\uD83D\uDC41\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const foto_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", foto_r43.url, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"])("alt", foto_r43.name);
  }
}
function DenunciasListComponent_div_61_div_27_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 222)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_61_div_27_div_42_div_4_Template, 5, 2, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\uD83D\uDCF7 Fotos (", ctx_r1.evidencias.fotos.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.evidencias.fotos);
  }
}
function DenunciasListComponent_div_61_div_27_div_43_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 225)(1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83C\uDFAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 227)(6, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_43_div_4_Template_button_click_6_listener() {
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r45);
      const video_r47 = ctx_r45.$implicit;
      const i_r48 = ctx_r45.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.verEvidencia("video", video_r47, i_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, " \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_43_div_4_Template_button_click_8_listener() {
      const video_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r45).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.descargarEvidenciaItem(video_r47, "video"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, " \u2B07\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const video_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](video_r47.name);
  }
}
function DenunciasListComponent_div_61_div_27_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 222)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_61_div_27_div_43_div_4_Template, 10, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\uD83C\uDFA5 Videos (", ctx_r1.evidencias.videos.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.evidencias.videos);
  }
}
function DenunciasListComponent_div_61_div_27_div_44_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 225)(1, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83C\uDFB5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 227)(6, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_44_div_4_Template_button_click_6_listener() {
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49);
      const audio_r51 = ctx_r49.$implicit;
      const i_r52 = ctx_r49.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.verEvidencia("audio", audio_r51, i_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, " \u25B6\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_27_div_44_div_4_Template_button_click_8_listener() {
      const audio_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r49).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.descargarEvidenciaItem(audio_r51, "audio"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, " \u2B07\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const audio_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](audio_r51.name);
  }
}
function DenunciasListComponent_div_61_div_27_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 222)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_61_div_27_div_44_div_4_Template, 10, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("\uD83C\uDFB5 Audios (", ctx_r1.evidencias.audios.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.evidencias.audios);
  }
}
function DenunciasListComponent_div_61_div_27_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " Sin evidencia registrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function DenunciasListComponent_div_61_div_27_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 216)(1, "h4", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83D\uDCCC Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "p", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.selectedDenuncia.observaciones);
  }
}
function DenunciasListComponent_div_61_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 210)(1, "div", 211)(2, "div", 212)(3, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "C\u00F3digo Externo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 212)(8, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "Expediente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 212)(13, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "Denunciante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "div", 212)(18, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "Tipo de Conflicto:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 212)(23, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](24, "Estado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "div", 212)(28, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](29, "Fecha Ingreso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "div", 216)(34, "h4", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35, "\uD83D\uDCDD Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "p", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "div", 216)(39, "h4", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](40, "\uD83D\uDCCB Evidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, DenunciasListComponent_div_61_div_27_div_41_Template, 5, 2, "div", 219)(42, DenunciasListComponent_div_61_div_27_div_42_Template, 5, 2, "div", 219)(43, DenunciasListComponent_div_61_div_27_div_43_Template, 5, 2, "div", 219)(44, DenunciasListComponent_div_61_div_27_div_44_Template, 5, 2, "div", 219)(45, DenunciasListComponent_div_61_div_27_div_45_Template, 2, 0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](46, DenunciasListComponent_div_61_div_27_div_46_Template, 5, 1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.selectedDenuncia.codigo_externo);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.selectedDenuncia.numero_expediente || "Sin asignar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.getPersonaNombre(ctx_r1.selectedDenuncia.persona_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.getTipoConflictoNombre(ctx_r1.selectedDenuncia.tipo_conflicto_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", ctx_r1.getEstadoProcesalClass(ctx_r1.getEstadoProcesal(ctx_r1.selectedDenuncia)));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.getEstadoProcesal(ctx_r1.selectedDenuncia), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](32, 14, ctx_r1.selectedDenuncia.fecha_ingreso, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.selectedDenuncia.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.evidencias.documentos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.evidencias.fotos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.evidencias.videos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.evidencias.audios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.tieneEvidencia(ctx_r1.selectedDenuncia));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.selectedDenuncia.observaciones);
  }
}
function DenunciasListComponent_div_61_div_28_div_1_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inv_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" (", ctx_r1.getDocumentoInvolucrado(inv_r53), ") ");
  }
}
function DenunciasListComponent_div_61_div_28_div_1_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inv_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" \uD83D\uDCDD ", inv_r53.observaciones, " ");
  }
}
function DenunciasListComponent_div_61_div_28_div_1_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inv_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" \uD83D\uDD50 ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, inv_r53.fecha_creacion, "dd/MM/yyyy HH:mm"), " ");
  }
}
function DenunciasListComponent_div_61_div_28_div_1_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_div_28_div_1_div_1_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54);
      const inv_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.removerInvolucrado(inv_r53.involucrado_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " \uD83D\uDDD1\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function DenunciasListComponent_div_61_div_28_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 241)(1, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 243)(4, "div", 244)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, DenunciasListComponent_div_61_div_28_div_1_div_1_span_7_Template, 2, 1, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 246)(9, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, DenunciasListComponent_div_61_div_28_div_1_div_1_div_11_Template, 2, 1, "div", 247)(12, DenunciasListComponent_div_61_div_28_div_1_div_1_div_12_Template, 3, 4, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, DenunciasListComponent_div_61_div_28_div_1_div_1_button_13_Template, 2, 0, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inv_r53 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.getInicialInvolucrado(inv_r53), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.getNombreInvolucrado(inv_r53));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.getDocumentoInvolucrado(inv_r53));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", "rol-" + inv_r53.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", inv_r53.rol_display || inv_r53.rol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", inv_r53.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", inv_r53.fecha_creacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", inv_r53.persona_id !== (ctx_r1.selectedDenuncia == null ? null : ctx_r1.selectedDenuncia.persona_id));
  }
}
function DenunciasListComponent_div_61_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_61_div_28_div_1_div_1_Template, 14, 8, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.involucrados);
  }
}
function DenunciasListComponent_div_61_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 254)(1, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "No hay personas involucradas adicionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "El denunciante principal no aparece en esta lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_61_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_61_div_28_div_1_Template, 2, 1, "div", 237)(2, DenunciasListComponent_div_61_div_28_div_2_Template, 7, 0, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.involucrados.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.involucrados.length === 0);
  }
}
function DenunciasListComponent_div_61_div_29_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 267)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("Cambios: ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, item_r55.cambios));
  }
}
function DenunciasListComponent_div_61_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 258)(1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 260)(4, "div", 261)(5, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 264)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, DenunciasListComponent_div_61_div_29_div_2_div_12_Template, 4, 3, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 266)(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵstyleProp"]("background-color", item_r55.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r55.icono);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r55.tipo_cambio_display);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r55.fecha_cambio_humana);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r55.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r55.cambios);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("Por: ", item_r55.usuario_nombre);
  }
}
function DenunciasListComponent_div_61_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 210)(1, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, DenunciasListComponent_div_61_div_29_div_2_Template, 16, 8, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.historial);
  }
}
function DenunciasListComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 198)(2, "div", 199)(3, "h2", 200)(4, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, " Detalles de Denuncia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarDetailModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 203)(13, "div", 204)(14, "button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.activeTab = "info");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, " Informaci\u00F3n General ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.activeTab = "involucrados");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, " Involucrados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, DenunciasListComponent_div_61_span_22_Template, 2, 1, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_61_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.activeTab = "historial");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "\uD83D\uDCCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, " Historial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, DenunciasListComponent_div_61_div_27_Template, 47, 17, "div", 208)(28, DenunciasListComponent_div_61_div_28_Template, 3, 2, "div", 208)(29, DenunciasListComponent_div_61_div_29_Template, 3, 1, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.selectedDenuncia == null ? null : ctx_r1.selectedDenuncia.codigo_externo);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("active", ctx_r1.activeTab === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("active", ctx_r1.activeTab === "involucrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.involucrados.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("active", ctx_r1.activeTab === "historial");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "info" && ctx_r1.selectedDenuncia);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "involucrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "historial");
  }
}
function DenunciasListComponent_div_62_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 275)(1, "div", 276)(2, "span", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Asignando rol para:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 279)(7, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.getPersonaNombre(ctx_r1.involucradoFormData.persona_id), " ");
  }
}
function DenunciasListComponent_div_62_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "form", null, 5)(2, "div", 100)(3, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " Rol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, "(\u00BFQu\u00E9 papel cumple esta persona?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "select", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_62_form_12_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.involucradoFormData.rol, $event) || (ctx_r1.involucradoFormData.rol = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "option", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Seleccione un rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "option", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "\uD83D\uDC64 V\u00EDctima");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "option", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "\uD83D\uDC41\uFE0F Testigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "option", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, "\u2696\uFE0F Acusado");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "option", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "\uD83D\uDCCB Representante Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "option", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "\uD83D\uDCBC Asesor");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "option", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23, "\u2753 Otro");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 100)(25, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, "(opcional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "textarea", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_62_form_12_Template_textarea_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r57);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.involucradoFormData.observaciones, $event) || (ctx_r1.involucradoFormData.observaciones = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "div", 291)(31, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "\u2139\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "span", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34, "La persona podr\u00E1 tener m\u00FAltiples roles en diferentes denuncias");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.involucradoFormData.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.involucradoFormData.observaciones);
  }
}
function DenunciasListComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 268)(2, "div", 269)(3, "h2", 71)(4, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "\uD83D\uDC65");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, " Asignar Rol a Involucrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_62_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarInvolucradoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, DenunciasListComponent_div_62_div_11_Template, 9, 1, "div", 272)(12, DenunciasListComponent_div_62_form_12_Template, 35, 2, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 147)(14, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_62_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarInvolucradoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_62_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r56);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.selectedDenuncia ? ctx_r1.agregarInvolucradoDesdeDetalles() : ctx_r1.asignarRolATemporal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.involucradoFormData.persona_id > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.involucradoFormData.persona_id > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", !ctx_r1.involucradoFormData.persona_id || !ctx_r1.involucradoFormData.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedDenuncia ? "Agregar a la denuncia" : "Confirmar Rol", " ");
  }
}
function DenunciasListComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 268)(2, "div", 94)(3, "h2", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "\uD83D\uDDD1\uFE0F Confirmar Eliminaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_63_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 96)(9, "div", 294)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "\u00BFEst\u00E1 seguro que desea eliminar esta denuncia?");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "p", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "Esta acci\u00F3n no se puede deshacer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 147)(15, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_63_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarDeleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_63_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r58);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.eliminarDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function DenunciasListComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 268)(2, "div", 94)(3, "h2", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "\uD83D\uDC64 Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_64_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarRemoveInvolucradoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 96)(9, "div", 294)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "\u00BFEst\u00E1 seguro que desea remover este involucrado?");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 147)(13, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_64_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarRemoveInvolucradoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_64_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r59);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.confirmarRemoverInvolucrado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, " Remover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
  }
}
function DenunciasListComponent_div_65_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_65_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r61);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      ctx_r1.personaSearchTerm = "";
      ctx_r1.personasFiltradas = [];
      ctx_r1.busquedaRealizada = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.mostrarMensajeNoResultados = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function DenunciasListComponent_div_65_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 306)(1, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Buscando personas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}
function DenunciasListComponent_div_65_div_22_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "img", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("error", function DenunciasListComponent_div_65_div_22_div_1_img_2_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r64);
      const persona_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](persona_r63.foto_cifrada = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", "data:image/jpeg;base64," + persona_r63.foto_cifrada, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function DenunciasListComponent_div_65_div_22_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", persona_r63.nombres == null ? null : persona_r63.nombres.charAt(0), "", persona_r63.apellidos == null ? null : persona_r63.apellidos.charAt(0), " ");
  }
}
function DenunciasListComponent_div_65_div_22_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 321)(1, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "\u2713 Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_65_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_65_div_22_div_1_Template_div_click_0_listener() {
      const persona_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r62).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.seleccionarPersona(persona_r63));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, DenunciasListComponent_div_65_div_22_div_1_img_2_Template, 1, 1, "img", 313)(3, DenunciasListComponent_div_65_div_22_div_1_span_3_Template, 2, 2, "span", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 315)(5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 316)(8, "span", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, DenunciasListComponent_div_65_div_22_div_1_div_11_Template, 3, 0, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const persona_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", persona_r63.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !persona_r63.foto_cifrada);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", persona_r63.nombres, " ", persona_r63.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", persona_r63.numero_documento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", persona_r63.activo);
  }
}
function DenunciasListComponent_div_65_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, DenunciasListComponent_div_65_div_22_div_1_Template, 12, 6, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r1.personasFiltradas);
  }
}
function DenunciasListComponent_div_65_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 306)(1, "div", 323)(2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "No se encontraron personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, " No hay resultados para \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "div", 327)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, "\uD83D\uDCA1 Sugerencias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "ul")(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Verifique que el nombre o documento est\u00E9 bien escrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18, "Pruebe con menos caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "La persona podr\u00EDa no estar registrada en el sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r1.personaSearchTerm);
  }
}
function DenunciasListComponent_div_65_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 306)(1, "div", 328)(2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, " Escriba al menos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "2 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, " para buscar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function DenunciasListComponent_div_65_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 306)(1, "div", 329)(2, "div", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Comience a escribir para buscar personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
}
function DenunciasListComponent_div_65_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.personasFiltradas.length, " resultado(s) encontrado(s) ");
  }
}
function DenunciasListComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 92)(1, "div", 268)(2, "div", 297)(3, "h2", 71)(4, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, " Buscar Persona ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_65_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarPersonaSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 96)(11, "div", 100)(12, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](13, " Buscar por nombre o documento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "(m\u00EDnimo 2 caracteres)");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](17, "span", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "input", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_div_65_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx_r1.personaSearchTerm, $event) || (ctx_r1.personaSearchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("ngModelChange", function DenunciasListComponent_div_65_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.onPersonaSearchChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, DenunciasListComponent_div_65_button_19_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, DenunciasListComponent_div_65_div_21_Template, 5, 0, "div", 302)(22, DenunciasListComponent_div_65_div_22_Template, 2, 1, "div", 303)(23, DenunciasListComponent_div_65_div_23_Template, 21, 1, "div", 302)(24, DenunciasListComponent_div_65_div_24_Template, 8, 0, "div", 302)(25, DenunciasListComponent_div_65_div_25_Template, 6, 0, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "div", 304)(27, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_65_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r60);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarPersonaSearchModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](29, DenunciasListComponent_div_65_span_29_Template, 2, 1, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.searchingPersonas);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && ctx_r1.personasFiltradas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && ctx_r1.mostrarMensajeNoResultados && ctx_r1.personaSearchTerm.length >= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && ctx_r1.personaSearchTerm.length > 0 && ctx_r1.personaSearchTerm.length < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.searchingPersonas && !ctx_r1.personaSearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.personasFiltradas.length > 0);
  }
}
function DenunciasListComponent_div_66_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "img", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("error", function DenunciasListComponent_div_66_img_8_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.qrSeleccionado.codigo_qr_cifrado = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r1.qrSeleccionado.codigo_qr_cifrado, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function DenunciasListComponent_div_66_qr_code_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "qr-code", 346);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", (ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.codigo_externo) || "DENUNCIA")("size", 250)("errorCorrectionLevel", "M");
  }
}
function DenunciasListComponent_div_66_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r1.qrSeleccionado.info2, " ");
  }
}
function DenunciasListComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_66_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarQRModalDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_66_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 335)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "p", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, DenunciasListComponent_div_66_img_8_Template, 1, 1, "img", 338)(9, DenunciasListComponent_div_66_qr_code_9_Template, 1, 3, "qr-code", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 340)(11, "div", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, DenunciasListComponent_div_66_div_13_Template, 2, 1, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 343)(15, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_66_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarQRModalDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_66_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.descargarQRDenuncia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "\u2B07\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, " Descargar QR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"]((ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.titulo) || "C\u00F3digo QR");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"]((ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.subtitulo) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.codigo_qr_cifrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !(ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.codigo_qr_cifrado));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"]((ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.info1) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.qrSeleccionado == null ? null : ctx_r1.qrSeleccionado.info2);
  }
}
function DenunciasListComponent_div_67_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "img", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.preview) || (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.base64) || (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.url), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"])("alt", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.name) || "Imagen");
  }
}
function DenunciasListComponent_div_67_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "iframe", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.base64) || (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.url), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeResourceUrl"]);
  }
}
function DenunciasListComponent_div_67_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "video", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "source", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Tu navegador no soporta reproducci\u00F3n de video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.base64) || (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.url), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function DenunciasListComponent_div_67_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "audio", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "source", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, " Tu navegador no soporta reproducci\u00F3n de audio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.base64) || (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.url), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function DenunciasListComponent_div_67_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "pre", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"]((ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.contenido) || "Vista previa no disponible");
  }
}
function DenunciasListComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_67_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarEvidenciaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_67_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 350)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_67_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarEvidenciaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, DenunciasListComponent_div_67_div_9_Template, 2, 2, "div", 352)(10, DenunciasListComponent_div_67_div_10_Template, 2, 1, "div", 40)(11, DenunciasListComponent_div_67_div_11_Template, 4, 1, "div", 40)(12, DenunciasListComponent_div_67_div_12_Template, 4, 1, "div", 40)(13, DenunciasListComponent_div_67_div_13_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 353)(15, "button", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_67_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.cerrarEvidenciaModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_div_67_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r1.descargarEvidencia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19, "\u2B07\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, " Descargar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("Visualizar ", ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo) === "foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo) === "documento" && (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.name == null ? null : ctx_r1.evidenciaSeleccionada.archivo.name.includes(".pdf")));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo) === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo) === "audio");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.tipo) === "documento" && !(ctx_r1.evidenciaSeleccionada == null ? null : ctx_r1.evidenciaSeleccionada.archivo == null ? null : ctx_r1.evidenciaSeleccionada.archivo.name == null ? null : ctx_r1.evidenciaSeleccionada.archivo.name.includes(".pdf")));
  }
}
class DenunciasListComponent {
  router;
  denunciaService;
  catalogoService;
  personaService;
  notificationService;
  denunciasFacade;
  cdr;
  themeService;
  moduleLoader;
  loadingService;
  remisionConciliacionService;
  medidaService;
  sentenciaService;
  moduleName = 'Gestión de Denuncias';
  dataLoaded = false;
  isMarkedReady = false;
  viewCheckedCount = 0;
  denuncias$;
  loading$;
  pagination$;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  personaSearchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  personasPendientes = new Set(); // Cola de personas pendientes
  cargandoPersona = false;
  // Búsqueda
  searchQuery = '';
  searchResults = []; // Para el modal de búsqueda rápida
  // Estado de carga
  loading = false;
  loadingCatalogs = false;
  searchingPersonas = false;
  // Datos
  denuncias = [];
  tiposConflicto = [];
  estadosDenuncia = [];
  personas = [];
  personasFiltradas = [];
  personaSearchTerm = '';
  personasNombreCache = {}; // Caché de nombres
  contextoSeleccion = null;
  remisiones = [];
  conciliaciones = [];
  medidas = [];
  sentencias = [];
  showEvidenciaModal = false;
  evidenciaSeleccionada = null;
  evidencias = {
    documentos: [],
    fotos: [],
    videos: [],
    audios: []
  };
  // Paginación
  totalItems = 0;
  paginaActual = 1;
  itemsPorPagina = 10;
  // Filtros
  filtro = {
    codigo_externo: '',
    numero_expediente: '',
    estado_denuncia_id: undefined,
    tipo_conflicto_id: undefined,
    persona_id: undefined,
    fecha_inicio: '',
    fecha_fin: '',
    search: '',
    page: 1,
    per_page: 10
  };
  // Variables de UI
  isSidebarCollapsed = false;
  isDarkTheme = false;
  showMinimizeNotification = false;
  minimizing = false;
  showHelpSupport = false;
  isMinimized = false;
  isSearchOpen = false;
  isNotificationsOpen = false;
  isUserMenuOpen = false;
  currentTheme = 'light';
  // Modales
  showModal = false;
  showDeleteModal = false;
  showDetailModal = false;
  showInvolucradoModal = false;
  esParaInvolucrado = false;
  showRemoveInvolucradoModal = false;
  showHistorialModal = false;
  showPersonaSearchModal = false;
  personasFotoCache = {};
  involucradosTemp = [];
  generandoQR = false;
  showQRModal = false;
  qrSeleccionado = null;
  qrCargado = false;
  qrTiempoGeneracion = 0;
  qrInicioGeneracion = 0;
  qrError = false;
  tiposConflictoCache = {};
  estadosDenunciaCache = {};
  mostrarMensajeNoResultados = false;
  busquedaRealizada = false;
  // Datos para modales
  modalTitle = 'Nueva Denuncia';
  isEditing = false;
  currentDenunciaId = null;
  selectedDenuncia = null;
  involucrados = [];
  historial = [];
  involucradoToRemove = null;
  activeTab = 'info';
  // Formularios
  denunciaFormData = {
    persona_id: 0,
    fecha_ingreso: new Date().toISOString().slice(0, 16),
    tipo_conflicto_id: 0,
    descripcion: '',
    estado_denuncia_id: 1,
    numero_expediente: '',
    evidencia: {
      documentos: 0,
      fotos: 0,
      videos: 0,
      audios: 0
    },
    observaciones: '',
    involucrados: [],
    codigo_qr_cifrado: '',
    // 👈 PARA GUARDAR
    qrData: '' // 👈 PARA GENERACIÓN TEMPORAL
  };
  involucradoFormData = {
    denuncia_id: 0,
    persona_id: 0,
    rol: '',
    observaciones: ''
  };
  // Archivos de evidencia
  archivosSubidos = {
    documentos: [],
    fotos: [],
    videos: [],
    audios: []
  };
  // Notificaciones
  notifications = [];
  user = {
    name: 'Usuario',
    email: '',
    avatar: 'U'
  };
  constructor(router, denunciaService, catalogoService, personaService, notificationService, denunciasFacade, cdr, themeService, moduleLoader, loadingService, remisionConciliacionService,
  // 👈 AGREGAR
  medidaService,
  // 👈 AGREGAR
  sentenciaService //
  ) {
    this.router = router;
    this.denunciaService = denunciaService;
    this.catalogoService = catalogoService;
    this.personaService = personaService;
    this.notificationService = notificationService;
    this.denunciasFacade = denunciasFacade;
    this.cdr = cdr;
    this.themeService = themeService;
    this.moduleLoader = moduleLoader;
    this.loadingService = loadingService;
    this.remisionConciliacionService = remisionConciliacionService;
    this.medidaService = medidaService;
    this.sentenciaService = sentenciaService;
    this.denuncias$ = this.denunciasFacade.denuncias$;
    this.loading$ = this.denunciasFacade.loading$;
    this.pagination$ = this.denunciasFacade.pagination$;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.markModuleAsReady();
  }
  // ========== CARGA DE DATOS ==========
  cargarUsuario() {
    this.denunciaService.getUsuarioActual().subscribe({
      next: response => {
        if (response?.data) {
          this.user.name = response.data.nombre_completo || 'Usuario';
          this.user.email = response.data.email || '';
        }
      },
      error: error => console.error('Error cargando usuario:', error)
    });
  }
  onPersonaSearchChange(term) {
    this.personaSearchTerm = term;
    this.personaSearchSubject.next(term);
  }
  // ========== MÉTODOS DE BÚSQUEDA ==========
  setupSearch() {
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(searchTerm => {
      this.filtro.search = searchTerm;
      this.paginaActual = 1;
      this.cargarDenuncias();
      if (searchTerm.length >= 2) {
        // Búsqueda rápida para el modal
        this.searchResults = this.denuncias.filter(d => d.codigo_externo?.toLowerCase().includes(searchTerm.toLowerCase()) || d.numero_expediente?.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5).map(d => ({
          icon: '📋',
          title: d.codigo_externo,
          description: d.descripcion?.substring(0, 50) + '...'
        }));
      } else {
        this.searchResults = [];
      }
      this.cdr.detectChanges();
    });
  }
  onSearchChange(searchTerm) {
    this.searchSubject.next(searchTerm);
  }
  performSearch() {
    if (this.searchQuery.trim()) {
      this.filtro.search = this.searchQuery;
      this.paginaActual = 1;
      this.cargarDenuncias();
      this.closeSearchModal();
    }
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  // ========== MÉTODOS CRUD ==========
  crearDenuncia() {
    if (!this.validarFormularioDenuncia()) return;
    // Asignar involucrados temporales al DTO (solo los que tienen rol asignado)
    if (this.involucradosTemp && this.involucradosTemp.length > 0) {
      this.denunciaFormData.involucrados = this.involucradosTemp.filter(inv => inv.rol) // Solo los que tienen rol asignado
      .map(inv => ({
        denuncia_id: 0,
        // El backend asignará el ID correcto
        persona_id: inv.persona_id,
        rol: inv.rol,
        observaciones: inv.observaciones
      }));
    }
    console.log('📝 Enviando denuncia:', this.denunciaFormData);
    if (this.tieneArchivos()) {
      const formData = this.prepararFormDataDenuncia();
      this.denunciaService.crearDenunciaConArchivos(formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(this.handleDenunciaResponse('creada'));
    } else {
      this.denunciaService.crearDenuncia(this.denunciaFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(this.handleDenunciaResponse('creada'));
    }
  }
  actualizarDenuncia() {
    if (!this.validarFormularioDenuncia() || !this.currentDenunciaId) return;
    const dto = {
      descripcion: this.denunciaFormData.descripcion,
      evidencia: this.denunciaFormData.evidencia,
      observaciones: this.denunciaFormData.observaciones,
      numero_expediente: this.denunciaFormData.numero_expediente
    };
    this.denunciaService.actualizarDenuncia(this.currentDenunciaId, dto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(this.handleDenunciaResponse('actualizada'));
  }
  eliminarDenuncia() {
    if (!this.currentDenunciaId) return;
    this.denunciaService.eliminarDenuncia(this.currentDenunciaId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Denuncia eliminada exitosamente');
          this.cerrarDeleteModal();
          this.cargarDenuncias();
        } else {
          this.notificationService.showError(response.message || 'Error al eliminar denuncia');
        }
      },
      error: error => {
        console.error('Error:', error);
        this.notificationService.showError('Error al eliminar denuncia');
      }
    });
  }
  onPageChangeFacade(page) {
    this.denunciasFacade.setPage(page);
  }
  onViewFromTable(d) {
    this.verDetalles(d.denuncia_id);
  }
  onEditFromTable(denuncia) {
    this.abrirModalEditar(denuncia);
  }
  onRemoveFromTable(d) {
    this.abrirModalEliminar(d.denuncia_id);
  }
  onViewQrFromTable(d) {
    this.verCodigoQRDenuncia(d);
  }
  handleDenunciaResponse(accion) {
    return {
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess(`Denuncia ${accion} exitosamente`);
          this.cerrarModal();
          this.limpiarArchivos();
          this.cargarDenuncias();
        } else {
          this.notificationService.showError(response.message || `Error al ${accion} denuncia`);
        }
      },
      error: error => {
        console.error(`Error al ${accion} denuncia:`, error);
        this.notificationService.showError(error.error?.message || `Error al ${accion} denuncia`);
      }
    };
  }
  // ========== MÉTODOS DE EXPORTACIÓN ==========
  exportarExcel() {
    this.notificationService.showInfo('Función de exportación a Excel en desarrollo');
  }
  exportarPDF(id) {
    this.notificationService.showInfo(`Exportando denuncia ${id} a PDF...`);
  }
  // ========== MÉTODOS DE INVOLUCRADOS ==========
  removerInvolucrado(id) {
    this.involucradoToRemove = id;
    this.showRemoveInvolucradoModal = true;
  }
  confirmarRemoverInvolucrado() {
    if (this.involucradoToRemove) {
      this.denunciaService.eliminarInvolucrado(this.involucradoToRemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
        next: response => {
          if (response.success) {
            this.notificationService.showSuccess('Involucrado removido exitosamente');
            if (this.selectedDenuncia) {
              this.cargarInvolucrados(this.selectedDenuncia.denuncia_id);
            }
            this.cerrarRemoveInvolucradoModal();
          }
        },
        error: error => {
          console.error('Error al remover involucrado:', error);
          this.notificationService.showError(error.error?.message || 'Error al remover involucrado');
        }
      });
    }
  }
  // ========== MÉTODOS DE REPORTES ==========
  generarReporteCompleto() {
    if (this.selectedDenuncia) {
      this.denunciaService.generarReporteCompleto(this.selectedDenuncia.denuncia_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
        next: response => {
          if (response.success) {
            this.notificationService.showSuccess('Reporte generado exitosamente');
          }
        },
        error: error => {
          console.error('Error al generar reporte:', error);
          this.notificationService.showError('Error al generar reporte');
        }
      });
    }
  }
  // ========== MÉTODOS DE FILTROS ==========
  aplicarFiltros() {
    this.paginaActual = 1;
    this.cargarDenuncias();
  }
  limpiarFiltros() {
    this.filtro = {
      codigo_externo: '',
      numero_expediente: '',
      estado_denuncia_id: undefined,
      tipo_conflicto_id: undefined,
      persona_id: undefined,
      fecha_inicio: '',
      fecha_fin: '',
      search: '',
      page: 1,
      per_page: 10
    };
    this.paginaActual = 1;
    this.cargarDenuncias();
  }
  // ========== MÉTODOS DE PAGINACIÓN ==========
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
    this.cargarDenuncias();
  }
  cambiarPaginaNumero(pagina) {
    if (typeof pagina === 'number') {
      this.paginaActual = pagina;
      this.cargarDenuncias();
    }
  }
  get totalPaginas() {
    return Math.ceil(this.totalItems / this.itemsPorPagina);
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
  // ========== MÉTODOS DE MODALES ==========
  abrirModalCrear() {
    this.isEditing = false;
    this.modalTitle = 'Nueva Denuncia';
    this.resetFormDenuncia();
    this.showModal = true;
  }
  abrirModalEliminar(id) {
    this.currentDenunciaId = id;
    this.showDeleteModal = true;
  }
  cerrarModal() {
    this.showModal = false;
    this.resetFormDenuncia();
  }
  cerrarDeleteModal() {
    this.showDeleteModal = false;
    this.currentDenunciaId = null;
  }
  cerrarDetailModal() {
    this.showDetailModal = false;
    this.selectedDenuncia = null;
    this.involucrados = [];
    this.historial = [];
  }
  cerrarInvolucradoModal() {
    this.showInvolucradoModal = false;
    this.involucradoFormData = {
      denuncia_id: 0,
      persona_id: 0,
      rol: '',
      observaciones: ''
    };
  }
  cerrarRemoveInvolucradoModal() {
    this.showRemoveInvolucradoModal = false;
    this.involucradoToRemove = null;
  }
  /**
   * Abrir modal para agregar involucrado (desde detalles)
   */
  abrirModalAgregarInvolucrado() {
    if (this.selectedDenuncia) {
      this.involucradoFormData = {
        denuncia_id: this.selectedDenuncia.denuncia_id,
        persona_id: 0,
        rol: '',
        observaciones: ''
      };
      // SOLO abrir el modal de involucrado, NO el de búsqueda
      this.showInvolucradoModal = true;
      this.esParaInvolucrado = true;
    }
  }
  closeSearchModal() {
    this.isSearchOpen = false;
    this.clearSearch();
  }
  // ========== MÉTODOS DE EVIDENCIA ==========
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDropDocumentos(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.procesarArchivos(files, 'documentos');
    }
  }
  onDropFotos(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.procesarArchivos(files, 'fotos');
    }
  }
  onDropVideos(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.procesarArchivos(files, 'videos');
    }
  }
  onDropAudios(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.procesarArchivos(files, 'audios');
    }
  }
  onFileSelectedDocumentos(event) {
    const files = event.target.files;
    if (files) {
      this.procesarArchivos(files, 'documentos');
    }
  }
  onFileSelectedFotos(event) {
    const files = event.target.files;
    if (files) {
      this.procesarArchivos(files, 'fotos');
    }
  }
  onFileSelectedVideos(event) {
    const files = event.target.files;
    if (files) {
      this.procesarArchivos(files, 'videos');
    }
  }
  onFileSelectedAudios(event) {
    const files = event.target.files;
    if (files) {
      this.procesarArchivos(files, 'audios');
    }
  }
  /**
  * Ver código QR de denuncia
  */
  verCodigoQRDenuncia(denuncia) {
    console.log('🔍 Ver QR de denuncia:', denuncia);
    if (!denuncia.codigo_qr_cifrado) {
      this.notificationService.showInfo('Esta denuncia no tiene código QR');
      return;
    }
    // ✅ VERIFICAR QUE EL QR EXISTA
    console.log('📸 QR data:', denuncia.codigo_qr_cifrado.substring(0, 100));
    // Obtener nombre de la persona
    let personaNombre = 'Denuncia';
    if (denuncia.persona?.nombre_completo) {
      personaNombre = denuncia.persona.nombre_completo;
    } else if (this.personasNombreCache[denuncia.persona_id]) {
      personaNombre = this.personasNombreCache[denuncia.persona_id];
    }
    this.qrSeleccionado = {
      ...denuncia,
      codigo_qr_cifrado: denuncia.codigo_qr_cifrado,
      // ✅ ASEGURAR QUE ESTÉ
      persona: denuncia.persona || {
        nombre_completo: personaNombre
      },
      titulo: 'Código QR de Denuncia',
      subtitulo: `Código: ${denuncia.codigo_externo || 'Sin código'}`,
      info1: `Denunciante: ${personaNombre}`,
      info2: denuncia.numero_expediente ? `Exp: ${denuncia.numero_expediente}` : ''
    };
    this.showQRModal = true;
    console.log('✅ QR seleccionado:', this.qrSeleccionado);
  }
  procesarArchivos(files, tipo) {
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const base64 = e.target?.result;
        const archivo = {
          name: file.name,
          size: file.size,
          type: file.type,
          base64: base64,
          file: file
        };
        if (tipo === 'fotos') {
          archivo.preview = base64;
        }
        this.archivosSubidos[tipo].push(archivo);
        this.actualizarContadoresEvidencia();
      };
      reader.readAsDataURL(file);
    });
  }
  actualizarContadoresEvidencia() {
    if (!this.denunciaFormData.evidencia) {
      this.denunciaFormData.evidencia = {
        documentos: 0,
        fotos: 0,
        videos: 0,
        audios: 0
      };
    }
    this.denunciaFormData.evidencia.documentos = this.archivosSubidos.documentos.length;
    this.denunciaFormData.evidencia.fotos = this.archivosSubidos.fotos.length;
    this.denunciaFormData.evidencia.videos = this.archivosSubidos.videos.length;
    this.denunciaFormData.evidencia.audios = this.archivosSubidos.audios.length;
  }
  removerDocumento(index) {
    this.archivosSubidos.documentos.splice(index, 1);
    this.actualizarContadoresEvidencia();
  }
  removerFoto(index) {
    this.archivosSubidos.fotos.splice(index, 1);
    this.actualizarContadoresEvidencia();
  }
  removerVideo(index) {
    this.archivosSubidos.videos.splice(index, 1);
    this.actualizarContadoresEvidencia();
  }
  removerAudio(index) {
    this.archivosSubidos.audios.splice(index, 1);
    this.actualizarContadoresEvidencia();
  }
  tieneArchivos() {
    return this.archivosSubidos.documentos.length > 0 || this.archivosSubidos.fotos.length > 0 || this.archivosSubidos.videos.length > 0 || this.archivosSubidos.audios.length > 0;
  }
  prepararFormDataDenuncia() {
    const formData = new FormData();
    // Datos básicos
    formData.append('persona_id', this.denunciaFormData.persona_id.toString());
    formData.append('fecha_ingreso', this.denunciaFormData.fecha_ingreso);
    formData.append('tipo_conflicto_id', this.denunciaFormData.tipo_conflicto_id.toString());
    formData.append('descripcion', this.denunciaFormData.descripcion);
    formData.append('estado_denuncia_id', (this.denunciaFormData.estado_denuncia_id || 1).toString());
    if (this.denunciaFormData.numero_expediente) {
      formData.append('numero_expediente', this.denunciaFormData.numero_expediente);
    }
    if (this.denunciaFormData.observaciones) {
      formData.append('observaciones', this.denunciaFormData.observaciones);
    }
    if (this.denunciaFormData.involucrados && this.denunciaFormData.involucrados.length > 0) {
      formData.append('involucrados', JSON.stringify(this.denunciaFormData.involucrados));
    }
    if (this.denunciaFormData.codigo_externo) {
      formData.append('codigo_externo', this.denunciaFormData.codigo_externo);
    }
    // Archivos
    this.archivosSubidos.documentos.forEach((doc, index) => {
      formData.append(`documentos[${index}]`, doc.file);
    });
    this.archivosSubidos.fotos.forEach((foto, index) => {
      formData.append(`fotos[${index}]`, foto.file);
    });
    this.archivosSubidos.videos.forEach((video, index) => {
      formData.append(`videos[${index}]`, video.file);
    });
    this.archivosSubidos.audios.forEach((audio, index) => {
      formData.append(`audios[${index}]`, audio.file);
    });
    return formData;
  }
  limpiarArchivos() {
    this.archivosSubidos = {
      documentos: [],
      fotos: [],
      videos: [],
      audios: []
    };
  }
  // ========== MÉTODOS AUXILIARES ==========
  resetFormDenuncia() {
    const ahora = new Date();
    const fechaFormateada = ahora.getFullYear() + '-' + String(ahora.getMonth() + 1).padStart(2, '0') + '-' + String(ahora.getDate()).padStart(2, '0') + ' ' + String(ahora.getHours()).padStart(2, '0') + ':' + String(ahora.getMinutes()).padStart(2, '0') + ':' + String(ahora.getSeconds()).padStart(2, '0');
    this.denunciaFormData = {
      persona_id: 0,
      fecha_ingreso: fechaFormateada,
      tipo_conflicto_id: 0,
      descripcion: '',
      estado_denuncia_id: 1,
      numero_expediente: '',
      observaciones: '',
      involucrados: [],
      codigo_qr_cifrado: '',
      qrData: '' // 👈 AGREGAR AQUÍ
    };
    this.involucradosTemp = [];
    this.currentDenunciaId = null;
  }
  validarFormularioDenuncia() {
    if (!this.denunciaFormData.persona_id) {
      this.notificationService.showError('Debe seleccionar una persona');
      return false;
    }
    if (!this.denunciaFormData.tipo_conflicto_id) {
      this.notificationService.showError('Debe seleccionar un tipo de conflicto');
      return false;
    }
    if (!this.denunciaFormData.descripcion?.trim()) {
      this.notificationService.showError('La descripción es requerida');
      return false;
    }
    return true;
  }
  isDenunciaFormValid() {
    return !!(this.denunciaFormData.persona_id && this.denunciaFormData.tipo_conflicto_id && this.denunciaFormData.descripcion?.trim() && this.denunciaFormData.fecha_ingreso);
  }
  // ========== MÉTODOS DE UTILIDAD PARA LA VISTA ==========
  getEstadoNombre(id) {
    if (!id) return 'Desconocido';
    const estado = this.estadosDenuncia.find(e => e.estado_denuncia_id === id || e.id === id);
    return estado?.nombre || 'Desconocido';
  }
  getFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  // ========== ESTADÍSTICAS ==========
  get denunciasNuevas() {
    return this.denuncias.filter(d => d.estado_denuncia_id === 1).length;
  }
  get denunciasEnRevision() {
    return this.denuncias.filter(d => d.estado_denuncia_id === 2).length;
  }
  get denunciasResueltas() {
    return this.denuncias.filter(d => d.estado_denuncia_id === 4).length;
  }
  // ========== MÉTODOS DE UI ==========
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onToggleHelpSupport() {
    this.showHelpSupport = !this.showHelpSupport;
  }
  onToggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }
  onToggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  onMarkAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }
  onOpenSearchModal() {
    this.isSearchOpen = true;
    this.searchQuery = '';
    this.searchResults = [];
  }
  minimizeToBubble() {
    this.isMinimized = true;
    document.body.classList.add('minimized-mode');
    setTimeout(() => {
      this.minimizing = false;
      this.showMinimizeNotification = true;
      setTimeout(() => this.showMinimizeNotification = false, 3000);
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
  // ========== MÉTODOS PRIVADOS ==========
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
        if (this.showDetailModal) this.cerrarDetailModal();
        if (this.showInvolucradoModal) this.cerrarInvolucradoModal();
        if (this.showDeleteModal) this.cerrarDeleteModal();
        if (this.showRemoveInvolucradoModal) this.cerrarRemoveInvolucradoModal();
        if (this.showPersonaSearchModal) this.cerrarPersonaSearchModal();
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
  trackByDenunciaId(index, denuncia) {
    return denuncia.denuncia_id;
  }
  // En denuncias-list.component.ts
  ngOnInit() {
    this.setupThemeSubscription();
    this.setupKeyboardShortcuts();
    this.setupSearch();
    this.setupPersonaSearch();
    this.cargarDatosProcesales();
    // 👈 CARGAR CATÁLOGOS PRIMERO
    this.cargarCatalogos();
    this.cargarUsuario();
    this.denunciasFacade.init();
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
    const hasContent = document.querySelector('.denuncia-container, .main-content, app-denuncias');
    const hasData = document.querySelector('.filtros-container, .stats-container, app-denuncias-table, .data-table');
    console.log(`🔍 [Denuncias] Verificando contenido: hasContent=${!!hasContent}, hasData=${!!hasData}`);
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
    this.themeService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  cargarCatalogos() {
    this.loadingCatalogs = true;
    // Cargar en paralelo
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      tiposConflicto: this.catalogoService.getTiposConflicto().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]))),
      estadosDenuncia: this.catalogoService.getEstadosDenuncia().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])))
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: result => {
        console.log('📊 Catálogos cargados:', result);
        this.tiposConflicto = result.tiposConflicto;
        this.estadosDenuncia = result.estadosDenuncia;
        this.loadingCatalogs = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('❌ Error cargando catálogos:', error);
        this.loadingCatalogs = false;
        this.cdr.detectChanges();
      }
    });
  }
  getEstadoClass(id) {
    const clases = {
      1: 'estado-ingresada',
      2: 'estado-revision',
      3: 'estado-investigacion',
      4: 'estado-resuelta',
      5: 'estado-archivada'
    };
    return clases[id || 0] || 'estado-desconocido';
  }
  /**
   * Cerrar modal de búsqueda de persona
   */
  cerrarPersonaSearchModal() {
    this.showPersonaSearchModal = false;
    this.personaSearchTerm = '';
    this.personasFiltradas = [];
    // Si era para involucrado y se canceló, volver al modal de involucrado
    if (this.contextoSeleccion === 'involucrado') {
      this.showInvolucradoModal = true;
    }
    // Limpiar contexto
    this.contextoSeleccion = null;
    this.esParaInvolucrado = false;
  }
  removerInvolucradoTemp(index) {
    this.involucradosTemp.splice(index, 1);
  }
  validarInvolucrados() {
    // Verificar que todos los involucrados tengan rol asignado
    const invSinRol = this.involucradosTemp.filter(inv => !inv.rol);
    return invSinRol.length === 0;
  }
  cargarPersonaPorId(id) {
    this.personaService.obtenerPorId(id).subscribe({
      next: persona => {
        if (persona?.nombre_completo) {
          this.personasNombreCache[id] = persona.nombre_completo;
          this.cdr.detectChanges();
        }
      },
      error: error => console.error(`Error cargando persona ${id}:`, error)
    });
  }
  onQRError() {
    console.error('❌ Error al cargar imagen QR');
    this.qrError = true;
    this.cdr.detectChanges();
  }
  /**
   * Cerrar modal QR
   */
  cerrarQRModalDenuncia() {
    this.showQRModal = false;
    this.qrSeleccionado = null;
  }
  onQRLoaded() {
    const tiempoTotal = Date.now() - this.qrInicioGeneracion;
    this.qrTiempoGeneracion = tiempoTotal;
    this.qrCargado = true;
    console.log(`✅ QR cargado correctamente en ${tiempoTotal}ms`);
    // Ocultar spinner de carga
    this.generandoQR = false;
    // Si estamos en modo edición y no hay QR guardado, capturarlo
    if (this.isEditing && !this.denunciaFormData.codigo_qr_cifrado) {
      setTimeout(() => {
        const canvas = document.querySelector('qr-code canvas');
        if (canvas) {
          this.denunciaFormData.codigo_qr_cifrado = canvas.toDataURL('image/png');
          console.log('📸 QR capturado automáticamente');
        }
      }, 200);
    }
    // Forzar actualización de la vista
    this.cdr.detectChanges();
  }
  verDetalles(id) {
    this.denunciaService.getDenuncia(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success && response.data) {
          console.log('📎 evidencia_urls:', response.data.evidencia_urls);
          console.log('📎 Denuncia completa:', response.data);
          this.selectedDenuncia = response.data;
          // Guardar nombre de persona en caché
          if (response.data.persona?.nombre_completo) {
            this.personasNombreCache[response.data.persona.persona_id] = response.data.persona.nombre_completo;
          }
          this.cargarEvidencias(response.data);
          this.cargarInvolucrados(id);
          this.cargarHistorial(id);
          this.showDetailModal = true;
          this.activeTab = 'info';
        }
      },
      error: error => {
        console.error('Error al obtener detalles:', error);
        this.notificationService.showError('Error al cargar detalles');
      }
    });
  }
  /**
   * Agregar involucrado desde el modal de detalles
   */
  agregarInvolucrado() {
    if (!this.selectedDenuncia) {
      this.notificationService.showError('No hay denuncia seleccionada');
      return;
    }
    if (!this.involucradoFormData.persona_id || !this.involucradoFormData.rol) {
      this.notificationService.showError('Debe completar todos los campos requeridos');
      return;
    }
    this.involucradoFormData.denuncia_id = this.selectedDenuncia.denuncia_id;
    console.log('📝 Agregando involucrado:', this.involucradoFormData);
    this.denunciaService.agregarInvolucrado(this.involucradoFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Involucrado agregado exitosamente');
          // ✅ Recargar involucrados
          this.cargarInvolucrados(this.selectedDenuncia.denuncia_id);
          // ✅ Cerrar modal y resetear formulario
          this.cerrarInvolucradoModal();
        } else {
          this.notificationService.showError(response.message || 'Error al agregar involucrado');
        }
      },
      error: error => {
        console.error('❌ Error al agregar involucrado:', error);
        const mensaje = error.error?.message || error.message || 'Error al agregar involucrado';
        this.notificationService.showError(mensaje);
      }
    });
  }
  /**
   * Descargar QR como imagen
   */
  descargarQRDenuncia() {
    console.log('📥 Intentando descargar QR:', this.qrSeleccionado);
    // ✅ Obtener el QR directamente del elemento img si existe
    let qrParaDescargar = this.qrSeleccionado?.codigo_qr_cifrado;
    if (!qrParaDescargar) {
      // Intentar obtener del canvas si existe
      const canvas = document.querySelector('.qr-modal-image canvas');
      if (canvas) {
        qrParaDescargar = canvas.toDataURL('image/png');
        console.log('✅ QR obtenido del canvas');
      } else {
        console.error('❌ No hay QR para descargar');
        this.notificationService.showError('No hay QR para descargar');
        return;
      }
    }
    try {
      const codigo = this.qrSeleccionado?.codigo_externo || `DENUNCIA_${this.qrSeleccionado?.denuncia_id || Date.now()}`;
      const nombreArchivo = `QR_${codigo}.png`;
      // Crear enlace de descarga
      const link = document.createElement('a');
      link.href = qrParaDescargar;
      link.download = nombreArchivo;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      this.notificationService.showSuccess('QR descargado exitosamente');
      console.log('✅ QR descargado');
    } catch (error) {
      console.error('❌ Error al descargar QR:', error);
      this.notificationService.showError('Error al descargar QR');
    }
  }
  /**
   * Obtener nombre de persona con caché
   */
  getPersonaNombre(id) {
    if (!id) return 'No asignado';
    // ✅ PRIMERO: Verificar en caché
    if (this.personasNombreCache[id]) {
      return this.personasNombreCache[id];
    }
    // ✅ SEGUNDO: Buscar en denuncias actuales
    const denuncia = this.denuncias.find(d => d.persona_id === id);
    if (denuncia?.persona?.nombre_completo) {
      this.personasNombreCache[id] = denuncia.persona.nombre_completo;
      return this.personasNombreCache[id];
    }
    // ✅ TERCERO: Si no está en caché, mostrar placeholder y programar carga
    if (!this.personasPendientes.has(id)) {
      this.personasPendientes.add(id);
      this.procesarColaPersonas();
    }
    return 'Cargando...'; // Mostrar mientras se carga
  }
  /**
   * Procesar cola de personas pendientes (UNA SOLA LLAMADA POR VEZ)
   */
  procesarColaPersonas() {
    if (this.cargandoPersona || this.personasPendientes.size === 0) {
      return;
    }
    this.cargandoPersona = true;
    const [siguienteId] = this.personasPendientes;
    this.personasPendientes.delete(siguienteId);
    // ✅ SOLO UNA LLAMADA A LA API
    this.personaService.obtenerPersona(siguienteId).subscribe({
      next: response => {
        if (response?.data?.nombre_completo) {
          this.personasNombreCache[siguienteId] = response.data.nombre_completo;
          this.cdr.detectChanges(); // Actualizar la vista
        }
        this.cargandoPersona = false;
        this.procesarColaPersonas(); // Procesar siguiente
      },
      error: error => {
        console.error(`Error cargando persona ${siguienteId}:`, error);
        this.personasNombreCache[siguienteId] = `ID: ${siguienteId}`;
        this.cargandoPersona = false;
        this.procesarColaPersonas(); // Procesar siguiente aunque haya error
      }
    });
  }
  verEvidencia(tipo, archivo, index) {
    console.log('👁️ Ver evidencia:', {
      tipo,
      archivo,
      index
    });
    if (!archivo || !archivo.url) {
      this.notificationService.showError('No se puede visualizar el archivo');
      return;
    }
    // Si es imagen, mostrar directamente
    if (tipo === 'foto' || archivo.type?.startsWith('image/')) {
      this.evidenciaSeleccionada = {
        tipo,
        archivo,
        index
      };
      this.showEvidenciaModal = true;
      return;
    }
    // Para otros tipos, intentar abrir en nueva pestaña
    try {
      // Verificar si la URL es accesible
      fetch(archivo.url, {
        method: 'HEAD',
        mode: 'cors'
      }).then(response => {
        if (response.ok) {
          window.open(archivo.url, '_blank');
        } else {
          this.notificationService.showError('No se puede acceder al archivo');
        }
      }).catch(error => {
        console.error('Error verificando archivo:', error);
        this.notificationService.showError('Error al acceder al archivo');
      });
    } catch (error) {
      console.error('Error:', error);
      this.notificationService.showError('Error al abrir el archivo');
    }
  }
  cargarDenuncias() {
    this.loading = true;
    const filters = {
      ...this.filtro,
      page: this.paginaActual,
      per_page: this.itemsPorPagina
    };
    this.denunciaService.getDenuncias(filters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          // ✅ Los datos ya vienen con evidencia_urls del backend
          this.denuncias = response.data;
          // 📎 LOG PARA VERIFICAR EVIDENCIA_URLS
          console.log('📎 Denuncias cargadas:', this.denuncias.map(d => ({
            id: d.denuncia_id,
            tiene_evidencias: !!d.evidencia_urls,
            evidencia_urls: d.evidencia_urls
          })));
          this.totalItems = response.pagination?.total || 0;
          this.denuncias.forEach(denuncia => {
            if (denuncia.codigo_qr_cifrado) {
              console.log(`📸 Denuncia ${denuncia.denuncia_id} QR:`, {
                completo: denuncia.codigo_qr_cifrado,
                longitud: denuncia.codigo_qr_cifrado.length,
                primeros100: denuncia.codigo_qr_cifrado.substring(0, 100),
                esDataURL: denuncia.codigo_qr_cifrado.startsWith('data:image'),
                tieneDatos: denuncia.codigo_qr_cifrado.includes('base64,') && denuncia.codigo_qr_cifrado.split(',')[1]?.length > 0
              });
            }
          });
          // ✅ PRECARGAR CACHÉ con los nombres que ya vienen en la respuesta
          this.denuncias.forEach(denuncia => {
            if (denuncia.persona?.nombre_completo) {
              this.personasNombreCache[denuncia.persona.persona_id] = denuncia.persona.nombre_completo;
            }
          });
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error:', error);
        this.denuncias = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getTipoConflictoNombre(id) {
    if (!id) return 'No asignado';
    // Verificar caché
    if (this.tiposConflictoCache[id]) {
      return this.tiposConflictoCache[id];
    }
    // Buscar en el array
    const tipo = this.tiposConflicto.find(t => t.tipo_conflicto_id === id || t.id === id);
    const nombre = tipo?.nombre || `ID: ${id}`;
    this.tiposConflictoCache[id] = nombre;
    return nombre;
  }
  getEstadoDenunciaNombre(id) {
    if (!id) return 'No asignado';
    // Verificar caché
    if (this.estadosDenunciaCache[id]) {
      return this.estadosDenunciaCache[id];
    }
    const estado = this.estadosDenuncia.find(e => e.estado_denuncia_id === id || e.id === id);
    const nombre = estado?.nombre || `ID: ${id}`;
    this.estadosDenunciaCache[id] = nombre;
    return nombre;
  }
  /**
   * Obtener nombre del involucrado - VERSIÓN CORREGIDA
   */
  getNombreInvolucrado(inv) {
    // ✅ Primero: buscar en objeto persona anidado
    if (inv.persona?.nombre_completo) {
      return inv.persona.nombre_completo;
    }
    // ✅ Segundo: si viene como nombres y apellidos separados
    if (inv.persona?.nombres && inv.persona?.apellidos) {
      return `${inv.persona.nombres} ${inv.persona.apellidos}`;
    }
    // ✅ Tercero: buscar en caché por ID
    if (this.personasNombreCache[inv.persona_id]) {
      return this.personasNombreCache[inv.persona_id];
    }
    // ✅ Cuarto: intentar cargar si no está en caché
    this.cargarPersonaPorId(inv.persona_id);
    // Mientras se carga, mostrar un placeholder
    return 'Cargando...';
  }
  /**
   * Obtener documento del involucrado - VERSIÓN CORREGIDA
   */
  getDocumentoInvolucrado(inv) {
    if (inv.persona?.numero_documento) {
      return inv.persona.numero_documento;
    }
    return '';
  }
  /**
   * Obtener inicial para el avatar - VERSIÓN CORREGIDA
   */
  getInicialInvolucrado(inv) {
    const nombre = this.getNombreInvolucrado(inv);
    // Si es un nombre real (no placeholder)
    if (nombre && nombre !== 'Cargando...' && !nombre.startsWith('ID:')) {
      return nombre.charAt(0).toUpperCase();
    }
    // Si no hay nombre, usar primera letra del rol
    return inv.rol?.charAt(0).toUpperCase() || '?';
  }
  cargarInvolucrados(denunciaId) {
    this.denunciaService.getInvolucradosPorDenuncia(denunciaId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        console.log('📥 Involucrados recibidos:', response.data);
        this.involucrados = response.data || [];
        // Guardar nombres en caché - usando la estructura correcta
        this.involucrados.forEach(inv => {
          // ✅ Los datos vienen en 'persona' (objeto anidado)
          if (inv.persona?.nombre_completo) {
            this.personasNombreCache[inv.persona_id] = inv.persona.nombre_completo;
          }
          // Si viene como nombres y apellidos separados
          else if (inv.persona?.nombres && inv.persona?.apellidos) {
            const nombreCompleto = `${inv.persona.nombres} ${inv.persona.apellidos}`;
            this.personasNombreCache[inv.persona_id] = nombreCompleto;
          }
        });
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error cargando involucrados:', error);
      }
    });
  }
  /**
   * Abrir búsqueda para DENUNCIANTE PRINCIPAL
   */
  abrirBusquedaPersona() {
    this.contextoSeleccion = 'denunciante'; // 👈 IMPORTANTE: definir contexto
    this.showPersonaSearchModal = true;
    this.personaSearchTerm = '';
    this.personasFiltradas = [];
    this.esParaInvolucrado = false;
  }
  /**
   * Abrir búsqueda para INVOLUCRADO
   */
  abrirBusquedaPersonaParaInvolucrado() {
    this.contextoSeleccion = 'involucrado'; // 👈 IMPORTANTE: definir contexto
    this.showPersonaSearchModal = true;
    this.personaSearchTerm = '';
    this.personasFiltradas = [];
    this.showInvolucradoModal = false; // Cerrar modal de involucrado mientras se busca
    this.esParaInvolucrado = true;
  }
  cargarHistorial(denunciaId) {
    this.denunciaService.getHistorial(denunciaId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        console.log('📜 Historial RECIBIDO (RAW):', response);
        // 👈 DEFINIR EL TIPO EXPLÍCITAMENTE
        let historialData = [];
        // Caso 1: Response con propiedad data (ApiResponse)
        if (response?.data && Array.isArray(response.data)) {
          historialData = response.data;
          console.log('📦 Datos extraídos de response.data:', historialData.length);
        }
        // Caso 2: Response es directamente un array
        else if (Array.isArray(response)) {
          historialData = response;
          console.log('📦 Response es directamente un array:', historialData.length);
        }
        // Filtrar mensajes no deseados
        this.historial = historialData.filter(item => {
          const obs = (item.observaciones || '').toLowerCase();
          // Textos a EXCLUIR (los que vienen del trigger)
          const excludePhrases = ['cambio automático', 'cambio automÃ¡tico', 'automático', 'automÃ¡tico', 'trigger', 'desde trigger'];
          return !excludePhrases.some(phrase => obs.includes(phrase));
        });
        console.log('📜 Historial filtrado:', this.historial.length, 'registros');
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error cargando historial:', error);
        this.historial = [];
      }
    });
  }
  /**
   * Fallback usando API externa
   */
  fallbackGenerarQRDenuncia(url) {
    // Usar API externa solo como fallback
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    // Cargar la imagen para verificar que funciona
    const img = new Image();
    img.onload = () => {
      this.denunciaFormData.codigo_qr_cifrado = qrUrl;
      this.generandoQR = false;
      this.notificationService.showSuccess('Código QR generado exitosamente (usando API externa)');
      this.cdr.detectChanges();
    };
    img.onerror = () => {
      this.notificationService.showError('Error al generar QR');
      this.generandoQR = false;
      this.cdr.detectChanges();
    };
    img.src = qrUrl;
  }
  generarCodigoQRDenuncia() {
    this.qrInicioGeneracion = Date.now();
    this.qrCargado = false;
    this.generandoQR = true;
    if (this.isEditing && this.denunciaFormData.codigo_qr_cifrado) {
      this.notificationService.showWarning('El código QR ya existe y no puede modificarse');
      return;
    }
    // Crear la URL para la página de denuncia
    const baseUrl = 'http://localhost:8000/qr/';
    const tipo = 'denuncia';
    const datosIdentificacion = {
      id: this.currentDenunciaId || 'temp_' + Date.now(),
      codigo: this.denunciaFormData.codigo_externo || 'DENUNCIA',
      timestamp: Date.now()
    };
    const datosCodificados = btoa(JSON.stringify(datosIdentificacion));
    const urlQR = `${baseUrl}${tipo}/${datosCodificados}`;
    this.denunciaFormData.codigo_qr_cifrado = urlQR;
    this.denunciaFormData.qrData = urlQR;
    this.cdr.detectChanges();
    // ✅ ESPERAR A QUE EL COMPONENTE QR SE RENDERICE
    setTimeout(() => {
      const canvas = document.querySelector('qr-code canvas');
      if (canvas) {
        try {
          const qrBase64 = canvas.toDataURL('image/png');
          // ✅ VERIFICAR QUE TENGA DATOS REALES
          if (qrBase64 && qrBase64.length > 100) {
            console.log('✅ QR generado correctamente, longitud:', qrBase64.length);
            this.denunciaFormData.codigo_qr_cifrado = qrBase64;
            this.generandoQR = false;
            this.notificationService.showSuccess('Código QR generado exitosamente');
            this.cdr.detectChanges();
          } else {
            console.error('❌ QR generado vacío, usando fallback');
            this.fallbackGenerarQRDenuncia(urlQR);
          }
        } catch (error) {
          console.error('Error al generar QR:', error);
          this.fallbackGenerarQRDenuncia(urlQR);
        }
      } else {
        console.warn('Canvas no encontrado');
        setTimeout(() => {
          const canvasRetry = document.querySelector('qr-code canvas');
          if (canvasRetry) {
            const qrBase64 = canvasRetry.toDataURL('image/png');
            if (qrBase64 && qrBase64.length > 100) {
              this.denunciaFormData.codigo_qr_cifrado = qrBase64;
            } else {
              this.fallbackGenerarQRDenuncia(urlQR);
            }
            this.generandoQR = false;
            this.cdr.detectChanges();
          } else {
            this.fallbackGenerarQRDenuncia(urlQR);
          }
        }, 500);
      }
    }, 300);
  }
  /**
   * Seleccionar persona de la búsqueda
   */
  seleccionarPersona(persona) {
    console.log('✅ Persona seleccionada:', persona);
    console.log('📌 Contexto de selección:', this.contextoSeleccion);
    // Guardar en caché el nombre completo
    const nombreCompleto = `${persona.nombres} ${persona.apellidos}`;
    this.personasNombreCache[persona.persona_id] = nombreCompleto;
    if (this.contextoSeleccion === 'involucrado') {
      // ✅ Es para agregar un involucrado - SOLO agregar a temp, NO abrir modal
      const nuevoInvolucrado = {
        denuncia_id: this.selectedDenuncia?.denuncia_id || 0,
        persona_id: persona.persona_id,
        rol: '',
        // Se asignará después
        observaciones: '',
        nombre: nombreCompleto,
        foto: persona.foto_cifrada
      };
      this.involucradosTemp.push(nuevoInvolucrado);
      // ✅ MOSTRAR NOTIFICACIÓN DE ÉXITO
      this.notificationService.showSuccess('Persona agregada a la lista de involucrados');
      // ❌ NO abrir showInvolucradoModal
    } else if (this.contextoSeleccion === 'denunciante') {
      // Es el denunciante principal
      this.denunciaFormData.persona_id = persona.persona_id;
      if (this.showModal) {
        this.notificationService.showSuccess('Denunciante seleccionado');
      }
    }
    // Cerrar modal de búsqueda y limpiar
    this.showPersonaSearchModal = false;
    this.personaSearchTerm = '';
    this.personasFiltradas = [];
    this.contextoSeleccion = null;
  }
  /**
   * Agregar involucrado desde el modal de DETALLES
   */
  agregarInvolucradoDesdeDetalles() {
    if (!this.selectedDenuncia) {
      this.notificationService.showError('No hay denuncia seleccionada');
      return;
    }
    if (!this.involucradoFormData.persona_id || !this.involucradoFormData.rol) {
      this.notificationService.showError('Debe completar todos los campos requeridos');
      return;
    }
    this.involucradoFormData.denuncia_id = this.selectedDenuncia.denuncia_id;
    console.log('📝 Agregando involucrado a denuncia existente:', this.involucradoFormData);
    this.denunciaService.agregarInvolucrado(this.involucradoFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.showSuccess('Involucrado agregado exitosamente');
          this.cargarInvolucrados(this.selectedDenuncia.denuncia_id);
          this.cerrarInvolucradoModal();
        } else {
          this.notificationService.showError(response.message || 'Error al agregar involucrado');
        }
      },
      error: error => {
        console.error('❌ Error al agregar involucrado:', error);
        this.notificationService.showError(error.error?.message || 'Error al agregar involucrado');
      }
    });
  }
  /**
   * Asignar rol a involucrado TEMPORAL (en creación/edición)
   */
  asignarRolATemporal() {
    if (!this.involucradoFormData.persona_id || !this.involucradoFormData.rol) {
      this.notificationService.showError('Debe seleccionar un rol');
      return;
    }
    // Buscar el involucrado temporal
    const index = this.involucradosTemp.findIndex(inv => inv.persona_id === this.involucradoFormData.persona_id);
    if (index !== -1) {
      // Actualizar el rol y observaciones
      this.involucradosTemp[index].rol = this.involucradoFormData.rol;
      this.involucradosTemp[index].observaciones = this.involucradoFormData.observaciones;
      this.notificationService.showSuccess('Rol asignado correctamente');
      this.cerrarInvolucradoModal();
    } else {
      this.notificationService.showError('No se encontró la persona en la lista temporal');
    }
  }
  /**
   * Abrir modal para asignar rol a un involucrado (desde la lista temporal)
   */
  abrirModalAsignarRol(involucradoTemp) {
    if (!involucradoTemp) return;
    console.log('🎭 Asignando rol para:', involucradoTemp);
    this.involucradoFormData = {
      denuncia_id: involucradoTemp.denuncia_id || this.selectedDenuncia?.denuncia_id || 0,
      persona_id: involucradoTemp.persona_id,
      rol: involucradoTemp.rol || '',
      observaciones: involucradoTemp.observaciones || ''
    };
    this.showInvolucradoModal = true;
  }
  /**
   * Cargar involucrados para edición (los pasa a involucradosTemp)
   */
  cargarInvolucradosParaEdicion(denunciaId) {
    this.denunciaService.getInvolucradosPorDenuncia(denunciaId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        const involucradosBD = response.data || [];
        // Mapear involucrados de BD al formato temporal
        this.involucradosTemp = involucradosBD.map(inv => ({
          denuncia_id: inv.denuncia_id,
          persona_id: inv.persona_id,
          rol: inv.rol,
          observaciones: inv.observaciones || '',
          nombre: inv.persona?.nombre_completo || this.personasNombreCache[inv.persona_id] || `ID: ${inv.persona_id}`,
          foto: inv.persona?.foto_cifrada
        }));
        console.log('👥 Involucrados cargados para edición:', this.involucradosTemp);
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error cargando involucrados para edición:', error);
      }
    });
  }
  setupPersonaSearch() {
    this.personaSearchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(400),
    // Un poco más de tiempo para mejor UX
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(searchTerm => {
      if (searchTerm.length >= 2) {
        this.searchingPersonas = true;
        this.personasFiltradas = []; // Limpiar resultados anteriores
        this.busquedaRealizada = false;
        this.mostrarMensajeNoResultados = false;
        console.log('🔍 Buscando término:', searchTerm);
        return this.personaService.buscar(searchTerm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
          console.error('❌ Error buscando personas:', error);
          this.notificationService.showError('Error al buscar personas');
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
          this.searchingPersonas = false;
          this.busquedaRealizada = true;
          this.cdr.detectChanges();
        }));
      }
      // Si el término es menor a 2 caracteres
      this.busquedaRealizada = false;
      this.mostrarMensajeNoResultados = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    })).subscribe({
      next: personas => {
        this.personasFiltradas = personas;
        console.log('👥 Personas encontradas:', personas.length);
        // ✅ IMPORTANTE: Mostrar mensaje solo cuando NO hay resultados y YA se realizó la búsqueda
        if (personas.length === 0 && this.busquedaRealizada) {
          this.mostrarMensajeNoResultados = true;
          // También podemos mostrar una notación suave (opcional)
          console.log('ℹ️ No se encontraron resultados');
        } else {
          this.mostrarMensajeNoResultados = false;
        }
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('❌ Error en suscripción:', error);
        this.personasFiltradas = [];
        this.searchingPersonas = false;
        this.busquedaRealizada = true;
        this.mostrarMensajeNoResultados = true; // Mostrar mensaje en caso de error
        this.cdr.detectChanges();
      }
    });
  }
  abrirModalEditar(denuncia) {
    this.isEditing = true;
    this.modalTitle = 'Editar Denuncia';
    this.currentDenunciaId = denuncia.denuncia_id;
    this.denunciaFormData = {
      persona_id: denuncia.persona_id || 0,
      fecha_ingreso: denuncia.fecha_ingreso,
      tipo_conflicto_id: denuncia.tipo_conflicto_id || 0,
      descripcion: denuncia.descripcion,
      estado_denuncia_id: denuncia.estado_denuncia_id || 1,
      numero_expediente: denuncia.numero_expediente || '',
      observaciones: denuncia.observaciones || '',
      involucrados: [],
      codigo_qr_cifrado: denuncia.codigo_qr_cifrado || '',
      qrData: '',
      codigo_externo: denuncia.codigo_externo || ''
    };
    // Pre-cargar nombre del denunciante (si viene en la response) o solicitarlo
    if (denuncia.persona?.nombre_completo) {
      this.personasNombreCache[denuncia.persona.persona_id] = denuncia.persona.nombre_completo;
    } else if (this.denunciaFormData.persona_id) {
      this.cargarPersonaPorId(this.denunciaFormData.persona_id);
    }
    // Cargar involucrados para edición
    this.cargarInvolucradosParaEdicion(denuncia.denuncia_id);
    this.showModal = true;
    this.cdr.detectChanges();
  }
  // En denuncias-list.component.ts
  tieneEvidencia(denuncia) {
    if (!denuncia) return false;
    // Usar evidencia_urls
    const urls = denuncia.evidencia_urls;
    if (!urls) return false;
    return urls.documentos?.length > 0 || urls.fotos?.length > 0 || urls.videos?.length > 0 || urls.audios?.length > 0;
  }
  getEvidenciaTexto(denuncia) {
    if (!denuncia || !denuncia.evidencia_urls) {
      return 'Sin evidencia';
    }
    const urls = denuncia.evidencia_urls;
    const partes = [];
    if (urls.documentos?.length > 0) {
      partes.push(`📄 ${urls.documentos.length}`);
    }
    if (urls.fotos?.length > 0) {
      partes.push(`📷 ${urls.fotos.length}`);
    }
    if (urls.videos?.length > 0) {
      partes.push(`🎥 ${urls.videos.length}`);
    }
    if (urls.audios?.length > 0) {
      partes.push(`🎵 ${urls.audios.length}`);
    }
    return partes.length > 0 ? partes.join(' ') : 'Sin evidencia';
  }
  getEstadoProcesal(denuncia) {
    // Verificar si tiene remisión
    const tieneRemision = this.remisiones.some(r => r.denuncia_id === denuncia.denuncia_id);
    if (tieneRemision) return '📤 EN REMISIÓN';
    // Verificar si tiene sentencia válida
    const sentencia = this.sentencias.find(s => s.conciliacion?.denuncia_id === denuncia.denuncia_id);
    if (sentencia) {
      if (sentencia.estado_ejecucion === 'EJECUTADA') return '⚖️ SENTENCIA EJECUTADA';
      if (sentencia.estado_ejecucion === 'EN_EJECUCION') return '⚖️ SENTENCIA EN EJECUCIÓN';
      return '📜 CON SENTENCIA';
    }
    // Verificar si tiene medida cautelar
    const tieneMedida = this.medidas.some(m => m.conciliacion?.denuncia_id === denuncia.denuncia_id);
    if (tieneMedida) return '🛡️ MEDIDA CAUTELAR';
    // Verificar si tiene conciliación completa
    const conciliacion = this.conciliaciones.find(c => c.denuncia_id === denuncia.denuncia_id);
    if (conciliacion) {
      if (conciliacion.estado === 'COMPLETA') return '✅ CONCILIACIÓN COMPLETA';
      if (conciliacion.estado === 'EN_PROCESO') return '⚖️ CONCILIACIÓN EN PROCESO';
      return '🤝 EN CONCILIACIÓN';
    }
    return '📋 EN TRÁMITE';
  }
  // Método para obtener el color del estado procesal
  getEstadoProcesalClass(estado) {
    if (estado.includes('REMISIÓN')) return 'estado-remision';
    if (estado.includes('SENTENCIA EJECUTADA')) return 'estado-sentencia-ejecutada';
    if (estado.includes('SENTENCIA')) return 'estado-sentencia';
    if (estado.includes('MEDIDA')) return 'estado-medida';
    if (estado.includes('COMPLETA')) return 'estado-completa';
    if (estado.includes('PROCESO')) return 'estado-proceso';
    return 'estado-tramite';
  }
  // Cargar datos adicionales en ngOnInit
  cargarDatosProcesales() {
    // Cargar remisiones
    this.remisionConciliacionService.listarRemisiones().subscribe({
      next: data => this.remisiones = data,
      error: err => console.error('Error cargando remisiones:', err)
    });
    // Cargar conciliaciones
    this.remisionConciliacionService.listarConciliaciones().subscribe({
      next: data => this.conciliaciones = data,
      error: err => console.error('Error cargando conciliaciones:', err)
    });
    // Cargar medidas cautelares
    this.medidaService.listarMedidas({
      per_page: 100
    }).subscribe({
      next: response => this.medidas = response.data,
      error: err => console.error('Error cargando medidas:', err)
    });
    // Cargar sentencias
    this.sentenciaService.listarSentencias({
      per_page: 100
    }).subscribe({
      next: response => this.sentencias = response.data,
      error: err => console.error('Error cargando sentencias:', err)
    });
  }
  // Cerrar modal de evidencia
  cerrarEvidenciaModal() {
    this.showEvidenciaModal = false;
    this.evidenciaSeleccionada = null;
  }
  cargarEvidencias(denuncia) {
    if (denuncia.evidencia_urls) {
      this.evidencias = {
        documentos: denuncia.evidencia_urls.documentos || [],
        fotos: denuncia.evidencia_urls.fotos || [],
        videos: denuncia.evidencia_urls.videos || [],
        audios: denuncia.evidencia_urls.audios || []
      };
      // 🔍 LOG PARA VERIFICAR URLs
      console.log('📎 URLs de evidencias:', {
        documentos: this.evidencias.documentos.map(d => d.url),
        fotos: this.evidencias.fotos.map(f => f.url),
        videos: this.evidencias.videos.map(v => v.url),
        audios: this.evidencias.audios.map(a => a.url)
      });
    } else {
      this.evidencias = {
        documentos: [],
        fotos: [],
        videos: [],
        audios: []
      };
    }
  }
  // Descargar evidencia
  descargarEvidencia() {
    if (!this.evidenciaSeleccionada) return;
    const {
      tipo,
      archivo
    } = this.evidenciaSeleccionada;
    let url;
    let filename;
    // Si el archivo tiene base64
    if (archivo.base64) {
      url = archivo.base64;
      filename = archivo.name || `${tipo}_${Date.now()}`;
    }
    // Si el archivo tiene URL
    else if (archivo.url) {
      url = archivo.url;
      filename = archivo.name || url.split('/').pop() || `${tipo}_${Date.now()}`;
    }
    // Si es un objeto File
    else if (archivo.file) {
      url = URL.createObjectURL(archivo.file);
      filename = archivo.name;
    } else {
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    // Limpiar URL object si fue creada
    if (archivo.file && url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
  }
  // Obtener icono según tipo de archivo
  getIconoPorTipo(archivo) {
    const extension = archivo.name?.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
      return '🖼️';
    }
    if (['pdf'].includes(extension)) {
      return '📑';
    }
    if (['doc', 'docx'].includes(extension)) {
      return '📄';
    }
    if (['xls', 'xlsx'].includes(extension)) {
      return '📊';
    }
    if (['mp4', 'avi', 'mov', 'mkv'].includes(extension)) {
      return '🎬';
    }
    if (['mp3', 'wav', 'ogg'].includes(extension)) {
      return '🎵';
    }
    return '📎';
  }
  // Método para obtener el tipo de archivo
  getFileType(archivo) {
    const extension = archivo.name?.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) return 'image';
    if (['pdf'].includes(extension)) return 'pdf';
    if (['mp4', 'avi', 'mov', 'mkv'].includes(extension)) return 'video';
    if (['mp3', 'wav', 'ogg'].includes(extension)) return 'audio';
    return 'other';
  }
  descargarEvidenciaItem(archivo, tipo) {
    console.log('⬇️ Descargando evidencia:', {
      tipo,
      archivo
    });
    if (!archivo || !archivo.url) {
      this.notificationService.showError('No se puede descargar el archivo');
      return;
    }
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = archivo.url;
    link.download = archivo.name;
    link.target = '_blank';
    // Agregar al DOM, hacer clic y remover
    document.body.appendChild(link);
    link.click();
    // Pequeño delay antes de remover
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
    this.notificationService.showSuccess(`Descargando: ${archivo.name}`);
  }
  static ɵfac = function DenunciasListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DenunciasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_denuncia_service__WEBPACK_IMPORTED_MODULE_25__.DenunciaService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_catalogo_service__WEBPACK_IMPORTED_MODULE_26__.CatalogoService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_persona_service__WEBPACK_IMPORTED_MODULE_27__.PersonaService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_28__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_denuncia_facade_service__WEBPACK_IMPORTED_MODULE_29__.DenunciasFacadeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_shared_features_home_services_theme_service__WEBPACK_IMPORTED_MODULE_30__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services_module_loader_service__WEBPACK_IMPORTED_MODULE_31__.ModuleLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_32__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_remision_conciliacion_service__WEBPACK_IMPORTED_MODULE_33__.RemisionConciliacionService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_medida_cautelar_service__WEBPACK_IMPORTED_MODULE_34__.MedidaCautelarService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_sentencia_service__WEBPACK_IMPORTED_MODULE_35__.SentenciaService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
    type: DenunciasListComponent,
    selectors: [["app-denuncias-list"]],
    hostBindings: function DenunciasListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_click_HostBindingHandler($event) {
          return ctx.onClickOutside($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresolveDocument"]);
      }
    },
    decls: 69,
    vars: 31,
    consts: [["denunciaForm", "ngForm"], ["fileInputDocumentos", ""], ["fileInputFotos", ""], ["fileInputVideos", ""], ["fileInputAudios", ""], ["involucradoForm", "ngForm"], [1, "dashboard-container"], [3, "toggleSidebar", "toggleHelpSupport", "isSidebarCollapsed"], [1, "main-content"], [3, "toggleNotifications", "toggleUserMenu", "markAllAsRead", "openSearchModal"], ["class", "search-modal", 4, "ngIf"], ["class", "modal-overlay-sigpaz", 3, "minimized-mode", "click", 4, "ngIf"], [1, "denuncia-container"], [1, "header"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-icon"], [1, "btn", "btn-secondary"], [1, "filtros-container"], [1, "filtros-header"], [1, "btn-link", 3, "click"], [1, "filtros-grid"], [1, "filtro-item"], ["for", "filtro-codigo"], ["type", "text", "id", "filtro-codigo", "placeholder", "DEN-2024-001", 3, "ngModelChange", "ngModel"], ["for", "filtro-expediente"], ["type", "text", "id", "filtro-expediente", "placeholder", "EXP-2024-001", 3, "ngModelChange", "ngModel"], ["for", "filtro-estado"], ["id", "filtro-estado", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "filtro-fecha-inicio"], ["type", "date", "id", "filtro-fecha-inicio", 3, "ngModelChange", "ngModel"], ["for", "filtro-fecha-fin"], ["type", "date", "id", "filtro-fecha-fin", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-search", 3, "click"], ["class", "stats-container", 4, "ngIf"], [4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], ["class", "qr-modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "isSidebarCollapsed", "isDarkTheme"], [1, "search-modal"], [1, "search-modal-backdrop", 3, "click"], [1, "search-modal-content"], [1, "search-modal-header"], [1, "search-input-container"], [1, "search-modal-icon"], ["type", "text", "placeholder", "Buscar en el sistema...", "autofocus", "", 1, "search-modal-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], [1, "search-close", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "search-results"], ["class", "search-result-item", 4, "ngFor", "ngForOf"], [1, "search-result-item"], [1, "result-icon"], [1, "result-details"], [1, "result-title"], [1, "result-description"], [1, "search-empty"], [1, "modal-overlay-sigpaz", 3, "click"], [1, "modal-content-sigpaz", 3, "click"], ["class", "modal-header-sigpaz", 4, "ngIf"], ["class", "modal-body-wrapper", 4, "ngIf"], ["class", "floating-bubble", 3, "pulsing", "click", 4, "ngIf"], [1, "modal-header-sigpaz"], [1, "modal-title"], [1, "icon"], [1, "modal-controls"], ["title", "Minimizar a burbuja", 1, "modal-btn", "minimize-btn", 3, "click"], [1, "btn-tooltip"], ["title", "Cerrar completamente", 1, "modal-btn", "close-modal-btn", 3, "click"], [1, "modal-body-wrapper"], [1, "modal-body"], [1, "floating-bubble", 3, "click"], [1, "bubble-content"], [1, "bubble-icon"], [1, "bubble-text"], ["title", "Cerrar burbuja", 1, "bubble-close", 3, "click"], [1, "close-icon"], ["class", "bubble-notification", 4, "ngIf"], [1, "bubble-notification"], [1, "stats-container"], [1, "stat-card"], [1, "stat-value"], [1, "stat-label"], [3, "pageChange", "view", "edit", "remove", "viewQr", "denuncias", "loading", "page", "perPage", "total", "personasNombreCache", "remisiones", "conciliaciones", "medidas", "sentencias"], [1, "modal-overlay"], [1, "modal-container"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-content"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-column"], [1, "form-group"], ["for", "codigo_externo", 1, "form-label"], [1, "required"], ["type", "text", "id", "codigo_externo", "name", "codigo_externo", "required", "", "placeholder", "DEN-2024-001", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "persona_id", 1, "form-label"], [1, "persona-selector"], ["type", "text", "readonly", "", "placeholder", "Seleccione una persona", 1, "form-input", 3, "click", "value"], ["type", "button", 1, "btn-search-persona", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-add-involucrado", 3, "click"], ["class", "involucrado-temp-item", 4, "ngFor", "ngForOf"], ["for", "tipo_conflicto_id", 1, "form-label"], ["id", "tipo_conflicto_id", "name", "tipo_conflicto_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "descripcion", 1, "form-label"], ["id", "descripcion", "name", "descripcion", "required", "", "rows", "6", "placeholder", "Describa detalladamente el conflicto...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-label"], [1, "qr-unique-badge"], [1, "qr-container"], ["class", "qr-preview", 4, "ngIf"], ["class", "qr-temp", 4, "ngIf"], ["class", "qr-empty", 4, "ngIf"], ["class", "qr-readonly", 4, "ngIf"], ["for", "numero_expediente", 1, "form-label"], ["type", "text", "id", "numero_expediente", "name", "numero_expediente", "placeholder", "EXP-2024-001", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fecha_ingreso", 1, "form-label"], ["type", "datetime-local", "id", "fecha_ingreso", "name", "fecha_ingreso", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "estado_denuncia_id", 1, "form-label"], ["id", "estado_denuncia_id", "name", "estado_denuncia_id", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "badge-info"], [1, "evidencia-upload-section"], [1, "evidencia-header"], [1, "evidencia-icon"], [1, "evidencia-title"], ["class", "evidencia-count", 4, "ngIf"], [1, "evidencia-upload-area", 3, "click", "dragover", "drop"], ["type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.txt,.xls,.xlsx", 2, "display", "none", 3, "change"], [1, "upload-icon"], [1, "upload-text"], [1, "upload-hint"], ["class", "archivos-lista", 4, "ngIf"], ["type", "file", "multiple", "", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "fotos-preview", 4, "ngIf"], ["type", "file", "multiple", "", "accept", "video/*", 2, "display", "none", 3, "change"], ["type", "file", "multiple", "", "accept", "audio/*", 2, "display", "none", 3, "change"], ["for", "observaciones", 1, "form-label"], ["id", "observaciones", "name", "observaciones", "rows", "4", "placeholder", "Observaciones adicionales...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "terms-container"], [1, "terms-text"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "involucrado-temp-item"], [1, "inv-avatar"], ["class", "inv-avatar-img", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex';", 3, "src", 4, "ngIf"], ["class", "inv-avatar-placeholder", 4, "ngIf"], [1, "inv-info"], [1, "inv-nombre"], ["class", "inv-rol", 4, "ngIf"], ["class", "inv-rol-placeholder", 4, "ngIf"], [1, "inv-actions"], ["type", "button", "class", "btn-rol", "title", "Asignar rol", 3, "click", 4, "ngIf"], ["type", "button", "title", "Eliminar", 1, "btn-remove", 3, "click"], ["onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex';", 1, "inv-avatar-img", 3, "src"], [1, "inv-avatar-placeholder"], [1, "inv-rol"], [1, "rol-badge", 3, "ngClass"], [1, "inv-rol-placeholder"], [1, "badge-warning"], ["type", "button", "title", "Asignar rol", 1, "btn-rol", 3, "click"], [1, "qr-preview"], ["alt", "C\u00F3digo QR de Denuncia", 1, "qr-image", 2, "width", "150px", "height", "150px", "border-radius", "12px", "border", "2px solid var(--border-color)", 3, "load", "src"], [1, "qr-info"], [1, "qr-badge", "qr-generado"], [1, "qr-unique"], [1, "qr-temp"], ["styleClass", "qr-canvas", 3, "value", "size", "errorCorrectionLevel"], [1, "qr-badge", "qr-generando"], [1, "qr-empty"], [1, "qr-empty-icon"], [1, "qr-empty-text"], ["type", "button", 1, "btn", "btn-secondary", "btn-generar-qr", "mt-2", 3, "click", "disabled"], [1, "qr-readonly"], [1, "qr-readonly-message"], [1, "info-icon"], [1, "qr-help"], [1, "evidencia-count"], [1, "archivos-lista"], ["class", "archivo-item", 4, "ngFor", "ngForOf"], [1, "archivo-item"], [1, "archivo-icon"], [1, "archivo-nombre"], [1, "archivo-tamano"], ["type", "button", "title", "Eliminar", 1, "archivo-remove", 3, "click"], [1, "fotos-preview"], ["class", "foto-preview-item", 4, "ngFor", "ngForOf"], [1, "foto-preview-item"], ["alt", "Preview", 1, "foto-preview-img", 3, "src"], ["type", "button", "title", "Eliminar", 1, "foto-remove", 3, "click"], [1, "foto-nombre"], [1, "detail-modal-container"], [1, "detail-modal-header"], [1, "detail-modal-title"], [1, "detail-icon"], [1, "detail-codigo"], [1, "detail-modal-content"], [1, "detail-tabs"], [1, "tab-btn", 3, "click"], [1, "tab-icon"], ["class", "tab-badge", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "tab-badge"], [1, "tab-content"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "estado-procesal-badge", 3, "ngClass"], [1, "detail-section"], [1, "section-title"], [1, "section-content"], ["class", "evidencia-grupo", 4, "ngIf"], ["class", "no-evidencia", 4, "ngIf"], ["class", "detail-section", 4, "ngIf"], [1, "evidencia-grupo"], [1, "evidencia-lista"], ["class", "evidencia-item", 4, "ngFor", "ngForOf"], [1, "evidencia-item"], [1, "evidencia-nombre"], [1, "evidencia-acciones"], ["title", "Ver", 1, "btn-icon", 3, "click"], ["title", "Descargar", 1, "btn-icon", 3, "click"], [1, "evidencia-grid-fotos"], ["class", "evidencia-foto", 3, "click", 4, "ngFor", "ngForOf"], [1, "evidencia-foto", 3, "click"], [1, "foto-thumbnail", 3, "error", "src", "alt"], [1, "foto-overlay"], ["title", "Reproducir", 1, "btn-icon", 3, "click"], [1, "no-evidencia"], ["class", "involucrados-list", 4, "ngIf"], ["class", "empty-state small", 4, "ngIf"], [1, "involucrados-list"], ["class", "involucrado-card", 4, "ngFor", "ngForOf"], [1, "involucrado-card"], [1, "involucrado-avatar"], [1, "involucrado-info"], [1, "involucrado-nombre"], ["class", "involucrado-documento", 4, "ngIf"], [1, "involucrado-rol"], ["class", "involucrado-obs", 4, "ngIf"], ["class", "involucrado-fecha", 4, "ngIf"], ["class", "btn-remove", "title", "Remover", 3, "click", 4, "ngIf"], [1, "involucrado-documento"], [1, "involucrado-obs"], [1, "involucrado-fecha"], ["title", "Remover", 1, "btn-remove", 3, "click"], [1, "empty-state", "small"], [1, "empty-icon"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-icon"], [1, "timeline-content"], [1, "timeline-header"], [1, "timeline-title"], [1, "timeline-date"], [1, "timeline-body"], ["class", "timeline-changes", 4, "ngIf"], [1, "timeline-footer"], [1, "timeline-changes"], [1, "modal-container", "modal-sm"], [1, "modal-header", 2, "background", "linear-gradient(135deg, #10b981, #059669)", "color", "white"], [2, "font-size", "24px"], [1, "modal-close", 2, "color", "white", 3, "click"], ["class", "persona-seleccionada-card", 4, "ngIf"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-primary", 2, "background", "linear-gradient(135deg, #10b981, #059669)", 3, "click", "disabled"], [1, "persona-seleccionada-card"], [1, "seleccionada-header"], [1, "seleccionada-icon"], [1, "seleccionada-label"], [1, "seleccionada-info"], [1, "seleccionada-nombre"], [1, "label-help"], ["name", "rol", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "victima"], ["value", "testigo"], ["value", "acusado"], ["value", "representante"], ["value", "asesor"], ["value", "otro"], ["rows", "3", "name", "observaciones", "placeholder", "Detalles adicionales sobre su participaci\u00F3n...", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "info-box"], [1, "info-text"], [1, "modal-title", "text-danger"], [1, "confirmation-message"], [1, "text-small"], [1, "btn", "btn-danger", 3, "click"], [1, "modal-header", 2, "background", "linear-gradient(135deg, #3b82f6, #2563eb)", "color", "white"], [1, "search-input-wrapper"], [1, "search-icon"], ["type", "text", "placeholder", "Buscar personas...", "autofocus", "", 1, "form-input", "search-input", 3, "ngModelChange", "ngModel"], [1, "search-results-container"], ["class", "search-state", 4, "ngIf"], ["class", "results-list", 4, "ngIf"], [1, "modal-footer", 2, "border-top", "1px solid var(--border-color)", "margin-top", "16px", "padding-top", "16px"], ["class", "help-text", 4, "ngIf"], [1, "search-state"], [1, "loading-spinner"], [1, "spinner"], [1, "results-list"], ["class", "result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "result-item", 3, "click"], [1, "result-avatar"], ["class", "avatar-img", "alt", "Foto", 3, "src", "error", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "result-info"], [1, "result-subtitle"], [1, "doc-icon"], ["class", "result-badge", 4, "ngIf"], ["alt", "Foto", 1, "avatar-img", 3, "error", "src"], [1, "avatar-placeholder"], [1, "result-badge"], [1, "badge-active"], [1, "no-results"], [1, "no-results-icon"], [1, "no-results-title"], [1, "no-results-text"], [1, "no-results-suggestion"], [1, "min-chars-message"], [1, "initial-message"], [1, "initial-icon"], [1, "initial-text"], [1, "help-text"], [1, "qr-modal-overlay", 3, "click"], [1, "qr-modal", 3, "click"], [1, "qr-modal-header"], [1, "qr-modal-subtitle"], [1, "qr-modal-image"], ["alt", "QR de Denuncia", 3, "src", "error", 4, "ngIf"], [3, "value", "size", "errorCorrectionLevel", 4, "ngIf"], [1, "qr-modal-info"], [1, "persona-nombre"], ["class", "persona-documento", 4, "ngIf"], [1, "qr-modal-actions"], [1, "btn", "btn-secondary", 3, "click"], ["alt", "QR de Denuncia", 3, "error", "src"], [3, "value", "size", "errorCorrectionLevel"], [1, "persona-documento"], [1, "modal-overlay", 3, "click"], [1, "evidencia-modal", 3, "click"], [1, "evidencia-modal-header"], [1, "evidencia-modal-body"], ["class", "evidencia-img-container", 4, "ngIf"], [1, "evidencia-modal-footer"], [1, "evidencia-img-container"], [1, "evidencia-img", 3, "src", "alt"], ["width", "100%", "height", "500px", 1, "evidencia-pdf", 3, "src"], ["controls", "", "width", "100%", 1, "evidencia-video"], ["type", "video/mp4", 3, "src"], ["controls", "", "width", "100%", 1, "evidencia-audio"], [3, "src"], [1, "evidencia-texto"]],
    template: function DenunciasListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 6)(1, "app-menu", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("toggleSidebar", function DenunciasListComponent_Template_app_menu_toggleSidebar_1_listener() {
          return ctx.onToggleSidebar();
        })("toggleHelpSupport", function DenunciasListComponent_Template_app_menu_toggleHelpSupport_1_listener() {
          return ctx.onToggleHelpSupport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "main", 8)(3, "app-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("toggleNotifications", function DenunciasListComponent_Template_app_header_toggleNotifications_3_listener() {
          return ctx.onToggleNotifications();
        })("toggleUserMenu", function DenunciasListComponent_Template_app_header_toggleUserMenu_3_listener() {
          return ctx.onToggleUserMenu();
        })("markAllAsRead", function DenunciasListComponent_Template_app_header_markAllAsRead_3_listener() {
          return ctx.onMarkAllAsRead();
        })("openSearchModal", function DenunciasListComponent_Template_app_header_openSearchModal_3_listener() {
          return ctx.onOpenSearchModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, DenunciasListComponent_div_4_Template, 13, 6, "div", 10)(5, DenunciasListComponent_div_5_Template, 5, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 12)(7, "div", 13)(8, "div", 14)(9, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10, "\u2696\uFE0F Gesti\u00F3n de Denuncias");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12, "Administre las denuncias del sistema SIGPAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 17)(14, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_Template_button_click_14_listener() {
          return ctx.abrirModalCrear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "\u2795");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, " Nueva Denuncia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "button", 20)(19, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20, "\uD83D\uDCCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 21)(23, "div", 22)(24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25, "\uD83D\uDD0D Filtros de B\u00FAsqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_Template_button_click_26_listener() {
          return ctx.limpiarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "Limpiar filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div", 24)(29, "div", 25)(30, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](31, "C\u00F3digo Externo");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_Template_input_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.filtro.codigo_externo, $event) || (ctx.filtro.codigo_externo = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "div", 25)(34, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35, "N\u00B0 Expediente");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.filtro.numero_expediente, $event) || (ctx.filtro.numero_expediente = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "div", 25)(38, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_Template_select_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.filtro.estado_denuncia_id, $event) || (ctx.filtro.estado_denuncia_id = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](42, "Todos los estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](43, DenunciasListComponent_option_43_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 25)(45, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46, "Fecha Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_Template_input_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.filtro.fecha_inicio, $event) || (ctx.filtro.fecha_inicio = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "div", 25)(49, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](50, "Fecha Fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function DenunciasListComponent_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.filtro.fecha_fin, $event) || (ctx.filtro.fecha_fin = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "div", 25)(53, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function DenunciasListComponent_Template_button_click_53_listener() {
          return ctx.aplicarFiltros();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](55, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](56, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, DenunciasListComponent_div_57_Template, 21, 5, "div", 39)(58, DenunciasListComponent_ng_container_58_Template, 4, 17, "ng-container", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](59, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](60, DenunciasListComponent_div_60_Template, 167, 30, "div", 41)(61, DenunciasListComponent_div_61_Template, 30, 13, "div", 41)(62, DenunciasListComponent_div_62_Template, 20, 6, "div", 41)(63, DenunciasListComponent_div_63_Template, 19, 2, "div", 41)(64, DenunciasListComponent_div_64_Template, 17, 2, "div", 41)(65, DenunciasListComponent_div_65_Template, 30, 10, "div", 41)(66, DenunciasListComponent_div_66_Template, 21, 6, "div", 42)(67, DenunciasListComponent_div_67_Template, 21, 6, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](68, "app-footer", 44);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("dark-theme", ctx.currentTheme === "dark")("neon-theme", ctx.currentTheme === "neon")("sidebar-collapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showHelpSupport);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.codigo_externo);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.numero_expediente);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.estado_denuncia_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx.estadosDenuncia);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.fecha_inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.filtro.fecha_fin);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.denuncias.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](59, 29, ctx.pagination$));
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showDetailModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showInvolucradoModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showRemoveInvolucradoModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showPersonaSearchModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showQRModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.showEvidenciaModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("isSidebarCollapsed", ctx.isSidebarCollapsed)("isDarkTheme", ctx.isDarkTheme);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, ng_qrcode__WEBPACK_IMPORTED_MODULE_14__.QrCodeComponent, _dashboard_components_help_support_help_support_component__WEBPACK_IMPORTED_MODULE_17__.HelpSupportComponent, _layouts_menu_menu_component__WEBPACK_IMPORTED_MODULE_18__.MenuComponent, _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_20__.HeaderComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent, _components_denuncias_table_denuncias_table_component__WEBPACK_IMPORTED_MODULE_16__.DenunciasTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _shared_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_15__.FileSizePipe],
    styles: [".dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dashboard-container.sidebar-collapsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n  min-height: 100vh;\n  margin-top: 66px;\n  margin-left: 264px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;\n  width: calc(100% - 280px);\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.main-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.dashboard-container.sidebar.collapsed[_ngcontent-%COMP%]    ~ .main-content[_ngcontent-%COMP%] {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 500px !important;\n  min-width: 400px;\n}\n@media (max-width: 640px) {\n  .modal-sm[_ngcontent-%COMP%] {\n    min-width: 90%;\n    max-width: 95% !important;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n  position: relative;\n  z-index: 10;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  letter-spacing: -0.5px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  background: var(--bg-tertiary);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 32px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 20px 32px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n}\n.form-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 15px;\n  font-family: inherit;\n  transition: all 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--input-border-hover);\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--input-disabled-bg);\n  color: var(--input-disabled-text);\n  cursor: not-allowed;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: var(--input-error);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus {\n  box-shadow: var(--input-error-shadow);\n}\n.form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  line-height: 1.5;\n}\n.form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 16px center;\n  background-size: 16px;\n  padding-right: 44px;\n}\n.form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--danger);\n  margin-top: 4px;\n}\n.persona-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.persona-selector[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  background-color: var(--input-bg);\n}\n.persona-selector[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--bg-hover);\n}\n.persona-selector[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:read-only {\n  opacity: 0.9;\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.3s;\n  flex-shrink: 0;\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.persona-seleccionada-card[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  border: 2px solid var(--success);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--success);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .seleccionada-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success);\n  font-size: 16px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--success);\n  background: var(--bg-primary);\n  color: var(--success);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%]:hover {\n  background: var(--success);\n  color: white;\n}\n.evidencia-upload-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 16px;\n  background: var(--bg-primary);\n  transition: all 0.3s ease;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-color);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-header[_ngcontent-%COMP%]   .evidencia-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-light);\n  border-radius: 6px;\n  color: var(--primary);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-header[_ngcontent-%COMP%]   .evidencia-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  flex: 1;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-header[_ngcontent-%COMP%]   .evidencia-count[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed var(--border-color);\n  border-radius: 8px;\n  padding: 24px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background: var(--bg-secondary);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--primary-light);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%]:hover   .upload-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n  margin-bottom: 8px;\n  color: var(--text-muted);\n  transition: all 0.3s ease;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 4px;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .evidencia-upload-area[_ngcontent-%COMP%]   .upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px;\n  background: var(--bg-secondary);\n  border-radius: 6px;\n  margin-bottom: 6px;\n  transition: all 0.3s ease;\n  border: 1px solid transparent;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--bg-primary);\n  transform: translateX(2px);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]   .archivo-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 16px;\n  color: var(--primary);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]   .archivo-nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]   .archivo-tamano[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]   .archivo-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: all 0.3s ease;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: var(--danger);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .archivos-lista[_ngcontent-%COMP%]   .archivo-item[_ngcontent-%COMP%]   .archivo-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: var(--danger-light);\n  transform: scale(1.1);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 12px;\n  margin-top: 16px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  aspect-ratio: 1;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: scale(1.02);\n  box-shadow: var(--shadow-md);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]:hover   .foto-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]   .foto-preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]   .foto-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.6);\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: white;\n  opacity: 0;\n  transition: all 0.3s ease;\n  font-size: 14px;\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]   .foto-remove[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  transform: rotate(90deg) scale(1.1);\n}\n.evidencia-upload-section[_ngcontent-%COMP%]   .fotos-preview[_ngcontent-%COMP%]   .foto-preview-item[_ngcontent-%COMP%]   .foto-nombre[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 0.65rem;\n  padding: 4px 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.terms-container[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  border-left: 4px solid var(--primary);\n}\n.terms-container[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n  line-height: 1.5;\n  text-align: center;\n}\n.form-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--border-color);\n  transition: 0.3s;\n  border-radius: 34px;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background: white;\n  transition: 0.3s;\n  border-radius: 50%;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n  transform: translateY(-2px);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  font-size: 1rem;\n}\n.btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-search[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.btn-search[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-search[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 16px;\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: var(--shadow-sm);\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: var(--shadow-sm);\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n  box-shadow: var(--shadow-sm);\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border-color);\n}\n.detail-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--primary);\n}\n.detail-section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  font-size: 0.875rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  font-weight: 500;\n  word-break: break-word;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin: 20px 0;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 10px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--border-color);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -26px;\n  top: 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 2px solid var(--bg-primary);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-description[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.search-results-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n  margin-top: 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  background: var(--bg-primary);\n}\n.search-results-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.search-results-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.search-results-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.search-results-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-bottom: 1px solid var(--border-light);\n}\n.search-result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  padding-left: 24px;\n}\n.search-result-item[_ngcontent-%COMP%]:hover   .result-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary);\n}\n.search-result-item[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  min-width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-light);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-muted);\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 12px;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n}\n.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: 95vh;\n  }\n  .modal-sm[_ngcontent-%COMP%] {\n    min-width: 95%;\n  }\n  .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n}\n.denuncia-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 24px;\n  background: var(--bg-primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.filtros-container[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-hover);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  font-size: 14px;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: var(--input-focus-shadow);\n}\n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.filtros-container[_ngcontent-%COMP%]   .filtros-grid[_ngcontent-%COMP%]   .filtro-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.stats-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  border: 1px solid var(--card-border);\n  transition: all 0.3s;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 8px;\n  line-height: 1;\n}\n.stats-container[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--card-border);\n  box-shadow: var(--shadow-sm);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n}\n.table-container[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]   .table-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.table-container[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-bottom: 2px solid var(--border-color);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-light);\n  transition: all 0.3s;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-secondary);\n  font-size: 14px;\n  vertical-align: middle;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .codigo-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary);\n  font-family: 'Monaco', 'Courier New', monospace;\n}\n.table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .expediente-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.qr-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  border: none;\n  border-radius: 8px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.qr-cell[_ngcontent-%COMP%]   .btn-qr-view[_ngcontent-%COMP%]   .qr-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.qr-cell[_ngcontent-%COMP%]   .qr-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-count[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .evidencia-detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-left: 4px;\n}\n.evidencia-cell[_ngcontent-%COMP%]   .sin-evidencia[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-style: italic;\n  font-size: 0.75rem;\n}\n.estado-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.estado-badge.estado-ingresada[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-badge.estado-revision[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-badge.estado-investigacion[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.estado-badge.estado-resuelta[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-badge.estado-archivada[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.estado-badge.estado-desconocido[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.estado-procesal-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.estado-procesal-badge.estado-remision[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-sentencia-ejecutada[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-procesal-badge.estado-sentencia[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-procesal-badge.estado-medida[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.estado-procesal-badge.estado-completa[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.estado-procesal-badge.estado-proceso[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-tramite[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.view[_ngcontent-%COMP%]:hover {\n  background: var(--info);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.actions-cell[_ngcontent-%COMP%]   .actions-buttons[_ngcontent-%COMP%]   .btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-top: 1px solid var(--border-color);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 14px;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 20px;\n  opacity: 0.6;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n}\n.detail-modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 900px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n  overflow-y: auto;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  background: var(--gradient-primary);\n  color: white;\n  position: relative;\n  z-index: 10;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-codigo[_ngcontent-%COMP%] {\n  font-family: 'JetBrains Mono', monospace;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin-left: 12px;\n  font-size: 0.9rem;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.detail-modal-container[_ngcontent-%COMP%]   .detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: rotate(90deg);\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border-color);\n  padding: 0 24px;\n  background: var(--bg-primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 10px;\n  min-width: 20px;\n  text-align: center;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.detail-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.evidencia-detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--border-light);\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]   .evidencia-icon-detail[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.evidencia-detail[_ngcontent-%COMP%]   .evidencia-item-detail[_ngcontent-%COMP%]   .evidencia-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n}\n.evidencia-detail[_ngcontent-%COMP%]   .no-evidencia[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-style: italic;\n  font-size: 0.875rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.dark-theme[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n  margin-left: 2px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  background: var(--input-bg);\n  color: var(--text-primary);\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--input-focus);\n  box-shadow: var(--input-focus-shadow);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--placeholder-color);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 12px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 400px;\n  overflow: hidden;\n  border: 1px solid var(--modal-border);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  border-bottom: 1px solid var(--border-color);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n  transform: rotate(90deg);\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  text-align: center;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   .confirm-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.8;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-body[_ngcontent-%COMP%]   p.confirm-warning[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 500;\n}\n.confirm-modal[_ngcontent-%COMP%]   .confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--gradient-danger);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 24px;\n  color: var(--text-secondary);\n}\n.loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .denuncia-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n    text-align: center;\n  }\n  .filtros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;\n  }\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    margin: 0;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .detail-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n  }\n  .detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 12px;\n    font-size: 0.75rem;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 4px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.detail-modal-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 220px;\n  right: 0;\n  bottom: 0;\n  background: var(--modal-overlay);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.detail-modal-container[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 20px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n  border: 1px solid var(--modal-border);\n}\n.detail-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 28px;\n  background: var(--gradient-primary);\n  color: white;\n  position: relative;\n  z-index: 10;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  flex-shrink: 0;\n}\n.detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0;\n}\n.detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n}\n.detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-codigo[_ngcontent-%COMP%] {\n  font-family: 'JetBrains Mono', 'Monaco', monospace;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-left: 10px;\n  font-size: 0.8rem;\n  letter-spacing: 0.5px;\n}\n.detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 20px;\n}\n.detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n  transform: rotate(90deg) scale(1.1);\n}\n.detail-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  border-bottom: 1px solid var(--border-color);\n  padding: 0 20px;\n  background: var(--bg-primary);\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.detail-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 3px;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: none;\n  border: none;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background: var(--bg-hover);\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary);\n  border-radius: 3px 3px 0 0;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  padding: 2px 6px;\n  border-radius: 20px;\n  min-width: 20px;\n  text-align: center;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  flex: 1;\n  overflow-y: auto;\n  background: var(--bg-primary);\n  max-height: calc(90vh - 130px);\n}\n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.tab-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.info-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid var(--border-color);\n}\n.info-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px 24px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 16px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  background: var(--bg-hover);\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]   .label-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  font-weight: 500;\n  word-break: break-word;\n}\n.info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-value.codigo-value[_ngcontent-%COMP%] {\n  font-family: 'Monaco', monospace;\n  color: var(--primary);\n  font-weight: 600;\n}\n.estado-procesal-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.estado-procesal-badge.estado-remision[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-sentencia-ejecutada[_ngcontent-%COMP%], \n.estado-procesal-badge.estado-resuelta[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.estado-procesal-badge.estado-sentencia[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-procesal-badge.estado-medida[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.estado-procesal-badge.estado-completa[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.estado-procesal-badge.estado-proceso[_ngcontent-%COMP%], \n.estado-procesal-badge.estado-investigacion[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.estado-procesal-badge.estado-tramite[_ngcontent-%COMP%], \n.estado-procesal-badge.estado-revision[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.estado-procesal-badge.estado-ingresada[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.estado-procesal-badge.estado-archivada[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.descripcion-container[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 8px;\n}\n.descripcion-container[_ngcontent-%COMP%]   .descripcion-texto[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n  font-size: 0.9rem;\n  margin: 0;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.evidencia-grupo[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.evidencia-grupo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.evidencia-lista[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  background: var(--bg-hover);\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]   .evidencia-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]   .evidencia-nombre[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.85rem;\n  color: var(--text-primary);\n  word-break: break-word;\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]   .evidencia-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]   .evidencia-acciones[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 6px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  color: var(--text-secondary);\n}\n.evidencia-lista[_ngcontent-%COMP%]   .evidencia-item[_ngcontent-%COMP%]   .evidencia-acciones[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-primary);\n  transform: scale(1.1);\n  color: var(--primary);\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--bg-tertiary);\n  aspect-ratio: 1;\n  transition: all 0.3s ease;\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: var(--shadow-md);\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%]:hover   .foto-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%]   .foto-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%]   .foto-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.evidencia-grid-fotos[_ngcontent-%COMP%]   .evidencia-foto[_ngcontent-%COMP%]   .foto-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: white;\n}\n.no-evidencia[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  border: 1px dashed var(--border-color);\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.involucrados-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.involucrado-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 18px;\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  border-left: 4px solid var(--primary);\n}\n.involucrado-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  background: var(--bg-hover);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-nombre[_ngcontent-%COMP%]   .involucrado-documento[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: normal;\n  font-family: monospace;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-victima[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-testigo[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-acusado[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-representante[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-asesor[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-rol[_ngcontent-%COMP%]   .rol-badge.rol-otro[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-obs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%]   .involucrado-fecha[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.involucrado-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  border: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: var(--danger);\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.involucrado-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n  color: white;\n  transform: scale(1.1);\n}\n.empty-state.small[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  border: 1px dashed var(--border-color);\n}\n.empty-state.small[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n  opacity: 0.5;\n}\n.empty-state.small[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  margin-bottom: 6px;\n}\n.empty-state.small[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px 0 8px 32px;\n  margin: 0;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 12px;\n  top: 12px;\n  bottom: 12px;\n  width: 2px;\n  background: linear-gradient(to bottom, var(--primary), var(--border-color) 30%, var(--border-color) 70%, var(--primary));\n  border-radius: 2px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -24px;\n  top: 6px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--primary);\n  border: 2px solid var(--bg-primary);\n  z-index: 1;\n  transition: all 0.3s ease;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:hover::before {\n  transform: scale(1.3);\n  box-shadow: 0 0 0 4px var(--primary-light);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 14px 16px;\n  transition: all 0.3s ease;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  transform: translateX(4px);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: var(--primary);\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]   .timeline-changes[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  overflow-x: auto;\n}\n.timeline[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   .timeline-footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 6px;\n  border-top: 1px solid var(--border-light);\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.evidencia-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 16px;\n  max-width: 90vw;\n  max-height: 90vh;\n  width: 800px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--modal-border);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--modal-header-bg);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 8px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: rotate(90deg);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n  background: var(--bg-primary);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%]   .evidencia-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 60vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%]   .evidencia-pdf[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60vh;\n  border: none;\n  border-radius: 8px;\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%]   .evidencia-video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 60vh;\n  border-radius: 8px;\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%]   .evidencia-audio[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-body[_ngcontent-%COMP%]   .evidencia-texto[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n  max-height: 60vh;\n  overflow: auto;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 8px;\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: var(--text-primary);\n}\n.evidencia-modal[_ngcontent-%COMP%]   .evidencia-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .detail-modal-container[_ngcontent-%COMP%] {\n    max-height: 95vh;\n    border-radius: 16px;\n  }\n  .detail-modal-header[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n  }\n  .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .detail-modal-header[_ngcontent-%COMP%]   .detail-modal-title[_ngcontent-%COMP%]   .detail-codigo[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-left: 6px;\n  }\n  .detail-tabs[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.75rem;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .evidencia-grid-fotos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 10px;\n  }\n  .involucrado-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .involucrado-card[_ngcontent-%COMP%]   .involucrado-avatar[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n    font-size: 1.5rem;\n  }\n  .involucrado-card[_ngcontent-%COMP%]   .involucrado-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 24px;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 8px;\n  }\n  .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]::before {\n    left: -18px;\n  }\n  .evidencia-modal[_ngcontent-%COMP%] {\n    width: 95vw;\n  }\n}\n@media (max-width: 480px) {\n  .detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 0.7rem;\n  }\n  .detail-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .evidencia-grid-fotos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n    gap: 8px;\n  }\n  .involucrado-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .timeline-content[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n}\n.qr-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 220px;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.85);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.qr-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg);\n  border-radius: 24px;\n  max-width: 480px;\n  width: 90%;\n  padding: 28px 24px 24px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  border: 1px solid var(--modal-border);\n  box-shadow: var(--shadow-xl);\n  transition: all 0.3s ease;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin: 0 0 6px 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCF1';\n  font-size: 1.4rem;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   .qr-modal-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  margin: 0;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  background: var(--bg-tertiary);\n  border-radius: 16px;\n  border: 1px solid var(--border-color);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n  background: white;\n  padding: 8px;\n  box-shadow: var(--shadow-md);\n  transition: all 0.3s ease;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: var(--shadow-lg);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  display: block;\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  border: 1px solid var(--border-color);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  max-width: 200px;\n  height: auto;\n  border-radius: 8px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  padding: 14px 16px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDC64';\n  font-size: 1rem;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-documento[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-documento[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCC4';\n  font-size: 0.8rem;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .denuncia-info[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--border-light);\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .denuncia-info[_ngcontent-%COMP%]::before {\n  content: '\u2696\uFE0F';\n  font-size: 0.75rem;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  flex: 1;\n  justify-content: center;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n.qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .qr-modal[_ngcontent-%COMP%] {\n    max-width: 420px;\n    padding: 20px 16px 20px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 180px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n    max-width: 160px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    margin-bottom: 20px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .qr-modal[_ngcontent-%COMP%] {\n    max-width: 95%;\n    padding: 16px 12px 16px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   .qr-modal-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n    padding: 10px;\n    margin-bottom: 16px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 140px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    margin-bottom: 16px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-documento[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px 12px;\n  }\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%] {\n  background: var(--neon-surface, #111111);\n  border: 1px solid var(--neon-border, #bf4ff7);\n  box-shadow: var(--neon-shadow-strong, 0 0 20px rgba(191, 79, 247, 0.5));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--neon-text, #bf4ff7);\n  text-shadow: 0 0 5px var(--neon-primary);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   .qr-modal-subtitle[_ngcontent-%COMP%] {\n  color: var(--neon-text-secondary, #d47fff);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n  background: var(--neon-surface-light, #1a1a1a);\n  border-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: var(--neon-shadow, 0 0 10px rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n  background: var(--neon-surface-light, #1a1a1a);\n  border-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-nombre[_ngcontent-%COMP%] {\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .persona-documento[_ngcontent-%COMP%] {\n  color: var(--neon-text-secondary, #d47fff);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%]   .denuncia-info[_ngcontent-%COMP%] {\n  color: var(--neon-text-muted, rgba(191, 79, 247, 0.6));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--neon-border, #bf4ff7);\n  color: var(--neon-text, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(191, 79, 247, 0.1);\n  border-color: var(--neon-primary, #bf4ff7);\n  box-shadow: var(--neon-shadow, 0 0 10px rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--neon-primary, #bf4ff7), var(--neon-secondary, #b537f2));\n  color: #000;\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--neon-shadow-strong, 0 0 20px rgba(191, 79, 247, 0.5));\n  filter: brightness(1.1);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%] {\n  background: var(--modal-bg, #1f2937);\n  border-color: var(--modal-border, #374151);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary, #f9fafb);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-image[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n}\nbody.dark-theme[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%]   .qr-modal-info[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n}\n.qr-container[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  border-radius: 12px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  transition: all 0.3s ease;\n  margin-top: 8px;\n}\n.qr-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.qr-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 2px solid var(--border-color);\n  background: white;\n  padding: 8px;\n  transition: all 0.3s ease;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge.qr-generado[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-unique[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  font-family: monospace;\n  word-break: break-all;\n  max-width: 200px;\n}\n.qr-temp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.qr-temp[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  display: block;\n  background: white;\n  border-radius: 12px;\n  padding: 8px;\n  border: 2px solid var(--border-color);\n}\n.qr-temp[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 114px;\n  height: 114px;\n  border-radius: 8px;\n}\n.qr-temp[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.qr-temp[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.qr-temp[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge.qr-generando[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.qr-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 16px;\n}\n.qr-empty[_ngcontent-%COMP%]   .qr-empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  opacity: 0.6;\n}\n.qr-empty[_ngcontent-%COMP%]   .qr-empty-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n  margin-bottom: 12px;\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  background: var(--primary-light);\n  color: var(--primary);\n  border: 1px solid var(--primary);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]   .btn-icon.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.qr-readonly[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 12px 16px;\n  background: var(--bg-tertiary);\n  border-radius: 10px;\n  border: 1px dashed var(--border-color);\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-readonly-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-readonly-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.qr-readonly[_ngcontent-%COMP%]   .qr-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  font-style: italic;\n}\n.qr-unique-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--info-light);\n  color: var(--info);\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  margin-left: 8px;\n  vertical-align: middle;\n}\n.qr-unique-badge[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD10';\n  font-size: 0.65rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@media (max-width: 768px) {\n  .qr-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .qr-preview[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .qr-temp[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n    width: 84px;\n    height: 84px;\n  }\n  .qr-empty[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .qr-empty[_ngcontent-%COMP%]   .qr-empty-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%] {\n    padding: 6px 16px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .qr-preview[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .qr-temp[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .qr-readonly-message[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%] {\n  background: var(--neon-surface, #1a1a1a);\n  border-color: var(--neon-border-dim, rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--neon-primary, #bf4ff7);\n  box-shadow: var(--neon-shadow, 0 0 10px rgba(191, 79, 247, 0.3));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-preview[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  border-color: var(--neon-border, #bf4ff7);\n  box-shadow: var(--neon-shadow);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge.qr-generado[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 135, 0.15);\n  color: var(--neon-success, #00ff87);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-preview[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-unique[_ngcontent-%COMP%] {\n  color: var(--neon-text-muted, rgba(191, 79, 247, 0.6));\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-temp[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  border-color: var(--neon-border, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-temp[_ngcontent-%COMP%]   .qr-info[_ngcontent-%COMP%]   .qr-badge.qr-generando[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 107, 0.15);\n  color: var(--neon-danger, #ff6b6b);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-empty[_ngcontent-%COMP%]   .qr-empty-text[_ngcontent-%COMP%] {\n  color: var(--neon-text-muted);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%] {\n  background: rgba(191, 79, 247, 0.1);\n  color: var(--neon-text, #bf4ff7);\n  border-color: var(--neon-border, #bf4ff7);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-empty[_ngcontent-%COMP%]   .btn-generar-qr[_ngcontent-%COMP%]:hover {\n  background: var(--neon-primary, #bf4ff7);\n  color: #000;\n  box-shadow: var(--neon-shadow);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-readonly[_ngcontent-%COMP%] {\n  background: rgba(191, 79, 247, 0.05);\n  border-color: var(--neon-border-dim);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-readonly[_ngcontent-%COMP%]   .qr-readonly-message[_ngcontent-%COMP%] {\n  color: var(--neon-text-secondary, #d47fff);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-readonly[_ngcontent-%COMP%]   .qr-help[_ngcontent-%COMP%] {\n  color: var(--neon-text-muted);\n}\nbody.neon-theme[_ngcontent-%COMP%]   .qr-unique-badge[_ngcontent-%COMP%] {\n  background: rgba(191, 79, 247, 0.15);\n  color: var(--neon-text, #bf4ff7);\n}\n.chatbot-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .modal-overlay-sigpaz[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.chatbot-overlay.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  pointer-events: auto !important;\n  z-index: 10001 !important;\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode) {\n  pointer-events: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n.chatbot-overlay[_ngcontent-%COMP%]:not(.minimized-mode)   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  background: transparent !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-container[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-header[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-content[_ngcontent-%COMP%], \n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-footer[_ngcontent-%COMP%] {\n  display: none !important;\n  visibility: hidden !important;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  visibility: visible !important;\n  pointer-events: auto !important;\n}\n.chatbot-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  z-index: 10002;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 800px;\n  width: auto;\n}\n.chatbot-container[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.chatbot-container.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: var(--gradient-primary);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--gradient-primary);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, var(--primary-hover), var(--security));\n}\n.chatbot-content[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.chatbot-footer[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 25px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s;\n  border: none;\n  font-family: inherit;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  color: var(--text-primary);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--border-dark);\n  transform: translateY(-2px);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border: none;\n  color: white;\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.chatbot-footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.chatbot-minimized[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: var(--gradient-primary);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: var(--shadow-md);\n  cursor: pointer;\n  z-index: 10002;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .chatbot-minimized[_ngcontent-%COMP%] {\n  display: flex !important;\n  pointer-events: auto !important;\n  z-index: 10003 !important;\n}\n.chatbot-minimized[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: var(--shadow-lg);\n}\n.chatbot-minimized.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.chatbot-minimized[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: var(--shadow-md);\n  }\n  50% {\n    box-shadow: var(--shadow-lg);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--primary);\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@media (max-width: 1024px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized):not(.maximized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .chatbot-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n  }\n  .chatbot-footer[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .chatbot-header[_ngcontent-%COMP%]   .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .chatbot-minimized[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .chatbot-container[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .chatbot-minimized[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.chatbot-container.maximized[_ngcontent-%COMP%] {\n  width: 100vw !important;\n  height: 100vh !important;\n  max-width: 100vw !important;\n  max-height: 100vh !important;\n  border-radius: 0;\n  margin: 0;\n}\n.chatbot-container.maximized[_ngcontent-%COMP%]   .modal-body-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%] {\n  margin: 20px 15px;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background: var(--gradient-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  transition: left 0.7s;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]:hover:hover::after {\n  left: 100%;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 12px;\n  animation: _ngcontent-%COMP%_pulseIcon 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseIcon {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-text[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n  letter-spacing: 0.8px;\n}\n.sidebar-chat-sigpaz[_ngcontent-%COMP%]   .chat-sigpaz-btn[_ngcontent-%COMP%]   .chat-badge[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: white;\n  font-size: 13px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_pulseBadge 2s infinite;\n  margin-left: 10px;\n}\n@keyframes _ngcontent-%COMP%_pulseBadge {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.modal-sm[_ngcontent-%COMP%] {\n  max-width: 550px !important;\n  min-width: 400px;\n}\n@media (max-width: 640px) {\n  .modal-sm[_ngcontent-%COMP%] {\n    min-width: 90%;\n    max-width: 95% !important;\n  }\n}\n.persona-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.persona-selector[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  background-color: var(--input-bg);\n  transition: all 0.3s ease;\n}\n.persona-selector[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--bg-hover);\n  border-color: var(--primary);\n}\n.persona-selector[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:read-only {\n  opacity: 0.9;\n  cursor: pointer;\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.3s;\n  flex-shrink: 0;\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  border-color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.persona-seleccionada-card[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  border: 2px solid var(--success);\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fadeInScale 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeInScale {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--success);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .seleccionada-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success);\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .seleccionada-nombre[_ngcontent-%COMP%]   .seleccionada-documento[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: normal;\n  background: var(--bg-primary);\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  border: 1px solid var(--success);\n  background: var(--bg-primary);\n  color: var(--success);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%]:hover {\n  background: var(--success);\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-sm);\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 8px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: var(--text-muted);\n  flex-wrap: wrap;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%]   .detalle-item[_ngcontent-%COMP%]   .detalle-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDD0D';\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  padding-right: 40px;\n  width: 100%;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--danger);\n  transform: scale(1.1);\n}\n.search-results-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  margin-top: 16px;\n}\n.search-results-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.search-results-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.search-results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.search-results-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.search-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  color: var(--text-secondary);\n}\n.loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.results-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 10px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  transform: translateX(4px);\n  box-shadow: var(--shadow-sm);\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-subtitle[_ngcontent-%COMP%]   .doc-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-badge[_ngcontent-%COMP%]   .badge-active[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 10px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: var(--bg-hover);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-suggestion[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 16px;\n  border-radius: 8px;\n  text-align: left;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.no-results[_ngcontent-%COMP%]   .no-results-suggestion[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  display: block;\n  margin-bottom: 8px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-suggestion[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.no-results[_ngcontent-%COMP%]   .no-results-suggestion[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.min-chars-message[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  color: var(--text-secondary);\n}\n.min-chars-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 8px;\n}\n.min-chars-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.initial-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 16px;\n}\n.initial-message[_ngcontent-%COMP%]   .initial-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  opacity: 0.3;\n}\n.initial-message[_ngcontent-%COMP%]   .initial-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.help-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-left: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border-color);\n  background: var(--modal-footer-bg);\n}\n.modal-footer[_ngcontent-%COMP%]   .footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .persona-selector[_ngcontent-%COMP%]   .btn-search-persona[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 16px;\n  }\n  .persona-seleccionada-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-info[_ngcontent-%COMP%]   .btn-cambiar-persona[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .modal-sm[_ngcontent-%COMP%] {\n    min-width: 95%;\n  }\n}\n@media (max-width: 480px) {\n  .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-detalle[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .results-list[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-badge[_ngcontent-%COMP%] {\n    margin-left: 52px;\n  }\n}\n.involucrados-temp-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 12px;\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 4px;\n}\n.involucrados-temp-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.involucrados-temp-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--bg-tertiary);\n  border-radius: 3px;\n}\n.involucrados-temp-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary);\n  border-radius: 3px;\n}\n.involucrados-temp-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-hover);\n}\n.involucrado-temp-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 16px;\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-sm);\n  background: var(--bg-hover);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]:hover   .inv-actions[_ngcontent-%COMP%]   .btn-rol[_ngcontent-%COMP%], \n.involucrado-temp-item[_ngcontent-%COMP%]:hover   .inv-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%]   .inv-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%]   .inv-avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-primary);\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-nombre[_ngcontent-%COMP%]   .inv-documento[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: normal;\n  font-family: monospace;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge[_ngcontent-%COMP%]::before {\n  content: '\uD83C\uDFAD';\n  font-size: 10px;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-victima[_ngcontent-%COMP%] {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-testigo[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  color: var(--info);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-acusado[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-representante[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-asesor[_ngcontent-%COMP%] {\n  background: var(--security-light);\n  color: var(--security);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge.rol-otro[_ngcontent-%COMP%] {\n  background: var(--secondary-light);\n  color: var(--secondary);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol-placeholder[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: var(--warning-light);\n  color: var(--warning);\n  font-size: 11px;\n  font-weight: 600;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol-placeholder[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%]::before {\n  content: '\u26A0\uFE0F';\n  font-size: 10px;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-observaciones[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--bg-tertiary);\n  padding: 4px 8px;\n  border-radius: 6px;\n  width: fit-content;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-observaciones[_ngcontent-%COMP%]::before {\n  content: '\uD83D\uDCDD';\n  font-size: 10px;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-rol[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  background: linear-gradient(135deg, var(--primary), var(--primary-hover));\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  opacity: 0.7;\n  transform: scale(0.95);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-rol[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(10deg);\n  box-shadow: var(--shadow-md);\n  opacity: 1;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-rol[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: none;\n  background: linear-gradient(135deg, var(--danger), var(--danger-hover));\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  opacity: 0.7;\n  transform: scale(0.95);\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(10deg);\n  box-shadow: var(--shadow-md);\n  opacity: 1;\n}\n.involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.btn-add-involucrado[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  margin-bottom: 12px;\n  padding: 12px !important;\n  border: 2px dashed var(--border-color) !important;\n  background: transparent !important;\n  color: var(--text-secondary) !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n}\n.btn-add-involucrado[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary) !important;\n  color: var(--primary) !important;\n  background: var(--primary-light) !important;\n  transform: translateY(-2px);\n}\n.btn-add-involucrado[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .persona-seleccionada-card[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  margin-bottom: 20px;\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-header[_ngcontent-%COMP%]   .seleccionada-label[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .persona-seleccionada-card[_ngcontent-%COMP%]   .seleccionada-nombre[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background: var(--info-light);\n  border-left: 3px solid var(--info);\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  flex: 1;\n}\n.modal-container.modal-sm[_ngcontent-%COMP%]   .label-help[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: normal;\n  margin-left: 6px;\n}\n@media (max-width: 768px) {\n  .involucrado-temp-item[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 10px;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%]   .inv-avatar-placeholder[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-nombre[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol[_ngcontent-%COMP%]   .rol-badge[_ngcontent-%COMP%], \n   .involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%]   .inv-rol-placeholder[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 3px 8px;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-rol[_ngcontent-%COMP%], \n   .involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .involucrado-temp-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-avatar[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-info[_ngcontent-%COMP%] {\n    order: 2;\n    flex: 1;\n  }\n  .involucrado-temp-item[_ngcontent-%COMP%]   .inv-actions[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 8px;\n  }\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode) {\n  cursor: pointer;\n  pointer-events: auto;\n}\n.modal-overlay-sigpaz[_ngcontent-%COMP%]:not(.minimized-mode)::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n  cursor: pointer;\n  pointer-events: auto;\n  z-index: -1;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.modal-overlay-sigpaz.minimized-mode[_ngcontent-%COMP%]   .floating-bubble[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  z-index: 10001;\n  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  max-width: 98vw;\n  max-height: 98vh;\n  min-width: 400px;\n  width: auto;\n}\n.modal-content-sigpaz.minimized[_ngcontent-%COMP%] {\n  display: none;\n}\n.modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n  animation: _ngcontent-%COMP%_modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 25px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  border-radius: 15px 15px 0 0;\n  flex-shrink: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  animation: _ngcontent-%COMP%_iconBounce 2s infinite;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.15);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  border-color: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]   .btn-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 10002;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn[_ngcontent-%COMP%]:hover   .btn-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  bottom: -30px;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.minimize-btn.animating[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_minimizeAnimation 0.5s ease;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 50, 50, 0.2) !important;\n  border-color: rgba(255, 50, 50, 0.3) !important;\n}\n.modal-header-sigpaz[_ngcontent-%COMP%]   .modal-controls[_ngcontent-%COMP%]   .modal-btn.close-modal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 50, 50, 0.3) !important;\n  border-color: rgba(255, 50, 50, 0.5) !important;\n  animation: _ngcontent-%COMP%_shake 0.5s ease;\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  background: transparent;\n  border-radius: 0 0 15px 15px;\n  overflow: visible;\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.modal-body[_ngcontent-%COMP%] {\n  background: transparent;\n  overflow-y: auto;\n  max-height: 85vh;\n  border-radius: 0 0 15px 15px;\n  width: 100%;\n  padding: 0;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(241, 241, 241, 0.3);\n  border-radius: 5px;\n  margin: 5px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  border-radius: 5px;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: linear-gradient(135deg, #6366f1, #4f46e5);\n}\n.modal-body[_ngcontent-%COMP%]   app-help-support[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n.floating-bubble[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: linear-gradient(135deg, #4f46e5, #6366f1);\n  color: white;\n  padding: 15px 25px;\n  border-radius: 50px;\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  cursor: pointer;\n  z-index: 10002;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_bubbleAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transition: all 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.floating-bubble[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px) scale(1.05);\n  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.7);\n}\n.floating-bubble.pulsing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bubblePulse 2s infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  animation: _ngcontent-%COMP%_spinSlow 3s linear infinite;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-text[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1.5px;\n  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 0.3s ease;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg) scale(1.2);\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-close[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1;\n}\n.floating-bubble[_ngcontent-%COMP%]   .bubble-notification[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #4f46e5;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_notificationSlide 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -48%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_minimizeAnimation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.8) rotate(-10deg);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  75% {\n    transform: translateX(3px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bubbleAppear {\n  0% {\n    transform: translateY(100px) scale(0.3) rotate(-180deg);\n    opacity: 0;\n  }\n  70% {\n    transform: translateY(-10px) scale(1.1) rotate(10deg);\n  }\n  100% {\n    transform: translateY(0) scale(1) rotate(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bubblePulse {\n  0%,\n  100% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.5);\n  }\n  50% {\n    box-shadow: 0 15px 40px rgba(79, 70, 229, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_spinSlow {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_notificationSlide {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1024px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 90vw;\n    width: 90vw;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 80vh;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 95vw !important;\n    width: 95vw !important;\n    max-height: 90vh;\n  }\n  .modal-header-sigpaz[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .modal-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: 75vh;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    padding: 12px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content-sigpaz[_ngcontent-%COMP%]:not(.minimized) {\n    min-width: 100vw !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .modal-body-wrapper[_ngcontent-%COMP%] {\n    border-radius: 0;\n    flex: 1;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 70px);\n    border-radius: 0;\n  }\n  .floating-bubble[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 15px;\n    padding: 10px 16px;\n  }\n  .bubble-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZW51bmNpYXMvcGFnZXMvZGVudW5jaWFzLWxpc3QvZGVudW5jaWFzLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUEvQkY7QUFrQ0U7RUFHSSxpQkFBQTtBQWxDTjtBQXlDQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsK0NBQUE7RUFDQyx5QkFBQTtBQXZDSDtBQXlDRTtFQUNFLFVBQUE7QUF2Q0o7QUEwQ0U7RUFDRSx1QkFBQTtBQXhDSjtBQTJDRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7QUEyQ0k7RUFDRSw4QkFBQTtBQXpDTjtBQTZDRTtFQUNFLGlCQUFBO0VBQ0Usd0JBQUE7QUEzQ047QUFtREE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBakRGO0FBcURBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUFuREY7QUF1REE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBckRGO0FBdURFO0VBQUE7SUFDRSxjQUFBO0lBQ0EseUJBQUE7RUFwREY7QUFDRjtBQXdEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FB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QkFBQTtFQXZwQ0Y7RUEwcENBO0lBQ0Usa0JBQUE7RUF4cENGO0VBMnBDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBenBDRjtFQTRwQ0E7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7RUExcENGO0VBNnBDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUEzcENGO0FBQ0Y7QUE4cENBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBNXBDRjtFQStwQ0E7SUFDRSxnQkFBQTtJQUNBLE9BQUE7RUE3cENGO0VBZ3FDQTtJQUNFLDhCQUFBO0lBQ0EsZ0JBQUE7RUE5cENGO0VBaXFDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUEvcENGO0VBa3FDQTtJQUNFLGVBQUE7RUFocUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gREVOVU5DSUFTIENPTVBPTkVOVCAtIEVTVElMT1MgQ09OIFZBUklBQkxFUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTm90YTogVG9kYXMgbGFzIHZhcmlhYmxlcyBDU1MgdmllbmVuIGRlZmluaWRhcyBlbiB0aGVtZXMubGVzc1xuLy8gU2UgYWNjZWRlbiBtZWRpYW50ZSB2YXIoLS1ub21icmUtdmFyaWFibGUpXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTSVNURU1BIERFIEVTUEFDSUFETyAodXNhbmRvIHZhcmlhYmxlcyBDU1MpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0lTVEVNQSBERSBCT1JERVIgUkFESVVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVkFSSUFCTEVTIEdMT0JBTEVTIChhY3R1YWxpemFkYXMpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRyYW5zaXRpb24tc3BlZWQ6IDAuM3M7XG5Ac2lkZWJhci13aWR0aDogMjgwcHg7XG5Ac2lkZWJhci1jb2xsYXBzZWQtd2lkdGg6IDcwcHg7XG5cbi8vIFNjcm9sbGJhciBwZXJzb25hbGl6YWRvXG5Ac2Nyb2xsYmFyLXRyYWNrOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuQHNjcm9sbGJhci10aHVtYjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuQHNjcm9sbGJhci10aHVtYi1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5FRE9SIFBSSU5DSVBBTCBERSBERU5VTkNJQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG4gIC8vIEN1YW5kbyBlbCBzaWRlYmFyIGVzdMODwqEgY29sYXBzYWRvXG4gICYuc2lkZWJhci1jb2xsYXBzZWQge1xuICAgIC8vIEFzZWd1cmFybm9zIHF1ZSBlbCBjb250ZW5pZG8gb2N1cGUgdG9kbyBlbCBlc3BhY2lvXG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB9XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDT05URU5JRE8gUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiA2NnB4O1xuICBtYXJnaW4tbGVmdDogMjY0cHg7XG4gIHRyYW5zaXRpb246IGFsbCBAdHJhbnNpdGlvbi1zcGVlZCBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogQHNjcm9sbGJhci10aHVtYiB0cmFuc3BhcmVudDtcbiAgIHdpZHRoOiBjYWxjKDEwMCUgLSBAc2lkZWJhci13aWR0aCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogQHNjcm9sbGJhci10aHVtYjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IEBzY3JvbGxiYXItdGh1bWItaG92ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRhc2hib2FyZC1jb250YWluZXIuc2lkZWJhci5jb2xsYXBzZWQgfiAmIHtcbiAgICBtYXJnaW4tbGVmdDogQHNpZGViYXItY29sbGFwc2VkLXdpZHRoO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIEBzaWRlYmFyLWNvbGxhcHNlZC13aWR0aCk7XG4gIH1cbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTEVTIERFIENSRUFSIFkgRURJVEFSIERFTlVOQ0lBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBNb2RhbCBvdmVybGF5XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1vdmVybGF5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbn1cblxuLy8gTW9kYWwgY29udGFpbmVyIHByaW5jaXBhbFxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG4vLyBNb2RhbCBwZXF1ZcODwrFvIChwYXJhIGLDg8K6c3F1ZWRhKVxuLm1vZGFsLXNtIHtcbiAgbWF4LXdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIG1pbi13aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gTW9kYWwgaGVhZGVyXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDMycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1oZWFkZXItYmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC5tb2RhbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblxuICAgIC5tb2RhbC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTW9kYWwgY29udGVudFxuLm1vZGFsLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAzMnB4O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTW9kYWwgZm9vdGVyXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDMycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRk9STVVMQVJJT1MgREUgREVOVU5DSUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEZvcm0gZ3JpZCBwYXJhIGRvcyBjb2x1bW5hc1xuLmZvcm0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAzMnB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxufVxuXG4uZm9ybS1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi8vIEZvcm0gZ3JvdXBcbi5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgIC5yZXF1aXJlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWhvdmVyKTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWRpc2FibGVkLWJnKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbnB1dC1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dC1lcnJvcik7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1lcnJvci1zaGFkb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmI3MjgwJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNnB4IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDRweDtcbiAgfVxuXG4gIC5mb3JtLWhpbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFTEVDVE9SIERFIFBFUlNPTkFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ucGVyc29uYS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAuZm9ybS1jb250cm9sIHtcbiAgICBmbGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZyk7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcbiAgICB9XG5cbiAgICAmOnJlYWQtb25seSB7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1zZWFyY2gtcGVyc29uYSB7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQZXJzb25hIHNlbGVjY2lvbmFkYSBjYXJkXG4ucGVyc29uYS1zZWxlY2Npb25hZGEtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAuc2VsZWNjaW9uYWRhLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgIC5zZWxlY2Npb25hZGEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnNlbGVjY2lvbmFkYS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gIH1cblxuICAuc2VsZWNjaW9uYWRhLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTJweDtcblxuICAgIC5zZWxlY2Npb25hZGEtbm9tYnJlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1jYW1iaWFyLXBlcnNvbmEge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVZJREVOQ0lBIFVQTE9BRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5ldmlkZW5jaWEtdXBsb2FkLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIH1cblxuICAuZXZpZGVuY2lhLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC5ldmlkZW5jaWEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5ldmlkZW5jaWEtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZXZpZGVuY2lhLWNvdW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwbG9hZCBhcmVhXG4gIC5ldmlkZW5jaWEtdXBsb2FkLWFyZWEge1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG5cbiAgICAgIC51cGxvYWQtaWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51cGxvYWQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLnVwbG9hZC10ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC51cGxvYWQtaGludCB7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB9XG4gIH1cblxuICAvLyBBcmNoaXZvcyBsaXN0YVxuICAuYXJjaGl2b3MtbGlzdGEge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5hcmNoaXZvLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgfVxuXG4gICAgICAuYXJjaGl2by1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLmFyY2hpdm8tbm9tYnJlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG5cbiAgICAgIC5hcmNoaXZvLXRhbWFubyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgIC5hcmNoaXZvLXJlbW92ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRm90b3MgcHJldmlldyBncmlkXG4gIC5mb3Rvcy1wcmV2aWV3IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLmZvdG8tcHJldmlldy1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAgIC5mb3RvLXJlbW92ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZm90by1wcmV2aWV3LWltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuXG4gICAgICAuZm90by1yZW1vdmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb3RvLW5vbWJyZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgcGFkZGluZzogNHB4IDZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFTDg8KJUk1JTk9TIFkgQ09ORElDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4udGVybXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcblxuICAudGVybXMtdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENIRUNLQk9YIFkgU1dJVENIXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tY2hlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIFN3aXRjaCBwZXJzb25hbGl6YWRvXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG5cbiAgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuXG4gICAgJjpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBsZWZ0OiAzcHg7XG4gICAgICBib3R0b206IDNweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPVE9ORVMgREUgQUNDScODwpNOIEVOIE1PREFMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIH1cblxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG59XG5cbi5idG4tc20ge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uYnRuLWxnIHtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gQm90w4PCs24gZGUgYsODwrpzcXVlZGEgZXNwZWPDg8KtZmljb1xuLmJ0bi1zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG5cbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FUyBERSBBQ0NJw4PCk04gRU4gVEFCTEFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYWN0aW9ucy1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLmJ0bi1hY3Rpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgJi52aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLWluZm8pO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5mbyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRlbGV0ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERFVEFMTEVTIERFIERFTlVOQ0lBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRldGFpbC1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgIC5zZWN0aW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbi8vIEluZm8gZ3JpZCBwYXJhIGRldGFsbGVzXG4uaW5mby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcblxuICAuaW5mby1pdGVtIHtcbiAgICAuaW5mby1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuaW5mby12YWx1ZSB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGltZWxpbmUgcGFyYSBoaXN0b3JpYWxcbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW46IDIwcHggMDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLnRpbWVsaW5lLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogLTI2cHg7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNVTFRBRE9TIERFIELDg8KaU1FVRURBIERFIFBFUlNPTkFTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnNlYXJjaC1yZXN1bHRzLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG59XG5cbi5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcblxuICAgIC5yZXN1bHQtaWNvbiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLnJlc3VsdC1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWluLXdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG5cbiAgLnJlc3VsdC1pbmZvIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnJlc3VsdC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnJlc3VsdC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEVzdGFkbyBkZSBjYXJnYVxuLmxvYWRpbmctc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbn1cblxuLy8gU2luIHJlc3VsdGFkb3Ncbi5uby1yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgLm5vLXJlc3VsdHMtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLm5vLXJlc3VsdHMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FUyBBRElDSU9OQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFIEFESUNJT05BTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG5cbiAgICAubW9kYWwtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tZ3JpZCB7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLnBlcnNvbmEtc2VsZWN0b3Ige1xuICAgIC5idG4tc2VhcmNoLXBlcnNvbmEge1xuICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICB9XG5cbiAgLm1vZGFsLXNtIHtcbiAgICBtaW4td2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5hY3Rpb25zLWJ1dHRvbnMge1xuICAgIC5idG4tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTkVET1IgUFJJTkNJUEFMIERFIERFTlVOQ0lBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kZW51bmNpYS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIRUFERVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAuaGVhZGVyLWNvbnRlbnQge1xuICAgIC5wYWdlLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5wYWdlLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklMVFJPU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5maWx0cm9zLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gIC5maWx0cm9zLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5idG4tbGluayB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZpbHRyb3MtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAuZmlsdHJvLWl0ZW0ge1xuICAgICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1pbnB1dC1mb2N1cy1zaGFkb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVEFEw4PCjVNUSUNBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIC5zdGF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cblxuICAgIC5zdGF0LXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEFCTEEgREUgREVOVU5DSUFTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG5cbiAgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAudGFibGUtdGl0bGUge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAuZGF0YS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAmLnRleHQtY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgLmNvZGlnby1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbmFjbycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXhwZWRpZW50ZS1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBRUiBDRUxMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnFyLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYnRuLXFyLXZpZXcge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhbmdlcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG5cbiAgICAucXItaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cblxuICAucXItcGxhY2Vob2xkZXIge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFVklERU5DSUEgQ0VMTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5ldmlkZW5jaWEtY2VsbCB7XG4gIC5ldmlkZW5jaWEtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAuZXZpZGVuY2lhLWNvdW50IHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmV2aWRlbmNpYS1kZXRhaWwge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgfVxuXG4gIC5zaW4tZXZpZGVuY2lhIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVNUQURPUyBCQURHRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uZXN0YWRvLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgJi5lc3RhZG8taW5ncmVzYWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gIH1cblxuICAmLmVzdGFkby1yZXZpc2lvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5lc3RhZG8taW52ZXN0aWdhY2lvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgfVxuXG4gICYuZXN0YWRvLXJlc3VlbHRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIH1cblxuICAmLmVzdGFkby1hcmNoaXZhZGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIH1cblxuICAmLmVzdGFkby1kZXNjb25vY2lkbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4vLyBFc3RhZG9zIHByb2Nlc2FsZXNcbi5lc3RhZG8tcHJvY2VzYWwtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJi5lc3RhZG8tcmVtaXNpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgfVxuXG4gICYuZXN0YWRvLXNlbnRlbmNpYS1lamVjdXRhZGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgfVxuXG4gICYuZXN0YWRvLXNlbnRlbmNpYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5lc3RhZG8tbWVkaWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWN1cml0eS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY3VyaXR5KTtcbiAgfVxuXG4gICYuZXN0YWRvLWNvbXBsZXRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cblxuICAmLmVzdGFkby1wcm9jZXNvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAmLmVzdGFkby10cmFtaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTIERFIEFDQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5hY3Rpb25zLWNlbGwge1xuICAuYWN0aW9ucy1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0bi1hY3Rpb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAmLnZpZXcge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWluZm8pO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8pO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQQUdJTkFDScODwpNOXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgLnBhZ2luYXRpb24tYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVTVEFETyBWQUPDg8KNT1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDhweCAyNHB4O1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIERFVEFMTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmRldGFpbC1tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIC5kZXRhaWwtbW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHggMzJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cbiAgICAuZGV0YWlsLW1vZGFsLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgLmRldGFpbC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWwtY29kaWdvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRhYnMgZGUgZGV0YWxsZXNcbi5kZXRhaWwtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuXG4gIC50YWItYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0xcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAudGFiLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRlbmlkbyBkZSB0YWJzXG4udGFiLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vLyBHcmlkIGRlIGRldGFsbGVzXG4uZGV0YWlsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIC5kZXRhaWwtaXRlbSB7XG4gICAgLmRldGFpbC1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWwtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRXZpZGVuY2lhIGVuIGRldGFsbGVzXG4uZXZpZGVuY2lhLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5ldmlkZW5jaWEtaXRlbS1kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB9XG5cbiAgICAuZXZpZGVuY2lhLWljb24tZGV0YWlsIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAuZXZpZGVuY2lhLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAubm8tZXZpZGVuY2lhIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZPUk1VTEFSSU9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAuZGFyay10aGVtZSAmIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5yZXF1aXJlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtYmcpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXQtZm9jdXMpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0taW5wdXQtZm9jdXMtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBDT05GSVJNQUNJw4PCk05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uY29uZmlybS1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmNvbmZpcm0taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLm1vZGFsLWNsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtLWJvZHkge1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY29uZmlybS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgJi5jb25maXJtLXdhcm5pbmcge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29uZmlybS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9UT05FUyBHTE9CQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtZGFuZ2VyKTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExPQURJTkcgU1BJTk5FUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kZW51bmNpYS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZmlsdHJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAubW9kYWwtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5mb3JtLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGFnaW5hdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICAuZGV0YWlsLXRhYnMge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuXG4gICAgLnRhYi1idG4ge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFOSU1BQ0lPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0NST0xMQkFSIFBFUlNPTkFMSVpBREFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4ubW9kYWwtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIsXG4udGFiLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmRldGFpbC1tb2RhbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxuLnRhYi1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbi5kZXRhaWwtbW9kYWwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWwtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4udGFiLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuLmRldGFpbC1tb2RhbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERFVEFMTEUgREUgREVOVU5DSUEgLSBNT0RBTCBERSBERVRBTExFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIERFVEFMTEUgUFJJTkNJUEFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBNb2RhbCBvdmVybGF5XG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyMjBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtb3ZlcmxheSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2U7XG59XG5cbi8vIE1vZGFsIGNvbnRhaW5lciBkZSBkZXRhbGxlXG4uZGV0YWlsLW1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tb2RhbC1ib3JkZXIpO1xufVxuXG4vLyBNb2RhbCBoZWFkZXIgY29uIGdyYWRpZW50ZVxuLmRldGFpbC1tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMjhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgLmRldGFpbC1tb2RhbC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIC5kZXRhaWwtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKSk7XG4gICAgfVxuXG4gICAgLmRldGFpbC1jb2RpZ28ge1xuICAgICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsICdNb25hY28nLCBtb25vc3BhY2U7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRBQlMgREUgTkFWRUdBQ0nDg8KTTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5kZXRhaWwtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogM3B4O1xuICB9XG5cbiAgLnRhYi1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFiLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC50YWItYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTlRFTklETyBERSBUQUJTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnRhYi1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweCAyOHB4O1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gMTMwcHgpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElORk9STUFDScODwpNOIEdFTkVSQUwgKFRhYiAxKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5pbmZvLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgLnNlY3Rpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLmluZm8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDE2cHggMjRweDtcblxuICAuaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgIH1cblxuICAgIC5pbmZvLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuXG4gICAgICAubGFiZWwtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLXZhbHVlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgICAgJi5jb2RpZ28tdmFsdWUge1xuICAgICAgICBmb250LWZhbWlseTogJ01vbmFjbycsIG1vbm9zcGFjZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBFc3RhZG8gYmFkZ2Vcbi5lc3RhZG8tcHJvY2VzYWwtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAmLmVzdGFkby1yZW1pc2lvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICB9XG5cbiAgJi5lc3RhZG8tc2VudGVuY2lhLWVqZWN1dGFkYSxcbiAgJi5lc3RhZG8tcmVzdWVsdGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgfVxuXG4gICYuZXN0YWRvLXNlbnRlbmNpYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5lc3RhZG8tbWVkaWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWN1cml0eS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNlY3VyaXR5KTtcbiAgfVxuXG4gICYuZXN0YWRvLWNvbXBsZXRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cblxuICAmLmVzdGFkby1wcm9jZXNvLFxuICAmLmVzdGFkby1pbnZlc3RpZ2FjaW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cblxuICAmLmVzdGFkby10cmFtaXRlLFxuICAmLmVzdGFkby1yZXZpc2lvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgfVxuXG4gICYuZXN0YWRvLWluZ3Jlc2FkYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWluZm8pO1xuICB9XG5cbiAgJi5lc3RhZG8tYXJjaGl2YWRhIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi8vIERlc2NyaXBjacODwrNuXG4uZGVzY3JpcGNpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLmRlc2NyaXBjaW9uLXRleHRvIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRUNDScODwpNOIERFIEVWSURFTkNJQSAoVGFiIDEpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmV2aWRlbmNpYS1ncnVwbyB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cbn1cblxuLmV2aWRlbmNpYS1saXN0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuXG4gIC5ldmlkZW5jaWEtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgIC5ldmlkZW5jaWEtbm9tYnJlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS1hY2Npb25lcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmV2aWRlbmNpYS1ncmlkLWZvdG9zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICBnYXA6IDEycHg7XG5cbiAgLmV2aWRlbmNpYS1mb3RvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAuZm90by1vdmVybGF5IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm90by10aHVtYm5haWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAuZm90by1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uby1ldmlkZW5jaWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSU5WT0xVQ1JBRE9TIChUYWIgMilcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaW52b2x1Y3JhZG9zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5pbnZvbHVjcmFkby1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gIH1cblxuICAuaW52b2x1Y3JhZG8tYXZhdGFyIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC5pbnZvbHVjcmFkby1pbmZvIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLmludm9sdWNyYWRvLW5vbWJyZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuaW52b2x1Y3JhZG8tZG9jdW1lbnRvIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW52b2x1Y3JhZG8tcm9sIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcblxuICAgICAgLnJvbC1iYWRnZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICAgJi5yb2wtdmljdGltYSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyLWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucm9sLXRlc3RpZ28ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZm8tbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucm9sLWFjdXNhZG8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucm9sLXJlcHJlc2VudGFudGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYucm9sLWFzZXNvciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VjdXJpdHktbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWN1cml0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvbC1vdHJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmludm9sdWNyYWRvLW9icyB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgLmludm9sdWNyYWRvLWZlY2hhIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idG4tcmVtb3ZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItbGlnaHQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbi5lbXB0eS1zdGF0ZS5zbWFsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gIC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBISVNUT1JJQUwgKFRhYiAzKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDAgOHB4IDMycHg7XG4gIG1hcmdpbjogMDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHRvcDogMTJweDtcbiAgICBib3R0b206IDEycHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLFxuICAgICAgdmFyKC0tcHJpbWFyeSksXG4gICAgICB2YXIoLS1ib3JkZXItY29sb3IpIDMwJSxcbiAgICAgIHZhcigtLWJvcmRlci1jb2xvcikgNzAlLFxuICAgICAgdmFyKC0tcHJpbWFyeSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuXG4gIC50aW1lbGluZS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC0yNHB4O1xuICAgICAgdG9wOiA2cHg7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAudGltZWxpbmUtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZWxpbmUtYm9keSB7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuXG4gICAgICAudGltZWxpbmUtY2hhbmdlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZWxpbmUtZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBWSVNUQSBQUkVWSUEgREUgRVZJREVOQ0lBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmV2aWRlbmNpYS1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogODAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1vZGFsLWJvcmRlcik7XG5cbiAgLmV2aWRlbmNpYS1tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWhlYWRlci1iZyk7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5tb2RhbC1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmV2aWRlbmNpYS1tb2RhbC1ib2R5IHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuXG4gICAgLmV2aWRlbmNpYS1pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS1wZGYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS12aWRlbyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIC5ldmlkZW5jaWEtYXVkaW8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmV2aWRlbmNpYS10ZXh0byB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5ldmlkZW5jaWEtbW9kYWwtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1RPTkVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB9XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWwtbW9kYWwtY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cblxuICAuZGV0YWlsLW1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuXG4gICAgLmRldGFpbC1tb2RhbC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgIC5kZXRhaWwtY29kaWdvIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10YWJzIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG5cbiAgICAudGFiLWJ0biB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmV2aWRlbmNpYS1ncmlkLWZvdG9zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLmludm9sdWNyYWRvLWNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmludm9sdWNyYWRvLWF2YXRhciB7XG4gICAgICB3aWR0aDogNTZweDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5pbnZvbHVjcmFkby1pbmZvIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAudGltZWxpbmUge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWl0ZW06OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAtMThweDtcbiAgICB9XG4gIH1cblxuICAuZXZpZGVuY2lhLW1vZGFsIHtcbiAgICB3aWR0aDogOTV2dztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRldGFpbC10YWJzIC50YWItYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcblxuICAgIC50YWItaWNvbiB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gIH1cblxuICAuaW5mby1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIH1cblxuICAuZXZpZGVuY2lhLWdyaWQtZm90b3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDgwcHgsIDFmcikpO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLmludm9sdWNyYWRvLWNhcmQge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICAudGltZWxpbmUtY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBRUiAtIERFVEFMTEUgREUgREVOVU5DSUFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1vZGFsIG92ZXJsYXkgcGFyYSBRUlxuLnFyLW1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMjIwcHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTEwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufVxuXG4vLyBDb250ZW5lZG9yIGRlbCBtb2RhbCBRUlxuLnFyLW1vZGFsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbW9kYWwtYmcpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAyOHB4IDI0cHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb246IHpvb21JbiAwLjNzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbW9kYWwtYm9yZGVyKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAvLyBIZWFkZXIgZGVsIFFSXG4gIC5xci1tb2RhbC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBoMyB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ8Owwp/Ck8KxJztcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAvLyBJbWFnZW4gZGVsIFFSXG4gIC5xci1tb2RhbC1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMjIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxci1jb2RlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEluZm9ybWFjacODwrNuIGFkaWNpb25hbCBkZWwgUVJcbiAgLnFyLW1vZGFsLWluZm8ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5wZXJzb25hLW5vbWJyZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDsMKfwpHCpCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGVyc29uYS1kb2N1bWVudG8ge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfDsMKfwpPChCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZW51bmNpYS1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ8OiwprClsOvwrjCjyc7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBCb3RvbmVzIGRlIGFjY2nDg8KzblxuICAucXItbW9kYWwtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuYnRuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZmxleDogMTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAuYnRuLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBTklNQUNJT05FU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xci1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHggMjBweDtcblxuICAgIC5xci1tb2RhbC1oZWFkZXIge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXItbW9kYWwtaW1hZ2Uge1xuICAgICAgcGFkZGluZzogMTJweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgIH1cblxuICAgICAgcXItY29kZSBjYW52YXMge1xuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xci1tb2RhbC1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIC5wZXJzb25hLW5vbWJyZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xci1tb2RhbC1hY3Rpb25zIHtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5xci1tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgcGFkZGluZzogMTZweCAxMnB4IDE2cHg7XG5cbiAgICAucXItbW9kYWwtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucXItbW9kYWwtc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWltYWdlIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgICAgfVxuXG4gICAgICBxci1jb2RlIGNhbnZhcyB7XG4gICAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWluZm8ge1xuICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAucGVyc29uYS1ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICB9XG5cbiAgICAgIC5wZXJzb25hLWRvY3VtZW50byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xci1tb2RhbC1hY3Rpb25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRFTUEgTkXDg8KTTiAtIFNPQlJFRVNDUklUVVJBU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmJvZHkubmVvbi10aGVtZSB7XG4gIC5xci1tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLCAjMTExMTExKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZW9uLWJvcmRlciwgI2JmNGZmNyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi1zaGFkb3ctc3Ryb25nLCAwIDAgMjBweCByZ2JhKDE5MSwgNzksIDI0NywgMC41KSk7XG5cbiAgICAucXItbW9kYWwtaGVhZGVyIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW5lb24tdGV4dCwgI2JmNGZmNyk7XG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5xci1tb2RhbC1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLXRleHQtc2Vjb25kYXJ5LCAjZDQ3ZmZmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXItbW9kYWwtaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLWxpZ2h0LCAjMWExYTFhKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXItZGltLCByZ2JhKDE5MSwgNzksIDI0NywgMC4zKSk7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW5lb24tc2hhZG93LCAwIDAgMTBweCByZ2JhKDE5MSwgNzksIDI0NywgMC4zKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWluZm8ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLWxpZ2h0LCAjMWExYTFhKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXItZGltLCByZ2JhKDE5MSwgNzksIDI0NywgMC4zKSk7XG5cbiAgICAgIC5wZXJzb25hLW5vbWJyZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLXRleHQsICNiZjRmZjcpO1xuICAgICAgfVxuXG4gICAgICAucGVyc29uYS1kb2N1bWVudG8ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LXNlY29uZGFyeSwgI2Q0N2ZmZik7XG4gICAgICB9XG5cbiAgICAgIC5kZW51bmNpYS1pbmZvIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1tdXRlZCwgcmdiYSgxOTEsIDc5LCAyNDcsIDAuNikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5xci1tb2RhbC1hY3Rpb25zIHtcbiAgICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXIsICNiZjRmZjcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LCAjYmY0ZmY3KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MSwgNzksIDI0NywgMC4xKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tcHJpbWFyeSwgI2JmNGZmNyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbmVvbi1zaGFkb3csIDAgMCAxMHB4IHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1uZW9uLXByaW1hcnksICNiZjRmZjcpLCB2YXIoLS1uZW9uLXNlY29uZGFyeSwgI2I1MzdmMikpO1xuICAgICAgICBjb2xvcjogIzAwMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXNoYWRvdy1zdHJvbmcsIDAgMCAyMHB4IHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjUpKTtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEVNQSBPU0NVUk8gLSBTT0JSRUVTQ1JJVFVSQVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ib2R5LmRhcmstdGhlbWUge1xuICAucXItbW9kYWwge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1vZGFsLWJnLCAjMWYyOTM3KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1vZGFsLWJvcmRlciwgIzM3NDE1MSk7XG5cbiAgICAucXItbW9kYWwtaGVhZGVyIHtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2Y5ZmFmYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWltYWdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgfVxuXG4gICAgLnFyLW1vZGFsLWluZm8ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUVIgU0VDVElPTiAtIERFTlRSTyBERUwgTU9EQUwgREUgQ1JFQVIvRURJVEFSIERFTlVOQ0lBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBDb250ZW5lZG9yIHByaW5jaXBhbCBkZWwgUVJcbi5xci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIH1cbn1cblxuLy8gUVIgZ2VuZXJhZG8gKGN1YW5kbyB5YSBleGlzdGUpXG4ucXItcHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcblxuICAucXItaW1hZ2Uge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuICB9XG5cbiAgLnFyLWluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcblxuICAgIC5xci1iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgJi5xci1nZW5lcmFkbyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnFyLXVuaXF1ZSB7XG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUVIgdGVtcG9yYWwgKG1pZW50cmFzIHNlIGdlbmVyYSlcbi5xci10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuXG4gIHFyLWNvZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cbiAgICBjYW52YXMge1xuICAgICAgd2lkdGg6IDExNHB4O1xuICAgICAgaGVpZ2h0OiAxMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gIH1cblxuICAucXItaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnFyLWJhZGdlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAmLnFyLWdlbmVyYW5kbyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEVzdGFkbyB2YWPDg8KtbyAtIHNpbiBRUiAobW9kbyBjcmVhY2nDg8Kzbilcbi5xci1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xuXG4gIC5xci1lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIC5xci1lbXB0eS10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gIC5idG4tZ2VuZXJhci1xciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAuYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgJi5zcGlubmluZyB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRXN0YWRvIGRlIHNvbG8gbGVjdHVyYSAtIFFSIHlhIGdlbmVyYWRvIChtb2RvIGVkaWNpw4PCs24pXG4ucXItcmVhZG9ubHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAucXItcmVhZG9ubHktbWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAuaW5mby1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuXG4gIC5xci1oZWxwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxufVxuXG4vLyBCYWRnZSBkZSBRUiDDg8K6bmljb1xuLnFyLXVuaXF1ZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pbmZvKTtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJ8Owwp/ClMKQJztcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gIH1cbn1cblxuLy8gU3Bpbm5lciBhbmltYXRpb25cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vIEVzdGFkbyBkZSBjYXJnYSBlbiBlbCBib3TDg8KzblxuLnNwaW5uaW5nIHtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkUgUEFSQSBRUiBFTiBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgLnFyLXByZXZpZXcge1xuICAgIC5xci1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5xci10ZW1wIHtcbiAgICBxci1jb2RlIGNhbnZhcyB7XG4gICAgICB3aWR0aDogODRweDtcbiAgICAgIGhlaWdodDogODRweDtcbiAgICB9XG4gIH1cblxuICAucXItZW1wdHkge1xuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcblxuICAgIC5xci1lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAuYnRuLWdlbmVyYXItcXIge1xuICAgICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucXItcHJldmlldyB7XG4gICAgLnFyLWltYWdlIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgIH1cbiAgfVxuXG4gIC5xci10ZW1wIHFyLWNvZGUgY2FudmFzIHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cblxuICAucXItcmVhZG9ubHktbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBURU1BIE5Fw4PCk04gLSBRUiBTRUNUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuYm9keS5uZW9uLXRoZW1lIHtcbiAgLnFyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1zdXJmYWNlLCAjMWExYTFhKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYm9yZGVyLWRpbSwgcmdiYSgxOTEsIDc5LCAyNDcsIDAuMykpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tcHJpbWFyeSwgI2JmNGZmNyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXNoYWRvdywgMCAwIDEwcHggcmdiYSgxOTEsIDc5LCAyNDcsIDAuMykpO1xuICAgIH1cbiAgfVxuXG4gIC5xci1wcmV2aWV3IHtcbiAgICAucXItaW1hZ2Uge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uZW9uLWJvcmRlciwgI2JmNGZmNyk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1uZW9uLXNoYWRvdyk7XG4gICAgfVxuXG4gICAgLnFyLWluZm8ge1xuICAgICAgLnFyLWJhZGdlLnFyLWdlbmVyYWRvIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDEzNSwgMC4xNSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLXN1Y2Nlc3MsICMwMGZmODcpO1xuICAgICAgfVxuXG4gICAgICAucXItdW5pcXVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1tdXRlZCwgcmdiYSgxOTEsIDc5LCAyNDcsIDAuNikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5xci10ZW1wIHtcbiAgICBxci1jb2RlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXIsICNiZjRmZjcpO1xuICAgIH1cblxuICAgIC5xci1pbmZvIC5xci1iYWRnZS5xci1nZW5lcmFuZG8ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEwNywgMTA3LCAwLjE1KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1uZW9uLWRhbmdlciwgI2ZmNmI2Yik7XG4gICAgfVxuICB9XG5cbiAgLnFyLWVtcHR5IHtcbiAgICAucXItZW1wdHktdGV4dCB7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LW11dGVkKTtcbiAgICB9XG5cbiAgICAuYnRuLWdlbmVyYXItcXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTEsIDc5LCAyNDcsIDAuMSk7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LCAjYmY0ZmY3KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ib3JkZXIsICNiZjRmZjcpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1wcmltYXJ5LCAjYmY0ZmY3KTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW5lb24tc2hhZG93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucXItcmVhZG9ubHkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTkxLCA3OSwgMjQ3LCAwLjA1KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYm9yZGVyLWRpbSk7XG5cbiAgICAucXItcmVhZG9ubHktbWVzc2FnZSB7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi10ZXh0LXNlY29uZGFyeSwgI2Q0N2ZmZik7XG4gICAgfVxuXG4gICAgLnFyLWhlbHAge1xuICAgICAgY29sb3I6IHZhcigtLW5lb24tdGV4dC1tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgLnFyLXVuaXF1ZS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTEsIDc5LCAyNDcsIDAuMTUpO1xuICAgIGNvbG9yOiB2YXIoLS1uZW9uLXRleHQsICNiZjRmZjcpO1xuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ0hBVEJPVCBTSUdQQVogLSBFU1RJTE9TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBPdmVybGF5IHByaW5jaXBhbCBkZWwgY2hhdGJvdFxuLmNoYXRib3Qtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAubW9kYWwtb3ZlcmxheS1zaWdwYXoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIHotaW5kZXg6IDEwMDAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLm1pbmltaXplZC1tb2RlKSB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXktc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG4gICY6bm90KC5taW5pbWl6ZWQtbW9kZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAmLm1pbmltaXplZC1tb2RlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jaGF0Ym90LWNvbnRhaW5lcixcbiAgICAuY2hhdGJvdC1oZWFkZXIsXG4gICAgLmNoYXRib3QtY29udGVudCxcbiAgICAuY2hhdGJvdC1mb290ZXIge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNoYXRib3QtbWluaW1pemVkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICBtYXgtd2lkdGg6IDk4dnc7XG4gIG1heC1oZWlnaHQ6IDk4dmg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICY6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgYW5pbWF0aW9uOiBtb2RhbFNsaWRlSW4gMC40cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIH1cblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW9kYWxTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDglKSBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1oZWFkZXIge1xuICAubW9kYWwtaGVhZGVyLXNpZ3BheiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgYW5pbWF0aW9uOiBpY29uQm91bmNlIDJzIGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4taWNvbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi10b29sdGlwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMzVweDtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1pbmltaXplLWJ0bi5hbmltYXRpbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jbG9zZS1tb2RhbC1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMykgIWltcG9ydGFudDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1pbmltaXplQW5pbWF0aW9uIHtcbiAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgcm90YXRlKC0xMGRlZyk7IH1cbiAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICAgICAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgICAgICAgICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRlbnQge1xuICAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgMjVweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgIH1cblxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWhvdmVyKSwgdmFyKC0tc2VjdXJpdHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jaGF0Ym90LWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5mb290ZXItc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xuXG4gICAgLnN0YXQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2hhdGJvdC1taW5pbWl6ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwMjtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGFuaW1hdGlvbjogYnViYmxlQXBwZWFyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAubW9kYWwtb3ZlcmxheS1zaWdwYXoubWluaW1pemVkLW1vZGUgJiB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAwMDMgIWltcG9ydGFudDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuXG4gICAgLmJ1YmJsZS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgYW5pbWF0aW9uOiBzcGluU2xvdyAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgLmJ1YmJsZS10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5idWJibGUtY2xvc2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZUFwcGVhciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMSkgcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgcm90YXRlKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJ1YmJsZVB1bHNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxufVxuXG4uYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2hhdGJvdC1jb250YWluZXI6bm90KC5taW5pbWl6ZWQpOm5vdCgubWF4aW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmNoYXRib3QtZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZm9vdGVyLXN0YXRzIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNoYXRib3QtY29udGFpbmVyOm5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLmNoYXRib3QtaGVhZGVyIC5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cblxuICAuY2hhdGJvdC1taW5pbWl6ZWQge1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jaGF0Ym90LWNvbnRhaW5lcjpub3QoLm1pbmltaXplZCkge1xuICAgIG1pbi13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5LXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5jaGF0Ym90LW1pbmltaXplZCB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbi5jaGF0Ym90LWNvbnRhaW5lci5tYXhpbWl6ZWQge1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoYXRib3QtY29udGFpbmVyLm1heGltaXplZCAubW9kYWwtYm9keS13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gQXl1ZGEgU0lHUEFaIGVuIFNpZGViYXJcbi5zaWRlYmFyLWNoYXQtc2lncGF6IHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG5cbiAgLmNoYXQtc2lncGF6LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICAgICB0cmFuc3BhcmVudCxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXG4gICAgICAgICAgdHJhbnNwYXJlbnQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3M7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2VJY29uIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHVsc2VJY29uIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxuICAgIH1cblxuICAgIC5jaGF0LXRleHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gICAgfVxuXG4gICAgLmNoYXQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwdWxzZUJhZGdlIDJzIGluZmluaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwdWxzZUJhZGdlIHtcbiAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBERSBCw4PCmlNRVUVEQSBERSBQRVJTT05BU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTW9kYWwgcGVxdWXDg8Kxb1xuLm1vZGFsLXNtIHtcbiAgbWF4LXdpZHRoOiA1NTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIG1pbi13aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFTEVDVE9SIERFIFBFUlNPTkEgKGVuIGVsIGZvcm11bGFyaW8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLnBlcnNvbmEtc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmZvcm0taW5wdXQge1xuICAgIGZsZXg6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cblxuICAgICY6cmVhZC1vbmx5IHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAuYnRuLXNlYXJjaC1wZXJzb25hIHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQRVJTT05BIFNFTEVDQ0lPTkFEQSAoQ2FyZCBxdWUgYXBhcmVjZSBkZXNwdcODwqlzIGRlIHNlbGVjY2lvbmFyKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5wZXJzb25hLXNlbGVjY2lvbmFkYS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1saWdodCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBhbmltYXRpb246IGZhZGVJblNjYWxlIDAuM3MgZWFzZTtcblxuICBAa2V5ZnJhbWVzIGZhZGVJblNjYWxlIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAuc2VsZWNjaW9uYWRhLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgIC5zZWxlY2Npb25hZGEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnNlbGVjY2lvbmFkYS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gIH1cblxuICAuc2VsZWNjaW9uYWRhLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTJweDtcblxuICAgIC5zZWxlY2Npb25hZGEtbm9tYnJlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuc2VsZWNjaW9uYWRhLWRvY3VtZW50byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNhbWJpYXItcGVyc29uYSB7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWNjZXNzKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICB9XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VsZWNjaW9uYWRhLWRldGFsbGUge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5kZXRhbGxlLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcblxuICAgICAgLmRldGFsbGUtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIELDg8KaU1FVRURBIERFIFBFUlNPTkFTIC0gQ09OVEVOSURPXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBJbnB1dCBkZSBiw4PCunNxdWVkYSBjb24gaWNvbm9cbi5zZWFyY2gtaW5wdXQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ8Owwp/ClMKNJztcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLWlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWFyY2gtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctaG92ZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRlbmVkb3IgZGUgcmVzdWx0YWRvc1xuLnNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTZweDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ob3Zlcik7XG4gICAgfVxuICB9XG59XG5cbi8vIEVzdGFkbyBkZSBiw4PCunNxdWVkYSAobG9hZGluZywgZW1wdHksIGV0Yy4pXG4uc2VhcmNoLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4vLyBMb2FkaW5nIHNwaW5uZXJcbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgLnNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyBMaXN0YSBkZSByZXN1bHRhZG9zXG4ucmVzdWx0cy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG5cbiAgLnJlc3VsdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIH1cblxuICAgIC8vIEF2YXRhciBkZSBsYSBwZXJzb25hXG4gICAgLnJlc3VsdC1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgIC5hdmF0YXItaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC5hdmF0YXItcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJbmZvcm1hY2nDg8KzbiBkZSBsYSBwZXJzb25hXG4gICAgLnJlc3VsdC1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgIC5yZXN1bHQtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgLnJlc3VsdC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAuZG9jLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJhZGdlIGRlIGVzdGFkb1xuICAgIC5yZXN1bHQtYmFkZ2Uge1xuICAgICAgLmJhZGdlLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gU2luIHJlc3VsdGFkb3Ncbi5uby1yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG5cbiAgLm5vLXJlc3VsdHMtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLm5vLXJlc3VsdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIC5uby1yZXN1bHRzLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1ob3Zlcik7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5uby1yZXN1bHRzLXN1Z2dlc3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNZW5zYWplIGRlIGNhcmFjdGVyZXMgbcODwq1uaW1vc1xuLm1pbi1jaGFycy1tZXNzYWdlIHtcbiAgcGFkZGluZzogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG5cbiAgLmluZm8taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbn1cblxuLy8gTWVuc2FqZSBpbmljaWFsXG4uaW5pdGlhbC1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG5cbiAgLmluaXRpYWwtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5cbiAgLmluaXRpYWwtdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4vLyBIZWxwIHRleHQgZW4gZm9vdGVyXG4uaGVscC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4vLyBGb290ZXIgZGVsIG1vZGFsIGRlIGLDg8K6c3F1ZWRhXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tb2RhbC1mb290ZXItYmcpO1xuXG4gIC5mb290ZXItbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAuZm9vdGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgfVxufVxuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wZXJzb25hLXNlbGVjdG9yIHtcbiAgICAuYnRuLXNlYXJjaC1wZXJzb25hIHtcbiAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5wZXJzb25hLXNlbGVjY2lvbmFkYS1jYXJkIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgLnNlbGVjY2lvbmFkYS1pbmZvIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLmJ0bi1jYW1iaWFyLXBlcnNvbmEge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVzdWx0cy1saXN0IC5yZXN1bHQtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5yZXN1bHQtYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAuYXZhdGFyLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1zbSB7XG4gICAgbWluLXdpZHRoOiA5NSU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wZXJzb25hLXNlbGVjY2lvbmFkYS1jYXJkIC5zZWxlY2Npb25hZGEtZGV0YWxsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5yZXN1bHRzLWxpc3QgLnJlc3VsdC1pdGVtIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAucmVzdWx0LWJhZGdlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MnB4O1xuICAgIH1cbiAgfVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElOVk9MVUNSQURPUyBURU1QT1JBTEVTIC0gRVNUSUxPUyBDT01QTEVUT1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMSVNUQSBERSBJTlZPTFVDUkFET1MgVEVNUE9SQUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5pbnZvbHVjcmFkb3MtdGVtcC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogNHB4O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWhvdmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIElURU0gREUgSU5WT0xVQ1JBRE8gVEVNUE9SQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uaW52b2x1Y3JhZG8tdGVtcC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBFZmVjdG8gaG92ZXJcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWhvdmVyKTtcblxuICAgIC5pbnYtYWN0aW9ucyB7XG4gICAgICAuYnRuLXJvbCwgLmJ0bi1yZW1vdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEF2YXRhciBkZWwgaW52b2x1Y3JhZG9cbiAgLmludi1hdmF0YXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgfVxuXG4gICAgLmludi1hdmF0YXItaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgLmludi1hdmF0YXItcGxhY2Vob2xkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cblxuICAvLyBJbmZvcm1hY2nDg8KzbiBkZWwgaW52b2x1Y3JhZG9cbiAgLmludi1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcblxuICAgIC5pbnYtbm9tYnJlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC5pbnYtZG9jdW1lbnRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUm9sIGFzaWduYWRvXG4gICAgLmludi1yb2wge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAucm9sLWJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnw7DCn8KOwq0nO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYucm9sLXZpY3RpbWEge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1saWdodCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvbC10ZXN0aWdvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmZvLWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvbC1hY3VzYWRvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvbC1yZXByZXNlbnRhbnRlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnJvbC1hc2Vzb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY3VyaXR5LWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2VjdXJpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5yb2wtb3RybyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlaG9sZGVyIGN1YW5kbyBubyB0aWVuZSByb2xcbiAgICAuaW52LXJvbC1wbGFjZWhvbGRlciB7XG4gICAgICAuYmFkZ2Utd2FybmluZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfDosKawqDDr8K4wo8nO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9ic2VydmFjaW9uZXMgZGVsIGludm9sdWNyYWRvXG4gICAgLmludi1vYnNlcnZhY2lvbmVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy10ZXJ0aWFyeSk7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnw7DCn8KTwp0nO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjaW9uZXMgZGVsIGludm9sdWNyYWRvXG4gIC5pbnYtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIC5idG4tcm9sIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSksIHZhcigtLXByaW1hcnktaG92ZXIpKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1yZW1vdmUge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1kYW5nZXIpLCB2YXIoLS1kYW5nZXItaG92ZXIpKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoMTBkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT1TDg8KTTiBQQVJBIEFHUkVHQVIgSU5WT0xVQ1JBRE9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4uYnRuLWFkZC1pbnZvbHVjcmFkbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG5cbiAgLmJ0bi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIERFIEFTSUdOQVIgUk9MXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRhaW5lci5tb2RhbC1zbSB7XG4gIC5wZXJzb25hLXNlbGVjY2lvbmFkYS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAuc2VsZWNjaW9uYWRhLWhlYWRlciB7XG4gICAgICAuc2VsZWNjaW9uYWRhLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5zZWxlY2Npb25hZGEtbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjY2lvbmFkYS1ub21icmUge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5pbmZvLWJveCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW5mby1saWdodCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pbmZvKTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIC5pbmZvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5pbmZvLXRleHQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsLWhlbHAge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICB9XG59XG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFU1BPTlNJVkVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludm9sdWNyYWRvLXRlbXAtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIGdhcDogMTBweDtcblxuICAgIC5pbnYtYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAuaW52LWF2YXRhci1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW52LWluZm8ge1xuICAgICAgLmludi1ub21icmUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIC5pbnYtcm9sIC5yb2wtYmFkZ2UsXG4gICAgICAuaW52LXJvbC1wbGFjZWhvbGRlciAuYmFkZ2Utd2FybmluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnYtYWN0aW9ucyB7XG4gICAgICAuYnRuLXJvbCxcbiAgICAgIC5idG4tcmVtb3ZlIHtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmludm9sdWNyYWRvLXRlbXAtaXRlbSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmludi1hdmF0YXIge1xuICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG4gICAgLmludi1pbmZvIHtcbiAgICAgIG9yZGVyOiAyO1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuaW52LWFjdGlvbnMge1xuICAgICAgb3JkZXI6IDM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG59XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU0lHUEFaIC0gRVNUSUxPUyDDg8KaTklDT1MgKENPTVBMRVRPKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gVmFyaWFibGVzIGludGVybmFzIChubyBpbnRlcmZpZXJlbiBjb24gZ2xvYmFsZXMpXG5Ac2lncGF6LXByaW1hcnk6ICM0ZjQ2ZTU7XG5Ac2lncGF6LXNlY29uZGFyeTogIzYzNjZmMTtcbkBzaWdwYXotYWNjZW50OiAjMDBmZjg4O1xuQHNpZ3Bhei1kYW5nZXI6ICNlZjQ0NDQ7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPVkVSTEFZIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1vdmVybGF5LXNpZ3BheiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDtcblxuICAvLyBTb2xvIG1vc3RyYXIgZm9uZG8gY3VhbmRvIGVsIG1vZGFsIGVzdMODwqEgYWJpZXJ0b1xuICAmOm5vdCgubWluaW1pemVkLW1vZGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VhbmRvIGVzdMODwqEgbWluaW1pemFkbzogc2luIGZvbmRvIG5pIGJsb3F1ZW9cbiAgJi5taW5pbWl6ZWQtbW9kZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBTb2xvIGxhIGJ1cmJ1amEgZXMgaW50ZXJhY3RpdmFcbiAgICAuZmxvYXRpbmctYnViYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09OVEVORURPUiBQUklOQ0lQQUwgREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWNvbnRlbnQtc2lncGF6IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTAwMDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgbWF4LXdpZHRoOiA5OHZ3O1xuICBtYXgtaGVpZ2h0OiA5OHZoO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICB3aWR0aDogYXV0bztcblxuICAmLm1pbmltaXplZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICY6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBhbmltYXRpb246IG1vZGFsU2xpZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSEVBREVSIERFTCBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi5tb2RhbC1oZWFkZXItc2lncGF6IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotcHJpbWFyeSwgQHNpZ3Bhei1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGFuaW1hdGlvbjogaWNvbkJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLm1vZGFsLWJ0biB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMC45NSk7XG4gICAgICB9XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgLmJ0bi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXRvb2x0aXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTM1cHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6IDEwMDAyO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIC5idG4tdG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICB9XG5cbiAgICAgICYubWluaW1pemUtYnRuLmFuaW1hdGluZyB7XG4gICAgICAgIGFuaW1hdGlvbjogbWluaW1pemVBbmltYXRpb24gMC41cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAmLmNsb3NlLW1vZGFsLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjMpICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC41KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDVUVSUE8gREVMIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDcwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLy8gU2Nyb2xsYmFyIHBlcnNvbmFsaXphZGFcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIEBzaWdwYXotc2Vjb25kYXJ5LCBAc2lncGF6LXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFzZWd1cmFyIHF1ZSBlbCBjb21wb25lbnRlIGludGVybm8gb2N1cGUgdG9kbyBlbCBhbmNob1xuICBhcHAtaGVscC1zdXBwb3J0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVUkJVSkEgRkxPVEFOVEUgKE1JTklNSVpBRE8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLmZsb2F0aW5nLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgQHNpZ3Bhei1wcmltYXJ5LCBAc2lncGF6LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYW5pbWF0aW9uOiBidWJibGVBcHBlYXIgMC42cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjcpO1xuICB9XG5cbiAgJi5wdWxzaW5nIHtcbiAgICBhbmltYXRpb246IGJ1YmJsZVB1bHNlIDJzIGluZmluaXRlO1xuICB9XG5cbiAgLmJ1YmJsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLmJ1YmJsZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBhbmltYXRpb246IHNwaW5TbG93IDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuYnViYmxlLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLmNsb3NlLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gIH1cblxuICAuYnViYmxlLW5vdGlmaWNhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIGNvbG9yOiBAc2lncGF6LXByaW1hcnk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvblNsaWRlIDAuNXMgZWFzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQU5JTUFDSU9ORVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsU2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC45NSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uQm91bmNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgbWluaW1pemVBbmltYXRpb24ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZSgtMTBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbn1cblxuQGtleWZyYW1lcyBidWJibGVBcHBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KSBzY2FsZSgwLjMpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxLjEpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYnViYmxlUHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC41KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoNzksIDcwLCAyMjksIDAuOCksIDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW5TbG93IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvblNsaWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRVNQT05TSVZFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwtY29udGVudC1zaWdwYXo6bm90KC5taW5pbWl6ZWQpIHtcbiAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiA5NXZ3ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1dncgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlci1zaWdwYXoge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuXG4gIC5tb2RhbC1idG4ge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQtc2lncGF6Om5vdCgubWluaW1pemVkKSB7XG4gICAgbWluLXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLm1vZGFsLWJvZHktd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmZsb2F0aW5nLWJ1YmJsZSB7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuXG4gIC5idWJibGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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

/***/ }),

/***/ 84461:
/*!***********************************************************************!*\
  !*** ./src/app/modules/denuncias/services/denuncia-facade.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DenunciasFacadeService: () => (/* binding */ DenunciasFacadeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 11817);
/* harmony import */ var _services_denuncia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/denuncia.service */ 45657);
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/persona.service */ 5378);







class DenunciasFacadeService {
  denunciaService;
  personaService;
  initialState = {
    items: [],
    total: 0,
    page: 1,
    perPage: 10,
    filters: {
      codigo_externo: '',
      numero_expediente: '',
      estado_denuncia_id: undefined,
      tipo_conflicto_id: undefined,
      persona_id: undefined,
      fecha_inicio: '',
      fecha_fin: '',
      search: '',
      page: 1,
      per_page: 10
    },
    loading: false,
    selected: null
  };
  stateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.initialState);
  state$ = this.stateSubject.asObservable();
  denuncias$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.items));
  loading$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.loading));
  pagination$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => ({
    page: state.page,
    perPage: state.perPage,
    total: state.total
  })));
  selectedDenuncia$ = this.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.selected));
  constructor(denunciaService, personaService) {
    this.denunciaService = denunciaService;
    this.personaService = personaService;
  }
  init() {
    this.loadDenuncias();
  }
  setPage(page) {
    const current = this.stateSubject.value;
    this.patchState({
      page,
      filters: {
        ...current.filters,
        page
      }
    });
    this.loadDenuncias();
  }
  setPerPage(perPage) {
    const current = this.stateSubject.value;
    this.patchState({
      perPage,
      page: 1,
      filters: {
        ...current.filters,
        page: 1,
        per_page: perPage
      }
    });
    this.loadDenuncias();
  }
  updateFilters(partial) {
    const current = this.stateSubject.value;
    const filters = {
      ...current.filters,
      ...partial,
      page: 1
    };
    this.patchState({
      filters,
      page: 1
    });
    this.loadDenuncias();
  }
  clearFilters() {
    this.patchState({
      filters: {
        ...this.initialState.filters
      },
      page: 1
    });
    this.loadDenuncias();
  }
  selectDenuncia(denuncia) {
    this.patchState({
      selected: denuncia
    });
  }
  reloadCurrentPage() {
    this.loadDenuncias();
  }
  loadDenuncias() {
    const current = this.stateSubject.value;
    this.patchState({
      loading: true
    });
    this.denunciaService.getDenuncias({
      ...current.filters,
      page: current.page,
      per_page: current.perPage
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.patchState({
      loading: false
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(response => {
      const data = response.data ?? [];
      const pagination = response.pagination ?? {};
      const idsToLoad = Array.from(new Set(data.filter(d => !d.persona && d.persona_id != null).map(d => d.persona_id)));
      if (idsToLoad.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          items: data,
          total: pagination.total ?? data.length
        });
      }
      const calls = idsToLoad.map(id => this.personaService.obtenerPersona(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(r => ({
        id,
        persona: r?.data ?? null
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        id,
        persona: null
      }))));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(calls).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(results => {
        const byId = {};
        results.forEach(r => {
          if (r && r.id != null) byId[r.id] = r.persona;
        });
        const enriched = data.map(d => ({
          ...d,
          persona: d.persona ?? (d.persona_id != null ? byId[d.persona_id] ?? null : null)
        }));
        return {
          items: enriched,
          total: pagination.total ?? enriched.length
        };
      }));
    })).subscribe({
      next: res => {
        this.patchState({
          items: res.items,
          total: res.total
        });
      },
      error: () => {
        this.patchState({
          items: [],
          total: 0
        });
      }
    });
  }
  patchState(partial) {
    this.stateSubject.next({
      ...this.stateSubject.value,
      ...partial
    });
  }
  static ɵfac = function DenunciasFacadeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DenunciasFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_denuncia_service__WEBPACK_IMPORTED_MODULE_8__.DenunciaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_persona_service__WEBPACK_IMPORTED_MODULE_9__.PersonaService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: DenunciasFacadeService,
    factory: DenunciasFacadeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88140:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/file-size.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSizePipe: () => (/* binding */ FileSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 36124);

class FileSizePipe {
  transform(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  static ɵfac = function FileSizePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FileSizePipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "fileSize",
    type: FileSizePipe,
    pure: true
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_denuncias_pages_denuncias-list_denuncias-list_component_ts.js.map