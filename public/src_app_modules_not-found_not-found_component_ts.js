"use strict";
(self["webpackChunkjusticia_paz_frontend"] = self["webpackChunkjusticia_paz_frontend"] || []).push([["src_app_modules_not-found_not-found_component_ts"],{

/***/ 97178:
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 79748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 46264);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 36124);


// Importar módulos PRIMENG de forma DIRECTA





class NotFoundComponent {
  constructor() {}
  static ɵfac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotFoundComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 11,
    vars: 0,
    consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "error-code"], [1, "error-message"], [1, "text-muted"], [1, "error-actions"], ["pButton", "", "pRipple", "", "label", "Volver al Dashboard", "routerLink", "/dashboard", 1, "p-button-primary"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "P\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " La p\u00E1gina que est\u00E1s buscando no existe o ha sido movida. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule],
    styles: [".not-found-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--light-bg);\n  padding: 2rem;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 480px;\n  width: 100%;\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: 900;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 1.5rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.error-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--light-text);\n  margin-bottom: 0.75rem;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--light-text-secondary);\n}\n.error-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkVBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7QUFGRjtBQUNBO0VBSUksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUxBO0VBV0ksZUFBQTtFQUNBLGtDQUFBO0FBSEo7QUFPQTtFQUVJLGdCQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWZvdW5kLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmcpO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4ubm90LWZvdW5kLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyb3ItY29kZSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktNTAwKSwgdmFyKC0tc2Vjb25kYXJ5LTUwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi5lcnJvci1hY3Rpb25zIHtcbiAgYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_not-found_not-found_component_ts.js.map